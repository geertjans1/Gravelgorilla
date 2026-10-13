/* =========================================================
   Gravel Gorilla — gebruiksteller
   - Op een tool-pagina: telt 1 op en toont "128 keer gebruikt".
   - Op de homepage: toont bij elk bordje in de wegwijzer hoe vaak de tool is gebruikt.
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
      })
      .catch(function () {});
  }
})();
