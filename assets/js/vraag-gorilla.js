/* =========================================================
   Gravel Gorilla — Vraag de Gorilla
   Een hulp onder de tool: je stelt een vraag in gewone taal.
   - Kan de gorilla er de tool mee invullen ("80 kg, 45 mm, ruw gravel"), dan doet hij dat en vertelt hij de uitkomst.
   - Anders zoekt hij het beste antwoord in de veelgestelde vragen op de pagina en de extra kennis hieronder.
   Alles gebeurt in je eigen browser: er gaat geen vraag naar een server.
   Het vak zelf (#vraagGorilla) maakt .claude/bouw-site.ps1 bij tools met gorilla = $true.
   ========================================================= */
(function () {
  const vak = document.getElementById("vraagGorilla");
  if (!vak) return;
  const tool = vak.dataset.tool;
  const invoer = vak.querySelector(".vg__invoer");
  const antwoordVak = vak.querySelector(".vg__antwoord");
  const voorbeeldVak = vak.querySelector(".vg__voorbeelden");

  /* ---------- hulpjes ---------- */
  const norm = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  // woord (of begin van een woord) komt voor in de vraag
  const heeft = (q, woorden) => woorden.some(w => new RegExp("(^|[^a-z])" + w).test(q));
  // getal met eenheid, bijv. getal(q, "kg|kilo") → 80
  function getal(q, eenheden) {
    const m = q.match(new RegExp("(-?\\d+(?:[.,]\\d+)?)\\s*(?:" + eenheden + ")(?![a-z])"));
    return m ? parseFloat(m[1].replace(",", ".")) : null;
  }
  const $ = s => document.querySelector(s);
  const tekst = s => ($(s) ? $(s).textContent.trim() : "");
  const tussen = (x, min, max) => Math.max(min, Math.min(max, x));
  function zetSchuif(sel, waarde) {
    const s = $(sel);
    if (!s) return;
    s.value = waarde;
    s.dispatchEvent(new Event("input", { bubbles: true }));
    s.dispatchEvent(new Event("change", { bubbles: true }));
  }
  function klik(sel) { const k = $(sel); if (k) k.click(); }
  const html = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const lijst = items => "<ul>" + items.map(i => "<li>" + i + "</li>").join("") + "</ul>";

  /* ---------- kennis zoeken (veelgestelde vragen + extra kennis) ---------- */
  const STOP = new Set(("de het een en of in op met voor van te ik je jij mijn is wat hoe welke welk wie waar wanneer waarom kan kun moet " +
    "dat dit die er bij aan als om naar zijn heb hebt me mij wel niet ook nog al dan maar over tot uit door zo meer veel beste goed goede " +
    "gorilla tool graag eigenlijk precies even best").split(" "));
  const woorden = s => norm(s).replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter(w => w.length > 1 && !STOP.has(w));
  const stam = w => (w.length > 5 ? w.slice(0, -2) : w);
  const lijkt = (a, b) => { const sa = stam(a), sb = stam(b); return a === b || (Math.abs(a.length - b.length) <= 3 && (b.startsWith(sa) || a.startsWith(sb))); };

  function zoekKennis(vraag, bronnen, drempel = 2.4) {
    const qw = woorden(vraag);
    if (!qw.length) return null;
    let beste = null, top = 0;
    bronnen.forEach(k => {
      const kop = woorden(k.vraag + " " + (k.w || "")), body = woorden(k.tekst);
      let score = 0;
      qw.forEach(w => {
        if (kop.some(x => lijkt(w, x))) score += 3;
        else if (body.some(x => lijkt(w, x))) score += 1;
      });
      score = score / Math.sqrt(qw.length);
      if (score > top) { top = score; beste = k; }
    });
    return top >= drempel ? beste : null;
  }

  const OP_PAGINA = [...document.querySelectorAll(".tool-faq h3")].map(h => ({
    vraag: h.textContent, tekst: h.nextElementSibling ? h.nextElementSibling.innerHTML : ""
  }));

  // vragen die bij een andere tool horen
  const ANDERE = [
    { slug: "gravelbike-kiezer", naam: "Gravelbike Kiezer", w: "gravelbike fiets frame framemaat merk model welke gravelbike" },
    { slug: "gravelbanden-kiezer", naam: "Gravelbanden Kiezer", w: "welke band banden bandbreedte profiel noppen slick semi-slick bandenmerk" },
    { slug: "bandenspanning-calculator", naam: "Bandenspanning Calculator", w: "bandenspanning spanning druk bar psi oppompen pompen" },
    { slug: "gravelwielen-kiezer", naam: "Gravelwielen Kiezer", w: "wielen wielset velg velgen naaf carbon wielen" },
    { slug: "ultra-eventkiezer", naam: "Ultra-eventkiezer", w: "ultra event race bikepacking-race wedstrijd inschrijven evenement" },
    { slug: "profielsticker", naam: "Profielsticker", w: "sticker hoogteprofiel gpx route bovenbuis posten" },
    { slug: "kledingadvies", naam: "Kledingadvies", w: "kleding aantrekken trek aan graden temperatuur jas jack handschoenen koud warm regenjas outfit" }
  ].filter(a => a.slug !== tool).map(a => ({
    vraag: a.w, tekst: 'Daar heeft de gorilla een aparte tool voor: <a href="/tools/' + a.slug + '/">' + a.naam + " →</a>"
  }));

  /* ---------- per tool: voorbeelden, extra kennis en de tool invullen ---------- */
  const TOOLS = {

    /* ===== Gravelbanden Kiezer ===== */
    "gravelbanden-kiezer": {
      eigen: /band|noppen|profiel|slick|tubeless|merk/,
      plek: "Bijv. Welke band voor los gravel en modder, frame max 45 mm?",
      voorbeelden: ["Welke band voor zand op de Veluwe?", "Snelle band voor een gravelrace in de zomer", "Bikepacking in de regen, frame max 45 mm", "Wat is de lichtste band van 40 mm?", "Welke banden heeft Schwalbe?"],
      kennis: [
        { vraag: "Tubeless of binnenband?", w: "tubeless binnenband tube melk", tekst: "Tubeless is op gravel bijna altijd de betere keuze: je rijdt met minder druk zonder snakebites, en de melk dicht kleine gaatjes vanzelf. Je hebt wel tubeless-ready velgen, velglint, ventielen en melk nodig." },
        { vraag: "Hoe lang gaat een gravelband mee?", w: "slijtage vervangen kilometers lang mee", tekst: "Meestal tussen de 2.000 en 5.000 km, afhankelijk van ondergrond, gewicht en het rubber. Vervang je band als de noppen in het midden bijna glad zijn, als je het karkas ziet of als hij vaak lek gaat. De achterband slijt sneller dan de voorband." },
        { vraag: "Mag ik voor en achter een andere band?", w: "voor achter verschillend combineren mixen", tekst: "Ja, dat doen veel rijders: een grovere band voor (grip in de bocht) en een snellere band achter (rolt makkelijker). Kies dan wel twee banden met ongeveer dezelfde breedte." },
        { vraag: "Wat betekent TPI?", w: "tpi karkas draden", tekst: "TPI staat voor het aantal draden per inch in het karkas. Een hoge TPI (120 of meer) is soepeler en sneller, een lage TPI (60) is steviger en beter bestand tegen snijwonden." }
      ],
      slim(q) {
        const D = window.GG_BANDEN;
        const mm = getal(q, "mm|millimeter") || (q.match(/(?:^|\D)(3[2-9]|4\d|5[0-7])\s*(?:c|mm)?\s*(?:band|breed)/) || [])[1] * 1 || null;
        const merk = D ? Object.keys(D.MERKEN).find(m => q.includes(norm(m))) : null;

        if (D && heeft(q, ["lichtst", "lichte", "gewicht"])) {
          const kandidaten = D.BANDEN.filter(b => b.g && (!merk || b.m === merk) && (!mm || b.b.includes(mm)))
            .sort((a, b) => a.g[0] / a.g[1] - b.g[0] / b.g[1]).slice(0, 3);
          if (!kandidaten.length) return { html: "Daar heeft de gorilla geen fabrieksgewichten van. Bij lang niet alle banden geeft de fabrikant het gewicht op." };
          return { html: "De lichtste banden" + (mm ? " in " + mm + " mm" : "") + (merk ? " van " + merk : "") + " volgens de fabrikanten:" +
            lijst(kandidaten.map(b => "<b>" + b.m + " " + b.n + "</b>: " + b.g[0] + " gram bij " + b.g[1] + " mm (" + D.PROFIEL[b.p].toLowerCase() + ")")) +
            "Let op: licht is niet altijd beter. Lichte banden zijn vaak dunner en dus kwetsbaarder voor lekke banden." };
        }
        if (D && merk) {
          const vanMerk = D.BANDEN.filter(b => b.m === merk);
          return { html: "Van <b>" + merk + "</b> zitten er " + vanMerk.length + " banden in de kiezer:" +
            lijst(vanMerk.map(b => "<b>" + b.n + "</b>: " + D.PROFIEL[b.p].toLowerCase() + ", " + b.b.join(" / ") + " mm. " + b.t)) };
        }

        const ondergrond = [[4, ["zand", "modder", "blubber", "veluwe", "maasduin", "drenthe", "kempen", "heide"]], [3, ["los", "ruw", "sten", "rots", "keien", "bos", "trail", "singletrack", "technisch"]],
          [0, ["asfalt", "weg ", "wegen", "fietspad", "straat"]], [1, ["hardpack", "vast", "grindweg", "grind", "verhard"]], [2, ["gemengd", "allround", "afwissel", "mix", "van alles"]]].find(([, w]) => heeft(q, w));
        const stijl = [[0, ["race", "gravelrace", "wedstrijd", "koers", "unbound", "strade"]], [4, ["bikepack", "bagage", "ultra", "meerdaag", "tassen"]], [3, ["toer", "tocht", "rustig", "genie", "recreat"]],
          [2, ["train"]], [1, ["vlot", "tempo", "snel rijd", "hard rijd"]]].find(([, w]) => heeft(q, w));
        const weer = [[2, ["nat", "regen", "winter", "herfst", "najaar"]], [0, ["droog", "zomer", "warm"]], [1, ["wissel", "voorjaar", "lente"]]].find(([, w]) => heeft(q, w));
        const prio = [["lek", ["lek", "doorprik", "betrouwba", "robuust", "stevig"]], ["grip", ["grip"]], ["snelheid", ["snelst", "snelle", "rolweerstand", "snel rollen"]]].find(([, w]) => heeft(q, w));
        const budget = [["1", ["goedkoop", "goedkope", "budget", "niet te duur"]], ["2", ["middenklasse", "redelijk geprijs"]]].find(([, w]) => heeft(q, w));
        if (!ondergrond && !stijl && !weer && !mm && !prio && !budget) return null;

        // elke vraag is een nieuwe situatie: eerst alles terug naar het begin
        zetSchuif("#gbOndergrond", 2); zetSchuif("#gbStijl", 2); zetSchuif("#gbWeer", 1);
        const f = $("#gbFrame");
        if (f) { f.value = "0"; f.dispatchEvent(new Event("change", { bubbles: true })); }
        klik('.gb-chips[data-veld="prioriteit"] button[data-waarde="balans"]');
        klik('.gb-chips[data-veld="budget"] button[data-waarde="3"]');

        const gezet = [];
        if (ondergrond) { zetSchuif("#gbOndergrond", ondergrond[0]); gezet.push(tekst("#gbOndergrondUit")); }
        if (stijl) { zetSchuif("#gbStijl", stijl[0]); gezet.push(tekst("#gbStijlUit")); }
        if (weer) { zetSchuif("#gbWeer", weer[0]); gezet.push("weer: " + tekst("#gbWeerUit").toLowerCase()); }
        if (mm && f) {
          const opties = [35, 38, 40, 42, 45, 50, 57].filter(o => o <= mm);
          f.value = String(opties.length ? opties[opties.length - 1] : 35); f.dispatchEvent(new Event("change", { bubbles: true })); gezet.push("frame tot " + f.value + " mm");
        }
        if (prio) { klik('.gb-chips[data-veld="prioriteit"] button[data-waarde="' + prio[0] + '"]'); gezet.push("voorkeur: " + { lek: "lekbescherming", grip: "grip", snelheid: "snelheid" }[prio[0]]); }
        if (budget) { klik('.gb-chips[data-veld="budget"] button[data-waarde="' + budget[0] + '"]'); gezet.push("budget"); }

        const top = [...document.querySelectorAll("#gbLijst .gb-band")].slice(0, 3).map(li =>
          "<b>" + (li.querySelector(".gb-band__merk") || {}).textContent + " " + (li.querySelector("h3") || {}).textContent + "</b> (" + (li.querySelector(".gb-band__match") || {}).textContent + " match)");
        return {
          html: "Ik heb de kiezer ingesteld op " + gezet.map(g => "<b>" + html(g.toLowerCase()) + "</b>").join(", ") + ". " +
            "De gorilla adviseert dan <b>" + tekst("#gbBreedte") + "</b>, profiel: <b>" + tekst("#gbProfiel").toLowerCase() + "</b>." +
            (top.length ? " Zijn top 3:" + "<ol>" + top.map(t => "<li>" + t + "</li>").join("") + "</ol>" : ""),
          knop: { tekst: "Bekijk alle banden", naar: "#gbLijst" }
        };
      }
    },

    /* ===== Bandenspanning Calculator ===== */
    "bandenspanning-calculator": {
      eigen: /spanning|druk|bar|psi|kg|kilo|pomp|ventiel/,
      plek: "Bijv. Ik weeg 80 kg en rijd 45 mm tubeless op ruw gravel",
      voorbeelden: ["Ik weeg 80 kg en rijd 45 mm op ruw gravel", "70 kilo, 40 mm met binnenband op asfalt", "Hoeveel bar is 30 psi?", "Welke spanning in zand?", "Waarom de voorband zachter?"],
      kennis: [
        { vraag: "Welke spanning in zand of modder?", w: "zand modder veluwe los", tekst: "In zand en modder helpt een lagere spanning: de band wordt breder en zakt minder weg. Zet de ondergrond op ruw en ga eventueel nog 0,1 tot 0,2 bar lager. Met een binnenband niet te laag, anders krijg je snakebites." },
        { vraag: "Wat is het verschil tussen bar en psi?", w: "bar psi omrekenen eenheid", tekst: "Het zijn twee eenheden voor druk: 1 bar is 14,5 psi. De meeste pompen tonen allebei. Tip: vraag de gorilla bijvoorbeeld \"hoeveel bar is 30 psi\"." },
        { vraag: "Hoeveel druk mag er maximaal in een hookless velg?", w: "hookless velg maximaal maximum", tekst: "Bij hookless velgen (velgen zonder haakje) is de grens 5 bar (72,5 psi), en vaak lager: kijk altijd naar wat er op je velg en band staat. Op gravel kom je daar met de juiste spanning bijna nooit in de buurt." },
        { vraag: "Moet ik de spanning aanpassen als het regent?", w: "regen nat glad", tekst: "Op natte wegen en paden geeft 0,1 tot 0,2 bar minder wat extra grip, zeker in de bocht. Meer hoeft niet." },
        { vraag: "Rijd ik met bagage met meer druk?", w: "bagage bikepacking tassen zwaar gewicht", tekst: "Ja. Tel je bagage op bij je eigen gewicht (bij 'Jij, met kleding en uitrusting'), dan rekent de calculator de extra druk mee. Zware tassen achter? Dan kan de achterband nog iets harder." }
      ],
      slim(q) {
        const psi = getal(q, "psi");
        const bar = getal(q, "bar");
        if (psi != null && /bar/.test(q) && bar == null) return { html: "<b>" + psi + " psi</b> is <b>" + (psi / 14.5038).toFixed(2).replace(".", ",") + " bar</b>." };
        if (bar != null && /psi/.test(q) && psi == null) return { html: "<b>" + String(bar).replace(".", ",") + " bar</b> is <b>" + (bar * 14.5038).toFixed(1).replace(".", ",") + " psi</b>." };

        const gezet = [];
        const kg = getal(q, "kg|kilo|kilogram");
        if (kg) { zetSchuif("#ggRider", tussen(Math.round(kg), 45, 130)); gezet.push(tussen(Math.round(kg), 45, 130) + " kg"); }
        const maat = q.match(/(?:700|650)\s*[x×]\s*(\d{2})/);
        const mm = maat ? +maat[1] : getal(q, "mm|millimeter|c");
        if (mm && mm >= 25 && mm <= 60) { zetSchuif("#ggWidth", tussen(Math.round(mm), 28, 55)); gezet.push(tussen(Math.round(mm), 28, 55) + " mm"); }
        if (/650\s*b|27[.,]5/.test(q)) { klik('[data-group="wheel"] [data-value="650b"]'); gezet.push("650b"); }
        else if (/700\s*c?|28 ?inch|29er/.test(q)) { klik('[data-group="wheel"] [data-value="700c"]'); gezet.push("700c"); }
        const grond = [["ruw", ["ruw", "los", "sten", "rots", "zand", "modder", "trail", "technisch", "bos", "singletrack"]], ["glad", ["asfalt", "glad", "weg ", "wegen", "fietspad", "hardpack", "straat"]], ["gemengd", ["gemengd", "gravel", "mix", "afwissel"]]].find(([, w]) => heeft(q, w));
        if (grond) { klik('[data-group="terrain"] [data-value="' + grond[0] + '"]'); gezet.push(grond[0] + " terrein"); }
        if (/tubeless/.test(q)) { klik('[data-group="valve"] [data-value="tubeless"]'); gezet.push("tubeless"); }
        else if (/binnenband|(^|[^a-z])tube([^a-z]|$)|met band(je)?s?$/.test(q)) { klik('[data-group="valve"] [data-value="tube"]'); gezet.push("binnenband"); }
        if (!gezet.length) return null;

        const voor = tekst("#ggFrontBar"), achter = tekst("#ggRearBar");
        return {
          html: "Ik heb de calculator ingevuld. Met <b>" + html([$("#ggRider").value + " kg", $("#ggWidth").value + " mm"]
              .concat(["wheel", "terrain", "valve"].map(g => tekst('[data-group="' + g + '"] .is-active').toLowerCase())).filter(Boolean).join(", ")) + "</b> adviseert de gorilla:" +
            lijst(["Voorband: <b>" + voor + "</b> (" + tekst("#ggFrontPsi") + " psi)", "Achterband: <b>" + achter + "</b> (" + tekst("#ggRearPsi") + " psi)"]) +
            ($("#ggWarning") && $("#ggWarning").offsetParent && tekst("#ggWarning") ? html(tekst("#ggWarning")) : "Begin hiermee en stel na de eerste kilometers bij op gevoel."),
          knop: { tekst: "Bekijk de meters", naar: ".tool-vak" }
        };
      }
    },

    /* ===== Kledingadvies ===== */
    "kledingadvies": {
      eigen: /grad|aan ?(trek|doe)|kleding|kleren|jas|jack|vest|handschoen|muts|koud|warm|regen|achterzak|schoen|sokken|broek/,
      plek: "Bijv. Wat trek ik aan bij 8 graden en regen, 3 uur rijden?",
      voorbeelden: ["Wat trek ik aan bij 8 graden en regen?", "3 uur rijden bij 15 graden met harde wind", "Ik heb het snel koud, het is 2 graden", "Wedstrijd bij 25 graden", "Wat moet er in mijn achterzak?"],
      kennis: [
        { vraag: "Wat doe ik tegen koude handen en voeten?", w: "handen voeten tenen vingers koud overschoenen handschoenen", tekst: "Handen en voeten koelen het snelst af. Kies bij twijfel de warmere handschoenen en trek overschoenen of teenkapjes aan. Je schoenen niet te strak: dan blijft je bloed beter stromen." },
        { vraag: "Wat is het laagjesprincipe?", w: "laagjes lagen laag", tekst: "Meerdere dunne lagen houden je warmer dan één dikke, en je kunt ze los uittrekken. Begin met een ondershirt dat zweet afvoert, dan een shirt, en daaroverheen een windvest of jack als het waait of regent." },
        { vraag: "Regenjas of windjack?", w: "regenjas windjack regenjack jack jas verschil", tekst: "Een windjack houdt wind en een licht buitje tegen en ademt goed. Een regenjack houdt echte regen tegen, maar je zweet er sneller in. Bij kans op buien: een opvouwbaar regenjack in je achterzak." }
      ],
      slim(q) {
        q = q.replace(/min(?:us)?\s*(\d)/, "-$1");
        const gezet = [];
        let temp = getal(q, "°\\s*c?|graden|graad|gr|celsius");
        if (temp == null && heeft(q, ["vriest", "vorst"])) temp = -2;
        const neerslag = [["regen", ["regen", "plens", "stort", "nat weer", "miezer"]], ["buien", ["bui"]], ["droog", ["droog"]]].find(([, w]) => heeft(q, w));
        const wind = [["weinig", ["geen wind", "weinig wind", "windstil"]], ["stevig", ["harde wind", "storm", "stevige wind", "veel wind", "waai"]], ["matig", ["wind", "briesje", "bries"]]].find(([, w]) => heeft(q, w));
        const uur = getal(q, "uur|u"), km = getal(q, "km|kilometer");
        let duur = null;
        if (uur != null) duur = uur <= 1.5 ? "kort" : uur <= 3 ? "middel" : uur <= 6 ? "lang" : "ultra";
        else if (km != null) duur = km < 50 ? "kort" : km < 100 ? "middel" : km < 200 ? "lang" : "ultra";
        else if (heeft(q, ["ultra", "hele dag", "nachtrit", "bikepack"])) duur = "ultra";
        else if (heeft(q, ["kort rondje", "rondje", "uurtje"])) duur = "kort";
        const tempo = [["wedstrijd", ["wedstrijd", "race", "koers"]], ["rustig", ["rustig", "toer", "koffie", "sociaal", "herstel"]], ["stevig", ["stevig", "training", "tempo"]]].find(([, w]) => heeft(q, w));
        const gevoel = [["koud", ["koukleum", "snel koud", "het koud heb", "kouwelijk"]], ["warm", ["snel warm", "het warm heb", "zweet veel", "veel zweet"]]].find(([, w]) => heeft(q, w));
        const grond = heeft(q, ["modder", "natte grond", "natte paden", "plassen"]) ? "nat" : null;
        if (temp == null && !neerslag && !wind && !duur && !tempo && !gevoel && !grond) return null;

        klik('.kl-modusknop[data-modus="zelf"]');
        // elke vraag is een nieuwe situatie: eerst alles terug naar het begin
        [["neerslag", "droog"], ["wind", "weinig"], ["duur", "middel"], ["tempo", "stevig"], ["gevoel", "normaal"], ["grond", "droog"]]
          .forEach(([veld, w]) => klik('.kl-chips[data-veld="' + veld + '"] button[data-waarde="' + w + '"]'));
        if (temp != null) { zetSchuif("#klTemp", tussen(Math.round(temp), -10, 35)); gezet.push(tussen(Math.round(temp), -10, 35) + " °C"); }
        const chip = (veld, w, label) => { klik('.kl-chips[data-veld="' + veld + '"] button[data-waarde="' + w + '"]'); gezet.push(label || w); };
        if (neerslag) chip("neerslag", neerslag[0]);
        if (wind) chip("wind", wind[0], wind[0] + " wind");
        if (duur) chip("duur", duur, { kort: "korte rit", middel: "rit van 1,5 tot 3 uur", lang: "lange rit", ultra: "ultra" }[duur]);
        if (tempo) chip("tempo", tempo[0], tempo[0] + "tempo");
        if (gevoel) chip("gevoel", gevoel[0], "je hebt het snel " + gevoel[0]);
        if (grond) chip("grond", grond, "natte paden");

        const zones = [...document.querySelectorAll("#klZones .kl-zone")].map(li => {
          const b = li.querySelector("b"), naam = b ? b.textContent : "";
          const extra = li.querySelector(".kl-zone__extra"), extraTekst = extra ? extra.textContent : "";
          const hoofd = li.textContent.replace(naam, "").replace(extraTekst, "").trim();
          return "<b>" + naam + ":</b> " + html(hoofd) + (extraTekst ? " <i>(" + html(extraTekst) + ")</i>" : "");
        });
        const zak = [...document.querySelectorAll("#klZak li")].map(li => html(li.textContent));
        return {
          html: "Ik heb het kledingadvies ingevuld met <b>" + html(gezet.join(", ")) + "</b>" + (temp == null ? " (temperatuur: " + tekst("#klTempUit") + ")" : "") +
            ". Het voelt als <b>" + tekst("#klEff") + "</b>. De gorilla adviseert:" + lijst(zones) +
            (zak.length ? "In je achterzak: " + zak.join(", ").toLowerCase() + "." : ""),
          knop: { tekst: "Bekijk het hele advies", naar: "#klZones" }
        };
      }
    },

    /* ===== Ultra-eventkiezer ===== */
    "ultra-eventkiezer": {
      eigen: /event|ultra|race|wedstrijd|km|land|maand|self|support|bikepack/,
      plek: "Bijv. Een gravel-ultra in Europa in juni, korter dan 1000 km",
      voorbeelden: ["Een gravel-ultra in Europa in juni", "Korter dan 750 km voor beginners", "Welke ultra's zijn er in Spanje?", "Self-supported in september", "Welke race heeft de meeste hoogtemeters?"],
      kennis: [
        { vraag: "Hoe bereid ik me voor op mijn eerste ultra?", w: "voorbereiden voorbereiding eerste beginner trainen training", tekst: "Bouw je lange ritten rustig op en rijd een paar keer een volle dag met je complete bagage. Oefen met eten en drinken onderweg, slapen in je bivakzak en kleine reparaties. Begin met een kortere ultra (onder de 750 km) en rijd je eigen tempo." },
        { vraag: "Welke fiets heb ik nodig voor een ultra?", w: "fiets nodig gravelbike mtb racefiets", tekst: "Dat hangt af van de ondergrond: bij asfalt een racefiets, bij gemengd of onverhard een gravelbike, en bij ruige routes soms een mountainbike. In de kiezer zie je per event welke fiets past. Comfort is belangrijker dan gewicht." },
        { vraag: "Wat neem ik mee op een ultra?", w: "meenemen bagage tassen inpakken paklijst slapen", tekst: "De basis: een frame- of zadeltas, licht slaapspul (bivakzak, matje, slaapzak), lampen met een powerbank, reparatieset, regenkleding, warme laag en genoeg eten. Neem minder mee dan je denkt: elke kilo voel je bergop." }
      ],
      slim(q) {
        if (typeof EVENTS === "undefined") return null;
        const MAANDEN = ["jan", "feb", "maart|mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
        const maanden = MAANDEN.map((m, i) => (new RegExp("(^|[^a-z])(" + m + ")").test(q) ? i : -1)).filter(i => i >= 0);
        const landen = [...new Set(EVENTS.map(e => e.land))].filter(l => q.includes(norm(l)));
        const delen = [...new Set(EVENTS.map(e => e.cont))].filter(c => q.includes(norm(c)) || (norm(c).endsWith("amerika") && /(^|[^a-z])amerika/.test(q) && !/(noord|zuid)/.test(q)));
        let kmMin = null, kmMax = null;
        const kmGetal = getal(q, "km|kilometer");
        if (kmGetal) {
          if (heeft(q, ["korter", "minder", "onder", "max", "hooguit", "tot "])) kmMax = kmGetal;
          else if (heeft(q, ["langer", "meer dan", "boven", "minstens"])) kmMin = kmGetal;
          else { kmMin = kmGetal * 0.75; kmMax = kmGetal * 1.25; }
        }
        if (heeft(q, ["beginner", "eerste ultra", "mijn eerste"])) kmMax = kmMax || 750;
        const surf = heeft(q, ["onverhard", "offroad", "off-road"]) ? "onverhard" : heeft(q, ["asfalt"]) ? "asfalt" : null;
        const fiets = heeft(q, ["mtb", "mountainbike"]) ? "mtb" : heeft(q, ["racefiets"]) ? "race" : heeft(q, ["gravel"]) ? "gravel" : null;
        const fmt = heeft(q, ["self", "zelfvoorzien", "zonder support"]) ? "self" : heeft(q, ["supported", "met support", "verzorgd"]) ? "sup"
          : heeft(q, ["etappe"]) ? "stage" : heeft(q, ["brevet", "audax"]) ? "brevet" : heeft(q, ["toertocht"]) ? "tour" : null;
        const sorteer = heeft(q, ["langst"]) ? "lang" : heeft(q, ["kortst"]) ? "kort" : heeft(q, ["hoogtemeter", "zwaarst", "klim", "berg"]) ? "hm" : "datum";
        if (!maanden.length && !landen.length && !delen.length && kmMin == null && kmMax == null && !surf && !fiets && !fmt && sorteer === "datum" && !heeft(q, ["binnenkort", "eerstvolgend", "volgende"])) return null;

        const vandaag = new Date(); vandaag.setHours(0, 0, 0, 0);
        // al geweest? dan rekent de gorilla met de volgende editie, rond dezelfde datum een jaar later
        const volgende = e => { let d = new Date(e.d); while (d < vandaag) d.setFullYear(d.getFullYear() + 1); return d; };
        let uit = EVENTS
          .filter(e => !maanden.length || maanden.includes(new Date(e.d).getMonth()))
          .filter(e => !landen.length || landen.includes(e.land))
          .filter(e => !delen.length || delen.includes(e.cont))
          .filter(e => (kmMin == null || e.km >= kmMin) && (kmMax == null || e.km <= kmMax))
          .filter(e => !surf || e.surf === surf)
          .filter(e => !fiets || e.bike.includes(fiets))
          .filter(e => !fmt || e.fmt === fmt);
        const op = { lang: (a, b) => b.km - a.km, kort: (a, b) => a.km - b.km, hm: (a, b) => (b.hm || 0) - (a.hm || 0), datum: (a, b) => volgende(a) - volgende(b) }[sorteer];
        uit = uit.sort(op);
        if (!uit.length) return { html: "Daar vindt de gorilla geen event bij. Probeer het wat ruimer, bijvoorbeeld zonder maand of met een heel werelddeel." };
        const datum = (d, opties) => new Date(d).toLocaleDateString("nl-NL", opties || { day: "numeric", month: "short", year: "numeric" });
        const wanneer = e => new Date(e.d) >= vandaag
          ? datum(e.d) + (e.tbc ? " (onder voorbehoud)" : "")
          : "volgende editie rond " + datum(volgende(e), { month: "long", year: "numeric" }) + " (vorige: " + datum(e.d) + ")";
        const regel = e => '<a href="' + e.u + '" target="_blank" rel="noopener">' + html(e.n) + " ↗</a> " +
          wanneer(e) + ", " + html(e.land) + ", " + e.km.toLocaleString("nl-NL") + " km" + (e.hm ? ", " + e.hm.toLocaleString("nl-NL") + " hm" : "");
        const geweest = uit.slice(0, 5).some(e => new Date(e.d) < vandaag);
        return {
          html: "De gorilla vond <b>" + uit.length + " " + (uit.length === 1 ? "event" : "events") + "</b>" + (uit.length > 5 ? ". De eerste vijf:" : ":") +
            lijst(uit.slice(0, 5).map(regel)) +
            (geweest ? "Bij events die dit jaar al geweest zijn, staat de verwachte maand van de volgende editie. " : "") +
            "Controleer altijd de officiële website voordat je je inschrijft.",
          knop: { tekst: "Zoek verder in de kiezer", naar: null }
        };
      }
    },

    /* ===== Profielsticker ===== */
    "profielsticker": {
      eigen: /sticker|gpx|tcx|post|print|profiel|komoot|strava|garmin|ftp|eten/,
      plek: "Bijv. Hoe zet ik een rustpost op mijn sticker?",
      voorbeelden: ["Hoe haal ik een GPX uit Komoot?", "Hoe verschuif ik een post?", "Op welk papier print ik de sticker?", "Hoeveel moet ik eten onderweg?", "Wordt mijn route geüpload?"],
      kennis: [
        { vraag: "Hoe haal ik een GPX-bestand uit Komoot?", w: "komoot gpx downloaden exporteren bestand", tekst: "Open je tour op komoot.com (op de computer), klik op de drie puntjes of op 'Downloaden' en kies 'GPX-bestand'. Sleep dat bestand daarna in de profielsticker." },
        { vraag: "Hoe haal ik een GPX-bestand uit Strava?", w: "strava gpx downloaden exporteren route activiteit", tekst: "Open je route op strava.com, klik op de drie puntjes of 'Exporteren' en kies 'GPX'. Van een gereden activiteit kan het ook: drie puntjes → 'Exporteer GPX'." },
        { vraag: "Hoe haal ik een GPX-bestand uit Garmin of RideWithGPS?", w: "garmin connect ridewithgps rwgps wahoo exporteren", tekst: "In Garmin Connect: open de koers en kies 'Exporteren naar GPX'. In RideWithGPS: open de route, klik op 'Export' en kies GPX of TCX." },
        { vraag: "Op welk papier print ik de sticker?", w: "printen papier sticker vinyl plakken bevestigen tape laminer", tekst: "Het mooiste is printbaar stickervel (vinyl, waterbestendig) uit de kantoorwinkel. Gewoon papier kan ook: knip de strook uit en plak hem vast met breed transparant plakband, dan is hij meteen beschermd tegen regen." },
        { vraag: "Hoe zet ik een post op mijn sticker?", w: "post posten rustpost waterpunt toevoegen slaapplek controle", tekst: "Tik op het profiel op de plek waar je een post wilt, en kies wat het is: rustpost, waterpunt, controle of slaapplek. De verwachte aankomsttijd komt er vanzelf bij." },
        { vraag: "Hoeveel moet ik eten onderweg?", w: "eten drinken koolhydraten voeding gram uur", tekst: "Als vuistregel 60 tot 90 gram koolhydraten per uur bij een stevige rit, en een bidon per uur (meer als het warm is). De sticker rekent het voor jouw rit uit en zet de eetmomenten erop. Het blijft een schatting: luister naar je lijf." },
        { vraag: "Wat is FTP?", w: "ftp wattage vermogen watt niveau", tekst: "FTP is het vermogen (in watt) dat je ongeveer een uur kunt volhouden. Weet je het niet? Kies dan je niveau, dan schat de tool het voor je. Met je FTP rekent de sticker per klim uit welk wattage je aanhoudt." }
      ],
      slim() { return null; }
    }
  };

  const T = TOOLS[tool] || { voorbeelden: [], kennis: [], slim: () => null };

  /* ---------- tonen ---------- */
  function toon(a) {
    antwoordVak.innerHTML = '<div class="vg__bubbel"><img src="/assets/img/logo-icon.svg" alt="" width="40" height="40"><div class="vg__tekst">' + a.html +
      (a.knop ? '<button type="button" class="vg__knop">' + a.knop.tekst + " ↓</button>" : "") + "</div></div>";
    antwoordVak.hidden = false;
    const knop = antwoordVak.querySelector(".vg__knop");
    if (knop) knop.addEventListener("click", () => {
      const doel = a.knop.naar ? $(a.knop.naar) : vak.previousElementSibling;
      if (doel) doel.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function vraag(v) {
    const q = norm(v.trim());
    if (!q) return;
    const kennis = OP_PAGINA.concat(T.kennis.map(x => ({ vraag: x.vraag, w: x.w, tekst: x.tekst })));
    const uitleg = k => ({ html: "<b>" + html(k.vraag) + "</b><br>" + k.tekst });
    let a = null;
    // 1. hoort de vraag duidelijk bij een andere tool? dan daarheen verwijzen
    const elders = T.eigen && !T.eigen.test(q) ? zoekKennis(v, ANDERE, 2) : null;
    if (elders) a = { html: elders.tekst };
    // 2. "wat is…", "hoe…", "waarom…": eerst uitleg zoeken
    if (!a && /^(wat (is|zijn|betekent|betekenen)|hoe |waarom)/.test(q)) {
      const k = zoekKennis(v, kennis, 3);
      if (k) a = uitleg(k);
    }
    // 3. de tool invullen, met een passende tip erbij
    if (!a) {
      try { a = T.slim(q); } catch (e) { a = null; }
      const tip = a ? zoekKennis(v, T.kennis, 3) : null;
      if (tip) a.html += '<p class="vg__tip"><b>Tip:</b> ' + tip.tekst + "</p>";
    }
    // 4. uitleg uit de veelgestelde vragen en de extra kennis, 5. een andere tool
    if (!a) { const k = zoekKennis(v, kennis); if (k) a = uitleg(k); }
    if (!a) { const k = zoekKennis(v, ANDERE, 2); if (k) a = { html: k.tekst }; }
    if (!a) a = { html: "Daar heeft de gorilla nog geen antwoord op. Probeer het anders te vragen, kies een van de voorbeelden, " +
      'of <a href="/contact/">stuur je vraag naar de gorilla</a>: dan voegen we hem misschien toe.' };
    toon(a);
  }

  /* ---------- opbouwen ---------- */
  if (T.plek) invoer.placeholder = T.plek;
  voorbeeldVak.innerHTML = T.voorbeelden.map(v => '<button type="button">' + html(v) + "</button>").join("");
  voorbeeldVak.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    invoer.value = b.textContent;
    vraag(b.textContent);
  });
  vak.querySelector(".vg__rij").addEventListener("submit", e => { e.preventDefault(); vraag(invoer.value); });
})();
