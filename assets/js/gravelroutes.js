/* =========================================================
   Gravel Gorilla — Gravelroutes in Nederland en België
   Lijst met bestaande gravelroutes, met een link naar de bron (GPX of bewegwijzering).
   Bronnen (oktober 2026): mtbroutes.nl (officiële MTB-routes met gravelvariant),
   drenthe.nl, Komoot/Velozine (Green Divide), de Sporza Onverhard-routes (Vlaanderen),
   de officiële routes van Toerisme Vlaams-Brabant op Fietsknooppunt.be en Gravelrides.cc
   (daar zijn de meeste routes alleen voor betalende leden: die hebben lid: true).
   Nieuwe route? Voeg hem toe aan ROUTES, met een bron die je zelf hebt gecontroleerd.
   ========================================================= */
(function () {
  const wortel = document.querySelector(".gr-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);

  const MTB = "mtbroutes.nl", SPORZA = "Sporza Onverhard", FK = "Fietsknooppunt.be", GRC = "Gravelrides.cc";
  // n = naam, p = provincies, land, km (tot = langste variant), nav: bord (bewegwijzerd) of gpx, bron, u = link, noot,
  // lid: true = alleen voor (betalende) leden van de bron
  const ROUTES = [
    { n: "Sint-Geertruid (Gravel)", p: ["LI"], land: "NL", km: 31.1, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/sint-geertruid-1" },
    { n: "Mechelen (Gravel)", p: ["LI"], land: "NL", km: 24.2, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/mechelen-2" },
    { n: "Maastricht Scharn (Gravel)", p: ["LI"], land: "NL", km: 28.9, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/maastricht-scharn-1" },
    { n: "Margraten (Gravel)", p: ["LI"], land: "NL", km: 30.5, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/margraten-gravel" },
    { n: "Maastricht Sint-Pietersberg – Riemst (Gravel)", p: ["LI"], land: "NL", km: 11.9, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/maastricht-st-pietersberg-riemst-1" },
    { n: "Nuth – Voerendaal (Gravel)", p: ["LI"], land: "NL", km: 36.0, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/nuth-voerendaal" },
    { n: "Beek (Gravel)", p: ["LI"], land: "NL", km: 36.0, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/beek" },
    { n: "Horst (Gravel)", p: ["LI"], land: "NL", km: 47.3, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/horst-1" },
    { n: "Sittard – Geleen (Gravel)", p: ["LI"], land: "NL", km: 12.5, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/sittard-geleen" },
    { n: "Echt – Susteren (Gravel)", p: ["LI"], land: "NL", km: 51.1, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/echt-susteren" },
    { n: "Rheden (Gravel)", p: ["GE"], land: "NL", km: 36.5, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/rheden-1", noot: "Langs de Posbank. Kijk op de bronpagina of je een vignet nodig hebt." },
    { n: "Winterswijk (Gravel)", p: ["GE"], land: "NL", km: 47.0, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/winterswijk-1" },
    { n: "Zeddam (Gravel)", p: ["GE"], land: "NL", km: 17.6, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/zeddam-1" },
    { n: "Zieuwent (Gravel)", p: ["GE"], land: "NL", km: 60.8, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/zieuwent" },
    { n: "Groenlo (Gravel)", p: ["GE"], land: "NL", km: 30.9, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/groenlo-1" },
    { n: "Neede (Gravel)", p: ["GE"], land: "NL", km: 27.4, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/neede" },
    { n: "Vragender (Gravel)", p: ["GE"], land: "NL", km: 18.3, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/vragender" },
    { n: "Heinkenszand (Gravel)", p: ["ZE"], land: "NL", km: 38.8, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/zeeland/heinkenszand" },
    { n: "Burgh-Haamstede (Gravel)", p: ["ZE"], land: "NL", km: 39.8, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/zeeland/burgh-haamstede" },
    { n: "Zierikzee (Gravel)", p: ["ZE"], land: "NL", km: 24.8, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/zeeland/zierikzee" },
    { n: "Ruinen – Dwingelderveld (Gravel)", p: ["DR"], land: "NL", km: 21.3, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/drenthe/ruinen-dwingelderveld", noot: "Start bij Buitencentrum De Poort in Ruinen." },
    { n: "Veenhuizen (Gravel)", p: ["DR"], land: "NL", km: 57.3, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/drenthe/veenhuizen" },
    { n: "Havelte Oost (Gravel)", p: ["DR"], land: "NL", km: 25.7, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/drenthe/havelte-oost" },
    { n: "Gravelroute Kop van Drenthe (Lebbestaok)", p: ["DR"], land: "NL", km: 70, nav: "gpx", bron: "Drenthe.nl", u: "https://www.drenthe.nl/fietsen-wandelen/routes/2139787477/vaste-gravelroute-noordenveld", noot: "Start in Veenhuizen. Schelpenpaden, zandwegen en kasseien langs de Essen van Norg." },
    { n: "Green Divide", p: ["UT", "GE", "OV"], land: "NL", km: 300, nav: "gpx", bron: "Komoot", u: "https://www.komoot.com/nl-nl/collection/1176472", noot: "Van station Naarden-Bussum over de Utrechtse Heuvelrug en de Veluwe naar Zwolle. Meerdaags of in stukken." },

    { n: "Gravelnetwerk Noorderkempen (4 routes)", p: ["AN"], land: "BE", km: 66, tot: 101, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/04/08/keuze-uit-vier-routes-tussen-de-66-en-101-km-ontdek-net-als-bav~1775652921892/" },
    { n: "Zoersel", p: ["AN"], land: "BE", km: 59, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/14/ontdek-de-sporza-onverhard-gravelroute-in-zoersel-59-km~1755177697390/" },
    { n: "Graaf Graveldag Herentals (3 routes)", p: ["AN"], land: "BE", km: 41, tot: 107, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/06/18/41-69-of-107-km-download-de-3-onverhard-gravelroutes-van-de-graaf-graveldag-in-herentals~1750239309423/" },
    { n: "Puurs-Sint-Amands en Bornem", p: ["AN"], land: "BE", km: 90, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/05/06/ontdek-net-als-bert-de-onverhard-gravelroute-in-puurs-sint-amands-en-bornem-90-km~1746607907575/" },
    { n: "Hamont-Achel", p: ["LB"], land: "BE", km: 32, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/03/12/32-kilometer-puur-limburgs-natuurplezier-ontdek-de-onverhard-route-in-hamont-achel~1773316236769/" },
    { n: "Voerstreek vanuit Riemst", p: ["LB"], land: "BE", km: 52, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/08/ontdek-de-voerstreek-met-de-sporza-onverhard-gravelroute-vanuit-riemst-52-km~1754640219116/" },
    { n: "Haspengouw vanuit Diepenbeek", p: ["LB"], land: "BE", km: 59, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/06/ontdek-het-mooie-haspengouw-met-de-onverhard-gravelroute-vanuit-diepenbeek-59-km~1754468481960/", noot: "Start bij Demerstrand in Diepenbeek. Ongeveer een kwart onverhard." },
    { n: "As en Oudsbergen (Hoge Kempen)", p: ["LB"], land: "BE", km: 37, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/05/27/ontdek-de-onverhard-gravelroute-in-as-en-oudsbergen-37-km~1748345933530/", noot: "Start bij station As, door Nationaal Park Hoge Kempen." },
    { n: "Peer en Pelt", p: ["LB"], land: "BE", km: 90, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/05/15/ontdek-de-onverhard-gravelroute-in-peer-en-pelt-90-km~1747297726638/" },
    { n: "Gavere", p: ["OV"], land: "BE", km: 40, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/08/ontdek-de-sporza-onverhard-gravelroute-in-gavere-40-km~1754640669489/" },
    { n: "Aalst", p: ["OV"], land: "BE", km: 58, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/07/16/ontdek-de-sporza-onverhard-gravelroute-in-aalst-58-km~1752660553636/" },
    { n: "Blaarmeersen – Evergem", p: ["OV"], land: "BE", km: 96, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/04/24/ontdek-de-onverhard-gravelroute-blaarmeersen-evergem-96-km~1745936321348/" },
    { n: "Frans Claes-route Leuven", p: ["VB"], land: "BE", km: 130, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/05/22/ontdek-de-onverhard-gravelroute-frans-claes-in-leuven-130-km~1747927389031/" },
    { n: "Zoniënwoud – Tervuren", p: ["VB"], land: "BE", km: 42, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/04/24/ontdek-de-onverhard-gravelroute-zonienwoud-tervuren-42-km~1745936523284/" },
    { n: "Marathonroute aan de Kust", p: ["WV"], land: "BE", km: 107, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/11/20/107-kilometer-fietsplezier-ontdek-de-onverhard-marathonroute-aan-de-kust~1763629208523/" },
    { n: "Heuvelland (met de Kemmelberg)", p: ["WV"], land: "BE", km: 77, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/09/25/met-passage-over-de-kemmelberg-en-plugstreets-ontdek-de-onverhard-route-in-het-heuvelland-77-km~1758804967421/" },
    { n: "Ledegem", p: ["WV"], land: "BE", km: 42, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/09/08/ontdek-de-onverhard-gravelroute-in-ledegem-42-km~1757327254354/" },
    { n: "Anzegem", p: ["WV"], land: "BE", km: 36, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/07/31/ontdek-de-sporza-onverhard-gravelroute-in-anzegem-36-km~1752660548387/" },
    { n: "Jabbeke", p: ["WV"], land: "BE", km: 36, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/06/05/ontdek-de-onverhard-gravelroute-in-jabbeke-met-extra-s-36-km~1749108323488/" },
    { n: "Beernem", p: ["WV"], land: "BE", km: 32, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/04/24/ontdek-net-als-bavo-de-onverhard-gravelroute-in-beernem-32-km~1745488342829/" },
    { n: "Driedaagse Onverhard-bikepackroute", p: [], land: "BE", km: 333, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/09/22/klaar-voor-een-heus-bikepack-avontuur-ontdek-de-driedaagse-onverhard-route-333-km~1758536959767/", noot: "Drie dagen door Vlaanderen, met overnachtingen." },
    // ---- Sporza Onverhard (aangevuld oktober 2026) ----
    { n: "Westerlo (BK-parcours)", p: ["AN"], land: "BE", km: 52, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/18/in-het-spoor-van-de-profs-rij-zelf-de-gravelroute-van-het-bk-in-westerlo-met-gpx-file~1755515928506/" },
    { n: "Essen – Kalmthoutse Heide", p: ["AN"], land: "BE", km: 83, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/07/16/ontdek-de-kalmthoutse-heide-met-de-onverhard-gravelroute-vanuit-essen~1752652154971/" },
    { n: "Urban Gravel Route Genk", p: ["LB"], land: "BE", km: 70, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/04/29/hier-combineer-je-sport-natuur-erfgoed-en-cultuur-bavo-opent-gloednieuwe-onverhard-urban-gravel-route-in-genk~1777448339839/", noot: "Drie lussen langs natuur, erfgoed en kunst; deze is de middelste." },
    { n: "Heusden-Zolder", p: ["LB"], land: "BE", km: 65, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/06/24/ontdek-net-als-bert-en-bavo-de-onverhard-gravelroute-in-heusden-zolder~1750751430603/" },
    { n: "Kluisbergen", p: ["OV"], land: "BE", km: 41, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/04/07/-mooi-pittig-oude-kwaremont-en-paterberg-met-onverharde-vlaamse-ardennen-ontdek-de-onverhard-route-in-kluisbergen~1775563008950/", noot: "Over de Oude Kwaremont en de Paterberg." },
    { n: "Wetteren", p: ["OV"], land: "BE", km: 37, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/03/05/ontdek-de-onverhard-route-in-wetteren-met-banen-waarom-je-op-je-gravelfiets-springt~1772704107248/" },
    { n: "Geraardsbergen", p: ["OV"], land: "BE", km: 48, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/02/19/zelf-de-muur-temmen-onverhard-route-in-geraardsbergen-stuurt-je-over-iconische-klim-en-langs-de-gavers~1771498554045/", noot: "Over de Muur en langs De Gavers." },
    { n: "Gavere (veldritparcours)", p: ["OV"], land: "BE", km: 27, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/02/19/langs-het-parcours-van-de-wereldbeker-veldrijden-een-pittige-klim-en-eindigen-op-het-bikepark-ontdek-de-onverhard-route-in-gavere~1771494324058/" },
    { n: "Lievegem (Zomergem)", p: ["OV"], land: "BE", km: 25, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/06/12/ontdek-net-als-bert-de-backer-en-zonen-de-sporza-onverhard-gravelroute-in-lievegem~1749724136409/" },
    { n: "Overijse – Huldenberg", p: ["VB"], land: "BE", km: 54.2, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/04/16/-prachtige-route-voor-de-mountainbike-met-geen-meter-vlak-ontdek-net-als-bavo-de-onverhard-route-in-overijse-huldenberg~1776325096811/", noot: "Pittig en heuvelachtig, bijna een mountainbikeroute." },
    { n: "Pajottegem (Gooik)", p: ["VB"], land: "BE", km: 76, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/07/01/ontdek-het-pajottenland-met-de-pittige-onverhard-gravelroute-in-pajottegem~1751549666830/" },
    { n: "Dwars door het Hageland (Aarschot)", p: ["VB"], land: "BE", km: 80, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/06/11/net-zoals-de-profs-bavo-reed-de-dwars-door-het-hageland-graveleditie-met-gpx-file~1749638713141/" },
    { n: "Koksijde (Paul Herygers)", p: ["WV"], land: "BE", km: 12.8, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/04/08/met-wie-anders-dan-met-de-zandkoning-himself-ontdek-net-zoals-bert-de-onverhard-route-van-paul-herygers-in-koksijde~1775656314919/", noot: "Korte zandroute door de duinen." },
    { n: "Diksmuide – Frontzate", p: ["WV"], land: "BE", km: 49.4, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/07/06/doordrenkt-van-oorlogsgeschiedenis-langs-de-frontzate-ontdek-de-onverhard-route-in-diksmuide~1783346693767/", noot: "Langs de IJzer en de Dodengang, bijna vlak." },

    // ---- Officiële routes van Toerisme Vlaams-Brabant en partners (Fietsknooppunt.be) ----
    { n: "Dijleland-gravelroute (Oud-Heverlee)", p: ["VB"], land: "BE", km: 103.3, nav: "gpx", bron: FK, u: "https://www.fietsknooppunt.be/nl-be/fietsen/routes/r1005/dijleland-gravelroute", noot: "Officiële route van Toerisme Vlaams-Brabant, met veel hoogtemeters." },
    { n: "Geuze-gravelroute (Sint-Pieters-Leeuw)", p: ["VB"], land: "BE", km: 97.2, nav: "gpx", bron: FK, u: "https://www.fietsknooppunt.be/nl-be/fietsen/routes/r1040/geuze-gravelroute", noot: "Officiële route door het Pajottenland; deels technisch." },
    { n: "Pallox-gravelroute (Hoegaarden)", p: ["VB"], land: "BE", km: 114.5, nav: "gpx", bron: FK, u: "https://www.fietsknooppunt.be/nl-be/fietsen/routes/r1467/pallox-gravelroute", noot: "Officiële route van Toerisme Vlaams-Brabant door het Hageland." },
    { n: "WK-gravelroute Brabantse Wouden (Halle – Leuven)", p: ["VB"], land: "BE", km: 135.6, nav: "gpx", bron: FK, u: "https://www.fietsknooppunt.be/nl-be/fietsen/routes/r1462/wk-gravelroute-brabantse-wouden", noot: "Volgt grotendeels het parcours van het WK gravel 2024." },
    { n: "WK-gravelroute: lus Halle", p: ["VB"], land: "BE", km: 73.6, nav: "gpx", bron: FK, u: "https://www.fietsknooppunt.be/nl-be/fietsen/routes/r1463/wk-gravelroute-variant-1---lus-halle", noot: "Rondje vanuit Halle over een deel van het WK-parcours van 2024." },
    { n: "WK-gravelroute: lus Leuven", p: ["VB"], land: "BE", km: 80, nav: "gpx", bron: FK, u: "https://www.fietsknooppunt.be/nl-be/fietsen/routes/r1464/wk-gravelroute-variant-2---lus-leuven", noot: "Rondje vanuit Leuven over een deel van het WK-parcours van 2024." },
    { n: "EK/BK-gravelroute Brabantse Wouden (Oud-Heverlee)", p: ["VB"], land: "BE", km: 78, nav: "gpx", bron: FK, u: "https://www.fietsknooppunt.be/nl-be/fietsen/routes/r1229/ek-bk-gravelroute-brabantse-wouden", noot: "Volgt het parcours van het EK en BK gravel 2023." },

    // ---- Gravelrides.cc (oktober 2026). De meeste routes zijn alleen voor leden (betaald lidmaatschap bij Gufo Cycling) ----
    { n: "Amerongen (De Proloog)", p: ["UT"], land: "NL", km: 56, tot: 104, nav: "gpx", bron: GRC, u: "https://gravelrides.cc/amerongen/", noot: "Drie gratis routes over de Utrechtse Heuvelrug." },
    { n: "Strade Bianche Achterhoek", p: ["GE"], land: "NL", km: 65, tot: 152, nav: "gpx", bron: GRC, u: "https://gravelrides.cc/strade-bianche-achterhoek/", noot: "De routes van 65 en 99 km zijn gratis; de XL-routes zijn voor leden." },
    { n: "Hoge Kempen (Maasmechelen)", p: ["LB"], land: "BE", km: 84, nav: "gpx", bron: GRC, u: "https://gravelrides.cc/hoge-kempen-be/" },
    { n: "Aalten", p: ["GE"], land: "NL", km: 62, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/aalten/" },
    { n: "Apeldoorn – Kroondomein", p: ["GE"], land: "NL", km: 41, tot: 92, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/apeldoorn/", noot: "Het Kroondomein is van 15 september tot en met 25 december dicht; dan kun je alleen de twee routes rijden die het hele jaar open zijn." },
    { n: "Arnhem (Papendal)", p: ["GE"], land: "NL", km: 56, tot: 155, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/arnhem/", noot: "Voor de route van 84 km heb je een MTB-vignet van Natuurmonumenten nodig." },
    { n: "Bikepack Achterhoek", p: ["GE"], land: "NL", km: 204, tot: 344, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/bikepack-achterhoek/", noot: "Meerdaagse bikepackroute." },
    { n: "Bikepack Midden-Limburg", p: ["LI"], land: "NL", km: 270, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/bikepack-midden-limburg/", noot: "Meerdaagse bikepackroute." },
    { n: "Bikepack Twente", p: ["OV"], land: "NL", km: 250, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/bikepack-twente/", noot: "Meerdaagse bikepackroute." },
    { n: "Bikepack Veluwe", p: ["GE"], land: "NL", km: 200, tot: 300, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/bikepack-veluwe/", noot: "Meerdaagse bikepackroute." },
    { n: "Brabantse Wal (Bergen op Zoom)", p: ["NB"], land: "NL", km: 70, tot: 91, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/bergen-op-zoom/" },
    { n: "Breda", p: ["NB"], land: "NL", km: 61, tot: 86, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/breda/" },
    { n: "Bredevoort", p: ["GE"], land: "NL", km: 62, tot: 82, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/bredevoort/" },
    { n: "De Maashorst (Schaijk)", p: ["NB"], land: "NL", km: 76, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/maashorst/" },
    { n: "Den Bosch (Vught)", p: ["NB"], land: "NL", km: 63, tot: 113, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/den-bosch/" },
    { n: "Dwingeloo", p: ["DR"], land: "NL", km: 65, tot: 115, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/dwingeloo/" },
    { n: "Eibergen", p: ["GE"], land: "NL", km: 51, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/eibergen/" },
    { n: "Eindhoven", p: ["NB"], land: "NL", km: 52, tot: 99, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/eindhoven/" },
    { n: "Noordoost-Veluwe (Elburg)", p: ["GE"], land: "NL", km: 50, tot: 82, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/elburg/" },
    { n: "Fryske Wâlden (Drachten)", p: ["FR"], land: "NL", km: 50, tot: 97, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/drachten/" },
    { n: "Gravel XL Fryslân 150 (Surhuisterveen)", p: ["FR"], land: "NL", km: 150, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/fryslan-150/" },
    { n: "Gaasterland (Balk)", p: ["FR"], land: "NL", km: 48, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gaasterland/" },
    { n: "GR1: Groningen – Maastricht", p: ["GR", "DR", "OV", "GE", "LI"], land: "NL", km: 572, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gr-1/", noot: "Lange route van station naar station, ook in etappes." },
    { n: "GR2: Zandvoort – Enschede", p: ["NH", "GE", "OV"], land: "NL", km: 341, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gr-2/", noot: "Lange route van station naar station, ook in etappes." },
    { n: "GR3: Scheveningen – Bad Bentheim", p: ["ZH", "UT", "GE", "OV"], land: "NL", km: 432, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gr-3/", noot: "Lange route van station naar station, ook in etappes." },
    { n: "GR4: Amsterdam – Maastricht", p: ["NH", "UT", "GE", "NB", "LI"], land: "NL", km: 375, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gr-4/", noot: "Lange route van station naar station, ook in etappes." },
    { n: "GR4a: Amsterdam – Maastricht via Nijmegen", p: ["NH", "GE", "LI"], land: "NL", km: 427, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gr-4a/", noot: "Lange route van station naar station, ook in etappes." },
    { n: "GR5: Amsterdam – Enschede", p: ["NH", "UT", "GE", "OV"], land: "NL", km: 279, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gr-5/", noot: "Lange route van station naar station, ook in etappes." },
    { n: "GR5a: Utrecht – Enschede", p: ["UT", "GE", "OV"], land: "NL", km: 263, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gr-5a/", noot: "Lange route van station naar station, ook in etappes." },
    { n: "GR6: Utrecht – Groningen", p: ["UT", "GE", "OV", "DR", "GR"], land: "NL", km: 302, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/gr-6/", noot: "Lange route van station naar station, ook in etappes." },
    { n: "Groesbeek (Mook)", p: ["GE", "LI"], land: "NL", km: 59, tot: 104, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/groesbeek/" },
    { n: "Groningen (Spaak)", p: ["GR", "DR"], land: "NL", km: 57, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/groningen/" },
    { n: "Haaksbergen", p: ["OV"], land: "NL", km: 43, tot: 91, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/haaksbergen/" },
    { n: "Het Gooi (Laren)", p: ["NH"], land: "NL", km: 48, tot: 100, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/het-gooi/" },
    { n: "Hof van Twente (Diepenheim)", p: ["OV"], land: "NL", km: 75, tot: 115, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/hof-van-twente/" },
    { n: "Hondsrug (Emmen)", p: ["DR"], land: "NL", km: 64, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/emmen/" },
    { n: "Lage Vuursche", p: ["UT"], land: "NL", km: 42, tot: 77, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/lage-vuursche/", noot: "De landingsbaan bij Soest is van 15 maart tot en met 15 augustus dicht; daarvoor is er een aparte variant." },
    { n: "Limburg-Eifel XL (Epen – Hürtgenwald)", p: ["LI"], land: "NL", km: 115, tot: 132, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/limburg-eifel-xl/", noot: "Van Epen over de grens naar de Eifel in Duitsland." },
    { n: "Loenermark (Loenen)", p: ["GE"], land: "NL", km: 54, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/loenermark/" },
    { n: "Lunteren", p: ["GE"], land: "NL", km: 53, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/lunteren/" },
    { n: "Maasduinen (Gennep)", p: ["LI"], land: "NL", km: 82, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/maasduinen/" },
    { n: "Mechelen (Zuid-Limburg)", p: ["LI"], land: "NL", km: 68, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/mechelen/" },
    { n: "Montferland ('s-Heerenberg)", p: ["GE"], land: "NL", km: 52, tot: 68, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/montferland/" },
    { n: "Nationaal Park De Meinweg", p: ["LI"], land: "NL", km: 66, tot: 90, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/np-meinweg/" },
    { n: "Nunspeet", p: ["GE"], land: "NL", km: 33, tot: 97, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/nunspeet/" },
    { n: "Offgrid Gravel Series (Banholt)", p: ["LI"], land: "NL", km: 63, tot: 137, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/offgrid-gravel-series/" },
    { n: "Ommen", p: ["OV"], land: "NL", km: 53, tot: 106, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/ommen/" },
    { n: "Ootmarsum", p: ["OV"], land: "NL", km: 56, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/ootmarsum/" },
    { n: "Putten", p: ["GE"], land: "NL", km: 53, tot: 75, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/putten/" },
    { n: "Roden", p: ["DR"], land: "NL", km: 76, tot: 89, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/roden/" },
    { n: "Berkelland (Ruurlo)", p: ["GE"], land: "NL", km: 67, tot: 86, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/berkelland/" },
    { n: "Sallandse Heuvelrug (Holten)", p: ["OV"], land: "NL", km: 53, tot: 82, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/sallandse-heuvelrug/" },
    { n: "Taxandria (Eersel)", p: ["NB"], land: "NL", km: 91, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/taxandria-eersel/" },
    { n: "Tilburg", p: ["NB"], land: "NL", km: 87, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/tilburg/" },
    { n: "Gravel XL Twente 150 (Delden)", p: ["OV"], land: "NL", km: 150, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/twente-150/" },
    { n: "Valkenburg", p: ["LI"], land: "NL", km: 50, tot: 79, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/valkenburg/" },
    { n: "Gravel XL Veluwe 150 (Oosterbeek)", p: ["GE"], land: "NL", km: 150, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/veluwe-150/" },
    { n: "Venlo (Tegelen)", p: ["LI"], land: "NL", km: 51, tot: 67, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/venlo/" },
    { n: "Wanroij", p: ["NB"], land: "NL", km: 51, tot: 152, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/wanroij/" },
    { n: "Wanssum", p: ["LI"], land: "NL", km: 57, tot: 76, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/wanssum-limburg/" },
    { n: "Winterswijk", p: ["GE"], land: "NL", km: 47, tot: 100, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/winterswijk/" },
    { n: "Zeeuws-Vlaanderen", p: ["ZE"], land: "NL", km: 82, tot: 154, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/zeeland/" },
    { n: "Zuidlaren", p: ["DR"], land: "NL", km: 55, tot: 125, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/zuidlaren/" },
    { n: "Zuidoost-Drenthe (Geesbrug)", p: ["DR"], land: "NL", km: 47, tot: 114, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/zuidoost-drenthe/" },
    { n: "Zuidoost-Groningen (Onstwedde)", p: ["GR"], land: "NL", km: 72, tot: 112, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/zuidoost-groningen/" },
    { n: "Zuidwest-Veluwe (Harskamp)", p: ["GE"], land: "NL", km: 80, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/zuidwest-veluwe/" },
    { n: "Zutphen XL", p: ["GE"], land: "NL", km: 105, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/zutphen-xl/" },
    { n: "Bastogne", p: ["LX"], land: "BE", km: 66, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/bastogne/" },
    { n: "Eupen (Ardennen)", p: ["LU"], land: "BE", km: 92, nav: "gpx", bron: GRC, lid: true, u: "https://gravelrides.cc/eupen-be/" }

  ];
  // ---------- teksten in de taal van de pagina ----------
  const TAAL = (document.documentElement.lang || "nl").slice(0, 2);
  const T = (nl, en, de) => (TAAL === "en" ? en : TAAL === "de" ? de : nl);
  const NAMEN = {
    "Haspengouw vanuit Diepenbeek": ["Haspengouw from Diepenbeek", "Haspengau ab Diepenbeek"], "Voerstreek vanuit Riemst": ["Voerstreek from Riemst", "Voerstreek ab Riemst"],
    "Marathonroute aan de Kust": ["Marathon route on the coast", "Marathonroute an der Küste"], "Driedaagse Onverhard-bikepackroute": ["Three-day Onverhard bikepacking route", "Dreitägige Onverhard-Bikepacking-Route"],
    "Gravelnetwerk Noorderkempen (4 routes)": ["Noorderkempen gravel network (4 routes)", "Gravelnetz Noorderkempen (4 Routen)"], "Graaf Graveldag Herentals (3 routes)": ["Graaf Graveldag Herentals (3 routes)", "Graaf Graveldag Herentals (3 Routen)"],
    "Heuvelland (met de Kemmelberg)": ["Heuvelland (with the Kemmelberg)", "Heuvelland (mit dem Kemmelberg)"],
    "Westerlo (BK-parcours)": ["Westerlo (Belgian championship course)", "Westerlo (Strecke der belgischen Meisterschaft)"], "Gavere (veldritparcours)": ["Gavere (cyclocross course)", "Gavere (Cyclocross-Strecke)"],
    "Dijleland-gravelroute (Oud-Heverlee)": ["Dijleland gravel route (Oud-Heverlee)", "Dijleland-Gravelroute (Oud-Heverlee)"], "Geuze-gravelroute (Sint-Pieters-Leeuw)": ["Geuze gravel route (Sint-Pieters-Leeuw)", "Geuze-Gravelroute (Sint-Pieters-Leeuw)"],
    "Pallox-gravelroute (Hoegaarden)": ["Pallox gravel route (Hoegaarden)", "Pallox-Gravelroute (Hoegaarden)"],
    "WK-gravelroute Brabantse Wouden (Halle – Leuven)": ["World Championship gravel route Brabantse Wouden (Halle – Leuven)", "WM-Gravelroute Brabantse Wouden (Halle – Leuven)"],
    "WK-gravelroute: lus Halle": ["World Championship gravel route: Halle loop", "WM-Gravelroute: Schleife Halle"], "WK-gravelroute: lus Leuven": ["World Championship gravel route: Leuven loop", "WM-Gravelroute: Schleife Leuven"],
    "EK/BK-gravelroute Brabantse Wouden (Oud-Heverlee)": ["European/Belgian Championship gravel route Brabantse Wouden (Oud-Heverlee)", "EM/BM-Gravelroute Brabantse Wouden (Oud-Heverlee)"],
    "Noordoost-Veluwe (Elburg)": ["North-East Veluwe (Elburg)", "Nordost-Veluwe (Elburg)"], "Zuidwest-Veluwe (Harskamp)": ["South-West Veluwe (Harskamp)", "Südwest-Veluwe (Harskamp)"],
    "Zuidoost-Drenthe (Geesbrug)": ["South-East Drenthe (Geesbrug)", "Südost-Drenthe (Geesbrug)"], "Zuidoost-Groningen (Onstwedde)": ["South-East Groningen (Onstwedde)", "Südost-Groningen (Onstwedde)"],
    "Mechelen (Zuid-Limburg)": ["Mechelen (South Limburg)", "Mechelen (Süd-Limburg)"], "Nationaal Park De Meinweg": ["De Meinweg National Park", "Nationalpark De Meinweg"],
    "Zeeuws-Vlaanderen": ["Zeelandic Flanders", "Zeeländisch-Flandern"], "Eupen (Ardennen)": ["Eupen (Ardennes)", "Eupen (Ardennen)"]
  };
  const NOTEN = {
    "Langs de Posbank. Kijk op de bronpagina of je een vignet nodig hebt.": ["Along the Posbank. Check the source page whether you need a permit (vignet).", "Entlang der Posbank. Prüf auf der Quellseite, ob du eine Vignette brauchst."],
    "Start bij Buitencentrum De Poort in Ruinen.": ["Starts at visitor centre De Poort in Ruinen.", "Start am Besucherzentrum De Poort in Ruinen."],
    "Start in Veenhuizen. Schelpenpaden, zandwegen en kasseien langs de Essen van Norg.": ["Starts in Veenhuizen. Shell paths, sandy tracks and cobbles past the Essen van Norg.", "Start in Veenhuizen. Muschelwege, Sandwege und Kopfsteinpflaster entlang der Essen van Norg."],
    "Van station Naarden-Bussum over de Utrechtse Heuvelrug en de Veluwe naar Zwolle. Meerdaags of in stukken.": ["From Naarden-Bussum station over the Utrechtse Heuvelrug and the Veluwe to Zwolle. Over several days or in sections.", "Vom Bahnhof Naarden-Bussum über die Utrechtse Heuvelrug und die Veluwe nach Zwolle. Mehrtägig oder in Etappen."],
    "Start bij Demerstrand in Diepenbeek. Ongeveer een kwart onverhard.": ["Starts at Demerstrand in Diepenbeek. About a quarter unpaved.", "Start am Demerstrand in Diepenbeek. Etwa ein Viertel unbefestigt."],
    "Start bij station As, door Nationaal Park Hoge Kempen.": ["Starts at As station, through Hoge Kempen National Park.", "Start am Bahnhof As, durch den Nationalpark Hoge Kempen."],
    "Drie dagen door Vlaanderen, met overnachtingen.": ["Three days through Flanders, with overnight stays.", "Drei Tage durch Flandern, mit Übernachtungen."],
    "Drie lussen langs natuur, erfgoed en kunst; deze is de middelste.": ["Three loops past nature, heritage and art; this is the middle one.", "Drei Schleifen entlang Natur, Kulturerbe und Kunst; dies ist die mittlere."],
    "Over de Oude Kwaremont en de Paterberg.": ["Over the Oude Kwaremont and the Paterberg.", "Über den Oude Kwaremont und den Paterberg."],
    "Over de Muur en langs De Gavers.": ["Over the Muur (the Wall) and past De Gavers.", "Über die Muur (die Mauer) und entlang De Gavers."],
    "Pittig en heuvelachtig, bijna een mountainbikeroute.": ["Tough and hilly, almost a mountain bike route.", "Anspruchsvoll und hügelig, fast eine Mountainbike-Route."],
    "Korte zandroute door de duinen.": ["Short sandy route through the dunes.", "Kurze Sandroute durch die Dünen."],
    "Langs de IJzer en de Dodengang, bijna vlak.": ["Along the Yser and the Trench of Death, almost flat.", "Entlang der Yser und des Todesgangs (Dodengang), fast flach."],
    "Officiële route van Toerisme Vlaams-Brabant, met veel hoogtemeters.": ["Official route by Toerisme Vlaams-Brabant, with lots of climbing.", "Offizielle Route von Toerisme Vlaams-Brabant, mit vielen Höhenmetern."],
    "Officiële route door het Pajottenland; deels technisch.": ["Official route through the Pajottenland; partly technical.", "Offizielle Route durch das Pajottenland; teils technisch."],
    "Officiële route van Toerisme Vlaams-Brabant door het Hageland.": ["Official route by Toerisme Vlaams-Brabant through the Hageland.", "Offizielle Route von Toerisme Vlaams-Brabant durch das Hageland."],
    "Volgt grotendeels het parcours van het WK gravel 2024.": ["Largely follows the 2024 Gravel World Championships course.", "Folgt größtenteils der Strecke der Gravel-WM 2024."],
    "Rondje vanuit Halle over een deel van het WK-parcours van 2024.": ["Loop from Halle over part of the 2024 World Championships course.", "Runde ab Halle über einen Teil der WM-Strecke von 2024."],
    "Rondje vanuit Leuven over een deel van het WK-parcours van 2024.": ["Loop from Leuven over part of the 2024 World Championships course.", "Runde ab Leuven über einen Teil der WM-Strecke von 2024."],
    "Volgt het parcours van het EK en BK gravel 2023.": ["Follows the 2023 European and Belgian Gravel Championships course.", "Folgt der Strecke der Gravel-EM und -BM 2023."],
    "Drie gratis routes over de Utrechtse Heuvelrug.": ["Three free routes over the Utrechtse Heuvelrug.", "Drei kostenlose Routen über die Utrechtse Heuvelrug."],
    "De routes van 65 en 99 km zijn gratis; de XL-routes zijn voor leden.": ["The 65 and 99 km routes are free; the XL routes are for members.", "Die Routen mit 65 und 99 km sind kostenlos; die XL-Routen sind für Mitglieder."],
    "Het Kroondomein is van 15 september tot en met 25 december dicht; dan kun je alleen de twee routes rijden die het hele jaar open zijn.": ["The Kroondomein (royal estate) is closed from 15 September to 25 December; then you can only ride the two routes that are open all year.", "Das Kroondomein (königliches Gut) ist vom 15. September bis 25. Dezember gesperrt; dann kannst du nur die zwei ganzjährig offenen Routen fahren."],
    "Voor de route van 84 km heb je een MTB-vignet van Natuurmonumenten nodig.": ["For the 84 km route you need a Natuurmonumenten MTB permit (vignet).", "Für die 84-km-Route brauchst du eine MTB-Vignette von Natuurmonumenten."],
    "Meerdaagse bikepackroute.": ["Multi-day bikepacking route.", "Mehrtägige Bikepacking-Route."],
    "Lange route van station naar station, ook in etappes.": ["Long route from station to station, also in stages.", "Lange Route von Bahnhof zu Bahnhof, auch in Etappen."],
    "De landingsbaan bij Soest is van 15 maart tot en met 15 augustus dicht; daarvoor is er een aparte variant.": ["The airstrip near Soest is closed from 15 March to 15 August; there is a separate variant for that period.", "Die Landebahn bei Soest ist vom 15. März bis 15. August gesperrt; dafür gibt es eine eigene Variante."],
    "Van Epen over de grens naar de Eifel in Duitsland.": ["From Epen across the border to the Eifel in Germany.", "Von Epen über die Grenze in die Eifel (Deutschland)."]
  };
  if (TAAL !== "nl") {
    const i = TAAL === "en" ? 0 : 1;
    ROUTES.forEach(r => {
      if (NAMEN[r.n]) r.n = NAMEN[r.n][i]; else r.n = r.n.replace(" en ", T(" en ", " and ", " und "));
      if (r.noot && NOTEN[r.noot]) r.noot = NOTEN[r.noot][i];
    });
  }
  window.GG_ROUTES = ROUTES; // voor Vraag de Gorilla

  // tegelkaart: kolom, rij
  const PROV = {
    FR: ["Friesland", 2, 0, "NL"], GR: ["Groningen", 3, 0, "NL"], NH: ["Noord-Holland", 1, 1, "NL"], FL: ["Flevoland", 2, 1, "NL"], DR: ["Drenthe", 3, 1, "NL"],
    ZH: ["Zuid-Holland", 1, 2, "NL"], UT: ["Utrecht", 2, 2, "NL"], OV: ["Overijssel", 3, 2, "NL"], ZE: ["Zeeland", 0, 3, "NL"], NB: ["Noord-Brabant", 1, 3, "NL", 2],
    GE: ["Gelderland", 3, 3, "NL"], LI: ["Limburg (NL)", 2, 4, "NL"],
    WV: ["West-Vlaanderen", 0, 5, "BE"], OVB: ["Oost-Vlaanderen", 1, 5, "BE"], AN: ["Antwerpen", 2, 5, "BE"], LB: ["Limburg (BE)", 3, 5, "BE"],
    HE: ["Henegouwen", 0, 6, "BE"], VB: ["Vlaams-Brabant", 1, 6, "BE"], WB: ["Waals-Brabant", 2, 6, "BE"], LU: ["Luik", 3, 6, "BE"],
    NA: ["Namen", 1, 7, "BE"], LX: ["Luxemburg", 2, 7, "BE"]
  };
  // provincienamen in de taal van de pagina
  const PROVNAAM = { NH: ["North Holland", "Nordholland"], ZH: ["South Holland", "Südholland"], ZE: ["Zeeland", "Seeland"], NB: ["North Brabant", "Nordbrabant"],
    WV: ["West Flanders", "Westflandern"], OVB: ["East Flanders", "Ostflandern"], AN: ["Antwerp", "Antwerpen"], HE: ["Hainaut", "Hennegau"], VB: ["Flemish Brabant", "Flämisch-Brabant"],
    WB: ["Walloon Brabant", "Wallonisch-Brabant"], LU: ["Liège", "Lüttich"], NA: ["Namur", "Namur"], LX: ["Luxembourg", "Luxemburg"] };
  if (TAAL !== "nl") Object.keys(PROVNAAM).forEach(k => { PROV[k][0] = PROVNAAM[k][TAAL === "en" ? 0 : 1]; });
  // in de routes heet Oost-Vlaanderen ook "OV", net als Overijssel: bij Belgische routes wordt dat OVB
  ROUTES.forEach(r => { if (r.land === "BE") r.p = r.p.map(p => (p === "OV" ? "OVB" : p)); });

  const S = { land: "alle", prov: null, lengte: "alle", nav: "alle", kosten: "alle", zoek: "", sorteer: "km" };
  const LENGTE = { kort: r => r.km < 30, middel: r => r.km >= 30 && r.km < 60, lang: r => r.km >= 60 && r.km < 100, extra: r => (r.tot || r.km) >= 100 };
  const nl = x => String(x).replace(".", ",");

  function past(r, zonderProv) {
    return (S.land === "alle" || r.land === S.land) &&
      (zonderProv || !S.prov || r.p.includes(S.prov)) &&
      (S.lengte === "alle" || LENGTE[S.lengte](r)) &&
      (S.nav === "alle" || r.nav === S.nav) &&
      (S.kosten === "alle" || !r.lid) &&
      (!S.zoek || (r.n + " " + r.p.map(p => PROV[p] ? PROV[p][0] : "").join(" ") + " " + (r.noot || "")).toLowerCase().includes(S.zoek));
  }

  // provinciekaart met de echte vormen (assets/js/provincie-kaart.js)
  function kaart() {
    const telling = {}, namen = {}, land = {};
    ROUTES.filter(r => past(r, true)).forEach(r => r.p.forEach(p => { telling[p] = (telling[p] || 0) + 1; }));
    Object.entries(PROV).forEach(([c, v]) => { namen[c] = v[0].replace(" (NL)", "").replace(" (BE)", ""); land[c] = v[3]; });
    window.GG_KAART($("#grKaart"), { tellingen: telling, aan: S.prov, namen, land, aria: T("Kies een provincie", "Choose a province", "Wähle eine Provinz"), een: T("route", "route", "Route"), meer: T("routes", "routes", "Routen"), hint: T("Wijs een provincie aan om de naam te zien.", "Point at a province to see its name.", "Zeig auf eine Provinz, um ihren Namen zu sehen."),
      kies: code => { S.prov = S.prov === code ? null : code; toon(); } });
  }

  function lijst() {
    const uit = ROUTES.filter(r => past(r));
    const op = { km: (a, b) => a.km - b.km, lang: (a, b) => (b.tot || b.km) - (a.tot || a.km), naam: (a, b) => a.n.localeCompare(b.n, "nl") }[S.sorteer];
    uit.sort(op);
    $("#grAantal").textContent = uit.length;
    $("#grKm").textContent = Math.round(uit.reduce((t, r) => t + r.km, 0)).toLocaleString("nl-NL") + " km";
    $("#grFilterTekst").textContent = (S.prov ? PROV[S.prov][0] : S.land === "NL" ? T("Nederland", "the Netherlands", "den Niederlanden") : S.land === "BE" ? T("België", "Belgium", "Belgien") : T("Nederland en België", "the Netherlands and Belgium", "den Niederlanden und Belgien")) +
      (S.lengte !== "alle" ? ", " + { kort: T("korter dan 30 km", "shorter than 30 km", "kürzer als 30 km"), middel: T("30 tot 60 km", "30 to 60 km", "30 bis 60 km"), lang: T("60 tot 100 km", "60 to 100 km", "60 bis 100 km"), extra: T("100 km of meer", "100 km or more", "100 km oder mehr") }[S.lengte] : "") +
      (S.nav === "bord" ? T(", bewegwijzerd", ", signposted", ", ausgeschildert") : S.nav === "gpx" ? T(", met GPX", ", with GPX", ", mit GPX") : "") +
      (S.kosten === "gratis" ? T(", gratis", ", free", ", kostenlos") : "");
    $("#grLijst").innerHTML = uit.length ? uit.map(r =>
      '<li class="gr-route"><div class="gr-route__km"><strong>' + nl(r.km) + (r.tot ? "–" + r.tot : "") + "</strong><span>km</span></div>" +
      '<div class="gr-route__tekst"><h3>' + r.n + "</h3><p>" + (r.p.length ? r.p.map(p => PROV[p][0]).join(" · ") : T("Vlaanderen", "Flanders", "Flandern")) + " · " + (r.land === "NL" ? T("Nederland", "Netherlands", "Niederlande") : T("België", "Belgium", "Belgien")) + "</p>" +
      (r.noot ? '<p class="gr-route__noot">' + r.noot + "</p>" : "") +
      '<div class="gr-route__onder"><span class="gr-badge gr-badge--' + r.nav + '">' + (r.nav === "bord" ? T("Bewegwijzerd", "Signposted", "Ausgeschildert") : T("GPX-route", "GPX route", "GPX-Route")) + "</span>" +
      (r.lid ? '<span class="gr-badge gr-badge--lid" title="' + T("Je hebt een betaald lidmaatschap van de bron nodig", "You need a paid membership of the source", "Du brauchst eine kostenpflichtige Mitgliedschaft bei der Quelle") + '">' + T("Alleen voor leden", "Members only", "Nur für Mitglieder") + "</span>" : "") +
      '<a href="' + r.u + '" target="_blank" rel="noopener">' + T("Route bij ", "Route at ", "Route bei ") + r.bron + " ↗</a></div></div></li>").join("")
      : '<li class="wb-leeg">' + T("Geen routes met deze keuzes. Zet een filter uit of kies een andere provincie.", "No routes with these choices. Turn off a filter or choose another province.", "Keine Routen mit dieser Auswahl. Schalte einen Filter aus oder wähle eine andere Provinz.") + "</li>";
  }

  function toon() { kaart(); lijst(); }

  /* ---------- invoer ---------- */
  wortel.querySelectorAll(".wb-chips").forEach(groep => groep.addEventListener("click", e => {
    const k = e.target.closest("button");
    if (!k) return;
    groep.querySelectorAll("button").forEach(b => { b.classList.toggle("is-aan", b === k); b.setAttribute("aria-pressed", b === k); });
    S[groep.dataset.veld] = k.dataset.waarde;
    if (groep.dataset.veld === "land" && S.prov && PROV[S.prov][3] !== S.land && S.land !== "alle") S.prov = null;
    toon();
  }));
  $("#grZoek").addEventListener("input", e => { S.zoek = e.target.value.trim().toLowerCase(); toon(); });
  $("#grSorteer").addEventListener("change", e => { S.sorteer = e.target.value; lijst(); });
  $("#grWis").addEventListener("click", () => {
    Object.assign(S, { land: "alle", prov: null, lengte: "alle", nav: "alle", kosten: "alle", zoek: "" });
    $("#grZoek").value = "";
    wortel.querySelectorAll(".wb-chips").forEach(g => g.querySelectorAll("button").forEach((b, i) => { b.classList.toggle("is-aan", i === 0); b.setAttribute("aria-pressed", i === 0); }));
    toon();
  });
  // van buitenaf (Vraag de Gorilla) een filter zetten
  window.GG_ROUTES_ZET = function (keuze) {
    Object.assign(S, { land: "alle", prov: null, lengte: "alle", nav: "alle", kosten: "alle", zoek: "" }, keuze);
    wortel.querySelectorAll(".wb-chips").forEach(g => g.querySelectorAll("button").forEach(b => {
      const aan = b.dataset.waarde === S[g.dataset.veld];
      b.classList.toggle("is-aan", aan); b.setAttribute("aria-pressed", aan);
    }));
    toon();
    return ROUTES.filter(r => past(r));
  };
  window.GG_PROV = PROV;
  toon();
})();
