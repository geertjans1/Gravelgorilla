/* ultra-eventkiezer — gemaakt door .claude/ultra-importeren.ps1 */
/* n=naam u=url d=startdatum tbc=datum nog niet (definitief) bekend, toont alleen de maand · geen=geen nieuwe editie aangekondigd city=start/route cc=landcode
   land, cont=werelddeel, km, hm (null=onbekend), surf: asfalt|gemengd|onverhard,
   bike:[race|gravel|mtb], fmt: self|sup|tour|rally|brevet|stage */
const EVENTS=[
{n:"Tour Te Waipounamu",u:"https://www.tourtewaipounamu.co.nz/",d:"2028-01-30",city:"Pūponga → Slope Point (Südinsel)",cc:"NZ",land:"Neuseeland",cont:"Ozeanien",km:1300,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Raue Durchquerung der neuseeländischen Südinsel, inklusive langer Schiebepassagen. Teilnahme per Losverfahren. Alle zwei Jahre: Die nächste Ausgabe startet am 30. Januar 2028."},
{n:"GranGuanche Audax Road",u:"https://outerdetours.com/granguanche/audax/",d:"2027-01-15",tbc:true,city:"Lanzarote → El Hierro (Kanarische Inseln)",cc:"ES",land:"Spanien",cont:"Europa",km:650,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Inselhopping über fünf Kanarische Inseln, Fähren inklusive. Der ideale Winter-Ultra."},
{n:"Race Around Rwanda",u:"https://racearoundrwanda.com/",d:"2027-02-07",city:"Kigali (Runde durch Ruanda)",cc:"RW",land:"Ruanda",cont:"Afrika",km:1000,hm:17000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Schotter und Asphalt durch das Land der tausend Hügel."},
{n:"Atlas Mountain Race",u:"https://www.themountainraces.cc/atlas-mountain-race",d:"2027-03-13",city:"Marrakesh → Essaouira",cc:"MA",land:"Marokko",cont:"Afrika",km:1300,hm:25000,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Eiskalte Nächte, glühende Tage: der Winterklassiker durch Atlas und Antiatlas."},
{n:"Transcordilleras",u:"https://transcordilleras.cc/",d:"2027-02-14",city:"Choachí, kolumbianische Anden",cc:"CO",land:"Kolumbien",cont:"Südamerika",km:965,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"stage",note:"Acht Etappen Bikepacking über die drei Kordilleren der kolumbianischen Anden."},
{n:"Indian Pacific Wheel Ride",u:"https://www.indianpacificwheelrace.com/",d:"2027-03-15",tbc:true,city:"Fremantle → Sydney",cc:"AU",land:"Australien",cont:"Ozeanien",km:5500,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Quer über den australischen Kontinent, inklusive der berüchtigten kahlen Nullarbor-Ebene."},
{n:"GranGuanche Audax Gravel",u:"https://outerdetours.com/granguanche/audax/",d:"2027-01-24",city:"Lanzarote → El Hierro (Kanarische Inseln)",cc:"ES",land:"Spanien",cont:"Europa",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel-Version des Inselhoppings: vulkanische Trails, fünf Inseln, Fähren."},
{n:"Borderline 700",u:"https://borderline700.com/",d:"2027-03-26",city:"Luxemburg (Luxembourg Edition)",cc:"LU",land:"Luxemburg",cont:"Europa",km:700,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Self-supported-Grenzrennen; die Ausgabe 2027 startet in Luxemburg (26.–28. März)."},
{n:"The Two Volcano Sprint",u:"https://www.twovolcanosprint.com/",d:"2027-04-25",city:"Süditalien (Ätna ↔ Vesuv)",cc:"IT",land:"Italien",cont:"Europa",km:1100,hm:24000,surf:"asfalt",bike:["race"],fmt:"self",note:"Von Vulkan zu Vulkan: kurz, steil und giftig durch Süditalien."},
{n:"Race Across Italy",u:"https://raceacrossitaly.com/",d:"2027-04-30",tbc:true,city:"Silvi (Küste zu Küste)",cc:"IT",land:"Italien",cont:"Europa",km:775,hm:null,surf:"asfalt",bike:["race"],fmt:"sup",note:"Nonstop von Küste zu Küste mit Begleitfahrzeug; auch eine 300-km-Variante. Ein Klassiker im Supported-Ultrafahren."},
{n:"Italy Divide",u:"https://www.italydivide.it/",d:"2027-05-25",city:"Bari, Pompeji oder Rom → Gardasee",cc:"IT",land:"Italien",cont:"Europa",km:1250,hm:22000,surf:"gemengd",bike:["gravel","mtb"],fmt:"self",note:"Drei Varianten (700, 1.250 oder 1.650 km) von Süd nach Nord: Trails, Schotter und ganz viel Italien. Start 2027 in Bari (25. Mai), Pompeji (26. Mai) oder Rom (27. Mai)."},
{n:"Graval Road",u:"https://graval.cc/graval-road/",d:"2027-05-01",tbc:true,city:"Spanje",cc:"ES",land:"Spanien",cont:"Europa",km:600,hm:11000,surf:"asfalt",bike:["race"],fmt:"self",note:"Kompakter spanischer Straßen-Ultra: 600 km mit 11.000 Höhenmetern."},
{n:"Montenegro Mountain Madness",u:"https://montenegromountainmadness.com/",d:"2027-06-12",city:"Montenegro",cc:"ME",land:"Montenegro",cont:"Europa",km:700,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Kleines Land, großes Leiden: Bergtrails durch die Dinarischen Alpen."},
{n:"May Divide",u:"https://bike-paradise.cz/",d:"2027-05-01",city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:850,hm:13000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"MTB-Bikepacking durch tschechische Wälder und Höhenzüge."},
{n:"Race around the Netherlands",u:"https://www.adventurebikeracing.com/ratn/",d:"2028-05-06",city:"Amerongen (Runde durch die Niederlande)",cc:"NL",land:"Niederlande",cont:"Europa",km:1950,hm:7000,surf:"gemengd",bike:["race","gravel"],fmt:"self",note:"Das niederländische Ultra-Abenteuer: 1.950 km entlang der Landesränder, mit Schotterabschnitten. Die klassische Ausgabe findet alle zwei Jahre statt: nächster Start am 6. Mai 2028."},
{n:"Highland Trail 550",u:"https://highlandtrail550.weebly.com/",d:"2027-05-08",city:"Tyndrum, Schotland",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:550,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Die schottischen Highlands von ihrer rauesten Seite; Kultklassiker ohne Startgeld."},
{n:"Race Through Slovakia",u:"https://rtsk.cc/",d:"2027-05-15",city:"Slowakije",cc:"SK",land:"Slowakei",cont:"Europa",km:1000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Straßen-Ultra quer durch die Slowakei."},
{n:"The Accursed Race",u:"https://www.lostdot.cc/race-brand/the-accursed-race",d:"2027-05-15",tbc:true,city:"Shkodër (Balkanrunde)",cc:"AL",land:"Albanien",cont:"Europa",km:1600,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Offroad-Epos von Lost Dot durch die Albanischen Alpen und mehrere Balkanländer."},
{n:"Seven Serpents · Quick Bite!",u:"https://www.seven-serpents.com/",d:"2027-05-16",city:"Slovenië",cc:"SI",land:"Slowenien",cont:"Europa",km:500,hm:10000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Einsteigerversion von Seven Serpents: 500 km slowenisch-kroatischer Schotter."},
{n:"Tuscany Trail",u:"https://www.tuscanytrail.it/",d:"2027-05-19",city:"Campiglia Marittima, Toscane",cc:"IT",land:"Italien",cont:"Europa",km:460,hm:null,surf:"onverhard",bike:["gravel","mtb"],fmt:"tour",note:"Das größte Bikepacking-Event der Welt: kein Rennen, aber Tausende Teilnehmer und Strade Bianche."},
{n:"Utrecht Ultra",u:"https://utrechtultra.com/",d:"2027-05-15",city:"Utrecht",cc:"NL",land:"Niederlande",cont:"Europa",km:1000,hm:6000,surf:"asfalt",bike:["race"],fmt:"self",note:"1.000 km von Utrecht über die Grenze und zurück; schnelle, gesellige niederländische Ultraszene."},
{n:"Hellenic Mountain Race",u:"https://www.themountainraces.cc/hellenic-mountain-race",d:"2027-05-22",city:"Agios Athanasios, Pindos",cc:"GR",land:"Griechenland",cont:"Europa",km:870,hm:27000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Kleine Schwester von Atlas & Silk Road, durch das griechische Pindosgebirge."},
{n:"Race Through Poland",u:"https://racethroughpoland.pl/",d:"2027-05-22",city:"Polen",cc:"PL",land:"Polen",cont:"Europa",km:1800,hm:27000,surf:"asfalt",bike:["race"],fmt:"self",note:"1.800 km Straße zwischen Ostsee und Tatra."},
{n:"Unbound XL",u:"https://www.unboundgravel.com/",d:"2027-06-04",tbc:true,city:"Emporia, Kansas",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:560,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Nachtstart in den Flint Hills: die Ultra-Version des bekanntesten Gravelrennens der Welt."},
{n:"Trans Balkan Race",u:"https://www.transbalkanrace.com/",d:"2027-05-28",city:"Slowenien (Balkantraverse)",cc:"SI",land:"Slowenien",cont:"Europa",km:1400,hm:30000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"MTB-Traverse über das Rückgrat der Dinarischen Alpen."},
{n:"Moravia Divide",u:"https://ultrabikers.eu/",d:"2027-05-28",tbc:true,city:"Moravië, Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:800,hm:13000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Offroad-Bikepacking durch Mähren."},
{n:"Lost Ride",u:"https://lost-ride.cz/",d:"2027-06-01",tbc:true,city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:750,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Technisch und steil: viele Höhenmeter pro Kilometer."},
{n:"Trans Am Bike Nonstop",u:"https://rideyrbike.com/TABNS2026",d:"2027-06-06",tbc:true,city:"Astoria (OR) → Yorktown (VA)",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:6800,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Die TransAmerica-Route nonstop von West nach Ost; Nachfolger des Trans Am Bike Race."},
{n:"Seven Serpents",u:"https://www.seven-serpents.com/",d:"2027-06-06",city:"Slovenië → Kroatië",cc:"SI",land:"Slowenien",cont:"Europa",km:1000,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Sieben Bergrücken zwischen den Alpen und der Adria."},
{n:"Hydra Epic",u:"https://hydra.epas.cc/",d:"2027-06-03",city:"Elva, Estland",cc:"EE",land:"Estland",cont:"Europa",km:1800,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Langes Offroad-Bikepacking-Rennen; die Ausgabe 2027 ist eine baltische Route über 1.800 km ab Elva (Estland)."},
{n:"Toulání Šumavou",u:"https://www.toulanisumavou.cz/",d:"2027-06-08",tbc:true,city:"Šumava (Böhmerwald)",cc:"CZ",land:"Tschechien",cont:"Europa",km:850,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"550 oder 850 km Streifzug durch den Böhmerwald."},
{n:"Ultralajkonik",u:"https://ultralajkonik.pl/",d:"2027-05-13",city:"Krakau",cc:"PL",land:"Polen",cont:"Europa",km:1000,hm:25000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel-Ultra ab Krakau; auch eine 500-km-Version."},
{n:"Tour Divide",u:"https://tourdivide.org/",d:"2027-06-11",tbc:true,city:"Banff → Antelope Wells",cc:"CA",land:"Kanada",cont:"Nordamerika",km:4400,hm:61000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Das Aushängeschild des Bikepackings: der Great Divide von Kanada bis zur mexikanischen Grenze."},
{n:"Hope 1000",u:"https://www.hope1000.ch/",d:"2027-06-12",tbc:true,city:"Romanshorn → Montreux",cc:"CH",land:"Schweiz",cont:"Europa",km:1000,hm:31000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Die Schweiz von Ost nach West, über Almwiesen und Bergpässe."},
{n:"Taunus Bikepacking",u:"https://taunus-bikepacking.com/",d:"2027-06-13",tbc:true,city:"Taunus, Duitsland",cc:"DE",land:"Deutschland",cont:"Europa",km:1000,hm:20000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Große Schleife durch den Taunus und Umgebung; gemütliche deutsche Bikepacking-Szene."},
{n:"Race Across America (RAAM)",u:"https://www.raceacrossamerica.org/",d:"2026-06-16",geen:true,city:"Oceanside → Atlantic City",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:4800,hm:53000,surf:"asfalt",bike:["race"],fmt:"sup",note:"Die Legende: nonstop mit Begleitteam, 3.000 Meilen durch 13 Bundesstaaten. Achtung: Die Veranstalter pausieren RAAM 2027, es gibt keine Ausgabe 2027."},
{n:"Race Across France",u:"https://www.raceacrossseries.com/",d:"2027-06-16",city:"Mandelieu-la-Napoule",cc:"FR",land:"Frankreich",cont:"Europa",km:2600,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Großes Ultrafestival mit Distanzen von 300 bis 2.600 km."},
{n:"Northcape–Tarifa",u:"https://www.northcape-tarifa.com/",d:"2028-06-20",tbc:true,city:"Nordkap → Tarifa",cc:"NO",land:"Norwegen",cont:"Europa",km:7400,hm:80000,surf:"asfalt",bike:["race"],fmt:"self",note:"Vom Kopf Europas bis zur Südspitze; auch Varianten mit 1.700, 4.000 und 5.300 km. Alle zwei Jahre: nächste Ausgabe 2028."},
{n:"Styrkeprøven",u:"https://styrkeproven.no/",d:"2027-06-18",city:"Trondheim → Oslo",cc:"NO",land:"Norwegen",cont:"Europa",km:540,hm:null,surf:"asfalt",bike:["race"],fmt:"tour",note:"Norwegischer Klassiker seit 1967: 540 km in einem Rutsch nach Oslo."},
{n:"Monaco di Baviera Classic",u:"https://ultracyclingchallenges.com/monaco-di-baviera-classic",d:"2027-06-19",tbc:true,city:"München (halbfreie Route)",cc:"DE",land:"Deutschland",cont:"Europa",km:1300,hm:23550,surf:"asfalt",bike:["race"],fmt:"self",note:"Halbfreie Route über 20 Alpenpässe; die Lite-Version (840 km) startet am 4. Juni."},
{n:"BC Epic 1000",u:"https://www.bcepic1000.com/",d:"2027-06-26",tbc:true,city:"Merritt → Fernie (British Columbia)",cc:"CA",land:"Kanada",cont:"Nordamerika",km:1000,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"British Columbia über alte Bahntrassen und Trails."},
{n:"Race Around Poland",u:"https://racearoundpoland.pl/",d:"2027-06-26",city:"Runde durch Polen",cc:"PL",land:"Polen",cont:"Europa",km:3600,hm:33000,surf:"asfalt",bike:["race"],fmt:"self",note:"Große Runde durch Polen; mit Unsupported- und Supported-Kategorien."},
{n:"Three Peaks Bike Race",u:"https://www.adventurebikeracing.com/threepeaksbikerace/",d:"2027-07-03",city:"Wenen → finish aan zee",cc:"AT",land:"Österreich",cont:"Europa",km:2300,hm:30000,surf:"asfalt",bike:["race"],fmt:"self",note:"Freie Routenwahl über drei ikonische Checkpoints Richtung Süden."},
{n:"Vistula 1200",u:"https://wisla1200.pl/",d:"2027-07-03",tbc:true,city:"Langs de Wisła, Polen",cc:"PL",land:"Polen",cont:"Europa",km:1200,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Der Weichsel folgen, von den Bergen bis ans Meer."},
{n:"The Bright Midnight",u:"https://brightmidnight.cc/",d:"2027-07-04",city:"Lofoten, Noorwegen",cc:"NO",land:"Norwegen",cont:"Europa",km:1100,hm:20000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Schotter unter der Mitternachtssonne, nördlich des Polarkreises."},
{n:"1000 Miles Adventure",u:"https://www.1000miles.cz/en",d:"2027-07-04",tbc:true,city:"Slowakije → Tsjechië",cc:"SK",land:"Slowakei",cont:"Europa",km:1600,hm:36000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Quer durch die Slowakei und Tschechien; wähle die North- oder South-Route."},
{n:"Race Across Czechia",u:"https://ultrabikers.eu/",d:"2027-07-08",tbc:true,city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:1100,hm:13000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Schotter durch ganz Tschechien; auch eine 800-km-Variante."},
{n:"Pan Celtic Ultra",u:"https://www.pancelticrace.com/",d:"2027-07-10",city:"Conwy, Wales",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:2300,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Keltische Küsten und Pässe; Route ±2.300 km, wechselt jede Ausgabe."},
{n:"Transcontinental Race No13",u:"https://www.lostdot.cc/",d:"2027-07-18",tbc:true,city:"Europa (Route folgt)",cc:"EU",land:"Mehrere Länder",cont:"Europa",km:5000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Der Klassiker unter den Straßen-Ultras: freie Route quer durch Europa, ±4.000–5.000 km. Start, Ziel und Checkpoints von No13 werden später bekanntgegeben."},
{n:"NorthCape4000",u:"https://www.northcape4000.com/",d:"2027-07-24",city:"Rovereto oder Berlin → Nordkap",cc:"IT",land:"Italien",cont:"Europa",km:4000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Von Italien zum Nordkap auf fester Route; großes internationales Starterfeld. Start 2027 in Rovereto (24. Juli) oder Berlin (29. Juli)."},
{n:"Basajaun",u:"https://www.transiberica.club/basajaun/",d:"2027-07-25",city:"Vitoria-Gasteiz, Baskenland",cc:"ES",land:"Spanien",cont:"Europa",km:780,hm:15000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Baskische Wälder, Pyrenäen-Ausläufer und die Halbwüste der Bardenas."},
{n:"Slovakia Divide",u:"https://classic.slovakiadivide.sk/",d:"2027-07-31",tbc:true,city:"Slowakije",cc:"SK",land:"Slowakei",cont:"Europa",km:650,hm:15000,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Classic 650, Gravel 790 oder Hardline 950 km (Start 31. Juli)."},
{n:"Utrecht Ultra XL",u:"https://utrechtultra.com/utrechtultraxl/",d:"2027-08-01",tbc:true,city:"Utrecht",cc:"NL",land:"Niederlande",cont:"Europa",km:1000,hm:14000,surf:"asfalt",bike:["race"],fmt:"self",note:"XL-Ausgabe mit deutlich mehr Kletterei Richtung Ardennen und Eifel."},
{n:"Mother North",u:"https://www.mother-north.com/",d:"2027-08-01",city:"Noorwegen",cc:"NO",land:"Norwegen",cont:"Europa",km:1100,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Fjorde, Hochebenen und endloser norwegischer Schotter."},
{n:"Colorado Trail Race",u:"https://bikepacking.com/event/2026-colorado-trail-race-ctr/",d:"2027-08-01",tbc:true,city:"Waterton Canyon → Durango",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:850,hm:21000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Singletrail-Monster in großer Höhe entlang des Colorado Trail."},
{n:"Carpatia Divide",u:"https://kolarstwoprzygodowe.pl/en/carpatia-divide-2/",d:"2027-08-07",city:"Poolse Karpaten",cc:"PL",land:"Polen",cont:"Europa",km:600,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"600 km mit 20.000 Höhenmetern — steiler wird es selten."},
{n:"Race Around Austria",u:"https://www.racearoundaustria.at/",d:"2027-08-11",tbc:true,city:"St. Georgen im Attergau (Runde durch Österreich)",cc:"AT",land:"Österreich",cont:"Europa",km:2200,hm:30000,surf:"asfalt",bike:["race"],fmt:"sup",note:"Supported-Runde durch Österreich; die Challenge-Version (560 km) startet am 10. August."},
{n:"West Carpathian Challenge",u:"https://westcarpathianchallenge.sk/",d:"2027-08-11",tbc:true,city:"Slowakije",cc:"SK",land:"Slowakei",cont:"Europa",km:600,hm:13500,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Kompakt, aber zäh: die Westkarpaten offroad."},
{n:"Silk Road Mountain Race",u:"https://www.themountainraces.cc/silk-road-mountain-race",d:"2027-08-14",tbc:true,city:"Kirgizië",cc:"KG",land:"Kirgisistan",cont:"Asien",km:1900,hm:28000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Das Härteste, was Bikepacking zu bieten hat: Hochgebirge, Flussdurchquerungen und Jurtencamps."},
{n:"GBDURO",u:"https://www.theracingcollective.com/gbduro.html",d:"2027-08-14",tbc:true,city:"Land's End → John o' Groats",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:2000,hm:null,surf:"gemengd",bike:["gravel"],fmt:"stage",note:"In vier Etappen offroad durch Großbritannien; Anmeldung per Los."},
{n:"Polska 3200",u:"https://www.polishbiketour.pl/",d:"2028-08-12",tbc:true,city:"Gliwice (Runde durch Polen)",cc:"PL",land:"Polen",cont:"Europa",km:3200,hm:30000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Riesige Gravelrunde durch Polen. Nächste Ausgabe 2028."},
{n:"Kõkõva",u:"https://www.panepanepane.ee/k6k6va",d:"2027-08-14",tbc:true,city:"Südestland",cc:"EE",land:"Estland",cont:"Europa",km:900,hm:3300,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Flaches, schnelles und waldreiches Baltikum-Graveln; auch eine 500-km-Version."},
{n:"Alaska Divide",u:"https://alaskadivide.com/",d:"2027-08-14",city:"Alaska",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:1700,hm:17700,surf:"onverhard",bike:["gravel","mtb"],fmt:"self",note:"Wildnis-Ultra durch Alaska — Bären inklusive."},
{n:"Trendy Lakes Challenge",u:"https://ultrabikers.eu/",d:"2027-08-19",tbc:true,city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:1100,hm:16000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"850 oder 1.100 km entlang tschechischer Seen."},
{n:"Around the Republic",u:"https://www.okolorepubliky.cz/en/",d:"2027-08-21",tbc:true,city:"Runde durch Tschechien",cc:"CZ",land:"Tschechien",cont:"Europa",km:1500,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"850 oder 1.500 km rund um die Tschechische Republik."},
{n:"Sneak Peaks",u:"https://www.orbit360.cc/sneak-peaks",d:"2027-08-25",tbc:true,city:"Italiaanse Alpen",cc:"IT",land:"Italien",cont:"Europa",km:1100,hm:40000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Orbit360-Serie: Adventure 1.100, Classic 800 oder Entree 500 km. Höhenmeter im Überfluss."},
{n:"Badlands",u:"https://badlands.cc/",d:"2027-09-05",city:"Granada, Andalusien",cc:"ES",land:"Spanien",cont:"Europa",km:800,hm:16000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Europas beliebtester Gravel-Ultra: die Wüste von Gorafe, Cabo de Gata und die Sierra Nevada."},
{n:"Torino–Nice Rally",u:"https://torino-nice.weebly.com/",d:"2027-09-01",tbc:true,city:"Turin → Nizza",cc:"IT",land:"Italien",cont:"Europa",km:700,hm:null,surf:"gemengd",bike:["gravel"],fmt:"rally",note:"Kein Rennen, sondern eine Rallye über legendäre Schotterpässe; 2026 keine offizielle Ausgabe und für 2027 noch nichts bekannt. Die Route ist frei befahrbar."},
{n:"Alps Divide",u:"https://alpsdivide.com/",d:"2027-09-04",tbc:true,city:"Franse Alpen",cc:"FR",land:"Frankreich",cont:"Europa",km:1050,hm:32000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Durch die französischen Alpen vom See bis zum Meer."},
{n:"Bohemian Border Bash Race",u:"https://www.borderbash.cc/",d:"2027-09-11",tbc:true,city:"Runde durch Böhmen",cc:"CZ",land:"Tschechien",cont:"Europa",km:1300,hm:22000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Entlang der Grenzen Böhmens; rau, waldreich und überraschend hart."},
{n:"2-Continents Adventure",u:"https://2-continents.com/",d:"2027-09-19",tbc:true,city:"Spanje → Marokko",cc:"ES",land:"Spanien",cont:"Europa",km:4000,hm:52000,surf:"gemengd",bike:["gravel","race"],fmt:"self",note:"Zwei Kontinente in einem Rennen; Gravel- (4.000 km) und Straßenvariante (4.250 km)."},
{n:"Trans Pyrenees Race",u:"https://www.lostdot.cc/tpr",d:"2027-09-24",tbc:true,city:"Pyrenäen, von Küste zu Küste",cc:"FR",land:"Frankreich",cont:"Europa",km:1500,hm:30000,surf:"asfalt",bike:["race"],fmt:"self",note:"Das Herbstrennen von Lost Dot über die großen Pyrenäenpässe; ±1.500 km."},
{n:"Bohemia Divide",u:"https://bohemiadivide.wixsite.com/english",d:"2027-09-25",tbc:true,city:"Tsjechië",cc:"CZ",land:"Tschechien",cont:"Europa",km:800,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Klassische tschechische Divide-Route."},
{n:"Iberian Road",u:"https://graval.cc/iberian-road/",d:"2027-10-06",tbc:true,city:"Spanje",cc:"ES",land:"Spanien",cont:"Europa",km:1000,hm:13000,surf:"asfalt",bike:["race"],fmt:"self",note:"Spanischer Straßen-Ultra in der Nachsaison."},
{n:"The Rhino Run",u:"https://www.rhino-run.com/",d:"2027-10-11",tbc:true,city:"Windhoek → Graaff-Reinet",cc:"NA",land:"Namibia",cont:"Afrika",km:3050,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Von Windhoek durch Wüste, Winelands und Karoo nach Südafrika."},
{n:"HolyLand Challenge",u:"https://holylandmtbchallenge.com/",d:"2026-10-15",city:"Israël, noord → zuid",cc:"IL",land:"Israel",cont:"Asien",km:1450,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Vom Golan bis zum Roten Meer; auch Nord- (700) und Südhälfte (750 km)."},
{n:"Arizona Trail Race",u:"https://bikepacking.com/event/2026-arizona-trail-race-aztr/",d:"2026-10-15",city:"Mexicaanse grens → Utah",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:1300,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"800 Meilen AZT inklusive Grand-Canyon-Durchquerung mit dem Rad auf dem Rücken; auch eine 300-Meilen-Version."},
{n:"Taurus Mountain Race",u:"https://www.themountainraces.cc/taurus-mountain-race",d:"2026-10-16",city:"Taurusgebergte, Turkije",cc:"TR",land:"Türkei",cont:"Asien",km:1400,hm:35000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Jüngstes Mitglied der Mountain Races, durch das türkische Taurusgebirge."},
{n:"Paris–Brest–Paris",u:"https://www.paris-brest-paris.org/",d:"2027-08-22",city:"Rambouillet → Brest → Rambouillet",cc:"FR",land:"Frankreich",cont:"Europa",km:1200,hm:12000,surf:"asfalt",bike:["race"],fmt:"brevet",note:"Die Mutter aller Brevets, alle vier Jahre; Qualifikation über die BRM-Serie. Nächste Ausgabe: August 2027."},
{n:"The Japanese Odyssey",u:"https://japanese-odyssey.com/",d:"2027-10-01",tbc:true,city:"Japan",cc:"JP",land:"Japan",cont:"Asien",km:2400,hm:null,surf:"gemengd",bike:["race","gravel"],fmt:"self",note:"Ultra-Abenteuer durch die japanischen Berge; nächste Ausgabe 2027, Details folgen."},
{n:"Peninsular Divide",u:"https://peninsulardivide.com/",d:"2026-10-18",tbc:true,city:"Johor",cc:"MY",land:"Malaysia",cont:"Asien",km:1500,hm:null,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Quer über die Malaiische Halbinsel, auf Asphalt und unbefestigten Wegen."},
{n:"The Great Southeastern Loop",u:"https://www.greatsoutheasternloop.com.au/",d:"2026-10-25",tbc:true,city:"Wollongong (NSW)",cc:"AU",land:"Australien",cont:"Ozeanien",km:1263,hm:null,surf:"gemengd",bike:["gravel"],fmt:"tour",note:"Runde durch den Südosten von New South Wales, auf Asphalt und Schotter."},
{n:"TransEcuador",u:"https://www.bikepackingecuador.com/transecuador",d:"2026-10-31",tbc:true,city:"Quito",cc:"EC",land:"Ecuador",cont:"Südamerika",km:630,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Durch die Anden Ecuadors: hoch, steil und größtenteils unbefestigt."},
{n:"Iceni 360",u:"https://www.allpaceraces.com/e/iceni-360-15246",d:"2026-10-31",tbc:true,city:"Suffolk",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:580,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelrunde ab Suffolk in Ostengland: wenig Höhenmeter, viele Kilometer."},
{n:"Death Road Mountain Race",u:"https://www.andeanraid.com/en",d:"2026-11-02",tbc:true,city:"La Paz",cc:"BO",land:"Bolivia",cont:"Südamerika",km:440,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Über die berüchtigte Death Road und hohe Andenpässe rund um La Paz."},
{n:"Battle of the Strait",u:"https://battleofthestrait.cc/",d:"2026-11-21",tbc:true,city:"Südspanien → Marokko",cc:"ES",land:"Mehrere Länder",cont:"Europa",km:1200,hm:null,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Rennen über zwei Kontinente: durch Südspanien und per Schiff über die Straße von Gibraltar nach Marokko."},
{n:"Across Andes Volcano",u:"https://acrossandes.cc/",d:"2026-11-22",tbc:true,city:"Pucón",cc:"CL",land:"Chile",cont:"Südamerika",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Vorbei an Vulkanen und Seen im Süden Chiles."},
{n:"Race the Nile",u:"https://www.racethenile.com/",d:"2026-11-23",tbc:true,city:"Arua",cc:"UG",land:"Uganda",cont:"Afrika",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrennen durch Uganda, entlang des Nils."},
{n:"Tour Aotearoa",u:"http://www.touraotearoa.nz/p/home.html",d:"2027-02-17",tbc:true,city:"Cape Reinga → Bluff",cc:"NZ",land:"Neuseeland",cont:"Ozeanien",km:3000,hm:null,surf:"gemengd",bike:["gravel","mtb"],fmt:"brevet",note:"Ganz Neuseeland von Nord nach Süd, auf Radwegen, Schotter und Asphalt."},
{n:"Final Frontier Patagonia",u:"https://www.finalfrontierpatagonia.com/en/",d:"2027-03-06",tbc:true,city:"Südpatagonien",cc:"CL",land:"Chile",cont:"Südamerika",km:3000,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrennen durch Patagonien, mit Distanzen von 790 bis 3.000 km."},
{n:"East Texas Showdown",u:"https://texasshowdownseries.com/east-texas-showdown/",d:"2027-03-11",tbc:true,city:"Osttexas",cc:"US",land:"Vereinigte Staaten",cont:"Nordamerika",km:644,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelfahrt durch die Wälder von Osttexas, auch 257 und 450 km."},
{n:"El Sur",u:"https://www.lesperitdelbikepacking.org/el-sur",d:"2027-03-14",tbc:true,city:"Málaga",cc:"ES",land:"Spanien",cont:"Europa",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrennen durch Südspanien, ab Málaga."},
{n:"Trail of the Southern Oasis",u:"https://morocco-bikeadventure.com/",d:"2027-03-21",tbc:true,city:"Nador",cc:"MA",land:"Marokko",cont:"Afrika",km:1950,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Vom Mittelmeer zu den Oasen der Sahara auf Pisten; es gibt auch eine Asphaltversion mit 2.060 km."},
{n:"GranGuanche Audax Trail",u:"https://outerdetours.com/granguanche/Audax-trail/",d:"2027-03-28",tbc:true,city:"Kanarische Inseln",cc:"ES",land:"Spanien",cont:"Europa",km:900,hm:null,surf:"onverhard",bike:["mtb"],fmt:"brevet",note:"Offroad-Variante der GranGuanche: Inselhüpfen auf rauen Pfaden."},
{n:"Seven Serpents: Illyrian Loop",u:"https://www.seven-serpents.com/illyrian-loop/",d:"2027-04-01",tbc:true,city:"Shkodër",cc:"AL",land:"Albanien",cont:"Europa",km:650,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Runde durch die Berge Nordalbaniens, ab Shkodër."},
{n:"Race Across South Africa",u:"https://www.freedomchallenge.org.za/rasa",d:"2027-04-05",tbc:true,city:"Byrne",cc:"ZA",land:"Südafrika",cont:"Afrika",km:1960,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Hartes Mountainbike-Rennen quer durch Südafrika, Teil der Freedom Challenge."},
{n:"Norfolk 360",u:"https://www.allpaceraces.com/",d:"2027-04-10",tbc:true,city:"Norfolk",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:580,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelrunde durch das flache Norfolk in Ostengland."},
{n:"Del Fuego",u:"https://www.delfuegorace.com/",d:"2027-04-10",tbc:true,city:"Puerto Natales",cc:"CL",land:"Chile",cont:"Südamerika",km:1050,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrennen in Patagonien, auch in kürzeren Versionen mit 170 und 250 km."},
{n:"Desertus Bikus",u:"https://desertusbikus.com/en/",d:"2027-04-10",tbc:true,city:"Baskenland",cc:"ES",land:"Spanien",cont:"Europa",km:1300,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Vom Baskenland durch die trockenen, wüstenartigen Ebenen Spaniens."},
{n:"La Garba Gravel",u:"https://sbhotelslagarba.com/en/",d:"2027-04-16",tbc:true,city:"Ebrodelta",cc:"ES",land:"Spanien",cont:"Europa",km:500,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelwochenende im Ebrodelta, mit Distanzen von 80 bis 500 km."},
{n:"Atacama Spirits Gravel Race",u:"https://atacamaspirits.com/gravelrace/",d:"2027-04-18",tbc:true,city:"Taltal",cc:"CL",land:"Chile",cont:"Südamerika",km:650,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrennen durch die Atacama, die trockenste Wüste der Welt."},
{n:"Heading East",u:"https://heading-east.com/",d:"2027-04-23",city:"Zalk",cc:"NL",land:"Niederlande",cont:"Europa",km:600,hm:null,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Self-supported 600 km ab Zalk durch Wälder, Heide und Hügel in den Niederlanden und Deutschland, mit Kontrollpunkten bei 200 und 400 km."},
{n:"The Traka 560",u:"https://www.thetraka.com/",d:"2027-04-30",tbc:true,city:"Girona",cc:"ES",land:"Spanien",cont:"Europa",km:560,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Die lange Distanz von The Traka, dem großen Gravelfestival in Girona (auch 100 bis 360 km)."},
{n:"La Gravel Tro Breizh",u:"https://erminig.cc/epreuves/la-gravel-tro-breizh/",d:"2027-05-01",tbc:true,city:"Lac de Trémelin (Bretagne)",cc:"FR",land:"Frankreich",cont:"Europa",km:1300,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Eine Runde durch die Bretagne auf Schotter und Pfaden."},
{n:"Veneto Gravel",u:"https://venetogravel.it/",d:"2027-05-07",tbc:true,city:"Bassano del Grappa",cc:"IT",land:"Italien",cont:"Europa",km:720,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelfahrt durch Venetien, auch 200 und 400 km."},
{n:"MittelgebirgeClassique",u:"http://mittelgebirgeclassique.cc/",d:"2027-05-08",tbc:true,city:"Neustadt an der Weinstraße",cc:"DE",land:"Deutschland",cont:"Europa",km:1100,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Asphaltrennen durch die deutschen Mittelgebirge, mit viel Klettern."},
{n:"Grelly Adventure",u:"https://www.grelly-cycling.be/",d:"2027-05-20",city:"Belgien (Start folgt)",cc:"BE",land:"Belgien",cont:"Europa",km:825,hm:null,surf:"onverhard",bike:["gravel","mtb"],fmt:"tour",note:"Offroad-Bikepacking in Belgien in 3 oder 4 Tagen, von 375 bis 825 km. Die Ausgabe 2027 ist ausgebucht."},
{n:"Race Around Denmark",u:"https://racearounddenmark.org/",d:"2027-05-26",tbc:true,city:"Kaløvig",cc:"DK",land:"Dänemark",cont:"Europa",km:1600,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Eine Runde durch Dänemark auf Asphalt."},
{n:"Pedalma: Madrid–Barcelona",u:"https://pedalma.cc/en/mad-to-bcn/",d:"2027-05-28",tbc:true,city:"Madrid → Barcelona",cc:"ES",land:"Spanien",cont:"Europa",km:700,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Von Madrid nach Barcelona auf ruhigen Straßen durchs Landesinnere."},
{n:"Peaks and Plains",u:"http://www.peaksandplains.cc/",d:"2027-05-28",tbc:true,city:"Magdeburg",cc:"DE",land:"Deutschland",cont:"Europa",km:550,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Asphaltrennen ab Magdeburg durch Mitteldeutschland."},
{n:"Aethelred Ultra",u:"https://www.aethelredultra.com/",d:"2027-05-29",tbc:true,city:"Salisbury",cc:"GB",land:"Vereinigtes Königreich",cont:"Europa",km:600,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelrennen auf alten Wegen in Südengland, ab Salisbury."},
{n:"Balutia",u:"https://balutia.com/",d:"2027-05-30",tbc:true,city:"Pozoblanco (Córdoba)",cc:"ES",land:"Spanien",cont:"Europa",km:870,hm:null,surf:"onverhard",bike:["gravel"],fmt:"tour",note:"Gravelrunde durch Andalusien, ab Pozoblanco."},
{n:"Nordic Chase BER–CPH Gravel",u:"https://nordicchase.com/",d:"2027-06-04",tbc:true,city:"Berlin → Kopenhagen",cc:"DE",land:"Mehrere Länder",cont:"Europa",km:740,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelversion von Berlin nach Kopenhagen; es gibt auch eine Asphaltversion. Teil der Nordic-Chase-Serie."},
{n:"Kromvojoj",u:"https://www.kromvojoj.cc/en/",d:"2027-06-05",tbc:true,city:"Alforja (Katalonien)",cc:"ES",land:"Spanien",cont:"Europa",km:1335,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Asphaltrennen durch die Berge Kataloniens, auch 885 km."},
{n:"Nordic Chase CPH–OSL Gravel",u:"https://nordicchase.com/",d:"2027-06-18",tbc:true,city:"Kopenhagen → Oslo",cc:"DK",land:"Mehrere Länder",cont:"Europa",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelversion von Kopenhagen nach Oslo; es gibt auch eine Asphaltversion. Teil der Nordic-Chase-Serie."},
{n:"45-SouthWest",u:"https://45southwest.com/",d:"2027-06-20",tbc:true,city:"Krakau",cc:"PL",land:"Polen",cont:"Europa",km:4384,hm:null,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Sehr langes All-Road-Rennen ab Krakau, mit Routen von 1.888, 3.952 und 4.384 km."},
{n:"Andean Raid",u:"https://www.andeanraid.com/en",d:"2027-06-24",tbc:true,city:"Cusco",cc:"PE",land:"Peru",cont:"Südamerika",km:450,hm:null,surf:"onverhard",bike:["gravel","mtb"],fmt:"self",note:"Gravelrennen durch die Anden rund um Cusco, in großer Höhe."},
{n:"MountainPilgrimage Mont Ventoux",u:"https://mountainpilgrimage.de/",d:"2027-06-27",tbc:true,city:"Mont Ventoux",cc:"FR",land:"Frankreich",cont:"Europa",km:2600,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Ein 2.600-km-Asphaltrennen mit dem Mont Ventoux als Ziel."},
{n:"Nordic Chase AMS–CPH",u:"https://nordicchase.com/",d:"2027-08-06",tbc:true,city:"Amsterdam → Kopenhagen",cc:"NL",land:"Mehrere Länder",cont:"Europa",km:910,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Von Amsterdam nach Kopenhagen auf Asphalt. Teil der Nordic-Chase-Serie."},
{n:"Nordic Chase CPH–STO Gravel",u:"https://nordicchase.com/",d:"2027-08-20",tbc:true,city:"Kopenhagen → Stockholm",cc:"DK",land:"Mehrere Länder",cont:"Europa",km:780,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravelversion von Kopenhagen nach Stockholm; es gibt auch eine Asphaltversion. Teil der Nordic-Chase-Serie."},
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
