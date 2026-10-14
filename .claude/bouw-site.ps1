# Bouwt alle vervolgpagina's van de site uit de map inhoud/:
#   /tools/<naam>/ (alle tools), /over-ons/, /contact/, de wegwijzer en het schema op de homepage, llms.txt,
#   404.html, sitemap.xml, robots.txt, .htaccess. (De blogs zijn in oktober 2026 verwijderd.)
# Opnieuw draaien kan altijd: alle pagina's worden dan opnieuw gemaakt.
param(
  [string]$ContactMail = "info@gravelgorilla.nl"
)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object Text.UTF8Encoding $false
$site = "https://gravelgorilla.nl"

function Html([string]$s) { [Net.WebUtility]::HtmlEncode($s) }
function Datum([string]$iso) { $d = [datetime]::ParseExact($iso, 'yyyy-MM-dd', $null); "$($d.Day) $($maanden[$d.Month - 1]) $($d.Year)" }
function Lees([string]$pad) { [IO.File]::ReadAllText("$root\$pad", [Text.Encoding]::UTF8) }
function Schrijf([string]$pad, [string]$inhoud) {
  $vol = Join-Path $root $pad
  New-Item -ItemType Directory -Force (Split-Path $vol) | Out-Null
  [IO.File]::WriteAllText($vol, $inhoud, $utf8)
}

# ---------- Gedeelde stukken: kop, bovenbalk en voet ----------
# Gestructureerde informatie (schema.org) voor Google en AI-zoekmachines
function JsonLd($obj) { '  <script type="application/ld+json">' + (ConvertTo-Json $obj -Depth 12 -Compress) + '</script>' }
$organisatie = [ordered]@{ '@type' = 'Organization'; '@id' = "$site/#organisatie"; name = 'Gravel Gorilla'; url = "$site/"
  logo = "$site/assets/img/icon-192.png"; email = 'info@gravelgorilla.nl'
  founder = [ordered]@{ '@type' = 'Person'; '@id' = "$site/over-ons/#geert"; name = 'Geert Jans'; url = "$site/over-ons/" }
  description = 'Onafhankelijke Nederlandse website met gratis tools voor gravelrijders: gravelbike kiezen, gravelbanden, bandenspanning, wielen, ultra-events, profielstickers en kledingadvies.' }

function Kop([string]$titel, [string]$beschrijving, [string]$pad, [string[]]$css = @(), [string]$beeld = "", [string]$soort = "website", [string]$schema = "") {
  $extraCss = ($css | ForEach-Object { "  <link rel=""stylesheet"" href=""/assets/css/$_"">" }) -join "`n"
  $ogBeeld = if ($beeld) { "$site$beeld" } else { "$site/assets/img/deelplaatje.png" }
@"
<!doctype html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#F4F1EA" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#15181A" media="(prefers-color-scheme: dark)">
  <title>$(Html $titel)</title>
  <meta name="description" content="$(Html $beschrijving)">
  <link rel="canonical" href="$site$pad">
  <meta property="og:type" content="$soort">
  <meta property="og:title" content="$(Html $titel)">
  <meta property="og:description" content="$(Html $beschrijving)">
  <meta property="og:url" content="$site$pad">
  <meta property="og:image" content="$ogBeeld">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta property="og:locale" content="nl_NL">
  <meta property="og:site_name" content="Gravel Gorilla">
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" href="/assets/img/logo-icon.svg" type="image/svg+xml">
  <link rel="icon" href="/assets/img/icon-192.png" type="image/png" sizes="192x192">
  <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
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
  <link rel="stylesheet" href="/assets/css/style.css">
  <link rel="stylesheet" href="/assets/css/pagina.css">
$extraCss
$schema
</head>
<body>

  <header class="bar" id="bar">
    <a href="/" class="brand" aria-label="Gravel Gorilla, naar de homepage">
      <img src="/assets/img/logo-icon.svg" alt="" width="36" height="36">
      <span class="brand__word">Gravel <b>Gorilla</b></span>
    </a>
    <nav class="bar__links" aria-label="Hoofdmenu">
      <a href="/#wegwijzer">Tools</a>
      <a href="/over-ons/">Over ons</a>
    </nav>
    <button class="thema-knop" id="themaKnop" type="button" aria-label="Donkere modus aan of uit" title="Nachtrit aan/uit">
      <svg class="icon-zon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></g></svg>
      <svg class="icon-maan" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
    </button>
    <a href="/tools/gravelbike-kiezer/" class="knop knop--actie knop--klein">Start de kiezer</a>
    <button class="bar__menu" aria-label="Menu openen" aria-expanded="false"><span></span><span></span></button>
  </header>

"@
}

function Voet([string[]]$js = @()) {
  $extraJs = ($js | ForEach-Object { "  <script src=""/assets/js/$_""></script>" }) -join "`n"
@"

  <footer class="voet">
    <div class="voet__band" aria-hidden="true"></div>
    <div class="voet__binnen">
      <p class="voet__slot">De gorilla wijst de weg.<br>Jij rijdt.</p>
      <nav aria-label="Voet">
        <a href="/#wegwijzer">Tools</a><a href="/over-ons/">Over ons</a><a href="/contact/">Contact</a><a href="/privacy/">Privacy</a>
      </nav>
    </div>
    <p class="voet__woord" aria-hidden="true">Gravel Gorilla</p>
    <p class="voet__klein">© 2026 Gravel Gorilla · gemaakt door Geert Jans, gravelrijder · geen cookies, geen advertenties</p>
  </footer>

  <script src="/assets/js/site.js"></script>
$extraJs
</body>
</html>
"@
}

