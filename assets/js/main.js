/* =========================================================
   Gravel Gorilla — interactie
   ========================================================= */

const minderBeweging = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------
   DE LIJST MET TOOLS (de wegwijzer)
   Nieuwe tool toevoegen? Kopieer een blok en pas het aan.
   - soort:     "kiezen", "berekenen" of "plannen"
   - plaatje:   "quiz", "wiel", "meter", "liniaal", "tas" of "vlag"
   - label:     klein oranje labeltje (optioneel)
   - binnenkort: true = bordje zonder link, half doorzichtig
   --------------------------------------------------------- */
const TOOLS = [
  {
    naam: "Gravelbike Kiezer",
    uitleg: "Een paar vragen over hoe en waar je rijdt, en je ziet welke van 147 gravelbikes bij je passen.",
    link: "/tools/gravelbike-kiezer/",
    soort: "kiezen",
    plaatje: "quiz",
    label: "Meest gebruikt"
  },
  {
    naam: "Bandenspanning",
    uitleg: "De juiste spanning voor jouw gewicht, bandbreedte en ondergrond. Voor en achter apart.",
    link: "/tools/bandenspanning-calculator/",
    soort: "berekenen",
    plaatje: "meter"
  },
  {
    naam: "Wielen Kiezer",
    uitleg: "Licht, stevig of juist snel? Vind de wielset die bij je fiets en rijstijl past.",
    link: "/tools/gravelwielen-kiezer/",
    soort: "kiezen",
    plaatje: "wiel"
  },
  {
    naam: "Ultra-eventkiezer",
    uitleg: "Welk ultra gravel-event past bij jouw ervaring, conditie en agenda? Je krijgt een shortlist.",
    link: "/tools/ultra-eventkiezer/",
    soort: "plannen",
    plaatje: "vlag"
  },
  {
    naam: "Profielsticker",
    uitleg: "Van GPX naar sticker voor je bovenbuis: klimmen, posten, wattage en wanneer je moet eten.",
    link: "/tools/profielsticker/",
    soort: "plannen",
    plaatje: "profiel",
    label: "Nieuw"
  }
];

