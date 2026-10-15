<?php
/*
 * Gravel Gorilla — beheerpagina (alleen voor Geert)
 * Laat per tool zien: hoe vaak geopend, hoe vaak gestart, doorklikken naar "Volgende stap" en de stemmen.
 * Deze map hoort in Plesk een wachtwoord te hebben (Afgeschermde mappen → /beheer).
 * De cijfers staan buiten de webmap, net als bij api/teller.php (de testsite heeft eigen bestanden).
 */
header('Content-Type: text/html; charset=utf-8');
header('Cache-Control: no-store');
header('X-Robots-Tag: noindex, nofollow');

$buiten = dirname(__DIR__, 2);
$voor = preg_match('/^test\./i', $_SERVER['HTTP_HOST'] ?? '') ? 'gravelgorilla-test-' : 'gravelgorilla-';
function lees_json($pad) {
  if (!is_file($pad)) { return []; }
  $d = json_decode((string)@file_get_contents($pad), true);
  return is_array($d) ? $d : [];
}
function pad_voor($naam) {
  global $buiten, $voor;
  return is_writable($buiten) ? "$buiten/$voor$naam.json" : dirname(__DIR__) . "/api/data/$naam.json";
}
$tellers = lees_json(pad_voor('tellers'));
$stemmen = lees_json(pad_voor('stemmen'));
$gebruik = lees_json(pad_voor('gebruik'));
$aanmeldingen = array_reverse(lees_json(pad_voor('aanmeldingen'))); // nieuwste bovenaan
$sinds = $gebruik['_sinds'] ?? null;
unset($gebruik['_sinds']);

$tools = array_unique(array_merge(array_keys($tellers), array_keys($stemmen), array_keys($gebruik)));
$rijen = [];
foreach ($tools as $t) {
  $op = (int)($stemmen[$t]['op'] ?? 0); $neer = (int)($stemmen[$t]['neer'] ?? 0);
  $rijen[] = [
    'tool' => $t, 'geopend' => (int)($tellers[$t] ?? 0),
    'gestart' => (int)($gebruik[$t]['gestart'] ?? 0), 'stap' => (int)($gebruik[$t]['stap'] ?? 0),
    'op' => $op, 'neer' => $neer, 'score' => $op - $neer,
  ];
}
usort($rijen, fn($a, $b) => $b['geopend'] <=> $a['geopend']);
$totaal = ['geopend' => 0, 'gestart' => 0, 'stap' => 0, 'op' => 0, 'neer' => 0];
foreach ($rijen as $r) { foreach ($totaal as $k => $v) { $totaal[$k] += $r[$k]; } }

