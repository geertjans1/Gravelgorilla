/* =========================================================
   Gravel Gorilla — onderdelen die op elke pagina zitten:
   bovenbalk, menu op de telefoon en donkere modus.
   ========================================================= */

/* ---------- Bovenbalk & menu ---------- */
const bar = document.getElementById("bar");
const menuKnop = bar.querySelector(".bar__menu");
menuKnop.addEventListener("click", () => {
  const open = bar.classList.toggle("is-open");
  menuKnop.setAttribute("aria-expanded", open);
});
bar.querySelectorAll(".bar__links a").forEach(a => a.addEventListener("click", () => {
  bar.classList.remove("is-open");
  menuKnop.setAttribute("aria-expanded", "false");
}));

function balkBijScrollen() {
  bar.classList.toggle("is-gescrold", window.scrollY > 20);
}
window.addEventListener("scroll", balkBijScrollen, { passive: true });
balkBijScrollen();

/* ---------- Donkere modus (nachtrit) ---------- */
document.getElementById("themaKnop").addEventListener("click", () => {
  const nieuw = document.documentElement.getAttribute("data-thema") === "donker" ? "licht" : "donker";
  document.documentElement.setAttribute("data-thema", nieuw);
  try { localStorage.setItem("gg-thema", nieuw); } catch (e) {}
});

/* ---------- Deelknop op de toolpagina's ----------
   Telefoon/tablet: het eigen deelmenu van het toestel (WhatsApp, Signal, mail...).
   Computer: een klein menu met link kopiëren, WhatsApp en e-mail. */
document.querySelectorAll(".deel").forEach(deel => {
  const knop = deel.querySelector(".deel__knop");
  const menu = deel.querySelector(".deel__menu");
  const zet = open => { menu.hidden = !open; knop.setAttribute("aria-expanded", open); };
  knop.addEventListener("click", async e => {
    e.stopPropagation();
    const aanraak = window.matchMedia("(pointer: coarse)").matches;
    if (aanraak && navigator.share) {
      try { await navigator.share({ title: deel.dataset.deelTitel, text: deel.dataset.deelTekst, url: deel.dataset.deelUrl }); } catch (fout) {}
      return;
    }
    zet(menu.hidden);
  });
  deel.querySelector("[data-deel-kopie]").addEventListener("click", async e => {
    const b = e.currentTarget, oud = b.textContent;
    try { await navigator.clipboard.writeText(deel.dataset.deelUrl); }
    catch (fout) { const v = document.createElement("textarea"); v.value = deel.dataset.deelUrl; document.body.appendChild(v); v.select(); document.execCommand("copy"); v.remove(); }
    b.textContent = deel.dataset.deelKlaar;
    setTimeout(() => { b.textContent = oud; zet(false); }, 1600);
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => zet(false)));
  document.addEventListener("click", e => { if (!deel.contains(e.target)) zet(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") zet(false); });
});

/* ---------- Taalmenu (NL / EN / DE) ---------- */
const taal = document.getElementById("taalKeuze");
if (taal) {
  const knop = taal.querySelector(".taal__knop");
  const zet = open => { taal.classList.toggle("is-open", open); knop.setAttribute("aria-expanded", open); };
  // met een muis: openklappen zodra je de knop aanwijst, dichtklappen kort nadat je weggaat
  const muis = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  let dicht = null;
  if (muis) {
    taal.addEventListener("mouseenter", () => { clearTimeout(dicht); zet(true); });
    taal.addEventListener("mouseleave", () => { dicht = setTimeout(() => zet(false), 300); });
  }
  knop.addEventListener("click", e => { e.stopPropagation(); zet(muis ? true : !taal.classList.contains("is-open")); });
  document.addEventListener("click", e => { if (!taal.contains(e.target)) zet(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") zet(false); });
  taal.querySelectorAll(".taal__lijst a").forEach(a => a.addEventListener("click", () => {
    // eigen keuze onthouden: dan schakelt de site niet meer vanzelf naar de taal van de computer
    try { localStorage.setItem("gg-taal", a.getAttribute("hreflang")); } catch (e) {}
    // houd de plek op de pagina vast (#anker) als je van taal wisselt
    if (location.hash) a.href = a.href.split("#")[0] + location.hash;
  }));
}