/* Kleine plaatjes die oppoppen als je over een bordje beweegt */
const PLAATJES = {
  quiz: `<svg viewBox="0 0 100 100" width="96" height="96"><rect x="14" y="20" width="72" height="8" rx="4" fill="#E3DDCF"/><rect x="14" y="20" width="46" height="8" rx="4" fill="#FF6B2C"/><rect x="14" y="40" width="72" height="14" rx="5" fill="#2F8F3E"/><rect x="14" y="60" width="72" height="14" rx="5" fill="none" stroke="#15181A" stroke-width="2"/><rect x="14" y="80" width="50" height="6" rx="3" fill="#C9C2B2"/></svg>`,
  meter: `<svg viewBox="0 0 100 100" width="100" height="100"><path d="M15 70 A35 35 0 0 1 85 70" fill="none" stroke="#E3DDCF" stroke-width="9" stroke-linecap="round"/><path d="M15 70 A35 35 0 0 1 72 42" fill="none" stroke="#2F8F3E" stroke-width="9" stroke-linecap="round"/><line x1="50" y1="70" x2="68" y2="44" stroke="#15181A" stroke-width="3.5" stroke-linecap="round"/><circle cx="50" cy="70" r="6" fill="#FF6B2C"/></svg>`,
  wiel: `<svg viewBox="0 0 100 100" width="100" height="100"><circle cx="50" cy="50" r="40" fill="none" stroke="#15181A" stroke-width="8" stroke-dasharray="4 4"/><circle cx="50" cy="50" r="33" fill="none" stroke="#C9C2B2" stroke-width="2"/>${Array.from({ length: 10 }, (_, i) => `<line x1="50" y1="50" x2="50" y2="18" stroke="#9AA098" stroke-width="1.4" transform="rotate(${i * 36} 50 50)"/>`).join("")}<circle cx="50" cy="50" r="6" fill="#2F8F3E"/></svg>`,
  liniaal: `<svg viewBox="0 0 100 100" width="96" height="96"><rect x="12" y="38" width="76" height="24" rx="4" fill="#2F8F3E"/><g stroke="#F4F1EA" stroke-width="2"><path d="M22 38v8M32 38v12M42 38v8M52 38v12M62 38v8M72 38v12M82 38v8"/></g></svg>`,
  profiel: `<svg viewBox="0 0 100 100" width="100" height="100"><rect x="8" y="30" width="84" height="40" rx="6" fill="#15181A"/><path d="M14 62 L28 50 L38 55 L52 38 L64 47 L76 36 L86 62 Z" fill="#2F8F3E"/><rect x="14" y="62" width="30" height="4" fill="#9AA098"/><rect x="44" y="62" width="42" height="4" fill="#F4F1EA"/><circle cx="52" cy="38" r="3.5" fill="#FF6B2C"/></svg>`,
  vlag: `<svg viewBox="0 0 100 100" width="96" height="96"><path d="M28 86V16" stroke="#15181A" stroke-width="4" stroke-linecap="round"/><path d="M30 18h46l-9 14 9 14H30z" fill="#2F8F3E"/><g fill="#F4F1EA"><rect x="38" y="22" width="7" height="7"/><rect x="52" y="22" width="7" height="7"/><rect x="45" y="29" width="7" height="7"/><rect x="59" y="29" width="7" height="7"/><rect x="38" y="36" width="7" height="7"/><rect x="52" y="36" width="7" height="7"/></g></svg>`,
  tas: `<svg viewBox="0 0 100 100" width="96" height="96"><rect x="22" y="32" width="56" height="50" rx="10" fill="#2F8F3E"/><path d="M38 32v-6a12 12 0 0 1 24 0v6" fill="none" stroke="#15181A" stroke-width="4"/><rect x="22" y="50" width="56" height="6" fill="#14361E"/></svg>`
};

function maakBordje(tool, i) {
  const nummer = String(i + 1).padStart(2, "0");
  const label = tool.binnenkort ? "Binnenkort" : tool.label;
  const binnen = `
    <span class="bordje__km" aria-label="Kilometer ${nummer}"><span class="bordje__bord"><small>KM</small>${nummer}</span></span>
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
  { tekst: "Rijd je veel zand? Een bredere band met wat minder spanning zakt minder weg dan een smalle, harde band.", link: "/tools/bandenspanning-calculator/" },
  { tekst: "Tubeless? Kijk elke paar maanden of er nog genoeg melk in je band zit. Die droogt langzaam op.", link: "/tools/bandenspanning-calculator/" },
  { tekst: "Twijfel je tussen twee framematen? Kijk niet alleen naar de maat, maar ook naar stack en reach.", link: "/tools/gravelbike-kiezer/" },
  { tekst: "Begin je net? Plan je eerste rit van 30 à 40 km op bekend terrein. Het gaat om plezier, niet om snelheid.", link: "/tools/profielsticker/" },
  { tekst: "Na een modderrit eerst je ketting schoonmaken en smeren. Dat scheelt je later een nieuwe aandrijving.", link: "/tools/gravelbike-kiezer/" }
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
    // draaien om het midden van de band (200,200)
    bandDraai.setAttribute("transform", `rotate(${(y * 0.25).toFixed(1)} 200 200)`);
    // het profiel is helemaal getekend als het halverwege het scherm staat
    const vak = profiel.getBoundingClientRect();
    const voortgang = Math.min(Math.max((window.innerHeight - vak.top) / (window.innerHeight * 0.6), 0), 1);
    pad.style.strokeDashoffset = padLengte * (1 - voortgang);
  }
}

let wacht = false;
window.addEventListener("scroll", () => {
  if (wacht) return;
  wacht = true;
  requestAnimationFrame(() => { bijScrollen(); wacht = false; });
}, { passive: true });

bijScrollen();
