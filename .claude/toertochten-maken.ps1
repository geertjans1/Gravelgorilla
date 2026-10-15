# Gravel Toertochten: zet de bronlijst .claude/toertochten.tsv om naar de lijst TOCHTEN in assets/js/gravel-toertochten.js
# (tussen de regels "// TOCHTEN-BEGIN" en "// TOCHTEN-EIND"). Draai daarna .claude/bouw-site.ps1.
#
# Bronlijst: een regel per tocht, kolommen gescheiden door een tab:
#   datum (jjjj-mm-dd), naam, startplaats, provincie (code zoals GE, NB, OVB, VB), land (NL/BE/DE),
#   afstanden (km, met /), nav (gps, pijlen of beide; leeg = onbekend), prijs (euro; leeg = onbekend),
#   bron, link, breedte, lengte (coordinaten van de startplaats), noot (mag leeg),
#   website organisator (mag leeg; alleen een adres invullen dat je zelf hebt gecontroleerd).
# Een nieuwe noot? Zet de Engelse en Duitse vertaling in NOTEN in assets/js/gravel-toertochten.js.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$utf8 = New-Object Text.UTF8Encoding $false

function Js([string]$s) { '"' + ($s -replace '\\', '\\' -replace '"', '\"') + '"' }

$regels = [IO.File]::ReadAllLines("$root\.claude\toertochten.tsv", [Text.Encoding]::UTF8) | Where-Object { $_.Trim() -and -not $_.TrimStart([char]0xFEFF).StartsWith('#') }
$js = foreach ($r in $regels) {
  $f = $r.Split("`t")
  if ($f.Count -lt 12) { throw "Te weinig kolommen: $r" }
  $delen = @("n: $(Js $f[1])", "d: $(Js $f[0])", "pl: $(Js $f[2])", "p: $(Js $f[3])", "land: $(Js $f[4])")
  $km = @($f[5].Split('/') | Where-Object { $_ -match '^\d+$' })
  $delen += "km: [" + ($km -join ', ') + "]"
  if ($f[6]) { $delen += "nav: $(Js $f[6])" }
  if ($f[7]) { $delen += "prijs: " + ([double]$f[7]).ToString([Globalization.CultureInfo]::InvariantCulture) }
  $delen += "bron: $(Js $f[8])", "u: $(Js $f[9])", "ll: [$($f[10]), $($f[11])]"
  if ($f.Count -gt 12 -and $f[12]) { $delen += "noot: $(Js $f[12])" }
  if ($f.Count -gt 13 -and $f[13]) { $delen += "w: $(Js $f[13])" }
  "    { " + ($delen -join ', ') + " }"
}

$pad = "$root\assets\js\gravel-toertochten.js"
$code = [IO.File]::ReadAllText($pad, [Text.Encoding]::UTF8)
$nieuw = "// TOCHTEN-BEGIN`n  const TOCHTEN = [`n" + ($js -join ",`n") + "`n  ];`n  // TOCHTEN-EIND"
$code = [regex]::Replace($code, '(?s)// TOCHTEN-BEGIN.*?// TOCHTEN-EIND', { param($m) $nieuw })
[IO.File]::WriteAllText($pad, $code, $utf8)
"Klaar: $(@($js).Count) tochten in assets/js/gravel-toertochten.js"
