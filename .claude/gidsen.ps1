# ---------- Gidsen: /gids/<slug>/ en het overzicht /gids/ (alleen in het Nederlands) ----------
# Wordt aangeroepen vanuit .claude/bouw-site.ps1 (gebruikt de functies Kop, Voet, Html, JsonLd, Schrijf).
#
# Een gids is een bestand inhoud/gidsen/<slug>.html. Bovenaan staat een blok met gegevens:
#   <!--
#   volgorde: 1
#   titel: Beste prijs-kwaliteit gravelbike           (korte naam, in lijstjes en de broodkruimel)
#   seoTitel: ... | Gravel Gorilla                     (titel in Google)
#   beschrijving: ...                                   (tekst onder de titel in Google)
#   kop: Beste <span class="groen">prijs-kwaliteit</span>   (grote kop op de pagina)
#   sub: ...                                            (tekst onder de kop)
#   tool: gravelbike-kiezer                             (bijbehorende tool; daar komt ook een link naar deze gids)
#   datum: 2026-10-16                                   (laatst bijgewerkt)
#   oud: beste-prijs-kwaliteit-verhouding-gravelbike, welke-gravelbike-budget   (oude adressen die hierheen doorsturen)
#   -->
# Daaronder de tekst in gewone HTML (<h2>, <p>, <ul>, ...).
# Op een regel <!-- FIETSEN 1500 2000 --> komt automatisch een lijstje gravelbikes uit de Gravelbike Kiezer
# (inhoud/bron/gravelbike-kiezer.html) met een prijs vanaf 1500 tot en met 2000 euro, de beste waar voor je geld bovenaan.

$gidsen = @(Get-ChildItem "$root\inhoud\gidsen\*.html" -ErrorAction SilentlyContinue | ForEach-Object {
  $tekst = [IO.File]::ReadAllText($_.FullName, [Text.Encoding]::UTF8).TrimStart([char]0xFEFF)
  $m = [regex]::Match($tekst, '(?s)^\s*<!--(.*?)-->')
  $g = [ordered]@{ slug = $_.BaseName; volgorde = 99; oud = '' }
  foreach ($r in ($m.Groups[1].Value -split "`n")) { if ($r -match '^\s*(\w+):\s*(.+?)\s*$') { $g[$matches[1]] = $matches[2] } }
  $g.volgorde = [int]$g.volgorde
  $g.inhoud = $tekst.Substring($m.Index + $m.Length).Trim()
  $g
} | Sort-Object { $_.volgorde })

# ---------- gravelbikes uit de kiezer, voor de lijstjes in de gidsen ----------
function Veld([string]$r, [string]$k) {
  if ($r -match "\b${k}:""([^""]*)""") { return $matches[1] }
  if ($r -match "\b${k}:([\d.]+|true|false)") { return $matches[1] }
  ''
}
# hoe goed is de groep? 1 (instap) tot 6 (top)
function GroepNiveau([string]$g) {
  if ($g -match '(?i)\bred\b|xtr|xx1') { return 6 }
  if ($g -match '(?i)force|di2|x0') { return 5 }
  if ($g -match '(?i)rival|82\d|apex\s*(xplr\s*)?axs|gx eagle axs') { return 4 }
  if ($g -match '(?i)610|grx 1x12|apex') { return 3 }
  if ($g -match '(?i)u6000|u8000|cues 1x1|cues 1x\b|rx400') { return 2 }
  1
}
$gidsFietsen = @([IO.File]::ReadAllLines("$root\inhoud\bron\gravelbike-kiezer.html", [Text.Encoding]::UTF8) | Where-Object { $_ -match '^\s*\{ brand:"' } | ForEach-Object {
  $r = $_
  $kg = $null; if ((Veld $r 'weightLabel') -match '(\d+)[,.](\d)') { $kg = [double]"$($matches[1]).$($matches[2])" }
  $f = [ordered]@{
    merk = Veld $r 'brand'; model = Veld $r 'model'; frame = Veld $r 'frame'; wielen = Veld $r 'wheels'
    band = [int](Veld $r 'maxTire'); prijs = [int](Veld $r 'price'); prijsLabel = Veld $r 'priceLabel'; groep = Veld $r 'group'
    elektronisch = (Veld $r 'electronic') -eq 'true'; ebike = (Veld $r 'ebike') -eq 'true'; gewicht = Veld $r 'weightLabel'; kg = $kg; url = Veld $r 'url'
  }
  $f.niveau = GroepNiveau $f.groep
  # score: wat krijg je voor je geld? groep telt het zwaarst, dan frame, wielen en gewicht
  $licht = if ($kg) { [Math]::Max(0.0, [Math]::Min(3.0, (11 - $kg) * 0.8)) } else { 1 }
  $f.score = $f.niveau * 2 + $(if ($f.frame -eq 'carbon') { 2 } elseif ($f.frame -eq 'titanium') { 1 } else { 0 }) + $(if ($f.wielen -eq 'carbon') { 1 } else { 0 }) + $licht
  $f
} | Where-Object { -not $_.ebike -and $_.prijs -gt 0 })