# ---------- De tools ----------
# Dit is de enige lijst met tools. Hieruit worden gemaakt: de tool-pagina's, de wegwijzer op de homepage,
# "Andere tools", de sitemap, llms.txt en de gestructureerde informatie.
#   seoTitel  = titel in Google (met de woorden waar mensen op zoeken, liefst max. ~60 tekens)
#   naamKort / kort / filter / plaatje / label = het bordje in de wegwijzer (filter: kiezen, berekenen of plannen)
$tools = @(
  [ordered]@{ slug = 'gravelbike-kiezer'; km = '01'; kop = 'Gravelbike <span class="groen">Kiezer</span>'; titel = 'Gravelbike Kiezer'
    seoTitel = 'Welke gravelbike past bij mij? Gratis kiezer | Gravel Gorilla'
    sub = 'Vind de gravelbike die bij je past.'; beschrijving = 'Welke gravelbike past bij jou? Vijf korte vragen en je ziet een eerlijke Match Score met de redenen erbij, uit 147 modellen van 13 merken. Gratis.'
    naamKort = 'Gravelbike Kiezer'; kort = 'Een paar vragen over hoe en waar je rijdt, en je ziet welke van 147 gravelbikes bij je passen.'
    filter = 'kiezen'; plaatje = 'quiz'
    soort = 'kiezer'; uitlegKop = 'Over deze kiezer' }
  [ordered]@{ slug = 'bandenspanning-calculator'; km = '02'; kop = 'Banden&shy;spanning <span class="groen">Calculator</span>'; titel = 'Bandenspanning Calculator'
    seoTitel = 'Bandenspanning gravelbike berekenen | Gravel Gorilla'
    sub = 'De juiste spanning voor jouw gewicht, bandbreedte en ondergrond. Voor en achter apart, in bar en psi.'; beschrijving = 'Bereken de juiste bandenspanning voor je gravelbike: op basis van je gewicht, bandbreedte, wielmaat en ondergrond. Voor- en achterband apart, in bar en psi.'
    naamKort = 'Bandenspanning'; kort = 'De juiste spanning voor jouw gewicht, bandbreedte en ondergrond. Voor en achter apart.'
    filter = 'berekenen'; plaatje = 'meter'
    soort = 'blok'; uitlegKop = 'Waarom een paar tienden bar uitmaken' }
  [ordered]@{ slug = 'gravelwielen-kiezer'; km = '03'; kop = 'Gravel&shy;wielen <span class="groen">Kiezer</span>'; titel = 'Gravelwielen Kiezer'
    seoTitel = 'Gravelwielen kiezen: welke wielset past? | Gravel Gorilla'
    sub = 'Licht, stevig of juist snel? Vind de wielset die past bij je fiets en rijstijl.'; beschrijving = 'Welke gravelwielen passen bij jou? Vind de wielset voor je fiets, budget en rijstijl. Carbon of aluminium, 700c of 650b: eerlijk advies uit ruim 100 wielsets.'
    naamKort = 'Wielen Kiezer'; kort = 'Licht, stevig of juist snel? Vind de wielset die bij je fiets en rijstijl past.'
    filter = 'kiezen'; plaatje = 'wiel'
    soort = 'kiezer'; uitlegKop = 'Over deze kiezer' }
  [ordered]@{ slug = 'ultra-eventkiezer'; km = '04'; kop = 'Ultra-event<span class="groen">kiezer</span>'; titel = 'Ultra-eventkiezer'
    seoTitel = 'Ultra gravel events 2026–2027 kiezen | Gravel Gorilla'
    sub = 'Welke ultra gravel-event past bij jouw ervaring, conditie en agenda?'; beschrijving = 'Kalender met 80 ultra gravel- en bikepacking-events in 2026 en 2027. Filter op maand, land, afstand, ondergrond en fiets en vind het event dat bij je past.'
    naamKort = 'Ultra-eventkiezer'; kort = 'Welk ultra gravel-event past bij jouw ervaring, conditie en agenda? Je krijgt een shortlist.'
    filter = 'plannen'; plaatje = 'vlag'
    soort = 'kiezer'; scope = 'ue-scope'; uitlegKop = 'Over deze kiezer' }
  [ordered]@{ slug = 'profielsticker'; km = '05'; kop = 'Profiel<span class="groen">sticker</span>'; titel = 'Profielsticker'
    seoTitel = 'Profielsticker maken van je GPX (gratis) | Gravel Gorilla'
    sub = 'Van GPX naar sticker voor je bovenbuis of stuur. Met de klimmen, je posten, je wattage en precies wanneer je moet eten.'; beschrijving = 'Maak gratis een profielsticker van je GPX voor je bovenbuis of stuur: hoogteprofiel, klimmen, ondergrond, posten, wattage en eetmomenten. Printen of downloaden.'
    naamKort = 'Profielsticker'; kort = 'Van GPX naar sticker voor je bovenbuis: klimmen, posten, wattage en wanneer je moet eten.'
    filter = 'plannen'; plaatje = 'profiel'
    soort = 'venster'; uitlegKop = 'Nooit meer gokken wat er na de bocht komt' }
  [ordered]@{ slug = 'kledingadvies'; km = '06'; kop = 'Kleding<span class="groen">advies</span>'; titel = 'Kledingadvies'
    seoTitel = 'Wat trek ik aan op de fiets? Kledingadvies | Gravel Gorilla'
    sub = 'Te warm of te koud? Vul het weer en je rit in en zie per lichaamsdeel wat je aantrekt, en wat er in je achterzak moet.'; beschrijving = 'Wat trek je aan op de gravelbike? Gratis kledingadvies op basis van temperatuur, wind, regen, ritduur en tempo, met de weersverwachting voor jouw plek.'
    naamKort = 'Kledingadvies'; kort = 'Te warm of te koud? Zie per lichaamsdeel wat je aantrekt, met de weersverwachting voor jouw rit.'
    filter = 'plannen'; plaatje = 'jas'
    soort = 'kiezer'; scope = 'kl-scope'; uitlegKop = 'Nooit meer te warm of te koud' }
  [ordered]@{ slug = 'gravelbanden-kiezer'; km = '07'; kop = 'Gravel&shy;banden <span class="groen">Kiezer</span>'; titel = 'Gravelbanden Kiezer'
    seoTitel = 'Welke gravelband past bij jou? Bandenkiezer | Gravel Gorilla'
    sub = 'Schuif je ondergrond, rijstijl en weer aan en zie welke breedte, welk profiel en welke banden bij je passen.'; beschrijving = 'Welke gravelband kies je? Stel ondergrond, rijstijl en weer in en krijg advies over breedte en profiel, plus de best passende banden uit ruim 40 modellen.'
    naamKort = 'Banden Kiezer'; kort = 'Ondergrond, rijstijl en weer instellen, en zien welke breedte, welk profiel en welke banden passen.'
    filter = 'kiezen'; plaatje = 'band'; label = 'Nieuw'
    soort = 'kiezer'; scope = 'gb-scope'; uitlegKop = 'Zo kies je de juiste gravelband' }
)

