# Zet de Profielsticker live als /tools/profielsticker/tool.html, met de kleuren van de site erbij.
#
# De broncode van de tool staat in inhoud/bron/profielsticker.html: dat is de enige plek waar de tool
# wordt aangepast (sinds oktober 2026, gebaseerd op profielsticker-v1.2.html). Daarin zitten o.a.:
#   - ondergrond ophalen via het eigen tussenstation /api/osm.php (met terugval op de openbare servers)
#   - duidelijkere meldingen als OpenStreetMap druk is
#   - posten verslepen in het hoogteprofiel
# Dit script voegt alleen de huisstijl toe (assets/css/profielsticker-huisstijl.css). Daarna: .claude/bouw-site.ps1
param(
  [string]$Bron = "$(Split-Path -Parent $PSScriptRoot)\inhoud\bron\profielsticker.html"
)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$html = [IO.File]::ReadAllText($Bron, [Text.Encoding]::UTF8)

$extra = '<link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">' +
         '<link rel="stylesheet" href="/assets/css/profielsticker-huisstijl.css"><meta name="robots" content="noindex">'
$i = $html.IndexOf('</head>')
if ($i -lt 0) { throw "Geen </head> gevonden in $Bron" }
$html = $html.Substring(0, $i) + $extra + "`n" + $html.Substring($i)

New-Item -ItemType Directory -Force "$root\tools\profielsticker" | Out-Null
[IO.File]::WriteAllText("$root\tools\profielsticker\tool.html", $html, (New-Object Text.UTF8Encoding $false))
"Klaar: tools/profielsticker/tool.html (draai daarna .claude/bouw-site.ps1)"
