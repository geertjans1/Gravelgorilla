/* =========================================================
   Gravel Gorilla — Paklijst bikepacking
   Een afvinklijst die zich aanpast aan je tocht: duur, seizoen, slapen, bevoorrading en koken.
   De vinkjes worden alleen in je eigen browser bewaard (localStorage).
   Teksten in drie talen: [Nederlands, Engels, Duits]. De vinkjes horen bij het Nederlandse woord,
   zodat ze blijven staan als je van taal wisselt.
   ========================================================= */
(function () {
  const wortel = document.querySelector(".pk-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);
  const TAAL = (document.documentElement.lang || "nl").slice(0, 2);
  const T = (nl, en, de) => (TAAL === "en" ? en : TAAL === "de" ? de : nl);
  const kies = a => (Array.isArray(a) ? T(a[0], a[1], a[2]) : a);

  const S = { duur: 1, seizoen: 1, slapen: "tent", bevoorrading: "veel", koken: "nee" };
  const DUUR = [["1 nacht", "1 night", "1 Nacht"], ["2 – 3 nachten", "2 – 3 nights", "2 – 3 Nächte"], ["Een week", "A week", "Eine Woche"], ["Langer dan een week", "Longer than a week", "Länger als eine Woche"]].map(kies);
  const SEIZOEN = [["Zomer", "Summer", "Sommer"], ["Voor- of najaar", "Spring or autumn", "Frühling oder Herbst"], ["Winter", "Winter", "Winter"]].map(kies);
  const buiten = () => S.slapen !== "binnen";
  const koud = () => S.seizoen > 0;

  const G = {
    tassen: ["Tassen", "Bags", "Taschen"], slapen: ["Slapen", "Sleeping", "Schlafen"], kleding: ["Kleding", "Clothing", "Kleidung"], regen: ["Regen", "Rain", "Regen"],
    eten: ["Eten en drinken", "Food and drink", "Essen und Trinken"], koken: ["Koken", "Cooking", "Kochen"], reparatie: ["Reparatie", "Repairs", "Reparatur"],
    elektronica: ["Elektronica", "Electronics", "Elektronik"], verzorging: ["Verzorging", "Personal care", "Pflege"], papieren: ["Papieren en geld", "Documents and money", "Papiere und Geld"]
  };

  // g = groep, n = naam [nl, en, de], gr = gram (gemiddeld), als = wanneer nodig, t = korte tip
  const SPULLEN = [
    { g: "tassen", n: ["Zadeltas (8 – 14 liter)", "Saddle bag (8 – 14 litres)", "Satteltasche (8 – 14 Liter)"], gr: 450 },
    { g: "tassen", n: ["Frametas", "Frame bag", "Rahmentasche"], gr: 250 },
    { g: "tassen", n: ["Stuurrol of stuurtas", "Handlebar roll or bag", "Lenkerrolle oder Lenkertasche"], gr: 400, als: () => buiten() || S.duur >= 1 },
    { g: "tassen", n: ["Bovenbuistasje voor snacks en telefoon", "Top tube bag for snacks and phone", "Oberrohrtasche für Snacks und Handy"], gr: 120 },
    { g: "tassen", n: ["Vorkhouders met extra tassen of flessen", "Fork cages with extra bags or bottles", "Gabelhalter mit Extra-Taschen oder Flaschen"], gr: 300, als: () => S.duur >= 2 && (S.bevoorrading === "weinig" || S.seizoen === 2) },

    { g: "slapen", n: ["Lichte eenpersoonstent", "Light one-person tent", "Leichtes Ein-Personen-Zelt"], gr: 1100, als: () => S.slapen === "tent" },
    { g: "slapen", n: ["Tarp met scheerlijnen en haringen", "Tarp with guylines and pegs", "Tarp mit Abspannleinen und Heringen"], gr: 450, als: () => S.slapen === "bivak" },
    { g: "slapen", n: ["Bivakzak", "Bivvy bag", "Biwaksack"], gr: 350, als: () => S.slapen === "bivak" },
    { g: "slapen", n: ["Opblaasbare slaapmat", "Inflatable sleeping mat", "Aufblasbare Isomatte"], gr: 450, als: buiten, t: ["Kies in voor- en najaar een mat met een R-waarde van 3 of hoger.", "In spring and autumn choose a mat with an R-value of 3 or higher.", "Wähle im Frühling und Herbst eine Matte mit R-Wert 3 oder höher."] },
    { g: "slapen", n: ["Zomerslaapzak (comfort rond 10 °C)", "Summer sleeping bag (comfort around 10 °C)", "Sommerschlafsack (Komfort um 10 °C)"], gr: 600, als: () => buiten() && S.seizoen === 0 },
    { g: "slapen", n: ["Slaapzak voor drie seizoenen (comfort rond 0 °C)", "Three-season sleeping bag (comfort around 0 °C)", "Drei-Jahreszeiten-Schlafsack (Komfort um 0 °C)"], gr: 900, als: () => buiten() && S.seizoen === 1 },
    { g: "slapen", n: ["Winterslaapzak (comfort rond −10 °C)", "Winter sleeping bag (comfort around −10 °C)", "Winterschlafsack (Komfort um −10 °C)"], gr: 1400, als: () => buiten() && S.seizoen === 2 },
    { g: "slapen", n: ["Opblaaskussen", "Inflatable pillow", "Aufblasbares Kissen"], gr: 60, als: buiten },
    { g: "slapen", n: ["Lakenzak", "Sleeping bag liner", "Hüttenschlafsack"], gr: 150, als: () => S.slapen === "binnen" },
    { g: "slapen", n: ["Oordopjes en slaapmasker", "Earplugs and eye mask", "Ohrstöpsel und Schlafmaske"], gr: 20 },

    { g: "kleding", n: ["Reserve fietsbroek", "Spare cycling shorts", "Ersatz-Radhose"], gr: 180, als: () => S.duur >= 1 },
    { g: "kleding", n: ["Reserve fietsshirt (merino droogt snel en stinkt niet)", "Spare cycling jersey (merino dries fast and doesn't smell)", "Ersatztrikot (Merino trocknet schnell und riecht nicht)"], gr: 150 },
    { g: "kleding", n: ["Extra paar sokken", "Extra pair of socks", "Extra Paar Socken"], gr: 50 },
    { g: "kleding", n: ["Armstukken", "Arm warmers", "Armlinge"], gr: 80, als: () => S.seizoen < 2 },
    { g: "kleding", n: ["Beenstukken of kniestukken", "Leg or knee warmers", "Beinlinge oder Knielinge"], gr: 120, als: koud },
    { g: "kleding", n: ["Windvest", "Wind gilet", "Windweste"], gr: 90 },
    { g: "kleding", n: ["Warme laag voor 's avonds (fleece of donsjas)", "Warm layer for the evening (fleece or down jacket)", "Warme Schicht für abends (Fleece oder Daunenjacke)"], gr: 300 },
    { g: "kleding", n: ["Buff of dunne muts", "Buff or thin hat", "Buff oder dünne Mütze"], gr: 50 },
    { g: "kleding", n: ["Lange handschoenen", "Long-finger gloves", "Langfingerhandschuhe"], gr: 80, als: () => S.seizoen === 1 },
    { g: "kleding", n: ["Winterhandschoenen", "Winter gloves", "Winterhandschuhe"], gr: 150, als: () => S.seizoen === 2 },
    { g: "kleding", n: ["Overschoenen", "Overshoes", "Überschuhe"], gr: 150, als: koud },
    { g: "kleding", n: ["Droge kleren voor op de camping of het hotel", "Dry clothes for the campsite or hotel", "Trockene Kleidung für Campingplatz oder Hotel"], gr: 250 },
    { g: "kleding", n: ["Lichte schoenen of slippers", "Light shoes or flip-flops", "Leichte Schuhe oder Badelatschen"], gr: 200, als: () => S.duur >= 1 },

    { g: "regen", n: ["Regenjack", "Rain jacket", "Regenjacke"], gr: 250 },
    { g: "regen", n: ["Regenbroek", "Rain trousers", "Regenhose"], gr: 200, als: () => koud() || S.duur >= 2 },
    { g: "regen", n: ["Waterdichte zakjes voor slaapzak en elektronica", "Waterproof bags for sleeping bag and electronics", "Wasserdichte Beutel für Schlafsack und Elektronik"], gr: 60 },

    { g: "eten", n: ["Twee bidons", "Two bottles", "Zwei Trinkflaschen"], gr: 150 },
    { g: "eten", n: ["Extra waterzak of grote fles (1,5 liter)", "Extra water bladder or large bottle (1.5 litres)", "Extra Trinkblase oder große Flasche (1,5 Liter)"], gr: 120, als: () => S.bevoorrading === "weinig" || S.seizoen === 0 },
    { g: "eten", n: ["Waterfilter", "Water filter", "Wasserfilter"], gr: 80, als: () => S.bevoorrading === "weinig" },
    { g: "eten", n: ["Repen, gels en zoute snacks voor een dag", "Bars, gels and salty snacks for a day", "Riegel, Gels und salzige Snacks für einen Tag"], gr: 400 },
    { g: "eten", n: ["Noodmaaltijd voor een avond", "Emergency meal for one evening", "Notmahlzeit für einen Abend"], gr: 150, als: () => S.bevoorrading === "weinig" },
    { g: "eten", n: ["Elektrolytentabletten", "Electrolyte tablets", "Elektrolyttabletten"], gr: 50, als: () => S.seizoen === 0 || S.duur >= 1 },

    { g: "koken", n: ["Brander met gasbusje", "Stove with gas canister", "Kocher mit Gaskartusche"], gr: 350, als: () => S.koken === "ja" },
    { g: "koken", n: ["Pannetje en spork", "Pot and spork", "Topf und Göffel"], gr: 200, als: () => S.koken === "ja" },
    { g: "koken", n: ["Aansteker", "Lighter", "Feuerzeug"], gr: 20, als: () => S.koken === "ja" },
    { g: "koken", n: ["Koffie en havermout voor het ontbijt", "Coffee and oats for breakfast", "Kaffee und Haferflocken fürs Frühstück"], gr: 150, als: () => S.koken === "ja" },

    { g: "reparatie", n: ["Minipomp of CO₂-patronen", "Mini pump or CO₂ cartridges", "Minipumpe oder CO₂-Kartuschen"], gr: 100 },
    { g: "reparatie", n: ["Binnenband (ook als je tubeless rijdt)", "Inner tube (even if you ride tubeless)", "Schlauch (auch wenn du tubeless fährst)"], gr: 110 },
    { g: "reparatie", n: ["Tweede binnenband", "Second inner tube", "Zweiter Schlauch"], gr: 110, als: () => S.duur >= 1 },
    { g: "reparatie", n: ["Tubeless-pluggen", "Tubeless plugs", "Tubeless-Plugs"], gr: 30 },
    { g: "reparatie", n: ["Bandenlichters", "Tyre levers", "Reifenheber"], gr: 20 },
    { g: "reparatie", n: ["Multitool met kettingpons", "Multitool with chain breaker", "Multitool mit Kettennieter"], gr: 180 },
    { g: "reparatie", n: ["Kettingschakel en een flesje olie", "Quick link and a bottle of chain oil", "Kettenschloss und ein Fläschchen Öl"], gr: 60 },
    { g: "reparatie", n: ["Tie-wraps en wat ducttape", "Zip ties and some duct tape", "Kabelbinder und etwas Panzertape"], gr: 50 },
    { g: "reparatie", n: ["Reserve remblokjes", "Spare brake pads", "Ersatzbremsbeläge"], gr: 40, als: () => S.duur >= 2 },
    { g: "reparatie", n: ["Reserve derailleurpad (past op jouw frame)", "Spare derailleur hanger (fits your frame)", "Ersatz-Schaltauge (passend zu deinem Rahmen)"], gr: 30, als: () => S.duur >= 2 },

    { g: "elektronica", n: ["Voor- en achterlicht", "Front and rear light", "Vorder- und Rücklicht"], gr: 200 },
    { g: "elektronica", n: ["Powerbank (10.000 mAh)", "Power bank (10,000 mAh)", "Powerbank (10.000 mAh)"], gr: 220, als: () => S.duur === 1 || S.duur === 0 },
    { g: "elektronica", n: ["Grote powerbank (20.000 mAh)", "Large power bank (20,000 mAh)", "Große Powerbank (20.000 mAh)"], gr: 360, als: () => S.duur >= 2 },
    { g: "elektronica", n: ["Kabels en een stekker met twee usb-poorten", "Cables and a charger with two USB ports", "Kabel und ein Ladegerät mit zwei USB-Anschlüssen"], gr: 100 },
    { g: "elektronica", n: ["Fietscomputer of telefoonhouder met de route erop", "Bike computer or phone mount with the route on it", "Radcomputer oder Handyhalter mit der Route"], gr: 80 },
    { g: "elektronica", n: ["Hoofdlampje", "Head torch", "Stirnlampe"], gr: 80, als: buiten },

    { g: "verzorging", n: ["Zeemcrème", "Chamois cream", "Sitzcreme"], gr: 60 },
    { g: "verzorging", n: ["Zonnebrand en lippenbalsem", "Sunscreen and lip balm", "Sonnencreme und Lippenbalsam"], gr: 80, als: () => S.seizoen < 2 },
    { g: "verzorging", n: ["Tandenborstel en tandpasta", "Toothbrush and toothpaste", "Zahnbürste und Zahnpasta"], gr: 50 },
    { g: "verzorging", n: ["Sneldrogende handdoek", "Quick-dry towel", "Schnelltrocknendes Handtuch"], gr: 100, als: () => S.duur >= 1 || buiten() },
    { g: "verzorging", n: ["EHBO-setje (pleisters, tape, ontsmetting)", "First-aid kit (plasters, tape, antiseptic)", "Erste-Hilfe-Set (Pflaster, Tape, Desinfektion)"], gr: 150 },
    { g: "verzorging", n: ["Pijnstillers en je eigen medicijnen", "Painkillers and your own medication", "Schmerzmittel und deine eigenen Medikamente"], gr: 30 },
    { g: "verzorging", n: ["Toiletpapier en een klein schepje", "Toilet paper and a small trowel", "Toilettenpapier und eine kleine Schaufel"], gr: 100, als: buiten },
    { g: "verzorging", n: ["Muggenspray", "Insect repellent", "Mückenspray"], gr: 80, als: () => S.seizoen === 0 },
    { g: "verzorging", n: ["Handgel", "Hand sanitiser", "Handdesinfektion"], gr: 50 },

    { g: "papieren", n: ["Identiteitsbewijs", "ID or passport", "Ausweis"], gr: 30 },
    { g: "papieren", n: ["Pinpas en wat contant geld", "Bank card and some cash", "Bankkarte und etwas Bargeld"], gr: 20 },
    { g: "papieren", n: ["Zorgpas en reisverzekering (ook op je telefoon)", "Health insurance card and travel insurance (also on your phone)", "Krankenversicherungskarte und Reiseversicherung (auch auf dem Handy)"], gr: 10 },
    { g: "papieren", n: ["Licht fietsslot", "Light bike lock", "Leichtes Fahrradschloss"], gr: 200, als: () => S.slapen === "binnen" || S.duur >= 1 }
  ];
  // vaste sleutel per spul (uit de Nederlandse naam), daarna de tekst in de taal van de pagina
  SPULLEN.forEach((s, i) => {
    s.id = "pk" + i + "-" + s.n[0].replace(/[^a-z]/gi, "").slice(0, 12).toLowerCase();
    s.n = kies(s.n); s.g = kies(G[s.g]); if (s.t) s.t = kies(s.t);
  });

  /* ---------- vinkjes bewaren op dit apparaat ---------- */
  const SLEUTEL = "gg-paklijst";
  let vink = {};
  try { vink = JSON.parse(localStorage.getItem(SLEUTEL) || "{}") || {}; } catch (e) { vink = {}; }
  function bewaar() { try { localStorage.setItem(SLEUTEL, JSON.stringify(vink)); } catch (e) {} }

  const lijst = () => SPULLEN.filter(s => !s.als || s.als());
  const kg = gr => (gr / 1000).toFixed(1).replace(".", TAAL === "en" ? "." : ",") + " kg";

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
    $("#pkVoortgangTekst").textContent = T(klaar + " van " + nu.length + " ingepakt", klaar + " of " + nu.length + " packed", klaar + " von " + nu.length + " eingepackt");
    $("#pkVoortgang").style.width = (nu.length ? klaar / nu.length * 100 : 0) + "%";
    $("#pkDuurUit").textContent = DUUR[S.duur];
    $("#pkSeizoenUit").textContent = SEIZOEN[S.seizoen];
    const zwaar = nu.slice().sort((a, b) => b.gr - a.gr).slice(0, 3).map(s => s.n.split(" (")[0].toLowerCase()).join(", ");
    const duur = DUUR[S.duur].toLowerCase(), seizoen = SEIZOEN[S.seizoen].toLowerCase();
    $("#pkUitleg").textContent = T(
      "Voor " + duur + " in " + (S.seizoen === 1 ? "het voor- of najaar" : "de " + seizoen) + ". De zwaarste spullen: " + zwaar + ". Daar win je het meeste als je lichter wilt.",
      "For " + duur + " in " + seizoen + ". The heaviest items: " + zwaar + ". That's where you gain most if you want to go lighter.",
      "Für " + DUUR[S.duur].replace("Eine", "eine").replace("Länger", "länger") + " im " + SEIZOEN[S.seizoen] + ". Die schwersten Sachen: " + zwaar + ". Dort sparst du am meisten, wenn du leichter willst.");
    $("#pkTip").textContent = S.bevoorrading === "weinig"
      ? T("Tip: weinig winkels onderweg? Zoek vooraf waterpunten en supermarkten op je route en neem eten mee voor minstens een dag extra.",
          "Tip: few shops on the way? Look up water points and supermarkets on your route in advance and carry food for at least one extra day.",
          "Tipp: Wenig Geschäfte unterwegs? Such vorher Wasserstellen und Supermärkte auf deiner Route und nimm Essen für mindestens einen Tag extra mit.")
      : S.seizoen === 2
        ? T("Tip: in de winter is het vroeg donker en koud. Houd je slaapzak en droge kleren altijd droog in een waterdicht zakje.",
            "Tip: in winter it gets dark and cold early. Always keep your sleeping bag and dry clothes dry in a waterproof bag.",
            "Tipp: Im Winter wird es früh dunkel und kalt. Halte Schlafsack und trockene Kleidung immer in einem wasserdichten Beutel trocken.")
        : T("Tip: pak zware spullen laag en midden op de fiets (frametas), lichte en volumineuze spullen voor en achter. Dan stuurt je fiets het rustigst.",
            "Tip: pack heavy items low and in the middle of the bike (frame bag), light and bulky items at the front and back. Then your bike steers most calmly.",
            "Tipp: Pack schwere Sachen tief und mittig ans Rad (Rahmentasche), leichte und voluminöse vorne und hinten. Dann lenkt dein Rad am ruhigsten.");
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
    const tekst = T("Paklijst bikepacking", "Bikepacking packing list", "Bikepacking-Packliste") + " (" + DUUR[S.duur].toLowerCase() + ", " + SEIZOEN[S.seizoen].toLowerCase() + ") — gravelgorilla.nl\n" +
      [...new Set(nu.map(s => s.g))].map(g => "\n" + g.toUpperCase() + "\n" + nu.filter(s => s.g === g).map(s => (vink[s.id] ? "[x] " : "[ ] ") + s.n).join("\n")).join("\n");
    const klaar = () => { $("#pkMelding").textContent = T("Gekopieerd! Plak het in je notities of in een berichtje.", "Copied! Paste it into your notes or a message.", "Kopiert! Füg es in deine Notizen oder eine Nachricht ein."); };
    if (navigator.clipboard) navigator.clipboard.writeText(tekst).then(klaar, () => { $("#pkMelding").textContent = T("Kopiëren lukte niet in deze browser.", "Copying didn't work in this browser.", "Kopieren hat in diesem Browser nicht geklappt."); });
  });
  $("#pkPrint").addEventListener("click", () => window.print());
  $("#pkWis").addEventListener("click", () => { vink = {}; bewaar(); teken(); $("#pkMelding").textContent = T("Alle vinkjes zijn gewist.", "All ticks have been cleared.", "Alle Häkchen wurden gelöscht."); });

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
