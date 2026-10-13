/* =========================================================
   Gravel Gorilla — interactie
   ========================================================= */

const minderBeweging = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------
   DE LIJST MET TOOLS (de wegwijzer)
   Nieuwe tool toevoegen? Kopieer een blok en pas het aan.
   - soort:     "kiezen", "berekenen" of "plannen"
   - plaatje:   "quiz", "wiel", "meter", "liniaal" of "tas"
   - label:     klein oranje labeltje (optioneel)
   - binnenkort: true = bordje zonder link, half doorzichtig
   --------------------------------------------------------- */
const TOOLS = [
  {
    naam: "Gravelbike Kiezer",
    uitleg: "Een paar vragen over hoe en waar je rijdt, en je ziet welke van 140 gravelbikes bij je passen.",
    link: "/kiezer/",
    soort: "kiezen",
    plaatje: "quiz",
    label: "Meest gebruikt"
  },
  {
    naam: "Bandenspanning",
    uitleg: "De juiste spanning voor jouw gewicht, bandbreedte en ondergrond. Voor en achter apart.",
    link: "/bandenspanning/",
    soort: "berekenen",
    plaatje: "meter"
  },
  {
    naam: "Wielen Kiezer",
    uitleg: "Licht, stevig of juist snel? Vind de wielset die bij je rijstijl past.",
    link: "/wielen-kiezer/",
    soort: "kiezen",
    plaatje: "wiel"
  },
  {
    naam: "Maat Bepalen",
    uitleg: "Je framemaat op basis van je lengte en binnenbeenlengte.",
    soort: "berekenen",
    plaatje: "liniaal",
    binnenkort: true
  },
  {
    naam: "Paklijst Bikepacking",
    uitleg: "Een slimme checklist voor je volgende tocht van meerdere dagen.",
    soort: "plannen",
    plaatje: "tas",
    binnenkort: true
  }
];

/* Kleine plaatjes die oppoppen als je over een bordje beweegt */
const PLAATJES = {
  quiz: `<svg viewBox="0 0 100 100" width="96" height="96"><rect x="14" y="20" width="72" height="8" rx="4" fill="#E3DDCF"/><rect x="14" y="20" width="46" height="8" rx="4" fill="#FF6B2C"/><rect x="14" y="40" width="72" height="14" rx="5" fill="#2F8F3E"/><rect x="14" y="60" width="72" height="14" rx="5" fill="none" stroke="#15181A" stroke-width="2"/><rect x="14" y="80" width="50" height="6" rx="3" fill="#C9C2B2"/></svg>`,
  meter: `<svg viewBox="0 0 100 100" width="100" height="100"><path d="M15 70 A35 35 0 0 1 85 70" fill="none" stroke="#E3DDCF" stroke-width="9" stroke-linecap="round"/><path d="M15 70 A35 35 0 0 1 72 42" fill="none" stroke="#2F8F3E" stroke-width="9" stroke-linecap="round"/><line x1="50" y1="70" x2="68" y2="44" stroke="#15181A" stroke-width="3.5" stroke-linecap="round"/><circle cx="50" cy="70" r="6" fill="#FF6B2C"/></svg>`,
  wiel: `<svg viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="40" fill="none" stroke="#15181A" stroke-width="8" stroke-dasharray="4 4"/><circle cx="50" cy="50" r="33" fill="none" stroke="#C9C2B2" stroke-width="2"/>${Array.from({ length: 10 }, (_, i) => `<line x1="50" y1="50" x2="50" y2="18" stroke="#9AA098" stroke-width="1.4" transform="rotate(${i * 36} 50 50)"/>`).join("")}<circle cx="50" cy="50" r="6" fill="#2F8F3E"/></svg>`,
  liniaal: `<svg viewBox="0 0 100 100" width="96" height="96"><rect x="12" y="38" width="76" height="24" rx="4" fill="#2F8F3E"/><g stroke="#F4F1EA" stroke-width="2"><path d="M22 38v8M32 38v12M42 38v8M52 38v12M62 38v8M72 38v12M82 38v8"/></g></svg>`,
  tas: `<svg viewBox="0 0 100 100" width="96" height="96"><rect x="22" y="32" width="56" height="50" rx="10" fill="#2F8F3E"/><path d="M38 32v-6a12 12 0 0 1 24 0v6" fill="none" stroke="#15181A" stroke-width="4"/><rect x="22" y="50" width="56" height="6" fill="#14361E"/></svg>`
};

function maakBordje(tool, i) {
  const nummer = String(i + 1).padStart(2, "0");
  const label = tool.binnenkort ? "Binnenkort" : tool.label;
  const binnen = `
    <span class="bordje__km">KM ${nummer}</span>
    <span class="bordje__naam">${tool.naam}${label ? `<span class="bordje__label">${label}</span>` : ""}</span>
    <span class="bordje__uitleg">${tool.uitleg}</span>
    <span class="bordje__soort">${tool.soort}</span>
    ${tool.binnenkort ? "<span></span>" : '<span class="bordje__pijl" aria-hidden="true">→</span>'}
    ${tool.binnenkort ? "" : `<span class="bordje__kijk" aria-hidden="true">${PLAATJES[tool.plaatje] || ""}</span>`}`;
  const zoektekst = `${tool.naam} ${tool.uitleg} ${tool.soort}`.toLowerCase();
  return `<li class="bordje${tool.binnenkort ? " bordje--straks" : ""}" data-soort="${tool.soort}" data-zoek="${zoektekst}" style="--v:${i * 80}ms">
    ${tool.binnenkort ? `<div>${binnen}</div>` : `<a href="${tool.link}">${binnen}</a>`}
  </li>`;
}

