<?php
/*
 * Gravel Gorilla — tussenstation voor OpenStreetMap (Overpass), gebruikt door de profielsticker.
 *
 * POST /api/osm.php  met  data=<overpass-vraag>
 *
 * Waarom: de openbare Overpass-servers willen weten wie er vraagt (een herkenbare naam met contactadres).
 * Een browser kan dat niet meesturen, deze server wel. Daarnaast onthouden we elk antwoord 30 dagen,
 * zodat een route die al eens is opgehaald altijd meteen klaarstaat, ook als OpenStreetMap druk is.
 *
 * Privacy: alleen de coördinaten uit de vraag gaan naar OpenStreetMap; niets over de bezoeker.
 * Alleen vragen in de vorm die de profielsticker gebruikt worden doorgegeven.
 */

const SERVERS = [
  'https://overpass-api.de/api/interpreter',
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
  'https://overpass.private.coffee/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
];
const NAAM = 'GravelGorilla/1.0 (+https://gravelgorilla.nl; info@gravelgorilla.nl) profielsticker';
const BEWAAR_DAGEN = 30;
const MAX_TIJD = 75;          // seconden voor alle pogingen samen
const PER_SERVER = 15;        // seconden per server

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');
@set_time_limit(MAX_TIJD + 15);

function stop($code, $tekst) { http_response_code($code); echo json_encode(['fout' => $tekst]); exit; }

if ($_SERVER['REQUEST_METHOD'] !== 'POST') stop(405, 'alleen POST');
$vraag = trim($_POST['data'] ?? '');

// Alleen de vraag van de profielsticker: wegen rond een lijst coördinaten.
if (strlen($vraag) > 200000 ||
    !preg_match('/^\[out:json\]\[timeout:\d{1,3}\];way\[highway\]\(around:\d{1,3},[0-9.,\-]+\);out body geom qt;$/', $vraag)) {
  stop(400, 'ongeldige vraag');
}

// Bewaarde antwoorden: buiten de webmap als dat kan.
$buiten = dirname(__DIR__, 2);
$map = (is_writable($buiten) ? $buiten . '/gravelgorilla-osm-cache' : __DIR__ . '/data/osm-cache');
if (!is_dir($map)) @mkdir($map, 0750, true);
$bestand = $map . '/' . md5($vraag) . '.json';

if (is_file($bestand) && filemtime($bestand) > time() - BEWAAR_DAGEN * 86400) {
  header('X-GG-Cache: bewaard');
  readfile($bestand);
  exit;
}

$start = time();
$laatste = 'geen server bereikbaar';
foreach (SERVERS as $server) {
  $over = MAX_TIJD - (time() - $start);
  if ($over < 5) break;
  $ch = curl_init($server);
  curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query(['data' => $vraag]),
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_USERAGENT => NAAM,
    CURLOPT_HTTPHEADER => ['Accept: application/json'],
    CURLOPT_CONNECTTIMEOUT => 8,
    CURLOPT_TIMEOUT => min(PER_SERVER, $over),
  ]);
  $antwoord = curl_exec($ch);
  $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $curlFout = curl_error($ch);
  curl_close($ch);

  if ($status === 200 && $antwoord !== false) {
    $data = json_decode($antwoord, true);
    // een antwoord met "remark" is meestal een time-out of overbelasting van de server: niet bewaren, volgende proberen
    if (is_array($data) && isset($data['elements']) && empty($data['remark'])) {
      @file_put_contents($bestand, $antwoord, LOCK_EX);
      header('X-GG-Cache: nieuw');
      echo $antwoord;
      exit;
    }
    $laatste = 'onvolledig antwoord';
  } else {
    $laatste = parse_url($server, PHP_URL_HOST) . ': ' . ($status ?: 'onbereikbaar') . ($curlFout ? ' (' . $curlFout . ')' : '');
  }
}

stop(503, 'OpenStreetMap is nu te druk (' . $laatste . ')');
