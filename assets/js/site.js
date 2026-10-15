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
/* Klapmenu's (taal en delen): met een muis openklappen zodra je de knop aanwijst, kort na weggaan weer dicht.
   We kijken naar de aanwijzer zelf (pointerType) en niet naar wat het apparaat zegt dat het kan:
   laptops met een aanraakscherm melden soms "geen muis", terwijl je er gewoon een gebruikt. */
function klapMenu(houder, knop, zet, isOpen, tik) {
  let dicht = null, soort = "";
  houder.addEventListener("pointerenter", e => { if (e.pointerType === "mouse") { clearTimeout(dicht); zet(true); } });
  houder.addEventListener("pointerleave", e => { if (e.pointerType === "mouse") dicht = setTimeout(() => zet(false), 300); });
  knop.addEventListener("pointerdown", e => { soort = e.pointerType; });
  knop.addEventListener("click", e => {
    e.stopPropagation();
    const was = soort; soort = "";
    if (was === "mouse") { clearTimeout(dicht); zet(true); return; }  // muis: klikken houdt hem gewoon open
    if (tik) tik(); else zet(!isOpen());                               // vinger of toetsenbord
  });
  document.addEventListener("click", e => { if (!houder.contains(e.target)) zet(false); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") zet(false); });
}

document.querySelectorAll(".deelknop[data-deel-url]").forEach(deel => {
  const knop = deel.querySelector(".deelknop__knop");
  const menu = deel.querySelector(".deelknop__menu");
  const zet = open => { menu.hidden = !open; knop.setAttribute("aria-expanded", open); };
  // met de vinger: het deelmenu van de telefoon zelf, als die dat kan
  klapMenu(deel, knop, zet, () => !menu.hidden, async () => {
    if (navigator.share) {
      try { await navigator.share({ title: deel.dataset.deelTitel, text: deel.dataset.deelTekst, url: deel.dataset.deelUrl }); } catch (fout) {}
    } else zet(menu.hidden);
  });
  deel.querySelector("[data-deel-kopie]").addEventListener("click", async e => {
    const b = e.currentTarget, oud = b.textContent;
    try { await navigator.clipboard.writeText(deel.dataset.deelUrl); }
    catch (fout) { const v = document.createElement("textarea"); v.value = deel.dataset.deelUrl; document.body.appendChild(v); v.select(); document.execCommand("copy"); v.remove(); }
    b.textContent = deel.dataset.deelKlaar;
    setTimeout(() => { b.textContent = oud; zet(false); }, 1600);
  });
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => zet(false)));
});

/* ---------- Taalmenu (NL / EN / DE) ---------- */
const taal = document.getElementById("taalKeuze");
if (taal) {
  const knop = taal.querySelector(".taal__knop");
  const zet = open => { taal.classList.toggle("is-open", open); knop.setAttribute("aria-expanded", open); };
  klapMenu(taal, knop, zet, () => taal.classList.contains("is-open"));
  taal.querySelectorAll(".taal__lijst a").forEach(a => a.addEventListener("click", () => {
    // eigen keuze onthouden: dan schakelt de site niet meer vanzelf naar de taal van de computer
    try { localStorage.setItem("gg-taal", a.getAttribute("hreflang")); } catch (e) {}
    // houd de plek op de pagina vast (#anker) als je van taal wisselt
    if (location.hash) a.href = a.href.split("#")[0] + location.hash;
  }));
}
