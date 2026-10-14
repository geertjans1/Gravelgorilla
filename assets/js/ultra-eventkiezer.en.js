/* ultra-eventkiezer — gemaakt door .claude/ultra-importeren.ps1 */
/* n=naam u=url d=startdatum tbc=datum onder voorbehoud city=start/route cc=landcode
   land, cont=werelddeel, km, hm (null=onbekend), surf: asfalt|gemengd|onverhard,
   bike:[race|gravel|mtb], fmt: self|sup|tour|rally|brevet|stage */
const EVENTS=[
{n:"Tour Te Waipounamu",u:"https://www.tourtewaipounamu.co.nz/",d:"2026-01-25",city:"Pūponga → Slope Point (South Island)",cc:"NZ",land:"New Zealand",cont:"Oceania",km:1300,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Rugged traverse of New Zealand's South Island, including long hike-a-bike sections. Entry by ballot."},
{n:"GranGuanche Audax Road",u:"https://granguanche.com/audax/",d:"2026-01-25",city:"Lanzarote → El Hierro (Canary Islands)",cc:"ES",land:"Spain",cont:"Europe",km:650,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Island hopping across five Canary Islands, ferries included. The ideal winter ultra."},
{n:"Race Around Rwanda",u:"https://racearoundrwanda.com/",d:"2026-02-01",city:"Kigali (loop through Rwanda)",cc:"RW",land:"Rwanda",cont:"Africa",km:1000,hm:17000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Gravel and tarmac through the land of a thousand hills."},
{n:"Atlas Mountain Race",u:"https://www.themountainraces.cc/atlas-mountain-race",d:"2026-02-06",city:"Marrakesh → Essaouira",cc:"MA",land:"Morocco",cont:"Africa",km:1300,hm:25000,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Freezing nights, scorching days: the winter classic through the Atlas and Anti-Atlas."},
{n:"Transcordilleras",u:"https://transcordilleras.cc/",d:"2026-02-22",city:"Choachí, Colombiaanse Andes",cc:"CO",land:"Colombia",cont:"South America",km:965,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"stage",note:"Eight stages of bikepacking over the three cordilleras of the Colombian Andes."},
{n:"Indian Pacific Wheel Ride",u:"https://www.indianpacificwheelrace.com/",d:"2026-03-21",city:"Fremantle → Sydney",cc:"AU",land:"Australia",cont:"Oceania",km:5500,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Across the Australian continent, including the notorious bare Nullarbor Plain."},
{n:"GranGuanche Audax Gravel",u:"https://granguanche.com/audax/",d:"2026-03-22",city:"Lanzarote → El Hierro (Canary Islands)",cc:"ES",land:"Spain",cont:"Europe",km:800,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel version of the island hopping: volcanic trails, five islands, ferries."},
{n:"Borderline 700",u:"https://borderline700.com/",d:"2026-04-03",city:"Netherlands (border route)",cc:"NL",land:"Netherlands",cont:"Europe",km:700,hm:5000,surf:"asfalt",bike:["race"],fmt:"self",note:"Self-supported race along the Dutch border region — surprisingly much climbing."},
{n:"The Two Volcano Sprint",u:"https://www.twovolcanosprint.com/",d:"2026-04-26",city:"Southern Italy (Etna ↔ Vesuvius)",cc:"IT",land:"Italy",cont:"Europe",km:1100,hm:24000,surf:"asfalt",bike:["race"],fmt:"self",note:"From volcano to volcano: short, steep and vicious through southern Italy."},
{n:"Race Across Italy",u:"https://raceacrossitaly.com/",d:"2026-04-30",city:"Silvi (coast to coast)",cc:"IT",land:"Italy",cont:"Europe",km:775,hm:null,surf:"asfalt",bike:["race"],fmt:"sup",note:"Non-stop coast to coast with a support car; also a 300 km version. A classic of supported ultra racing."},
{n:"Italy Divide",u:"https://www.italydivide.it/",d:"2026-04-30",city:"Napels → Gardameer",cc:"IT",land:"Italy",cont:"Europe",km:1250,hm:22000,surf:"gemengd",bike:["gravel","mtb"],fmt:"self",note:"Three versions (700, 1,250 or 1,650 km) from south to north: trails, gravel and lots of Italy."},
{n:"Graval Road",u:"https://graval.cc/graval-road/",d:"2026-05-01",city:"Spanje",cc:"ES",land:"Spain",cont:"Europe",km:600,hm:11000,surf:"asfalt",bike:["race"],fmt:"self",note:"Compact Spanish road ultra: 600 km with 11,000 m of climbing."},
{n:"Montenegro Mountain Madness",u:"https://montenegromountainmadness.com/",d:"2026-05-01",city:"Montenegro",cc:"ME",land:"Montenegro",cont:"Europe",km:700,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Small country, big suffering: mountain trails through the Dinaric Alps."},
{n:"May Divide",u:"https://bike-paradise.cz/",d:"2026-05-01",city:"Tsjechië",cc:"CZ",land:"Czechia",cont:"Europe",km:850,hm:13000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"MTB bikepacking through Czech forests and ridges."},
{n:"Race around the Netherlands",u:"https://www.adventurebikeracing.com/ratn/",d:"2026-05-02",city:"Amerongen (loop of the Netherlands)",cc:"NL",land:"Netherlands",cont:"Europe",km:1950,hm:7000,surf:"gemengd",bike:["race","gravel"],fmt:"self",note:"The Dutch ultra adventure: 1,950 km along the edges of the country, with gravel sections."},
{n:"Highland Trail 550",u:"https://highlandtrail550.weebly.com/",d:"2026-05-09",city:"Tyndrum, Schotland",cc:"GB",land:"United Kingdom",cont:"Europe",km:550,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"The Scottish Highlands at their rawest; a cult classic without an entry fee."},
{n:"Race Through Slovakia",u:"https://rtsk.cc/",d:"2026-05-09",city:"Slowakije",cc:"SK",land:"Slovakia",cont:"Europe",km:1000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Road ultra right across Slovakia."},
{n:"The Accursed Race",u:"https://www.lostdot.cc/race-brand/the-accursed-race",d:"2026-05-12",city:"Shkodër (Balkan loop)",cc:"AL",land:"Albania",cont:"Europe",km:1600,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Off-road epic by Lost Dot through the Accursed Mountains and several Balkan countries."},
{n:"Seven Serpents · Quick Bite!",u:"https://www.seven-serpents.com/",d:"2026-05-17",city:"Slovenië",cc:"SI",land:"Slovenia",cont:"Europe",km:500,hm:10000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Entry-level version of Seven Serpents: 500 km of Slovenian-Croatian gravel."},
{n:"Tuscany Trail",u:"https://www.tuscanytrail.it/",d:"2026-05-20",city:"Campiglia Marittima, Toscane",cc:"IT",land:"Italy",cont:"Europe",km:460,hm:null,surf:"onverhard",bike:["gravel","mtb"],fmt:"tour",note:"The biggest bikepacking event in the world: not a race, but thousands of participants and strade bianche."},
{n:"Utrecht Ultra",u:"https://utrechtultra.com/",d:"2026-05-23",city:"Utrecht",cc:"NL",land:"Netherlands",cont:"Europe",km:1000,hm:6000,surf:"asfalt",bike:["race"],fmt:"self",note:"1,000 km from Utrecht across the border and back; a fast, social Dutch ultra scene."},
{n:"Hellenic Mountain Race",u:"https://www.themountainraces.cc/hellenic-mountain-race",d:"2026-05-23",city:"Agios Athanasios, Pindos",cc:"GR",land:"Greece",cont:"Europe",km:870,hm:27000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Little sister of Atlas & Silk Road, through the Greek Pindus mountains."},
{n:"Race Through Poland",u:"https://racethroughpoland.pl/",d:"2026-05-23",city:"Polen",cc:"PL",land:"Poland",cont:"Europe",km:1800,hm:27000,surf:"asfalt",bike:["race"],fmt:"self",note:"1,800 km of road between the Baltic Sea and the Tatras."},
{n:"Unbound XL",u:"https://www.unboundgravel.com/",d:"2026-05-29",city:"Emporia, Kansas",cc:"US",land:"United States",cont:"North America",km:560,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Night start in the Flint Hills: the ultra version of the world's best-known gravel race."},
{n:"Trans Balkan Race",u:"https://www.transbalkanrace.com/",d:"2026-05-29",city:"Slovenia (Balkan traverse)",cc:"SI",land:"Slovenia",cont:"Europe",km:1400,hm:30000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"MTB traverse along the spine of the Dinaric Alps."},
{n:"Moravia Divide",u:"https://ultrabikers.eu/",d:"2026-05-29",city:"Moravië, Tsjechië",cc:"CZ",land:"Czechia",cont:"Europe",km:800,hm:13000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Off-road bikepacking through Moravia."},
{n:"Lost Ride",u:"https://lost-ride.cz/",d:"2026-06-02",city:"Tsjechië",cc:"CZ",land:"Czechia",cont:"Europe",km:750,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Technical and steep: lots of climbing per kilometre."},
{n:"Trans Am Bike Nonstop",u:"https://rideyrbike.com/TABNS2026",d:"2026-06-07",city:"Astoria (OR) → Yorktown (VA)",cc:"US",land:"United States",cont:"North America",km:6800,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"The TransAmerica route non-stop from west to east; successor of the Trans Am Bike Race."},
{n:"Seven Serpents",u:"https://www.seven-serpents.com/",d:"2026-06-07",city:"Slovenië → Kroatië",cc:"SI",land:"Slovenia",cont:"Europe",km:1000,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Seven mountain ridges between the Alps and the Adriatic Sea."},
{n:"Hydra Epic",u:"https://hydra.epas.cc/",d:"2026-06-08",city:"Polen",cc:"PL",land:"Poland",cont:"Europe",km:1800,hm:15000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Long off-road loop through Poland."},
{n:"Toulání Šumavou",u:"https://www.toulanisumavou.cz/",d:"2026-06-09",city:"Šumava (Bohemian Forest)",cc:"CZ",land:"Czechia",cont:"Europe",km:850,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"550 or 850 km of roaming through the Bohemian Forest."},
{n:"Ultralajkonik",u:"https://ultralajkonik.pl/",d:"2026-06-12",city:"Krakau",cc:"PL",land:"Poland",cont:"Europe",km:1000,hm:25000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel ultra from Kraków; also a 500 km version."},
{n:"Tour Divide",u:"https://tourdivide.org/",d:"2026-06-12",city:"Banff → Antelope Wells",cc:"CA",land:"Canada",cont:"North America",km:4400,hm:61000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"The halo event of bikepacking: the Great Divide from Canada to the Mexican border."},
{n:"Hope 1000",u:"https://www.hope1000.ch/",d:"2026-06-13",city:"Romanshorn → Montreux",cc:"CH",land:"Switzerland",cont:"Europe",km:1000,hm:31000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Switzerland from east to west, over alpine meadows and mountain passes."},
{n:"Taunus Bikepacking",u:"https://taunus-bikepacking.com/",d:"2026-06-14",city:"Taunus, Duitsland",cc:"DE",land:"Germany",cont:"Europe",km:1000,hm:20000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Big loop through the Taunus and surroundings; a friendly German bikepacking scene."},
{n:"Race Across America (RAAM)",u:"https://www.raceacrossamerica.org/",d:"2026-06-16",city:"Oceanside → Atlantic City",cc:"US",land:"United States",cont:"North America",km:4800,hm:53000,surf:"asfalt",bike:["race"],fmt:"sup",note:"The legend: non-stop with a support crew, 3,000 miles through 13 states. Teams start on 20 June."},
{n:"Race Across France",u:"https://www.raceacrossseries.com/",d:"2026-06-18",city:"Mandelieu-la-Napoule",cc:"FR",land:"France",cont:"Europe",km:2600,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Big ultra festival with distances from 300 to 2,600 km."},
{n:"Northcape–Tarifa",u:"https://www.northcape-tarifa.com/",d:"2026-06-19",city:"Noordkaap → Tarifa",cc:"NO",land:"Norway",cont:"Europe",km:7400,hm:80000,surf:"asfalt",bike:["race"],fmt:"self",note:"From the top of Europe to its southern tip; also 1,700, 4,000 and 5,300 km versions."},
{n:"Styrkeprøven",u:"https://styrkeproven.no/",d:"2026-06-20",city:"Trondheim → Oslo",cc:"NO",land:"Norway",cont:"Europe",km:540,hm:null,surf:"asfalt",bike:["race"],fmt:"tour",note:"Norwegian classic since 1967: 540 km in one go to Oslo."},
{n:"Monaco di Baviera Classic",u:"https://ultracyclingchallenges.com/monaco-di-baviera-classic",d:"2026-06-20",city:"Munich (semi-free route)",cc:"DE",land:"Germany",cont:"Europe",km:1300,hm:23550,surf:"asfalt",bike:["race"],fmt:"self",note:"Semi-free route over 20 alpine passes; the Lite version (840 km) starts on 4 June."},
{n:"BC Epic 1000",u:"https://www.bcepic1000.com/",d:"2026-06-27",city:"Merritt → Fernie (British Columbia)",cc:"CA",land:"Canada",cont:"North America",km:1000,hm:null,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"British Columbia via old rail trails and singletrack."},
{n:"Race Around Poland",u:"https://racearoundpoland.pl/",d:"2026-06-27",city:"Loop of Poland",cc:"PL",land:"Poland",cont:"Europe",km:3600,hm:33000,surf:"asfalt",bike:["race"],fmt:"self",note:"Big loop of Poland; with both unsupported and supported categories."},
{n:"Three Peaks Bike Race",u:"https://www.adventurebikeracing.com/threepeaksbikerace/",d:"2026-07-04",city:"Wenen → finish aan zee",cc:"AT",land:"Austria",cont:"Europe",km:2300,hm:30000,surf:"asfalt",bike:["race"],fmt:"self",note:"Free route choice via three iconic checkpoints heading south."},
{n:"Vistula 1200",u:"https://wisla1200.pl/",d:"2026-07-04",city:"Langs de Wisła, Polen",cc:"PL",land:"Poland",cont:"Europe",km:1200,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Following the Vistula from the mountains to the sea."},
{n:"The Bright Midnight",u:"https://brightmidnight.cc/",d:"2026-07-04",city:"Lofoten, Noorwegen",cc:"NO",land:"Norway",cont:"Europe",km:1100,hm:20000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel under the midnight sun, above the Arctic Circle."},
{n:"1000 Miles Adventure",u:"https://www.1000miles.cz/en",d:"2026-07-05",city:"Slowakije → Tsjechië",cc:"SK",land:"Slovakia",cont:"Europe",km:1600,hm:36000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Right across Slovakia and Czechia; choose the North or South route."},
{n:"Race Across Czechia",u:"https://ultrabikers.eu/",d:"2026-07-09",city:"Tsjechië",cc:"CZ",land:"Czechia",cont:"Europe",km:1100,hm:13000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Gravel across all of Czechia; also an 800 km version."},
{n:"Pan Celtic Ultra",u:"https://www.pancelticrace.com/",d:"2026-07-12",city:"Conwy, Wales",cc:"GB",land:"United Kingdom",cont:"Europe",km:2300,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"Celtic coasts and cols; route ±2,300 km, changes every edition."},
{n:"Transcontinental Race No12",u:"https://www.lostdot.cc/race/tcrno12",d:"2026-07-19",city:"Trondheim → Kalamata",cc:"NO",land:"Norway",cont:"Europe",km:5000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"The classic among road ultras: free route from Norway to Greece, ±5,000 km."},
{n:"NorthCape4000",u:"https://www.northcape4000.com/",d:"2026-07-25",city:"Rovereto → Noordkaap",cc:"IT",land:"Italy",cont:"Europe",km:4000,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"From Italy to the North Cape on a fixed route; a big international field."},
{n:"Basajaun",u:"https://www.transiberica.club/basajaun/",d:"2026-07-26",city:"Vitoria-Gasteiz, Baskenland",cc:"ES",land:"Spain",cont:"Europe",km:780,hm:15000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Basque forests, Pyrenean foothills and the semi-desert of the Bardenas."},
{n:"Slovakia Divide",u:"https://classic.slovakiadivide.sk/",d:"2026-08-01",city:"Slowakije",cc:"SK",land:"Slovakia",cont:"Europe",km:650,hm:15000,surf:"onverhard",bike:["mtb","gravel"],fmt:"self",note:"Classic 650, Gravel 790 or Hardline 950 km (start 31 July)."},
{n:"Utrecht Ultra XL",u:"https://utrechtultra.com/utrechtultraxl/",d:"2026-08-01",city:"Utrecht",cc:"NL",land:"Netherlands",cont:"Europe",km:1000,hm:14000,surf:"asfalt",bike:["race"],fmt:"self",note:"XL edition with much more climbing towards the Ardennes and the Eifel."},
{n:"Mother North",u:"https://www.mother-north.com/",d:"2026-08-02",city:"Noorwegen",cc:"NO",land:"Norway",cont:"Europe",km:1100,hm:18000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Fjords, high plateaus and endless Norwegian gravel."},
{n:"Colorado Trail Race",u:"https://bikepacking.com/event/2026-colorado-trail-race-ctr/",d:"2026-08-02",city:"Waterton Canyon → Durango",cc:"US",land:"United States",cont:"North America",km:850,hm:21000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"High-altitude singletrack monster along the Colorado Trail."},
{n:"Carpatia Divide",u:"https://kolarstwoprzygodowe.pl/en/carpatia-divide-2/",d:"2026-08-08",city:"Poolse Karpaten",cc:"PL",land:"Poland",cont:"Europe",km:600,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"600 km with 20,000 m of climbing — it rarely gets steeper."},
{n:"Race Around Austria",u:"https://www.racearoundaustria.at/",d:"2026-08-12",tbc:true,city:"St. Georgen im Attergau (loop of Austria)",cc:"AT",land:"Austria",cont:"Europe",km:2200,hm:30000,surf:"asfalt",bike:["race"],fmt:"sup",note:"Supported loop of Austria; the Challenge version (560 km) starts on 10 August."},
{n:"West Carpathian Challenge",u:"https://westcarpathianchallenge.sk/",d:"2026-08-12",city:"Slowakije",cc:"SK",land:"Slovakia",cont:"Europe",km:600,hm:13500,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Compact but tough: the Western Carpathians off-road."},
{n:"Silk Road Mountain Race",u:"https://www.themountainraces.cc/silk-road-mountain-race",d:"2026-08-14",city:"Kirgizië",cc:"KG",land:"Kyrgyzstan",cont:"Asia",km:1900,hm:28000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"The toughest bikepacking has to offer: high mountains, river crossings and yurt camps."},
{n:"GBDURO",u:"https://www.theracingcollective.com/gbduro.html",d:"2026-08-15",city:"Land's End → John o' Groats",cc:"GB",land:"United Kingdom",cont:"Europe",km:2000,hm:null,surf:"gemengd",bike:["gravel"],fmt:"stage",note:"Off-road through Great Britain in four stages; entry by ballot."},
{n:"Polska 3200",u:"https://www.polishbiketour.pl/",d:"2026-08-15",city:"Gliwice (loop of Poland)",cc:"PL",land:"Poland",cont:"Europe",km:3200,hm:30000,surf:"gemengd",bike:["gravel"],fmt:"self",note:"Huge gravel loop of Poland."},
{n:"Kõkõva",u:"https://www.panepanepane.ee/k6k6va",d:"2026-08-15",city:"Zuid-Estland",cc:"EE",land:"Estonia",cont:"Europe",km:900,hm:3300,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Flat, fast and forested Baltic gravel; also a 500 km version."},
{n:"Alaska Divide",u:"https://alaskadivide.com/",d:"2026-08-16",city:"Alaska",cc:"US",land:"United States",cont:"North America",km:1700,hm:17700,surf:"onverhard",bike:["gravel","mtb"],fmt:"self",note:"Wilderness ultra through Alaska — bears included."},
{n:"Trendy Lakes Challenge",u:"https://ultrabikers.eu/",d:"2026-08-20",city:"Tsjechië",cc:"CZ",land:"Czechia",cont:"Europe",km:1100,hm:16000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"850 or 1,100 km along Czech lakes."},
{n:"Around the Republic",u:"https://www.okolorepubliky.cz/en/",d:"2026-08-22",city:"Loop of Czechia",cc:"CZ",land:"Czechia",cont:"Europe",km:1500,hm:null,surf:"asfalt",bike:["race"],fmt:"self",note:"850 or 1,500 km around the Czech Republic."},
{n:"Sneak Peaks",u:"https://www.orbit360.cc/sneak-peaks",d:"2026-08-26",city:"Italiaanse Alpen",cc:"IT",land:"Italy",cont:"Europe",km:1100,hm:40000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Orbit360 series: Adventure 1,100, Classic 800 or Entree 500 km. Climbing in abundance."},
{n:"Badlands",u:"https://badlands.cc/",d:"2026-08-30",city:"Granada, Andalusia",cc:"ES",land:"Spain",cont:"Europe",km:800,hm:16000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Europe's most popular gravel ultra: the Gorafe desert, Cabo de Gata and the Sierra Nevada."},
{n:"Torino–Nice Rally",u:"https://torino-nice.weebly.com/",d:"2026-09-01",tbc:true,city:"Turijn → Nice",cc:"IT",land:"Italy",cont:"Europe",km:700,hm:null,surf:"gemengd",bike:["gravel"],fmt:"rally",note:"Not a race but a rally over legendary gravel passes; no official edition in 2026, the route is free to ride."},
{n:"Alps Divide",u:"https://alpsdivide.com/",d:"2026-09-05",city:"Franse Alpen",cc:"FR",land:"France",cont:"Europe",km:1050,hm:32000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Through the French Alps from lake to sea."},
{n:"Bohemian Border Bash Race",u:"https://www.borderbash.cc/",d:"2026-09-05",city:"Loop of Bohemia",cc:"CZ",land:"Czechia",cont:"Europe",km:1300,hm:22000,surf:"onverhard",bike:["gravel"],fmt:"self",note:"Along the borders of Bohemia; rugged, forested and surprisingly hard."},
{n:"2-Continents Adventure",u:"https://2-continents.com/",d:"2026-09-20",city:"Spanje → Marokko",cc:"ES",land:"Spain",cont:"Europe",km:4000,hm:52000,surf:"gemengd",bike:["gravel","race"],fmt:"self",note:"Two continents in one race; gravel (4,000 km) and road version (4,250 km)."},
{n:"Trans Pyrenees Race No6",u:"https://www.lostdot.cc/tpr",d:"2026-09-25",city:"Pyreneeën, coast-to-coast",cc:"FR",land:"France",cont:"Europe",km:1500,hm:30000,surf:"asfalt",bike:["race"],fmt:"self",note:"Lost Dot's autumn race over the great Pyrenean cols; ±1,500 km."},
{n:"Bohemia Divide",u:"https://bohemiadivide.wixsite.com/english",d:"2026-09-26",city:"Tsjechië",cc:"CZ",land:"Czechia",cont:"Europe",km:800,hm:16000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Classic Czech divide route."},
{n:"Iberian Road",u:"https://graval.cc/iberian-road/",d:"2026-10-07",city:"Spanje",cc:"ES",land:"Spain",cont:"Europe",km:1000,hm:13000,surf:"asfalt",bike:["race"],fmt:"self",note:"Spanish road ultra in the late season."},
{n:"The Rhino Run",u:"https://www.rhino-run.com/",d:"2026-10-12",city:"Windhoek → Graaff-Reinet",cc:"NA",land:"Namibia",cont:"Africa",km:3050,hm:null,surf:"onverhard",bike:["gravel"],fmt:"self",note:"From Windhoek through desert, winelands and Karoo to South Africa."},
{n:"HolyLand Challenge",u:"https://holylandmtbchallenge.com/",d:"2026-10-15",city:"Israël, noord → zuid",cc:"IL",land:"Israel",cont:"Asia",km:1450,hm:20000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"From the Golan to the Red Sea; also North (700) and South half (750 km)."},
{n:"Arizona Trail Race",u:"https://bikepacking.com/event/2026-arizona-trail-race-aztr/",d:"2026-10-15",city:"Mexicaanse grens → Utah",cc:"US",land:"United States",cont:"North America",km:1300,hm:null,surf:"onverhard",bike:["mtb"],fmt:"self",note:"800 miles of AZT including a Grand Canyon crossing with the bike on your back; also a 300-mile version."},
{n:"Taurus Mountain Race",u:"https://www.themountainraces.cc/taurus-mountain-race",d:"2026-10-16",city:"Taurusgebergte, Turkije",cc:"TR",land:"Turkey",cont:"Asia",km:1400,hm:35000,surf:"onverhard",bike:["mtb"],fmt:"self",note:"Newest member of The Mountain Races, through the Turkish Taurus Mountains."},
{n:"Paris–Brest–Paris",u:"https://www.paris-brest-paris.org/",d:"2027-08-15",tbc:true,city:"Rambouillet → Brest → Rambouillet",cc:"FR",land:"France",cont:"Europe",km:1200,hm:12000,surf:"asfalt",bike:["race"],fmt:"brevet",note:"The mother of all brevets, once every four years; qualification via the BRM series. Next edition: August 2027."},
{n:"The Japanese Odyssey",u:"https://japanese-odyssey.com/",d:"2027-10-01",tbc:true,city:"Japan",cc:"JP",land:"Japan",cont:"Asia",km:2400,hm:null,surf:"gemengd",bike:["race","gravel"],fmt:"self",note:"Ultra adventure through the Japanese mountains; next edition in 2027, details to follow."},
];

const MND=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
const FMT={self:"Self-supported",sup:"Supported",tour:"Sportive",rally:"Rally",brevet:"Brevet",stage:"Stage race"};
const BIKE={race:"Race",gravel:"Gravel",mtb:"MTB"};
const SURF={asfalt:"Tarmac",gemengd:"Mixed",onverhard:"Unpaved"};
const KMB=[{id:"a",lbl:"< 750 km",f:e=>e.km<750},{id:"b",lbl:"750 – 1,500 km",f:e=>e.km>=750&&e.km<1500},{id:"c",lbl:"1,500 – 3,000 km",f:e=>e.km>=1500&&e.km<3000},{id:"d",lbl:"> 3,000 km",f:e=>e.km>=3000}];
const flag=cc=>String.fromCodePoint(...[...cc].map(c=>0x1F1E6+c.charCodeAt(0)-65));
const nf=n=>n.toLocaleString("en-GB");
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
  Object.keys(lands).sort((a,b)=>a.localeCompare(b,"en")).forEach(l=>{
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
    <div class="place">📍 ${e.city}${e.tbc?'<span class="tbc">date provisional</span>':""}</div>
    <div class="numchips"><span class="numchip">${nf(e.km)} km</span>${e.hm?`<span class="numchip hm">${nf(e.hm)} hm</span>`:""}</div>
    <div class="tags">
      <span class="tag ${e.surf}">${SURF[e.surf]}</span>
      ${e.bike.map(b=>`<span class="tag bike">${BIKE[b]}</span>`).join("")}
      <span class="tag fmt${e.fmt==="sup"?" sup":""}">${FMT[e.fmt]}</span>
    </div>
    <div class="note">${e.note}</div>
    <div class="foot">
      <a href="${e.u}" target="_blank" rel="noopener">To website ↗</a>
      ${past?'<span class="pastlabel">Past</span>':""}
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
  document.getElementById("ntxt").textContent=(list.length===1?"event":"events")+" of "+EVENTS.length;
  document.getElementById("empty").style.display=list.length?"none":"block";
}

init();