function FietsenLijst([int]$van, [int]$tot) {
  $keuze = @($gidsFietsen | Where-Object { $_.prijs -ge $van -and $_.prijs -le $tot } | Sort-Object @{ Expression = { $_.score }; Descending = $true }, @{ Expression = { $_.prijs } } |
    Group-Object { $_.merk } | ForEach-Object { $_.Group | Select-Object -First 2 } |   # hoogstens 2 per merk
    Sort-Object @{ Expression = { $_.score }; Descending = $true }, @{ Expression = { $_.prijs } } | Select-Object -First 4)
  if (-not $keuze.Count) { return '<p>In deze prijsklasse staan nu geen gravelbikes in de kiezer.</p>' }
  $kaarten = ($keuze | ForEach-Object {
    $f = $_
    $waarom = @()
    if ($f.frame -eq 'carbon') { $waarom += 'carbon frame' }
    if ($f.wielen -eq 'carbon') { $waarom += 'carbon wielen' }
    if ($f.elektronisch) { $waarom += 'elektronisch schakelen' }
    if ($f.niveau -ge 4 -and -not $f.elektronisch) { $waarom += 'sterke groep' }
    if ($f.kg -and $f.kg -le 9.5) { $waarom += 'licht' }
    if ($f.band -ge 50) { $waarom += "ruimte voor $($f.band) mm banden" }
    $waaromHtml = if ($waarom.Count) { "<p class=""gids-fiets__waarom"">$(Html (($waarom -join ', ').Substring(0,1).ToUpper() + ($waarom -join ', ').Substring(1)))</p>" } else { '' }
    $frame = @{ carbon = 'Carbon'; aluminium = 'Aluminium'; staal = 'Staal'; titanium = 'Titanium' }[$f.frame]; if (-not $frame) { $frame = $f.frame }
    $gewicht = if ($f.kg) { "<li>Gewicht: $(Html $f.gewicht)</li>" } else { '' }
@"
        <article class="gids-fiets">
          <p class="gids-fiets__merk">$(Html $f.merk)</p>
          <h3>$(Html $f.model)</h3>
          <p class="gids-fiets__prijs">$(Html $f.prijsLabel)</p>
          <ul><li>Frame: $frame</li><li>Groep: $(Html $f.groep)</li>$gewicht<li>Banden tot $($f.band) mm</li></ul>
          $waaromHtml
          <a href="$(Html $f.url)" target="_blank" rel="noopener">Bekijk bij $(Html $f.merk) ↗</a>
        </article>
"@
  }) -join "`n"
  "      <div class=""gids-fietsen"">`n$kaarten`n      </div>"
}

