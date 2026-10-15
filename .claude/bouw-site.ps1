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
  description = 'Onafhankelijke Nederlandse website met gratis tools voor gravelrijders: gravelbike en framemaat kiezen, gravelbanden, bandenspanning, wielen, versnellingen, gravelroutes, ultra-events, bikepacking-paklijst, profielstickers en kledingadvies.' }

# ---------- Talen ----------
# Nederlands staat in de hoofdmap, Engels in /en/ en Duits in /de/. Vaste teksten per taal: inhoud/talen/<taal>.psd1.
# Vertaalde inhoud (uitleg, vragen, tools, pagina's): inhoud/en/... en inhoud/de/... Ontbreekt een vertaling, dan valt de pagina terug op het Nederlands.
$talen = @('nl', 'en', 'de') | ForEach-Object { Import-PowerShellDataFile "$root\inhoud\talen\$_.psd1" }
$nl = $talen[0]
$vlaggen = @{
  nl = '<svg class="vlag" viewBox="0 0 9 6" aria-hidden="true"><rect width="9" height="6" fill="#21468B"/><rect width="9" height="4" fill="#fff"/><rect width="9" height="2" fill="#AE1C28"/></svg>'
  en = '<svg class="vlag" viewBox="0 0 60 30" aria-hidden="true"><rect width="60" height="30" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" stroke-width="2.5"/><path d="M30,0 V30 M0,15 H60" stroke="#fff" stroke-width="10"/><path d="M30,0 V30 M0,15 H60" stroke="#C8102E" stroke-width="6"/></svg>'
  de = '<svg class="vlag" viewBox="0 0 5 3" aria-hidden="true"><rect width="5" height="3" fill="#FFCE00"/><rect width="5" height="2" fill="#DD0000"/><rect width="5" height="1" fill="#000"/></svg>'
}
# taalvrij pad (bijv. /tools/maatbepaler/) → adres in een taal
function TaalPad($L, [string]$pad) { "$($L.pre)$pad" }
# interne links in een stuk HTML naar de juiste taal laten wijzen (/tools/... → /en/tools/...)
function Prefix([string]$html, $L) {
  if (-not $L.pre) { return $html }
  [regex]::Replace($html, '(href|action)="/(?!assets/|api/|en/|de/|favicon|/)', "`$1=""$($L.pre)/")
}
function TaalMenu($L, [string]$pad) {
  $lijst = ($talen | ForEach-Object {
    $huidig = if ($_.taal -eq $L.taal) { ' aria-current="true"' } else { '' }
    "        <li><a href=""$(TaalPad $_ $pad)"" hreflang=""$($_.taal)"" lang=""$($_.taal)""$huidig>$($vlaggen[$_.taal])<span>$($_.naam)</span></a></li>"
  }) -join "`n"
@"
    <div class="taal" id="taalKeuze">
      <button class="taal__knop" type="button" aria-haspopup="true" aria-expanded="false" aria-label="$($L.ui.taalAria): $($L.naam)">$($vlaggen[$L.taal])<span>$($L.kort)</span><svg class="taal__pijl" viewBox="0 0 12 8" aria-hidden="true"><path d="M1 1.5 L6 6.5 L11 1.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
      <ul class="taal__lijst">
$lijst
      </ul>
    </div>
"@
}
function Alternatieven([string]$pad) {
  if ($pad -like "*404*") { return "" }
  (($talen | ForEach-Object { "  <link rel=""alternate"" hreflang=""$($_.taal)"" href=""$site$(TaalPad $_ $pad)"">" }) -join "`n") + "`n  <link rel=""alternate"" hreflang=""x-default"" href=""$site$pad"">`n" + $taalWissel
}
# Automatisch de taal van de computer: Nederlands blijft Nederlands, Duits gaat naar /de/, al het andere naar /en/.
# Niet bij zoekmachines (die moeten elke taal zelf zien) en niet als iemand zelf een taal koos in het menu (gg-taal, zie site.js).
$taalWissel = @'
  <script>
    (function () {
      try {
        if (/bot|crawl|spider|slurp|google|bing|yandex|baidu|duckduck|lighthouse|headless|preview|facebookexternalhit|embedly|gptbot|chatgpt|claudebot|claude-|perplexity/i.test(navigator.userAgent)) return;
        if (localStorage.getItem("gg-taal")) return;
        var l = ((navigator.languages && navigator.languages[0]) || navigator.language || "").toLowerCase().slice(0, 2);
        if (!l) return;
        var doel = l === "nl" ? "nl" : (l === "de" ? "de" : "en");
        if (doel === document.documentElement.lang) return;
        var a = document.querySelector('link[rel="alternate"][hreflang="' + doel + '"]');
        if (a) location.replace(a.getAttribute("href").replace(/^https?:\/\/[^\/]+/, "") + location.search + location.hash);
      } catch (e) {}
    })();
  </script>
'@
function Balk($L, [string]$pad) {
  $u = $L.ui; $p = $L.pre
@"
  <header class="bar" id="bar">
    <a href="$p/" class="brand" aria-label="$($u.brandAria)">
      <img src="/assets/img/logo-icon.svg" alt="" width="36" height="36">
      <span class="brand__word">Gravel <b>Gorilla</b></span>
    </a>
    <nav class="bar__links" aria-label="$($u.menuAria)">
      <a href="$p/#wegwijzer">$($u.tools)</a>
      <a href="$p/over-ons/">$($u.overOns)</a>
    </nav>
$(TaalMenu $L $pad)
    <button class="thema-knop" id="themaKnop" type="button" aria-label="$($u.themaAria)" title="$($u.themaTitel)">
      <svg class="icon-zon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></g></svg>
      <svg class="icon-maan" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>
    </button>
    <button class="bar__menu" aria-label="$($u.menuOpen)" aria-expanded="false"><span></span><span></span></button>
  </header>
"@
}
function VoetHtml($L) {
  $u = $L.ui; $p = $L.pre
@"
  <footer class="voet">
    <div class="voet__band" aria-hidden="true"></div>
    <div class="voet__binnen">
      <p class="voet__slot">$($u.voetSlot)</p>
      <nav aria-label="$($u.voetNav)">
        <a href="$p/#wegwijzer">$($u.tools)</a><a href="$p/over-ons/">$($u.overOns)</a><a href="$p/contact/">$($u.contact)</a><a href="$p/privacy/">$($u.privacy)</a>
      </nav>
    </div>
    <p class="voet__woord" aria-hidden="true">Gravel Gorilla</p>
    <p class="voet__klein">$($u.voetKlein)</p>
  </footer>
"@
}