# Kleine plaatjes die oppoppen als je over een bordje in de wegwijzer beweegt
$spaken = (0..9 | ForEach-Object { '<line x1="50" y1="50" x2="50" y2="18" stroke="#9AA098" stroke-width="1.4" transform="rotate(' + ($_ * 36) + ' 50 50)"/>' }) -join ''
$noppen = (0..17 | ForEach-Object { '<rect x="47" y="6" width="6" height="9" rx="1.5" fill="#15181A" transform="rotate(' + ($_ * 20) + ' 50 50)"/>' }) -join ''
$plaatjes = @{
  band    = '<svg viewBox="0 0 100 100" width="100" height="100">' + $noppen + '<circle cx="50" cy="50" r="36" fill="none" stroke="#15181A" stroke-width="9"/><circle cx="50" cy="50" r="29" fill="none" stroke="#2F8F3E" stroke-width="3"/><circle cx="50" cy="50" r="6" fill="#FF6B2C"/></svg>'
  quiz    = '<svg viewBox="0 0 100 100" width="96" height="96"><rect x="14" y="20" width="72" height="8" rx="4" fill="#E3DDCF"/><rect x="14" y="20" width="46" height="8" rx="4" fill="#FF6B2C"/><rect x="14" y="40" width="72" height="14" rx="5" fill="#2F8F3E"/><rect x="14" y="60" width="72" height="14" rx="5" fill="none" stroke="#15181A" stroke-width="2"/><rect x="14" y="80" width="50" height="6" rx="3" fill="#C9C2B2"/></svg>'
  meter   = '<svg viewBox="0 0 100 100" width="100" height="100"><path d="M15 70 A35 35 0 0 1 85 70" fill="none" stroke="#E3DDCF" stroke-width="9" stroke-linecap="round"/><path d="M15 70 A35 35 0 0 1 72 42" fill="none" stroke="#2F8F3E" stroke-width="9" stroke-linecap="round"/><line x1="50" y1="70" x2="68" y2="44" stroke="#15181A" stroke-width="3.5" stroke-linecap="round"/><circle cx="50" cy="70" r="6" fill="#FF6B2C"/></svg>'
  wiel    = '<svg viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="40" fill="none" stroke="#15181A" stroke-width="8" stroke-dasharray="4 4"/><circle cx="50" cy="50" r="33" fill="none" stroke="#C9C2B2" stroke-width="2"/>' + $spaken + '<circle cx="50" cy="50" r="6" fill="#2F8F3E"/></svg>'
  jas     = '<svg viewBox="0 0 100 100" width="96" height="96"><path d="M34 18 18 28l7 16 7-4v42h36V40l7 4 7-16-16-10a16 16 0 0 1-32 0z" fill="#2F8F3E"/><path d="M50 30v52" stroke="#14361E" stroke-width="3"/><circle cx="50" cy="44" r="2.5" fill="#F4F1EA"/><circle cx="50" cy="56" r="2.5" fill="#F4F1EA"/><path d="M70 14c4 4 4 9 0 13M78 10c6 6 6 15 0 21" fill="none" stroke="#FF6B2C" stroke-width="3" stroke-linecap="round"/></svg>'
  profiel = '<svg viewBox="0 0 100 100" width="100" height="100"><rect x="8" y="30" width="84" height="40" rx="6" fill="#15181A"/><path d="M14 62 L28 50 L38 55 L52 38 L64 47 L76 36 L86 62 Z" fill="#2F8F3E"/><rect x="14" y="62" width="30" height="4" fill="#9AA098"/><rect x="44" y="62" width="42" height="4" fill="#F4F1EA"/><circle cx="52" cy="38" r="3.5" fill="#FF6B2C"/></svg>'
  vlag    = '<svg viewBox="0 0 100 100" width="96" height="96"><path d="M28 86V16" stroke="#15181A" stroke-width="4" stroke-linecap="round"/><path d="M30 18h46l-9 14 9 14H30z" fill="#2F8F3E"/><g fill="#F4F1EA"><rect x="38" y="22" width="7" height="7"/><rect x="52" y="22" width="7" height="7"/><rect x="45" y="29" width="7" height="7"/><rect x="59" y="29" width="7" height="7"/><rect x="38" y="36" width="7" height="7"/><rect x="52" y="36" width="7" height="7"/></g></svg>'
}

# Veelgestelde vragen van een tool lezen uit inhoud/tools/<naam>-faq.html (paren van <h3>vraag</h3><p>antwoord</p>)
function LeesFaq([string]$slug) {
  $bestand = "$root\inhoud\tools\$slug-faq.html"
  if (-not (Test-Path $bestand)) { return @() }
  $tekst = [IO.File]::ReadAllText($bestand, [Text.Encoding]::UTF8)
  @([regex]::Matches($tekst, '(?s)<h3>(.*?)</h3>\s*<p>(.*?)</p>') | ForEach-Object {
    [ordered]@{ vraag = $_.Groups[1].Value.Trim(); antwoord = $_.Groups[2].Value.Trim() }
  })
}
function KaleTekst([string]$s) { [Net.WebUtility]::HtmlDecode(([regex]::Replace($s, '<[^>]+>', ''))).Trim() }

