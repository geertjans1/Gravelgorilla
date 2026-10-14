# Gravel Gorilla — werkafspraken voor Claude

Statische site voor gravelgorilla.nl. Eigenaar: Geert (geen ontwikkelaar): leg alles uit in gewone, jargonvrije taal (Nederlands).

## Live zetten
- Elke push naar `main` staat binnen ~15 seconden live (Plesk Git bij Cloud86 haalt via een webhook op naar `httpdocs`).
- Daarom: eerst lokaal testen (`.claude/serve.ps1` → localhost:8080, of `C:\xampp\php\php.exe -S localhost:8090 -t .` als PHP nodig is), dan pushen.
- Na elke push: op de live site controleren dat de wijziging er echt staat (curl met `?t=$RANDOM`).
- Nooit DNS, MX of mailinstellingen aanraken: mail voor info@gravelgorilla.nl loopt via dezelfde server.

## Versienummers (cache) — ALTIJD
Browsers houden oude versies vast; dat heeft al meerdere keren voor verwarring gezorgd.
- Na **elke** wijziging aan css, js, een tool of een pagina: draai `.claude/bouw-site.ps1`. Dat zet automatisch `?v=<code>` achter alle `/assets/css` en `/assets/js` links en achter `tool.html` in de toolvensters.
- Nieuw bestand dat via een link wordt geladen (css/js in `assets/`, een nieuw toolvenster)? Controleer dat het een `?v=` krijgt. Nieuwe soort link die het bouwscript nog niet kent? Breid de versienummer-stap in `bouw-site.ps1` uit.
- HTML-pagina's krijgen `Cache-Control: no-cache` via `.htaccess` (ook uit `bouw-site.ps1`).
- Controleer na het live zetten dat de nieuwe `?v=` live in de pagina staat.

## Waar wat staat
- Pagina's worden gemaakt door `.claude/bouw-site.ps1` uit `inhoud/` — gemaakte pagina's niet met de hand bewerken.
- Homepage: `index.html` (met de hand), tools-lijst in `assets/js/main.js`.
- Kiezers: `.claude/kiezer-importeren.ps1` (gravelbike/wielen), `.claude/ultra-importeren.ps1`.
- Profielsticker: bron is `inhoud/bron/profielsticker.html` (daar aanpassen), daarna `.claude/profielsticker-importeren.ps1`.
- Server-scripts (PHP): `api/teller.php` (gebruiksteller), `api/osm.php` (tussenstation OpenStreetMap). Gegevens staan buiten `httpdocs`.
- PowerShell-scripts met niet-ASCII tekens opslaan als UTF-8 **met** BOM (Windows PowerShell 5.1).

## Huisstijl
Bone `#F4F1EA`, Ink `#15181A`, Gorilla Green `#2F8F3E`, Deep Green `#14361E`, Trail Orange `#FF6B2C` (alleen voor actie). Koppen Oswald (hoofdletters), tekst Inter. Donkere modus via `data-thema="donker"`. Niet lijken op gravello.nl.
