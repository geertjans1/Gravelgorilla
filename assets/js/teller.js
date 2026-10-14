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
        bijBordjes.forEach(function (b) {
          var n = d[b.dataset.tellerTool];
          if (typeof n !== "number") return;
          b.textContent = getal(n) + T("× gebruikt", "× used", "× genutzt");
          b.hidden = false;
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
})();
