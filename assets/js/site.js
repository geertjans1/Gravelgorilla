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

/* ---------- Taalmenu (NL / EN / DE) ---------- */
const taal = document.getElementById("taalKeuze");
if (taal) {
  const knop = taal.querySelector(".taal__knop");
  const zet = open => { taal.classList.toggle("is-open", open); knop.setAttribute("aria-expanded", open); };
  knop.addEventListener("click", e => { e.stopPropagation(); zet(!taal.classList.contains("is-open")); });
  document.addEventListener("click", e => { if (!taal.contains(e.target)) zet(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") zet(false); });
  // houd de plek op de pagina vast (#anker) als je van taal wisselt
  taal.querySelectorAll(".taal__lijst a").forEach(a => a.addEventListener("click", () => {
    if (location.hash) a.href = a.href.split("#")[0] + location.hash;
  }));
}
