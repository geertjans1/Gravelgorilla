# Zet de Profielsticker (los HTML-bestand) als tool.html op /tools/profielsticker/,
# met de kleuren van de site erbij (assets/css/profielsticker-huisstijl.css).
# De tool zelf blijft ongewijzigd: hij draait in een venster op de pagina.
param(
  [string]$Bron = "$(Split-Path -Parent $PSScriptRoot)\inhoud\bron\profielsticker-origineel.html"
)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$html = [IO.File]::ReadAllText($Bron, [Text.Encoding]::UTF8)
$extra = '<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">' +
         '<link rel="stylesheet" href="/assets/css/profielsticker-huisstijl.css"><meta name="robots" content="noindex">'
# ---------- Ondergrond ophalen betrouwbaarder maken ----------
# 1. eerst ons eigen tussenstation (/api/osm.php): stuurt een herkenbare naam mee en onthoudt routes 30 dagen
# 2. daarna rechtstreeks de openbare servers, met een extra reserveserver en sneller opgeven per server
# 3. duidelijkere melding als het echt niet lukt
$aanpassingen = [ordered]@{
  "const OVERPASS_URLS = [`n  'https://overpass-api.de/api/interpreter'," =
    "const OVERPASS_URLS = [`n  '/api/osm.php',`n  'https://overpass-api.de/api/interpreter',`n  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',"
  "const tm = setTimeout(() => ctl.abort(), 45000);" =
    "const tm = setTimeout(() => ctl.abort(), idx === 0 ? 110000 : 20000); // eigen tussenstation probeert zelf meerdere servers"
  "if (/bezet|429|50\d/.test(m)) return 'de kaartservers zijn nu erg druk';" =
    "if (/bezet|429|50\d|abort|afgebroken|time/i.test(m)) return 'de kaartservers van OpenStreetMap zijn nu erg druk';"
  "De ondergrond is niet veranderd. Probeer het zo nog eens, of teken hem zelf.';" =
    "De ondergrond is niet veranderd. Probeer het over een kwartiertje nog eens, of teken hem zelf: kies hieronder asfalt, gravel of zand en sleep over de balk.';"
}
# ---------- Posten verslepen in het profiel ----------
# 1. het genummerde rondje van een post wordt een handvat (met een ruimer vlak om te pakken)
$aanpassingen[@'
    s += '<path d="M' + x.toFixed(1) + ' 20V' + H1 + '" stroke="#45484d" stroke-width="1" stroke-dasharray="3 3"/>';
    s += '<circle cx="' + x.toFixed(1) + '" cy="11" r="9" fill="#16181a"/>';
    s += '<text x="' + x.toFixed(1) + '" y="15" font-size="12" font-weight="700" fill="#fff" text-anchor="middle">' + (i + 1) + '</text>';
'@] = @'
    const sleept = S.drag && S.drag.id === p.id;
    s += '<path d="M' + x.toFixed(1) + ' 20V' + H1 + '" stroke="' + (sleept ? '#e87b05' : '#45484d') + '" stroke-width="' + (sleept ? 2 : 1) + '" stroke-dasharray="3 3" pointer-events="none"/>';
    s += '<g class="ps-post-grip" data-id="' + p.id + '" style="cursor:ew-resize;touch-action:none"><title>Sleep om post ' + (i + 1) + ' te verplaatsen</title>';
    s += '<rect x="' + (x - 16).toFixed(1) + '" y="0" width="32" height="26" fill="transparent"/>';
    s += '<circle cx="' + x.toFixed(1) + '" cy="11" r="' + (sleept ? 11 : 9) + '" fill="' + (sleept ? '#e87b05' : '#16181a') + '"/>';
    s += '<text x="' + x.toFixed(1) + '" y="15" font-size="12" font-weight="700" fill="#fff" text-anchor="middle" pointer-events="none">' + (i + 1) + '</text></g>';
'@
# 2. pakken
$aanpassingen[@'
  chart.addEventListener('pointerdown', e => {
    if (!S.route || !S.geo) return;
    const km = evtKm(e);
'@] = @'
  chart.addEventListener('pointerdown', e => {
    if (!S.route || !S.geo) return;
    const grip = e.target.closest ? e.target.closest('.ps-post-grip') : null;
    if (grip) {
      const p = postById(grip.dataset.id);
      if (p) {
        e.preventDefault();
        try { chart.setPointerCapture(e.pointerId); } catch (er) { }
        S.drag = { id: p.id, pid: e.pointerId, km0: p.km };
        S.cursorKm = p.km; S.cursorPinned = true; renderEditor();
        return;
      }
    }
    const km = evtKm(e);
'@
# 3. slepen
$aanpassingen[@'
  chart.addEventListener('pointermove', e => {
    if (!S.route || !S.geo) return;
    const km = evtKm(e);
'@] = @'
  chart.addEventListener('pointermove', e => {
    if (!S.route || !S.geo) return;
    if (S.drag && e.pointerId === S.drag.pid) {
      const p = postById(S.drag.id);
      if (p) {
        const nieuwKm = Math.round(evtKm(e) * 10) / 10;
        if (!isFinite(nieuwKm)) return; // profiel niet zichtbaar: post laten staan
        p.km = nieuwKm;
        S.cursorKm = p.km;
        if (!S.dragRaf) S.dragRaf = requestAnimationFrame(() => { S.dragRaf = null; renderEditor(); });
      }
      return;
    }
    const km = evtKm(e);
'@
# 4. loslaten: alles opnieuw uitrekenen
$aanpassingen[@'
  const endPaint = e => {
'@] = @'
  const endPaint = e => {
    if (S.drag && e.pointerId === S.drag.pid) {
      const p = postById(S.drag.id), km0 = S.drag.km0;
      S.drag = null;
      if (S.dragRaf) { cancelAnimationFrame(S.dragRaf); S.dragRaf = null; }
      if (p) {
        S.posts.sort((a, b) => a.km - b.km);
        renderPosts();
        recompute();
        if (Math.abs(p.km - km0) >= 0.05) postsStatus('Post “' + p.name + '” verplaatst naar km ' + fmtKm(p.km, 1) + '.');
        else renderEditor();
      }
      return;
    }
'@
# 5. uitleg boven het profiel
$aanpassingen['om de kilometer te zien en daar een post neer te zetten.</li>'] = 'om de kilometer te zien en daar een post neer te zetten. Een post verplaatsen? Sleep het genummerde rondje naar links of rechts.</li>'

foreach ($oud in $aanpassingen.Keys) {
  $zoek = $oud -replace "`n", "`r`n"
  if ($html.Contains($oud)) { $html = $html.Replace($oud, $aanpassingen[$oud]) }
  elseif ($html.Contains($zoek)) { $html = $html.Replace($zoek, ($aanpassingen[$oud] -replace "`n", "`r`n")) }
  else { throw "Aanpassing niet gevonden in de tool (nieuwe versie?): $($oud.Substring(0, [Math]::Min(60, $oud.Length)))" }
}

$i = $html.IndexOf('</head>')
if ($i -lt 0) { throw "Geen </head> gevonden in $Bron" }
$html = $html.Substring(0, $i) + $extra + "`n" + $html.Substring($i)
New-Item -ItemType Directory -Force "$root\tools\profielsticker" | Out-Null
[IO.File]::WriteAllText("$root\tools\profielsticker\tool.html", $html, (New-Object Text.UTF8Encoding $false))
"Klaar: tools/profielsticker/tool.html (draai daarna .claude/bouw-site.ps1)"
