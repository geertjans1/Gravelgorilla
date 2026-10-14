/* =========================================================
   Gravel Gorilla — interactie
   ========================================================= */

const minderBeweging = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------------------------------
   DE WEGWIJZER
   De bordjes staan als gewone HTML in index.html: ze worden gemaakt door
   .claude/bouw-site.ps1 uit de lijst met tools daarin. Nieuwe tool? Voeg hem daar toe.
   Zo zien zoekmachines en AI-bots alle tools, ook zonder JavaScript.
   --------------------------------------------------------- */
const bordjes = document.getElementById("bordjes");

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

function bijScrollen() {
  const y = window.scrollY;
  if (!minderBeweging) {
    // draaien om het midden van de band (200,200)
    bandDraai.setAttribute("transform", `rotate(${(y * 0.25).toFixed(1)} 200 200)`);
    // het profiel is helemaal getekend (en het logo bij de finish) als het bovenin het scherm staat
    const vak = profiel.getBoundingClientRect();
    const voortgang = Math.min(Math.max((window.innerHeight - vak.top) / (window.innerHeight * 0.8), 0), 1);
    // (de groene lijn wordt in zetRenner tot aan het logo getekend)
    zetRenner(voortgang);
  }
}

/* Het logo rolt als een wiel over het profiel, op de punt waar de lijn getekend is. */
const renner = document.getElementById("profielRenner");
const klem = document.getElementById("profielKlem");
function zetRenner(voortgang) {
  if (!renner) return;
  const p = pad.getPointAtLength(padLengte * voortgang);
  renner.style.left = (p.x / 1200 * 100) + "%";
  renner.style.top = (p.y / 150 * 100) + "%";
  klem.setAttribute("width", (p.x + 10).toFixed(1));
  renner.style.transform = `rotate(${(padLengte * voortgang * 0.9).toFixed(1)}deg)`;
}
zetRenner(minderBeweging ? 1 : 0);

let wacht = false;
window.addEventListener("scroll", () => {
  if (wacht) return;
  wacht = true;
  requestAnimationFrame(() => { bijScrollen(); wacht = false; });
}, { passive: true });

bijScrollen();

/* ---------- Snelkeuze-fiets: onderdeel en knop lichten samen op ---------- */
document.querySelectorAll(".snelkeuze [data-deel]").forEach(el => {
  const zelfde = () => document.querySelectorAll(`.snelkeuze [data-deel="${el.dataset.deel}"]`);
  const aan = () => zelfde().forEach(z => z.classList.add("is-aan"));
  const uit = () => zelfde().forEach(z => z.classList.remove("is-aan"));
  el.addEventListener("mouseenter", aan);
  el.addEventListener("mouseleave", uit);
  el.addEventListener("focus", aan);
  el.addEventListener("blur", uit);
});
