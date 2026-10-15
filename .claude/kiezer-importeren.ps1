# Zet een losse kiezer (gemaakt met de "gk-"-bouwstenen, zoals de Gravelbike Kiezer en de Gravelwielen Kiezer)
# om naar een bouwstuk voor de site:
#   inhoud/tools/<Naam>-tool.html + assets/css/<Naam>.css + assets/js/<Naam>.js
# Daarna maakt .claude/bouw-site.ps1 er de pagina /tools/<Naam>/ van.
# De logica en gegevens blijven ongemoeid; alleen kleuren en omlijsting worden aangepast.
#
# Voorbeelden:
#   .\kiezer-importeren.ps1 -Naam gravelbike-kiezer   -Bron "...\gravelbike-kiezer-v10.5.html"
#   .\kiezer-importeren.ps1 -Naam gravelwielen-kiezer -Bron "...\gravelwielen-kiezer-tool-v4.html"
param(
  [string]$Bron = "C:\Users\Geert\Claude\Projects\Gravelbike kiezer\gravelbike-kiezer-v10.5.html",
  [string]$Naam = "gravelbike-kiezer"
)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object Text.UTF8Encoding $false
$html = [IO.File]::ReadAllText($Bron, [Text.Encoding]::UTF8)

# ---------- 1. De delen eruit halen: alle opmaak, alle code en de inhoud ----------
$css    = ([regex]::Matches($html, '(?s)<style[^>]*>(.*?)</style>') | ForEach-Object { $_.Groups[1].Value }) -join "`n"
$script = ([regex]::Matches($html, '(?s)<script(?![^>]*\ssrc=)[^>]*>(.*?)</script>') | ForEach-Object { $_.Groups[1].Value.Trim() }) -join "`n;`n"
$body   = [regex]::Match($html, '(?s)<body[^>]*>(.*)</body>').Groups[1].Value
$body   = [regex]::Replace($body, '(?s)<(style|script)\b[^>]*>.*?</\1>', '')
if (-not $css -or -not $body -or -not $script) { throw "Kon style/body/script niet vinden in $Bron" }

# ---------- 2. CSS: losse regels voor body/html en alles (*) vervangen door regels binnen de kiezer ----------
$css = [regex]::Replace($css, '(?m)^\s*\*, \*::before, \*::after \{[^}]*\}\s*$', '    .gk-scope *, .gk-scope *::before, .gk-scope *::after { margin: 0; padding: 0; }')
$css = [regex]::Replace($css, '(?m)^\s*body \{[^}]*\}\s*$', '')
$css = [regex]::Replace($css, 'html,\s*body\s*\{[^}]*\}', '')

# ---------- 3. Kleuren omzetten naar de huisstijl (werkt ook in donkere modus) ----------
$kaart = [ordered]@{
  'var(--achtergrond)'      = @('ebedd7')
  'var(--vlak)'             = @('fffdf6')
  'var(--k-vlak2)'          = @('e0e0b4','f0f2df','fbfbf3','f6f7ea','eef0d8','f0f0e6')
  'var(--k-hover)'          = @('d5d59f','f6f4d8','e7ead0','eaf3ea')
  'var(--lijn)'             = @('d3d49f','cdd2a3','e3e4c4','d8dcb4','e8e9cf','f0f1de','ecedda','eceddd','c9cbb0','d8dabc','ead9a9','c9d498','eee')
  'var(--tekst)'            = @('2c2c1e','333','3c3e2a','555','3a4a32','4a4c33','4d5520')
  'var(--tekst-zacht)'      = @('5b5d40','888','666','8b8d6a','aaa','999','9a9c7a','b0b28a','c2b88a','8a8c6d','6b6d52','aeb094')
  'var(--actie)'            = @('e87b05','d99a1f')
  'var(--actie-hover)'      = @('c9690a')
  'var(--k-oranje-tekst)'   = @('b5640a','7a5410')
  'var(--k-oranje-lijn)'    = @('e0b35a')
  'var(--k-oranje-vlak)'    = @('fff3df','ffe9c8')
}
$regels = $css -split "`n"
for ($n = 0; $n -lt $regels.Count; $n++) {
  $r = $regels[$n]
  # witte vlakken worden 'vlak' (in donkere modus donker), witte tekst blijft wit
  $r = [regex]::Replace($r, '(?i)(background(-color)?\s*:\s*)#fff(fff)?(?![0-9a-f])', '${1}var(--vlak)')
  $r = [regex]::Replace($r, 'rgba\(255,\s*255,\s*255,\s*0\.97\)', 'var(--vlak)')
  foreach ($doel in $kaart.Keys) {
    foreach ($hex in $kaart[$doel]) {
      $r = [regex]::Replace($r, "(?i)#$hex(?![0-9a-f])", $doel)
    }
  }
  # op oranje knoppen donkere tekst, zoals in de rest van de site
  if ($r -match 'background:\s*var\(--actie(-hover)?\)') {
    $r = [regex]::Replace($r, '(?i)(?<![-\w])color:\s*#fff(?![0-9a-f])', 'color: #15181A')
  }
  $regels[$n] = $r
}
$css = $regels -join "`n"

