/* gravelbike-kiezer — gemaakt door .claude/kiezer-importeren.ps1 uit gravelbike-kiezer-v10.5.html */
const bikes = [
  { brand:"Canyon", model:"Grail CF 7", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss (aluminium)", maxTire:42, priceClass:3, price:2199, priceLabel:"~€2.199", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"GRX 820", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Der Einstieg in die Grail-Rennlinie: Carbonrahmen mit mechanischer GRX 820 2×12 für eine breite, klassische Bandbreite. Schnell auf leichtem Schotter und Asphalt, mit 42 mm Reifenfreiheit und optionalen Fast Fenders.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf/grail-cf-7/4149.html" },
  { brand:"Canyon", model:"Grail CF 8 1by", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss (aluminium)", maxTire:42, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"GRX 822", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Sportliche 1×12-Version des Carbon-Grail mit GRX 822. Aufgeräumt, wartungsarm und für schnelle Graveltouren und Marathons gemacht.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf/grail-cf-8-1by/4148.html" },
  { brand:"Canyon", model:"Grail CF SL 7 AERO", frame:"carbon", wheels:"carbon", wheelBrand:"Reynolds ATR TSS", maxTire:42, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,8 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Renn-Grail mit kabelloser SRAM Rival XPLR AXS (1×13) und Carbon-Laufrädern Reynolds ATR. Das Aero-Cockpit mit Gear Groove macht es bereit für schnelle Gravelrennen.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf/grail-cf-sl-7-aero/4150.html" },
  { brand:"Canyon", model:"Grail CF SLX 8 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1400", maxTire:42, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"GRX Di2 RX825", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Neues CF-SLX-Layup (Rahmen 1.120 g) mit elektronischer GRX Di2 2×12, Powermeter und DT Swiss GRC 1400 Carbon-Laufrädern. Gemacht für Gravelrennen.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf-slx/grail-cf-slx-8-di2/4474.html" },
  { brand:"Canyon", model:"Grail CF SLX 8 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1400", maxTire:42, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,3 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"CF-SLX-Rahmen mit kabelloser SRAM Force XPLR AXS (1×13, Powermeter) und DT Swiss GRC 1400. Tempo und Bandbreite für Gravelrennen in jedem Gelände.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf-slx/grail-cf-slx-8-axs/4475.html" },
  { brand:"Canyon", model:"Grail CF SLX 8 w/ RIFT", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1400", maxTire:42, priceClass:5, price:5299, priceLabel:"~€5.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,0 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:false, fender:true, damping:"RIFT-Federgabel (40 mm)", tubeless:true, ebike:false, geoDesc:"Dieselbe Rennplattform, aber mit der zusammen mit DT Swiss entwickelten RIFT-Federgabel (40 mm Federweg). Komfort und Kontrolle auf rauen Strecken, ohne die Renn-DNA zu verlieren.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf-slx/grail-cf-slx-8-w%2F-rift/4473.html" },
  { brand:"Canyon", model:"Grail CFR Di2", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1100", maxTire:42, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"GRX Di2 RX825", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Toprahmen mit 990 g, GRX Di2 2×12, Powermeter und DT Swiss GRC 1100. Die Plattform, mit der Unbound- und Weltmeistertitel gewonnen wurden.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cfr/grail-cfr-di2/4154.html" },
  { brand:"Canyon", model:"Grail CFR w/ RIFT", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1100", maxTire:42, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"GRX Di2 RX825", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"RIFT-Federgabel (40 mm)", tubeless:true, ebike:false, geoDesc:"CFR-Topmodell mit RIFT-Federgabel (40 mm) und GRX Di2: maximales Tempo mit Dämpfung für die rauesten Gravelrennen.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cfr/grail-cfr-w%2F-rift/4153.html" },
  { brand:"Canyon", model:"Grail CFR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Zipp 303 XPLR SW", maxTire:42, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,5 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Flaggschiff mit rund 7,5 kg, SRAM RED XPLR AXS (1×13), Powermeter und Zipp 303 XPLR SW Hookless-Laufrädern. Eine reine Gravel-Rennmaschine.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cfr/grail-cfr-axs/4152.html" },
  { brand:"Canyon", model:"Grizl CF 6", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:54, priceClass:3, price:2399, priceLabel:"~€2.399", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,1 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Zugängliches Carbon-Grizl mit mechanischer SRAM Apex XPLR 1×12 und Platz für 54-mm-Reifen. Viele Befestigungspunkte: bereit für Abenteuer und Bikepacking.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/og/grizl-cf-6/4141.html" },
  { brand:"Canyon", model:"Grizl CF 7", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:54, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX 822", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon-Grizl mit Shimano GRX 822 1×12 und 54 mm Reifenfreiheit. Robuster Allrounder für groben Schotter, Waldwege und lange Abenteuer.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/og/grizl-cf-7/4167.html" },
  { brand:"Canyon", model:"Grizl CF 7 ESC", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:54, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,2 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Escape-Version ('Full Mounty') mit GRX 822 1×12: zusätzliche Befestigungen und Bikepacking-Ausstattung für mehrtägige Touren.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/escape/grizl-cf-7-esc/4142.html" },
  { brand:"Canyon", model:"Grizl CF 8 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon-Laufradsatz", maxTire:54, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"XT Di2 M8250", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Elektronische Shimano XT Di2 (1×12) mit Carbon-Laufrädern auf der 54-mm-Grizl-Plattform. Schnell und vielseitig, von der Gravelrunde bis zur Expedition.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/og/grizl-cf-8-di2/4143.html" },
  { brand:"Canyon", model:"Grizl CF 8 w/ RIFT", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:54, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"RIFT-Federgabel (40 mm)", tubeless:true, ebike:false, geoDesc:"Grizl mit RIFT-Federgabel (40 mm) und kabelloser SRAM Rival XPLR AXS (1×13). Dämpfung und Grip für technisches Gelände.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-8-w%2F-rift/4145.html" },
  { brand:"Canyon", model:"Grizl CF 8 ESC w/ ECLIPS", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:54, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,6 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Escape-Modell mit integriertem ECLIPS-Licht- und Dynamosystem und GRX 822. Autark auf langen Bikepacking-Abenteuern, Tag und Nacht.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-8-esc-w%2F-eclips/4144.html" },
  { brand:"Canyon", model:"Grizl CF 9 w/ ECLIPS", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon-Laufradsatz", maxTire:54, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"RED XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top-Grizl mit SRAM RED XPLR AXS (1×13), Carbon-Laufrädern und ECLIPS-Beleuchtung. Leichter Adventure-Racer für Ultra-Events.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-9-w%2F-eclips/4146.html" },
  { brand:"Canyon", model:"Grizl CF 9 ESC w/ RIFT", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon-Laufradsatz", maxTire:54, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"X0 Eagle AXS", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"RIFT-Federgabel (40 mm)", tubeless:true, ebike:false, geoDesc:"Maximale Ausstattung: RIFT-Federgabel, SRAM X0 Eagle AXS Transmission mit MTB-Bandbreite und Carbon-Laufräder. Für rauestes Gelände und vollbepackte Touren.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-9-esc-w%2F-rift/4147.html" },
  { brand:"Canyon", model:"Grizl 5", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,9 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Neuer Aluminium-Grizl-Rahmen (120 g leichter als zuvor) mit Shimano CUES und hydraulischen Scheibenbremsen. Bezahlbarer Einstieg mit derselben 54-mm-Reifenfreiheit wie die Carbonmodelle.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-5/4443.html" },
  { brand:"Canyon", model:"Grizl 6", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1799, priceLabel:"~€1.799", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Überarbeitetes Aluminium-Grizl (10,5 kg) mit SRAM Apex XPLR 1×12 und 54 mm Reifenfreiheit. Ein Bike für Arbeitsweg, Gravel und Bikepacking.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-6/4444.html" },
  { brand:"Canyon", model:"Grizl 7 ESC", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium-Escape-Version ('Full Mounty') mit GRX 822 1×12 und komplettem Befestigungsset. Abenteuerlicher Alleskönner zu einem günstigen Preis.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-7-esc/4445.html" },
  { brand:"Canyon", model:"Grizl 7 (2024)", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:50, priceClass:2, price:1799, priceLabel:"~€1.799", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,6 kg", group:"GRX 820", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2024, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium-Grizl der vorigen Generation mit GRX 820 und 50 mm Reifenfreiheit. Bewährt, komfortabel und günstig, solange der Vorrat reicht.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-7/3715.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF 8", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:50, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~16,0 kg", group:"GRX 822", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"Der Einstieg in die E-Grizl-Linie: Bosch Performance SX Mittelmotor (55 Nm, 400 Wh) mit GRX 822 1×12. Natürliches Fahrgefühl und Unterstützung bis 25 km/h.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-8/4742.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF Daily", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:50, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~17,3 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"E-Gravel für jeden Tag: Bosch SX (400 Wh), GRX 822 und Komplettausstattung mit integrierter Lupine-Beleuchtung. Vom Arbeitsweg bis zum Wochenendabenteuer.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-daily/3547.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF 9", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss HGC 1800", maxTire:50, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:4, weightLabel:"~16,3 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"RockShox Rudy XPLR (40 mm)", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"E-Gravel-Topmodell (16,3 kg) mit Bosch SX, RockShox-Rudy-Federgabel, SRAM Force XPLR AXS und DT Swiss Carbon-Laufrädern. Bis zu rund 100 km Offroad-Reichweite.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-9/3546.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF Trail", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon-Laufradsatz", maxTire:50, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:4, weightLabel:"~17,0 kg", group:"X0 Eagle AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"RockShox Rudy XPLR (40 mm)", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"Das rauste E-Grizl: SRAM X0 Eagle AXS Transmission, Vario-Sattelstütze, Federgabel und Carbon-Laufräder. Für Singletrails und technische Abenteuer.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-trail/3545.html" },
  { brand:"Trek", model:"Checkpoint ALR 3 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1299, priceLabel:"~€1.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"CUES U6000 1x10", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das günstigste Checkpoint Gen 3: Aluminiumrahmen, Carbongabel und unverwüstliche Shimano CUES 1×10 mit LinkGlide. 50 mm Reifenfreiheit und reichlich Befestigungspunkte.", url:"https://www.trekbikes.com/nl/nl_NL/p/49944/" },
  { brand:"Trek", model:"Checkpoint ALR 4 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"CUES U8000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium-Gen-3 mit Shimano CUES U8000 1×11 und hydraulischen Bremsen. Dieselbe Gravel-Endurance-Geometrie und Befestigungen wie die teureren Modelle.", url:"https://www.trekbikes.com/nl/nl_NL/p/49973/" },
  { brand:"Trek", model:"Checkpoint ALR 5 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"SRAM", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodell der Aluminiumlinie mit mechanischer SRAM Apex XPLR 1×12 (9,9 kg). Geeignet für Vario-Sattelstütze und Federgabel bis 40 mm Federweg.", url:"https://www.trekbikes.com/nl/nl_NL/p/49946/" },
  { brand:"Trek", model:"Checkpoint SL 5 AXS Gen 3", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"Apex XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (hinten)", tubeless:true, ebike:false, geoDesc:"Carbon-Checkpoint mit kabelloser SRAM Apex XPLR AXS (1×12) und IsoSpeed-Dämpfung. Internes Staufach und 50 mm Reifenfreiheit für lange Abenteuer.", url:"https://www.trekbikes.com/nl/nl_NL/p/47071/" },
  { brand:"Trek", model:"Checkpoint SL 6 AXS Gen 3", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (hinten)", tubeless:true, ebike:false, geoDesc:"Kabellose Rival XPLR AXS (1×13) am komfortablen Gen-3-Rahmen mit IsoSpeed und internem Staufach. Vielseitiger Carbon-Allrounder.", url:"https://www.trekbikes.com/nl/nl_NL/p/55098/" },
  { brand:"Trek", model:"Checkpoint SL 7 AXS Gen 3", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Elite 35V", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (hinten)", tubeless:true, ebike:false, geoDesc:"Top-Checkpoint mit SRAM Force XPLR AXS (1×13) und Carbon-Laufrädern Aeolus Elite 35V. Komfort, Stauraum und Tempo in einem Paket.", url:"https://www.trekbikes.com/nl/nl_NL/p/55097/" },
  { brand:"Trek", model:"Checkmate SLR 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Pro 3V", maxTire:45, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Reiner Gravelracer: 800er-OCLV-Rahmen, Force XPLR AXS (1×13) mit Powermeter und Aeolus Pro 3V Carbon-Laufrädern. Aerodynamische Full-System-Foil-Rohre und aggressive Gravel-Race-Geometrie.", url:"https://www.trekbikes.com/nl/nl_NL/p/58668/" },
  { brand:"Trek", model:"Checkmate SLR 9 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus RSL 37V", maxTire:45, priceClass:6, price:9999, priceLabel:"~€9.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Treks schnellstes und leichtestes Gravelbike aller Zeiten (7,6 kg): RED XPLR AXS 1×13, Powermeter und Aeolus RSL 37V. Kompromissloses Rennen mit Reifen bis 45 mm.", url:"https://www.trekbikes.com/nl/nl_NL/p/46152/" },
  { brand:"Trek", model:"Check-OUT SL 5", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:56, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,0 kg", group:"GRX 822", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Vollfederung (vorne + hinten)", tubeless:true, ebike:false, geoDesc:"Vollgefederter Gravel-Abenteurer mit mechanischer GRX 1×12 und Gepäckträger. MTB-Fähigkeiten mit Rennlenker-Tempo und 56 mm Reifenfreiheit.", url:"https://www.trekbikes.com/nl/nl_NL/p/57827/" },
  { brand:"Trek", model:"Check-OUT SL 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Pro 3V", maxTire:56, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~11,3 kg", group:"X0 Eagle AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Vollfederung (vorne + hinten)", tubeless:true, ebike:false, geoDesc:"Treks erstes vollgefedertes Gravelbike, mit SRAM X0 AXS Transmission, Carbon-Laufrädern und 56 mm Reifenfreiheit. Für extremes Gelände und Ultra-Abenteuer.", url:"https://www.trekbikes.com/nl/nl_NL/p/57828/" },
  { brand:"Trek", model:"Checkpoint+ SL 5", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,8 kg", group:"GRX 820 1x", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (hinten)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"Elektrisches Checkpoint mit TQ-HPR60-Mittelmotor (360 Wh) und mechanischer GRX 1×12. Natürliche Unterstützung bis 25 km/h, IsoSpeed-Komfort und 50-mm-Reifen.", url:"https://www.trekbikes.com/nl/nl_NL/p/57446/" },
  { brand:"Trek", model:"Checkpoint+ SL 6 AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,8 kg", group:"Rival/GX AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (hinten)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"E-Gravel mit kabellosem SRAM Rival/GX Eagle AXS Mullet und TQ-HPR60-Motor. Leise, leicht und rund 80 km Reichweite im Eco-Modus.", url:"https://www.trekbikes.com/nl/nl_NL/p/57441/" },
  { brand:"Trek", model:"Checkpoint+ SL 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Elite 35V", maxTire:50, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~14,1 kg", group:"Force AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (hinten)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"Top-E-Checkpoint mit SRAM Force AXS, Carbon-Aeolus-Laufrädern und TQ HPR60 (360 Wh). Premium-E-Gravel für lange Tage im Sattel.", url:"https://www.trekbikes.com/nl/nl_NL/p/57447/" },
  { brand:"Specialized", model:"Diverge E5", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:47, priceClass:2, price:1549, priceLabel:"~€1.549", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"CUES U6000 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Einstiegs-Diverge auf der vorigen (Gen 3) Aluminiumplattform mit Shimano CUES. Bezahlbarer Startpunkt mit 47 mm Reifenfreiheit und Befestigungspunkten.", url:"https://www.specialized.com/nl/nl/diverge-e5/p/4223510" },
  { brand:"Specialized", model:"Diverge 4 Sport Alloy", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:50, priceClass:3, price:2299, priceLabel:"~€2.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (vorne)", tubeless:true, ebike:false, geoDesc:"Neues Diverge 4 aus Aluminium mit Shimano CUES und Future-Shock-Dämpfung. 50 mm Reifenfreiheit und SWAT-Befestigungen: Abenteuer ohne hohen Preis.", url:"https://www.specialized.com/nl/nl/diverge-4-sport-alloy-shimano-cues/p/4223511" },
  { brand:"Specialized", model:"Diverge 4 Comp Alloy", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:50, priceClass:3, price:2799, priceLabel:"~€2.799", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,1 kg", group:"Apex 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (vorne)", tubeless:true, ebike:false, geoDesc:"Aluminium-Diverge 4 mit mechanischer SRAM Apex 1×12 und Future Shock. Leichter, kompletter Gravel-Allrounder.", url:"https://www.specialized.com/nl/nl/diverge-4-comp-alloy-sram-apex/p/4223512" },
  { brand:"Specialized", model:"Diverge 4 Sport Carbon", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:50, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,7 kg", group:"GRX 610", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (vorne)", tubeless:true, ebike:false, geoDesc:"Carbon-Diverge 4 mit Shimano GRX 610 2×12. Future Shock, SWAT-4.0-Staufach und 50-mm-Reifen für jedes Abenteuer.", url:"https://www.specialized.com/nl/nl/diverge-4-sport-carbon-shimano-grx-600/p/4223514" },
  { brand:"Specialized", model:"Diverge 4 Comp Carbon", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:50, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"Apex AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (vorne)", tubeless:true, ebike:false, geoDesc:"Kabellose SRAM Apex AXS am neuen Carbon-Diverge-4-Rahmen mit Future Shock und größerem SWAT-4.0-Staufach. Vielseitig und modern.", url:"https://www.specialized.com/nl/nl/diverge-4-comp-carbon-sram-apex-axss1000/p/4223513" },
  { brand:"Specialized", model:"Diverge 4 Expert (Rival XPLR)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:50, priceClass:5, price:6299, priceLabel:"~€6.299", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (vorne)", tubeless:true, ebike:false, geoDesc:"Rennfertiges Diverge 4 mit kabelloser Rival XPLR AXS (1×13) und Carbon-Laufrädern von Roval. Die schnellste Diverge-Generation aller Zeiten, mit 50 mm Reifenfreiheit.", url:"https://www.specialized.com/nl/nl/diverge-4-expert-sram-rival-xplr/p/4293758" },
  { brand:"Specialized", model:"Diverge 4 Expert (GRX Di2)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:50, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"Shimano", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX Di2 RX825", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (vorne)", tubeless:true, ebike:false, geoDesc:"Elektronische GRX Di2 2×12 am Diverge 4 Expert (8,9 kg) mit Carbon-Laufrädern von Roval. Gleichermaßen für Rennen und Abenteuer geeignet.", url:"https://www.specialized.com/nl/nl/diverge-4-expert-shimano-grx-di2/p/4279306" },
  { brand:"Specialized", model:"Diverge 4 Pro", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:50, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,4 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (vorne)", tubeless:true, ebike:false, geoDesc:"Topmodell mit SRAM Force XPLR AXS (1×13), Roval-Terra-CLX-Carbon und Future Shock. Gebaut für Gravelrennen wie Unbound.", url:"https://www.specialized.com/nl/nl/diverge-4-pro-sram-force-xplr/p/4293747" },
  { brand:"Specialized", model:"Diverge 4 Pro LTD", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:50, priceClass:6, price:9999, priceLabel:"~€9.999", shifting:"Shimano", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,3 kg", group:"XTR/GRX Di2", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (vorne)", tubeless:true, ebike:false, geoDesc:"Limited Edition mit kabellosem Shimano-XTR/GRX-Di2-Mix, nur online erhältlich. Das Maximum der neuen Diverge-4-Plattform.", url:"https://www.specialized.com/nl/nl/diverge-4-pro-ltd-shimano-xtrgrx-di2/p/4296390" },
  { brand:"Specialized", model:"Crux DSW Comp", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:47, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"SRAM", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Apex XPLR", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium-Crux mit D'Aluisio-Smartweld-Schweißtechnik und SRAM Apex XPLR 1×12. Leicht (rund 9,3 kg), schnell und relativ bezahlbar.", url:"https://www.specialized.com/nl/nl/crux-dsw/p/4221804" },
  { brand:"Specialized", model:"Crux Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:47, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,7 kg", group:"GRX 820", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon-Crux der vorigen Generation mit GRX 820 2×12: Cyclocross-DNA, geringes Gewicht und 47 mm Reifenfreiheit.", url:"https://www.specialized.com/nl/nl/crux-comp-shimano-grx/p/4223490" },
  { brand:"Specialized", model:"Crux Expert", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,1 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Leichter Carbon-Racer mit kabelloser Rival XPLR AXS und Roval-Terra-C-Laufrädern. Messerscharf auf schnellen Gravelstrecken.", url:"https://www.specialized.com/nl/nl/crux-expert-sram-rival-xplr-axs-/p/4223489" },
  { brand:"Specialized", model:"S-Works Crux", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX II", maxTire:47, priceClass:6, price:12999, priceLabel:"~€12.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,2 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"S-Works-Version des vorigen Crux: FACT-12r-Rahmen, RED XPLR AXS und Terra-CLX-II-Laufräder, rund 7,2 kg.", url:"https://www.specialized.com/nl/nl/s-works-crux-sram-red-xplr/p/4223487" },
  { brand:"Specialized", model:"Crux 5 Sport", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:55, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX 820", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Neue Crux-5-Generation mit stolzen 55 mm Reifenfreiheit und GRX 820 2×12. Legendär leichtes Fahrgefühl, jetzt mit Aero-Gewinn.", url:"https://www.specialized.com/nl/nl/crux-5-sport-shimano-grx-800/p/4312531" },
  { brand:"Specialized", model:"Crux 5 Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium-Laufradsatz", maxTire:55, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,6 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Crux 5 mit kabelloser Rival XPLR AXS (1×13). Blitzschnell, leicht und bereit für Reifen bis 55 mm.", url:"https://www.specialized.com/nl/nl/crux-5-comp-sram-rival-xplr/p/4294832" },
  { brand:"Specialized", model:"Crux 5 Expert", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C III", maxTire:55, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"8,2 kg leichter Racer mit Force XPLR AXS (1×13) und Roval Terra C III Carbon-Laufrädern. Aero, leicht und ausgewogen.", url:"https://www.specialized.com/nl/nl/crux-5-expert-sram-force-xplr/p/4294830" },
  { brand:"Specialized", model:"Crux 5 S-Level", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:55, priceClass:6, price:10499, priceLabel:"~€10.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,5 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Rahmen auf S-Works-Niveau mit RED XPLR AXS (1×13) zu einem günstigeren Preis als das komplette S-Works-Paket.", url:"https://www.specialized.com/nl/nl/crux-5-s-level-sram-red-xplr/p/4294829" },
  { brand:"Specialized", model:"S-Works Crux 5", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX II", maxTire:55, priceClass:6, price:13999, priceLabel:"~€13.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,3 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Die absolute Spitze: FACT-12r-Rahmen mit 55 mm Reifenfreiheit, RED XPLR AXS und Roval Terra CLX II. Die leichteste Gravel-Rennwaffe von Specialized.", url:"https://www.specialized.com/nl/nl/s-works-crux-5-sram-red-xplr/p/4294828" },
  { brand:"Specialized", model:"Turbo Creo 2 Comp E5", frame:"aluminium", wheels:"aluminium", wheelBrand:"DT Swiss G540", maxTire:47, priceClass:4, price:4599, priceLabel:"~€4.599", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~14,2 kg", group:"Apex Eagle 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (vorne)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Aluminium-E-Gravel mit Specialized-SL-1.2-Motor (320 Wh) und SRAM Apex Eagle. Reifen bis 47 mm und Future-Shock-3.0-Dämpfung.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-comp-e5-sram-apex-eagle/p/4221861" },
  { brand:"Specialized", model:"Turbo Creo 2 Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss G540", maxTire:47, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,6 kg", group:"Apex/X1 Eagle AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (vorne)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Carbon-Turbo-Creo 2 mit SL-1.2-Motor und kabelloser Apex/X1 Eagle AXS. Leise, natürliche Unterstützung für Gravel und Straße.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-comp-sram-apex--x1-eagle-axs/p/4221866" },
  { brand:"Specialized", model:"Turbo Creo 2 Expert (GRX Di2)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:6, price:8499, priceLabel:"~€8.499", shifting:"Shimano", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,2 kg", group:"GRX Di2", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (vorne)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"E-Gravel mit elektronischer Shimano GRX Di2 und Future Shock 3.0. Leicht und sportlich, mit optionalem Range Extender für mehr Reichweite.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-expert-shimano-grx-di2/p/4221806" },
  { brand:"Specialized", model:"Turbo Creo 2 Expert (Rival/GX)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:6, price:8499, priceLabel:"~€8.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,3 kg", group:"Rival/GX AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (vorne)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Expert-Version mit SRAM Rival/GX Eagle AXS Mullet für zusätzliche Kletterbandbreite auf harten Gravelrouten.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-expert-sram-rival--gx-eagle-axs/p/4221865" },
  { brand:"Specialized", model:"S-Works Turbo Creo 2", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:47, priceClass:6, price:12999, priceLabel:"~€12.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~12,6 kg", group:"RED/XX1 AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (vorne)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Top-E-Gravel (rund 12,6 kg) mit SRAM RED/XX1 Eagle AXS und Roval-Terra-CLX-Laufrädern. Maximale Leistung mit SL-1.2-Unterstützung.", url:"https://www.specialized.com/nl/nl/s-works-turbo-creo-2-sram-red--xx1-eagle-axs/p/4221805" },
  { brand:"Cube", model:"Nuroad ONE", frame:"aluminium", wheels:"aluminium", wheelBrand:"Cube ARD25", maxTire:45, priceClass:1, price:899, priceLabel:"~€899", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,2 kg", group:"CUES U6000 1x9", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Einsteiger der Nuroad-Reihe: 6061-T6-Alurahmen mit Carbongabel und Shimano CUES 1×9 für ein starkes Preis-Leistungs-Verhältnis. Bis 45 mm Reifenfreiheit und viele Befestigungspunkte für Satteltaschen und Flaschen. Ein vielseitiges, zuverlässiges Gravelbike für den Anfang.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad ONE FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"Cube ARD25", maxTire:45, priceClass:1, price:999, priceLabel:"~€999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,2 kg", group:"CUES U6000 1x9", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Voll ausgestattetes Nuroad ONE: dieselbe Alu-Basis mit CUES 1×9, aber serienmäßig mit Schutzblechen, Gepäckträger, Ständer und Beleuchtung. Bereit für Arbeitsweg und Bikepacking — alles für unter 1.000 €. Ein unschlagbarer Einstieg für alle, die sofort losfahren wollen.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad Pro", frame:"aluminium", wheels:"aluminium", wheelBrand:"Cube EX25", maxTire:45, priceClass:2, price:1099, priceLabel:"~€1.099", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Erstes Modell mit echter Shimano GRX (RX400, 2×10): präziseres Schalten und hydraulische GRX-Bremsen. Leichte Alu-Basis mit Carbongabel und 45 mm Reifenfreiheit, geeignet für längere Graveltouren. Der beste Einstieg mit gravelspezifischer Gruppe.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad Pro FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"Cube EX25", maxTire:45, priceClass:2, price:1199, priceLabel:"~€1.199", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,8 kg", group:"GRX RX400 2x10", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Voll ausgestattete Version des Nuroad Pro: Shimano GRX RX400 2×10 mit serienmäßig montierten Schutzblechen, Gepäckträger, Ständer und Beleuchtung. Bereit für Arbeitsweg und Bikepacking, mit 45 mm Reifenfreiheit. Vielseitig und fahrbereit.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad EX", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:45, priceClass:2, price:1399, priceLabel:"~€1.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Ein Schritt nach oben zu Shimano GRX 600/RX610 1×12 mit Newmen-Laufrädern — flüssigeres Schalten und leichteres Fahren. Behält die vielseitige Nuroad-Basis mit Befestigungspunkten und 45 mm Reifenfreiheit. Eine schöne Wahl, wenn das Nuroad dein erstes echtes Gravelbike wird.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad Race", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX RX820 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Neu 2026: High-Performance-Aluminiumrahmen im C:62-Look, mechanische GRX 820 1×12 und 50 mm Reifenfreiheit. Schnellere Geometrie, leichter als der alte Rahmen und SIC-2.0-Gepäckträgeraufnahmen. Viel Race-Gravel für ein knappes Budget.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad Race FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:2, price:1599, priceLabel:"~€1.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,8 kg", group:"GRX RX820 1x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Alu-HPA-Rahmen auf Rennniveau mit GRX 820 1×12, aber serienmäßig mit Schutzblechen, Gepäckträger und Beleuchtung. Für alle, die Tempo und Alltagstauglichkeit verbinden wollen — sportlicher Pendler und Bikepacker zugleich.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad SLX", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Performance SL", maxTire:50, priceClass:2, price:1699, priceLabel:"~€1.699", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"GRX RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodell des Aluminium-Nuroad 2026: neuer HPA-Rahmen, GRX 820 2×12 für maximale Bandbreite und 50-mm-Reifen. Leichtes Alu-Race-Gravel mit Newmen-Laufrädern und moderner Verarbeitung — eine starke Alternative zu Einstiegs-Carbon.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 ONE", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Einstiegs-Carbon-Nuroad: C:62-Rahmen mit GRX 600/RX610 1×12 für unter 2.000 €. Leichter und steifer als der Alurahmen, mit Befestigungspunkten und 50 mm Reifenfreiheit. Das beste Preis-Leistungs-Verhältnis für ein Carbon-Gravelbike.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 Pro", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:3, price:2499, priceLabel:"~€2.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon-Nuroad mit GRX 820 1×12: flüssige mechanische Gruppe und geringeres Gewicht. Behält 50 mm Reifenfreiheit und Befestigungspunkte, mit dem moderneren Cockpit des 2026-Updates. Starke Allround-Wahl in Carbon.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 Pro FE", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:3, price:2599, priceLabel:"~€2.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"GRX RX820 2x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon-C:62-Nuroad in voll ausgestatteter Fully-Equipped-Version: GRX 820 2×12 mit Schutzblechen, Gepäckträger und Beleuchtung. Leichte Carbon-Basis mit 50 mm Reifenfreiheit für schnelles Pendeln und Bikepacking. Vielseitigkeit ohne Gewichtsnachteil.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 EX", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Performance SL", maxTire:50, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,7 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon-Nuroad mit elektronischer Shimano GRX Di2 RX825 1×12 und Monocoque-Cockpit. Kabelloses Schalten auf leichter C:62-Basis mit 50 mm Reifenfreiheit und Befestigungspunkten. Die günstigste elektronische 1× der Nuroad-Reihe.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 EXC", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced G.34", maxTire:50, priceClass:3, price:3399, priceLabel:"~€3.399", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,3 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Günstiger Carbon-Racer mit kabelloser SRAM Force XPLR AXS 13-fach, Powermeter und Newmen Advanced G.34 Carbon-Laufrädern. Gravelspezifische 1×13-Übersetzung auf leichtem C:62-Rahmen mit 50 mm Reifenfreiheit. Viel High-End-Gruppe fürs Geld.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 Race", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Performance SL", maxTire:50, priceClass:4, price:3599, priceLabel:"~€3.599", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Rennorientiertes Carbon-Nuroad mit elektronischer GRX Di2 RX825 2×12 und Monocoque-Cockpit. Schnell, präzise und mit den neuen Aero-Details von 2026. Für alle, die Rennleistung und kabelloses Schalten ohne Spitzenpreis wollen.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 SLX", frame:"carbon", wheels:"carbon", wheelBrand:"Zipp 303 XPLR S", maxTire:50, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"Force XPLR / GX Eagle AXS 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aero-orientierter Carbon-Racer mit SRAM-Force-XPLR-AXS-Schalthebeln und GX Eagle AXS Transmission Mullet für extra große Bandbreite (1×12), Force-Kurbel mit Powermeter und aerodynamischen Zipp 303 XPLR S Carbon-Laufrädern. Für alle, die maximale Kletterbandbreite und Tempo wollen.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 SLT", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced SL X.R.36", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodell mit SRAM Red XPLR AXS 13-fach inklusive Powermeter, Newmen Advanced SL Carbon-Laufrädern und integriertem Monocoque-Cockpit. Eine Ausstattung, die normalerweise das Doppelte kostet — eines der schärfsten High-End-Carbon-Gravelbikes auf dem Markt.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cannondale", model:"Topstone 2 Cues", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:2, price:1799, priceLabel:"~€1.799", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Einstiegs-Topstone mit SmartForm-C2-Alurahmen und Shimano CUES 1×11: bezahlbar, zuverlässig und mit 47 mm Reifenfreiheit. Viele Befestigungspunkte und Schutzblechösen machen es geeignet für Pendeln, Gravel und leichte Touren. Das beste Budget-Topstone.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone 2 GRX", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Erstes Topstone mit echter Shimano GRX (RX400 2×10): größere Bandbreite als CUES und gravelspezifische Schalthebel. Alurahmen, 47-mm-Reifen und umfangreiche Befestigungsmöglichkeiten — ein vielseitiger Schritt nach oben.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,0 kg", group:"GRX RX400 2x10", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topstone mit Komplettpaket: Schutzbleche, Gepäckträger, Beleuchtung und Ständer serienmäßig. GRX RX400 2×10 für Gravel-Schaltung und bequemes Pendeln. Für alle, die sofort jedem Wetter gewachsen sein wollen.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone 1", frame:"aluminium", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:47, priceClass:3, price:2399, priceLabel:"~€2.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,0 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top-Aluminium-Topstone mit mechanischer Top-GRX 820 2×12 und hochwertigeren WTB-CZR-Laufrädern. Schnelles, leichtes Alu-Gravelbike mit 47 mm Reifenfreiheit, SmartSense-kompatibel. Das sportliche Ende der Alu-Palette.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone Carbon 4", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,1 kg", group:"Apex 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (hinten, 30 mm)", tubeless:true, ebike:false, geoDesc:"Günstigstes Carbon-Topstone mit Kingpin-Hinterbaufederung (30 mm Komfort) und SRAM Apex 1×11. Reifen bis 52 mm, StashPort-Staufach im Unterrohr und viele Befestigungsösen. Der Einstieg für alle, die Carbon und Dämpfung für unter 2.700 € wollen.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 3 GRX 1x12", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (hinten, 30 mm)", tubeless:true, ebike:false, geoDesc:"Carbon-Topstone mit GRX 820 1×12 und gedämpfter Kingpin-Hinterbaufederung. Einfacher 1×-Antrieb, 52-mm-Reifen und StashPort. Geschmeidig, komfortabel und sportlich für den Allround-Einsatz.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 3 GRX 2x12", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (hinten, 30 mm)", tubeless:true, ebike:false, geoDesc:"Dasselbe Carbon-Topstone, aber mit GRX 820 2×12 für maximale Bandbreite. Verbindet Kingpin-Komfort, 52-mm-Reifen und kleine Gangsprünge — schön zum Klettern und für lange Touren.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 2 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:52, priceClass:4, price:3799, priceLabel:"~€3.799", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (hinten, 30 mm)", tubeless:true, ebike:false, geoDesc:"Carbon-Topstone mit kabelloser SRAM Rival XPLR 13-fach und Kingpin-Dämpfung. Hochwertigere WTB-CZR-Laufräder und 52 mm Reifenfreiheit machen es scharf und komfortabel. Der erste Schritt zum elektronischen Schalten beim Topstone.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 2 AXS SmartSense", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:52, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (hinten, 30 mm)", tubeless:true, ebike:false, geoDesc:"Topstone Carbon 2 AXS mit Cannondale SmartSense: integrierte Beleuchtung und Rückfahrradar mit eigenem Akku. Sicherheit und Pendlerfunktionen ohne Kabelsalat. Für alle, die auch im Dunkeln oder auf der Straße fahren wollen.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 1 Lefty AXS", frame:"carbon", wheels:"carbon", wheelBrand:"HollowGram 45 SL KNØT", maxTire:52, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,4 kg", group:"Force AXS 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Lefty Oliver (vorne, 30 mm) + Kingpin", tubeless:true, ebike:false, geoDesc:"Topmodell Topstone mit doppelter Dämpfung: einzigartige Lefty-Oliver-Federgabel (30 mm) plus Kingpin-Hinterbaufederung. Kabellose Force AXS 2×12 und HollowGram-Carbon-Laufräder. Das am stärksten gedämpfte Gravelbike — für alle, die das rauste Abenteuer suchen.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"SuperX 4 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:45, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Die Rückkehr des Namens SuperX als Race-Gravelbike: aggressive Carbongeometrie, UDH-Schaltauge und Apex XPLR AXS 12-fach. Schnell und straff mit 45 mm Reifenfreiheit. Für Rennfahrer und Gravelracer.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Cannondale", model:"SuperX 3", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss ERC LOG 45", maxTire:45, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mittelklasse-Renn-SuperX mit Rival XPLR AXS 13-fach und DT Swiss ERC LOG 45 Carbon-Laufrädern. Steif und aerodynamisch, gemacht für Gravelrennen und schnelle Runden. Der sportliche Sweet Spot.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Cannondale", model:"SuperX 1", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44 GR", maxTire:45, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodell SuperX: SRAM Force XPLR AXS 13-fach mit Reserve 40|44 GR Carbon-Laufrädern. Das leichteste, schnellste Race-Gravelbike von Cannondale, mit UDH und sportlicher Geometrie. Fürs Podium in der Gravelsaison.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Giant", model:"Revolt 2", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant SX-2", maxTire:53, priceClass:2, price:1399, priceLabel:"~€1.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze)", tubeless:true, ebike:false, geoDesc:"Einstiegs-Revolt mit ALUXX-Rahmen, D-Fuse-Sattelstütze und Shimano CUES 1×11. Reifen bis 53 mm per Flip-Chip und umfangreiche Befestigungspunkte — ein vielseitiges, bezahlbares Gravelbike. Gutes Preis-Leistungs-Verhältnis für alle, die gerade mit Gravel anfangen.", url:"https://www.giant-bicycles.com/nl/revolt-2" },
  { brand:"Giant", model:"Revolt 1", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant SX-2", maxTire:53, priceClass:2, price:1749, priceLabel:"~€1.749", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"CUES U8000 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze)", tubeless:true, ebike:false, geoDesc:"Komfortables Alu-Revolt mit Shimano CUES 2×10 für mehr Bandbreite und D-Fuse-Dämpfung. Flip-Chip für den Radstand, 53 mm Reifenfreiheit und umfangreiche Befestigungspunkte. Ein solider Allrounder für alle, die mehr Vielseitigkeit wollen.", url:"https://www.giant-bicycles.com/nl/revolt-1" },
  { brand:"Giant", model:"Revolt 0", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant SX-2", maxTire:53, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,2 kg", group:"GRX RX610 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze)", tubeless:true, ebike:false, geoDesc:"Top-Alu-Revolt mit echter GRX RX610 2×12 und hydraulischen GRX-Bremsen. Flip-Chip, D-Fuse-Sattelstütze und 53 mm Reifenfreiheit. Das beste Aluminiummodell für alle, die sportlicher fahren wollen.", url:"https://www.giant-bicycles.com/nl/revolt-0" },
  { brand:"Giant", model:"Revolt Advanced 2", frame:"carbon", wheels:"aluminium", wheelBrand:"Giant S-R2", maxTire:53, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze + Lenker)", tubeless:true, ebike:false, geoDesc:"Carbon-Einstieg Revolt Advanced: Flip-Chip, D-Fuse-Dämpfung und mechanische GRX 820 1×12. 53 mm Reifenfreiheit und Befestigungsösen fürs Bikepacking. Vielseitiges und ausgewogenes Carbonmodell.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-2" },
  { brand:"Giant", model:"Revolt Advanced 1", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 2", maxTire:53, priceClass:4, price:3599, priceLabel:"~€3.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,1 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze + Lenker)", tubeless:true, ebike:false, geoDesc:"Carbon-Revolt mit mechanischer GRX 820 2×12 für große Bandbreite. Leichter als die Alu-Versionen, mit D-Fuse-Dämpfung und Flip-Chip. Eine starke Preis-Leistungs-Wahl für alle, die ein vielseitiges 2× wollen.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-1" },
  { brand:"Giant", model:"Revolt Advanced 0", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 2", maxTire:53, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"Shimano", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,8 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze + Lenker)", tubeless:true, ebike:false, geoDesc:"Erstes Di2-Revolt: GRX RX825 Di2 2×12, leichter und kabellos. Behält Flip-Chip und D-Fuse-Komfort. Schnelle, sportlichere Geometrie für alle, die elektronisch schalten wollen, ohne Spitzenpreis.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-0" },
  { brand:"Giant", model:"Revolt Advanced Pro 1", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 2 Carbon", maxTire:53, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze + Lenker)", tubeless:true, ebike:false, geoDesc:"Advanced-Pro-Rahmen mit Rennsteifigkeit, integriertem Cockpit und GRX Di2 2×12. Carbon-CXR-Laufräder und Staufach im Rahmen. Schnelles, komplettes Race-Gravelbike für ambitionierte Fahrer.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-pro-1" },
  { brand:"Giant", model:"Revolt Advanced Pro 0", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 1 Carbon", maxTire:53, priceClass:5, price:5969, priceLabel:"~€5.969", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze + Lenker)", tubeless:true, ebike:false, geoDesc:"Topmodell Revolt mit SRAM Force XPLR AXS 13-fach, Carbon in Advanced-Qualität und CXR-1-Carbon-Laufrädern. Voll integriert, Flip-Chip und D-Fuse — Rennleistung mit Allroad-Vielseitigkeit. Für anspruchsvolle Gravelfahrer.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-pro-0" },
  { brand:"Scott", model:"Addict Gravel 40", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros RP2.0", maxTire:45, priceClass:3, price:2799, priceLabel:"~€2.799", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX610 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Einstiegs-Addict Gravel mit HMF-Carbon, UDH-Schaltauge und mechanischer GRX 600/610 2×12. 45 mm Reifenfreiheit und versteckte Befestigungspunkte — sportliches Carbon-Gravel zu einem zugänglichen Preis.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 30", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital 2.0", maxTire:45, priceClass:3, price:3299, priceLabel:"~€3.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Sportlicher Carbon-Gravelracer mit aerodynamischem Rahmen, voll integrierten Zügen und 2× GRX 820. UDH-Standard, 45 mm Reifenfreiheit und versteckte Schutzblechbefestigung. Ein schnelles Bike, das auch für längere Touren taugt.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 20", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital 2.0", maxTire:45, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Schnelles Addict mit kabelloser SRAM Rival XPLR 13-fach und integriertem Cockpit, auf Leistung ausgelegt. Leicht und straff, mit versteckten Befestigungspunkten für etwas mehr Flexibilität. Für Gravelfahrer, die Strava-Segmente jagen.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 10", frame:"carbon", wheels:"carbon", wheelBrand:"Syncros Capital SL", maxTire:45, priceClass:5, price:5199, priceLabel:"~€5.199", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force AXS 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Hochwertiges Addict Gravel mit kabelloser SRAM Force AXS 2×12 und Carbon-Laufrädern von Syncros. UDH, 45-mm-Reifen und integriertes Cockpit. Ein starkes Angebot für alle, die elektronisches 2× und Carbon-Laufräder wollen.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel RC", frame:"carbon", wheels:"carbon", wheelBrand:"Syncros Capital SL", maxTire:45, priceClass:6, price:8999, priceLabel:"~€8.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das Renn-Topmodell mit ultraleichtem HMX-Carbon, SRAM Red XPLR 13-fach und Carbon-Laufrädern von Syncros. Mit ~7,6 kg pures Tempo; Gepäckpunkte sind minimal, Schutzbleche bleiben aber möglich. Für ehrgeizige Gravelracer, die das Leichteste wollen.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Ridley", model:"Kanzo A GRX 600", frame:"aluminium", wheels:"aluminium", wheelBrand:"Ridley 4ZA", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX RX610 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Zugängliches Aluminium-Kanzo der belgischen Marke Ridley mit 2× GRX 600 und Platz für 47-mm-Reifen. Viele Befestigungspunkte und Schutzblechösen machen es vielseitig für Touren und Allround-Gravel. Ein solider Einsteiger mit gutem Ruf.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoAdventure" },
  { brand:"Ridley", model:"Kanzo Adventure GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss G 1800", maxTire:47, priceClass:3, price:2899, priceLabel:"~€2.899", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"GRX RX820 1x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon-Bikepacking-Gravel mit MTB-inspirierter Geometrie und rund 20 Befestigungspunkten für Taschen und Flaschen. 1× GRX und 47 mm Reifenfreiheit machen es bereit für lange, autarke Abenteuer. Gebaut, um vollbepackt weit von zu Hause wegzufahren.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoAdventure" },
  { brand:"Ridley", model:"Kanzo Fast Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Forza Levanto Carbon", maxTire:42, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,8 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Eines der ersten echten Aero-Gravelbikes, mit tiefer, sportlicher Sitzposition und schneller CX-Geometrie. Kabellose SRAM Force XPLR 1× und Carbon-Laufräder machen es leicht und schnell; Gepäck und Schutzbleche sind nicht vorgesehen. Eigene Farben im Konfigurator wählbar.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoFast" },
  { brand:"Cervélo", model:"Áspero GRX", frame:"carbon", wheels:"aluminium", wheelBrand:"HED Emporia GA", maxTire:44, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,6 kg", group:"GRX RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Echtes Race-Gravel von Cervélo mit aggressiver, direkter Geometrie und 2× GRX. Keine Federung oder Gepäckpunkte — ganz auf Tempo und präzises Handling im Rennen ausgelegt. Für alle, die Gravelrennen auf gemischtem Terrain gewinnen wollen.", url:"https://www.cervelo.com/en-US/bikes/aspero" },
  { brand:"Cervélo", model:"Áspero Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Schnelles Áspero mit kabelloser SRAM Force XPLR 1× und Carbon-Laufrädern von Reserve. Straff, leicht und aerodynamisch, gebaut für Gravel-Wettkämpfe. Die Wahl für Leistung statt Komfort und Gepäck.", url:"https://www.cervelo.com/en-US/bikes/aspero" },
  { brand:"Cervélo", model:"Áspero-5 Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:6, price:8299, priceLabel:"~€8.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das aerodynamisch optimierte Áspero-5 mit Matched- oder Mixed-Tire-Geometrie für maximales Tempo. Kabellose Force XPLR 1× und Carbon-Laufräder; ganz aufs Rennen ausgerichtet, ohne Gepäckoptionen. Einer der schnellsten Gravelrahmen auf dem Markt.", url:"https://www.cervelo.com/en-US/bikes/aspero-5" },
  { brand:"Cervélo", model:"Áspero-5 Red XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:6, price:11499, priceLabel:"~€11.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das Flaggschiff mit SRAM Red XPLR 1×, ultraleicht und aerodynamisch dominant. Gebaut für die Spitze des Gravelrennsports, ohne Kompromisse beim Tempo. Für Fahrer, die das Allerschnellste suchen.", url:"https://www.cervelo.com/en-US/bikes/aspero-5" },
  { brand:"Orbea", model:"Terra H30", frame:"aluminium", wheels:"carbon", wheelBrand:"Oquo RC25", maxTire:50, priceClass:2, price:1899, priceLabel:"~€1.899", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Bezahlbares, verspieltes Aluminium-Gravel von Orbea mit 1× GRX und Platz für Reifen bis 50 mm. Befestigungs- und Schutzblechpunkte machen es vielseitig, und teurere Versionen lassen sich über MyO kostenlos personalisieren. Ein lustiger, zugänglicher Allrounder.", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Orbea", model:"Terra M30", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RC30TEAM", maxTire:50, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,8 kg", group:"GRX 820", region:"nl", geo:"Adventure Gravel", drivetrain:"1x/2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Komfortables OMR-Carbon-Terra mit vibrationsdämpfendem Rahmen und praktischem LOCKR-Staufach im Unterrohr. Als 1× oder 2× GRX konfigurierbar, mit Befestigungspunkten und Schutzblechösen für vielseitigen Einsatz. Über MyO personalisierbar für einen eigenen Look.", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Orbea", model:"Terra M21eTEAM", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RP50LTD", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Leichtes OMR-Carbon-Terra mit kabelloser SRAM Force XPLR 1× und Carbon-Laufrädern von Oquo. Über MyO ganz nach Wunsch konfigurierbar, mit Befestigungspunkten für mehr Flexibilität. Schnell und komfortabel für längere Abenteuer. (Das 'e' steht hier für die Ausstattungsvariante — das ist kein E-Bike.)", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Pinarello", model:"Grevil F1", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:3500, priceLabel:"~€3.500", shifting:"Shimano", electronic:false, integrated:true, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX610 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 Größen (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Einstiegs-Grevil F mit T600-Carbon und mechanischer GRX 610 2×12. Behält die ikonischen gewellten Rohre, das Unterrohr-Staufach und 50 mm Reifenfreiheit. Der günstigste Weg, Pinarello-Stil mit praktischem Gravelspaß zu verbinden.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Grevil F3 GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:4300, priceLabel:"~€4.300", shifting:"Shimano", electronic:false, integrated:true, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 Größen (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mittelklasse-Grevil F mit T700-Carbon und mechanischer Shimano GRX 820 2×12 — große Bandbreite für Klettern und Tempo. Derselbe Rahmen, dasselbe Unterrohr-Staufach und 50 mm Reifenfreiheit wie die SRAM-Version, aber mit 2× und Shimano-Bedienung. Derselbe Preis wie die Apex-Version.", url:"https://pinarello.com/global/en/bikes/gravel/competition/new-grevil-f/new-grevil-f3-shimano-grx-820" },
  { brand:"Pinarello", model:"Grevil F3 Apex XPLR", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:4300, priceLabel:"~€4.300", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,2 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 Größen (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mittelklasse-Grevil F mit T700-Carbon und kabelloser SRAM Apex XPLR AXS 1×. Integriertes Cockpit, Unterrohr-Staufach und 50 mm Reifenfreiheit. Erster elektronischer Schritt ohne Spitzenpreis.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Grevil F5", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:5, price:5600, priceLabel:"~€5.600", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~9,0 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 Größen (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Sweet-Spot-Grevil F mit T700-Carbon und kabelloser SRAM Rival XPLR 13-fach. Unterrohr-Staufach, integriertes Cockpit und 50 mm Reifenfreiheit. Italienischer Stil kombiniert mit sportlicher Leistung.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Grevil F7 GRX 825 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:5, price:6900, priceLabel:"~€6.900", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,8 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 Größen (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Grevil F7 mit elektronischer Shimano GRX Di2 RX825 2×12 — große Bandbreite und kabelloses Schalten für lange Tage. T900-Carbon, Princeton-GR-Carbon-Laufräder und integriertes Cockpit. Die Shimano-Alternative auf hohem Grevil-Niveau.", url:"https://pinarello.com/global/en/bikes/gravel/competition/new-grevil-f/new-grevil-f7-shimano-grx-825-di2" },
  { brand:"Pinarello", model:"Grevil F7 Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:5, price:7200, priceLabel:"~€7.200", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 Größen (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Höheres Grevil F mit T900-Carbon und kabelloser SRAM Force XPLR 13-fach. Princeton-GR-Carbon-Laufräder und integriertes Cockpit. Für alle, die Stil, Tempo und Vielseitigkeit vereinen wollen.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Grevil F9", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:6, price:11000, priceLabel:"~€11.000", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 Größen (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Flaggschiff-Grevil F mit T900-Carbon und SRAM Red XPLR 13-fach. Princeton-GR-Carbon, Unterrohr-Staufach und integriertes Cockpit. Für alle, die das Maximum aus der Grevil-Plattform wollen — exklusiv und komplett.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Dogma GR", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton Grit 4540", maxTire:45, priceClass:6, price:13999, priceLabel:"~€13.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,3 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"9 Größen (43–59,5 cm)", sizeList:["43","46,5","50","51,5","53","54,5","56","57,5","59,5"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das Gravel-Flaggschiff von Pinarello mit neuem M40X-Carbon, einem Rahmen von ~960 g und 7,3 kg komplett. SRAM Red XPLR 13-fach und reine Rennabstimmung für Rennen unter fünf Stunden. Kein Gepäck und keine Federung — alles steht im Dienst des Tempos.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/dogma-gr" },
  { brand:"Factor", model:"Ostro Gravel Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Black Inc Forty Five", maxTire:45, priceClass:6, price:8999, priceLabel:"~€8.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aero-Race-Gravel von Factor mit der 'win everywhere'-Mentalität des Ostro VAM. Überlegene Steifigkeit, integrierte Black-Inc-Laufräder und kabellose Force XPLR 1×. Für leistungsorientierte Fahrer, die eine exklusive Rennmaschine wollen.", url:"https://factorbikes.com/bikes/ostro-gravel" },
  { brand:"Factor", model:"Ostro Gravel Red XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Black Inc Forty Five", maxTire:45, priceClass:6, price:11500, priceLabel:"~€11.500", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,4 kg", group:"Red XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Flaggschiff Ostro Gravel mit SRAM Red XPLR 13-fach, UDH-Schaltauge und Premium-Carbon. Das leichteste und schnellste der Reihe, ganz aufs Rennen ausgerichtet. Eine exklusive Wahl für alle, die das Beste von Factor wollen.", url:"https://factorbikes.com/bikes/ostro-gravel" },
  { brand:"Cannondale", model:"Topstone Neo SL 1", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:45, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X35+ Nabe (40 Nm)", battery:"250 Wh", geoDesc:"Leichtes E-Gravel (~13,5 kg) mit dezentem Mahle-X35+-Nabensystem (40 Nm) und 250-Wh-Akku. Fühlt sich an wie ein normales Gravelbike, aber mit etwas Rückenwind; bis 45 mm Reifenfreiheit und viele Befestigungspunkte. Für alle, die dezente, natürliche Unterstützung suchen.", url:"https://www.cannondale.com/en-nl/bikes/electric/e-road/topstone-neo-sl" },
  { brand:"Giant", model:"Revolt E+ 2", frame:"aluminium", wheels:"carbon", wheelBrand:"Giant CXR", maxTire:53, priceClass:4, price:4399, priceLabel:"~€4.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~18,0 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze)", tubeless:true, ebike:true, motor:"Shimano EP600 (85 Nm)", battery:"500 Wh", geoDesc:"Einstiegs-Full-Power-E-Gravel mit Shimano-EP600-Motor (85 Nm) und 500-Wh-Akku. GRX RX400 2×10 und Flip-Chip; 53 mm Reifenfreiheit für Abenteuer. Für alle, die kräftige Unterstützung ohne Spitzenpreis wollen.", url:"https://www.giant-bicycles.com/nl/revolt-eplus-2" },
  { brand:"Giant", model:"Revolt E+ 1", frame:"aluminium", wheels:"carbon", wheelBrand:"Giant CXR", maxTire:53, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~17,5 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (Sattelstütze + Lenker)", tubeless:true, ebike:true, motor:"Shimano EP600 (85 Nm)", battery:"500 Wh", geoDesc:"Kräftiges Full-Power-E-Gravel mit Shimano EP600 (85 Nm) und 500-Wh-Akku, kombiniert mit GRX 820 1×12. Flip-Chip, D-Fuse und 53 mm Reifenfreiheit. Für schweres Gelände und lange Touren mit maximaler Unterstützung.", url:"https://www.giant-bicycles.com/nl/revolt-eplus-1" },
  { brand:"Orbea", model:"Gain M30", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RP35", maxTire:40, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~11,5 kg", group:"GRX 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XXL (6)", sizeList:["XS","S","M","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X20 (55 Nm)", battery:"350 Wh", geoDesc:"Ultraleichtes All-Road/Gravel-E-Bike (~11,5 kg) mit dem nahezu unsichtbaren Mahle-X20-System (55 Nm). Reifen bis 40 mm machen es ideal für schnelle gemischte Runden und asphaltierte Straßen, weniger für rauen Schotter. Für alle, die ein elegantes, leichtes E-Bike ohne E-Bike-Optik suchen.", url:"https://www.orbea.com/us-en/ebikes/road/gain/" },
  { brand:"Cube", model:"Nuroad Hybrid C:62 SLX", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Performance SL", maxTire:50, priceClass:5, price:5299, priceLabel:"~€5.299", shifting:"Shimano", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,8 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"Leichtes Carbon-E-Gravel mit kompaktem Bosch Performance SX (55 Nm) und elektronischer GRX Di2 RX825. Reifen bis 50 mm und viele Befestigungspunkte für Bikepacking mit Unterstützung. Modernes, hochwertiges E-Gravel.", url:"https://www.cube.eu/e-bikes/gravel/nuroad-hybrid" },
  { brand:"Pinarello", model:"Nytro E5 Gravel", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,0 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 Größen", sizeCats:["XS","S","M","L","XL"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:true, motor:"TQ HPR50 (50 Nm)", battery:"360 Wh", geoDesc:"Eines der leichtesten E-Gravelbikes, mit dem geschmeidigen TQ-HPR50-Motor (50 Nm) und 360-Wh-Akku. Italienische Abstimmung, kabellose SRAM Rival XPLR 1× und optionaler Range Extender für mehr Reichweite. Für alle, die Stil und dezente Unterstützung suchen.", url:"https://pinarello.com/global/en/bikes/gravel/supercharged/nytro-e-gravel" },
  { brand:"Scott", model:"Solace Gravel eRIDE 30", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~14,0 kg", group:"GRX 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"TQ HPR50 (50 Nm)", battery:"360 Wh", geoDesc:"Stilvolles E-Gravel mit flüsterleisem TQ-HPR50-Motor (50 Nm) und integriertem 360-Wh-Akku. Natürliches Fahrgefühl, Platz für Reifen bis 50 mm und viele Befestigungspunkte für Abenteuer. Ein feines, leichtes E-Gravel für lange Touren.", url:"https://www.scott-sports.com/us/en/eride-road-gravel" },
  { brand:"Rose", model:"Blend Gravel", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G20", maxTire:40, priceClass:2, price:1424, priceLabel:"~€1.424", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~10,0 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XXS–XXL (7 Größen)", sizeList:["XXS","XS","S","M","L","XL","XXL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das Blend Gravel macht den Einstieg leicht: Aluminiumrahmen mit Carbongabel, zuverlässige GRX 400 2×10 und 40-mm-Continental-Reifen zu einem günstigen Preis. Integrierte Züge, UDH-Standard und Schutzblech-Option machen es überraschend erwachsen. Mit 7 Größen (XXS–XXL) ein ideales erstes Gravelbike.", url:"https://www.rosebikes.nl/fietsen/gravel/everyday/blend" },
  { brand:"Rose", model:"Hobo Cues", frame:"staal", wheels:"aluminium", wheelBrand:"Rose G30 (650B)", maxTire:55, priceClass:2, price:1322, priceLabel:"~€1.322", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,9 kg", group:"Cues 1x10", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das Hobo ist das Alltags-Gravelbike aus Stahl von Rose mit geradem Lenker (Flatbar) — also kein Rennlenker wie bei den anderen Modellen hier. Integrierter Frontträger, 14 Befestigungspunkte und 47-mm-WTB-Reifen auf 650B-Laufrädern (Platz bis 55 mm) machen es unverwüstlich für Stadt, Touren und Bikepacking. Wartungsarme Shimano Cues 1×10 mit Daumenschalter.", url:"https://www.rosebikes.nl/fietsen/gravel/everyday/hobo" },
  { brand:"Rose", model:"Backroad AL GRX 400", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:2, price:1932, priceLabel:"~€1.932", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,6 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XXS–XXL (8 Größen)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminiumversion der neuen Backroad-Generation (2026) mit denselben cleveren Details: integriertes Rahmenfach mit Toolbag, USB-C-Ladeport am Lenker und 18 Befestigungspunkte. Die 2×10 GRX 400 bietet eine breite Übersetzung für Touren und Arbeitsweg, und es passen Reifen bis 53 mm. Mit 8 Rahmengrößen (XXS–XXL) gibt es für fast jeden eine Größe.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL Apex", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:3, price:2135, priceLabel:"~€2.135", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"Apex XPLR 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XXL (8 Größen)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Backroad AL mit mechanischer SRAM Apex XPLR 1×12 — Einfachheit und wenig Wartung auf robustem Aluminiumrahmen. Rahmenfach mit Toolbag, USB-C-Port und 18 Befestigungspunkte machen es genauso abenteuertauglich wie die Carbonversion, für weniger Geld. Erhältlich in 8 Größen von XXS bis XXL.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL GRX 610", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:3, price:2542, priceLabel:"~€2.542", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XXL (8 Größen)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das am besten ausgestattete mechanische Backroad AL, mit Shimano GRX RX610 1×12 und großer 10-51-Kassette für steile Anstiege mit Gepäck. Dieselbe 2026-Plattform mit Staufach, USB-C-Port und 18 Befestigungspunkten; Reifen bis 53 mm passen. Ein kompletter Abenteurer ohne Elektronik.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"DT Swiss G1800", maxTire:53, priceClass:3, price:2745, priceLabel:"~€2.745", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,8 kg", group:"GRX RX820 2x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"XXS–XXL (8 Größen)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Voll ausgestattetes Backroad AL: Schutzbleche, Gepäckträger und Dynamobeleuchtung ab Werk, mit 2×12 GRX 820 für feine Gangsprünge unterwegs. Serienmäßig auf 35-mm-Reifen für Arbeitsweg und Touren; ohne Schutzbleche passen bis 53 mm. Aufsteigen und losfahren, das ganze Jahr.", url:"https://www.rosebikes.nl/fietsen/gravel/everyday/backroad-al-eq" },
  { brand:"Rose", model:"Backroad GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:3, price:2949, priceLabel:"~€2.949", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das komplett erneuerte Carbon-Backroad (2026) hat ein integriertes Staufach im Unterrohr, einen USB-C-Ladeport am Vorbau und 18 Befestigungspunkte. Rahmen- und Toolbag sind serienmäßig dabei, und Reifen bis 53 mm passen in den Rahmen. Mit mechanischer GRX 820 1×12 der günstige Einstieg in die neue Backroad-Linie.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Apex AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:3, price:3355, priceLabel:"~€3.355", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Dasselbe neue Carbon-Backroad, aber mit kabelloser elektronischer SRAM Apex XPLR AXS und leichten ~9,2 kg. Der Rahmen bietet Stauraum im Unterrohr, einen USB-C-Port und 18 Befestigungspunkte; Rahmen- und Toolbag sind serienmäßig dabei. Der günstigste Weg zum kabellosen Schalten an einem Abenteuerbike.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad GRX 825 Di2", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:3559, priceLabel:"~€3.559", shifting:"Shimano", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Neues Backroad mit elektronischer Shimano GRX Di2 1×12 und 10-51-Kassette — präzise, leicht zu bedienen und zuverlässig in Matsch und Staub. Dazu alle Neuerungen von 2026: Rahmenfach mit Toolbag, USB-C-Ladeport, 18 Befestigungspunkte und Reifenfreiheit bis 53 mm. Für alle, die Shimano treu bleiben, aber kabellosen Komfort wollen.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Force AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:4271, priceLabel:"~€4.271", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,1 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topversion des neuen Backroad mit SRAM Force XPLR AXS 1×13 und Full-Mount-Schaltwerk nach UDH-Standard. Mit ~9,1 kg das leichteste der Backroad-Abenteuerlinie, inklusive Rahmenfach, USB-C-Port und 18 Befestigungspunkten. Tempo kombiniert mit kompletter Bikepacking-Ausstattung.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Unsupported", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:4474, priceLabel:"~€4.474", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,0 kg", group:"GRX RX820 1x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das Backroad Unsupported ist für Ultrarennen und autarkes Bikepacking gebaut: SON-Nabendynamo, Supernova-Beleuchtung, Powerbank-System und komplettes Taschenset ab Werk. Die 50-mm-Reifen Schwalbe G-One Overland und 18 Befestigungspunkte machen es bereit für Nonstop-Abenteuer, Tag und Nacht. Ein einzigartiges Konzept in dieser Übersicht.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad FF Rival XPLR AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30 LIGHT", maxTire:45, priceClass:4, price:3559, priceLabel:"~€3.559", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das Backroad FF ist das Aero-Race-Gravel von Rose aus High-Modulus-Carbon mit One-Piece-Cockpit und UDH. Diese Einstiegsversion hat kabellose SRAM Rival XPLR AXS 1×13 mit integriertem Quarq-Powermeter — selten in dieser Preisklasse. Bis 45 mm Reifenfreiheit und ~8,6 kg: gemacht für Rennen und KOMs.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF GRX 825 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:4, price:4576, priceLabel:"~€4.576", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Renn-Backroad FF mit elektronischer Shimano GRX Di2 2×12 und 4iiii-Powermeter, für kleine Gangsprünge bei hohem Tempo. Carbon-Laufräder Rose GC50 (50 mm hoch) machen es aerodynamisch stark, und mit ~8,2 kg klettert es hervorragend. Das einzige 2× der FF-Linie.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF Force XPLR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:5, price:5084, priceLabel:"~€5.084", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,9 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Backroad FF mit SRAM Force XPLR AXS 1×13, integriertem Force-Powermeter und Carbon-Laufrädern GC50 — ~7,9 kg Rennmaterial. Das aerodynamische One-Piece-Cockpit und das magnetische Taschenkonzept verbinden Tempo mit Gravel-Praxis. Für leistungsorientierte Gravelracer.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF Red XPLR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:5, price:7118, priceLabel:"~€7.118", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 Größen)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Das Flaggschiff der Backroad-FF-Linie: SRAM Red XPLR AXS 1×13, Red-Powermeter und Carbon-Laufräder GC50 bei nur ~7,6 kg. High-Modulus-Carbon und ein voll integriertes Cockpit machen es zum schnellsten Gravelbike, das Rose je gebaut hat. Direktvertriebs-Topwert gegenüber den etablierten Rennmarken.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad AL Plus Apex", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G30+", maxTire:40, priceClass:3, price:3457, priceLabel:"~€3.457", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,6 kg", group:"Apex XPLR 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X30 Nabe (45 Nm)", battery:"250 Wh (+170 Wh Range Extender optional)", geoDesc:"E-Gravel, das man kaum als E-Bike erkennt: Der Mahle-X30-Nabenmotor (45 Nm) und der 250-Wh-Akku sind nahezu unsichtbar im Aluminiumrahmen mit Carbongabel verbaut. Bis ~100 km Reichweite, optionaler Range Extender und ~13,6 kg Gesamtgewicht. Mit 12 Befestigungspunkten und SRAM Apex XPLR 1×12 bereit für Arbeitsweg und Abenteuer.", url:"https://www.rosebikes.nl/fietsen/gravel/e-gravel/backroad-al-plus" },
  { brand:"Rose", model:"Backroad AL Plus EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G30+", maxTire:40, priceClass:4, price:3864, priceLabel:"~€3.864", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~15,5 kg", group:"Cues 1x11", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X30 Nabe (45 Nm)", battery:"250 Wh (+170 Wh Range Extender optional)", geoDesc:"Das voll ausgestattete E-Backroad: Schutzbleche, Gepäckträger und Beleuchtung ab Werk, dazu der dezente Mahle-X30-Nabenmotor (45 Nm, 250 Wh). Die wartungsarme Shimano Cues 1×11 macht es sorglos für den Alltag und lange Touren. Ein elektrisches Alles-in-einem fürs ganze Jahr.", url:"https://www.rosebikes.nl/fietsen/gravel/e-gravel/backroad-al-plus" },
];

const multiKeys = new Set(['brand','price','weight','geo','tire','year','size','groupset','gravelgroep','speed','wielmerk','wielgewicht']);
const filterKeys = ['etype','price','brand','year','shifting','shifttype','groupset','gravelgroep','speed','drivetrain','frame','wheels','wielmerk','wielgewicht','tire','weight','size','geo','damping','mounts','fender'];

const state = {};
filterKeys.forEach(k => state[k] = multiKeys.has(k) ? [] : 'all');

const filterLabels = {
  etype:{all:"Alle Typen", normal:"Nicht elektrisch", electric:"Elektrisch ⚡"},
  brand:{all:"Alle Marken"},
  drivetrain:{all:"Alle Antriebe","1x":"1× Kettenblatt","2x":"2× Kettenblätter"},
  frame:{all:"Alle Rahmen",carbon:"Carbonrahmen",aluminium:"Aluminiumrahmen",staal:"Stahlrahmen",titanium:"Titanrahmen"},
  wheels:{all:"Alle Laufräder",carbon:"Carbon-Laufräder",aluminium:"Alu-Laufräder"},
  mounts:{all:"Befestigungspunkte: alle", yes:"Mit Befestigungspunkten", no:"Ohne Befestigungspunkte"},
  fender:{all:"Schutzbleche: alle", yes:"Schutzbleche möglich", no:"Keine Schutzblechbefestigung"},
  damping:{all:"Dämpfung: alle", yes:"Mit Federung/Dämpfung", no:"Ohne Federung/Dämpfung"},
  price:{all:"Alle Preise","1":"€0–1.000","2":"€1.000–2.000","3":"€2.000–3.500","4":"€3.500–5.000","5":"€5.000–7.500","6":"€7.500+"},
  shifting:{all:"Alle Marken",Shimano:"Shimano",SRAM:"SRAM"},
  shifttype:{all:"Mech+Elek",electronic:"Elektronisch",mechanical:"Mechanisch"},
  gravelgroep:{all:"Alle Gravelgruppen", xplr:"SRAM XPLR", grx:"Shimano GRX"},
  speed:{all:"Alle Kassetten","9":"9-fach","10":"10-fach","11":"11-fach","12":"12-fach","13":"13-fach (neueste)"},
  groupset:{all:"Alle Gruppen","Shimano CUES":"Shimano CUES","Shimano GRX 400":"Shimano GRX 400","Shimano GRX 600":"Shimano GRX 600","Shimano GRX 800":"Shimano GRX 800","Shimano GRX Di2":"Shimano GRX Di2","Shimano XT Di2":"Shimano XT Di2","SRAM Apex":"SRAM Apex (mech)","SRAM Apex AXS":"SRAM Apex AXS","SRAM Rival AXS":"SRAM Rival AXS","SRAM Force AXS":"SRAM Force AXS","SRAM Red AXS":"SRAM Red AXS"},
  weight:{all:"Alle Gewichte","1":"7–8 kg","2":"8–9 kg","3":"9–10 kg","4":">10 kg"},
  wielgewicht:{all:"Alle Laufradgewichte","2":"Laufräder < 1.250 g","3":"Laufräder 1.251–1.500 g","4":"Laufräder > 1.500 g","0":"Laufradgewicht unbekannt"},
  geo:{all:"Alle Geometrien","Race Gravel":"Race Gravel","Adventure Gravel":"Adventure","Bikepacking / Touring":"Bikepacking"},
  tire:{all:"Alle Reifenbreiten","1":"Bis 42 mm","2":"43–47 mm","3":"48–52 mm","4":"≥53 mm"},
  year:{all:"Alle Modelljahre","2024":"Modelljahr 2024","2025":"Modelljahr 2025","2026":"Modelljahr 2026"},
  size:{all:"Alle Rahmengrößen","2XS":"Größe 2XS","XS":"Größe XS","S":"Größe S","M":"Größe M","L":"Größe L","XL":"Größe XL","2XL":"Größe 2XL"}
};

function setupChips(groupId, key) {
  const grp = document.getElementById(groupId);
  if(!grp) return;
  grp.querySelectorAll('.gk-chip').forEach(chip => {
    if(!chip.hasAttribute('role')) chip.setAttribute('role', 'button');
    if(!chip.hasAttribute('tabindex')) chip.setAttribute('tabindex', '0');
    const handle = () => {
      if(chip.classList.contains('gk-disabled')) return;
      const val = chip.dataset.val;
      if(multiKeys.has(key)) {
        if(val === 'all') { state[key] = []; }
        else {
          const arr = state[key];
          const i = arr.indexOf(val);
          if(i >= 0) arr.splice(i, 1); else arr.push(val);
        }
      } else {
        state[key] = val;
      }
      syncChips(key);
      render();
    };
    chip.addEventListener('click', handle);
    chip.addEventListener('keydown', e => {
      if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handle(); }
    });
  });
}
/* ===== Wielmerk + wielsetgewicht: afleiding uit wheelBrand / wheelSpecs ===== */
function wheelBrandName(b) {
  const w = b.wheelBrand || '';
  const brands = ['DT Swiss','Roval','Reserve','Rose','Bontrager','Princeton','Black Inc','Zipp','Reynolds','HollowGram','Syncros','Newmen','Giant','Oquo','Cube','Alex','WTB','Fulcrum','HED'];
  for(const name of brands) if(w.indexOf(name) === 0) return name;
  if(/4ZA|Forza/.test(w)) return '4ZA / Forza';
  for(const name of brands) if(w.indexOf(name) >= 0) return name;
  return 'Generisch / OEM';
}
function wheelWeightVal(b) {
  const s = wheelSpecs[b.wheelBrand];
  if(!s || !s.weight) return null;
  const m = String(s.weight).match(/(\d[\d.]*)\s*g/);
  if(!m) return null;
  const n = parseInt(m[1].replace(/\./g, ''), 10);
  return isNaN(n) ? null : n;
}
function wheelWeightCat(b) {
  const w = wheelWeightVal(b);
  if(w === null) return null;
  if(w <= 1250) return '2';
  if(w <= 1500) return '3';
  return '4';
}
/* Wielmerk-chips dynamisch genereren uit de aanwezige wielsets */
(function(){
  const cont = document.getElementById('filter-wielmerk');
  if(!cont) return;
  const names = [...new Set(bikes.map(wheelBrandName))].sort((a, b) =>
    a === 'Generisch / OEM' ? 1 : b === 'Generisch / OEM' ? -1 : a.localeCompare(b));
  filterLabels.wielmerk = { all: 'Alle Laufradmarken' };
  names.forEach(n => {
    filterLabels.wielmerk[n] = 'Laufräder: ' + n;
    const chip = document.createElement('span');
    chip.className = 'gk-chip';
    chip.dataset.val = n;
    chip.textContent = n;
    cont.appendChild(chip);
  });
})();
filterKeys.forEach(key => setupChips('filter-' + key, key));

function syncChips(key) {
  const c = document.getElementById('filter-' + key);
  if(!c) return;
  if(multiKeys.has(key)) {
    const arr = state[key];
    c.querySelectorAll('.gk-chip').forEach(ch => ch.classList.toggle('active', ch.dataset.val === 'all' ? arr.length === 0 : arr.includes(ch.dataset.val)));
  } else {
    c.querySelectorAll('.gk-chip').forEach(ch => ch.classList.toggle('active', ch.dataset.val === state[key]));
  }
}

function resetFilters() {
  filterKeys.forEach(k => state[k] = multiKeys.has(k) ? [] : 'all');
  filterKeys.forEach(syncChips);
  render();
}

/* ===== Basis/geavanceerd filters (progressive disclosure) ===== */
const basicKeys = new Set(['etype', 'price', 'brand', 'size']);

function toggleAdv() {
  const adv = document.getElementById('gk-filters-adv');
  const btn = document.getElementById('gk-adv-toggle');
  if(!adv || !btn) return;
  const willOpen = adv.hasAttribute('hidden');
  if(willOpen) adv.removeAttribute('hidden'); else adv.setAttribute('hidden', '');
  btn.setAttribute('aria-expanded', String(willOpen));
  const lbl = btn.querySelector('.gk-adv-label');
  if(lbl) lbl.textContent = willOpen ? '🛠️ Weniger Filter' : '🛠️ Mehr Filter';
}

function advActiveCount() {
  let n = 0;
  filterKeys.forEach(k => {
    if(basicKeys.has(k)) return;
    if(multiKeys.has(k)) n += state[k].length;
    else if(state[k] !== 'all') n += 1;
  });
  return n;
}

function updateAdvBadge() {
  const btn = document.getElementById('gk-adv-toggle');
  const badge = document.getElementById('gk-adv-badge');
  if(!btn || !badge) return;
  const n = advActiveCount();
  badge.textContent = n;
  btn.classList.toggle('has-active', n > 0);
}

/* ===== Dynamische tellers per filteroptie + 0-opties uitschakelen ===== */
function updateCounts() {
  filterKeys.forEach(key => {
    const cont = document.getElementById('filter-' + key);
    if(!cont) return;
    const base = bikes.filter(b => matchesExcept(b, key));
    cont.querySelectorAll('.gk-chip').forEach(chip => {
      const val = chip.dataset.val;
      let cs = chip.querySelector('.gk-chip-count');
      if(val === 'all') { if(cs) cs.remove(); chip.classList.remove('gk-disabled'); return; }
      const n = base.reduce((acc, b) => acc + (optMatch(key, val, b) ? 1 : 0), 0);
      if(!cs) { cs = document.createElement('span'); cs.className = 'gk-chip-count'; chip.appendChild(cs); }
      cs.textContent = n;
      const active = multiKeys.has(key) ? state[key].includes(val) : state[key] === val;
      chip.classList.toggle('gk-disabled', n === 0 && !active);
    });
  });
}

function hasDamping(b) { return b.damping && b.damping !== 'Geen'; }

function tireInClass(tc, t) {
  return (tc === '1' && t <= 42) || (tc === '2' && t >= 43 && t <= 47) || (tc === '3' && t >= 48 && t <= 52) || (tc === '4' && t >= 53);
}

/* Framematen: lettermaten normaliseren, cm-maten bij benadering omrekenen */
function sizeCatOf(t) {
  const s = String(t).trim().toUpperCase();
  const map = { '3XS':['2XS'], 'XXS':['2XS'], '2XS':['2XS'], 'XS':['XS'], 'S':['S'], 'M':['M'], 'M/L':['M','L'], 'L':['L'], 'XL':['XL'], 'XXL':['2XL'], '2XL':['2XL'] };
  if(map[s]) return map[s];
  const n = parseFloat(s.replace(',', '.'));
  if(isNaN(n)) return [];
  if(n < 46) return ['2XS'];
  if(n < 50) return ['XS'];
  if(n < 53) return ['S'];
  if(n < 56) return ['M'];
  if(n < 59) return ['L'];
  if(n < 62) return ['XL'];
  return ['2XL'];
}
function bikeSizeCats(b) {
  if(!b._sizeCatsCache) {
    if(b.sizeCats) b._sizeCatsCache = b.sizeCats;
    else if(b.sizeList) b._sizeCatsCache = [...new Set(b.sizeList.flatMap(sizeCatOf))];
    else b._sizeCatsCache = [];
  }
  return b._sizeCatsCache;
}
function sizesLabel(b) {
  if(!b.sizeList || !b.sizeList.length) return b.sizes;
  return b.sizeList.join(' · ') + (/^\d+([.,]\d+)?$/.test(b.sizeList[0]) ? ' cm' : '');
}

/* Eén enkele filteroptie (key=val) toetsen tegen één fiets — basis voor de tellers */
function optMatch(key, val, b) {
  switch(key) {
    case 'etype':      return val === 'normal' ? !b.ebike : val === 'electric' ? !!b.ebike : true;
    case 'brand':      return b.brand === val;
    case 'drivetrain': return String(b.drivetrain).includes(val);
    case 'frame':      return b.frame === val;
    case 'wheels':     return b.wheels === val;
    case 'wielmerk':   return wheelBrandName(b) === val;
    case 'wielgewicht':{ const wc = wheelWeightCat(b); return val === '0' ? wc === null : wc === val; }
    case 'mounts':     return val === 'yes' ? !!b.mounts : !b.mounts;
    case 'fender':     return val === 'yes' ? !!b.fender : !b.fender;
    case 'damping':    return val === 'yes' ? hasDamping(b) : !hasDamping(b);
    case 'price':      return String(b.priceClass) === val;
    case 'shifting':   return b.shifting === val;
    case 'shifttype':  return val === 'electronic' ? !!b.electronic : !b.electronic;
    case 'groupset':   return groupFamily(b) === val;
    case 'gravelgroep': return val === 'xplr' ? isXplr(b) : val === 'grx' ? isGrx(b) : true;
    case 'speed':      return String(speedCount(b)) === val;
    case 'weight':     return String(b.weightClass) === val;
    case 'geo':        return b.geo === val;
    case 'tire':       return tireInClass(val, b.maxTire);
    case 'year':       return String(b.year) === val;
    case 'size':       return bikeSizeCats(b).includes(val);
    default:           return true;
  }
}

/* Toetst één filterkey (rekening houdend met multi/single en 'all'/leeg) tegen een fiets */
function stateKeyMatch(k, b) {
  if(multiKeys.has(k)) {
    const arr = state[k];
    if(!arr.length) return true;
    return arr.some(v => optMatch(k, v, b));
  }
  const v = state[k];
  if(v === 'all') return true;
  return optMatch(k, v, b);
}

/* Alle actieve filters behalve één (skip) — gebruikt voor faceted tellers */
function matchesExcept(b, skip) {
  for(const k of filterKeys) {
    if(k === skip) continue;
    if(!stateKeyMatch(k, b)) return false;
  }
  return true;
}

function matches(b) { return matchesExcept(b, null); }

function geoClass(geo) {
  const m = {'Race Gravel':'gk-geo-race','Adventure Gravel':'gk-geo-adventure','All-Road':'gk-geo-allroad','Endurance Gravel':'gk-geo-endurance','Bikepacking / Touring':'gk-geo-touring'};
  return m[geo] || 'gk-geo-allroad';
}

function regionLabel(r) {
  return {nl:'🇳🇱 NL',eu:'🇪🇺 EU',world:'🌍 Welt'}[r] || r;
}

function driveLabel(d) {
  return {'1x':'1× (ein Blatt)','2x':'2× (zwei Blätter)','1x/2x':'1× oder 2×'}[d] || d;
}

/* Aantal versnellingen achter (cassette). Eerst expliciet uit de group-string ("1x13", "2x10"),
   anders via familiekennis van de 2024-2026 groepsets (bronnen: sram.com, shimano.com, geverifieerd 02-07-2026):
   Apex XPLR = 12 / Rival-Force-Red XPLR AXS = 13 / alle Eagle & road-AXS = 12 / GRX 610-820-822-825 & XT(R) Di2 = 12 / GRX RX400 = 10. */
function speedCount(b) {
  const g = String(b.group || '');
  const m = g.match(/[12]\s*[x×]\s*(\d{1,2})/i);
  if(m) return parseInt(m[1], 10);
  if(/XPLR/i.test(g)) return /Apex/i.test(g) ? 12 : 13;
  if(/Eagle|XX1|\bX0\b|\bGX\b|\bX1\b/i.test(g)) return 12;
  if(/AXS/i.test(g)) return 12;
  if(/RX400|\b400\b/.test(g)) return 10;
  if(/GRX|XTR|\bXT\b|Di2/i.test(g)) return 12;
  return null;
}

function groupFamily(b) {
  const g = String(b.group || '');
  const s = b.shifting;
  if (s === 'Shimano') {
    if (/CUES|Cues/.test(g)) return 'Shimano CUES';
    if (/XT|XTR/.test(g)) return 'Shimano XT Di2';
    if (/GRX/.test(g)) {
      if (/Di2|RX825/.test(g)) return 'Shimano GRX Di2';
      if (/RX400|\b400\b/.test(g)) return 'Shimano GRX 400';
      if (/RX610|RX600|\b6\d{2}\b/.test(g)) return 'Shimano GRX 600';
      return 'Shimano GRX 800';
    }
    return 'Shimano GRX 800';
  }
  if (s === 'SRAM') {
    if (/Red|RED|XX1/.test(g)) return 'SRAM Red AXS';
    if (/Force/.test(g)) return 'SRAM Force AXS';
    if (/Rival/.test(g)) return 'SRAM Rival AXS';
    if (/Apex/.test(g)) return /AXS/.test(g) ? 'SRAM Apex AXS' : 'SRAM Apex';
    if (/X0/.test(g)) return 'SRAM Red AXS';
    return 'SRAM Apex AXS';
  }
  return s + ' ' + g;
}

function groupLabel(b) {
  const g = String(b.group || '');
  const s = String(b.shifting || '');
  if (!g) return s;
  if (g.toLowerCase().startsWith(s.toLowerCase())) return g;
  return s + ' ' + g;
}

/* XPLR = SRAM's gravel-specifieke 1×-groepset (Apex/Rival/Force/Red XPLR). Aparte markering + filter. */
function isXplr(b) { return /XPLR/i.test(String(b.group || '')); }
function isGrx(b) { return b.shifting === 'Shimano' && /GRX/i.test(String(b.group || '')); }

/* ============ Productfoto's (officiële CDN's van de merken, verzameld juni 2026) ============ */
const _TK = k => `https://media.trekbikes.com/image/upload/w_640,h_480,c_pad,e_make_transparent,f_auto,q_auto/${k}`;
const _CU = k => `https://file.cube.eu/azwesc1xfg346/thumbnail/${k}_800x800.jpg`;
const _CD = id => `https://embed.widencdn.net/img/dorelrl/${id}/640px@1x/`;
const _RO = h => `https://cdn.rosebikes.de/images/${h}.png`;
const _SC = p => `https://static.scott-sports.com/image/upload/${p}`;
const _PI = f => `https://pinarello.com/storage/thumbs/Variant/${f}`;
const _CY = u => `https://dma.canyon.com/image/upload/w_800,h_450,c_fit/f_auto/q_auto/${u}`;
const _SP = k => `https://assets.specialized.com/i/specialized/${k}?w=640&fmt=auto`;

const photoExact = {
  /* v10.4: ontbrekende foto's aangevuld — Cube-keys uit cube.eu-productoverzicht (juli 2026), Rose van productpagina */
  'Cube|Nuroad Pro FE': _CU('4d/eb/ba/1754323836/synqup_129320_S_00'),
  'Cube|Nuroad C:62 Pro FE': _CU('69/39/0a/1754323850/synqup_130210_S_00'),
  'Cube|Nuroad C:62 EX': _CU('a7/01/6e/1754323861/synqup_130310_S_00'),
  'Cube|Nuroad C:62 EXC': _CU('c1/c1/46/1754323859/synqup_130350_S_00'),
  'Cube|Nuroad C:62 SLX': _CU('fa/2f/5a/1754323870/synqup_130510_S_00'),
  'Rose|Blend Gravel': 'https://magnolia-public.prod.rose.de/.imaging/focalarea/phonePortrait/375x667/dam/jcr:30ef7691-6dec-4124-82dd-151495c9ccad/rose-bikes-blend-light-ochre-gravel.jpg',
  'Trek|Checkpoint ALR 3 Gen 3': _TK('CheckpointALR3-26-49944-B-Primary'),
  'Trek|Checkpoint ALR 4 Gen 3': _TK('CheckpointALR4-26-49973-A-Primary'),
  'Trek|Checkpoint ALR 5 Gen 3': _TK('CheckpointALR5-26-49946-C-Primary'),
  'Trek|Checkpoint SL 5 AXS Gen 3': _TK('CheckpointSL5AXS-26-47071-A-Primary'),
  'Trek|Checkpoint SL 6 AXS Gen 3': _TK('CheckpointSL6AXS-26-55098-A-Primary'),
  'Trek|Checkpoint SL 7 AXS Gen 3': _TK('CheckpointSL7AXS-26-55097-A-Primary'),
  'Trek|Checkpoint+ SL 5': _TK('CheckpointPlusSL5-26-58107-B-Primary'),
  'Trek|Checkpoint+ SL 6 AXS': _TK('CheckpointPlusSL6AXS-26-58115-B-Primary'),
  'Trek|Checkpoint+ SL 7 AXS': _TK('CheckpointPlusSL7AXS-26-58122-A-Primary'),
  'Trek|Checkmate SLR 7 AXS': _TK('CheckmateSLR7AXS-27-58668-G-Primary'),
  'Trek|Checkmate SLR 9 AXS': _TK('CheckmateSLR9AXS-27-46152-G-Primary'),
  'Trek|Check-OUT SL 5': _TK('CheckoutSL5-26-57827-A-Primary'),
  'Trek|Check-OUT SL 7 AXS': _TK('CheckoutSL7AXS-26-57828-B-Primary'),
  'Cube|Nuroad C:62 SLT': _CU('32/cb/cb/1754323881/synqup_130600_S_00'),
  'Cube|Nuroad C:62 Race': _CU('7d/g0/74/1754323865/synqup_130400_S_00'),
  'Cube|Nuroad C:62 Pro': _CU('a9/d3/ac/1754323855/synqup_130205_S_00'),
  'Cube|Nuroad C:62 ONE': _CU('70/1d/22/1754323845/synqup_130110_S_00'),
  'Cube|Nuroad SLX': _CU('66/fb/35/1754323825/synqup_129510_S_00'),
  'Cube|Nuroad Race': _CU('07/0f/e2/1754323821/synqup_129460_S_00'),
  'Cube|Nuroad Race FE': _CU('07/0f/e2/1754323821/synqup_129460_S_00'),
  'Cube|Nuroad EX': _CU('1b/16/a6/1754323816/synqup_129400_S_00'),
  'Cube|Nuroad Pro': _CU('1b/5f/90/1754323845/synqup_129310_S_00'),
  'Cube|Nuroad ONE': _CU('71/80/ef/1754323820/synqup_129200_S_00'),
  'Cube|Nuroad ONE FE': _CU('71/80/ef/1754323820/synqup_129200_S_00'),
  'Cube|Nuroad Hybrid C:62 SLX': _CU('9d/74/26/1754323707/synqup_117300_S_00'),
  'Cannondale|SuperX 1': _CD('qqz0rlohmq'),
  'Cannondale|SuperX 3': _CD('vugs9mlsh8'),
  'Cannondale|SuperX 4 AXS': _CD('w5tcpqnrrc'),
  'Cannondale|Topstone 1': _CD('6joy0pmcam'),
  'Cannondale|Topstone EQ': _CD('lv80uaanhx'),
  'Cannondale|Topstone 2 Cues': _CD('equkpb8jry'),
  'Cannondale|Topstone 2 GRX': _CD('bac3di66li'),
  'Cannondale|Topstone Carbon 1 Lefty AXS': _CD('onhecj15lx'),
  'Cannondale|Topstone Carbon 2 AXS': _CD('oj336v4hm2'),
  'Cannondale|Topstone Carbon 2 AXS SmartSense': _CD('ss8dh6xbfj'),
  'Cannondale|Topstone Carbon 3 GRX 1x12': _CD('bvt1ebkg0y'),
  'Cannondale|Topstone Carbon 3 GRX 2x12': _CD('tixq8xazn2'),
  'Cannondale|Topstone Carbon 4': _CD('i0i7eih0xw'),
  'Cannondale|Topstone Neo SL 1': 'https://d1mo5ln9tjltxq.cloudfront.net/-/media/images/my21/bikes/electric/e-road/topstone-neo-sl/collection-images/topstone_neo_sl_st_1_desktop.ashx',
  'Scott|Addict Gravel RC': _SC('t_assetformatoverview/v1778114283/2222965.png'),
  'Scott|Addict Gravel 10': _SC('t_assetformatoverview/v1778114284/2222966.png'),
  'Scott|Addict Gravel 20': _SC('t_assetformatoverview/v1778114284/2222968.png'),
  'Scott|Addict Gravel 30': _SC('t_assetformatoverview/v1778114285/2222970.png'),
  'Scott|Addict Gravel 40': _SC('t_assetformatoverview/v1778114285/2222972.png'),
  'Scott|Solace Gravel eRIDE 30': _SC('t_assetformatoverview/v1778114277/2222922.png'),
  'Ridley|Kanzo A GRX 600': 'https://images.cyclingfactory.be/KANZOA_image_400x.avif',
  'Ridley|Kanzo Adventure GRX 820': 'https://images.cyclingfactory.be/KANZOADVENTURE7E7_image_400x.avif',
  'Ridley|Kanzo Fast Force XPLR': 'https://images.cyclingfactory.be/KANZOFAST7E5.1_image_400x.avif',
  'Rose|Backroad AL GRX 400': _RO('C2FD3AD90CB15DFDED312881F8A04CF2'),
  'Rose|Backroad AL GRX 610': _RO('155B6B35F883A8D15F60910BC27DB6BC'),
  'Rose|Backroad AL Apex': _RO('DF599D19FAEBF662BEDAA7F2B4FA455D'),
  'Rose|Backroad AL EQ': _RO('F5088DC66079259AF15BE41C08B3C53E'),
  'Rose|Backroad AL Plus Apex': _RO('9A40F2C16FFAD185CEF29E353FC9EC2E'),
  'Rose|Backroad AL Plus EQ': _RO('BA5614FB0258613421094C8250CDEEAA'),
  'Rose|Backroad Apex AXS': _RO('A57A0C3B390F8E8A66E3B17AF3EFE8A5'),
  'Rose|Backroad GRX 820': _RO('6AA8B2FC384A0D06A626C1E4955E5ECD'),
  'Rose|Backroad GRX 825 Di2': _RO('811898DA0C8DC7B32530E37369F4716D'),
  'Rose|Backroad Force AXS': _RO('4FA0CBD22A9162411FB03D2740E00F45'),
  'Rose|Backroad Unsupported': _RO('E4BE69C06EF8A32B21D22424F69698AA'),
  'Rose|Backroad FF GRX 825 Di2': _RO('167B88912BD4E05A73CDC09A23E693EA'),
  'Rose|Backroad FF Red XPLR AXS': _RO('8D9B71BD24C7638BC82ED8B16E73D927'),
  'Rose|Backroad FF Force XPLR AXS': _RO('8D9B71BD24C7638BC82ED8B16E73D927'),
  'Rose|Backroad FF Rival XPLR AXS': _RO('8D9B71BD24C7638BC82ED8B16E73D927'),
  'Rose|Hobo Cues': _RO('F18D3A56CE55583CB7A989DD7647C043')
};

const photoFam = [
  ['Canyon', /^Grail/, _CY('v1746608774/2026_FULL_grail_cf-sl-7_4149_R119_P05_krb9qs')],
  ['Canyon', /^Grizl:ONfly/, _CY('v1773829829/2027_FULL_grizl-on_cf-8_4742_R112_P03_bxtuxc')],
  ['Canyon', /^Grizl CF/, _CY('v1750252688/2026_FULL_grizl_cf-7_4167_R126_P01_ti4kcf')],
  ['Canyon', /^Grizl/, _CY('v1777880401/2027_FULL_grizl_al-escape_4445_R124_P03_ugfvoo')],
  ['Specialized', /Turbo Creo/, _SP('98125-50_CREO-SL-COMP-CARBON-UL-CYPRMET-BLKLQDMET_HERO-SQUARE')],
  ['Specialized', /^Crux DSW/, _SP('91426-52_CRUX-DSW-COMP-EMDMET-FJDMET_HERO-SQUARE')],
  ['Specialized', /Crux/, _SP('91427-51_CRUX-5-COMP-METOBSD-DUNEWHT_HERO-SQUARE')],
  ['Specialized', /^Diverge E5/, _SP('95426-70_DIVERGE-E5-DUNEWHT-ASHGRY_HERO-SQUARE')],
  ['Specialized', /Diverge/, _SP('95426-50_DIVERGE-COMP-DLMMET-ORGZST_HERO-SQUARE')],
  ['Giant', /^Revolt E\+/, 'https://static.giant-bicycles.com/Images/360/2022/MY21-Revolt-E-plus-Pro-XR-Color-A-Rosewood/01_MY21-Revolt-E-plus-Pro-XR-Color-A-Rosewood.jpg'],
  ['Giant', /^Revolt Advanced Pro/, 'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_480%2Cq_80%2Cw_640/zqpdwszujczee8ihu91i/MY26RevoltAdvancedPro1_ColorAOceanTwilight.jpg'],
  ['Giant', /^Revolt Advanced/, 'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_480%2Cq_80%2Cw_640/z5miospretv3qt1ogbsw/MY26RevoltAdvanced1_ColorAMidnightMoon.jpg'],
  ['Giant', /^Revolt/, 'https://images2.giant-bicycles.com/b_white%2Cc_pad%2Ch_480%2Cq_80%2Cw_640/fiesndmthkvstarsjgf3/MY26Revolt1_ColorAAlpineGreen.jpg'],
  ['Cervélo', /^Áspero-5/, 'https://images.prismic.io/cervelo/aDiwqydWJ-7kSs6F_0L0ALBFE2C-PROFILE-Web.png?w=640'],
  ['Cervélo', /^Áspero/, 'https://images.prismic.io/cervelo/ZhgYQDjCgu4jzwl6_Cervelo-_0009_0J0ASBXV2C-PROFILE.png?w=640'],
  ['Pinarello', /^Grevil/, _PI('810__resize__cfd7942117c4576da94c78ebb20d48a1.png')],
  ['Pinarello', /^Dogma/, _PI('810__resize__8db422cec4c29d2c62dcf64ab2036798.png')],
  ['Pinarello', /^Nytro/, _PI('810__resize__81cf9ede2324c6015875585bfbcbce1a.png')],
  ['Orbea', /^Terra/, 'https://www.orbea.com/uploads/products/images/T139TTCC-GP-SIDE-TERRA_M30TEAM.webp'],
  ['Orbea', /^Gain/, 'https://www.orbea.com/uploads/microsites/images/6688_01_gain_hero_900x1200.webp'],
  ['Factor', /^Ostro/, 'https://images.ctfassets.net/uyc32o2uod42/4CHCARZaX8KLaVewIQA1mF/de38a674a184a3a80b38c8a9cab03663/Action-ostro-gravel-02.jpg?w=640']
];

function bikePhoto(b) {
  const exact = photoExact[b.brand + '|' + b.model];
  if (exact) return exact;
  for (const [br, re, url] of photoFam) {
    if (b.brand === br && re.test(b.model)) return url;
  }
  return null;
}

function bikeThumb(b) {
  const ph = bikePhoto(b);
  const fb = '<div class="gk-thumb-fb"><span class="e">🚵</span><span>Foto nicht verfügbar</span></div>';
  if (!ph) return `<div class="gk-thumb fb"><img alt="">${fb}</div>`;
  return `<div class="gk-thumb"><img src="${ph}" alt="${b.brand} ${b.model}" loading="lazy" decoding="async" onerror="this.closest('.gk-thumb').classList.add('fb')">${fb}</div>`;
}

/* Leesbare winkelnaam op basis van de affiliate-/product-URL (voor de primaire CTA) */
const shopNames = {
  'canyon.com': 'Canyon', 'trekbikes.com': 'Trek', 'specialized.com': 'Specialized',
  'cube.eu': 'Cube', 'cannondale.com': 'Cannondale', 'giant-bicycles.com': 'Giant',
  'scott-sports.com': 'Scott', 'ridley-bikes.com': 'Ridley', 'cervelo.com': 'Cervélo',
  'orbea.com': 'Orbea', 'pinarello.com': 'Pinarello', 'factorbikes.com': 'Factor',
  'rosebikes.nl': 'Rose Bikes', 'rosebikes.com': 'Rose Bikes'
};
function shopName(b) {
  try {
    const h = new URL(b.url).hostname.replace(/^www\./, '');
    return shopNames[h] || b.brand;
  } catch(_) { return b.brand; }
}

/* Secundaire CTA op de kaart: open het vergelijk-overzicht en scroll ernaartoe */
function openCompareScroll() {
  if(!cmpOpen) toggleCompare();
  const p = document.getElementById('gk-compare-panel');
  if(p) p.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* ============ Wieldetails per wielset (alleen waar publieke data bestaat) ============ */
/* Key = exacte wheelBrand. Velden leeg ('') = niet door fabrikant gepubliceerd → niet getoond. */
const wheelSpecs = {
  "Zipp 303 XPLR S": {depth:"54 mm", int:"32 mm", ext:"", weight:"~1.642 g", hub:"Zipp ZR1", spokes:"24/24", tubeless:"Tubeless (hookless)", tire:"~40 mm (max 50 psi)", src:"sram.com / support.zipp.com"},
  "Newmen Advanced G.34": {depth:"~34 mm", int:"", ext:"", weight:"~1.330 g", hub:"Newmen", spokes:"", tubeless:"Tubeless ready", tire:"", src:"newmen-components.de / velo.outsideonline.com"},
  "Roval Terra C": {depth:"32 mm", int:"25 mm", ext:"30 mm", weight:"~1.610 g", hub:"DT Swiss 370 (Ratchet LN 18t)", spokes:"DT Swiss Competition Race (24/24)", tubeless:"Tubeless ready (hooked)", tire:"28–47 mm", src:"specialized.com"},
  "Roval Terra CLX": {depth:"32 mm", int:"25 mm", ext:"30 mm", weight:"~1.265 g", hub:"DT Swiss 180 (Ratchet EXP 36t)", spokes:"DT Swiss Aerolite (21/21)", tubeless:"Tubeless ready (hooked)", tire:"28–47 mm", src:"specialized.com / bikeradar.com"},
  "Roval Terra CLX II": {depth:"40 mm", int:"25 mm", ext:"", weight:"~1.250 g", hub:"DT Swiss 180 (Ratchet EXP)", spokes:"DT Swiss Aerolite", tubeless:"Tubeless ready", tire:"30–47 mm", src:"cyclingnews.com"},
  "Roval Terra C III": {depth:"25,5 mm", int:"27 mm", ext:"38 mm", weight:"~1.594 g", hub:"DT Swiss 370 (18t)", spokes:"24/24", tubeless:"Tubeless ready (hooked)", tire:"", src:"specialized.com / sigmasports.com"},
  "Reserve 40|44": {depth:"40 / 44 mm (v/a)", int:"27,2 / 27 mm", ext:"36 / 34,4 mm", weight:"~1.475 g", hub:"DT Swiss 350 (Ratchet EXP)", spokes:"24 straight-pull", tubeless:"Tubeless ready", tire:"30–50 mm", src:"reservewheels.com / bikerumor.com"},
  "Reserve 40|44 GR": {depth:"40 / 44 mm (v/a)", int:"27,2 / 27 mm", ext:"36 / 34,4 mm", weight:"~1.475 g", hub:"DT Swiss 350 (Ratchet EXP)", spokes:"24 straight-pull", tubeless:"Tubeless ready", tire:"30–50 mm", src:"reservewheels.com"},
  "Rose GC50": {depth:"50 mm", int:"27 mm", ext:"40 / 32 mm (v/a)", weight:"~1.550 g", hub:"", spokes:"", tubeless:"Tubeless ready", tire:"40–50 mm", src:"rosebikes.com"},
  "DT Swiss GRC 1400": {depth:"42 mm", int:"24 mm", ext:"32 mm", weight:"~1.634 g", hub:"DT Swiss 240 (SL Ratchet)", spokes:"DT Swiss Aerolite", tubeless:"Tubeless (hookless)", tire:"28–45 mm", src:"dtswiss.com / cyclist.co.uk"},
  "DT Swiss GRC 1100": {depth:"30 / 50 mm (variant)", int:"24 mm", ext:"31 / 36,5 mm", weight:"~1.350 g (30) – 1.606 g (50)", hub:"DT Swiss 180 (Ratchet EXP 36t)", spokes:"DT Swiss Aerolite II (24)", tubeless:"Tubeless ready", tire:"", src:"dtswiss.com / off.road.cc"},
  "DT Swiss ERC LOG 45": {depth:"45 mm", int:"22 mm", ext:"28,5 mm", weight:"~1.528 g", hub:"DT Swiss 240 Dicut (Ratchet EXP 36t)", spokes:"DT aero comp (24/24)", tubeless:"Tubeless ready", tire:"", src:"dtswiss.com (ERC 1400 Dicut 45)"},
  "DT Swiss HGC 1800": {depth:"24 mm", int:"24 mm", ext:"", weight:"~1.900 g", hub:"DT Swiss 370 (Ratchet LN)", spokes:"DT Swiss", tubeless:"Tubeless ready", tire:"30–53 mm", src:"dtswiss.com (HG 1800-serie)"},
  "DT Swiss G540": {depth:"25 mm", int:"24 mm", ext:"28 mm", weight:"~1.750 g", hub:"DT Swiss 370", spokes:"", tubeless:"Tubeless ready", tire:"tot 53 mm", src:"dtswiss.com (G 540, alu)"},
  "DT Swiss G 1800": {depth:"25 mm", int:"24 mm", ext:"28 mm", weight:"~1.800 g", hub:"DT Swiss 370 (Ratchet LN)", spokes:"DT Swiss", tubeless:"Tubeless ready", tire:"tot 53 mm", src:"dtswiss.com (G 1800 Spline 25)"},
  "DT Swiss G1800": {depth:"25 mm", int:"24 mm", ext:"28 mm", weight:"~1.800 g", hub:"DT Swiss 370 (Ratchet LN)", spokes:"DT Swiss", tubeless:"Tubeless ready", tire:"tot 53 mm", src:"dtswiss.com (G 1800 Spline 25)"},
  "Bontrager Aeolus Pro 3V": {depth:"40 mm", int:"25 mm", ext:"32 mm", weight:"~1.575 g", hub:"Bontrager Rapid Drive 108", spokes:"DT Swiss bladed", tubeless:"Tubeless ready (TLR)", tire:"≥35 mm", src:"bikeradar.com / cyclingnews.com"},
  "Bontrager Aeolus Elite 35V": {depth:"35 mm", int:"25 mm", ext:"32 mm", weight:"~1.665 g", hub:"Bontrager Rapid Drive 108", spokes:"14/16/14 bladed", tubeless:"Tubeless ready (TLR)", tire:"", src:"mantel.com / bikeworldiowa.com"},
  "Bontrager Aeolus RSL 37V": {depth:"37 mm", int:"25 mm", ext:"", weight:"~1.405 g", hub:"DT Swiss 240", spokes:"DT Swiss bladed", tubeless:"Tubeless ready (TLR)", tire:"", src:"intheknowcycling.com / velo"},
  "Bontrager Paradigm Comp 25": {depth:"23 mm", int:"25 mm", ext:"30 mm", weight:"", hub:"Bontrager Rapid Drive 54", spokes:"DT Aerolite", tubeless:"Tubeless ready (TLR)", tire:"", src:"trekbikes.com (alu)"},
  "Bontrager Paradigm 23": {depth:"", int:"19,5 mm", ext:"23 mm", weight:"", hub:"Bontrager", spokes:"", tubeless:"Tubeless ready (TLR)", tire:"", src:"trekbikes.com (Paradigm TLR, alu)"},
  "Princeton Grit 4540": {depth:"40–45 mm (golfprofiel)", int:"24 mm", ext:"", weight:"~1.507 g", hub:"", spokes:"24 golven", tubeless:"Tubeless (hooked)", tire:"tot ~42 mm", src:"princetoncarbon.com / bikerumor.com"},
  "Princeton GR": {depth:"40–45 mm (golfprofiel)", int:"24 mm", ext:"", weight:"~1.507 g", hub:"", spokes:"", tubeless:"Tubeless (hooked)", tire:"tot ~42 mm", src:"princetoncarbon.com (Grit 4540-serie)"},
  "Black Inc Forty Five": {depth:"45 mm", int:"21 mm", ext:"27 mm", weight:"~1.534 g", hub:"Black Inc (CeramicSpeed)", spokes:"", tubeless:"Tubeless ready", tire:"25–32 mm (smal)", src:"road.cc / factorbikes.com"},
  "Zipp 303 XPLR SW": {depth:"54 mm", int:"32 mm", ext:"40 mm", weight:"~1.496 g", hub:"Zipp ZR1 (6 pawls)", spokes:"24/24", tubeless:"Tubeless (hookless)", tire:"~40 mm (max 50 psi)", src:"sram.com / cyclingnews.com"},
  "Reynolds ATR TSS": {depth:"42 mm", int:"25 mm", ext:"", weight:"~1.505 g", hub:"Reynolds/Ringlé SRX (12°)", spokes:"Sapim Sprint (24/24)", tubeless:"Tubeless ready", tire:"35–40 mm", src:"modernbike.com / roadbikeaction.com"},
  "HollowGram 45 SL KNØT": {depth:"45 mm", int:"21 mm", ext:"", weight:"~1.540 g", hub:"HollowGram (DT Swiss internals)", spokes:"DT Swiss Aerolite (20/24)", tubeless:"Tubeless ready", tire:"", src:"cannondale.com / sigmasports.com"},
  "Syncros Capital SL": {depth:"40 mm", int:"25 mm", ext:"", weight:"~1.170 g", hub:"Syncros (monocoque)", spokes:"16 co-moulded carbon", tubeless:"Tubeless (hookless)", tire:"", src:"syncros.com / bikeradar.com"},
  "Newmen Advanced SL X.R.36": {depth:"36 mm", int:"24 mm", ext:"", weight:"~1.310 g", hub:"Newmen Gen2 (FADE)", spokes:"Newmen carbon (21/21)", tubeless:"Tubeless (hookless)", tire:"", src:"newmen-components.de / bike24.com"},
  "Newmen Evolution SL": {depth:"~24 mm (laag)", int:"25 mm", ext:"", weight:"~1.400 g", hub:"Newmen Gen2", spokes:"28 dubbeldik", tubeless:"Tubeless ready", tire:"", src:"newmen-components.de (Evolution SL X.R.25, alu)"},
  "Giant CXR 1 Carbon": {depth:"~26 mm", int:"25 mm", ext:"", weight:"~1.398 g", hub:"Giant (DBL lacing)", spokes:"", tubeless:"Tubeless (hookless)", tire:"40–50 mm", src:"giant-bicycles.com / bike24.com"},
  "Giant SX-2": {depth:"", int:"25 mm", ext:"", weight:"", hub:"Giant (Shimano HG)", spokes:"", tubeless:"Tubeless ready", tire:"", src:"giant-bicycles.com (S-X2 Disc, ALUXX alu)"},
  "Oquo RP50LTD": {depth:"50 mm", int:"25 mm", ext:"34 mm", weight:"~1.460 g", hub:"Oquo Q10", spokes:"Sapim CX-Ray", tubeless:"Tubeless (mini-hook)", tire:"", src:"bikeradar.com / road.cc"},
  "Oquo RP35": {depth:"35 mm", int:"21 mm", ext:"", weight:"~1.465 g", hub:"Oquo", spokes:"", tubeless:"Tubeless (mini-hook)", tire:"28–32 mm", src:"oquowheels.com (RP35 TEAM, carbon)"},
  "Forza Levanto Carbon": {depth:"40 mm", int:"23 mm", ext:"30 mm", weight:"~1.640 g", hub:"Forza/4ZA", spokes:"", tubeless:"Tubeless ready", tire:"", src:"gravelbikeshop.com / ridley-bikes.com (Levanto G)"},
  "Fulcrum Rapid Red": {depth:"~24 mm", int:"23 mm", ext:"28 mm", weight:"~1.700 g", hub:"Fulcrum", spokes:"", tubeless:"Tubeless ready (2-way fit)", tire:"", src:"cyclingnews.com / road.cc (Rapid Red 5 DB, alu)"},
  "HED Emporia GA": {depth:"24 mm", int:"25 mm", ext:"30 mm", weight:"~1.670 g", hub:"HED (13°, 4 pawls)", spokes:"Sapim Race", tubeless:"Tubeless ready", tire:"", src:"hedcycling.com (GA Performance, alu)"},
  "WTB CZR i23": {depth:"24 mm", int:"23 mm", ext:"", weight:"~1.394 g", hub:"", spokes:"asym. 3 mm offset", tubeless:"Tubeless ready (TCS 2.0)", tire:"36–45 mm", src:"wtb.com / cxmagazine.com (carbon)"},
  "WTB ST i23 TCS": {depth:"", int:"23 mm", ext:"27 mm", weight:"", hub:"", spokes:"", tubeless:"Tubeless ready (TCS)", tire:"36–45 mm", src:"wtb.com (AL6069 alu)"},
  "WTB ST i23": {depth:"", int:"23 mm", ext:"27 mm", weight:"", hub:"", spokes:"", tubeless:"Tubeless ready (TCS)", tire:"36–45 mm", src:"wtb.com (AL6069 alu)"},
  "Rose G30": {depth:"30 mm", int:"25 mm", ext:"~31 mm", weight:"~1.850 g (32 spaken)", hub:"Rose alu", spokes:"Sapim Laser (28/32)", tubeless:"Tubeless ready", tire:"", src:"rosebikes.com (G-Thirty Disc, alu)"},
  "Rose G30 LIGHT": {depth:"30 mm", int:"25 mm", ext:"~31 mm", weight:"~1.700 g (24 spaken)", hub:"Rose alu", spokes:"Sapim Laser (24)", tubeless:"Tubeless ready", tire:"", src:"rosebikes.com (G-Thirty Disc LIGHT, alu)"},
  "Rose G30 (650B)": {depth:"30 mm", int:"25 mm", ext:"~31 mm", weight:"", hub:"Rose alu", spokes:"Sapim Laser", tubeless:"Tubeless ready", tire:"", src:"rosebikes.com (G-Thirty Disc 650B, alu)"},
  "Rose G30+": {depth:"30 mm", int:"25 mm", ext:"~31 mm", weight:"", hub:"Rose alu", spokes:"Sapim Laser", tubeless:"Tubeless ready", tire:"", src:"rosebikes.com (G-Thirty-familie, alu)"},
  "Rose G25": {depth:"~25 mm", int:"25 mm", ext:"", weight:"", hub:"Rose alu", spokes:"Sapim Laser", tubeless:"Tubeless ready", tire:"", src:"rosebikes.com / granfondo-cycling.com (alu)"},
  "Rose G20": {depth:"~20 mm", int:"", ext:"", weight:"", hub:"Rose alu", spokes:"", tubeless:"Tubeless ready", tire:"", src:"rosebikes.com (G-Twenty, alu)"},
  "Cube ARD25": {depth:"", int:"25 mm", ext:"", weight:"", hub:"", spokes:"", tubeless:"Tubeless ready", tire:"tot 50 mm", src:"cube.eu (huismerk gravel 622x25, alu)"},
  "Cube EX25": {depth:"", int:"25 mm", ext:"", weight:"", hub:"", spokes:"32 gaats", tubeless:"Tubeless ready", tire:"", src:"cube.eu (EX-serie velg, alu)"},
  "Giant CXR": {depth:"", int:"25 mm", ext:"", weight:"", hub:"Giant", spokes:"", tubeless:"Tubeless (hookless)", tire:"40–50 mm", src:"giant-bicycles.com (CXR WheelSystem, carbon)"},
  "Giant CXR 2": {depth:"35 mm", int:"25 mm", ext:"", weight:"~1.590 g", hub:"Giant", spokes:"", tubeless:"Tubeless (hookless)", tire:"38–50 mm", src:"giant-bicycles.com / bike24.com (carbon)"},
  "Giant CXR 2 Carbon": {depth:"35 mm", int:"25 mm", ext:"", weight:"~1.590 g", hub:"Giant", spokes:"", tubeless:"Tubeless (hookless)", tire:"38–50 mm", src:"giant-bicycles.com / bike24.com (carbon)"},
  "Syncros Capital": {depth:"", int:"25 mm", ext:"", weight:"~1.480 g", hub:"Syncros", spokes:"", tubeless:"Tubeless (hookless)", tire:"", src:"syncros.com (Capital 1.0, alu)"},
  "Syncros Capital 2.0": {depth:"26 mm", int:"21 mm", ext:"", weight:"~1.930 g", hub:"Syncros (Centerlock)", spokes:"straight-pull", tubeless:"Tubeless ready", tire:"", src:"buycycle / syncros.com (6061-T6 alu)"},
  "Syncros RP2.0": {depth:"", int:"19 mm", ext:"", weight:"~1.720 g", hub:"Syncros CNC (3 pawls)", spokes:"straight-pull (28)", tubeless:"Tubeless ready", tire:"", src:"theproscloset.com / syncros.com (alu)"},
  "Oquo RC25": {depth:"30 mm", int:"25 mm", ext:"", weight:"~1.390 g", hub:"Zipp ZR1", spokes:"Sapim CX-Sprint (24/28)", tubeless:"Tubeless (mini-hook)", tire:"30–50 mm", src:"oquowheels.com (RC25 TEAM, carbon)"},
  "Oquo RC30TEAM": {depth:"~30 mm", int:"25 mm", ext:"", weight:"~1.390 g", hub:"Zipp ZR1", spokes:"Sapim CX-Sprint (24/28)", tubeless:"Tubeless (mini-hook)", tire:"30–50 mm", src:"oquowheels.com (RC30 TEAM, carbon)"},
  "Ridley 4ZA": {depth:"23 mm", int:"20 mm", ext:"24 mm", weight:"~1.670 g", hub:"4ZA", spokes:"", tubeless:"Tubeless ready", tire:"", src:"4za.com (Forza Stratos Gravel, alu)"}
};

function wheelSpecHTML(b) {
  const s = wheelSpecs[b.wheelBrand];
  if(!s) return '';
  const rows = [['Material', b.wheels === 'carbon' ? 'Carbon' : 'Aluminium']];
  if(s.depth)   rows.push(['Felgenhöhe', s.depth.replace('(v/a)', '(v/h)').replace('golfprofiel', 'Wellenprofil').replace('laag', 'flach')]);
  if(s.int)     rows.push(['Felgeninnenbreite', s.int]);
  if(s.ext)     rows.push(['Felgenaußenbreite', s.ext.replace('(v/a)', '(v/h)')]);
  if(s.weight)  rows.push(['Laufradsatzgewicht', s.weight.replace('spaken', 'Speichen')]);
  if(s.hub)     rows.push(['Nabe', s.hub]);
  if(s.spokes)  rows.push(['Speichen', s.spokes.replace('golven', 'Wellen').replace('dubbeldik', 'doppelt konifiziert').replace('gaats', 'Loch')]);
  if(s.tubeless)rows.push(['Tubeless', s.tubeless]);
  if(s.tire)    rows.push(['Empfohlener Reifen', s.tire.replace('tot', 'bis').replace('(smal)', '(schmal)')]);
  const grid = rows.map(r => `<span class="k">${r[0]}</span><span class="v">${r[1]}</span>`).join('');
  const src = s.src ? `<div class="gk-wheel-note">Quelle: ${s.src}</div>` : '';
  return `<details class="gk-wheel"><summary>Laufraddetails — ${b.wheelBrand}</summary><div class="gk-wheel-grid">${grid}</div>${src}</details>`;
}

function render() {
  let filtered = bikes.filter(matches);
  const sort = document.getElementById('sort-sel').value;
  if(sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if(sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if(sort === 'weight-asc') filtered.sort((a,b) => bikeWeight(a) - bikeWeight(b));
  else filtered.sort((a,b) => a.brand.localeCompare(b.brand));

  document.getElementById('result-count').textContent = filtered.length + ' Bike' + (filtered.length !== 1 ? 's' : '') + ' gefunden';

  updateCounts();
  updateAdvBadge();

  updateLivePanel(filtered);

  refreshCompare(filtered);

  // active filter pills
  const af = document.getElementById('active-filters');
  let pills = [];
  filterKeys.forEach(k => {
    if(multiKeys.has(k)) {
      state[k].forEach(v => pills.push(`<span class="gk-af-pill">${filterLabels[k]?.[v] || v}<span class="gk-af-rm" onclick="clearFilter('${k}','${v}')">×</span></span>`));
    } else if(state[k] !== 'all') {
      pills.push(`<span class="gk-af-pill">${filterLabels[k]?.[state[k]] || state[k]}<span class="gk-af-rm" onclick="clearFilter('${k}')">×</span></span>`);
    }
  });
  af.innerHTML = pills.join('');

  const grid = document.getElementById('bike-grid');
  if(filtered.length === 0) { grid.innerHTML = '<div class="gk-empty"><div class="gk-empty-icon">🚵</div>Keine Bikes gefunden. Passe die Filter an.</div>'; return; }

  grid.innerHTML = filtered.map(b => {
    const frameBadge = {carbon:'<span class="gk-badge carbon-frame">Carbonrahmen</span>',aluminium:'<span class="gk-badge alu-frame">Aluminiumrahmen</span>',staal:'<span class="gk-badge steel-frame">Stahl</span>',titanium:'<span class="gk-badge ti-frame">Titanium</span>'}[b.frame] || '';
    const wheelBadge = b.wheels === 'carbon' ? '<span class="gk-badge carbon-wheels">Carbon-Laufräder</span>' : '<span class="gk-badge alu-wheels">Alu-Laufräder</span>';
    const shiftBrandBadge = {Shimano:'<span class="gk-badge shimano">Shimano</span>',SRAM:'<span class="gk-badge sram">SRAM</span>',Campagnolo:'<span class="gk-badge campagnolo">Campagnolo</span>',MicroShift:'<span class="gk-badge microshift">MicroShift</span>'}[b.shifting] || '';
    const shiftTypeBadge = b.electronic ? '<span class="gk-badge electronic">⚡ Elektronisch</span>' : '<span class="gk-badge mechanical">⚙️ Mechanisch</span>';
    const intBadge = b.integrated ? '<span class="gk-badge integrated">Integriert</span>' : '';
    const xplrBadge = isXplr(b) ? '<span class="gk-badge xplr-gravel" title="SRAM XPLR — gravelspezifische 1×-Gruppe mit extra großer Kassettenbandbreite">🪨 SRAM XPLR · Gravelgruppe</span>' : '';
    const grxBadge = isGrx(b) ? '<span class=\"gk-badge grx-gravel\" title=\"Shimano GRX — gravelspezifische Gruppe von Shimano\">⛰️ Shimano GRX · Gravelgruppe</span>' : '';
    const ebikeBadge = b.ebike ? '<span class="gk-badge ebike">⚡ E-bike</span>' : '';

    const motorSpec = b.ebike
      ? (b.motor ? `<span class="gk-spec-key">Motor</span><span class="gk-spec-val">${b.motor}</span>` : '')
        + (b.battery ? `<span class="gk-spec-key">Akku</span><span class="gk-spec-val">${b.battery}</span>` : '')
      : '';

    const feats = [];
    feats.push(b.mounts ? '<span class="gk-feat mounts">🔩 Befestigungspunkte</span>' : '<span class="gk-feat off">🔩 Keine Befestigungspunkte</span>');
    feats.push(b.fender ? '<span class="gk-feat fender">🛡️ Schutzbleche möglich</span>' : '<span class="gk-feat off">🛡️ Keine Schutzblechmontage</span>');
    feats.push(hasDamping(b) ? `<span class="gk-feat damp">〰️ ${b.damping}</span>` : '<span class="gk-feat off">〰️ Keine Federung/Dämpfung</span>');
    feats.push(b.tubeless ? '<span class="gk-feat tl">◯ Tubeless ready</span>' : '<span class="gk-feat off">◯ Nicht tubeless</span>');
    const featsRow = `<div class="gk-feats">${feats.join('')}</div>`;

    return `<div class="gk-card${b.ebike ? ' ebike' : ''}">
      ${bikeThumb(b)}
      <div class="gk-card-top">
        <div>
          <div class="gk-brand">${b.brand}</div>
          <div class="gk-model">${b.model}</div>
        </div>
        <div class="gk-right">
          <div class="gk-price-tag">${b.priceLabel}</div>
          <div class="gk-region-dot">${regionLabel(b.region)}</div>
        </div>
      </div>
      <div><span class="gk-geo-tag ${geoClass(b.geo)}">${b.geo}</span></div>
      <div class="gk-geo-desc">${b.geoDesc}</div>
      <div class="gk-badges">${ebikeBadge}${xplrBadge}${grxBadge}${frameBadge}${wheelBadge}${shiftBrandBadge}${shiftTypeBadge}${intBadge}</div>
      <div class="gk-specs">
        <span class="gk-spec-key">Type</span><span class="gk-spec-val">${b.ebike ? 'Elektrisch ⚡' : 'Nicht elektrisch'}</span>
        <span class="gk-spec-key">Modelljahr</span><span class="gk-spec-val">${b.year}</span>
        <span class="gk-spec-key">Antrieb</span><span class="gk-spec-val">${driveLabel(b.drivetrain)}</span>
        <span class="gk-spec-key">Gruppe</span><span class="gk-spec-val">${groupLabel(b)}${isXplr(b) ? '<span class="gk-spec-xplr" title="Gravelspezifische SRAM-XPLR-Gruppe">XPLR</span>' : ''}${isGrx(b) ? '<span class="gk-spec-grx" title="Gravelspezifische Shimano-GRX-Gruppe">GRX</span>' : ''}</span>
        <span class="gk-spec-key">Cassette</span><span class="gk-spec-val">${speedCount(b) ? speedCount(b) + '-fach' : '—'}</span>
        <span class="gk-spec-key">Laufradsatz</span><span class="gk-spec-val">${b.wheelBrand}</span>
        <span class="gk-spec-key">Max. Reifen</span><span class="gk-spec-val gk-spec-tire">${b.maxTire} mm</span>
        <span class="gk-spec-key">Rahmengrößen</span><span class="gk-spec-val">${sizesLabel(b)}</span>
        ${motorSpec}
      </div>
      ${featsRow}
      ${wheelSpecHTML(b)}
      <div class="gk-card-cta">
        <a class="gk-buy-btn" href="${b.url}" target="_blank" rel="noopener">Preis bei ${shopName(b)} ansehen <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
        <div class="gk-cta-row">
          <button class="gk-cmpsel" type="button" data-key="${b.brand}|${b.model}" onclick="toggleCmpSel(this.dataset.key,this)" aria-pressed="false" title="Auswählen, um nebeneinander zu vergleichen (max. 4)">⇄ Vergleichen</button>
          <span class="gk-weight-pill">⚖️ ${b.weightLabel}</span>
        </div>
      </div>
    </div>`;
  }).join('');
  syncCmpUI();
}

function clearFilter(key, val) {
  if(multiKeys.has(key)) {
    if(val !== undefined) { const i = state[key].indexOf(val); if(i >= 0) state[key].splice(i, 1); }
    else state[key] = [];
  } else {
    state[key] = 'all';
  }
  syncChips(key);
  render();
}

/* ============ Dealer-zoeker (postcode) ============ */
const dealerLocators = {
  'Canyon':     { direct: true, site: 'https://www.canyon.com/nl-nl/', label: 'Canyon verkauft direkt online — es gibt kein Händlernetz. Bestellung und Service laufen über canyon.com.' },
  'Trek':       { url: 'https://www.trekbikes.com/nl/nl_NL/store-finder/' },
  'Specialized':{ url: 'https://www.specialized.com/nl/nl/store-finder' },
  'Cube':       { url: 'https://www.cube.eu/nl-nl/dealer-search' },
  'Cannondale': { url: 'https://www.cannondale.com/en-nl/find-a-dealer' },
  'Giant':      { url: 'https://www.giant-bicycles.com/nl/stores' },
  'Scott':      { url: 'https://www.scott-sports.com/nl/en/dealers/locator' },
  'Ridley':     { url: 'https://www.ridley-bikes.com/nl_NL/dealers' },
  'Cervélo':    { url: 'https://www.cervelo.com/en-US/store-locator' },
  'Pinarello':  { url: 'https://pinarello.com/global/en/store-locator' },
  'Orbea':      { url: 'https://www.orbea.com/nl-nl/dealers/' },
  'Factor':     { url: 'https://factorbikes.com/find-a-retailer' },
  'Rose':       { direct: true, site: 'https://www.rosebikes.nl/rose-stores', label: 'Rose verkauft direkt online und hat eigene ROSE Stores (u. a. in Bocholt). Kein reguläres Händlernetz.' }
};

function toggleDealer() {
  const box = document.getElementById('gk-dealer');
  const collapsed = box.classList.toggle('collapsed');
  document.getElementById('gk-dealer-toggle').textContent = collapsed ? '+' : '–';
  document.getElementById('gk-dealer-toggle-label').textContent = collapsed ? 'Ausklappen' : 'Einklappen';
  document.getElementById('gk-dealer-title').setAttribute('aria-expanded', String(!collapsed));
}

function dealerBrandChange() {
  const brand = document.getElementById('dealer-brand').value;
  const note = document.getElementById('dealer-note');
  const off = document.getElementById('dealer-official');
  document.getElementById('dealer-err').style.display = 'none';
  if (!brand || !dealerLocators[brand]) { note.style.display = 'none'; off.style.display = 'none'; return; }
  const loc = dealerLocators[brand];
  if (loc.direct) {
    note.innerHTML = `${loc.label} <a href="${loc.site}" target="_blank" rel="noopener">Zur Website von ${brand} →</a>`;
    note.style.display = 'block';
    off.style.display = 'none';
  } else {
    note.style.display = 'none';
    off.innerHTML = `Oder nutze die offizielle Händlersuche: <a href="${loc.url}" target="_blank" rel="noopener">Händlersuche von ${brand} →</a>`;
    off.style.display = 'block';
  }
}

function zoekDealer() {
  const brand = document.getElementById('dealer-brand').value;
  const pcRaw = document.getElementById('dealer-pc').value.trim().toUpperCase();
  const err = document.getElementById('dealer-err');
  const pcOk = /^[1-9]\d{3}\s?[A-Z]{2}$/.test(pcRaw) || /^[1-9]\d{3}$/.test(pcRaw) || /^\d{5}$/.test(pcRaw);
  if (!pcOk) { err.style.display = 'block'; return; }
  err.style.display = 'none';
  const loc = dealerLocators[brand];
  const term = (brand && loc && !loc.direct) ? brand + ' Fahrradhändler' : 'Fahrradladen Gravel';
  const query = encodeURIComponent(term + ' ' + pcRaw);
  window.open('https://www.google.com/maps/search/?api=1&query=' + query, '_blank', 'noopener');
}

(function initDealer() {
  const sel = document.getElementById('dealer-brand');
  [...new Set(bikes.map(b => b.brand))].sort((a, b) => a.localeCompare(b)).forEach(br => {
    const o = document.createElement('option');
    o.value = br; o.textContent = br;
    sel.appendChild(o);
  });
})();

/* ============ Gravel-assistent (offline NLP) ============ */
let lastConstraints = null;
const brandList = [...new Set(bikes.map(b => b.brand))];
function norm(s) { return s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase(); }
function bikeWeight(b) { const m = String(b.weightLabel).match(/(\d+),(\d+)/); return m ? parseFloat(m[1] + '.' + m[2]) : 99; }
function geoShort(g) { return {'Race Gravel':'Rennen','Adventure Gravel':'Abenteuer','Bikepacking / Touring':'Bikepacking'}[g] || g; }

function parseQuery(q) {
  const s = norm(q);
  const c = { brand: [], geo: [] };
  let objective = 'none';

  if(/elektr|e-?bike|ebike| motor|trapondersteun|ondersteun|accu|electric|pedal assist|battery|akku|unterstutz/.test(s)) c.ebike = true;
  if(/niet[- ]?elektr|geen motor|gewone fiets|zonder motor|niet-?elektrisch|non[- ]?electric|not electric|no motor|without (a )?motor|nicht[- ]?elektr|ohne motor|kein(en)? motor/.test(s)) c.ebike = false;

  let sf = s;
  if(/carbon[- ]?(wiel|wheel|laufr)/.test(sf)) { c.wheels = 'carbon'; sf = sf.replace(/carbon[- ]?(wielen?|wheels?|laufrad|laufrader|laufradern)/g, ' '); }
  else if(/(alumin[a-z]*|alu)[- ]?(wiel|wheel|laufr)/.test(sf)) { c.wheels = 'aluminium'; sf = sf.replace(/(alumin[a-z]*|alu)[- ]?(wielen?|wheels?|laufrad|laufrader|laufradern)/g, ' '); }
  if(/carbon/.test(sf)) c.frame = 'carbon';
  if(/alumin|\balu\b/.test(sf)) c.frame = 'aluminium';

  if(/vering|demping|gedempt|veervork|geveerd|comfortabel|comfort|suspension|damping|suspension fork|federung|dampfung|gefedert|federgabel|komfort/.test(s)) c.damping = true;
  if(/montagepunt|frametas|bidon|bevestigingspunt|bagage|bikepack|tassen|pannier|lange tocht|lange afstand|mounts|bags|luggage|long distance|long trips|befestigung|taschen|gepack|lange touren|langstrecke/.test(s)) c.mounts = true;
  if(/spatbord|woon-?werk|forens|regen|natte|fender|mudguard|commut|rain|schutzblech|pendel/.test(s)) c.fender = true;

  if(/\b1x\b|1 ?x|een blad|1 blad|enkel blad|one chainring|single chainring|ein blatt|1 blatt/.test(s)) c.drivetrain = '1x';
  if(/\b2x\b|2 ?x|twee blad|2 blad|dubbel blad|two chainrings|double chainring|zwei blatt|2 blatt|zweifach/.test(s)) c.drivetrain = '2x';

  if(/shimano/.test(s)) c.shifting = 'Shimano';
  if(/sram/.test(s)) c.shifting = 'SRAM';

  const gm = s.match(/\b(apex|rival|force|grx|cues|xplr|di2)\b/);
  if(gm) c.group = gm[1];
  else if(/\bred\b/.test(s) && /sram|axs/.test(s)) c.group = 'red';

  if(/race|wedstrijd|aero|competit|rennen|wettkampf/.test(s)) c.geo.push('Race Gravel');
  if(/adventure|avontuur|allround|veelzijdig|all-round|versatile|abenteuer|vielseitig/.test(s)) c.geo.push('Adventure Gravel');
  if(/touring|toerfiets|\btoer\b|reiserad|\btour\b/.test(s)) c.geo.push('Bikepacking / Touring');
  if(/bikepack|met tassen|pannier|with bags|mit taschen/.test(s)) c.geo.push('Bikepacking / Touring', 'Adventure Gravel');
  c.geo = [...new Set(c.geo)];

  brandList.forEach(br => { const bn = norm(br).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); if(new RegExp('\\b' + bn + '\\b').test(s)) c.brand.push(br); });

  let pm = s.match(/(?:onder|minder dan|tot|maximaal|max|hooguit|budget van|rond|ongeveer|unter|bis|hochstens|weniger als|etwa|rund|budget von|<)\s*(?:de\s*|€\s*)?(\d[\d.\s]{2,})/);
  if(pm) { const num = parseInt(pm[1].replace(/[^\d]/g, '')); if(num >= 300) c.priceMax = num; }
  let pmin = s.match(/(?:boven|meer dan|vanaf|minimaal|minstens|uber|mehr als|ab|mindestens|>)\s*(?:de\s*|€\s*)?(\d[\d.\s]{2,})/);
  if(pmin) { const num = parseInt(pmin[1].replace(/[^\d]/g, '')); if(num >= 300) c.priceMin = num; }

  let wm = s.match(/(?:lichter dan|onder|max|minder dan|leichter als|unter|weniger als|<)\s*(?:de\s*)?(\d{1,2}(?:[.,]\d)?)\s*kg/);
  if(wm) c.weightMax = parseFloat(wm[1].replace(',', '.'));

  let tm = s.match(/(\d{2})\s*mm/);
  if(tm) c.tireMin = parseInt(tm[1]);
  if(!c.tireMin && /brede band|dikke band|breedste|brede banden|dikke banden|wide tyre|wide tire|fat tyre|fat tire|widest|breite reifen|breiten reifen|dicke reifen|dicken reifen/.test(s)) c.tireMin = 48;

  let spd = s.match(/\b(9|1[0-3])\s*[- ]?\s*(?:speed|versnellingen|speeds|fach|gange)\b/);
  if(spd) c.speed = parseInt(spd[1], 10);

  let ym = s.match(/\b(202[2-9])\b/);
  if(ym) c.year = parseInt(ym[1]);
  let szm = s.match(/\b(?:maat|grosse|rahmengrosse)\s+(2xs|xxs|xs|m\/l|xxl|2xl|xl|s|m|l|\d{2}(?:[.,]5)?)\b/);
  if(szm) { const cats = sizeCatOf(szm[1]); if(cats.length) c.size = cats[0]; }

  if(/lichtste|lichtst|laagste gewicht|minst.*kg|leichteste|geringste gewicht/.test(s)) objective = 'lightest';
  else if(/goedkoopste|laagste prijs|minst.*kost|goedkoopst|gunstigste|billigste|preiswerteste|niedrigste preis/.test(s)) objective = 'cheapest';
  else if(/duurste|hoogste prijs|meest premium|prijzigste|exclusiefste|teuerste|exklusivste|hochste preis/.test(s)) objective = 'priciest';
  else if(/budget|betaalbaar|voordelig|prijs-?kwaliteit|instap|beginner|weinig geld|beste koop|scherp geprijsd|preiswert|gunstig|bezahlbar|einsteiger|anfanger|preis-?leistung/.test(s)) objective = 'value';
  else if(/snelste|aero|schnellste/.test(s)) objective = 'fastest';
  else if(/beste|aanrader|aanbevel|advies|welke.*kopen|top\b|wat moet ik|bestes|empfehl|welche.*kaufen|was soll ich/.test(s)) objective = 'best';

  return { c, objective };
}

function bikeMatchesConstraints(b, c) {
  if(c.ebike === true && !b.ebike) return false;
  if(c.ebike === false && b.ebike) return false;
  if(c.frame && b.frame !== c.frame) return false;
  if(c.wheels && b.wheels !== c.wheels) return false;
  if(c.damping && !hasDamping(b)) return false;
  if(c.mounts && !b.mounts) return false;
  if(c.fender && !b.fender) return false;
  if(c.drivetrain && !String(b.drivetrain).includes(c.drivetrain)) return false;
  if(c.shifting && b.shifting !== c.shifting) return false;
  if(c.group && !new RegExp(c.group, 'i').test(String(b.group || ''))) return false;
  if(c.brand.length && !c.brand.includes(b.brand)) return false;
  if(c.geo.length && !c.geo.includes(b.geo)) return false;
  if(c.priceMax && b.price > c.priceMax) return false;
  if(c.priceMin && b.price < c.priceMin) return false;
  if(c.weightMax && bikeWeight(b) > c.weightMax) return false;
  if(c.tireMin && b.maxTire < c.tireMin) return false;
  if(c.year && b.year !== c.year) return false;
  if(c.speed && speedCount(b) !== c.speed) return false;
  if(c.size && !bikeSizeCats(b).includes(c.size)) return false;
  return true;
}

function valueScore(b) {
  let v = (7 - b.priceClass) * 2;
  if(b.frame === 'carbon') v += 2;
  if(b.wheels === 'carbon') v += 1;
  v += Math.max(0, 11 - bikeWeight(b));
  if(b.electronic) v += 1;
  return v;
}

function scopeNoun(c) {
  let noun = c.ebike === true ? 'E-Gravelbike' : (c.ebike === false ? 'nicht-elektrische Gravelbike' : 'Gravelbike');
  let mods = [];
  if(c.brand.length) mods.push('von ' + c.brand.join('/'));
  if(c.frame) mods.push('mit ' + (c.frame === 'carbon' ? 'Carbon' : c.frame === 'staal' ? 'Stahl' : 'Aluminium') + 'rahmen');
  if(c.geo.length) mods.push('für ' + c.geo.map(geoShort).join('/'));
  if(c.damping) mods.push('mit Federung/Dämpfung');
  if(c.mounts) mods.push('mit Befestigungspunkten');
  if(c.fender) mods.push('mit Schutzblechbefestigung');
  if(c.wheels) mods.push('mit ' + (c.wheels === 'carbon' ? 'Carbon' : 'Alu') + '-Laufrädern');
  if(c.drivetrain) mods.push('mit ' + c.drivetrain + '-Antrieb');
  if(c.shifting) mods.push('mit ' + c.shifting);
  if(c.group) mods.push('mit ' + (c.group === 'grx' || c.group === 'xplr' || c.group === 'di2' ? c.group.toUpperCase() : c.group[0].toUpperCase() + c.group.slice(1)) + '-Gruppe');
  if(c.priceMax) mods.push('unter €' + c.priceMax.toLocaleString('de-DE'));
  if(c.priceMin) mods.push('über €' + c.priceMin.toLocaleString('de-DE'));
  if(c.weightMax) mods.push('leichter als ' + String(c.weightMax).replace('.', ',') + ' kg');
  if(c.tireMin) mods.push('mit Reifen ab ' + c.tireMin + ' mm');
  if(c.year) mods.push('aus Modelljahr ' + c.year);
  if(c.speed) mods.push('mit ' + c.speed + '-fach-Kassette');
  if(c.size) mods.push('erhältlich in Größe ' + c.size);
  return noun + (mods.length ? ' ' + mods.join(', ') : '');
}

function valueReason(b) {
  return (b.frame === 'carbon' ? 'Carbonrahmen' : 'robuster Aluminiumrahmen') + ', ' + groupLabel(b) + ' und ' + b.weightLabel + ' zu diesem Preis';
}

function aiCard(b) {
  return `<div class="gk-ai-card">
    <div class="gk-ai-card-h"><span class="gk-ai-card-name">${b.brand} ${b.model}</span><span class="gk-ai-card-price">${b.priceLabel}</span></div>
    <div class="gk-ai-card-tags"><span class="gk-geo-tag ${geoClass(b.geo)}">${b.geo}</span>${b.ebike ? '<span class="gk-badge ebike">⚡ E-bike</span>' : ''}</div>
    <div class="gk-ai-card-spec">Modelljahr ${b.year} · ${b.weightLabel} · ${driveLabel(b.drivetrain)} · ${groupLabel(b)} · max ${b.maxTire} mm · ${b.frame === 'carbon' ? 'Carbon' : 'Aluminium'}${hasDamping(b) ? ' · ' + b.damping : ''}</div>
    <a href="${b.url}" target="_blank" rel="noopener">Bike ansehen →</a>
  </div>`;
}

function expandAi() {
  const pop = document.getElementById('gk-ai-pop');
  const fab = document.getElementById('gk-ai-fab');
  if(!pop) return;
  pop.hidden = false;
  if(fab) fab.setAttribute('aria-expanded', 'true');
  setTimeout(() => { const i = document.getElementById('ai-input'); if(i) i.focus(); }, 30);
}
function collapseAi() {
  const pop = document.getElementById('gk-ai-pop');
  const fab = document.getElementById('gk-ai-fab');
  if(!pop) return;
  pop.hidden = true;
  if(fab) fab.setAttribute('aria-expanded', 'false');
}
function toggleAi() {
  const pop = document.getElementById('gk-ai-pop');
  if(!pop) return;
  if(pop.hidden) expandAi(); else collapseAi();
}
function clearAi() {
  document.getElementById('ai-input').value = '';
  const panel = document.getElementById('ai-answer');
  panel.style.display = 'none';
  panel.innerHTML = '';
  lastConstraints = null;
  collapseAi();
}

function askAI() {
  const q = document.getElementById('ai-input').value;
  if(!q || !q.trim()) { clearAi(); return; }
  expandAi();
  runAssistant(q);
}
function askExample(el) { const q = el.textContent; document.getElementById('ai-input').value = q; expandAi(); runAssistant(q); }

function runAssistant(q) {
  const panel = document.getElementById('ai-answer');
  if(!q || !q.trim()) { panel.style.display = 'none'; collapseAi(); return; }
  const { c, objective } = parseQuery(q);
  let res = bikes.filter(b => bikeMatchesConstraints(b, c));

  if(objective === 'value' && !c.priceMax) {
    const affordable = res.filter(b => b.priceClass <= 3);
    if(affordable.length) res = affordable;
  }

  if(objective === 'lightest' || objective === 'fastest') res = res.slice().sort((a, b) => bikeWeight(a) - bikeWeight(b));
  else if(objective === 'cheapest') res = res.slice().sort((a, b) => a.price - b.price);
  else if(objective === 'priciest') res = res.slice().sort((a, b) => b.price - a.price);
  else if(objective === 'value' || objective === 'best') res = res.slice().sort((a, b) => valueScore(b) - valueScore(a));
  else res = res.slice().sort((a, b) => a.price - b.price);

  lastConstraints = c;
  panel.style.display = 'block';

  if(res.length === 0) {
    panel.innerHTML = `<button class="gk-ai-close" onclick="clearAi()" title="Schließen" aria-label="Antwort schließen">×</button><div class="gk-ai-text">Ich konnte kein Bike finden, das dazu passt. Versuch es etwas offener, zum Beispiel <em>„leichtestes Gravelbike"</em> oder <em>„bestes Budget-Bike"</em>.</div>`;
    return;
  }

  const top = res.slice(0, 3);
  const n = res.length;
  const t0 = top[0];
  let lead;
  if(objective === 'lightest') lead = `Das leichteste ${scopeNoun(c)} ist das <strong>${t0.brand} ${t0.model}</strong> — ${t0.weightLabel}, ${t0.priceLabel}.`;
  else if(objective === 'cheapest') lead = `Das günstigste ${scopeNoun(c)} ist das <strong>${t0.brand} ${t0.model}</strong> für ${t0.priceLabel}.`;
  else if(objective === 'priciest') lead = `Das teuerste / exklusivste ${scopeNoun(c)} ist das <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}).`;
  else if(objective === 'value') lead = `Bestes Preis-Leistungs-Verhältnis (${scopeNoun(c)}): das <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}) — ${valueReason(t0)}.`;
  else if(objective === 'fastest') lead = `Für reines Tempo ist das <strong>${t0.brand} ${t0.model}</strong> eine Top-Wahl — ${t0.weightLabel}, ${t0.geo}.`;
  else if(objective === 'best') lead = `Meine beste Allround-Empfehlung (${scopeNoun(c)}): das <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}) — ${valueReason(t0)}.`;
  else lead = `Anhand deiner Frage habe ich ${n} passende ${n === 1 ? 'Bike' : 'Bikes'}${c.brand.length || c.geo.length || c.ebike !== undefined || c.frame || c.damping || c.mounts || c.fender || c.priceMax || c.priceMin || c.weightMax || c.tireMin || c.drivetrain || c.shifting || c.year || c.size ? ' (' + scopeNoun(c) + ')' : ''} gefunden. Meine Empfehlungen:`;

  const cards = top.map(aiCard).join('');
  const apply = n > 3
    ? `<div class="gk-ai-more">…und ${n - 3} weitere. <button class="gk-ai-apply" onclick="applyAssistant()">Alle ${n} in der Liste zeigen ↓</button></div>`
    : `<button class="gk-ai-apply" onclick="applyAssistant()">In der Liste zeigen ↓</button>`;

  panel.innerHTML = `<button class="gk-ai-close" onclick="clearAi()" title="Schließen" aria-label="Antwort schließen">×</button><div class="gk-ai-text">${lead}</div><div class="gk-ai-cards">${cards}</div><div>${apply}</div>`;
}

function applyAssistant() {
  const c = lastConstraints;
  if(!c) return;
  filterKeys.forEach(k => state[k] = multiKeys.has(k) ? [] : 'all');
  if(c.ebike === true) state.etype = 'electric'; else if(c.ebike === false) state.etype = 'normal';
  if(c.frame) state.frame = c.frame;
  if(c.wheels) state.wheels = c.wheels;
  if(c.damping) state.damping = 'yes';
  if(c.mounts) state.mounts = 'yes';
  if(c.fender) state.fender = 'yes';
  if(c.drivetrain) state.drivetrain = c.drivetrain;
  if(c.shifting) state.shifting = c.shifting;
  if(c.brand.length) state.brand = [...c.brand];
  if(c.geo.length) state.geo = [...c.geo];
  if(c.priceMax || c.priceMin) {
    const bounds = { '1':[0,1000], '2':[1000,2000], '3':[2000,3500], '4':[3500,5000], '5':[5000,7500], '6':[7500,1e9] };
    state.price = Object.keys(bounds).filter(k => { const [lo, hi] = bounds[k]; if(c.priceMax && lo > c.priceMax) return false; if(c.priceMin && hi < c.priceMin) return false; return true; });
  }
  if(c.weightMax) {
    const wb = { '1':[7,8], '2':[8,9], '3':[9,10], '4':[10,99] };
    state.weight = Object.keys(wb).filter(k => wb[k][0] < c.weightMax + 0.001);
  }
  if(c.tireMin) {
    const reps = { '1':42, '2':47, '3':52, '4':60 };
    state.tire = Object.keys(reps).filter(k => reps[k] >= c.tireMin);
  }
  if(c.year) state.year = [String(c.year)];
  if(c.size) state.size = [c.size];
  if(c.speed) state.speed = [String(c.speed)];
  if(c.group) {
    if(c.group === 'xplr') state.gravelgroep = ['xplr'];
    else if(c.group === 'grx') state.gravelgroep = ['grx'];
    else {
      const gs = Object.keys(filterLabels.groupset).filter(k => k !== 'all' && new RegExp(c.group, 'i').test(k));
      if(gs.length) state.groupset = gs;
    }
  }
  filterKeys.forEach(syncChips);
  render();
  if(advActiveCount() > 0) { const adv = document.getElementById('gk-filters-adv'); if(adv && adv.hasAttribute('hidden')) toggleAdv(); }
  collapseAi();
  switchTab('compare');
}

/* ============ AI-overzicht: verschillen tussen de filterresultaten ============ */
let cmpOpen = false;

function cmpStrong(b) { return '<strong>' + b.brand + ' ' + b.model + '</strong>'; }
function cmpJoin(parts) { return parts.length <= 1 ? (parts[0] || '') : parts.slice(0, -1).join(', ') + ' und ' + parts[parts.length - 1]; }
function cmpNames(arr, cap) {
  cap = cap || 3;
  const names = arr.map(cmpStrong);
  if (names.length <= cap) return cmpJoin(names);
  return arr.length + ' Bikes, u. a. ' + names[0] + ' und ' + names[1];
}
function cmpEur(n) { return '€' + n.toLocaleString('de-DE'); }
function cmpKg(w) { return (Math.round(w * 10) / 10).toFixed(1).replace('.', ',') + ' kg'; }
function cmpCap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function cmpGroupBy(list, fn) { const m = new Map(); list.forEach(b => { const k = fn(b); if (!m.has(k)) m.set(k, []); m.get(k).push(b); }); return m; }
function cmpNm(b) { const m = String(b.motor || '').match(/(\d+)\s*Nm/); return m ? parseInt(m[1]) : null; }
function cmpWh(b) { const m = String(b.battery || '').match(/(\d+)\s*Wh/); return m ? parseInt(m[1]) : null; }
const cmpGeoLong = { 'Race Gravel': 'Race-Geometrie (schnell, sportliche Sitzposition)', 'Adventure Gravel': 'Adventure-Geometrie (komfortabel und vielseitig)', 'Bikepacking / Touring': 'Bikepacking-Geometrie (aufrecht, gemacht für Gepäck)' };
const cmpGeoShort = { 'Race Gravel': 'Race-Geometrie', 'Adventure Gravel': 'Adventure-Geometrie', 'Bikepacking / Touring': 'Bikepacking-Geometrie' };
const cmpDriveShort = { '1x': '1×', '2x': '2×', '1x/2x': '1× oder 2× (konfigurierbar)' };
const cmpAdvice = {
  cheap: 'so wenig wie möglich ausgeben willst',
  new: 'die neueste Technik und Standards willst',
  expensive: 'das Beste vom Besten suchst',
  light: 'so leicht wie möglich fahren willst (Klettern und Tempo)',
  ebike: 'Tretunterstützung willst',
  noebike: 'lieber rein mit eigener Kraft fährst',
  damp: 'maximalen Komfort in rauem Gelände willst',
  tire: 'regelmäßig raues Gelände suchst',
  mounts: 'Bikepacking- oder Tourenpläne hast',
  fender: 'auch im Regen oder zur Arbeit fährst',
  twoX: 'kleine Gangsprünge und eine große Bandbreite willst',
  oneX: 'Einfachheit und wenig Wartung willst',
  elec: 'präzise und mühelos elektronisch schalten willst',
  mech: 'es einfach und bezahlbar halten willst',
  carbon: 'einen leichten, vibrationsdämpfenden Rahmen willst',
  alu: 'einen robusten, bezahlbaren Rahmen willst',
  cwheels: 'leichte, schnelle Laufräder willst',
  georace: 'vor allem Tempo suchst',
  geoadv: 'ein vielseitiges Bike für alles willst',
  geotour: 'lange Touren mit Gepäck planst'
};

function cmpTraits(b, list) {
  const t = [];
  const uniqMin = fn => { const vs = list.map(fn); const mn = Math.min(...vs); return fn(b) === mn && vs.filter(v => v === mn).length === 1 && mn !== Math.max(...vs); };
  const uniqMax = fn => { const vs = list.map(fn); const mx = Math.max(...vs); return fn(b) === mx && vs.filter(v => v === mx).length === 1 && mx !== Math.min(...vs); };
  const only = pred => pred(b) && list.filter(pred).length === 1;
  if (uniqMin(x => x.price)) t.push({ k: 'cheap', txt: 'das günstigste (' + b.priceLabel + ')' });
  if (uniqMax(x => x.price)) t.push({ k: 'expensive', txt: 'das teuerste (' + b.priceLabel + ')' });
  if (uniqMin(bikeWeight)) t.push({ k: 'light', txt: 'das leichteste (' + b.weightLabel + ')' });
  if (uniqMax(bikeWeight)) t.push({ k: 'heavy', txt: 'das schwerste (' + b.weightLabel + ')' });
  if (uniqMax(x => x.year)) t.push({ k: 'new', txt: 'das neueste Modelljahr (' + b.year + ')' });
  if (uniqMin(x => x.year)) t.push({ k: 'old', txt: 'das älteste Modelljahr (' + b.year + '), oft günstig' });
  if (only(x => x.ebike)) t.push({ k: 'ebike', txt: 'das einzige E-Bike' + (b.motor ? ' (' + b.motor + (b.battery ? ', ' + b.battery : '') + ')' : '') });
  if (only(x => !x.ebike)) t.push({ k: 'noebike', txt: 'das einzige ohne Motor' });
  if (only(x => hasDamping(x))) t.push({ k: 'damp', txt: 'das einzige mit Federung/Dämpfung (' + b.damping + ')' });
  if (only(x => !hasDamping(x))) t.push({ k: 'nodamp', txt: 'das einzige <em>ohne</em> Federung/Dämpfung' });
  if (uniqMax(x => x.maxTire)) t.push({ k: 'tire', txt: 'die meiste Reifenfreiheit (bis ' + b.maxTire + ' mm)' });
  if (only(x => x.mounts)) t.push({ k: 'mounts', txt: 'das einzige mit Befestigungspunkten' });
  if (only(x => !x.mounts)) t.push({ k: 'nomounts', txt: 'das einzige ohne Befestigungspunkte' });
  if (only(x => x.fender)) t.push({ k: 'fender', txt: 'das einzige mit Schutzblechbefestigung' });
  if (only(x => !x.fender)) t.push({ k: 'nofender', txt: 'das einzige ohne Schutzblechbefestigung' });
  if (only(x => String(x.drivetrain).includes('2x'))) t.push({ k: 'twoX', txt: 'das einzige mit 2×-Antrieb' });
  if (only(x => String(x.drivetrain) === '1x')) t.push({ k: 'oneX', txt: 'das einzige mit 1×-Antrieb' });
  if (only(x => x.electronic)) t.push({ k: 'elec', txt: 'das einzige mit elektronischer Schaltung (' + groupLabel(b) + ')' });
  if (only(x => !x.electronic)) t.push({ k: 'mech', txt: 'das einzige mit mechanischer Schaltung (' + groupLabel(b) + ')' });
  if (only(x => x.frame === 'carbon')) t.push({ k: 'carbon', txt: 'das einzige mit Carbonrahmen' });
  if (only(x => x.frame === 'aluminium')) t.push({ k: 'alu', txt: 'das einzige mit Aluminiumrahmen' });
  if (only(x => x.wheels === 'carbon')) t.push({ k: 'cwheels', txt: 'das einzige mit Carbon-Laufrädern' });
  if (only(x => x.shifting === 'SRAM')) t.push({ k: 'sram', txt: 'das einzige mit SRAM' });
  if (only(x => x.shifting === 'Shimano')) t.push({ k: 'shimano', txt: 'das einzige mit Shimano' });
  if (new Set(list.map(x => x.geo)).size > 1 && list.filter(x => x.geo === b.geo).length === 1) {
    const gk = { 'Race Gravel': 'georace', 'Adventure Gravel': 'geoadv', 'Bikepacking / Touring': 'geotour' }[b.geo];
    t.push({ k: gk || 'geo', txt: 'das einzige mit ' + (cmpGeoShort[b.geo] || b.geo) });
  }
  return t;
}

function buildCompareHTML(list) {
  const n = list.length;
  const head = '<div class="gk-cmp-head">🤖 KI-Überblick: die Unterschiede auf einen Blick <span class="gk-cmp-count">' + n + ' ' + (n === 1 ? 'Bike' : 'Bikes') + '</span></div>';
  const foot = '<div class="gk-cmp-foot">Automatisch erstellt anhand der Daten der Bikes in deiner Auswahl.</div>';

  if (n === 0) return head + '<div class="gk-cmp-empty">Derzeit passt kein einziges Bike zu deinen Filtern. Erweitere deine Filter und klick erneut.</div>';

  if (n === 1) {
    const b = list[0];
    return head + '<div class="gk-cmp-intro">Es bleibt genau ein Bike übrig: ' + cmpStrong(b) + ' (' + b.priceLabel + ', ' + b.weightLabel + '). Ein Vergleich ist also nicht nötig. Kurz gesagt: ' + b.geoDesc + '</div>' + foot;
  }

  const sims = [];
  const secs = [];

  const gE = cmpGroupBy(list, b => b.ebike);
  if (gE.size === 1) sims.push(list[0].ebike ? 'alle elektrisch (E-Bike)' : 'alle nicht elektrisch');
  else secs.push({ i: '🚲', t: 'Typ', h: cmpNames(gE.get(true)) + (gE.get(true).length === 1 ? ' ist ein E-Bike' : ' sind E-Bikes') + '; ' + cmpNames(gE.get(false)) + ' ' + (gE.get(false).length === 1 ? 'hat' : 'haben') + ' keinen Motor. Bei E-Bikes rechnest du mit mehr Gewicht und einem höheren Preis, aber auch mit Tretunterstützung.' });

  const gY = cmpGroupBy(list, b => b.year);
  if (gY.size === 1) sims.push('alle Modelljahr ' + list[0].year);
  else {
    const ys = [...gY.entries()].sort((a, b) => b[0] - a[0]);
    secs.push({ i: '📅', t: 'Modelljahr', h: ys.map(([k, v]) => '<strong>' + k + '</strong>: ' + cmpNames(v)).join(' · ') + '. Ein neueres Modelljahr bedeutet meist die neuesten Standards und Daten; ein älteres Modelljahr ist oft günstiger.' });
  }

  const pmin = Math.min(...list.map(b => b.price)), pmax = Math.max(...list.map(b => b.price));
  if (pmin === pmax) sims.push('derselbe Richtpreis (' + cmpEur(pmin) + ')');
  else {
    const bMin = list.filter(b => b.price === pmin), bMax = list.filter(b => b.price === pmax);
    secs.push({ i: '💶', t: 'Preis', h: 'Die Preise reichen von ' + cmpEur(pmin) + ' (' + cmpNames(bMin, 2) + ') bis ' + cmpEur(pmax) + ' (' + cmpNames(bMax, 2) + ') — ein Unterschied von ' + cmpEur(pmax - pmin) + '.' });
  }

  const ws = list.map(bikeWeight);
  const wmin = Math.min(...ws), wmax = Math.max(...ws);
  if (wmax - wmin < 0.05) sims.push('nahezu dasselbe Gewicht (' + list[0].weightLabel + ')');
  else {
    const bL = list.filter(b => bikeWeight(b) === wmin), bH = list.filter(b => bikeWeight(b) === wmax);
    secs.push({ i: '⚖️', t: 'Gewicht', h: 'Am leichtesten ist ' + cmpNames(bL, 2) + ' mit ' + bL[0].weightLabel + '; am schwersten ist ' + cmpNames(bH, 2) + ' mit ' + bH[0].weightLabel + ' — ein Unterschied von etwa ' + cmpKg(wmax - wmin) + '. Leichter klettert und lenkt sich einfacher.' });
  }

  const matParts = [];
  const gF = cmpGroupBy(list, b => b.frame);
  if (gF.size === 1) sims.push('alle mit ' + (list[0].frame === 'carbon' ? 'Carbon' : list[0].frame === 'staal' ? 'Stahl' : 'Aluminium') + 'rahmen');
  else matParts.push('Rahmen — ' + [...gF.entries()].map(([k, v]) => cmpCap(k) + ': ' + cmpNames(v)).join(' · ') + '. Carbon ist leichter und dämpft Vibrationen; Aluminium ist robust und günstiger.');
  const gW = cmpGroupBy(list, b => b.wheels);
  if (gW.size === 1) sims.push('alle mit ' + (list[0].wheels === 'carbon' ? 'Carbon' : 'Alu') + '-Laufrädern');
  else matParts.push('Laufräder — ' + [...gW.entries()].map(([k, v]) => cmpCap(k) + ': ' + cmpNames(v)).join(' · ') + '. Carbon-Laufräder sind leichter und steifer, Aluminium günstiger.');
  if (matParts.length) secs.push({ i: '🧱', t: 'Material', h: matParts.join('<br>') });

  const shiftParts = [];
  const gS = cmpGroupBy(list, b => b.shifting);
  if (gS.size === 1) sims.push('alle mit ' + list[0].shifting + '-Schaltung');
  else shiftParts.push([...gS.entries()].map(([k, v]) => k + ': ' + cmpNames(v)).join(' · ') + '.');
  const gT = cmpGroupBy(list, b => b.electronic);
  if (gT.size === 1) sims.push(list[0].electronic ? 'alle elektronisch geschaltet' : 'alle mechanisch geschaltet');
  else shiftParts.push('Elektronisch (kabellos und präzise, aber teurer): ' + cmpNames(gT.get(true)) + ' · mechanisch (einfach und bezahlbar): ' + cmpNames(gT.get(false)) + '.');
  if (shiftParts.length) secs.push({ i: '⚙️', t: 'Schaltung', h: shiftParts.join('<br>') });

  const gD = cmpGroupBy(list, b => String(b.drivetrain));
  if (gD.size === 1) sims.push('alle mit ' + (cmpDriveShort[String(list[0].drivetrain)] || list[0].drivetrain) + '-Antrieb');
  else secs.push({ i: '🔗', t: 'Antrieb', h: [...gD.entries()].map(([k, v]) => (cmpDriveShort[k] || k) + ': ' + cmpNames(v)).join(' · ') + '. 1× ist einfach und leicht; 2× bietet mehr und kleinere Gangsprünge.' });

  const tmin = Math.min(...list.map(b => b.maxTire)), tmax = Math.max(...list.map(b => b.maxTire));
  if (tmin === tmax) sims.push('dieselbe max. Reifenbreite (' + tmin + ' mm)');
  else {
    const bS = list.filter(b => b.maxTire === tmin), bT = list.filter(b => b.maxTire === tmax);
    secs.push({ i: '🛞', t: 'Reifenbreite', h: 'Die maximale Reifenbreite reicht von ' + tmin + ' mm (' + cmpNames(bS, 2) + ') bis ' + tmax + ' mm (' + cmpNames(bT, 2) + '). Mehr Reifenfreiheit bedeutet mehr Grip und Komfort in rauem Gelände.' });
  }

  const gC = cmpGroupBy(list, b => hasDamping(b));
  if (gC.size === 1) sims.push(hasDamping(list[0]) ? 'alle mit Federung/Dämpfung' : 'keines hat Federung/Dämpfung');
  else {
    const withD = gC.get(true);
    const withTxt = withD.length <= 4 ? cmpJoin(withD.map(b => cmpStrong(b) + ' (' + b.damping + ')')) : cmpNames(withD);
    secs.push({ i: '〰️', t: 'Komfort', h: 'Mit Federung/Dämpfung: ' + withTxt + '. Ohne: ' + cmpNames(gC.get(false)) + '. Dämpfung schluckt Vibrationen und Schläge in rauem Gelände.' });
  }

  const prak = [];
  const gM = cmpGroupBy(list, b => b.mounts);
  if (gM.size === 1) sims.push(list[0].mounts ? 'alle mit Befestigungspunkten für Taschen' : 'keines hat zusätzliche Befestigungspunkte');
  else prak.push('Befestigungspunkte (praktisch fürs Bikepacking): ja bei ' + cmpNames(gM.get(true)) + ', nicht bei ' + cmpNames(gM.get(false)) + '.');
  const gFd = cmpGroupBy(list, b => b.fender);
  if (gFd.size === 1) sims.push(list[0].fender ? 'alle mit Schutzblechbefestigung' : 'keines hat Schutzblechbefestigung');
  else prak.push('Schutzbleche: möglich bei ' + cmpNames(gFd.get(true)) + ', nicht bei ' + cmpNames(gFd.get(false)) + '.');
  if (prak.length) secs.push({ i: '🔩', t: 'Praktisch', h: prak.join('<br>') });

  const gG = cmpGroupBy(list, b => b.geo);
  if (gG.size === 1) sims.push('alle mit ' + (cmpGeoLong[list[0].geo] || list[0].geo));
  else secs.push({ i: '🧭', t: 'Geometrie & Fahrstil', h: [...gG.entries()].map(([k, v]) => (cmpGeoLong[k] || k) + ': ' + cmpNames(v)).join(' · ') + '.' });

  const ebs = list.filter(b => b.ebike);
  if (ebs.length >= 2) {
    const eParts = [];
    const nms = ebs.map(cmpNm).filter(v => v !== null);
    if (nms.length >= 2 && Math.min(...nms) !== Math.max(...nms)) {
      const lo = ebs.find(b => cmpNm(b) === Math.min(...nms)), hi = ebs.find(b => cmpNm(b) === Math.max(...nms));
      eParts.push('das Motordrehmoment reicht von ' + Math.min(...nms) + ' Nm (' + cmpStrong(lo) + ') bis ' + Math.max(...nms) + ' Nm (' + cmpStrong(hi) + ')');
    }
    const whs = ebs.map(cmpWh).filter(v => v !== null);
    if (whs.length >= 2 && Math.min(...whs) !== Math.max(...whs)) {
      const lo = ebs.find(b => cmpWh(b) === Math.min(...whs)), hi = ebs.find(b => cmpWh(b) === Math.max(...whs));
      eParts.push('die Akkukapazität von ' + Math.min(...whs) + ' Wh (' + cmpStrong(lo) + ') bis ' + Math.max(...whs) + ' Wh (' + cmpStrong(hi) + ')');
    }
    if (eParts.length) secs.push({ i: '⚡', t: 'E-Bike-System', h: 'Bei den E-Bikes: ' + eParts.join('; ') + '. Mehr Drehmoment = kräftigere Unterstützung; mehr Wh = größere Reichweite.' });
  }

  let intro;
  if (!secs.length) intro = '<div class="gk-cmp-intro">Diese ' + n + ' Bikes sind bei den wichtigsten Daten nahezu identisch (' + sims.join(' · ') + '). Der Unterschied liegt vor allem bei Marke, Verarbeitung und Design.</div>';
  else if (sims.length) intro = '<div class="gk-cmp-intro">Was diese ' + n + ' Bikes <strong>gemeinsam</strong> haben: ' + sims.join(' · ') + '. Die echten Unterschiede liegen bei: <strong>' + secs.map(s => s.t).join(', ') + '</strong>.</div>';
  else intro = '<div class="gk-cmp-intro">Diese ' + n + ' Bikes unterscheiden sich in fast allen Punkten — das sind die wichtigsten:</div>';

  const secsHtml = secs.map(s => '<div class="gk-cmp-sec"><strong class="gk-cmp-t">' + s.i + ' ' + s.t + ':</strong> ' + s.h + '</div>').join('');

  let perBike = '';
  if (n <= 6) {
    const sorted = list.slice().sort((a, b) => a.price - b.price);
    perBike = '<div class="gk-cmp-bikes-title">Was macht jedes Bike einzigartig?</div>' + sorted.map(b => {
      const tr = cmpTraits(b, list);
      const phr = tr.slice(0, 3).map(t => t.txt);
      const adv = tr.map(t => cmpAdvice[t.k]).filter(Boolean).slice(0, 2);
      const base = phr.length ? cmpJoin(phr) + '.' : 'liegt bei Preis und Ausstattung genau in der Mitte dieser Auswahl.';
      const advTxt = adv.length ? ' <em>Wähle dieses, wenn du ' + adv.join(' und ') + '.</em>' : '';
      return '<div class="gk-cmp-bike"><strong>' + b.brand + ' ' + b.model + '</strong> (' + b.priceLabel + ', ' + b.weightLabel + ') — ' + base + advTxt + '</div>';
    }).join('');
  }

  const tip = n > 6 ? '<div class="gk-cmp-tip">💡 Bei ' + n + ' Bikes bleibt das ein grober Vergleich. Verfeinere deine Filter auf etwa 2–6 Ergebnisse, dann bekommst du hier auch einen Vergleich pro Bike.</div>' : '';

  return head + intro + secsHtml + perBike + tip + foot;
}

function toggleCompare() {
  const panel = document.getElementById('gk-compare-panel');
  const btn = document.getElementById('gk-compare-btn');
  cmpOpen = !cmpOpen;
  btn.setAttribute('aria-expanded', String(cmpOpen));
  btn.classList.toggle('open', cmpOpen);
  if (!cmpOpen) { panel.style.display = 'none'; return; }
  panel.style.display = 'block';
  const list = bikes.filter(matches);
  panel.innerHTML = buildCompareHTML(list);
}

function refreshCompare(list) {
  if (!cmpOpen) return;
  const panel = document.getElementById('gk-compare-panel');
  if (!panel) return;
  panel.innerHTML = buildCompareHTML(list);
}

function updateLivePanel(list) {
  const body = document.getElementById('gk-live-body');
  const cnt = document.getElementById('gk-live-count');
  if(!body || !cnt) return;
  cnt.textContent = list.length;
  if(list.length === 0) { body.innerHTML = '<div class="gk-live-empty">Keine Bikes — passe die Filter an.</div>'; return; }
  body.innerHTML = list.slice().sort((a,b) => a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model)).map(b => {
    const ph = bikePhoto(b);
    const thumb = `<span class="gk-live-thumb">${ph ? `<img src="${ph}" alt="" loading="lazy" decoding="async" onerror="this.parentNode.textContent='🚵'">` : '🚵'}</span>`;
    return `<a class="gk-live-item" href="${b.url}" target="_blank" rel="noopener" title="${b.brand} ${b.model} auf der Website ansehen">${thumb}<span class="gk-live-text"><span class="gk-live-brand">${b.brand}${b.ebike ? ' <span class="gk-live-e">⚡</span>' : ''}</span><span class="gk-live-model">${b.model}</span></span><svg class="gk-live-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`;
  }).join('');
}

(function(){
  const head = document.getElementById('gk-live-head');
  const panel = document.getElementById('gk-live');
  const t = document.getElementById('gk-live-toggle');
  const lbl = document.getElementById('gk-live-toggle-label');
  if(!head || !panel) return;
  function syncLive() {
    const c = panel.classList.contains('collapsed');
    if(t) t.textContent = c ? '+' : '–';
    if(lbl) lbl.textContent = c ? 'Ausklappen' : 'Einklappen';
    head.setAttribute('aria-expanded', String(!c));
  }
  function toggleLive() { panel.classList.toggle('collapsed'); syncLive(); }
  head.addEventListener('keydown', e => {
    if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleLive(); }
  });
  if(window.matchMedia('(max-width: 1180px)').matches) panel.classList.add('collapsed');
  syncLive();

  // Eén set Pointer Events voor muis én touch. Voorheen luisterde het paneel
  // naar zowel mouse- als touch-events; op een tablet vuurde de browser na een
  // tik óók nog synthetische muis-events af, waardoor toggleLive() twee keer
  // liep (inklappen → meteen weer uitklappen). Resultaat: de balk leek niet in
  // te klappen. Met Pointer Events handelen we elke tik/klik precies één keer af.
  let dragging = false, moved = false, sx = 0, sy = 0, ox = 0, oy = 0, pid = null;
  const THRESH = 5;
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function setPos(x, y) {
    const r = panel.getBoundingClientRect();
    const maxX = window.innerWidth - r.width - 4;
    const maxY = window.innerHeight - 40;
    panel.style.left = clamp(x, 4, maxX) + 'px';
    panel.style.top = clamp(y, 4, maxY) + 'px';
    panel.style.right = 'auto';
    panel.style.bottom = 'auto';
  }
  head.addEventListener('pointerdown', e => {
    if(e.button !== undefined && e.button !== 0) return;
    const r = panel.getBoundingClientRect();
    sx = e.clientX; sy = e.clientY; ox = r.left; oy = r.top;
    dragging = true; moved = false; pid = e.pointerId;
    try { head.setPointerCapture(e.pointerId); } catch(_) {}
  });
  head.addEventListener('pointermove', e => {
    if(!dragging || e.pointerId !== pid) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    if(!moved && Math.hypot(dx, dy) < THRESH) return;
    if(!moved) { moved = true; panel.classList.add('dragging'); }
    if(e.cancelable) e.preventDefault();
    setPos(ox + dx, oy + dy);
  });
  function pointerEnd(e) {
    if(!dragging || (pid !== null && e.pointerId !== pid)) return;
    try { head.releasePointerCapture(pid); } catch(_) {}
    panel.classList.remove('dragging');
    const wasMoved = moved;
    dragging = false; moved = false; pid = null;
    if(!wasMoved) toggleLive();
  }
  head.addEventListener('pointerup', pointerEnd);
  head.addEventListener('pointercancel', pointerEnd);
})();

(function(){
  const total = bikes.length;
  const ebikeCount = bikes.filter(b => b.ebike).length;
  const brands = new Set(bikes.map(b => b.brand)).size;
  const sub = document.getElementById('gk-sub-text');
  if(sub) sub.textContent = `${total} Modelle von ${brands} Marken, alle in den Niederlanden erhältlich (inkl. ${ebikeCount} E-Gravelbikes). Stand Juni 2026.`;
  const desc = document.getElementById('gk-ai-desc');
  if(desc) desc.textContent = `Stell eine Frage in normaler Sprache und bekomme eine Empfehlung auf Basis aller ${total} Modelle — zum Beispiel zu Preis, Gewicht, Federung oder Einsatz.`;
})();

/* ===================== v9: Tabs + Voordeur + Match Score ===================== */
function switchTab(name){
  document.querySelectorAll('.gk-tabpanel').forEach(p=>p.classList.toggle('active', p.id==='tab-'+name));
  document.querySelectorAll('.gk-tab').forEach(t=>{
    const on = t.id==='tabbtn-'+name;
    t.classList.toggle('active', on);
    t.setAttribute('aria-selected', on?'true':'false');
  });
  const live=document.getElementById('gk-live');
  if(live) live.style.display = (name==='compare') ? '' : 'none';
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ----- Voordeur-keuzes (v10: adaptieve flow per niveau) ----- */
const finder = { level:null, use:null, current:null, height:null, budget:null, maint:null, fitprio:null, region:null };
const ALL_STEPS = ['level','use','current','height','budget','maint','fitprio','region'];

/* Welke stappen tonen we, afhankelijk van het ervaringsniveau? */
const REFINE_STEPS=['current','maint','fitprio'];
function activeSteps(){
  /* v10.4: vaste 5-staps kernflow (was adaptief 5-8); huidige fiets, onderhoud
     en fit-prioriteit zijn verhuisd naar het optionele verfijnblok na de resultaten */
  if(!finder.level) return ['level'];
  return ['level','use','height','budget','region'];
}

const BUDGET_BANDS = {
  b1:{ idx:1, label:'bis €2.000',    classes:['1','2'] },
  b2:{ idx:2, label:'€2.000–3.500',  classes:['3'] },
  b3:{ idx:3, label:'€3.500–5.000',  classes:['4'] },
  b4:{ idx:4, label:'über €5.000',       classes:['5','6'] }
};
function bikeBudgetIdx(p){ if(p<=2000) return 1; if(p<=3500) return 2; if(p<=5000) return 3; return 4; }

const USE_GEO = {
  bos:         { primary:'Adventure Gravel',      secondary:[],                                       label:'entspannt durch Wald &amp; Sand fahren' },
  bikepacking: { primary:'Bikepacking / Touring', secondary:['Adventure Gravel'],                     label:'mit Taschen unterwegs sein' },
  racen:       { primary:'Race Gravel',           secondary:[],                                       label:'schnell fahren' },
  events:      { primary:'Race Gravel',           secondary:['Adventure Gravel'],                     label:'Rennen &amp; Events fahren' },
  alles:       { primary:'Adventure Gravel',      secondary:['Race Gravel','Bikepacking / Touring'],  label:'von allem etwas machen' }
};

/* Groepset-rang (laag→hoog) voor niveau-fit; sluit aan op groupFamily() */
function groupRank(b){
  const order = {
    'Shimano CUES':1,'SRAM Apex':1,
    'Shimano GRX 400':2,
    'Shimano GRX 600':3,'SRAM Apex AXS':3,
    'Shimano GRX 800':4,'SRAM Rival AXS':4,
    'Shimano GRX Di2':5,'SRAM Force AXS':5,
    'Shimano XT Di2':6,'SRAM Red AXS':6
  };
  return order[groupFamily(b)] || 3;
}

/* ----- Lengte → maat (nudge + badge, verbergt niets) ----- */
const SIZE_H = { '3XS':152,'XXS':156,'2XS':160,'XS':166,'S':172,'M':178,'M/L':182,'L':185,'XL':191,'2XL':196,'XXL':196 };
function frameToHeight(cm){
  const pts=[[47,160],[49,165],[50,167],[52,172],[53,175],[54,177],[55,179],[56,182],[57,184],[58,186],[60,189],[61,191]];
  if(cm<=pts[0][0]) return pts[0][1];
  if(cm>=pts[pts.length-1][0]) return pts[pts.length-1][1];
  for(let i=1;i<pts.length;i++){ if(cm<=pts[i][0]){ const a=pts[i-1],z=pts[i]; return a[1]+(z[1]-a[1])*(cm-a[0])/(z[0]-a[0]); } }
  return 178;
}
function tokenHeight(tok){
  if(SIZE_H[tok]!=null) return SIZE_H[tok];
  const num = parseFloat(String(tok).replace(',','.'));
  if(!isNaN(num) && num>=40 && num<=66) return frameToHeight(num);
  return null;
}
function bikeHeightRange(b){
  const hs=(b.sizeList||b.sizeCats||[]).map(tokenHeight).filter(h=>h!=null);
  if(!hs.length) return null;
  return [Math.min(...hs)-4, Math.max(...hs)+4]; /* elke maat dekt ~±4 cm */
}
const HEIGHT_BUCKET = { h1:[150,165], h2:[165,175], h3:[175,185], h4:[185,205] };
const HEIGHT_LABEL  = { h1:'bis 165 cm', h2:'165–175 cm', h3:'175–185 cm', h4:'185 cm und größer' };
function sizeFits(b){
  if(!finder.height) return true;
  const r=bikeHeightRange(b); if(!r) return true; /* maat onbekend → niet afstraffen */
  const bk=HEIGHT_BUCKET[finder.height];
  return r[0] <= bk[1] && r[1] >= bk[0]; /* overlap rijderlengte ↔ fietsmaten */
}

const REGION_NAME = { maasduinen:'Maasduinen', veluwe:'Veluwe', limburg:'Südlimburg', ardennen:'Ardennen', overal:'' };

/* Waarde-percentiel (prijs-kwaliteit), gevuld in renderFinder */
let _valMin=0, _valMax=1;
function valuePct(b){ return _valMax>_valMin ? (valueScore(b)-_valMin)/(_valMax-_valMin) : 0.5; }

/* ----- Kern: gewogen Match Score (budget32/geo24/niveau14/maat12/voorkeur10/bonus8) ----- */
function scoreBike(b){
  const R = [];
  const wide=b.maxTire>=45, damp=hasDamping(b), lightB=b.weightClass<=2;

  /* Budget — 32 (tier-afstand t.o.v. gekozen budgetklasse) */
  const ui = BUDGET_BANDS[finder.budget].idx;
  const d  = bikeBudgetIdx(b.price) - ui;
  let budget;
  if(d===0){ budget=32; R.push({w:32,t:'Liegt genau in deinem Budget'}); }
  else if(d===-1){ budget=22; R.push({w:22,t:'Günstig, unter deinem Budget'}); }
  else if(d===1){ budget=13; R.push({w:13,t:'Knapp über deinem Budget'}); }
  else if(d===-2){ budget=9; R.push({w:9,t:'Deutlich unter deinem Budget'}); }
  else if(d===2){ budget=4; }
  else { budget=0; }

  /* Gebruik / geometrie — 24 */
  const ug = USE_GEO[finder.use];
  let geo;
  if(b.geo===ug.primary){ geo=24; R.push({w:30,t:'Geometrie passt perfekt, wenn du '+ug.label+' willst'}); }
  else if(ug.secondary.indexOf(b.geo)>=0){ geo=15; R.push({w:18,t:'Geeignete Geometrie, wenn du '+ug.label+' willst'}); }
  else { geo=7; }

  /* Niveau — 14 (frame + gewicht + groepset → tier 0..3, vergeleken met gekozen niveau) */
  const gr     = (groupRank(b)-1)/5;
  const light  = Math.max(0,(4-b.weightClass)/3);
  const carbon = b.frame==='carbon' ? 1 : (b.frame==='aluminium' ? 0.4 : 0.6);
  const tier3  = (0.5*gr + 0.3*light + 0.2*carbon) * 3;
  const uLevel = {beginner:0,gemiddeld:1,gevorderd:2,expert:3}[finder.level];
  const nf     = Math.max(0, 1 - Math.abs(tier3-uLevel)/3);
  const niveau = Math.round(14*nf);
  if(nf>=0.7){
    R.push({w:14, t:{beginner:'Zugängliche Ausstattung für den Einstieg',gemiddeld:'Schöne Allround-Ausstattung der Mittelklasse',gevorderd:'Sportliche Ausstattung für regelmäßige Fahrer',expert:'High-End-Ausstattung für maximale Leistung'}[finder.level]});
  }

  /* Maat — 12 (lengte → leverbare maat; verbergt niets, duwt alleen) */
  const fits = sizeFits(b);
  b._sizeFit = fits;
  const maat = fits ? 12 : 0;

  /* Voorkeur — 10 (gemiddeld/gevorderd: onderhoud · expert: fit-prioriteit + onderhoud samen) */
  const prefNudge=(kind)=>{
    if(kind==='weight'){ return {v:Math.round(10*light), r:lightB?'Leicht — deine Priorität':null}; }
    if(kind==='speed'){ const race=b.geo==='Race Gravel'?1:0; return {v:Math.round(10*(0.6*race+0.4*light)), r:(race&&lightB)?'Schnell & renntauglich — deine Priorität':null}; }
    if(kind==='comfort'){ const c=(damp?0.4:0)+(b.maxTire>=45?0.35:b.maxTire>=42?0.18:0)+((b.geo==='Adventure Gravel'||b.geo==='Bikepacking / Touring')?0.25:0); return {v:Math.round(10*Math.min(1,c)), r:c>=0.5?'Komfortabel — deine Priorität':null}; }
    if(kind==='mounts'){ const m=(b.mounts?0.6:0)+(b.geo==='Bikepacking / Touring'?0.4:0); return {v:Math.round(10*Math.min(1,m)), r:b.mounts?'Viele Befestigungsmöglichkeiten — deine Priorität':null}; }
    if(kind==='low'){ return {v:Math.min(10,(b.electronic?0:5)+(b.drivetrain==='1x'?5:2)), r:!b.electronic?('Wartungsarm: mechanisch'+(b.drivetrain==='1x'?' 1×':'')):null}; }
    if(kind==='tech'){ return {v:Math.min(10,(b.electronic?7:0)+(b.integrated?3:0)), r:b.electronic?'Neueste Technik: kabellos schalten':null}; }
    if(kind==='perf'){ return {v:Math.round(10*(0.6*light+0.4*(groupRank(b)>=4?1:groupRank(b)>=3?0.5:0))), r:(lightB&&groupRank(b)>=4)?'Leicht & High-End-Gruppe':null}; }
    if(kind==='value'){ return {v:Math.round(10*valuePct(b)), r:valuePct(b)>=0.6?'Starkes Preis-Leistungs-Verhältnis':null}; }
    return {v:10,r:null};
  };
  let voorkeur=10, vR=null;
  if(finder.level==='expert'){
    const f=finder.fitprio?prefNudge(finder.fitprio):{v:10,r:null};
    const m=finder.maint?prefNudge(finder.maint):{v:10,r:null};
    voorkeur=Math.round(0.6*f.v+0.4*m.v);
    vR=f.r||m.r;
  } else if((finder.level==='gemiddeld'||finder.level==='gevorderd') && finder.maint){
    const m=prefNudge(finder.maint); voorkeur=m.v; vR=m.r;
  }
  if(vR) R.push({w:16,t:vR});

  /* Bonussen — 8 (gebruik + regio-nudge) */
  let bonus=0;
  if(finder.use==='bikepacking'){ if(b.mounts){bonus+=4;} if(wide){bonus+=3;} }
  else if(finder.use==='bos'){ if(damp){bonus+=3;} if(wide){bonus+=4;} }
  else if(finder.use==='racen'){ if(lightB){bonus+=4;} if(b.frame==='carbon'){bonus+=3;} }
  else if(finder.use==='events'){ if(lightB){bonus+=3;} if(b.tubeless){bonus+=2;} if(b.frame==='carbon'){bonus+=2;} }
  else { if(b.mounts){bonus+=2;} if(damp){bonus+=2;} if(wide){bonus+=3;} }
  const reg=finder.region;
  let regHit=false;
  if(reg==='maasduinen'||reg==='veluwe'){ if(wide){bonus+=3;regHit=true;} else if(damp){bonus+=2;regHit=true;} }
  else if(reg==='limburg'||reg==='ardennen'){ if(lightB){bonus+=3;regHit=true;} }
  bonus=Math.min(8,bonus);
  if(regHit && REGION_NAME[reg]) R.push({w:13,t:'Geeignet für die Region '+REGION_NAME[reg]});

  /* Extra navolgbare pluspunten */
  if(wide) R.push({w:11,t:'Viel Reifenfreiheit: '+b.maxTire+' mm'});
  if(b.electronic) R.push({w:10,t:'Zukunftssichere kabellose Gruppe'});
  if(b.mounts && finder.use!=='bikepacking' && !(finder.level==='expert'&&finder.fitprio==='mounts')) R.push({w:9,t:'Befestigungspunkte für Gepäck & Schutzbleche'});

  const score = Math.max(0, Math.min(100, Math.round(budget+geo+niveau+maat+voorkeur+bonus)));

  /* Redenen: hoogst wegend eerst, ontdubbeld, max 4 */
  R.sort((a,b)=>b.w-a.w);
  const seen=new Set(), reasons=[];
  for(const r of R){ if(!seen.has(r.t)){ seen.add(r.t); reasons.push(r.t); } if(reasons.length>=4) break; }
  return { score, reasons, parts:{budget,geo,niveau,maat,voorkeur,bonus} };
}

function pickFinder(key,val,el){
  finder[key]=val;
  el.parentNode.querySelectorAll('.gk-fchip').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  const steps=activeSteps();
  /* verberg alle stappen die nu niet meer actief zijn, behalve hun selectie te wissen */
  ALL_STEPS.forEach(k=>{ if(steps.indexOf(k)<0 && REFINE_STEPS.indexOf(k)<0){ const e=document.getElementById('fstep-'+k); if(e) e.classList.add('hidden'); } });
  /* toon stappen t/m de eerste onbeantwoorde */
  for(let i=0;i<steps.length;i++){
    const e=document.getElementById('fstep-'+steps[i]); if(e) e.classList.remove('hidden');
    if(!finder[steps[i]]) break;
  }
  /* hernummer de zichtbare stappen 1..N */
  steps.forEach((k,i)=>{ const e=document.getElementById('fstep-'+k); const n=e&&e.querySelector('.gk-fstep-num'); if(n) n.textContent=i+1; });
  if(steps.every(k=>finder[k])) renderFinder();
}

function gorillaMini(){
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="34" height="34" aria-hidden="true"><circle cx="60" cy="60" r="58" fill="#0f1b12"/><circle cx="60" cy="60" r="50" fill="none" stroke="#2F8F3E" stroke-width="9" stroke-dasharray="6 6.5"/><circle cx="60" cy="60" r="43" fill="#232826"/><ellipse cx="60" cy="56" rx="26" ry="20" fill="#EDE7DB"/><ellipse cx="60" cy="77" rx="19" ry="15" fill="#EDE7DB"/><ellipse cx="51" cy="52" rx="10.5" ry="3.9" fill="#232826" transform="rotate(-13 51 52)"/><ellipse cx="69" cy="52" rx="10.5" ry="3.9" fill="#232826" transform="rotate(13 69 52)"/><circle cx="51" cy="60" r="3.3" fill="#232826"/><circle cx="69" cy="60" r="3.3" fill="#232826"/><path d="M50,70 Q60,67 70,70 Q73,80 64,83 Q60,84.5 56,83 Q47,80 50,70 Z" fill="#232826"/><circle cx="56.5" cy="75" r="1.9" fill="#EDE7DB"/><circle cx="63.5" cy="75" r="1.9" fill="#EDE7DB"/></svg>`;
}

function regionTip(){
  return {
    maasduinen:'In den Maasduinen fährst du viel losen Sand und Waldwege — breite Reifen (45 mm+) und etwas mehr Komfort machen hier wirklich den Unterschied.',
    veluwe:'Auf der Veluwe gibt es Sand- und Waldwege — Komfort und Grip lohnen sich hier, also nimm etwas breitere Reifen.',
    limburg:'In Südlimburg geht es ordentlich auf und ab — ein leichtes Bike mit genug kleinen Gängen klettert deutlich angenehmer.',
    ardennen:'In den Ardennen fährst du lange, harte Anstiege — Gewicht und eine große Übersetzungsbandbreite zählen hier wirklich.',
    overal:''
  }[finder.region] || '';
}

function currentTip(){
  return {
    race:'Kommst du vom Rennrad, sind die breiteren Reifen und das etwas ruhigere Lenkverhalten kurz gewöhnungsbedürftig — aber du gewinnst viel Komfort und Grip auf losem Untergrund.',
    mtb:'Kommst du vom Mountainbike, fühlt sich ein Gravelbike flink und schnell auf der Straße an; du sitzt sportlicher und rollst deutlich leichter.',
    oldgravel:'Steigst du von einem älteren Gravelbike um, fallen vor allem die größere Reifenfreiheit, die modernere Gruppe und das geringere Gewicht auf.',
    none:'Ist das (so gut wie) dein erstes Bike, liegst du damit gleich richtig: vielseitig, gutmütig und bereit für viele Kilometer.'
  }[finder.current] || '';
}

/* Waarom #1 boven #2? — concrete verschillen */
function advEdge(a,b){
  const e=[];
  if(a.maxTire>=b.maxTire+3) e.push('mehr Reifenfreiheit ('+a.maxTire+' vs. '+b.maxTire+' mm)');
  if(bikeWeight(a)+0.3<bikeWeight(b)) e.push('einen leichteren Rahmen');
  if(a.mounts&&!b.mounts) e.push('mehr Befestigungspunkte für Gepäck');
  if(hasDamping(a)&&!hasDamping(b)) e.push('Dämpfung für mehr Komfort');
  if(groupRank(a)>groupRank(b)) e.push('eine höherwertige Gruppe');
  if(a.price<=b.price*0.92) e.push('einen günstigeren Preis');
  if(a.electronic&&!b.electronic) e.push('kabelloses Schalten');
  return e;
}
function joinNl(arr){ return arr.length<=1 ? (arr[0]||'') : arr.slice(0,-1).join(', ')+' und '+arr[arr.length-1]; }

function buildAdvice(top, second){
  const ug=USE_GEO[finder.use], bb=BUDGET_BANDS[finder.budget];
  const frameRec={beginner:'ein zuverlässiges Aluminium- oder Einstiegs-Carbon',gemiddeld:'ein solides Carbon- oder Top-Aluminium',gevorderd:'ein leichtes Carbon',expert:'ein ultraleichtes Carbon'}[finder.level];
  const tireRec=(finder.use==='bikepacking'||finder.use==='bos')?45:(finder.use==='racen'?40:42);
  const regName=REGION_NAME[finder.region];
  const where=regName?` in der Region <strong>${regName}</strong>`:'';
  const tip=regionTip(), cur=currentTip();
  if(!top){
    return `<div class="gk-advice-head"><span class="gk-fi-logo">${gorillaMini()}</span> Gorilla sagt</div>
      <p>Ich konnte kein Bike finden, das gut zu dieser Kombination passt — versuch ein größeres Budget oder einen anderen Einsatz.</p>`;
  }
  let lead = `Für jemanden wie dich, der vor allem${where} <strong>${ug.label}</strong> möchte und <strong>${bb.label}</strong> ausgeben kann, wähle ich ${frameRec} <strong>${ug.primary}</strong>-Gravelbike mit mindestens <strong>${tireRec} mm</strong> Reifenfreiheit. Meine Nummer 1 ist das <strong>${top.brand} ${top.model}</strong> (${top.priceLabel}) mit einem Match Score von <strong>${top._sc.score}%</strong>.`;
  let vs='';
  if(second){
    const edge=advEdge(top,second);
    vs = edge.length
      ? ` Ich würde das <strong>${top.brand} ${top.model}</strong> dem <strong>${second.brand} ${second.model}</strong> (${second._sc.score}%) vorziehen: du bekommst ${joinNl(edge.slice(0,2))}.`
      : ` Das <strong>${top.brand} ${top.model}</strong> und das <strong>${second.brand} ${second.model}</strong> (${second._sc.score}%) liegen dicht beieinander — das erste gewinnt knapp beim Gesamt-Match.`;
  }
  return `<div class="gk-advice-head"><span class="gk-fi-logo">${gorillaMini()}</span> Gorilla sagt</div>
    <p>${lead}${vs}</p>
    ${cur?`<div class="gk-advice-tip">🚲 ${cur}</div>`:''}
    ${tip?`<div class="gk-advice-tip">📍 ${tip}</div>`:''}`;
}

function finderCard(b){
  const sc=b._sc;
  const tier=sc.score>=85?'perfect':sc.score>=70?'sterk':'kan';
  const tierLabel={perfect:'Perfekter Treffer',sterk:'Starke Wahl',kan:'Möglich, nicht optimal'}[tier];
  const sizeBadge = finder.height
    ? (b._sizeFit
        ? `<div class="gk-fsize gk-fsize-ok">✓ In deiner Größe erhältlich (${HEIGHT_LABEL[finder.height]})</div>`
        : `<div class="gk-fsize gk-fsize-no">⚠️ Eventuell nicht in deiner Größe — prüfe die Größenberatung bei ${shopName(b)}</div>`)
    : '';
  return `<div class="gk-fcard gk-f-${tier}${finder.height&&!b._sizeFit?' gk-f-nosize':''}">
    <div class="gk-fscore-wrap"><div class="gk-fscore">🦍 ${sc.score}%</div><div class="gk-ftier">${tierLabel}</div></div>
    ${bikeThumb(b)}
    <div class="gk-brand">${b.brand}</div>
    <div class="gk-model">${b.model}</div>
    <div><span class="gk-geo-tag ${geoClass(b.geo)}">${b.geo}</span></div>
    <div class="gk-fprice">${b.priceLabel} · ⚖️ ${b.weightLabel} · ${groupLabel(b)}${isXplr(b) ? ' <span class="gk-spec-xplr">XPLR</span>' : ''}${isGrx(b) ? ' <span class="gk-spec-grx">GRX</span>' : ''}</div>
    ${sizeBadge}
    <div class="gk-freasons-lbl">Warum der Gorilla dieses wählt</div>
    <ul class="gk-freasons">${sc.reasons.map(r=>`<li>${r}</li>`).join('')}</ul>
    <a class="gk-buy-btn" href="${b.url}" target="_blank" rel="noopener">Preis bei ${shopName(b)} ansehen</a>
    <button class="gk-cmpsel" type="button" data-key="${b.brand}|${b.model}" onclick="toggleCmpSel(this.dataset.key,this)" aria-pressed="false" title="Auswählen, um nebeneinander zu vergleichen (max. 4)">⇄ Vergleichen</button>
  </div>`;
}

/* ----- Top-3 vergelijking (gevorderd & expert): waarom niet nummer 2? ----- */
function axisScores(b){
  const wkg=bikeWeight(b);
  const lightScale=Math.max(0,Math.min(1,(11.5-wkg)/3.5));
  const comfort = Math.round(100*Math.min(1,(hasDamping(b)?0.30:0)+(b.maxTire>=50?0.35:b.maxTire>=45?0.28:b.maxTire>=42?0.18:0.10)+((b.geo==='Adventure Gravel'||b.geo==='Bikepacking / Touring')?0.25:0)));
  const snelheid = Math.round(100*Math.min(1,(b.geo==='Race Gravel'?0.32:0)+0.5*lightScale+(b.frame==='carbon'?0.18:0)));
  const bikepack = Math.round(100*Math.min(1,(b.mounts?0.40:0)+(b.geo==='Bikepacking / Touring'?0.25:b.geo==='Adventure Gravel'?0.12:0)+(b.maxTire>=45?0.23:b.maxTire>=42?0.12:0)+(b.fender?0.07:0)));
  const value = Math.round(100*valuePct(b));
  return { comfort, snelheid, bikepack, value };
}
function t3row(label, vals){
  const best=Math.max(...vals);
  const cells=vals.map(v=>`<td class="gk-t3cell"><div class="gk-t3bar${v===best&&best>0?' gk-t3best':''}"><span style="width:${v}%"></span></div><div class="gk-t3val">${v}</div></td>`).join('');
  return `<tr><td class="gk-t3axis">${label}</td>${cells}</tr>`;
}
function buildTop3(list){
  const t3=list.slice(0,3);
  if(t3.length<2) return '';
  const ax=t3.map(axisScores);
  const head=`<tr><th></th>${t3.map((b,i)=>`<th><span class="gk-t3rank">#${i+1} · ${b._sc.score}%</span>${b.brand} ${b.model}</th>`).join('')}</tr>`;
  return `<div class="gk-top3">
    <div class="gk-top3-title">Warum diese Top 3? Vergleiche, was zählt</div>
    <div class="gk-top3-sub">Höher = besser. So siehst du sofort, wo Nummer 1 gewinnt und wo Nummer 2 oder 3 vielleicht sogar besser zu dir passt.</div>
    <table class="gk-t3tbl"><thead>${head}</thead><tbody>
      ${t3row('🛋️ Komfort', ax.map(a=>a.comfort))}
      ${t3row('🚀 Tempo', ax.map(a=>a.snelheid))}
      ${t3row('🎒 Bikepacking', ax.map(a=>a.bikepack))}
      ${t3row('💰 Preis-Leistung', ax.map(a=>a.value))}
    </tbody></table>
  </div>`;
}

function renderFinder(){
  /* v10.3: hard budgetfilter — fietsen boven de gekozen budgetklasse komen niet meer in de resultaten */
  const uiIdx=BUDGET_BANDS[finder.budget].idx;
  const all=bikes.filter(b=>!b.ebike);
  const pool=all.filter(b=>bikeBudgetIdx(b.price)<=uiIdx);
  const overBudget=all.length-pool.length;
  pool.forEach(b=>{ b._val=valueScore(b); });
  _valMin=Math.min(...pool.map(b=>b._val)); _valMax=Math.max(...pool.map(b=>b._val));
  pool.forEach(b=>{ b._sc=scoreBike(b); });
  /* sorteer op score; passende maat als eerste tiebreaker (nudge), dan prijs */
  pool.sort((a,b)=> b._sc.score - a._sc.score || (b._sizeFit?1:0)-(a._sizeFit?1:0) || a.price - b.price);
  const strong=pool.filter(b=>b._sc.score>=55);
  const list=(strong.length>=3?strong:pool.slice(0,3)).slice(0,12);

  const adv=document.getElementById('finder-advice');
  adv.innerHTML=buildAdvice(list[0], list[1]);
  adv.classList.add('show');
  document.getElementById('finder-actions').style.display='flex';

  document.getElementById('finder-count').textContent = (list.length===0
    ? 'Keine Bikes in diesem Budget gefunden — versuch eine größere Budgetklasse'
    : strong.length>=3
      ? `${strong.length} Bikes passen in dein Budget und zu deinem Profil — die Top ${list.length} unten`
      : `Begrenzte Treffer in deinem Budget — ich zeige die ${list.length} am besten passenden Bikes`)
    + (overBudget>0 ? ` · ${overBudget} Bikes über deinem Budget lasse ich weg` : '');

  const top3=document.getElementById('finder-top3');
  top3.innerHTML = (finder.level==='gevorderd'||finder.level==='expert') ? buildTop3(list) : '';

  const grid=document.getElementById('finder-grid');
  grid.innerHTML = list.length ? list.map(finderCard).join('') : '<div class="gk-fempty">Keine passenden Bikes gefunden. Versuch ein anderes Budget oder einen anderen Einsatz.</div>';
  syncCmpUI();
  /* v10.4: toon het optionele verfijnblok zodra er resultaten zijn */
  const ref=document.getElementById('gk-refine');
  if(ref){
    ref.classList.remove('hidden');
    const fc=document.getElementById('fstep-current'), fm=document.getElementById('fstep-maint'), ff=document.getElementById('fstep-fitprio');
    if(fc) fc.classList.remove('hidden');
    if(fm) fm.classList.toggle('hidden', finder.level==='beginner');
    if(ff) ff.classList.toggle('hidden', finder.level!=='expert');
  }
  setTimeout(()=>adv.scrollIntoView({behavior:'smooth',block:'nearest'}),60);
}

function finderToCompare(){
  filterKeys.forEach(k=> state[k] = multiKeys.has(k) ? [] : 'all');
  state.etype='normal';
  const ug=USE_GEO[finder.use];
  if(finder.use!=='alles') state.geo=[ug.primary];
  state.price=[...BUDGET_BANDS[finder.budget].classes];
  filterKeys.forEach(syncChips);
  const ss=document.getElementById('sort-sel'); if(ss) ss.value='price-asc';
  render();
  switchTab('compare');
}

function resetFinder(){
  ALL_STEPS.forEach(k=>{ finder[k]=null; });
  document.querySelectorAll('#tab-finder .gk-fchip').forEach(c=>c.classList.remove('sel'));
  ALL_STEPS.filter(k=>k!=='level').forEach(s=>{ const e=document.getElementById('fstep-'+s); if(e) e.classList.add('hidden'); });
  const adv=document.getElementById('finder-advice'); adv.classList.remove('show'); adv.innerHTML='';
  document.getElementById('finder-actions').style.display='none';
  document.getElementById('finder-count').textContent='';
  document.getElementById('finder-top3').innerHTML='';
  document.getElementById('finder-grid').innerHTML='';
  const ref=document.getElementById('gk-refine'); if(ref) ref.classList.add('hidden');
  REFINE_STEPS.forEach(k=>{ const e=document.getElementById('fstep-'+k); if(e) e.classList.add('hidden'); });
  window.scrollTo({top:0,behavior:'smooth'});
}

/* ===================== v10.4: per-fiets-vergelijker ===================== */
const cmpSel = [];
const cmpKey = b => b.brand + '|' + b.model;
function toggleCmpSel(key, el) {
  const i = cmpSel.indexOf(key);
  if(i >= 0) cmpSel.splice(i, 1);
  else {
    if(cmpSel.length >= 4) {
      const n = document.getElementById('gk-cmpbar-note');
      if(n) n.textContent = 'Maximal 4 — entferne erst eins';
      return;
    }
    cmpSel.push(key);
  }
  syncCmpUI();
}
function clearCmpSel() { cmpSel.length = 0; syncCmpUI(); closeCmpModal(); }
function syncCmpUI() {
  document.querySelectorAll('.gk-cmpsel').forEach(el => {
    const on = cmpSel.indexOf(el.dataset.key) >= 0;
    el.classList.toggle('on', on);
    el.setAttribute('aria-pressed', String(on));
    el.textContent = on ? '✓ Im Vergleich' : '⇄ Vergleichen';
  });
  const bar = document.getElementById('gk-cmpbar');
  if(!bar) return;
  bar.classList.toggle('show', cmpSel.length > 0);
  const btn = document.getElementById('gk-cmpbar-btn');
  const note = document.getElementById('gk-cmpbar-note');
  if(!btn || !note) return;
  btn.disabled = cmpSel.length < 2;
  btn.textContent = '⇄ ' + cmpSel.length + (cmpSel.length === 1 ? ' Bike' : ' Bikes') + ' vergleichen';
  note.textContent = cmpSel.length === 1 ? 'Wähle noch mindestens eins' : (cmpSel.length >= 4 ? 'Maximum erreicht (4)' : '');
}
function cmpRowVals(label, sel, fmt, bestFn) {
  let bestIdx = -1;
  if(bestFn) {
    let bv = null;
    sel.forEach((b, i) => { const v = bestFn(b); if(v !== null && (bv === null || v > bv)) { bv = v; bestIdx = i; } });
    if(bestIdx >= 0 && sel.filter(b => bestFn(b) !== null && bestFn(b) === bestFn(sel[bestIdx])).length > 1) bestIdx = -1; /* gelijkspel: niets markeren */
  }
  return '<tr><td>' + label + '</td>' + sel.map((b, i) => '<td' + (i === bestIdx ? ' class="gk-best"' : '') + '>' + fmt(b) + '</td>').join('') + '</tr>';
}
function openCmpModal() {
  if(cmpSel.length < 2) return;
  const sel = cmpSel.map(k => bikes.find(b => cmpKey(b) === k)).filter(Boolean);
  const body = document.getElementById('gk-cmpm-body');
  const yn = v => v ? '✓ Ja' : '—';
  const head = '<tr><td></td>' + sel.map(b => '<th><div class="gk-cmpm-thumb">' + bikeThumb(b) + '</div><div class="gk-cmpm-name">' + b.brand + '<br>' + b.model + '</div><button class="gk-cmpm-rm" type="button" data-key="' + cmpKey(b) + '" onclick="toggleCmpSel(this.dataset.key,this); if(cmpSel.length>=2) openCmpModal(); else closeCmpModal();">× entfernen</button></th>').join('') + '</tr>';
  const anyE = sel.some(b => b.ebike);
  const rows = [
    cmpRowVals('Preis', sel, b => b.priceLabel, b => -b.price),
    cmpRowVals('Geometrie', sel, b => '<span class="gk-geo-tag ' + geoClass(b.geo) + '">' + b.geo + '</span>'),
    cmpRowVals('Rahmen', sel, b => b.frame === 'carbon' ? 'Carbon' : b.frame === 'staal' ? 'Stahl' : 'Aluminium'),
    cmpRowVals('Gewicht', sel, b => b.weightLabel, b => bikeWeight(b) === 99 ? null : -bikeWeight(b)),
    cmpRowVals('Gruppe', sel, b => groupLabel(b) + (isXplr(b) ? ' <span class="gk-spec-xplr">XPLR</span>' : '') + (isGrx(b) ? ' <span class="gk-spec-grx">GRX</span>' : '')),
    cmpRowVals('Kassette', sel, b => speedCount(b) ? speedCount(b) + '-fach' : '—', b => speedCount(b)),
    cmpRowVals('Schalten', sel, b => b.electronic ? '⚡ Elektronisch' : '⚙️ Mechanisch'),
    cmpRowVals('Antrieb', sel, b => driveLabel(b.drivetrain)),
    cmpRowVals('Max. Reifen', sel, b => b.maxTire + ' mm', b => b.maxTire),
    cmpRowVals('Laufradsatz', sel, b => b.wheelBrand + ' (' + b.wheels + ')'),
    cmpRowVals('Laufradsatzgewicht', sel, b => { const s = wheelSpecs[b.wheelBrand]; return (s && s.weight) ? s.weight.replace('spaken', 'Speichen') : 'unbekannt'; }, b => { const v = wheelWeightVal(b); return v === null ? null : -v; }),
    cmpRowVals('Rahmengrößen', sel, b => sizesLabel(b)),
    anyE ? cmpRowVals('Motor', sel, b => b.motor || '—') : '',
    anyE ? cmpRowVals('Akku', sel, b => b.battery || '—') : '',
    cmpRowVals('Befestigungspunkte', sel, b => yn(b.mounts)),
    cmpRowVals('Schutzbleche', sel, b => yn(b.fender)),
    cmpRowVals('Dämpfung', sel, b => hasDamping(b) ? b.damping : '—'),
    cmpRowVals('Tubeless', sel, b => yn(b.tubeless)),
    cmpRowVals('Modelljahr', sel, b => b.year),
    '<tr><td></td>' + sel.map(b => '<td><a class="gk-cmpm-buy" href="' + b.url + '" target="_blank" rel="noopener">Bei ' + shopName(b) + ' ansehen</a></td>').join('') + '</tr>'
  ].join('');
  body.innerHTML = '<div class="gk-top3-title" style="margin-bottom:10px;">Deine Auswahl vergleichen (' + sel.length + ')</div><table class="gk-cmpm-tbl"><tbody>' + head + rows + '</tbody></table><div class="gk-wheel-note" style="margin-top:8px;">✓ = bester Wert in dieser Zeile (niedrigster Preis/Gewicht, meiste Reifenfreiheit).</div>';
  document.getElementById('gk-cmp-modal').hidden = false;
  document.body.style.overflow = 'hidden';
}
function closeCmpModal() { const m = document.getElementById('gk-cmp-modal'); if(m) m.hidden = true; document.body.style.overflow = ''; }
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeCmpModal(); });

/* ===================== v10.4: verfijnvragen verhuizen naar optioneel blok ===================== */
(function(){
  const reg = document.getElementById('fstep-region');
  if(!reg) return;
  const wrap = document.createElement('div');
  wrap.id = 'gk-refine';
  wrap.className = 'gk-refine hidden';
  wrap.innerHTML = '<div class="gk-refine-title">🔧 Empfehlung verfeinern <span>(optional — deine Ergebnisse passen sich sofort an)</span></div>';
  reg.parentNode.insertBefore(wrap, reg.nextSibling);
  REFINE_STEPS.forEach(k => { const e = document.getElementById('fstep-' + k); if(e) wrap.appendChild(e); });
})();

render();
switchTab('finder');