foreach ($t in $tools) {
  $pad = "/tools/$($t.slug)/"
  $css = @(); $js = @(); $subId = ''
  switch ($t.soort) {
    'kiezer' {
      $scope = if ($t.scope) { $t.scope } else { 'gk-scope' }
      $css = @("$($t.slug).css"); $js = @("$($t.slug).js"); if ($scope -eq 'gk-scope') { $subId = ' id="gk-sub-text"' }
      $tool = "    <div class=""$scope"">`n" + (Lees "inhoud\tools\$($t.slug)-tool.html") + "    </div>"
    }
    'blok' {
      $tool = "    <div class=""tool-vak"">`n" + (Lees "inhoud\tools\$($t.slug)-tool.html") + "    </div>"
      if ($t.slug -eq 'bandenspanning-calculator') {
        # komt iemand uit de bandenkiezer (?breedte=45), zet dan meteen die bandbreedte klaar
        $tool += "`n    <script>(function () { var b = new URLSearchParams(location.search).get(""breedte""), s = document.getElementById(""ggWidth""); if (b && s) { s.value = Math.max(28, Math.min(55, parseInt(b, 10) || 40)); s.dispatchEvent(new Event(""input"", { bubbles: true })); } })();</script>"
      }
    }
    'venster' {
      # versienummer van de tool, zodat browsers een nieuwe versie meteen ophalen
      $toolVersie = ([Security.Cryptography.MD5]::Create().ComputeHash([IO.File]::ReadAllBytes("$root\tools\$($t.slug)\tool.html")) | Select-Object -First 4 | ForEach-Object { $_.ToString('x2') }) -join ''
      $tool = @"
    <div class="tool-vak">
      <div class="tool-frame"><iframe src="tool.html?v=$toolVersie" id="toolVenster" title="$(Html $t.titel)" loading="lazy"></iframe></div>
    </div>
    <script>
      /* het venster groeit mee met de inhoud van de tool */
      (function () {
        var f = document.getElementById("toolVenster");
        function maat() {
          try {
            var d = f.contentDocument;
            if (!d || !d.body) return;
            var h = d.body.scrollHeight + 24 + "px";
            if (f.style.height !== h) f.style.height = h;
          } catch (e) {}
        }
        f.addEventListener("load", function () {
          maat();
          try { new ResizeObserver(maat).observe(f.contentDocument.body); } catch (e) {}
          setInterval(maat, 800);
        });
      })();
    </script>
"@
    }
  }
  $uitleg = Lees "inhoud\tools\$($t.slug)-uitleg.html"

  # veelgestelde vragen
  $faq = @(LeesFaq $t.slug)
  $faqHtml = ''
  if ($faq.Count) {
    $faqHtml = "    <section class=""lees tool-faq"" aria-labelledby=""faq-kop"">`n      <h2 class=""tool-uitleg-kop"" id=""faq-kop"">Veelgestelde vragen</h2>`n" +
      (($faq | ForEach-Object { "      <h3>$($_.vraag)</h3>`n      <p>$($_.antwoord)</p>" }) -join "`n") + "`n    </section>"
  }

  # andere tools (interne links)
  $anderen = ($tools | Where-Object { $_.slug -ne $t.slug } | ForEach-Object {
    "        <a href=""/tools/$($_.slug)/"" class=""ander""><span class=""ander__km"" data-km-tool=""$($_.slug)"">KM $($_.km)</span><strong>$(Html $_.titel)</strong><span>$(Html $_.kort)</span></a>"
  }) -join "`n"

  # gestructureerde informatie: webtool + broodkruimel + vragen
  $schemaObj = [ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
    [ordered]@{ '@type' = 'WebApplication'; '@id' = "$site$pad#tool"; name = $t.titel; url = "$site$pad"; description = $t.beschrijving
      applicationCategory = 'SportsApplication'; operatingSystem = 'Web'; inLanguage = 'nl'; isAccessibleForFree = $true
      offers = [ordered]@{ '@type' = 'Offer'; price = '0'; priceCurrency = 'EUR' }; publisher = @{ '@id' = "$site/#organisatie" } }
    [ordered]@{ '@type' = 'BreadcrumbList'; itemListElement = @(
      [ordered]@{ '@type' = 'ListItem'; position = 1; name = 'Gravel Gorilla'; item = "$site/" }
      [ordered]@{ '@type' = 'ListItem'; position = 2; name = 'Tools'; item = "$site/#wegwijzer" }
      [ordered]@{ '@type' = 'ListItem'; position = 3; name = $t.titel; item = "$site$pad" }) }
    $organisatie
  ) }
  if ($faq.Count) {
    $schemaObj['@graph'] += [ordered]@{ '@type' = 'FAQPage'; '@id' = "$site$pad#faq"; mainEntity = @($faq | ForEach-Object {
      [ordered]@{ '@type' = 'Question'; name = (KaleTekst $_.vraag); acceptedAnswer = [ordered]@{ '@type' = 'Answer'; text = (KaleTekst $_.antwoord) } } }) }
  }

  $pagina = (Kop $t.seoTitel $t.beschrijving $pad $css "" "website" (JsonLd $schemaObj)) + @"
  <main>
    <section class="pagina-kop">
      <a href="/#wegwijzer" class="terug">← Terug naar alle tools</a>
      <p class="pagina-km" data-km-tool="$($t.slug)">KM $($t.km)</p>
      <p class="pagina-teller" data-teller="$($t.slug)" hidden></p>
      <h1 class="kop-l">$($t.kop)</h1>
      <p class="pagina-sub"$subId>$(Html $t.sub)</p>
    </section>
$tool
    <article class="lees tool-uitleg">
      <h2 class="tool-uitleg-kop">$(Html $t.uitlegKop)</h2>
$uitleg
    </article>
$faqHtml
    <section class="andere-tools" aria-labelledby="andere-kop">
      <h2 class="kop-l" id="andere-kop">Andere <span class="groen">tools</span></h2>
      <div class="andere-raster">
$anderen
      </div>
    </section>
  </main>
"@ + (Voet (@($js) + 'teller.js'))
  Schrijf "tools\$($t.slug)\index.html" $pagina
  "tool: $pad"
}

