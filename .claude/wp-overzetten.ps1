# EENMALIG: haalt de inhoud van de oude WordPress-site (gedownload in _bron/) naar de map inhoud/.
# - blogs: schone tekst + foto's (assets/img/blog/)
# - tool-pagina's: de uitlegtekst, de bandenspanning-calculator, en de losse tool-bestanden
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$bron = "$root\_bron"
$utf8 = New-Object Text.UTF8Encoding $false
$fotoMap = "$root\assets\img\blog"
New-Item -ItemType Directory -Force $fotoMap, "$root\inhoud\blogs", "$root\inhoud\tools" | Out-Null

function Lees($naam) { [IO.File]::ReadAllText("$bron\$naam.html", [Text.Encoding]::UTF8) }
function Inhoud($html) {
  $s = $html.IndexOf('class="entry-content clear"')
  $s = $html.IndexOf('>', $s) + 1
  $e = $html.IndexOf('<!-- .entry-content .clear -->', $s)
  $html.Substring($s, $e - $s)
}
function Meta($html, $patroon) { [Net.WebUtility]::HtmlDecode([regex]::Match($html, $patroon).Groups[1].Value) }

function Foto([string]$url) {
  $url = $url -replace '^//', 'https://'
  if ($url -notmatch '^https?://') { $url = "https://gravelgorilla.nl$url" }
  $naam = (Split-Path ($url -replace '\?.*$', '') -Leaf).ToLower()
  $doel = Join-Path $fotoMap $naam
  if (-not (Test-Path $doel)) {
    try { Invoke-WebRequest $url -UseBasicParsing -TimeoutSec 60 -OutFile $doel } catch { Write-Warning "Foto niet gelukt: $url"; return $null }
  }
  "/assets/img/blog/$naam"
}

$toegestaan = 'p|h2|h3|h4|ul|ol|li|strong|em|b|i|a|table|tr|th|td|br|blockquote|figure|img'
function Schoon([string]$c) {
  $c = [regex]::Replace($c, '(?s)<!--.*?-->', '')
  $c = [regex]::Replace($c, '(?s)<(script|style|svg|noscript|form|button|iframe|select|textarea)\b[^>]*>.*?</\1>', '')
  $c = [regex]::Replace($c, '(?s)<div itemprop="text">(.*?)</div>', '<p>$1</p>')
  # koppen in de tekst één niveau lager dan de paginatitel
  $c = [regex]::Replace($c, '<(/?)h1\b', '<${1}h2')
  $c = [regex]::Replace($c, '<(/?)h[56]\b', '<${1}h4')
  # foto's: downloaden en naar de eigen map laten wijzen
  $c = [regex]::Replace($c, '<img\b[^>]*>', [Text.RegularExpressions.MatchEvaluator]{
    param($m)
    $tag = $m.Value
    $src = [regex]::Match($tag, '\sdata-src="([^"]+)"').Groups[1].Value
    if (-not $src) { $src = [regex]::Match($tag, '\ssrc="([^"]+)"').Groups[1].Value }
    if (-not $src -or $src -like 'data:*') { return '' }
    $alt = [regex]::Match($tag, '\salt="([^"]*)"').Groups[1].Value
    $nieuw = Foto $src
    if (-not $nieuw) { return '' }
    "<figure><img src=""$nieuw"" alt=""$alt"" loading=""lazy""></figure>"
  })
  # alles wat niet op de lijst staat: tag weg, tekst blijft
  $c = [regex]::Replace($c, '</?(?!(' + $toegestaan + ')\b)\w+[^>]*>', '')
  # overbodige eigenschappen (class, style, enz.) weghalen
  $c = [regex]::Replace($c, '<(' + $toegestaan + ')\b([^>]*)>', [Text.RegularExpressions.MatchEvaluator]{
    param($m)
    $tag = $m.Groups[1].Value; $rest = $m.Groups[2].Value
    if ($tag -eq 'img') { return $m.Value }
    $houd = ''
    if ($tag -eq 'a') {
      $href = [regex]::Match($rest, 'href="([^"]*)"').Groups[1].Value -replace '^https?://(www\.)?gravelgorilla\.nl', ''
      if ($href -eq '') { $href = '/' }
      if ($href -match '^/tools/?$') { $href = '/#wegwijzer' }
      $houd = " href=""$href"""
      if ($href -match '^https?://') { $houd += ' rel="noopener"' }
    }
    if ($tag -in 'td','th') {
      $span = [regex]::Match($rest, '(colspan|rowspan)="\d+"').Value
      if ($span) { $houd = " $span" }
    }
    "<$tag$houd>"
  })
  $c = [regex]::Replace($c, '<p>\s*(<br>\s*)+', '<p>')
  # links naar losse bestanden in WordPress-uploads verdwijnen straks: die alinea's weg
  $c = [regex]::Replace($c, '<p><a href="/wp-content/[^"]*">[^<]*</a></p>', '')
  $c = [regex]::Replace($c, '<(p|h2|h3|h4|li|strong|em|b|i)>\s*(&nbsp;|\s)*\s*</\1>', '')
  $c = [regex]::Replace($c, '<p>\s*(<figure>.*?</figure>)\s*</p>', '$1')
  $c = [regex]::Replace($c, '[ \t]+', ' ')
  $c = [regex]::Replace($c, '\s*\n\s*', "`n")
  $c.Trim()
}

