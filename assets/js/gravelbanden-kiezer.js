/* =========================================================
   Gravel Gorilla — Gravelbanden Kiezer
   Kiest bij jouw ondergrond, rijstijl, weer en frame de best passende gravelbanden.

   GEGEVENS (peildatum oktober 2026)
   - Breedtes en gewichten: opgaven van de fabrikanten (700c). Een gewicht staat er alleen
     bij als de fabrikant het opgeeft; het geldt voor de breedte die erbij staat.
   - Profiel en de scores (1-5) voor snelheid, grip, modder en robuustheid: inschatting van
     Gravel Gorilla op basis van profiel en opbouw. Geen meetwaarden van derden.
   - test: het adres van de rolweerstandstest op bicyclerollingresistance.com (alleen een link).
   Profiel: 0 slick · 1 semi-slick · 2 allround · 3 grof · 4 modder
   Prijs:   1 voordelig · 2 middenklasse · 3 topklasse (indicatie)
   ========================================================= */
(function () {
  const wortel = document.querySelector(".gb-scope");
  if (!wortel) return;
  const $ = s => wortel.querySelector(s);

  const MERKEN = {
    "Schwalbe": "https://www.schwalbe.com/", "Continental": "https://www.continental-tires.com/", "Pirelli": "https://www.pirelli.com/",
    "Vittoria": "https://vittoria.com/", "Panaracer": "https://panaracer.com/", "WTB": "https://www.wtb.com/", "Maxxis": "https://www.maxxis.com/",
    "Specialized": "https://www.specialized.com/", "Challenge": "https://www.challengetech.it/", "Michelin": "https://www.michelin.com/",
    "Goodyear": "https://goodyearbike.com/", "Hutchinson": "https://cycling.hutchinson.com/", "Vredestein": "https://www.vredestein.nl/", "Tufo": "https://www.tufo.com/"
  };

  const BANDEN = [
    // merk, model, profiel, breedtes, gewicht [g, bij mm], prijs, scores [snel, grip, modder, robuust], test, korte typering
    { m: "Schwalbe", n: "G-One RS Pro", p: 1, b: [40, 45, 50], prijs: 3, s: [5, 2, 1, 3], test: "schwalbe-g-one-rs-pro-40", t: "Snelle racer met fijn profiel voor droog, vlak gravel." },
    { m: "Schwalbe", n: "G-One RS", p: 1, b: [35, 40, 45], prijs: 2, s: [5, 2, 1, 3], test: "schwalbe-g-one-rs", t: "Snelle semi-slick voor hardpack en asfalt." },
    { m: "Schwalbe", n: "G-One R Pro", p: 2, b: [35, 40, 45, 50], g: [485, 40], prijs: 3, s: [4, 3, 2, 3], test: "schwalbe-g-one-r-pro", t: "Snelle allrounder die ook op los gravel nog grip heeft." },
    { m: "Schwalbe", n: "G-One RX Pro", p: 3, b: [40, 45, 50], prijs: 3, s: [3, 4, 3, 4], test: "schwalbe-g-one-rx-pro-40", t: "Voor ruw en los terrein, met stevige zijnoppen." },
    { m: "Schwalbe", n: "G-One Allround", p: 2, b: [35, 40, 45, 57], prijs: 2, s: [3, 3, 2, 3], test: "schwalbe-g-one-allround", t: "De klassieke allrounder met ronde nopjes." },
    { m: "Schwalbe", n: "G-One Overland", p: 2, b: [40, 45, 50], prijs: 2, s: [3, 3, 2, 5], test: "schwalbe-g-one-overland", t: "Robuust en lekbestendig: gemaakt voor bikepacking en lange tochten." },
    { m: "Schwalbe", n: "G-One Ultrabite", p: 4, b: [40, 45, 50], prijs: 2, s: [2, 5, 5, 3], test: "schwalbe-g-one-ultrabite", t: "Grove noppen voor zand, modder en nat bos." },
    { m: "Continental", n: "Terra Speed", p: 1, b: [35, 40, 45], g: [420, 40], prijs: 2, s: [5, 2, 1, 3], test: "continental-terra-speed", t: "Licht en snel op hardpack, populaire racekeuze." },
    { m: "Continental", n: "Terra Trail", p: 3, b: [40, 45], g: [460, 40], prijs: 2, s: [3, 4, 3, 4], test: "continental-terra-trail", t: "Meer noppen voor los gravel en bospaden." },
    { m: "Continental", n: "Terra Hardpack", p: 1, b: [50], g: [530, 50], prijs: 2, s: [4, 2, 1, 4], test: "continental-terra-hardpack", t: "Brede, snelle band voor bikepacking op vaste paden." },
    { m: "Continental", n: "Terra Adventure", p: 3, b: [45, 50, 55], g: [540, 45], prijs: 2, s: [3, 4, 3, 5], test: "continental-terra-adventure", t: "Stevig en breed: voor ruw terrein en zware bagage." },
    { m: "Pirelli", n: "Cinturato Gravel H", p: 1, b: [35, 40, 45, 50], g: [480, 40], prijs: 2, s: [4, 2, 1, 4], test: "pirelli-gravel-h", t: "Voor harde, droge ondergrond: snel en duurzaam." },
    { m: "Pirelli", n: "Cinturato Gravel M", p: 2, b: [35, 40, 45], g: [500, 40], prijs: 2, s: [3, 4, 2, 4], test: "pirelli-gravel-m", t: "Allrounder voor wisselende ondergrond." },
    { m: "Pirelli", n: "Cinturato Gravel S", p: 4, b: [40, 45, 50], prijs: 2, s: [2, 5, 4, 4], test: "pirelli-gravel-s", t: "Voor zachte grond: zand, modder en natte bospaden." },
    { m: "Pirelli", n: "Cinturato Gravel RC", p: 2, b: [35, 40, 45], g: [540, 40], prijs: 3, s: [4, 3, 2, 4], test: "pirelli-gravel-rc", t: "Racebanden voor gemengd, droog terrein." },
    { m: "Vittoria", n: "Terreno T50", p: 2, b: [40, 45, 50], prijs: 2, s: [3, 3, 2, 4], test: "vittoria-terreno-t50", t: "Vittoria's allrounder: midden tussen snel en grip." },
    { m: "Panaracer", n: "GravelKing SS", p: 1, b: [35, 40, 45], prijs: 2, s: [4, 2, 1, 3], test: "panaracer-gravel-king-ss", t: "Gladde middenstrook met noppen aan de zijkant." },
    { m: "Panaracer", n: "GravelKing SK", p: 2, b: [35, 40, 45, 50], prijs: 2, s: [3, 3, 3, 3], test: "panaracer-gravel-king-sk", t: "Een van de bekendste allround gravelbanden." },
    { m: "Panaracer", n: "GravelKing X1", p: 2, b: [35, 40, 45], prijs: 2, s: [4, 3, 2, 3], test: "panaracer-gravel-king-x1", t: "Snel met een laag, dicht profiel voor gemengd gravel." },
    { m: "Panaracer", n: "GravelKing (slick)", p: 0, b: [35, 40], prijs: 1, s: [5, 1, 1, 3], test: "panaracer-gravel-king-slick", t: "Gladde band voor veel asfalt en vaste fietspaden." },
    { m: "WTB", n: "Riddler", p: 2, b: [37, 45], prijs: 2, s: [4, 3, 2, 3], t: "Snelle middenstrook met grote noppen aan de rand." },
    { m: "WTB", n: "Venture", p: 2, b: [40, 50], prijs: 2, s: [3, 3, 2, 4], t: "Duurzame allrounder voor avontuur en bikepacking." },
    { m: "WTB", n: "Raddler", p: 1, b: [40], prijs: 2, s: [4, 2, 1, 3], t: "Snelle band met een dichte middenstrook." },
    { m: "WTB", n: "Resolute", p: 3, b: [42, 50], prijs: 2, s: [3, 4, 4, 4], t: "Veel grip in los en nat terrein." },
    { m: "Maxxis", n: "Rambler", p: 2, b: [38, 40, 45], g: [410, 40], prijs: 2, s: [3, 3, 3, 3], test: "maxxis-rambler-exo-tr", t: "Lichte allrounder voor alle omstandigheden." },
    { m: "Maxxis", n: "Receptor", p: 1, b: [40], g: [429, 40], prijs: 2, s: [5, 2, 1, 3], t: "Semi-slick voor veel asfalt en vaste paden." },
    { m: "Maxxis", n: "Reaver", p: 1, b: [40, 45], g: [430, 40], prijs: 2, s: [5, 2, 1, 3], test: "maxxis-reaver-exo-tr", t: "Maxxis' snelste band voor droog racegravel." },
    { m: "Specialized", n: "Pathfinder Pro", p: 1, b: [38, 42, 47], g: [540, 42], prijs: 2, s: [4, 3, 1, 3], test: "specialized-pathfinder-pro", t: "Gladde middenstrook en grip in de bocht: populaire racer." },
    { m: "Specialized", n: "Tracer Pro", p: 3, b: [38, 42, 47], g: [455, 38], prijs: 2, s: [3, 4, 3, 3], t: "Racebanden voor los en ruw gravel." },
    { m: "Challenge", n: "Getaway", p: 1, b: [36, 40, 45], prijs: 3, s: [4, 2, 1, 3], test: "challenge-getaway-pro-htlr", t: "Soepele handgemaakte band voor snelle tochten." },
    { m: "Challenge", n: "Gravel Grinder", p: 2, b: [36, 38, 40, 42], prijs: 3, s: [3, 3, 2, 3], test: "challenge-gravel-grinder", t: "Handgemaakte allrounder, soepel en comfortabel." },
    { m: "Challenge", n: "Strada Bianca", p: 0, b: [36, 40, 45], prijs: 3, s: [5, 1, 1, 3], test: "challenge-strada-bianca-pro-htlr", t: "Bijna glad: voor asfalt en strakke grindwegen." },
    { m: "Michelin", n: "Power Adventure", p: 1, b: [36, 42, 48], prijs: 2, s: [4, 2, 1, 4], test: "michelin-power-adventure", t: "Snel en duurzaam voor allroad en droge paden." },
    { m: "Goodyear", n: "XPLR Slick", p: 0, b: [40], prijs: 3, s: [5, 1, 1, 3], test: "goodyear-xplr-slick", t: "Gladde raceband voor snelle, droge gravelrace." },
    { m: "Goodyear", n: "XPLR Inter", p: 2, b: [45], prijs: 3, s: [4, 3, 2, 3], test: "goodyear-xplr-intermediate", t: "Snelle middenstrook met noppen voor gemengd terrein." },
    { m: "Hutchinson", n: "Touareg", p: 3, b: [40, 45], prijs: 2, s: [3, 4, 3, 4], test: "hutchinson-touareg", t: "Voor ruwe, rotsige en losse paden." },
    { m: "Hutchinson", n: "Caracal Race", p: 1, b: [40, 45, 50], prijs: 3, s: [5, 2, 1, 3], test: "hutchinson-caracal-race", t: "Snelle raceband met een laag profiel." },
    { m: "Vredestein", n: "Aventura", p: 2, b: [38, 44], prijs: 1, s: [3, 3, 2, 3], t: "Betaalbare allrounder van het Nederlandse merk." },
    { m: "Tufo", n: "Gravel Speedero", p: 1, b: [36, 40, 44], prijs: 2, s: [4, 2, 2, 3], test: "tufo-gravel-speedero", t: "Snelle band voor droog gravel." },
    { m: "Tufo", n: "Gravel Thundero", p: 2, b: [36, 40, 44], prijs: 2, s: [3, 3, 3, 3], test: "tufo-gravel-thundero", t: "Lichte allrounder voor wisselend terrein." },
    { m: "Tufo", n: "Gravel Swampero", p: 4, b: [36, 40, 44], prijs: 2, s: [2, 5, 5, 3], test: "tufo-gravel-swampero", t: "Modderband: hoge noppen voor nat en zacht terrein." }
  ];

  /* ---------- Taal van de pagina (nl, en, de) ---------- */
  const TAAL = (document.documentElement.lang || "nl").slice(0, 2);
  const T = (nl, en, de) => (TAAL === "en" ? en : TAAL === "de" ? de : nl);
  const PRE = TAAL === "nl" ? "" : "/" + TAAL;
  // korte typering per band in het Engels en Duits
  const TYPERING = {
    "G-One RS Pro": ["Fast racer with a fine tread for dry, flat gravel.", "Schneller Racer mit feinem Profil für trockenen, flachen Schotter."],
    "G-One RS": ["Fast semi-slick for hardpack and tarmac.", "Schneller Semi-Slick für festen Schotter und Asphalt."],
    "G-One R Pro": ["Fast all-rounder that still grips on loose gravel.", "Schneller Allrounder, der auch auf losem Schotter noch greift."],
    "G-One RX Pro": ["For rough and loose terrain, with sturdy side knobs.", "Für raues und loses Gelände, mit kräftigen Seitenstollen."],
    "G-One Allround": ["The classic all-rounder with round knobs.", "Der klassische Allrounder mit runden Noppen."],
    "G-One Overland": ["Tough and puncture-resistant: made for bikepacking and long tours.", "Robust und pannensicher: gemacht für Bikepacking und lange Touren."],
    "G-One Ultrabite": ["Big knobs for sand, mud and wet forest.", "Grobe Stollen für Sand, Matsch und nassen Wald."],
    "Terra Speed": ["Light and fast on hardpack, a popular race choice.", "Leicht und schnell auf festem Schotter, beliebte Rennwahl."],
    "Terra Trail": ["More knobs for loose gravel and forest tracks.", "Mehr Stollen für losen Schotter und Waldwege."],
    "Terra Hardpack": ["Wide, fast tyre for bikepacking on firm tracks.", "Breiter, schneller Reifen fürs Bikepacking auf festen Wegen."],
    "Terra Adventure": ["Tough and wide: for rough terrain and heavy luggage.", "Robust und breit: für raues Gelände und schweres Gepäck."],
    "Cinturato Gravel H": ["For hard, dry ground: fast and durable.", "Für harten, trockenen Boden: schnell und langlebig."],
    "Cinturato Gravel M": ["All-rounder for changing surfaces.", "Allrounder für wechselnden Untergrund."],
    "Cinturato Gravel S": ["For soft ground: sand, mud and wet forest tracks.", "Für weichen Boden: Sand, Matsch und nasse Waldwege."],
    "Cinturato Gravel RC": ["Race tyre for mixed, dry terrain.", "Rennreifen für gemischtes, trockenes Gelände."],
    "Terreno T50": ["Vittoria's all-rounder: midway between speed and grip.", "Vittorias Allrounder: in der Mitte zwischen Tempo und Grip."],
    "GravelKing SS": ["Smooth centre strip with knobs on the sides.", "Glatte Mittellauffläche mit Stollen an den Seiten."],
    "GravelKing SK": ["One of the best-known all-round gravel tyres.", "Einer der bekanntesten Allround-Gravelreifen."],
    "GravelKing X1": ["Fast with a low, dense tread for mixed gravel.", "Schnell mit niedrigem, dichtem Profil für gemischten Schotter."],
    "GravelKing (slick)": ["Smooth tyre for lots of tarmac and firm cycle paths.", "Glatter Reifen für viel Asphalt und feste Radwege."],
    "Riddler": ["Fast centre strip with big knobs on the edge.", "Schnelle Mittellauffläche mit großen Stollen am Rand."],
    "Venture": ["Durable all-rounder for adventure and bikepacking.", "Langlebiger Allrounder für Abenteuer und Bikepacking."],
    "Raddler": ["Fast tyre with a dense centre strip.", "Schneller Reifen mit dichter Mittellauffläche."],
    "Resolute": ["Lots of grip in loose and wet terrain.", "Viel Grip in losem und nassem Gelände."],
    "Rambler": ["Light all-rounder for all conditions.", "Leichter Allrounder für alle Bedingungen."],
    "Receptor": ["Semi-slick for lots of tarmac and firm tracks.", "Semi-Slick für viel Asphalt und feste Wege."],
    "Reaver": ["Maxxis' fastest tyre for dry race gravel.", "Der schnellste Maxxis-Reifen für trockenen Renn-Schotter."],
    "Pathfinder Pro": ["Smooth centre strip and cornering grip: a popular racer.", "Glatte Mitte und Grip in der Kurve: ein beliebter Racer."],
    "Tracer Pro": ["Race tyre for loose and rough gravel.", "Rennreifen für losen und rauen Schotter."],
    "Getaway": ["Supple handmade tyre for fast rides.", "Geschmeidiger handgemachter Reifen für schnelle Touren."],
    "Gravel Grinder": ["Handmade all-rounder, supple and comfortable.", "Handgemachter Allrounder, geschmeidig und komfortabel."],
    "Strada Bianca": ["Almost smooth: for tarmac and tidy gravel roads.", "Fast glatt: für Asphalt und gepflegte Schotterstraßen."],
    "Power Adventure": ["Fast and durable for all-road and dry tracks.", "Schnell und langlebig für Allroad und trockene Wege."],
    "XPLR Slick": ["Smooth race tyre for fast, dry gravel races.", "Glatter Rennreifen für schnelle, trockene Gravelrennen."],
    "XPLR Inter": ["Fast centre strip with knobs for mixed terrain.", "Schnelle Mitte mit Stollen für gemischtes Gelände."],
    "Touareg": ["For rough, rocky and loose tracks.", "Für raue, felsige und lose Wege."],
    "Caracal Race": ["Fast race tyre with a low tread.", "Schneller Rennreifen mit niedrigem Profil."],
    "Aventura": ["Affordable all-rounder from the Dutch brand.", "Günstiger Allrounder der niederländischen Marke."],
    "Gravel Speedero": ["Fast tyre for dry gravel.", "Schneller Reifen für trockenen Schotter."],
    "Gravel Thundero": ["Light all-rounder for changing terrain.", "Leichter Allrounder für wechselndes Gelände."],
    "Gravel Swampero": ["Mud tyre: tall knobs for wet and soft terrain.", "Matschreifen: hohe Stollen für nasses und weiches Gelände."]
  };
  if (TAAL !== "nl") BANDEN.forEach(b => { const v = TYPERING[b.n]; if (v) b.t = v[TAAL === "en" ? 0 : 1]; });

  const PROFIEL = [T("Slick", "Slick", "Slick"), T("Semi-slick", "Semi-slick", "Semi-Slick"), T("Allround", "All-round", "Allround"), T("Grof profiel", "Aggressive tread", "Grobes Profil"), T("Modderprofiel", "Mud tread", "Matschprofil")];
  window.GG_BANDEN = { BANDEN, PROFIEL, MERKEN }; // voor Vraag de Gorilla
  const ONDERGROND = [T("Asfalt", "Tarmac", "Asphalt"), T("Hardpack", "Hardpack", "Fester Schotter"), T("Gemengd", "Mixed", "Gemischt"), T("Los gravel", "Loose gravel", "Loser Schotter"), T("Zand en modder", "Sand and mud", "Sand und Matsch")];
  const STIJL = [T("Race", "Race", "Rennen"), T("Snel", "Fast", "Schnell"), T("Training", "Training", "Training"), T("Toer", "Touring", "Tour"), T("Bikepacking", "Bikepacking", "Bikepacking")];
  const WEER = [T("Droog", "Dry", "Trocken"), T("Wisselend", "Changeable", "Wechselhaft"), T("Nat", "Wet", "Nass")];

  /* ---------- Invoer ---------- */
  const S = { ondergrond: 2, stijl: 2, weer: 1, frame: 0, prioriteit: "balans", budget: 3 };

  /* ---------- Advies: breedte en profiel ---------- */
  function advies() {
    const basis = [36, 40, 42, 45, 48][S.ondergrond];
    const stijlCorr = [-2, -1, 0, 2, 5][S.stijl];
    let midden = basis + stijlCorr + (S.weer === 2 ? 1 : 0);
    // afronden op gangbare maten (35, 38, 40, 42, 45, 50, 55 mm)
    const MATEN = [32, 35, 38, 40, 42, 45, 48, 50, 55];
    const dichtst = x => MATEN.reduce((b, m) => Math.abs(m - x) < Math.abs(b - x) ? m : b, MATEN[0]);
    let van = dichtst(midden - 2), tot = dichtst(midden + 3);
    if (S.frame) { tot = Math.min(tot, S.frame); van = Math.min(van, MATEN.filter(m => m < tot).pop() || tot); midden = Math.min(midden, S.frame); }
    const ideaal = Math.max(0, Math.min(4, Math.round(S.ondergrond * 0.9 + [0, 0.5, 1.2][S.weer] - (S.stijl <= 1 && S.ondergrond <= 2 ? 0.4 : 0))));
    return { midden, van, tot, ideaal };
  }

  /* ---------- Match per band ---------- */
  function scoor(band, a) {
    const ws = [1.0, 0.85, 0.55, 0.3, 0.2][S.stijl];
    const wr = [0.15, 0.2, 0.45, 0.7, 1.0][S.stijl];
    const wg = [0.05, 0.25, 0.55, 0.9, 1.0][S.ondergrond];
    const wm = (S.weer === 2 ? 0.75 : S.weer === 1 ? 0.3 : 0) + (S.ondergrond === 4 ? 0.6 : 0);
    const extra = { snelheid: [0.7, 0, 0, 0], grip: [0, 0.7, 0.3, 0], lek: [0, 0, 0, 0.8], balans: [0, 0, 0, 0] }[S.prioriteit];
    const w = [ws + extra[0], wg + extra[1], wm + extra[2], wr + extra[3]];
    const somW = w.reduce((x, y) => x + y, 0) || 1;
    const kenmerk = band.s.reduce((t, v, i) => t + v * w[i], 0) / somW; // 1..5
    let score = (kenmerk - 1) / 4 * 60;                                  // 0..60
    score += Math.max(0, 40 - Math.abs(band.p - a.ideaal) * 14);          // 0..40 profiel

    // beste breedte binnen het frame, zo dicht mogelijk bij het advies
    const passend = band.b.filter(b => !S.frame || b <= S.frame);
    if (!passend.length) return null;
    const breedte = passend.reduce((best, b) => Math.abs(b - a.midden) < Math.abs(best - a.midden) ? b : best, passend[0]);
    const afwijking = breedte < a.van ? a.van - breedte : breedte > a.tot ? breedte - a.tot : 0;
    score -= afwijking * 3;
    return { band, breedte, score: Math.max(1, Math.min(99, Math.round(score))) };
  }

  function redenen(r, a) {
    const b = r.band, uit = [];
    const stijl = STIJL[S.stijl].toLowerCase(), grond = ONDERGROND[S.ondergrond].toLowerCase();
    if (b.s[0] >= 4 && S.stijl <= 2) uit.push(T("Rolt snel, fijn voor jouw " + stijl + "-tempo", "Rolls fast, nice for your " + stijl + " pace", "Rollt schnell, gut für dein Tempo (" + STIJL[S.stijl] + ")"));
    if (b.s[1] >= 4 && S.ondergrond >= 3) uit.push(T("Veel grip op " + grond, "Lots of grip on " + grond, "Viel Grip auf " + ONDERGROND[S.ondergrond]));
    if (b.s[2] >= 4 && (S.weer === 2 || S.ondergrond === 4)) uit.push(T("Houdt grip in nat weer en modder", "Keeps its grip in wet weather and mud", "Hält Grip bei Nässe und Matsch"));
    if (b.s[3] >= 4 && (S.stijl >= 3 || S.prioriteit === "lek")) uit.push(T("Robuust en lekbestendig", "Tough and puncture-resistant", "Robust und pannensicher"));
    if (Math.abs(b.p - a.ideaal) === 0) uit.push(PROFIEL[b.p] + T(": precies het profiel dat bij je ondergrond past", ": exactly the tread that suits your surface", ": genau das Profil, das zu deinem Untergrund passt"));
    if (r.breedte >= a.van && r.breedte <= a.tot) uit.push(T("Leverbaar in " + r.breedte + " mm, binnen jouw advies", "Available in " + r.breedte + " mm, within your advice", "Erhältlich in " + r.breedte + " mm, innerhalb deiner Empfehlung"));
    else uit.push(T("Dichtstbijzijnde maat is " + r.breedte + " mm", "Closest size is " + r.breedte + " mm", "Nächste Größe ist " + r.breedte + " mm"));
    if (b.prijs === 1) uit.push(T("Voordelig geprijsd", "Good value", "Günstig"));
    return uit.slice(0, 3);
  }

  /* ---------- Tonen ---------- */
  const euro = n => "€".repeat(n) + '<span class="gb-grijs">' + "€".repeat(3 - n) + "</span>";
  function toon() {
    const a = advies();
    $("#gbOndergrondUit").textContent = ONDERGROND[S.ondergrond];
    $("#gbStijlUit").textContent = STIJL[S.stijl];
    $("#gbWeerUit").textContent = WEER[S.weer];

    const breedteTekst = a.van === a.tot ? a.tot + " mm" : a.van + " – " + a.tot + " mm";
    $("#gbBreedte").textContent = breedteTekst;
    $("#gbProfiel").textContent = PROFIEL[a.ideaal];
    const uitleg = [];
    uitleg.push([
      T("Op asfalt rolt een smallere, gladde band het snelst.", "On tarmac a narrower, smooth tyre rolls fastest.", "Auf Asphalt rollt ein schmalerer, glatter Reifen am schnellsten."),
      T("Hardpack is vast en vlak: een snelle band met weinig profiel is genoeg.", "Hardpack is firm and flat: a fast tyre with little tread is enough.", "Fester Schotter ist hart und eben: Ein schneller Reifen mit wenig Profil reicht."),
      T("Op wisselende ondergrond wil je een allrounder: snel op de vaste stukken, grip op de losse.", "On mixed surfaces you want an all-rounder: fast on the firm sections, grip on the loose ones.", "Auf wechselndem Untergrund willst du einen Allrounder: schnell auf festen Abschnitten, Grip auf losen."),
      T("Op los gravel geeft een bredere band met meer profiel controle en comfort.", "On loose gravel a wider tyre with more tread gives control and comfort.", "Auf losem Schotter gibt ein breiterer Reifen mit mehr Profil Kontrolle und Komfort."),
      T("In zand en modder drijft een brede band beter, en grove noppen geven grip.", "In sand and mud a wide tyre floats better, and big knobs give grip.", "In Sand und Matsch schwimmt ein breiter Reifen besser auf, und grobe Stollen geben Grip.")][S.ondergrond]);
    if (S.stijl === 4) uitleg.push(T("Met bagage draag je meer gewicht: kies breder en robuuster.", "With luggage you carry more weight: go wider and tougher.", "Mit Gepäck trägst du mehr Gewicht: Wähle breiter und robuster."));
    else if (S.stijl === 0) uitleg.push(T("Voor racen telt elke watt: zo smal en licht als de ondergrond toelaat.", "For racing every watt counts: as narrow and light as the surface allows.", "Beim Rennen zählt jedes Watt: so schmal und leicht, wie der Untergrund erlaubt."));
    if (S.weer === 2) uitleg.push(T("Bij nat weer helpt meer profiel tegen wegglijden.", "In wet weather more tread helps against slipping.", "Bei Nässe hilft mehr Profil gegen Wegrutschen."));
    if (S.frame) uitleg.push(T("Je frame past banden tot " + S.frame + " mm: daar houden we rekening mee.", "Your frame takes tyres up to " + S.frame + " mm: we take that into account.", "Dein Rahmen passt für Reifen bis " + S.frame + " mm: Das berücksichtigen wir."));
    $("#gbUitleg").textContent = uitleg.join(" ");

    let lijst = BANDEN.filter(b => b.prijs <= S.budget).map(b => scoor(b, a)).filter(Boolean).sort((x, y) => y.score - x.score);
    const top = lijst.slice(0, 6);
    $("#gbAantal").textContent = T(lijst.length + " banden passen bij je frame en budget. Dit zijn de " + top.length + " beste:", lijst.length + " tyres fit your frame and budget. These are the " + top.length + " best:", lijst.length + " Reifen passen zu Rahmen und Budget. Das sind die " + top.length + " besten:");
    $("#gbLijst").innerHTML = top.length ? top.map((r, i) => {
      const b = r.band;
      const andere = b.b.filter(x => x !== r.breedte && (!S.frame || x <= S.frame));
      const gewicht = b.g ? '<span>± ' + b.g[0] + ' g <small>(' + b.g[1] + T(" mm, fabrieksopgave", " mm, manufacturer's figure", " mm, Herstellerangabe") + ')</small></span>' : "";
      return '<li class="gb-band' + (i === 0 ? " gb-band--top" : "") + '">' +
        '<div class="gb-band__kop"><span class="gb-band__match">' + r.score + '%</span><div><span class="gb-band__merk">' + b.m + '</span><h3>' + b.n + '</h3></div></div>' +
        '<p class="gb-band__type">' + b.t + "</p>" +
        '<div class="gb-band__specs"><span class="gb-chip">' + PROFIEL[b.p] + '</span><span class="gb-chip gb-chip--maat">' + T("Kies ", "Choose ", "Wähle ") + r.breedte + " mm</span>" +
        (andere.length ? '<span class="gb-ook">' + T("ook ", "also ", "auch ") + andere.join(", ") + " mm</span>" : "") + "</div>" +
        '<div class="gb-band__meta">' + gewicht + '<span class="gb-prijs" title="' + T("Prijsklasse (indicatie)", "Price class (indication)", "Preisklasse (Richtwert)") + '">' + euro(b.prijs) + "</span></div>" +
        '<ul class="gb-band__waarom">' + redenen(r, a).map(x => "<li>" + x + "</li>").join("") + "</ul>" +
        '<div class="gb-band__links"><a href="' + PRE + '/tools/bandenspanning-calculator/?breedte=' + r.breedte + '" class="gb-knop">' + T("Bandenspanning voor ", "Tyre pressure for ", "Reifendruck für ") + r.breedte + " mm →</a>" +
        '<a href="' + MERKEN[b.m] + '" target="_blank" rel="noopener">' + T("Site van ", "Website of ", "Website von ") + b.m + " ↗</a>" +
        (b.test ? '<a href="https://www.bicyclerollingresistance.com/cx-gravel-reviews/' + b.test + '" target="_blank" rel="noopener">' + T("Rolweerstandstest", "Rolling resistance test", "Rollwiderstandstest") + " ↗</a>" : "") +
        "</div></li>";
    }).join("") : '<li class="gb-leeg">' + T("Geen band gevonden die in je frame past. Kies een ruimere maximale breedte of een hoger budget.", "No tyre found that fits your frame. Choose a larger maximum width or a higher budget.", "Kein Reifen gefunden, der in deinen Rahmen passt. Wähle eine größere Maximalbreite oder ein höheres Budget.") + "</li>";
  }

  /* ---------- Schuifjes en keuzes ---------- */
  [["#gbOndergrond", "ondergrond"], ["#gbStijl", "stijl"], ["#gbWeer", "weer"]].forEach(([id, veld]) => {
    const el = $(id);
    el.addEventListener("input", () => { S[veld] = Number(el.value); el.setAttribute("aria-valuetext", [ONDERGROND, STIJL, WEER][["ondergrond", "stijl", "weer"].indexOf(veld)][S[veld]]); toon(); });
  });
  $("#gbFrame").addEventListener("change", e => { S.frame = Number(e.target.value); toon(); });
  wortel.querySelectorAll(".gb-chips").forEach(groep => {
    groep.addEventListener("click", e => {
      const knop = e.target.closest("button");
      if (!knop) return;
      groep.querySelectorAll("button").forEach(k => { k.classList.toggle("is-aan", k === knop); k.setAttribute("aria-pressed", k === knop); });
      S[groep.dataset.veld] = groep.dataset.veld === "budget" ? Number(knop.dataset.waarde) : knop.dataset.waarde;
      toon();
    });
  });
  // schaalwoorden onder de schuifjes zijn klikbaar
  wortel.querySelectorAll(".gb-schaal button").forEach(knop => {
    knop.addEventListener("click", () => {
      const schuif = $(knop.parentElement.dataset.voor);
      schuif.value = knop.dataset.stand;
      schuif.dispatchEvent(new Event("input"));
    });
  });

  toon();
})();