# ---------- Over ons ----------
$overSchema = JsonLd ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
  [ordered]@{ '@type' = 'AboutPage'; url = "$site/over-ons/"; name = 'Over Gravel Gorilla'; inLanguage = 'nl'; about = @{ '@id' = "$site/#organisatie" }; mainEntity = @{ '@id' = "$site/over-ons/#geert" } }
  [ordered]@{ '@type' = 'Person'; '@id' = "$site/over-ons/#geert"; name = 'Geert Jans'; url = "$site/over-ons/"; email = 'info@gravelgorilla.nl'
    description = 'Gravelrijder en maker van Gravel Gorilla en alle tools op gravelgorilla.nl.'; worksFor = @{ '@id' = "$site/#organisatie" } }
  $organisatie) })
$pagina = (Kop "Over Gravel Gorilla: gratis tools voor gravelrijders" "Gravel Gorilla is gemaakt door Geert Jans, gravelrijder: gratis tools voor gravelbikes, banden, wielen, events en kleding. Eerlijk en zonder account." "/over-ons/" @() "" "website" $overSchema) + @"
  <main>
    <section class="pagina-kop">
      <a href="/" class="terug">← Home</a>
      <p class="pagina-km">Gebouwd door een gravelrijder</p>
      <h1 class="kop-l">Over <span class="groen">ons</span></h1>
      <p class="pagina-sub">Van frustratie naar zeven tools. Te veel artikelen beloofden een antwoord en lieten je toch met een gok zitten. Daarom bouwen we tools die voor jou rekenen en kiezen.</p>
    </section>
    <section class="maker" id="geert" aria-labelledby="maker-kop">
      <div class="maker__beeld" aria-hidden="true"><img src="/assets/img/logo-icon.svg" alt="" width="120" height="120"></div>
      <div class="maker__tekst">
        <p class="pagina-km">Wie zit erachter?</p>
        <h2 id="maker-kop">Hoi, ik ben <span class="groen">Geert Jans</span></h2>
        <p>Ik rijd zelf gravel, en ik maak alle tools op deze site. Gravel Gorilla begon met een frustratie: ik zocht antwoord op gewone vragen, zoals welke gravelbike bij me past, hoeveel lucht er in mijn banden moet en wat ik aantrek bij tien graden en wind. Ik vond vooral algemene artikelen die je alsnog met een gok laten zitten.</p>
        <p>Dus ben ik zelf gaan uitzoeken, rekenen en vergelijken. Daar zijn deze tools uit voortgekomen. Ze zijn gratis, je hebt geen account nodig en er staan geen advertenties op de site.</p>
        <p>Zie je iets wat niet klopt, mis je een merk of heb je een idee voor een nieuwe tool? Mail me op <a href="mailto:info@gravelgorilla.nl">info@gravelgorilla.nl</a>. Ik lees alles.</p>
      </div>
    </section>
    <section class="cijfers" aria-label="Het verhaal in cijfers">
      <div class="cijfer"><strong>7</strong><span>gratis interactieve tools</span></div>
      <div class="cijfer"><strong>147</strong><span>gravelbikes in de kiezer</span></div>
      <div class="cijfer"><strong>21</strong><span>e-gravelbikes vergeleken</span></div>
      <div class="cijfer"><strong>13</strong><span>merken naast elkaar</span></div>
      <div class="cijfer"><strong>2</strong><span>wielmaten: 700c en 650b</span></div>
      <div class="cijfer"><strong>100%</strong><span>gratis, zonder account</span></div>
    </section>
    <section class="werkwijze">
      <h2>Zo bouwen we een tool</h2>
      <ol>
        <li><span class="km">KM 01</span><h3>Spitten</h3><p>Specs verzamelen, prijzen checken, reviews doorploegen. Elke tool begint met een berg data die we met de hand controleren.</p></li>
        <li><span class="km">KM 02</span><h3>Bouwen</h3><p>Van die data maken we een tool die één vraag goed beantwoordt. Geen twintig schermen, maar een paar keuzes die je echt verder helpen.</p></li>
        <li><span class="km">KM 03</span><h3>Testen</h3><p>Op telefoon en computer, elke uitkomst nagelopen. Werkt iets niet lekker, dan gaat het terug de werkplaats in.</p></li>
        <li><span class="km">KM 04</span><h3>Bijhouden</h3><p>Nieuwe modellen, nieuwe prijzen, nieuwe events: een tool is nooit af. We werken de gegevens bij zodat het advies blijft kloppen.</p></li>
      </ol>
    </section>
    <section class="blokken">
      <div class="blok blok--licht">
        <h2>Meedenken?</h2>
        <p>Gravel Gorilla groeit op feedback van rijders. Mis je een merk in de kiezer, zie je een prijs die niet klopt of heb je een idee voor een nieuwe tool? Stuur een bericht, dan gaan we ermee aan de slag.</p>
        <a href="/contact/" class="knop knop--actie">Naar contact →</a>
      </div>
      <div class="blok blok--groen">
        <h2>Probeer de tools en ga rijden</h2>
        <p>Alles hier is gratis en zonder account te gebruiken. Begin met de bandenspanning calculator of duik in de gravelbike kiezer.</p>
        <a href="/#wegwijzer" class="knop knop--actie">Naar de tools →</a>
      </div>
    </section>
  </main>
"@ + (Voet)
Schrijf "over-ons\index.html" $pagina
"pagina: /over-ons/"

# ---------- Contact ----------
$contactSchema = JsonLd ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
  [ordered]@{ '@type' = 'ContactPage'; url = "$site/contact/"; name = 'Contact met Gravel Gorilla'; inLanguage = 'nl'; about = @{ '@id' = "$site/#organisatie" } }
  $organisatie) })
