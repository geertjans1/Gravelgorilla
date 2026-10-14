/* =========================================================
   Gravel Gorilla — Paklijst bikepacking
   Een afvinklijst die zich aanpast aan je tocht: duur, seizoen, slapen, bevoorrading en koken.
   De vinkjes worden alleen in je eigen browser bewaard (localStorage).
   ========================================================= */
(function () {
  const wortel = document.querySelector(".pk-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);

  const S = { duur: 1, seizoen: 1, slapen: "tent", bevoorrading: "veel", koken: "nee" };
  const DUUR = ["1 nacht", "2 – 3 nachten", "Een week", "Langer dan een week"];
  const SEIZOEN = ["Zomer", "Voor- of najaar", "Winter"];
  const buiten = () => S.slapen !== "binnen";
  const koud = () => S.seizoen > 0;

  // g = groep, n = naam, gr = gram (gemiddeld), als = wanneer nodig, t = korte tip
  const SPULLEN = [
    { g: "Tassen", n: "Zadeltas (8 – 14 liter)", gr: 450 },
    { g: "Tassen", n: "Frametas", gr: 250 },
    { g: "Tassen", n: "Stuurrol of stuurtas", gr: 400, als: () => buiten() || S.duur >= 1 },
    { g: "Tassen", n: "Bovenbuistasje voor snacks en telefoon", gr: 120 },
    { g: "Tassen", n: "Vorkhouders met extra tassen of flessen", gr: 300, als: () => S.duur >= 2 && (S.bevoorrading === "weinig" || S.seizoen === 2) },

    { g: "Slapen", n: "Lichte eenpersoonstent", gr: 1100, als: () => S.slapen === "tent" },
    { g: "Slapen", n: "Tarp met scheerlijnen en haringen", gr: 450, als: () => S.slapen === "bivak" },
    { g: "Slapen", n: "Bivakzak", gr: 350, als: () => S.slapen === "bivak" },
    { g: "Slapen", n: "Opblaasbare slaapmat", gr: 450, als: buiten, t: "Kies in voor- en najaar een mat met een R-waarde van 3 of hoger." },
    { g: "Slapen", n: "Zomerslaapzak (comfort rond 10 °C)", gr: 600, als: () => buiten() && S.seizoen === 0 },
    { g: "Slapen", n: "Slaapzak voor drie seizoenen (comfort rond 0 °C)", gr: 900, als: () => buiten() && S.seizoen === 1 },
    { g: "Slapen", n: "Winterslaapzak (comfort rond −10 °C)", gr: 1400, als: () => buiten() && S.seizoen === 2 },
    { g: "Slapen", n: "Opblaaskussen", gr: 60, als: buiten },
    { g: "Slapen", n: "Lakenzak", gr: 150, als: () => S.slapen === "binnen" },
    { g: "Slapen", n: "Oordopjes en slaapmasker", gr: 20 },

    { g: "Kleding", n: "Reserve fietsbroek", gr: 180, als: () => S.duur >= 1 },
    { g: "Kleding", n: "Reserve fietsshirt (merino droogt snel en stinkt niet)", gr: 150 },
    { g: "Kleding", n: "Extra paar sokken", gr: 50 },
    { g: "Kleding", n: "Armstukken", gr: 80, als: () => S.seizoen < 2 },
    { g: "Kleding", n: "Beenstukken of kniestukken", gr: 120, als: koud },
    { g: "Kleding", n: "Windvest", gr: 90 },
    { g: "Kleding", n: "Warme laag voor 's avonds (fleece of donsjas)", gr: 300 },
    { g: "Kleding", n: "Buff of dunne muts", gr: 50 },
    { g: "Kleding", n: "Lange handschoenen", gr: 80, als: () => S.seizoen === 1 },
    { g: "Kleding", n: "Winterhandschoenen", gr: 150, als: () => S.seizoen === 2 },
    { g: "Kleding", n: "Overschoenen", gr: 150, als: koud },
    { g: "Kleding", n: "Droge kleren voor op de camping of het hotel", gr: 250 },
    { g: "Kleding", n: "Lichte schoenen of slippers", gr: 200, als: () => S.duur >= 1 },

    { g: "Regen", n: "Regenjack", gr: 250 },
    { g: "Regen", n: "Regenbroek", gr: 200, als: () => koud() || S.duur >= 2 },
    { g: "Regen", n: "Waterdichte zakjes voor slaapzak en elektronica", gr: 60 },

    { g: "Eten en drinken", n: "Twee bidons", gr: 150 },
    { g: "Eten en drinken", n: "Extra waterzak of grote fles (1,5 liter)", gr: 120, als: () => S.bevoorrading === "weinig" || S.seizoen === 0 },
    { g: "Eten en drinken", n: "Waterfilter", gr: 80, als: () => S.bevoorrading === "weinig" },
    { g: "Eten en drinken", n: "Repen, gels en zoute snacks voor een dag", gr: 400 },
    { g: "Eten en drinken", n: "Noodmaaltijd voor een avond", gr: 150, als: () => S.bevoorrading === "weinig" },
    { g: "Eten en drinken", n: "Elektrolytentabletten", gr: 50, als: () => S.seizoen === 0 || S.duur >= 1 },

    { g: "Koken", n: "Brander met gasbusje", gr: 350, als: () => S.koken === "ja" },
    { g: "Koken", n: "Pannetje en spork", gr: 200, als: () => S.koken === "ja" },
    { g: "Koken", n: "Aansteker", gr: 20, als: () => S.koken === "ja" },
    { g: "Koken", n: "Koffie en havermout voor het ontbijt", gr: 150, als: () => S.koken === "ja" },

    { g: "Reparatie", n: "Minipomp of CO₂-patronen", gr: 100 },
    { g: "Reparatie", n: "Binnenband (ook als je tubeless rijdt)", gr: 110 },
    { g: "Reparatie", n: "Tweede binnenband", gr: 110, als: () => S.duur >= 1 },
    { g: "Reparatie", n: "Tubeless-pluggen", gr: 30 },
    { g: "Reparatie", n: "Bandenlichters", gr: 20 },
    { g: "Reparatie", n: "Multitool met kettingpons", gr: 180 },
    { g: "Reparatie", n: "Kettingschakel en een flesje olie", gr: 60 },
    { g: "Reparatie", n: "Tie-wraps en wat ducttape", gr: 50 },
    { g: "Reparatie", n: "Reserve remblokjes", gr: 40, als: () => S.duur >= 2 },
    { g: "Reparatie", n: "Reserve derailleurpad (past op jouw frame)", gr: 30, als: () => S.duur >= 2 },

    { g: "Elektronica", n: "Voor- en achterlicht", gr: 200 },
    { g: "Elektronica", n: "Powerbank (10.000 mAh)", gr: 220, als: () => S.duur === 1 || S.duur === 0 },
    { g: "Elektronica", n: "Grote powerbank (20.000 mAh)", gr: 360, als: () => S.duur >= 2 },
    { g: "Elektronica", n: "Kabels en een stekker met twee usb-poorten", gr: 100 },
    { g: "Elektronica", n: "Fietscomputer of telefoonhouder met de route erop", gr: 80 },
    { g: "Elektronica", n: "Hoofdlampje", gr: 80, als: buiten },

    { g: "Verzorging", n: "Zeemcrème", gr: 60 },
    { g: "Verzorging", n: "Zonnebrand en lippenbalsem", gr: 80, als: () => S.seizoen < 2 },
    { g: "Verzorging", n: "Tandenborstel en tandpasta", gr: 50 },
    { g: "Verzorging", n: "Sneldrogende handdoek", gr: 100, als: () => S.duur >= 1 || buiten() },
    { g: "Verzorging", n: "EHBO-setje (pleisters, tape, ontsmetting)", gr: 150 },
    { g: "Verzorging", n: "Pijnstillers en je eigen medicijnen", gr: 30 },
    { g: "Verzorging", n: "Toiletpapier en een klein schepje", gr: 100, als: buiten },
    { g: "Verzorging", n: "Muggenspray", gr: 80, als: () => S.seizoen === 0 },
    { g: "Verzorging", n: "Handgel", gr: 50 },

    { g: "Papieren en geld", n: "Identiteitsbewijs", gr: 30 },
    { g: "Papieren en geld", n: "Pinpas en wat contant geld", gr: 20 },
    { g: "Papieren en geld", n: "Zorgpas en reisverzekering (ook op je telefoon)", gr: 10 },
    { g: "Papieren en geld", n: "Licht fietsslot", gr: 200, als: () => S.slapen === "binnen" || S.duur >= 1 }
  ];
  SPULLEN.forEach((s, i) => { s.id = "pk" + i + "-" + s.n.replace(/[^a-z]/gi, "").slice(0, 12).toLowerCase(); });

  /* ---------- vinkjes bewaren op dit apparaat ---------- */
  const SLEUTEL = "gg-paklijst";
  let vink = {};
  try { vink = JSON.parse(localStorage.getItem(SLEUTEL) || "{}") || {}; } catch (e) { vink = {}; }
  function bewaar() { try { localStorage.setItem(SLEUTEL, JSON.stringify(vink)); } catch (e) {} }

  const lijst = () => SPULLEN.filter(s => !s.als || s.als());
  const kg = gr => (gr / 1000).toFixed(1).replace(".", ",") + " kg";

  function teken() {
    const nu = lijst();
    const groepen = [...new Set(nu.map(s => s.g))];
    $("#pkLijst").innerHTML = groepen.map(g => {
      const items = nu.filter(s => s.g === g);
      const gr = items.reduce((t, s) => t + s.gr, 0);
      return '<section class="pk-groep"><h3>' + g + " <small>" + kg(gr) + "</small></h3><ul>" +
        items.map(s => '<li><label><input type="checkbox" data-id="' + s.id + '"' + (vink[s.id] ? " checked" : "") + "><span>" + s.n +
          (s.t ? '<small class="pk-tip">' + s.t + "</small>" : "") + '</span><em>' + s.gr + " g</em></label></li>").join("") + "</ul></section>";
    }).join("");
    tel();
  }

  function tel() {
    const nu = lijst();
    const totaal = nu.reduce((t, s) => t + s.gr, 0);
    const klaar = nu.filter(s => vink[s.id]).length;
    $("#pkAantal").textContent = nu.length;
    $("#pkGewicht").textContent = kg(totaal);
    $("#pkVoortgangTekst").textContent = klaar + " van " + nu.length + " ingepakt";
    $("#pkVoortgang").style.width = (nu.length ? klaar / nu.length * 100 : 0) + "%";
    $("#pkDuurUit").textContent = DUUR[S.duur];
    $("#pkSeizoenUit").textContent = SEIZOEN[S.seizoen];
    const zwaar = nu.slice().sort((a, b) => b.gr - a.gr).slice(0, 3).map(s => s.n.split(" (")[0].toLowerCase());
    $("#pkUitleg").textContent = "Voor " + DUUR[S.duur].toLowerCase() + " in " + (S.seizoen === 1 ? "het voor- of najaar" : "de " + SEIZOEN[S.seizoen].toLowerCase()) +
      ". De zwaarste spullen: " + zwaar.join(", ") + ". Daar win je het meeste als je lichter wilt.";
    $("#pkTip").textContent = S.bevoorrading === "weinig"
      ? "Tip: weinig winkels onderweg? Zoek vooraf waterpunten en supermarkten op je route en neem eten mee voor minstens een dag extra."
      : S.seizoen === 2
        ? "Tip: in de winter is het vroeg donker en koud. Houd je slaapzak en droge kleren altijd droog in een waterdicht zakje."
        : "Tip: pak zware spullen laag en midden op de fiets (frametas), lichte en volumineuze spullen voor en achter. Dan stuurt je fiets het rustigst.";
  }

  /* ---------- knoppen ---------- */
  $("#pkLijst").addEventListener("change", e => {
    const v = e.target.closest("input[data-id]");
    if (!v) return;
    vink[v.dataset.id] = v.checked;
    bewaar();
    tel();
  });
  $("#pkKopieer").addEventListener("click", () => {
    const nu = lijst();
    const tekst = "Paklijst bikepacking (" + DUUR[S.duur].toLowerCase() + ", " + SEIZOEN[S.seizoen].toLowerCase() + ") — gravelgorilla.nl\n" +
      [...new Set(nu.map(s => s.g))].map(g => "\n" + g.toUpperCase() + "\n" + nu.filter(s => s.g === g).map(s => (vink[s.id] ? "[x] " : "[ ] ") + s.n).join("\n")).join("\n");
    const klaar = () => { $("#pkMelding").textContent = "Gekopieerd! Plak het in je notities of in een berichtje."; };
    if (navigator.clipboard) navigator.clipboard.writeText(tekst).then(klaar, () => { $("#pkMelding").textContent = "Kopiëren lukte niet in deze browser."; });
  });
  $("#pkPrint").addEventListener("click", () => window.print());
  $("#pkWis").addEventListener("click", () => { vink = {}; bewaar(); teken(); $("#pkMelding").textContent = "Alle vinkjes zijn gewist."; });

  const schuif = (sel, veld) => $(sel).addEventListener("input", e => { S[veld] = +e.target.value; teken(); });
  schuif("#pkDuur", "duur");
  schuif("#pkSeizoen", "seizoen");
  wortel.querySelectorAll(".wb-schaal").forEach(schaal => schaal.addEventListener("click", e => {
    const k = e.target.closest("button[data-stand]");
    if (!k) return;
    const s = $(schaal.dataset.voor);
    s.value = k.dataset.stand;
    s.dispatchEvent(new Event("input", { bubbles: true }));
  }));
  wortel.querySelectorAll(".wb-chips").forEach(groep => groep.addEventListener("click", e => {
    const k = e.target.closest("button");
    if (!k) return;
    groep.querySelectorAll("button").forEach(b => { b.classList.toggle("is-aan", b === k); b.setAttribute("aria-pressed", b === k); });
    S[groep.dataset.veld] = k.dataset.waarde;
    teken();
  }));
  teken();
})();
