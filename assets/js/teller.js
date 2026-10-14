/* =========================================================
   Gravel Gorilla — gebruiksteller
   - Op een tool-pagina: telt 1 op en toont "128 keer gebruikt".
   - Op de homepage: toont bij elk bordje in de wegwijzer hoe vaak de tool is gebruikt
     en zet de bordjes op volgorde: de vaakst gebruikte tool bovenaan.
   Lukt het niet (bijv. geen verbinding), dan blijft de teller gewoon onzichtbaar.
   ========================================================= */
(function () {
  var adres = "/api/teller.php";
  function getal(n) { return n.toLocaleString("nl-NL"); }

  var opPagina = document.querySelector("[data-teller]");
  if (opPagina) {
    fetch(adres + "?tool=" + encodeURIComponent(opPagina.dataset.teller), { method: "POST" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || typeof d.aantal !== "number") return;
        opPagina.textContent = (d.aantal === 1 ? "1 keer" : "Al " + getal(d.aantal) + " keer") + " gebruikt";
        opPagina.hidden = false;
      })
      .catch(function () {});
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
          b.textContent = getal(n) + "× gebruikt";
          b.hidden = false;
        });
        sorteerBordjes(d);
      })
      .catch(function () {});
  }

  /* Wegwijzer op volgorde van gebruik: de vaakst gebruikte tool bovenaan, met het label "Meest gebruikt".
     Bij gelijke stand blijft de gewone volgorde (KM-nummer) staan.
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
    });

    var koploper = volgorde[0];
    if (koploper.n > 0) {
      var naam = koploper.li.querySelector(".bordje__naam");
      var label = document.createElement("span");
      label.className = "bordje__label";
      label.textContent = "Meest gebruikt";
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