$pagina = (Kop "Contact | Gravel Gorilla" "Een vraag, een tip, een prijs die niet klopt of een idee voor een nieuwe gravel-tool? Mail Gravel Gorilla via info@gravelgorilla.nl. We lezen alles." "/contact/" @() "" "website" $contactSchema) + @"
  <main>
    <section class="pagina-kop">
      <a href="/" class="terug">← Home</a>
      <h1 class="kop-l">Con<span class="groen">tact</span></h1>
      <p class="pagina-sub">Een vraag, een tip, een prijs die niet klopt of een idee voor een nieuwe tool? Laat het weten.</p>
    </section>
    <section class="contact">
      <div class="contact-mail">
        <h2>Stuur een bericht</h2>
        <p>Mail ons rechtstreeks. We lezen alles en reageren zo snel mogelijk, meestal binnen een paar dagen.</p>
        <a class="contact-adres" href="mailto:$ContactMail">$ContactMail</a>
        <a class="knop knop--actie" href="mailto:${ContactMail}?subject=Bericht%20via%20gravelgorilla.nl">Mail openen →</a>
      </div>
      <div class="contact-weetjes">
        <div class="weetje"><h3>Tip bij tool-feedback</h3><p>Zet erbij om welke tool het gaat en op welk apparaat je hem gebruikt. Dan kunnen we er sneller mee aan de slag.</p></div>
        <div class="weetje"><h3>Liever meteen aan de slag?</h3><p>Alle tools staan voor je klaar. Gratis, Nederlands en zonder account. <a href="/#wegwijzer">Naar de tools</a></p></div>
      </div>
    </section>
  </main>
"@ + (Voet)
Schrijf "contact\index.html" $pagina
"pagina: /contact/"

# ---------- Privacy ----------
$privacySchema = JsonLd ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
  [ordered]@{ '@type' = 'WebPage'; url = "$site/privacy/"; name = 'Privacyverklaring Gravel Gorilla'; inLanguage = 'nl'; dateModified = '2026-10-14'; publisher = @{ '@id' = "$site/#organisatie" } }
  $organisatie) })
$pagina = (Kop "Privacyverklaring | Gravel Gorilla" "Gravel Gorilla gebruikt geen cookies en geen advertenties. Lees in gewone taal welke gegevens de site en de tools wel gebruiken, en waarom." "/privacy/" @() "" "website" $privacySchema) + @"
  <main>
    <section class="pagina-kop">
      <a href="/" class="terug">← Home</a>
      <p class="pagina-km">Bijgewerkt op 14 oktober 2026</p>
      <h1 class="kop-l">Privacy<wbr><span class="groen">verklaring</span></h1>
      <p class="pagina-sub">Kort gezegd: geen cookies, geen advertenties en geen account. Hieronder lees je precies wat de site wel doet.</p>
    </section>
    <article class="lees privacy">
      <h2>Wie is verantwoordelijk?</h2>
      <p>Gravel Gorilla (gravelgorilla.nl) wordt gemaakt door Geert Jans. Vragen over privacy? Mail naar <a href="mailto:info@gravelgorilla.nl">info@gravelgorilla.nl</a>.</p>

      <h2>Geen cookies, geen tracking</h2>
      <p>De site plaatst geen cookies, gebruikt geen advertenties en geen programma's die je volgen over het internet (zoals Google Analytics of een Facebook-pixel). Je hebt geen account nodig en je hoeft nergens je naam of e-mailadres in te vullen.</p>

      <h2>Wat de site wel gebruikt</h2>
      <h3>Gebruiksteller van de tools</h3>
      <p>Bij elke tool staat hoe vaak hij is gebruikt. Als je een tool-pagina opent, gaat de teller van die tool één omhoog. Er wordt daarbij niets over jou opgeslagen: geen IP-adres, geen cookie, alleen het totaal per tool.</p>
      <h3>Instellingen op je eigen apparaat</h3>
      <p>Je keuze voor de lichte of donkere weergave, en je instellingen in de profielsticker (zoals je gewicht en eetvoorkeuren), worden bewaard in je eigen browser. Die gegevens gaan niet naar ons. Je wist ze door de sitegegevens in je browser te verwijderen.</p>
      <h3>Weersverwachting in het kledingadvies</h3>
      <p>Klik je op "Weer ophalen", dan gaan de plaatsnaam en datum die je invult naar Open-Meteo, een gratis weerdienst, om de verwachting op te halen. Doe je dat niet, dan wordt er niets verstuurd.</p>
      <h3>Ondergrond in de profielsticker</h3>
      <p>Je routebestand (GPX of TCX) wordt op je eigen apparaat gelezen en niet geüpload. Laat je de ondergrond ophalen, dan gaan alleen de coördinaten van de route, zonder naam of tijden, via onze server naar de kaartservers van OpenStreetMap. Onze server onthoudt het antwoord van OpenStreetMap (welke wegen er langs die route liggen) 30 dagen, zodat dezelfde route de volgende keer sneller laadt. Daarbij wordt niet opgeslagen van wie de route is.</p>
      <h3>Lettertypes en productfoto's</h3>
      <p>De lettertypes van de site worden geladen via Google Fonts, en in de kiezers worden productfoto's geladen van de websites van de fietsmerken. Je browser maakt daarvoor verbinding met die servers, die daarbij technisch gezien je IP-adres zien.</p>
      <h3>Logbestanden van de webserver</h3>
      <p>Zoals bij vrijwel elke website houdt de server bij onze hostingpartij Cloud86 technische logbestanden bij, met onder andere het IP-adres, het tijdstip en de opgevraagde pagina. Die worden alleen gebruikt voor beveiliging en het oplossen van storingen, en na een beperkte tijd automatisch verwijderd.</p>
      <h3>Als je mailt</h3>
      <p>Mail je ons, dan gebruiken we je e-mailadres en bericht alleen om je te antwoorden. We delen ze met niemand.</p>

      <h2>Links naar andere websites</h2>
      <p>De tools linken naar websites van fietsmerken, winkels en events. Op die websites gelden hun eigen privacyregels.</p>

      <h2>Jouw rechten</h2>
      <p>Je hebt het recht om te vragen welke gegevens we van je hebben, en om die te laten aanpassen of verwijderen. Omdat de site nauwelijks persoonsgegevens verwerkt, gaat het in de praktijk vooral om e-mail die je ons hebt gestuurd. Stuur je verzoek naar <a href="mailto:info@gravelgorilla.nl">info@gravelgorilla.nl</a>. Ben je het niet eens met hoe we met je gegevens omgaan, dan kun je een klacht indienen bij de Autoriteit Persoonsgegevens.</p>
    </article>
  </main>
