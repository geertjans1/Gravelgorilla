/* gravelbike-kiezer — gemaakt door .claude/kiezer-importeren.ps1 uit gravelbike-kiezer-v10.5.html */
const bikes = [
  { brand:"Canyon", model:"Grail CF 7", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss (aluminium)", maxTire:42, priceClass:3, price:2199, priceLabel:"~€2.199", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"GRX 820", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Instap in de Grail-racelijn: carbon frame met mechanische GRX 820 2×12 voor een breed, klassiek bereik. Snel op licht gravel en asfalt, met 42 mm bandruimte en optionele Fast Fenders.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf/grail-cf-7/4149.html" },
  { brand:"Canyon", model:"Grail CF 8 1by", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss (aluminium)", maxTire:42, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"GRX 822", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Sportieve 1×12-versie van de carbon Grail met GRX 822. Strak, onderhoudsarm en gericht op snelle gravelritten en marathons.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf/grail-cf-8-1by/4148.html" },
  { brand:"Canyon", model:"Grail CF SL 7 AERO", frame:"carbon", wheels:"carbon", wheelBrand:"Reynolds ATR TSS", maxTire:42, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,8 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Race-Grail met draadloze SRAM Rival XPLR AXS (1×13) en carbon Reynolds ATR-wielen. De aero cockpit met Gear Groove maakt 'm klaar voor snelle gravelkoersen.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf/grail-cf-sl-7-aero/4150.html" },
  { brand:"Canyon", model:"Grail CF SLX 8 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1400", maxTire:42, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"GRX Di2 RX825", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Nieuwe CF SLX-layup (1.120 g frame) met elektronische GRX Di2 2×12, powermeter en DT Swiss GRC 1400 carbon wielen. Gemaakt voor gravelwedstrijden.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf-slx/grail-cf-slx-8-di2/4474.html" },
  { brand:"Canyon", model:"Grail CF SLX 8 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1400", maxTire:42, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,3 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"CF SLX-frame met draadloze SRAM Force XPLR AXS (1×13, powermeter) en DT Swiss GRC 1400. Snelheid en bereik voor gravelraces op elk terrein.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf-slx/grail-cf-slx-8-axs/4475.html" },
  { brand:"Canyon", model:"Grail CF SLX 8 w/ RIFT", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1400", maxTire:42, priceClass:5, price:5299, priceLabel:"~€5.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,0 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:false, fender:true, damping:"RIFT-veervork (40 mm)", tubeless:true, ebike:false, geoDesc:"Hetzelfde raceplatform, maar met de samen met DT Swiss ontwikkelde RIFT-veervork (40 mm veerweg). Comfort en controle op ruig parcours zonder race-DNA te verliezen.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf-slx/grail-cf-slx-8-w%2F-rift/4473.html" },
  { brand:"Canyon", model:"Grail CFR Di2", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1100", maxTire:42, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"GRX Di2 RX825", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topframe van 990 g met GRX Di2 2×12, powermeter en DT Swiss GRC 1100. Het platform waarmee Unbound- en wereldtitels zijn gewonnen.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cfr/grail-cfr-di2/4154.html" },
  { brand:"Canyon", model:"Grail CFR w/ RIFT", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1100", maxTire:42, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"GRX Di2 RX825", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"RIFT-veervork (40 mm)", tubeless:true, ebike:false, geoDesc:"CFR-topmodel met RIFT-veervork (40 mm) en GRX Di2: maximale snelheid mét demping voor de ruigste gravelraces.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cfr/grail-cfr-w%2F-rift/4153.html" },
  { brand:"Canyon", model:"Grail CFR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Zipp 303 XPLR SW", maxTire:42, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,5 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2025, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Vlaggenschip van ±7,5 kg met SRAM RED XPLR AXS (1×13), powermeter en Zipp 303 XPLR SW hookless wielen. Pure gravelrace-machine.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cfr/grail-cfr-axs/4152.html" },
  { brand:"Canyon", model:"Grizl CF 6", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:54, priceClass:3, price:2399, priceLabel:"~€2.399", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,1 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Toegankelijke carbon Grizl met mechanische SRAM Apex XPLR 1×12 en ruimte voor 54 mm banden. Veel montagepunten: klaar voor avontuur en bikepacking.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/og/grizl-cf-6/4141.html" },
  { brand:"Canyon", model:"Grizl CF 7", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:54, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX 822", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Grizl met Shimano GRX 822 1×12 en 54 mm bandruimte. Robuuste allrounder voor grof gravel, bospaden en lange avonturen.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/og/grizl-cf-7/4167.html" },
  { brand:"Canyon", model:"Grizl CF 7 ESC", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:54, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,2 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Escape-uitvoering ('Full Mounty') met GRX 822 1×12: extra bevestigingen en bikepacking-uitrusting voor meerdaagse tochten.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/escape/grizl-cf-7-esc/4142.html" },
  { brand:"Canyon", model:"Grizl CF 8 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon wielset", maxTire:54, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"XT Di2 M8250", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Elektronische Shimano XT Di2 (1×12) met carbon wielen op het 54 mm Grizl-platform. Snel en breed inzetbaar, van gravelrit tot expeditie.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/og/grizl-cf-8-di2/4143.html" },
  { brand:"Canyon", model:"Grizl CF 8 w/ RIFT", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:54, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"RIFT-veervork (40 mm)", tubeless:true, ebike:false, geoDesc:"Grizl met RIFT-veervork (40 mm) en draadloze SRAM Rival XPLR AXS (1×13). Demping en grip voor technisch terrein.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-8-w%2F-rift/4145.html" },
  { brand:"Canyon", model:"Grizl CF 8 ESC w/ ECLIPS", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:54, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,6 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Escape-model met geïntegreerd ECLIPS licht- en dynamosysteem en GRX 822. Zelfvoorzienend op lange bikepacking-avonturen, dag en nacht.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-8-esc-w%2F-eclips/4144.html" },
  { brand:"Canyon", model:"Grizl CF 9 w/ ECLIPS", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon wielset", maxTire:54, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"RED XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top-Grizl met SRAM RED XPLR AXS (1×13), carbon wielen en ECLIPS-verlichting. Lichte adventure-racer voor ultra-events.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-9-w%2F-eclips/4146.html" },
  { brand:"Canyon", model:"Grizl CF 9 ESC w/ RIFT", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon wielset", maxTire:54, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"X0 Eagle AXS", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"RIFT-veervork (40 mm)", tubeless:true, ebike:false, geoDesc:"Maximale uitrusting: RIFT-veervork, SRAM X0 Eagle AXS Transmission met MTB-bereik en carbon wielen. Voor het ruigste terrein en volgepakte trips.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-9-esc-w%2F-rift/4147.html" },
  { brand:"Canyon", model:"Grizl 5", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,9 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Nieuw aluminium Grizl-frame (120 g lichter dan voorheen) met Shimano CUES en hydraulische schijfremmen. Betaalbare instap met dezelfde 54 mm bandruimte als de carbonmodellen.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-5/4443.html" },
  { brand:"Canyon", model:"Grizl 6", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1799, priceLabel:"~€1.799", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Vernieuwde aluminium Grizl (10,5 kg) met SRAM Apex XPLR 1×12 en 54 mm bandruimte. Eén fiets voor woon-werk, gravel en bikepacking.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-6/4444.html" },
  { brand:"Canyon", model:"Grizl 7 ESC", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium Escape-uitvoering ('Full Mounty') met GRX 822 1×12 en complete bevestigingsset. Avontuurlijke alleskunner met scherpe prijs.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-7-esc/4445.html" },
  { brand:"Canyon", model:"Grizl 7 (2024)", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:50, priceClass:2, price:1799, priceLabel:"~€1.799", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,6 kg", group:"GRX 820", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2024, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Vorige generatie aluminium Grizl met GRX 820 en 50 mm bandruimte. Bewezen, comfortabel en zolang de voorraad strekt scherp geprijsd.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-7/3715.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF 8", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:50, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~16,0 kg", group:"GRX 822", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"Instap in de e-Grizl-lijn: Bosch Performance SX-middenmotor (55 Nm, 400 Wh) met GRX 822 1×12. Natuurlijk rijgevoel en ondersteuning tot 25 km/u.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-8/4742.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF Daily", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:50, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~17,3 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"E-gravel voor elke dag: Bosch SX (400 Wh), GRX 822 en complete uitrusting met geïntegreerde Lupine-verlichting. Van woon-werkverkeer tot weekendavontuur.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-daily/3547.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF 9", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss HGC 1800", maxTire:50, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:4, weightLabel:"~16,3 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"RockShox Rudy XPLR (40 mm)", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"E-gravel topmodel (16,3 kg) met Bosch SX, RockShox Rudy-veervork, SRAM Force XPLR AXS en DT Swiss carbon wielen. Tot ±100 km offroad-bereik.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-9/3546.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF Trail", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon wielset", maxTire:50, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:4, weightLabel:"~17,0 kg", group:"X0 Eagle AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"RockShox Rudy XPLR (40 mm)", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"Ruigste e-Grizl: SRAM X0 Eagle AXS Transmission, dropper post, veervork en carbon wielen. Voor singletracks en technische avonturen.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-trail/3545.html" },
  { brand:"Trek", model:"Checkpoint ALR 3 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1299, priceLabel:"~€1.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"CUES U6000 1x10", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Voordeligste Checkpoint Gen 3: aluminium frame, carbon vork en onverwoestbare Shimano CUES 1×10 met LinkGlide. 50 mm bandruimte en volop montagepunten.", url:"https://www.trekbikes.com/nl/nl_NL/p/49944/" },
  { brand:"Trek", model:"Checkpoint ALR 4 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"CUES U8000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium Gen 3 met Shimano CUES U8000 1×11 en hydraulische remmen. Dezelfde Gravel Endurance-geometrie en mounts als de duurdere modellen.", url:"https://www.trekbikes.com/nl/nl_NL/p/49973/" },
  { brand:"Trek", model:"Checkpoint ALR 5 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"SRAM", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodel van de aluminium lijn met mechanische SRAM Apex XPLR 1×12 (9,9 kg). Geschikt voor dropper en veervork tot 40 mm veerweg.", url:"https://www.trekbikes.com/nl/nl_NL/p/49946/" },
  { brand:"Trek", model:"Checkpoint SL 5 AXS Gen 3", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"Apex XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (achter)", tubeless:true, ebike:false, geoDesc:"Carbon Checkpoint met draadloze SRAM Apex XPLR AXS (1×12) en IsoSpeed-demping. Interne opbergruimte en 50 mm bandruimte voor lange avonturen.", url:"https://www.trekbikes.com/nl/nl_NL/p/47071/" },
  { brand:"Trek", model:"Checkpoint SL 6 AXS Gen 3", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (achter)", tubeless:true, ebike:false, geoDesc:"Draadloze Rival XPLR AXS (1×13) op het comfortabele Gen 3-frame met IsoSpeed en interne opslag. Veelzijdige carbon allrounder.", url:"https://www.trekbikes.com/nl/nl_NL/p/55098/" },
  { brand:"Trek", model:"Checkpoint SL 7 AXS Gen 3", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Elite 35V", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (achter)", tubeless:true, ebike:false, geoDesc:"Top-Checkpoint met SRAM Force XPLR AXS (1×13) en carbon Aeolus Elite 35V wielen. Comfort, opslag en snelheid in één pakket.", url:"https://www.trekbikes.com/nl/nl_NL/p/55097/" },
  { brand:"Trek", model:"Checkmate SLR 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Pro 3V", maxTire:45, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Pure gravelracer: 800 Series OCLV-frame, Force XPLR AXS (1×13) met powermeter en Aeolus Pro 3V carbon wielen. Aero Full System Foil-buizen en agressieve Gravel Race-geometrie.", url:"https://www.trekbikes.com/nl/nl_NL/p/58668/" },
  { brand:"Trek", model:"Checkmate SLR 9 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus RSL 37V", maxTire:45, priceClass:6, price:9999, priceLabel:"~€9.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Treks snelste en lichtste gravelbike ooit (7,6 kg): RED XPLR AXS 1×13, powermeter en Aeolus RSL 37V. Compromisloos racen met banden tot 45 mm.", url:"https://www.trekbikes.com/nl/nl_NL/p/46152/" },
  { brand:"Trek", model:"Check-OUT SL 5", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:56, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,0 kg", group:"GRX 822", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Full-suspension (v+a)", tubeless:true, ebike:false, geoDesc:"Volledig geveerde gravel-avonturier met mechanische GRX 1×12 en achterdrager. MTB-capaciteiten met dropbar-snelheid en 56 mm bandruimte.", url:"https://www.trekbikes.com/nl/nl_NL/p/57827/" },
  { brand:"Trek", model:"Check-OUT SL 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Pro 3V", maxTire:56, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~11,3 kg", group:"X0 Eagle AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Full-suspension (v+a)", tubeless:true, ebike:false, geoDesc:"Treks eerste full-suspension gravelbike, met SRAM X0 AXS Transmission, carbon wielen en 56 mm bandruimte. Voor extreem terrein en ultra-avonturen.", url:"https://www.trekbikes.com/nl/nl_NL/p/57828/" },
  { brand:"Trek", model:"Checkpoint+ SL 5", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,8 kg", group:"GRX 820 1x", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (achter)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"Elektrische Checkpoint met TQ HPR60-middenmotor (360 Wh) en mechanische GRX 1×12. Natuurlijke ondersteuning tot 25 km/u, IsoSpeed-comfort en 50 mm banden.", url:"https://www.trekbikes.com/nl/nl_NL/p/57446/" },
  { brand:"Trek", model:"Checkpoint+ SL 6 AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,8 kg", group:"Rival/GX AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (achter)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"E-gravel met draadloze SRAM Rival/GX Eagle AXS-mullet en TQ HPR60-motor. Stil, licht en ±80 km bereik in Eco-stand.", url:"https://www.trekbikes.com/nl/nl_NL/p/57441/" },
  { brand:"Trek", model:"Checkpoint+ SL 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Elite 35V", maxTire:50, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~14,1 kg", group:"Force AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (achter)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"Top e-Checkpoint met SRAM Force AXS, carbon Aeolus-wielen en TQ HPR60 (360 Wh). Premium e-gravel voor lange dagen in het zadel.", url:"https://www.trekbikes.com/nl/nl_NL/p/57447/" },
  { brand:"Specialized", model:"Diverge E5", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:47, priceClass:2, price:1549, priceLabel:"~€1.549", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"CUES U6000 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Instap-Diverge op het vorige (gen 3) aluminium platform met Shimano CUES. Betaalbaar startpunt met 47 mm bandruimte en montagepunten.", url:"https://www.specialized.com/nl/nl/diverge-e5/p/4223510" },
  { brand:"Specialized", model:"Diverge 4 Sport Alloy", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:50, priceClass:3, price:2299, priceLabel:"~€2.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (voor)", tubeless:true, ebike:false, geoDesc:"Nieuwe Diverge 4 in aluminium met Shimano CUES en Future Shock-demping. 50 mm bandruimte en SWAT-mounts: avontuur zonder hoge prijs.", url:"https://www.specialized.com/nl/nl/diverge-4-sport-alloy-shimano-cues/p/4223511" },
  { brand:"Specialized", model:"Diverge 4 Comp Alloy", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:50, priceClass:3, price:2799, priceLabel:"~€2.799", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,1 kg", group:"Apex 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (voor)", tubeless:true, ebike:false, geoDesc:"Aluminium Diverge 4 met mechanische SRAM Apex 1×12 en Future Shock. Lichte, complete gravel-allrounder.", url:"https://www.specialized.com/nl/nl/diverge-4-comp-alloy-sram-apex/p/4223512" },
  { brand:"Specialized", model:"Diverge 4 Sport Carbon", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:50, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,7 kg", group:"GRX 610", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (voor)", tubeless:true, ebike:false, geoDesc:"Carbon Diverge 4 met Shimano GRX 610 2×12. Future Shock, SWAT 4.0-opslag en 50 mm banden voor elk avontuur.", url:"https://www.specialized.com/nl/nl/diverge-4-sport-carbon-shimano-grx-600/p/4223514" },
  { brand:"Specialized", model:"Diverge 4 Comp Carbon", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:50, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"Apex AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (voor)", tubeless:true, ebike:false, geoDesc:"Draadloze SRAM Apex AXS op het nieuwe carbon Diverge 4-frame met Future Shock en grotere SWAT 4.0-opslag. Veelzijdig en modern.", url:"https://www.specialized.com/nl/nl/diverge-4-comp-carbon-sram-apex-axss1000/p/4223513" },
  { brand:"Specialized", model:"Diverge 4 Expert (Rival XPLR)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:50, priceClass:5, price:6299, priceLabel:"~€6.299", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (voor)", tubeless:true, ebike:false, geoDesc:"Race-klare Diverge 4 met draadloze Rival XPLR AXS (1×13) en carbon Roval-wielen. Snelste Diverge-generatie ooit, met 50 mm bandruimte.", url:"https://www.specialized.com/nl/nl/diverge-4-expert-sram-rival-xplr/p/4293758" },
  { brand:"Specialized", model:"Diverge 4 Expert (GRX Di2)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:50, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"Shimano", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX Di2 RX825", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (voor)", tubeless:true, ebike:false, geoDesc:"Elektronische GRX Di2 2×12 op de Diverge 4 Expert (8,9 kg) met carbon Roval-wielen. Even geschikt voor race als avontuur.", url:"https://www.specialized.com/nl/nl/diverge-4-expert-shimano-grx-di2/p/4279306" },
  { brand:"Specialized", model:"Diverge 4 Pro", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:50, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,4 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (voor)", tubeless:true, ebike:false, geoDesc:"Topmodel met SRAM Force XPLR AXS (1×13), Roval Terra CLX-carbon en Future Shock. Gebouwd voor gravelraces als Unbound.", url:"https://www.specialized.com/nl/nl/diverge-4-pro-sram-force-xplr/p/4293747" },
  { brand:"Specialized", model:"Diverge 4 Pro LTD", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:50, priceClass:6, price:9999, priceLabel:"~€9.999", shifting:"Shimano", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,3 kg", group:"XTR/GRX Di2", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (voor)", tubeless:true, ebike:false, geoDesc:"Limited edition met draadloze Shimano XTR/GRX Di2-mix, alleen online verkrijgbaar. Het maximale uit het nieuwe Diverge 4-platform.", url:"https://www.specialized.com/nl/nl/diverge-4-pro-ltd-shimano-xtrgrx-di2/p/4296390" },
  { brand:"Specialized", model:"Crux DSW Comp", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:47, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"SRAM", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Apex XPLR", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium Crux met D'Aluisio Smartweld-lastechniek en SRAM Apex XPLR 1×12. Licht (±9,3 kg), snel en relatief betaalbaar.", url:"https://www.specialized.com/nl/nl/crux-dsw/p/4221804" },
  { brand:"Specialized", model:"Crux Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:47, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,7 kg", group:"GRX 820", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Crux van de vorige generatie met GRX 820 2×12: cyclocross-DNA, laag gewicht en 47 mm bandruimte.", url:"https://www.specialized.com/nl/nl/crux-comp-shimano-grx/p/4223490" },
  { brand:"Specialized", model:"Crux Expert", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,1 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Lichte carbon racer met draadloze Rival XPLR AXS en Roval Terra C-wielen. Vlijmscherp op snelle gravelparcoursen.", url:"https://www.specialized.com/nl/nl/crux-expert-sram-rival-xplr-axs-/p/4223489" },
  { brand:"Specialized", model:"S-Works Crux", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX II", maxTire:47, priceClass:6, price:12999, priceLabel:"~€12.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,2 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"S-Works-versie van de vorige Crux: FACT 12r-frame, RED XPLR AXS en Terra CLX II-wielen, ±7,2 kg.", url:"https://www.specialized.com/nl/nl/s-works-crux-sram-red-xplr/p/4223487" },
  { brand:"Specialized", model:"Crux 5 Sport", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:55, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX 820", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Nieuwe Crux 5-generatie met maar liefst 55 mm bandruimte en GRX 820 2×12. Legendarisch licht rijgevoel, nu met aero-winst.", url:"https://www.specialized.com/nl/nl/crux-5-sport-shimano-grx-800/p/4312531" },
  { brand:"Specialized", model:"Crux 5 Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wielset", maxTire:55, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,6 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Crux 5 met draadloze Rival XPLR AXS (1×13). Razendsnel, licht en klaar voor banden tot 55 mm.", url:"https://www.specialized.com/nl/nl/crux-5-comp-sram-rival-xplr/p/4294832" },
  { brand:"Specialized", model:"Crux 5 Expert", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C III", maxTire:55, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"8,2 kg lichte racer met Force XPLR AXS (1×13) en Roval Terra C III carbon wielen. Aero, licht en uitgebalanceerd.", url:"https://www.specialized.com/nl/nl/crux-5-expert-sram-force-xplr/p/4294830" },
  { brand:"Specialized", model:"Crux 5 S-Level", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:55, priceClass:6, price:10499, priceLabel:"~€10.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,5 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"S-Works-niveau frame met RED XPLR AXS (1×13) voor een scherpere prijs dan het volledige S-Works-pakket.", url:"https://www.specialized.com/nl/nl/crux-5-s-level-sram-red-xplr/p/4294829" },
  { brand:"Specialized", model:"S-Works Crux 5", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX II", maxTire:55, priceClass:6, price:13999, priceLabel:"~€13.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,3 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Absolute top: FACT 12r-frame met 55 mm bandruimte, RED XPLR AXS en Roval Terra CLX II. Specialized' lichtste gravelrace-wapen.", url:"https://www.specialized.com/nl/nl/s-works-crux-5-sram-red-xplr/p/4294828" },
  { brand:"Specialized", model:"Turbo Creo 2 Comp E5", frame:"aluminium", wheels:"aluminium", wheelBrand:"DT Swiss G540", maxTire:47, priceClass:4, price:4599, priceLabel:"~€4.599", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~14,2 kg", group:"Apex Eagle 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (voor)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Aluminium e-gravel met Specialized SL 1.2-motor (320 Wh) en SRAM Apex Eagle. Tot 47 mm banden en Future Shock 3.0-demping.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-comp-e5-sram-apex-eagle/p/4221861" },
  { brand:"Specialized", model:"Turbo Creo 2 Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss G540", maxTire:47, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,6 kg", group:"Apex/X1 Eagle AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (voor)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Carbon Turbo Creo 2 met SL 1.2-motor en draadloze Apex/X1 Eagle AXS. Stille, natuurlijke ondersteuning voor gravel en weg.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-comp-sram-apex--x1-eagle-axs/p/4221866" },
  { brand:"Specialized", model:"Turbo Creo 2 Expert (GRX Di2)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:6, price:8499, priceLabel:"~€8.499", shifting:"Shimano", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,2 kg", group:"GRX Di2", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (voor)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"E-gravel met elektronische Shimano GRX Di2 en Future Shock 3.0. Licht en sportief, met optionele range extender voor extra bereik.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-expert-shimano-grx-di2/p/4221806" },
  { brand:"Specialized", model:"Turbo Creo 2 Expert (Rival/GX)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:6, price:8499, priceLabel:"~€8.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,3 kg", group:"Rival/GX AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (voor)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Expert-uitvoering met SRAM Rival/GX Eagle AXS-mullet voor extra klimbereik op zware gravelroutes.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-expert-sram-rival--gx-eagle-axs/p/4221865" },
  { brand:"Specialized", model:"S-Works Turbo Creo 2", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:47, priceClass:6, price:12999, priceLabel:"~€12.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~12,6 kg", group:"RED/XX1 AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (voor)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Top e-gravel (±12,6 kg) met SRAM RED/XX1 Eagle AXS en Roval Terra CLX-wielen. Maximale prestaties met SL 1.2-ondersteuning.", url:"https://www.specialized.com/nl/nl/s-works-turbo-creo-2-sram-red--xx1-eagle-axs/p/4221805" },
  { brand:"Cube", model:"Nuroad ONE", frame:"aluminium", wheels:"aluminium", wheelBrand:"Cube ARD25", maxTire:45, priceClass:1, price:899, priceLabel:"~€899", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,2 kg", group:"CUES U6000 1x9", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Instapper in de Nuroad-reeks: 6061 T6 alu-frame met carbon vork en Shimano CUES 1×9 voor scherp prijs/kwaliteit. Tot 45 mm bandvrijheid en volop montagepunten voor zadeltassen en flessen. Een veelzijdige, betrouwbare gravelbike om mee te beginnen.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad ONE FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"Cube ARD25", maxTire:45, priceClass:1, price:999, priceLabel:"~€999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,2 kg", group:"CUES U6000 1x9", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Volledig uitgeruste Nuroad ONE: dezelfde alu-basis met CUES 1×9, maar standaard met spatborden, bagagedrager, standaard en verlichting. Klaar voor woon-werk én bikepacking — alles voor onder de €1.000. Een onverslaanbare instap voor wie meteen de weg op wil.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad Pro", frame:"aluminium", wheels:"aluminium", wheelBrand:"Cube EX25", maxTire:45, priceClass:2, price:1099, priceLabel:"~€1.099", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Eerste model met echte Shimano GRX (RX400, 2×10): scherper schakelen en hydraulische GRX-remmen. Lichte alu-basis met carbon vork en 45 mm bandvrijheid maakt 'm geschikt voor langere gravelritten. Beste instap met gravel-specifieke groepset.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad Pro FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"Cube EX25", maxTire:45, priceClass:2, price:1199, priceLabel:"~€1.199", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,8 kg", group:"GRX RX400 2x10", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Volledig uitgeruste versie van de Nuroad Pro: Shimano GRX RX400 2×10 met spatborden, drager, standaard en verlichting standaard gemonteerd. Klaar voor woon-werkverkeer én bikepacking, met 45 mm bandvrijheid. Veelzijdig en gebruiksklaar.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad EX", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:45, priceClass:2, price:1399, priceLabel:"~€1.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Stap omhoog naar Shimano GRX 600/RX610 1×12 met Newmen-wielen — vlotter schakelen en lichter rijden. Behoudt de veelzijdige Nuroad-basis met montagepunten en 45 mm bandvrijheid. Een fijne keuze voor wie de Nuroad als eerste echte gravelbike wil.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad Race", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX RX820 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Nieuw 2026: High Performance Aluminium frame met C:62-look, GRX 820 mech 1×12 en 50 mm bandvrijheid. Snellere geometrie, lichter dan het oude frame en SIC 2.0-rackmounts. Veel race-gravel voor een scherp budget.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad Race FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:2, price:1599, priceLabel:"~€1.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,8 kg", group:"GRX RX820 1x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Race-niveau alu HPA-frame met GRX 820 1×12, maar standaard uitgerust met spatborden, drager en verlichting. Voor wie snelheid en gebruiksgemak wil combineren — een sportieve commuter en bikepacker tegelijk.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad SLX", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Performance SL", maxTire:50, priceClass:2, price:1699, priceLabel:"~€1.699", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"GRX RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodel aluminium Nuroad 2026: nieuw HPA-frame, GRX 820 2×12 voor maximaal bereik en 50 mm banden. Lichtgewicht alu race-gravel met Newmen-wielen en moderne afwerking — een sterk alternatief voor instap-carbon.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 ONE", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Instap-carbon Nuroad: C:62-frame met GRX 600/RX610 1×12 voor onder de €2.000. Lichter en stijver dan het alu-frame met behoud van montagepunten en 50 mm bandvrijheid. Beste prijs/kwaliteit voor een carbon gravelbike.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 Pro", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:3, price:2499, priceLabel:"~€2.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Nuroad met GRX 820 1×12: vlotte mechanische groep en lichter gewicht. Behoudt 50 mm bandvrijheid en montagepunten, met de modernere cockpit van het 2026-update. Sterke allround carbon-keuze.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 Pro FE", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Evolution SL", maxTire:50, priceClass:3, price:2599, priceLabel:"~€2.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"GRX RX820 2x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon C:62-Nuroad in volledig uitgeruste Fully-Equipped-trim: GRX 820 2×12 met spatborden, drager en verlichting. Lichte carbon-basis met 50 mm bandvrijheid voor snelle commutes én bikepacking. Veelzijdigheid zonder gewichtsstraf.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 EX", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Performance SL", maxTire:50, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,7 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Nuroad met elektronische Shimano GRX Di2 RX825 1×12 en monocoque-cockpit. Draadloos schakelen op een lichte C:62-basis met 50 mm bandvrijheid en montagepunten. De voordeligste elektronische 1× in de Nuroad-reeks.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 EXC", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced G.34", maxTire:50, priceClass:3, price:3399, priceLabel:"~€3.399", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,3 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Scherp geprijsde carbon-racer met draadloze SRAM Force XPLR AXS 13-speed, powermeter en Newmen Advanced G.34 carbonwielen. Gravel-specifieke 1×13-overbrenging op een licht C:62-frame met 50 mm bandvrijheid. Veel high-end groep voor het geld.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 Race", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Performance SL", maxTire:50, priceClass:4, price:3599, priceLabel:"~€3.599", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Race-gerichte carbon Nuroad met elektronische GRX Di2 RX825 2×12 en monocoque-cockpit. Snel, scherp en met de nieuwe 2026-aerodetails. Voor wie race-prestaties en draadloos schakelen wil zonder topprijs.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 SLX", frame:"carbon", wheels:"carbon", wheelBrand:"Zipp 303 XPLR S", maxTire:50, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"Force XPLR / GX Eagle AXS 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aerogerichte carbon-racer met SRAM Force XPLR AXS-shifters en GX Eagle AXS Transmission-mullet voor extra groot bereik (1×12), Force-crank met powermeter en aerodynamische Zipp 303 XPLR S carbonwielen. Voor wie maximale klimrange én snelheid wil.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cube", model:"Nuroad C:62 SLT", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced SL X.R.36", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodel met SRAM Red XPLR AXS 13-speed inclusief powermeter, Newmen Advanced SL carbonwielen en geïntegreerde monocoque-cockpit. Een spec die normaal het dubbele kost — een van de scherpste high-end carbon gravelbikes op de markt.", url:"https://www.cube.eu/bikes/gravel/nuroad" },
  { brand:"Cannondale", model:"Topstone 2 Cues", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:2, price:1799, priceLabel:"~€1.799", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Instap-Topstone met SmartForm C2 alu-frame en Shimano CUES 1×11: betaalbaar, betrouwbaar en met 47 mm bandvrijheid. Volop montagepunten en spatbordogen maken 'm geschikt voor pendelen, gravel en lichte tochten. Beste budget-Topstone.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone 2 GRX", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Eerste Topstone met echte Shimano GRX (RX400 2×10): breder bereik dan CUES en gravel-specifieke shifters. Alu-frame, 47 mm banden en uitgebreide bevestigingsopties — een veelzijdige stap omhoog.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,0 kg", group:"GRX RX400 2x10", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topstone met volledig uitrust-pakket: standaard spatborden, drager, verlichting en standaard. GRX RX400 2×10 voor gravel-shifting en pendel-gemak. Voor wie meteen alle weeromstandigheden aankan.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone 1", frame:"aluminium", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:47, priceClass:3, price:2399, priceLabel:"~€2.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,0 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodel aluminium Topstone met top-mech GRX 820 2×12 en hoogwaardiger WTB CZR-wielen. Snelle, lichte alu-gravelbike met 47 mm bandvrijheid en SmartSense-compatibel. Het sportieve einde van het alu-gamma.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone Carbon 4", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,1 kg", group:"Apex 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (achter, 30 mm)", tubeless:true, ebike:false, geoDesc:"Goedkoopste carbon Topstone met Kingpin-achtervering (30 mm comfort) en SRAM Apex 1×11. Tot 52 mm banden, StashPort-opslag in de schuine buis en volop bevestigingsogen. Instapper voor wie carbon en demping wil voor onder €2.700.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 3 GRX 1x12", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (achter, 30 mm)", tubeless:true, ebike:false, geoDesc:"Carbon Topstone met GRX 820 1×12 en de gedempte Kingpin-achtervering. Eenvoudige 1×-aandrijving, 52 mm banden en StashPort. Soepel, comfortabel en sportief voor allround gebruik.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 3 GRX 2x12", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (achter, 30 mm)", tubeless:true, ebike:false, geoDesc:"Dezelfde carbon Topstone maar met GRX 820 2×12 voor maximaal bereik. Combineert Kingpin-comfort, 52 mm banden en kleine versnellingsstappen — fijn voor klimmen en lange tochten.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 2 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:52, priceClass:4, price:3799, priceLabel:"~€3.799", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (achter, 30 mm)", tubeless:true, ebike:false, geoDesc:"Carbon Topstone met draadloze SRAM Rival XPLR 13-speed en Kingpin-demping. Hoogwaardiger WTB CZR-wielen en 52 mm bandruimte maken 'm scherp én comfortabel. Eerste stap naar elektronisch schakelen op de Topstone.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 2 AXS SmartSense", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:52, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (achter, 30 mm)", tubeless:true, ebike:false, geoDesc:"Topstone Carbon 2 AXS uitgerust met Cannondale SmartSense: geïntegreerde lichten en achteruitkijkradar gevoed door een eigen accu. Veiligheid en pendel-functionaliteit zonder kabelhinder. Voor wie ook in het donker of op de weg wil rijden.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 1 Lefty AXS", frame:"carbon", wheels:"carbon", wheelBrand:"HollowGram 45 SL KNØT", maxTire:52, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,4 kg", group:"Force AXS 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Lefty Oliver (voor, 30 mm) + Kingpin", tubeless:true, ebike:false, geoDesc:"Topmodel Topstone met dubbele demping: unieke Lefty Oliver-voorvering (30 mm) plus Kingpin-achtervering. Draadloze Force AXS 2×12 en HollowGram-carbonwielen. De meest gedempte gravelbike — voor wie het ruigste avontuur zoekt.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"SuperX 4 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:45, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"De terugkeer van de SuperX-naam als race-gravel: agressieve carbongeometrie, UDH-derailleurhanger en Apex XPLR AXS 12-speed. Snel en strak met 45 mm bandvrijheid. Voor wedstrijdfietsers en gravel-racers.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Cannondale", model:"SuperX 3", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss ERC LOG 45", maxTire:45, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mid-spec race-SuperX met Rival XPLR AXS 13-speed en DT Swiss ERC LOG 45 carbonwielen. Stijf en aerodynamisch, gemaakt voor gravelraces en snelle ritten. De sportieve sweet spot.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Cannondale", model:"SuperX 1", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44 GR", maxTire:45, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topmodel SuperX: SRAM Force XPLR AXS 13-speed met Reserve 40|44 GR carbonwielen. Lichtste, snelste race-gravel van Cannondale, met UDH en sportieve geometrie. Voor het podium op het gravelseizoen.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Giant", model:"Revolt 2", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant SX-2", maxTire:53, priceClass:2, price:1399, priceLabel:"~€1.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen)", tubeless:true, ebike:false, geoDesc:"Instap Revolt met ALUXX-frame, D-Fuse-zadelpen en Shimano CUES 1×11. Tot 53 mm banden via flip-chip en uitgebreide bevestigingspunten — een veelzijdige, betaalbare gravelbike. Goede prijs/kwaliteit voor wie net met gravel begint.", url:"https://www.giant-bicycles.com/nl/revolt-2" },
  { brand:"Giant", model:"Revolt 1", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant SX-2", maxTire:53, priceClass:2, price:1749, priceLabel:"~€1.749", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"CUES U8000 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen)", tubeless:true, ebike:false, geoDesc:"Comfortabele alu-Revolt met Shimano CUES 2×10 voor ruimer bereik en D-Fuse-demping. Flip-chip voor wielbasis, 53 mm bandruimte en uitgebreide montagepunten. Een degelijke allrounder voor wie meer veelzijdigheid wil.", url:"https://www.giant-bicycles.com/nl/revolt-1" },
  { brand:"Giant", model:"Revolt 0", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant SX-2", maxTire:53, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,2 kg", group:"GRX RX610 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen)", tubeless:true, ebike:false, geoDesc:"Top alu-Revolt met echte GRX RX610 2×12 en hydraulische GRX-remmen. Flip-chip, D-Fuse-zadelpen en 53 mm bandvrijheid. Het beste aluminium model voor wie sportiever wil rijden.", url:"https://www.giant-bicycles.com/nl/revolt-0" },
  { brand:"Giant", model:"Revolt Advanced 2", frame:"carbon", wheels:"aluminium", wheelBrand:"Giant S-R2", maxTire:53, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen + stuur)", tubeless:true, ebike:false, geoDesc:"Carbon-instap Revolt Advanced: flip-chip, D-Fuse-demping en GRX 820 1×12 mechanisch. 53 mm bandvrijheid en bevestigingsogen voor bikepacking. Veelzijdig en uitgebalanceerd carbon model.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-2" },
  { brand:"Giant", model:"Revolt Advanced 1", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 2", maxTire:53, priceClass:4, price:3599, priceLabel:"~€3.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,1 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen + stuur)", tubeless:true, ebike:false, geoDesc:"Carbon Revolt met mechanische GRX 820 2×12 voor breed bereik. Lichter dan de alu-versies, met D-Fuse-demping en flip-chip. Een sterke prijs/kwaliteit-keuze voor wie veelzijdig 2× wil.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-1" },
  { brand:"Giant", model:"Revolt Advanced 0", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 2", maxTire:53, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"Shimano", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,8 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen + stuur)", tubeless:true, ebike:false, geoDesc:"Eerste Di2-Revolt: GRX RX825 Di2 2×12, lichter en draadloos. Behoudt flip-chip en D-Fuse-comfort. Snelle, sportievere geometrie voor wie elektronisch wil schakelen zonder topprijs.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-0" },
  { brand:"Giant", model:"Revolt Advanced Pro 1", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 2 Carbon", maxTire:53, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen + stuur)", tubeless:true, ebike:false, geoDesc:"Advanced Pro-frame met race-stijfheid, geïntegreerde cockpit en GRX Di2 2×12. Carbon CXR-wielen en in-frame opslag. Snelle, complete race-gravelbike voor de competitieve rijder.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-pro-1" },
  { brand:"Giant", model:"Revolt Advanced Pro 0", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 1 Carbon", maxTire:53, priceClass:5, price:5969, priceLabel:"~€5.969", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen + stuur)", tubeless:true, ebike:false, geoDesc:"Topmodel Revolt met SRAM Force XPLR AXS 13-speed, Advanced-grade carbon en CXR 1 carbonwielen. Volledig geïntegreerd, flip-chip en D-Fuse — race-prestaties met allroad-veelzijdigheid. Voor de veeleisende gravelfietser.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-pro-0" },
  { brand:"Scott", model:"Addict Gravel 40", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros RP2.0", maxTire:45, priceClass:3, price:2799, priceLabel:"~€2.799", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX610 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Instap-Addict Gravel met HMF-carbon, UDH-derailleurhanger en GRX 600/610 2×12 mechanisch. 45 mm bandvrijheid en verborgen montagepunten — sportieve carbon-gravel voor een toegankelijke prijs.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 30", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital 2.0", maxTire:45, priceClass:3, price:3299, priceLabel:"~€3.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Sportieve carbon gravelracer met aerodynamisch frame, volledig geïntegreerde kabels en 2× GRX 820. UDH-standaard, 45 mm bandvrijheid en verborgen spatbordmontage. Een snelle bike die ook voor langere ritten geschikt is.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 20", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital 2.0", maxTire:45, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Snelle Addict met draadloze SRAM Rival XPLR 13-speed en geïntegreerde cockpit, gericht op prestaties. Lichtgewicht en strak, met verborgen montagepunten voor wat extra flexibiliteit. Voor de gravelaar die Strava-segmenten uitdaagt.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 10", frame:"carbon", wheels:"carbon", wheelBrand:"Syncros Capital SL", maxTire:45, priceClass:5, price:5199, priceLabel:"~€5.199", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force AXS 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Hoogwaardige Addict Gravel met draadloze SRAM Force AXS 2×12 en carbon Syncros-wielen. UDH, 45 mm banden en geïntegreerde cockpit. Een sterke aanbieding voor wie elektronisch 2× en carbon wielen wil.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel RC", frame:"carbon", wheels:"carbon", wheelBrand:"Syncros Capital SL", maxTire:45, priceClass:6, price:8999, priceLabel:"~€8.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Het wedstrijd-topmodel met ultralicht HMX-carbon, SRAM Red XPLR 13-speed en carbon Syncros-wielen. Met ~7,6 kg pure snelheid; bagagepunten zijn minimaal, maar spatbordmontage blijft mogelijk. Voor de fanatieke gravelracer die het lichtste wil.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Ridley", model:"Kanzo A GRX 600", frame:"aluminium", wheels:"aluminium", wheelBrand:"Ridley 4ZA", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX RX610 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Toegankelijke aluminium Kanzo van het Belgische Ridley met 2× GRX 600 en ruimte voor 47 mm banden. Veel montagepunten en spatbordogen maken 'm veelzijdig voor toeren en allround gravel. Een degelijke instapper met een sterke reputatie.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoAdventure" },
  { brand:"Ridley", model:"Kanzo Adventure GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss G 1800", maxTire:47, priceClass:3, price:2899, priceLabel:"~€2.899", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"GRX RX820 1x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon bikepacking-gravel met MTB-geïnspireerde geometrie en circa 20 montagepunten voor tassen en bidons. 1× GRX en 47 mm bandvrijheid maken 'm klaar voor lange, zelfvoorzienende avonturen. Gebouwd om bepakt en wel ver van huis te gaan.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoAdventure" },
  { brand:"Ridley", model:"Kanzo Fast Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Forza Levanto Carbon", maxTire:42, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,8 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Een van de eerste échte aero-gravelbikes, met een diepe racy zit en snelle CX-geometrie. Draadloze SRAM Force XPLR 1× en carbon wielen maken 'm licht en snel; bagage en spatborden zijn niet de bedoeling. Eigen kleuren te kiezen via de configurator.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoFast" },
  { brand:"Cervélo", model:"Áspero GRX", frame:"carbon", wheels:"aluminium", wheelBrand:"HED Emporia GA", maxTire:44, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,6 kg", group:"GRX RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Rasechte race-gravel van Cervélo met agressieve, directe geometrie en 2× GRX. Geen vering of bagagepunten — puur gericht op snelheid en scherpe handling in wedstrijden. Voor wie gravelraces wil winnen op gemengd terrein.", url:"https://www.cervelo.com/en-US/bikes/aspero" },
  { brand:"Cervélo", model:"Áspero Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Snelle Áspero met draadloze SRAM Force XPLR 1× en carbon Reserve-wielen. Strak, licht en aerodynamisch, gebouwd voor competitief gravel. De keuze voor prestatie boven comfort en bagage.", url:"https://www.cervelo.com/en-US/bikes/aspero" },
  { brand:"Cervélo", model:"Áspero-5 Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:6, price:8299, priceLabel:"~€8.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"De aerodynamisch geoptimaliseerde Áspero-5 met matched- of mixed-tire geometrie voor maximale snelheid. Draadloze Force XPLR 1× en carbon wielen; volledig op racen gericht zonder bagageopties. Een van de snelste gravelframes op de markt.", url:"https://www.cervelo.com/en-US/bikes/aspero-5" },
  { brand:"Cervélo", model:"Áspero-5 Red XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:6, price:11499, priceLabel:"~€11.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Het vlaggenschip met SRAM Red XPLR 1×, ultralicht en aerodynamisch dominant. Gebouwd voor het scherpst van de gravelwedstrijd, zonder concessies aan snelheid. Voor de rijder die het allersnelste zoekt.", url:"https://www.cervelo.com/en-US/bikes/aspero-5" },
  { brand:"Orbea", model:"Terra H30", frame:"aluminium", wheels:"carbon", wheelBrand:"Oquo RC25", maxTire:50, priceClass:2, price:1899, priceLabel:"~€1.899", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Betaalbare, speelse aluminium gravel van Orbea met 1× GRX en ruimte tot 50 mm banden. Montage- en spatbordpunten maken 'm veelzijdig, en duurdere uitvoeringen zijn gratis te personaliseren via MyO. Een leuke, toegankelijke allrounder.", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Orbea", model:"Terra M30", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RC30TEAM", maxTire:50, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,8 kg", group:"GRX 820", region:"nl", geo:"Adventure Gravel", drivetrain:"1x/2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Comfortabele OMR-carbon Terra met trillingsdempend frame en handig LOCKR-opbergvak in de schuine buis. Te configureren als 1× of 2× GRX, met montagepunten en spatbordogen voor veelzijdig gebruik. Personaliseerbaar via MyO voor een eigen look.", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Orbea", model:"Terra M21eTEAM", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RP50LTD", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Lichtgewicht OMR-carbon Terra met draadloze SRAM Force XPLR 1× en carbon Oquo-wielen. Volledig naar wens te configureren via MyO, met montagepunten voor extra flexibiliteit. Snel én comfortabel voor langere avonturen. (De 'e' staat hier voor de uitvoering — dit is géén e-bike.)", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Pinarello", model:"Grevil F1", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:3500, priceLabel:"~€3.500", shifting:"Shimano", electronic:false, integrated:true, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX610 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 maten (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Instap-Grevil F met T600-carbon en GRX 610 2×12 mechanisch. Behoudt de iconische golvende buizen, downtube-opslag en 50 mm bandvrijheid. Voordeligste manier om Pinarello-stijl te combineren met praktisch gravelplezier.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Grevil F3 GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:4300, priceLabel:"~€4.300", shifting:"Shimano", electronic:false, integrated:true, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 maten (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mid-spec Grevil F met T700-carbon en mechanische Shimano GRX 820 2×12 — breed bereik voor klim én snelheid. Zelfde frame, downtube-opslag en 50 mm bandvrijheid als de SRAM-uitvoering, maar met 2× en Shimano-bediening. Hetzelfde prijspunt als de Apex-versie.", url:"https://pinarello.com/global/en/bikes/gravel/competition/new-grevil-f/new-grevil-f3-shimano-grx-820" },
  { brand:"Pinarello", model:"Grevil F3 Apex XPLR", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:4300, priceLabel:"~€4.300", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,2 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 maten (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mid-spec Grevil F met T700-carbon en draadloze SRAM Apex XPLR AXS 1×. Geïntegreerde cockpit, downtube-opslag en 50 mm bandvrijheid. Eerste elektronische stap zonder topprijs.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Grevil F5", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:5, price:5600, priceLabel:"~€5.600", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~9,0 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 maten (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Sweet-spot Grevil F met T700-carbon en draadloze SRAM Rival XPLR 13-speed. Downtube-opslag, geïntegreerde cockpit en 50 mm bandvrijheid. Italiaanse stijl gecombineerd met sportieve performance.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Grevil F7 GRX 825 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:5, price:6900, priceLabel:"~€6.900", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,8 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 maten (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Grevil F7 met elektronische Shimano GRX Di2 RX825 2×12 — breed bereik en draadloos schakelen voor lange dagen. T900-carbon, Princeton GR carbonwielen en geïntegreerde cockpit. Het Shimano-alternatief op het hoge Grevil-niveau.", url:"https://pinarello.com/global/en/bikes/gravel/competition/new-grevil-f/new-grevil-f7-shimano-grx-825-di2" },
  { brand:"Pinarello", model:"Grevil F7 Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:5, price:7200, priceLabel:"~€7.200", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 maten (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Hogere Grevil F met T900-carbon en draadloze SRAM Force XPLR 13-speed. Princeton GR carbonwielen en geïntegreerde cockpit. Voor wie stijl, snelheid en veelzijdigheid wil verenigen.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Grevil F9", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:6, price:11000, priceLabel:"~€11.000", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 maten (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Vlaggenschip Grevil F met T900-carbon en SRAM Red XPLR 13-speed. Princeton GR carbon, downtube-opslag en geïntegreerde cockpit. Voor wie het maximum aan de Grevil-platform wil — exclusief en compleet.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/grevil-f" },
  { brand:"Pinarello", model:"Dogma GR", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton Grit 4540", maxTire:45, priceClass:6, price:13999, priceLabel:"~€13.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,3 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"9 maten (43–59,5 cm)", sizeList:["43","46,5","50","51,5","53","54,5","56","57,5","59,5"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Het gravelvlaggenschip van Pinarello met nieuw M40X-carbon, een frame van ~960 g en 7,3 kg compleet. SRAM Red XPLR 13-speed en pure raceafstemming voor wedstrijden onder de vijf uur. Geen bagage of vering — alles staat in dienst van snelheid.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/dogma-gr" },
  { brand:"Factor", model:"Ostro Gravel Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Black Inc Forty Five", maxTire:45, priceClass:6, price:8999, priceLabel:"~€8.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aero-racegravel van Factor met de 'win everywhere'-mentaliteit van de Ostro VAM. Superieure stijfheid, geïntegreerde Black Inc-wielen en draadloze Force XPLR 1×. Voor de prestatiegerichte rijder die een exclusieve racemachine wil.", url:"https://factorbikes.com/bikes/ostro-gravel" },
  { brand:"Factor", model:"Ostro Gravel Red XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Black Inc Forty Five", maxTire:45, priceClass:6, price:11500, priceLabel:"~€11.500", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,4 kg", group:"Red XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Vlaggenschip Ostro Gravel met SRAM Red XPLR 13-speed, UDH-derailleurhanger en premium carbon. Lichtst en snelst in de reeks, volledig op racen gericht. Een exclusieve keuze voor wie het beste van Factor wil.", url:"https://factorbikes.com/bikes/ostro-gravel" },
  { brand:"Cannondale", model:"Topstone Neo SL 1", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:45, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X35+ naaf (40 Nm)", battery:"250 Wh", geoDesc:"Lichte e-gravel (~13,5 kg) met discreet Mahle X35+ naafsysteem (40 Nm) en 250 Wh accu. Voelt aan als een normale gravelbike maar met net dat beetje rugwind; tot 45 mm bandvrijheid en volop montagepunten. Voor wie subtiele, natuurlijke ondersteuning zoekt.", url:"https://www.cannondale.com/en-nl/bikes/electric/e-road/topstone-neo-sl" },
  { brand:"Giant", model:"Revolt E+ 2", frame:"aluminium", wheels:"carbon", wheelBrand:"Giant CXR", maxTire:53, priceClass:4, price:4399, priceLabel:"~€4.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~18,0 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen)", tubeless:true, ebike:true, motor:"Shimano EP600 (85 Nm)", battery:"500 Wh", geoDesc:"Instap full-power e-gravel met Shimano EP600-motor (85 Nm) en 500 Wh accu. GRX RX400 2×10 en flip-chip; 53 mm bandvrijheid voor avontuur. Voor wie krachtige ondersteuning wil zonder topprijs.", url:"https://www.giant-bicycles.com/nl/revolt-eplus-2" },
  { brand:"Giant", model:"Revolt E+ 1", frame:"aluminium", wheels:"carbon", wheelBrand:"Giant CXR", maxTire:53, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~17,5 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (zadelpen + stuur)", tubeless:true, ebike:true, motor:"Shimano EP600 (85 Nm)", battery:"500 Wh", geoDesc:"Krachtige full-power e-gravel met Shimano EP600 (85 Nm) en 500 Wh accu, gecombineerd met GRX 820 1×12. Flip-chip, D-Fuse en 53 mm bandvrijheid. Voor zwaar terrein en lange tochten met maximale ondersteuning.", url:"https://www.giant-bicycles.com/nl/revolt-eplus-1" },
  { brand:"Orbea", model:"Gain M30", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RP35", maxTire:40, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~11,5 kg", group:"GRX 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XXL (6)", sizeList:["XS","S","M","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X20 (55 Nm)", battery:"350 Wh", geoDesc:"Ultralichte all-road/gravel e-bike (~11,5 kg) met het vrijwel onzichtbare Mahle X20-systeem (55 Nm). Banden tot 40 mm maken 'm ideaal voor snelle gemengde ritten en geasfalteerde wegen, minder voor ruig gravel. Voor wie een elegante, lichte e-bike zonder e-bike-uiterlijk zoekt.", url:"https://www.orbea.com/us-en/ebikes/road/gain/" },
  { brand:"Cube", model:"Nuroad Hybrid C:62 SLX", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Performance SL", maxTire:50, priceClass:5, price:5299, priceLabel:"~€5.299", shifting:"Shimano", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,8 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"50–61 cm", sizeList:["50","53","56","58","61"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"Lichte carbon e-gravel met de compacte Bosch Performance SX (55 Nm) en elektronische GRX Di2 RX825. Tot 50 mm banden en volop montagepunten voor bikepacking met ondersteuning. Moderne, hoogwaardige e-gravel.", url:"https://www.cube.eu/e-bikes/gravel/nuroad-hybrid" },
  { brand:"Pinarello", model:"Nytro E5 Gravel", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,0 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 maten", sizeCats:["XS","S","M","L","XL"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:true, motor:"TQ HPR50 (50 Nm)", battery:"360 Wh", geoDesc:"Een van de lichtste e-gravelbikes, met de soepele TQ HPR50-motor (50 Nm) en 360 Wh accu. Italiaanse afstemming, draadloze SRAM Rival XPLR 1× en een optionele range extender voor extra bereik. Voor wie stijl en discrete ondersteuning zoekt.", url:"https://pinarello.com/global/en/bikes/gravel/supercharged/nytro-e-gravel" },
  { brand:"Scott", model:"Solace Gravel eRIDE 30", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~14,0 kg", group:"GRX 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"TQ HPR50 (50 Nm)", battery:"360 Wh", geoDesc:"Stijlvolle e-gravel met de fluisterstille TQ HPR50-motor (50 Nm) en geïntegreerde 360 Wh accu. Natuurlijk rijgevoel, ruimte tot 50 mm banden en volop montagepunten voor avontuur. Een verfijnde, lichte e-gravel voor lange ritten.", url:"https://www.scott-sports.com/us/en/eride-road-gravel" },
  { brand:"Rose", model:"Blend Gravel", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G20", maxTire:40, priceClass:2, price:1424, priceLabel:"~€1.424", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~10,0 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XXS–XXL (7 maten)", sizeList:["XXS","XS","S","M","L","XL","XXL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"De Blend Gravel maakt instappen makkelijk: aluminium frame met carbon vork, betrouwbare GRX 400 2×10 en 40 mm Continental-banden voor een scherpe prijs. Geïntegreerde kabels, UDH-standaard en spatbordmogelijkheid maken 'm verrassend volwassen. Met 7 maten (XXS–XXL) een ideale eerste gravelbike.", url:"https://www.rosebikes.nl/fietsen/gravel/everyday/blend" },
  { brand:"Rose", model:"Hobo Cues", frame:"staal", wheels:"aluminium", wheelBrand:"Rose G30 (650B)", maxTire:55, priceClass:2, price:1322, priceLabel:"~€1.322", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,9 kg", group:"Cues 1x10", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"De Hobo is Rose's stalen everyday-gravelbike met een récht stuur (flatbar) — let op, dus geen racestuur zoals de andere modellen hier. Geïntegreerd front-rack, 14 montagepunten en 47 mm WTB-banden op 650B-wielen (ruimte tot 55 mm) maken 'm onverwoestbaar voor stad, toer én bikepacking. Onderhoudsarme Shimano Cues 1×10 met duimschakelaar.", url:"https://www.rosebikes.nl/fietsen/gravel/everyday/hobo" },
  { brand:"Rose", model:"Backroad AL GRX 400", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:2, price:1932, priceLabel:"~€1.932", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,6 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XXS–XXL (8 maten)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium versie van de nieuwe Backroad-generatie (2026) met dezelfde slimme details: geïntegreerd framevak met toolbag, USB-C-laadpoort aan het stuur en 18 montagepunten. De 2×10 GRX 400 geeft een breed verzet voor toeren en woon-werk, en er past tot 53 mm band in. Met 8 framematen (XXS–XXL) is er voor vrijwel iedereen een maat.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL Apex", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:3, price:2135, priceLabel:"~€2.135", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"Apex XPLR 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XXL (8 maten)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Backroad AL met mechanische SRAM Apex XPLR 1×12 — eenvoud en weinig onderhoud op een robuust aluminiumframe. Framevak met toolbag, USB-C-poort en 18 montagepunten maken 'm net zo avontuurklaar als de carbonversie, voor minder geld. Leverbaar in 8 maten van XXS tot XXL.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL GRX 610", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:3, price:2542, priceLabel:"~€2.542", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XXL (8 maten)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"De rijkst uitgeruste mechanische Backroad AL, met Shimano GRX RX610 1×12 en grote 10-51 cassette voor steile klimmen met bagage. Zelfde 2026-platform met opbergvak, USB-C-poort en 18 montagepunten; banden tot 53 mm passen. Een complete avonturier zonder elektronica.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"DT Swiss G1800", maxTire:53, priceClass:3, price:2745, priceLabel:"~€2.745", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,8 kg", group:"GRX RX820 2x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"XXS–XXL (8 maten)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Volledig uitgeruste Backroad AL: spatborden, bagagedrager en dynamoverlichting zitten er af fabriek op, met 2×12 GRX 820 voor fijne stappen onderweg. Standaard op 35 mm banden voor woon-werk en toer; zonder spatborden past tot 53 mm. Instappen en wegrijden, het hele jaar door.", url:"https://www.rosebikes.nl/fietsen/gravel/everyday/backroad-al-eq" },
  { brand:"Rose", model:"Backroad GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:3, price:2949, priceLabel:"~€2.949", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"De compleet vernieuwde carbon Backroad (2026) heeft een geïntegreerde opbergruimte in de onderbuis, een USB-C-laadpoort bij de stuurpen en 18 montagepunten. Frame- en toolbag worden standaard meegeleverd en er past tot 53 mm band in het frame. Met mechanische GRX 820 1×12 de scherp geprijsde instap in de nieuwe Backroad-lijn.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Apex AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:3, price:3355, priceLabel:"~€3.355", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Dezelfde nieuwe carbon Backroad, maar met draadloze elektronische SRAM Apex XPLR AXS en ~9,2 kg licht. Het frame biedt opbergruimte in de onderbuis, een USB-C-poort en 18 montagepunten; frame- en toolbag zitten er standaard bij. De voordeligste route naar draadloos schakelen op een avontuurfiets.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad GRX 825 Di2", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:3559, priceLabel:"~€3.559", shifting:"Shimano", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Nieuwe Backroad met elektronische Shimano GRX Di2 1×12 en 10-51 cassette — exact, licht in bediening en betrouwbaar in modder en stof. Verder alle 2026-vernieuwingen aan boord: framevak met toolbag, USB-C-laadpoort, 18 montagepunten en bandruimte tot 53 mm. Voor wie Shimano trouw blijft maar draadloos comfort wil.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Force AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:4271, priceLabel:"~€4.271", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,1 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topuitvoering van de nieuwe Backroad met SRAM Force XPLR AXS 1×13 en full-mount derailleur op UDH-standaard. Met ~9,1 kg de lichtste van de Backroad-avontuurlijn, inclusief framevak, USB-C-poort en 18 montagepunten. Snelheid gecombineerd met volledige bikepacking-uitrusting.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Unsupported", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:4474, priceLabel:"~€4.474", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,0 kg", group:"GRX RX820 1x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"De Backroad Unsupported is gebouwd voor ultraracen en zelfvoorzienend bikepacken: SON-naafdynamo, Supernova-verlichting, powerbank-systeem én complete tassenset zitten er af fabriek op. De 50 mm Schwalbe G-One Overland banden en 18 montagepunten maken 'm klaar voor non-stop avontuur, dag én nacht. Een uniek concept in dit overzicht.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad FF Rival XPLR AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30 LIGHT", maxTire:45, priceClass:4, price:3559, priceLabel:"~€3.559", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"De Backroad FF is Rose's aero racegravel van high modulus carbon met one-piece cockpit en UDH. Deze instap-uitvoering heeft draadloze SRAM Rival XPLR AXS 1×13 mét geïntegreerde Quarq-vermogensmeter — zeldzaam in deze prijsklasse. Tot 45 mm bandruimte en ~8,6 kg: gemaakt voor wedstrijden en KOM's.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF GRX 825 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:4, price:4576, priceLabel:"~€4.576", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Race-Backroad FF met elektronische Shimano GRX Di2 2×12 en 4iiii-vermogensmeter, voor kleine versnellingsstappen op hoge snelheid. Carbon Rose GC50-wielen (50 mm hoog) maken 'm aerodynamisch sterk, en met ~8,2 kg klimt 'm uitstekend. De enige 2× in de FF-lijn.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF Force XPLR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:5, price:5084, priceLabel:"~€5.084", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,9 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Backroad FF met SRAM Force XPLR AXS 1×13, geïntegreerde Force-vermogensmeter en carbon GC50-wielen — ~7,9 kg racemateriaal. De aero one-piece cockpit en het magnetische tassenconcept verenigen snelheid met gravelpraktijk. Voor de prestatiegerichte gravelracer.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF Red XPLR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:5, price:7118, priceLabel:"~€7.118", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 maten)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Het vlaggenschip van de Backroad FF-lijn: SRAM Red XPLR AXS 1×13, Red-vermogensmeter en carbon GC50-wielen bij slechts ~7,6 kg. High modulus carbon en een volledig geïntegreerde cockpit maken dit Rose's snelste gravelbike ooit. Direct-to-consumer topwaarde tegenover de gevestigde racemerken.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad AL Plus Apex", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G30+", maxTire:40, priceClass:3, price:3457, priceLabel:"~€3.457", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,6 kg", group:"Apex XPLR 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X30 naaf (45 Nm)", battery:"250 Wh (+170 Wh extender optioneel)", geoDesc:"E-gravel die je nauwelijks als e-bike herkent: de Mahle X30-naafmotor (45 Nm) en 250 Wh accu zijn vrijwel onzichtbaar weggewerkt in het aluminium frame met carbon vork. Tot ~100 km bereik, optionele Range Extender en ~13,6 kg totaalgewicht. Met 12 montagepunten en SRAM Apex XPLR 1×12 klaar voor woon-werk én avontuur.", url:"https://www.rosebikes.nl/fietsen/gravel/e-gravel/backroad-al-plus" },
  { brand:"Rose", model:"Backroad AL Plus EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G30+", maxTire:40, priceClass:4, price:3864, priceLabel:"~€3.864", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~15,5 kg", group:"Cues 1x11", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X30 naaf (45 Nm)", battery:"250 Wh (+170 Wh extender optioneel)", geoDesc:"De volledig uitgeruste e-Backroad: spatborden, bagagedrager en verlichting af fabriek, plus de discrete Mahle X30-naafmotor (45 Nm, 250 Wh). De onderhoudsarme Shimano Cues 1×11 maakt 'm zorgeloos voor dagelijks gebruik en lange toertochten. Elektrisch alles-in-één voor het hele jaar.", url:"https://www.rosebikes.nl/fietsen/gravel/e-gravel/backroad-al-plus" },
];

const multiKeys = new Set(['brand','price','weight','geo','tire','year','size','groupset','gravelgroep','speed','wielmerk','wielgewicht']);
const filterKeys = ['etype','price','brand','year','shifting','shifttype','groupset','gravelgroep','speed','drivetrain','frame','wheels','wielmerk','wielgewicht','tire','weight','size','geo','damping','mounts','fender'];

const state = {};
filterKeys.forEach(k => state[k] = multiKeys.has(k) ? [] : 'all');

const filterLabels = {
  etype:{all:"Alle types", normal:"Niet-elektrisch", electric:"Elektrisch ⚡"},
  brand:{all:"Alle merken"},
  drivetrain:{all:"Alle aandrijving","1x":"1× voorblad","2x":"2× voorblad"},
  frame:{all:"Alle frames",carbon:"Carbon frame",aluminium:"Aluminium frame",staal:"Stalen frame",titanium:"Titanium frame"},
  wheels:{all:"Alle wielen",carbon:"Carbon wielen",aluminium:"Aluminium wielen"},
  mounts:{all:"Montagepunten: alle", yes:"Met montagepunten", no:"Zonder montagepunten"},
  fender:{all:"Spatborden: alle", yes:"Spatbord mogelijk", no:"Geen spatbordbevestiging"},
  damping:{all:"Demping: alle", yes:"Met vering/demping", no:"Zonder vering/demping"},
  price:{all:"Alle prijzen","1":"€0–1.000","2":"€1.000–2.000","3":"€2.000–3.500","4":"€3.500–5.000","5":"€5.000–7.500","6":"€7.500+"},
  shifting:{all:"Alle merken",Shimano:"Shimano",SRAM:"SRAM"},
  shifttype:{all:"Mech+Elek",electronic:"Elektronisch",mechanical:"Mechanisch"},
  gravelgroep:{all:"Alle gravelgroepen", xplr:"SRAM XPLR", grx:"Shimano GRX"},
  speed:{all:"Alle cassettes","9":"9 speed","10":"10 speed","11":"11 speed","12":"12 speed","13":"13 speed (nieuwste)"},
  groupset:{all:"Alle afmontages","Shimano CUES":"Shimano CUES","Shimano GRX 400":"Shimano GRX 400","Shimano GRX 600":"Shimano GRX 600","Shimano GRX 800":"Shimano GRX 800","Shimano GRX Di2":"Shimano GRX Di2","Shimano XT Di2":"Shimano XT Di2","SRAM Apex":"SRAM Apex (mech)","SRAM Apex AXS":"SRAM Apex AXS","SRAM Rival AXS":"SRAM Rival AXS","SRAM Force AXS":"SRAM Force AXS","SRAM Red AXS":"SRAM Red AXS"},
  weight:{all:"Alle gewichten","1":"7–8 kg","2":"8–9 kg","3":"9–10 kg","4":">10 kg"},
  wielgewicht:{all:"Alle wielgewichten","2":"Wiel < 1.250 g","3":"Wiel 1.251–1.500 g","4":"Wiel > 1.500 g","0":"Wielgewicht onbekend"},
  geo:{all:"Alle geometrieën","Race Gravel":"Race Gravel","Adventure Gravel":"Adventure","Bikepacking / Touring":"Bikepacking"},
  tire:{all:"Alle bandbreedtes","1":"Tot 42 mm","2":"43–47 mm","3":"48–52 mm","4":"≥53 mm"},
  year:{all:"Alle modeljaren","2024":"Modeljaar 2024","2025":"Modeljaar 2025","2026":"Modeljaar 2026"},
  size:{all:"Alle framematen","2XS":"Maat 2XS","XS":"Maat XS","S":"Maat S","M":"Maat M","L":"Maat L","XL":"Maat XL","2XL":"Maat 2XL"}
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
  return 'Generiek / OEM';
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
    a === 'Generiek / OEM' ? 1 : b === 'Generiek / OEM' ? -1 : a.localeCompare(b));
  filterLabels.wielmerk = { all: 'Alle wielmerken' };
  names.forEach(n => {
    filterLabels.wielmerk[n] = 'Wiel: ' + n;
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
  if(lbl) lbl.textContent = willOpen ? '🛠️ Minder filters' : '🛠️ Meer filters';
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
  return {nl:'🇳🇱 NL',eu:'🇪🇺 EU',world:'🌍 Wereld'}[r] || r;
}

function driveLabel(d) {
  return {'1x':'1× (één blad)','2x':'2× (twee bladen)','1x/2x':'1× of 2×'}[d] || d;
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
  const fb = '<div class="gk-thumb-fb"><span class="e">🚵</span><span>foto niet beschikbaar</span></div>';
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
  const rows = [['Materiaal', b.wheels === 'carbon' ? 'Carbon' : 'Aluminium']];
  if(s.depth)   rows.push(['Velghoogte', s.depth]);
  if(s.int)     rows.push(['Binnenmaat velg', s.int]);
  if(s.ext)     rows.push(['Buitenmaat velg', s.ext]);
  if(s.weight)  rows.push(['Wielsetgewicht', s.weight]);
  if(s.hub)     rows.push(['Naaf', s.hub]);
  if(s.spokes)  rows.push(['Spaken', s.spokes]);
  if(s.tubeless)rows.push(['Tubeless', s.tubeless]);
  if(s.tire)    rows.push(['Aanbevolen band', s.tire]);
  const grid = rows.map(r => `<span class="k">${r[0]}</span><span class="v">${r[1]}</span>`).join('');
  const src = s.src ? `<div class="gk-wheel-note">Bron: ${s.src}</div>` : '';
  return `<details class="gk-wheel"><summary>Wieldetails — ${b.wheelBrand}</summary><div class="gk-wheel-grid">${grid}</div>${src}</details>`;
}

function render() {
  let filtered = bikes.filter(matches);
  const sort = document.getElementById('sort-sel').value;
  if(sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if(sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if(sort === 'weight-asc') filtered.sort((a,b) => bikeWeight(a) - bikeWeight(b));
  else filtered.sort((a,b) => a.brand.localeCompare(b.brand));

  document.getElementById('result-count').textContent = filtered.length + ' fiets' + (filtered.length !== 1 ? 'en' : '') + ' gevonden';

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
  if(filtered.length === 0) { grid.innerHTML = '<div class="gk-empty"><div class="gk-empty-icon">🚵</div>Geen fietsen gevonden. Pas de filters aan.</div>'; return; }

  grid.innerHTML = filtered.map(b => {
    const frameBadge = {carbon:'<span class="gk-badge carbon-frame">Carbon frame</span>',aluminium:'<span class="gk-badge alu-frame">Aluminium frame</span>',staal:'<span class="gk-badge steel-frame">Staal</span>',titanium:'<span class="gk-badge ti-frame">Titanium</span>'}[b.frame] || '';
    const wheelBadge = b.wheels === 'carbon' ? '<span class="gk-badge carbon-wheels">Carbon wielen</span>' : '<span class="gk-badge alu-wheels">Alu wielen</span>';
    const shiftBrandBadge = {Shimano:'<span class="gk-badge shimano">Shimano</span>',SRAM:'<span class="gk-badge sram">SRAM</span>',Campagnolo:'<span class="gk-badge campagnolo">Campagnolo</span>',MicroShift:'<span class="gk-badge microshift">MicroShift</span>'}[b.shifting] || '';
    const shiftTypeBadge = b.electronic ? '<span class="gk-badge electronic">⚡ Elektronisch</span>' : '<span class="gk-badge mechanical">⚙️ Mechanisch</span>';
    const intBadge = b.integrated ? '<span class="gk-badge integrated">Geïntegreerd</span>' : '';
    const xplrBadge = isXplr(b) ? '<span class="gk-badge xplr-gravel" title="SRAM XPLR — gravel-specifieke 1×-groepset met extra groot cassettebereik">🪨 SRAM XPLR · gravelgroep</span>' : '';
    const grxBadge = isGrx(b) ? '<span class=\"gk-badge grx-gravel\" title=\"Shimano GRX — gravel-specifieke groepset van Shimano\">⛰️ Shimano GRX · gravelgroep</span>' : '';
    const ebikeBadge = b.ebike ? '<span class="gk-badge ebike">⚡ E-bike</span>' : '';

    const motorSpec = b.ebike
      ? (b.motor ? `<span class="gk-spec-key">Motor</span><span class="gk-spec-val">${b.motor}</span>` : '')
        + (b.battery ? `<span class="gk-spec-key">Accu</span><span class="gk-spec-val">${b.battery}</span>` : '')
      : '';

    const feats = [];
    feats.push(b.mounts ? '<span class="gk-feat mounts">🔩 Montagepunten</span>' : '<span class="gk-feat off">🔩 Geen montagepunten</span>');
    feats.push(b.fender ? '<span class="gk-feat fender">🛡️ Spatbord mogelijk</span>' : '<span class="gk-feat off">🛡️ Geen spatbordmontage</span>');
    feats.push(hasDamping(b) ? `<span class="gk-feat damp">〰️ ${b.damping}</span>` : '<span class="gk-feat off">〰️ Geen vering/demping</span>');
    feats.push(b.tubeless ? '<span class="gk-feat tl">◯ Tubeless ready</span>' : '<span class="gk-feat off">◯ Niet tubeless</span>');
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
        <span class="gk-spec-key">Type</span><span class="gk-spec-val">${b.ebike ? 'Elektrisch ⚡' : 'Niet-elektrisch'}</span>
        <span class="gk-spec-key">Modeljaar</span><span class="gk-spec-val">${b.year}</span>
        <span class="gk-spec-key">Aandrijving</span><span class="gk-spec-val">${driveLabel(b.drivetrain)}</span>
        <span class="gk-spec-key">Afmontage</span><span class="gk-spec-val">${groupLabel(b)}${isXplr(b) ? '<span class="gk-spec-xplr" title="Gravel-specifieke SRAM XPLR-groepset">XPLR</span>' : ''}${isGrx(b) ? '<span class="gk-spec-grx" title="Gravel-specifieke Shimano GRX-groepset">GRX</span>' : ''}</span>
        <span class="gk-spec-key">Cassette</span><span class="gk-spec-val">${speedCount(b) ? speedCount(b) + ' speed' : '—'}</span>
        <span class="gk-spec-key">Wielset</span><span class="gk-spec-val">${b.wheelBrand}</span>
        <span class="gk-spec-key">Max. band</span><span class="gk-spec-val gk-spec-tire">${b.maxTire} mm</span>
        <span class="gk-spec-key">Framematen</span><span class="gk-spec-val">${sizesLabel(b)}</span>
        ${motorSpec}
      </div>
      ${featsRow}
      ${wheelSpecHTML(b)}
      <div class="gk-card-cta">
        <a class="gk-buy-btn" href="${b.url}" target="_blank" rel="noopener">Bekijk prijs bij ${shopName(b)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
        <div class="gk-cta-row">
          <button class="gk-cmpsel" type="button" data-key="${b.brand}|${b.model}" onclick="toggleCmpSel(this.dataset.key,this)" aria-pressed="false" title="Selecteer om naast elkaar te vergelijken (max. 4)">⇄ Vergelijk</button>
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
  'Canyon':     { direct: true, site: 'https://www.canyon.com/nl-nl/', label: 'Canyon verkoopt rechtstreeks online — er is geen dealernetwerk. Bestellen en service regel je via canyon.com.' },
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
  'Rose':       { direct: true, site: 'https://www.rosebikes.nl/rose-stores', label: 'Rose verkoopt rechtstreeks online en heeft eigen ROSE Stores (o.a. Bocholt, net over de grens). Geen regulier dealernetwerk.' }
};

function toggleDealer() {
  const box = document.getElementById('gk-dealer');
  const collapsed = box.classList.toggle('collapsed');
  document.getElementById('gk-dealer-toggle').textContent = collapsed ? '+' : '–';
  document.getElementById('gk-dealer-toggle-label').textContent = collapsed ? 'Klap uit' : 'Klap in';
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
    note.innerHTML = `${loc.label} <a href="${loc.site}" target="_blank" rel="noopener">Naar de website van ${brand} →</a>`;
    note.style.display = 'block';
    off.style.display = 'none';
  } else {
    note.style.display = 'none';
    off.innerHTML = `Of gebruik de officiële dealerzoeker: <a href="${loc.url}" target="_blank" rel="noopener">dealerzoeker van ${brand} →</a>`;
    off.style.display = 'block';
  }
}

function zoekDealer() {
  const brand = document.getElementById('dealer-brand').value;
  const pcRaw = document.getElementById('dealer-pc').value.trim().toUpperCase();
  const err = document.getElementById('dealer-err');
  const pcOk = /^[1-9]\d{3}\s?[A-Z]{2}$/.test(pcRaw) || /^[1-9]\d{3}$/.test(pcRaw);
  if (!pcOk) { err.style.display = 'block'; return; }
  err.style.display = 'none';
  const loc = dealerLocators[brand];
  const term = (brand && loc && !loc.direct) ? brand + ' fiets dealer' : 'fietsenwinkel gravel';
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
function geoShort(g) { return {'Race Gravel':'racen','Adventure Gravel':'avontuur','Bikepacking / Touring':'bikepacking'}[g] || g; }

function parseQuery(q) {
  const s = norm(q);
  const c = { brand: [], geo: [] };
  let objective = 'none';

  if(/elektr|e-?bike|ebike| motor|trapondersteun|ondersteun|accu/.test(s)) c.ebike = true;
  if(/niet[- ]?elektr|geen motor|gewone fiets|zonder motor|niet-?elektrisch/.test(s)) c.ebike = false;

  let sf = s;
  if(/carbon[- ]?wiel/.test(sf)) { c.wheels = 'carbon'; sf = sf.replace(/carbon[- ]?wielen?/g, ' '); }
  else if(/(alumin[a-z]*|alu)[- ]?wiel/.test(sf)) { c.wheels = 'aluminium'; sf = sf.replace(/(alumin[a-z]*|alu)[- ]?wielen?/g, ' '); }
  if(/carbon/.test(sf)) c.frame = 'carbon';
  if(/alumin|\balu\b/.test(sf)) c.frame = 'aluminium';

  if(/vering|demping|gedempt|veervork|geveerd|comfortabel|comfort/.test(s)) c.damping = true;
  if(/montagepunt|frametas|bidon|bevestigingspunt|bagage|bikepack|tassen|pannier|lange tocht|lange afstand/.test(s)) c.mounts = true;
  if(/spatbord|woon-?werk|forens|regen|natte/.test(s)) c.fender = true;

  if(/\b1x\b|1 ?x|een blad|1 blad|enkel blad/.test(s)) c.drivetrain = '1x';
  if(/\b2x\b|2 ?x|twee blad|2 blad|dubbel blad/.test(s)) c.drivetrain = '2x';

  if(/shimano/.test(s)) c.shifting = 'Shimano';
  if(/sram/.test(s)) c.shifting = 'SRAM';

  const gm = s.match(/\b(apex|rival|force|grx|cues|xplr|di2)\b/);
  if(gm) c.group = gm[1];
  else if(/\bred\b/.test(s) && /sram|axs/.test(s)) c.group = 'red';

  if(/race|wedstrijd|aero|competit/.test(s)) c.geo.push('Race Gravel');
  if(/adventure|avontuur|allround|veelzijdig/.test(s)) c.geo.push('Adventure Gravel');
  if(/touring|toerfiets|\btoer\b/.test(s)) c.geo.push('Bikepacking / Touring');
  if(/bikepack|met tassen|pannier/.test(s)) c.geo.push('Bikepacking / Touring', 'Adventure Gravel');
  c.geo = [...new Set(c.geo)];

  brandList.forEach(br => { const bn = norm(br).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); if(new RegExp('\\b' + bn + '\\b').test(s)) c.brand.push(br); });

  let pm = s.match(/(?:onder|minder dan|tot|maximaal|max|hooguit|budget van|rond|ongeveer|<)\s*(?:de\s*|€\s*)?(\d[\d.\s]{2,})/);
  if(pm) { const num = parseInt(pm[1].replace(/[^\d]/g, '')); if(num >= 300) c.priceMax = num; }
  let pmin = s.match(/(?:boven|meer dan|vanaf|minimaal|minstens|>)\s*(?:de\s*|€\s*)?(\d[\d.\s]{2,})/);
  if(pmin) { const num = parseInt(pmin[1].replace(/[^\d]/g, '')); if(num >= 300) c.priceMin = num; }

  let wm = s.match(/(?:lichter dan|onder|max|minder dan|<)\s*(?:de\s*)?(\d{1,2}(?:[.,]\d)?)\s*kg/);
  if(wm) c.weightMax = parseFloat(wm[1].replace(',', '.'));

  let tm = s.match(/(\d{2})\s*mm/);
  if(tm) c.tireMin = parseInt(tm[1]);
  if(!c.tireMin && /brede band|dikke band|breedste|brede banden|dikke banden/.test(s)) c.tireMin = 48;

  let spd = s.match(/\b(9|1[0-3])\s*[- ]?\s*(?:speed|versnellingen|speeds)\b/);
  if(spd) c.speed = parseInt(spd[1], 10);

  let ym = s.match(/\b(202[2-9])\b/);
  if(ym) c.year = parseInt(ym[1]);
  let szm = s.match(/\bmaat\s+(2xs|xxs|xs|m\/l|xxl|2xl|xl|s|m|l|\d{2}(?:[.,]5)?)\b/);
  if(szm) { const cats = sizeCatOf(szm[1]); if(cats.length) c.size = cats[0]; }

  if(/lichtste|lichtst|laagste gewicht|minst.*kg/.test(s)) objective = 'lightest';
  else if(/goedkoopste|laagste prijs|minst.*kost|goedkoopst/.test(s)) objective = 'cheapest';
  else if(/duurste|hoogste prijs|meest premium|prijzigste|exclusiefste/.test(s)) objective = 'priciest';
  else if(/budget|betaalbaar|voordelig|prijs-?kwaliteit|instap|beginner|weinig geld|beste koop|scherp geprijsd/.test(s)) objective = 'value';
  else if(/snelste|aero/.test(s)) objective = 'fastest';
  else if(/beste|aanrader|aanbevel|advies|welke.*kopen|top\b|wat moet ik/.test(s)) objective = 'best';

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
  let noun = c.ebike === true ? 'e-gravelbike' : (c.ebike === false ? 'niet-elektrische gravelbike' : 'gravelbike');
  let mods = [];
  if(c.brand.length) mods.push('van ' + c.brand.join('/'));
  if(c.frame) mods.push('met ' + c.frame + ' frame');
  if(c.geo.length) mods.push('voor ' + c.geo.map(geoShort).join('/'));
  if(c.damping) mods.push('met vering/demping');
  if(c.mounts) mods.push('met montagepunten');
  if(c.fender) mods.push('met spatbordbevestiging');
  if(c.wheels) mods.push('met ' + c.wheels + ' wielen');
  if(c.drivetrain) mods.push('met ' + c.drivetrain + '-aandrijving');
  if(c.shifting) mods.push('met ' + c.shifting);
  if(c.group) mods.push('met ' + (c.group === 'grx' || c.group === 'xplr' || c.group === 'di2' ? c.group.toUpperCase() : c.group[0].toUpperCase() + c.group.slice(1)) + '-groepset');
  if(c.priceMax) mods.push('onder €' + c.priceMax.toLocaleString('nl-NL'));
  if(c.priceMin) mods.push('boven €' + c.priceMin.toLocaleString('nl-NL'));
  if(c.weightMax) mods.push('lichter dan ' + String(c.weightMax).replace('.', ',') + ' kg');
  if(c.tireMin) mods.push('met banden vanaf ' + c.tireMin + ' mm');
  if(c.year) mods.push('uit modeljaar ' + c.year);
  if(c.speed) mods.push('met ' + c.speed + '-speed cassette');
  if(c.size) mods.push('leverbaar in maat ' + c.size);
  return noun + (mods.length ? ' ' + mods.join(', ') : '');
}

function valueReason(b) {
  return (b.frame === 'carbon' ? 'carbon frame' : 'robuust aluminium frame') + ', ' + groupLabel(b) + ' en ' + b.weightLabel + ' voor deze prijs';
}

function aiCard(b) {
  return `<div class="gk-ai-card">
    <div class="gk-ai-card-h"><span class="gk-ai-card-name">${b.brand} ${b.model}</span><span class="gk-ai-card-price">${b.priceLabel}</span></div>
    <div class="gk-ai-card-tags"><span class="gk-geo-tag ${geoClass(b.geo)}">${b.geo}</span>${b.ebike ? '<span class="gk-badge ebike">⚡ E-bike</span>' : ''}</div>
    <div class="gk-ai-card-spec">modeljaar ${b.year} · ${b.weightLabel} · ${driveLabel(b.drivetrain)} · ${groupLabel(b)} · max ${b.maxTire} mm · ${b.frame === 'carbon' ? 'carbon' : 'aluminium'}${hasDamping(b) ? ' · ' + b.damping : ''}</div>
    <a href="${b.url}" target="_blank" rel="noopener">Bekijk fiets →</a>
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
    panel.innerHTML = `<button class="gk-ai-close" onclick="clearAi()" title="Sluit" aria-label="Sluit antwoord">×</button><div class="gk-ai-text">Ik kon geen fiets vinden die hieraan voldoet. Probeer het wat breder, bijvoorbeeld <em>"lichtste gravelbike"</em> of <em>"beste budgetbike"</em>.</div>`;
    return;
  }

  const top = res.slice(0, 3);
  const n = res.length;
  const t0 = top[0];
  let lead;
  if(objective === 'lightest') lead = `De lichtste ${scopeNoun(c)} is de <strong>${t0.brand} ${t0.model}</strong> — ${t0.weightLabel}, ${t0.priceLabel}.`;
  else if(objective === 'cheapest') lead = `De goedkoopste ${scopeNoun(c)} is de <strong>${t0.brand} ${t0.model}</strong> voor ${t0.priceLabel}.`;
  else if(objective === 'priciest') lead = `De duurste / meest premium ${scopeNoun(c)} is de <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}).`;
  else if(objective === 'value') lead = `Beste prijs-kwaliteit ${scopeNoun(c)}: de <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}) — ${valueReason(t0)}.`;
  else if(objective === 'fastest') lead = `Voor pure snelheid is de <strong>${t0.brand} ${t0.model}</strong> een topkeuze — ${t0.weightLabel}, ${t0.geo}.`;
  else if(objective === 'best') lead = `Mijn beste allround-aanrader (${scopeNoun(c)}): de <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}) — ${valueReason(t0)}.`;
  else lead = `Op basis van je vraag vond ik ${n} passende ${n === 1 ? 'fiets' : 'fietsen'}${c.brand.length || c.geo.length || c.ebike !== undefined || c.frame || c.damping || c.mounts || c.fender || c.priceMax || c.priceMin || c.weightMax || c.tireMin || c.drivetrain || c.shifting || c.year || c.size ? ' (' + scopeNoun(c) + ')' : ''}. Mijn aanraders:`;

  const cards = top.map(aiCard).join('');
  const apply = n > 3
    ? `<div class="gk-ai-more">…en nog ${n - 3} andere. <button class="gk-ai-apply" onclick="applyAssistant()">Toon alle ${n} in de lijst ↓</button></div>`
    : `<button class="gk-ai-apply" onclick="applyAssistant()">Toon in de lijst ↓</button>`;

  panel.innerHTML = `<button class="gk-ai-close" onclick="clearAi()" title="Sluit" aria-label="Sluit antwoord">×</button><div class="gk-ai-text">${lead}</div><div class="gk-ai-cards">${cards}</div><div>${apply}</div>`;
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
function cmpJoin(parts) { return parts.length <= 1 ? (parts[0] || '') : parts.slice(0, -1).join(', ') + ' en ' + parts[parts.length - 1]; }
function cmpNames(arr, cap) {
  cap = cap || 3;
  const names = arr.map(cmpStrong);
  if (names.length <= cap) return cmpJoin(names);
  return arr.length + ' fietsen, o.a. ' + names[0] + ' en ' + names[1];
}
function cmpEur(n) { return '€' + n.toLocaleString('nl-NL'); }
function cmpKg(w) { return (Math.round(w * 10) / 10).toFixed(1).replace('.', ',') + ' kg'; }
function cmpCap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function cmpGroupBy(list, fn) { const m = new Map(); list.forEach(b => { const k = fn(b); if (!m.has(k)) m.set(k, []); m.get(k).push(b); }); return m; }
function cmpNm(b) { const m = String(b.motor || '').match(/(\d+)\s*Nm/); return m ? parseInt(m[1]) : null; }
function cmpWh(b) { const m = String(b.battery || '').match(/(\d+)\s*Wh/); return m ? parseInt(m[1]) : null; }
const cmpGeoLong = { 'Race Gravel': 'race-geometrie (snel, sportieve zit)', 'Adventure Gravel': 'adventure-geometrie (comfortabel en veelzijdig)', 'Bikepacking / Touring': 'bikepacking-geometrie (rechtop, gemaakt voor bagage)' };
const cmpGeoShort = { 'Race Gravel': 'race-geometrie', 'Adventure Gravel': 'adventure-geometrie', 'Bikepacking / Touring': 'bikepacking-geometrie' };
const cmpDriveShort = { '1x': '1×', '2x': '2×', '1x/2x': '1× of 2× (configureerbaar)' };
const cmpAdvice = {
  cheap: 'zo min mogelijk wilt uitgeven',
  new: 'de nieuwste techniek en standaarden wilt',
  expensive: 'het beste van het beste zoekt',
  light: 'zo licht mogelijk wilt rijden (klimmen en snelheid)',
  ebike: 'trapondersteuning wilt',
  noebike: 'liever puur op eigen kracht rijdt',
  damp: 'maximaal comfort op ruig terrein wilt',
  tire: 'regelmatig ruig terrein opzoekt',
  mounts: 'bikepacking- of toerplannen hebt',
  fender: 'ook in de regen of naar het werk fietst',
  twoX: 'kleine versnellingsstappen en een groot bereik wilt',
  oneX: 'eenvoud en weinig onderhoud wilt',
  elec: 'strak en moeiteloos elektronisch wilt schakelen',
  mech: 'het eenvoudig en betaalbaar wilt houden',
  carbon: 'een licht en trillingsdempend frame wilt',
  alu: 'een robuust en betaalbaar frame wilt',
  cwheels: 'lichte, snelle wielen wilt',
  georace: 'vooral snelheid zoekt',
  geoadv: 'één veelzijdige fiets voor alles wilt',
  geotour: 'lange tochten met bagage plant'
};

function cmpTraits(b, list) {
  const t = [];
  const uniqMin = fn => { const vs = list.map(fn); const mn = Math.min(...vs); return fn(b) === mn && vs.filter(v => v === mn).length === 1 && mn !== Math.max(...vs); };
  const uniqMax = fn => { const vs = list.map(fn); const mx = Math.max(...vs); return fn(b) === mx && vs.filter(v => v === mx).length === 1 && mx !== Math.min(...vs); };
  const only = pred => pred(b) && list.filter(pred).length === 1;
  if (uniqMin(x => x.price)) t.push({ k: 'cheap', txt: 'de goedkoopste (' + b.priceLabel + ')' });
  if (uniqMax(x => x.price)) t.push({ k: 'expensive', txt: 'de duurste (' + b.priceLabel + ')' });
  if (uniqMin(bikeWeight)) t.push({ k: 'light', txt: 'de lichtste (' + b.weightLabel + ')' });
  if (uniqMax(bikeWeight)) t.push({ k: 'heavy', txt: 'de zwaarste (' + b.weightLabel + ')' });
  if (uniqMax(x => x.year)) t.push({ k: 'new', txt: 'het nieuwste modeljaar (' + b.year + ')' });
  if (uniqMin(x => x.year)) t.push({ k: 'old', txt: 'het oudste modeljaar (' + b.year + '), vaak gunstig geprijsd' });
  if (only(x => x.ebike)) t.push({ k: 'ebike', txt: 'de enige e-bike' + (b.motor ? ' (' + b.motor + (b.battery ? ', ' + b.battery : '') + ')' : '') });
  if (only(x => !x.ebike)) t.push({ k: 'noebike', txt: 'de enige zonder motor' });
  if (only(x => hasDamping(x))) t.push({ k: 'damp', txt: 'de enige met vering/demping (' + b.damping + ')' });
  if (only(x => !hasDamping(x))) t.push({ k: 'nodamp', txt: 'de enige zónder vering/demping' });
  if (uniqMax(x => x.maxTire)) t.push({ k: 'tire', txt: 'de meeste bandvrijheid (tot ' + b.maxTire + ' mm)' });
  if (only(x => x.mounts)) t.push({ k: 'mounts', txt: 'de enige met montagepunten' });
  if (only(x => !x.mounts)) t.push({ k: 'nomounts', txt: 'de enige zonder montagepunten' });
  if (only(x => x.fender)) t.push({ k: 'fender', txt: 'de enige met spatbordbevestiging' });
  if (only(x => !x.fender)) t.push({ k: 'nofender', txt: 'de enige zonder spatbordbevestiging' });
  if (only(x => String(x.drivetrain).includes('2x'))) t.push({ k: 'twoX', txt: 'de enige met 2× aandrijving' });
  if (only(x => String(x.drivetrain) === '1x')) t.push({ k: 'oneX', txt: 'de enige met 1× aandrijving' });
  if (only(x => x.electronic)) t.push({ k: 'elec', txt: 'de enige met elektronisch schakelwerk (' + groupLabel(b) + ')' });
  if (only(x => !x.electronic)) t.push({ k: 'mech', txt: 'de enige met mechanisch schakelwerk (' + groupLabel(b) + ')' });
  if (only(x => x.frame === 'carbon')) t.push({ k: 'carbon', txt: 'de enige met een carbon frame' });
  if (only(x => x.frame === 'aluminium')) t.push({ k: 'alu', txt: 'de enige met een aluminium frame' });
  if (only(x => x.wheels === 'carbon')) t.push({ k: 'cwheels', txt: 'de enige met carbon wielen' });
  if (only(x => x.shifting === 'SRAM')) t.push({ k: 'sram', txt: 'de enige met SRAM' });
  if (only(x => x.shifting === 'Shimano')) t.push({ k: 'shimano', txt: 'de enige met Shimano' });
  if (new Set(list.map(x => x.geo)).size > 1 && list.filter(x => x.geo === b.geo).length === 1) {
    const gk = { 'Race Gravel': 'georace', 'Adventure Gravel': 'geoadv', 'Bikepacking / Touring': 'geotour' }[b.geo];
    t.push({ k: gk || 'geo', txt: 'de enige met ' + (cmpGeoShort[b.geo] || b.geo) });
  }
  return t;
}

function buildCompareHTML(list) {
  const n = list.length;
  const head = '<div class="gk-cmp-head">🤖 AI-overzicht: de verschillen op een rij <span class="gk-cmp-count">' + n + ' ' + (n === 1 ? 'fiets' : 'fietsen') + '</span></div>';
  const foot = '<div class="gk-cmp-foot">Automatisch gegenereerd op basis van de specificaties van de fietsen in je selectie.</div>';

  if (n === 0) return head + '<div class="gk-cmp-empty">Er voldoet momenteel geen enkele fiets aan je filters. Maak je filters wat ruimer en klik opnieuw.</div>';

  if (n === 1) {
    const b = list[0];
    return head + '<div class="gk-cmp-intro">Er blijft precies één fiets over: ' + cmpStrong(b) + ' (' + b.priceLabel + ', ' + b.weightLabel + '). Vergelijken is dus niet nodig. Kort samengevat: ' + b.geoDesc + '</div>' + foot;
  }

  const sims = [];
  const secs = [];

  const gE = cmpGroupBy(list, b => b.ebike);
  if (gE.size === 1) sims.push(list[0].ebike ? 'allemaal elektrisch (e-bike)' : 'allemaal niet-elektrisch');
  else secs.push({ i: '🚲', t: 'Type', h: cmpNames(gE.get(true)) + (gE.get(true).length === 1 ? ' is een e-bike' : ' zijn e-bikes') + '; ' + cmpNames(gE.get(false)) + ' ' + (gE.get(false).length === 1 ? 'heeft' : 'hebben') + ' geen motor. Reken bij e-bikes op meer gewicht en een hogere prijs, maar ook op trapondersteuning.' });

  const gY = cmpGroupBy(list, b => b.year);
  if (gY.size === 1) sims.push('allemaal modeljaar ' + list[0].year);
  else {
    const ys = [...gY.entries()].sort((a, b) => b[0] - a[0]);
    secs.push({ i: '📅', t: 'Modeljaar', h: ys.map(([k, v]) => '<strong>' + k + '</strong>: ' + cmpNames(v)).join(' · ') + '. Een nieuwer modeljaar betekent meestal de laatste standaarden en specificaties; een ouder modeljaar is vaak scherper geprijsd.' });
  }

  const pmin = Math.min(...list.map(b => b.price)), pmax = Math.max(...list.map(b => b.price));
  if (pmin === pmax) sims.push('dezelfde richtprijs (' + cmpEur(pmin) + ')');
  else {
    const bMin = list.filter(b => b.price === pmin), bMax = list.filter(b => b.price === pmax);
    secs.push({ i: '💶', t: 'Prijs', h: 'De prijzen lopen uiteen van ' + cmpEur(pmin) + ' (' + cmpNames(bMin, 2) + ') tot ' + cmpEur(pmax) + ' (' + cmpNames(bMax, 2) + ') — een verschil van ' + cmpEur(pmax - pmin) + '.' });
  }

  const ws = list.map(bikeWeight);
  const wmin = Math.min(...ws), wmax = Math.max(...ws);
  if (wmax - wmin < 0.05) sims.push('vrijwel hetzelfde gewicht (' + list[0].weightLabel + ')');
  else {
    const bL = list.filter(b => bikeWeight(b) === wmin), bH = list.filter(b => bikeWeight(b) === wmax);
    secs.push({ i: '⚖️', t: 'Gewicht', h: 'De lichtste is ' + cmpNames(bL, 2) + ' met ' + bL[0].weightLabel + '; de zwaarste is ' + cmpNames(bH, 2) + ' met ' + bH[0].weightLabel + ' — een verschil van zo’n ' + cmpKg(wmax - wmin) + '. Lichter klimt en stuurt makkelijker.' });
  }

  const matParts = [];
  const gF = cmpGroupBy(list, b => b.frame);
  if (gF.size === 1) sims.push('allemaal een ' + list[0].frame + ' frame');
  else matParts.push('Frame — ' + [...gF.entries()].map(([k, v]) => cmpCap(k) + ': ' + cmpNames(v)).join(' · ') + '. Carbon is lichter en dempt trillingen; aluminium is robuust en voordeliger.');
  const gW = cmpGroupBy(list, b => b.wheels);
  if (gW.size === 1) sims.push('allemaal ' + list[0].wheels + ' wielen');
  else matParts.push('Wielen — ' + [...gW.entries()].map(([k, v]) => cmpCap(k) + ': ' + cmpNames(v)).join(' · ') + '. Carbon wielen zijn lichter en stijver, aluminium goedkoper.');
  if (matParts.length) secs.push({ i: '🧱', t: 'Materiaal', h: matParts.join('<br>') });

  const shiftParts = [];
  const gS = cmpGroupBy(list, b => b.shifting);
  if (gS.size === 1) sims.push('allemaal ' + list[0].shifting + '-schakelwerk');
  else shiftParts.push([...gS.entries()].map(([k, v]) => k + ': ' + cmpNames(v)).join(' · ') + '.');
  const gT = cmpGroupBy(list, b => b.electronic);
  if (gT.size === 1) sims.push(list[0].electronic ? 'allemaal elektronisch schakelen' : 'allemaal mechanisch schakelen');
  else shiftParts.push('Elektronisch (draadloos en exact, maar duurder): ' + cmpNames(gT.get(true)) + ' · mechanisch (eenvoudig en betaalbaar): ' + cmpNames(gT.get(false)) + '.');
  if (shiftParts.length) secs.push({ i: '⚙️', t: 'Schakelwerk', h: shiftParts.join('<br>') });

  const gD = cmpGroupBy(list, b => String(b.drivetrain));
  if (gD.size === 1) sims.push('allemaal ' + (cmpDriveShort[String(list[0].drivetrain)] || list[0].drivetrain) + '-aandrijving');
  else secs.push({ i: '🔗', t: 'Aandrijving', h: [...gD.entries()].map(([k, v]) => (cmpDriveShort[k] || k) + ': ' + cmpNames(v)).join(' · ') + '. 1× is eenvoudig en licht; 2× geeft meer en kleinere versnellingsstappen.' });

  const tmin = Math.min(...list.map(b => b.maxTire)), tmax = Math.max(...list.map(b => b.maxTire));
  if (tmin === tmax) sims.push('dezelfde max. bandbreedte (' + tmin + ' mm)');
  else {
    const bS = list.filter(b => b.maxTire === tmin), bT = list.filter(b => b.maxTire === tmax);
    secs.push({ i: '🛞', t: 'Bandbreedte', h: 'De maximale bandbreedte varieert van ' + tmin + ' mm (' + cmpNames(bS, 2) + ') tot ' + tmax + ' mm (' + cmpNames(bT, 2) + '). Meer bandvrijheid betekent meer grip en comfort op ruig terrein.' });
  }

  const gC = cmpGroupBy(list, b => hasDamping(b));
  if (gC.size === 1) sims.push(hasDamping(list[0]) ? 'allemaal vering/demping' : 'geen van alle heeft vering/demping');
  else {
    const withD = gC.get(true);
    const withTxt = withD.length <= 4 ? cmpJoin(withD.map(b => cmpStrong(b) + ' (' + b.damping + ')')) : cmpNames(withD);
    secs.push({ i: '〰️', t: 'Comfort', h: 'Met vering/demping: ' + withTxt + '. Zonder: ' + cmpNames(gC.get(false)) + '. Demping vangt trillingen en klappen op ruig terrein op.' });
  }

  const prak = [];
  const gM = cmpGroupBy(list, b => b.mounts);
  if (gM.size === 1) sims.push(list[0].mounts ? 'allemaal montagepunten voor tassen' : 'geen van alle heeft extra montagepunten');
  else prak.push('Montagepunten (handig voor bikepacking): wél op ' + cmpNames(gM.get(true)) + ', niet op ' + cmpNames(gM.get(false)) + '.');
  const gFd = cmpGroupBy(list, b => b.fender);
  if (gFd.size === 1) sims.push(list[0].fender ? 'allemaal spatbordbevestiging' : 'geen van alle heeft spatbordbevestiging');
  else prak.push('Spatborden: mogelijk op ' + cmpNames(gFd.get(true)) + ', niet op ' + cmpNames(gFd.get(false)) + '.');
  if (prak.length) secs.push({ i: '🔩', t: 'Praktisch', h: prak.join('<br>') });

  const gG = cmpGroupBy(list, b => b.geo);
  if (gG.size === 1) sims.push('allemaal ' + (cmpGeoLong[list[0].geo] || list[0].geo));
  else secs.push({ i: '🧭', t: 'Geometrie & rijstijl', h: [...gG.entries()].map(([k, v]) => (cmpGeoLong[k] || k) + ': ' + cmpNames(v)).join(' · ') + '.' });

  const ebs = list.filter(b => b.ebike);
  if (ebs.length >= 2) {
    const eParts = [];
    const nms = ebs.map(cmpNm).filter(v => v !== null);
    if (nms.length >= 2 && Math.min(...nms) !== Math.max(...nms)) {
      const lo = ebs.find(b => cmpNm(b) === Math.min(...nms)), hi = ebs.find(b => cmpNm(b) === Math.max(...nms));
      eParts.push('het motorkoppel loopt van ' + Math.min(...nms) + ' Nm (' + cmpStrong(lo) + ') tot ' + Math.max(...nms) + ' Nm (' + cmpStrong(hi) + ')');
    }
    const whs = ebs.map(cmpWh).filter(v => v !== null);
    if (whs.length >= 2 && Math.min(...whs) !== Math.max(...whs)) {
      const lo = ebs.find(b => cmpWh(b) === Math.min(...whs)), hi = ebs.find(b => cmpWh(b) === Math.max(...whs));
      eParts.push('de accucapaciteit van ' + Math.min(...whs) + ' Wh (' + cmpStrong(lo) + ') tot ' + Math.max(...whs) + ' Wh (' + cmpStrong(hi) + ')');
    }
    if (eParts.length) secs.push({ i: '⚡', t: 'E-bike systeem', h: 'Onder de e-bikes: ' + eParts.join('; ') + '. Meer koppel = krachtigere ondersteuning; meer Wh = groter bereik.' });
  }

  let intro;
  if (!secs.length) intro = '<div class="gk-cmp-intro">Deze ' + n + ' fietsen zijn op de belangrijkste specificaties vrijwel identiek (' + sims.join(' · ') + '). Het verschil zit vooral in merk, afwerking en design.</div>';
  else if (sims.length) intro = '<div class="gk-cmp-intro">Wat deze ' + n + ' fietsen <strong>gemeen</strong> hebben: ' + sims.join(' · ') + '. De échte verschillen zitten in: <strong>' + secs.map(s => s.t.toLowerCase()).join(', ') + '</strong>.</div>';
  else intro = '<div class="gk-cmp-intro">Deze ' + n + ' fietsen verschillen op vrijwel alle punten — dit zijn de belangrijkste:</div>';

  const secsHtml = secs.map(s => '<div class="gk-cmp-sec"><strong class="gk-cmp-t">' + s.i + ' ' + s.t + ':</strong> ' + s.h + '</div>').join('');

  let perBike = '';
  if (n <= 6) {
    const sorted = list.slice().sort((a, b) => a.price - b.price);
    perBike = '<div class="gk-cmp-bikes-title">Wat maakt elke fiets uniek?</div>' + sorted.map(b => {
      const tr = cmpTraits(b, list);
      const phr = tr.slice(0, 3).map(t => t.txt);
      const adv = tr.map(t => cmpAdvice[t.k]).filter(Boolean).slice(0, 2);
      const base = phr.length ? cmpJoin(phr) + '.' : 'zit qua prijs en uitrusting precies in het midden van deze selectie.';
      const advTxt = adv.length ? ' <em>Kies deze als je ' + adv.join(' en ') + '.</em>' : '';
      return '<div class="gk-cmp-bike"><strong>' + b.brand + ' ' + b.model + '</strong> (' + b.priceLabel + ', ' + b.weightLabel + ') — ' + base + advTxt + '</div>';
    }).join('');
  }

  const tip = n > 6 ? '<div class="gk-cmp-tip">💡 Met ' + n + ' fietsen blijft dit een globale vergelijking. Verfijn je filters tot zo’n 2–6 resultaten en je krijgt hier ook een vergelijking per fiets.</div>' : '';

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
  if(list.length === 0) { body.innerHTML = '<div class="gk-live-empty">Geen fietsen — pas de filters aan.</div>'; return; }
  body.innerHTML = list.slice().sort((a,b) => a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model)).map(b => {
    const ph = bikePhoto(b);
    const thumb = `<span class="gk-live-thumb">${ph ? `<img src="${ph}" alt="" loading="lazy" decoding="async" onerror="this.parentNode.textContent='🚵'">` : '🚵'}</span>`;
    return `<a class="gk-live-item" href="${b.url}" target="_blank" rel="noopener" title="Bekijk ${b.brand} ${b.model} op de website">${thumb}<span class="gk-live-text"><span class="gk-live-brand">${b.brand}${b.ebike ? ' <span class="gk-live-e">⚡</span>' : ''}</span><span class="gk-live-model">${b.model}</span></span><svg class="gk-live-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`;
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
    if(lbl) lbl.textContent = c ? 'Klap uit' : 'Klap in';
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
  if(sub) sub.textContent = `${total} modellen van ${brands} merken, allemaal te koop in Nederland (incl. ${ebikeCount} e-gravelbikes). Bijgewerkt juni 2026.`;
  const desc = document.getElementById('gk-ai-desc');
  if(desc) desc.textContent = `Stel een vraag in gewone taal en krijg een aanbeveling op basis van alle ${total} modellen — bijvoorbeeld over prijs, gewicht, vering of gebruik.`;
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
  b1:{ idx:1, label:'tot €2.000',    classes:['1','2'] },
  b2:{ idx:2, label:'€2.000–3.500',  classes:['3'] },
  b3:{ idx:3, label:'€3.500–5.000',  classes:['4'] },
  b4:{ idx:4, label:'€5.000+',       classes:['5','6'] }
};
function bikeBudgetIdx(p){ if(p<=2000) return 1; if(p<=3500) return 2; if(p<=5000) return 3; return 4; }

const USE_GEO = {
  bos:         { primary:'Adventure Gravel',      secondary:[],                                       label:'lekker toeren op bos &amp; zand' },
  bikepacking: { primary:'Bikepacking / Touring', secondary:['Adventure Gravel'],                     label:'rijden met tassen' },
  racen:       { primary:'Race Gravel',           secondary:[],                                       label:'hard fietsen' },
  events:      { primary:'Race Gravel',           secondary:['Adventure Gravel'],                     label:'wedstrijden &amp; events' },
  alles:       { primary:'Adventure Gravel',      secondary:['Race Gravel','Bikepacking / Touring'],  label:'een beetje van alles' }
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
const HEIGHT_LABEL  = { h1:'tot 165 cm', h2:'165–175 cm', h3:'175–185 cm', h4:'185 cm en langer' };
function sizeFits(b){
  if(!finder.height) return true;
  const r=bikeHeightRange(b); if(!r) return true; /* maat onbekend → niet afstraffen */
  const bk=HEIGHT_BUCKET[finder.height];
  return r[0] <= bk[1] && r[1] >= bk[0]; /* overlap rijderlengte ↔ fietsmaten */
}

const REGION_NAME = { maasduinen:'Maasduinen', veluwe:'Veluwe', limburg:'Zuid-Limburg', ardennen:'Ardennen', overal:'' };

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
  if(d===0){ budget=32; R.push({w:32,t:'Valt precies binnen je budget'}); }
  else if(d===-1){ budget=22; R.push({w:22,t:'Scherp geprijsd, onder je budget'}); }
  else if(d===1){ budget=13; R.push({w:13,t:'Net boven je budget'}); }
  else if(d===-2){ budget=9; R.push({w:9,t:'Ruim onder je budget'}); }
  else if(d===2){ budget=4; }
  else { budget=0; }

  /* Gebruik / geometrie — 24 */
  const ug = USE_GEO[finder.use];
  let geo;
  if(b.geo===ug.primary){ geo=24; R.push({w:30,t:'Geometrie past perfect bij '+ug.label}); }
  else if(ug.secondary.indexOf(b.geo)>=0){ geo=15; R.push({w:18,t:'Geschikte geometrie voor '+ug.label}); }
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
    R.push({w:14, t:{beginner:'Toegankelijke spec om mee te starten',gemiddeld:'Fijne allround middenklasse-spec',gevorderd:'Sportieve spec voor wie regelmatig rijdt',expert:'High-end spec voor maximale prestaties'}[finder.level]});
  }

  /* Maat — 12 (lengte → leverbare maat; verbergt niets, duwt alleen) */
  const fits = sizeFits(b);
  b._sizeFit = fits;
  const maat = fits ? 12 : 0;

  /* Voorkeur — 10 (gemiddeld/gevorderd: onderhoud · expert: fit-prioriteit + onderhoud samen) */
  const prefNudge=(kind)=>{
    if(kind==='weight'){ return {v:Math.round(10*light), r:lightB?'Licht — jouw prioriteit':null}; }
    if(kind==='speed'){ const race=b.geo==='Race Gravel'?1:0; return {v:Math.round(10*(0.6*race+0.4*light)), r:(race&&lightB)?'Snel & racegericht — jouw prioriteit':null}; }
    if(kind==='comfort'){ const c=(damp?0.4:0)+(b.maxTire>=45?0.35:b.maxTire>=42?0.18:0)+((b.geo==='Adventure Gravel'||b.geo==='Bikepacking / Touring')?0.25:0); return {v:Math.round(10*Math.min(1,c)), r:c>=0.5?'Comfortabel — jouw prioriteit':null}; }
    if(kind==='mounts'){ const m=(b.mounts?0.6:0)+(b.geo==='Bikepacking / Touring'?0.4:0); return {v:Math.round(10*Math.min(1,m)), r:b.mounts?'Veel montagemogelijkheden — jouw prioriteit':null}; }
    if(kind==='low'){ return {v:Math.min(10,(b.electronic?0:5)+(b.drivetrain==='1x'?5:2)), r:!b.electronic?('Onderhoudsarm: mechanisch'+(b.drivetrain==='1x'?' 1×':'')):null}; }
    if(kind==='tech'){ return {v:Math.min(10,(b.electronic?7:0)+(b.integrated?3:0)), r:b.electronic?'Nieuwste techniek: draadloos schakelen':null}; }
    if(kind==='perf'){ return {v:Math.round(10*(0.6*light+0.4*(groupRank(b)>=4?1:groupRank(b)>=3?0.5:0))), r:(lightB&&groupRank(b)>=4)?'Licht & high-end groepset':null}; }
    if(kind==='value'){ return {v:Math.round(10*valuePct(b)), r:valuePct(b)>=0.6?'Sterke prijs-kwaliteit':null}; }
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
  if(regHit && REGION_NAME[reg]) R.push({w:13,t:'Geschikt voor de '+REGION_NAME[reg]});

  /* Extra navolgbare pluspunten */
  if(wide) R.push({w:11,t:'Veel bandruimte: '+b.maxTire+' mm'});
  if(b.electronic) R.push({w:10,t:'Toekomstbestendige draadloze groepset'});
  if(b.mounts && finder.use!=='bikepacking' && !(finder.level==='expert'&&finder.fitprio==='mounts')) R.push({w:9,t:'Montagepunten voor bagage & spatborden'});

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
    maasduinen:'In de Maasduinen rijd je veel los zand en bospaden — brede banden (45 mm+) en wat extra comfort maken hier echt het verschil.',
    veluwe:'Op de Veluwe heb je zand- en boswegen — comfort en grip lonen hier, dus ga voor wat bredere banden.',
    limburg:'In Zuid-Limburg gaat het flink op en neer — een lichte fiets met voldoende lage versnellingen klimt een stuk fijner.',
    ardennen:'In de Ardennen maak je lange, stevige klimmen — gewicht en een ruime overbrenging tellen hier echt mee.',
    overal:''
  }[finder.region] || '';
}

function currentTip(){
  return {
    race:'Kom je van een racefiets, dan voelen de bredere banden en de iets rustigere stuurhouding even wennen — maar je wint flink aan comfort en grip op los terrein.',
    mtb:'Kom je van de mountainbike, dan voelt een gravelbike kwiek en snel op de weg; je zit sportiever en rolt een stuk vlotter.',
    oldgravel:'Stap je over van een oudere gravelbike, dan vallen vooral de ruimere bandruimte, modernere groepset en het lagere gewicht op.',
    none:'Is dit (zo goed als) je eerste fiets, dan zit je hiermee meteen goed: veelzijdig, vergevingsgezind en klaar om kilometers te maken.'
  }[finder.current] || '';
}

/* Waarom #1 boven #2? — concrete verschillen */
function advEdge(a,b){
  const e=[];
  if(a.maxTire>=b.maxTire+3) e.push('meer bandruimte ('+a.maxTire+' vs '+b.maxTire+' mm)');
  if(bikeWeight(a)+0.3<bikeWeight(b)) e.push('een lichter frame');
  if(a.mounts&&!b.mounts) e.push('meer montagepunten voor bagage');
  if(hasDamping(a)&&!hasDamping(b)) e.push('demping voor extra comfort');
  if(groupRank(a)>groupRank(b)) e.push('een hogere groepset');
  if(a.price<=b.price*0.92) e.push('een scherpere prijs');
  if(a.electronic&&!b.electronic) e.push('draadloos schakelen');
  return e;
}
function joinNl(arr){ return arr.length<=1 ? (arr[0]||'') : arr.slice(0,-1).join(', ')+' en '+arr[arr.length-1]; }

function buildAdvice(top, second){
  const ug=USE_GEO[finder.use], bb=BUDGET_BANDS[finder.budget];
  const frameRec={beginner:'een betrouwbare aluminium of instap-carbon',gemiddeld:'een degelijke carbon of topklasse aluminium',gevorderd:'een lichte carbon',expert:'een lichtgewicht carbon'}[finder.level];
  const tireRec=(finder.use==='bikepacking'||finder.use==='bos')?45:(finder.use==='racen'?40:42);
  const regName=REGION_NAME[finder.region];
  const where=regName?` in de <strong>${regName}</strong>`:'';
  const tip=regionTip(), cur=currentTip();
  if(!top){
    return `<div class="gk-advice-head"><span class="gk-fi-logo">${gorillaMini()}</span> Gorilla zegt</div>
      <p>Ik kon geen fiets vinden die goed bij deze combinatie past — probeer een ruimer budget of een ander gebruik.</p>`;
  }
  let lead = `Voor iemand zoals jij die vooral <strong>${ug.label}</strong>${where} wil en <strong>${bb.label}</strong> te besteden heeft, ga ik voor ${frameRec} <strong>${ug.primary}</strong>-gravelbike met minstens <strong>${tireRec} mm</strong> bandruimte. Mijn nummer 1 is de <strong>${top.brand} ${top.model}</strong> (${top.priceLabel}) met een Match Score van <strong>${top._sc.score}%</strong>.`;
  let vs='';
  if(second){
    const edge=advEdge(top,second);
    vs = edge.length
      ? ` Ik zou de <strong>${top.brand} ${top.model}</strong> boven de <strong>${second.brand} ${second.model}</strong> (${second._sc.score}%) kiezen: je krijgt ${joinNl(edge.slice(0,2))}.`
      : ` De <strong>${top.brand} ${top.model}</strong> en de <strong>${second.brand} ${second.model}</strong> (${second._sc.score}%) ontlopen elkaar weinig — de eerste wint het net op de totale match.`;
  }
  return `<div class="gk-advice-head"><span class="gk-fi-logo">${gorillaMini()}</span> Gorilla zegt</div>
    <p>${lead}${vs}</p>
    ${cur?`<div class="gk-advice-tip">🚲 ${cur}</div>`:''}
    ${tip?`<div class="gk-advice-tip">📍 ${tip}</div>`:''}`;
}

function finderCard(b){
  const sc=b._sc;
  const tier=sc.score>=85?'perfect':sc.score>=70?'sterk':'kan';
  const tierLabel={perfect:'Perfecte match',sterk:'Sterke keuze',kan:'Kan, niet optimaal'}[tier];
  const sizeBadge = finder.height
    ? (b._sizeFit
        ? `<div class="gk-fsize gk-fsize-ok">✓ Leverbaar in jouw maat (${HEIGHT_LABEL[finder.height]})</div>`
        : `<div class="gk-fsize gk-fsize-no">⚠️ Wellicht niet in jouw maat — check maatadvies bij ${shopName(b)}</div>`)
    : '';
  return `<div class="gk-fcard gk-f-${tier}${finder.height&&!b._sizeFit?' gk-f-nosize':''}">
    <div class="gk-fscore-wrap"><div class="gk-fscore">🦍 ${sc.score}%</div><div class="gk-ftier">${tierLabel}</div></div>
    ${bikeThumb(b)}
    <div class="gk-brand">${b.brand}</div>
    <div class="gk-model">${b.model}</div>
    <div><span class="gk-geo-tag ${geoClass(b.geo)}">${b.geo}</span></div>
    <div class="gk-fprice">${b.priceLabel} · ⚖️ ${b.weightLabel} · ${groupLabel(b)}${isXplr(b) ? ' <span class="gk-spec-xplr">XPLR</span>' : ''}${isGrx(b) ? ' <span class="gk-spec-grx">GRX</span>' : ''}</div>
    ${sizeBadge}
    <div class="gk-freasons-lbl">Waarom de Gorilla deze kiest</div>
    <ul class="gk-freasons">${sc.reasons.map(r=>`<li>${r}</li>`).join('')}</ul>
    <a class="gk-buy-btn" href="${b.url}" target="_blank" rel="noopener">Bekijk prijs bij ${shopName(b)}</a>
    <button class="gk-cmpsel" type="button" data-key="${b.brand}|${b.model}" onclick="toggleCmpSel(this.dataset.key,this)" aria-pressed="false" title="Selecteer om naast elkaar te vergelijken (max. 4)">⇄ Vergelijk</button>
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
    <div class="gk-top3-title">Waarom deze top 3? Vergelijk op wat telt</div>
    <div class="gk-top3-sub">Hoger = beter. Zo zie je meteen waar nummer 1 wint en waar nummer 2 of 3 jou misschien juist beter past.</div>
    <table class="gk-t3tbl"><thead>${head}</thead><tbody>
      ${t3row('🛋️ Comfort', ax.map(a=>a.comfort))}
      ${t3row('🚀 Snelheid', ax.map(a=>a.snelheid))}
      ${t3row('🎒 Bikepacking', ax.map(a=>a.bikepack))}
      ${t3row('💰 Prijs-kwaliteit', ax.map(a=>a.value))}
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
    ? 'Geen fietsen gevonden binnen dit budget — probeer een ruimere budgetklasse'
    : strong.length>=3
      ? `${strong.length} fietsen passen binnen je budget én bij jouw profiel — de top ${list.length} hieronder`
      : `Beperkte match binnen je budget — ik toon de ${list.length} best passende fietsen`)
    + (overBudget>0 ? ` · ${overBudget} fietsen boven je budget laat ik weg` : '');

  const top3=document.getElementById('finder-top3');
  top3.innerHTML = (finder.level==='gevorderd'||finder.level==='expert') ? buildTop3(list) : '';

  const grid=document.getElementById('finder-grid');
  grid.innerHTML = list.length ? list.map(finderCard).join('') : '<div class="gk-fempty">Geen passende fietsen gevonden. Probeer een ander budget of gebruik.</div>';
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
      if(n) n.textContent = 'Maximaal 4 — haal er eerst één weg';
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
    el.textContent = on ? '✓ In vergelijking' : '⇄ Vergelijk';
  });
  const bar = document.getElementById('gk-cmpbar');
  if(!bar) return;
  bar.classList.toggle('show', cmpSel.length > 0);
  const btn = document.getElementById('gk-cmpbar-btn');
  const note = document.getElementById('gk-cmpbar-note');
  if(!btn || !note) return;
  btn.disabled = cmpSel.length < 2;
  btn.textContent = '⇄ Vergelijk ' + cmpSel.length + (cmpSel.length === 1 ? ' fiets' : ' fietsen');
  note.textContent = cmpSel.length === 1 ? 'Kies er nog minstens één' : (cmpSel.length >= 4 ? 'Maximum bereikt (4)' : '');
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
  const head = '<tr><td></td>' + sel.map(b => '<th><div class="gk-cmpm-thumb">' + bikeThumb(b) + '</div><div class="gk-cmpm-name">' + b.brand + '<br>' + b.model + '</div><button class="gk-cmpm-rm" type="button" data-key="' + cmpKey(b) + '" onclick="toggleCmpSel(this.dataset.key,this); if(cmpSel.length>=2) openCmpModal(); else closeCmpModal();">× verwijderen</button></th>').join('') + '</tr>';
  const anyE = sel.some(b => b.ebike);
  const rows = [
    cmpRowVals('Prijs', sel, b => b.priceLabel, b => -b.price),
    cmpRowVals('Geometrie', sel, b => '<span class="gk-geo-tag ' + geoClass(b.geo) + '">' + b.geo + '</span>'),
    cmpRowVals('Frame', sel, b => b.frame),
    cmpRowVals('Gewicht', sel, b => b.weightLabel, b => bikeWeight(b) === 99 ? null : -bikeWeight(b)),
    cmpRowVals('Afmontage', sel, b => groupLabel(b) + (isXplr(b) ? ' <span class="gk-spec-xplr">XPLR</span>' : '') + (isGrx(b) ? ' <span class="gk-spec-grx">GRX</span>' : '')),
    cmpRowVals('Cassette', sel, b => speedCount(b) ? speedCount(b) + ' speed' : '—', b => speedCount(b)),
    cmpRowVals('Schakelen', sel, b => b.electronic ? '⚡ Elektronisch' : '⚙️ Mechanisch'),
    cmpRowVals('Aandrijving', sel, b => driveLabel(b.drivetrain)),
    cmpRowVals('Max. band', sel, b => b.maxTire + ' mm', b => b.maxTire),
    cmpRowVals('Wielset', sel, b => b.wheelBrand + ' (' + b.wheels + ')'),
    cmpRowVals('Wielsetgewicht', sel, b => { const s = wheelSpecs[b.wheelBrand]; return (s && s.weight) ? s.weight : 'onbekend'; }, b => { const v = wheelWeightVal(b); return v === null ? null : -v; }),
    cmpRowVals('Framematen', sel, b => sizesLabel(b)),
    anyE ? cmpRowVals('Motor', sel, b => b.motor || '—') : '',
    anyE ? cmpRowVals('Accu', sel, b => b.battery || '—') : '',
    cmpRowVals('Montagepunten', sel, b => yn(b.mounts)),
    cmpRowVals('Spatborden', sel, b => yn(b.fender)),
    cmpRowVals('Demping', sel, b => hasDamping(b) ? b.damping : '—'),
    cmpRowVals('Tubeless', sel, b => yn(b.tubeless)),
    cmpRowVals('Modeljaar', sel, b => b.year),
    '<tr><td></td>' + sel.map(b => '<td><a class="gk-cmpm-buy" href="' + b.url + '" target="_blank" rel="noopener">Bekijk bij ' + shopName(b) + '</a></td>').join('') + '</tr>'
  ].join('');
  body.innerHTML = '<div class="gk-top3-title" style="margin-bottom:10px;">Vergelijk jouw selectie (' + sel.length + ')</div><table class="gk-cmpm-tbl"><tbody>' + head + rows + '</tbody></table><div class="gk-wheel-note" style="margin-top:8px;">✓ = beste waarde in die rij (laagste prijs/gewicht, meeste bandruimte).</div>';
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
  wrap.innerHTML = '<div class="gk-refine-title">🔧 Verfijn je advies <span>(optioneel — je resultaten passen zich direct aan)</span></div>';
  reg.parentNode.insertBefore(wrap, reg.nextSibling);
  REFINE_STEPS.forEach(k => { const e = document.getElementById('fstep-' + k); if(e) wrap.appendChild(e); });
})();

render();
switchTab('finder');
