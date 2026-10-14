# Maakt de favicons voor Google, browsers en telefoons uit het logo (PNG, 512x512):
#   /favicon.ico (16, 32, 48 px), /assets/img/icon-192.png, /assets/img/apple-touch-icon.png (180 px)
param(
  [string]$Bron = "C:\Users\Geert\Claude\Projects\Gravelbike kiezer\gravelgorilla-logo-icon.png"
)
$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing
$root = Split-Path -Parent $PSScriptRoot
$logo = [Drawing.Image]::FromFile($Bron)

function Verklein([int]$maat, [string]$achtergrond = "") {
  $bmp = New-Object Drawing.Bitmap $maat, $maat, ([Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g = [Drawing.Graphics]::FromImage($bmp)
  $g.InterpolationMode = [Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::HighQuality
  $g.PixelOffsetMode = [Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  if ($achtergrond) { $g.Clear([Drawing.ColorTranslator]::FromHtml($achtergrond)) }
  $g.DrawImage($logo, 0, 0, $maat, $maat)
  $g.Dispose()
  $ms = New-Object IO.MemoryStream
  $bmp.Save($ms, [Drawing.Imaging.ImageFormat]::Png)
  $bmp.Dispose()
  , $ms.ToArray()
}

# favicon.ico: meerdere formaten in één bestand (PNG-variant van het ico-formaat)
$maten = 16, 32, 48
$plaatjes = $maten | ForEach-Object { , (Verklein $_) }
$ico = New-Object IO.MemoryStream
$w = New-Object IO.BinaryWriter $ico
$w.Write([uint16]0); $w.Write([uint16]1); $w.Write([uint16]$maten.Count)
$plek = 6 + 16 * $maten.Count
for ($i = 0; $i -lt $maten.Count; $i++) {
  $w.Write([byte]$maten[$i]); $w.Write([byte]$maten[$i]); $w.Write([byte]0); $w.Write([byte]0)
  $w.Write([uint16]1); $w.Write([uint16]32)
  $w.Write([uint32]$plaatjes[$i].Length); $w.Write([uint32]$plek)
  $plek += $plaatjes[$i].Length
}
foreach ($p in $plaatjes) { $w.Write($p) }
$w.Flush()
[IO.File]::WriteAllBytes("$root\favicon.ico", $ico.ToArray())

[IO.File]::WriteAllBytes("$root\assets\img\icon-192.png", (Verklein 192))
# iPhone toont geen doorzichtigheid: daar een achtergrond in Bone
[IO.File]::WriteAllBytes("$root\assets\img\apple-touch-icon.png", (Verklein 180 "#F4F1EA"))
$logo.Dispose()
"Klaar: favicon.ico ($((Get-Item "$root\favicon.ico").Length) bytes), icon-192.png, apple-touch-icon.png"