# ---------------- Blogs ----------------
$blogs = @(
  @{ slug = 'gravelbike'; kort = 'Alles over gravelbikes in één gids'; categorie = 'Beginnen' }
  @{ slug = 'gravelbike-kiezen-gravelfiets-kiezen-keuzehulp-welke-gravelbike'; kort = 'Welke gravelbike moet ik kopen?'; categorie = 'Kopen' }
  @{ slug = 'welke-gravelbike-budget'; kort = 'Welke gravelbike past bij je budget?'; categorie = 'Kopen' }
  @{ slug = 'beste-prijs-kwaliteit-verhouding-gravelbike'; kort = 'De beste prijs-kwaliteit gravelbikes'; categorie = 'Kopen' }
  @{ slug = 'beste-gravelbanden'; kort = 'Gravelbanden voor Limburg, Veluwe en Maasduinen'; categorie = 'Banden' }
  @{ slug = 'fietsverlichting-budgetverlichting-merkverlichting'; kort = 'Verlichting: budget of merk?'; categorie = 'Materiaal' }
  @{ slug = 'zadeltassen-bikepacken-avontuur-fietstassen'; kort = 'De beste zadeltassen voor bikepacken'; categorie = 'Bikepacking' }
  @{ slug = 'de-10-spectaculairste-gravelbestemmingen'; kort = '10 spectaculaire gravelbestemmingen'; categorie = 'Avontuur' }
)
$lijst = @()
foreach ($b in $blogs) {
  $h = Lees $b.slug
  $tekst = Schoon (Inhoud $h)
  [IO.File]::WriteAllText("$root\inhoud\blogs\$($b.slug).html", $tekst + "`n", $utf8)
  $woorden = ([regex]::Replace($tekst, '<[^>]+>', ' ') -split '\s+' | Where-Object { $_ }).Count
  $beeld = Meta $h '<meta property="og:image" content="([^"]+)"'
  $lijst += [ordered]@{
    slug         = $b.slug
    titel        = Meta $h '<h1[^>]*>(.*?)</h1>'
    kort         = $b.kort
    categorie    = $b.categorie
    beschrijving = Meta $h '<meta name="description" content="([^"]*)"'
    datum        = Meta $h 'article:published_time" content="([^"T]+)'
    bijgewerkt   = Meta $h 'article:modified_time" content="([^"T]+)'
    beeld        = $(if ($beeld) { Foto $beeld } else { $null })
    minuten      = [Math]::Max(1, [Math]::Round($woorden / 200))
  }
  "blog: $($b.slug) ($woorden woorden)"
}
[IO.File]::WriteAllText("$root\inhoud\blogs.json", (ConvertTo-Json $lijst -Depth 4), $utf8)

# ---------------- Tool-pagina's: uitlegtekst ----------------
foreach ($t in 'gravelbike-kiezer','gravelwielen-kiezer','ultra-eventkiezer') {
  $c = Inhoud (Lees "tools__$t")
  [IO.File]::WriteAllText("$root\inhoud\tools\$t-uitleg.html", (Schoon $c) + "`n", $utf8)
  "uitleg: $t"
}

# Bandenspanning-calculator: het rekenblok blijft zoals het is, de tekst eromheen wordt schoongemaakt
$c = [regex]::Replace((Inhoud (Lees "tools__bandenspanning-calculator")), '(?s)<!--.*?-->', '')
$begin = @($c.IndexOf('<div class="ggcalc"'), $c.IndexOf('<style')) | Where-Object { $_ -ge 0 } | Sort-Object | Select-Object -First 1
$eind = $c.LastIndexOf('</script>') + '</script>'.Length
$rekenblok = [regex]::Replace($c.Substring($begin, $eind - $begin), '(?s)<!--.*?-->\s*', '')
[IO.File]::WriteAllText("$root\inhoud\tools\bandenspanning-calculator-tool.html", $rekenblok.Trim() + "`n", $utf8)
[IO.File]::WriteAllText("$root\inhoud\tools\bandenspanning-calculator-uitleg.html", (Schoon ($c.Substring(0, $begin) + $c.Substring($eind))) + "`n", $utf8)
"tool: bandenspanning-calculator"

# Losse tool-bestanden (stonden in WordPress-uploads)
foreach ($t in @(,@('ultra-eventkiezer','ultra-eventkiezer-tool.html'))) {
  New-Item -ItemType Directory -Force "$root\tools\$($t[0])" | Out-Null
  Copy-Item "$bron\$($t[1])" "$root\tools\$($t[0])\tool.html" -Force
  "tool-bestand: $($t[0])"
}
"Foto's: $((Get-ChildItem $fotoMap).Count)"
