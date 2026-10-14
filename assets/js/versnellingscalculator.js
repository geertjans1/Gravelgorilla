/* =========================================================
   Gravel Gorilla — Versnellingscalculator
   Voorblad + cassette → ontwikkeling, snelheid per versnelling en de steilste klim
   die je in je lichtste verzet nog fietsend haalt. Twee opstellingen naast elkaar.
   ========================================================= */
(function () {
  const wortel = document.querySelector(".vs-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);
  // taal van de pagina (nl, en of de)
  const TAAL = (document.documentElement.lang || "nl").slice(0, 2);
  const T = (nl, en, de) => (TAAL === "en" ? en : TAAL === "de" ? de : nl);
  const KMU = T(" km/u", " km/h", " km/h");

  const VOOR = [
    { id: "36", naam: "36 (1×)", t: [36] }, { id: "38", naam: "38 (1×)", t: [38] }, { id: "40", naam: "40 (1×)", t: [40] },
    { id: "42", naam: "42 (1×)", t: [42] }, { id: "44", naam: "44 (1×)", t: [44] }, { id: "46", naam: "46 (1×)", t: [46] },
    { id: "43-30", naam: "43 / 30 (2×)", t: [43, 30] }, { id: "46-30", naam: "46 / 30 (2×)", t: [46, 30] },
    { id: "48-31", naam: "48 / 31 (2×)", t: [48, 31] }, { id: "46-33", naam: "46 / 33 (2×)", t: [46, 33] }, { id: "50-34", naam: "50 / 34 (2×)", t: [50, 34] }
  ];
  // klein, groot, aantal tandwielen; de tussenliggende maken we gelijkmatig (bij benadering)
  const ACHTER = [
    { id: "11-32", k: 11, g: 32, n: 11 }, { id: "11-34", k: 11, g: 34, n: 11 }, { id: "11-36", k: 11, g: 36, n: 11 },
    { id: "11-40", k: 11, g: 40, n: 11 }, { id: "11-42", k: 11, g: 42, n: 11 }, { id: "10-36", k: 10, g: 36, n: 12 },
    { id: "10-44", k: 10, g: 44, n: 12 }, { id: "10-45", k: 10, g: 45, n: 12 }, { id: "10-51", k: 10, g: 51, n: 12 }, { id: "10-52", k: 10, g: 52, n: 12 }
  ];
  ACHTER.forEach(c => {
    c.naam = c.k + "–" + c.g + " (" + c.n + "-speed)";
    const f = Math.pow(c.g / c.k, 1 / (c.n - 1));
    c.t = Array.from({ length: c.n }, (_, i) => Math.round(c.k * Math.pow(f, i)));
    c.t[0] = c.k; c.t[c.n - 1] = c.g;
  });

  const S = { voorA: "40", achterA: "11-42", voorB: "geen", achterB: "10-44", wiel: 622, band: 40, cadans: 75, gewicht: 90, vermogen: 200 };

  function vul(sel, lijst, waarde, metGeen) {
    $(sel).innerHTML = (metGeen ? '<option value="geen">' + T("Geen vergelijking", "No comparison", "Kein Vergleich") + '</option>' : "") +
      lijst.map(x => '<option value="' + x.id + '"' + (x.id === waarde ? " selected" : "") + ">" + x.naam + "</option>").join("");
  }
  vul("#vsVoorA", VOOR, S.voorA); vul("#vsAchterA", ACHTER, S.achterA);
  vul("#vsVoorB", VOOR, S.voorB, true); vul("#vsAchterB", ACHTER, S.achterB);

  const omtrek = () => (S.wiel + 2 * S.band) * Math.PI / 1000; // meter
  const kmu = (verhouding, cadans) => verhouding * omtrek() * cadans * 60 / 1000;

  // steilste helling (in %) die je met je vermogen haalt bij deze snelheid (m/s)
  function steilste(v) {
    const g = 9.81, crr = 0.008, cda = 0.45, rho = 1.2, eta = 0.97;
    const lucht = 0.5 * rho * cda * v * v * v;
    const sin = (S.vermogen * eta - lucht) / (S.gewicht * g * v) - crr;
    if (sin <= 0) return 0;
    if (sin >= 0.45) return 50;
    return Math.tan(Math.asin(sin)) * 100;
  }

  function opstelling(voorId, achterId) {
    const v = VOOR.find(x => x.id === voorId), a = ACHTER.find(x => x.id === achterId);
    if (!v || !a) return null;
    const gears = [];
    v.t.forEach(c => a.t.forEach(z => gears.push({ c, z, r: c / z })));
    gears.sort((x, y) => x.r - y.r);
    const laag = gears[0], hoog = gears[gears.length - 1];
    const vLaag = kmu(laag.r, S.cadans) / 3.6;
    return { v, a, gears, laag, hoog, klim: steilste(vLaag), ontwikkelingLaag: laag.r * omtrek(), top: kmu(hoog.r, 100), bereik: Math.round(hoog.r / laag.r * 100) };
  }

  const nl = (x, d) => x.toFixed(d).replace(".", TAAL === "en" ? "." : ",");

  function toon() {
    $("#vsCadansUit").textContent = S.cadans + T(" rpm", " rpm", " U/min");
    $("#vsGewichtUit").textContent = S.gewicht + " kg";
    $("#vsVermogenUit").textContent = S.vermogen + T(" watt", " watts", " Watt");
    wortel.querySelector(".vs-opstelling--b").classList.toggle("is-uit", S.voorB === "geen");

    const A = opstelling(S.voorA, S.achterA);
    const B = S.voorB === "geen" ? null : opstelling(S.voorB, S.achterB);
    $("#vsKlimA").textContent = nl(A.klim, 0) + " %";
    $("#vsKlimB").textContent = B ? nl(B.klim, 0) + " %" : "–";
    $("#vsLaagA").textContent = A.laag.c + " × " + A.laag.z;
    $("#vsTopA").textContent = nl(A.top, 0) + KMU;

    const vLaag = nl(kmu(A.laag.r, S.cadans), 1), klimA = nl(A.klim, 0);
    let uitleg = T("In je lichtste verzet (" + A.laag.c + " voor, " + A.laag.z + " achter) ga je bij " + S.cadans + " rpm " + vLaag + " km/u. Met " + S.vermogen + " watt en " + S.gewicht + " kg kom je zo zittend een helling van ongeveer " + klimA + " % op.",
      "In your lowest gear (" + A.laag.c + " front, " + A.laag.z + " rear) you ride " + vLaag + " km/h at " + S.cadans + " rpm. With " + S.vermogen + " watts and " + S.gewicht + " kg you climb a gradient of about " + klimA + " % seated.",
      "Im leichtesten Gang (" + A.laag.c + " vorne, " + A.laag.z + " hinten) fährst du bei " + S.cadans + " U/min " + vLaag + " km/h. Mit " + S.vermogen + " Watt und " + S.gewicht + " kg schaffst du so sitzend eine Steigung von etwa " + klimA + " %.");
    if (B) {
      const verschil = Math.round((1 - B.laag.r / A.laag.r) * 100), v = Math.abs(verschil), klimB = nl(B.klim, 0);
      const richting = verschil > 0 ? T("lichter", "lighter", "leichter") : verschil < 0 ? T("zwaarder", "heavier", "schwerer") : T("gelijk", "the same", "gleich");
      uitleg += T(" Opstelling B is in het lichtste verzet " + v + " % " + richting + (verschil !== 0 ? ": daarmee haal je ongeveer " + klimB + " %." : ".") + " Topsnelheid bij 100 rpm: A " + nl(A.top, 0) + " km/u, B " + nl(B.top, 0) + " km/u.",
        " Setup B is " + v + " % " + richting + " in the lowest gear" + (verschil !== 0 ? ": with it you ride about " + klimB + " %." : ".") + " Top speed at 100 rpm: A " + nl(A.top, 0) + " km/h, B " + nl(B.top, 0) + " km/h.",
        " Setup B ist im leichtesten Gang " + v + " % " + richting + (verschil !== 0 ? ": damit schaffst du etwa " + klimB + " %." : ".") + " Höchstgeschwindigkeit bei 100 U/min: A " + nl(A.top, 0) + " km/h, B " + nl(B.top, 0) + " km/h.");
    }
    $("#vsUitleg").textContent = uitleg;
    $("#vsTip").textContent = A.klim < 6
      ? T("Tip: met dit lichtste verzet wordt het zwoegen op steile stukken. Een kleiner voorblad of een cassette met een groter tandwiel helpt het meest, zeker met bagage.",
          "Tip: with this lowest gear, steep sections will be a grind. A smaller chainring or a cassette with a bigger sprocket helps most, especially with luggage.",
          "Tipp: Mit diesem leichtesten Gang wird es an steilen Stücken mühsam. Ein kleineres Kettenblatt oder eine Kassette mit größerem Ritzel hilft am meisten, vor allem mit Gepäck.")
      : A.top < 45
        ? T("Tip: je hebt lichte verzetten, maar op snelle afdalingen of in een groep spin je er al snel uit. Een groter voorblad geeft meer topsnelheid.",
            "Tip: you have light gears, but on fast descents or in a group you'll quickly spin out. A bigger chainring gives more top speed.",
            "Tipp: Du hast leichte Gänge, aber auf schnellen Abfahrten oder in der Gruppe trittst du schnell ins Leere. Ein größeres Kettenblatt bringt mehr Höchstgeschwindigkeit.")
        : T("Tip: een goede balans. Twijfel je over bikepacking? Zet je gewicht met bagage erbij, dan zie je of je de steile stukken nog fietsend haalt.",
            "Tip: a good balance. Thinking about bikepacking? Add your luggage to your weight to see whether you can still ride the steep sections.",
            "Tipp: eine gute Balance. Denkst du an Bikepacking? Rechne dein Gepäck zum Gewicht dazu, dann siehst du, ob du die steilen Stücke noch fahrend schaffst.");

    // ladder: elk verzet als bolletje op een snelheidsas
    const max = Math.max(60, Math.ceil((B ? Math.max(A.top, B.top) : A.top) * S.cadans / 100 / 10) * 10);
    const rij = (o, letter) => '<div class="vs-rij"><span class="vs-rij__naam">' + letter + '</span><div class="vs-rij__as">' +
      o.gears.map(g => { const s = kmu(g.r, S.cadans); return '<span class="vs-bol' + (o.v.t.length > 1 && g.c === o.v.t[1] ? " vs-bol--klein" : "") + '" style="left:' + (s / max * 100) + '%" title="' + g.c + "×" + g.z + ": " + nl(s, 1) + KMU + '"></span>'; }).join("") +
      "</div></div>";
    const schaal = '<div class="vs-schaal">' + Array.from({ length: max / 10 + 1 }, (_, i) => '<span style="left:' + (i * 10 / max * 100) + '%">' + i * 10 + "</span>").join("") + "</div>";
    $("#vsLadder").innerHTML = rij(A, "A") + (B ? rij(B, "B") : "") + schaal;
    const twee = A.v.t.length > 1 || (B && B.v.t.length > 1);
    $("#vsLadderUitleg").textContent = T("Elk bolletje is een versnelling: hoe hard je gaat (km/u) bij " + S.cadans + " rpm." + (twee ? " Lichte bolletjes horen bij het kleine voorblad." : ""),
      "Each dot is a gear: how fast you go (km/h) at " + S.cadans + " rpm." + (twee ? " Light dots belong to the small chainring." : ""),
      "Jeder Punkt ist ein Gang: wie schnell du bei " + S.cadans + " U/min fährst (km/h)." + (twee ? " Helle Punkte gehören zum kleinen Kettenblatt." : ""));

    const tabel = (o, letter) => '<div class="vs-tabel"><h3>' + T("Opstelling ", "Setup ", "Setup ") + letter + ": " + o.v.naam + ", " + o.a.naam + '</h3><div class="vs-tabelvak"><table class="wb-tabel"><thead><tr><th>' + T("Voor × achter", "Front × rear", "Vorne × hinten") + '</th><th class="wb-getal">' + T("Ontwikkeling", "Development", "Entfaltung") + '</th><th class="wb-getal">' + T("Snelheid", "Speed", "Tempo") + '</th><th class="wb-getal">' + T("Steilste klim", "Steepest climb", "Max. Steigung") + "</th></tr></thead><tbody>" +
      o.gears.map(g => { const s = kmu(g.r, S.cadans); return "<tr><td>" + g.c + " × " + g.z + '</td><td class="wb-getal">' + nl(g.r * omtrek(), 2) + ' m</td><td class="wb-getal">' + nl(s, 1) + KMU + '</td><td class="wb-getal">' + nl(steilste(s / 3.6), 0) + " %</td></tr>"; }).join("") +
      "</tbody></table></div></div>";
    $("#vsTabellen").innerHTML = tabel(A, "A") + (B ? tabel(B, "B") : "");
  }

  /* ---------- invoer ---------- */
  const kies = (sel, veld, getal) => $(sel).addEventListener("change", e => { S[veld] = getal ? +e.target.value : e.target.value; toon(); });
  kies("#vsVoorA", "voorA"); kies("#vsAchterA", "achterA"); kies("#vsVoorB", "voorB"); kies("#vsAchterB", "achterB");
  kies("#vsWiel", "wiel", true); kies("#vsBand", "band", true);
  [["#vsCadans", "cadans"], ["#vsGewicht", "gewicht"], ["#vsVermogen", "vermogen"]].forEach(([sel, veld]) =>
    $(sel).addEventListener("input", e => { S[veld] = +e.target.value; toon(); }));
  toon();
})();
