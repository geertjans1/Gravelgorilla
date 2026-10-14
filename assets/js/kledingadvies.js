/* =========================================================
   Gravel Gorilla — Kledingadvies
   Rekent een "voelt als"-temperatuur uit (weer + rit + jij) en kiest daarbij
   per lichaamsdeel de juiste kleding, plus wat er in je achterzak moet.
   Weersverwachting (optioneel) via Open-Meteo: gratis, geen account nodig.
   ========================================================= */
(function () {
  const wortel = document.querySelector(".kl-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);

  /* ---------- Invoer ---------- */
  const S = { temp: 12, tMax: null, neerslag: "droog", wind: "weinig", duur: "middel", tempo: "stevig", gevoel: "normaal", grond: "droog" };
  const DUUR_UREN = { kort: 1.5, middel: 3, lang: 5, ultra: 8 };

  /* ---------- "Voelt als"-temperatuur ---------- */
  const CORRECTIE = {
    gevoel:   { koud: [-3, "je hebt het snel koud"], normaal: [0, ""], warm: [3, "je hebt het snel warm"] },
    tempo:    { rustig: [-2, "rustig tempo houdt je minder warm"], stevig: [0, ""], wedstrijd: [3, "wedstrijdtempo maakt je warm"] },
    wind:     { weinig: [0, ""], matig: [-2, "matige wind koelt af"], stevig: [-3, "stevige wind koelt flink af"] },
    neerslag: { droog: [0, ""], buien: [-1, "kans op buien"], regen: [-2, "natte kleding koelt snel af"] },
    grond:    { droog: [0, ""], nat: [-1, "opspattend water en modder"] }
  };
  function voeltAls(t) {
    let som = 0;
    const redenen = [];
    for (const veld of Object.keys(CORRECTIE)) {
      const [graden, reden] = CORRECTIE[veld][S[veld]];
      som += graden;
      if (reden) redenen.push(reden + " (" + (graden > 0 ? "+" : "") + graden + "°)");
    }
    if (DUUR_UREN[S.duur] >= 5 && t < 15) { som -= 1; redenen.push("lange rit: je koelt na een tijdje uit (-1°)"); }
    // niet doorslaan: alles bij elkaar hooguit 6 graden kouder of 4 graden warmer
    const begrensd = Math.max(-6, Math.min(4, som));
    if (begrensd !== som) redenen.push("samen hooguit " + (begrensd > 0 ? "+" : "") + begrensd + "°");
    som = begrensd;
    return { waarde: Math.round(t + som), redenen };
  }

  /* ---------- Kleding per temperatuurband ---------- */
  // band 0: onder 0 · 1: 0-4 · 2: 5-9 · 3: 10-13 · 4: 14-17 · 5: 18-22 · 6: 23+
  function band(te) { return te >= 23 ? 6 : te >= 18 ? 5 : te >= 14 ? 4 : te >= 10 ? 3 : te >= 5 ? 2 : te >= 0 ? 1 : 0; }
  const KLEDING = {
    hoofd: [
      "Bivakmuts of winter-helmmuts, plus een buff",
      "Thermomuts onder je helm, buff over neus en mond",
      "Dunne muts onder je helm en een buff",
      "Dunne buff of hoofdband over je oren",
      "Niets extra; buff in je zak als het fris start",
      "Niets extra, eventueel een fietspetje tegen de zon",
      "Fietspetje tegen de zon, of niets"
    ],
    bovenlijf: [
      "Thermo-ondershirt (merino) + tussenlaag + winterjack",
      "Thermo-ondershirt (merino) + winddicht winterjack",
      "Thermo-ondershirt lange mouw + softshelljack of thermoshirt",
      "Ondershirt + shirt lange mouw, of korte mouw met armstukken, + windvest",
      "Ondershirt + shirt korte mouw + gilet",
      "Dun ondershirt + shirt korte mouw",
      "Luchtig zomershirt, eventueel een netondershirt"
    ],
    armen: [
      "Lange mouwen (zitten in je jack)",
      "Lange mouwen (zitten in je jack)",
      "Lange mouwen",
      "Lange mouwen of armstukken",
      "Armstukken: die gaan uit als het warmer wordt",
      "Bloot",
      "Bloot"
    ],
    benen: [
      "Lange thermo-koersbroek met winddicht voorpand",
      "Lange thermo-koersbroek met winddicht voorpand",
      "Lange (thermo-)koersbroek",
      "Korte koersbroek + beenstukken, of een dunne lange koersbroek",
      "Korte koersbroek + kniestukken",
      "Korte koersbroek",
      "Korte koersbroek"
    ],
    handen: [
      "Lobster- of winterhandschoenen met een dunne binnenhandschoen",
      "Winterhandschoenen (winddicht en gevoerd)",
      "Gevoerde lange handschoenen",
      "Dunne lange handschoenen",
      "Korte handschoenen; dunne lange mee als het fris start",
      "Korte handschoenen",
      "Korte handschoenen of mitts"
    ],
    voeten: [
      "Winterschoenen of dikke neopreen overschoenen + warme wollen sokken",
      "Dikke wollen sokken + neopreen overschoenen",
      "Wollen sokken + overschoenen",
      "Wollen sokken of teenkapjes over je schoenen",
      "Gewone fietssokken",
      "Dunne zomersokken",
      "Dunne zomersokken"
    ]
  };
  const ZONES = [
    ["hoofd", "Hoofd", '<path d="M3 15a9 9 0 0 1 18 0z" /><path d="M6 15v2h12v-2" />'],
    ["bovenlijf", "Bovenlijf", '<path d="M8 3 3 6l2 4 2-1v12h10V9l2 1 2-4-5-3a4 4 0 0 1-8 0z" />'],
    ["armen", "Armen", '<path d="M8 3 3 6l1 14h3l1-10" /><path d="M16 3l5 3-1 14h-3l-1-10" />'],
    ["benen", "Benen", '<path d="M6 3h12l1 18h-5l-2-10-2 10H5z" />'],
    ["handen", "Handen", '<path d="M7 21v-8L5 10l1-1 3 2V5a1 1 0 0 1 2 0v5V4a1 1 0 0 1 2 0v6V5a1 1 0 0 1 2 0v6V7a1 1 0 0 1 2 0v8a6 6 0 0 1-6 6z" />'],
    ["voeten", "Voeten", '<path d="M3 15c3 0 5-3 6-7l4 2c2 1 5 1 8 2v5H3z" />']
  ];

  function maakAdvies() {
    const eff = voeltAls(S.temp);
    const b = band(eff.waarde);
    const uren = DUUR_UREN[S.duur];
    const zones = {};
    for (const [z] of ZONES) zones[z] = { tekst: KLEDING[z][b], extra: [] };
    const zak = [];
    const tips = [];

    // regen en modder
    if (S.neerslag === "buien") {
      zak.push("Opvouwbaar regenjack");
      tips.push("Bij een bui: regenjack direct aan, ook als het maar even lijkt te duren. Nat worden kost veel warmte.");
    }
    if (S.neerslag === "regen") {
      zones.bovenlijf.extra.push("met een waterdicht regenjack eroverheen");
      zones.hoofd.extra.push("regenpetje onder je helm houdt het water uit je ogen");
      if (b >= 4) zones.voeten.tekst = "Gewone sokken + waterdichte overschoenen";
      else if (!/overschoenen/.test(zones.voeten.tekst)) zones.voeten.extra.push("met waterdichte overschoenen");
      if (uren >= 3) zak.push("Droge reservehandschoenen in een zakje");
    }
    if (S.grond === "nat") {
      if (!/overschoenen/.test(zones.voeten.tekst) && !zones.voeten.extra.length) zones.voeten.extra.push("overschoenen houden modder en water buiten");
      tips.push("Nat en modderig: kies donkere kleding en een fietsbril met heldere glazen tegen opspattende modder.");
    }

    // wind
    if (S.wind === "stevig") {
      if (b >= 4 && !zak.includes("Gilet (windvest)")) zak.push("Gilet (windvest)");
      tips.push("Stevige wind: plan je rit zo dat je de wind op de terugweg mee hebt. Met wind tegen en vermoeide benen koel je sneller af.");
    } else if (S.wind === "matig" && b === 5) {
      zak.push("Gilet (windvest) voor open stukken en afdalingen");
    }

    // temperatuurverloop (bij opgehaald weer)
    if (S.tMax != null && S.tMax - S.temp >= 5) {
      const later = voeltAls(S.tMax);
      tips.push("Het wordt tijdens je rit " + (S.tMax - S.temp) + " graden warmer (voelt dan als " + later.waarde + " °C). Kies lagen die je onderweg uit kunt doen en in je achterzak passen.");
      if (b <= 4 && band(later.waarde) >= 4) { if (!zak.some(z => /armstukken/i.test(z))) zak.push("Ruimte voor armstukken, kniestukken of gilet als ze uitgaan"); }
    }

    // lange ritten
    if (uren >= 5) {
      if (b <= 4) zak.push("Extra laag (gilet of dun jack) voor als je moe wordt of het later afkoelt");
      tips.push("Lange rit: tijdens een pauze koel je snel af. Trek bij een stop direct je gilet of jack aan.");
    } else if (uren >= 3 && b >= 3 && b <= 4 && !zak.some(z => /Gilet/.test(z))) {
      zak.push("Gilet (windvest)");
    }

    // standaard bij fris weer
    if (b === 4 && !zak.some(z => /Gilet/.test(z))) zak.push("Gilet (windvest)");
    if (b === 3 || b === 4) zak.push("Buff");

    // warmte en kou
    if (S.temp >= 27) {
      zak.push("Zonnebrandcrème");
      tips.push("Warm: drink minstens een bidon per uur, met sportdrank of een zoutje erbij. Kies lichte kleuren.");
    } else if (b >= 5) {
      tips.push("Smeer zonnebrand op je armen, nek en neus: op gravel zit je vaak lang in de zon zonder schaduw.");
    }
    if (S.temp <= 3) tips.push("Rond het vriespunt kan het glad zijn op schaduwrijke paden, bruggen en vlonders. Rij daar extra voorzichtig.");
    if (b <= 2) tips.push("Begin je rit met het gevoel dat je het een beetje koud hebt. Na tien minuten trappen ben je op temperatuur.");
    tips.push("Op gravel rijd je langzamer dan op de weg: minder rijwind dan je gewend bent, dus vaak iets warmer.");

    return { eff, b, zones, zak: Array.from(new Set(zak)), tips };
  }

  /* ---------- Tonen ---------- */
  function toon() {
    const a = maakAdvies();
    $("#klTempUit").textContent = S.temp + " °C" + (S.tMax != null && S.tMax !== S.temp ? " (tot " + S.tMax + " °C)" : "");
    $("#klEff").textContent = a.eff.waarde + " °C";
    $("#klEffUitleg").textContent = a.eff.redenen.length
      ? "Het is " + S.temp + " °C, maar " + a.eff.redenen.join(", ") + "."
      : "Geen bijzonderheden: het voelt zoals het is.";
    const pos = Math.min(100, Math.max(0, (a.eff.waarde + 10) / 45 * 100));
    $("#klThermoStip").style.left = pos + "%";

    $("#klZones").innerHTML = ZONES.map(([z, naam, pad]) => {
      const zone = a.zones[z];
      const extra = zone.extra.length ? '<span class="kl-zone__extra">' + zone.extra.join("; ") + "</span>" : "";
      return '<li class="kl-zone"><svg class="kl-zone__ico" viewBox="0 0 24 24" aria-hidden="true">' + pad + '</svg>' +
        '<span><b>' + naam + "</b>" + zone.tekst + extra + "</span></li>";
    }).join("");
    $("#klZak").innerHTML = a.zak.length ? a.zak.map(z => "<li>" + z + "</li>").join("") : "<li>Niets extra nodig.</li>";
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
  const gelijk = (a, b) => a.trim().toLocaleLowerCase("nl") === b.trim().toLocaleLowerCase("nl");
  async function zoekPlekken(naam) {
    const geo = await fetch("https://geocoding-api.open-meteo.com/v1/search?count=10&language=nl&name=" + encodeURIComponent(naam)).then(r => r.json());
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
      ? "<b>Let op:</b> er zijn meer plaatsen die " + gekozen.name + " heten. Kies hieronder de juiste:"
      : "Bedoel je een andere plek?") + "</span>" +
      anderen.map(p => '<button type="button" data-plek="' + plekken.indexOf(p) + '">' + plekNaam(p) + "</button>").join("");
  }
  $("#klKeuzes").addEventListener("click", e => {
    const knop = e.target.closest("button[data-plek]");
    if (knop) haalWeer(plekken[Number(knop.dataset.plek)]);
  });

  async function haalWeer(gekozen) {
    const plaats = $("#klPlaats").value.trim();
    if (!gekozen && !plaats) { meld("Vul eerst een plaats in."); $("#klPlaats").focus(); return; }
    const knop = $("#klHaal");
    knop.disabled = true;
    meld("Weersverwachting ophalen…");
    try {
      if (!gekozen || !(gekozen instanceof Object) || !gekozen.latitude) {
        plekken = await zoekPlekken(plaats);
        if (!plekken.length) { meld("Die plaats kon ik niet vinden. Gebieden zoals de Veluwe, de Maasduinen of de Ardennen kent de weerdienst niet: vul een dorp of stad in de buurt in, bijvoorbeeld Arcen of Bouillon."); $("#klKeuzes").innerHTML = ""; return; }
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
      const dag = new Date(datum + "T12:00").toLocaleDateString("nl-NL", { weekday: "long", day: "numeric", month: "long" });
      const eindUur = (uur + n) % 24;
      meld(plekNaam(p) + ", " + dag + " " + twee(uur) + ":00 – " + twee(eindUur) + ":00: " +
        (S.temp === S.tMax ? S.temp : S.temp + " tot " + S.tMax) + " °C, kans op neerslag " + kans + "%, wind tot " + Math.round(wind) + " km/u. Ingevuld hieronder.");
      toon();
    } catch (e) {
      meld("Het weer ophalen lukte niet. Vul het hieronder zelf in, of probeer het zo nog eens.");
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
    const regels = ["Kledingadvies Gravel Gorilla: kleed je alsof het " + a.eff.waarde + " °C is", ""];
    for (const [z, naam] of ZONES) regels.push("☐ " + naam + ": " + a.zones[z].tekst + (a.zones[z].extra.length ? " (" + a.zones[z].extra.join("; ") + ")" : ""));
    if (a.zak.length) { regels.push("", "In je achterzak:"); a.zak.forEach(z => regels.push("☐ " + z)); }
    regels.push("", "gravelgorilla.nl/tools/kledingadvies/");
    const tekst = regels.join("\n");
    const status = $("#klKopieerStatus");
    try { await navigator.clipboard.writeText(tekst); status.textContent = "Gekopieerd! Plak hem in je notities of stuur hem door."; }
    catch (e) {
      const t = document.createElement("textarea"); t.value = tekst; document.body.appendChild(t); t.select();
      try { document.execCommand("copy"); status.textContent = "Gekopieerd!"; } catch (er) { status.textContent = "Kopiëren lukte niet in deze browser."; }
      t.remove();
    }
  });

  toon();
})();
