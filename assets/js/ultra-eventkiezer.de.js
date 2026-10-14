/* ultra-eventkiezer — gemaakt door .claude/ultra-importeren.ps1 */
/* n=naam u=url d=startdatum tbc=datum onder voorbehoud city=start/route cc=landcode
   land, cont=werelddeel, km, hm (null=onbekend), surf: asfalt|gemengd|onverhard,
   bike:[race|gravel|mtb], fmt: self|sup|tour|rally|brevet|stage */
const EVENTS=[
{n:"Tour Te Waipounamu",u:"https://www.tourtewaipounamu.co.nz/",d:"2026-01-25",city:"Pūponga → Slope Point (Südinsel)",cc:"NZ",land:"Neuseeland",cont:"Ozeanien",km:1300,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Raue Durchquerung der neuseeländischen Südinsel, inklusive langer Schiebepassagen. Teilnahme per Losverfahren."},
{n:"GranGuanche Audax Road",u:"https://granguanche.com/audax/",d:"2026-01-25",city:"Lanzarote → El Hierro (Kanarische Inseln)",cc:"ES",land:"Spanien",cont:"Europa",km:650,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Inselhopping über fünf Kanarische Inseln, Fähren inklusive. Der ideale Winter-Ultra."},
{n:"Race Around Rwanda",u:"https://racearoundrwanda.com/",d:"2026-02-01",city:"Kigali (Runde durch Ruanda)",cc:"RW",land:"Ruanda",cont:"Afrika",km:1000,hm:17000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Schotter und Asphalt durch das Land der tausend Hügel."},
{n:"Atlas Mountain Race",u:"https://www.themountainraces.cc/atlas-mountain-race",d:"2026-02-06",city:"Marrakesh → Essaouira",cc:"MA",land:"Marokko",cont:"Afrika",km:1300,hm:25000,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Eiskalte Nächte, glühende Tage: der Winterklassiker durch Atlas und Antiatlas."},
{n:"Transcordilleras",u:"https://transcordilleras.cc/",d:"2026-02-22",city:"Choachí, Colombiaanse Andes",cc:"CO",land:"Kolumbien",cont:"Südamerika",km:965,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"stage",note:"Acht Etappen Bikepacking über die drei Kordilleren der kolumbianischen Anden."},
{n:"Indian Pacific Wheel Ride",u:"https://www.indianpacificwheelrace.com/",d:"2026-03-21",city:"Fremantle → Sydney",cc:"AU",land:"Australien",cont:"Ozeanien",km:5500,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Quer über den australischen Kontinent, inklusive der berüchtigten kahlen Nullarbor-Ebene."},
{n:"GranGuanche Audax Gravel",u:"https://granguanche.com/audax/",d:"2026-03-22",city:"Lanzarote → El Hierro (Kanarische Inseln)",cc:"ES",land:"Spanien",cont:"Europa",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel-Version des Inselhoppings: vulkanische Trails, fünf Inseln, Fähren."},
{n:"Borderline 700",u:"https://borderline700.com/",d:"2026-04-03",city:"Niederlande (Grenzroute)",cc:"NL",land:"Niederlande",cont:"Europa",km:700,hm:5000,surf:"asfalt",bike:["race"],fmt:"self",note:"Self-supported-Rennen entlang der niederländischen Grenzregion — überraschend viele Höhenmeter."},
{n:"The Two Volcano Sprint",u:"https://www.twovolcanosprint.com/",d:"2026-04-26",city:"Süditalien (Ätna ↔ Vesuv)",cc:"IT",land:"Italien",cont:"Europa",km:1100,hm:24000,surf:"asfalt",bike:["race"],fmt:"self",note:"Von Vulkan zu Vulkan: kurz, steil und giftig durch Süditalien."},
{n:"Race Across Italy",u:"https://raceacrossitaly.com/",d:"2026-04-30",city:"Silvi (Küste zu Küste)",cc:"IT",land:"Italien",cont:"Europa",km:775,hm:null,surf:"asfalt",bike:["race"],fmt:"sup",note:"Nonstop von Küste zu Küste mit Begleitfahrzeug; auch eine 300-km-Variante. Ein Klassiker im Supported-Ultrafahren."},
{n:"Italy Divide",u:"https://www.italydivide.it/",d:"2026-04-30",city:"Napels → Gardameer",cc:"IT",land:"Italien",cont:"Europa",km:1250,hm:22000,surf:"gemengd",bike:["gravel","mtb"],fmt:"self",note:"Drei Varianten (700, 1.250 oder 1.650 km) von Süd nach Nord: Trails, Schotter und ganz viel Italien."},
{n:"Graval Road",u:"https://graval.cc/graval-road/",d:"2026-05-01",city:"Spanje",cc:"ES",land:"Spanien",cont:"Europa",km:600,hm:11000,surf:"asfalt",bike:["race"],fmt:"self",note:"Kompakter spanischer Straßen-Ultra: 600 km mit 11.000 Höhenmetern."},
{n:"Montenegro Mountain Madness",u:"https://montenegromountainmadness.com/",d:"2026-05-01",city:"Montenegro",cc:"ME",land:"Montenegro",cont:"Europa",km:700,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Kleines Land, großes Leiden: Bergtrails durch die Dinarischen Alpen."},
{n:"May Divide",u:"https://bike-paradise.cz/",d:"2026-05-01",city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:850,hm:13000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"MTB-Bikepacking durch tschechische Wälder und Höhenzüge."},
{n:"Race around the Netherlands",u:"https://www.adventurebikeracing.com/ratn/",d:"2026-05-02",city:"Amerongen (Runde durch die Niederlande)",cc:"NL",land:"Niederlande",cont:"Europa",km:1950,hm:7000,surf:"gemengd",bike:["race","gravel"],fmt:"self",note:"Das niederländische Ultra-Abenteuer: 1.950 km entlang der Landesränder, mit Schotterabschnitten."},
{n:"Highland Trail 550",u:"https://highlandtrail550.weebly.com/",d:"2026-05-09",city:"Tyndrum, Schotland",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:550,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Die schottischen Highlands von ihrer rauesten Seite; Kultklassiker ohne Startgeld."},
{n:"Race Through Slovakia",u:"https://rtsk.cc/",d:"2026-05-09",city:"Slowakije",cc:"SK",land:"Slowakei",cont:"Europa",km:1000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Straßen-Ultra quer durch die Slowakei."},
{n:"The Accursed Race",u:"https://www.lostdot.cc/race-brand/the-accursed-race",d:"2026-05-12",city:"Shkodër (Balkanrunde)",cc:"AL",land:"Albanien",cont:"Europa",km:1600,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Offroad-Epos von Lost Dot durch die Albanischen Alpen und mehrere Balkanländer."},
{n:"Seven Serpents · Quick Bite!",u:"https://www.seven-serpents.com/",d:"2026-05-17",city:"Slovenië",cc:"SI",land:"Slowenien",cont:"Europa",km:500,hm:10000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Einsteigerversion von Seven Serpents: 500 km slowenisch-kroatischer Schotter."},
{n:"Tuscany Trail",u:"https://www.tuscanytrail.it/",d:"2026-05-20",city:"Campiglia Marittima, Toscane",cc:"IT",land:"Italien",cont:"Europa",km:460,hm:null,surf:"onverhard",bike:["gravel","mtb"],fmt:"tour",note:"Das größte Bikepacking-Event der Welt: kein Rennen, aber Tausende Teilnehmer und Strade Bianche."},
{n:"Utrecht Ultra",u:"https://utrechtultra.com/",d:"2026-05-23",city:"Utrecht",cc:"NL",land:"Niederlande",cont:"Europa",km:1000,hm:6000,surf:"asfalt",bike:["race"],fmt:"self",note:"1.000 km von Utrecht über die Grenze und zurück; schnelle, gesellige niederländische Ultraszene."},
{n:"Hellenic Mountain Race",u:"https://www.themountainraces.cc/hellenic-mountain-race",d:"2026-05-23",city:"Agios Athanasios, Pindos",cc:"GR",land:"Griechenland",cont:"Europa",km:870,hm:27000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Kleine Schwester von Atlas & Silk Road, durch das griechische Pindosgebirge."},
{n:"Race Through Poland",u:"https://racethroughpoland.pl/",d:"2026-05-23",city:"Polen",cc:"PL",land:"Polen",cont:"Europa",km:1800,hm:27000,surf:"asfalt",bike:["race"],fmt:"self",note:"1.800 km Straße zwischen Ostsee und Tatra."},
{n:"Unbound XL",u:"https://www.unboundgravel.com/",d:"2026-05-29",city:"Emporia, Kansas",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:560,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Nachtstart in den Flint Hills: die Ultra-Version des bekanntesten Gravelrennens der Welt."},
{n:"Trans Balkan Race",u:"https://www.transbalkanrace.com/",d:"2026-05-29",city:"Slowenien (Balkantraverse)",cc:"SI",land:"Slowenien",cont:"Europa",km:1400,hm:30000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"MTB-Traverse über das Rückgrat der Dinarischen Alpen."},
{n:"Moravia Divide",u:"https://ultrabikers.eu/",d:"2026-05-29",city:"Moravië, Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:800,hm:13000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Offroad-Bikepacking durch Mähren."},
{n:"Lost Ride",u:"https://lost-ride.cz/",d:"2026-06-02",city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:750,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Technisch und steil: viele Höhenmeter pro Kilometer."},
{n:"Trans Am Bike Nonstop",u:"https://rideyrbike.com/TABNS2026",d:"2026-06-07",city:"Astoria (OR) → Yorktown (VA)",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:6800,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Die TransAmerica-Route nonstop von West nach Ost; Nachfolger des Trans Am Bike Race."},
{n:"Seven Serpents",u:"https://www.seven-serpents.com/",d:"2026-06-07",city:"Slovenië → Kroatië",cc:"SI",land:"Slowenien",cont:"Europa",km:1000,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Sieben Bergrücken zwischen den Alpen und der Adria."},
{n:"Hydra Epic",u:"https://hydra.epas.cc/",d:"2026-06-08",city:"Polen",cc:"PL",land:"Polen",cont:"Europa",km:1800,hm:15000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Lange Offroad-Schleife durch Polen."},
{n:"Toulání Šumavou",u:"https://www.toulanisumavou.cz/",d:"2026-06-09",city:"Šumava (Böhmerwald)",cc:"CZ",land:"Tschechien",cont:"Europa",km:850,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"550 oder 850 km Streifzug durch den Böhmerwald."},
{n:"Ultralajkonik",u:"https://ultralajkonik.pl/",d:"2026-06-12",city:"Krakau",cc:"PL",land:"Polen",cont:"Europa",km:1000,hm:25000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel-Ultra ab Krakau; auch eine 500-km-Version."},
{n:"Tour Divide",u:"https://tourdivide.org/",d:"2026-06-12",city:"Banff → Antelope Wells",cc:"CA",land:"Kanada",cont:"Nordamerika",km:4400,hm:61000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Das Aushängeschild des Bikepackings: der Great Divide von Kanada bis zur mexikanischen Grenze."},
{n:"Hope 1000",u:"https://www.hope1000.ch/",d:"2026-06-13",city:"Romanshorn → Montreux",cc:"CH",land:"Schweiz",cont:"Europa",km:1000,hm:31000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Die Schweiz von Ost nach West, über Almwiesen und Bergpässe."},
{n:"Taunus Bikepacking",u:"https://taunus-bikepacking.com/",d:"2026-06-14",city:"Taunus, Duitsland",cc:"DE",land:"Deutschland",cont:"Europa",km:1000,hm:20000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Große Schleife durch den Taunus und Umgebung; gemütliche deutsche Bikepacking-Szene."},
{n:"Race Across America (RAAM)",u:"https://www.raceacrossamerica.org/",d:"2026-06-16",city:"Oceanside → Atlantic City",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:4800,hm:53000,surf:"asfalt",bike:["race"],fmt:"sup",note:"Die Legende: nonstop mit Begleitteam, 3.000 Meilen durch 13 Bundesstaaten. Teams starten am 20. Juni."},
{n:"Race Across France",u:"https://www.raceacrossseries.com/",d:"2026-06-18",city:"Mandelieu-la-Napoule",cc:"FR",land:"Frankreich",cont:"Europa",km:2600,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Großes Ultrafestival mit Distanzen von 300 bis 2.600 km."},
{n:"Northcape–Tarifa",u:"https://www.northcape-tarifa.com/",d:"2026-06-19",city:"Noordkaap → Tarifa",cc:"NO",land:"Norwegen",cont:"Europa",km:7400,hm:80000,surf:"asfalt",bike:["race"],fmt:"self",note:"Vom Kopf Europas bis zur Südspitze; auch Varianten mit 1.700, 4.000 und 5.300 km."},
{n:"Styrkeprøven",u:"https://styrkeproven.no/",d:"2026-06-20",city:"Trondheim → Oslo",cc:"NO",land:"Norwegen",cont:"Europa",km:540,hm:null,surf:"asfalt",bike:["race"],fmt:"tour",note:"Norwegischer Klassiker seit 1967: 540 km in einem Rutsch nach Oslo."},
{n:"Monaco di Baviera Classic",u:"https://ultracyclingchallenges.com/monaco-di-baviera-classic",d:"2026-06-20",city:"München (halbfreie Route)",cc:"DE",land:"Deutschland",cont:"Europa",km:1300,hm:23550,surf:"asfalt",bike:["race"],fmt:"self",note:"Halbfreie Route über 20 Alpenpässe; die Lite-Version (840 km) startet am 4. Juni."},
{n:"BC Epic 1000",u:"https://www.bcepic1000.com/",d:"2026-06-27",city:"Merritt → Fernie (British Columbia)",cc:"CA",land:"Kanada",cont:"Nordamerika",km:1000,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"British Columbia über alte Bahntrassen und Trails."},
{n:"Race Around Poland",u:"https://racearoundpoland.pl/",d:"2026-06-27",city:"Runde durch Polen",cc:"PL",land:"Polen",cont:"Europa",km:3600,hm:33000,surf:"asfalt",bike:["race"],fmt:"self",note:"Große Runde durch Polen; mit Unsupported- und Supported-Kategorien."},
{n:"Three Peaks Bike Race",u:"https://www.adventurebikeracing.com/threepeaksbikerace/",d:"2026-07-04",city:"Wenen → finish aan zee",cc:"AT",land:"Österreich",cont:"Europa",km:2300,hm:30000,surf:"asfalt",bike:["race"],fmt:"self",note:"Freie Routenwahl über drei ikonische Checkpoints Richtung Süden."},
{n:"Vistula 1200",u:"https://wisla1200.pl/",d:"2026-07-04",city:"Langs de Wisła, Polen",cc:"PL",land:"Polen",cont:"Europa",km:1200,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Der Weichsel folgen, von den Bergen bis ans Meer."},
{n:"The Bright Midnight",u:"https://brightmidnight.cc/",d:"2026-07-04",city:"Lofoten, Noorwegen",cc:"NO",land:"Norwegen",cont:"Europa",km:1100,hm:20000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Schotter unter der Mitternachtssonne, nördlich des Polarkreises."},
{n:"1000 Miles Adventure",u:"https://www.1000miles.cz/en",d:"2026-07-05",city:"Slowakije → Tsjechië",cc:"SK",land:"Slowakei",cont:"Europa",km:1600,hm:36000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Quer durch die Slowakei und Tschechien; wähle die North- oder South-Route."},
{n:"Race Across Czechia",u:"https://ultrabikers.eu/",d:"2026-07-09",city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:1100,hm:13000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Schotter durch ganz Tschechien; auch eine 800-km-Variante."},
{n:"Pan Celtic Ultra",u:"https://www.pancelticrace.com/",d:"2026-07-12",city:"Conwy, Wales",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:2300,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Keltische Küsten und Pässe; Route ±2.300 km, wechselt jede Ausgabe."},
{n:"Transcontinental Race No12",u:"https://www.lostdot.cc/race/tcrno12",d:"2026-07-19",city:"Trondheim → Kalamata",cc:"NO",land:"Norwegen",cont:"Europa",km:5000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Der Klassiker unter den Straßen-Ultras: freie Route von Norwegen nach Griechenland, ±5.000 km."},
{n:"NorthCape4000",u:"https://www.northcape4000.com/",d:"2026-07-25",city:"Rovereto → Noordkaap",cc:"IT",land:"Italien",cont:"Europa",km:4000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Von Italien zum Nordkap auf fester Route; großes internationales Starterfeld."},
{n:"Basajaun",u:"https://www.transiberica.club/basajaun/",d:"2026-07-26",city:"Vitoria-Gasteiz, Baskenland",cc:"ES",land:"Spanien",cont:"Europa",km:780,hm:15000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Baskische Wälder, Pyrenäen-Ausläufer und die Halbwüste der Bardenas."},
{n:"Slovakia Divide",u:"https://classic.slovakiadivide.sk/",d:"2026-08-01",city:"Slowakije",cc:"SK",land:"Slowakei",cont:"Europa",km:650,hm:15000,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Classic 650, Gravel 790 oder Hardline 950 km (Start 31. Juli)."},
{n:"Utrecht Ultra XL",u:"https://utrechtultra.com/utrechtultraxl/",d:"2026-08-01",city:"Utrecht",cc:"NL",land:"Niederlande",cont:"Europa",km:1000,hm:14000,surf:"asfalt",bike:["race"],fmt:"self",note:"XL-Ausgabe mit deutlich mehr Kletterei Richtung Ardennen und Eifel."},
{n:"Mother North",u:"https://www.mother-north.com/",d:"2026-08-02",city:"Noorwegen",cc:"NO",land:"Norwegen",cont:"Europa",km:1100,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Fjorde, Hochebenen und endloser norwegischer Schotter."},
{n:"Colorado Trail Race",u:"https://bikepacking.com/event/2026-colorado-trail-race-ctr/",d:"2026-08-02",city:"Waterton Canyon → Durango",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:850,hm:21000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Singletrail-Monster in großer Höhe entlang des Colorado Trail."},
{n:"Carpatia Divide",u:"https://kolarstwoprzygodowe.pl/en/carpatia-divide-2/",d:"2026-08-08",city:"Poolse Karpaten",cc:"PL",land:"Polen",cont:"Europa",km:600,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"600 km mit 20.000 Höhenmetern — steiler wird es selten."},
{n:"Race Around Austria",u:"https://www.racearoundaustria.at/",d:"2026-08-12",tbc:true,city:"St. Georgen im Attergau (Runde durch Österreich)",cc:"AT",land:"Österreich",cont:"Europa",km:2200,hm:30000,surf:"asfalt",bike:["race"],fmt:"sup",note:"Supported-Runde durch Österreich; die Challenge-Version (560 km) startet am 10. August."},
{n:"West Carpathian Challenge",u:"https://westcarpathianchallenge.sk/",d:"2026-08-12",city:"Slowakije",cc:"SK",land:"Slowakei",cont:"Europa",km:600,hm:13500,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Kompakt, aber zäh: die Westkarpaten offroad."},
{n:"Silk Road Mountain Race",u:"https://www.themountainraces.cc/silk-road-mountain-race",d:"2026-08-14",city:"Kirgizië",cc:"KG",land:"Kirgisistan",cont:"Asien",km:1900,hm:28000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Das Härteste, was Bikepacking zu bieten hat: Hochgebirge, Flussdurchquerungen und Jurtencamps."},
{n:"GBDURO",u:"https://www.theracingcollective.com/gbduro.html",d:"2026-08-15",city:"Land's End → John o' Groats",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:2000,hm:null,surf:"gemengd",bike:["gravel"],fmt:"stage",note:"In vier Etappen offroad durch Großbritannien; Anmeldung per Los."},
{n:"Polska 3200",u:"https://www.polishbiketour.pl/",d:"2026-08-15",city:"Gliwice (Runde durch Polen)",cc:"PL",land:"Polen",cont:"Europa",km:3200,hm:30000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Riesige Gravelrunde durch Polen."},
{n:"Kõkõva",u:"https://www.panepanepane.ee/k6k6va",d:"2026-08-15",city:"Zuid-Estland",cc:"EE",land:"Estland",cont:"Europa",km:900,hm:3300,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Flaches, schnelles und waldreiches Baltikum-Graveln; auch eine 500-km-Version."},
{n:"Alaska Divide",u:"https://alaskadivide.com/",d:"2026-08-16",city:"Alaska",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:1700,hm:17700,surf:"onverhard",bike:["gravel","mtb"],fmt:"self",note:"Wildnis-Ultra durch Alaska — Bären inklusive."},
{n:"Trendy Lakes Challenge",u:"https://ultrabikers.eu/",d:"2026-08-20",city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:1100,hm:16000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"850 oder 1.100 km entlang tschechischer Seen."},
{n:"Around the Republic",u:"https://www.okolorepubliky.cz/en/",d:"2026-08-22",city:"Runde durch Tschechien",cc:"CZ",land:"Tschechien",cont:"Europa",km:1500,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"850 oder 1.500 km rund um die Tschechische Republik."},
{n:"Sneak Peaks",u:"https://www.orbit360.cc/sneak-peaks",d:"2026-08-26",city:"Italiaanse Alpen",cc:"IT",land:"Italien",cont:"Europa",km:1100,hm:40000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Orbit360-Serie: Adventure 1.100, Classic 800 oder Entree 500 km. Höhenmeter im Überfluss."},
{n:"Badlands",u:"https://badlands.cc/",d:"2026-08-30",city:"Granada, Andalusien",cc:"ES",land:"Spanien",cont:"Europa",km:800,hm:16000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Europas beliebtester Gravel-Ultra: die Wüste von Gorafe, Cabo de Gata und die Sierra Nevada."},
{n:"Torino–Nice Rally",u:"https://torino-nice.weebly.com/",d:"2026-09-01",tbc:true,city:"Turijn → Nice",cc:"IT",land:"Italien",cont:"Europa",km:700,hm:null,surf:"gemengd",bike:["gravel"],fmt:"rally",note:"Kein Rennen, sondern eine Rallye über legendäre Schotterpässe; 2026 keine offizielle Ausgabe, die Route ist frei befahrbar."},
{n:"Alps Divide",u:"https://alpsdivide.com/",d:"2026-09-05",city:"Franse Alpen",cc:"FR",land:"Frankreich",cont:"Europa",km:1050,hm:32000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Durch die französischen Alpen vom See bis zum Meer."},
{n:"Bohemian Border Bash Race",u:"https://www.borderbash.cc/",d:"2026-09-05",city:"Runde durch Böhmen",cc:"CZ",land:"Tschechien",cont:"Europa",km:1300,hm:22000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Entlang der Grenzen Böhmens; rau, waldreich und überraschend hart."},
{n:"2-Continents Adventure",u:"https://2-continents.com/",d:"2026-09-20",city:"Spanje → Marokko",cc:"ES",land:"Spanien",cont:"Europa",km:4000,hm:52000,surf:"gemengd",bike:["gravel","race"],fmt:"self",note:"Zwei Kontinente in einem Rennen; Gravel- (4.000 km) und Straßenvariante (4.250 km)."},
{n:"Trans Pyrenees Race No6",u:"https://www.lostdot.cc/tpr",d:"2026-09-25",city:"Pyreneeën, coast-to-coast",cc:"FR",land:"Frankreich",cont:"Europa",km:1500,hm:30000,surf:"asfalt",bike:["race"],fmt:"self",note:"Das Herbstrennen von Lost Dot über die großen Pyrenäenpässe; ±1.500 km."},
{n:"Bohemia Divide",u:"https://bohemiadivide.wixsite.com/english",d:"2026-09-26",city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:800,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Klassische tschechische Divide-Route."},
{n:"Iberian Road",u:"https://graval.cc/iberian-road/",d:"2026-10-07",city:"Spanje",cc:"ES",land:"Spanien",cont:"Europa",km:1000,hm:13000,surf:"asfalt",bike:["race"],fmt:"self",note:"Spanischer Straßen-Ultra in der Nachsaison."},
{n:"The Rhino Run",u:"https://www.rhino-run.com/",d:"2026-10-12",city:"Windhoek → Graaff-Reinet",cc:"NA",land:"Namibia",cont:"Afrika",km:3050,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Von Windhoek durch Wüste, Winelands und Karoo nach Südafrika."},
{n:"HolyLand Challenge",u:"https://holylandmtbchallenge.com/",d:"2026-10-15",city:"Israël, noord → zuid",cc:"IL",land:"Israel",cont:"Asien",km:1450,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Vom Golan bis zum Roten Meer; auch Nord- (700) und Südhälfte (750 km)."},
{n:"Arizona Trail Race",u:"https://bikepacking.com/event/2026-arizona-trail-race-aztr/",d:"2026-10-15",city:"Mexicaanse grens → Utah",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:1300,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"800 Meilen AZT inklusive Grand-Canyon-Durchquerung mit dem Rad auf dem Rücken; auch eine 300-Meilen-Version."},
{n:"Taurus Mountain Race",u:"https://www.themountainraces.cc/taurus-mountain-race",d:"2026-10-16",city:"Taurusgebergte, Turkije",cc:"TR",land:"Türkei",cont:"Asien",km:1400,hm:35000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Jüngstes Mitglied der Mountain Races, durch das türkische Taurusgebirge."},
{n:"Paris–Brest–Paris",u:"https://www.paris-brest-paris.org/",d:"2027-08-15",tbc:true,city:"Rambouillet → Brest → Rambouillet",cc:"FR",land:"Frankreich",cont:"Europa",km:1200,hm:12000,surf:"asfalt",bike:["race"],fmt:"brevet",note:"Die Mutter aller Brevets, alle vier Jahre; Qualifikation über die BRM-Serie. Nächste Ausgabe: August 2027."},
{n:"The Japanese Odyssey",u:"https://japanese-odyssey.com/",d:"2027-10-01",tbc:true,city:"Japan",cc:"JP",land:"Japan",cont:"Asien",km:2400,hm:null,surf:"gemengd",bike:["race","gravel"],fmt:"self",note:"Ultra-Abenteuer durch die japanischen Berge; nächste Ausgabe 2027, Details folgen."},
];

const MND=["jan","feb","mär","apr","mai","jun","jul","aug","sep","okt","nov","dez"];
const FMT={self:"Self-supported",sup:"Supported",tour:"Tour",rally:"Rally",brevet:"Brevet",stage:"In Etappen"};
const BIKE={race:"Race",gravel:"Gravel",mtb:"MTB"};
const SURF={asfalt:"Asphalt",gemengd:"Gemischt",onverhard:"Unbefestigt"};
const KMB=[{id:"a",lbl:"< 750 km",f:e=>e.km<750},{id:"b",lbl:"750 – 1.500 km",f:e=>e.km>=750&&e.km<1500},{id:"c",lbl:"1.500 – 3.000 km",f:e=>e.km>=1500&&e.km<3000},{id:"d",lbl:"> 3.000 km",f:e=>e.km>=3000}];
const flag=cc=>String.fromCodePoint(...[...cc].map(c=>0x1F1E6+c.charCodeAt(0)-65));
const nf=n=>n.toLocaleString("de-DE");
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
  Object.keys(lands).sort((a,b)=>a.localeCompare(b,"de")).forEach(l=>{
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
    <div class="place">📍 ${e.city}${e.tbc?'<span class="tbc">Datum unter Vorbehalt</span>':""}</div>
    <div class="numchips"><span class="numchip">${nf(e.km)} km</span>${e.hm?`<span class="numchip hm">${nf(e.hm)} hm</span>`:""}</div>
    <div class="tags">
      <span class="tag ${e.surf}">${SURF[e.surf]}</span>
      ${e.bike.map(b=>`<span class="tag bike">${BIKE[b]}</span>`).join("")}
      <span class="tag fmt${e.fmt==="sup"?" sup":""}">${FMT[e.fmt]}</span>
    </div>
    <div class="note">${e.note}</div>
    <div class="foot">
      <a href="${e.u}" target="_blank" rel="noopener">Zur Website ↗</a>
      ${past?'<span class="pastlabel">Vorbei</span>':""}
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
  document.getElementById("ntxt").textContent=(list.length===1?"Event":"Events")+" von "+EVENTS.length;
  document.getElementById("empty").style.display=list.length?"none":"block";
}

init();
