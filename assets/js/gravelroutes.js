/* =========================================================
   Gravel Gorilla — Gravelroutes in Nederland en België
   Lijst met bestaande gravelroutes, met een link naar de bron (GPX of bewegwijzering).
   Bronnen (oktober 2026): mtbroutes.nl (officiële MTB-routes met gravelvariant),
   drenthe.nl, Komoot/Velozine (Green Divide) en de Sporza Onverhard-routes (Vlaanderen).
   Nieuwe route? Voeg hem toe aan ROUTES, met een bron die je zelf hebt gecontroleerd.
   ========================================================= */
(function () {
  const wortel = document.querySelector(".gr-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);

  const MTB = "mtbroutes.nl", SPORZA = "Sporza Onverhard";
  // n = naam, p = provincies, land, km (tot = langste variant), nav: bord (bewegwijzerd) of gpx, bron, u = link, noot
  const ROUTES = [
    { n: "Sint-Geertruid (Gravel)", p: ["LI"], land: "NL", km: 31.1, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/sint-geertruid-1" },
    { n: "Mechelen (Gravel)", p: ["LI"], land: "NL", km: 24.2, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/mechelen-2" },
    { n: "Maastricht Scharn (Gravel)", p: ["LI"], land: "NL", km: 28.9, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/maastricht-scharn-1" },
    { n: "Margraten (Gravel)", p: ["LI"], land: "NL", km: 30.5, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/margraten-gravel" },
    { n: "Maastricht Sint-Pietersberg – Riemst (Gravel)", p: ["LI"], land: "NL", km: 11.9, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/maastricht-st-pietersberg-riemst-1" },
    { n: "Nuth – Voerendaal (Gravel)", p: ["LI"], land: "NL", km: 36.0, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/nuth-voerendaal" },
    { n: "Beek (Gravel)", p: ["LI"], land: "NL", km: 36.0, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/beek" },
    { n: "Horst (Gravel)", p: ["LI"], land: "NL", km: 47.3, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/horst-1" },
    { n: "Sittard – Geleen (Gravel)", p: ["LI"], land: "NL", km: 12.5, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/sittard-geleen" },
    { n: "Echt – Susteren (Gravel)", p: ["LI"], land: "NL", km: 51.1, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/limburg/echt-susteren" },
    { n: "Rheden (Gravel)", p: ["GE"], land: "NL", km: 36.5, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/rheden-1", noot: "Langs de Posbank. Kijk op de bronpagina of je een vignet nodig hebt." },
    { n: "Winterswijk (Gravel)", p: ["GE"], land: "NL", km: 47.0, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/winterswijk-1" },
    { n: "Zeddam (Gravel)", p: ["GE"], land: "NL", km: 17.6, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/zeddam-1" },
    { n: "Zieuwent (Gravel)", p: ["GE"], land: "NL", km: 60.8, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/zieuwent" },
    { n: "Groenlo (Gravel)", p: ["GE"], land: "NL", km: 30.9, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/groenlo-1" },
    { n: "Neede (Gravel)", p: ["GE"], land: "NL", km: 27.4, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/neede" },
    { n: "Vragender (Gravel)", p: ["GE"], land: "NL", km: 18.3, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/gelderland/vragender" },
    { n: "Heinkenszand (Gravel)", p: ["ZE"], land: "NL", km: 38.8, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/zeeland/heinkenszand" },
    { n: "Burgh-Haamstede (Gravel)", p: ["ZE"], land: "NL", km: 39.8, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/zeeland/burgh-haamstede" },
    { n: "Zierikzee (Gravel)", p: ["ZE"], land: "NL", km: 24.8, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/zeeland/zierikzee" },
    { n: "Ruinen – Dwingelderveld (Gravel)", p: ["DR"], land: "NL", km: 21.3, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/drenthe/ruinen-dwingelderveld", noot: "Start bij Buitencentrum De Poort in Ruinen." },
    { n: "Veenhuizen (Gravel)", p: ["DR"], land: "NL", km: 57.3, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/drenthe/veenhuizen" },
    { n: "Havelte Oost (Gravel)", p: ["DR"], land: "NL", km: 25.7, nav: "bord", bron: MTB, u: "https://www.mtbroutes.nl/drenthe/havelte-oost" },
    { n: "Gravelroute Kop van Drenthe (Lebbestaok)", p: ["DR"], land: "NL", km: 70, nav: "gpx", bron: "Drenthe.nl", u: "https://www.drenthe.nl/fietsen-wandelen/routes/2139787477/vaste-gravelroute-noordenveld", noot: "Start in Veenhuizen. Schelpenpaden, zandwegen en kasseien langs de Essen van Norg." },
    { n: "Green Divide", p: ["UT", "GE", "OV"], land: "NL", km: 300, nav: "gpx", bron: "Komoot", u: "https://www.komoot.com/nl-nl/collection/1176472", noot: "Van station Naarden-Bussum over de Utrechtse Heuvelrug en de Veluwe naar Zwolle. Meerdaags of in stukken." },

    { n: "Gravelnetwerk Noorderkempen (4 routes)", p: ["AN"], land: "BE", km: 66, tot: 101, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/04/08/keuze-uit-vier-routes-tussen-de-66-en-101-km-ontdek-net-als-bav~1775652921892/" },
    { n: "Zoersel", p: ["AN"], land: "BE", km: 59, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/14/ontdek-de-sporza-onverhard-gravelroute-in-zoersel-59-km~1755177697390/" },
    { n: "Graaf Graveldag Herentals (3 routes)", p: ["AN"], land: "BE", km: 41, tot: 107, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/06/18/41-69-of-107-km-download-de-3-onverhard-gravelroutes-van-de-graaf-graveldag-in-herentals~1750239309423/" },
    { n: "Puurs-Sint-Amands en Bornem", p: ["AN"], land: "BE", km: 90, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/05/06/ontdek-net-als-bert-de-onverhard-gravelroute-in-puurs-sint-amands-en-bornem-90-km~1746607907575/" },
    { n: "Hamont-Achel", p: ["LB"], land: "BE", km: 32, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2026/03/12/32-kilometer-puur-limburgs-natuurplezier-ontdek-de-onverhard-route-in-hamont-achel~1773316236769/" },
    { n: "Voerstreek vanuit Riemst", p: ["LB"], land: "BE", km: 52, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/08/ontdek-de-voerstreek-met-de-sporza-onverhard-gravelroute-vanuit-riemst-52-km~1754640219116/" },
    { n: "Haspengouw vanuit Diepenbeek", p: ["LB"], land: "BE", km: 59, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/06/ontdek-het-mooie-haspengouw-met-de-onverhard-gravelroute-vanuit-diepenbeek-59-km~1754468481960/", noot: "Start bij Demerstrand in Diepenbeek. Ongeveer een kwart onverhard." },
    { n: "As en Oudsbergen (Hoge Kempen)", p: ["LB"], land: "BE", km: 37, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/05/27/ontdek-de-onverhard-gravelroute-in-as-en-oudsbergen-37-km~1748345933530/", noot: "Start bij station As, door Nationaal Park Hoge Kempen." },
    { n: "Peer en Pelt", p: ["LB"], land: "BE", km: 90, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/05/15/ontdek-de-onverhard-gravelroute-in-peer-en-pelt-90-km~1747297726638/" },
    { n: "Gavere", p: ["OV"], land: "BE", km: 40, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/08/08/ontdek-de-sporza-onverhard-gravelroute-in-gavere-40-km~1754640669489/" },
    { n: "Aalst", p: ["OV"], land: "BE", km: 58, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/07/16/ontdek-de-sporza-onverhard-gravelroute-in-aalst-58-km~1752660553636/" },
    { n: "Blaarmeersen – Evergem", p: ["OV"], land: "BE", km: 96, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/04/24/ontdek-de-onverhard-gravelroute-blaarmeersen-evergem-96-km~1745936321348/" },
    { n: "Frans Claes-route Leuven", p: ["VB"], land: "BE", km: 130, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/05/22/ontdek-de-onverhard-gravelroute-frans-claes-in-leuven-130-km~1747927389031/" },
    { n: "Zoniënwoud – Tervuren", p: ["VB"], land: "BE", km: 42, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/04/24/ontdek-de-onverhard-gravelroute-zonienwoud-tervuren-42-km~1745936523284/" },
    { n: "Marathonroute aan de Kust", p: ["WV"], land: "BE", km: 107, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/11/20/107-kilometer-fietsplezier-ontdek-de-onverhard-marathonroute-aan-de-kust~1763629208523/" },
    { n: "Heuvelland (met de Kemmelberg)", p: ["WV"], land: "BE", km: 77, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/09/25/met-passage-over-de-kemmelberg-en-plugstreets-ontdek-de-onverhard-route-in-het-heuvelland-77-km~1758804967421/" },
    { n: "Ledegem", p: ["WV"], land: "BE", km: 42, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/09/08/ontdek-de-onverhard-gravelroute-in-ledegem-42-km~1757327254354/" },
    { n: "Anzegem", p: ["WV"], land: "BE", km: 36, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/07/31/ontdek-de-sporza-onverhard-gravelroute-in-anzegem-36-km~1752660548387/" },
    { n: "Jabbeke", p: ["WV"], land: "BE", km: 36, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/06/05/ontdek-de-onverhard-gravelroute-in-jabbeke-met-extra-s-36-km~1749108323488/" },
    { n: "Beernem", p: ["WV"], land: "BE", km: 32, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/04/24/ontdek-net-als-bavo-de-onverhard-gravelroute-in-beernem-32-km~1745488342829/" },
    { n: "Driedaagse Onverhard-bikepackroute", p: [], land: "BE", km: 333, nav: "gpx", bron: SPORZA, u: "https://sporza.be/nl/2025/09/22/klaar-voor-een-heus-bikepack-avontuur-ontdek-de-driedaagse-onverhard-route-333-km~1758536959767/", noot: "Drie dagen door Vlaanderen, met overnachtingen." }
  ];
  window.GG_ROUTES = ROUTES; // voor Vraag de Gorilla

  // tegelkaart: kolom, rij
  const PROV = {
    FR: ["Friesland", 2, 0, "NL"], GR: ["Groningen", 3, 0, "NL"], NH: ["Noord-Holland", 1, 1, "NL"], FL: ["Flevoland", 2, 1, "NL"], DR: ["Drenthe", 3, 1, "NL"],
    ZH: ["Zuid-Holland", 1, 2, "NL"], UT: ["Utrecht", 2, 2, "NL"], OV: ["Overijssel", 3, 2, "NL"], ZE: ["Zeeland", 0, 3, "NL"], NB: ["Noord-Brabant", 1, 3, "NL", 2],
    GE: ["Gelderland", 3, 3, "NL"], LI: ["Limburg (NL)", 2, 4, "NL"],
    WV: ["West-Vlaanderen", 0, 5, "BE"], OVB: ["Oost-Vlaanderen", 1, 5, "BE"], AN: ["Antwerpen", 2, 5, "BE"], LB: ["Limburg (BE)", 3, 5, "BE"],
    HE: ["Henegouwen", 0, 6, "BE"], VB: ["Vlaams-Brabant", 1, 6, "BE"], WB: ["Waals-Brabant", 2, 6, "BE"], LU: ["Luik", 3, 6, "BE"],
    NA: ["Namen", 1, 7, "BE"], LX: ["Luxemburg", 2, 7, "BE"]
  };
  // in de routes heet Oost-Vlaanderen ook "OV", net als Overijssel: bij Belgische routes wordt dat OVB
  ROUTES.forEach(r => { if (r.land === "BE") r.p = r.p.map(p => (p === "OV" ? "OVB" : p)); });

  const S = { land: "alle", prov: null, lengte: "alle", nav: "alle", zoek: "", sorteer: "km" };
  const LENGTE = { kort: r => r.km < 30, middel: r => r.km >= 30 && r.km < 60, lang: r => r.km >= 60 && r.km < 100, extra: r => (r.tot || r.km) >= 100 };
  const nl = x => String(x).replace(".", ",");

  function past(r, zonderProv) {
    return (S.land === "alle" || r.land === S.land) &&
      (zonderProv || !S.prov || r.p.includes(S.prov)) &&
      (S.lengte === "alle" || LENGTE[S.lengte](r)) &&
      (S.nav === "alle" || r.nav === S.nav) &&
      (!S.zoek || (r.n + " " + r.p.map(p => PROV[p] ? PROV[p][0] : "").join(" ") + " " + (r.noot || "")).toLowerCase().includes(S.zoek));
  }

  function kaart() {
    const telling = {};
    ROUTES.filter(r => past(r, true)).forEach(r => r.p.forEach(p => { telling[p] = (telling[p] || 0) + 1; }));
    $("#grKaart").innerHTML = Object.entries(PROV).map(([code, [naam, c, r, land, breed]]) =>
      '<button type="button" class="gr-tegel gr-tegel--' + land.toLowerCase() + (S.prov === code ? " is-aan" : "") + (telling[code] ? "" : " is-leeg") +
      '" style="grid-column:' + (c + 1) + (breed ? " / span " + breed : "") + ";grid-row:" + (r + 1) +'" data-prov="' + code + '" aria-pressed="' + (S.prov === code) + '" title="' + naam + '">' +
      "<b>" + naam.replace(" (NL)", "").replace(" (BE)", "") + "</b><span>" + (telling[code] || 0) + "</span></button>").join("") +
      '<span class="gr-grens" aria-hidden="true">Nederland ↑ · België ↓</span>';
  }

  function lijst() {
    const uit = ROUTES.filter(r => past(r));
    const op = { km: (a, b) => a.km - b.km, lang: (a, b) => (b.tot || b.km) - (a.tot || a.km), naam: (a, b) => a.n.localeCompare(b.n, "nl") }[S.sorteer];
    uit.sort(op);
    $("#grAantal").textContent = uit.length;
    $("#grKm").textContent = Math.round(uit.reduce((t, r) => t + r.km, 0)).toLocaleString("nl-NL") + " km";
    $("#grFilterTekst").textContent = (S.prov ? PROV[S.prov][0] : S.land === "NL" ? "Nederland" : S.land === "BE" ? "België" : "Nederland en België") +
      (S.lengte !== "alle" ? ", " + { kort: "korter dan 30 km", middel: "30 tot 60 km", lang: "60 tot 100 km", extra: "100 km of meer" }[S.lengte] : "") +
      (S.nav === "bord" ? ", bewegwijzerd" : S.nav === "gpx" ? ", met GPX" : "");
    $("#grLijst").innerHTML = uit.length ? uit.map(r =>
      '<li class="gr-route"><div class="gr-route__km"><strong>' + nl(r.km) + (r.tot ? "–" + r.tot : "") + "</strong><span>km</span></div>" +
      '<div class="gr-route__tekst"><h3>' + r.n + "</h3><p>" + (r.p.length ? r.p.map(p => PROV[p][0]).join(" · ") : "Vlaanderen") + " · " + (r.land === "NL" ? "Nederland" : "België") + "</p>" +
      (r.noot ? '<p class="gr-route__noot">' + r.noot + "</p>" : "") +
      '<div class="gr-route__onder"><span class="gr-badge gr-badge--' + r.nav + '">' + (r.nav === "bord" ? "Bewegwijzerd" : "GPX-route") + "</span>" +
      '<a href="' + r.u + '" target="_blank" rel="noopener">Route bij ' + r.bron + " ↗</a></div></div></li>").join("")
      : '<li class="wb-leeg">Geen routes met deze keuzes. Zet een filter uit of kies een andere provincie.</li>';
  }

  function toon() { kaart(); lijst(); }

  /* ---------- invoer ---------- */
  $("#grKaart").addEventListener("click", e => {
    const t = e.target.closest("[data-prov]");
    if (!t) return;
    S.prov = S.prov === t.dataset.prov ? null : t.dataset.prov;
    toon();
  });
  wortel.querySelectorAll(".wb-chips").forEach(groep => groep.addEventListener("click", e => {
    const k = e.target.closest("button");
    if (!k) return;
    groep.querySelectorAll("button").forEach(b => { b.classList.toggle("is-aan", b === k); b.setAttribute("aria-pressed", b === k); });
    S[groep.dataset.veld] = k.dataset.waarde;
    if (groep.dataset.veld === "land" && S.prov && PROV[S.prov][3] !== S.land && S.land !== "alle") S.prov = null;
    toon();
  }));
  $("#grZoek").addEventListener("input", e => { S.zoek = e.target.value.trim().toLowerCase(); toon(); });
  $("#grSorteer").addEventListener("change", e => { S.sorteer = e.target.value; lijst(); });
  $("#grWis").addEventListener("click", () => {
    Object.assign(S, { land: "alle", prov: null, lengte: "alle", nav: "alle", zoek: "" });
    $("#grZoek").value = "";
    wortel.querySelectorAll(".wb-chips").forEach(g => g.querySelectorAll("button").forEach((b, i) => { b.classList.toggle("is-aan", i === 0); b.setAttribute("aria-pressed", i === 0); }));
    toon();
  });
  // van buitenaf (Vraag de Gorilla) een filter zetten
  window.GG_ROUTES_ZET = function (keuze) {
    Object.assign(S, { land: "alle", prov: null, lengte: "alle", nav: "alle", zoek: "" }, keuze);
    wortel.querySelectorAll(".wb-chips").forEach(g => g.querySelectorAll("button").forEach(b => {
      const aan = b.dataset.waarde === S[g.dataset.veld];
      b.classList.toggle("is-aan", aan); b.setAttribute("aria-pressed", aan);
    }));
    toon();
    return ROUTES.filter(r => past(r));
  };
  window.GG_PROV = PROV;
  toon();
})();
