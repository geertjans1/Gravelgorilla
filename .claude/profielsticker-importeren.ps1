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
$i = $html.IndexOf('</head>')
if ($i -lt 0) { throw "Geen </head> gevonden in $Bron" }
$html = $html.Substring(0, $i) + $extra + "`n" + $html.Substring($i)
New-Item -ItemType Directory -Force "$root\tools\profielsticker" | Out-Null
[IO.File]::WriteAllText("$root\tools\profielsticker\tool.html", $html, (New-Object Text.UTF8Encoding $false))
"Klaar: tools/profielsticker/tool.html (draai daarna .claude/bouw-site.ps1)"