const bordjes = document.getElementById("bordjes");
bordjes.innerHTML = TOOLS.map(maakBordje).join("");

/* ---------- Filteren en zoeken ---------- */
let filter = "alle";
const zoekveld = document.getElementById("zoekTool");
const leeg = document.getElementById("bordjesLeeg");

function toonBordjes() {
  const zoek = zoekveld.value.trim().toLowerCase();
  let aantal = 0;
  bordjes.querySelectorAll(".bordje").forEach(b => {
    const past = (filter === "alle" || b.dataset.soort === filter) && (!zoek || b.dataset.zoek.includes(zoek));
    b.classList.toggle("is-weg", !past);
    if (past) aantal++;
  });
  leeg.hidden = aantal > 0;
}
document.querySelectorAll(".filter").forEach(knop => {
  knop.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(k => {
      k.classList.toggle("is-aan", k === knop);
      k.setAttribute("aria-pressed", k === knop);
    });
    filter = knop.dataset.filter;
    toonBordjes();
  });
});
zoekveld.addEventListener("input", toonBordjes);

/* ---------- Gorilla-tips ---------- */
const TIPS = [
  { tekst: "Rijd je veel zand? Een bredere band met wat minder spanning zakt minder weg dan een smalle, harde band.", link: "/bandenspanning-gravelbike-berekenen/" },
  { tekst: "Tubeless? Kijk elke paar maanden of er nog genoeg melk in je band zit. Die droogt langzaam op.", link: "/tubeless-onderhoud-melk-bijvullen/" },
  { tekst: "Twijfel je tussen twee framematen? Kijk niet alleen naar de maat, maar ook naar stack en reach.", link: "/tussen-twee-maten-gravelbike/" },
  { tekst: "Begin je net? Plan je eerste rit van 30 à 40 km op bekend terrein. Het gaat om plezier, niet om snelheid.", link: "/eerste-gravelrit-tips/" },
  { tekst: "Na een modderrit eerst je ketting schoonmaken en smeren. Dat scheelt je later een nieuwe aandrijving.", link: "/gravelbike-onderhoud-basics/" }
];
let tip = 0;
const tipTekst = document.getElementById("tipTekst");
const tipNummer = document.getElementById("tipNummer");
const tipLink = document.getElementById("tipLink");

function toonTip(nieuw, direct) {
  tip = (nieuw + TIPS.length) % TIPS.length;
  const zet = () => {
    tipTekst.textContent = "“" + TIPS[tip].tekst + "”";
    tipNummer.textContent = String(tip + 1).padStart(2, "0");
    tipLink.href = TIPS[tip].link;
    tipTekst.classList.remove("is-wissel");
  };
  if (direct || minderBeweging) return zet();
  tipTekst.classList.add("is-wissel");
  setTimeout(zet, 300);
}
toonTip(0, true);
document.getElementById("tipVorige").addEventListener("click", () => { toonTip(tip - 1); herstartTips(); });
document.getElementById("tipVolgende").addEventListener("click", () => { toonTip(tip + 1); herstartTips(); });
let tipKlok;
function herstartTips() {
  clearInterval(tipKlok);
  if (!minderBeweging) tipKlok = setInterval(() => toonTip(tip + 1), 8000);
}
herstartTips();

/* ---------- Veldnotities: pijltjes schuiven de strook ---------- */
const strook = document.getElementById("strook");
const stap = () => (strook.querySelector(".notitie")?.offsetWidth || 300) + 18;
document.getElementById("notitieTerug").addEventListener("click", () => strook.scrollBy({ left: -stap(), behavior: "smooth" }));
document.getElementById("notitieVerder").addEventListener("click", () => strook.scrollBy({ left: stap(), behavior: "smooth" }));

/* ---------- Verschijnen bij scrollen ---------- */
const kijker = new IntersectionObserver(items => {
  items.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add("is-zichtbaar");
      kijker.unobserve(item.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
document.querySelectorAll(".verschijn, .bordje").forEach(el => kijker.observe(el));

/* ---------- Scrollen: band draait, hoogteprofiel tekent zichzelf ---------- */
const bandDraai = document.querySelector(".band__draai");
const pad = document.getElementById("profielPad");
const profiel = document.querySelector(".profiel");
const padLengte = pad.getTotalLength();
pad.style.strokeDasharray = padLengte;
pad.style.strokeDashoffset = minderBeweging ? 0 : padLengte;

function bijScrollen() {
  const y = window.scrollY;
  if (!minderBeweging) {
    bandDraai.style.transform = `rotate(${y * 0.25}deg)`;
    // het profiel is helemaal getekend als het halverwege het scherm staat
    const vak = profiel.getBoundingClientRect();
    const voortgang = Math.min(Math.max((window.innerHeight - vak.top) / (window.innerHeight * 0.6), 0), 1);
    pad.style.strokeDashoffset = padLengte * (1 - voortgang);
  }
  bar.classList.toggle("is-gescrold", y > 20);
}

let wacht = false;
window.addEventListener("scroll", () => {
  if (wacht) return;
  wacht = true;
  requestAnimationFrame(() => { bijScrollen(); wacht = false; });
}, { passive: true });

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
bijScrollen();

/* ---------- Donkere modus (nachtrit) ---------- */
document.getElementById("themaKnop").addEventListener("click", () => {
  const nieuw = document.documentElement.getAttribute("data-thema") === "donker" ? "licht" : "donker";
  document.documentElement.setAttribute("data-thema", nieuw);
  try { localStorage.setItem("gg-thema", nieuw); } catch (e) {}
});
