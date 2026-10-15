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

/* ---------- Filteren ---------- */
let filter = "alle";
const leeg = document.getElementById("bordjesLeeg");

function toonBordjes() {
  let aantal = 0;
  bordjes.querySelectorAll(".bordje").forEach(b => {
    const past = (filter === "alle" || b.dataset.soort === filter);
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

/* ---------- Gorilla-tips ---------- */
// 3 tips per tool, in drie talen; t = de tool waar "Naar de tool" heen gaat.
// De eerste tip zet het bouwscript ook vast in de pagina (voor zoekmachines). Geen " in de teksten gebruiken.
const TIPS_ALLE = [
  { t: "bandenspanning-calculator", nl: "Rijd je veel zand? Een bredere band met wat minder spanning zakt minder weg dan een smalle, harde band.", en: "Riding a lot of sand? A wider tyre with a bit less pressure sinks in less than a narrow, hard tyre.", de: "Viel Sand unterwegs? Ein breiterer Reifen mit etwas weniger Druck sinkt weniger ein als ein schmaler, harter Reifen." },
  { t: "gravelbike-kiezer", nl: "Twijfel je tussen twee fietsen? Kijk naar de bandruimte: een frame met plek voor 45 mm of meer geeft je later meer keuze.", en: "Torn between two bikes? Look at tyre clearance: a frame with room for 45 mm or more gives you more choice later.", de: "Zwischen zwei Rädern unentschlossen? Schau auf die Reifenfreiheit: Ein Rahmen mit Platz für 45 mm oder mehr lässt dir später mehr Wahl." },
  { t: "maatbepaler", nl: "Twijfel je tussen twee framematen? Kijk niet alleen naar de maat, maar ook naar stack en reach.", en: "In doubt between two frame sizes? Don't just look at the size, but also at stack and reach.", de: "Zwischen zwei Rahmengrößen? Schau nicht nur auf die Größe, sondern auch auf Stack und Reach." },
  { t: "gravelbanden-kiezer", nl: "Veel modder? Kies een band met open, verspreide noppen: die laat de modder makkelijker los.", en: "Lots of mud? Choose a tyre with open, widely spaced knobs: it sheds mud more easily.", de: "Viel Matsch? Wähle einen Reifen mit offenen, weit verteilten Stollen: Der gibt den Matsch leichter wieder frei." },
  { t: "kledingadvies", nl: "Kleed je zo dat je de eerste tien minuten een beetje koud hebt. Warm word je vanzelf.", en: "Dress so that you feel a bit cold for the first ten minutes. You'll warm up by yourself.", de: "Zieh dich so an, dass dir die ersten zehn Minuten etwas kalt ist. Warm wird dir von selbst." },
  { t: "gravelroutes", nl: "Begin je net? Plan je eerste rit van 30 à 40 km op bekend terrein. Het gaat om plezier, niet om snelheid.", en: "Just starting? Plan your first ride of 30 to 40 km on familiar ground. It's about fun, not speed.", de: "Gerade erst angefangen? Plan deine erste Fahrt mit 30 bis 40 km auf bekanntem Terrain. Es geht um Spaß, nicht um Tempo." },
  { t: "versnellingscalculator", nl: "Na een modderrit eerst je ketting schoonmaken en smeren. Dat scheelt je later een nieuwe aandrijving.", en: "After a muddy ride, clean and lube your chain first. That saves you a new drivetrain later.", de: "Nach einer Matschfahrt zuerst die Kette putzen und ölen. Das erspart dir später einen neuen Antrieb." },
  { t: "paklijst-bikepacking", nl: "Leg alles wat je mee wilt nemen op de grond en haal er een derde af. Elke kilo voel je bergop.", en: "Lay out everything you want to take and remove a third. You feel every kilo uphill.", de: "Leg alles, was du mitnehmen willst, auf den Boden und nimm ein Drittel wieder weg. Jedes Kilo spürst du bergauf." },
  { t: "gravelwielen-kiezer", nl: "Bredere velgen (25 mm binnenmaat of meer) geven je band een rondere vorm: meer grip en comfort bij lage spanning.", en: "Wider rims (25 mm internal or more) give your tyre a rounder shape: more grip and comfort at low pressure.", de: "Breitere Felgen (25 mm innen oder mehr) geben deinem Reifen eine rundere Form: mehr Grip und Komfort bei niedrigem Druck." },
  { t: "ultra-eventkiezer", nl: "Je eerste ultra? Kies een event onder de 750 km met genoeg bevoorrading onderweg, en oefen eerst een nachtrit.", en: "Your first ultra? Pick an event under 750 km with plenty of resupply along the way, and practise a night ride first.", de: "Dein erster Ultra? Wähle ein Event unter 750 km mit genug Versorgung unterwegs und übe vorher eine Nachtfahrt." },
  { t: "profielsticker", nl: "Plak je profielsticker op een vetvrije bovenbuis: maak hem eerst schoon met wat alcohol, dan blijft hij ook in de regen zitten.", en: "Stick your profile sticker on a grease-free top tube: clean it with a little alcohol first, then it stays on in the rain too.", de: "Kleb deinen Profilaufkleber auf ein fettfreies Oberrohr: Reinige es vorher mit etwas Alkohol, dann hält er auch im Regen." },

  { t: "bandenspanning-calculator", nl: "Tubeless? Kijk elke paar maanden of er nog genoeg melk in je band zit. Die droogt langzaam op.", en: "Tubeless? Check every few months whether there's still enough sealant in your tyre. It slowly dries out.", de: "Tubeless? Prüf alle paar Monate, ob noch genug Dichtmilch im Reifen ist. Sie trocknet langsam aus." },
  { t: "gravelbike-kiezer", nl: "Ga je bikepacken? Let op montagepunten voor tassen en bidons: achteraf is dat lastig op te lossen.", en: "Going bikepacking? Look for mounts for bags and bottles: that's hard to fix afterwards.", de: "Willst du bikepacken? Achte auf Befestigungspunkte für Taschen und Flaschen: Das lässt sich nachträglich schwer lösen." },
  { t: "maatbepaler", nl: "Meet je binnenbeenlengte op blote voeten, met een boek tussen je benen tegen de muur. Dat is veel nauwkeuriger dan schatten.", en: "Measure your inside leg barefoot, with a book between your legs against the wall. That's far more accurate than guessing.", de: "Miss deine Schrittlänge barfuß, mit einem Buch zwischen den Beinen an der Wand. Das ist viel genauer als Schätzen." },
  { t: "gravelbanden-kiezer", nl: "Vooral asfalt en droog grind? Een band met een gladde middenstrook en noppen aan de zijkant rolt snel en houdt grip in de bocht.", en: "Mostly tarmac and dry gravel? A tyre with a smooth centre strip and side knobs rolls fast and still grips in corners.", de: "Vor allem Asphalt und trockener Schotter? Ein Reifen mit glattem Mittelstreifen und Seitenstollen rollt schnell und hält in Kurven Grip." },
  { t: "kledingadvies", nl: "Armstukken en een windvest zijn de handigste laagjes: in de ochtend aan, later in je achterzak.", en: "Arm warmers and a wind vest are the handiest layers: on in the morning, in your back pocket later.", de: "Armlinge und eine Windweste sind die praktischsten Schichten: morgens an, später in die Trikottasche." },
  { t: "gravelroutes", nl: "Na regen is zand vaak juist steviger en klei juist gladder. Houd daar rekening mee als je een route kiest.", en: "After rain, sand is often firmer and clay more slippery. Keep that in mind when you choose a route.", de: "Nach Regen ist Sand oft fester und Lehm rutschiger. Denk daran, wenn du eine Route wählst." },
  { t: "versnellingscalculator", nl: "Veel klimmen of bagage? Een licht verzet is geen schande: soepel blijven trappen spaart je benen.", en: "Lots of climbing or luggage? An easy gear is nothing to be ashamed of: keeping your pedalling smooth saves your legs.", de: "Viele Anstiege oder Gepäck? Ein leichter Gang ist keine Schande: Rund weitertreten schont deine Beine." },
  { t: "paklijst-bikepacking", nl: "Zware spullen laag en dicht bij het frame: dan stuurt je fiets het rustigst.", en: "Heavy items low and close to the frame: that keeps your bike's handling calmest.", de: "Schwere Sachen tief und nah am Rahmen: Dann lenkt dein Rad am ruhigsten." },
  { t: "gravelwielen-kiezer", nl: "Check voor je bestelt welk cassettelichaam je nodig hebt: Shimano en SRAM passen niet zomaar op elkaar.", en: "Before you order, check which freehub body you need: Shimano and SRAM aren't simply interchangeable.", de: "Prüf vor der Bestellung, welchen Freilaufkörper du brauchst: Shimano und SRAM passen nicht einfach aufeinander." },
  { t: "ultra-eventkiezer", nl: "Train niet alleen je benen maar ook je zitvlak: maak een paar lange dagen op de fiets met je volledige bagage.", en: "Train not just your legs but your backside too: do a few long days on the bike with all your luggage.", de: "Trainiere nicht nur deine Beine, sondern auch dein Sitzfleisch: Fahr ein paar lange Tage mit kompletter Ausrüstung." },
  { t: "profielsticker", nl: "Lange route? Verdeel hem over meerdere stickers. Een te volle sticker lees je onderweg niet.", en: "Long route? Spread it over several stickers. An overfull sticker is unreadable on the move.", de: "Lange Route? Verteile sie auf mehrere Aufkleber. Einen zu vollen Aufkleber kannst du unterwegs nicht lesen." },

  { t: "bandenspanning-calculator", nl: "Meet je bandenspanning voor elke rit. Banden verliezen in een week zo een paar tienden bar.", en: "Check your tyre pressure before every ride. Tyres easily lose a few tenths of a bar in a week.", de: "Prüf deinen Reifendruck vor jeder Fahrt. Reifen verlieren in einer Woche schnell ein paar Zehntel bar." },
  { t: "gravelbike-kiezer", nl: "Een lichtere fiets klimt fijner, maar op lange ritten doen comfort en de juiste maat er meer toe dan een paar honderd gram.", en: "A lighter bike climbs nicer, but on long rides comfort and the right size matter more than a few hundred grams.", de: "Ein leichteres Rad klettert angenehmer, aber auf langen Fahrten zählen Komfort und die richtige Größe mehr als ein paar hundert Gramm." },
  { t: "maatbepaler", nl: "Een kleiner frame stuurt wendbaarder, een groter frame rijdt rustiger. Kies bij twijfel wat bij je rijstijl past.", en: "A smaller frame handles more nimbly, a bigger frame rides more calmly. If in doubt, choose what suits your riding style.", de: "Ein kleinerer Rahmen lenkt wendiger, ein größerer fährt ruhiger. Wähle im Zweifel, was zu deinem Fahrstil passt." },
  { t: "gravelbanden-kiezer", nl: "Voor en achter mag verschillen: meer grip voor en een snellere band achter is een veelgebruikte combinatie.", en: "Front and rear can differ: more grip up front and a faster tyre at the rear is a popular combination.", de: "Vorne und hinten darf es unterschiedlich sein: mehr Grip vorne und ein schnellerer Reifen hinten ist eine beliebte Kombination." },
  { t: "kledingadvies", nl: "Op gravel altijd handschoenen: voor grip, tegen blaren en voor als je valt.", en: "Always wear gloves on gravel: for grip, against blisters and in case you fall.", de: "Auf Schotter immer Handschuhe: für Grip, gegen Blasen und für den Fall eines Sturzes." },
  { t: "gravelroutes", nl: "Zet je route ook offline op je fietscomputer of telefoon: in bossen valt het bereik vaak weg.", en: "Also put your route offline on your bike computer or phone: signal often drops out in the woods.", de: "Speicher deine Route auch offline auf Radcomputer oder Handy: Im Wald fällt der Empfang oft weg." },
  { t: "versnellingscalculator", nl: "1× of 2×? Eén blad voor is simpel en licht, twee bladen geven kleinere stappen tussen de versnellingen.", en: "1× or 2×? One chainring is simple and light, two chainrings give smaller steps between gears.", de: "1× oder 2×? Ein Kettenblatt ist einfach und leicht, zwei Blätter geben kleinere Sprünge zwischen den Gängen." },
  { t: "paklijst-bikepacking", nl: "Maak een proefrit met volle tassen voordat je echt vertrekt. Dan merk je op tijd wat rammelt of schuurt.", en: "Do a test ride with full bags before you really set off. Then you'll notice in time what rattles or rubs.", de: "Mach eine Probefahrt mit vollen Taschen, bevor es richtig losgeht. Dann merkst du rechtzeitig, was klappert oder scheuert." },
  { t: "gravelwielen-kiezer", nl: "Hookless velg? Kijk welke banden de fabrikant goedkeurt en houd je aan de maximale bandenspanning.", en: "Hookless rim? Check which tyres the manufacturer approves and stick to the maximum tyre pressure.", de: "Hookless-Felge? Schau, welche Reifen der Hersteller freigibt, und halte dich an den maximalen Reifendruck." },
  { t: "ultra-eventkiezer", nl: "Schrijf je op tijd in: populaire ultra-events zitten vaak binnen een paar dagen vol of werken met een loting.", en: "Register in good time: popular ultra events often fill up within days or use a ballot.", de: "Melde dich rechtzeitig an: Beliebte Ultra-Events sind oft in wenigen Tagen ausgebucht oder werden verlost." },
  { t: "profielsticker", nl: "Zet je posten en waterpunten op je sticker. Dan zie je in één blik hoe ver het nog is tot de volgende stop.", en: "Put your stops and water points on your sticker. Then you see at a glance how far it is to the next stop.", de: "Setz deine Stopps und Wasserstellen auf deinen Aufkleber. Dann siehst du auf einen Blick, wie weit es bis zum nächsten Halt ist." }
];
const TAAL = (document.documentElement.lang || "nl").slice(0, 2);
const TIPS = TIPS_ALLE.map(x => ({ t: x.t, tekst: x[TAAL] || x.nl, link: (TAAL === "nl" ? "" : "/" + TAAL) + "/tools/" + x.t + "/" }));
let tip = 0;
const tipTekst = document.getElementById("tipTekst");
const tipNummer = document.getElementById("tipNummer");
const tipLink = document.getElementById("tipLink");
const tipTool = document.getElementById("tipTool");
const tipKm = document.getElementById("tipKm");
const tipToolNaam = document.getElementById("tipToolNaam");

// rechts naast het tipnummer: het KM-bordje en de naam van de tool, overgenomen van de wegwijzer
function toolRegel() {
  const bord = document.querySelector('#bordjes a[href$="/tools/' + TIPS[tip].t + '/"]');
  if (!tipTool || !bord) return;
  const km = bord.querySelector(".bordje__bord");
  tipKm.textContent = km && km.lastChild ? km.lastChild.textContent.trim() : "";
  tipToolNaam.textContent = bord.querySelector(".bordje__naam").firstChild.textContent.trim();
  tipTool.href = TIPS[tip].link;
  tipTool.hidden = false;
}
// worden de bordjes op gebruik gesorteerd (nieuwe KM-nummers), dan loopt de tip mee
new MutationObserver(() => toolRegel()).observe(bordjes, { childList: true, subtree: true, characterData: true });

function toonTip(nieuw, direct) {
  tip = (nieuw + TIPS.length) % TIPS.length;
  const zet = () => {
    tipTekst.textContent = "“" + TIPS[tip].tekst + "”";
    tipNummer.textContent = String(tip + 1).padStart(2, "0");
    tipLink.href = TIPS[tip].link;
    toolRegel();
    tipTekst.classList.remove("is-wissel");
  };
  if (direct || minderBeweging) return zet();
  tipTekst.classList.add("is-wissel");
  setTimeout(zet, 300);
}
// elk bezoek op een andere plek in de rij beginnen, zodat je niet steeds dezelfde eerste tip ziet
toonTip(Math.floor(Math.random() * TIPS.length), true);
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
/* Wijs je een onderdeel aan (op de fiets of in het lijstje), dan verschijnt bij het nummer op de fiets
   een labeltje met dezelfde keuze, zodat je meteen ziet waar het om gaat.
   Touchscreen: eerste tik op de fiets laat het labeltje zien (met →), tweede tik op hetzelfde
   onderdeel of een tik op het labeltje gaat naar de tool. Ergens anders tikken sluit het weer. */
const snelfiets = document.querySelector(".snelfiets");
const fietsLabel = document.createElement("a");
fietsLabel.className = "snelfiets__tip";
fietsLabel.setAttribute("aria-hidden", "true");
fietsLabel.tabIndex = -1;
if (snelfiets) snelfiets.appendChild(fietsLabel);
let vastDeel = null;   // onderdeel dat met de vinger is aangetikt (labeltje blijft staan)
function fietsTip(deel) {
  if (!snelfiets) return;
  const punt = deel && snelfiets.querySelector(`.deel[data-deel="${deel}"] .punt__kern`);
  const keuze = deel && document.querySelector(`.snelkeuze__opties a[data-deel="${deel}"]`);
  if (!punt || !keuze) { fietsLabel.classList.remove("is-zichtbaar", "is-vast"); return; }
  fietsLabel.innerHTML = keuze.innerHTML + (vastDeel === deel ? '<b aria-hidden="true">→</b>' : "");
  fietsLabel.href = keuze.getAttribute("href");
  fietsLabel.classList.toggle("is-vast", vastDeel === deel);
  const vak = snelfiets.getBoundingClientRect(), p = punt.getBoundingClientRect();
  const midden = p.left + p.width / 2 - vak.left;
  const links = Math.max(0, Math.min(midden - fietsLabel.offsetWidth / 2, vak.width - fietsLabel.offsetWidth));
  fietsLabel.style.left = links + "px";
  fietsLabel.style.top = (p.top - vak.top - fietsLabel.offsetHeight - 12) + "px";
  fietsLabel.style.setProperty("--pijl", (midden - links) + "px");
  fietsLabel.classList.add("is-zichtbaar");
}
document.querySelectorAll(".snelkeuze [data-deel]").forEach(el => {
  const zelfde = () => document.querySelectorAll(`.snelkeuze [data-deel="${el.dataset.deel}"]`);
  const aan = () => { zelfde().forEach(z => z.classList.add("is-aan")); fietsTip(el.dataset.deel); };
  const uit = () => { if (vastDeel === el.dataset.deel) return; zelfde().forEach(z => z.classList.remove("is-aan")); fietsTip(null); };
  el.addEventListener("mouseenter", aan);
  el.addEventListener("mouseleave", uit);
  el.addEventListener("focus", aan);
  el.addEventListener("blur", uit);

  // alleen de onderdelen op de fiets zelf: met de vinger eerst laten zien, pas bij de tweede tik erheen
  if (!el.closest(".snelfiets")) return;
  let soort = "";
  el.addEventListener("pointerdown", e => { soort = e.pointerType; });
  el.addEventListener("click", e => {
    const vinger = soort === "touch" || soort === "pen";
    soort = "";
    if (!vinger || vastDeel === el.dataset.deel) return;   // muis/toetsenbord of tweede tik: gewoon naar de tool
    e.preventDefault();
    e.stopPropagation();
    const vorige = vastDeel;
    vastDeel = el.dataset.deel;
    if (vorige) document.querySelectorAll(`.snelkeuze [data-deel="${vorige}"]`).forEach(z => z.classList.remove("is-aan"));
    aan();
  });
});
// ergens anders tikken: aangetikt onderdeel weer loslaten
document.addEventListener("click", e => {
  if (!vastDeel || fietsLabel.contains(e.target)) return;
  const deel = vastDeel;
  vastDeel = null;
  document.querySelectorAll(`.snelkeuze [data-deel="${deel}"]`).forEach(z => z.classList.remove("is-aan"));
  fietsTip(null);
});
