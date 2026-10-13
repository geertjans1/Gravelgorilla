# Zet de Ultra-eventkiezer (los HTML-bestand) om naar een bouwstuk voor de site, in de huisstijl en met donkere modus:
#   inhoud/tools/ultra-eventkiezer-tool.html + assets/css/ultra-eventkiezer.css + assets/js/ultra-eventkiezer.js
# Alle opmaak wordt "binnen de kiezer" gezet (.ue-scope), zodat hij niets van de rest van de site verandert.
# Daarna: .claude/bouw-site.ps1 draaien.
param(
  [string]$Bron = "$(Split-Path -Parent $PSScriptRoot)\inhoud\bron\ultra-eventkiezer-origineel.html"
)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object Text.UTF8Encoding $false
$html = [IO.File]::ReadAllText($Bron, [Text.Encoding]::UTF8)

$css    = ([regex]::Matches($html, '(?s)<style[^>]*>(.*?)</style>') | ForEach-Object { $_.Groups[1].Value }) -join "`n"
$script = ([regex]::Matches($html, '(?s)<script(?![^>]*\ssrc=)[^>]*>(.*?)</script>') | ForEach-Object { $_.Groups[1].Value.Trim() }) -join "`n;`n"
$body   = [regex]::Match($html, '(?s)<body[^>]*>(.*)</body>').Groups[1].Value
$body   = [regex]::Replace($body, '(?s)<(style|script)\b[^>]*>.*?</\1>', '')

# ---------- HTML: <main> in <main> mag niet, en de grote titel heeft de pagina al ----------
$body = $body -replace '<main class="grid" id="grid"></main>', '<div class="grid" id="grid"></div>'
$body = [regex]::Replace($body, '(?s)\s*<div class="kicker">.*?</div>\s*<h1>.*?</h1>', '')
$body = $body -replace '<header class="hero">', '<div class="hero">' -replace '</header>', '</div>'
$body = $body -replace '<footer>', '<div class="bronnen">' -replace '</footer>', '</div>'

# ---------- CSS: eigen kleuren eruit, opmaak binnen .ue-scope ----------
$css = [regex]::Replace($css, '(?s)/\*.*?\*/', '')
$css = [regex]::Replace($css, '(?s):root\s*\{.*?\}', '')
$css = [regex]::Replace($css, 'html,\s*body\s*\{[^}]*\}', '')
$css = $css -replace '\bfooter\{', '.bronnen{' -replace '\bfooter a', '.bronnen a'
$css = $css -replace "font-family:'Arial Narrow','Avenir Next Condensed','Segoe UI',Arial,sans-serif", 'font-family:var(--kopfont)'
$css = $css -replace "font-family:'Inter',-apple-system,'Segoe UI',Roboto,sans-serif;", ''

# vaste kleuren naar de huisstijl (werkt ook in donkere modus)
$kleuren = [ordered]@{
  'background:#fff'      = 'background:var(--vlak)'
  'background:#eceae4'   = 'background:var(--achtergrond-2)'
  'background:#f1eee6'   = 'background:var(--achtergrond-2)'
  'color:#4d463b'        = 'color:var(--tekst)'
  'color:#5d5546'        = 'color:var(--tekst-zacht)'
  'color:#6b6250'        = 'color:var(--tekst-zacht)'
  'color:#8b8577'        = 'color:var(--tekst-zacht)'
  'border-color:#c9b99a' = 'border-color:var(--tekst-zacht)'
  '#cfc6b2'              = 'var(--lijn)'
  'color:#b0672e'        = 'color:var(--k-oranje)'
}
foreach ($k in $kleuren.Keys) { $css = $css.Replace($k, $kleuren[$k]) }
# donkere knopjes ("aan") krijgen tekst in de achtergrondkleur, zodat ze in licht én donker leesbaar zijn
$css = $css.Replace('.chip.on{background:var(--ink);color:#fff', '.chip.on{background:var(--ink);color:var(--achtergrond)')
$css = $css.Replace('.numchip{background:var(--ink);color:#fff', '.numchip{background:var(--ink);color:var(--achtergrond)')
$css = $css.Replace('.chip.on.acc{background:var(--accent);border-color:var(--accent)}', '.chip.on.acc{background:var(--groen);border-color:var(--groen);color:#fff}')

