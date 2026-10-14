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
