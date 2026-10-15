/* ultra-eventkiezer — gemaakt door .claude/ultra-importeren.ps1 */
/* n=naam u=url d=startdatum tbc=datum nog niet (definitief) bekend, toont alleen de maand · geen=geen nieuwe editie aangekondigd city=start/route cc=landcode
   land, cont=werelddeel, km, hm (null=onbekend), surf: asfalt|gemengd|onverhard,
   bike:[race|gravel|mtb], fmt: self|sup|tour|rally|brevet|stage */
const EVENTS=[
{n:"Tour Te Waipounamu",u:"https://www.tourtewaipounamu.co.nz/",d:"2028-01-30",city:"Pūponga → Slope Point (Zuidereiland)",cc:"NZ",land:"Nieuw-Zeeland",cont:"Oceanië",km:1300,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Ruige traverse van Nieuw-Zeelands Zuidereiland, inclusief flinke stukken hike-a-bike. Deelname via ballot. Tweejaarlijks: de volgende editie start 30 januari 2028."},
{n:"GranGuanche Audax Road",u:"https://outerdetours.com/granguanche/audax/",d:"2027-01-15",tbc:true,city:"Lanzarote → El Hierro (Canarische Eilanden)",cc:"ES",land:"Spanje",cont:"Europa",km:650,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Eilandhoppen over vijf Canarische eilanden, veerboten inbegrepen. Ideale winterultra."},
{n:"Race Around Rwanda",u:"https://racearoundrwanda.com/",d:"2027-02-07",city:"Kigali (ronde door Rwanda)",cc:"RW",land:"Rwanda",cont:"Afrika",km:1000,hm:17000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Gravel en asfalt door het land van duizend heuvels."},
{n:"Atlas Mountain Race",u:"https://www.themountainraces.cc/atlas-mountain-race",d:"2027-03-13",city:"Marrakesh → Essaouira",cc:"MA",land:"Marokko",cont:"Afrika",km:1300,hm:25000,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"IJskoude nachten, gloeiende dagen: dé winterklassieker door de Atlas en Anti-Atlas."},
{n:"Transcordilleras",u:"https://transcordilleras.cc/",d:"2027-02-14",city:"Choachí, Colombiaanse Andes",cc:"CO",land:"Colombia",cont:"Zuid-Amerika",km:965,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"stage",note:"Acht etappes bikepacking over de drie cordilleras van de Colombiaanse Andes."},
{n:"Indian Pacific Wheel Ride",u:"https://www.indianpacificwheelrace.com/",d:"2027-03-15",tbc:true,city:"Fremantle → Sydney",cc:"AU",land:"Australië",cont:"Oceanië",km:5500,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Dwars over het Australische continent, inclusief de beruchte kale Nullarbor-vlakte."},
{n:"GranGuanche Audax Gravel",u:"https://outerdetours.com/granguanche/audax/",d:"2027-01-24",city:"Lanzarote → El Hierro (Canarische Eilanden)",cc:"ES",land:"Spanje",cont:"Europa",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelversie van het eilandhoppen: vulkanische trails, vijf eilanden, veerboten."},
{n:"Borderline 700",u:"https://borderline700.com/",d:"2027-03-26",city:"Luxemburg (Luxembourg Edition)",cc:"LU",land:"Luxemburg",cont:"Europa",km:700,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Zelfvoorzienende grensrace; de editie van 2027 start in Luxemburg (26–28 maart)."},
{n:"The Two Volcano Sprint",u:"https://www.twovolcanosprint.com/",d:"2027-04-25",city:"Zuid-Italië (Etna ↔ Vesuvius)",cc:"IT",land:"Italië",cont:"Europa",km:1100,hm:24000,surf:"asfalt",bike:["race"],fmt:"self",note:"Van vulkaan naar vulkaan: kort, steil en venijnig door Zuid-Italië."},
{n:"Race Across Italy",u:"https://raceacrossitaly.com/",d:"2027-04-30",tbc:true,city:"Silvi (kust-tot-kust)",cc:"IT",land:"Italië",cont:"Europa",km:775,hm:null,surf:"asfalt",bike:["race"],fmt:"sup",note:"Non-stop kust-tot-kust met volgauto; ook 300 km-variant. Klassieker in het supported ultrarijden."},
{n:"Italy Divide",u:"https://www.italydivide.it/",d:"2027-05-25",city:"Bari, Pompei of Rome → Gardameer",cc:"IT",land:"Italië",cont:"Europa",km:1250,hm:22000,surf:"gemengd",bike:["gravel","mtb"],fmt:"self",note:"Drie varianten (700, 1.250 of 1.650 km) van zuid naar noord: trails, gravel en heel veel Italië. Start in 2027 in Bari (25 mei), Pompei (26 mei) of Rome (27 mei)."},
{n:"Graval Road",u:"https://graval.cc/graval-road/",d:"2027-05-01",tbc:true,city:"Spanje",cc:"ES",land:"Spanje",cont:"Europa",km:600,hm:11000,surf:"asfalt",bike:["race"],fmt:"self",note:"Compacte Spaanse road-ultra: 600 km met 11.000 hoogtemeters."},
{n:"Montenegro Mountain Madness",u:"https://montenegromountainmadness.com/",d:"2027-06-12",city:"Montenegro",cc:"ME",land:"Montenegro",cont:"Europa",km:700,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Klein land, groot lijden: bergtrails door de Dinarische Alpen."},
{n:"May Divide",u:"https://bike-paradise.cz/",d:"2027-05-01",city:"Tsjechië",cc:"CZ",land:"Tsjechië",cont:"Europa",km:850,hm:13000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"MTB-bikepacking door Tsjechische bossen en heuvelruggen."},
{n:"Race around the Netherlands",u:"https://www.adventurebikeracing.com/ratn/",d:"2028-05-06",city:"Amerongen (ronde van NL)",cc:"NL",land:"Nederland",cont:"Europa",km:1950,hm:7000,surf:"gemengd",bike:["race","gravel"],fmt:"self",note:"Hét Nederlandse ultra-avontuur: 1.950 km langs de randen van het land, met gravelstroken. De klassieke editie is tweejaarlijks: volgende start 6 mei 2028."},
{n:"Highland Trail 550",u:"https://highlandtrail550.weebly.com/",d:"2027-05-08",city:"Tyndrum, Schotland",cc:"GB",land:"Verenigd Koninkrijk",cont:"Europa",km:550,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"De Schotse Hooglanden op hun rauwst; cult-klassieker zonder inschrijfgeld."},
{n:"Race Through Slovakia",u:"https://rtsk.cc/",d:"2027-05-15",city:"Slowakije",cc:"SK",land:"Slowakije",cont:"Europa",km:1000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Road-ultra dwars door Slowakije."},
{n:"The Accursed Race",u:"https://www.lostdot.cc/race-brand/the-accursed-race",d:"2027-05-15",tbc:true,city:"Shkodër (Balkanronde)",cc:"AL",land:"Albanië",cont:"Europa",km:1600,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Off-road epos van Lost Dot door de Vervloekte Bergen en meerdere Balkanlanden."},
{n:"Seven Serpents · Quick Bite!",u:"https://www.seven-serpents.com/",d:"2027-05-16",city:"Slovenië",cc:"SI",land:"Slovenië",cont:"Europa",km:500,hm:10000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Instapversie van Seven Serpents: 500 km Sloveens-Kroatische gravel."},
{n:"Tuscany Trail",u:"https://www.tuscanytrail.it/",d:"2027-05-19",city:"Campiglia Marittima, Toscane",cc:"IT",land:"Italië",cont:"Europa",km:460,hm:null,surf:"onverhard",bike:["gravel","mtb"],fmt:"tour",note:"Het grootste bikepacking-event ter wereld: geen race, wél duizenden deelnemers en strade bianche."},
{n:"Utrecht Ultra",u:"https://utrechtultra.com/",d:"2027-05-15",city:"Utrecht",cc:"NL",land:"Nederland",cont:"Europa",km:1000,hm:6000,surf:"asfalt",bike:["race"],fmt:"self",note:"1.000 km vanuit Utrecht de grens over en terug; snelle, sociale Nederlandse ultrascene."},
{n:"Hellenic Mountain Race",u:"https://www.themountainraces.cc/hellenic-mountain-race",d:"2027-05-22",city:"Agios Athanasios, Pindos",cc:"GR",land:"Griekenland",cont:"Europa",km:870,hm:27000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Zusje van Atlas & Silk Road, door het Griekse Pindosgebergte."},
{n:"Race Through Poland",u:"https://racethroughpoland.pl/",d:"2027-05-22",city:"Polen",cc:"PL",land:"Polen",cont:"Europa",km:1800,hm:27000,surf:"asfalt",bike:["race"],fmt:"self",note:"1.800 km road tussen Oostzee en Tatra."},
{n:"Unbound XL",u:"https://www.unboundgravel.com/",d:"2027-06-04",tbc:true,city:"Emporia, Kansas",cc:"US",land:"Verenigde Staten",cont:"Noord-Amerika",km:560,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Nachtstart in de Flint Hills: de ultra-versie van 's werelds bekendste gravelrace."},
{n:"Trans Balkan Race",u:"https://www.transbalkanrace.com/",d:"2027-05-28",city:"Slovenië (Balkantraverse)",cc:"SI",land:"Slovenië",cont:"Europa",km:1400,hm:30000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"MTB-traverse over de ruggengraat van de Dinarische Alpen."},
{n:"Moravia Divide",u:"https://ultrabikers.eu/",d:"2027-05-28",tbc:true,city:"Moravië, Tsjechië",cc:"CZ",land:"Tsjechië",cont:"Europa",km:800,hm:13000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Off-road bikepacking door Moravië."},
{n:"Lost Ride",u:"https://lost-ride.cz/",d:"2027-06-01",tbc:true,city:"Tsjechië",cc:"CZ",land:"Tsjechië",cont:"Europa",km:750,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Technisch en steil: veel hoogtemeters per kilometer."},
{n:"Trans Am Bike Nonstop",u:"https://rideyrbike.com/TABNS2026",d:"2027-06-06",tbc:true,city:"Astoria (OR) → Yorktown (VA)",cc:"US",land:"Verenigde Staten",cont:"Noord-Amerika",km:6800,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"De TransAmerica-route non-stop van west naar oost; opvolger van de Trans Am Bike Race."},
{n:"Seven Serpents",u:"https://www.seven-serpents.com/",d:"2027-06-06",city:"Slovenië → Kroatië",cc:"SI",land:"Slovenië",cont:"Europa",km:1000,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Zeven bergruggen tussen de Alpen en de Adriatische Zee."},
{n:"Hydra Epic",u:"https://hydra.epas.cc/",d:"2027-06-03",city:"Elva, Estland",cc:"EE",land:"Estland",cont:"Europa",km:1800,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Lange off-road bikepacking-race; de editie van 2027 is een Baltische route van 1.800 km vanuit Elva (Estland)."},
{n:"Toulání Šumavou",u:"https://www.toulanisumavou.cz/",d:"2027-06-08",tbc:true,city:"Šumava (Boheemse Woud)",cc:"CZ",land:"Tsjechië",cont:"Europa",km:850,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"550 of 850 km dwalen door het Boheemse Woud."},
{n:"Ultralajkonik",u:"https://ultralajkonik.pl/",d:"2027-05-13",city:"Krakau",cc:"PL",land:"Polen",cont:"Europa",km:1000,hm:25000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel-ultra vanuit Krakau; ook een 500 km-versie."},
{n:"Tour Divide",u:"https://tourdivide.org/",d:"2027-06-11",tbc:true,city:"Banff → Antelope Wells",cc:"CA",land:"Canada",cont:"Noord-Amerika",km:4400,hm:61000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Hét halo-event van bikepacking: de Great Divide van Canada naar de Mexicaanse grens."},
{n:"Hope 1000",u:"https://www.hope1000.ch/",d:"2027-06-12",tbc:true,city:"Romanshorn → Montreux",cc:"CH",land:"Zwitserland",cont:"Europa",km:1000,hm:31000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Zwitserland van oost naar west, over alpenweiden en bergpassen."},
{n:"Taunus Bikepacking",u:"https://taunus-bikepacking.com/",d:"2027-06-13",tbc:true,city:"Taunus, Duitsland",cc:"DE",land:"Duitsland",cont:"Europa",km:1000,hm:20000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Grote lus door de Taunus en omstreken; gemoedelijke Duitse bikepacking-scene."},
{n:"Race Across America (RAAM)",u:"https://www.raceacrossamerica.org/",d:"2026-06-16",geen:true,city:"Oceanside → Atlantic City",cc:"US",land:"Verenigde Staten",cont:"Noord-Amerika",km:4800,hm:53000,surf:"asfalt",bike:["race"],fmt:"sup",note:"De legende: non-stop met volgteam, 3.000 mijl door 13 staten. Let op: de organisatie heeft RAAM voor 2027 gepauzeerd, er is geen editie in 2027."},
{n:"Race Across France",u:"https://www.raceacrossseries.com/",d:"2027-06-16",city:"Mandelieu-la-Napoule",cc:"FR",land:"Frankrijk",cont:"Europa",km:2600,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Groot ultrafestival met afstanden van 300 tot 2.600 km."},
{n:"Northcape–Tarifa",u:"https://www.northcape-tarifa.com/",d:"2028-06-20",tbc:true,city:"Noordkaap → Tarifa",cc:"NO",land:"Noorwegen",cont:"Europa",km:7400,hm:80000,surf:"asfalt",bike:["race"],fmt:"self",note:"Van de kop van Europa naar het zuidpuntje; ook 1.700, 4.000 en 5.300 km-varianten. Tweejaarlijks: volgende editie in 2028."},
{n:"Styrkeprøven",u:"https://styrkeproven.no/",d:"2027-06-18",city:"Trondheim → Oslo",cc:"NO",land:"Noorwegen",cont:"Europa",km:540,hm:null,surf:"asfalt",bike:["race"],fmt:"tour",note:"Noorse klassieker sinds 1967: 540 km in één ruk naar Oslo."},
{n:"Monaco di Baviera Classic",u:"https://ultracyclingchallenges.com/monaco-di-baviera-classic",d:"2027-06-19",tbc:true,city:"München (semi-vrije route)",cc:"DE",land:"Duitsland",cont:"Europa",km:1300,hm:23550,surf:"asfalt",bike:["race"],fmt:"self",note:"Semi-vrije route langs 20 alpenpassen; Lite-versie (840 km) start 4 juni."},
{n:"BC Epic 1000",u:"https://www.bcepic1000.com/",d:"2027-06-26",tbc:true,city:"Merritt → Fernie (British Columbia)",cc:"CA",land:"Canada",cont:"Noord-Amerika",km:1000,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Brits-Columbia via oude spoorpaden en trails."},
{n:"Race Around Poland",u:"https://racearoundpoland.pl/",d:"2027-06-26",city:"Ronde van Polen",cc:"PL",land:"Polen",cont:"Europa",km:3600,hm:33000,surf:"asfalt",bike:["race"],fmt:"self",note:"Grote ronde van Polen; met unsupported én supported categorieën."},
{n:"Three Peaks Bike Race",u:"https://www.adventurebikeracing.com/threepeaksbikerace/",d:"2027-07-03",city:"Wenen → finish aan zee",cc:"AT",land:"Oostenrijk",cont:"Europa",km:2300,hm:30000,surf:"asfalt",bike:["race"],fmt:"self",note:"Vrije routekeuze langs drie iconische checkpoints richting het zuiden."},
{n:"Vistula 1200",u:"https://wisla1200.pl/",d:"2027-07-03",tbc:true,city:"Langs de Wisła, Polen",cc:"PL",land:"Polen",cont:"Europa",km:1200,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"De Wisła volgen van de bergen naar de zee."},
{n:"The Bright Midnight",u:"https://brightmidnight.cc/",d:"2027-07-04",city:"Lofoten, Noorwegen",cc:"NO",land:"Noorwegen",cont:"Europa",km:1100,hm:20000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel onder de middernachtzon, boven de poolcirkel."},
{n:"1000 Miles Adventure",u:"https://www.1000miles.cz/en",d:"2027-07-04",tbc:true,city:"Slowakije → Tsjechië",cc:"SK",land:"Slowakije",cont:"Europa",km:1600,hm:36000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Dwars door Slowakije en Tsjechië; kies de North- of South-route."},
{n:"Race Across Czechia",u:"https://ultrabikers.eu/",d:"2027-07-08",tbc:true,city:"Tsjechië",cc:"CZ",land:"Tsjechië",cont:"Europa",km:1100,hm:13000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel door heel Tsjechië; ook 800 km-variant."},
{n:"Pan Celtic Ultra",u:"https://www.pancelticrace.com/",d:"2027-07-10",city:"Conwy, Wales",cc:"GB",land:"Verenigd Koninkrijk",cont:"Europa",km:2300,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Keltische kusten en cols; route ±2.300 km, wisselt per editie."},
{n:"Transcontinental Race No13",u:"https://www.lostdot.cc/",d:"2027-07-18",tbc:true,city:"Europa (route volgt nog)",cc:"EU",land:"Meerdere landen",cont:"Europa",km:5000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Dé klassieker onder de road-ultra's: vrije route dwars door Europa, ±4.000–5.000 km. Start, finish en checkpoints van No13 worden later bekendgemaakt."},
{n:"NorthCape4000",u:"https://www.northcape4000.com/",d:"2027-07-24",city:"Rovereto of Berlijn → Noordkaap",cc:"IT",land:"Italië",cont:"Europa",km:4000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Van Italië naar de Noordkaap over een vaste route; groot internationaal deelnemersveld. Start in 2027 in Rovereto (24 juli) of Berlijn (29 juli)."},
{n:"Basajaun",u:"https://www.transiberica.club/basajaun/",d:"2027-07-25",city:"Vitoria-Gasteiz, Baskenland",cc:"ES",land:"Spanje",cont:"Europa",km:780,hm:15000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Baskische bossen, Pyreneeën-uitlopers en de halfwoestijn van de Bardenas."},
{n:"Slovakia Divide",u:"https://classic.slovakiadivide.sk/",d:"2027-07-31",tbc:true,city:"Slowakije",cc:"SK",land:"Slowakije",cont:"Europa",km:650,hm:15000,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Classic 650, Gravel 790 of Hardline 950 km (start 31 juli)."},
{n:"Utrecht Ultra XL",u:"https://utrechtultra.com/utrechtultraxl/",d:"2027-08-01",tbc:true,city:"Utrecht",cc:"NL",land:"Nederland",cont:"Europa",km:1000,hm:14000,surf:"asfalt",bike:["race"],fmt:"self",note:"XL-editie met fors meer klimwerk richting Ardennen en Eifel."},
{n:"Mother North",u:"https://www.mother-north.com/",d:"2027-08-01",city:"Noorwegen",cc:"NO",land:"Noorwegen",cont:"Europa",km:1100,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Fjorden, hoogvlakten en eindeloze Noorse gravel."},
{n:"Colorado Trail Race",u:"https://bikepacking.com/event/2026-colorado-trail-race-ctr/",d:"2027-08-01",tbc:true,city:"Waterton Canyon → Durango",cc:"US",land:"Verenigde Staten",cont:"Noord-Amerika",km:850,hm:21000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Singletrack-monster op grote hoogte langs de Colorado Trail."},
{n:"Carpatia Divide",u:"https://kolarstwoprzygodowe.pl/en/carpatia-divide-2/",d:"2027-08-07",city:"Poolse Karpaten",cc:"PL",land:"Polen",cont:"Europa",km:600,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"600 km met 20.000 hoogtemeters — steiler wordt het zelden."},
{n:"Race Around Austria",u:"https://www.racearoundaustria.at/",d:"2027-08-11",tbc:true,city:"St. Georgen im Attergau (ronde van Oostenrijk)",cc:"AT",land:"Oostenrijk",cont:"Europa",km:2200,hm:30000,surf:"asfalt",bike:["race"],fmt:"sup",note:"Supported ronde van Oostenrijk; de Challenge-versie (560 km) start 10 augustus."},
{n:"West Carpathian Challenge",u:"https://westcarpathianchallenge.sk/",d:"2027-08-11",tbc:true,city:"Slowakije",cc:"SK",land:"Slowakije",cont:"Europa",km:600,hm:13500,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Compact maar taai: de West-Karpaten off-road."},
{n:"Silk Road Mountain Race",u:"https://www.themountainraces.cc/silk-road-mountain-race",d:"2027-08-14",tbc:true,city:"Kirgizië",cc:"KG",land:"Kirgizië",cont:"Azië",km:1900,hm:28000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Het zwaarste dat bikepacking te bieden heeft: hooggebergte, rivierdoorwadingen en yurtkampen."},
{n:"GBDURO",u:"https://www.theracingcollective.com/gbduro.html",d:"2027-08-14",tbc:true,city:"Land's End → John o' Groats",cc:"GB",land:"Verenigd Koninkrijk",cont:"Europa",km:2000,hm:null,surf:"gemengd",bike:["gravel"],fmt:"stage",note:"In vier etappes off-road door Groot-Brittannië; inschrijving via loting."},
{n:"Polska 3200",u:"https://www.polishbiketour.pl/",d:"2028-08-12",tbc:true,city:"Gliwice (ronde van Polen)",cc:"PL",land:"Polen",cont:"Europa",km:3200,hm:30000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Enorme gravelronde van Polen. Volgende editie in 2028."},
{n:"Kõkõva",u:"https://www.panepanepane.ee/k6k6va",d:"2027-08-14",tbc:true,city:"Zuid-Estland",cc:"EE",land:"Estland",cont:"Europa",km:900,hm:3300,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Vlak, snel en bosrijk Baltisch gravelen; ook 500 km-versie."},
{n:"Alaska Divide",u:"https://alaskadivide.com/",d:"2027-08-14",city:"Alaska",cc:"US",land:"Verenigde Staten",cont:"Noord-Amerika",km:1700,hm:17700,surf:"onverhard",bike:["gravel","mtb"],fmt:"self",note:"Wildernisultra door Alaska — beren inbegrepen."},
{n:"Trendy Lakes Challenge",u:"https://ultrabikers.eu/",d:"2027-08-19",tbc:true,city:"Tsjechië",cc:"CZ",land:"Tsjechië",cont:"Europa",km:1100,hm:16000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"850 of 1.100 km langs Tsjechische meren."},
{n:"Around the Republic",u:"https://www.okolorepubliky.cz/en/",d:"2027-08-21",tbc:true,city:"Ronde van Tsjechië",cc:"CZ",land:"Tsjechië",cont:"Europa",km:1500,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"850 of 1.500 km rond de Tsjechische Republiek."},
{n:"Sneak Peaks",u:"https://www.orbit360.cc/sneak-peaks",d:"2027-08-25",tbc:true,city:"Italiaanse Alpen",cc:"IT",land:"Italië",cont:"Europa",km:1100,hm:40000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Orbit360-serie: Adventure 1.100, Classic 800 of Entree 500 km. Hoogtemeters in overvloed."},
{n:"Badlands",u:"https://badlands.cc/",d:"2027-09-05",city:"Granada, Andalusië",cc:"ES",land:"Spanje",cont:"Europa",km:800,hm:16000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Europa's populairste gravel-ultra: woestijn van Gorafe, Cabo de Gata en de Sierra Nevada."},
{n:"Torino–Nice Rally",u:"https://torino-nice.weebly.com/",d:"2027-09-01",tbc:true,city:"Turijn → Nice",cc:"IT",land:"Italië",cont:"Europa",km:700,hm:null,surf:"gemengd",bike:["gravel"],fmt:"rally",note:"Geen race maar een rally over legendarische gravelpassen; in 2026 geen officiële editie en voor 2027 nog niets bekend. De route is vrij te rijden."},
{n:"Alps Divide",u:"https://alpsdivide.com/",d:"2027-09-04",tbc:true,city:"Franse Alpen",cc:"FR",land:"Frankrijk",cont:"Europa",km:1050,hm:32000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Door de Franse Alpen van meer naar zee."},
{n:"Bohemian Border Bash Race",u:"https://www.borderbash.cc/",d:"2027-09-11",tbc:true,city:"Ronde van Bohemen",cc:"CZ",land:"Tsjechië",cont:"Europa",km:1300,hm:22000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Langs de grenzen van Bohemen; ruig, bosrijk en verrassend zwaar."},
{n:"2-Continents Adventure",u:"https://2-continents.com/",d:"2027-09-19",tbc:true,city:"Spanje → Marokko",cc:"ES",land:"Spanje",cont:"Europa",km:4000,hm:52000,surf:"gemengd",bike:["gravel","race"],fmt:"self",note:"Twee continenten in één race; gravel- (4.000 km) en road-variant (4.250 km)."},
{n:"Trans Pyrenees Race",u:"https://www.lostdot.cc/tpr",d:"2027-09-24",tbc:true,city:"Pyreneeën, coast-to-coast",cc:"FR",land:"Frankrijk",cont:"Europa",km:1500,hm:30000,surf:"asfalt",bike:["race"],fmt:"self",note:"Lost Dots herfstrace over de grote Pyreneeëncols; ±1.500 km."},
{n:"Bohemia Divide",u:"https://bohemiadivide.wixsite.com/english",d:"2027-09-25",tbc:true,city:"Tsjechië",cc:"CZ",land:"Tsjechië",cont:"Europa",km:800,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Klassieke Tsjechische divide-route."},
{n:"Iberian Road",u:"https://graval.cc/iberian-road/",d:"2027-10-06",tbc:true,city:"Spanje",cc:"ES",land:"Spanje",cont:"Europa",km:1000,hm:13000,surf:"asfalt",bike:["race"],fmt:"self",note:"Spaanse road-ultra in het naseizoen."},
{n:"The Rhino Run",u:"https://www.rhino-run.com/",d:"2027-10-11",tbc:true,city:"Windhoek → Graaff-Reinet",cc:"NA",land:"Namibië",cont:"Afrika",km:3050,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Van Windhoek door woestijn, winelands en Karoo naar Zuid-Afrika."},
{n:"HolyLand Challenge",u:"https://holylandmtbchallenge.com/",d:"2026-10-15",city:"Israël, noord → zuid",cc:"IL",land:"Israël",cont:"Azië",km:1450,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Van de Golan tot de Rode Zee; ook North- (700) en South-helft (750 km)."},
{n:"Arizona Trail Race",u:"https://bikepacking.com/event/2026-arizona-trail-race-aztr/",d:"2026-10-15",city:"Mexicaanse grens → Utah",cc:"US",land:"Verenigde Staten",cont:"Noord-Amerika",km:1300,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"800 mijl AZT inclusief Grand Canyon-doorsteek met de fiets op de rug; ook 300-mijlversie."},
{n:"Taurus Mountain Race",u:"https://www.themountainraces.cc/taurus-mountain-race",d:"2026-10-16",city:"Taurusgebergte, Turkije",cc:"TR",land:"Turkije",cont:"Azië",km:1400,hm:35000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Nieuwste telg van The Mountain Races, door het Turkse Taurusgebergte."},
{n:"Paris–Brest–Paris",u:"https://www.paris-brest-paris.org/",d:"2027-08-22",city:"Rambouillet → Brest → Rambouillet",cc:"FR",land:"Frankrijk",cont:"Europa",km:1200,hm:12000,surf:"asfalt",bike:["race"],fmt:"brevet",note:"De moeder van alle brevetten, eens per vier jaar; kwalificatie via de BRM-serie. Volgende editie: augustus 2027."},
{n:"The Japanese Odyssey",u:"https://japanese-odyssey.com/",d:"2027-10-01",tbc:true,city:"Japan",cc:"JP",land:"Japan",cont:"Azië",km:2400,hm:null,surf:"gemengd",bike:["race","gravel"],fmt:"self",note:"Ultra-avontuur door de Japanse bergen; volgende editie in 2027, details volgen."},
{n:"Peninsular Divide",u:"https://peninsulardivide.com/",d:"2026-10-18",tbc:true,city:"Johor",cc:"MY",land:"Maleisië",cont:"Azië",km:1500,hm:null,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Dwars over het Maleisische schiereiland, over asfalt en onverharde wegen."},
{n:"The Great Southeastern Loop",u:"https://www.greatsoutheasternloop.com.au/",d:"2026-10-25",tbc:true,city:"Wollongong (NSW)",cc:"AU",land:"Australië",cont:"Oceanië",km:1263,hm:null,surf:"gemengd",bike:["gravel"],fmt:"tour",note:"Lus door het zuidoosten van New South Wales, over asfalt en gravel."},
{n:"TransEcuador",u:"https://www.bikepackingecuador.com/transecuador",d:"2026-10-31",tbc:true,city:"Quito",cc:"EC",land:"Ecuador",cont:"Zuid-Amerika",km:630,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Door de Andes van Ecuador: hoog, steil en grotendeels onverhard."},
{n:"Iceni 360",u:"https://www.allpaceraces.com/e/iceni-360-15246",d:"2026-10-31",tbc:true,city:"Suffolk",cc:"GB",land:"Verenigd Koninkrijk",cont:"Europa",km:580,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelronde vanuit Suffolk in Oost-Engeland: weinig klimmen, veel kilometers."},
{n:"Death Road Mountain Race",u:"https://www.andeanraid.com/en",d:"2026-11-02",tbc:true,city:"La Paz",cc:"BO",land:"Bolivia",cont:"Zuid-Amerika",km:440,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Over de beruchte Death Road en hoge Andespassen rond La Paz."},
{n:"Battle of the Strait",u:"https://battleofthestrait.cc/",d:"2026-11-21",tbc:true,city:"Zuid-Spanje → Marokko",cc:"ES",land:"Meerdere landen",cont:"Europa",km:1200,hm:null,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Race over twee continenten: door Zuid-Spanje en met de boot over de Straat van Gibraltar naar Marokko."},
{n:"Across Andes Volcano",u:"https://acrossandes.cc/",d:"2026-11-22",tbc:true,city:"Pucón",cc:"CL",land:"Chili",cont:"Zuid-Amerika",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Langs vulkanen en meren in het zuiden van Chili."},
{n:"Race the Nile",u:"https://www.racethenile.com/",d:"2026-11-23",tbc:true,city:"Arua",cc:"UG",land:"Oeganda",cont:"Afrika",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrace door Oeganda, langs de Nijl."},
{n:"Tour Aotearoa",u:"http://www.touraotearoa.nz/p/home.html",d:"2027-02-17",tbc:true,city:"Cape Reinga → Bluff",cc:"NZ",land:"Nieuw-Zeeland",cont:"Oceanië",km:3000,hm:null,surf:"gemengd",bike:["gravel","mtb"],fmt:"brevet",note:"Heel Nieuw-Zeeland van noord naar zuid, over fietspaden, gravel en asfalt."},
{n:"Final Frontier Patagonia",u:"https://www.finalfrontierpatagonia.com/en/",d:"2027-03-06",tbc:true,city:"Zuid-Patagonië",cc:"CL",land:"Chili",cont:"Zuid-Amerika",km:3000,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrace door Patagonië, met afstanden van 790 tot 3.000 km."},
{n:"East Texas Showdown",u:"https://texasshowdownseries.com/east-texas-showdown/",d:"2027-03-11",tbc:true,city:"Oost-Texas",cc:"US",land:"Verenigde Staten",cont:"Noord-Amerika",km:644,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelrit door de bossen van Oost-Texas, ook 257 en 450 km."},
{n:"El Sur",u:"https://www.lesperitdelbikepacking.org/el-sur",d:"2027-03-14",tbc:true,city:"Málaga",cc:"ES",land:"Spanje",cont:"Europa",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrace door het zuiden van Spanje, vanuit Málaga."},
{n:"Trail of the Southern Oasis",u:"https://morocco-bikeadventure.com/",d:"2027-03-21",tbc:true,city:"Nador",cc:"MA",land:"Marokko",cont:"Afrika",km:1950,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Van de Middellandse Zee naar de oases van de Sahara over pistes; er is ook een asfaltversie van 2.060 km."},
{n:"GranGuanche Audax Trail",u:"https://outerdetours.com/granguanche/Audax-trail/",d:"2027-03-28",tbc:true,city:"Canarische Eilanden",cc:"ES",land:"Spanje",cont:"Europa",km:900,hm:null,surf:"onverhard",bike:["mtb"],fmt:"brevet",note:"Offroad-variant van de GranGuanche: eilandhoppen over ruige paden."},
{n:"Seven Serpents: Illyrian Loop",u:"https://www.seven-serpents.com/illyrian-loop/",d:"2027-04-01",tbc:true,city:"Shkodër",cc:"AL",land:"Albanië",cont:"Europa",km:650,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Ronde door de bergen van Noord-Albanië, vanuit Shkodër."},
{n:"Race Across South Africa",u:"https://www.freedomchallenge.org.za/rasa",d:"2027-04-05",tbc:true,city:"Byrne",cc:"ZA",land:"Zuid-Afrika",cont:"Afrika",km:1960,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Zware mountainbikerace dwars door Zuid-Afrika, onderdeel van de Freedom Challenge."},
{n:"Norfolk 360",u:"https://www.allpaceraces.com/",d:"2027-04-10",tbc:true,city:"Norfolk",cc:"GB",land:"Verenigd Koninkrijk",cont:"Europa",km:580,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelronde door het vlakke Norfolk in Oost-Engeland."},
{n:"Del Fuego",u:"https://www.delfuegorace.com/",d:"2027-04-10",tbc:true,city:"Puerto Natales",cc:"CL",land:"Chili",cont:"Zuid-Amerika",km:1050,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrace in Patagonië, ook in kortere versies van 170 en 250 km."},
{n:"Desertus Bikus",u:"https://desertusbikus.com/en/",d:"2027-04-10",tbc:true,city:"Baskenland",cc:"ES",land:"Spanje",cont:"Europa",km:1300,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Vanuit Baskenland door de droge, woestijnachtige vlakten van Spanje."},
{n:"La Garba Gravel",u:"https://sbhotelslagarba.com/en/",d:"2027-04-16",tbc:true,city:"Ebrodelta",cc:"ES",land:"Spanje",cont:"Europa",km:500,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelweekend in de Ebrodelta, met afstanden van 80 tot 500 km."},
{n:"Atacama Spirits Gravel Race",u:"https://atacamaspirits.com/gravelrace/",d:"2027-04-18",tbc:true,city:"Taltal",cc:"CL",land:"Chili",cont:"Zuid-Amerika",km:650,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrace door de Atacamawoestijn, de droogste woestijn ter wereld."},
{n:"Heading East",u:"https://heading-east.com/",d:"2027-04-23",city:"Zalk",cc:"NL",land:"Nederland",cont:"Europa",km:600,hm:null,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Self-supported 600 km vanuit Zalk door bossen, heide en heuvels van Nederland en Duitsland, met controlepunten op 200 en 400 km."},
{n:"The Traka 560",u:"https://www.thetraka.com/",d:"2027-04-30",tbc:true,city:"Girona",cc:"ES",land:"Spanje",cont:"Europa",km:560,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"De lange afstand van The Traka, het grote gravelfestival in Girona (ook 100 tot 360 km)."},
{n:"La Gravel Tro Breizh",u:"https://erminig.cc/epreuves/la-gravel-tro-breizh/",d:"2027-05-01",tbc:true,city:"Lac de Trémelin (Bretagne)",cc:"FR",land:"Frankrijk",cont:"Europa",km:1300,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Rondje Bretagne over gravel en paden."},
{n:"Veneto Gravel",u:"https://venetogravel.it/",d:"2027-05-07",tbc:true,city:"Bassano del Grappa",cc:"IT",land:"Italië",cont:"Europa",km:720,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelrit door Veneto, ook 200 en 400 km."},
{n:"MittelgebirgeClassique",u:"http://mittelgebirgeclassique.cc/",d:"2027-05-08",tbc:true,city:"Neustadt an der Weinstraße",cc:"DE",land:"Duitsland",cont:"Europa",km:1100,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Asfaltrace door de Duitse middelgebergten, met veel klimwerk."},
{n:"Grelly Adventure",u:"https://www.grelly-cycling.be/",d:"2027-05-20",city:"België (start volgt)",cc:"BE",land:"België",cont:"Europa",km:825,hm:null,surf:"onverhard",bike:["gravel","mtb"],fmt:"tour",note:"Offroad-bikepacking in België in 3 of 4 dagen, van 375 tot 825 km. De editie van 2027 is volgeboekt."},
{n:"Race Around Denmark",u:"https://racearounddenmark.org/",d:"2027-05-26",tbc:true,city:"Kaløvig",cc:"DK",land:"Denemarken",cont:"Europa",km:1600,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Rondje Denemarken over asfalt."},
{n:"Pedalma: Madrid–Barcelona",u:"https://pedalma.cc/en/mad-to-bcn/",d:"2027-05-28",tbc:true,city:"Madrid → Barcelona",cc:"ES",land:"Spanje",cont:"Europa",km:700,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Van Madrid naar Barcelona over rustige wegen door het binnenland."},
{n:"Peaks and Plains",u:"http://www.peaksandplains.cc/",d:"2027-05-28",tbc:true,city:"Maagdenburg",cc:"DE",land:"Duitsland",cont:"Europa",km:550,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Asfaltrace vanuit Maagdenburg door Midden-Duitsland."},
{n:"Aethelred Ultra",u:"https://www.aethelredultra.com/",d:"2027-05-29",tbc:true,city:"Salisbury",cc:"GB",land:"Verenigd Koninkrijk",cont:"Europa",km:600,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrace over oude wegen in Zuid-Engeland, vanuit Salisbury."},
{n:"Balutia",u:"https://balutia.com/",d:"2027-05-30",tbc:true,city:"Pozoblanco (Córdoba)",cc:"ES",land:"Spanje",cont:"Europa",km:870,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelronde door Andalusië, vanuit Pozoblanco."},
{n:"Nordic Chase BER–CPH Gravel",u:"https://nordicchase.com/",d:"2027-06-04",tbc:true,city:"Berlijn → Kopenhagen",cc:"DE",land:"Meerdere landen",cont:"Europa",km:740,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelversie van Berlijn naar Kopenhagen; er is ook een asfaltversie. Onderdeel van de Nordic Chase-serie."},
{n:"Kromvojoj",u:"https://www.kromvojoj.cc/en/",d:"2027-06-05",tbc:true,city:"Alforja (Catalonië)",cc:"ES",land:"Spanje",cont:"Europa",km:1335,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Asfaltrace door de bergen van Catalonië, ook 885 km."},
{n:"Nordic Chase CPH–OSL Gravel",u:"https://nordicchase.com/",d:"2027-06-18",tbc:true,city:"Kopenhagen → Oslo",cc:"DK",land:"Meerdere landen",cont:"Europa",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelversie van Kopenhagen naar Oslo; er is ook een asfaltversie. Onderdeel van de Nordic Chase-serie."},
{n:"45-SouthWest",u:"https://45southwest.com/",d:"2027-06-20",tbc:true,city:"Krakau",cc:"PL",land:"Polen",cont:"Europa",km:4384,hm:null,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Zeer lange all-road race vanuit Krakau, met routes van 1.888, 3.952 en 4.384 km."},
{n:"Andean Raid",u:"https://www.andeanraid.com/en",d:"2027-06-24",tbc:true,city:"Cusco",cc:"PE",land:"Peru",cont:"Zuid-Amerika",km:450,hm:null,surf:"onverhard",bike:["gravel","mtb"],fmt:"self",note:"Gravelrace door de Andes rond Cusco, op grote hoogte."},
{n:"MountainPilgrimage Mont Ventoux",u:"https://mountainpilgrimage.de/",d:"2027-06-27",tbc:true,city:"Mont Ventoux",cc:"FR",land:"Frankrijk",cont:"Europa",km:2600,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Race van 2.600 km over asfalt, met de Mont Ventoux als bestemming."},
{n:"Nordic Chase AMS–CPH",u:"https://nordicchase.com/",d:"2027-08-06",tbc:true,city:"Amsterdam → Kopenhagen",cc:"NL",land:"Meerdere landen",cont:"Europa",km:910,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Van Amsterdam naar Kopenhagen over asfalt. Onderdeel van de Nordic Chase-serie."},
{n:"Nordic Chase CPH–STO Gravel",u:"https://nordicchase.com/",d:"2027-08-20",tbc:true,city:"Kopenhagen → Stockholm",cc:"DK",land:"Meerdere landen",cont:"Europa",km:780,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelversie van Kopenhagen naar Stockholm; er is ook een asfaltversie. Onderdeel van de Nordic Chase-serie."},
];

const MND=["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
const FMT={self:"Self-supported",sup:"Supported",tour:"Toertocht",rally:"Rally",brevet:"Brevet",stage:"In etappes"};
const BIKE={race:"Race",gravel:"Gravel",mtb:"MTB"};
const SURF={asfalt:"Asfalt",gemengd:"Gemengd",onverhard:"Onverhard"};
const KMB=[{id:"a",lbl:"< 750 km",f:e=>e.km<750},{id:"b",lbl:"750 – 1.500 km",f:e=>e.km>=750&&e.km<1500},{id:"c",lbl:"1.500 – 3.000 km",f:e=>e.km>=1500&&e.km<3000},{id:"d",lbl:"> 3.000 km",f:e=>e.km>=3000}];
const flag=cc=>String.fromCodePoint(...[...cc].map(c=>0x1F1E6+c.charCodeAt(0)-65));
const nf=n=>n.toLocaleString("nl-NL");
const TODAY=new Date(); TODAY.setHours(0,0,0,0);

const S={maand:new Set(),cont:new Set(),km:new Set(),surf:new Set(),bike:new Set(),land:"",q:"",future:true,sort:"datum"};

function chiprow(el,items,set,acc){
  items.forEach(it=>{
    const b=document.createElement("button");
    b.className="chip"+(acc?" acc":"");b.textContent=it.lbl;b.dataset.v=it.id;
    b.onclick=()=>{set.has(it.id)?set.delete(it.id):set.add(it.id);b.classList.toggle("on");apply();};
    el.appendChild(b);
  });
}

function init(){
  chiprow(document.getElementById("f-maand"),MND.map((m,i)=>({id:String(i),lbl:m})),S.maand,true);
  const conts=[...new Set(EVENTS.map(e=>e.cont))].sort();
  chiprow(document.getElementById("f-cont"),conts.map(c=>({id:c,lbl:c})),S.cont);
  chiprow(document.getElementById("f-km"),KMB.map(k=>({id:k.id,lbl:k.lbl})),S.km);
  chiprow(document.getElementById("f-surf"),Object.keys(SURF).map(s=>({id:s,lbl:SURF[s]})),S.surf);
  chiprow(document.getElementById("f-bike"),Object.keys(BIKE).map(b=>({id:b,lbl:BIKE[b]})),S.bike);
  const lsel=document.getElementById("land");
  const lands={};EVENTS.forEach(e=>lands[e.land]=(lands[e.land]||0)+1);
  Object.keys(lands).sort((a,b)=>a.localeCompare(b,"nl")).forEach(l=>{
    const o=document.createElement("option");o.value=l;o.textContent=`${l} (${lands[l]})`;lsel.appendChild(o);
  });
  lsel.onchange=()=>{S.land=lsel.value;apply();};
  document.getElementById("q").oninput=e=>{S.q=e.target.value.toLowerCase();apply();};
  document.getElementById("sort").onchange=e=>{S.sort=e.target.value;apply();};
  document.getElementById("future").onchange=e=>{S.future=e.target.checked;apply();};
  document.getElementById("reset").onclick=reset;
  document.getElementById("st-ev").textContent=EVENTS.length;
  document.getElementById("st-land").textContent=Object.keys(lands).length;
  document.getElementById("st-cont").textContent=conts.length;
  document.getElementById("st-km").textContent=nf(EVENTS.reduce((a,e)=>a+e.km,0));
  apply();
}

function reset(){
  ["maand","cont","km","surf","bike"].forEach(k=>S[k].clear());
  S.land="";S.q="";S.sort="datum";S.future=true;
  document.querySelectorAll(".chip.on").forEach(c=>c.classList.remove("on"));
  document.getElementById("q").value="";document.getElementById("land").value="";
  document.getElementById("sort").value="datum";document.getElementById("future").checked=true;
  apply();
}

function pass(e){
  const dt=new Date(e.d+"T12:00:00");
  if(S.future&&dt<TODAY)return false;
  if(S.maand.size&&!S.maand.has(String(dt.getMonth())))return false;
  if(S.cont.size&&!S.cont.has(e.cont))return false;
  if(S.km.size&&![...S.km].some(id=>KMB.find(k=>k.id===id).f(e)))return false;
  if(S.surf.size&&!S.surf.has(e.surf))return false;
  if(S.bike.size&&!e.bike.some(b=>S.bike.has(b)))return false;
  if(S.land&&e.land!==S.land)return false;
  if(S.q){const h=(e.n+" "+e.city+" "+e.land+" "+e.cont+" "+e.note).toLowerCase();if(!h.includes(S.q))return false;}
  return true;
}

function card(e){
  const dt=new Date(e.d+"T12:00:00");
  const past=dt<TODAY;
  const y27=dt.getFullYear()>2026;
  const dlabel=e.tbc?`<b>±</b><span>${MND[dt.getMonth()]} ${String(dt.getFullYear()).slice(2)}</span>`
    :`<b>${dt.getDate()}</b><span>${MND[dt.getMonth()]} ${String(dt.getFullYear()).slice(2)}</span>`;
  return `<article class="cardE${past?" past":""}">
    <div class="toprow">
      <div class="geo"><span class="fl">${flag(e.cc)}</span>${e.land} · ${e.cont}</div>
      <div class="datebadge${y27?" y27":""}">${dlabel}</div>
    </div>
    <h3>${e.n}</h3>
    <div class="place">📍 ${e.city}${e.tbc?'<span class="tbc">datum onder voorbehoud</span>':""}</div>
    <div class="numchips"><span class="numchip">${nf(e.km)} km</span>${e.hm?`<span class="numchip hm">${nf(e.hm)} hm</span>`:""}</div>
    <div class="tags">
      <span class="tag ${e.surf}">${SURF[e.surf]}</span>
      ${e.bike.map(b=>`<span class="tag bike">${BIKE[b]}</span>`).join("")}
      <span class="tag fmt${e.fmt==="sup"?" sup":""}">${FMT[e.fmt]}</span>
    </div>
    <div class="note">${e.note}</div>
    <div class="foot">
      <a href="${e.u}" target="_blank" rel="noopener">Naar website ↗</a>
      ${past?'<span class="pastlabel">Geweest</span>':""}
    </div>
  </article>`;
}

function apply(){
  let list=EVENTS.filter(pass);
  const cmp={
    "datum":(a,b)=>a.d.localeCompare(b.d),
    "km-op":(a,b)=>a.km-b.km,
    "km-af":(a,b)=>b.km-a.km,
    "hm-af":(a,b)=>(b.hm||0)-(a.hm||0)
  }[S.sort];
  list.sort(cmp);
  document.getElementById("grid").innerHTML=list.map(card).join("");
  document.getElementById("n").textContent=list.length;
  document.getElementById("ntxt").textContent=(list.length===1?"event":"events")+" van "+EVENTS.length;
  document.getElementById("empty").style.display=list.length?"none":"block";
}

init();
