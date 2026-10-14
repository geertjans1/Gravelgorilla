/* =========================================================
   Gravel Gorilla — Vraag de Gorilla
   Een hulp onder de tool: je stelt een vraag in gewone taal (Nederlands, Engels of Duits).
   - Kan de gorilla er de tool mee invullen ("80 kg, 45 mm, ruw gravel"), dan doet hij dat en vertelt hij de uitkomst.
   - Anders zoekt hij het beste antwoord in de veelgestelde vragen op de pagina en de extra kennis hieronder.
   Alles gebeurt in je eigen browser: er gaat geen vraag naar een server.
   Teksten staan als [Nederlands, Engels, Duits]; de gorilla antwoordt in de taal van de pagina.
   Het vak zelf (#vraagGorilla) maakt .claude/bouw-site.ps1.
   ========================================================= */
(function () {
  const vak = document.getElementById("vraagGorilla");
  if (!vak) return;
  const tool = vak.dataset.tool;
  const invoer = vak.querySelector(".vg__invoer");
  const antwoordVak = vak.querySelector(".vg__antwoord");
  const voorbeeldVak = vak.querySelector(".vg__voorbeelden");

  /* ---------- taal ---------- */
  const TAAL = (document.documentElement.lang || "nl").slice(0, 2);
  const T = (nl, en, de) => (TAAL === "en" ? en : TAAL === "de" ? de : nl);
  const L = a => (Array.isArray(a) ? T(a[0], a[1], a[2]) : a);
  const PRE = TAAL === "nl" ? "" : "/" + TAAL;
  const lc = s => (TAAL === "de" ? s : s.toLowerCase()); // Duitse zelfstandige naamwoorden houden hun hoofdletter
  const komma = x => String(x).replace(".", TAAL === "en" ? "." : ",");
  const LOC = T("nl-NL", "en-GB", "de-DE");

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
    "gorilla tool graag eigenlijk precies even best " +
    "the a an and or to of for on at with my me i is are what how which who where when why can do does should it this that be my your you " +
    "der die das ein eine und oder zu von fur mit mein meine ich ist sind was wie welche welcher welches wer wo wann warum kann muss soll es dieser " +
    "den dem des im am an auf bei nicht auch noch schon dann aber uber bis aus durch so mehr viel gut gute").split(" "));
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
  })).concat([...document.querySelectorAll(".tool-uitleg h3")].map(h => {
    // uitleg op de pagina: een kopje met alles wat eronder staat tot het volgende kopje
    let tekst = "", el = h.nextElementSibling;
    while (el && el.tagName !== "H3") { tekst += el.outerHTML; el = el.nextElementSibling; }
    return { vraag: h.textContent, tekst };
  }));

  // vragen die bij een andere tool horen (trefwoorden in drie talen)
  const ANDERE = [
    { slug: "gravelbike-kiezer", naam: ["Gravelbike Kiezer", "Gravel Bike Finder", "Gravelbike-Finder"], w: "gravelbike fiets merk model welke gravelbike kopen bike buy which bicycle fahrrad rad kaufen" },
    { slug: "gravelbanden-kiezer", naam: ["Gravelbanden Kiezer", "Gravel Tyre Finder", "Gravelreifen-Finder"], w: "welke band banden bandbreedte profiel noppen slick semi-slick bandenmerk tyre tyres tire tires tread reifen profil stollen" },
    { slug: "bandenspanning-calculator", naam: ["Bandenspanning Calculator", "Tyre Pressure Calculator", "Reifendruck-Rechner"], w: "bandenspanning spanning druk bar psi oppompen pompen pressure inflate reifendruck luftdruck" },
    { slug: "gravelwielen-kiezer", naam: ["Gravelwielen Kiezer", "Gravel Wheel Finder", "Gravel-Laufrad-Finder"], w: "wielen wielset velg velgen naaf carbon wheels wheelset rim rims hub laufrad laufrader felge felgen nabe" },
    { slug: "ultra-eventkiezer", naam: ["Ultra-eventkiezer", "Ultra Event Finder", "Ultra-Event-Finder"], w: "ultra event race bikepacking-race wedstrijd inschrijven evenement events register rennen veranstaltung" },
    { slug: "profielsticker", naam: ["Profielsticker", "Profile Sticker", "Profilsticker"], w: "sticker hoogteprofiel gpx bovenbuis posten elevation profile top tube stops hohenprofil oberrohr" },
    { slug: "kledingadvies", naam: ["Kledingadvies", "Clothing Advice", "Kleidungsberater"], w: "kleding aantrekken trek aan graden temperatuur jas jack handschoenen koud warm regenjas outfit wear clothing clothes degrees jacket gloves cold kleidung anziehen grad jacke handschuhe kalt" },
    { slug: "maatbepaler", naam: ["Maatbepaler", "Frame Size Finder", "Rahmengrößen-Rechner"], w: "maat framemaat lengte binnenbeen zadelhoogte zadel stack reach size frame height inseam saddle grosse rahmengrosse schrittlange sattel" },
    { slug: "paklijst-bikepacking", naam: ["Paklijst bikepacking", "Bikepacking Packing List", "Bikepacking-Packliste"], w: "paklijst meenemen inpakken tassen slaapzak tent bagage packing pack bags sleeping bag luggage packliste einpacken taschen schlafsack zelt gepack" },
    { slug: "gravelroutes", naam: ["Gravelroutes", "Gravel Routes", "Gravelrouten"], w: "gravelroute routes graveln gravelen waar rijden provincie bewegwijzerd route where ride signposted routen wo fahren ausgeschildert" },
    { slug: "versnellingscalculator", naam: ["Versnellingscalculator", "Gear Calculator", "Übersetzungsrechner"], w: "versnelling versnellingen verzet voorblad cassette tandwiel klimmen gear gears gearing chainring sprocket climb gang gange ubersetzung kettenblatt ritzel kassette klettern" }
  ].filter(a => a.slug !== tool).map(a => ({
    vraag: a.w, tekst: T("Daar heeft de gorilla een aparte tool voor: ", "The gorilla has a separate tool for that: ", "Dafür hat der Gorilla ein eigenes Tool: ") + '<a href="' + PRE + "/tools/" + a.slug + '/">' + L(a.naam) + " →</a>"
  }));

  /* ---------- per tool: voorbeelden, extra kennis en de tool invullen ---------- */
  const TOOLS = {

    /* ===== Gravelbanden Kiezer ===== */
    "gravelbanden-kiezer": {
      eigen: /band|noppen|profiel|slick|tubeless|merk|tyre|tire|tread|brand|reifen|profil|stollen|marke/,
      plek: ["Bijv. Welke band voor los gravel en modder, frame max 45 mm?", "E.g. Which tyre for loose gravel and mud, frame max 45 mm?", "Z. B. Welcher Reifen für losen Schotter und Matsch, Rahmen max. 45 mm?"],
      voorbeelden: [
        ["Welke band voor zand op de Veluwe?", "Snelle band voor een gravelrace in de zomer", "Bikepacking in de regen, frame max 45 mm", "Wat is de lichtste band van 40 mm?", "Welke banden heeft Schwalbe?"],
        ["Which tyre for sand?", "Fast tyre for a gravel race in summer", "Bikepacking in the rain, frame max 45 mm", "What is the lightest 40 mm tyre?", "Which tyres does Schwalbe have?"],
        ["Welcher Reifen für Sand?", "Schneller Reifen für ein Gravelrennen im Sommer", "Bikepacking im Regen, Rahmen max. 45 mm", "Was ist der leichteste 40-mm-Reifen?", "Welche Reifen hat Schwalbe?"]],
      kennis: [
        { vraag: ["Tubeless of binnenband?", "Tubeless or inner tube?", "Tubeless oder Schlauch?"], w: "tubeless binnenband tube melk sealant schlauch milch", tekst: ["Tubeless is op gravel bijna altijd de betere keuze: je rijdt met minder druk zonder snakebites, en de melk dicht kleine gaatjes vanzelf. Je hebt wel tubeless-ready velgen, velglint, ventielen en melk nodig.", "Tubeless is almost always the better choice on gravel: you ride at lower pressure without pinch flats, and the sealant plugs small holes by itself. You do need tubeless-ready rims, rim tape, valves and sealant.", "Tubeless ist auf Schotter fast immer die bessere Wahl: Du fährst mit weniger Druck ohne Snakebites, und die Dichtmilch schließt kleine Löcher von selbst. Du brauchst aber tubeless-taugliche Felgen, Felgenband, Ventile und Dichtmilch."] },
        { vraag: ["Hoe lang gaat een gravelband mee?", "How long does a gravel tyre last?", "Wie lange hält ein Gravelreifen?"], w: "slijtage vervangen kilometers lang mee wear replace last lifespan verschleiss wechseln halt", tekst: ["Meestal tussen de 2.000 en 5.000 km, afhankelijk van ondergrond, gewicht en het rubber. Vervang je band als de noppen in het midden bijna glad zijn, als je het karkas ziet of als hij vaak lek gaat. De achterband slijt sneller dan de voorband.", "Usually between 2,000 and 5,000 km, depending on surface, weight and rubber. Replace your tyre when the centre knobs are almost smooth, when you see the casing or when it punctures often. The rear tyre wears faster than the front.", "Meist zwischen 2.000 und 5.000 km, je nach Untergrund, Gewicht und Gummi. Tausch den Reifen, wenn die Stollen in der Mitte fast glatt sind, wenn du die Karkasse siehst oder wenn er oft platt ist. Der Hinterreifen verschleißt schneller als der vordere."] },
        { vraag: ["Mag ik voor en achter een andere band?", "Can I run a different tyre front and rear?", "Darf ich vorne und hinten verschiedene Reifen fahren?"], w: "voor achter verschillend combineren mixen front rear different combine vorne hinten verschiedene kombinieren", tekst: ["Ja, dat doen veel rijders: een grovere band voor (grip in de bocht) en een snellere band achter (rolt makkelijker). Kies dan wel twee banden met ongeveer dezelfde breedte.", "Yes, many riders do: a more aggressive tyre at the front (grip in corners) and a faster one at the rear (rolls easier). Do choose two tyres of roughly the same width.", "Ja, das machen viele: einen gröberen Reifen vorne (Grip in der Kurve) und einen schnelleren hinten (rollt leichter). Wähle aber zwei Reifen mit etwa gleicher Breite."] },
        { vraag: ["Wat betekent TPI?", "What does TPI mean?", "Was bedeutet TPI?"], w: "tpi karkas draden casing threads karkasse faden", tekst: ["TPI staat voor het aantal draden per inch in het karkas. Een hoge TPI (120 of meer) is soepeler en sneller, een lage TPI (60) is steviger en beter bestand tegen snijwonden.", "TPI stands for threads per inch in the casing. A high TPI (120 or more) is more supple and faster, a low TPI (60) is tougher and more resistant to cuts.", "TPI steht für Fäden pro Zoll in der Karkasse. Ein hoher TPI-Wert (120 oder mehr) ist geschmeidiger und schneller, ein niedriger (60) robuster und schnittfester."] }
      ],
      slim(q) {
        const D = window.GG_BANDEN;
        const mm = getal(q, "mm|millimeter") || (q.match(/(?:^|\D)(3[2-9]|4\d|5[0-7])\s*(?:c|mm)?\s*(?:band|breed|tyre|tire|reifen)/) || [])[1] * 1 || null;
        const merk = D ? Object.keys(D.MERKEN).find(m => q.includes(norm(m))) : null;

        if (D && heeft(q, ["lichtst", "lichte", "gewicht", "lightest", "light", "weight", "leichtest", "leicht", "gewicht"])) {
          const kandidaten = D.BANDEN.filter(b => b.g && (!merk || b.m === merk) && (!mm || b.b.includes(mm)))
            .sort((a, b) => a.g[0] / a.g[1] - b.g[0] / b.g[1]).slice(0, 3);
          if (!kandidaten.length) return { html: T("Daar heeft de gorilla geen fabrieksgewichten van. Bij lang niet alle banden geeft de fabrikant het gewicht op.", "The gorilla has no manufacturer weights for that. Not all manufacturers state the weight.", "Dafür hat der Gorilla keine Herstellergewichte. Nicht alle Hersteller geben das Gewicht an.") };
          const titel = T("De lichtste banden" + (mm ? " in " + mm + " mm" : "") + (merk ? " van " + merk : "") + " volgens de fabrikanten:",
            "The lightest tyres" + (mm ? " in " + mm + " mm" : "") + (merk ? " from " + merk : "") + " according to the manufacturers:",
            "Die leichtesten Reifen" + (mm ? " in " + mm + " mm" : "") + (merk ? " von " + merk : "") + " laut Hersteller:");
          return { html: titel + lijst(kandidaten.map(b => "<b>" + b.m + " " + b.n + "</b>: " + b.g[0] + T(" gram bij ", " grams at ", " Gramm bei ") + b.g[1] + " mm (" + lc(D.PROFIEL[b.p]) + ")")) +
            T("Let op: licht is niet altijd beter. Lichte banden zijn vaak dunner en dus kwetsbaarder voor lekke banden.", "Note: light isn't always better. Light tyres are often thinner and so more prone to punctures.", "Achtung: Leicht ist nicht immer besser. Leichte Reifen sind oft dünner und damit pannenanfälliger.") };
        }
        if (D && merk) {
          const vanMerk = D.BANDEN.filter(b => b.m === merk);
          return { html: T("Van <b>" + merk + "</b> zitten er " + vanMerk.length + " banden in de kiezer:", "The finder has " + vanMerk.length + " tyres from <b>" + merk + "</b>:", "Von <b>" + merk + "</b> sind " + vanMerk.length + " Reifen im Finder:") +
            lijst(vanMerk.map(b => "<b>" + b.n + "</b>: " + lc(D.PROFIEL[b.p]) + ", " + b.b.join(" / ") + " mm. " + b.t)) };
        }

        const ondergrond = [[4, ["zand", "modder", "blubber", "veluwe", "maasduin", "drenthe", "kempen", "heide", "sand", "mud", "matsch", "schlamm"]],
          [3, ["los", "ruw", "sten", "rots", "keien", "bos", "trail", "singletrack", "technisch", "loose", "rough", "rock", "forest", "technical", "lose", "rau", "fels", "wald"]],
          [0, ["asfalt", "weg ", "wegen", "fietspad", "straat", "tarmac", "asphalt", "road", "strasse"]], [1, ["hardpack", "vast", "grindweg", "grind", "verhard", "firm", "fest", "schotterweg"]],
          [2, ["gemengd", "allround", "afwissel", "mix", "van alles", "mixed", "all-round", "gemischt", "wechselnd"]]].find(([, w]) => heeft(q, w));
        const stijl = [[0, ["race", "gravelrace", "wedstrijd", "koers", "unbound", "strade", "racing", "rennen", "wettkampf"]], [4, ["bikepack", "bagage", "ultra", "meerdaag", "tassen", "luggage", "multi-day", "gepack", "mehrtag"]],
          [3, ["toer", "tocht", "rustig", "genie", "recreat", "touring", "tour", "relaxed", "leisure", "gemutlich"]], [2, ["train"]], [1, ["vlot", "tempo", "snel rijd", "hard rijd", "fast riding", "zugig"]]].find(([, w]) => heeft(q, w));
        const weer = [[2, ["nat", "regen", "winter", "herfst", "najaar", "wet", "rain", "autumn", "nass", "herbst"]], [0, ["droog", "zomer", "warm", "dry", "summer", "trocken", "sommer"]], [1, ["wissel", "voorjaar", "lente", "changeable", "spring", "wechsel", "fruhling"]]].find(([, w]) => heeft(q, w));
        const prio = [["lek", ["lek", "doorprik", "betrouwba", "robuust", "stevig", "puncture", "durable", "tough", "panne", "robust"]], ["grip", ["grip"]], ["snelheid", ["snelst", "snelle", "rolweerstand", "snel rollen", "fast", "fastest", "rolling", "schnell", "rollwiderstand"]]].find(([, w]) => heeft(q, w));
        const budget = [["1", ["goedkoop", "goedkope", "budget", "niet te duur", "cheap", "affordable", "gunstig", "billig"]], ["2", ["middenklasse", "redelijk geprijs", "mid-range", "mittelklasse"]]].find(([, w]) => heeft(q, w));
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
        if (weer) { zetSchuif("#gbWeer", weer[0]); gezet.push(T("weer: ", "weather: ", "Wetter: ") + lc(tekst("#gbWeerUit"))); }
        if (mm && f) {
          const opties = [35, 38, 40, 42, 45, 50, 57].filter(o => o <= mm);
          f.value = String(opties.length ? opties[opties.length - 1] : 35); f.dispatchEvent(new Event("change", { bubbles: true })); gezet.push(T("frame tot ", "frame up to ", "Rahmen bis ") + f.value + " mm");
        }
        if (prio) { klik('.gb-chips[data-veld="prioriteit"] button[data-waarde="' + prio[0] + '"]'); gezet.push(T("voorkeur: ", "priority: ", "Vorliebe: ") + { lek: T("lekbescherming", "puncture protection", "Pannenschutz"), grip: "grip", snelheid: T("snelheid", "speed", "Tempo") }[prio[0]]); }
        if (budget) { klik('.gb-chips[data-veld="budget"] button[data-waarde="' + budget[0] + '"]'); gezet.push("budget"); }

        const top = [...document.querySelectorAll("#gbLijst .gb-band")].slice(0, 3).map(li =>
          "<b>" + (li.querySelector(".gb-band__merk") || {}).textContent + " " + (li.querySelector("h3") || {}).textContent + "</b> (" + (li.querySelector(".gb-band__match") || {}).textContent + " match)");
        return {
          html: T("Ik heb de kiezer ingesteld op ", "I've set the finder to ", "Ich habe den Finder eingestellt auf ") + gezet.map(g => "<b>" + html(lc(g)) + "</b>").join(", ") + ". " +
            T("De gorilla adviseert dan <b>", "The gorilla then advises <b>", "Der Gorilla empfiehlt dann <b>") + tekst("#gbBreedte") + "</b>, " + T("profiel", "tread", "Profil") + ": <b>" + lc(tekst("#gbProfiel")) + "</b>." +
            (top.length ? T(" Zijn top 3:", " His top 3:", " Seine Top 3:") + "<ol>" + top.map(t => "<li>" + t + "</li>").join("") + "</ol>" : ""),
          knop: { tekst: T("Bekijk alle banden", "See all tyres", "Alle Reifen ansehen"), naar: "#gbLijst" }
        };
      }
    },

    /* ===== Bandenspanning Calculator ===== */
    "bandenspanning-calculator": {
      eigen: /spanning|druk|bar|psi|kg|kilo|pomp|ventiel|pressure|pump|valve|druck|pumpe|ventil/,
      plek: ["Bijv. Ik weeg 80 kg en rijd 45 mm tubeless op ruw gravel", "E.g. I weigh 80 kg and ride 45 mm tubeless on rough gravel", "Z. B. Ich wiege 80 kg und fahre 45 mm tubeless auf rauem Schotter"],
      voorbeelden: [
        ["Ik weeg 80 kg en rijd 45 mm op ruw gravel", "70 kilo, 40 mm met binnenband op asfalt", "Hoeveel bar is 30 psi?", "Welke spanning in zand?", "Waarom de voorband zachter?"],
        ["I weigh 80 kg and ride 45 mm on rough gravel", "70 kg, 40 mm with inner tube on tarmac", "How many bar is 30 psi?", "Which pressure in sand?", "Why a softer front tyre?"],
        ["Ich wiege 80 kg und fahre 45 mm auf rauem Schotter", "70 kg, 40 mm mit Schlauch auf Asphalt", "Wie viel bar sind 30 psi?", "Welcher Druck im Sand?", "Warum vorne weniger Druck?"]],
      kennis: [
        { vraag: ["Welke spanning in zand of modder?", "Which pressure in sand or mud?", "Welcher Druck in Sand oder Matsch?"], w: "zand modder veluwe los sand mud loose matsch", tekst: ["In zand en modder helpt een lagere spanning: de band wordt breder en zakt minder weg. Zet de ondergrond op ruw en ga eventueel nog 0,1 tot 0,2 bar lager. Met een binnenband niet te laag, anders krijg je snakebites.", "In sand and mud lower pressure helps: the tyre gets wider and sinks in less. Set the surface to rough and go 0.1 to 0.2 bar lower if needed. With inner tubes not too low, or you'll get pinch flats.", "In Sand und Matsch hilft weniger Druck: Der Reifen wird breiter und sinkt weniger ein. Stell den Untergrund auf rau und geh eventuell noch 0,1 bis 0,2 bar tiefer. Mit Schlauch nicht zu niedrig, sonst gibt es Snakebites."] },
        { vraag: ["Wat is het verschil tussen bar en psi?", "What's the difference between bar and psi?", "Was ist der Unterschied zwischen bar und psi?"], w: "bar psi omrekenen eenheid convert unit umrechnen einheit", tekst: ["Het zijn twee eenheden voor druk: 1 bar is 14,5 psi. De meeste pompen tonen allebei. Tip: vraag de gorilla bijvoorbeeld \"hoeveel bar is 30 psi\".", "They are two units of pressure: 1 bar is 14.5 psi. Most pumps show both. Tip: ask the gorilla for example \"how many bar is 30 psi\".", "Es sind zwei Einheiten für Druck: 1 bar sind 14,5 psi. Die meisten Pumpen zeigen beides. Tipp: Frag den Gorilla zum Beispiel „wie viel bar sind 30 psi\"."] },
        { vraag: ["Hoeveel druk mag er maximaal in een hookless velg?", "What's the maximum pressure in a hookless rim?", "Wie viel Druck darf maximal in eine Hookless-Felge?"], w: "hookless velg maximaal maximum rim felge", tekst: ["Bij hookless velgen (velgen zonder haakje) is de grens 5 bar (72,5 psi), en vaak lager: kijk altijd naar wat er op je velg en band staat. Op gravel kom je daar met de juiste spanning bijna nooit in de buurt.", "For hookless rims the limit is 5 bar (72.5 psi), and often lower: always check what's printed on your rim and tyre. On gravel you hardly ever get close with the right pressure.", "Bei Hookless-Felgen liegt die Grenze bei 5 bar (72,5 psi), oft darunter: Schau immer, was auf Felge und Reifen steht. Auf Schotter kommst du mit dem richtigen Druck kaum in die Nähe."] },
        { vraag: ["Moet ik de spanning aanpassen als het regent?", "Should I adjust pressure in the rain?", "Sollte ich den Druck bei Regen anpassen?"], w: "regen nat glad rain wet slippery regen nass glatt", tekst: ["Op natte wegen en paden geeft 0,1 tot 0,2 bar minder wat extra grip, zeker in de bocht. Meer hoeft niet.", "On wet roads and tracks, 0.1 to 0.2 bar less gives a bit more grip, especially in corners. No need for more.", "Auf nassen Straßen und Wegen bringen 0,1 bis 0,2 bar weniger etwas mehr Grip, vor allem in Kurven. Mehr ist nicht nötig."] },
        { vraag: ["Rijd ik met bagage met meer druk?", "Should I ride with more pressure with luggage?", "Fahre ich mit Gepäck mit mehr Druck?"], w: "bagage bikepacking tassen zwaar gewicht luggage bags heavy gepack taschen schwer", tekst: ["Ja. Tel je bagage op bij je eigen gewicht, dan rekent de calculator de extra druk mee. Zware tassen achter? Dan kan de achterband nog iets harder.", "Yes. Add your luggage to your own weight and the calculator includes the extra pressure. Heavy bags at the rear? Then the rear tyre can go a bit harder.", "Ja. Rechne dein Gepäck zu deinem Gewicht dazu, dann berücksichtigt der Rechner den Mehrdruck. Schwere Taschen hinten? Dann darf der Hinterreifen noch etwas härter."] }
      ],
      slim(q) {
        const psi = getal(q, "psi");
        const bar = getal(q, "bar");
        if (psi != null && /bar/.test(q) && bar == null) return { html: "<b>" + psi + " psi</b> " + T("is", "is", "sind") + " <b>" + komma((psi / 14.5038).toFixed(2)) + " bar</b>." };
        if (bar != null && /psi/.test(q) && psi == null) return { html: "<b>" + komma(bar) + " bar</b> " + T("is", "is", "sind") + " <b>" + komma((bar * 14.5038).toFixed(1)) + " psi</b>." };

        const gezet = [];
        const kg = getal(q, "kg|kilo|kilogram|kilos");
        if (kg) { zetSchuif("#ggRider", tussen(Math.round(kg), 45, 130)); gezet.push(1); }
        const maat = q.match(/(?:700|650)\s*[x×]\s*(\d{2})/);
        const mm = maat ? +maat[1] : getal(q, "mm|millimeter|c");
        if (mm && mm >= 25 && mm <= 60) { zetSchuif("#ggWidth", tussen(Math.round(mm), 28, 55)); gezet.push(1); }
        if (/650\s*b|27[.,]5/.test(q)) { klik('[data-group="wheel"] [data-value="650b"]'); gezet.push(1); }
        else if (/700\s*c?|28 ?(inch|zoll)|29er/.test(q)) { klik('[data-group="wheel"] [data-value="700c"]'); gezet.push(1); }
        const grond = [["ruw", ["ruw", "los", "sten", "rots", "zand", "modder", "trail", "technisch", "bos", "singletrack", "rough", "loose", "sand", "mud", "rock", "rau", "matsch", "fels"]],
          ["glad", ["asfalt", "glad", "weg ", "wegen", "fietspad", "hardpack", "straat", "tarmac", "road", "smooth", "asphalt", "glatt", "strasse"]], ["gemengd", ["gemengd", "gravel", "mix", "afwissel", "mixed", "gemischt", "schotter"]]].find(([, w]) => heeft(q, w));
        if (grond) { klik('[data-group="terrain"] [data-value="' + grond[0] + '"]'); gezet.push(1); }
        if (/tubeless/.test(q)) { klik('[data-group="valve"] [data-value="tubeless"]'); gezet.push(1); }
        else if (/binnenband|inner tube|schlauch|(^|[^a-z])tube([^a-z]|$)/.test(q)) { klik('[data-group="valve"] [data-value="tube"]'); gezet.push(1); }
        if (!gezet.length) return null;

        const voor = tekst("#ggFrontBar"), achter = tekst("#ggRearBar");
        return {
          html: T("Ik heb de calculator ingevuld. Met <b>", "I've filled in the calculator. With <b>", "Ich habe den Rechner ausgefüllt. Mit <b>") + html([$("#ggRider").value + " kg", $("#ggWidth").value + " mm"]
              .concat(["wheel", "terrain", "valve"].map(g => lc(tekst('[data-group="' + g + '"] .is-active')))).filter(Boolean).join(", ")) + "</b>" + T(" adviseert de gorilla:", " the gorilla advises:", " empfiehlt der Gorilla:") +
            lijst([T("Voorband: <b>", "Front tyre: <b>", "Vorderreifen: <b>") + voor + "</b> (" + tekst("#ggFrontPsi") + " psi)", T("Achterband: <b>", "Rear tyre: <b>", "Hinterreifen: <b>") + achter + "</b> (" + tekst("#ggRearPsi") + " psi)"]) +
            ($("#ggWarning") && $("#ggWarning").offsetParent && tekst("#ggWarning") ? html(tekst("#ggWarning")) : T("Begin hiermee en stel na de eerste kilometers bij op gevoel.", "Start with this and fine-tune by feel after the first kilometres.", "Fang damit an und justier nach den ersten Kilometern nach Gefühl.")),
          knop: { tekst: T("Bekijk de meters", "See the gauges", "Zu den Anzeigen"), naar: ".tool-vak" }
        };
      }
    },

    /* ===== Kledingadvies ===== */
    "kledingadvies": {
      eigen: /grad|aan ?(trek|doe)|kleding|kleren|jas|jack|vest|handschoen|muts|koud|warm|regen|achterzak|schoen|sokken|broek|wear|cloth|degree|glove|cold|rain|pocket|kleid|anzieh|handschuh|kalt|tasche|hose/,
      plek: ["Bijv. Wat trek ik aan bij 8 graden en regen, 3 uur rijden?", "E.g. What do I wear at 8 degrees and rain, riding 3 hours?", "Z. B. Was ziehe ich bei 8 Grad und Regen an, 3 Stunden Fahrt?"],
      voorbeelden: [
        ["Wat trek ik aan bij 8 graden en regen?", "3 uur rijden bij 15 graden met harde wind", "Ik heb het snel koud, het is 2 graden", "Wedstrijd bij 25 graden", "Wat moet er in mijn achterzak?"],
        ["What do I wear at 8 degrees and rain?", "Riding 3 hours at 15 degrees with strong wind", "I get cold quickly, it's 2 degrees", "Race at 25 degrees", "What goes in my back pocket?"],
        ["Was ziehe ich bei 8 Grad und Regen an?", "3 Stunden fahren bei 15 Grad mit starkem Wind", "Mir wird schnell kalt, es hat 2 Grad", "Rennen bei 25 Grad", "Was gehört in meine Trikottasche?"]],
      kennis: [
        { vraag: ["Wat doe ik tegen koude handen en voeten?", "What can I do about cold hands and feet?", "Was hilft gegen kalte Hände und Füße?"], w: "handen voeten tenen vingers koud overschoenen handschoenen hands feet toes fingers cold overshoes gloves hande fusse zehen finger kalt uberschuhe handschuhe", tekst: ["Handen en voeten koelen het snelst af. Kies bij twijfel de warmere handschoenen en trek overschoenen of teenkapjes aan. Je schoenen niet te strak: dan blijft je bloed beter stromen.", "Hands and feet cool down fastest. In doubt, choose the warmer gloves and put on overshoes or toe covers. Don't do your shoes up too tight: your blood keeps flowing better.", "Hände und Füße kühlen am schnellsten aus. Im Zweifel die wärmeren Handschuhe wählen und Überschuhe oder Zehenkappen anziehen. Die Schuhe nicht zu fest schließen: Dann fließt das Blut besser."] },
        { vraag: ["Wat is het laagjesprincipe?", "What is layering?", "Was ist das Zwiebelprinzip?"], w: "laagjes lagen laag layers layering schichten zwiebel", tekst: ["Meerdere dunne lagen houden je warmer dan één dikke, en je kunt ze los uittrekken. Begin met een ondershirt dat zweet afvoert, dan een shirt, en daaroverheen een windvest of jack als het waait of regent.", "Several thin layers keep you warmer than one thick one, and you can take them off one by one. Start with a base layer that wicks sweat, then a jersey, and on top a gilet or jacket if it's windy or raining.", "Mehrere dünne Schichten halten wärmer als eine dicke, und du kannst sie einzeln ausziehen. Fang mit einem Unterhemd an, das Schweiß abführt, dann ein Trikot und darüber eine Weste oder Jacke bei Wind oder Regen."] },
        { vraag: ["Regenjas of windjack?", "Rain jacket or wind jacket?", "Regenjacke oder Windjacke?"], w: "regenjas windjack regenjack jack jas verschil rain jacket wind jacket difference regenjacke windjacke unterschied", tekst: ["Een windjack houdt wind en een licht buitje tegen en ademt goed. Een regenjack houdt echte regen tegen, maar je zweet er sneller in. Bij kans op buien: een opvouwbaar regenjack in je achterzak.", "A wind jacket stops wind and a light shower and breathes well. A rain jacket keeps real rain out, but you sweat more in it. If showers are possible: a packable rain jacket in your back pocket.", "Eine Windjacke hält Wind und einen leichten Schauer ab und atmet gut. Eine Regenjacke hält echten Regen ab, aber du schwitzt schneller darin. Bei Schauergefahr: eine faltbare Regenjacke in die Trikottasche."] }
      ],
      slim(q) {
        q = q.replace(/min(?:us)?\s*(\d)/, "-$1");
        const gezet = [];
        let temp = getal(q, "°\\s*c?|graden|graad|gr|celsius|degrees|degree|grad");
        if (temp == null && heeft(q, ["vriest", "vorst", "freezing", "frost"])) temp = -2;
        const neerslag = [["regen", ["regen", "plens", "stort", "nat weer", "miezer", "rain", "pouring", "drizzle", "nieselt"]], ["buien", ["bui", "shower", "schauer"]], ["droog", ["droog", "dry", "trocken"]]].find(([, w]) => heeft(q, w));
        const wind = [["weinig", ["geen wind", "weinig wind", "windstil", "no wind", "little wind", "kein wind", "windstill"]], ["stevig", ["harde wind", "storm", "stevige wind", "veel wind", "waai", "strong wind", "windy", "starker wind", "starkem wind", "viel wind"]], ["matig", ["wind", "briesje", "bries", "breeze", "brise"]]].find(([, w]) => heeft(q, w));
        const uur = getal(q, "uur|u|hours|hour|hrs|h|stunden|stunde|std"), km = getal(q, "km|kilometer");
        let duur = null;
        if (uur != null) duur = uur <= 1.5 ? "kort" : uur <= 3 ? "middel" : uur <= 6 ? "lang" : "ultra";
        else if (km != null) duur = km < 50 ? "kort" : km < 100 ? "middel" : km < 200 ? "lang" : "ultra";
        else if (heeft(q, ["ultra", "hele dag", "nachtrit", "bikepack", "all day", "ganzen tag"])) duur = "ultra";
        else if (heeft(q, ["kort rondje", "rondje", "uurtje", "short ride", "kurze runde"])) duur = "kort";
        const tempo = [["wedstrijd", ["wedstrijd", "race", "koers", "racing", "rennen", "wettkampf"]], ["rustig", ["rustig", "toer", "koffie", "sociaal", "herstel", "easy", "coffee", "recovery", "gemutlich", "locker"]], ["stevig", ["stevig", "training", "tempo", "solid", "zugig"]]].find(([, w]) => heeft(q, w));
        const gevoel = [["koud", ["koukleum", "snel koud", "het koud heb", "kouwelijk", "cold quickly", "get cold", "schnell kalt", "friere"]], ["warm", ["snel warm", "het warm heb", "zweet veel", "veel zweet", "warm quickly", "sweat a lot", "schnell warm", "schwitze"]]].find(([, w]) => heeft(q, w));
        const grond = heeft(q, ["modder", "natte grond", "natte paden", "plassen", "mud", "muddy", "puddles", "matsch", "pfutzen"]) ? "nat" : null;
        if (temp == null && !neerslag && !wind && !duur && !tempo && !gevoel && !grond) return null;

        klik('.kl-modusknop[data-modus="zelf"]');
        // elke vraag is een nieuwe situatie: eerst alles terug naar het begin
        [["neerslag", "droog"], ["wind", "weinig"], ["duur", "middel"], ["tempo", "stevig"], ["gevoel", "normaal"], ["grond", "droog"]]
          .forEach(([veld, w]) => klik('.kl-chips[data-veld="' + veld + '"] button[data-waarde="' + w + '"]'));
        if (temp != null) { zetSchuif("#klTemp", tussen(Math.round(temp), -10, 35)); gezet.push(tussen(Math.round(temp), -10, 35) + " °C"); }
        // het label van de knop in de tool zelf (staat al in de juiste taal)
        const chip = (veld, w) => { const k = $('.kl-chips[data-veld="' + veld + '"] button[data-waarde="' + w + '"]'); if (k) { k.click(); gezet.push(lc(k.textContent.trim())); } };
        if (neerslag) chip("neerslag", neerslag[0]);
        if (wind) chip("wind", wind[0]);
        if (duur) chip("duur", duur);
        if (tempo) chip("tempo", tempo[0]);
        if (gevoel) chip("gevoel", gevoel[0]);
        if (grond) chip("grond", grond);

        const zones = [...document.querySelectorAll("#klZones .kl-zone")].map(li => {
          const b = li.querySelector("b"), naam = b ? b.textContent : "";
          const extra = li.querySelector(".kl-zone__extra"), extraTekst = extra ? extra.textContent : "";
          const hoofd = li.textContent.replace(naam, "").replace(extraTekst, "").trim();
          return "<b>" + naam + ":</b> " + html(hoofd) + (extraTekst ? " <i>(" + html(extraTekst) + ")</i>" : "");
        });
        const zak = [...document.querySelectorAll("#klZak li")].map(li => html(li.textContent));
        return {
          html: T("Ik heb het kledingadvies ingevuld met <b>", "I've filled in the clothing advice with <b>", "Ich habe den Kleidungsberater ausgefüllt mit <b>") + html(gezet.join(", ")) + "</b>" + (temp == null ? T(" (temperatuur: ", " (temperature: ", " (Temperatur: ") + tekst("#klTempUit") + ")" : "") +
            T(". Het voelt als <b>", ". It feels like <b>", ". Es fühlt sich an wie <b>") + tekst("#klEff") + "</b>. " + T("De gorilla adviseert:", "The gorilla advises:", "Der Gorilla empfiehlt:") + lijst(zones) +
            (zak.length ? T("In je achterzak: ", "In your back pocket: ", "In die Trikottasche: ") + lc(zak.join(", ")) + "." : ""),
          knop: { tekst: T("Bekijk het hele advies", "See the full advice", "Ganze Empfehlung ansehen"), naar: "#klZones" }
        };
      }
    },

    /* ===== Ultra-eventkiezer ===== */
    "ultra-eventkiezer": {
      eigen: /event|ultra|race|wedstrijd|km|land|maand|self|support|bikepack|country|month|monat|rennen/,
      plek: ["Bijv. Een gravel-ultra in Europa in juni, korter dan 1000 km", "E.g. A gravel ultra in Europe in June, shorter than 1000 km", "Z. B. Ein Gravel-Ultra in Europa im Juni, kürzer als 1000 km"],
      voorbeelden: [
        ["Een gravel-ultra in Europa in juni", "Korter dan 750 km voor beginners", "Welke ultra's zijn er in Spanje?", "Self-supported in september", "Welke race heeft de meeste hoogtemeters?"],
        ["A gravel ultra in Europe in June", "Shorter than 750 km for beginners", "Which ultras are there in Spain?", "Self-supported in September", "Which race has the most climbing?"],
        ["Ein Gravel-Ultra in Europa im Juni", "Kürzer als 750 km für Einsteiger", "Welche Ultras gibt es in Spanien?", "Self-supported im September", "Welches Rennen hat die meisten Höhenmeter?"]],
      kennis: [
        { vraag: ["Hoe bereid ik me voor op mijn eerste ultra?", "How do I prepare for my first ultra?", "Wie bereite ich mich auf meinen ersten Ultra vor?"], w: "voorbereiden voorbereiding eerste beginner trainen training prepare preparation first vorbereiten vorbereitung erste einsteiger", tekst: ["Bouw je lange ritten rustig op en rijd een paar keer een volle dag met je complete bagage. Oefen met eten en drinken onderweg, slapen in je bivakzak en kleine reparaties. Begin met een kortere ultra (onder de 750 km) en rijd je eigen tempo.", "Build up your long rides gradually and ride a full day with all your luggage a few times. Practise eating and drinking on the go, sleeping in your bivvy bag and small repairs. Start with a shorter ultra (under 750 km) and ride your own pace.", "Steigere deine langen Fahrten langsam und fahr ein paar Mal einen ganzen Tag mit komplettem Gepäck. Übe Essen und Trinken unterwegs, Schlafen im Biwaksack und kleine Reparaturen. Fang mit einem kürzeren Ultra an (unter 750 km) und fahr dein eigenes Tempo."] },
        { vraag: ["Welke fiets heb ik nodig voor een ultra?", "Which bike do I need for an ultra?", "Welches Rad brauche ich für einen Ultra?"], w: "fiets nodig gravelbike mtb racefiets bike need road bike rad brauche rennrad", tekst: ["Dat hangt af van de ondergrond: bij asfalt een racefiets, bij gemengd of onverhard een gravelbike, en bij ruige routes soms een mountainbike. In de kiezer zie je per event welke fiets past. Comfort is belangrijker dan gewicht.", "That depends on the surface: a road bike for tarmac, a gravel bike for mixed or unpaved, and sometimes a mountain bike for rough routes. The finder shows which bike suits each event. Comfort matters more than weight.", "Das hängt vom Untergrund ab: Rennrad für Asphalt, Gravelbike für gemischt oder unbefestigt und für raue Routen manchmal ein Mountainbike. Im Finder siehst du pro Event, welches Rad passt. Komfort ist wichtiger als Gewicht."] },
        { vraag: ["Wat neem ik mee op een ultra?", "What do I take on an ultra?", "Was nehme ich auf einen Ultra mit?"], w: "meenemen bagage tassen inpakken paklijst slapen take pack luggage bags packing list sleep mitnehmen gepack taschen packliste schlafen", tekst: ["De basis: een frame- of zadeltas, licht slaapspul (bivakzak, matje, slaapzak), lampen met een powerbank, reparatieset, regenkleding, warme laag en genoeg eten. Neem minder mee dan je denkt: elke kilo voel je bergop.", "The basics: a frame or saddle bag, light sleeping gear (bivvy bag, mat, sleeping bag), lights with a power bank, repair kit, rain gear, a warm layer and enough food. Take less than you think: you feel every kilo uphill.", "Die Basis: Rahmen- oder Satteltasche, leichte Schlafausrüstung (Biwaksack, Matte, Schlafsack), Lampen mit Powerbank, Reparaturset, Regenkleidung, eine warme Schicht und genug Essen. Nimm weniger mit, als du denkst: Jedes Kilo spürst du bergauf."] }
      ],
      slim(q) {
        if (typeof EVENTS === "undefined") return null;
        // Engelse en Duitse namen van landen en werelddelen → de Nederlandse namen in de gegevens
        [["spain|spanien", "spanje"], ["france|frankreich", "frankrijk"], ["italy|italien", "italie"], ["germany|deutschland", "duitsland"], ["belgium|belgien", "belgie"],
         ["netherlands|holland|niederlande", "nederland"], ["switzerland|schweiz", "zwitserland"], ["austria|osterreich", "oostenrijk"], ["norway|norwegen", "noorwegen"],
         ["sweden|schweden", "zweden"], ["portugal", "portugal"], ["scotland|schottland", "schotland"], ["united kingdom|uk|britain|grossbritannien|england", "verenigd koninkrijk"],
         ["morocco|marokko", "marokko"], ["slovenia|slowenien", "slovenie"], ["poland|polen", "polen"], ["czech|tschechien", "tsjechie"], ["usa|united states|america|amerika", "verenigde staten"],
         ["europe", "europa"], ["africa", "afrika"], ["asia|asien", "azie"], ["oceania|ozeanien", "oceanie"]]
          .forEach(([andere, nl]) => { q = q.replace(new RegExp("(^|[^a-z])(" + andere + ")(?![a-z])", "g"), "$1" + nl); });
        const MAANDEN = ["jan", "feb", "maart|mrt|mar|marz", "apr", "mei|may|mai", "jun", "jul", "aug", "sep", "okt|oct", "nov", "dec|dez"];
        const maanden = MAANDEN.map((m, i) => (new RegExp("(^|[^a-z])(" + m + ")").test(q) ? i : -1)).filter(i => i >= 0);
        const landen = [...new Set(EVENTS.map(e => e.land))].filter(l => q.includes(norm(l)));
        const delen = [...new Set(EVENTS.map(e => e.cont))].filter(c => q.includes(norm(c)) || (norm(c).endsWith("amerika") && /(^|[^a-z])amerika/.test(q) && !/(noord|zuid)/.test(q)));
        let kmMin = null, kmMax = null;
        const kmGetal = getal(q, "km|kilometer");
        if (kmGetal) {
          if (heeft(q, ["korter", "minder", "onder", "max", "hooguit", "tot ", "shorter", "less", "under", "up to", "kurzer", "weniger", "unter", "bis "])) kmMax = kmGetal;
          else if (heeft(q, ["langer", "meer dan", "boven", "minstens", "longer", "more than", "over", "at least", "mehr als", "mindestens"])) kmMin = kmGetal;
          else { kmMin = kmGetal * 0.75; kmMax = kmGetal * 1.25; }
        }
        if (heeft(q, ["beginner", "eerste ultra", "mijn eerste", "first ultra", "my first", "einsteiger", "ersten ultra"])) kmMax = kmMax || 750;
        const surf = heeft(q, ["onverhard", "offroad", "off-road", "unpaved", "unbefestigt"]) ? "onverhard" : heeft(q, ["asfalt", "tarmac", "asphalt"]) ? "asfalt" : null;
        const fiets = heeft(q, ["mtb", "mountainbike", "mountain bike"]) ? "mtb" : heeft(q, ["racefiets", "road bike", "rennrad"]) ? "race" : heeft(q, ["gravel"]) ? "gravel" : null;
        const fmt = heeft(q, ["self", "zelfvoorzien", "zonder support", "unsupported"]) ? "self" : heeft(q, ["supported", "met support", "verzorgd", "with support", "mit support"]) ? "sup"
          : heeft(q, ["etappe", "stage", "etappen"]) ? "stage" : heeft(q, ["brevet", "audax"]) ? "brevet" : heeft(q, ["toertocht", "sportive"]) ? "tour" : null;
        const sorteer = heeft(q, ["langst", "longest", "langste"]) ? "lang" : heeft(q, ["kortst", "shortest", "kurzeste"]) ? "kort" : heeft(q, ["hoogtemeter", "zwaarst", "klim", "berg", "climbing", "elevation", "hardest", "hohenmeter", "schwerste"]) ? "hm" : "datum";
        if (!maanden.length && !landen.length && !delen.length && kmMin == null && kmMax == null && !surf && !fiets && !fmt && sorteer === "datum" && !heeft(q, ["binnenkort", "eerstvolgend", "volgende", "next", "upcoming", "soon", "nachste", "bald"])) return null;

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
        if (!uit.length) return { html: T("Daar vindt de gorilla geen event bij. Probeer het wat ruimer, bijvoorbeeld zonder maand of met een heel werelddeel.", "The gorilla can't find an event for that. Try a bit broader, for example without a month or with a whole continent.", "Dazu findet der Gorilla kein Event. Versuch es etwas weiter, zum Beispiel ohne Monat oder mit einem ganzen Kontinent.") };
        const landNaam = l => (window.GG_LAND ? window.GG_LAND(l) : l);
        const datum = (d, opties) => new Date(d).toLocaleDateString(LOC, opties || { day: "numeric", month: "short", year: "numeric" });
        const wanneer = e => new Date(e.d) >= vandaag
          ? datum(e.d) + (e.tbc ? T(" (onder voorbehoud)", " (provisional)", " (unter Vorbehalt)") : "")
          : T("volgende editie rond ", "next edition around ", "nächste Ausgabe um ") + datum(volgende(e), { month: "long", year: "numeric" }) + T(" (vorige: ", " (previous: ", " (vorige: ") + datum(e.d) + ")";
        const regel = e => '<a href="' + e.u + '" target="_blank" rel="noopener">' + html(e.n) + " ↗</a> " +
          wanneer(e) + ", " + html(landNaam(e.land)) + ", " + e.km.toLocaleString(LOC) + " km" + (e.hm ? ", " + e.hm.toLocaleString(LOC) + T(" hm", " m climbing", " hm") : "");
        const geweest = uit.slice(0, 5).some(e => new Date(e.d) < vandaag);
        return {
          html: T("De gorilla vond <b>", "The gorilla found <b>", "Der Gorilla hat <b>") + uit.length + " " + (uit.length === 1 ? "event" : "events") + "</b>" + T("", "", " gefunden") + (uit.length > 5 ? T(". De eerste vijf:", ". The first five:", ". Die ersten fünf:") : ":") +
            lijst(uit.slice(0, 5).map(regel)) +
            (geweest ? T("Bij events die dit jaar al geweest zijn, staat de verwachte maand van de volgende editie. ", "For events that have already taken place this year, the expected month of the next edition is shown. ", "Bei Events, die dieses Jahr schon waren, steht der erwartete Monat der nächsten Ausgabe. ") : "") +
            T("Controleer altijd de officiële website voordat je je inschrijft.", "Always check the official website before you register.", "Prüf immer die offizielle Website, bevor du dich anmeldest."),
          knop: { tekst: T("Zoek verder in de kiezer", "Search further in the finder", "Im Finder weitersuchen"), naar: null }
        };
      }
    },

    /* ===== Maatbepaler ===== */
    "maatbepaler": {
      eigen: /maat|lengte|binnenbeen|cm|\d[,.]\d\d ?m|zadel|stack|reach|frame|size|height|inseam|saddle|grosse|schritt|sattel|rahmen/,
      plek: ["Bijv. Ik ben 1,83 m met 87 cm binnenbeen", "E.g. I'm 1.83 m with an 87 cm inseam", "Z. B. Ich bin 1,83 m mit 87 cm Schrittlänge"],
      voorbeelden: [
        ["Ik ben 1,83 m met 87 cm binnenbeen", "178 cm, welke maat?", "Ik ben 172 cm en zit liever rechtop", "Hoe hoog moet mijn zadel?", "Wat is stack en reach?"],
        ["I'm 1.83 m with an 87 cm inseam", "178 cm, which size?", "I'm 172 cm and prefer to sit upright", "How high should my saddle be?", "What are stack and reach?"],
        ["Ich bin 1,83 m mit 87 cm Schrittlänge", "178 cm, welche Größe?", "Ich bin 172 cm und sitze lieber aufrecht", "Wie hoch sollte mein Sattel sein?", "Was sind Stack und Reach?"]],
      kennis: [
        { vraag: ["Kan ik een fiets die net te groot is passend maken?", "Can I make a slightly too big bike fit?", "Kann ich ein etwas zu großes Rad passend machen?"], w: "te groot te klein passend stuurpen aanpassen too big too small fit stem adjust zu gross zu klein vorbau anpassen", tekst: ["Een beetje wel: met een kortere stuurpen (1 tot 2 cm), een stuur met minder reach en het zadel iets naar voren. Meer dan een paar centimeter rek je het niet, want dan gaat de fiets anders sturen. Bij twijfel liever de maat die zonder trucjes past.", "A little: with a shorter stem (1 to 2 cm), a handlebar with less reach and the saddle slightly forward. You can't stretch it more than a few centimetres, or the bike will steer differently. In doubt, prefer the size that fits without tricks.", "Ein bisschen: mit einem kürzeren Vorbau (1 bis 2 cm), einem Lenker mit weniger Reach und dem Sattel etwas nach vorne. Mehr als ein paar Zentimeter geht nicht, sonst lenkt das Rad anders. Im Zweifel lieber die Größe, die ohne Tricks passt."] },
        { vraag: ["Is er verschil tussen dames- en herenmaten?", "Is there a difference between women's and men's sizes?", "Gibt es einen Unterschied zwischen Damen- und Herrengrößen?"], w: "dames vrouw heren man vrouwenfiets women woman men female damen frau herren", tekst: ["De meeste gravelbikes zijn unisex. Dames hebben gemiddeld iets langere benen en een korter bovenlijf voor hun lengte; dan past vaak de kleinere maat. Vul je binnenbeenlengte in, dan rekent de maatbepaler daar al mee.", "Most gravel bikes are unisex. Women on average have slightly longer legs and a shorter upper body for their height; then the smaller size often fits. Enter your inseam and the size finder takes that into account.", "Die meisten Gravelbikes sind Unisex. Frauen haben im Schnitt etwas längere Beine und einen kürzeren Oberkörper für ihre Größe; dann passt oft die kleinere Größe. Gib deine Schrittlänge ein, dann berücksichtigt der Rechner das."] }
      ],
      slim(q) {
        const getallen = [];
        q.replace(/(\d)[,.](\d\d)\s*m(?![a-z])/g, (_, a, b) => { getallen.push(+(a + b)); return ""; })
          .replace(/(\d{2,3})(?:[,.]\d)?\s*(?:cm|centimeter)?/g, (_, a) => { getallen.push(+a); return ""; });
        const lengte = getallen.find(n => n >= 140 && n <= 215);
        let been = getallen.find(n => n >= 60 && n <= 110);
        const romp = heeft(q, ["lang bovenlijf", "lange armen", "lange romp", "long upper body", "long arms", "long torso", "langer oberkorper", "lange arme"]) ? "lang"
          : heeft(q, ["kort bovenlijf", "korte armen", "korte romp", "short upper body", "short arms", "short torso", "kurzer oberkorper", "kurze arme"]) ? "kort" : null;
        const stijl = heeft(q, ["sportief", "gestrekt", "race", "aero", "sporty", "stretched", "sportlich", "gestreckt"]) ? "sportief" : heeft(q, ["rechtop", "comfort", "relax", "rug", "upright", "back", "aufrecht", "bequem", "rucken"]) ? "comfort" : null;
        if (!lengte && !been && !romp && !stijl) return null;
        if (lengte) zetSchuif("#mbLengte", tussen(lengte, 150, 205));
        const geschat = !been && lengte;
        if (geschat) been = Math.round(lengte * 0.46);
        if (been) zetSchuif("#mbBinnenbeen", tussen(been, 65, 100));
        if (romp) klik('.wb-chips[data-veld="romp"] button[data-waarde="' + romp + '"]');
        if (stijl) klik('.wb-chips[data-veld="stijl"] button[data-waarde="' + stijl + '"]');
        const l = $("#mbLengte").value, b = $("#mbBinnenbeen").value;
        return {
          html: T("Met <b>" + l + " cm</b> lengte en <b>" + b + " cm</b> binnenbeen", "With <b>" + l + " cm</b> height and <b>" + b + " cm</b> inseam", "Mit <b>" + l + " cm</b> Körpergröße und <b>" + b + " cm</b> Schrittlänge") +
            (geschat ? T(" (geschat; meet hem voor een preciezer advies)", " (estimated; measure it for more precise advice)", " (geschätzt; miss sie für eine genauere Empfehlung)") : "") +
            T(" adviseert de gorilla maat <b>", " the gorilla advises size <b>", " empfiehlt der Gorilla Größe <b>") + tekst("#mbMaat") + "</b> (" + T("framemaat ", "frame size ", "Rahmengröße ") + tekst("#mbCm") + " cm). " +
            T("Zadelhoogte: ongeveer <b>", "Saddle height: about <b>", "Sattelhöhe: etwa <b>") + tekst("#mbZadel") + "</b>, " + T("stack en reach rond ", "stack and reach around ", "Stack und Reach um ") + tekst("#mbGeo") + " mm." +
            '<p class="vg__tip">' + html(tekst("#mbUitleg")) + "</p>",
          knop: { tekst: T("Bekijk alle maten", "See all sizes", "Alle Größen ansehen"), naar: "#mbTabel" }
        };
      }
    },

    /* ===== Paklijst bikepacking ===== */
    "paklijst-bikepacking": {
      eigen: /pak|mee|tas|slaap|tent|bivak|bikepack|lijst|nacht|kamp|hotel|weekend|week|pack|bag|sleep|night|camp|list|zelt|schlaf|liste|tasche/,
      plek: ["Bijv. Weekend bikepacken met tent in het najaar", "E.g. Weekend bikepacking with a tent in autumn", "Z. B. Wochenende Bikepacking mit Zelt im Herbst"],
      voorbeelden: [
        ["Weekend bikepacken met tent in het najaar", "Een week in de zomer, met hotels", "Bivakkeren in de winter, afgelegen", "Welk gereedschap neem ik mee?", "Hoe zwaar wordt mijn bagage?"],
        ["Weekend bikepacking with a tent in autumn", "A week in summer, with hotels", "Bivvying in winter, remote", "Which tools do I take?", "How heavy will my luggage be?"],
        ["Wochenende Bikepacking mit Zelt im Herbst", "Eine Woche im Sommer, mit Hotels", "Biwakieren im Winter, abgelegen", "Welches Werkzeug nehme ich mit?", "Wie schwer wird mein Gepäck?"]],
      kennis: [
        { vraag: ["Hoe houd ik mijn spullen droog?", "How do I keep my gear dry?", "Wie halte ich meine Sachen trocken?"], w: "droog regen nat waterdicht dry rain wet waterproof trocken regen nass wasserdicht", tekst: ["Bikepackingtassen zijn vaak waterafstotend, maar niet altijd helemaal waterdicht. Stop je slaapzak, droge kleren en elektronica daarom extra in waterdichte zakjes (drybags). Dan blijft het belangrijkste droog, wat er ook gebeurt.", "Bikepacking bags are often water-repellent, but not always fully waterproof. So put your sleeping bag, dry clothes and electronics in extra drybags. Then the most important things stay dry, whatever happens.", "Bikepacking-Taschen sind oft wasserabweisend, aber nicht immer ganz wasserdicht. Pack Schlafsack, trockene Kleidung und Elektronik deshalb zusätzlich in wasserdichte Beutel (Drybags). Dann bleibt das Wichtigste trocken, egal was passiert."] },
        { vraag: ["Hoe zwaar wordt mijn bagage?", "How heavy will my luggage be?", "Wie schwer wird mein Gepäck?"], w: "zwaar gewicht weegt kilo kilos bagage heavy weight weigh luggage schwer gewicht wiegt gepack", tekst: ["Met een tent en een paar nachten kom je met lichte spullen meestal op 7 tot 10 kilo. Slaap je binnen, dan kan het met 3 tot 5 kilo. Kies hierboven je tocht: rechts zie je meteen het geschatte gewicht van jouw lijst, en welke spullen het zwaarst zijn.", "With a tent and a few nights, with light gear you usually end up at 7 to 10 kilos. If you sleep indoors, 3 to 5 kilos can do. Choose your trip above: on the right you immediately see the estimated weight of your list, and which items are heaviest.", "Mit Zelt und ein paar Nächten kommst du mit leichter Ausrüstung meist auf 7 bis 10 Kilo. Schläfst du drinnen, gehen auch 3 bis 5 Kilo. Wähle oben deine Tour: Rechts siehst du sofort das geschätzte Gewicht deiner Liste und welche Sachen am schwersten sind."] },
        { vraag: ["Mag ik wildkamperen?", "Can I wild camp?", "Darf ich wild campen?"], w: "wildkamperen wild kamperen bivak buiten slapen paalkamperen wild camping camp outside sleep wildcampen draussen schlafen", tekst: ["In Nederland en België is wildkamperen bijna overal verboden. Je kunt wel terecht op paalkampeerplekken (in Nederland) of bivakzones (in Vlaanderen): gratis of goedkope plekken in de natuur voor één nacht. Kijk voor je vertrekt waar die op je route liggen.", "In the Netherlands and Belgium wild camping is forbidden almost everywhere. You can use 'paalkampeerplekken' (in the Netherlands) or bivouac zones (in Flanders): free or cheap spots in nature for one night. Check where they are on your route before you leave. Rules differ per country, so check them for where you ride.", "In den Niederlanden und Belgien ist Wildcampen fast überall verboten. Es gibt aber „Paalkampeerplekken\" (Niederlande) und Biwakzonen (Flandern): kostenlose oder günstige Plätze in der Natur für eine Nacht. Schau vor der Abfahrt, wo sie auf deiner Route liegen. Die Regeln unterscheiden sich je nach Land, prüf sie also für dein Gebiet."] }
      ],
      slim(q) {
        const nachten = getal(q, "nachten|nacht|dagen|dag|nights|night|days|day|nachte|tage|tag");
        let duur = nachten != null ? (nachten <= 1 ? 0 : nachten <= 3 ? 1 : nachten <= 7 ? 2 : 3) : null;
        if (duur == null) duur = heeft(q, ["weekend", "wochenende"]) ? 1 : heeft(q, ["maand", "weken", "lange reis", "month", "weeks", "monat", "wochen"]) ? 3 : heeft(q, ["week", "woche"]) ? 2 : heeft(q, ["overnacht", "microavontuur", "een nacht", "overnight", "one night", "eine nacht"]) ? 0 : null;
        const seizoen = heeft(q, ["winter", "vorst", "sneeuw", "snow", "frost", "schnee"]) ? 2 : heeft(q, ["najaar", "herfst", "voorjaar", "lente", "autumn", "fall", "spring", "herbst", "fruhling", "fruhjahr"]) ? 1 : heeft(q, ["zomer", "warm", "summer", "sommer"]) ? 0 : null;
        const slapen = heeft(q, ["bivak", "tarp", "bivvy", "biwak"]) ? "bivak" : heeft(q, ["hotel", "b&b", "bnb", "hut", "pension", "airbnb", "binnen", "indoors", "hostel", "hutte"]) ? "binnen" : heeft(q, ["tent", "camping", "kamperen", "zelt"]) ? "tent" : null;
        const bevoorrading = heeft(q, ["afgelegen", "weinig winkels", "wildernis", "geen winkels", "remote", "few shops", "wilderness", "abgelegen", "wildnis"]) ? "weinig" : null;
        const koken = heeft(q, ["koken", "brander", "koffie zetten", "warme maaltijd", "cook", "stove", "kochen", "kocher"]) ? "ja" : null;
        if (duur == null && seizoen == null && !slapen && !bevoorrading && !koken) return null;
        zetSchuif("#pkDuur", duur == null ? 1 : duur);
        zetSchuif("#pkSeizoen", seizoen == null ? 1 : seizoen);
        // instellen en het label van de knop in de tool gebruiken (staat al in de juiste taal)
        const zet = (veld, w) => { const k = $('.wb-chips[data-veld="' + veld + '"] button[data-waarde="' + w + '"]'); if (k) { k.click(); return lc(k.textContent.trim()); } return ""; };
        const instelling = [lc(tekst("#pkDuurUit")), lc(tekst("#pkSeizoenUit")), zet("slapen", slapen || "tent")];
        const b = zet("bevoorrading", bevoorrading || "veel"); if (bevoorrading) instelling.push(b);
        const k = zet("koken", koken || "nee"); if (koken) instelling.push(k);
        return {
          html: T("Ik heb de paklijst ingesteld op <b>", "I've set the packing list to <b>", "Ich habe die Packliste eingestellt auf <b>") + html(instelling.join(", ")) + "</b>. " +
            T("Dat zijn <b>" + tekst("#pkAantal") + " spullen</b>, samen ongeveer <b>", "That's <b>" + tekst("#pkAantal") + " items</b>, together about <b>", "Das sind <b>" + tekst("#pkAantal") + " Sachen</b>, zusammen etwa <b>") + tekst("#pkGewicht") + "</b>." +
            '<p class="vg__tip">' + html(tekst("#pkUitleg")) + "</p>",
          knop: { tekst: T("Naar de afvinklijst", "To the checklist", "Zur Checkliste"), naar: "#pkLijst" }
        };
      }
    },

    /* ===== Gravelroutes ===== */
    "gravelroutes": {
      eigen: /route|graveln|gravel|rijden|provincie|km|gpx|bewegwijzer|waar|limburg|drenthe|zeeland|gelderland|achterhoek|veluwe|kempen|vlaanderen|belgi|nederland|ride|where|signpost|flanders|netherlands|province|fahren|wo |ausgeschildert|flandern|niederlande|provinz/,
      plek: ["Bijv. Bewegwijzerde gravelroutes in Limburg", "E.g. Signposted gravel routes in Limburg", "Z. B. Ausgeschilderte Gravelrouten in Limburg"],
      voorbeelden: [
        ["Gravelroutes in Zuid-Limburg", "Een korte route in Drenthe", "Bewegwijzerde routes in Gelderland", "Lange route in Vlaanderen", "Waar kan ik graveln bij Maastricht?"],
        ["Gravel routes in South Limburg", "A short route in Drenthe", "Signposted routes in Gelderland", "Long route in Flanders", "Where can I ride gravel near Maastricht?"],
        ["Gravelrouten in Süd-Limburg", "Eine kurze Route in Drenthe", "Ausgeschilderte Routen in Gelderland", "Lange Route in Flandern", "Wo kann ich bei Maastricht graveln?"]],
      kennis: [
        { vraag: ["Hoe zet ik een GPX-route op mijn fietscomputer?", "How do I put a GPX route on my bike computer?", "Wie bekomme ich eine GPX-Route auf meinen Radcomputer?"], w: "gpx fietscomputer garmin wahoo komoot telefoon downloaden bike computer phone download radcomputer handy herunterladen", tekst: ["Download het GPX-bestand bij de bron van de route. Bij een Garmin of Wahoo zet je het via de app van je fietscomputer of via Komoot op je toestel. Op je telefoon open je het in een app zoals Komoot of RideWithGPS en volg je de lijn.", "Download the GPX file at the route's source. For a Garmin or Wahoo, put it on your device via your bike computer's app or via Komoot. On your phone, open it in an app like Komoot or RideWithGPS and follow the line.", "Lade die GPX-Datei bei der Quelle der Route herunter. Bei Garmin oder Wahoo spielst du sie über die App des Radcomputers oder über Komoot auf. Auf dem Handy öffnest du sie in einer App wie Komoot oder RideWithGPS und folgst der Linie."] },
        { vraag: ["Mag ik in natuurgebieden graveln?", "Can I ride gravel in nature areas?", "Darf ich in Naturgebieten graveln?"], w: "natuurgebied bos heide mag toegestaan regels verboden nature forest heath allowed rules forbidden naturgebiet wald heide erlaubt regeln verboten", tekst: ["Alleen op paden waar fietsen is toegestaan. Op officiële routes zit je goed. Daarbuiten: let op de borden van Staatsbosbeheer, Natuurmonumenten of Natuurpunt, en blijf van wandelpaden af.", "Only on paths where cycling is allowed. On official routes you're fine. Elsewhere: watch the signs of the land managers (such as Staatsbosbeheer, Natuurmonumenten or Natuurpunt) and stay off walking paths.", "Nur auf Wegen, auf denen Radfahren erlaubt ist. Auf offiziellen Routen bist du richtig. Anderswo: Achte auf die Schilder der Geländeverwalter (etwa Staatsbosbeheer, Natuurmonumenten oder Natuurpunt) und bleib von Wanderwegen fern."] }
      ],
      slim(q) {
        if (!window.GG_ROUTES_ZET || !window.GG_PROV) return null;
        const keuze = {};
        const belg = heeft(q, ["belgi", "vlaander", "vlaams", "flanders", "flemish", "flandern", "flamisch"]);
        if (/limburg/.test(q)) keuze.prov = belg || /belgisch|belgian/.test(q) ? "LB" : "LI";
        else if (/achterhoek|veluwe|posbank|arnhem/.test(q)) keuze.prov = "GE";
        else if (/heuvelrug/.test(q)) keuze.prov = "UT";
        else {
          const p = Object.entries(window.GG_PROV).find(([, v]) => q.includes(norm(v[0]).replace(/ \((nl|be)\)/, "")));
          if (p) keuze.prov = p[0];
        }
        if (!keuze.prov) {
          const plaats = window.GG_ROUTES.map(r => norm(r.n + " " + (r.noot || ""))).join(" ");
          const woord = woorden(q).find(w => w.length > 3 && !/route|graveln|gravel|korte|lange|bewegwijzerd|waar|rijden|vinden|buurt|vlaand|vlaams|belgi|nederland|short|long|signpost|near|ride|find|flanders|netherlands|kurz|lang|ausgeschildert|nahe|fahren|finden|flandern|niederlande/.test(w) && plaats.includes(w));
          if (woord) keuze.zoek = woord;
        }
        if (!keuze.prov && !keuze.zoek) { if (belg) keuze.land = "BE"; else if (heeft(q, ["nederland", "netherlands", "holland", "niederlande"])) keuze.land = "NL"; }
        const km = getal(q, "km|kilometer");
        if (km) keuze.lengte = km < 30 ? "kort" : km < 60 ? "middel" : km < 100 ? "lang" : "extra";
        else if (heeft(q, ["kort", "beginner", "rondje", "short", "kurz", "einsteiger"])) keuze.lengte = "kort";
        else if (heeft(q, ["lange", "meerdaag", "bikepack", "long", "multi-day", "lang", "mehrtag"])) keuze.lengte = "extra";
        if (heeft(q, ["bewegwijzer", "bordjes", "paaltjes", "pijlen", "signpost", "waymark", "signs", "ausgeschildert", "schilder", "beschildert"])) keuze.nav = "bord";
        else if (heeft(q, ["gpx"])) keuze.nav = "gpx";
        if (!Object.keys(keuze).length) return null;
        const uit = window.GG_ROUTES_ZET(keuze);
        if (!uit.length) return { html: T("Daar vindt de gorilla nog geen route bij. Probeer het ruimer, bijvoorbeeld zonder lengte, of kies een andere provincie op de kaart.", "The gorilla can't find a route for that yet. Try broader, for example without a distance, or choose another province on the map.", "Dazu findet der Gorilla noch keine Route. Versuch es weiter gefasst, zum Beispiel ohne Länge, oder wähle eine andere Provinz auf der Karte.") };
        const top = uit.slice().sort((a, b) => a.km - b.km).slice(0, 5);
        return {
          html: T("De gorilla vond <b>", "The gorilla found <b>", "Der Gorilla hat <b>") + uit.length + " " + (uit.length === 1 ? T("route", "route", "Route") : T("routes", "routes", "Routen")) + "</b>" + T("", "", " gefunden") +
            (uit.length > 5 ? T(". De kortste vijf:", ". The five shortest:", ". Die fünf kürzesten:") : ":") +
            lijst(top.map(r => '<a href="' + r.u + '" target="_blank" rel="noopener">' + html(r.n) + " ↗</a> " + komma(r.km) + (r.tot ? "–" + r.tot : "") + " km, " + (r.nav === "bord" ? T("bewegwijzerd", "signposted", "ausgeschildert") : "GPX"))) +
            T("Ik heb de filters hierboven ook zo gezet.", "I've set the filters above the same way.", "Ich habe die Filter oben auch so eingestellt."),
          knop: { tekst: T("Bekijk alle routes", "See all routes", "Alle Routen ansehen"), naar: "#grLijst" }
        };
      }
    },

    /* ===== Versnellingscalculator ===== */
    "versnellingscalculator": {
      eigen: /verzet|versnelling|voorblad|cassette|tand|klim|1x|2x|rpm|watt|ontwikkeling|blad|gear|chainring|sprocket|climb|development|gang|kettenblatt|ritzel|kassette|klettern|entfaltung|\d\d ?[x×\/-] ?\d\d/,
      plek: ["Bijv. 40 voor en 10-44 achter, hoe steil kan ik klimmen?", "E.g. 40 front and 10-44 rear, how steep can I climb?", "Z. B. 40 vorne und 10-44 hinten, wie steil kann ich klettern?"],
      voorbeelden: [
        ["40 voor en 10-44 achter, hoe steil kan ik klimmen?", "Vergelijk 40x42 met 38x44", "46/30 met 11-34, ik weeg 85 kg", "Welk verzet voor de Ardennen met bagage?", "Wat is ontwikkeling?"],
        ["40 front and 10-44 rear, how steep can I climb?", "Compare 40x42 with 38x44", "46/30 with 11-34, I weigh 85 kg", "Which gearing for the Ardennes with luggage?", "What is development?"],
        ["40 vorne und 10-44 hinten, wie steil kann ich klettern?", "Vergleiche 40x42 mit 38x44", "46/30 mit 11-34, ich wiege 85 kg", "Welche Übersetzung für die Ardennen mit Gepäck?", "Was ist Entfaltung?"]],
      kennis: [
        { vraag: ["Welk verzet voor de Ardennen of Zuid-Limburg?", "Which gearing for the Ardennes or hilly regions?", "Welche Übersetzung für die Ardennen oder das Mittelgebirge?"], w: "ardennen limburg heuvels bergen steil eifel ardennes hills mountains steep hugel berge steil mittelgebirge", tekst: ["Kies een lichtste verzet waarin het voorblad kleiner is dan je grootste tandwiel achter, bijvoorbeeld 38 of 40 voor met 44 tot 51 achter, of 46/30 met 11–34. Met bagage mag het nog een tandje lichter. Vul je gewicht en vermogen in, dan zie je welke hellingen je nog fietsend haalt.", "Choose a lowest gear where the chainring is smaller than your biggest rear sprocket, for example 38 or 40 front with 44 to 51 rear, or 46/30 with 11–34. With luggage it can be a notch lighter. Enter your weight and power to see which gradients you can still ride.", "Wähle einen leichtesten Gang, bei dem das Kettenblatt kleiner ist als dein größtes Ritzel, zum Beispiel 38 oder 40 vorne mit 44 bis 51 hinten, oder 46/30 mit 11–34. Mit Gepäck darf es noch etwas leichter sein. Gib Gewicht und Leistung ein, dann siehst du, welche Steigungen du noch fahrend schaffst."] },
        { vraag: ["Welk verzet voor bikepacking?", "Which gearing for bikepacking?", "Welche Übersetzung fürs Bikepacking?"], w: "bikepacking bagage tassen zwaar ultra luggage bags heavy gepack taschen schwer", tekst: ["Met 8 tot 12 kilo bagage wil je een lichter verzet dan normaal. Veel bikepackers rijden 1× met 36 of 38 voor en een cassette tot 50 of 52, of 2× met 46/30. Zet je totale gewicht met bagage in de calculator om te zien hoe steil je nog omhoog komt.", "With 8 to 12 kilos of luggage you want lighter gearing than normal. Many bikepackers ride 1× with 36 or 38 up front and a cassette up to 50 or 52, or 2× with 46/30. Put your total weight with luggage in the calculator to see how steep you can still climb.", "Mit 8 bis 12 Kilo Gepäck willst du eine leichtere Übersetzung als sonst. Viele Bikepacker fahren 1× mit 36 oder 38 vorne und einer Kassette bis 50 oder 52, oder 2× mit 46/30. Gib dein Gesamtgewicht mit Gepäck im Rechner ein, um zu sehen, wie steil du noch hochkommst."] }
      ],
      slim(q) {
        const opstellingen = [];
        const voorOptie = id => !!$('#vsVoorA option[value="' + id + '"]');
        const cassette = (k, g) => { const id = k + "-" + g; return $('#vsAchterA option[value="' + id + '"]') ? id : null; };
        const cassetteMetGroot = g => { const o = [...document.querySelectorAll("#vsAchterA option")].find(x => x.value.endsWith("-" + g)); return o ? o.value : null; };
        const cassettes = [...q.matchAll(/(1[01])\s*[-–]\s*(\d{2})/g)].map(m => cassette(m[1], m[2])).filter(Boolean);
        const zonderCassettes = q.replace(/(1[01])\s*[-–]\s*(\d{2})/g, " ");
        // 40x42: voorblad 40 met een cassette die tot 42 gaat
        [...zonderCassettes.matchAll(/(\d{2})\s*[x×]\s*(\d{2})/g)].forEach(m => { const c = cassetteMetGroot(m[2]); if (voorOptie(m[1]) && c) opstellingen.push({ voor: m[1], achter: c }); });
        // 46/30 of "40 voor" / "40 front" / "40 vorne"
        const voors = [...zonderCassettes.replace(/(\d{2})\s*[x×]\s*(\d{2})/g, " ").matchAll(/(\d{2})\s*\/\s*(\d{2})|(\d{2})\s*(?:t\b|tanden|tands|teeth|zahne)?\s*(?:voor|voorblad|front|chainring|vorne|kettenblatt)|(?:voorblad|chainring|kettenblatt)\s*(?:van\s*|of\s*|mit\s*)?(\d{2})/g)]
          .map(m => (m[1] ? m[1] + "-" + m[2] : m[3] || m[4])).filter(voorOptie);
        voors.forEach((v, i) => opstellingen.push({ voor: v, achter: cassettes[i] || cassettes[0] || null }));
        if (!voors.length && !opstellingen.length) cassettes.forEach(c => opstellingen.push({ voor: null, achter: c }));
        const kg = getal(q, "kg|kilo"), watt = getal(q, "w|watt|watts"), rpm = getal(q, "rpm|omwentelingen|u\\/min");
        if (!opstellingen.length && !kg && !watt && !rpm) return null;
        const zet = (sel, w) => { const s = $(sel); if (s && w) { s.value = w; s.dispatchEvent(new Event("change", { bubbles: true })); } };
        if (opstellingen[0]) { zet("#vsVoorA", opstellingen[0].voor); zet("#vsAchterA", opstellingen[0].achter); }
        if (opstellingen[1]) { zet("#vsVoorB", opstellingen[1].voor); zet("#vsAchterB", opstellingen[1].achter); }
        else if (opstellingen[0]) zet("#vsVoorB", "geen");
        if (kg) zetSchuif("#vsGewicht", tussen(Math.round(kg), 55, 160));
        if (watt) zetSchuif("#vsVermogen", tussen(Math.round(watt / 5) * 5, 100, 400));
        if (rpm) zetSchuif("#vsCadans", tussen(Math.round(rpm), 55, 100));
        return {
          html: T("Ik heb de calculator ingevuld. ", "I've filled in the calculator. ", "Ich habe den Rechner ausgefüllt. ") + html(tekst("#vsUitleg")) +
            '<p class="vg__tip">' + T("Steilste klim in je lichtste verzet: A <b>", "Steepest climb in your lowest gear: A <b>", "Maximale Steigung im leichtesten Gang: A <b>") + tekst("#vsKlimA") + "</b>" + (tekst("#vsKlimB") !== "–" ? ", B <b>" + tekst("#vsKlimB") + "</b>" : "") + ".</p>",
          knop: { tekst: T("Bekijk al je verzetten", "See all your gears", "Alle Gänge ansehen"), naar: "#vsLadder" }
        };
      }
    },

    /* ===== Profielsticker ===== */
    "profielsticker": {
      eigen: /sticker|gpx|tcx|post|print|profiel|komoot|strava|garmin|ftp|eten|stop|profile|food|eat|profil|essen|druck/,
      plek: ["Bijv. Hoe zet ik een rustpost op mijn sticker?", "E.g. How do I put a rest stop on my sticker?", "Z. B. Wie setze ich eine Pause auf meinen Sticker?"],
      voorbeelden: [
        ["Hoe haal ik een GPX uit Komoot?", "Hoe verschuif ik een post?", "Op welk papier print ik de sticker?", "Hoeveel moet ik eten onderweg?", "Wordt mijn route geüpload?"],
        ["How do I get a GPX from Komoot?", "How do I move a stop?", "Which paper do I print the sticker on?", "How much should I eat on the way?", "Is my route uploaded?"],
        ["Wie bekomme ich eine GPX aus Komoot?", "Wie verschiebe ich einen Stopp?", "Auf welches Papier drucke ich den Sticker?", "Wie viel sollte ich unterwegs essen?", "Wird meine Route hochgeladen?"]],
      kennis: [
        { vraag: ["Hoe haal ik een GPX-bestand uit Komoot?", "How do I get a GPX file from Komoot?", "Wie bekomme ich eine GPX-Datei aus Komoot?"], w: "komoot gpx downloaden exporteren bestand download export file herunterladen exportieren datei", tekst: ["Open je tour op komoot.com (op de computer), klik op de drie puntjes of op 'Downloaden' en kies 'GPX-bestand'. Sleep dat bestand daarna in de profielsticker.", "Open your tour on komoot.com (on a computer), click the three dots or 'Download' and choose 'GPX file'. Then drag that file into the profile sticker.", "Öffne deine Tour auf komoot.com (am Computer), klick auf die drei Punkte oder auf „Herunterladen\" und wähle „GPX-Datei\". Zieh die Datei dann in den Profilsticker."] },
        { vraag: ["Hoe haal ik een GPX-bestand uit Strava?", "How do I get a GPX file from Strava?", "Wie bekomme ich eine GPX-Datei aus Strava?"], w: "strava gpx downloaden exporteren route activiteit download export activity herunterladen exportieren aktivitat", tekst: ["Open je route op strava.com, klik op de drie puntjes of 'Exporteren' en kies 'GPX'. Van een gereden activiteit kan het ook: drie puntjes → 'Exporteer GPX'.", "Open your route on strava.com, click the three dots or 'Export' and choose 'GPX'. From a ridden activity it works too: three dots → 'Export GPX'.", "Öffne deine Route auf strava.com, klick auf die drei Punkte oder „Exportieren\" und wähle „GPX\". Bei einer gefahrenen Aktivität geht es auch: drei Punkte → „GPX exportieren\"."] },
        { vraag: ["Hoe haal ik een GPX-bestand uit Garmin of RideWithGPS?", "How do I get a GPX file from Garmin or RideWithGPS?", "Wie bekomme ich eine GPX-Datei aus Garmin oder RideWithGPS?"], w: "garmin connect ridewithgps rwgps wahoo exporteren export exportieren", tekst: ["In Garmin Connect: open de koers en kies 'Exporteren naar GPX'. In RideWithGPS: open de route, klik op 'Export' en kies GPX of TCX.", "In Garmin Connect: open the course and choose 'Export to GPX'. In RideWithGPS: open the route, click 'Export' and choose GPX or TCX.", "In Garmin Connect: Öffne die Strecke und wähle „Als GPX exportieren\". In RideWithGPS: Öffne die Route, klick auf „Export\" und wähle GPX oder TCX."] },
        { vraag: ["Op welk papier print ik de sticker?", "Which paper do I print the sticker on?", "Auf welches Papier drucke ich den Sticker?"], w: "printen papier sticker vinyl plakken bevestigen tape laminer print paper stick attach drucken papier kleben befestigen", tekst: ["Het mooiste is printbaar stickervel (vinyl, waterbestendig) uit de kantoorwinkel. Gewoon papier kan ook: knip de strook uit en plak hem vast met breed transparant plakband, dan is hij meteen beschermd tegen regen.", "Best is printable sticker sheet (vinyl, water-resistant) from an office supply store. Normal paper works too: cut out the strip and stick it on with wide clear tape, which also protects it from rain.", "Am schönsten ist bedruckbare Stickerfolie (Vinyl, wasserfest) aus dem Bürobedarf. Normales Papier geht auch: Schneid den Streifen aus und kleb ihn mit breitem transparentem Klebeband fest, dann ist er gleich vor Regen geschützt."] },
        { vraag: ["Hoe zet ik een post op mijn sticker?", "How do I put a stop on my sticker?", "Wie setze ich einen Stopp auf meinen Sticker?"], w: "post posten rustpost waterpunt toevoegen slaapplek controle stop stops rest water add sleep checkpoint pause wasserstelle hinzufugen schlafplatz kontrolle", tekst: ["Tik op het profiel op de plek waar je een post wilt, en kies wat het is: rustpost, waterpunt, controle of slaapplek. De verwachte aankomsttijd komt er vanzelf bij.", "Tap the profile where you want a stop, and choose what it is: rest stop, water point, checkpoint or place to sleep. The expected arrival time is added automatically.", "Tipp auf das Profil, wo du einen Stopp willst, und wähle, was es ist: Pause, Wasserstelle, Kontrollpunkt oder Schlafplatz. Die erwartete Ankunftszeit kommt automatisch dazu."] },
        { vraag: ["Hoeveel moet ik eten onderweg?", "How much should I eat on the way?", "Wie viel sollte ich unterwegs essen?"], w: "eten drinken koolhydraten voeding gram uur eat drink carbs carbohydrates nutrition grams hour essen trinken kohlenhydrate ernahrung gramm stunde", tekst: ["Als vuistregel 60 tot 90 gram koolhydraten per uur bij een stevige rit, en een bidon per uur (meer als het warm is). De sticker rekent het voor jouw rit uit en zet de eetmomenten erop. Het blijft een schatting: luister naar je lijf.", "As a rule of thumb 60 to 90 grams of carbohydrates per hour on a solid ride, and one bottle per hour (more when it's hot). The sticker calculates it for your ride and puts the moments to eat on it. It remains an estimate: listen to your body.", "Als Faustregel 60 bis 90 Gramm Kohlenhydrate pro Stunde bei einer zügigen Fahrt und eine Flasche pro Stunde (mehr bei Hitze). Der Sticker rechnet es für deine Fahrt aus und setzt die Essenszeiten darauf. Es bleibt eine Schätzung: Hör auf deinen Körper."] },
        { vraag: ["Wat is FTP?", "What is FTP?", "Was ist FTP?"], w: "ftp wattage vermogen watt niveau power level leistung niveau", tekst: ["FTP is het vermogen (in watt) dat je ongeveer een uur kunt volhouden. Weet je het niet? Kies dan je niveau, dan schat de tool het voor je. Met je FTP rekent de sticker per klim uit welk wattage je aanhoudt.", "FTP is the power (in watts) you can hold for about an hour. Don't know it? Then choose your level and the tool estimates it for you. With your FTP the sticker calculates what power to hold on each climb.", "FTP ist die Leistung (in Watt), die du etwa eine Stunde halten kannst. Weißt du sie nicht? Dann wähle dein Niveau, und das Tool schätzt sie für dich. Mit deiner FTP berechnet der Sticker für jeden Anstieg, welche Leistung du fährst."] }
      ],
      slim() { return null; }
    }
  };

  const C = TOOLS[tool] || { voorbeelden: [[], [], []], kennis: [], slim: () => null };
  // teksten in de taal van de pagina
  const KENNIS = (C.kennis || []).map(x => ({ vraag: L(x.vraag), w: x.w, tekst: L(x.tekst) }));

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
    const kennis = OP_PAGINA.concat(KENNIS);
    const uitleg = k => ({ html: "<b>" + html(k.vraag) + "</b><br>" + k.tekst });
    let a = null;
    // 1. hoort de vraag duidelijk bij een andere tool? dan daarheen verwijzen
    const elders = C.eigen && !C.eigen.test(q) ? zoekKennis(v, ANDERE, 2) : null;
    if (elders) a = { html: elders.tekst };
    // 2. "wat is…", "hoe…", "waarom…" (ook Engels en Duits): eerst uitleg zoeken
    if (!a && !/\d/.test(q) && /^(wat (is|zijn|betekent|betekenen)|hoe |waarom|what (is|are|does|do)|how |why|was (ist|sind|bedeutet)|wie |warum)/.test(q)) {
      const k = zoekKennis(v, kennis, 3);
      if (k) a = uitleg(k);
    }
    // 3. de tool invullen, met een passende tip erbij
    if (!a) {
      try { a = C.slim(q); } catch (e) { a = null; }
      const tip = a ? zoekKennis(v, KENNIS, 3) : null;
      if (tip) a.html += '<p class="vg__tip"><b>' + T("Tip", "Tip", "Tipp") + ":</b> " + tip.tekst + "</p>";
    }
    // 4. uitleg uit de veelgestelde vragen en de extra kennis, 5. een andere tool
    if (!a) { const k = zoekKennis(v, kennis); if (k) a = uitleg(k); }
    if (!a) { const k = zoekKennis(v, ANDERE, 2); if (k) a = { html: k.tekst }; }
    if (!a) a = { html: T("Daar heeft de gorilla nog geen antwoord op. Probeer het anders te vragen, kies een van de voorbeelden, of ",
        "The gorilla doesn't have an answer to that yet. Try asking differently, choose one of the examples, or ",
        "Darauf hat der Gorilla noch keine Antwort. Frag anders, wähle eines der Beispiele oder ") +
      '<a href="' + PRE + '/contact/">' + T("stuur je vraag naar de gorilla", "send your question to the gorilla", "schick deine Frage an den Gorilla") + "</a>" +
      T(": dan voegen we hem misschien toe.", ": we may add it.", ": Vielleicht nehmen wir sie auf.") };
    toon(a);
  }

  /* ---------- opbouwen ---------- */
  if (C.plek) invoer.placeholder = L(C.plek);
  const voorbeelden = Array.isArray(C.voorbeelden[0]) ? L(C.voorbeelden) : C.voorbeelden;
  voorbeeldVak.innerHTML = voorbeelden.map(v => '<button type="button">' + html(v) + "</button>").join("");
  voorbeeldVak.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (!b) return;
    invoer.value = b.textContent;
    vraag(b.textContent);
  });
  vak.querySelector(".vg__rij").addEventListener("submit", e => { e.preventDefault(); vraag(invoer.value); });
})();
