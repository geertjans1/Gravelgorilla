/* =========================================================
   Gravel Gorilla — Maatbepaler
   Van lichaamslengte en binnenbeenlengte naar een framemaat, zadelhoogte en stack/reach.
   Richtwaarden voor gravelbikes; geen vervanging van een bikefitting.
   ========================================================= */
(function () {
  const wortel = document.querySelector(".mb-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);

  // gangbare gravelmaten: midden van het lengtebereik, framemaat (cm), lengte van/tot, stack en reach (mm)
  const MATEN = [
    { maat: "XS", cm: "48 – 50", van: 152, tot: 162, stack: 530, reach: 365, standover: 72 },
    { maat: "S", cm: "51 – 52", van: 160, tot: 170, stack: 550, reach: 375, standover: 76 },
    { maat: "M", cm: "53 – 54", van: 168, tot: 178, stack: 575, reach: 385, standover: 79 },
    { maat: "L", cm: "55 – 56", van: 176, tot: 186, stack: 600, reach: 395, standover: 82 },
    { maat: "XL", cm: "57 – 58", van: 184, tot: 194, stack: 625, reach: 405, standover: 85 },
    { maat: "XXL", cm: "60 – 61", van: 192, tot: 205, stack: 650, reach: 415, standover: 88 }
  ];
  const S = { lengte: 178, been: 83, romp: "normaal", stijl: "allround" };

  function advies() {
    const redenen = [];
    // positie op de schaal: XS = 0 … XXL = 5, het midden van elke maat ligt 8 cm uit elkaar
    let idx = (S.lengte - 157) / 8;
    const verhouding = S.been / S.lengte;
    if (verhouding > 0.475) { idx -= 0.3; redenen.push("Je hebt lange benen voor je lengte: een iets kleiner frame met een hogere zadelpen past dan vaak beter."); }
    else if (verhouding < 0.445) { idx += 0.3; redenen.push("Je hebt een lang bovenlijf voor je lengte: een iets langer frame geeft je meer ruimte."); }
    if (S.romp === "lang") { idx += 0.3; redenen.push("Met lange armen en bovenlijf zit je op een langer frame minder opgevouwen."); }
    if (S.romp === "kort") { idx -= 0.3; redenen.push("Met een korter bovenlijf hoef je op een kleiner frame minder ver te reiken."); }
    if (S.stijl === "sportief") { idx += 0.15; redenen.push("Sportief zitten: kies bij twijfel de grotere maat, die is langer en lager."); }
    if (S.stijl === "comfort") { idx -= 0.2; redenen.push("Comfortabel rechtop: kies bij twijfel de kleinere maat, met een korter, hoger front."); }
    idx = Math.max(0, Math.min(MATEN.length - 1, idx));
    const keuze = Math.round(idx);
    const rest = idx - Math.floor(idx);
    const twijfel = rest > 0.35 && rest < 0.65 && Math.floor(idx) < MATEN.length - 1;
    const andere = twijfel ? (keuze === Math.floor(idx) ? keuze + 1 : keuze - 1) : null;
    // past de maat over het frame heen? (staan boven de bovenbuis met een paar cm ruimte)
    if (S.been < MATEN[keuze].standover + 2) redenen.push("Let op: met jouw binnenbeen heb je weinig ruimte boven de bovenbuis. Kijk naar een model met een lage bovenbuis (veel dames- en compacte frames).");
    return { keuze, andere, idx, redenen, zadel: S.been * 0.883 };
  }

  function toon() {
    const a = advies(), m = MATEN[a.keuze];
    $("#mbLengteUit").textContent = S.lengte + " cm";
    $("#mbBinnenbeenUit").textContent = S.been + " cm";
    $("#mbMaat").textContent = a.andere != null ? MATEN[Math.min(a.keuze, a.andere)].maat + " / " + MATEN[Math.max(a.keuze, a.andere)].maat : m.maat;
    $("#mbCm").textContent = m.cm;
    $("#mbZadel").textContent = a.zadel.toFixed(1).replace(".", ",") + " cm";
    $("#mbGeo").textContent = m.stack + " / " + m.reach;
    $("#mbUitleg").textContent = a.andere != null
      ? "Je zit precies tussen maat " + [m.maat, MATEN[a.andere].maat].sort((x, y) => MATEN.findIndex(z => z.maat === x) - MATEN.findIndex(z => z.maat === y)).join(" en ") +
        ". De gorilla kiest " + m.maat + ", om de redenen hieronder. Bij twijfel geldt: de kleinere maat is wendbaarder en rechtop, de grotere is stabieler en sportiever."
      : "Maat " + m.maat + " past het best bij jouw lengte (" + S.lengte + " cm) en binnenbeenlengte (" + S.been + " cm).";
    $("#mbRedenen").innerHTML = a.redenen.map(r => "<li>" + r + "</li>").join("");
    $("#mbTabel").innerHTML = MATEN.map((x, i) =>
      '<tr class="' + (i === a.keuze ? "is-jij" : i === a.andere ? "is-twijfel" : "") + '"><td><b>' + x.maat + "</b>" + (i === a.keuze ? " ← jij" : i === a.andere ? " (ook mogelijk)" : "") +
      "</td><td>" + x.cm + " cm</td><td>" + x.van + " – " + x.tot + ' cm</td><td class="wb-getal">' + x.stack + ' mm</td><td class="wb-getal">' + x.reach + " mm</td></tr>").join("");
  }

  /* ---------- schuifjes en knoppen ---------- */
  $("#mbLengte").addEventListener("input", e => {
    S.lengte = +e.target.value;
    toon();
  });
  $("#mbBinnenbeen").addEventListener("input", e => { S.been = +e.target.value; toon(); });
  wortel.querySelectorAll(".wb-chips").forEach(groep => {
    groep.addEventListener("click", e => {
      const k = e.target.closest("button");
      if (!k) return;
      groep.querySelectorAll("button").forEach(b => { b.classList.toggle("is-aan", b === k); b.setAttribute("aria-pressed", b === k); });
      S[groep.dataset.veld] = k.dataset.waarde;
      toon();
    });
  });
  toon();
})();