function GidsDatum([string]$iso) { $d = [datetime]::ParseExact($iso, 'yyyy-MM-dd', $null); $m = @('januari','februari','maart','april','mei','juni','juli','augustus','september','oktober','november','december'); "$($d.Day) $($m[$d.Month - 1]) $($d.Year)" }
# ---------- de pagina's ----------
$gidsSchemaAuteur = [ordered]@{ '@type' = 'Person'; '@id' = "$site/over-ons/#geert"; name = 'Geert Jans'; url = "$site/over-ons/" }
foreach ($g in $gidsen) {
  $pad = "/gids/$($g.slug)/"
  $inhoud = [regex]::Replace($g.inhoud, '<!--\s*FIETSEN\s+(\d+)\s+(\d+)\s*-->', { param($m) FietsenLijst ([int]$m.Groups[1].Value) ([int]$m.Groups[2].Value) })
  $inhoud = $inhoud.Replace('<!-- AANTAL-FIETSEN -->', [string]$gidsFietsen.Count)
  $tool = $tools | Where-Object { $_.slug -eq $g.tool } | Select-Object -First 1
  $toolBlok = if ($tool) { @"
    <section class="blokken gids-tool">
      <div class="blok blok--groen">
        <p class="pagina-km">KM $($tool.km) · gratis tool</p>
        <h2>$(Html $tool.titel)</h2>
        <p>$(Html $tool.kort)</p>
        <a href="/tools/$($tool.slug)/" class="knop knop--actie">Open de $(Html $tool.naamKort) →</a>
      </div>
    </section>
"@ } else { '' }
  $meer = ($gidsen | Where-Object { $_.slug -ne $g.slug } | ForEach-Object { "        <a href=""/gids/$($_.slug)/"" class=""ander""><span class=""ander__km"">Gids</span><strong>$(Html $_.titel)</strong><span>$(Html $_.beschrijving)</span></a>" }) -join "`n"
  $schema = JsonLd ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
    [ordered]@{ '@type' = 'Article'; '@id' = "$site$pad#gids"; headline = $g.titel; description = $g.beschrijving; url = "$site$pad"; inLanguage = 'nl'
      datePublished = $g.datum; dateModified = $g.datum; author = $gidsSchemaAuteur; publisher = @{ '@id' = "$site/#organisatie" }; mainEntityOfPage = "$site$pad"
      image = "$site/assets/img/deelplaatje.png" }
    [ordered]@{ '@type' = 'BreadcrumbList'; itemListElement = @(
      [ordered]@{ '@type' = 'ListItem'; position = 1; name = 'Gravel Gorilla'; item = "$site/" }
      [ordered]@{ '@type' = 'ListItem'; position = 2; name = 'Gidsen'; item = "$site/gids/" }
      [ordered]@{ '@type' = 'ListItem'; position = 3; name = $g.titel; item = "$site$pad" }) }
    $organisatie) })
  $pagina = (Kop $g.seoTitel $g.beschrijving $pad @() "" "article" $schema) + @"
  <main>
    <section class="pagina-kop">
      <a href="/gids/" class="terug">← Alle gidsen</a>
      <p class="pagina-km">Gids · bijgewerkt $(GidsDatum $g.datum) · door <a href="/over-ons/">Geert Jans</a></p>
      <h1 class="kop-l">$($g.kop)</h1>
      <p class="pagina-sub">$(Html $g.sub)</p>
    </section>
    <article class="lees gids">
$inhoud
    </article>
$toolBlok
    <section class="andere-tools" aria-labelledby="meer-gidsen">
      <h2 class="kop-l" id="meer-gidsen">Meer <span class="groen">gidsen</span></h2>
      <div class="andere-raster">
$meer
      </div>
    </section>
  </main>
"@ + (Voet)
  Schrijf "gids\$($g.slug)\index.html" $pagina
  "gids: $pad"
}

# overzicht /gids/
if ($gidsen.Count) {
  $kaarten = ($gidsen | ForEach-Object { "        <a href=""/gids/$($_.slug)/"" class=""ander""><span class=""ander__km"">Gids</span><strong>$(Html $_.titel)</strong><span>$(Html $_.beschrijving)</span></a>" }) -join "`n"
  $schema = JsonLd ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = @(
    [ordered]@{ '@type' = 'CollectionPage'; url = "$site/gids/"; name = 'Gidsen voor gravelrijders'; inLanguage = 'nl'
      hasPart = @($gidsen | ForEach-Object { [ordered]@{ '@type' = 'Article'; headline = $_.titel; url = "$site/gids/$($_.slug)/" } }) }
    $organisatie) })
  $pagina = (Kop "Gidsen voor gravelrijders: gravelbike, banden en bikepacking | Gravel Gorilla" "Heldere gidsen over gravelbikes kiezen, prijs-kwaliteit, banden en bikepacking, met gegevens uit de gratis tools van Gravel Gorilla." "/gids/" @() "" "website" $schema) + @"
  <main>
    <section class="pagina-kop">
      <a href="/" class="terug">← Home</a>
      <p class="pagina-km">Lezen voor je kiest</p>
      <h1 class="kop-l">Gravel<span class="groen">gidsen</span></h1>
      <p class="pagina-sub">Korte, eerlijke gidsen bij de tools. Geen verkooppraatjes: wat moet je weten, en welke tool rekent het daarna voor je uit?</p>
    </section>
    <section class="andere-tools" aria-label="Alle gidsen">
      <div class="andere-raster">
$kaarten
      </div>
    </section>
  </main>
"@ + (Voet)
  Schrijf "gids\index.html" $pagina
  "gids: /gids/ ($($gidsen.Count) gidsen)"
}