# $pad is het taalvrije pad (bijv. /over-ons/); het echte adres wordt /en/over-ons/ enz.
function Kop([string]$titel, [string]$beschrijving, [string]$pad, [string[]]$css = @(), [string]$beeld = "", [string]$soort = "website", [string]$schema = "", $L = $nl) {
  $extraCss = ($css | ForEach-Object { "  <link rel=""stylesheet"" href=""/assets/css/$_"">" }) -join "`n"
  $ogBeeld = if ($beeld) { "$site$beeld" } elseif ($L.taal -ne "nl") { "$site/assets/img/deelplaatje-$($L.taal).png" } else { "$site/assets/img/deelplaatje.png" }   # deelplaatje per taal (ontwerp: .claude/deelplaatje.html)
  $adres = TaalPad $L $pad
@"
<!doctype html>
<html lang="$($L.taal)">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#F4F1EA" media="(prefers-color-scheme: light)">
  <meta name="theme-color" content="#15181A" media="(prefers-color-scheme: dark)">
  <title>$(Html $titel)</title>
  <meta name="description" content="$(Html $beschrijving)">
  <link rel="canonical" href="$site$adres">
$(Alternatieven $pad)
  <meta property="og:type" content="$soort">
  <meta property="og:title" content="$(Html $titel)">
  <meta property="og:description" content="$(Html $beschrijving)">
  <meta property="og:url" content="$site$adres">
  <meta property="og:image" content="$ogBeeld">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta property="og:locale" content="$($L.ogLocale)">
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

$(Balk $L $pad)

"@
}

