<?php
/*
 * Gravel Gorilla — gebruiksteller voor de tools
 *
 * GET  /api/teller.php             → geeft de stand van alle tools: {"gravelbike-kiezer": 128, ...}
 * POST /api/teller.php?tool=<naam> → telt 1 op voor die tool en geeft de nieuwe stand: {"tool": "...", "aantal": 129}
 *
 * Privacy: er wordt niets over de bezoeker opgeslagen (geen IP-adres, geen cookies). Alleen het aantal per tool.
 * De standen staan in een bestand buiten de webmap, zodat een nieuwe versie van de site ze niet overschrijft.
 */

const TOOLS = ['gravelbike-kiezer', 'bandenspanning-calculator', 'gravelwielen-kiezer', 'ultra-eventkiezer', 'profielsticker', 'kledingadvies', 'gravelbanden-kiezer', 'maatbepaler', 'paklijst-bikepacking', 'gravelroutes', 'versnellingscalculator'];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

// Buiten de webmap (httpdocs) als dat kan, anders in een afgeschermde map ernaast.
$buiten = dirname(__DIR__, 2);
$bestand = is_writable($buiten) ? $buiten . '/gravelgorilla-tellers.json' : __DIR__ . '/data/tellers.json';
if (!is_dir(dirname($bestand))) { @mkdir(dirname($bestand), 0750, true); }

function lees_stand($fp) {
  rewind($fp);
  $tekst = stream_get_contents($fp);
  $stand = json_decode($tekst ?: '{}', true);
  if (!is_array($stand)) { $stand = []; }
  foreach (TOOLS as $t) { $stand[$t] = (int)($stand[$t] ?? 0); }
  return $stand;
}

/*
 * Stemmen (duim omhoog / omlaag per tool), net als bij Reddit:
 * GET  /api/teller.php?stemmen                      → {"gravelbike-kiezer": {"op": 12, "neer": 2}, ...}
 * POST /api/teller.php?stem=<tool>&nu=op|neer|geen&was=op|neer|geen
 *      → haalt de oude stem van deze bezoeker weg en telt de nieuwe mee; geeft {"op": .., "neer": ..} terug.
 * Wie wat heeft gestemd wordt niet opgeslagen; de browser van de bezoeker onthoudt zelf zijn eigen stem.
 */
if (isset($_GET['stemmen']) || isset($_GET['stem'])) {
  $stemBestand = dirname($bestand) . '/' . (is_writable($buiten) ? 'gravelgorilla-stemmen.json' : 'stemmen.json');
  $sp = @fopen($stemBestand, 'c+');
  if (!$sp) { http_response_code(500); echo json_encode(['fout' => 'stemmen niet beschikbaar']); exit; }
  $leesStemmen = function () use ($sp) {
    rewind($sp);
    $s = json_decode(stream_get_contents($sp) ?: '{}', true);
    if (!is_array($s)) { $s = []; }
    foreach (TOOLS as $t) { $s[$t] = ['op' => (int)($s[$t]['op'] ?? 0), 'neer' => (int)($s[$t]['neer'] ?? 0)]; }
    return $s;
  };
  if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['stem'])) {
    $tool = $_GET['stem'];
    $nu = $_GET['nu'] ?? 'geen';
    $was = $_GET['was'] ?? 'geen';
    $keuzes = ['op', 'neer', 'geen'];
    if (!in_array($tool, TOOLS, true) || !in_array($nu, $keuzes, true) || !in_array($was, $keuzes, true)) { http_response_code(400); echo json_encode(['fout' => 'ongeldige stem']); exit; }
    flock($sp, LOCK_EX);
    $s = $leesStemmen();
    if ($was !== 'geen') { $s[$tool][$was] = max(0, $s[$tool][$was] - 1); }
    if ($nu !== 'geen') { $s[$tool][$nu]++; }
    ftruncate($sp, 0); rewind($sp); fwrite($sp, json_encode($s)); fflush($sp);
    flock($sp, LOCK_UN);
    echo json_encode($s[$tool]);
  } else {
    flock($sp, LOCK_SH); $s = $leesStemmen(); flock($sp, LOCK_UN);
    echo json_encode($s);
  }
  fclose($sp);
  exit;
}

$fp = @fopen($bestand, 'c+');
if (!$fp) { http_response_code(500); echo json_encode(['fout' => 'teller niet beschikbaar']); exit; }

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $tool = $_GET['tool'] ?? '';
  if (!in_array($tool, TOOLS, true)) { http_response_code(400); echo json_encode(['fout' => 'onbekende tool']); exit; }
  flock($fp, LOCK_EX);                       // één tegelijk, zodat er geen tellingen verloren gaan
  $stand = lees_stand($fp);
  $stand[$tool]++;
  ftruncate($fp, 0);
  rewind($fp);
  fwrite($fp, json_encode($stand));
  fflush($fp);
  flock($fp, LOCK_UN);
  echo json_encode(['tool' => $tool, 'aantal' => $stand[$tool]]);
} else {
  flock($fp, LOCK_SH);
  $stand = lees_stand($fp);
  flock($fp, LOCK_UN);
  echo json_encode($stand);
}
fclose($fp);