$eigen = @'
/* =========================================================
   Gravelbike Kiezer — omgezet naar de Gravel Gorilla-huisstijl.
   Dit bestand wordt gemaakt door .claude/kiezer-importeren.ps1.
   Pas kleuren liever aan in het blok hieronder dan verderop.
   ========================================================= */
:root {
  --k-vlak2: #EFEBE1;
  --k-hover: #E6E0D2;
  --k-oranje-tekst: #B5500F;
  --k-oranje-lijn: #F2B48F;
  --k-oranje-vlak: #FFF0E6;
}
:root[data-thema="donker"] {
  --k-vlak2: #262B2E;
  --k-hover: #2E3438;
  --k-oranje-tekst: #FF8A50;
  --k-oranje-lijn: #7A3E22;
  --k-oranje-vlak: #2C211B;
}

'@

$slot = @'

/* ===================== Aanpassingen voor de site ===================== */
.gk-scope { font-family: var(--tekstfont); color: var(--tekst); }
.gk-scope button, .gk-scope input, .gk-scope select { font-family: inherit; }
.gk-wrap { max-width: 1240px; padding: 0 clamp(16px, 4vw, 40px) 100px; }
.gk-tab { font-family: var(--kopfont); text-transform: uppercase; letter-spacing: .03em; font-size: 17px; font-weight: 600; border-radius: 10px; }
.gk-tab.active { box-shadow: none; }
.gk-finder-intro, .gk-advice { border-radius: 20px; }
.gk-finder-intro h2, .gk-advice-head, .gk-top3-title { font-family: var(--kopfont); text-transform: uppercase; letter-spacing: .01em; }
.gk-finder-intro h2 { font-size: 30px; line-height: 1; margin-bottom: 8px; }
.gk-fstep, .gk-fcard, .gk-card, .gk-top3, .gk-filters-box, .gk-topbar, .gk-dealer, .gk-ai, .gk-fempty { border-radius: 18px; }
.gk-fstep-q { font-size: 17px; }
/* uitleg-ballonnetjes altijd donker */
.gk-pop-box { background: #15181A; color: #F4F1EA; }
.gk-pop-box::before { border-bottom-color: #15181A; }
:root[data-thema="donker"] .gk-pop-box { background: #2E3438; }
:root[data-thema="donker"] .gk-pop-box::before { border-bottom-color: #2E3438; }
/* productfoto's hebben een witte achtergrond: houd die wit, ook 's nachts */
.gk-thumb, .gk-live-thumb { background: #fff; border-radius: 10px; }
:root[data-thema="donker"] .gk-thumb { border-bottom-color: transparent; }
.gk-compare-btn.open { background: var(--actie-hover); }
.gk-f-kan .gk-fscore { background: #B5500F; }
.gk-live { top: 84px; }
:root[data-thema="donker"] .gk-card.ebike { border-color: #7A5A1A; }
:root[data-thema="donker"] td.gk-best { background: rgba(63,166,80,.18); }
'@

[IO.File]::WriteAllText("$root\assets\css\$Naam.css", $eigen + $css.Trim() + "`n" + $slot, $utf8)

# ---------- 3b. "Blog"-knopjes eruit: de blogs zijn van de site gehaald ----------
$body = [regex]::Replace($body, '(?s)\s*<span class="gk-blog"[^>]*>.*?</span></span></span>', '')

# ---------- 4. HTML: oude kopbalk eruit (de site heeft er al een) ----------
$body = [regex]::Replace($body, '(?s)\s*<div class="gk-header".*?</div>\s*</div>\s*(?=<nav class="gk-tabs")', "`n`n  ")

# ---------- 5. Script: kortere ondertitel ----------
$script = [regex]::Replace($script, '(?s)if\(sub\) sub\.textContent = `[^`]*`;', 'if(sub) sub.textContent = `${total} modellen van ${brands} merken, allemaal te koop in Nederland (incl. ${ebikeCount} e-gravelbikes). Bijgewerkt juni 2026.`;')
# ---------- 5b. Framematen: alleen "cm" achter echte centimetermaten (49, 52,5), niet achter lettermaten als 2XS ----------
$script = $script.Replace("(/^\d/.test(b.sizeList[0]) ? ' cm' : '')", "(/^\d+([.,]\d+)?$/.test(b.sizeList[0]) ? ' cm' : '')")
[IO.File]::WriteAllText("$root\assets\js\$Naam.js", "/* $Naam — gemaakt door .claude/kiezer-importeren.ps1 uit $(Split-Path -Leaf $Bron) */`n" + $script.Trim() + "`n", $utf8)

# ---------- 6. Het bouwstuk voor de pagina (de omlijsting maakt .claude/bouw-site.ps1) ----------
New-Item -ItemType Directory -Force "$root\inhoud\tools" | Out-Null
[IO.File]::WriteAllText("$root\inhoud\tools\$Naam-tool.html", $body.Trim() + "`n", $utf8)

"Klaar: inhoud/tools/$Naam-tool.html, assets/css/$Naam.css, assets/js/$Naam.js"
"Draai daarna .claude/bouw-site.ps1 om de pagina te maken."