function Voet([string[]]$js = @(), $L = $nl) {
  $extraJs = ($js | ForEach-Object { "  <script src=""/assets/js/$_""></script>" }) -join "`n"
@"

$(VoetHtml $L)

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
  [ordered]@{ slug = 'ultra-eventkiezer'; km = '04'; kop = 'Ultra-event<wbr><span class="groen">kiezer</span>'; titel = 'Ultra-eventkiezer'
    seoTitel = 'Ultra gravel events 2027–2028 kiezen | Gravel Gorilla'
    sub = 'Welke ultra gravel-event past bij jouw ervaring, conditie en agenda?'; beschrijving = 'Kalender met 80 ultra gravel- en bikepacking-events in 2027 en 2028. Filter op maand, land, afstand, ondergrond en fiets en vind het event dat bij je past.'
    naamKort = 'Ultra-eventkiezer'; kort = 'Welk ultra gravel-event past bij jouw ervaring, conditie en agenda? Je krijgt een shortlist.'
    filter = 'plannen'; plaatje = 'vlag'
    soort = 'kiezer'; scope = 'ue-scope'; uitlegKop = 'Over deze kiezer' }
  [ordered]@{ slug = 'profielsticker'; km = '05'; kop = 'Profiel<wbr><span class="groen">sticker</span>'; titel = 'Profielsticker'
    seoTitel = 'Profielsticker maken van je GPX (gratis) | Gravel Gorilla'
    sub = 'Van GPX naar sticker voor je bovenbuis of stuur. Met de klimmen, je posten, je wattage en precies wanneer je moet eten.'; beschrijving = 'Maak gratis een profielsticker van je GPX voor je bovenbuis of stuur: hoogteprofiel, klimmen, ondergrond, posten, wattage en eetmomenten. Printen of downloaden.'
    naamKort = 'Profielsticker'; kort = 'Van GPX naar sticker voor je bovenbuis: klimmen, posten, wattage en wanneer je moet eten.'
    filter = 'plannen'; plaatje = 'profiel'
    soort = 'venster'; talen = @('nl'); uitlegKop = 'Nooit meer gokken wat er na de bocht komt' }
  [ordered]@{ slug = 'kledingadvies'; km = '06'; kop = 'Kleding<wbr><span class="groen">advies</span>'; titel = 'Kledingadvies'
    seoTitel = 'Wat trek ik aan op de fiets? Kledingadvies | Gravel Gorilla'
    sub = 'Te warm of te koud? Vul het weer en je rit in en zie per lichaamsdeel wat je aantrekt, en wat er in je achterzak moet.'; beschrijving = 'Wat trek je aan op de gravelbike? Gratis kledingadvies op basis van temperatuur, wind, regen, ritduur en tempo, met de weersverwachting voor jouw plek.'
    naamKort = 'Kledingadvies'; kort = 'Te warm of te koud? Zie per lichaamsdeel wat je aantrekt, met de weersverwachting voor jouw rit.'
    filter = 'plannen'; plaatje = 'jas'
    soort = 'kiezer'; scope = 'kl-scope'; uitlegKop = 'Nooit meer te warm of te koud' }
  [ordered]@{ slug = 'gravelbanden-kiezer'; km = '07'; kop = 'Gravel&shy;banden <span class="groen">Kiezer</span>'; titel = 'Gravelbanden Kiezer'
    seoTitel = 'Welke gravelband past bij jou? Bandenkiezer | Gravel Gorilla'
    sub = 'Schuif je ondergrond, rijstijl en weer aan en zie welke breedte, welk profiel en welke banden bij je passen.'; beschrijving = 'Welke gravelband kies je? Stel ondergrond, rijstijl en weer in en krijg advies over breedte en profiel, plus de best passende banden uit ruim 40 modellen.'
    naamKort = 'Banden Kiezer'; kort = 'Ondergrond, rijstijl en weer instellen, en zien welke breedte, welk profiel en welke banden passen.'
    filter = 'kiezen'; plaatje = 'band'
    soort = 'kiezer'; scope = 'gb-scope'; uitlegKop = 'Zo kies je de juiste gravelband' }
  [ordered]@{ slug = 'maatbepaler'; km = '08'; kop = 'Maat<wbr><span class="groen">bepaler</span>'; titel = 'Maatbepaler'
    seoTitel = 'Welke framemaat gravelbike? Maatbepaler | Gravel Gorilla'
    sub = 'Vul je lengte en binnenbeenlengte in en zie welke framemaat, zadelhoogte en stack en reach bij je passen. Ook als je tussen twee maten zit.'; beschrijving = 'Welke framemaat gravelbike heb je nodig? Bereken je maat met je lengte en binnenbeenlengte, plus zadelhoogte en stack en reach. Met advies als je tussen twee maten zit.'
    naamKort = 'Maatbepaler'; kort = 'Je lengte en binnenbeen erin, en zien welke framemaat en zadelhoogte passen. Ook tussen twee maten.'
    filter = 'berekenen'; plaatje = 'maat'; label = 'Nieuw'
    soort = 'kiezer'; scope = 'wb-scope mb-scope'; uitlegKop = 'Zo kies je de juiste framemaat' }
  [ordered]@{ slug = 'paklijst-bikepacking'; km = '09'; kop = 'Pak<wbr><span class="groen">lijst</span>'; titel = 'Paklijst bikepacking'
    seoTitel = 'Paklijst bikepacking: wat neem je mee? | Gravel Gorilla'
    sub = 'Een afvinklijst die meegroeit met je tocht: duur, seizoen, slapen en eten. Met het gewicht erbij.'; beschrijving = 'Bikepacking paklijst die zich aanpast aan je tocht: kies duur, seizoen, slapen en bevoorrading en vink af wat je meeneemt. Met gewicht, kopiëren en printen.'
    naamKort = 'Paklijst bikepacking'; kort = 'Een afvinklijst per tochtlengte en seizoen, met het gewicht van je bagage erbij.'
    filter = 'plannen'; plaatje = 'tas'; label = 'Nieuw'
    soort = 'kiezer'; scope = 'wb-scope pk-scope'; uitlegKop = 'Nooit meer iets vergeten' }
  [ordered]@{ slug = 'gravelroutes'; km = '10'; kop = 'Gravel<wbr><span class="groen">routes</span>'; titel = 'Gravelroutes in Nederland en België'
    seoTitel = 'Gravelroutes in Nederland en België | Gravel Gorilla'
    sub = 'Officiële gravelroutes en GPX-routes in Nederland en Vlaanderen. Kies een provincie, een lengte en hoe je de weg vindt.'; beschrijving = 'Gravelroutes in Nederland en België op een rij: bewegwijzerde routes en GPX-routes per provincie, te filteren op lengte. Met links naar de officiële bron.'
    naamKort = 'Gravelroutes'; kort = 'Bewegwijzerde gravelroutes en GPX-routes in Nederland en Vlaanderen, per provincie en lengte.'
    filter = 'plannen'; plaatje = 'kaart'; label = 'Nieuw'
    soort = 'kiezer'; scope = 'wb-scope gr-scope'; uitlegKop = 'Gravelen waar het mag' }
  [ordered]@{ slug = 'versnellingscalculator'; km = '11'; kop = 'Versnellings<wbr><span class="groen">calculator</span>'; titel = 'Versnellingscalculator'
    seoTitel = 'Versnellingscalculator gravelbike: voorblad en cassette | Gravel Gorilla'
    sub = 'Kies je voorblad en cassette en zie je lichtste verzet, je topsnelheid en hoe steil je nog fietsend omhoog komt. Vergelijk twee opstellingen.'; beschrijving = 'Welk voorblad en welke cassette voor je gravelbike? Bereken je lichtste verzet, topsnelheid en de steilste klim die je haalt, en vergelijk twee opstellingen.'
    naamKort = 'Versnellingen'; kort = 'Voorblad en cassette vergelijken: je lichtste verzet en hoe steil je nog omhoog komt.'
    filter = 'berekenen'; plaatje = 'tandwiel'; label = 'Nieuw'
    soort = 'kiezer'; scope = 'wb-scope vs-scope'; uitlegKop = 'Het juiste verzet voor elke klim' }
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
  maat    = '<svg viewBox="0 0 100 100" width="100" height="100"><path d="M20 78 L48 30 L80 30 M48 30 L60 78 L20 78 M60 78 L80 30" fill="none" stroke="#15181A" stroke-width="6" stroke-linejoin="round" stroke-linecap="round"/><path d="M44 30 L40 16 M32 16 H50" stroke="#15181A" stroke-width="5" stroke-linecap="round"/><path d="M88 14 V86" stroke="#FF6B2C" stroke-width="4"/><path d="M82 14 H94 M82 86 H94 M84 32 H92 M84 50 H92 M84 68 H92" stroke="#FF6B2C" stroke-width="3"/></svg>'
  tas     = '<svg viewBox="0 0 100 100" width="96" height="96"><rect x="14" y="26" width="72" height="56" rx="12" fill="#2F8F3E"/><path d="M36 26 V18 Q36 12 42 12 H58 Q64 12 64 18 V26" fill="none" stroke="#15181A" stroke-width="5"/><path d="M30 48 l6 6 l12 -12 M30 66 l6 6 l12 -12" fill="none" stroke="#F4F1EA" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M56 48 H72 M56 66 H72" stroke="#F4F1EA" stroke-width="5" stroke-linecap="round"/><circle cx="80" cy="26" r="9" fill="#FF6B2C"/></svg>'
  kaart   = '<svg viewBox="0 0 100 100" width="100" height="100"><path d="M12 24 L36 14 L64 24 L88 14 V76 L64 86 L36 76 L12 86 Z" fill="#E3DDCF" stroke="#15181A" stroke-width="4" stroke-linejoin="round"/><path d="M36 14 V76 M64 24 V86" stroke="#15181A" stroke-width="3"/><path d="M20 66 Q34 40 50 52 T80 30" fill="none" stroke="#2F8F3E" stroke-width="5" stroke-dasharray="7 5" stroke-linecap="round"/><circle cx="80" cy="30" r="7" fill="#FF6B2C"/></svg>'
  tandwiel = '<svg viewBox="0 0 100 100" width="100" height="100">' + ((0..11 | ForEach-Object { '<rect x="45" y="8" width="10" height="12" rx="2" fill="#15181A" transform="rotate(' + ($_ * 30) + ' 50 50)"/>' }) -join '') + '<circle cx="50" cy="50" r="32" fill="#15181A"/><circle cx="50" cy="50" r="22" fill="#2F8F3E"/><circle cx="50" cy="50" r="8" fill="#FF6B2C"/><circle cx="50" cy="50" r="3" fill="#15181A"/></svg>'
}

