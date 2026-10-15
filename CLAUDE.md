# Gravel Gorilla — werkafspraken voor Claude

Statische site voor gravelgorilla.nl. Eigenaar: Geert (geen ontwikkelaar): leg alles uit in gewone, jargonvrije taal (Nederlands).

## Live zetten
- Elke push naar `main` staat binnen ~15 seconden live (Plesk Git bij Cloud86 haalt via een webhook op naar `httpdocs`).
- Daarom: eerst lokaal testen (`.claude/serve.ps1` → localhost:8080, of `C:\xampp\php\php.exe -S localhost:8090 -t .` als PHP nodig is), dan pushen.
- Na elke push: op de live site controleren dat de wijziging er echt staat (curl met `?t=$RANDOM`).
- Nooit DNS, MX of mailinstellingen aanraken: mail voor info@gravelgorilla.nl loopt via dezelfde server.
- Testsite: branch `Test` (hoofdletter T) → test.gravelgorilla.nl (Plesk Git, ingesteld door Geert). Werkt sinds 15 okt 2026 (webhook staat). Werkwijze: lokaal op branch `Test` werken, bouwen, pushen naar `Test`, controleren op test.gravelgorilla.nl (curl met `?t=`), Geert laten testen. Pas na "zet live" van Geert: `git checkout main`, `git merge --ff-only Test` (anders gewone merge), pushen en live controleren. Testsite heeft mogelijk een wachtwoord (Plesk). De testsite krijgt `noindex` (via `.htaccess`) en eigen teller-/stembestanden (`gravelgorilla-test-*.json`).

## Versienummers (cache) — ALTIJD
Browsers houden oude versies vast; dat heeft al meerdere keren voor verwarring gezorgd.
- Na **elke** wijziging aan css, js, een tool of een pagina: draai `.claude/bouw-site.ps1`. Dat zet automatisch `?v=<code>` achter alle `/assets/css`, `/assets/js` en `/assets/img` links, `/favicon.ico` en achter `tool.html` in de toolvensters.
- Nieuw bestand dat via een link wordt geladen (css/js in `assets/`, een nieuw toolvenster)? Controleer dat het een `?v=` krijgt. Nieuwe soort link die het bouwscript nog niet kent? Breid de versienummer-stap in `bouw-site.ps1` uit.
- HTML-pagina's krijgen `Cache-Control: no-cache` via `.htaccess` (ook uit `bouw-site.ps1`).
- Controleer na het live zetten dat de nieuwe `?v=` live in de pagina staat.

## Waar wat staat
- Pagina's worden gemaakt door `.claude/bouw-site.ps1` uit `inhoud/` — gemaakte pagina's niet met de hand bewerken.
- Homepage: `index.html` (met de hand), maar de wegwijzer-bordjes, de eerste tip en het schema zet `bouw-site.ps1` erin.
- Wegwijzer = ranglijst (`assets/js/teller.js`): volgorde op gebruik, groene balk met aantal, stippellijn onder de top 3 en boven de onderste 3 ("degradatiezone"; pas vanaf 8 tools), stemkolom (Reddit-stijl) links bij elk bordje en "Wat vind je van deze tool?" op elke toolpagina (`stemVraag` in de psd1). Eigen stem staat in de browser (`gg-stem-<tool>`), totalen op de server.
- Gorilla-tips (homepage): 3 per tool in `TIPS_ALLE` in `assets/js/main.js` (NL/EN/DE + tool). Naast het tipnummer staan KM-bordje en naam van de tool, overgenomen van de wegwijzer. Nieuwe tool = ook 3 tips toevoegen.
- Eén lijst met alle tools staat in `.claude/bouw-site.ps1` (`$tools`): titels, SEO-titel, wegwijzertekst, filter, plaatje. Nieuwe tool = daar toevoegen + `api/teller.php` (TOOLS) + "Ik wil…" en de fiets in `index.html` + een blok in `assets/js/vraag-gorilla.js`.
- Nieuwere tools (maatbepaler, paklijst, gravelroutes, versnellingen) delen hun opmaak in `assets/css/werkbank.css` (scope `wb-scope` plus een eigen scope). Gravelroutes: alleen routes met een bron die je zelf hebt gecontroleerd.
- Vraag de Gorilla: komt vanzelf onder elke tool (behalve gravelbike- en wielenkiezer, die hebben er een in de tool). Voorbeelden, extra kennis en het invullen van de tool staan per tool in `assets/js/vraag-gorilla.js` (TOOLS); de veelgestelde vragen van de pagina gebruikt hij ook.
- Deelknop: elke toolpagina heeft een "Deel deze tool"-knop onder de titel en onder de tool (in `bouw-site.ps1`, werking in `site.js`, teksten `deel*` in de psd1). Telefoon: eigen deelmenu van het toestel; computer: link kopiëren, WhatsApp, e-mail. Bewust geen knoppen of code van Facebook en co (die volgen bezoekers).
- Veelgestelde vragen per tool: `inhoud/tools/<naam>-faq.html` (paren `<h3>vraag</h3><p>antwoord</p>`), worden ook FAQ-schema.
- SEO: elke pagina krijgt schema (JSON-LD), deelplaatje per taal `assets/img/deelplaatje.png`, `deelplaatje-en.png`, `deelplaatje-de.png` (ontwerp in `.claude/deelplaatje.html`, met de lijst van alle tools: nieuwe tool daar toevoegen en de plaatjes opnieuw maken), `llms.txt` wordt gegenereerd.
- Kiezers: `.claude/kiezer-importeren.ps1` (gravelbike/wielen), `.claude/ultra-importeren.ps1`.
- Logo: bron in `.claude/logo/` (svg + png 512). Nieuw logo? Vervang `assets/img/logo-icon.svg`, draai `.claude/maak-favicons.ps1`, pas het grote logo in `index.html` (opening__band) aan en maak het deelplaatje opnieuw.
- Profielsticker: bron is `inhoud/bron/profielsticker.html` (daar aanpassen), daarna `.claude/profielsticker-importeren.ps1`.
- Server-scripts (PHP): `api/teller.php` (gebruiksteller) + stemmen omhoog/omlaag per tool (`?stemmen`, `?stem=<tool>&nu=&was=`), `api/osm.php` (tussenstation OpenStreetMap). Gegevens staan buiten `httpdocs`.
- PowerShell-scripts met niet-ASCII tekens opslaan als UTF-8 **met** BOM (Windows PowerShell 5.1).

