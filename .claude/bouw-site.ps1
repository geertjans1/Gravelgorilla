# Bouwt alle vervolgpagina's van de site uit de map inhoud/:
#   /tools/<naam>/ (4 tools), /over-ons/, /contact/,
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
function Kop([string]$titel, [string]$beschrijving, [string]$pad, [string[]]$css = @(), [string]$beeld = "", [string]$soort = "website") {
  $extraCss = ($css | ForEach-Object { "  <link rel=""stylesheet"" href=""/assets/css/$_"">" }) -join "`n"
  $ogBeeld = if ($beeld) { "$site$beeld" } else { "$site/assets/img/logo-icon.svg" }
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
        <a href="/#wegwijzer">Tools</a><a href="/over-ons/">Over ons</a><a href="/contact/">Contact</a>
      </nav>
    </div>
    <p class="voet__woord" aria-hidden="true">Gravel Gorilla</p>
    <p class="voet__klein">© 2026 Gravel Gorilla · onafhankelijk gemaakt door een gravelliefhebber</p>
  </footer>

  <script src="/assets/js/site.js"></script>
$extraJs
</body>
</html>
"@
}

# ---------- De tools ----------
$tools = @(
  [ordered]@{ slug = 'gravelbike-kiezer'; km = '01'; kop = 'Gravelbike <span class="groen">Kiezer</span>'; titel = 'Gravelbike Kiezer'
    sub = 'Vind de gravelbike die bij je past.'; beschrijving = 'Vind in vijf korte vragen de gravelbike die bij je past. Een eerlijke Match Score met de redenen erbij, uit 147 modellen. Gratis en onafhankelijk.'
    soort = 'kiezer'; uitlegKop = 'Over deze kiezer' }
  [ordered]@{ slug = 'bandenspanning-calculator'; km = '02'; kop = 'Banden&shy;spanning <span class="groen">Calculator</span>'; titel = 'Bandenspanning Calculator'
    sub = 'De juiste spanning voor jouw gewicht, bandbreedte en ondergrond. Voor en achter apart, in bar en psi.'; beschrijving = 'Bereken de juiste bandenspanning voor je gravelbike: op basis van je gewicht, bandbreedte, wielmaat en ondergrond. Voor- en achterband apart, in bar en psi.'
    soort = 'blok'; uitlegKop = 'Waarom een paar tienden bar uitmaken' }
  [ordered]@{ slug = 'gravelwielen-kiezer'; km = '03'; kop = 'Gravelwielen <span class="groen">Kiezer</span>'; titel = 'Gravelwielen Kiezer'
    sub = 'Licht, stevig of juist snel? Vind de wielset die past bij je fiets en rijstijl.'; beschrijving = 'Vind de gravelwielset die bij je fiets, budget en rijstijl past. Carbon of aluminium, 700c of 650b: eerlijk advies uit ruim 100 wielsets.'
    soort = 'kiezer'; uitlegKop = 'Over deze kiezer' }
  [ordered]@{ slug = 'ultra-eventkiezer'; km = '04'; kop = 'Ultra-event<span class="groen">kiezer</span>'; titel = 'Ultra-eventkiezer'
    sub = 'Welke ultra gravel-event past bij jouw ervaring, conditie en agenda?'; beschrijving = 'Vind het ultra gravel-event dat bij je past. Beantwoord een paar vragen over ervaring, conditie, terrein en tijd en krijg een shortlist met events.'
    soort = 'kiezer'; scope = 'ue-scope'; uitlegKop = 'Over deze kiezer' }
  [ordered]@{ slug = 'profielsticker'; km = '05'; kop = 'Profiel<span class="groen">sticker</span>'; titel = 'Profielsticker'
    sub = 'Van GPX naar sticker voor je bovenbuis of stuur. Met de klimmen, je posten, je wattage en precies wanneer je moet eten.'; beschrijving = 'Maak gratis een profielsticker van je GPX voor op je bovenbuis of stuur: hoogteprofiel, klimmen, ondergrond, posten, wattage en eetmomenten. Printen of downloaden.'
    soort = 'venster'; uitlegKop = 'Nooit meer gokken wat er na de bocht komt' }
)

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
    }
    'venster' {
      $tool = @"
    <div class="tool-vak">
      <div class="tool-frame"><iframe src="tool.html" id="toolVenster" title="$(Html $t.titel)" loading="lazy"></iframe></div>
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
  $pagina = (Kop "$($t.titel) — Gravel Gorilla" $t.beschrijving $pad $css) + @"
  <main>
    <section class="pagina-kop">
      <a href="/#wegwijzer" class="terug">← Terug naar alle tools</a>
      <p class="pagina-km">KM $($t.km)</p>
      <p class="pagina-teller" data-teller="$($t.slug)" hidden></p>
      <h1 class="kop-l">$($t.kop)</h1>
      <p class="pagina-sub"$subId>$(Html $t.sub)</p>
    </section>
$tool
    <article class="lees tool-uitleg">
      <h2 class="tool-uitleg-kop">$(Html $t.uitlegKop)</h2>
$uitleg
    </article>
  </main>
"@ + (Voet (@($js) + 'teller.js'))
  Schrijf "tools\$($t.slug)\index.html" $pagina
  "tool: $pad"
}

# ---------- Over ons ----------
$pagina = (Kop "Over ons — Gravel Gorilla" "Gravel Gorilla is gebouwd door een gravelrijder. Gratis tools en eerlijke uitleg, zonder dat iemand je iets probeert te verkopen." "/over-ons/") + @"
  <main>
    <section class="pagina-kop">
      <a href="/" class="terug">← Home</a>
      <p class="pagina-km">Gebouwd door een gravelrijder</p>
      <h1 class="kop-l">Over <span class="groen">ons</span></h1>
      <p class="pagina-sub">Van frustratie naar vijf tools. Te veel artikelen beloofden een antwoord en lieten je toch met een gok zitten. Daarom bouwen we tools die voor jou rekenen en kiezen.</p>
    </section>
    <section class="cijfers" aria-label="Het verhaal in cijfers">
      <div class="cijfer"><strong>5</strong><span>gratis interactieve tools</span></div>
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
$pagina = (Kop "Contact — Gravel Gorilla" "Een vraag, een tip of feedback op een tool? Stuur Gravel Gorilla een bericht." "/contact/") + @"
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

# ---------- Sitemap, robots.txt ----------
$vandaag = Get-Date -Format 'yyyy-MM-dd'
$adressen = @(@('/', $vandaag), @('/over-ons/', $vandaag), @('/contact/', $vandaag))
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
RewriteRule ^beste-gravelbanden/?$ /tools/bandenspanning-calculator/ [R=301,L]
RewriteRule ^(zadeltassen-bikepacken-avontuur-fietstassen|de-10-spectaculairste-gravelbestemmingen)/?$ /tools/ultra-eventkiezer/ [R=301,L]
RewriteRule ^fietsverlichting-budgetverlichting-merkverlichting/?$ / [R=301,L]
RewriteRule ^(wp-sitemap.*|sitemap_index|.+-sitemap.*)\.xml$ /sitemap.xml [R=301,L]
</IfModule>

# Afbeeldingen, opmaak en code mogen even bewaard worden door de browser (sneller)
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