# Veelgestelde vragen van een tool lezen uit inhoud/tools/<naam>-faq.html (paren van <h3>vraag</h3><p>antwoord</p>)
function LeesFaq([string]$rel) {
  $bestand = "$root\$rel"
  if (-not (Test-Path $bestand)) { return @() }
  $tekst = [IO.File]::ReadAllText($bestand, [Text.Encoding]::UTF8)
  @([regex]::Matches($tekst, '(?s)<h3>(.*?)</h3>\s*<p>(.*?)</p>') | ForEach-Object {
    [ordered]@{ vraag = $_.Groups[1].Value.Trim(); antwoord = $_.Groups[2].Value.Trim() }
  })
}
function KaleTekst([string]$s) { [Net.WebUtility]::HtmlDecode(([regex]::Replace($s, '<[^>]+>', ''))).Trim() }

# de tools met de teksten in een bepaalde taal (ontbreekt een vertaling, dan het Nederlands)
function ToolsIn($L) {
  $tools | ForEach-Object {
    $t = [ordered]@{}; foreach ($k in $_.Keys) { $t[$k] = $_[$k] }
    if ($L.taal -ne 'nl') {
      $t.label = $null
      $v = $L.tools[$_.slug]
      if ($v) { foreach ($k in $v.Keys) { $t[$k] = $v[$k] } }
    }
    $t
  }
}
# vertaald bestand als het er is, anders het Nederlandse; zegt ook of het vertaald is
function Bron($L, [string]$rel) {
  if ($L.taal -ne 'nl' -and (Test-Path "$root\inhoud\$($L.taal)\$rel")) { return @{ pad = "inhoud\$($L.taal)\$rel"; vertaald = $true } }
  @{ pad = "inhoud\$rel"; vertaald = ($L.taal -eq 'nl') }
}

# Vertaallijsten voor de grote, ingeladen tools: inhoud/vertalingen/<tool>.txt
# Per regel "Nederlands ‖ Engels ‖ Duits", in de secties [js], [html] en [venster]. Het bouwscript maakt daarmee
# de Engelse en Duitse versie van de code (assets/js/<tool>.en.js enz.), zodat de Nederlandse bron ongemoeid blijft.
function LeesVertaling([string]$slug) {
  $pad = "$root\inhoud\vertalingen\$slug.txt"
  if (-not (Test-Path $pad)) { return $null }
  $secties = @{}; $huidig = 'js'
  foreach ($r in [IO.File]::ReadAllLines($pad, [Text.Encoding]::UTF8)) {
    if ($r -match '^\s*(#|$)') { continue }
    if ($r -match '^\[(\w+)\]\s*$') { $huidig = $Matches[1]; continue }
    $d = $r -split ' ‖ '
    if ($d.Count -ge 3) { if (-not $secties[$huidig]) { $secties[$huidig] = @() }; $secties[$huidig] += , @($d[0], $d[1], $d[2]) }
  }
  $secties
}
function Vertaal([string]$tekst, $paren, [int]$i, [string]$wat) {
  # langste teksten eerst, zodat een kort woord niet een stuk van een langere zin vervangt
  foreach ($p in ($paren | Sort-Object { - $_[0].Length })) {
    if ($tekst.Contains($p[0])) { $tekst = $tekst.Replace($p[0], $p[$i]) }
    else { Write-Host "LET OP: vertaling ($wat) niet gevonden: $($p[0].Substring(0, [Math]::Min(80, $p[0].Length)))" }
  }
  $tekst
}