# elke regel binnen .ue-scope zetten
$css = [regex]::Replace($css, '(^|\}|\{)(\s*)([^{}@;][^{}@;]*?)\{', [Text.RegularExpressions.MatchEvaluator]{
  param($m)
  $sels = $m.Groups[3].Value -split ',' | ForEach-Object {
    $s = $_.Trim()
    if ($s -eq '*') { '.ue-scope *' }
    elseif ($s -eq 'body') { '.ue-scope' }
    else { ".ue-scope $s" }
  }
  $m.Groups[1].Value + $m.Groups[2].Value + ($sels -join ',') + '{'
})

$kop = @'
/* =========================================================
   Ultra-eventkiezer — omgezet naar de Gravel Gorilla-huisstijl.
   Dit bestand wordt gemaakt door .claude/ultra-importeren.ps1.
   ========================================================= */
.ue-scope {
  --bg: var(--achtergrond); --card: var(--vlak); --ink: var(--tekst); --muted: var(--tekst-zacht); --line: var(--lijn);
  --accent: var(--groen-tekst); --accent-soft: #E3F0E5; --dark: var(--diepgroen); --cream: #F4F1EA;
  --road-bg: #E9EDFA; --road-tx: #3B4F9E; --mix-bg: #E2F2EE; --mix-tx: #0D6A5C; --dirt-bg: #F7E9DC; --dirt-tx: #A3520E;
  --k-oranje: #B5500F; --r: 18px;
}
:root[data-thema="donker"] .ue-scope {
  --accent-soft: #1F3A26; --k-oranje: #FF8A50;
  --road-bg: #232A44; --road-tx: #A9B8F0; --mix-bg: #183530; --mix-tx: #8FD9C8; --dirt-bg: #3A2A1C; --dirt-tx: #F0B07A;
}
'@
$slot = @'

/* ---------- Aanpassingen voor de site ---------- */
.ue-scope { font-family: var(--tekstfont); color: var(--ink); line-height: 1.5; }
.ue-scope .wrap { padding: 0 clamp(16px, 4vw, 40px) 100px; }
.ue-scope .hero { border-radius: 22px; padding: 30px 34px; }
.ue-scope .hero p.sub { margin-top: 0; color: rgba(244,241,234,.75); }
.ue-scope .panel, .ue-scope .cardE { box-shadow: none; }
.ue-scope .controls input[type=search], .ue-scope .controls select { background: var(--vlak); color: var(--ink); }
.ue-scope .cardE .foot a { color: var(--groen-tekst); }
.ue-scope .datebadge.y27 { background: var(--achtergrond-2); color: var(--tekst-zacht); }
.ue-scope .tag.fmt.sup { background: var(--achtergrond-2); color: var(--tekst); }
.ue-scope .bronnen { margin-top: 44px; }
'@
[IO.File]::WriteAllText("$root\assets\css\ultra-eventkiezer.css", $kop + $css.Trim() + "`n" + $slot, $utf8)
[IO.File]::WriteAllText("$root\assets\js\ultra-eventkiezer.js", "/* ultra-eventkiezer — gemaakt door .claude/ultra-importeren.ps1 */`n" + $script.Trim() + "`n", $utf8)
[IO.File]::WriteAllText("$root\inhoud\tools\ultra-eventkiezer-tool.html", $body.Trim() + "`n", $utf8)
"Klaar: inhoud/tools/ultra-eventkiezer-tool.html, assets/css/ultra-eventkiezer.css, assets/js/ultra-eventkiezer.js"
