# Zet een losse versie van de Gravelbike Kiezer (bijv. gravelbike-kiezer-v10.5.html)
# om naar een pagina in de site: kiezer/index.html + assets/css/kiezer.css + assets/js/kiezer.js
# De logica en fietsgegevens blijven ongemoeid; alleen kleuren en omlijsting worden aangepast.
param(
  [string]$Bron = "C:\Users\Geert\Claude\Projects\Gravelbike kiezer\gravelbike-kiezer-v10.5.html"
)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object Text.UTF8Encoding $false
$html = [IO.File]::ReadAllText($Bron, [Text.Encoding]::UTF8)

# ---------- 1. De drie delen eruit halen ----------
$css    = [regex]::Match($html, '(?s)<style>(.*?)</style>').Groups[1].Value
$body   = [regex]::Match($html, '(?s)<body>(.*?)<script>').Groups[1].Value
$script = [regex]::Match($html, '(?s)<script>(.*)</script>\s*</body>').Groups[1].Value
if (-not $css -or -not $body -or -not $script) { throw "Kon style/body/script niet vinden in $Bron" }

# ---------- 2. CSS: losse regels voor body en alles (*) vervangen door regels binnen de kiezer ----------
$css = [regex]::Replace($css, '(?m)^\s*\*, \*::before, \*::after \{[^}]*\}\s*$', '    .gk-scope *, .gk-scope *::before, .gk-scope *::after { margin: 0; padding: 0; }')
$css = [regex]::Replace($css, '(?m)^\s*body \{[^}]*\}\s*$', '')

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

/* Kop van de pagina */
.kiezer-kop { max-width: 1240px; margin: 0 auto; padding: 120px clamp(16px, 4vw, 40px) 36px; }
.kiezer-terug { display: inline-block; font-weight: 600; font-size: .95rem; color: var(--tekst-zacht); margin-bottom: 26px; transition: color .2s; }
.kiezer-terug:hover { color: var(--groen-tekst); }
.kiezer-km { font-family: var(--kopfont); font-weight: 500; letter-spacing: .05em; color: var(--tekst-zacht); margin-bottom: 8px; }
.kiezer-sub { max-width: 40em; margin-top: 20px; color: var(--tekst-zacht); font-size: 1.05rem; }
'@

[IO.File]::WriteAllText("$root\assets\css\kiezer.css", $eigen + $css.Trim() + "`n" + $slot, $utf8)

# ---------- 4. HTML: oude kopbalk eruit (de site heeft er al een) ----------
$body = [regex]::Replace($body, '(?s)\s*<div class="gk-header".*?</div>\s*</div>\s*(?=<nav class="gk-tabs")', "`n`n  ")

# ---------- 5. Script: kortere ondertitel ----------
$script = [regex]::Replace($script, '(?s)if\(sub\) sub\.textContent = `[^`]*`;', 'if(sub) sub.textContent = `${total} modellen van ${brands} merken, allemaal te koop in Nederland (incl. ${ebikeCount} e-gravelbikes). Bijgewerkt juni 2026.`;')
[IO.File]::WriteAllText("$root\assets\js\kiezer.js", "/* Gravelbike Kiezer — gemaakt door .claude/kiezer-importeren.ps1 uit $(Split-Path -Leaf $Bron) */`n" + $script.Trim() + "`n", $utf8)

# ---------- 6. De pagina zelf ----------
$pagina = @'
<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gravelbike Kiezer — Gravel Gorilla</title>
  <meta name="description" content="Vind in vijf korte vragen de gravelbike die bij je past. Eerlijke Match Score, met de redenen erbij. Gratis en onafhankelijk.">
  <link rel="icon" href="../assets/img/logo-icon.svg" type="image/svg+xml">
  <script>
    (function () {
      var t = null;
      try { t = localStorage.getItem("gg-thema"); } catch (e) {}
      if (!t) t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "donker" : "licht";
      document.documentElement.setAttribute("data-thema", t);
    })();
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../assets/css/style.css">
  <link rel="stylesheet" href="../assets/css/kiezer.css">
</head>
<body>

  <header class="bar" id="bar">
    <a href="../" class="brand" aria-label="Gravel Gorilla, naar de homepage">
      <img src="../assets/img/logo-icon.svg" alt="" width="36" height="36">
      <span class="brand__word">Gravel <b>Gorilla</b></span>
    </a>
    <nav class="bar__links" aria-label="Hoofdmenu">
      <a href="../#wegwijzer">Wegwijzer</a>
      <a href="../#tips">Gorilla-tips</a>
      <a href="../#notities">Veldnotities</a>
    </nav>
    <button class="thema-knop" id="themaKnop" type="button" aria-label="Donkere modus aan of uit" title="Nachtrit aan/uit">
      <svg class="icon-zon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></g></svg>
      <svg class="icon-maan" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
    </button>
    <button class="bar__menu" aria-label="Menu openen" aria-expanded="false"><span></span><span></span></button>
  </header>

  <main class="gk-scope">
    <section class="kiezer-kop">
      <a href="../#wegwijzer" class="kiezer-terug">← Terug naar de wegwijzer</a>
      <p class="kiezer-km">KM 01</p>
      <h1 class="kop-l">Gravelbike <span class="groen">Kiezer</span></h1>
      <p class="kiezer-sub" id="gk-sub-text">Vind de gravelbike die bij je past.</p>
    </section>
<!--BODY-->
  </main>

  <footer class="voet">
    <div class="voet__band" aria-hidden="true"></div>
    <div class="voet__binnen">
      <p class="voet__slot">De gorilla wijst de weg.<br>Jij rijdt.</p>
      <nav aria-label="Voet">
        <a href="../#wegwijzer">Wegwijzer</a><a href="../#notities">Veldnotities</a><a href="/contact/">Contact</a>
      </nav>
    </div>
    <p class="voet__woord" aria-hidden="true">Gravel Gorilla</p>
    <p class="voet__klein">© 2026 Gravel Gorilla · onafhankelijk gemaakt door een gravelliefhebber</p>
  </footer>

  <script src="../assets/js/site.js"></script>
  <script src="../assets/js/kiezer.js"></script>
</body>
</html>
'@
New-Item -ItemType Directory -Force "$root\kiezer" | Out-Null
[IO.File]::WriteAllText("$root\kiezer\index.html", $pagina.Replace('<!--BODY-->', $body.TrimEnd()), $utf8)

"Klaar: kiezer/index.html, assets/css/kiezer.css, assets/js/kiezer.js"
"Overgebleven oude kleuren in CSS:"
([regex]::Matches($css, '#[0-9a-fA-F]{3,6}\b') | ForEach-Object { $_.Value.ToLower() } | Group-Object | Sort-Object Count -Descending | ForEach-Object { "$($_.Count)x $($_.Name)" }) -join ", "