"@ + (Voet)
Schrijf "privacy\index.html" $pagina
"pagina: /privacy/"

# ---------- Pagina niet gevonden ----------
$pagina = (Kop "Pagina niet gevonden — Gravel Gorilla" "Deze pagina bestaat niet (meer)." "/404.html") + @"
  <main class="niet-gevonden">
    <img src="/assets/img/logo-icon.svg" alt="">
    <h1 class="kop-l">Hier loopt<br>het pad <span class="groen">dood.</span></h1>
    <p>Deze pagina bestaat niet (meer). Geen paniek: de gorilla wijst je de weg terug.</p>
    <a href="/" class="knop knop--actie">Terug naar home →</a>
  </main>
"@ + (Voet)
Schrijf "404.html" $pagina
"pagina: 404.html"

# ---------- Homepage: wegwijzer, eerste tip en gestructureerde informatie als gewone HTML ----------
# (zoekmachines en AI-bots zien zo alle tools, ook als ze geen JavaScript uitvoeren)
$voorpagina = Lees "index.html"
$i = 0
$bordjesHtml = ($tools | ForEach-Object {
  $label = if ($_.label) { "<span class=""bordje__label"">$(Html $_.label)</span>" } else { '' }
  $zoek = (Html ("$($_.naamKort) $($_.titel) $($_.kort) $($_.filter)".ToLower()))
  $li = @"
        <li class="bordje" data-soort="$($_.filter)" data-zoek="$zoek" style="--v:$($i * 80)ms">
          <a href="/tools/$($_.slug)/">
            <span class="bordje__km" aria-label="Kilometer $($_.km)"><span class="bordje__bord"><small>KM</small>$($_.km)</span></span>
            <span class="bordje__naam">$(Html $_.naamKort)$label</span>
            <span class="bordje__uitleg">$(Html $_.kort)<span class="bordje__teller" data-teller-tool="$($_.slug)" hidden></span></span>
            <span class="bordje__soort">$($_.filter)</span>
            <span class="bordje__pijl" aria-hidden="true">→</span>
            <span class="bordje__kijk" aria-hidden="true">$($plaatjes[$_.plaatje])</span>
          </a>
        </li>
"@
  $i++
  $li
}) -join "`n"
$voorpagina = [regex]::Replace($voorpagina, '(?s)(<ol class="bordjes" id="bordjes">).*?(</ol>)', { param($m) $m.Groups[1].Value + "`n" + $bordjesHtml + "`n      " + $m.Groups[2].Value })

# eerste gorilla-tip vast in de pagina (de rest wisselt via main.js)
$main = Lees "assets\js\main.js"
$eersteTip = [regex]::Match($main, '\{ tekst: "([^"]+)", link: "([^"]+)" \}')
if ($eersteTip.Success) {
  $voorpagina = [regex]::Replace($voorpagina, '(?s)(<blockquote class="tips__tekst" id="tipTekst"[^>]*>).*?(</blockquote>)', { param($m) $m.Groups[1].Value + '“' + $eersteTip.Groups[1].Value + '”' + $m.Groups[2].Value })
  $voorpagina = [regex]::Replace($voorpagina, '<a href="[^"]*" class="tips__link" id="tipLink">', '<a href="' + $eersteTip.Groups[2].Value + '" class="tips__link" id="tipLink">')
}

# gestructureerde informatie: website, organisatie en de lijst met tools
$homeSchema = JsonLd ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
  [ordered]@{ '@type' = 'WebSite'; '@id' = "$site/#website"; name = 'Gravel Gorilla'; url = "$site/"; inLanguage = 'nl'; publisher = @{ '@id' = "$site/#organisatie" } }
  $organisatie
  [ordered]@{ '@type' = 'ItemList'; name = 'Gratis tools voor gravelrijders'; itemListElement = @($tools | ForEach-Object -Begin { $n = 0 } -Process {
    $n++; [ordered]@{ '@type' = 'ListItem'; position = $n; name = $_.titel; url = "$site/tools/$($_.slug)/"; description = $_.kort } }) }
) })
if ($voorpagina -match '<!--SCHEMA-->') {
  $voorpagina = [regex]::Replace($voorpagina, '(?s)<!--SCHEMA-->.*?<!--/SCHEMA-->', { param($m) "<!--SCHEMA-->`n$homeSchema`n  <!--/SCHEMA-->" })
} else {
  $voorpagina = $voorpagina.Replace('</head>', "  <!--SCHEMA-->`n$homeSchema`n  <!--/SCHEMA-->`n</head>")
}
Schrijf "index.html" $voorpagina
"homepage: wegwijzer ($($tools.Count) tools), eerste tip en schema als HTML"

# ---------- llms.txt: korte samenvatting van de site voor AI-zoekmachines ----------
$llms = "# Gravel Gorilla`n`n> Onafhankelijke Nederlandstalige website (gravelgorilla.nl) met gratis interactieve tools voor gravelrijders in Nederland en België. Geen account nodig, geen advertenties.`n`n" +
  "Gravel Gorilla helpt gravelrijders met concrete keuzes: welke gravelbike, welke banden, welke wielen, welke bandenspanning, welk ultra-event, wat je aantrekt en hoe je je route op een sticker zet.`n`n## Tools`n`n" +
  (($tools | ForEach-Object { "- [$($_.titel)]($site/tools/$($_.slug)/): $($_.beschrijving)" }) -join "`n") +
  "`n`n## Over`n`n- [Over Gravel Gorilla]($site/over-ons/): gemaakt door Geert Jans, gravelrijder; wie erachter zit en hoe de tools worden gemaakt en bijgehouden.`n- [Contact]($site/contact/): info@gravelgorilla.nl`n- [Privacyverklaring]($site/privacy/): geen cookies, geen advertenties; welke gegevens de tools gebruiken.`n"
