# Gravel Gorilla — werkafspraken voor Claude

Statische site voor gravelgorilla.nl. Eigenaar: Geert (geen ontwikkelaar): leg alles uit in gewone, jargonvrije taal (Nederlands).

## Live zetten
- Elke push naar `main` staat binnen ~15 seconden live (Plesk Git bij Cloud86 haalt via een webhook op naar `httpdocs`).
- Daarom: eerst lokaal testen (`.claude/serve.ps1` → localhost:8080, of `C:\xampp\php\php.exe -S localhost:8090 -t .` als PHP nodig is), dan pushen.
- Na elke push: op de live site controleren dat de wijziging er echt staat (curl met `?t=$RANDOM`).
- Nooit DNS, MX of mailinstellingen aanraken: mail voor info@gravelgorilla.nl loopt via dezelfde server.

## Versienummers (cache) — ALTIJD
Browsers houden oude versies vast; dat heeft al meerdere keren voor verwarring gezorgd.
- Na **elke** wijziging aan css, js, een tool of een pagina: draai `.claude/bouw-site.ps1`. Dat zet automatisch `?v=<code>` achter alle `/assets/css`, `/assets/js` en `/assets/img` links, `/favicon.ico` en achter `tool.html` in de toolvensters.
- Nieuw bestand dat via een link wordt geladen (css/js in `assets/`, een nieuw toolvenster)? Controleer dat het een `?v=` krijgt. Nieuwe soort link die het bouwscript nog niet kent? Breid de versienummer-stap in `bouw-site.ps1` uit.
- HTML-pagina's krijgen `Cache-Control: no-cache` via `.htaccess` (ook uit `bouw-site.ps1`).
- Controleer na het live zetten dat de nieuwe `?v=` live in de pagina staat.

## Waar wat staat
- Pagina's worden gemaakt door `.claude/bouw-site.ps1` uit `inhoud/` — gemaakte pagina's niet met de hand bewerken.
- Homepage: `index.html` (met de hand), maar de wegwijzer-bordjes, de eerste tip en het schema zet `bouw-site.ps1` erin.
- Eén lijst met alle tools staat in `.claude/bouw-site.ps1` (`$tools`): titels, SEO-titel, wegwijzertekst, filter, plaatje. Nieuwe tool = daar toevoegen + `api/teller.php` (TOOLS) + "Ik wil…" in `index.html`.
- Vraag de Gorilla: komt vanzelf onder elke tool (behalve gravelbike- en wielenkiezer, die hebben er een in de tool). Voorbeelden, extra kennis en het invullen van de tool staan per tool in `assets/js/vraag-gorilla.js` (TOOLS); de veelgestelde vragen van de pagina gebruikt hij ook.
- Veelgestelde vragen per tool: `inhoud/tools/<naam>-faq.html` (paren `<h3>vraag</h3><p>antwoord</p>`), worden ook FAQ-schema.
- SEO: elke pagina krijgt schema (JSON-LD), deelplaatje `assets/img/deelplaatje.png` (ontwerp in `.claude/deelplaatje.html`), `llms.txt` wordt gegenereerd.
- Kiezers: `.claude/kiezer-importeren.ps1` (gravelbike/wielen), `.claude/ultra-importeren.ps1`.
- Logo: bron in `.claude/logo/` (svg + png 512). Nieuw logo? Vervang `assets/img/logo-icon.svg`, draai `.claude/maak-favicons.ps1`, pas het grote logo in `index.html` (opening__band) aan en maak het deelplaatje opnieuw.
- Profielsticker: bron is `inhoud/bron/profielsticker.html` (daar aanpassen), daarna `.claude/profielsticker-importeren.ps1`.
- Server-scripts (PHP): `api/teller.php` (gebruiksteller), `api/osm.php` (tussenstation OpenStreetMap). Gegevens staan buiten `httpdocs`.
- PowerShell-scripts met niet-ASCII tekens opslaan als UTF-8 **met** BOM (Windows PowerShell 5.1).

## Huisstijl
Bone `#F4F1EA`, Ink `#15181A`, Gorilla Green `#2F8F3E`, Deep Green `#14361E`, Trail Orange `#FF6B2C` (alleen voor actie). Koppen Oswald (hoofdletters), tekst Inter. Donkere modus via `data-thema="donker"`. Niet lijken op gravello.nl.
