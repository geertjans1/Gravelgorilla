/* =========================================================
   Gravel Gorilla — gebruiksteller
   - Op een tool-pagina: telt 1 op, toont "128 keer gebruikt" en zet de KM-nummers op de plek in de ranglijst.
   - Op de homepage: toont bij elk bordje in de wegwijzer hoe vaak de tool is gebruikt
     en zet de bordjes op volgorde: de vaakst gebruikte tool bovenaan.
   Lukt het niet (bijv. geen verbinding), dan blijft de teller gewoon onzichtbaar.
   ========================================================= */
(function () {
  var adres = "/api/teller.php";
  var taal = (document.documentElement.lang || "nl").slice(0, 2);
  function T(nl, en, de) { return taal === "en" ? en : taal === "de" ? de : nl; }
  function getal(n) { return n.toLocaleString(taal === "en" ? "en-GB" : taal === "de" ? "de-DE" : "nl-NL"); }

  var opPagina = document.querySelector("[data-teller]");
  if (opPagina) {
    fetch(adres + "?tool=" + encodeURIComponent(opPagina.dataset.teller), { method: "POST" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || typeof d.aantal !== "number") return;
        opPagina.textContent = d.aantal === 1 ? T("1 keer gebruikt", "Used once", "1-mal genutzt") : T("Al " + getal(d.aantal) + " keer gebruikt", "Used " + getal(d.aantal) + " times", "Schon " + getal(d.aantal) + "-mal genutzt");
        opPagina.hidden = false;
      })
      .catch(function () {})
      .then(function () { return fetch(adres); })
      .then(function (r) { return r && r.ok ? r.json() : null; })
      .then(function (d) { if (d) zetRanglijstKm(d); })
      .catch(function () {});
  }

  /* Op een tool-pagina: het KM-nummer (bovenaan en bij "Andere tools") wordt de plek in de ranglijst,
     net als op de homepage. "Andere tools" komt ook op die volgorde te staan. */
  function zetRanglijstKm(stand) {
    var namen = Object.keys(stand);
    var rang = namen.slice().sort(function (a, b) { return stand[b] - stand[a] || namen.indexOf(a) - namen.indexOf(b); });
    function km(tool) { var p = rang.indexOf(tool); return p < 0 ? null : "KM " + String(p + 1).padStart(2, "0"); }

    document.querySelectorAll("[data-km-tool]").forEach(function (el) {
      var tekst = km(el.dataset.kmTool);
      if (tekst) el.textContent = tekst;
    });

    var anderen = [].slice.call(document.querySelectorAll(".ander"));
    if (anderen.length > 1) {
      var bak = anderen[0].parentNode;
      anderen.sort(function (a, b) {
        return rang.indexOf(a.querySelector("[data-km-tool]").dataset.kmTool) - rang.indexOf(b.querySelector("[data-km-tool]").dataset.kmTool);
      }).forEach(function (a) { bak.appendChild(a); });
    }
  }

  var bijBordjes = document.querySelectorAll("[data-teller-tool]");
  if (bijBordjes.length) {
    fetch(adres)
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d) return;
        var hoogste = Math.max.apply(null, Object.keys(d).map(function (k) { return d[k]; }).concat(1));
        bijBordjes.forEach(function (b) {
          var n = d[b.dataset.tellerTool];
          if (typeof n !== "number") return;
          // horizontale balk, net als een ranglijst: de vaakst gebruikte tool is de langste balk
          b.innerHTML = '<span class="bordje__balk"><b>' + getal(n) + T("× gebruikt", "× used", "× genutzt") + "</b></span>";
          b.hidden = false;
          var balk = b.firstChild;
          balk.getBoundingClientRect();
          balk.style.setProperty("--breed", Math.round(n / hoogste * 100) + "%");
        });
        sorteerBordjes(d);
      })
      .catch(function () {});
  }

  /* Wegwijzer op volgorde van gebruik: de vaakst gebruikte tool bovenaan, met het label "Meest gebruikt".
     De KM-bordjes worden de plek in de ranglijst. Bij gelijke stand blijft de gewone volgorde staan.
     Staan er al bordjes in beeld, dan schuiven ze rustig naar hun nieuwe plek. */
  function sorteerBordjes(stand) {
    var lijst = document.getElementById("bordjes");
    if (!lijst) return;
    var items = [].slice.call(lijst.children).filter(function (li) { return li.querySelector("[data-teller-tool]"); });
    if (items.length < 2) return;

    var volgorde = items.map(function (li, i) {
      var n = stand[li.querySelector("[data-teller-tool]").dataset.tellerTool];
      return { li: li, n: typeof n === "number" ? n : 0, i: i };
    }).sort(function (a, b) { return b.n - a.n || a.i - b.i; });

    var rustig = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var inBeeld = function (li) { return li.classList.contains("is-zichtbaar") && !li.classList.contains("is-weg"); };
    var eerst = items.map(function (li) { return li.getBoundingClientRect().top; });

    volgorde.forEach(function (o, plek) {
      lijst.appendChild(o.li);
      o.li.style.setProperty("--v", plek * 80 + "ms");
      // KM-bordje = plek in de ranglijst (KM 01 = meest gebruikt)
      var km = String(plek + 1).padStart(2, "0");
      var bord = o.li.querySelector(".bordje__bord");
      if (bord && bord.lastChild) bord.lastChild.textContent = km;
      var kmVak = o.li.querySelector(".bordje__km");
      if (kmVak) kmVak.setAttribute("aria-label", "Kilometer " + km);
    });

    /* Ranglijst zoals in de voetbalcompetitie: een stippellijn onder de top 3 (meest gebruikt)
       en boven de onderste 3 (de "degradatiezone": minst gebruikt). */
    [].slice.call(lijst.querySelectorAll(".bordjes__lijn")).forEach(function (x) { x.remove(); });
    items.forEach(function (li) { li.classList.remove("bordje--top", "bordje--onder"); });
    if (volgorde.length >= 8 && volgorde[0].n > 0) {
      volgorde.slice(0, 3).forEach(function (o) { o.li.classList.add("bordje--top"); });
      volgorde.slice(-3).forEach(function (o) { o.li.classList.add("bordje--onder"); });
      var lijn = function (soort, tekst) {
        var l = document.createElement("li");
        l.className = "bordjes__lijn bordjes__lijn--" + soort;
        l.setAttribute("aria-hidden", "true");
        l.innerHTML = "<span>" + tekst + "</span>";
        return l;
      };
      lijst.insertBefore(lijn("top", T("▲ Top 3 · meest gebruikt", "▲ Top 3 · most used", "▲ Top 3 · meistgenutzt")), volgorde[3].li);
      lijst.insertBefore(lijn("onder", T("▼ Degradatiezone · minst gebruikt", "▼ Relegation zone · least used", "▼ Abstiegszone · am wenigsten genutzt")), volgorde[volgorde.length - 3].li);
    }

    var koploper = volgorde[0];
    if (koploper.n > 0) {
      var naam = koploper.li.querySelector(".bordje__naam");
      var label = document.createElement("span");
      label.className = "bordje__label";
      label.textContent = T("Meest gebruikt", "Most used", "Meistgenutzt");
      if (naam) naam.insertBefore(label, naam.querySelector(".bordje__label"));
    }

    if (rustig) return;
    items.forEach(function (li, i) {
      var verschil = eerst[i] - li.getBoundingClientRect().top;
      if (!verschil || !inBeeld(li)) return;
      li.style.transition = "none";
      li.style.transform = "translateY(" + verschil + "px)";
      li.getBoundingClientRect();
      li.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1)";
      li.style.transform = "";
      setTimeout(function () { li.style.transition = ""; }, 700);
    });
  }
  /* ---------- Stemmen: duim omhoog / omlaag per tool (zoals Reddit) ----------
     Zo zie je welke tools mensen goed vinden en welke aandacht nodig hebben.
     De browser onthoudt je eigen stem (gg-stem-<tool>); nog eens klikken haalt je stem weg. */
  var pijl = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.5l8.5 9.5H15v7.5H9V13H3.5z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';
  function mijnStem(tool) { try { return localStorage.getItem("gg-stem-" + tool) || "geen"; } catch (e) { return "geen"; } }
  function bewaarStem(tool, s) { try { if (s === "geen") localStorage.removeItem("gg-stem-" + tool); else localStorage.setItem("gg-stem-" + tool, s); } catch (e) {} }

  function maakStem(houder, tool, stand, groot) {
    var s = { op: stand ? stand.op : 0, neer: stand ? stand.neer : 0 };
    var tekstOp = T("Goede tool", "Great tool", "Gutes Tool"), tekstNeer = T("Kan beter", "Could be better", "Geht besser");
    houder.innerHTML =
      '<button type="button" class="stem__knop stem__knop--op" aria-label="' + tekstOp + '">' + pijl + (groot ? "<span>" + tekstOp + "</span>" : "") + "</button>" +
      '<span class="stem__score" aria-live="polite"></span>' +
      '<button type="button" class="stem__knop stem__knop--neer" aria-label="' + tekstNeer + '">' + pijl + (groot ? "<span>" + tekstNeer + "</span>" : "") + "</button>" +
      (groot ? '<span class="stem__dank" hidden>' + T("Bedankt voor je stem!", "Thanks for voting!", "Danke für deine Stimme!") + "</span>" : "");
    var op = houder.querySelector(".stem__knop--op"), neer = houder.querySelector(".stem__knop--neer");
    var score = houder.querySelector(".stem__score"), dank = houder.querySelector(".stem__dank");

    function teken() {
      var mijn = mijnStem(tool);
      op.classList.toggle("is-aan", mijn === "op"); op.setAttribute("aria-pressed", mijn === "op");
      neer.classList.toggle("is-aan", mijn === "neer"); neer.setAttribute("aria-pressed", mijn === "neer");
      var netto = s.op - s.neer;
      score.textContent = netto > 0 ? "+" + getal(netto) : getal(netto);
      score.className = "stem__score" + (netto > 0 ? " is-plus" : netto < 0 ? " is-min" : "");
      houder.title = getal(s.op) + " × " + tekstOp.toLowerCase() + " · " + getal(s.neer) + " × " + tekstNeer.toLowerCase();
      houder.hidden = false;
    }
    function kies(richting, e) {
      e.preventDefault(); e.stopPropagation();          // op de homepage zit de stem naast een link: niet doorklikken
      var was = mijnStem(tool), nu = was === richting ? "geen" : richting;
      if (was !== "geen") s[was] = Math.max(0, s[was] - 1);
      if (nu !== "geen") s[nu]++;
      bewaarStem(tool, nu);
      teken();
      if (dank) dank.hidden = nu === "geen";
      fetch(adres + "?stem=" + encodeURIComponent(tool) + "&nu=" + nu + "&was=" + was, { method: "POST" })
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) { if (d && typeof d.op === "number") { s = d; teken(); } })
        .catch(function () {});
    }
    op.addEventListener("click", function (e) { kies("op", e); });
    neer.addEventListener("click", function (e) { kies("neer", e); });
    teken();
  }

  function haalStemmen() {
    return fetch(adres + "?stemmen").then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });
  }

  /* ---------- Gebruik meten (alleen zichtbaar voor de beheerder op /beheer/) ----------
     "gestart": iemand vult iets in of klikt iets aan in de tool zelf (1x per bezoek aan de pagina).
     "stap": iemand klikt door naar een tool bij "Volgende stap". Geen cookies, niets over de bezoeker. */
  function meldGebruik(tool, soort) {
    try { fetch(adres + "?gebruik=" + encodeURIComponent(tool) + "&soort=" + soort, { method: "POST", keepalive: true }).catch(function () {}); } catch (e) {}
  }
  var toolVak = document.querySelector("[data-tool-vak]");
  if (opPagina && toolVak) {
    var hierTool = opPagina.dataset.teller, gestart = false;
    var start = function () { if (gestart) return; gestart = true; meldGebruik(hierTool, "gestart"); };
    ["input", "change", "click"].forEach(function (soort) {
      toolVak.addEventListener(soort, function (e) { if (e.isTrusted) start(); }, true);
    });
    // de profielsticker draait in een eigen venster: klikken daarin zie je hier als "het venster krijgt de aandacht"
    window.addEventListener("blur", function () {
      setTimeout(function () { var a = document.activeElement; if (a && a.tagName === "IFRAME" && toolVak.contains(a)) start(); }, 0);
    });
    document.querySelectorAll(".volgende__kaart").forEach(function (a) {
      a.addEventListener("click", function () { meldGebruik(hierTool, "stap"); });
    });
  }

  // Op een tool-pagina: het blok "Wat vind je van deze tool?"
  var stemHier = document.querySelector("[data-stem-tool]");
  if (stemHier) {
    haalStemmen().then(function (d) { maakStem(stemHier, stemHier.dataset.stemTool, d && d[stemHier.dataset.stemTool], true); });
  }

  // Op de homepage: een stemkolom links naast elk bordje
  var bordjesLijst = document.getElementById("bordjes");
  if (bordjesLijst && bijBordjes.length) {
    haalStemmen().then(function (d) {
      bijBordjes.forEach(function (b) {
        var li = b.closest(".bordje"), tool = b.dataset.tellerTool;
        if (!li || li.querySelector(".stem")) return;
        var houder = document.createElement("span");
        houder.className = "stem stem--rij";
        li.classList.add("met-stem");
        li.insertBefore(houder, li.firstChild);
        maakStem(houder, tool, d && d[tool], false);
      });
    });
  }
})();
