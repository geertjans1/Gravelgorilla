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