## Huisstijl
Bone `#F4F1EA`, Ink `#15181A`, Gorilla Green `#2F8F3E`, Deep Green `#14361E`, Trail Orange `#FF6B2C` (alleen voor actie). Koppen Oswald (hoofdletters), tekst Inter. Donkere modus via `data-thema="donker"`. Niet lijken op gravello.nl.

## Talen (NL / EN / DE)
- Nederlands staat in de hoofdmap, Engels in `/en/`, Duits in `/de/`. Taalmenu met vlaggetjes rechtsboven (in `Balk` in `bouw-site.ps1`, werking in `site.js`); met een muis klapt het open bij aanwijzen (net als het deelmenu; via `klapMenu` in `site.js`, dat naar de muis zelf kijkt en niet naar wat het apparaat meldt: laptops met aanraakscherm zeggen soms "geen muis").
- Automatische taal (`$taalWissel` in `bouw-site.ps1`, staat in de kop van elke pagina): computer op Nederlands → NL, Duits → DE, alle andere talen → EN. Niet voor zoekmachines/robots, en niet meer zodra iemand zelf een taal kiest in het menu (bewaard als `gg-taal` in de browser).
- Vaste teksten (menu, knoppen, toolnamen, homepage-vertaallijst, paginatitels): `inhoud/talen/<taal>.psd1` (UTF-8 **met** BOM).
- Vertaalde inhoud: `inhoud/en/...` en `inhoud/de/...` (zelfde bestandsnamen als `inhoud/...`). Ontbreekt een vertaling, dan toont de pagina de Nederlandse tool met een korte melding.
- Homepage: `index.html` is de Nederlandse bron; `/en/` en `/de/` worden gemaakt met de lijst `home` in de psd1. **Pas je een tekst op de homepage aan, pas dan ook die lijst aan** (het bouwscript meldt "LET OP" als een tekst niet meer gevonden wordt).
- Scripts van tools lezen de taal uit `<html lang>` en kiezen hun teksten met `T(nl, en, de)`. Een Nederlandse tekst wijzigen in een tool? Pas de Engelse en Duitse mee aan.
- `inhoud/<taal>/tools/bandenspanning-calculator-tool.html` is een vertaalde kopie: wijzigingen aan de Nederlandse calculator daar ook doorvoeren.
- Grote geïmporteerde tools (gravelbike-, wielen- en ultra-kiezer, profielsticker) worden vertaald met `inhoud/vertalingen/<slug>.txt`: per regel `Nederlands ‖ Engels ‖ Duits`. Het bouwscript maakt daarmee `assets/js/<slug>.<taal>.js` en voor de profielsticker `tools/profielsticker/tool.<taal>.html`. Na een nieuwe import: bouwen en elke "LET OP" (tekst niet gevonden) in dat bestand bijwerken.
- Gravelbike Kiezer, framematen: "cm" komt alleen achter echte centimetermaten; dat regelt stap 5b in `.claude/kiezer-importeren.ps1`.