foreach ($L in $talen) {
$toolsHier = @(ToolsIn $L)
foreach ($t in $toolsHier) {
  $pad = "/tools/$($t.slug)/"
  $css = @(); $js = @(); $subId = ''
  $toolBron = Bron $L "tools\$($t.slug)-tool.html"
  $toolHtml = if ($t.soort -ne 'venster') { Lees $toolBron.pad } else { '' }
  $vt = if ($L.taal -ne 'nl') { LeesVertaling $t.slug } else { $null }
  $ti = @{ en = 1; de = 2 }[$L.taal]
  if ($vt -and $vt['html'] -and -not $toolBron.vertaald) { $toolHtml = Vertaal $toolHtml $vt['html'] $ti "$($t.slug) html $($L.taal)"; $toolBron.vertaald = $true }
  # nog niet vertaalde tool: een korte melding erboven
  #   (een toolvenster zoals de profielsticker heeft een eigen vertaalde versie; welke talen het kan staat in $t.talen)
  $vertaald = if ($t.soort -eq 'venster') { (@($t.talen) -contains $L.taal) -or ($vt -and $vt['venster']) } else { $toolBron.vertaald }
  $melding = if (-not $vertaald) { "    <p class=""tool-melding"">$($L.ui.alleenNl)</p>`n" } else { '' }
  switch ($t.soort) {
    'kiezer' {
      $scope = if ($t.scope) { $t.scope } else { 'gk-scope' }
      $css = @("$($t.slug).css"); $js = @("$($t.slug).js"); if ($scope -eq 'gk-scope') { $subId = ' id="gk-sub-text"' }
      if ($scope -match 'wb-scope') { $css = @('werkbank.css') + $css }   # de nieuwe tools delen hun basisopmaak
      if ($vt -and $vt['js']) {
        # vertaalde kopie van de code van deze tool
        Schrijf "assets\js\$($t.slug).$($L.taal).js" (Vertaal (Lees "assets\js\$($t.slug).js") $vt['js'] $ti "$($t.slug).js $($L.taal)")
        $js = @("$($t.slug).$($L.taal).js")
      }
      $tool = $melding + "    <div class=""$scope"">`n" + (Prefix $toolHtml $L) + "    </div>"
    }
    'blok' {
      $tool = $melding + "    <div class=""tool-vak"">`n" + (Prefix $toolHtml $L) + "    </div>"
      if ($t.slug -eq 'bandenspanning-calculator') {
        # komt iemand uit de bandenkiezer (?breedte=45), zet dan meteen die bandbreedte klaar
        $tool += "`n    <script>(function () { var b = new URLSearchParams(location.search).get(""breedte""), s = document.getElementById(""ggWidth""); if (b && s) { s.value = Math.max(28, Math.min(55, parseInt(b, 10) || 40)); s.dispatchEvent(new Event(""input"", { bubbles: true })); } })();</script>"
      }
    }
    'venster' {
      # versienummer van de tool, zodat browsers een nieuwe versie meteen ophalen; de taal gaat mee in het adres
      #   een vertaald venster (sectie [venster] in inhoud/vertalingen/<slug>.txt) wordt tool.<taal>.html
      $vensterNaam = 'tool.html'
      if ($vt -and $vt['venster']) {
        $vensterNaam = "tool.$($L.taal).html"
        Schrijf "tools\$($t.slug)\$vensterNaam" (Vertaal (Lees "tools\$($t.slug)\tool.html") $vt['venster'] $ti "$($t.slug) venster $($L.taal)")
      }
      $toolVersie = ([Security.Cryptography.MD5]::Create().ComputeHash([IO.File]::ReadAllBytes("$root\tools\$($t.slug)\$vensterNaam")) | Select-Object -First 4 | ForEach-Object { $_.ToString('x2') }) -join ''
      $tool = $melding + @"
    <div class="tool-vak">
      <div class="tool-frame"><iframe src="/tools/$($t.slug)/$($vensterNaam)?v=$toolVersie&amp;taal=$($L.taal)" id="toolVenster" title="$(Html $t.titel)" loading="lazy"></iframe></div>
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
  $uitleg = Prefix (Lees (Bron $L "tools\$($t.slug)-uitleg.html").pad) $L
  $u = $L.ui

  # Vraag de Gorilla onder de tool (de gravelbike- en wielenkiezer hebben er zelf al een in de tool)
  $gorillaHtml = ''
  if (@('gravelbike-kiezer', 'gravelwielen-kiezer') -notcontains $t.slug) {
    $js = @($js) + 'vraag-gorilla.js'
    $gorillaHtml = @"
    <section class="vg" id="vraagGorilla" data-tool="$($t.slug)" aria-labelledby="vg-kop">
      <div class="vg__kop">
        <img src="/assets/img/logo-icon.svg" alt="" width="56" height="56">
        <div>
          <h2 id="vg-kop">$($u.vgKop)</h2>
          <p>$($u.vgUitleg)</p>
        </div>
      </div>
      <form class="vg__rij" autocomplete="off">
        <input class="vg__invoer" type="text" aria-label="$($u.vgAria)" placeholder="$($u.vgPlek)">
        <button class="knop knop--actie" type="submit">$($u.vgKnop)</button>
      </form>
      <div class="vg__voorbeelden" aria-label="$($u.vgVoorbeelden)"></div>
      <div class="vg__antwoord" aria-live="polite" hidden></div>
    </section>
"@
  }

  # veelgestelde vragen
  $faq = @(LeesFaq (Bron $L "tools\$($t.slug)-faq.html").pad)
  $faqHtml = ''
  if ($faq.Count) {
    $faqHtml = "    <section class=""lees tool-faq"" aria-labelledby=""faq-kop"">`n      <h2 class=""tool-uitleg-kop"" id=""faq-kop"">$($u.faqKop)</h2>`n" +
      (($faq | ForEach-Object { "      <h3>$($_.vraag)</h3>`n      <p>$(Prefix $_.antwoord $L)</p>" }) -join "`n") + "`n    </section>"
  }

  # andere tools (interne links)
  $anderen = ($toolsHier | Where-Object { $_.slug -ne $t.slug } | ForEach-Object {
    "        <a href=""$($L.pre)/tools/$($_.slug)/"" class=""ander""><span class=""ander__km"" data-km-tool=""$($_.slug)"">KM $($_.km)</span><strong>$(Html $_.titel)</strong><span>$(Html $_.kort)</span></a>"
  }) -join "`n"

  # gestructureerde informatie: webtool + broodkruimel + vragen
  $adres = "$site$(TaalPad $L $pad)"
  $org = [ordered]@{}; foreach ($k in $organisatie.Keys) { $org[$k] = $organisatie[$k] }; if ($L.orgBeschrijving) { $org.description = $L.orgBeschrijving }
  $schemaObj = [ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
    [ordered]@{ '@type' = 'WebApplication'; '@id' = "$adres#tool"; name = $t.titel; url = $adres; description = $t.beschrijving
      applicationCategory = 'SportsApplication'; operatingSystem = 'Web'; inLanguage = $L.taal; isAccessibleForFree = $true
      offers = [ordered]@{ '@type' = 'Offer'; price = '0'; priceCurrency = 'EUR' }; publisher = @{ '@id' = "$site/#organisatie" } }
    [ordered]@{ '@type' = 'BreadcrumbList'; itemListElement = @(
      [ordered]@{ '@type' = 'ListItem'; position = 1; name = 'Gravel Gorilla'; item = "$site$($L.pre)/" }
      [ordered]@{ '@type' = 'ListItem'; position = 2; name = $u.broodTools; item = "$site$($L.pre)/#wegwijzer" }
      [ordered]@{ '@type' = 'ListItem'; position = 3; name = $t.titel; item = $adres }) }
    $org
  ) }
  if ($faq.Count) {
    $schemaObj['@graph'] += [ordered]@{ '@type' = 'FAQPage'; '@id' = "$adres#faq"; mainEntity = @($faq | ForEach-Object {
      [ordered]@{ '@type' = 'Question'; name = (KaleTekst $_.vraag); acceptedAnswer = [ordered]@{ '@type' = 'Answer'; text = (KaleTekst $_.antwoord) } } }) }
  }

  # deelknop: op een telefoon het deelmenu van de telefoon, anders een klein menu (link kopiëren, WhatsApp, e-mail).
  # Geen knoppen of code van Facebook en co: die volgen bezoekers. Werking in site.js.
  $deelTekst = "$($t.titel): $($t.sub)"
  $deelHtml = {
    param([string]$extra)
    $wa = [Uri]::EscapeDataString("$deelTekst $adres")
    $mail = "mailto:?subject=$([Uri]::EscapeDataString($u.deelOnderwerp + ': ' + $t.titel))&amp;body=$([Uri]::EscapeDataString("$deelTekst`n$adres"))"
@"
      <div class="deelknop$extra" data-deel-url="$adres" data-deel-titel="$(Html $t.titel)" data-deel-tekst="$(Html $deelTekst)" data-deel-klaar="$(Html $u.deelGekopieerd)">
        <button class="deelknop__knop" type="button" aria-expanded="false"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></g></svg><span>$($u.deel)</span></button>
        <div class="deelknop__menu" hidden>
          <button type="button" data-deel-kopie>$($u.deelKopie)</button>
          <a href="https://wa.me/?text=$wa" target="_blank" rel="noopener">WhatsApp</a>
          <a href="$mail">$($u.deelMail)</a>
        </div>
      </div>
"@
  }
  $pagina = (Kop $t.seoTitel $t.beschrijving $pad $css "" "website" (JsonLd $schemaObj) $L) + @"
  <main>
    <section class="pagina-kop">
      <a href="$($L.pre)/" class="terug">$($u.terugTools)</a>
      <p class="pagina-km" data-km-tool="$($t.slug)">KM $($t.km)</p>
      <p class="pagina-teller" data-teller="$($t.slug)" hidden></p>
      <h1 class="kop-l">$($t.kop)</h1>
      <p class="pagina-sub"$subId>$(Html $t.sub)</p>
$(& $deelHtml '')
    </section>
$tool
    <section class="deel-balk">
      <p>$($u.deelVraag)</p>
$(& $deelHtml ' deelknop--actie')
    </section>
    <section class="stem-balk">
      <p>$($u.stemVraag)</p>
      <div class="stem stem--groot" data-stem-tool="$($t.slug)" hidden></div>
    </section>
$gorillaHtml
    <article class="lees tool-uitleg">
      <h2 class="tool-uitleg-kop">$(Html $t.uitlegKop)</h2>
$uitleg
    </article>
$faqHtml
    <section class="andere-tools" aria-labelledby="andere-kop">
      <h2 class="kop-l" id="andere-kop">$($u.andereKop)</h2>
      <div class="andere-raster">
$anderen
      </div>
    </section>
  </main>
"@ + (Voet (@($js) + 'teller.js') $L)
  $map = if ($L.taal -eq 'nl') { "tools\$($t.slug)" } else { "$($L.taal)\tools\$($t.slug)" }
  Schrijf "$map\index.html" $pagina
  "tool: $(TaalPad $L $pad)"
}
}

# ---------- Over ons ----------
$aantalWoord = @("nul", "een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien")[$tools.Count]
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
      <p class="pagina-sub">Van frustratie naar $aantalWoord tools. Te veel artikelen beloofden een antwoord en lieten je toch met een gok zitten. Daarom bouwen we tools die voor jou rekenen en kiezen.</p>
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
      <div class="cijfer"><strong>$($tools.Count)</strong><span>gratis interactieve tools</span></div>
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
      <h3>Stemmen op de tools</h3>
      <p>Je kunt een tool een stem omhoog of omlaag geven. Opgeslagen wordt alleen het totaal aantal stemmen per tool. Welke stem jij gaf, onthoudt alleen je eigen browser, zodat je je stem kunt veranderen of intrekken.</p>
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

# ---------- Over ons, contact en privacy in de andere talen ----------
# De inhoud staat in inhoud/<taal>/pagina/<naam>.html, titel en beschrijving in inhoud/talen/<taal>.psd1 (paginas).
foreach ($L in ($talen | Where-Object { $_.taal -ne 'nl' })) {
  foreach ($naam in 'over-ons', 'contact', 'privacy') {
    $bron = "inhoud\$($L.taal)\pagina\$naam.html"
    if (-not (Test-Path "$root\$bron")) { continue }
    $info = $L.paginas[$naam]
    $inhoud = (Lees $bron).Replace('{{AANTAL}}', [string]$tools.Count).Replace('{{AANTALWOORD}}', [string]$L.getallen[$tools.Count]).Replace('{{MAIL}}', $ContactMail)
    $soortPagina = @{ 'over-ons' = 'AboutPage'; contact = 'ContactPage'; privacy = 'WebPage' }[$naam]
    $org = [ordered]@{}; foreach ($k in $organisatie.Keys) { $org[$k] = $organisatie[$k] }; $org.description = $L.orgBeschrijving
    $schemaPagina = JsonLd ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
      [ordered]@{ '@type' = $soortPagina; url = "$site$($L.pre)/$naam/"; name = $info.titel; inLanguage = $L.taal; about = @{ '@id' = "$site/#organisatie" } }
      $org) })
    $pagina = (Kop $info.titel $info.beschrijving "/$naam/" @() "" "website" $schemaPagina $L) + (Prefix $inhoud $L) + (Voet @() $L)
    Schrijf "$($L.taal)\$naam\index.html" $pagina
    "pagina: $($L.pre)/$naam/"
  }
}

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
# index.html is de Nederlandse bron. De Engelse en Duitse homepage (/en/, /de/) worden daaruit gemaakt met de
# vertaallijst "home" in inhoud/talen/<taal>.psd1. Pas je een tekst op de homepage aan, pas dan ook die lijst aan:
# het script meldt het als een tekst niet meer gevonden wordt.
$bronHome = Lees "index.html"
$main = Lees "assets\js\main.js"
foreach ($L in $talen) {
  $toolsHier = @(ToolsIn $L)
  $voorpagina = $bronHome
  # menubalk (met taalmenu) en voet uit de gedeelde onderdelen
  $voorpagina = [regex]::Replace($voorpagina, '(?s)  <header class="bar" id="bar">.*?</header>', { param($m) Balk $L '/' })
  $voorpagina = [regex]::Replace($voorpagina, '(?s)  <footer class="voet">.*?</footer>', { param($m) VoetHtml $L })

  $i = 0
  $bordjesHtml = ($toolsHier | ForEach-Object {
    $label = if ($_.label) { "<span class=""bordje__label"">$(Html $_.label)</span>" } else { '' }
    $soortTekst = $L.ui.filters[$_.filter]
    $zoek = (Html ("$($_.naamKort) $($_.titel) $($_.kort) $soortTekst".ToLower()))
    $li = @"
        <li class="bordje" data-soort="$($_.filter)" data-zoek="$zoek" style="--v:$($i * 80)ms">
          <a href="$($L.pre)/tools/$($_.slug)/">
            <span class="bordje__km" aria-label="Kilometer $($_.km)"><span class="bordje__bord"><small>KM</small>$($_.km)</span></span>
            <span class="bordje__naam">$(Html $_.naamKort)$label</span>
            <span class="bordje__uitleg">$(Html $_.kort)<span class="bordje__teller" data-teller-tool="$($_.slug)" hidden></span></span>
            <span class="bordje__soort">$soortTekst</span>
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
  #   (eerste regel van TIPS_ALLE in main.js; de link krijgt hieronder via Prefix vanzelf /en of /de ervoor)
  $m1 = [regex]::Match($main, '\{ t: "([^"]+)", nl: "([^"]+)", en: "([^"]+)", de: "([^"]+)" \}')
  $tip = if ($m1.Success) { @{ tekst = $m1.Groups[@{ nl = 2; en = 3; de = 4 }[$L.taal]].Value; link = "/tools/$($m1.Groups[1].Value)/" } } else { Write-Host "LET OP: eerste gorilla-tip niet gevonden in main.js"; $null }
  if ($tip) {
    $voorpagina = [regex]::Replace($voorpagina, '(?s)(<blockquote class="tips__tekst" id="tipTekst"[^>]*>).*?(</blockquote>)', { param($m) $m.Groups[1].Value + '“' + $tip.tekst + '”' + $m.Groups[2].Value })
    $voorpagina = [regex]::Replace($voorpagina, '<a href="[^"]*" class="tips__link" id="tipLink">', '<a href="' + $tip.link + '" class="tips__link" id="tipLink">')
  }

  # gestructureerde informatie: website, organisatie en de lijst met tools
  $org = [ordered]@{}; foreach ($k in $organisatie.Keys) { $org[$k] = $organisatie[$k] }; if ($L.orgBeschrijving) { $org.description = $L.orgBeschrijving }
  $homeSchema = JsonLd ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
    [ordered]@{ '@type' = 'WebSite'; '@id' = "$site/#website"; name = 'Gravel Gorilla'; url = "$site$($L.pre)/"; inLanguage = $L.taal; publisher = @{ '@id' = "$site/#organisatie" } }
    $org
    [ordered]@{ '@type' = 'ItemList'; name = $L.lijstNaam; itemListElement = @($toolsHier | ForEach-Object -Begin { $n = 0 } -Process {
      $n++; [ordered]@{ '@type' = 'ListItem'; position = $n; name = $_.titel; url = "$site$($L.pre)/tools/$($_.slug)/"; description = $_.kort } }) }
  ) })
  if ($voorpagina -match '<!--SCHEMA-->') {
    $voorpagina = [regex]::Replace($voorpagina, '(?s)<!--SCHEMA-->.*?<!--/SCHEMA-->', { param($m) "<!--SCHEMA-->`n$homeSchema`n  <!--/SCHEMA-->" })
  } else {
    $voorpagina = $voorpagina.Replace('</head>', "  <!--SCHEMA-->`n$homeSchema`n  <!--/SCHEMA-->`n</head>")
  }
  # links naar de andere talen (voor Google)
  $talenHtml = "<!--TALEN-->`n$(Alternatieven '/')`n  <!--/TALEN-->"
  if ($voorpagina -match '<!--TALEN-->') {
    $voorpagina = [regex]::Replace($voorpagina, '(?s)<!--TALEN-->.*?<!--/TALEN-->', { param($m) $talenHtml })
  } else {
    $voorpagina = [regex]::Replace($voorpagina, '(<link rel="canonical"[^>]*>)', { param($m) $m.Groups[1].Value + "`n  " + $talenHtml })
  }

  if ($L.taal -eq 'nl') {
    Schrijf "index.html" $voorpagina
  } else {
    foreach ($paar in $L.home) {
      if ($voorpagina.Contains($paar[0])) { $voorpagina = $voorpagina.Replace($paar[0], $paar[1]) }
      else { "LET OP: homepage $($L.taal): tekst niet gevonden, vertaling bijwerken: $($paar[0])" }
    }
    $voorpagina = $voorpagina.Replace('<html lang="nl">', "<html lang=""$($L.taal)"">")
    $voorpagina = $voorpagina.Replace('<link rel="canonical" href="https://gravelgorilla.nl/">', "<link rel=""canonical"" href=""$site$($L.pre)/"">")
    $voorpagina = $voorpagina.Replace('<meta property="og:url" content="https://gravelgorilla.nl/">', "<meta property=""og:url"" content=""$site$($L.pre)/"">")
    $voorpagina = $voorpagina.Replace('<meta property="og:locale" content="nl_NL">', "<meta property=""og:locale"" content=""$($L.ogLocale)"">")
    $voorpagina = $voorpagina.Replace("/assets/img/deelplaatje.png", "/assets/img/deelplaatje-$($L.taal).png")
    # interne links in de pagina zelf (niet in het taalmenu) naar deze taal
    $voorpagina = [regex]::Replace($voorpagina, '(?s)<main>.*</main>', { param($m) Prefix $m.Value $L })
    Schrijf "$($L.taal)\index.html" $voorpagina
  }
}
"homepage: wegwijzer ($($tools.Count) tools), eerste tip en schema als HTML, in $($talen.Count) talen"

# ---------- llms.txt: korte samenvatting van de site voor AI-zoekmachines ----------
$llms = "# Gravel Gorilla`n`n> Onafhankelijke Nederlandstalige website (gravelgorilla.nl) met gratis interactieve tools voor gravelrijders in Nederland en België. Geen account nodig, geen advertenties.`n`n" +
  "Gravel Gorilla helpt gravelrijders met concrete keuzes: welke gravelbike en framemaat, welke banden, wielen en versnellingen, welke bandenspanning, waar je kunt graveln, welk ultra-event, wat je meeneemt en aantrekt, en hoe je je route op een sticker zet.`n`n## Tools`n`n" +
  (($tools | ForEach-Object { "- [$($_.titel)]($site/tools/$($_.slug)/): $($_.beschrijving)" }) -join "`n") +
  "`n`n## Over`n`n- [Over Gravel Gorilla]($site/over-ons/): gemaakt door Geert Jans, gravelrijder; wie erachter zit en hoe de tools worden gemaakt en bijgehouden.`n- [Contact]($site/contact/): info@gravelgorilla.nl`n- [Privacyverklaring]($site/privacy/): geen cookies, geen advertenties; welke gegevens de tools gebruiken.`n" +
  (($talen | Where-Object { $_.taal -ne 'nl' } | ForEach-Object {
    $L = $_
    "`n## $($L.naam) ($site$($L.pre)/)`n`n> $($L.orgBeschrijving)`n`n" + ((ToolsIn $L | ForEach-Object { "- [$($_.titel)]($site$($L.pre)/tools/$($_.slug)/): $($_.beschrijving)" }) -join "`n") + "`n"
  }) -join '')
Schrijf "llms.txt" $llms
"llms.txt: klaar"

# ---------- Sitemap, robots.txt ----------
$vandaag = Get-Date -Format 'yyyy-MM-dd'
$adressen = @(@('/', $vandaag), @('/over-ons/', $vandaag), @('/contact/', $vandaag), @('/privacy/', $vandaag))
$adressen += $tools | ForEach-Object { ,@("/tools/$($_.slug)/", $vandaag) }
# elke pagina in elke taal, met de links naar dezelfde pagina in de andere talen (hreflang)
$xml = "<?xml version=""1.0"" encoding=""UTF-8""?>`n<urlset xmlns=""http://www.sitemaps.org/schemas/sitemap/0.9"" xmlns:xhtml=""http://www.w3.org/1999/xhtml"">`n"
$regels = foreach ($a in $adressen) {
  $alt = (($talen | ForEach-Object { "<xhtml:link rel=""alternate"" hreflang=""$($_.taal)"" href=""$site$(TaalPad $_ $a[0])""/>" }) -join '') + "<xhtml:link rel=""alternate"" hreflang=""x-default"" href=""$site$($a[0])""/>"
  foreach ($L in $talen) { "  <url><loc>$site$(TaalPad $L $a[0])</loc><lastmod>$($a[1])</lastmod>$alt</url>" }
}
$xml += ($regels -join "`n") + "`n</urlset>`n"
Schrijf "sitemap.xml" $xml
Schrijf "robots.txt" "User-agent: *`nAllow: /`n`nSitemap: $site/sitemap.xml`n"
"sitemap: $(@($regels).Count) adressen ($($adressen.Count) pagina's in $($talen.Count) talen)"

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
# Testsite (test.gravelgorilla.nl): niet opnemen in zoekmachines
<IfModule mod_setenvif.c>
SetEnvIfNoCase Host "^test\." GG_TESTSITE
Header always set X-Robots-Tag "noindex, nofollow" env=GG_TESTSITE
</IfModule>
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
# Browsers bewaren css/js een dag en plaatjes een maand. Met ?v=<code van de inhoud> halen ze een gewijzigd bestand meteen opnieuw op.
$md5 = [Security.Cryptography.MD5]::Create()
$versies = @{}
function Versie($pad) { ($md5.ComputeHash([IO.File]::ReadAllBytes($pad)) | Select-Object -First 4 | ForEach-Object { $_.ToString('x2') }) -join '' }
Get-ChildItem "$root\assets\css", "$root\assets\js", "$root\assets\img" -File | ForEach-Object {
  $versies["/assets/$($_.Directory.Name)/$($_.Name)"] = Versie $_.FullName
}
$versies["/favicon.ico"] = Versie "$root\favicon.ico"
$paginas = Get-ChildItem $root -Recurse -Filter *.html | Where-Object { $_.FullName -notmatch '[\\/](_bron|inhoud|\.claude|\.git)[\\/]' }
foreach ($p in $paginas) {
  $t = [IO.File]::ReadAllText($p.FullName, [Text.Encoding]::UTF8)
  $nieuw = [regex]::Replace($t, '(/assets/(?:css|js|img)/[^"?]+|/favicon\.ico)(\?v=[0-9a-f]*)?"', [Text.RegularExpressions.MatchEvaluator]{
    param($m)
    $v = $versies[$m.Groups[1].Value]
    if ($v) { "$($m.Groups[1].Value)?v=$v""" } else { $m.Value }
  })
  if ($nieuw -ne $t) { [IO.File]::WriteAllText($p.FullName, $nieuw, $utf8) }
}
"versienummers: $($paginas.Count) pagina's bijgewerkt"

# ---------- versie.txt: code van deze versie van de site ----------
# Verandert alleen als een pagina, opmaak of code verandert. Zo is na het live zetten te controleren welke versie er staat.
$alles = ($paginas | Sort-Object FullName | ForEach-Object { Versie $_.FullName }) -join ''
$alles += ($versies.Keys | Sort-Object | ForEach-Object { $versies[$_] }) -join ''
$siteVersie = ($md5.ComputeHash([Text.Encoding]::UTF8.GetBytes($alles)) | Select-Object -First 6 | ForEach-Object { $_.ToString('x2') }) -join ''
Schrijf "versie.txt" "$siteVersie`n"
"versie: $siteVersie"