function h($s) { return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8'); }
function naam($slug) { return ucfirst(str_replace('-', ' ', $slug)); }
function getal($n) { return number_format($n, 0, ',', '.'); }
?>
<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex, nofollow">
  <title>Beheer | Gravel Gorilla</title>
  <style>
    :root { --bone: #F4F1EA; --ink: #15181A; --groen: #2F8F3E; --rood: #C93C3C; --lijn: #D9D3C5; --zacht: #5A5F5B; }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--bone); color: var(--ink); font: 16px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; }
    main { max-width: 1000px; margin: 0 auto; padding: 32px 16px 64px; }
    h1 { font-size: 1.8rem; margin: 0 0 4px; text-transform: uppercase; letter-spacing: .02em; }
    h1 span { color: var(--groen); }
    .uitleg { color: var(--zacht); margin: 0 0 24px; }
    .tabel { overflow-x: auto; border: 1px solid var(--lijn); border-radius: 12px; background: #fff; }
    table { width: 100%; border-collapse: collapse; min-width: 640px; }
    th, td { padding: 10px 12px; text-align: right; border-bottom: 1px solid var(--lijn); white-space: nowrap; }
    th:first-child, td:first-child { text-align: left; }
    th { font-size: .8rem; text-transform: uppercase; letter-spacing: .05em; color: var(--zacht); background: #FBF9F4; }
    tfoot td { font-weight: 700; border-bottom: 0; }
    .plus { color: var(--groen); font-weight: 700; }
    .min { color: var(--rood); font-weight: 700; }
    .klein { color: var(--zacht); font-size: .85rem; }
    dl { margin: 28px 0 0; display: grid; grid-template-columns: max-content 1fr; gap: 6px 16px; font-size: .95rem; }
    dt { font-weight: 700; }
    dd { margin: 0; color: var(--zacht); }
    h2 { font-size: 1.3rem; margin: 40px 0 4px; text-transform: uppercase; letter-spacing: .02em; }
    td a { color: var(--groen); }
    td { white-space: normal; vertical-align: top; }
  </style>
</head>
<body>
<main>
  <h1>Gravel Gorilla <span>beheer</span></h1>
  <p class="uitleg">Alleen voor jou. Cijfers per tool, de vaakst geopende bovenaan<?= $voor === 'gravelgorilla-test-' ? ' — <strong>dit zijn de cijfers van de testsite</strong>' : '' ?>.</p>
  <div class="tabel">
    <table>
      <thead><tr><th>Tool</th><th>Geopend</th><th>Gestart</th><th>% gestart</th><th>Volgende stap</th><th>▲</th><th>▼</th><th>Score</th></tr></thead>
      <tbody>
<?php foreach ($rijen as $r): ?>
        <tr>
          <td><?= h(naam($r['tool'])) ?></td>
          <td><?= getal($r['geopend']) ?></td>
          <td><?= getal($r['gestart']) ?></td>
          <td class="klein"><?= $r['geopend'] ? round($r['gestart'] / $r['geopend'] * 100) . '%' : '–' ?></td>
          <td><?= getal($r['stap']) ?></td>
          <td><?= getal($r['op']) ?></td>
          <td><?= getal($r['neer']) ?></td>
          <td class="<?= $r['score'] > 0 ? 'plus' : ($r['score'] < 0 ? 'min' : '') ?>"><?= $r['score'] > 0 ? '+' : '' ?><?= getal($r['score']) ?></td>
        </tr>
<?php endforeach; ?>
      </tbody>
      <tfoot><tr><td>Totaal</td><td><?= getal($totaal['geopend']) ?></td><td><?= getal($totaal['gestart']) ?></td><td class="klein"><?= $totaal['geopend'] ? round($totaal['gestart'] / $totaal['geopend'] * 100) . '%' : '–' ?></td><td><?= getal($totaal['stap']) ?></td><td><?= getal($totaal['op']) ?></td><td><?= getal($totaal['neer']) ?></td><td></td></tr></tfoot>
    </table>
  </div>
  <dl>
    <dt>Geopend</dt><dd>Hoe vaak de pagina van de tool is geopend (dit is het getal "× gebruikt" op de site).</dd>
    <dt>Gestart</dt><dd>Hoe vaak iemand echt iets invulde of aanklikte in de tool, één keer per bezoek<?= $sinds ? ' (gemeten sinds ' . h(date('j-n-Y', strtotime($sinds))) . ')' : ' (nog geen metingen)' ?>. Telt pas vanaf de start van deze meting, dus vergelijk het percentage pas als er een tijdje gemeten is.</dd>
    <dt>Volgende stap</dt><dd>Hoe vaak iemand vanaf deze tool doorklikte naar een tool bij "Volgende stap".</dd>
    <dt>▲ / ▼</dt><dd>Stemmen omhoog en omlaag. Een lage of negatieve score: die tool verdient aandacht.</dd>
  </dl>

  <h2>Aangemelde toertochten <span class="klein">(<?= count($aanmeldingen) ?>)</span></h2>
  <p class="uitleg">Via het formulier onder Gravel Toertochten. Niets staat vanzelf online: controleer de tocht en vraag Claude hem toe te voegen aan de kalender.</p>
<?php if (!$aanmeldingen): ?>
  <p class="klein">Nog geen aanmeldingen.</p>
<?php else: ?>
  <div class="tabel">
    <table>
      <thead><tr><th>Ontvangen</th><th>Tocht</th><th>Datum</th><th>Plaats</th><th>Afstanden</th><th>Aanmelder</th></tr></thead>
      <tbody>
<?php foreach ($aanmeldingen as $a): ?>
        <tr>
          <td class="klein"><?= h($a['ontvangen'] ?? '') ?></td>
          <td><a href="<?= h($a['website'] ?? '#') ?>" target="_blank" rel="noopener noreferrer"><?= h($a['naam'] ?? '') ?></a><?php if (!empty($a['opmerking'])): ?><br><span class="klein"><?= h($a['opmerking']) ?></span><?php endif; ?></td>
          <td><?= h($a['datum'] ?? '') ?></td>
          <td><?= h(($a['plaats'] ?? '') . ' (' . ($a['land'] ?? '') . ')') ?></td>
          <td><?= h($a['afstanden'] ?? '') ?></td>
          <td class="klein"><?= h($a['contact'] ?? '') ?><br><a href="mailto:<?= h($a['email'] ?? '') ?>"><?= h($a['email'] ?? '') ?></a></td>
        </tr>
<?php endforeach; ?>
      </tbody>
    </table>
  </div>
<?php endif; ?>
</main>
</body>
</html>
