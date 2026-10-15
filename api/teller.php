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

const TOOLS = ['gravelbike-kiezer', 'bandenspanning-calculator', 'gravelwielen-kiezer', 'ultra-eventkiezer', 'profielsticker', 'kledingadvies', 'gravelbanden-kiezer', 'maatbepaler', 'paklijst-bikepacking', 'gravelroutes', 'versnellingscalculator', 'gravel-toertochten'];

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

// Buiten de webmap (httpdocs) als dat kan, anders in een afgeschermde map ernaast.
$buiten = dirname(__DIR__, 2);
// De testsite (test.gravelgorilla.nl) krijgt eigen bestanden, zodat testen de echte cijfers niet verandert.
$voor = preg_match('/^test\./i', $_SERVER['HTTP_HOST'] ?? '') ? 'gravelgorilla-test-' : 'gravelgorilla-';
$bestand = is_writable($buiten) ? $buiten . '/' . $voor . 'tellers.json' : __DIR__ . '/data/tellers.json';
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
/*
 * Gebruik (alleen voor de beheerder, niet zichtbaar op de site):
 * POST /api/teller.php?gebruik=<tool>&soort=gestart|stap
 *   gestart = iemand vult iets in of klikt iets aan in de tool (1x per bezoek aan de pagina)
 *   stap    = iemand klikt door naar een tool bij "Volgende stap"
 * Alleen totalen per tool; niets over de bezoeker. Lezen kan alleen via /beheer/ (met wachtwoord).
 */
if (isset($_GET['gebruik'])) {
  $tool = $_GET['gebruik'];
  $soort = $_GET['soort'] ?? '';
  if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !in_array($tool, TOOLS, true) || !in_array($soort, ['gestart', 'stap'], true)) {
    http_response_code(400); echo json_encode(['fout' => 'ongeldig']); exit;
  }
  $gebruikBestand = dirname($bestand) . '/' . (is_writable($buiten) ? $voor . 'gebruik.json' : 'gebruik.json');
  $gp = @fopen($gebruikBestand, 'c+');
  if (!$gp) { http_response_code(500); echo json_encode(['fout' => 'niet beschikbaar']); exit; }
  flock($gp, LOCK_EX);
  $g = json_decode(stream_get_contents($gp) ?: '{}', true);
  if (!is_array($g)) { $g = []; }
  if (empty($g['_sinds'])) { $g['_sinds'] = date('Y-m-d'); }
  $g[$tool][$soort] = (int)($g[$tool][$soort] ?? 0) + 1;
  ftruncate($gp, 0); rewind($gp); fwrite($gp, json_encode($g)); fflush($gp);
  flock($gp, LOCK_UN); fclose($gp);
  echo json_encode(['ok' => true]);
  exit;
}

if (isset($_GET['stemmen']) || isset($_GET['stem'])) {
  $stemBestand = dirname($bestand) . '/' . (is_writable($buiten) ? $voor . 'stemmen.json' : 'stemmen.json');
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
