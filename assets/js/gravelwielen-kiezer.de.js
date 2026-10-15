/* gravelwielen-kiezer — gemaakt door .claude/kiezer-importeren.ps1 uit gravelwielen-kiezer.html */
/* =========================================================================
   GRAVELWIELEN — geverifieerde dataset (specs van fabrikant/reviews, juni 2026)
   Prijzen bij benadering (~) in euro; gewicht = opgegeven setgewicht per paar.
   material: carbon|aluminium · use: aero|allround|adventure
   freehubs: HG (Shimano) · XDR (SRAM) · N3W (Campagnolo) · MS (Micro Spline)
   ========================================================================= */
const wheels = [
  /* ---------- DT Swiss ---------- */
  { brand:"DT Swiss", model:"GRC 1100 Dicut 30", material:"carbon", use:"aero", depth:30, intW:24, weight:1350, price:2500, size:"700c", hub:"180 (Ratchet EXP 36t)", freehubs:["HG","XDR","N3W","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Flaggschiff-Gravellaufrad mit 180er-Nabe und aerodynamischer 30-mm-Felge mit 24 mm Innenbreite. Schnell, steif und leicht für Gravelrennen.", url:"https://www.dtswiss.com/en/wheels/wheels-road/gravel/grc-1100-dicut" },
  { brand:"DT Swiss", model:"GRC 1100 Dicut 50", material:"carbon", use:"aero", depth:50, intW:24, weight:1450, price:2500, size:"700c", hub:"180 (Ratchet EXP 36t)", freehubs:["HG","XDR","N3W","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Die tiefe 50-mm-Variante des Topmodells: maximaler Aero-Gewinn in der Ebene, mit derselben leichten 180er-Nabe. Für schnelle, flache Gravelrennen.", url:"https://www.dtswiss.com/en/wheels/wheels-road/gravel/grc-1100-dicut" },
  { brand:"DT Swiss", model:"GRC 1400 Dicut 30", material:"carbon", use:"allround", depth:30, intW:24, weight:1450, price:2050, size:"700c", hub:"240 (Ratchet EXP 36t)", freehubs:["HG","XDR","N3W","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Vielseitiges 30-mm-Carbonlaufrad mit der bewährten 240er-Nabe. Leichte Allround-Wahl, die mit fast jedem Gravelreifen klarkommt.", url:"https://www.dtswiss.com/en/wheels/wheels-road/gravel/grc-1400-dicut" },
  { brand:"DT Swiss", model:"GRC 1400 Dicut 50", material:"carbon", use:"aero", depth:50, intW:24, weight:1550, price:2050, size:"700c", hub:"240 (Ratchet EXP 36t)", freehubs:["HG","XDR","N3W","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Tiefe 50-mm-Aerofelge mit 240er-Nabe: Tempo in der Ebene zu einem günstigeren Preis als die 1100er-Serie.", url:"https://www.dtswiss.com/en/wheels/wheels-road/gravel/grc-1400-dicut" },
  { brand:"DT Swiss", model:"GR 1600 Spline 25", material:"aluminium", use:"adventure", depth:25, intW:24, weight:1748, price:599, size:"700c", hub:"350 (Ratchet LN 36t)", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:57, year:2024, region:"nl", desc:"Robustes Aluminium-Gravellaufrad mit 24 mm Innenbreite und der zuverlässigen 350er-Nabe. Unverwüstlich und günstig für Abenteuer.", url:"https://www.dtswiss.com/en/wheels/wheels-road/gravel/gr-1600-spline" },
  { brand:"DT Swiss", model:"G 1800 Spline 25", material:"aluminium", use:"adventure", depth:25, intW:24, weight:1835, price:429, size:"700c", hub:"370 (Ratchet 18t)", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:57, year:2024, region:"nl", desc:"Bezahlbares, robustes Aluminium-Einstiegslaufrad mit 24 mm Innenbreite. Ideales erstes Upgrade gegenüber namenlosen Serienlaufrädern.", url:"https://www.dtswiss.com/en/wheels/wheels-road/gravel/g-1800-spline" },

  /* ---------- Zipp ---------- */
  { brand:"Zipp", model:"303 XPLR SW", material:"carbon", use:"aero", depth:54, intW:32, extW:40, weight:1496, price:1800, size:"700c", hub:"ZR1 (6 pawls)", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:40, tireMax:54, year:2024, region:"nl", desc:"Extrem breite 32-mm-Innenfelge und 54 mm Höhe: aerodynamisch mit breiten 40-44-mm-Reifen. Hookless, leicht und der neue Standard im Gravelrennen.", url:"https://www.sram.com/en/zipp/road/series/303-xplr" },
  { brand:"Zipp", model:"303 XPLR S", material:"carbon", use:"aero", depth:54, intW:32, extW:40, weight:1610, price:1200, size:"700c", hub:"ZR1 (3 pawls)", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:40, tireMax:54, year:2024, region:"nl", desc:"Dieselbe superbreite 32-mm-Hookless-Felge wie das SW, mit einfacherer Nabe für Hunderte Euro weniger. Viel Aerolaufrad fürs Geld.", url:"https://www.sram.com/en/zipp/road/series/303-xplr" },
  { brand:"Zipp", model:"303 Firecrest", material:"carbon", use:"allround", depth:40, intW:25, weight:1353, price:1900, size:"700c", hub:"ZR1", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:30, tireMax:47, year:2023, region:"nl", desc:"Leichter 40-mm-Allround-Hookless-Laufradsatz für All-Road und Gravel. Schnell, komfortabel und zu Hause auf Asphalt wie auf losem Untergrund.", url:"https://www.sram.com/en/zipp/road/series/303" },
  { brand:"Zipp", model:"303 S", material:"carbon", use:"allround", depth:45, intW:23, weight:1540, price:1000, size:"700c", hub:"76/176", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:28, tireMax:45, year:2023, region:"nl", desc:"Zugänglicher Carbon-Einstieg von Zipp: 45 mm hoch, hookless und vielseitig. Der günstigste Weg zu einem Carbon-Gravellaufrad von Zipp.", url:"https://www.sram.com/en/zipp/road/series/303-s" },
  { brand:"Zipp", model:"101 XPLR", material:"carbon", use:"adventure", depth:27, intW:27, weight:1465, price:1100, size:"700c", hub:"ZR1", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:40, tireMax:57, year:2023, region:"nl", desc:"Besonderes, einwandiges, vom Motorrad inspiriertes Design, das als Dämpfer wirkt. 27 mm breit und nachgiebig: Komfort und Grip in rauem Gelände.", url:"https://www.sram.com/en/zipp/road/series/101-xplr" },

  /* ---------- Roval ---------- */
  { brand:"Roval", model:"Terra CLX II", material:"carbon", use:"allround", depth:25, intW:25, weight:1250, price:2800, size:"700c", hub:"Roval LRD / DT-internals", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:28, tireMax:47, year:2024, region:"nl", desc:"Mit ~1.250 g eines der leichtesten Gravellaufräder überhaupt. 25 mm Innenbreite und blitzschnell: ein Kletterwunder für Geldbeutel, die es verkraften.", url:"https://www.specialized.com/us/en/terra-clx-ii/p/218340" },
  { brand:"Roval", model:"Terra CL", material:"carbon", use:"allround", depth:25, intW:25, weight:1410, price:1500, size:"700c", hub:"DT 350-internals", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:28, tireMax:47, year:2023, region:"nl", desc:"Die Arbeitstier-Version des Terra: ~100 g schwerer als das CLX, aber deutlich günstiger. Leichte, schnelle Allround-Gravellaufräder.", url:"https://www.specialized.com/us/en/roval-terra-cl-wheelset/p/174204" },
  { brand:"Roval", model:"Terra C", material:"carbon", use:"allround", depth:25, intW:25, weight:1620, price:1100, size:"700c", hub:"DT 370-internals", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:28, tireMax:47, year:2023, region:"nl", desc:"Einstiegs-Carbon von Roval mit DT-370-Naben. Trotzdem 25 mm breit und steif, für alle, die bezahlbares Carbon suchen.", url:"https://www.specialized.com/us/en/roval-terra-c-wheelset/p/199416" },

  /* ---------- Reserve ---------- */
  { brand:"Reserve", model:"40|44 GR", material:"carbon", use:"aero", depth:42, intW:27, weight:1475, price:1900, size:"700c", hub:"Reserve / DT-internals", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"centerlock", tireMin:38, tireMax:50, year:2024, region:"nl", desc:"Ultrabreite 27-mm-Innenfelge mit Semi-Hooked-Flanke für einfache Tubeless-Montage und Reifen bis 50 mm. Aero, mit lebenslanger Garantie.", url:"https://reservewheels.com/products/40-44-gr" },

  /* ---------- ENVE ---------- */
  { brand:"ENVE", model:"G23", material:"carbon", use:"allround", depth:25, intW:23, weight:1305, price:2600, size:"700c", hub:"Industry Nine (101)", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:45, year:2023, region:"nl", desc:"Superleichte 23-mm-Gravellaufräder (1.305 g) mit i9-Nabe und ENVEs berühmter Haltbarkeit. Gemacht für 35-45-mm-Reifen und hartes Fahren.", url:"https://enve.com/products/g23" },
  { brand:"ENVE", model:"G27", material:"carbon", use:"adventure", depth:25, intW:27, weight:1330, price:2600, size:"700c", hub:"Industry Nine (101)", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"centerlock", tireMin:42, tireMax:64, year:2023, region:"nl", desc:"Der breitere 27-mm-Bruder des G23: gemacht für breite Reifen von 42 mm bis 2,5\". Leichtes Abenteuer mit maximalem Grip und Komfort.", url:"https://enve.com/products/g27" },
  { brand:"ENVE", model:"Foundation AG28", material:"carbon", use:"adventure", depth:30, intW:25, weight:1480, price:1600, size:"700c", hub:"ENVE (Foundation)", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"ENVE-Qualität zu einem zugänglicheren Preis: 25 mm breite All-Gravel-Felge, ideal als vielseitiger Abenteuersatz.", url:"https://enve.com/products/foundation-ag28" },

  /* ---------- Hunt ---------- */
  { brand:"Hunt", model:"42 Limitless Gravel Aero", material:"carbon", use:"aero", depth:42, intW:25, extW:36, weight:1490, price:1349, size:"700c", hub:"Hunt RapidEngage", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:38, tireMax:50, year:2024, region:"nl", desc:"Aero-optimiert für 38-40-mm-Reifen, mit 36 mm breiter U-Form für Stabilität bei Seitenwind. Viel Aerolaufrad für relativ wenig Geld.", url:"https://www.huntbikewheels.com/products/hunt-42-limitless-gravel-aero-wheelset" },
  { brand:"Hunt", model:"42 Limitless Gravel Adventure", material:"carbon", use:"adventure", depth:42, intW:25, extW:36, weight:1560, price:1199, size:"700c", hub:"Hunt RapidEngage", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:40, tireMax:55, year:2024, region:"nl", desc:"Stabiler gebaute Version des 42 Limitless für raues Gelände und Gepäck. Aerodynamisch und abenteuerfest.", url:"https://www.huntbikewheels.com/products/hunt-42-limitless-gravel-adventure-wheelset" },
  { brand:"Hunt", model:"35 Carbon Gravel", material:"carbon", use:"allround", depth:35, intW:25, weight:1499, price:999, size:"700c", hub:"Hunt Ratchet", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:64, year:2024, region:"nl", desc:"Unter 1.000 € ein kompletter, 25 mm breiter Carbonsatz mit Ratchet-Nabe. Optimiert für 40 mm: DER Preis-Leistungs-Allrounder aus Carbon.", url:"https://www.huntbikewheels.com/products/hunt-35-carbon-gravel-wheelset" },
  { brand:"Hunt", model:"25 Carbon Gravel X-Wide", material:"carbon", use:"adventure", depth:25, intW:27, weight:1505, price:1099, size:"700c", hub:"Hunt Ratchet", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:35, tireMax:65, year:2024, region:"nl", desc:"Flache, superbreite 27-mm-Hookless-Felge für die neuesten breiten Gravel- und leichten MTB-Reifen (35-65 mm). Grip und Komfort zuerst.", url:"https://www.huntbikewheels.com/products/hunt-25-carbon-gravel-x-wide-wheelset" },
  { brand:"Hunt", model:"4 Season Gravel Disc X-Wide", material:"aluminium", use:"adventure", depth:19, intW:25, extW:29, weight:1689, price:649, size:"700c", hub:"Hunt 4-pawl", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:55, year:2024, region:"nl", desc:"Breites (25 mm), robustes Aluminium-Allwetterlaufrad für abenteuerliche Touren. Zuverlässig, bezahlbar und gemacht für breite Reifen.", url:"https://www.huntbikewheels.com/products/hunt-4-season-gravel-disc-x-wide-wheelset" },
  { brand:"Hunt", model:"650b Adventure Carbon X-Wide", material:"carbon", use:"adventure", depth:25, intW:30, weight:1560, price:1099, size:"650b", hub:"Hunt Ratchet", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:47, tireMax:70, year:2024, region:"nl", desc:"Kleinere 650b-Größe mit sehr breiter 30-mm-Felge für extra breite Reifen. Maximaler Komfort und Grip im rauesten Gelände.", url:"https://www.huntbikewheels.com/products/hunt-650b-adventure-carbon-x-wide-wheelset" },

  /* ---------- Scope ---------- */
  { brand:"Scope", model:"R4.G", material:"carbon", use:"aero", depth:45, intW:28, extW:38, weight:1439, price:1698, size:"700c", hub:"Scope (ratchet)", freehubs:["HG","XDR","N3W"], hookless:true, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Niederländische Marke: 45 mm hohe Gravel-Aerofelge mit 1.439 g. Schnell und steif, mit auffälligen Farboptionen.", url:"https://www.scopecycling.com/gravel/" },
  { brand:"Scope", model:"O2", material:"carbon", use:"allround", depth:30, intW:25, weight:1380, price:1398, size:"700c", hub:"Scope", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:55, year:2023, region:"nl", desc:"Leichter (1.380 g), breiter XC/Gravel-Carbonsatz. Vielseitig einsetzbar von schnellem Gravel bis leichtem MTB.", url:"https://www.scopecycling.com/gravel/" },

  /* ---------- Fulcrum ---------- */
  { brand:"Fulcrum", model:"Rapid Red Carbon DB", material:"carbon", use:"allround", depth:30, intW:25, weight:1490, price:1536, size:"700c", hub:"Fulcrum (2-to-1)", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"both", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Einzigartiges asymmetrisches Profil (vorne und hinten unterschiedlich) mit 25 mm Innenbreite. Schnelles, steifes und schön verarbeitetes Carbon von Fulcrum.", url:"https://www.fulcrumwheels.com/en/wheels/gravel-solutions/RAPID-RED-CARBON" },
  { brand:"Fulcrum", model:"Rapid Red 3 DB", material:"aluminium", use:"adventure", depth:24, intW:24, weight:1610, price:380, size:"700c", hub:"Fulcrum", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"both", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Überraschend leichtes (1.610 g) Aluminium-Gravellaufrad mit 24 mm Innenbreite. Starkes Preis-Leistungs-Verhältnis als erstes Upgrade.", url:"https://www.fulcrumwheels.com/en/wheels/gravel-solutions" },
  { brand:"Fulcrum", model:"Rapid Red 5 DB", material:"aluminium", use:"adventure", depth:22, intW:22, weight:1745, price:300, size:"700c", hub:"Fulcrum", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"both", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Bezahlbares, solides Aluminium-Gravellaufrad. Tubeless-ready und geeignet für den Arbeitsweg und Wochenendabenteuer.", url:"https://www.fulcrumwheels.com/en/wheels/gravel-solutions/rapid-red-5-db" },
  { brand:"Fulcrum", model:"Rapid Red 900 DB", material:"aluminium", use:"adventure", depth:21, intW:21, weight:1850, price:250, size:"700c", hub:"Fulcrum", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Der günstigste Gravelsatz von Fulcrum: einfach, robust und tubeless-ready. Prima Ersatz für verschlissene Serienlaufräder.", url:"https://www.fulcrumwheels.com/en/wheels/gravel-solutions" },
  { brand:"Swiss Side", model:"Gravon Carbon 500 V2", material:"carbon", use:"aero", depth:50, intW:24, weight:1620, price:1199, size:"700c", hub:"DT Swiss 350", freehubs:["HG","MS","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:65, year:2026, region:"nl", desc:"Schweizer Aero-Gravellaufräder (2026): 50 mm hohe Carbonfelge mit Haken, DT-Swiss-350-Naben und 24 Straightpull-Speichen. Gemacht für 40- bis 45-mm-Reifen; 1.199 € direkt bei Swiss Side, 1.439 € im Handel.", url:"https://swissside.com/products/gravon-carbon-500-2026-front-wheel" },
  { brand:"Miche", model:"Graff Aero 48", material:"carbon", use:"aero", depth:48, intW:27, weight:1525, price:1300, size:"700c", hub:"Miche CX-Graff", freehubs:["N3W","HG","MS","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:35, tireMax:60, year:2026, region:"nl", desc:"Italienische Carbon-Rennlaufräder für Gravel: 48 mm hoch, 27 mm Innenbreite (hakenlos) und 1.525 g. Für Reifen von 35 bis 60 mm.", url:"https://www.miche.it/en/products/wheels/gravel/graff-aero-48" },
  { brand:"Ritchey", model:"WCS Zeta GX", material:"aluminium", use:"adventure", depth:19, intW:25, weight:1840, price:548, size:"700c", hub:"Ritchey WCS", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"centerlock", tireMin:30, tireMax:50, year:2024, region:"nl", desc:"Robuste Alu-Gravellaufräder mit 25 mm Innenbreite und 28 DT-Swiss-Speichen pro Laufrad. Solide für Bikepacking und den Alltag, auch in 650b.", url:"https://ritcheylogic.com/" },
];

wheels.push(
  /* ---------- Shimano GRX ---------- */
  { brand:"Shimano", model:"GRX WH-RX880", material:"carbon", use:"allround", depth:32, intW:25, weight:1397, price:1700, size:"700c", hub:"Shimano (Scylence-stil)", freehubs:["HG","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Shimanos erstes Carbon-Gravellaufrad: leicht (1.397 g), 25 mm breit und flüsterleise. Achtung: nur Shimano-Freilauf, kein SRAM XDR.", url:"https://bike.shimano.com/en-EU/product/component/grx-rx820/WH-RX880.html" },
  { brand:"Shimano", model:"GRX WH-RX870", material:"carbon", use:"allround", depth:32, intW:24, weight:1461, price:1400, size:"700c", hub:"Shimano", freehubs:["HG","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Etwas günstigerer Carbon-Bruder des RX880, mit derselben leisen Nabe. Zuverlässiges Shimano-Carbon für Allround-Gravel.", url:"https://bike.shimano.com/en-EU/product/component/grx-rx820.html" },
  { brand:"Shimano", model:"GRX WH-RX570", material:"aluminium", use:"adventure", depth:24, intW:22, weight:1720, price:480, size:"700c", hub:"Shimano", freehubs:["HG","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2022, region:"nl", desc:"Solides Aluminium-GRX-Einstiegslaufrad: tubeless-ready, robust und bezahlbar. Das klassische erste Upgrade für Shimano-Fahrer.", url:"https://bike.shimano.com/en-EU/product/component/grx-rx570.html" },

  /* ---------- Cadex ---------- */
  { brand:"Cadex", model:"AR 35 Disc", material:"carbon", use:"aero", depth:35, intW:22, weight:1270, price:3000, size:"700c", hub:"Cadex R (carbon spokes)", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:30, tireMax:45, year:2023, region:"nl", desc:"Spektakulär leichter (1.270 g) All-Road/Gravel-Satz mit Carbonspeichen und erstklassiger Steifigkeit. Cadex ist die Premiummarke von Giant.", url:"https://www.cadex-cycling.com/global/showcase/cadex-ar-35-wheels" },

  /* ---------- Newmen ---------- */
  { brand:"Newmen", model:"Advanced G.34", material:"carbon", use:"allround", depth:34, intW:24, weight:1330, price:898, size:"700c", hub:"Newmen Gen2.1", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Auffallend leichtes (1.330 g) Carbon für unter 900 € — hervorragendes Preis-Leistungs-Verhältnis. Deutsches Design mit schneller Nabe.", url:"https://www.newmen-components.de/en/Gravel-Wheels" },
  { brand:"Newmen", model:"Streem G.62", material:"carbon", use:"aero", depth:62, intW:25, extW:45, weight:1530, price:1390, size:"700c", hub:"Newmen Gen2.1", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Ultratief (62 mm) und breit (45 mm außen) für erstklassige Aerodynamik — zum halben Preis von ENVEs tiefstem Modell. Für Tempojäger in der Ebene.", url:"https://www.newmen-components.de/en/Gravel-Wheels" },
  { brand:"Newmen", model:"Streem G.62 (carbon spokes)", material:"carbon", use:"aero", depth:62, intW:25, extW:45, weight:1480, price:1690, size:"700c", hub:"Newmen Gen2.1", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Dieselbe tiefe Aerofelge wie das Streem G.62, aber mit Carbonspeichen für 50 g weniger Gewicht und extra Steifigkeit.", url:"https://www.newmen-components.de/en/Gravel-Wheels" },

  /* ---------- Mavic ---------- */
  { brand:"Mavic", model:"Allroad SL Carbon", material:"carbon", use:"allround", depth:30, intW:25, weight:1490, price:1600, size:"700c", hub:"Instant Drive 360", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:30, tireMax:64, year:2024, region:"nl", desc:"Mavics UST-Hookless-Carbon-Allroad-Laufrad: luftdicht tubeless und 25 mm breit für Reifen bis 64 mm. Vielseitig und schnell.", url:"https://www.mavic.com/en-int/p/allroad-sl-carbon-rr2308" },
  { brand:"Mavic", model:"Allroad SL", material:"aluminium", use:"adventure", depth:22, intW:25, weight:1655, price:900, size:"700c", hub:"Instant Drive 360", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:30, tireMax:64, year:2024, region:"nl", desc:"Klassisches, zuverlässiges Aluminium mit luftdichter UST-Tubeless-Felge. 25 mm breit: ein solider Alleskönner für jeden Tag.", url:"https://www.mavic.com/en-int/p/allroad-sl-rr2306" },
  { brand:"Mavic", model:"Allroad S Carbon", material:"carbon", use:"allround", depth:28, intW:25, weight:1560, price:1100, size:"700c", hub:"Instant Drive 360", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:30, tireMax:64, year:2024, region:"nl", desc:"Zugängliches Carbon von Mavic mit UST-Hookless-Felge. Alleskönner-Leistung zu einem attraktiven Preis.", url:"https://www.mavic.com/en-int/c/road/wheels" },
  { brand:"Mavic", model:"Allroad", material:"aluminium", use:"adventure", depth:22, intW:22, weight:1730, price:550, size:"700c", hub:"Instant Drive 360", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:30, tireMax:50, year:2024, region:"nl", desc:"Bezahlbarer Aluminium-Einstieg mit Mavics UST-Tubeless-Zuverlässigkeit. Stabiler Basissatz für Gravel und All-Road.", url:"https://www.mavic.com/en-int/c/road/wheels" },

  /* ---------- Vision ---------- */
  { brand:"Vision", model:"SC 30 AGX Disc", material:"carbon", use:"allround", depth:30, intW:23, weight:1560, price:1300, size:"700c", hub:"Vision", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:30, tireMax:50, year:2023, region:"nl", desc:"Vielseitiger, robuster 30-mm-Carbonsatz von Vision (FSA). Guter Allrounder für alle, die zuverlässiges Carbon suchen.", url:"https://shop.visiontechusa.com/en/discipline/gravel" },
  { brand:"Vision", model:"Team 30 i23 Disc", material:"aluminium", use:"adventure", depth:30, intW:23, weight:1750, price:450, size:"700c", hub:"Vision", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:30, tireMax:50, year:2023, region:"nl", desc:"Preisbewusster Aluminium-Gravelsatz mit Semi-Aero-30-mm-Felge. Tubeless-ready und ein solides erstes Upgrade.", url:"https://shop.visiontechusa.com/en/discipline/gravel" },

  /* ---------- Bontrager ---------- */
  { brand:"Bontrager", model:"Aeolus Pro 3V TLR", material:"carbon", use:"adventure", depth:28, intW:25, weight:1575, price:1300, size:"700c", hub:"Rapid Drive 108", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:55, year:2023, region:"nl", desc:"Superbreite 25-mm-Felge mit schneller Rapid-Drive-108-Nabe und Platz für Reifen bis 55 mm. Der Gravel-Allrounder von Trek/Bontrager.", url:"https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-wheels/road-bike-wheels/bontrager-aeolus-pro-3v-tlr-disc-road-wheel/p/27195/" },
  { brand:"Bontrager", model:"Aeolus Elite 35V", material:"carbon", use:"allround", depth:35, intW:23, weight:1630, price:1100, size:"700c", hub:"Bontrager", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:30, tireMax:45, year:2023, region:"nl", desc:"Bezahlbarerer 35-mm-Carbonsatz, oft am Trek Checkpoint zu sehen. Vielseitig für All-Road und leichteres Gravel.", url:"https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-wheels/" },
  { brand:"Bontrager", model:"Paradigm Comp 25 TLR", material:"aluminium", use:"adventure", depth:21, intW:25, weight:1800, price:400, size:"700c", hub:"Bontrager", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Breiter (25 mm) Aluminium-Tubeless-Satz, robust und bezahlbar. Der typische Serien-Satz an Gravelbikes — prima als solider Ersatz.", url:"https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-wheels/" },

  /* ---------- Stan's NoTubes ---------- */
  { brand:"Stan's NoTubes", model:"Grail CB7", material:"carbon", use:"allround", depth:24, intW:23, weight:1360, price:2000, size:"700c", hub:"Stan's / DT-internals", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:50, year:2023, region:"nl", desc:"Von den Tubeless-Pionieren: leichter (1.360 g) Carbon-Gravelsatz mit Niederdruck-Felgenprofil für optimalen Grip und Komfort.", url:"https://www.notubes.com/collections/grail" },
  { brand:"Stan's NoTubes", model:"Grail MK3", material:"aluminium", use:"adventure", depth:20, intW:22, weight:1675, price:700, size:"700c", hub:"Neo / DT-internals", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:50, year:2023, region:"nl", desc:"Bewährter Aluminium-Gravelsatz mit Stan's berühmtem Tubeless-Felgenbett. Einfach zu montieren und jahrelang zuverlässig.", url:"https://www.notubes.com/collections/grail" },
  { brand:"Stan's NoTubes", model:"Grail S2", material:"aluminium", use:"adventure", depth:20, intW:21, weight:1750, price:450, size:"700c", hub:"Stan's", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:50, year:2023, region:"nl", desc:"Günstiger Aluminium-Einstieg mit dem Grail-Felgenprofil. Zuverlässiger Tubeless-Satz für preisbewusste Abenteurer.", url:"https://www.notubes.com/collections/grail" },

  /* ---------- Easton ---------- */
  { brand:"Easton", model:"EC90 AX", material:"carbon", use:"allround", depth:28, intW:24, weight:1470, price:1600, size:"700c", hub:"Vault", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Komfortables, fähiges und effizientes Carbon mit der bewährten Vault-Nabe. Vielseitig in jedem Gelände.", url:"https://eastoncycling.com/products/ec90-ax-wheelset" },
  { brand:"Easton", model:"EA90 AX", material:"aluminium", use:"adventure", depth:24, intW:24, weight:1625, price:850, size:"700c", hub:"Vault", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Premium-Aluminium-Gravelsatz mit 24 mm Innenbreite und der schnellen Vault-Nabe. Leicht für Alu und sehr solide.", url:"https://eastoncycling.com/products/ea90-ax-wheelset" },
  { brand:"Easton", model:"EC70 AX", material:"carbon", use:"allround", depth:25, intW:24, weight:1560, price:1100, size:"700c", hub:"Easton", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Zugänglicheres Carbon von Easton: dieselbe 24-mm-Breite wie das EC90 für weniger Geld. Cleverer Einstieg ins Carbon-Gravel.", url:"https://eastoncycling.com/products/ec70-ax-wheelset" },
  { brand:"Easton", model:"EA70 AX", material:"aluminium", use:"adventure", depth:24, intW:24, weight:1750, price:600, size:"700c", hub:"Easton", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Bezahlbares Aluminium mit 24 mm Innenbreite. Robustes, tubeless-readyes Arbeitstier für täglichen Gravelspaß.", url:"https://eastoncycling.com/collections/wheels" },

  /* ---------- Parcours ---------- */
  { brand:"Parcours", model:"Alta", material:"carbon", use:"aero", depth:36, intW:25, weight:1500, price:1049, size:"700c", hub:"Parcours / DT-internals", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Breite, aerodynamische Hookless-IMPACT+-Carbonfelge für unter 1.100 €. Schlagfestes Carbon mit starkem Preis-Leistungs-Verhältnis.", url:"https://www.parcours.cc/products/alta" },
  { brand:"Parcours", model:"Alta 650b", material:"carbon", use:"adventure", depth:32, intW:25, weight:1460, price:1049, size:"650b", hub:"Parcours / DT-internals", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:42, tireMax:60, year:2024, region:"nl", desc:"Die 650b-Version des Alta für extra breite Reifen und maximalen Komfort. Leichter, schlagfester Abenteuersatz.", url:"https://www.parcours.cc/products/alta" },

  /* ---------- Princeton CarbonWorks ---------- */
  { brand:"Princeton", model:"GRit 4540", material:"carbon", use:"aero", depth:45, intW:24, weight:1526, price:2900, size:"700c", hub:"Tune / DT-internals", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2023, region:"nl", desc:"Die charakteristische gewellte Felge (40-45 mm) von Princeton für erstklassige Aerodynamik und Steifigkeit. Handgebaut, exklusiv und schnell.", url:"https://www.princetoncarbon.com/product/grit-4540/" }
);

wheels.push(
  /* ---------- Industry Nine ---------- */
  { brand:"Industry Nine", model:"1/1 Ultralite Carbon Gravel", material:"carbon", use:"allround", depth:28, intW:24, weight:1440, price:2000, size:"700c", hub:"1/1 (90 POE)", freehubs:["HG","XDR","N3W","MS"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Blitzschneller Nabeneingriff (90 Rastpunkte) und leichte Carbonfelge. Direktes Gefühl bei jedem Tritt — beliebt bei technischen Fahrern.", url:"https://industrynine.com/wheels/road/1-1-ul-carbon-gravel/" },
  { brand:"Industry Nine", model:"GRCX TRA (alloy)", material:"aluminium", use:"adventure", depth:24, intW:25, weight:1540, price:1400, size:"700c", hub:"1/1 (90 POE)", freehubs:["HG","XDR","N3W","MS"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:55, year:2024, region:"nl", desc:"Überraschend leichtes (1.540 g) Aluminium mit der superschnellen 1/1-Nabe. Unverwüstlich auf Schotterwegen und Singletrails.", url:"https://industrynine.com/wheels/performance-gravel" },

  /* ---------- HED ---------- */
  { brand:"HED", model:"Emporia GA Pro", material:"carbon", use:"allround", depth:25, intW:25, weight:1410, price:2300, size:"700c", hub:"HED Sonic", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Leichter (1.410 g), breiter 25-mm-Carbonsatz, in den USA von Hand gebaut. Premium-Gravel-Allrounder mit dem Ruf von HED.", url:"https://store.hedcycling.com/emporia-ga-pro/" },
  { brand:"HED", model:"Emporia GC3 Pro", material:"carbon", use:"aero", depth:30, intW:25, weight:1490, price:2200, size:"700c", hub:"HED Sonic", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Etwas tiefere (30 mm) Aero-Version des Emporia für alle, die Tempo in der Ebene suchen. Robust und made in USA.", url:"https://store.hedcycling.com/emporia-gc3-pro/" },
  { brand:"HED", model:"Emporia GA Performance", material:"aluminium", use:"adventure", depth:25, intW:25, weight:1625, price:900, size:"700c", hub:"HED", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:55, year:2023, region:"nl", desc:"Robuster, breiter 25-mm-Aluminium-Gravelsatz. Stark und zuverlässig für abenteuerliche Touren mit breiten Reifen.", url:"https://store.hedcycling.com/emporia-ga-performance/" },

  /* ---------- Campagnolo ---------- */
  { brand:"Campagnolo", model:"Levante", material:"carbon", use:"allround", depth:30, intW:25, weight:1477, price:1575, size:"700c", hub:"Campagnolo (N3W)", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"both", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Campagnolos erstes echtes Gravellaufrad: wunderschön verarbeitetes 25-mm-Carbon, serienmäßig mit N3W-Freilauf u. a. für Ekar. Fast zu schön, um es schmutzig zu machen.", url:"https://www.campagnolo.com/us-en/levante/WWGLEVANTE.html" },

  /* ---------- Crankbrothers ---------- */
  { brand:"Crankbrothers", model:"Synthesis Gravel Carbon", material:"carbon", use:"adventure", depth:25, intW:25, weight:1547, price:1600, size:"700c", hub:"Industry Nine 101", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:55, year:2023, region:"nl", desc:"Vorder- und Hinterrad mit unterschiedlicher Steifigkeit (Synthesis-Philosophie) für optimalen Grip und Kontrolle. MTB-DNA auf Gravel.", url:"https://www.crankbrothers.com/collections/synthesis-wheels" },

  /* ---------- Winspace ---------- */
  { brand:"Winspace", model:"Lún GRAPID 700", material:"carbon", use:"allround", depth:40, intW:25, weight:1413, price:900, size:"700c", hub:"Winspace (ratchet)", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Direktvertrieb: leicht (1.400 g), 40 mm hoch und breit zu einem günstigen Preis. Viel Carbonlaufrad fürs Geld.", url:"https://www.winspace.cc/products/lun-grapid-700-gravel-wheelset" },

  /* ---------- FFWD ---------- */
  { brand:"FFWD", model:"Drift", material:"carbon", use:"allround", depth:30, intW:25, weight:1490, price:1300, size:"700c", hub:"FFWD / DT-internals", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Niederländische Marke (Fast Forward): vielseitiger, 25 mm breiter Gravelsatz mit 30-mm-Felge. Allround-Carbon für niederländische Fahrer.", url:"https://www.ffwdwheels.com/en/gravel" },

  /* ---------- WTB ---------- */
  { brand:"WTB", model:"Proterra Light i25", material:"carbon", use:"adventure", depth:23, intW:25, weight:1500, price:1500, size:"700c", hub:"WTB", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:38, tireMax:60, year:2023, region:"nl", desc:"Vom Reifenspezialisten: breite 25-mm-Carbonfelge, abgestimmt auf die eigenen breiten Gravelreifen von WTB. Komfort und Grip zuerst.", url:"https://www.wtb.com/collections/wheels" },
  { brand:"WTB", model:"Proterra Tough i30", material:"aluminium", use:"adventure", depth:23, intW:30, weight:1900, price:500, size:"700c", hub:"WTB", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:42, tireMax:65, year:2023, region:"nl", desc:"Extra breite (30 mm), knallharte Aluminiumfelge für härtestes Bikepacking und rauestes Gelände. Breite Reifen bauen darauf schön auf.", url:"https://www.wtb.com/collections/wheels" },

  /* ---------- Hope ---------- */
  { brand:"Hope", model:"RD40 Carbon", material:"carbon", use:"aero", depth:40, intW:26, weight:1495, price:1700, size:"700c", hub:"Hope RS4", freehubs:["HG","XDR","N3W","MS"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Britisch, mit CNC-gefräster RS4-Nabe und 40-mm-Carbonfelge. Endlos wartbar und in vielen Farben — Bauqualität fürs Leben.", url:"https://www.hopetech.com/product-category/wheels/" },

  /* ---------- Spinergy ---------- */
  { brand:"Spinergy", model:"GX (PBO spokes)", material:"aluminium", use:"adventure", depth:25, intW:24, weight:1475, price:900, size:"700c", hub:"Spinergy", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:55, year:2023, region:"nl", desc:"Markante, leichte PBO-Speichen, die Vibrationen dämpfen und stark sind. Komfortabler, auffälliger Abenteuersatz.", url:"https://www.spinergy.com/collections/gravel" },


  /* ---------- Token ---------- */
  { brand:"Token", model:"RoubX", material:"carbon", use:"allround", depth:30, intW:24, weight:1568, price:1300, size:"700c", hub:"Token (ratchet)", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Das Carbon-Gravellaufrad von Token (RoubX): 24 mm breit, solide aufgebaut. Unterschätzte Marke mit ordentlichem Preis-Leistungs-Verhältnis.", url:"https://www.tokenproducts.com/wheels/allroad/427-roubx" },

  /* ---------- Reynolds ---------- */
  { brand:"Reynolds", model:"Blacklabel G700 Pro", material:"carbon", use:"allround", depth:32, intW:24, weight:1357, price:2500, size:"700c", hub:"Reynolds / Industry Nine", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Amerikanisches Carbon mit schneller i9-Nabe und 24 mm Innenbreite. Vielseitiger, steifer Allrounder für Gravel und All-Road.", url:"https://www.reynoldscycling.com/collections/gravel" },

  /* ---------- Halo ---------- */
  { brand:"Halo", model:"Carbaura GXC", material:"carbon", use:"allround", depth:30, intW:24, weight:1560, price:900, size:"700c", hub:"Halo MT Supadrive", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:55, year:2023, region:"nl", desc:"Bezahlbares britisches Carbon (unter 1.000 €) mit robuster Nabe. Clevere Wahl für einen günstigen Einstieg in Carbon.", url:"https://www.halowheels.com/wheels/" },
  { brand:"Halo", model:"Vapour GXC", material:"aluminium", use:"adventure", depth:24, intW:24, weight:1850, price:450, size:"700c", hub:"Halo MT Supadrive", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:57, year:2023, region:"nl", desc:"Zäher, bezahlbarer Aluminium-Gravelsatz mit schneller Supadrive-Nabe. Gemacht, um jahrelang durchzuhalten.", url:"https://www.halowheels.com/wheels/" },

  /* ---------- Miche ---------- */
  { brand:"Miche", model:"Graff DX", material:"aluminium", use:"adventure", depth:22, intW:22, weight:1700, price:450, size:"700c", hub:"Miche", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Italienischer, preisbewusster Aluminium-Gravelsatz. Tubeless-ready und solide — ein ordentlicher Schritt nach oben gegenüber Serienlaufrädern.", url:"https://www.miche.it/en/products/gravel/" }
);

wheels.push(
  { brand:"Forge+Bond", model:"25 GR", material:"carbon", use:"allround", depth:25, intW:25, weight:1490, price:2500, size:"700c", hub:"Industry Nine 101", freehubs:["HG","XDR","N3W","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:47, year:2024, region:"nl", desc:"Made in USA, mit recycelbarem thermoplastischem Carbon und schneller i9-Nabe. 25 mm breit und 25 mm hoch: stabiler Allround-Gravelsatz.", url:"https://forgeandbond.com/products/f-b-25-gr" },
  { brand:"HED", model:"Emporia GC3 Performance", material:"carbon", use:"aero", depth:30, intW:25, weight:1592, price:1500, size:"700c", hub:"HED Sonic", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Bezahlbareres Carbon-Emporia: superbreit (25 mm), aerodynamische 30-mm-Felge, made in USA. Stark und robust.", url:"https://store.hedcycling.com/emporia-gc3-performance/" },
  { brand:"Deda", model:"Gera Carbon", material:"carbon", use:"allround", depth:28, intW:24, weight:1445, price:2250, size:"700c", hub:"Deda", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Italienisches Carbon von Deda Elementi: leicht (1.445 g), sauber verarbeitet und vielseitig für Gravel und All-Road.", url:"https://dedaelementi.com/gera-carbon-carbon-wheelset" },
  { brand:"Deda", model:"Gera Alloy", material:"aluminium", use:"adventure", depth:22, intW:23, weight:1690, price:625, size:"700c", hub:"Deda", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Solider Aluminium-Tubeless-Satz von Deda. Saubere Verarbeitung und zuverlässig für den täglichen Gravel-Einsatz.", url:"https://dedaelementi.com/gera-alloy-wheelset" },
  { brand:"Corima", model:"G30.5", material:"carbon", use:"allround", depth:31, intW:25, weight:1550, price:2350, size:"700c", hub:"Corima", freehubs:["HG","XDR","N3W"], hookless:true, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Französisches Carbon von Corima: 25 mm breite Hookless-Felge, von der Marke als neuer Gravel-Maßstab bezeichnet.", url:"https://www.corima.com/gravel/" },
  { brand:"Yoeleo", model:"C45 NxT Gravel", material:"carbon", use:"aero", depth:45, intW:27, weight:1380, price:1050, size:"700c", hub:"Yoeleo D-Hub", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:38, tireMax:50, year:2024, region:"nl", desc:"Carbon im Direktvertrieb: sehr breit (27 mm innen), leicht (1.380 g) und aero. Viel Laufrad fürs Geld.", url:"https://www.yoeleo.com/collections/gravel-wheelsets" },
  { brand:"ICAN", model:"G25", material:"carbon", use:"aero", depth:40, intW:25, weight:1500, price:700, size:"700c", hub:"ICAN D91 (star ratchet)", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Bezahlbares Carbon (rund 700 €) mit Sapim-Speichen und Star-Ratchet-Nabe. Starke Preis-Leistungs-Wahl der Direktmarke ICAN.", url:"https://icancycling.com/products/700c-gravel-wheels-g25" },
  { brand:"ICAN", model:"G25 SL", material:"carbon", use:"aero", depth:45, intW:25, weight:1300, price:800, size:"700c", hub:"ICAN D91 (star ratchet)", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2026, region:"nl", desc:"Neuere, leichtere SL-Version des G25 (~1.300 g). Überraschend leichtes Carbon zu einem günstigen Preis.", url:"https://icanwheels.com/products/700c-g25-gravel-wheels" },
  { brand:"ICAN", model:"G25 650b", material:"carbon", use:"adventure", depth:35, intW:25, weight:1340, price:700, size:"650b", hub:"ICAN D21", freehubs:["HG","XDR"], hookless:true, tubeless:true, brake:"centerlock", tireMin:42, tireMax:60, year:2024, region:"nl", desc:"650b-Version mit 25-mm-Hookless-Felge für extra breite Reifen. Leicht (1.340 g) und bezahlbares Abenteuer.", url:"https://icancycling.com/collections/gravel-wheels" },
  { brand:"Elitewheels", model:"Drive G45 CS", material:"carbon", use:"aero", depth:45, intW:25, weight:1300, price:1300, size:"700c", hub:"Elite (carbon spokes)", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Carbonspeichen und Keramiklager für nur ~1.300 g. Viel High-End-Technik für relativ wenig Geld.", url:"https://www.elite-wheels.com/carbon-gravel-cyclocross-bike-wheelset-700c/" },
  { brand:"Elitewheels", model:"Edge 45", material:"carbon", use:"aero", depth:45, intW:24, weight:1439, price:900, size:"700c", hub:"Elite", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Zugänglicher Aero-Carbonsatz von Elitewheels (1.439 g) mit Keramiklagern. Günstiges Carbon im Direktvertrieb.", url:"https://www.elite-wheels.com/carbon-gravel-cyclocross-bike-wheelset-700c/" },
  { brand:"Elitewheels", model:"Drive G36", material:"carbon", use:"allround", depth:36, intW:25, weight:1325, price:1300, size:"700c", hub:"Elite (carbon spokes)", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Neuere Generation mit 36-mm-Felge und Carbonspeichen, ~1.325 g. Vielseitig und leicht für den Preis.", url:"https://www.elite-wheels.com/carbon-gravel-cyclocross-bike-wheelset-700c/" },
  { brand:"Spinergy", model:"GXC (carbon)", material:"carbon", use:"allround", depth:30, intW:24, weight:1490, price:1300, size:"700c", hub:"Spinergy (PBO spokes)", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Carbon-Version mit den typischen leichten PBO-Speichen, die Vibrationen dämpfen. Komfortabel und auffällig.", url:"https://bicycle.spinergy.com/products/gx" },
  { brand:"Spinergy", model:"GXX (carbon)", material:"carbon", use:"adventure", depth:25, intW:25, weight:1490, price:1100, size:"700c", hub:"Spinergy (PBO spokes)", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:55, year:2024, region:"nl", desc:"Breiter, komfortorientierter Carbonsatz mit PBO-Speichen. Sanft und leise in rauem Gelände, günstig.", url:"https://bicycle.spinergy.com/pages/gx-gravel" },
  { brand:"Reynolds", model:"Blacklabel G700 Expert", material:"carbon", use:"allround", depth:32, intW:24, weight:1500, price:1700, size:"700c", hub:"Reynolds", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Günstigere Expert-Version des G700: dieselbe 24-mm-Felge, einfachere Nabe. Guter Gegenwert in Carbon.", url:"https://www.reynoldscycling.com/collections/gravel" },
  { brand:"Reynolds", model:"Blacklabel G650 Pro", material:"carbon", use:"adventure", depth:32, intW:24, weight:1320, price:2500, size:"650b", hub:"Reynolds / Industry Nine", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:42, tireMax:55, year:2023, region:"nl", desc:"650b-Topmodell mit schneller i9-Nabe, leicht (1.320 g). Für breite Reifen und maximalen Komfort.", url:"https://www.reynoldscycling.com/collections/gravel" },
  { brand:"Reynolds", model:"Blacklabel G650 Expert", material:"carbon", use:"adventure", depth:32, intW:24, weight:1450, price:1700, size:"650b", hub:"Reynolds", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:42, tireMax:55, year:2023, region:"nl", desc:"Bezahlbarerer 650b-Expert für alle, die breite Reifen und Komfort ohne Spitzenpreis suchen.", url:"https://www.reynoldscycling.com/collections/gravel" },
  { brand:"Stan\u0027s NoTubes", model:"Grail CB7 Pro", material:"carbon", use:"allround", depth:24, intW:23, weight:1277, price:2400, size:"700c", hub:"Stan\u0027s / DT 240", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:50, year:2023, region:"nl", desc:"Topversion des Grail unter 1.300 g mit schnellen DT-240-Innereien. Niederdruck-Felgenprofil für Grip und Komfort.", url:"https://stans.com/products/grail-cb7-pro-wheelset" },
  { brand:"Token", model:"G23 (alloy)", material:"aluminium", use:"adventure", depth:23, intW:23, weight:1510, price:500, size:"700c", hub:"Token", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"both", tireMin:32, tireMax:50, year:2023, region:"nl", desc:"Leichter (1.510 g) Aluminium-Gravelsatz von Token. Bezahlbares, ordentliches erstes Upgrade.", url:"https://www.tokenproducts.com/wheels/allroad" },
  { brand:"Boyd", model:"Jocassee 700c", material:"carbon", use:"adventure", depth:28, intW:25, weight:1350, price:1700, size:"700c", hub:"Boyd", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:55, year:2023, region:"nl", desc:"Handgebaut in den USA: breit (25 mm), leicht und gemacht für lange Tage auf Schotter. Robustes Abenteuer.", url:"https://www.boydcycling.com/shop/boyd-cycling-jocassee-700c-carbon-gravel-wheelset-1294" },
  { brand:"Boyd", model:"Jocassee 650b", material:"carbon", use:"adventure", depth:28, intW:25, weight:1300, price:1700, size:"650b", hub:"Boyd", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:42, tireMax:60, year:2023, region:"nl", desc:"650b-Version des Jocassee für extra breite Reifen und Komfort in rauem Gelände.", url:"https://www.boydcycling.com/shop/boyd-cycling-jocassee-650b-carbon-gravel-wheelset-1293" },
  { brand:"Boyd", model:"Jocassee SL", material:"carbon", use:"aero", depth:28, intW:25, weight:1145, price:2400, size:"700c", hub:"Boyd / White Industries", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:35, tireMax:50, year:2024, region:"nl", desc:"Mit ~1.145 g eines der leichtesten Gravellaufräder der Welt, mit Premium-Nabe von White Industries. Ein Kletterwunder.", url:"https://www.boydcycling.com/" },
  { brand:"WTB", model:"Proterra Light i23", material:"carbon", use:"allround", depth:23, intW:23, weight:1480, price:1500, size:"700c", hub:"WTB", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"6-bolt", tireMin:35, tireMax:50, year:2023, region:"nl", desc:"Schmaleres (23 mm) Carbon-Proterra für schnellere Gravelreifen. Vom Reifenspezialisten WTB.", url:"https://www.wtb.com/collections/wheels" },
  { brand:"Hunt", model:"4 Season Gravel Disc", material:"aluminium", use:"adventure", depth:20, intW:24, weight:1640, price:549, size:"700c", hub:"Hunt 4-pawl", freehubs:["HG","XDR"], hookless:false, tubeless:true, brake:"centerlock", tireMin:32, tireMax:50, year:2024, region:"nl", desc:"Klassischer Allwetter-Aluminium-Gravelsatz von Hunt. Robust, tubeless-ready und günstig.", url:"https://www.huntbikewheels.com/collections/gravel-wheels" },
  { brand:"Winspace", model:"Lún GRAPID 650b", material:"carbon", use:"adventure", depth:33, intW:25, weight:1380, price:900, size:"650b", hub:"Winspace (ratchet)", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:42, tireMax:55, year:2024, region:"nl", desc:"650b-Version des günstigen GRAPID. Leichtes Carbon für breite Reifen und Komfort.", url:"https://www.winspace.cc/products/lun-grapid-650-gravel-wheelset" },
  { brand:"ENVE", model:"SES 3.4 AR", material:"carbon", use:"allround", depth:40, intW:25, weight:1410, price:2700, size:"700c", hub:"ENVE / Industry Nine", freehubs:["HG","XDR","N3W"], hookless:false, tubeless:true, brake:"centerlock", tireMin:30, tireMax:44, year:2023, region:"nl", desc:"ENVE All-Road: leichte (1.410 g), aerodynamische Felge für schnelles Gravel und gemischtes Gelände. 25 mm breit.", url:"https://enve.com/products/ses-3-4-ar" },
  { brand:"Yoeleo", model:"SAT C50 DB Pro", material:"carbon", use:"aero", depth:50, intW:23, weight:1320, price:1000, size:"700c", hub:"Yoeleo D-Hub", freehubs:["HG","XDR","MS"], hookless:false, tubeless:true, brake:"centerlock", tireMin:30, tireMax:45, year:2024, region:"nl", desc:"Tiefer (50 mm) All-Road/Gravel-Aerosatz, leicht (1.320 g) und günstig. Schnell auf glatterem Schotter und Asphalt.", url:"https://www.yoeleo.com/collections/gravel-wheelsets" }
);

/* ===================== helpers ===================== */
const USE_LABEL = { aero:"Aero / Race", allround:"Allround", adventure:"Abenteuer" };
const USE_CLASS = { aero:"gk-geo-race", allround:"gk-geo-adventure", adventure:"gk-geo-allroad" };
const FH_LABEL  = { HG:"Shimano HG", XDR:"SRAM XDR", N3W:"Campagnolo N3W", MS:"Micro Spline" };

function priceClassOf(p){ if(p<600)return 1; if(p<1000)return 2; if(p<1500)return 3; if(p<2000)return 4; if(p<2700)return 5; return 6; }
function depthCat(d){ if(d<=30)return 1; if(d<=42)return 2; if(d<=50)return 3; return 4; }
function intwCat(w){ if(w<=23)return 1; if(w<=25)return 2; return 3; }
function weightCat(g){ if(g<1350)return 1; if(g<=1500)return 2; if(g<=1650)return 3; return 4; }
function fmtEur(n){ return "€" + n.toLocaleString("de-DE"); }
function fmtG(g){ return g.toLocaleString("de-DE") + " g"; }
function priceLabelOf(w){ return "~" + fmtEur(w.price); }
function weightLabelOf(w){ return "~" + fmtG(w.weight); }
function brakeLabel(b){ return b==="centerlock" ? "Center Lock" : b==="6-bolt" ? "6-bolt" : "Center Lock / 6-bolt"; }
function brakeMatch(b,val){ return b===val || b==="both"; }
function fhText(w){ return w.freehubs.map(f=>FH_LABEL[f]||f).join(" · "); }

/* ===================== filterstate ===================== */
const filterKeys = ["material","price","brand","use","depth","intw","weight","freehub","hook","size","brake"];
const multiKeys  = new Set(["price","brand","use","depth","intw","weight","size"]);
const basicKeys  = new Set(["material","price","brand","use"]);
const state = {};
filterKeys.forEach(k => state[k] = multiKeys.has(k) ? new Set() : "all");

function optMatch(key, val, w){
  switch(key){
    case "material": return w.material === val;
    case "price":    return priceClassOf(w.price) === +val;
    case "brand":    return w.brand === val;
    case "use":      return w.use === val;
    case "depth":    return depthCat(w.depth) === +val;
    case "intw":     return intwCat(w.intW) === +val;
    case "weight":   return weightCat(w.weight) === +val;
    case "freehub":  return w.freehubs.includes(val);
    case "hook":     return val === "hookless" ? w.hookless : !w.hookless;
    case "size":     return w.size === val;
    case "brake":    return brakeMatch(w.brake, val);
  }
  return true;
}
function stateKeyMatch(k, w){
  if(multiKeys.has(k)){ const s = state[k]; if(s.size===0) return true; for(const v of s){ if(optMatch(k,v,w)) return true; } return false; }
  return state[k]==="all" ? true : optMatch(k, state[k], w);
}
function matchesExcept(w, skip){ return filterKeys.every(k => k===skip || stateKeyMatch(k,w)); }
function matches(w){ return matchesExcept(w, null); }

/* ===================== chips-setup ===================== */
function setupChips(groupId, key){
  const box = document.getElementById(groupId); if(!box) return;
  box.querySelectorAll(".gk-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      if(chip.classList.contains("gk-disabled")) return;
      const val = chip.dataset.val;
      if(val === "all"){
        if(multiKeys.has(key)) state[key].clear(); else state[key]="all";
      } else if(multiKeys.has(key)){
        if(state[key].has(val)) state[key].delete(val); else state[key].add(val);
      } else {
        state[key] = (state[key]===val) ? "all" : val;
      }
      syncChips(key); render(); updateCounts(); updateAdvBadge();
    });
  });
}
function syncChips(key){
  const box = document.getElementById("filter-"+key); if(!box) return;
  const isMulti = multiKeys.has(key);
  const allOn = isMulti ? state[key].size===0 : state[key]==="all";
  box.querySelectorAll(".gk-chip").forEach(chip => {
    const val = chip.dataset.val;
    if(val==="all"){ chip.classList.toggle("active", allOn); }
    else { const on = isMulti ? state[key].has(val) : state[key]===val; chip.classList.toggle("active", on); }
  });
}
function resetFilters(){
  filterKeys.forEach(k => { if(multiKeys.has(k)) state[k].clear(); else state[k]="all"; syncChips(k); });
  render(); updateCounts(); updateAdvBadge();
}

/* ===================== meer-filters toggle ===================== */
function toggleAdv(){
  const adv = document.getElementById("gk-filters-adv");
  const btn = document.getElementById("gk-adv-toggle");
  const open = adv.hasAttribute("hidden");
  if(open){ adv.removeAttribute("hidden"); btn.setAttribute("aria-expanded","true"); }
  else { adv.setAttribute("hidden",""); btn.setAttribute("aria-expanded","false"); }
}
function advActiveCount(){
  let n=0;
  filterKeys.forEach(k=>{ if(basicKeys.has(k)) return; if(multiKeys.has(k)){ if(state[k].size) n++; } else if(state[k]!=="all") n++; });
  return n;
}
function updateAdvBadge(){
  const n = advActiveCount();
  const btn = document.getElementById("gk-adv-toggle");
  const badge = document.getElementById("gk-adv-badge");
  if(badge) badge.textContent = n;
  if(btn) btn.classList.toggle("has-active", n>0);
}

/* ===================== faceted tellers ===================== */
function updateCounts(){
  filterKeys.forEach(key => {
    const box = document.getElementById("filter-"+key); if(!box) return;
    const base = wheels.filter(w => matchesExcept(w, key));
    box.querySelectorAll(".gk-chip").forEach(chip => {
      const val = chip.dataset.val;
      let cnt;
      if(val==="all") cnt = base.length;
      else cnt = base.filter(w => optMatch(key,val,w)).length;
      let c = chip.querySelector(".gk-chip-count");
      if(!c){ c = document.createElement("span"); c.className="gk-chip-count"; chip.appendChild(c); }
      c.textContent = cnt;
      if(val!=="all") chip.classList.toggle("gk-disabled", cnt===0);
    });
  });
}

/* ===================== sorteren + render ===================== */
function sortWheels(list){
  const mode = document.getElementById("sort-sel").value;
  const a = list.slice();
  if(mode==="price-asc")  a.sort((x,y)=>x.price-y.price);
  else if(mode==="price-desc") a.sort((x,y)=>y.price-x.price);
  else if(mode==="weight-asc")  a.sort((x,y)=>x.weight-y.weight);
  else if(mode==="depth-desc")  a.sort((x,y)=>y.depth-x.depth || x.weight-y.weight);
  else if(mode==="brand-asc")  a.sort((x,y)=> x.brand.localeCompare(y.brand) || x.model.localeCompare(y.model));
  return a;
}
function gorillaStars(w){
  const q = 0.45*valuePct(w) + 0.35*((4-weightCat(w.weight))/3) + 0.20*(w.material==="carbon"?0.8:0.55);
  return Math.max(3, Math.min(5, Math.round(2.6 + q*2.4)));
}
function starHTML(n){ let s=""; for(let i=0;i<5;i++) s+= i<n ? "★" : '<span class="off">★</span>'; return '<span class="gk-stars">'+s+'</span>'; }
const WLEVEL=["Baby","Trail","Alpha","Race"];
function wheelLevelLabel(w){
  const matScore=w.material==="carbon"?1:0.3, lightScore=(4-weightCat(w.weight))/3, priceTier=(priceClassOf(w.price)-1)/5;
  const tier3=(0.45*matScore+0.35*lightScore+0.2*priceTier)*3;
  return WLEVEL[Math.max(0,Math.min(3, Math.round(tier3)))];
}
function bestForTag(w){ return {aero:"🚀 Rennen", allround:"🌲 Allround", adventure:"🏕️ Bikepacking"}[w.use]; }
function benefitLine(w){
  const b=[]; const light=weightCat(w.weight)<=2;
  if(light) b.push("⚡ Schneller beschleunigen & leichter klettern");
  if(w.depth>=42) b.push("🚀 Schneller in der Ebene (aero)");
  if(w.intW>=27) b.push("🌲 Mehr Grip & Komfort mit breiten Reifen");
  if(w.material==="aluminium") b.push("🛡️ Robust & wartungsfreundlich");
  if(b.length===0) b.push("🚲 Vielseitig — spürbar lebendiger als Serienlaufräder");
  return b.slice(0,2).join(" · ");
}
function hookHTML(w){
  return w.hookless
   ? '<span class="gk-hook gk-hook-warn" title="Hookless: funktioniert mit freigegebenen Tubeless-Reifen und einem niedrigeren maximalen Reifendruck.">🟡 Reifenkompatibilität prüfen</span>'
   : '<span class="gk-hook gk-hook-ok" title="Hooked-Felge: funktioniert mit nahezu allen Gravelreifen.">🟢 Für alle Gravelreifen geeignet</span>';
}
function wheelCard(w, match){
  const checked = compareSel.has(w.id) ? "checked" : "";
  const matBadge = w.material==="carbon" ? '<span class="gk-badge carbon-wheels">Carbon</span>' : '<span class="gk-badge alu-wheels">Aluminium</span>';
  const tlFeat = w.tubeless ? '<span class="gk-feat tl">Tubeless-ready</span>' : '';
  const sizeBadge = w.size==="650b" ? '<span class="gk-feat off">650b</span>' : '';
  const ext = w.extW ? (" · "+w.extW+" mm außen") : "";
  let matchClass="", matchHead="<span></span>", matchBlock="";
  if(match){
    const tier = match.score>=85?"perfect":match.score>=70?"sterk":"kan";
    matchClass=" gk-match-"+tier;
    const tierWord={perfect:"Top-Treffer",sterk:"Starke Wahl",kan:"Okayer Treffer"}[tier];
    matchHead='<span class="gk-matchbar gk-mb-'+tier+'"><b>'+match.score+'</b> '+tierWord+'</span>';
    let cb="";
    if(finder.compat && finder.compat!=="unsure"){
      cb = match.compat
        ? '<span class="gk-fsize gk-fsize-ok">✓ Passt auf deine '+COMPAT_GROUP[finder.compat]+'-Kassette</span>'
        : '<span class="gk-fsize gk-fsize-no">✗ Anderer Freilauf nötig für '+COMPAT_GROUP[finder.compat]+'</span>';
    }
    matchBlock='<div class="gk-freasons-lbl">Warum dieser passt</div><ul class="gk-freasons">'+match.reasons.map(r=>"<li>"+r+"</li>").join("")+'</ul>'+cb;
  }
  return `<div class="gk-card${matchClass}" data-id="${w.id}">
    <div class="gk-card-head">
      ${matchHead}
      <label class="gk-cmp-check" title="Ankreuzen, um nebeneinander zu vergleichen"><input type="checkbox" ${checked} onchange="toggleCompareSel(${w.id},this)"><span>Vergleichen</span></label>
    </div>
    <div class="gk-brand">${w.brand}</div>
    <div class="gk-model">${w.model}</div>
    <div class="gk-price-row"><span class="gk-price-tag">${priceLabelOf(w)}</span><span class="gk-weight-pill">${weightLabelOf(w)}</span></div>
    <div class="gk-rate"><span class="gk-rate-lbl" title="Gorilla-Urteil: abgeleitet aus Preis-Leistung, Gewicht und Vielseitigkeit">Gorilla-Urteil</span>${starHTML(gorillaStars(w))}</div>
    <div class="gk-tagrow">
      <span class="gk-bestfor">Ideal für: ${bestForTag(w)}</span>
      <span class="gk-levelbadge">🦍 ${wheelLevelLabel(w)} Gorilla</span>
      ${matBadge}
    </div>
    <div class="gk-benefit">${benefitLine(w)}</div>
    <div class="gk-specs">
      <span class="gk-spec-key">Felgenhöhe</span><span class="gk-spec-val">${w.depth} mm</span>
      <span class="gk-spec-key">Innenbreite</span><span class="gk-spec-tire">${w.intW} mm</span>
      <span class="gk-spec-key">Gewicht</span><span class="gk-spec-val">${fmtG(w.weight)}</span>
      <span class="gk-spec-key">Laufradgröße</span><span class="gk-spec-val">${w.size}</span>
    </div>
    <div class="gk-feats">${hookHTML(w)}${tlFeat}${sizeBadge}</div>
    ${matchBlock}
    <details class="gk-wheel">
      <summary>Alle Daten &amp; Kompatibilität</summary>
      <div class="gk-wheel-grid">
        <span class="k">Felge</span><span class="v">${w.depth} mm tief · ${w.intW} mm innen${ext}</span>
        <span class="k">Reifenbreite</span><span class="v">${w.tireMin}–${w.tireMax} mm</span>
        <span class="k">Felgentyp</span><span class="v">${w.hookless ? "Hookless (ohne Haken)" : "Hooked (mit Haken)"}</span>
        <span class="k">Freehub</span><span class="v">${fhText(w)}</span>
        <span class="k">Bremsaufnahme</span><span class="v">${brakeLabel(w.brake)}</span>
        <span class="k">Nabe</span><span class="v">${w.hub}</span>
      </div>
      <div class="gk-wheel-note">${w.desc}</div>
    </details>
    <div class="gk-card-cta">
      <a class="gk-buy-btn" href="${w.url}" target="_blank" rel="noopener">Ansehen &amp; bestellen
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
      </a>
      <div class="gk-cta-row">
        <span style="font-size:12px;color:#8b8d6a;">${w.year} · ${w.region.toUpperCase()}</span>
      </div>
    </div>
  </div>`;
}
function render(){
  const list = sortWheels(wheels.filter(matches));
  const grid = document.getElementById("bike-grid");
  const count = document.getElementById("result-count");
  if(list.length===0){
    grid.innerHTML = '<div class="gk-empty"><div class="gk-empty-icon">🛞</div>Keine Laufradsätze mit diesen Filtern gefunden.<br>Lösche einen Filter oder erweitere deine Suche.</div>';
  } else {
    grid.innerHTML = list.map(w=>wheelCard(w)).join("");
  }
  count.textContent = list.length + (list.length===1 ? " Laufradsatz gefunden" : " Laufradsätze gefunden");
  const _st=document.getElementById("gk-sticky-count"); if(_st) _st.textContent=list.length;
  renderActiveFilters();
  updateLivePanel(list);
  updateCompareUI();
  if(cmpOpen) refreshCompare(list);
}

/* ===================== actieve-filter pillen ===================== */
const filterLabels = {
  material:{carbon:"Carbon", aluminium:"Aluminium"},
  use:USE_LABEL,
  hook:{hooked:"Hooked", hookless:"Hookless"},
  freehub:FH_LABEL,
  brake:{centerlock:"Center Lock","6-bolt":"6-bolt"}
};
function pillLabel(key, val){
  if(key==="price"){ return ["","< €600","€600–1.000","€1.000–1.500","€1.500–2.000","€2.000–2.700","€2.700+"][+val]; }
  if(key==="depth"){ return ["","≤30 mm","31–42 mm","43–50 mm",">50 mm"][+val]; }
  if(key==="intw"){ return ["","≤23 mm","24–25 mm","26 mm+"][+val]; }
  if(key==="weight"){ return ["","<1.350 g","1.350–1.500 g","1.500–1.650 g",">1.650 g"][+val]; }
  if(key==="size"){ return val; }
  if(key==="brand"){ return val; }
  return (filterLabels[key] && filterLabels[key][val]) || val;
}
const keyLabels = { material:"Material", price:"Preis", brand:"Marke", use:"Einsatz", depth:"Felgenhöhe", intw:"Innenbreite", weight:"Gewicht", freehub:"Freilauf", hook:"Felgentyp", size:"Laufradgröße", brake:"Bremse" };
function renderActiveFilters(){
  const box = document.getElementById("active-filters");
  const pills = [];
  filterKeys.forEach(key=>{
    if(multiKeys.has(key)){ state[key].forEach(val => pills.push({key,val})); }
    else if(state[key]!=="all"){ pills.push({key,val:state[key]}); }
  });
  if(pills.length===0){ box.innerHTML=""; return; }
  box.innerHTML = pills.map(p =>
    `<span class="gk-af-pill">${keyLabels[p.key]}: ${pillLabel(p.key,p.val)} <span class="gk-af-rm" onclick="clearFilter('${p.key}','${p.val}')">×</span></span>`
  ).join("");
}
function clearFilter(key, val){
  if(multiKeys.has(key)) state[key].delete(val); else state[key]="all";
  syncChips(key); render(); updateCounts(); updateAdvBadge();
}

/* ===================== "In selectie"-paneel ===================== */
function updateLivePanel(list){
  const body = document.getElementById("gk-live-body");
  const cnt = document.getElementById("gk-live-count");
  cnt.textContent = list.length;
  if(list.length===0){ body.innerHTML = '<div class="gk-live-empty">Keine Laufradsätze</div>'; return; }
  body.innerHTML = list.map(w =>
    `<a class="gk-live-item" href="${w.url}" target="_blank" rel="noopener">
      <span class="gk-live-text">
        <span class="gk-live-brand">${w.brand}</span>
        <span class="gk-live-model">${w.model}</span>
      </span>
      <svg class="gk-live-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
    </a>`
  ).join("");
}

/* ===================== Vergelijk-engine ===================== */
let cmpOpen = false;
function cmpName(w){ return "<em>"+w.brand+" "+w.model+"</em>"; }
function joinNl(arr){ return arr.length<=1 ? (arr[0]||"") : arr.slice(0,-1).join(", ")+" und "+arr[arr.length-1]; }
function minBy(list, fn){ return list.reduce((a,b)=> fn(b)<fn(a)?b:a); }
function maxBy(list, fn){ return list.reduce((a,b)=> fn(b)>fn(a)?b:a); }

function buildCompareHTML(list){
  if(list.length===0) return '<div class="gk-cmp-empty">Keine Laufradsätze in deiner aktuellen Auswahl. Passe die Filter an.</div>';
  if(list.length===1){ const w=list[0]; return '<div class="gk-cmp-intro">Nur der <strong>'+w.brand+' '+w.model+'</strong> passt zu deinen Filtern. Erweitere deine Auswahl, um zu vergleichen.</div>'; }

  const carbon = list.filter(w=>w.material==="carbon").length;
  const alu = list.length - carbon;
  const light = minBy(list, w=>w.weight), heavy = maxBy(list, w=>w.weight);
  const cheap = minBy(list, w=>w.price), dear = maxBy(list, w=>w.price);
  const deep = maxBy(list, w=>w.depth), shallow = minBy(list, w=>w.depth);
  const wide = maxBy(list, w=>w.intW);
  const value = minBy(list, w=>w.price/ (w.material==="carbon"?1.6:1) + w.weight/100); // ruwe value-proxy
  const uses = {aero:0,allround:0,adventure:0}; list.forEach(w=>uses[w.use]++);
  const hookless = list.filter(w=>w.hookless).length;

  let h = '<div class="gk-cmp-head">🔍 Unterschiede in deiner Auswahl <span class="gk-cmp-count">'+list.length+'</span></div>';
  h += '<div class="gk-cmp-intro">Du vergleichst <strong>'+list.length+' Laufradsätze</strong>: '+carbon+'× Carbon und '+alu+'× Aluminium, davon '+uses.aero+'× Aero/Race, '+uses.allround+'× Allround und '+uses.adventure+'× Abenteuer.</div>';

  h += '<div class="gk-cmp-sec"><span class="gk-cmp-t"><strong>Preis:</strong></span> von '+fmtEur(cheap.price)+' ('+cmpName(cheap)+') bis '+fmtEur(dear.price)+' ('+cmpName(dear)+') — ein Unterschied von '+fmtEur(dear.price-cheap.price)+'.</div>';
  h += '<div class="gk-cmp-sec"><span class="gk-cmp-t"><strong>Gewicht:</strong></span> am leichtesten ist '+cmpName(light)+' ('+fmtG(light.weight)+'), am schwersten '+cmpName(heavy)+' ('+fmtG(heavy.weight)+'). Das sind '+(heavy.weight-light.weight)+' g rotierende Masse.</div>';
  h += '<div class="gk-cmp-sec"><span class="gk-cmp-t"><strong>Felgenhöhe:</strong></span> von '+shallow.depth+' mm ('+cmpName(shallow)+', ruhig bei Wind) bis '+deep.depth+' mm ('+cmpName(deep)+', aerodynamischer).</div>';
  h += '<div class="gk-cmp-sec"><span class="gk-cmp-t"><strong>Innenbreite:</strong></span> am breitesten ist '+cmpName(wide)+' mit '+wide.intW+' mm — darauf bauen breite Reifen am schönsten und stabilsten auf.</div>';
  if(hookless>0) h += '<div class="gk-cmp-sec"><span class="gk-cmp-t"><strong>Felgentyp:</strong></span> '+hookless+' von '+list.length+' sind hookless — achte darauf bei Reifenwahl und Reifendruck.</div>';

  h += '<div class="gk-cmp-bikes-title">Kurz gesagt</div>';
  h += '<div class="gk-cmp-bike">💰 <strong>Am günstigsten:</strong> '+cmpName(cheap)+' — '+fmtEur(cheap.price)+'</div>';
  h += '<div class="gk-cmp-bike">⚖️ <strong>Am leichtesten:</strong> '+cmpName(light)+' — '+fmtG(light.weight)+'</div>';
  h += '<div class="gk-cmp-bike">🚀 <strong>Am aerodynamischsten:</strong> '+cmpName(deep)+' — '+deep.depth+' mm tief</div>';
  h += '<div class="gk-cmp-bike">📏 <strong>Breiteste Felge:</strong> '+cmpName(wide)+' — '+wide.intW+' mm innen</div>';

  let tip;
  if(carbon && alu) tip = "Carbon ist leichter und steifer, Aluminium günstiger und leichter zu reparieren. Für reine Leistung Carbon; für Abenteuer oder ein kleineres Budget ist gutes Aluminium völlig in Ordnung.";
  else if(deep.depth-shallow.depth>=15) tip = "Große Spanne bei der Felgenhöhe: tiefer (aero) für Tempo in der Ebene, flacher für Ruhe bei Seitenwind und etwas weniger Gewicht.";
  else tip = "Die Sätze liegen nah beieinander. Lass Nabenqualität, Breite und Preis-Leistung entscheiden.";
  h += '<div class="gk-cmp-tip">🦍 Gorilla-Tipp: '+tip+'</div>';
  h += '<div class="gk-cmp-foot">Daten von Herstellern/Tests · Preise ca. (Juni 2026).</div>';
  return h;
}
function toggleCompare(){
  const btn = document.getElementById("gk-compare-btn");
  const panel = document.getElementById("gk-compare-panel");
  cmpOpen = !cmpOpen;
  btn.classList.toggle("open", cmpOpen);
  btn.setAttribute("aria-expanded", cmpOpen ? "true" : "false");
  panel.style.display = cmpOpen ? "block" : "none";
  if(cmpOpen){ refreshCompare(sortWheels(wheels.filter(matches))); }
}
function refreshCompare(list){ document.getElementById("gk-compare-panel").innerHTML = buildCompareHTML(list); }
function openCompareScroll(){
  switchTab("compare");
  document.getElementById("gk-compare-btn").scrollIntoView({behavior:"smooth", block:"start"});
}

/* ===================== tabs + tips-paneel ===================== */
function switchTab(name){
  document.querySelectorAll(".gk-tabpanel").forEach(p=>p.classList.toggle("active", p.id==="tab-"+name));
  document.querySelectorAll(".gk-tab").forEach(t=>{
    const on = t.id==="tabbtn-"+name;
    t.classList.toggle("active", on);
    t.setAttribute("aria-selected", on ? "true" : "false");
  });
  const live = document.getElementById("gk-live");
  if(live) live.style.display = (name==="compare") ? "" : "none";
}
function toggleDealer(){
  const d = document.getElementById("gk-dealer");
  const open = d.classList.contains("collapsed");
  d.classList.toggle("collapsed", !open);
  document.getElementById("gk-dealer-title").setAttribute("aria-expanded", open ? "true" : "false");
  document.getElementById("gk-dealer-toggle-label").textContent = open ? "Einklappen" : "Ausklappen";
  document.getElementById("gk-dealer-toggle").textContent = open ? "–" : "+";
}

/* ===================== Vraag de Gorilla (offline) ===================== */
function norm(s){ return s.normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase(); }
let lastConstraints = null;

function parseQuery(q){
  const t = norm(q);
  const c = { material:null, use:null, size:null, freehub:null, maxPrice:null, minPrice:null, intent:"balanced", hookless:null, region:null, bike:null };
  if(/\bcarbon\b/.test(t)) c.material="carbon";
  if(/\b(alu|aluminium|aluminum)\b/.test(t)) c.material="aluminium";
  if(/\b650b?\b/.test(t)) c.size="650b";
  if(/\bgrx\b|\bshimano\b|\bcues\b|\b105\b/.test(t)) c.freehub="HG";
  if(/\bsram\b|xplr|rival|\bapex\b/.test(t)) c.freehub="XDR";
  if(/campagnolo|campa|ekar/.test(t)) c.freehub="N3W";
  if(/hookless/.test(t)) c.hookless=true;
  /* gebruik / karakter */
  if(/(bikepack|avontuur|tas|bagage|ruig|adventure|bag|luggage|rough|abenteuer|gepack)/.test(t)) c.use="adventure";
  else if(/(aero|race|racen|wedstrijd|unbound|gravelrace|cross|rennen|wettkampf)/.test(t)) c.use="aero";
  else if(/(allround|veelzijdig|toeren|alleskunner|all-round|versatile|touring|vielseitig)/.test(t)) c.use="allround";
  /* intentie met prioriteit (lichtste wint van bikepacking, enz.) */
  if(/(lichtst|lichtste|licht|klim|gewicht|light|climb|weight|leicht|kletter)/.test(t)) c.intent="light";
  else if(/(breed|brede|dikke band|brede band|comfort|wide|widest|komfort|breit)/.test(t)) c.intent="wide";
  else if(/(aero|diep|unbound|wedstrijd|gravelrace|\brace\b|racen|deep|racing|tief|rennen|wettkampf)/.test(t)) c.intent="aero";
  else if(/(prijs.?kwaliteit|beste deal|value|budget|goedkoop|goedkoopst|betaalbaar|voordelig|cheap|affordable|best deal|bargain|gunstig|preiswert|billig|preis.?leistung)/.test(t)) c.intent="value";
  else if(/(stevig|duurzaam|sterk|robuust|bikepack|avontuur|strong|sturdy|durable|robust|adventure|stabil|abenteuer)/.test(t)) c.intent="durable";
  /* regio (nudge) */
  const REG=[["maasduinen","maasduinen"],["veluwe","veluwe"],["zuid-limburg","limburg"],["limburg","limburg"],["ardennen","ardennen"],["sudlimburg","limburg"]];
  for(const r of REG){ if(t.includes(r[0])){ c.region=r[1]; break; } }
  if((c.region==="maasduinen"||c.region==="veluwe") && c.intent==="balanced") c.intent="wide";
  if((c.region==="limburg"||c.region==="ardennen") && c.intent==="balanced") c.intent="light";
  /* fietsmodel (upgrade-context, zachte nudge) */
  const BIKES={grail:"aero",grizl:"durable",checkpoint:"balanced",diverge:"balanced",topstone:"balanced",crux:"aero",revolt:"balanced",aspero:"aero",exploro:"aero",cutthroat:"durable",addict:"aero"};
  for(const b in BIKES){ if(t.includes(b)){ c.bike=b; if(c.intent==="balanced" && BIKES[b]!=="balanced") c.intent=BIKES[b]; break; } }
  /* prijs */
  let m = t.match(/(onder|tot|max(?:imaal)?|minder dan|tot aan|unter|bis|hochstens|weniger als|<|≤|=<)\s*€?\s*([0-9]+(?:[.,][0-9]{3})?)/);
  if(m) c.maxPrice = parsePrice(m[2]);
  let m2 = t.match(/(boven|vanaf|meer dan|uber|ab|mehr als|>|≥|=>)\s*€?\s*([0-9]+(?:[.,][0-9]{3})?)/);
  if(m2) c.minPrice = parsePrice(m2[2]);
  if(!m && !m2){ const lone = t.match(/€\s*([0-9]+(?:[.,][0-9]{3})?)/); if(lone) c.maxPrice = parsePrice(lone[1]); }
  return c;
}
function parsePrice(s){ const n = parseInt(s.replace(/[.,]/g,"")); return n<100 ? n*1000 : n; }

function wheelPassesC(w, c){
  if(c.material && w.material!==c.material) return false;
  if(c.use && w.use!==c.use) return false;
  if(c.size && w.size!==c.size) return false;
  if(c.freehub && !w.freehubs.includes(c.freehub)) return false;
  if(c.hookless!==null && w.hookless!==c.hookless) return false;
  if(c.maxPrice && w.price>c.maxPrice*1.02) return false;
  if(c.minPrice && w.price<c.minPrice*0.98) return false;
  return true;
}
function rankIntent(list, intent){
  const a = list.slice();
  if(intent==="light") a.sort((x,y)=>x.weight-y.weight);
  else if(intent==="aero") a.sort((x,y)=>y.depth-x.depth || x.weight-y.weight);
  else if(intent==="wide") a.sort((x,y)=>y.intW-x.intW || x.weight-y.weight);
  else if(intent==="durable") a.sort((x,y)=> (durScore(y)-durScore(x)) || x.price-y.price);
  else if(intent==="value") a.sort((x,y)=> valueRank(x)-valueRank(y));
  else a.sort((x,y)=> valueRank(x)-valueRank(y));
  return a;
}
function durScore(w){ return (w.material==="aluminium"?1:0) + (w.use==="adventure"?1.2:0) + (w.intW>=27?0.8:w.intW>=25?0.4:0) + (w.brake==="6-bolt"?0.2:0); }
function valueRank(w){ const quality = (w.material==="carbon"?1.55:1) * (1500/w.weight) * (1 + Math.max(0,(w.intW-22))*0.03); return w.price/quality; }

function aiCard(w){
  return `<div class="gk-ai-card">
    <div class="gk-ai-card-h"><span class="gk-ai-card-name">${w.brand} ${w.model}</span><span class="gk-ai-card-price">${priceLabelOf(w)}</span></div>
    <div class="gk-ai-card-spec">${USE_LABEL[w.use]} · ${w.material==="carbon"?"Carbon":"Aluminium"} · ${w.depth} mm tief · ${w.intW} mm innen · ${fmtG(w.weight)}</div>
    <a href="${w.url}" target="_blank" rel="noopener">Ansehen &amp; bestellen →</a>
  </div>`;
}
function intentLine(c, n){
  const useTxt = c.use ? (" für "+USE_LABEL[c.use]) : "";
  const matTxt = c.material ? (" aus "+(c.material==="carbon"?"Carbon":"Aluminium")) : "";
  const priceTxt = c.maxPrice ? (" unter "+fmtEur(c.maxPrice)) : (c.minPrice ? (" über "+fmtEur(c.minPrice)) : "");
  const regTxt = c.region && REGION_NAME[c.region] ? (" für die Region "+REGION_NAME[c.region]) : "";
  const bikeTxt = c.bike ? (" als Upgrade für dein "+c.bike.charAt(0).toUpperCase()+c.bike.slice(1)) : "";
  const intentTxt = {light:"die leichtesten", aero:"die aerodynamischsten", wide:"die breitesten (mehr Grip & Komfort)", durable:"die stabilsten", value:"die mit dem besten Preis-Leistungs-Verhältnis", balanced:"die passendsten"}[c.intent];
  return "Anhand deiner Frage habe ich nach Laufradsätzen"+matTxt+useTxt+regTxt+bikeTxt+priceTxt+" gesucht und "+intentTxt+" nach oben gestellt. "+(n>3?"Das sind meine Top 3:":"Das habe ich gefunden:");
}
function runAssistant(q){
  const c = parseQuery(q); lastConstraints = c;
  let list = wheels.filter(w=>wheelPassesC(w,c));
  const ans = document.getElementById("ai-answer");
  ans.style.display = "block";
  if(list.length===0){
    ans.innerHTML = '<div class="gk-ai-text">Kein Laufradsatz passt genau zu deiner Frage. Versuch es etwas offener — zum Beispiel ohne Preisgrenze oder Material.</div>';
    return;
  }
  list = rankIntent(list, c.intent);
  const top = list.slice(0,3);
  ans.innerHTML =
    '<div class="gk-ai-text">'+intentLine(c, list.length)+'</div>'+
    '<div class="gk-ai-cards">'+top.map(aiCard).join("")+'</div>'+
    (list.length>3 ? '<div class="gk-ai-more">+ '+(list.length-3)+' weitere Sätze passen auch. </div>' : '')+
    '<button class="gk-ai-apply" onclick="applyAssistant()">↳ Als Filter im Vergleich anwenden</button>';
}
function applyAssistant(){
  if(!lastConstraints) return;
  const c = lastConstraints;
  filterKeys.forEach(k => { if(multiKeys.has(k)) state[k].clear(); else state[k]="all"; });
  if(c.material) state.material = c.material;
  if(c.use) state.use.add(c.use);
  if(c.size) state.size.add(c.size);
  if(c.freehub) state.freehub = c.freehub;
  if(c.hookless!==null) state.hook = c.hookless ? "hookless" : "hooked";
  if(c.maxPrice){ for(let i=1;i<=6;i++){ if(classMaxPrice(i)<=c.maxPrice*1.05) state.price.add(String(i)); } if(state.price.size===0) state.price.add(String(priceClassOf(c.maxPrice))); }
  filterKeys.forEach(syncChips);
  switchTab("compare");
  render(); updateCounts(); updateAdvBadge();
  document.getElementById("gk-filters-box") && 0;
  window.scrollTo({top:0, behavior:"smooth"});
}
function classMaxPrice(i){ return [0,599,999,1499,1999,2699,99999][i]; }

function expandAi(){ document.getElementById("ai-answer").style.display="block"; }
function clearAi(){ const a=document.getElementById("ai-answer"); a.style.display="none"; a.innerHTML=""; }
function askAI(){ const q=document.getElementById("ai-input").value.trim(); if(q) runAssistant(q); }
function askExample(el){ const q=el.textContent; document.getElementById("ai-input").value=q; runAssistant(q); }

/* ===================== VIND MIJN WIELSET (finder) ===================== */
const finder = { level:null, goal:null, compat:null, region:null, budget:null };
const ALL_STEPS = ["level","goal","compat","region","budget"];
function activeSteps(){ return ["level","goal","compat","region","budget"]; }

const LEVEL_LABEL = { beginner:"Baby Gorilla", gemiddeld:"Trail Gorilla", gevorderd:"Alpha Gorilla", expert:"Race Gorilla" };
const BUDGET_BANDS = { b1:{idx:1,label:"bis €750"}, b2:{idx:2,label:"von €750–1.500"}, b3:{idx:3,label:"von €1.500–2.500"}, b4:{idx:4,label:"von €2.500+"} };
function wheelBudgetIdx(p){ if(p<750)return 1; if(p<=1500)return 2; if(p<=2500)return 3; return 4; }

/* Doel-gedreven matching (review: denk vanuit de vraag, niet de spec) */
const GOAL_MAP = {
  faster:      { primary:"aero",      secondary:["allround"],          priority:"aero",    label:"schneller werden",            character:"schneller, aerodynamischer ", match:"Tempo & Sportlichkeit" },
  lighter:     { primary:"allround",  secondary:["aero","adventure"],  priority:"light",   label:"leichtere Laufräder",           character:"leichter ",                match:"geringes Gewicht" },
  comfort:     { primary:"adventure", secondary:["allround"],          priority:"wide",    label:"mehr Komfort",              character:"breiter, komfortabler ",   match:"Komfort & Grip" },
  bikepacking: { primary:"adventure", secondary:["allround"],          priority:"durable", label:"Bikepacking & lange Touren", character:"breiter, stabiler ",       match:"Bikepacking & Gepäck" },
  value:       { primary:"allround",  secondary:["aero","adventure"],  priority:"value",   label:"das beste Preis-Leistungs-Verhältnis",  character:"cleverer Preis-Leistungs-",          match:"Preis-Leistung" },
  stronger:    { primary:"adventure", secondary:["allround"],          priority:"durable", label:"stabilere Laufräder",           character:"stabiler, zuverlässiger ",  match:"Stabilität & Zuverlässigkeit" }
};
const REGION_NAME = { maasduinen:"Maasduinen", veluwe:"Veluwe", limburg:"Südlimburg", ardennen:"Ardennen", overal:"" };
const COMPAT_GROUP = { grx:"Shimano", cues:"Shimano", xplr:"SRAM", rival:"SRAM", campagnolo:"Campagnolo" };
const COMPAT_FULL  = { grx:"Shimano GRX", cues:"Shimano CUES/105", xplr:"SRAM XPLR", rival:"SRAM Rival/Apex", campagnolo:"Campagnolo" };
function compatFits(w){
  const c=finder.compat;
  if(!c||c==="unsure") return true;
  if(c==="grx"||c==="cues") return w.freehubs.includes("HG")||w.freehubs.includes("MS");
  if(c==="xplr"||c==="rival") return w.freehubs.includes("XDR");
  if(c==="campagnolo") return w.freehubs.includes("N3W");
  return true;
}
let _valMin=0, _valMax=1;
function computeValueRange(){ const arr=wheels.map(valueRank); _valMin=Math.min(...arr); _valMax=Math.max(...arr); }
function valuePct(w){ return _valMax>_valMin ? 1-(valueRank(w)-_valMin)/(_valMax-_valMin) : 0.5; }
function clamp01(x){ return Math.max(0,Math.min(1,x)); }

function scoreWheel(w){
  const R = [];
  const lightScore = (4-weightCat(w.weight))/3;
  const aeroScore = clamp01((w.depth-25)/30);
  const wideScore = clamp01((w.intW-22)/8);
  const light = weightCat(w.weight)<=2, wide = w.intW>=26, deep = w.depth>=42;
  const gm = GOAL_MAP[finder.goal];

  /* Budget — 32 */
  const ui = BUDGET_BANDS[finder.budget].idx;
  const d = wheelBudgetIdx(w.price) - ui;
  let budget;
  if(d===0){ budget=32; R.push({w:32,t:"Liegt genau in deinem Budget"}); }
  else if(d===-1){ budget=22; R.push({w:22,t:"Günstig, unter deinem Budget"}); }
  else if(d===1){ budget=13; R.push({w:13,t:"Knapp über deinem Budget"}); }
  else if(d===-2){ budget=9; R.push({w:9,t:"Deutlich unter deinem Budget"}); }
  else if(d===2){ budget=4; }
  else { budget=0; }

  /* Doel / karakter — 24 */
  let geo;
  if(w.use===gm.primary){ geo=24; R.push({w:30,t:"Passt perfekt zu deinem Ziel: "+gm.match}); }
  else if(gm.secondary.indexOf(w.use)>=0){ geo=15; R.push({w:18,t:"Geeignet für dein Ziel: "+gm.match}); }
  else { geo=7; }

  /* Niveau (Gorilla) — 14 */
  const matScore = w.material==="carbon"?1:0.3;
  const priceTier = (priceClassOf(w.price)-1)/5;
  const tier3 = (0.45*matScore + 0.35*lightScore + 0.2*priceTier)*3;
  const uLevel = {beginner:0,gemiddeld:1,gevorderd:2,expert:3}[finder.level];
  const nf = Math.max(0, 1-Math.abs(tier3-uLevel)/3);
  const niveau = Math.round(14*nf);
  if(nf>=0.7) R.push({w:14, t:{beginner:"Zugänglicher Satz für den Einstieg",gemiddeld:"Schöner Allround-Satz für regelmäßige Fahrer",gevorderd:"Sportlicher Satz, der sich spürbar schneller anfühlt",expert:"High-End-Satz für maximale Leistung"}[finder.level]});

  /* Compatibiliteit — 12 (+ badge) */
  const fits = compatFits(w); w._compat = fits;
  const compat = fits ? 12 : 0;
  if(fits && finder.compat && finder.compat!=="unsure") R.push({w:12,t:"Passt direkt auf deine "+COMPAT_GROUP[finder.compat]+"-Kassette"});

  /* Doel-voorkeur — 10 */
  const prefNudge = (kind)=>{
    if(kind==="light")   return {v:Math.round(10*lightScore), r:light?"Leicht — schneller klettern & beschleunigen":null};
    if(kind==="aero")    return {v:Math.round(10*aeroScore),  r:deep?"Tiefe, aerodynamische Felge für mehr Tempo":null};
    if(kind==="wide")    return {v:Math.round(10*wideScore),  r:wide?"Breite Innenfelge: mehr Grip & Komfort":null};
    if(kind==="durable") return {v:Math.round(10*clamp01(durScore(w)/2.4)), r:(w.use==="adventure"||w.material==="aluminium")?"Stabil & zuverlässig für raues Gelände":null};
    if(kind==="value")   return {v:Math.round(10*valuePct(w)), r:valuePct(w)>=0.6?"Starkes Preis-Leistungs-Verhältnis":null};
    return {v:10,r:null};
  };
  const pn = prefNudge(gm.priority);
  let voorkeur = pn.v, vR = pn.r;
  if(finder.level==="expert"){ voorkeur = Math.min(10, voorkeur + (voorkeur>=7?1:0)); } /* Race Gorilla: scherper op prioriteit */
  if(finder.level==="beginner" && gm.priority!=="value"){ const vv=prefNudge("value"); voorkeur=Math.round(0.7*voorkeur+0.3*vv.v); }
  if(vR) R.push({w:16,t:vR});

  /* Bonussen — 8 (doel + regio) */
  let bonus=0;
  if(finder.goal==="bikepacking"||finder.goal==="stronger"){ if(w.material==="aluminium"||w.use==="adventure")bonus+=3; if(wide)bonus+=2; }
  else if(finder.goal==="comfort"){ if(wide)bonus+=3; if(w.tubeless)bonus+=2; }
  else if(finder.goal==="faster"){ if(light)bonus+=3; if(deep)bonus+=3; }
  else if(finder.goal==="lighter"){ if(light)bonus+=4; if(w.material==="carbon")bonus+=2; }
  else { if(valuePct(w)>=0.6)bonus+=3; if(w.use==="allround")bonus+=2; }
  const reg = finder.region; let regHit=false;
  if(reg==="maasduinen"||reg==="veluwe"){ if(w.intW>=25){bonus+=3;regHit=true;} }
  else if(reg==="limburg"||reg==="ardennen"){ if(light){bonus+=3;regHit=true;} }
  bonus=Math.min(8,bonus);
  if(regHit && REGION_NAME[reg]) R.push({w:13,t:"Gute Wahl für die Region "+REGION_NAME[reg]});

  /* Extra navolgbare pluspunten */
  if(wide) R.push({w:11,t:"Breite Innenfelge ("+w.intW+" mm) für breite Reifen"});
  if(light) R.push({w:10,t:"Leicht: "+fmtG(w.weight)});
  if(deep) R.push({w:9,t:"Tiefe Felge ("+w.depth+" mm): aerodynamisch"});
  if(w.material==="carbon" && !light) R.push({w:7,t:"Steifes, leichtes Carbon"});

  const score = Math.max(0, Math.min(100, Math.round(budget+geo+niveau+compat+voorkeur+bonus)));
  R.sort((a,b)=>b.w-a.w);
  const seen=new Set(), reasons=[];
  for(const r of R){ if(!seen.has(r.t)){ seen.add(r.t); reasons.push(r.t); } if(reasons.length>=4) break; }
  return { score, reasons, parts:{budget,geo,niveau,compat,voorkeur,bonus} };
}

function pickFinder(key,val,el){
  finder[key]=val;
  el.parentNode.querySelectorAll(".gk-fchip").forEach(c=>c.classList.remove("sel"));
  el.classList.add("sel");
  const steps = activeSteps();
  ALL_STEPS.forEach(k=>{ if(steps.indexOf(k)<0){ const e=document.getElementById("fstep-"+k); if(e) e.classList.add("hidden"); } });
  for(let i=0;i<steps.length;i++){ const e=document.getElementById("fstep-"+steps[i]); if(e) e.classList.remove("hidden"); if(!finder[steps[i]]) break; }
  steps.forEach((k,i)=>{ const e=document.getElementById("fstep-"+k); const n=e&&e.querySelector(".gk-fstep-num"); if(n) n.textContent=i+1; });
  if(steps.every(k=>finder[k])) renderFinder();
}

function regionTip(){
  return {
    maasduinen:"Für die Maasduinen empfehle ich mindestens 25 mm Felgeninnenbreite und Reifen ab 45 mm — das gibt Grip und Auftrieb im losen Sand.",
    veluwe:"Auf der Veluwe (Sand & Wald) lohnen sich breite Felgen (25 mm+) und breite Reifen für Grip und Komfort.",
    limburg:"In Südlimburg geht es ordentlich auf und ab — ein leichter Laufradsatz klettert spürbar angenehmer.",
    ardennen:"In den Ardennen fährst du lange Anstiege — geringes Gewicht zählt hier wirklich.",
    overal:""
  }[finder.region] || "";
}
function gorillaMini(){ return '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="34" height="34" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#0f1b12"/><circle cx="60" cy="60" r="50" fill="none" stroke="#2F8F3E" stroke-width="9" stroke-dasharray="6 6.5"/><circle cx="60" cy="60" r="43" fill="#232826"/><ellipse cx="60" cy="56" rx="26" ry="20" fill="#EDE7DB"/><ellipse cx="60" cy="77" rx="19" ry="15" fill="#EDE7DB"/><ellipse cx="51" cy="52" rx="10.5" ry="3.9" fill="#232826" transform="rotate(-13 51 52)"/><ellipse cx="69" cy="52" rx="10.5" ry="3.9" fill="#232826" transform="rotate(13 69 52)"/><circle cx="51" cy="60" r="3.3" fill="#232826"/><circle cx="69" cy="60" r="3.3" fill="#232826"/><path d="M50,70 Q60,67 70,70 Q73,80 64,83 Q60,84.5 56,83 Q47,80 50,70 Z" fill="#232826"/><circle cx="56.5" cy="75" r="1.9" fill="#EDE7DB"/><circle cx="63.5" cy="75" r="1.9" fill="#EDE7DB"/></svg>'; }

function adviceText(top){
  const gm = GOAL_MAP[finder.goal];
  let txt = "Du bist ein <strong>"+LEVEL_LABEL[finder.level]+"</strong>, der vor allem <strong>"+gm.label+"</strong> möchte";
  if(finder.region && finder.region!=="overal" && REGION_NAME[finder.region]) txt += " und meistens in der Region "+REGION_NAME[finder.region]+" fährt";
  txt += ", mit einem Budget <strong>"+BUDGET_BANDS[finder.budget].label+"</strong>. ";
  if(top){
    txt += "Deshalb passt der <strong>"+top.w.brand+" "+top.w.model+"</strong> ("+priceLabelOf(top.w)+") am besten zu deiner Situation — ein "+gm.character+"Laufradsatz";
    if(finder.compat && finder.compat!=="unsure") txt += ", der direkt auf deine "+COMPAT_GROUP[finder.compat]+"-Kassette passt";
    txt += ". ";
  }
  txt += "Hier unten meine Top-Treffer mit Begründung:";
  return txt;
}

function t3bar(frac, best){ return '<div class="gk-t3bar'+(best?' gk-t3best':'')+'"><span style="width:'+Math.round(clamp01(frac)*100)+'%"></span></div>'; }
function buildTop3(scored){
  const top = scored.slice(0,3); if(top.length<2) return "";
  const ps = top.map(s=>s.w.price), ws = top.map(s=>s.w.weight), iw = top.map(s=>s.w.intW), sc = top.map(s=>s.score);
  const pMin=Math.min(...ps),pMax=Math.max(...ps), wMin=Math.min(...ws),wMax=Math.max(...ws), iMax=Math.max(...iw), scMax=Math.max(...sc);
  const head = top.map((s,i)=>'<th><span class="gk-t3rank">#'+(i+1)+'</span>'+s.w.brand+' '+s.w.model+'</th>').join("");
  function row(label, vals, fmt, fracs, bestIdx){
    return '<tr><td class="gk-t3axis">'+label+'</td>'+vals.map((v,i)=>'<td class="gk-t3cell">'+t3bar(fracs[i], i===bestIdx)+'<div class="gk-t3val">'+fmt(v)+'</div></td>').join("")+'</tr>';
  }
  const pBest = ps.indexOf(pMin), wBest = ws.indexOf(wMin), iBest = iw.indexOf(Math.max(...iw)), sBest = sc.indexOf(scMax);
  let h = '<div class="gk-top3"><div class="gk-top3-title">🏆 Deine Top 3 im Vergleich</div><div class="gk-top3-sub">Voller Balken = besser. Orange = der Beste in dieser Zeile.</div><table class="gk-t3tbl"><thead><tr><th></th>'+head+'</tr></thead><tbody>';
  h += row("Match score", sc, v=>v, sc.map(v=>v/100), sBest);
  h += row("Preis", ps, v=>fmtEur(v), ps.map(v=> pMax>pMin ? (pMax-v)/(pMax-pMin) : 1), pBest);
  h += row("Gewicht", ws, v=>fmtG(v), ws.map(v=> wMax>wMin ? (wMax-v)/(wMax-wMin) : 1), wBest);
  h += row("Innenbreite", iw, v=>v+" mm", iw.map(v=> v/iMax), iBest);
  h += '</tbody></table></div>';
  return h;
}
function finderCard(s){
  const w=s.w; const tier = s.score>=85?"perfect":s.score>=70?"sterk":"kan";
  const cls = tier==="perfect"?"gk-f-perfect":tier==="sterk"?"gk-f-sterk":"gk-f-kan";
  const tierWord = {perfect:"Top Treffer", sterk:"Starke Wahl", kan:"Möglich, nicht optimal"}[tier];
  let compatBadge = "";
  if(finder.compat && finder.compat!=="unsure"){
    compatBadge = w._compat
      ? '<span class="gk-fsize gk-fsize-ok">✓ Passt auf deine '+COMPAT_GROUP[finder.compat]+'-Kassette</span>'
      : '<span class="gk-fsize gk-fsize-no">✗ Anderer Freilauf nötig für '+COMPAT_GROUP[finder.compat]+'</span>';
  }
  return `<div class="gk-fcard ${cls}">
    <div class="gk-fscore-wrap"><div class="gk-fscore">${s.score}</div><div class="gk-ftier">${tierWord.split(" ")[0]}</div></div>
    <div class="gk-brand">${w.brand}</div>
    <div class="gk-model">${w.model}</div>
    <div class="gk-fprice">${priceLabelOf(w)} · ${USE_LABEL[w.use]} · ${w.material==="carbon"?"Carbon":"Aluminium"} · ${w.depth} mm · ${fmtG(w.weight)}</div>
    ${compatBadge}
    <div class="gk-freasons-lbl">Warum dieser passt</div>
    <ul class="gk-freasons">${s.reasons.map(r=>"<li>"+r+"</li>").join("")}</ul>
    <a class="gk-buy-btn" href="${w.url}" target="_blank" rel="noopener">Ansehen &amp; bestellen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg></a>
  </div>`;
}
function renderFinder(){
  const scored = wheels.map(w=>({w, ...scoreWheel(w)}))
    .sort((a,b)=> b.score-a.score || (b.w._compat-a.w._compat) || a.w.price-b.w.price);
  const adv = document.getElementById("finder-advice");
  adv.innerHTML = '<div class="gk-advice-head">'+gorillaMini()+' Gorilla sagt</div><p>'+adviceText(scored[0])+'</p>'+
    (regionTip()? '<div class="gk-advice-tip">📍 '+regionTip()+'</div>':'');
  adv.classList.add("show");
  document.getElementById("finder-actions").style.display = "flex";
  document.getElementById("finder-top3").innerHTML = buildTop3(scored);
  const show = scored.filter(s=>s.score>=45).slice(0,18);
  document.getElementById("finder-count").textContent = show.length+" Laufradsätze passen zu deinen Antworten — sortiert nach Match Score";
  document.getElementById("finder-grid").innerHTML = show.map(s=>wheelCard(s.w,{score:s.score,reasons:s.reasons,compat:s.w._compat})).join("");
  updateCompareUI();
}
function finderToCompare(){
  filterKeys.forEach(k => { if(multiKeys.has(k)) state[k].clear(); else state[k]="all"; });
  const band = BUDGET_BANDS[finder.budget].idx;
  const priceMap = {1:["1","2"],2:["2","3"],3:["4","5"],4:["5","6"]}[band];
  priceMap.forEach(p=>state.price.add(p));
  state.use.add(GOAL_MAP[finder.goal].primary);
  const c=finder.compat;
  if(c==="grx"||c==="cues") state.freehub="HG";
  else if(c==="xplr"||c==="rival") state.freehub="XDR";
  else if(c==="campagnolo") state.freehub="N3W";
  filterKeys.forEach(syncChips);
  switchTab("compare"); render(); updateCounts(); updateAdvBadge();
  window.scrollTo({top:0, behavior:"smooth"});
}
function resetFinder(){
  Object.keys(finder).forEach(k=>finder[k]=null);
  document.querySelectorAll("#tab-finder .gk-fchip").forEach(c=>c.classList.remove("sel"));
  ALL_STEPS.forEach((k,i)=>{ const e=document.getElementById("fstep-"+k); if(e){ e.classList.toggle("hidden", k!=="level"); const n=e.querySelector(".gk-fstep-num"); if(n) n.textContent=i+1; } });
  document.getElementById("fstep-level").querySelector(".gk-fstep-num").textContent="1";
  document.getElementById("finder-advice").classList.remove("show");
  document.getElementById("finder-advice").innerHTML="";
  document.getElementById("finder-actions").style.display="none";
  document.getElementById("finder-top3").innerHTML="";
  document.getElementById("finder-count").textContent="";
  document.getElementById("finder-grid").innerHTML="";
  window.scrollTo({top:0, behavior:"smooth"});
}

/* ===================== Vergelijk geselecteerde (multi-select, filter-aware) ===================== */
let compareSel = new Set();
const MAXCMP = 4;
function toggleCompareSel(id, cb){
  if(cb.checked){
    if(compareSel.size>=MAXCMP){ cb.checked=false; flashCmpLimit(); return; }
    compareSel.add(id);
  } else compareSel.delete(id);
  document.querySelectorAll('.gk-card[data-id="'+id+'"] input[type="checkbox"]').forEach(x=>{ x.checked = compareSel.has(id); });
  updateCompareUI();
}
function flashCmpLimit(){ document.querySelectorAll('.gk-cmp-note').forEach(n=>{ n.style.display='block'; clearTimeout(n._t); n._t=setTimeout(()=>{n.style.display='none';},2600); }); }
function updateCompareUI(){
  const n=compareSel.size;
  document.querySelectorAll('.gk-cmp-n').forEach(e=>e.textContent=n);
  document.querySelectorAll('.gk-cmp-go').forEach(b=>{ b.disabled = n<2; });
}
function openCompareModal(){
  const list = wheels.filter(w=>compareSel.has(w.id));
  if(list.length<2) return;
  document.getElementById('cmp-modal-body').innerHTML = buildCompareModal(list);
  document.getElementById('cmp-modal').classList.add('active');
}
function closeCompareModal(){ document.getElementById('cmp-modal').classList.remove('active'); }
function buildCompareModal(list){
  const rows = [
    { k:"Preis", get:w=>w.price, fmt:w=>priceLabelOf(w), best:"min" },
    { k:"Material", get:w=>w.material, fmt:w=>w.material==="carbon"?"Carbon":"Aluminium", best:null },
    { k:"Gewicht", get:w=>w.weight, fmt:w=>fmtG(w.weight), best:"min" },
    { k:"Felgenhöhe", get:w=>w.depth, fmt:w=>w.depth+" mm", best:null },
    { k:"Innenbreite", get:w=>w.intW, fmt:w=>w.intW+" mm", best:"max" },
    { k:"Felgentyp", get:w=>w.hookless?1:0, fmt:w=>w.hookless?"🟡 Hookless":"🟢 Hooked", best:null },
    { k:"Laufradgröße", get:w=>w.size, fmt:w=>w.size, best:null },
    { k:"Einsatz", get:w=>w.use, fmt:w=>USE_LABEL[w.use], best:null },
    { k:"Reifenbreite", get:w=>w.tireMax, fmt:w=>w.tireMin+"–"+w.tireMax+" mm", best:null },
    { k:"Freilauf", get:w=>0, fmt:w=>fhText(w), best:null },
    { k:"Nabe", get:w=>0, fmt:w=>w.hub, best:null },
    { k:"Gorilla-Urteil", get:w=>gorillaStars(w), fmt:w=>'<span style="color:#e8a23a">'+"★".repeat(gorillaStars(w))+'</span><span style="color:#dcdcc4">'+"★".repeat(5-gorillaStars(w))+'</span>', best:"max" }
  ];
  let h='<div class="gk-ctbl-wrap"><table class="gk-ctbl"><thead><tr><th></th>';
  h+=list.map(w=>'<th class="gk-chero">'+w.brand+'<small>'+w.model+'</small></th>').join("");
  h+='</tr></thead><tbody>';
  rows.forEach(r=>{
    const vals=list.map(r.get);
    let bestVal=null;
    if(r.best==="min") bestVal=Math.min(...vals);
    else if(r.best==="max") bestVal=Math.max(...vals);
    h+='<tr><td>'+r.k+'</td>'+list.map((w,i)=>{
      const isBest = r.best!==null && vals[i]===bestVal;
      return '<td class="'+(isBest?"gk-cbest":"")+'">'+r.fmt(w)+'</td>';
    }).join("")+'</tr>';
  });
  h+='<tr><td>Bestellen</td>'+list.map(w=>'<td><a class="gk-ctbl-buy" href="'+w.url+'" target="_blank" rel="noopener">Ansehen &amp; bestellen →</a></td>').join("")+'</tr>';
  h+='</tbody></table></div>';
  return h;
}

/* ===================== init ===================== */
function initBrands(){
  const box = document.getElementById("filter-brand");
  const brands = [...new Set(wheels.map(w=>w.brand))].sort((a,b)=>a.localeCompare(b));
  brands.forEach(b=>{ const s=document.createElement("span"); s.className="gk-chip"; s.dataset.val=b; s.textContent=b; box.appendChild(s); });
}
function setupLivePanel(){
  const panel = document.getElementById("gk-live");
  const head = document.getElementById("gk-live-head");
  head.addEventListener("click", (e)=>{
    if(panel._dragged){ panel._dragged=false; return; }
    const coll = panel.classList.toggle("collapsed");
    head.setAttribute("aria-expanded", coll?"false":"true");
    document.getElementById("gk-live-toggle-label").textContent = coll?"Ausklappen":"Einklappen";
    document.getElementById("gk-live-toggle").textContent = coll?"+":"–";
  });
  let sx,sy,ox,oy,drag=false;
  head.addEventListener("pointerdown",(e)=>{ drag=true; panel._dragged=false; sx=e.clientX; sy=e.clientY; const r=panel.getBoundingClientRect(); ox=r.left; oy=r.top; panel.classList.add("dragging"); head.setPointerCapture(e.pointerId); });
  head.addEventListener("pointermove",(e)=>{ if(!drag) return; const dx=e.clientX-sx, dy=e.clientY-sy; if(Math.abs(dx)+Math.abs(dy)>4) panel._dragged=true; panel.style.left=(ox+dx)+"px"; panel.style.top=(oy+dy)+"px"; panel.style.right="auto"; });
  head.addEventListener("pointerup",(e)=>{ drag=false; panel.classList.remove("dragging"); try{head.releasePointerCapture(e.pointerId);}catch(_){} });
}
function init(){
  wheels.forEach((w,i)=>w.id=i);
  initBrands();
  const groups = { material:"filter-material", price:"filter-price", brand:"filter-brand", use:"filter-use", depth:"filter-depth", intw:"filter-intw", weight:"filter-weight", freehub:"filter-freehub", hook:"filter-hook", size:"filter-size", brake:"filter-brake" };
  Object.keys(groups).forEach(k=>setupChips(groups[k], k));
  computeValueRange();
  render(); updateCounts(); updateAdvBadge();
  setupLivePanel();
  document.getElementById("gk-live").style.display = "none"; // alleen op vergelijk-tab
}
document.addEventListener("DOMContentLoaded", init);
;
(function(){
  function init(){
    if (document.getElementById('gg-cmpbar') || !document.querySelector('.gk-cmp-n')) return;
    var bar = document.createElement('div'); bar.id = 'gg-cmpbar'; bar.setAttribute('aria-live','polite');
    var txt = document.createElement('span'); txt.id = 'gg-cmpbar-txt';
    var go = document.createElement('button'); go.id = 'gg-cmpbar-go'; go.type = 'button'; go.textContent = '\u2696\uFE0F Vergleichen';
    bar.appendChild(txt); bar.appendChild(go); document.body.appendChild(bar);
    go.addEventListener('click', function(){
      if (typeof openCompareModal === 'function') { openCompareModal(); }
      else { var b = document.querySelector('.gk-cmp-go'); if (b) b.click(); }
    });
    function upd(){
      var t = document.querySelector('.gk-cmp-n');
      var n = t ? (parseInt((t.textContent||'').replace(/\D/g,''),10) || 0) : 0;
      if (n >= 1) { bar.classList.add('on'); document.body.classList.add('gg-cmpbar-open'); }
      else { bar.classList.remove('on'); document.body.classList.remove('gg-cmpbar-open'); }
      go.disabled = n < 2;
      txt.textContent = n >= 2 ? n + ' ausgew\u00e4hlt' : (n === 1 ? '1 ausgew\u00e4hlt \u2014 w\u00e4hle noch einen' : '');
    }
    document.addEventListener('click', function(){ setTimeout(upd, 80); }, true);
    document.addEventListener('change', function(){ setTimeout(upd, 80); }, true);
    upd();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
