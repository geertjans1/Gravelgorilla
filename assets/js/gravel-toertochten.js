/* =========================================================
   Gravel Gorilla — Gravel Toertochten
   Kalender met georganiseerde gravel-toertochten in Nederland, België en net over de grens in Duitsland.
   Bronnen (oktober 2026): toerkalender NTFU (fietssport.nl, soort "Gravelbike"), recreatieve kalender
   Cycling Vlaanderen (tochten met een gravelroute) en de kalender van de FFBC (Wallonië, type GRAVEL).
   De lijst TOCHTEN wordt gemaakt uit .claude/toertochten.tsv met .claude/toertochten-maken.ps1.
   Tochten die voorbij zijn, laat de pagina vanzelf weg. Aanmeldingen van organisatoren komen binnen
   via api/aanmelden.php en staan op /beheer/.
   ========================================================= */
(function () {
  const wortel = document.querySelector(".tt-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);

  // n = naam, d = datum, pl = startplaats, p = provincie, land, km = afstanden, nav = gps / pijlen / beide,
  // prijs = in euro (zonder lidmaatschap, dagprijs), bron, u = link, ll = [breedte, lengte], noot
  // TOCHTEN-BEGIN
  const TOCHTEN = [
    { n: "Klinker-Gravel Classic", d: "2026-10-17", pl: "Nijkerk", p: "GE", land: "NL", km: [56, 66, 76], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60393/klinker-gravel-classic", ll: [52.215, 5.478] },
    { n: "AVIKO Gravel Kruisbergtocht", d: "2026-10-18", pl: "Hummelo", p: "GE", land: "NL", km: [50, 75, 100], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60000/aviko-gravel-kruisbergtocht-2026", ll: [52.005, 6.235] },
    { n: "JO OFF DE ROOT gravelrit", d: "2026-10-18", pl: "'s-Heer Hendrikskinderen", p: "ZE", land: "NL", km: [65, 90], nav: "beide", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59788/jo-off-de-root-gravelrit-2026", ll: [51.502, 3.862] },
    { n: "Hellendoornse Bossentocht gravel", d: "2026-10-18", pl: "Luttenberg", p: "OV", land: "NL", km: [85], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60397/kokkiebikes-hellendoornse-bossentocht-gravel-2026", ll: [52.406, 6.365] },
    { n: "Lus van Beltrum Gravel", d: "2026-10-18", pl: "Beltrum", p: "GE", land: "NL", km: [50, 75, 100], nav: "gps", prijs: 7.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59458/porskamp-inst-techniek-lus-van-beltrum-gravel", ll: [52.067, 6.563] },
    { n: "The Whoopers gravel toertocht", d: "2026-10-18", pl: "Berlicum", p: "NB", land: "NL", km: [50, 65, 80], nav: "gps", prijs: 6, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60095/the-whoopers-gravel-toertocht-oktober-2026", ll: [51.678, 5.399] },
    { n: "Twentse Heuvelentocht Gravelride", d: "2026-10-18", pl: "Losser", p: "OV", land: "NL", km: [71, 93], nav: "gps", prijs: 10, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60004/twentse-heuvelentocht-gravelride-2026", ll: [52.300, 6.988] },
    { n: "GMP Classic", d: "2026-10-18", pl: "Deinze", p: "OVB", land: "BE", km: [35, 50, 65], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/gmp-classic-2026-10-18", ll: [50.984, 3.527] },
    { n: "Gouden Petattencross", d: "2026-10-18", pl: "Oudegem", p: "OVB", land: "BE", km: [60, 85], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/gouden-petattencross-2026-2026-10-18-2", ll: [51.009, 4.061] },
    { n: "Princenhof Gravelride", d: "2026-10-24", pl: "Earnewâld", p: "FR", land: "NL", km: [45, 75], nav: "gps", prijs: 20, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60018/princenhof-gravelride-2026", ll: [53.130, 5.943] },
    { n: "Spek & Wos Gravelrit", d: "2026-10-24", pl: "Enter", p: "OV", land: "NL", km: [55, 80], nav: "gps", prijs: 5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60014/spek-en-wos-gravelrit-2026", ll: [52.295, 6.577] },
    { n: "Credion Classic Scherpenheuvel-Hapert Gravel", d: "2026-10-25", pl: "Scherpenheuvel", p: "VB", land: "BE", km: [87, 125], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59772/credion-classic-scherpenheuvel-hapert-gravel", ll: [50.995, 4.978], noot: "Alleen met voorinschrijving." },
    { n: "Fietz Köttelpeer'n Classic", d: "2026-10-25", pl: "Denekamp", p: "OV", land: "NL", km: [65, 100], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59681/fietz-kottelpeern-classic-2026", ll: [52.375, 7.005] },
    { n: "Graveltocht Omloop van Geffen", d: "2026-10-25", pl: "Geffen", p: "NB", land: "NL", km: [70], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60088/graveltocht-omloop-van-geffen-2026", ll: [51.742, 5.462] },
    { n: "GrenzmEIster Gravel", d: "2026-10-25", pl: "Eibergen", p: "GE", land: "NL", km: [50, 75, 95], nav: "gps", prijs: 7.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59752/grenzmeister-gravel-2026", ll: [52.103, 6.651] },
    { n: "Najaars gravelride", d: "2026-10-25", pl: "Diever", p: "DR", land: "NL", km: [80], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59970/klok-sanidrome-najaars-gravelride-2026", ll: [52.855, 6.318] },
    { n: "Rondum de Mölle Gravelride", d: "2026-10-25", pl: "Hengelo (Gld)", p: "GE", land: "NL", km: [80], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59864/rondum-de-molle-gravelride-2026", ll: [52.052, 6.311] },
    { n: "Stratumse Heidetocht Gravel", d: "2026-10-25", pl: "Eindhoven", p: "NB", land: "NL", km: [70, 90], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59643/stratumse-heidetocht-2026-gravel", ll: [51.439, 5.479] },
    { n: "La Deren'", d: "2026-10-25", pl: "Habay-la-Neuve", p: "LX", land: "BE", km: [40, 59], prijs: 7, bron: "FFBC", u: "https://velo-liberte-palmares.be/inscription/1004367/", ll: [49.731, 5.653] },
    { n: "Jubaru Bikers VTT Gravel", d: "2026-10-25", pl: "Mourcourt", p: "HE", land: "BE", km: [45, 75, 97], prijs: 6.5, bron: "FFBC", u: "https://velo-liberte-palmares.be/inscription/1001124/", ll: [50.654, 3.444] },
    { n: "Speulderbostocht", d: "2026-10-31", pl: "Stroe", p: "GE", land: "NL", km: [65, 85], nav: "beide", prijs: 10, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59390/speulderbostocht-2026", ll: [52.186, 5.692] },
    { n: "ATB-tocht De Berg", d: "2026-11-01", pl: "Stramproy", p: "LI", land: "NL", km: [55], nav: "beide", prijs: 8.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59828/atb-tocht-de-berg", ll: [51.193, 5.724] },
    { n: "Bikse Bos en Heidetocht (gravel)", d: "2026-11-01", pl: "Hilvarenbeek", p: "NB", land: "NL", km: [65, 100], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59873/bikse-bos-en-heidetocht-gravel", ll: [51.487, 5.147] },
    { n: "Brabants Mooiste Gravel", d: "2026-11-01", pl: "Nistelrode", p: "NB", land: "NL", km: [72], nav: "gps", prijs: 6, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59727/brabants-mooiste-gravel-2026", ll: [51.705, 5.561] },
    { n: "Gravel najaarstocht", d: "2026-11-01", pl: "Valkenswaard", p: "NB", land: "NL", km: [60, 80], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60414/carprof-wils-gravel-najaarstocht-2026", ll: [51.320, 5.458] },
    { n: "Gorsselse Heideveldtoertocht Gravel", d: "2026-11-01", pl: "Gorssel", p: "GE", land: "NL", km: [50, 80], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59424/gorsselse-heideveldtoertocht-gravel-2026", ll: [52.200, 6.200] },
    { n: "Grensland Graveltocht", d: "2026-11-01", pl: "Winterswijk", p: "GE", land: "NL", km: [60, 80], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59947/grensland-graveltocht-2026", ll: [51.968, 6.738] },
    { n: "Bike-inn Graveltocht", d: "2026-11-01", pl: "Herentals", p: "AN", land: "BE", km: [], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/bike-inn-graveltocht-2026-11-01", ll: [51.177, 4.836] },
    { n: "Gravel toertocht Laakdal", d: "2026-11-01", pl: "Laakdal", p: "AN", land: "BE", km: [60], nav: "gps", bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/gravel-toertocht-2026-11-01", ll: [51.080, 4.955], noot: "Inschrijven liefst vooraf per mail, eten inbegrepen." },
    { n: "Herfstbostocht Gravel Arnhem", d: "2026-11-07", pl: "Arnhem", p: "GE", land: "NL", km: [87], nav: "gps", prijs: 17, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59781/avadent-herfstbostocht-gravel-arnhem-2026", ll: [52.006, 5.876] },
    { n: "Swolsebostocht", d: "2026-11-07", pl: "Wapenveld", p: "GE", land: "NL", km: [70], nav: "gps", prijs: 10, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60174/swolsebostocht-2026", ll: [52.431, 6.073] },
    { n: "TC DSE Gravelride", d: "2026-11-07", pl: "Etten-Leur", p: "NB", land: "NL", km: [55, 85], nav: "gps", prijs: 10, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60058/tc-dse-gravelride", ll: [51.576, 4.643] },
    { n: "VOEK Herfstklassieker", d: "2026-11-07", pl: "Nijkerk", p: "GE", land: "NL", km: [60, 80, 105], nav: "gps", prijs: 6, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60109/voek-herftstklassieker-2026", ll: [52.215, 5.478] },
    { n: "Versele-Laga Classic", d: "2026-11-07", pl: "Astene", p: "OVB", land: "BE", km: [], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/versele-laga-classic-2026-11-07", ll: [50.985, 3.563] },
    { n: "33ste Bossentocht", d: "2026-11-07", pl: "Brugge", p: "WV", land: "BE", km: [75], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/33ste-bossentocht-2026-11-07", ll: [51.209, 3.227] },
    { n: "Gravel Ride Maashorst", d: "2026-11-08", pl: "Zeeland (NB)", p: "NB", land: "NL", km: [50, 80, 100], nav: "gps", prijs: 6, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59715/gravel-ride-maashorst-2026", ll: [51.695, 5.673] },
    { n: "Gronings Mooiste Graveltocht", d: "2026-11-08", pl: "Ter Apel", p: "GR", land: "NL", km: [85], nav: "gps", prijs: 15, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59879/gronings-mooiste-graveltocht-2026", ll: [52.874, 7.062] },
    { n: "Land van Horne Bike Fest – Gravelride", d: "2026-11-08", pl: "Weert", p: "LI", land: "NL", km: [80, 100, 125, 150], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59527/land-van-horne-bike-fest-gravelride", ll: [51.236, 5.705] },
    { n: "Boterkoektocht Gravel", d: "2026-11-08", pl: "Tubbergen", p: "OV", land: "NL", km: [65, 100], nav: "gps", prijs: 10, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59600/tbb-totaal-boterkoektocht-gravel", ll: [52.404, 6.774] },
    { n: "Dworpse Bikers MTB & Gravel Classic", d: "2026-11-08", pl: "Huizingen", p: "VB", land: "BE", km: [60, 80], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/dworpse-bikers-mtb-gravel-classic-2026-11-08", ll: [50.748, 4.277] },
    { n: "Frans Claes Classic 11.11", d: "2026-11-11", pl: "Hoegaarden", p: "VB", land: "BE", km: [63, 148], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/frans-claes-classic-1111-2026-11-11", ll: [50.774, 4.887] },
    { n: "11 Bergen Graveltocht", d: "2026-11-14", pl: "Apeldoorn", p: "GE", land: "NL", km: [74], nav: "gps", prijs: 7.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59737/11-bergen-graveltocht-2026", ll: [52.180, 5.930] },
    { n: "Holterbergtocht – Gravel", d: "2026-11-14", pl: "Nijverdal", p: "OV", land: "NL", km: [50, 75], nav: "gps", prijs: 12, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60486/volkerwessels-voskamp-holterbergtocht-gravel", ll: [52.359, 6.465] },
    { n: "Kuuletocht (gravel)", d: "2026-11-15", pl: "Langenboom", p: "NB", land: "NL", km: [55, 80, 105], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60111/graveltocht-kuuletocht-2026-met-3-afstanden", ll: [51.701, 5.729] },
    { n: "Graveltocht Peddelaars Aalten", d: "2026-11-15", pl: "Aalten", p: "GE", land: "NL", km: [80], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59766/graveltocht-peddelaars-aalten-2026", ll: [51.914, 6.577] },
    { n: "Presto Pedale Gravel Ride", d: "2026-11-15", pl: "Netersel", p: "NB", land: "NL", km: [45, 65, 85], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/56921/presto-pedale-gravel-ride-2026-locatie-netersel", ll: [51.404, 5.208] },
    { n: "Seiterse Gravel-tocht", d: "2026-11-15", pl: "Veghel", p: "NB", land: "NL", km: [39, 76, 84, 93], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59610/seiterse-gravel-tocht-2026", ll: [51.613, 5.545] },
    { n: "Cameleon Ride", d: "2026-11-15", pl: "Geraardsbergen", p: "OVB", land: "BE", km: [60], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/cameleon-ride-2026-11-15", ll: [50.772, 3.883] },
    { n: "La Balade des Voisins", d: "2026-11-15", pl: "Bailleul (Estaimpuis)", p: "HE", land: "BE", km: [48], prijs: 3.5, bron: "FFBC", u: "https://velo-liberte-palmares.be/inscription/1005215/", ll: [50.669, 3.318] },
    { n: "Achterhoeks Argste Gravelride", d: "2026-11-22", pl: "Lichtenvoorde", p: "GE", land: "NL", km: [50, 75, 100], nav: "gps", prijs: 7.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/57026/achterhoeks-argste-vishandel-bomers-gravelride", ll: [51.989, 6.572] },
    { n: "SterkR-toertocht Gravel", d: "2026-11-22", pl: "Hengelo (Ov)", p: "OV", land: "NL", km: [60, 80], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59606/sterkr-toertocht-gravel-2026", ll: [52.266, 6.792] },
    { n: "La Gadouzienne", d: "2026-11-22", pl: "Enghien", p: "HE", land: "BE", km: [60], prijs: 6.5, bron: "FFBC", u: "https://velo-liberte-palmares.be/inscription/1000137", ll: [50.696, 4.041] },
    { n: "Gooische Strade Bianche XV", d: "2026-11-28", pl: "Soest", p: "UT", land: "NL", km: [60, 90], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59406/gooische-strade-bianche-xv-2026", ll: [52.175, 5.291] },
    { n: "Hezinger Grens Classic Gravel", d: "2026-11-29", pl: "Nutter", p: "OV", land: "NL", km: [85], nav: "gps", prijs: 9, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59892/hezinger-grens-classic-2026-gravel", ll: [52.424, 6.882] },
    { n: "Pepernoten gravel tocht", d: "2026-11-29", pl: "Ysselsteyn", p: "LI", land: "NL", km: [81], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59843/pepernoten-gravel-tocht-2026", ll: [51.490, 5.896] },
    { n: "RTC Graveltocht", d: "2026-11-29", pl: "Prinsenbeek", p: "NB", land: "NL", km: [80], nav: "gps", prijs: 8.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60489/rtc-graveltocht", ll: [51.600, 4.719] },
    { n: "Scheffer Keukens Graveltocht", d: "2026-11-29", pl: "Zelhem", p: "GE", land: "NL", km: [40, 80], nav: "beide", prijs: 6, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59438/scheffer-keukens-graveltocht-2026", ll: [52.007, 6.350] },
    { n: "Achtkastelen Graveltocht", d: "2026-12-06", pl: "Vorden", p: "GE", land: "NL", km: [60, 80], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60422/achtkastelen-graveltocht-2026", ll: [52.104, 6.313] },
    { n: "Graveltocht Boekel", d: "2026-12-06", pl: "Boekel", p: "NB", land: "NL", km: [45, 70, 95], nav: "beide", prijs: 6, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59845/graveltocht-boekel-2026", ll: [51.606, 5.699] },
    { n: "Niederrhein Gravel Race", d: "2026-12-06", pl: "Kranenburg", p: "DE", land: "DE", km: [45], nav: "beide", prijs: 45, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60219/niederrhein-gravel-race", ll: [51.802, 6.106], noot: "Een wedstrijd voor iedereen, door het Reichswald." },
    { n: "Rondje Geldrop", d: "2026-12-06", pl: "Geldrop", p: "NB", land: "NL", km: [70], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60401/rondje-geldrop-2026", ll: [51.423, 5.561] },
    { n: "Maldegemse Poldertocht", d: "2026-12-06", pl: "Maldegem", p: "OVB", land: "BE", km: [50], nav: "gps", bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/maldegemse-poldertocht-2026-12-06", ll: [51.209, 3.445], noot: "De gravelroute volg je alleen met GPS." },
    { n: "Oliebollentocht Gravel", d: "2026-12-12", pl: "Stroe", p: "GE", land: "NL", km: [70, 90], nav: "gps", prijs: 10, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59303/oliebollentocht-gravel-2026", ll: [52.186, 5.692] },
    { n: "Graveltocht RTV De Zwaluwen", d: "2026-12-13", pl: "Doetinchem", p: "GE", land: "NL", km: [65, 80], nav: "gps", prijs: 7.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59456/graveltocht-rtv-de-zwaluwen-2026", ll: [51.959, 6.281] },
    { n: "TOS Graveltocht", d: "2026-12-13", pl: "Sint Anthonis", p: "NB", land: "NL", km: [55, 85], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59575/tos-graveltocht-2026", ll: [51.627, 5.882] },
    { n: "Zwoegers Graveltocht", d: "2026-12-13", pl: "Budel", p: "NB", land: "NL", km: [65, 76], nav: "gps", prijs: 7.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59486/zwoegers-graveltocht-2026", ll: [51.274, 5.574] },
    { n: "Seyns Krieretocht", d: "2026-12-13", pl: "Zwevegem", p: "WV", land: "BE", km: [41, 51, 61, 71], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/seyns-krieretocht-2026-12-13", ll: [50.783, 3.376] },
    { n: "Gravel kersttoertocht Markelo", d: "2026-12-20", pl: "Markelo", p: "OV", land: "NL", km: [70, 80, 105], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59820/gravel-kersttoertocht-markelo-2026", ll: [52.235, 6.495] },
    { n: "Gravel-tocht de Wekkers", d: "2026-12-20", pl: "Deurne", p: "NB", land: "NL", km: [60, 85], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59536/gravel-tocht-de-wekkers-deurne-2026", ll: [51.428, 5.828] },
    { n: "Gravel Kersttocht", d: "2026-12-26", pl: "Schaijk", p: "NB", land: "NL", km: [78], nav: "gps", prijs: 7, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60034/gravel-kersttocht", ll: [51.746, 5.631] },
    { n: "Marathon Maniac", d: "2026-12-28", pl: "Heverlee", p: "VB", land: "BE", km: [40, 60, 85, 120, 136], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/marathon-maniac-2026-12-28", ll: [50.865, 4.694] },
    { n: "Derry X-MAS Gravelride", d: "2026-12-29", pl: "Nijkerk", p: "GE", land: "NL", km: [40, 58, 75], nav: "gps", prijs: 7.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60216/derry-x-mas-gravelride-2026", ll: [52.215, 5.478] },
    { n: "CityLido Klassieker, Gravel-tocht", d: "2026-12-30", pl: "Groenlo", p: "GE", land: "NL", km: [50, 70], nav: "gps", prijs: 12.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60086/citylido-klassieker-gravel-tocht-2026", ll: [52.043, 6.617] },
    { n: "De Bernhisse graveltocht", d: "2026-12-30", pl: "Heesch", p: "NB", land: "NL", km: [45, 65, 85, 105], nav: "gps", prijs: 18, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59784/de-bernhisse-graveltocht-2026", ll: [51.735, 5.527] },
    { n: "Gravel tocht memorial Jo Boerekamp", d: "2026-12-31", pl: "Someren", p: "NB", land: "NL", km: [65], nav: "gps", prijs: 6, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/59479/gravel-tocht-memorial-jo-boerekamp-2026", ll: [51.386, 5.689] },
    { n: "Beemd en Bergtoer Gravel", d: "2027-01-03", pl: "Markelo", p: "OV", land: "NL", km: [60, 90], nav: "gps", prijs: 14, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60251/beemd-en-bergtoer-gravel-holten-2027", ll: [52.235, 6.495] },
    { n: "Goed Begintocht Gravelride", d: "2027-01-03", pl: "Escharen", p: "NB", land: "NL", km: [66, 92], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60387/goed-begintocht-gravelride", ll: [51.743, 5.747] },
    { n: "Bike Basement Graveltocht", d: "2027-01-09", pl: "Rijssen", p: "OV", land: "NL", km: [50, 70], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60154/bike-basement-graveltocht-2027", ll: [52.308, 6.521] },
    { n: "Graveltoertocht Asten", d: "2027-01-10", pl: "Asten", p: "NB", land: "NL", km: [70], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60479/graveltoertocht-asten", ll: [51.387, 5.791] },
    { n: "Helden van Hemelrijk Graveleditie", d: "2027-01-10", pl: "Volkel", p: "NB", land: "NL", km: [30, 60, 90], nav: "gps", prijs: 7.5, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60331/helden-van-hemelrijk-graveleditie", ll: [51.644, 5.656] },
    { n: "Ichtegemse Winter (2 dagen)", d: "2027-01-23", pl: "Ichtegem", p: "WV", land: "BE", km: [], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/ichtegemse-winter-vtt-2-daagse-2027-01-23", ll: [51.093, 3.010], noot: "Mountainbiketocht op 23 en 24 januari; volgens de organisator zijn alle afstanden ook geschikt voor een gravelbike." },
    { n: "Winter Bike Challenge", d: "2027-01-30", pl: "America", p: "LI", land: "NL", km: [50, 70, 100], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60473/winter-bike-challenge-2027", ll: [51.437, 5.980] },
    { n: "Wintermarathon", d: "2027-01-31", pl: "Lemelerveld", p: "OV", land: "NL", km: [75, 123], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60199/airco-service-slotman-wintermarathon-2027", ll: [52.444, 6.340] },
    { n: "Graveltocht Uden", d: "2027-01-31", pl: "Uden", p: "NB", land: "NL", km: [62, 82], nav: "gps", prijs: 6, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60213/graveltocht-uden-2027", ll: [51.659, 5.615] },
    { n: "Winterswijk Graveltocht", d: "2027-02-07", pl: "Winterswijk", p: "GE", land: "NL", km: [60, 80], nav: "gps", prijs: 8, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60424/bike-totaal-winterswijk-graveltocht-2027", ll: [51.968, 6.738] },
    { n: "Gooische Strade Bianche XIV", d: "2027-02-13", pl: "Soest", p: "UT", land: "NL", km: [60, 90], nav: "gps", bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60459/gooische-strade-bianche-xiv-2027", ll: [52.175, 5.291] },
    { n: "Veluws Mooiste Graveltocht", d: "2027-02-13", pl: "Stroe", p: "GE", land: "NL", km: [75, 93], nav: "gps", prijs: 10, bron: "NTFU", u: "https://www.fietssport.nl/toertochten/60261/veluws-mooiste-graveltocht", ll: [52.186, 5.692] },
    { n: "Let's Ride (gravel)", d: "2027-02-13", pl: "Sint-Laureins", p: "OVB", land: "BE", km: [80], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/lets-ride-vtt-gravel-cyclo-kids-tour-2027-02-13", ll: [51.242, 3.524] },
    { n: "Zeeuws-Vlaamse Toertocht", d: "2027-03-13", pl: "Oostakker", p: "OVB", land: "BE", km: [72], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/zeeuws-vlaamse-toertocht-2027-03-13", ll: [51.100, 3.764] },
    { n: "SVK Brabantse Wouden Challenge", d: "2027-03-21", pl: "Oud-Heverlee", p: "VB", land: "BE", km: [60, 80, 100], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/svk-brabantse-wouden-challenge-2027-03-21", ll: [50.838, 4.663] },
    { n: "Ertveldse Cycling Tour", d: "2027-04-03", pl: "Ertvelde", p: "OVB", land: "BE", km: [75, 110], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/5de-ertveldse-cycling-tour-mervielde-2027-04-03", ll: [51.179, 3.747] },
    { n: "Huysman en Ramaco Tour", d: "2027-04-10", pl: "Eeklo", p: "OVB", land: "BE", km: [100], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/huysman-en-ramaco-tour-2027-04-10", ll: [51.191, 3.567] },
    { n: "Memorial Tommy Van De Ponseele", d: "2027-04-18", pl: "Herzele", p: "OVB", land: "BE", km: [50], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/memorial-tommy-van-de-ponseele-2027-04-18", ll: [50.870, 3.899] },
    { n: "Delirium Velo Tour", d: "2027-04-24", pl: "Nazareth", p: "OVB", land: "BE", km: [75, 110], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/delirium-velo-tour-2027-04-24", ll: [50.960, 3.596] },
    { n: "Flaf-ride", d: "2027-05-01", pl: "Assenede", p: "OVB", land: "BE", km: [75, 90, 124], nav: "gps", bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/flaf-ride-2027-05-01", ll: [51.228, 3.753], noot: "De graveltochten zijn niet met pijlen aangegeven." },
    { n: "VMA Cyclo & Gravel Tour", d: "2027-05-01", pl: "Sint-Martens-Latem", p: "OVB", land: "BE", km: [50], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/vma-cyclo-gravel-tour-2027-05-01", ll: [51.021, 3.640] },
    { n: "Altebra Muur LM Classic", d: "2027-05-15", pl: "Ophasselt (Geraardsbergen)", p: "OVB", land: "BE", km: [40, 53, 80], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/altebra-muur-lm-classic-2027-05-15", ll: [50.821, 3.887] },
    { n: "Fietstocht Philippine", d: "2027-05-17", pl: "Philippine", p: "ZE", land: "NL", km: [70], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/fietstocht-philippine-2027-05-17", ll: [51.281, 3.758] },
    { n: "Het Vliegend Wiel Gravelt", d: "2027-05-29", pl: "Lille (Antwerpen)", p: "AN", land: "BE", km: [], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/het-vliegend-wiel-gravelt-2027-05-29", ll: [51.238, 4.824] },
    { n: "Leieland Cycling Challenge", d: "2027-05-29", pl: "Deinze", p: "OVB", land: "BE", km: [], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/leieland-cycling-challenge-2027-05-29", ll: [50.984, 3.527], noot: "Met drie gravelroutes." },
    { n: "Azalea fietstochten", d: "2027-06-05", pl: "Oostakker", p: "OVB", land: "BE", km: [65, 90], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/azalea-fietstochten-2027-06-05", ll: [51.100, 3.764] },
    { n: "Les Collines", d: "2027-06-12", pl: "Lievegem", p: "OVB", land: "BE", km: [110], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/les-collines-2027-06-12", ll: [51.118, 3.560] },
    { n: "Veldtoertocht Grobbendonk", d: "2027-06-27", pl: "Grobbendonk", p: "AN", land: "BE", km: [75], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/veldtoertocht-grobbendonk-2027-06-27", ll: [51.192, 4.739] },
    { n: "Honda-Ost", d: "2027-07-03", pl: "Kalken", p: "OVB", land: "BE", km: [45, 80], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/honda-ost-2027-07-03", ll: [51.037, 3.919] },
    { n: "Toeren met Cycling 9940", d: "2027-07-03", pl: "Kluizen", p: "OVB", land: "BE", km: [], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/toeren-met-cycling-9940-2027-07-03", ll: [51.155, 3.733] },
    { n: "Waffle Ride Beernem", d: "2027-07-03", pl: "Beernem", p: "WV", land: "BE", km: [55, 80, 110, 135, 190], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/waffle-ride-beernem-2027-07-03", ll: [51.141, 3.335] },
    { n: "LM Classic Ledegancktochten", d: "2027-07-10", pl: "Eeklo", p: "OVB", land: "BE", km: [35, 55, 100], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/lm-classic-ledegancktochten-2027-07-10", ll: [51.191, 3.567] },
    { n: "WWL fietst en feest", d: "2027-08-15", pl: "Tongerlo (Westerlo)", p: "AN", land: "BE", km: [80], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/wwl-fietst-en-feest-2027-08-15", ll: [51.113, 4.916] },
    { n: "The Hyppo Ryders Graveltocht", d: "2027-08-21", pl: "Oudenaarde", p: "OVB", land: "BE", km: [], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/gravel-en-mountainbiketocht-cyclo-the-hyppo-ryders-2027-08-21", ll: [50.843, 3.604], noot: "Mountainbikers zijn ook welkom op het gravelparcours." },
    { n: "René Rouler & René Gravier", d: "2027-08-21", pl: "Wichelen", p: "OVB", land: "BE", km: [45, 80], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/rene-rouler-rene-gravier-2027-08-21", ll: [51.006, 3.974] },
    { n: "FT Heirnis", d: "2027-08-29", pl: "Gent", p: "OVB", land: "BE", km: [50], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/ft-heirnis-2027-08-29", ll: [51.054, 3.725] },
    { n: "Garnaalrit", d: "2027-09-04", pl: "Boekhoute", p: "OVB", land: "BE", km: [80], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/garnaalrit-2027-09-04", ll: [51.258, 3.718], noot: "Ook op zondag 5 september." },
    { n: "SLW Cycling Classic", d: "2027-09-05", pl: "Poederlee", p: "AN", land: "BE", km: [90], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/the-slw-cycling-classic-van-het-slijpend-wiel-2027-09-05", ll: [51.227, 4.836] },
    { n: "Flirten met de grens", d: "2027-10-03", pl: "Watervliet", p: "OVB", land: "BE", km: [80], bron: "Cycling Vlaanderen", u: "https://cycling.vlaanderen/tochten/flirten-met-de-grens-2027-10-03", ll: [51.276, 3.627] }
  ];
  // TOCHTEN-EIND

  // ---------- teksten in de taal van de pagina ----------
  const TAAL = (document.documentElement.lang || "nl").slice(0, 2);
  const T = (nl, en, de) => (TAAL === "en" ? en : TAAL === "de" ? de : nl);
  const NOTEN = {
    "Alleen met voorinschrijving.": ["Pre-registration only.", "Nur mit Voranmeldung."],
    "Inschrijven liefst vooraf per mail, eten inbegrepen.": ["Preferably register in advance by email; food included.", "Am besten vorab per Mail anmelden; Essen inklusive."],
    "Een wedstrijd voor iedereen, door het Reichswald.": ["A race open to everyone, through the Reichswald.", "Ein Rennen für alle, durch den Reichswald."],
    "De gravelroute volg je alleen met GPS.": ["You follow the gravel route by GPS only.", "Die Gravelroute fährst du nur mit GPS."],
    "Mountainbiketocht op 23 en 24 januari; volgens de organisator zijn alle afstanden ook geschikt voor een gravelbike.": ["Mountain bike ride on 23 and 24 January; according to the organiser all distances also suit a gravel bike.", "MTB-Tour am 23. und 24. Januar; laut Veranstalter sind alle Strecken auch fürs Gravelbike geeignet."],
    "De graveltochten zijn niet met pijlen aangegeven.": ["The gravel routes are not marked with arrows.", "Die Gravelrouten sind nicht mit Pfeilen markiert."],
    "Met drie gravelroutes.": ["With three gravel routes.", "Mit drei Gravelrouten."],
    "Mountainbikers zijn ook welkom op het gravelparcours.": ["Mountain bikers are welcome on the gravel course too.", "Auch Mountainbiker sind auf der Gravelstrecke willkommen."],
    "Ook op zondag 5 september.": ["Also on Sunday 5 September.", "Auch am Sonntag, 5. September."]
  };
  if (TAAL !== "nl") TOCHTEN.forEach(t => { if (t.noot && NOTEN[t.noot]) t.noot = NOTEN[t.noot][TAAL === "en" ? 0 : 1]; });
  const LOCALE = { nl: "nl-NL", en: "en-GB", de: "de-DE" }[TAAL] || "nl-NL";

  // ---------- provincies (zelfde tegelkaart als bij Gravelroutes) ----------
  const PROV = {
    FR: ["Friesland", 2, 0, "NL"], GR: ["Groningen", 3, 0, "NL"], NH: ["Noord-Holland", 1, 1, "NL"], FL: ["Flevoland", 2, 1, "NL"], DR: ["Drenthe", 3, 1, "NL"],
    ZH: ["Zuid-Holland", 1, 2, "NL"], UT: ["Utrecht", 2, 2, "NL"], OV: ["Overijssel", 3, 2, "NL"], ZE: ["Zeeland", 0, 3, "NL"], NB: ["Noord-Brabant", 1, 3, "NL", 2],
    GE: ["Gelderland", 3, 3, "NL"], LI: ["Limburg (NL)", 2, 4, "NL"],
    WV: ["West-Vlaanderen", 0, 5, "BE"], OVB: ["Oost-Vlaanderen", 1, 5, "BE"], AN: ["Antwerpen", 2, 5, "BE"], LB: ["Limburg (BE)", 3, 5, "BE"],
    HE: ["Henegouwen", 0, 6, "BE"], VB: ["Vlaams-Brabant", 1, 6, "BE"], WB: ["Waals-Brabant", 2, 6, "BE"], LU: ["Luik", 3, 6, "BE"],
    NA: ["Namen", 1, 7, "BE"], LX: ["Luxemburg", 2, 7, "BE"]
  };
  const PROVNAAM = { NH: ["North Holland", "Nordholland"], ZH: ["South Holland", "Südholland"], ZE: ["Zeeland", "Seeland"], NB: ["North Brabant", "Nordbrabant"],
    WV: ["West Flanders", "Westflandern"], OVB: ["East Flanders", "Ostflandern"], AN: ["Antwerp", "Antwerpen"], HE: ["Hainaut", "Hennegau"], VB: ["Flemish Brabant", "Flämisch-Brabant"],
    WB: ["Walloon Brabant", "Wallonisch-Brabant"], LU: ["Liège", "Lüttich"], NA: ["Namur", "Namur"], LX: ["Luxembourg", "Luxemburg"] };
  if (TAAL !== "nl") Object.keys(PROVNAAM).forEach(k => { PROV[k][0] = PROVNAAM[k][TAAL === "en" ? 0 : 1]; });
  const LANDNAAM = { NL: T("Nederland", "Netherlands", "Niederlande"), BE: T("België", "Belgium", "Belgien"), DE: T("Duitsland", "Germany", "Deutschland") };

  // ---------- datums ----------
  const vandaag = new Date(); vandaag.setHours(0, 0, 0, 0);
  const datum = s => { const [j, m, d] = s.split("-").map(Number); return new Date(j, m - 1, d); };
  const dagen = (a, b) => Math.round((b - a) / 864e5);
  TOCHTEN.forEach(t => { t.dt = datum(t.d); });
  const KOMEND = TOCHTEN.filter(t => t.dt >= vandaag).sort((a, b) => a.dt - b.dt || a.n.localeCompare(b.n));
  window.GG_TOCHTEN = KOMEND; // voor Vraag de Gorilla

  // komend weekend: zaterdag en zondag (op zaterdag of zondag zelf: dit weekend)
  const wd = vandaag.getDay();
  const za = new Date(vandaag); za.setDate(vandaag.getDate() + (wd === 0 ? -1 : 6 - wd));
  const zo = new Date(za); zo.setDate(za.getDate() + 1);

  const S = { wanneer: "alle", maand: "", land: "alle", prov: null, lengte: "alle", zoek: "", plek: null, straal: 50 };
  const LENGTE = { kort: k => k <= 50, middel: k => k > 50 && k <= 100, lang: k => k > 100 };

  function afstand(a, b) { // km tussen twee punten
    const r = Math.PI / 180, dLa = (b[0] - a[0]) * r, dLo = (b[1] - a[1]) * r;
    const h = Math.sin(dLa / 2) ** 2 + Math.cos(a[0] * r) * Math.cos(b[0] * r) * Math.sin(dLo / 2) ** 2;
    return 12742 * Math.asin(Math.sqrt(h));
  }

  function past(t, zonderProv) {
    if (S.wanneer === "weekend" && !(t.dt >= za && t.dt <= zo)) return false;
    if (S.wanneer === "4weken" && dagen(vandaag, t.dt) > 28) return false;
    if (S.maand && t.d.slice(0, 7) !== S.maand) return false;
    if (S.land !== "alle" && t.land !== S.land) return false;
    if (!zonderProv && S.prov && t.p !== S.prov) return false;
    if (S.lengte !== "alle" && !(t.km || []).some(LENGTE[S.lengte])) return false;
    if (S.plek && (!t.ll || afstand(S.plek, t.ll) > S.straal)) return false;
    if (S.zoek && !(t.n + " " + t.pl + " " + (PROV[t.p] ? PROV[t.p][0] : "") + " " + LANDNAAM[t.land]).toLowerCase().includes(S.zoek)) return false;
    return true;
  }

  // ---------- maandkeuze ----------
  const maanden = [...new Set(KOMEND.map(t => t.d.slice(0, 7)))];
  const maandNaam = m => datum(m + "-01").toLocaleDateString(LOCALE, { month: "long", year: "numeric" });
  $("#ttMaand").innerHTML = '<option value="">' + T("Alle maanden", "All months", "Alle Monate") + "</option>" +
    maanden.map(m => '<option value="' + m + '">' + maandNaam(m) + " (" + KOMEND.filter(t => t.d.startsWith(m)).length + ")</option>").join("");

  // ---------- tonen ----------
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const prijs = p => "€ " + (p % 1 ? p.toFixed(2).replace(".", TAAL === "en" ? "." : ",") : p);

  function kaart() {
    const telling = {};
    KOMEND.filter(t => past(t, true)).forEach(t => { telling[t.p] = (telling[t.p] || 0) + 1; });
    $("#ttKaart").innerHTML = Object.entries(PROV).map(([code, [naam, c, r, land, breed]]) =>
      '<button type="button" class="gr-tegel gr-tegel--' + land.toLowerCase() + (S.prov === code ? " is-aan" : "") + (telling[code] ? "" : " is-leeg") +
      '" style="grid-column:' + (c + 1) + (breed ? " / span " + breed : "") + ";grid-row:" + (r + 1) + '" data-prov="' + code + '" aria-pressed="' + (S.prov === code) + '" title="' + naam + '">' +
      "<b>" + naam.replace(" (NL)", "").replace(" (BE)", "") + "</b><span>" + (telling[code] || 0) + "</span></button>").join("") +
      '<span class="gr-grens" aria-hidden="true">' + T("Nederland ↑ · België ↓", "Netherlands ↑ · Belgium ↓", "Niederlande ↑ · Belgien ↓") + "</span>";
  }

  function navTekst(n) {
    return n === "pijlen" ? T("Pijlen", "Arrows", "Pfeile") : n === "gps" ? T("GPS-route", "GPS route", "GPS-Route") : n === "beide" ? T("Pijlen en GPS", "Arrows and GPS", "Pfeile und GPS") : "";
  }

  function lijst() {
    const uit = KOMEND.filter(t => past(t));
    $("#ttAantal").textContent = uit.length;
    $("#ttEerste").textContent = uit.length ? uit[0].dt.toLocaleDateString(LOCALE, { day: "numeric", month: "short" }) : "–";
    const delen = [];
    if (S.wanneer === "weekend") delen.push(T("komend weekend", "this coming weekend", "am kommenden Wochenende"));
    if (S.wanneer === "4weken") delen.push(T("de komende 4 weken", "the next 4 weeks", "in den nächsten 4 Wochen"));
    if (S.maand) delen.push(maandNaam(S.maand));
    if (S.plek) delen.push(T("binnen ", "within ", "im Umkreis von ") + S.straal + T(" km van jou", " km of you", " km"));
    else if (S.prov) delen.push(PROV[S.prov][0]);
    else if (S.land !== "alle") delen.push(LANDNAAM[S.land]);
    if (S.lengte !== "alle") delen.push({ kort: T("tot 50 km", "up to 50 km", "bis 50 km"), middel: "50 – 100 km", lang: T("meer dan 100 km", "more than 100 km", "über 100 km") }[S.lengte]);
    $("#ttFilterTekst").textContent = delen.length ? T("Gravel-toertochten: ", "Gravel tours: ", "Gravel-Touren: ") + delen.join(", ") + "."
      : T("Alle gravel-toertochten in Nederland, België en net over de grens.", "All gravel tours in the Netherlands, Belgium and just across the border.", "Alle Gravel-Touren in den Niederlanden, Belgien und direkt hinter der Grenze.");

    if (!uit.length) {
      $("#ttLijst").innerHTML = '<p class="wb-leeg">' + T("Geen tochten met deze keuzes. Zet een filter uit, kies een grotere afstand rond je locatie of een andere maand.", "No rides with these choices. Turn off a filter, choose a larger radius or another month.", "Keine Touren mit dieser Auswahl. Schalte einen Filter aus, wähle einen größeren Umkreis oder einen anderen Monat.") + "</p>";
      return;
    }
    let html = "", maand = "";
    uit.forEach((t, i) => {
      const m = t.d.slice(0, 7);
      if (m !== maand) { if (maand) html += "</ol>"; maand = m; html += '<h3 class="tt-maand">' + maandNaam(m) + '</h3><ol class="tt-tochten">'; }
      const ver = S.plek && t.ll ? Math.round(afstand(S.plek, t.ll)) : null;
      const plaats = esc(t.pl) + " · " + (t.p && PROV[t.p] ? PROV[t.p][0].replace(" (NL)", "").replace(" (BE)", "") + " · " : "") + LANDNAAM[t.land];
      html += '<li class="tt-tocht">' +
        '<div class="tt-datum"><span>' + t.dt.toLocaleDateString(LOCALE, { weekday: "short" }) + "</span><strong>" + t.dt.getDate() + "</strong><span>" + t.dt.toLocaleDateString(LOCALE, { month: "short" }) + "</span></div>" +
        '<div class="tt-info"><h4>' + esc(t.n) + "</h4><p>" + plaats + (ver !== null ? " · " + T("± ", "± ", "± ") + ver + T(" km van jou", " km from you", " km von dir") : "") + "</p>" +
        (t.km && t.km.length ? '<div class="tt-km">' + t.km.map(k => "<span>" + k + " km</span>").join("") + "</div>" : '<div class="tt-km"><span class="tt-km--onbekend">' + T("Afstanden: zie organisator", "Distances: see organiser", "Strecken: siehe Veranstalter") + "</span></div>") +
        (t.noot ? '<p class="tt-noot">' + esc(t.noot) + "</p>" : "") +
        '<div class="tt-onder">' +
        (t.nav ? '<span class="gr-badge' + (t.nav !== "gps" ? " gr-badge--bord" : "") + '">' + navTekst(t.nav) + "</span>" : "") +
        (t.prijs ? '<span class="gr-badge">' + prijs(t.prijs) + "</span>" : "") +
        '<a href="' + esc(t.u) + '" target="_blank" rel="noopener">' + T("Info en inschrijven bij ", "Info and registration at ", "Infos und Anmeldung bei ") + esc(t.bron) + " ↗</a>" +
        '<button type="button" class="tt-agenda" data-i="' + KOMEND.indexOf(t) + '">' + T("In je agenda", "Add to calendar", "In den Kalender") + "</button>" +
        "</div></div></li>";
    });
    $("#ttLijst").innerHTML = html + "</ol>";
  }

  function toon() { kaart(); lijst(); }

  // ---------- agenda-bestand (.ics) ----------
  function agenda(t) {
    const d = t.d.replace(/-/g, ""), e = new Date(t.dt); e.setDate(e.getDate() + 1);
    const d2 = e.getFullYear() + String(e.getMonth() + 1).padStart(2, "0") + String(e.getDate()).padStart(2, "0");
    const v = s => String(s).replace(/([,;\\])/g, "\\$1");
    const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Gravel Gorilla//Gravel Toertochten//NL", "BEGIN:VEVENT",
      "UID:" + d + "-" + t.n.replace(/\W+/g, "").slice(0, 30) + "@gravelgorilla.nl", "DTSTAMP:" + new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z",
      "DTSTART;VALUE=DATE:" + d, "DTEND;VALUE=DATE:" + d2, "SUMMARY:" + v(t.n), "LOCATION:" + v(t.pl + ", " + LANDNAAM[t.land]),
      "DESCRIPTION:" + v((t.km && t.km.length ? t.km.join(" / ") + " km. " : "") + T("Info en inschrijven: ", "Info and registration: ", "Infos und Anmeldung: ") + t.u), "URL:" + t.u,
      "END:VEVENT", "END:VCALENDAR"].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = t.n.replace(/[^\w\- ]+/g, "").trim().replace(/\s+/g, "-").toLowerCase() + ".ics";
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000);
  }

  // ---------- invoer ----------
  function chipsZet() {
    wortel.querySelectorAll(".wb-chips").forEach(g => g.querySelectorAll("button").forEach(b => {
      const v = g.dataset.veld === "straal" ? String(S.straal) : S[g.dataset.veld];
      const aan = b.dataset.waarde === v; b.classList.toggle("is-aan", aan); b.setAttribute("aria-pressed", aan);
    }));
  }
  $("#ttKaart").addEventListener("click", e => {
    const t = e.target.closest("[data-prov]");
    if (!t) return;
    S.prov = S.prov === t.dataset.prov ? null : t.dataset.prov;
    if (S.prov) { S.plek = null; $("#ttLocatie").classList.remove("is-aan"); }
    toon();
  });
  wortel.querySelectorAll(".wb-chips").forEach(groep => groep.addEventListener("click", e => {
    const k = e.target.closest("button");
    if (!k) return;
    const veld = groep.dataset.veld;
    if (veld === "straal") S.straal = Number(k.dataset.waarde);
    else S[veld] = k.dataset.waarde;
    if (veld === "wanneer") { S.maand = ""; $("#ttMaand").value = ""; }
    if (veld === "land" && S.prov && PROV[S.prov][3] !== S.land) S.prov = null;
    chipsZet(); toon();
  }));
  $("#ttMaand").addEventListener("change", e => { S.maand = e.target.value; if (S.maand) S.wanneer = "alle"; chipsZet(); toon(); });
  $("#ttZoek").addEventListener("input", e => { S.zoek = e.target.value.trim().toLowerCase(); toon(); });
  $("#ttLocatie").addEventListener("click", () => {
    const tekst = $("#ttLocatieTekst");
    if (S.plek) { S.plek = null; $("#ttLocatie").classList.remove("is-aan"); tekst.textContent = T("Locatie uitgezet.", "Location turned off.", "Standort ausgeschaltet."); toon(); return; }
    if (!navigator.geolocation) { tekst.textContent = T("Je browser kan je locatie niet doorgeven. Tik dan op een provincie.", "Your browser can't share your location. Tap a province instead.", "Dein Browser kann deinen Standort nicht weitergeben. Tippe stattdessen auf eine Provinz."); return; }
    tekst.textContent = T("Even je locatie zoeken…", "Finding your location…", "Standort wird gesucht …");
    navigator.geolocation.getCurrentPosition(p => {
      S.plek = [p.coords.latitude, p.coords.longitude]; S.prov = null;
      $("#ttLocatie").classList.add("is-aan");
      tekst.textContent = T("Tochten binnen de gekozen afstand van jou. Nog een keer tikken zet dit uit.", "Rides within the chosen distance of you. Tap again to turn this off.", "Touren im gewählten Umkreis. Noch einmal tippen schaltet das aus.");
      toon();
    }, () => { tekst.textContent = T("Je locatie kon niet worden opgehaald. Tik dan op een provincie.", "Your location couldn't be found. Tap a province instead.", "Dein Standort konnte nicht ermittelt werden. Tippe stattdessen auf eine Provinz."); }, { timeout: 10000, maximumAge: 600000 });
  });
  $("#ttWis").addEventListener("click", () => {
    Object.assign(S, { wanneer: "alle", maand: "", land: "alle", prov: null, lengte: "alle", zoek: "", plek: null });
    $("#ttZoek").value = ""; $("#ttMaand").value = ""; $("#ttLocatie").classList.remove("is-aan");
    chipsZet(); toon();
  });
  $("#ttLijst").addEventListener("click", e => { const b = e.target.closest(".tt-agenda"); if (b) agenda(KOMEND[Number(b.dataset.i)]); });

  // van buitenaf (Vraag de Gorilla) een filter zetten
  window.GG_TOCHTEN_ZET = function (keuze) {
    Object.assign(S, { wanneer: "alle", maand: "", land: "alle", prov: null, lengte: "alle", zoek: "", plek: null }, keuze);
    $("#ttZoek").value = S.zoek; $("#ttMaand").value = S.maand; $("#ttLocatie").classList.remove("is-aan");
    chipsZet(); toon();
    return KOMEND.filter(t => past(t));
  };
  window.GG_PROV = PROV;
  window.GG_MAANDEN = maanden;

  // ---------- aanmelden ----------
  const form = $("#ttForm"), melding = $("#ttFormMelding"), geopend = Date.now();
  form.addEventListener("submit", async e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      melding.className = "tt-form__melding is-fout";
      melding.textContent = T("Vul de velden met een * in en vink het vakje aan.", "Fill in the fields marked * and tick the box.", "Füll die Felder mit * aus und setz das Häkchen.");
      form.reportValidity(); return;
    }
    const knop = form.querySelector("button[type=submit]");
    knop.disabled = true;
    melding.className = "tt-form__melding"; melding.textContent = T("Bezig met versturen…", "Sending…", "Wird gesendet …");
    const data = new FormData(form); data.append("tijd", String(Math.round((Date.now() - geopend) / 1000))); data.append("taal", TAAL);
    try {
      const r = await fetch("/api/aanmelden.php", { method: "POST", body: data });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.fout || "fout");
      form.reset();
      melding.className = "tt-form__melding is-goed";
      melding.textContent = T("Dank je wel! We hebben je aanmelding ontvangen en kijken er zo snel mogelijk naar.", "Thank you! We've received your submission and will look at it as soon as possible.", "Danke! Wir haben deine Anmeldung erhalten und sehen sie uns so schnell wie möglich an.");
    } catch (err) {
      melding.className = "tt-form__melding is-fout";
      melding.textContent = T("Versturen lukte niet. Probeer het later nog eens, of mail de tocht naar info@gravelgorilla.nl.", "Sending failed. Try again later, or email the ride to info@gravelgorilla.nl.", "Senden hat nicht geklappt. Versuch es später noch einmal oder schick die Tour an info@gravelgorilla.nl.");
    } finally { knop.disabled = false; }
  });

  toon();
})();
