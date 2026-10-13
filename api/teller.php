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

const TOOLS = ['gravelbike-kiezer', 'bandenspanning-calculator', 'gravelwielen-kiezer', 'ultra-eventkiezer', 'profielsticker'];

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