Schrijf "llms.txt" $llms
"llms.txt: klaar"

# ---------- Sitemap, robots.txt ----------
$vandaag = Get-Date -Format 'yyyy-MM-dd'
$adressen = @(@('/', $vandaag), @('/over-ons/', $vandaag), @('/contact/', $vandaag), @('/privacy/', $vandaag))
$adressen += $tools | ForEach-Object { ,@("/tools/$($_.slug)/", $vandaag) }
$xml = "<?xml version=""1.0"" encoding=""UTF-8""?>`n<urlset xmlns=""http://www.sitemaps.org/schemas/sitemap/0.9"">`n"
$xml += ($adressen | ForEach-Object { "  <url><loc>$site$($_[0])</loc><lastmod>$($_[1])</lastmod></url>" }) -join "`n"
$xml += "`n</urlset>`n"
Schrijf "sitemap.xml" $xml
Schrijf "robots.txt" "User-agent: *`nAllow: /`n`nSitemap: $site/sitemap.xml`n"
"sitemap: $($adressen.Count) adressen"

# ---------- .htaccess: instellingen voor de webserver van Cloud86 ----------
$htaccess = @'
# Gravel Gorilla — instellingen voor de webserver (gemaakt door .claude/bouw-site.ps1)
DirectoryIndex index.html
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
RewriteEngine On

# Eén officieel adres: www.gravelgorilla.nl gaat naar gravelgorilla.nl
RewriteCond %{HTTP_HOST} ^www\.gravelgorilla\.nl$ [NC]
RewriteRule ^(.*)$ https://gravelgorilla.nl/$1 [R=301,L]

# Hulpbestanden uit GitHub (scripts, werkmappen) zijn niet voor bezoekers
RewriteRule (^|/)(\.claude|\.git|inhoud|_bron)(/|$) - [F,L]
RewriteRule \.(ps1|md|json|gitignore)$ - [F,L]

# Oude adressen van de WordPress-site doorsturen naar de nieuwe plek (301 = blijvend verhuisd)
RewriteRule ^kiezer/?$ /tools/gravelbike-kiezer/ [R=301,L]
RewriteRule ^tools/?$ /#wegwijzer [R=301,L,NE]
RewriteRule ^(category|tag)/ / [R=301,L]
RewriteRule ^author/ /over-ons/ [R=301,L]
RewriteRule ^(.*/)?feed/?$ / [R=301,L]
# Verwijderde blogs (oktober 2026) doorsturen naar de best passende tool
RewriteRule ^(uncategorized|materiaal)/ /#wegwijzer [R=301,L,NE]
RewriteRule ^blog/?$ /#wegwijzer [R=301,L,NE]
RewriteRule ^(gravelbike|gravelbike-kiezen-gravelfiets-kiezen-keuzehulp-welke-gravelbike|welke-gravelbike-budget|beste-prijs-kwaliteit-verhouding-gravelbike)/?$ /tools/gravelbike-kiezer/ [R=301,L]
RewriteRule ^beste-gravelbanden/?$ /tools/gravelbanden-kiezer/ [R=301,L]
RewriteRule ^(zadeltassen-bikepacken-avontuur-fietstassen|de-10-spectaculairste-gravelbestemmingen)/?$ /tools/ultra-eventkiezer/ [R=301,L]
RewriteRule ^fietsverlichting-budgetverlichting-merkverlichting/?$ / [R=301,L]
RewriteRule ^(wp-sitemap.*|sitemap_index|.+-sitemap.*)\.xml$ /sitemap.xml [R=301,L]
</IfModule>

# Afbeeldingen, opmaak en code mogen even bewaard worden door de browser (sneller)
# Pagina's (HTML) altijd even laten checken op een nieuwe versie, zodat wijzigingen meteen zichtbaar zijn
<IfModule mod_headers.c>
<FilesMatch "\.html$">
Header set Cache-Control "no-cache"
</FilesMatch>
</IfModule>

<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/jpeg "access plus 1 month"
ExpiresByType image/png "access plus 1 month"
ExpiresByType image/svg+xml "access plus 1 month"
ExpiresByType text/css "access plus 1 day"
ExpiresByType application/javascript "access plus 1 day"
</IfModule>
'@
Schrijf ".htaccess" $htaccess
"klaar: .htaccess"

# ---------- Versienummers op opmaak en code ----------
# Browsers bewaren css/js een dag. Met ?v=<code van de inhoud> halen ze een gewijzigd bestand meteen opnieuw op.
$md5 = [Security.Cryptography.MD5]::Create()
$versies = @{}
Get-ChildItem "$root\assets\css", "$root\assets\js" -File | ForEach-Object {
  $h = ($md5.ComputeHash([IO.File]::ReadAllBytes($_.FullName)) | Select-Object -First 4 | ForEach-Object { $_.ToString('x2') }) -join ''
  $versies["/assets/$($_.Directory.Name)/$($_.Name)"] = $h
}
$paginas = Get-ChildItem $root -Recurse -Filter *.html | Where-Object { $_.FullName -notmatch '[\\/](_bron|inhoud|\.claude|\.git)[\\/]' }
foreach ($p in $paginas) {
  $t = [IO.File]::ReadAllText($p.FullName, [Text.Encoding]::UTF8)
  $nieuw = [regex]::Replace($t, '(/assets/(?:css|js)/[^"?]+)(\?v=[0-9a-f]*)?"', [Text.RegularExpressions.MatchEvaluator]{
    param($m)
    $v = $versies[$m.Groups[1].Value]
    if ($v) { "$($m.Groups[1].Value)?v=$v""" } else { $m.Value }
  })
  if ($nieuw -ne $t) { [IO.File]::WriteAllText($p.FullName, $nieuw, $utf8) }
}
"versienummers: $($paginas.Count) pagina's bijgewerkt"
