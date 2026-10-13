# Maakt gravelgorilla-upload.zip: alleen de bestanden die op de webserver horen
# (dus zonder scripts, werkmappen en GitHub-gegevens). Pak dit uit in de webmap bij Cloud86.
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$zip = Join-Path $root "gravelgorilla-upload.zip"
$overslaan = '^(\.git|\.claude|_bron|_upload|inhoud)(\\|$)|^\.gitignore$|\.zip$'

Add-Type -AssemblyName System.IO.Compression, System.IO.Compression.FileSystem
if (Test-Path $zip) { Remove-Item -LiteralPath $zip -Confirm:$false }
$archief = [IO.Compression.ZipFile]::Open($zip, 'Create')
$aantal = 0
try {
  Get-ChildItem $root -Recurse -File -Force | ForEach-Object {
    $rel = $_.FullName.Substring($root.Length + 1)
    if ($rel -match $overslaan) { return }
    # schuine strepen naar voren, anders snapt de (Linux-)server de mappen niet
    [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archief, $_.FullName, ($rel -replace '\\', '/')) | Out-Null
    $aantal++
  }
} finally { $archief.Dispose() }
"Klaar: gravelgorilla-upload.zip ($aantal bestanden, $([Math]::Round((Get-Item $zip).Length / 1MB, 1)) MB)"
