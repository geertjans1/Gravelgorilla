<?php
/*
 * Gravel Gorilla — aanmelden van een gravel-toertocht (formulier onder de tool Gravel Toertochten)
 *
 * POST /api/aanmelden.php met de velden van het formulier → {"ok": true} of {"ok": false, "fout": "..."}
 *
 * De aanmelding wordt bewaard in een bestand buiten de webmap (net als de tellers) en staat op /beheer/.
 * Er gaat ook een mailtje naar info@gravelgorilla.nl. Niets komt vanzelf online: Geert (of Claude) controleert
 * de tocht eerst en zet hem dan in .claude/toertochten.tsv.
 * Bescherming tegen spam: een verborgen veld dat mensen leeg laten, een minimale invultijd en een maximum per dag.
 * Er wordt geen IP-adres opgeslagen.
 */
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex');

function antwoord($ok, $fout = '', $code = 200) {
  http_response_code($code);
  echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'fout' => $fout]);
  exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { antwoord(false, 'alleen POST', 405); }

$veld = function ($naam, $max) {
  $w = trim((string)($_POST[$naam] ?? ''));
  $w = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F]/u', '', $w);
  return mb_substr($w, 0, $max);
};
$a = [
  'naam' => $veld('naam', 120), 'datum' => $veld('datum', 10), 'plaats' => $veld('plaats', 80),
  'land' => $veld('land', 2), 'afstanden' => $veld('afstanden', 60), 'website' => $veld('website', 300),
  'contact' => $veld('contact', 80), 'email' => $veld('email', 120), 'opmerking' => $veld('opmerking', 1000),
  'taal' => $veld('taal', 2),
];

// spam: het verborgen veld moet leeg zijn en het invullen moet minstens 4 seconden duren
if ($veld('adres2', 50) !== '' || (int)($_POST['tijd'] ?? 0) < 4) { antwoord(true); }

if ($a['naam'] === '' || $a['plaats'] === '' || empty($_POST['akkoord'])) { antwoord(false, 'velden ontbreken', 400); }
if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $a['datum'])) { antwoord(false, 'datum', 400); }
if (!filter_var($a['email'], FILTER_VALIDATE_EMAIL)) { antwoord(false, 'e-mail', 400); }
if (!preg_match('~^https?://~i', $a['website'])) { $a['website'] = 'https://' . ltrim($a['website'], '/'); }
if (!filter_var($a['website'], FILTER_VALIDATE_URL)) { antwoord(false, 'website', 400); }
if (!in_array($a['land'], ['NL', 'BE', 'DE'], true)) { $a['land'] = 'NL'; }

// bewaren buiten de webmap; de testsite heeft een eigen bestand
$buiten = dirname(__DIR__, 2);
$voor = preg_match('/^test\./i', $_SERVER['HTTP_HOST'] ?? '') ? 'gravelgorilla-test-' : 'gravelgorilla-';
$bestand = is_writable($buiten) ? "$buiten/{$voor}aanmeldingen.json" : __DIR__ . '/data/aanmeldingen.json';
if (!is_dir(dirname($bestand))) { @mkdir(dirname($bestand), 0750, true); }
$fp = @fopen($bestand, 'c+');
if (!$fp) { antwoord(false, 'opslaan lukt niet', 500); }
flock($fp, LOCK_EX);
$lijst = json_decode(stream_get_contents($fp) ?: '[]', true);
if (!is_array($lijst)) { $lijst = []; }
$vandaag = date('Y-m-d');
$vandaagAantal = count(array_filter($lijst, fn($x) => substr($x['ontvangen'] ?? '', 0, 10) === $vandaag));
if ($vandaagAantal >= 30) { flock($fp, LOCK_UN); fclose($fp); antwoord(false, 'te veel aanmeldingen vandaag', 429); }
$a['ontvangen'] = date('Y-m-d H:i');
$lijst[] = $a;
ftruncate($fp, 0); rewind($fp); fwrite($fp, json_encode($lijst, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT)); fflush($fp);
flock($fp, LOCK_UN); fclose($fp);

// een mailtje naar Gravel Gorilla (lukt dat niet, dan staat de aanmelding toch op /beheer/)
$onderwerp = 'Nieuwe gravel-toertocht aangemeld: ' . $a['naam'];
$tekst = "Er is een gravel-toertocht aangemeld via gravelgorilla.nl" . ($voor === 'gravelgorilla-test-' ? ' (TESTSITE)' : '') . ":\n\n";
foreach (['naam' => 'Tocht', 'datum' => 'Datum', 'plaats' => 'Startplaats', 'land' => 'Land', 'afstanden' => 'Afstanden', 'website' => 'Website', 'contact' => 'Naam aanmelder', 'email' => 'E-mail', 'opmerking' => 'Opmerking'] as $k => $label) {
  $tekst .= str_pad($label . ':', 17) . $a[$k] . "\n";
}
$tekst .= "\nAlle aanmeldingen: https://gravelgorilla.nl/beheer/\n";
$kop = "From: Gravel Gorilla <info@gravelgorilla.nl>\r\nReply-To: " . str_replace(["\r", "\n"], '', $a['email']) . "\r\nContent-Type: text/plain; charset=utf-8";
@mail('info@gravelgorilla.nl', '=?UTF-8?B?' . base64_encode($onderwerp) . '?=', $tekst, $kop);

antwoord(true);
