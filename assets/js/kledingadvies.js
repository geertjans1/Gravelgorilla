/* =========================================================
   Gravel Gorilla — Kledingadvies
   Rekent een "voelt als"-temperatuur uit (weer + rit + jij) en kiest daarbij
   per lichaamsdeel de juiste kleding, plus wat er in je achterzak moet.
   Weersverwachting (optioneel) via Open-Meteo: gratis, geen account nodig.
   Teksten in drie talen: T(Nederlands, Engels, Duits), naar de taal van de pagina.
   ========================================================= */
(function () {
  const wortel = document.querySelector(".kl-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);
  const TAAL = (document.documentElement.lang || "nl").slice(0, 2);
  const T = (nl, en, de) => (TAAL === "en" ? en : TAAL === "de" ? de : nl);
  const L = a => T(a[0], a[1], a[2]);
  const KMU = T("km/u", "km/h", "km/h");

  /* ---------- Invoer ---------- */
  const S = { temp: 12, tMax: null, neerslag: "droog", wind: "weinig", duur: "middel", tempo: "stevig", gevoel: "normaal", grond: "droog" };
  const DUUR_UREN = { kort: 1.5, middel: 3, lang: 5, ultra: 8 };

  /* ---------- "Voelt als"-temperatuur ---------- */
  const CORRECTIE = {
    gevoel:   { koud: [-3, T("je hebt het snel koud", "you get cold quickly", "dir wird schnell kalt")], normaal: [0, ""], warm: [3, T("je hebt het snel warm", "you get warm quickly", "dir wird schnell warm")] },
    tempo:    { rustig: [-2, T("rustig tempo houdt je minder warm", "an easy pace keeps you less warm", "ruhiges Tempo hält dich weniger warm")], stevig: [0, ""], wedstrijd: [3, T("wedstrijdtempo maakt je warm", "race pace makes you warm", "Renntempo macht warm")] },
    wind:     { weinig: [0, ""], matig: [-2, T("matige wind koelt af", "moderate wind cools you down", "mäßiger Wind kühlt ab")], stevig: [-3, T("stevige wind koelt flink af", "strong wind cools you down a lot", "kräftiger Wind kühlt stark ab")] },
    neerslag: { droog: [0, ""], buien: [-1, T("kans op buien", "chance of showers", "Schauergefahr")], regen: [-2, T("natte kleding koelt snel af", "wet clothing cools you down fast", "nasse Kleidung kühlt schnell ab")] },
    grond:    { droog: [0, ""], nat: [-1, T("opspattend water en modder", "spray of water and mud", "Spritzwasser und Matsch")] }
  };
  function voeltAls(t) {
    let som = 0;
    const redenen = [];
    for (const veld of Object.keys(CORRECTIE)) {
      const [graden, reden] = CORRECTIE[veld][S[veld]];
      som += graden;
      if (reden) redenen.push(reden + " (" + (graden > 0 ? "+" : "") + graden + "°)");
    }
    if (DUUR_UREN[S.duur] >= 5 && t < 15) { som -= 1; redenen.push(T("lange rit: je koelt na een tijdje uit (-1°)", "long ride: you cool down after a while (-1°)", "lange Fahrt: Du kühlst mit der Zeit aus (-1°)")); }
    // niet doorslaan: alles bij elkaar hooguit 6 graden kouder of 4 graden warmer
    const begrensd = Math.max(-6, Math.min(4, som));
    if (begrensd !== som) redenen.push(T("samen hooguit ", "at most ", "zusammen höchstens ") + (begrensd > 0 ? "+" : "") + begrensd + "°" + T("", " in total", ""));
    som = begrensd;
    return { waarde: Math.round(t + som), redenen };
  }

  /* ---------- Kleding per temperatuurband ---------- */
  // band 0: onder 0 · 1: 0-4 · 2: 5-9 · 3: 10-13 · 4: 14-17 · 5: 18-22 · 6: 23+
  function band(te) { return te >= 23 ? 6 : te >= 18 ? 5 : te >= 14 ? 4 : te >= 10 ? 3 : te >= 5 ? 2 : te >= 0 ? 1 : 0; }
  const KLEDING = {
    hoofd: [
      ["Bivakmuts of winter-helmmuts, plus een buff", "Balaclava or winter helmet cap, plus a buff", "Sturmhaube oder Winter-Helmmütze, plus ein Buff"],
      ["Thermomuts onder je helm, buff over neus en mond", "Thermal cap under your helmet, buff over nose and mouth", "Thermomütze unter dem Helm, Buff über Nase und Mund"],
      ["Dunne muts onder je helm en een buff", "Thin cap under your helmet and a buff", "Dünne Mütze unter dem Helm und ein Buff"],
      ["Dunne buff of hoofdband over je oren", "Thin buff or headband over your ears", "Dünner Buff oder Stirnband über den Ohren"],
      ["Niets extra; buff in je zak als het fris start", "Nothing extra; a buff in your pocket if it starts chilly", "Nichts extra; Buff in der Tasche, wenn es frisch losgeht"],
      ["Niets extra, eventueel een fietspetje tegen de zon", "Nothing extra, maybe a cycling cap against the sun", "Nichts extra, eventuell eine Radmütze gegen die Sonne"],
      ["Fietspetje tegen de zon, of niets", "Cycling cap against the sun, or nothing", "Radmütze gegen die Sonne, oder nichts"]
    ],
    bovenlijf: [
      ["Thermo-ondershirt (merino) + tussenlaag + winterjack", "Thermal base layer (merino) + mid layer + winter jacket", "Thermo-Unterhemd (Merino) + Zwischenschicht + Winterjacke"],
      ["Thermo-ondershirt (merino) + winddicht winterjack", "Thermal base layer (merino) + windproof winter jacket", "Thermo-Unterhemd (Merino) + winddichte Winterjacke"],
      ["Thermo-ondershirt lange mouw + softshelljack of thermoshirt", "Long-sleeved thermal base layer + softshell jacket or thermal jersey", "Langarm-Thermounterhemd + Softshelljacke oder Thermotrikot"],
      ["Ondershirt + shirt lange mouw, of korte mouw met armstukken, + windvest", "Base layer + long-sleeved jersey, or short sleeves with arm warmers, + gilet", "Unterhemd + Langarmtrikot, oder Kurzarm mit Armlingen, + Windweste"],
      ["Ondershirt + shirt korte mouw + gilet", "Base layer + short-sleeved jersey + gilet", "Unterhemd + Kurzarmtrikot + Weste"],
      ["Dun ondershirt + shirt korte mouw", "Thin base layer + short-sleeved jersey", "Dünnes Unterhemd + Kurzarmtrikot"],
      ["Luchtig zomershirt, eventueel een netondershirt", "Airy summer jersey, maybe a mesh base layer", "Luftiges Sommertrikot, eventuell ein Netzunterhemd"]
    ],
    armen: [
      ["Lange mouwen (zitten in je jack)", "Long sleeves (part of your jacket)", "Lange Ärmel (in der Jacke)"],
      ["Lange mouwen (zitten in je jack)", "Long sleeves (part of your jacket)", "Lange Ärmel (in der Jacke)"],
      ["Lange mouwen", "Long sleeves", "Lange Ärmel"],
      ["Lange mouwen of armstukken", "Long sleeves or arm warmers", "Lange Ärmel oder Armlinge"],
      ["Armstukken: die gaan uit als het warmer wordt", "Arm warmers: off when it gets warmer", "Armlinge: Die kommen ab, wenn es wärmer wird"],
      ["Bloot", "Bare", "Frei"],
      ["Bloot", "Bare", "Frei"]
    ],
    benen: [
      ["Lange thermo-koersbroek met winddicht voorpand", "Thermal bib tights with windproof front", "Lange Thermo-Radhose mit winddichter Front"],
      ["Lange thermo-koersbroek met winddicht voorpand", "Thermal bib tights with windproof front", "Lange Thermo-Radhose mit winddichter Front"],
      ["Lange (thermo-)koersbroek", "Long (thermal) bib tights", "Lange (Thermo-)Radhose"],
      ["Korte koersbroek + beenstukken, of een dunne lange koersbroek", "Bib shorts + leg warmers, or thin bib tights", "Kurze Radhose + Beinlinge, oder eine dünne lange Radhose"],
      ["Korte koersbroek + kniestukken", "Bib shorts + knee warmers", "Kurze Radhose + Knielinge"],
      ["Korte koersbroek", "Bib shorts", "Kurze Radhose"],
      ["Korte koersbroek", "Bib shorts", "Kurze Radhose"]
    ],
    handen: [
      ["Lobster- of winterhandschoenen met een dunne binnenhandschoen", "Lobster or winter gloves with a thin liner glove", "Lobster- oder Winterhandschuhe mit dünnem Innenhandschuh"],
      ["Winterhandschoenen (winddicht en gevoerd)", "Winter gloves (windproof and lined)", "Winterhandschuhe (winddicht und gefüttert)"],
      ["Gevoerde lange handschoenen", "Lined long-finger gloves", "Gefütterte Langfingerhandschuhe"],
      ["Dunne lange handschoenen", "Thin long-finger gloves", "Dünne Langfingerhandschuhe"],
      ["Korte handschoenen; dunne lange mee als het fris start", "Short-finger gloves; bring thin long ones if it starts chilly", "Kurzfingerhandschuhe; dünne lange mitnehmen, wenn es frisch losgeht"],
      ["Korte handschoenen", "Short-finger gloves", "Kurzfingerhandschuhe"],
      ["Korte handschoenen of mitts", "Short-finger gloves or mitts", "Kurzfingerhandschuhe oder Mitts"]
    ],
    voeten: [
      ["Winterschoenen of dikke neopreen overschoenen + warme wollen sokken", "Winter shoes or thick neoprene overshoes + warm wool socks", "Winterschuhe oder dicke Neopren-Überschuhe + warme Wollsocken"],
      ["Dikke wollen sokken + neopreen overschoenen", "Thick wool socks + neoprene overshoes", "Dicke Wollsocken + Neopren-Überschuhe"],
      ["Wollen sokken + overschoenen", "Wool socks + overshoes", "Wollsocken + Überschuhe"],
      ["Wollen sokken of teenkapjes over je schoenen", "Wool socks or toe covers over your shoes", "Wollsocken oder Zehenkappen über den Schuhen"],
      ["Gewone fietssokken", "Normal cycling socks", "Normale Radsocken"],
      ["Dunne zomersokken", "Thin summer socks", "Dünne Sommersocken"],
      ["Dunne zomersokken", "Thin summer socks", "Dünne Sommersocken"]
    ]
  };
  const ZONES = [
    ["hoofd", T("Hoofd", "Head", "Kopf"), '<path d="M3 15a9 9 0 0 1 18 0z" /><path d="M6 15v2h12v-2" />'],
    ["bovenlijf", T("Bovenlijf", "Upper body", "Oberkörper"), '<path d="M8 3 3 6l2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 0 1-8 0z" />'],
    ["armen", T("Armen", "Arms", "Arme"), '<path d="M8 3 3 6l1 14h3l1-10" /><path d="M16 3l5 3-1 14h-3l-1-10" />'],
    ["benen", T("Benen", "Legs", "Beine"), '<path d="M6 3h12l1 18h-5l-2-10-2 10H5z" />'],
    ["handen", T("Handen", "Hands", "Hände"), '<path d="M7 21v-8L5 10l1-1 3 2V5a1 1 0 0 1 2 0v5V4a1 1 0 0 1 2 0v6V5a1 1 0 0 1 2 0v6V7a1 1 0 0 1 2 0v8a6 6 0 0 1-6 6z" />'],
    ["voeten", T("Voeten", "Feet", "Füße"), '<path d="M3 15c3 0 5-3 6-7l4 2c2 1 5 1 8 2v5H3z" />']
  ];
  // spullen voor in de achterzak (vaste sleutel, tekst in de taal van de pagina)
  const ZAK = {
    regenjack: T("Opvouwbaar regenjack", "Packable rain jacket", "Faltbare Regenjacke"),
    handschoenen: T("Droge reservehandschoenen in een zakje", "Dry spare gloves in a bag", "Trockene Ersatzhandschuhe in einem Beutel"),
    gilet: T("Gilet (windvest)", "Gilet (wind vest)", "Weste (Windweste)"),
    giletOpen: T("Gilet (windvest) voor open stukken en afdalingen", "Gilet for open sections and descents", "Weste für offene Abschnitte und Abfahrten"),
    ruimte: T("Ruimte voor armstukken, kniestukken of gilet als ze uitgaan", "Room for arm warmers, knee warmers or gilet when they come off", "Platz für Armlinge, Knielinge oder Weste, wenn sie ausgezogen werden"),
    extraLaag: T("Extra laag (gilet of dun jack) voor als je moe wordt of het later afkoelt", "Extra layer (gilet or thin jacket) for when you get tired or it cools down later", "Extra Schicht (Weste oder dünne Jacke), wenn du müde wirst oder es später abkühlt"),
    buff: "Buff",
    zonnebrand: T("Zonnebrandcrème", "Sunscreen", "Sonnencreme")
  };

  function maakAdvies() {
    const eff = voeltAls(S.temp);
    const b = band(eff.waarde);
    const uren = DUUR_UREN[S.duur];
    const zones = {};
    for (const [z] of ZONES) zones[z] = { tekst: L(KLEDING[z][b]), extra: [] };
    let overschoenen = b <= 2; // in de koudste banden horen er al overschoenen bij
    const zak = new Set();
    const tips = [];

    // regen en modder
    if (S.neerslag === "buien") {
      zak.add("regenjack");
      tips.push(T("Bij een bui: regenjack direct aan, ook als het maar even lijkt te duren. Nat worden kost veel warmte.", "In a shower: put your rain jacket on straight away, even if it looks short. Getting wet costs a lot of warmth.", "Bei einem Schauer: Regenjacke sofort anziehen, auch wenn es nur kurz aussieht. Nass werden kostet viel Wärme."));
    }
    if (S.neerslag === "regen") {
      zones.bovenlijf.extra.push(T("met een waterdicht regenjack eroverheen", "with a waterproof rain jacket on top", "mit einer wasserdichten Regenjacke darüber"));
      zones.hoofd.extra.push(T("regenpetje onder je helm houdt het water uit je ogen", "a cycling cap under your helmet keeps the water out of your eyes", "eine Radmütze unter dem Helm hält das Wasser aus den Augen"));
      if (b >= 4) { zones.voeten.tekst = T("Gewone sokken + waterdichte overschoenen", "Normal socks + waterproof overshoes", "Normale Socken + wasserdichte Überschuhe"); overschoenen = true; }
      else if (!overschoenen) { zones.voeten.extra.push(T("met waterdichte overschoenen", "with waterproof overshoes", "mit wasserdichten Überschuhen")); overschoenen = true; }
      if (uren >= 3) zak.add("handschoenen");
    }
    if (S.grond === "nat") {
      if (!overschoenen && !zones.voeten.extra.length) zones.voeten.extra.push(T("overschoenen houden modder en water buiten", "overshoes keep mud and water out", "Überschuhe halten Matsch und Wasser draußen"));
      tips.push(T("Nat en modderig: kies donkere kleding en een fietsbril met heldere glazen tegen opspattende modder.", "Wet and muddy: choose dark clothing and glasses with clear lenses against spraying mud.", "Nass und matschig: Wähle dunkle Kleidung und eine Radbrille mit klaren Gläsern gegen spritzenden Matsch."));
    }

    // wind
    if (S.wind === "stevig") {
      if (b >= 4) zak.add("gilet");
      tips.push(T("Stevige wind: plan je rit zo dat je de wind op de terugweg mee hebt. Met wind tegen en vermoeide benen koel je sneller af.", "Strong wind: plan your ride so you have a tailwind on the way back. With a headwind and tired legs you cool down faster.", "Kräftiger Wind: Plan deine Runde so, dass du auf dem Rückweg Rückenwind hast. Mit Gegenwind und müden Beinen kühlst du schneller aus."));
    } else if (S.wind === "matig" && b === 5) {
      zak.add("giletOpen");
    }

    // temperatuurverloop (bij opgehaald weer)
    if (S.tMax != null && S.tMax - S.temp >= 5) {
      const later = voeltAls(S.tMax), verschil = S.tMax - S.temp;
      tips.push(T("Het wordt tijdens je rit " + verschil + " graden warmer (voelt dan als " + later.waarde + " °C). Kies lagen die je onderweg uit kunt doen en in je achterzak passen.",
        "It gets " + verschil + " degrees warmer during your ride (then feels like " + later.waarde + " °C). Choose layers you can take off on the way that fit in your back pocket.",
        "Während deiner Fahrt wird es " + verschil + " Grad wärmer (fühlt sich dann wie " + later.waarde + " °C an). Wähle Schichten, die du unterwegs ausziehen kannst und die in die Trikottasche passen."));
      if (b <= 4 && band(later.waarde) >= 4) zak.add("ruimte");
    }

    // lange ritten
    if (uren >= 5) {
      if (b <= 4) zak.add("extraLaag");
      tips.push(T("Lange rit: tijdens een pauze koel je snel af. Trek bij een stop direct je gilet of jack aan.", "Long ride: you cool down quickly during a break. Put on your gilet or jacket as soon as you stop.", "Lange Fahrt: In einer Pause kühlst du schnell aus. Zieh bei einem Stopp sofort Weste oder Jacke an."));
    } else if (uren >= 3 && b >= 3 && b <= 4 && !zak.has("giletOpen")) {
      zak.add("gilet");
    }

    // standaard bij fris weer
    if (b === 4 && !zak.has("giletOpen")) zak.add("gilet");
    if (b === 3 || b === 4) zak.add("buff");

    // warmte en kou
    if (S.temp >= 27) {
      zak.add("zonnebrand");
      tips.push(T("Warm: drink minstens een bidon per uur, met sportdrank of een zoutje erbij. Kies lichte kleuren.", "Hot: drink at least one bottle per hour, with sports drink or some salt. Choose light colours.", "Heiß: Trink mindestens eine Flasche pro Stunde, mit Sportgetränk oder etwas Salz. Wähle helle Farben."));
    } else if (b >= 5) {
      tips.push(T("Smeer zonnebrand op je armen, nek en neus: op gravel zit je vaak lang in de zon zonder schaduw.", "Put sunscreen on your arms, neck and nose: on gravel you're often in the sun for a long time without shade.", "Creme Arme, Nacken und Nase ein: Auf Schotter bist du oft lange ohne Schatten in der Sonne."));
    }
    if (S.temp <= 3) tips.push(T("Rond het vriespunt kan het glad zijn op schaduwrijke paden, bruggen en vlonders. Rij daar extra voorzichtig.", "Around freezing it can be slippery on shady paths, bridges and boardwalks. Ride extra carefully there.", "Um den Gefrierpunkt kann es auf schattigen Wegen, Brücken und Holzstegen glatt sein. Fahr dort besonders vorsichtig."));
    if (b <= 2) tips.push(T("Begin je rit met het gevoel dat je het een beetje koud hebt. Na tien minuten trappen ben je op temperatuur.", "Start your ride feeling slightly cold. After ten minutes of pedalling you're up to temperature.", "Starte mit dem Gefühl, dass dir ein bisschen kalt ist. Nach zehn Minuten Treten bist du warm."));
    tips.push(T("Op gravel rijd je langzamer dan op de weg: minder rijwind dan je gewend bent, dus vaak iets warmer.", "On gravel you ride slower than on the road: less wind from riding than you're used to, so often a bit warmer.", "Auf Schotter fährst du langsamer als auf der Straße: weniger Fahrtwind als gewohnt, also oft etwas wärmer."));

    return { eff, b, zones, zak: Array.from(zak).map(k => ZAK[k]), tips };
  }

  /* ---------- Tonen ---------- */
  function toon() {
    const a = maakAdvies();
    $("#klTempUit").textContent = S.temp + " °C" + (S.tMax != null && S.tMax !== S.temp ? T(" (tot ", " (up to ", " (bis ") + S.tMax + " °C)" : "");
    $("#klEff").textContent = a.eff.waarde + " °C";
    $("#klEffUitleg").textContent = a.eff.redenen.length
      ? T("Het is " + S.temp + " °C, maar ", "It's " + S.temp + " °C, but ", "Es hat " + S.temp + " °C, aber ") + a.eff.redenen.join(", ") + "."
      : T("Geen bijzonderheden: het voelt zoals het is.", "Nothing special: it feels like it is.", "Nichts Besonderes: Es fühlt sich an, wie es ist.");
    const pos = Math.min(100, Math.max(0, (a.eff.waarde + 10) / 45 * 100));
    $("#klThermoStip").style.left = pos + "%";

    $("#klZones").innerHTML = ZONES.map(([z, naam, pad]) => {
      const zone = a.zones[z];
      const extra = zone.extra.length ? '<span class="kl-zone__extra">' + zone.extra.join("; ") + "</span>" : "";
      return '<li class="kl-zone"><svg class="kl-zone__ico" viewBox="0 0 24 24" aria-hidden="true">' + pad + '</svg>' +
        '<span><b>' + naam + "</b>" + zone.tekst + extra + "</span></li>";
    }).join("");
    $("#klZak").innerHTML = a.zak.length ? a.zak.map(z => "<li>" + z + "</li>").join("") : "<li>" + T("Niets extra nodig.", "Nothing extra needed.", "Nichts extra nötig.") + "</li>";
    $("#klTips").innerHTML = a.tips.map(t => "<li>" + t + "</li>").join("");
    wortel.dataset.band = a.b;
    S.laatste = a;
  }

  /* ---------- Knoppen en schuifjes ---------- */
  function zetChip(veld, waarde) {
    S[veld] = waarde;
    wortel.querySelectorAll('.kl-chips[data-veld="' + veld + '"] button').forEach(b => {
      const aan = b.dataset.waarde === waarde;
      b.classList.toggle("is-aan", aan);
      b.setAttribute("aria-pressed", aan);
    });
  }
  wortel.querySelectorAll(".kl-chips").forEach(groep => {
    groep.addEventListener("click", e => {
      const knop = e.target.closest("button");
      if (!knop) return;
      zetChip(groep.dataset.veld, knop.dataset.waarde);
      toon();
    });
  });
  const schuif = $("#klTemp");
  schuif.addEventListener("input", () => { S.temp = Number(schuif.value); S.tMax = null; toon(); });

  wortel.querySelectorAll(".kl-modusknop").forEach(knop => {
    knop.addEventListener("click", () => {
      wortel.querySelectorAll(".kl-modusknop").forEach(k => { k.classList.toggle("is-aan", k === knop); k.setAttribute("aria-pressed", k === knop); });
      $("#klOphalen").hidden = knop.dataset.modus !== "ophalen";
      if (knop.dataset.modus === "ophalen") $("#klPlaats").focus();
    });
  });

  /* ---------- Weersverwachting ophalen (Open-Meteo) ---------- */
  const twee = n => String(n).padStart(2, "0");
  const isoDatum = d => d.getFullYear() + "-" + twee(d.getMonth() + 1) + "-" + twee(d.getDate());
  (function vulDatumEnUur() {
    const nu = new Date();
    const start = new Date(nu);
    if (nu.getHours() >= 17) start.setDate(start.getDate() + 1);
    const max = new Date(nu); max.setDate(max.getDate() + 14);
    const datum = $("#klDatum");
    datum.min = isoDatum(nu); datum.max = isoDatum(max); datum.value = isoDatum(start);
    const uur = $("#klUur");
    for (let u = 5; u <= 21; u++) uur.insertAdjacentHTML("beforeend", '<option value="' + u + '">' + twee(u) + ":00</option>");
    uur.value = String(nu.getHours() >= 17 || nu.getHours() < 8 ? 9 : Math.min(21, nu.getHours() + 1));
  })();

  const meld = t => { $("#klWeerStatus").textContent = t; };
  const plekNaam = p => p.name + (p.admin1 ? " (" + p.admin1 + (p.country_code && !["NL"].includes(p.country_code) ? ", " + p.country_code : "") + ")" : "");
  let plekken = [];

  // Plaatsen zoeken: de volgorde van de weerdienst aanhouden, maar plaatsen met precies de gezochte naam eerst.
  const gelijk = (a, b) => a.trim().toLocaleLowerCase() === b.trim().toLocaleLowerCase();
  async function zoekPlekken(naam) {
    const geo = await fetch("https://geocoding-api.open-meteo.com/v1/search?count=10&language=" + TAAL + "&name=" + encodeURIComponent(naam)).then(r => r.json());
    const uniek = new Map();
    for (const p of geo.results || []) {
      const sleutel = p.name + "|" + (p.admin1 || "") + "|" + p.country_code;
      if (!uniek.has(sleutel)) uniek.set(sleutel, p);
    }
    const lijst = Array.from(uniek.values());
    return lijst.filter(p => gelijk(p.name, naam)).concat(lijst.filter(p => !gelijk(p.name, naam)));
  }

  // Andere plaatsen met dezelfde naam als knopjes tonen ("Bedoel je…?")
  function toonKeuzes(gekozen) {
    // alleen echte twijfelgevallen tonen: plaatsen met dezelfde naam, of alles als er geen precieze treffer was
    const zoekterm = $("#klPlaats").value;
    const exact = plekken.some(p => gelijk(p.name, zoekterm));
    const anderen = plekken.filter(p => p !== gekozen && (!exact || gelijk(p.name, gekozen.name))).slice(0, 4);
    const vak = $("#klKeuzes");
    if (!anderen.length) { vak.innerHTML = ""; return; }
    const naamgenoten = plekken.filter(p => gelijk(p.name, gekozen.name)).length > 1;
    vak.innerHTML = "<span>" + (naamgenoten
      ? T("<b>Let op:</b> er zijn meer plaatsen die " + gekozen.name + " heten. Kies hieronder de juiste:", "<b>Note:</b> there are more places called " + gekozen.name + ". Choose the right one below:", "<b>Achtung:</b> Es gibt mehrere Orte namens " + gekozen.name + ". Wähle unten den richtigen:")
      : T("Bedoel je een andere plek?", "Did you mean another place?", "Meinst du einen anderen Ort?")) + "</span>" +
      anderen.map(p => '<button type="button" data-plek="' + plekken.indexOf(p) + '">' + plekNaam(p) + "</button>").join("");
  }
  $("#klKeuzes").addEventListener("click", e => {
    const knop = e.target.closest("button[data-plek]");
    if (knop) haalWeer(plekken[Number(knop.dataset.plek)]);
  });

  async function haalWeer(gekozen) {
    const plaats = $("#klPlaats").value.trim();
    if (!gekozen && !plaats) { meld(T("Vul eerst een plaats in.", "Enter a place first.", "Gib zuerst einen Ort ein.")); $("#klPlaats").focus(); return; }
    const knop = $("#klHaal");
    knop.disabled = true;
    meld(T("Weersverwachting ophalen…", "Fetching the weather forecast…", "Wettervorhersage wird abgerufen…"));
    try {
      if (!gekozen || !(gekozen instanceof Object) || !gekozen.latitude) {
        plekken = await zoekPlekken(plaats);
        if (!plekken.length) {
          meld(T("Die plaats kon ik niet vinden. Gebieden zoals de Veluwe, de Maasduinen of de Ardennen kent de weerdienst niet: vul een dorp of stad in de buurt in, bijvoorbeeld Arcen of Bouillon.",
            "I couldn't find that place. The weather service doesn't know areas such as the Veluwe or the Ardennes: enter a nearby village or town instead, for example Arcen or Bouillon.",
            "Diesen Ort konnte ich nicht finden. Gebiete wie die Veluwe oder die Ardennen kennt der Wetterdienst nicht: Gib ein Dorf oder eine Stadt in der Nähe ein, zum Beispiel Arcen oder Bouillon."));
          $("#klKeuzes").innerHTML = ""; return;
        }
        gekozen = plekken[0];
      }
      const p = gekozen;
      toonKeuzes(p);
      const datum = $("#klDatum").value;
      const uur = Number($("#klUur").value);
      const eind = new Date(datum + "T12:00"); eind.setDate(eind.getDate() + 1);
      const url = "https://api.open-meteo.com/v1/forecast?latitude=" + p.latitude + "&longitude=" + p.longitude +
        "&hourly=temperature_2m,precipitation_probability,precipitation,wind_speed_10m&timezone=Europe%2FAmsterdam" +
        "&start_date=" + datum + "&end_date=" + isoDatum(eind);
      const r = await fetch(url);
      if (!r.ok) throw new Error("weer " + r.status);
      const w = (await r.json()).hourly;
      const i0 = w.time.indexOf(datum + "T" + twee(uur) + ":00");
      if (i0 < 0) throw new Error("tijd niet gevonden");
      const n = Math.max(1, Math.ceil(DUUR_UREN[S.duur]));
      const idx = [];
      for (let k = 0; k <= n && i0 + k < w.time.length; k++) idx.push(i0 + k);
      const temps = idx.map(i => w.temperature_2m[i]).filter(v => v != null);
      const kansen = idx.map(i => w.precipitation_probability[i] || 0);
      const regen = idx.reduce((s, i) => s + (w.precipitation[i] || 0), 0);
      const wind = Math.max(...idx.map(i => w.wind_speed_10m[i] || 0));
      if (!temps.length) throw new Error("geen temperaturen");

      S.temp = Math.round(Math.min(...temps));
      S.tMax = Math.round(Math.max(...temps));
      schuif.value = S.temp;
      const kans = Math.max(...kansen);
      zetChip("neerslag", regen >= 1 || kans >= 60 ? "regen" : kans >= 30 || regen >= 0.2 ? "buien" : "droog");
      zetChip("wind", wind < 15 ? "weinig" : wind < 30 ? "matig" : "stevig");
      const dag = new Date(datum + "T12:00").toLocaleDateString(T("nl-NL", "en-GB", "de-DE"), { weekday: "long", day: "numeric", month: "long" });
      const eindUur = (uur + n) % 24;
      const temps2 = S.temp === S.tMax ? S.temp : S.temp + T(" tot ", " to ", " bis ") + S.tMax;
      meld(plekNaam(p) + ", " + dag + " " + twee(uur) + ":00 – " + twee(eindUur) + ":00: " + temps2 + " °C, " +
        T("kans op neerslag ", "chance of rain ", "Regenwahrscheinlichkeit ") + kans + "%, " + T("wind tot ", "wind up to ", "Wind bis ") + Math.round(wind) + " " + KMU + ". " +
        T("Ingevuld hieronder.", "Filled in below.", "Unten eingetragen."));
      toon();
    } catch (e) {
      meld(T("Het weer ophalen lukte niet. Vul het hieronder zelf in, of probeer het zo nog eens.", "Fetching the weather didn't work. Fill it in yourself below, or try again in a moment.", "Das Wetter konnte nicht abgerufen werden. Trag es unten selbst ein oder versuch es gleich nochmal."));
    } finally {
      knop.disabled = false;
    }
  }
  $("#klHaal").addEventListener("click", () => haalWeer());
  $("#klPlaats").addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); haalWeer(); } });

  /* ---------- Kopiëren als paklijst ---------- */
  $("#klKopieer").addEventListener("click", async () => {
    const a = S.laatste;
    if (!a) return;
    const regels = [T("Kledingadvies Gravel Gorilla: kleed je alsof het ", "Gravel Gorilla clothing advice: dress as if it's ", "Kleidungsberater Gravel Gorilla: Zieh dich an, als wären es ") + a.eff.waarde + " °C" + T(" is", "", ""), ""];
    for (const [z, naam] of ZONES) regels.push("☐ " + naam + ": " + a.zones[z].tekst + (a.zones[z].extra.length ? " (" + a.zones[z].extra.join("; ") + ")" : ""));
    if (a.zak.length) { regels.push("", T("In je achterzak:", "In your back pocket:", "In die Trikottasche:")); a.zak.forEach(z => regels.push("☐ " + z)); }
    regels.push("", "gravelgorilla.nl" + (TAAL === "nl" ? "" : "/" + TAAL) + "/tools/kledingadvies/");
    const tekst = regels.join("\n");
    const status = $("#klKopieerStatus");
    const gelukt = T("Gekopieerd! Plak hem in je notities of stuur hem door.", "Copied! Paste it into your notes or send it on.", "Kopiert! Füg sie in deine Notizen ein oder schick sie weiter.");
    try { await navigator.clipboard.writeText(tekst); status.textContent = gelukt; }
    catch (e) {
      const t = document.createElement("textarea"); t.value = tekst; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); status.textContent = gelukt; } catch (er) { status.textContent = T("Kopiëren lukte niet in deze browser.", "Copying didn't work in this browser.", "Kopieren hat in diesem Browser nicht geklappt."); }
      t.remove();
    }
  });

  toon();
})();
