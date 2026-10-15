/* gravelbike-kiezer — gemaakt door .claude/kiezer-importeren.ps1 uit gravelbike-kiezer.html */
const bikes = [
  { brand:"Canyon", model:"Grail CF 7", frame:"carbon", wheels:"carbon", wheelBrand:"NEWMEN Advanced G.34", maxTire:57, priceClass:3, price:2499, priceLabel:"~€2.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"GRX RX610/822 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2027, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Entry point to the new Grail (2027): carbon frame with room for 57 mm tyres, carbon NEWMEN wheels and mechanical GRX 1×12. Fast on gravel, comfortable thanks to the VCLS seatpost.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf/grail-cf-7/4508.html" },
  { brand:"Canyon", model:"Grail CF 7 Speed", frame:"carbon", wheels:"carbon", wheelBrand:"Canyon GR 50 CF", maxTire:57, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,2 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2027, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"New Grail with wireless SRAM Rival XPLR AXS (1×13), 50 mm deep carbon wheels and room for 57 mm tyres. Gear Groove cockpit for a handlebar bag.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf/grail-cf-7-speed/4509.html" },
  { brand:"Canyon", model:"Grail CF SLX 7 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Canyon GR 50 CF", maxTire:57, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,6 kg", group:"GRX Di2 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2027, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Lighter CF SLX frame with electronic GRX Di2 (1×12, 10-51), carbon wheels and room for 57 mm tyres. Storage compartment in the down tube.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf-slx/grail-cf-slx-7-di2/4503.html" },
  { brand:"Canyon", model:"Grail CF SLX 8 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1400", maxTire:57, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,9 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2027, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Race Grail with SRAM Force XPLR AXS (1×13) including a power meter, DT Swiss GRC 1400 carbon wheels and room for 57 mm tyres.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cf-slx/grail-cf-slx-8-axs/4505.html" },
  { brand:"Canyon", model:"Grail CFR Di2", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1100", maxTire:57, priceClass:5, price:6500, priceLabel:"~€6.500", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"GRX Di2 RX827 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2027, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top-tier frame (CFR) with GRX Di2 1×12, DT Swiss GRC 1100 carbon wheels and room for 57 mm tyres. Built for gravel racing.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cfr/grail-cfr-di2/4513.html" },
  { brand:"Canyon", model:"Grail CFR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss GRC 1100", maxTire:57, priceClass:6, price:8000, priceLabel:"~€8.000", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~8,0 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2027, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The lightest Grail (8.0 kg): CFR frame, SRAM RED XPLR AXS with power meter, DT Swiss GRC 1100 carbon wheels and room for 57 mm tyres.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/race/grail/cfr/grail-cfr-axs/4510.html" },
  { brand:"Canyon", model:"Grizl CF 6", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss Gravel LN", maxTire:54, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"SRAM", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The most affordable carbon Grizl: SRAM Apex XPLR 1×12, DT Swiss wheels and 54 mm tyre clearance, with front and rear rack mounts.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-6/4552.html" },
  { brand:"Canyon", model:"Grizl CF 7", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:54, priceClass:3, price:2399, priceLabel:"~€2.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX 822", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Grizl with Shimano GRX 822 1×12 and 54 mm tyre clearance. A robust all-rounder for coarse gravel, forest paths and long adventures.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/og/grizl-cf-7/4167.html" },
  { brand:"Canyon", model:"Grizl CF 7 ESC", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:54, priceClass:3, price:2799, priceLabel:"~€2.799", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,2 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Escape version ('Full Mounty') with GRX 822 1×12: extra mounts and bikepacking gear for multi-day trips.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/escape/grizl-cf-7-esc/4142.html" },
  { brand:"Canyon", model:"Grizl CF 7 AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss G 1800", maxTire:54, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Grizl with wireless SRAM Rival XPLR AXS (1×13), DT Swiss G 1800 wheels and the flexing VCLS 2.0 seatpost. 54 mm tyre clearance.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-7-axs/4554.html" },
  { brand:"Canyon", model:"Grizl CF 8 w/ RIFT", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:54, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"RIFT suspension fork (40 mm)", tubeless:true, ebike:false, geoDesc:"Grizl with RIFT suspension fork (40 mm) and wireless SRAM Rival XPLR AXS (1×13). Damping and grip for technical terrain.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-8-w%2F-rift/4145.html" },
  { brand:"Canyon", model:"Grizl CF 8 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Canyon GR 30 CF", maxTire:54, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,1 kg", group:"XT Di2 M8250 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Grizl with electronic Shimano Di2 (XT rear derailleur, 1×12) and carbon Canyon GR 30 wheels. 54 mm tyre clearance for long, rough rides.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-8-di2/4556.html" },
  { brand:"Canyon", model:"Grizl CF 8 ESC w/ ECLIPS", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:54, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,6 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Escape model with an integrated ECLIPS light and dynamo system and GRX 822. Self-sufficient on long bikepacking adventures, day and night.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-8-esc-w%2F-eclips/4144.html" },
  { brand:"Canyon", model:"Grizl CF 9 w/ ECLIPS", frame:"carbon", wheels:"carbon", wheelBrand:"Carbon wheelset", maxTire:54, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"RED XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"3XS–2XL", sizeList:["3XS","2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top Grizl with SRAM RED XPLR AXS (1×13), carbon wheels and ECLIPS lighting. A light adventure racer for ultra events.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/cf/grizl-cf-9-w%2F-eclips/4146.html" },
  { brand:"Canyon", model:"Grizl 5", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1299, priceLabel:"~€1.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,3 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"New aluminium Grizl frame (120 g lighter than before) with Shimano CUES and hydraulic disc brakes. An affordable entry point with the same 54 mm tyre clearance as the carbon models.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-5/4443.html" },
  { brand:"Canyon", model:"Grizl 6", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1799, priceLabel:"~€1.799", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The updated aluminium Grizl (10.5 kg) with SRAM Apex XPLR 1×12 and 54 mm tyre clearance. One bike for commuting, gravel and bikepacking.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-6/4444.html" },
  { brand:"Canyon", model:"Grizl 7 ESC", frame:"aluminium", wheels:"aluminium", wheelBrand:"Alex GVX24P", maxTire:54, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"GRX 822", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"2XS–2XL", sizeList:["2XS","XS","S","M","L","XL","2XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium Escape version ('Full Mounty') with GRX 822 1×12 and a complete mounting kit. An adventurous all-rounder at a keen price.", url:"https://www.canyon.com/nl-nl/gravel-fietsen/adventure/grizl/al/grizl-7-esc/4445.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF 8", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss HG 1800", maxTire:50, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~16,4 kg", group:"CUES 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"DT Swiss F 132 ONE (40 mm)", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"Light e-gravel bike (16.4 kg) with Bosch SX motor, 400 Wh battery, 40 mm suspension fork and fitted mudguards. Shimano CUES 1×11.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-8/4280.html" },
  { brand:"Canyon", model:"Grizl:ONfly CF 9", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss HGC 1800", maxTire:50, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:4, weightLabel:"~15,9 kg", group:"Rival AXS / S1000 Eagle AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"DT Swiss F 132 ONE (40 mm)", tubeless:true, ebike:true, motor:"Bosch Performance SX (55 Nm)", battery:"400 Wh", geoDesc:"Top e-gravel model (15.9 kg) with Bosch SX, 40 mm suspension fork, wireless SRAM AXS (1×12), carbon DT Swiss wheels and fitted mudguards.", url:"https://www.canyon.com/nl-nl/elektrische-fiets/elektrische-gravel-fietsen/grizl-on/grizl-onfly-cf-9/4281.html" },
  { brand:"Trek", model:"Checkpoint ALR 3 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1299, priceLabel:"~€1.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"CUES U6000 1x10", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The most affordable Checkpoint Gen 3: aluminium frame, carbon fork and indestructible Shimano CUES 1×10 with LinkGlide. 50 mm tyre clearance and plenty of mounts.", url:"https://www.trekbikes.com/nl/nl_NL/p/49944/" },
  { brand:"Trek", model:"Checkpoint ALR 4 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"CUES U8000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium Gen 3 with Shimano CUES U8000 1×11 and hydraulic brakes. The same Gravel Endurance geometry and mounts as the pricier models.", url:"https://www.trekbikes.com/nl/nl_NL/p/49973/" },
  { brand:"Trek", model:"Checkpoint ALR 5 Gen 3", frame:"aluminium", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"SRAM", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Apex XPLR", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top model of the aluminium line with mechanical SRAM Apex XPLR 1×12 (9.9 kg). Ready for a dropper and a suspension fork up to 40 mm travel.", url:"https://www.trekbikes.com/nl/nl_NL/p/49946/" },
  { brand:"Trek", model:"Checkpoint SL 5 AXS Gen 3", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm 23", maxTire:50, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"Apex XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (rear)", tubeless:true, ebike:false, geoDesc:"Carbon Checkpoint with wireless SRAM Apex XPLR AXS (1×12) and IsoSpeed damping. Internal storage and 50 mm tyre clearance for long adventures.", url:"https://www.trekbikes.com/nl/nl_NL/p/47071/" },
  { brand:"Trek", model:"Checkpoint SL 6 AXS Gen 3", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (rear)", tubeless:true, ebike:false, geoDesc:"Wireless Rival XPLR AXS (1×13) on the comfortable Gen 3 frame with IsoSpeed and internal storage. A versatile carbon all-rounder.", url:"https://www.trekbikes.com/nl/nl_NL/p/55098/" },
  { brand:"Trek", model:"Checkpoint SL 7 AXS Gen 3", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Elite 35V", maxTire:50, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"IsoSpeed (rear)", tubeless:true, ebike:false, geoDesc:"Top Checkpoint with SRAM Force XPLR AXS (1×13) and carbon Aeolus Elite 35V wheels. Comfort, storage and speed in one package.", url:"https://www.trekbikes.com/nl/nl_NL/p/55097/" },
  { brand:"Trek", model:"Checkmate SLR 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Pro 3V", maxTire:45, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"A pure gravel racer: 800 Series OCLV frame, Force XPLR AXS (1×13) with power meter and Aeolus Pro 3V carbon wheels. Aero Full System Foil tubes and aggressive Gravel Race geometry.", url:"https://www.trekbikes.com/nl/nl_NL/p/58668/" },
  { brand:"Trek", model:"Checkmate SLR 9 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus RSL 37V", maxTire:45, priceClass:6, price:9499, priceLabel:"~€9.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Trek's fastest and lightest gravel bike ever (7.6 kg): RED XPLR AXS 1×13, power meter and Aeolus RSL 37V. Uncompromising racing with tyres up to 45 mm.", url:"https://www.trekbikes.com/nl/nl_NL/p/46152/" },
  { brand:"Trek", model:"Check-OUT SL 5", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:56, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,0 kg", group:"GRX 822", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Full suspension (front + rear)", tubeless:true, ebike:false, geoDesc:"Full-suspension gravel adventurer with mechanical GRX 1×12 and a rear rack. MTB capability with drop-bar speed and 56 mm tyre clearance.", url:"https://www.trekbikes.com/nl/nl_NL/p/57827/" },
  { brand:"Trek", model:"Check-OUT SL 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Pro 3V", maxTire:56, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~11,3 kg", group:"X0 Eagle AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Full suspension (front + rear)", tubeless:true, ebike:false, geoDesc:"Trek's first full-suspension gravel bike, with SRAM X0 AXS Transmission, carbon wheels and 56 mm tyre clearance. For extreme terrain and ultra adventures.", url:"https://www.trekbikes.com/nl/nl_NL/p/57828/" },
  { brand:"Trek", model:"Checkpoint+ SL 5", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,8 kg", group:"GRX 820 1x", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (rear)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"Electric Checkpoint with TQ HPR60 mid motor (360 Wh) and mechanical GRX 1×12. Natural assistance up to 25 km/h, IsoSpeed comfort and 50 mm tyres.", url:"https://www.trekbikes.com/nl/nl_NL/p/57446/" },
  { brand:"Trek", model:"Checkpoint+ SL 6 AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Bontrager Paradigm Comp 25", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,8 kg", group:"Rival/GX AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (rear)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"E-gravel with a wireless SRAM Rival/GX Eagle AXS mullet and TQ HPR60 motor. Quiet, light and around 80 km of range in Eco mode.", url:"https://www.trekbikes.com/nl/nl_NL/p/57441/" },
  { brand:"Trek", model:"Checkpoint+ SL 7 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Bontrager Aeolus Elite 35V", maxTire:50, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~14,1 kg", group:"Force AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"IsoSpeed (rear)", tubeless:true, ebike:true, motor:"TQ HPR60 (60 Nm)", battery:"360 Wh", geoDesc:"Top e-Checkpoint with SRAM Force AXS, carbon Aeolus wheels and TQ HPR60 (360 Wh). Premium e-gravel for long days in the saddle.", url:"https://www.trekbikes.com/nl/nl_NL/p/57447/" },
  { brand:"Specialized", model:"Diverge 3 Alloy", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:47, priceClass:2, price:1549, priceLabel:"~€1.549", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"CUES U6000 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Entry-level Diverge on the previous (gen 3) aluminium platform with Shimano CUES. An affordable starting point with 47 mm tyre clearance and mounts.", url:"https://www.specialized.com/nl/nl/diverge-3-alloy-shimano-cues/p/4223510" },
  { brand:"Specialized", model:"Diverge 4 Sport Alloy", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:50, priceClass:3, price:2299, priceLabel:"~€2.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"New Diverge 4 in aluminium with Shimano CUES and Future Shock damping. 50 mm tyre clearance and SWAT mounts: adventure without a high price.", url:"https://www.specialized.com/nl/nl/diverge-4-sport-alloy-shimano-cues/p/4223511" },
  { brand:"Specialized", model:"Diverge 4 Comp Alloy", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:50, priceClass:3, price:2799, priceLabel:"~€2.799", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,1 kg", group:"Apex 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"Aluminium Diverge 4 with mechanical SRAM Apex 1×12 and Future Shock. A light, complete gravel all-rounder.", url:"https://www.specialized.com/nl/nl/diverge-4-comp-alloy-sram-apex/p/4223512" },
  { brand:"Specialized", model:"Diverge 4 Sport Carbon", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:50, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,7 kg", group:"GRX 610", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"Carbon Diverge 4 with Shimano GRX 610 2×12. Future Shock, SWAT 4.0 storage and 50 mm tyres for any adventure.", url:"https://www.specialized.com/nl/nl/diverge-4-sport-carbon-shimano-grx-600/p/4223514" },
  { brand:"Specialized", model:"Diverge 4 Comp Carbon", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:50, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"Apex AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"Wireless SRAM Apex AXS on the new carbon Diverge 4 frame with Future Shock and bigger SWAT 4.0 storage. Versatile and modern.", url:"https://www.specialized.com/nl/nl/diverge-4-comp-carbon-sram-apex-axss1000/p/4223513" },
  { brand:"Specialized", model:"Diverge 4 Expert (Rival XPLR)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:50, priceClass:5, price:6299, priceLabel:"~€6.299", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"Race-ready Diverge 4 with wireless Rival XPLR AXS (1×13) and carbon Roval wheels. The fastest Diverge generation ever, with 50 mm tyre clearance.", url:"https://www.specialized.com/nl/nl/diverge-4-expert-sram-rival-xplr/p/4293758" },
  { brand:"Specialized", model:"Diverge 4 Expert (GRX Di2)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:50, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"Shimano", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX Di2 RX825", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"Electronic GRX Di2 2×12 on the Diverge 4 Expert (8.9 kg) with carbon Roval wheels. Equally suited to racing and adventure.", url:"https://www.specialized.com/nl/nl/diverge-4-expert-shimano-grx-di2/p/4279306" },
  { brand:"Specialized", model:"Diverge 4 Pro", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:50, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,4 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"Top model with SRAM Force XPLR AXS (1×13), Roval Terra CLX carbon and Future Shock. Built for gravel races like Unbound.", url:"https://www.specialized.com/nl/nl/diverge-4-pro-sram-force-xplr/p/4293747" },
  { brand:"Specialized", model:"Diverge 4 Pro LTD", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:50, priceClass:6, price:9999, priceLabel:"~€9.999", shifting:"Shimano", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,3 kg", group:"XTR/GRX Di2", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"A limited edition with a wireless Shimano XTR/GRX Di2 mix, only available online. The very best of the new Diverge 4 platform.", url:"https://www.specialized.com/nl/nl/diverge-4-pro-ltd-shimano-xtrgrx-di2/p/4296390" },
  { brand:"Specialized", model:"S-Works Diverge 4", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX III", maxTire:50, priceClass:6, price:13999, priceLabel:"~€13.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,2 kg", group:"RED XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock (front)", tubeless:true, ebike:false, geoDesc:"The S-Works flagship of the Diverge 4: SRAM RED XPLR AXS (1×13), Roval Terra CLX III wheels, Future Shock 3.3 (20 mm) and SWAT storage in the frame.", url:"https://www.specialized.com/nl/nl/s-works-diverge-4-sram-red-xplr/p/4298775" },
  { brand:"Specialized", model:"Crux DSW Comp", frame:"aluminium", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:47, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"SRAM", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Apex XPLR", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium Crux with D'Aluisio Smartweld welding and SRAM Apex XPLR 1×12. Light (around 9.3 kg), fast and relatively affordable.", url:"https://www.specialized.com/nl/nl/crux-dsw/p/4221804" },
  { brand:"Specialized", model:"Crux Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:47, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,7 kg", group:"GRX 820", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Previous-generation carbon Crux with GRX 820 2×12: cyclocross DNA, low weight and 47 mm tyre clearance.", url:"https://www.specialized.com/nl/nl/crux-comp-shimano-grx/p/4223490" },
  { brand:"Specialized", model:"Crux Expert", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,1 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Light carbon racer with wireless Rival XPLR AXS and Roval Terra C wheels. Razor-sharp on fast gravel courses.", url:"https://www.specialized.com/nl/nl/crux-expert-sram-rival-xplr-axs-/p/4223489" },
  { brand:"Specialized", model:"S-Works Crux", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX II", maxTire:47, priceClass:6, price:12999, priceLabel:"~€12.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,2 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"S-Works version of the previous Crux: FACT 12r frame, RED XPLR AXS and Terra CLX II wheels, around 7.2 kg.", url:"https://www.specialized.com/nl/nl/s-works-crux-sram-red-xplr/p/4223487" },
  { brand:"Specialized", model:"Crux 5 Sport", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:55, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX 820", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"New Crux 5 generation with no less than 55 mm tyre clearance and GRX 820 2×12. The legendary light ride feel, now with an aero gain.", url:"https://www.specialized.com/nl/nl/crux-5-sport-shimano-grx-800/p/4312531" },
  { brand:"Specialized", model:"Crux 5 Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"Aluminium wheelset", maxTire:55, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,6 kg", group:"Rival XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Crux 5 with wireless Rival XPLR AXS (1×13). Lightning fast, light and ready for tyres up to 55 mm.", url:"https://www.specialized.com/nl/nl/crux-5-comp-sram-rival-xplr/p/4294832" },
  { brand:"Specialized", model:"Crux 5 Expert", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C III", maxTire:55, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"An 8.2 kg light racer with Force XPLR AXS (1×13) and Roval Terra C III carbon wheels. Aero, light and well balanced.", url:"https://www.specialized.com/nl/nl/crux-5-expert-sram-force-xplr/p/4294830" },
  { brand:"Specialized", model:"Crux 5 S-Level", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:55, priceClass:6, price:10499, priceLabel:"~€10.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,5 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"An S-Works level frame with RED XPLR AXS (1×13) for a keener price than the full S-Works package.", url:"https://www.specialized.com/nl/nl/crux-5-s-level-sram-red-xplr/p/4294829" },
  { brand:"Specialized", model:"S-Works Crux 5", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX II", maxTire:55, priceClass:6, price:13999, priceLabel:"~€13.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:1, weightLabel:"~7,3 kg", group:"RED XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The absolute top: FACT 12r frame with 55 mm tyre clearance, RED XPLR AXS and Roval Terra CLX II. Specialized's lightest gravel race weapon.", url:"https://www.specialized.com/nl/nl/s-works-crux-5-sram-red-xplr/p/4294828" },
  { brand:"Specialized", model:"Turbo Creo 2 Comp E5", frame:"aluminium", wheels:"aluminium", wheelBrand:"DT Swiss G540", maxTire:47, priceClass:4, price:4599, priceLabel:"~€4.599", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~14,2 kg", group:"Apex Eagle 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (front)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Aluminium e-gravel with the Specialized SL 1.2 motor (320 Wh) and SRAM Apex Eagle. Tyres up to 47 mm and Future Shock 3.0 damping.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-comp-e5-sram-apex-eagle/p/4221861" },
  { brand:"Specialized", model:"Turbo Creo 2 Comp", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss G540", maxTire:47, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,6 kg", group:"Apex/X1 Eagle AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (front)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Carbon Turbo Creo 2 with SL 1.2 motor and wireless Apex/X1 Eagle AXS. Quiet, natural assistance for gravel and road.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-comp-sram-apex--x1-eagle-axs/p/4221866" },
  { brand:"Specialized", model:"Turbo Creo 2 Comp (GRX Di2)", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss G540", maxTire:50, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"Shimano", electronic:true, integrated:false, weightClass:4, weightLabel:"~14,7 kg", group:"GRX Di2 RX717 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:true, fender:true, damping:"Future Shock 3.0 (front)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Carbon Turbo Creo 2 with the quiet SL 1.2 motor (50 Nm), 320 Wh battery, electronic GRX Di2 (1×12) and 50 mm Tracer tyres. Mounts for mudguards and a rack.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-comp-shimano-grx-di2/p/4263260" },
  { brand:"Specialized", model:"Turbo Creo 2 Expert (GRX Di2)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:6, price:8499, priceLabel:"~€8.499", shifting:"Shimano", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,2 kg", group:"GRX Di2", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (front)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"E-gravel with electronic Shimano GRX Di2 and Future Shock 3.0. Light and sporty, with an optional range extender for extra range.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-expert-shimano-grx-di2/p/4221806" },
  { brand:"Specialized", model:"Turbo Creo 2 Expert (Rival/GX)", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra C", maxTire:47, priceClass:6, price:8499, priceLabel:"~€8.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,3 kg", group:"Rival/GX AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (front)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Expert version with a SRAM Rival/GX Eagle AXS mullet for extra climbing range on tough gravel routes.", url:"https://www.specialized.com/nl/nl/turbo-creo-2-expert-sram-rival--gx-eagle-axs/p/4221865" },
  { brand:"Specialized", model:"S-Works Turbo Creo 2", frame:"carbon", wheels:"carbon", wheelBrand:"Roval Terra CLX", maxTire:47, priceClass:6, price:12999, priceLabel:"~€12.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~12,6 kg", group:"RED/XX1 AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2024, mounts:true, fender:true, damping:"Future Shock 3.0 (front)", tubeless:true, ebike:true, motor:"Specialized SL 1.2 (50 Nm)", battery:"320 Wh", geoDesc:"Top e-gravel (around 12.6 kg) with SRAM RED/XX1 Eagle AXS and Roval Terra CLX wheels. Maximum performance with SL 1.2 assistance.", url:"https://www.specialized.com/nl/nl/s-works-turbo-creo-2-sram-red--xx1-eagle-axs/p/4221805" },
  { brand:"Cube", model:"Nuroad ONE", frame:"aluminium", wheels:"aluminium", wheelBrand:"ACID GR 2.5", maxTire:45, priceClass:1, price:799, priceLabel:"~€799", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,3 kg", group:"CUES U4000 1x9", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XL", sizeList:["XXS","XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The entry model in the Nuroad range: 6061 T6 alloy frame with carbon fork and Shimano CUES 1×9 for keen value. Up to 45 mm tyre clearance and plenty of mounts for saddle bags and bottles. A versatile, reliable gravel bike to start with.", url:"https://www.cube.eu/nl-nl/cube-nuroad-one-wood-n-grey/1135100" },
  { brand:"Cube", model:"Nuroad ONE FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"ACID GR 2.5", maxTire:45, priceClass:1, price:899, priceLabel:"~€899", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~14,6 kg", group:"CUES U4000 1x9", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The fully equipped Nuroad ONE: the same alloy base with CUES 1×9, but with fenders, rack, kickstand and lights as standard. Ready for commuting and bikepacking — all for under €1,000. An unbeatable entry point if you want to hit the road straight away.", url:"https://www.cube.eu/nl-nl/cube-nuroad-one-fe-wood-n-grey/1135150" },
  { brand:"Cube", model:"Nuroad Pro", frame:"aluminium", wheels:"aluminium", wheelBrand:"ACID Pro GR 2.5", maxTire:45, priceClass:2, price:1099, priceLabel:"~€1.099", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,4 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XXL", sizeList:["XXS","XS","S","M","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Aluminium Nuroad with Shimano CUES 1×11 and a cassette up to 50 teeth: easy climbing, simple maintenance. Carbon fork, 45 mm tyre clearance and mounts for bags, mudguards and a rack.", url:"https://www.cube.eu/nl-nl/cube-nuroad-pro-taiga-n-blue/1135200" },
  { brand:"Cube", model:"Nuroad Pro FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"ACID GR 2.5", maxTire:45, priceClass:2, price:1199, priceLabel:"~€1.199", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,3 kg", group:"CUES U6000 1x11", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Fully equipped Nuroad Pro: Shimano CUES 1×11 with mudguards, rack, kickstand and lights fitted. Ready for commuting and bikepacking, with 45 mm tyre clearance.", url:"https://www.cube.eu/nl-nl/cube-nuroad-pro-fe-taiga-n-blue/1135250" },
  { brand:"Cube", model:"Nuroad EX", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Performance X.R.25", maxTire:45, priceClass:2, price:1299, priceLabel:"~€1.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XXL", sizeList:["XXS","XS","S","M","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"A step up to Shimano GRX 600/RX610 1×12 with Newmen wheels — smoother shifting and a lighter ride. Keeps the versatile Nuroad base with mounts and 45 mm tyre clearance. A great choice if the Nuroad is your first real gravel bike.", url:"https://www.cube.eu/nl-nl/cube-nuroad-ex-oatgrey-n-black/1135300" },
  { brand:"Cube", model:"Nuroad Race", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Performance X.R.25", maxTire:50, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"GRX RX610/RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XXL", sizeList:["XS","S","M","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Fast aluminium Nuroad with Shimano GRX 2×12 (48/31 front, 11-36 rear) for small steps between gears on fast sections. 50 mm tyre clearance and mounts.", url:"https://www.cube.eu/nl-nl/cube-nuroad-race-inkgrey-n-grey/1135500" },
  { brand:"Cube", model:"Nuroad Race FE", frame:"aluminium", wheels:"aluminium", wheelBrand:"ACID Pro GR 2.5", maxTire:50, priceClass:2, price:1599, priceLabel:"~€1.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,7 kg", group:"GRX RX610/RX820 2x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"XS–XXL", sizeList:["XS","S","M","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Nuroad Race with GRX 2×12, but fitted as standard with mudguards, rack and lights. For riders who want speed and practicality: sporty commuter and bikepacker in one.", url:"https://www.cube.eu/nl-nl/cube-nuroad-race-fe-inkgrey-n-grey/1135550" },
  { brand:"Cube", model:"Nuroad SLX", frame:"aluminium", wheels:"aluminium", wheelBrand:"Newmen Performance X.R.25", maxTire:50, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~10,0 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XXL", sizeList:["XS","S","M","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top aluminium Nuroad with wireless SRAM Rival XPLR AXS (1×13) for under €2,000. 50 mm tyre clearance and options for mudguards and a rack.", url:"https://www.cube.eu/nl-nl/cube-nuroad-slx-spaceship-n-cmyk/1135600" },
  { brand:"Cube", model:"Nuroad C:62 ONE", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced G.34", maxTire:50, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Entry-level carbon Nuroad: C:62 frame with GRX 600/RX610 1×12 for under €2,000. Lighter and stiffer than the alloy frame while keeping the mounts and 50 mm tyre clearance. The best value for a carbon gravel bike.", url:"https://www.cube.eu/nl-nl/cube-nuroad-c-62-one-carbon-n-shiftverde/1136100" },
  { brand:"Cube", model:"Nuroad C:62 Pro", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced G.34", maxTire:50, priceClass:3, price:2499, priceLabel:"~€2.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,7 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Nuroad with Shimano GRX 820 2×12 and carbon Newmen wheels at 8.7 kg. 50 mm tyre clearance and mounts: fast yet versatile.", url:"https://www.cube.eu/nl-nl/cube-nuroad-c-62-pro-cedar-n-stone/1136200" },
  { brand:"Cube", model:"Nuroad C:62 Pro FE", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced G.34", maxTire:50, priceClass:3, price:2599, priceLabel:"~€2.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,2 kg", group:"GRX RX820 2x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon C:62 Nuroad in fully equipped trim: GRX 820 2×12 with fenders, rack and lights. A light carbon base with 50 mm tyre clearance for fast commutes and bikepacking. Versatility without a weight penalty.", url:"https://www.cube.eu/nl-nl/cube-nuroad-c-62-pro-fe-cedar-n-stone/1136250" },
  { brand:"Cube", model:"Nuroad C:62 EX", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced G.34", maxTire:50, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,7 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon Nuroad with electronic Shimano GRX Di2 RX825 1×12 and a monocoque cockpit. Wireless shifting on a light C:62 base with 50 mm tyre clearance and mounts. The most affordable electronic 1× in the Nuroad range.", url:"https://www.cube.eu/nl-nl/cube-nuroad-c-62-ex-surfblue-n-black/1136300" },
  { brand:"Cube", model:"Nuroad C:62 EXC", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced G.34", maxTire:50, priceClass:3, price:3299, priceLabel:"~€3.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"A keenly priced carbon racer with wireless SRAM Force XPLR AXS 13-speed, power meter and Newmen Advanced G.34 carbon wheels. Gravel-specific 1×13 gearing on a light C:62 frame with 50 mm tyre clearance. A lot of high-end groupset for the money.", url:"https://www.cube.eu/nl-nl/cube-nuroad-c-62-exc-wolf-n-fibre/1136400" },
  { brand:"Cube", model:"Nuroad C:62 Race", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced SL X.R.36", maxTire:50, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,3 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"A race-oriented carbon Nuroad with electronic GRX Di2 RX825 2×12 and a monocoque cockpit. Fast, sharp and with the new 2026 aero details. For anyone who wants race performance and wireless shifting without the top price.", url:"https://www.cube.eu/nl-nl/cube-nuroad-c-62-race-jungali-n-black/1136500" },
  { brand:"Cube", model:"Nuroad C:62 SLX", frame:"carbon", wheels:"carbon", wheelBrand:"Zipp 303 XPLR S", maxTire:50, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"Force XPLR / GX Eagle AXS 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"An aero-oriented carbon racer with SRAM Force XPLR AXS shifters and a GX Eagle AXS Transmission mullet for an extra-wide range (1×12), Force crank with power meter and aerodynamic Zipp 303 XPLR S carbon wheels. For anyone who wants maximum climbing range and speed.", url:"https://www.cube.eu/nl-nl/cube-nuroad-c-62-slx-glintsand-n-black/1136600" },
  { brand:"Cube", model:"Nuroad C:62 SLT", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Streem G.62", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~8,0 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Flagship with SRAM Red XPLR AXS 13-speed including a power meter and deep Newmen Streem G.62 carbon wheels with carbon spokes. 8.0 kg: one of the keenest-priced high-end carbon gravel bikes.", url:"https://www.cube.eu/nl-nl/cube-nuroad-c-62-slt-glacier-n-magenta/1136900" },
  { brand:"Cube", model:"Nuroad Hybrid C:62 Race 400X", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Evolution SL X.R.25", maxTire:50, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,7 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (60 Nm)", battery:"400 Wh", geoDesc:"Entry point to Cube's carbon e-gravel range: Bosch Performance SX (up to 60 Nm), 400 Wh battery and mechanical GRX 1×12 with a 10-51 cassette. 13.7 kg.", url:"https://www.cube.eu/nl-nl/cube-nuroad-hybrid-c-62-race-400x-oldgrey-n-grey/1117300" },
  { brand:"Cube", model:"Nuroad Hybrid C:62 EXC 400X", frame:"carbon", wheels:"aluminium", wheelBrand:"Newmen Evolution SL X.R.25", maxTire:50, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,7 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (60 Nm)", battery:"400 Wh", geoDesc:"Carbon e-gravel with Bosch Performance SX (up to 60 Nm), 400 Wh battery and wireless SRAM Rival XPLR AXS (1×13). 13.7 kg.", url:"https://www.cube.eu/nl-nl/cube-nuroad-hybrid-c-62-exc-400x-tropicalteal-n-black/1117400" },
  { brand:"Cube", model:"Nuroad Hybrid C:62 SLX 400X", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Advanced SL X.R.36", maxTire:50, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,3 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (60 Nm)", battery:"400 Wh", geoDesc:"Light carbon e-gravel with Bosch Performance SX (up to 60 Nm), electronic GRX Di2 RX825 and carbon Newmen wheels. 13.3 kg, up to 50 mm tyres and mounts for assisted bikepacking.", url:"https://www.cube.eu/nl-nl/cube-nuroad-hybrid-c-62-slx-400x-glintsand-n-black/1117600" },
  { brand:"Cube", model:"Nuroad Hybrid C:62 SLT 400X", frame:"carbon", wheels:"carbon", wheelBrand:"Newmen Streem G.62", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~12,9 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:true, motor:"Bosch Performance SX (60 Nm)", battery:"400 Wh", geoDesc:"Top model of Cube's e-gravel range: 12.9 kg with Bosch Performance SX, SRAM Force XPLR AXS (1×13) and deep carbon Newmen Streem wheels. Fast and assisted.", url:"https://www.cube.eu/nl-nl/cube-nuroad-hybrid-c-62-slt-400x-onyxfibre-n-blue/1117900" },
  { brand:"Cannondale", model:"Topstone 2 Cues", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,8 kg", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Entry-level Topstone with a SmartForm C2 alloy frame and Shimano CUES 1×11: affordable, reliable and with 47 mm tyre clearance. Plenty of mounts and fender eyelets make it suitable for commuting, gravel and light touring. The best budget Topstone.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone 2 GRX", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The first Topstone with real Shimano GRX (RX400 2×10): a wider range than CUES and gravel-specific shifters. Alloy frame, 47 mm tyres and extensive mounting options — a versatile step up.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23 TCS", maxTire:47, priceClass:3, price:2299, priceLabel:"~€2.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,0 kg", group:"GRX RX400 2x10", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Topstone with a full equipment package: fenders, rack, lights and kickstand as standard. GRX RX400 2×10 for gravel shifting and easy commuting. For anyone who wants to be ready for any weather straight away.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone 1", frame:"aluminium", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:47, priceClass:3, price:2399, priceLabel:"~€2.399", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,0 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top aluminium Topstone with top mechanical GRX 820 2×12 and higher-quality WTB CZR wheels. A fast, light alloy gravel bike with 47 mm tyre clearance, SmartSense-compatible. The sporty end of the alloy range.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-alloy" },
  { brand:"Cannondale", model:"Topstone Carbon 4", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2699, priceLabel:"~€2.699", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,1 kg", group:"CUES 1x", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (rear, 30 mm)", tubeless:true, ebike:false, geoDesc:"The cheapest carbon Topstone with Kingpin rear suspension (30 mm of comfort) and Shimano CUES 1×. Tyres up to 52 mm, StashPort storage in the down tube and plenty of mounting eyelets. The entry point for anyone who wants carbon and damping for under €2,700.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 3 GRX 1x12", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (rear, 30 mm)", tubeless:true, ebike:false, geoDesc:"Carbon Topstone with GRX 820 1×12 and the damped Kingpin rear suspension. A simple 1× drivetrain, 52 mm tyres and StashPort. Smooth, comfortable and sporty for all-round use.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 3 GRX 2x12", frame:"carbon", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:52, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,5 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (rear, 30 mm)", tubeless:true, ebike:false, geoDesc:"The same carbon Topstone but with GRX 820 2×12 for maximum range. Combines Kingpin comfort, 52 mm tyres and small gear steps — great for climbing and long trips.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 2 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:52, priceClass:4, price:3699, priceLabel:"~€3.699", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,3 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (rear, 30 mm)", tubeless:true, ebike:false, geoDesc:"Carbon Topstone with wireless SRAM Rival XPLR 13-speed and Kingpin damping. Higher-quality WTB CZR wheels and 52 mm tyre clearance make it sharp and comfortable. The first step towards electronic shifting on the Topstone.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 2 AXS SmartSense", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:52, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,9 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Kingpin (rear, 30 mm)", tubeless:true, ebike:false, geoDesc:"Topstone Carbon 2 AXS fitted with Cannondale SmartSense: integrated lights and a rear-view radar powered by its own battery. Safety and commuting functionality without cable clutter. For anyone who also wants to ride in the dark or on the road.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"Topstone Carbon 1 Lefty AXS", frame:"carbon", wheels:"carbon", wheelBrand:"HollowGram 45 SL KNØT", maxTire:52, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,4 kg", group:"Force AXS 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Lefty Oliver (front, 30 mm) + Kingpin", tubeless:true, ebike:false, geoDesc:"Top model Topstone with double damping: the unique Lefty Oliver front suspension (30 mm) plus Kingpin rear suspension. Wireless Force AXS 2×12 and HollowGram carbon wheels. The most damped gravel bike — for anyone after the roughest adventures.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/topstone-carbon" },
  { brand:"Cannondale", model:"SuperX 4 AXS", frame:"carbon", wheels:"carbon", wheelBrand:"WTB CZR i23", maxTire:45, priceClass:4, price:3799, priceLabel:"~€3.799", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The return of the SuperX name as a race gravel bike: aggressive carbon geometry, UDH derailleur hanger and Apex XPLR AXS 12-speed. Fast and taut with 45 mm tyre clearance. For racers and gravel racers.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Cannondale", model:"SuperX 3", frame:"carbon", wheels:"carbon", wheelBrand:"DT Swiss ERC LOG 45", maxTire:45, priceClass:4, price:4499, priceLabel:"~€4.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,5 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mid-spec race SuperX with Rival XPLR AXS 13-speed and DT Swiss ERC LOG 45 carbon wheels. Stiff and aerodynamic, made for gravel races and fast rides. The sporty sweet spot.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Cannondale", model:"SuperX 1", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44 GR", maxTire:45, priceClass:5, price:6999, priceLabel:"~€6.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top model SuperX: SRAM Force XPLR AXS 13-speed with Reserve 40|44 GR carbon wheels. Cannondale's lightest, fastest race gravel bike, with UDH and sporty geometry. For the podium in the gravel season.", url:"https://www.cannondale.com/en-nl/bikes/road/gravel/superx" },
  { brand:"Giant", model:"Revolt 2", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant S-X2", maxTire:53, priceClass:2, price:1499, priceLabel:"~€1.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"n/a", group:"Sora 2x9", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2025, mounts:true, fender:true, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"Entry-level Revolt with ALUXX aluminium frame, D-Fuse seatpost and Shimano Sora 2×9. Room for tyres up to 53 mm and plenty of mounts: affordable and versatile.", url:"https://www.giant-bicycles.com/nl/revolt-2-2025" },
  { brand:"Giant", model:"Revolt 1", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant SX-2", maxTire:53, priceClass:2, price:1749, priceLabel:"~€1.749", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"CUES U6000 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"Comfortable alloy Revolt with Shimano CUES 2×10 for a wider range and D-Fuse damping. Flip chip for the wheelbase, 53 mm tyre clearance and extensive mounts. A solid all-rounder for anyone who wants more versatility.", url:"https://www.giant-bicycles.com/nl/revolt-1" },
  { brand:"Giant", model:"Revolt 0", frame:"aluminium", wheels:"aluminium", wheelBrand:"Giant SX-2", maxTire:53, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,2 kg", group:"GRX RX610/RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"Top alloy Revolt with real GRX RX610 2×12 and hydraulic GRX brakes. Flip chip, D-Fuse seatpost and 53 mm tyre clearance. The best aluminium model for anyone who wants to ride sportier.", url:"https://www.giant-bicycles.com/nl/revolt-0" },
  { brand:"Giant", model:"Revolt Advanced 3", frame:"carbon", wheels:"aluminium", wheelBrand:"Giant P-X2", maxTire:53, priceClass:3, price:2599, priceLabel:"~€2.599", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"n/a", group:"CUES U6000 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"The most affordable carbon Revolt: Shimano CUES 1×11 with a cassette up to 50 teeth, down tube storage, flip chip and D-Fuse seatpost. Tyres up to 53 mm.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-3" },
  { brand:"Giant", model:"Revolt Advanced 2", frame:"carbon", wheels:"aluminium", wheelBrand:"Giant P-X2", maxTire:53, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"n/a", group:"GRX RX610/RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"Carbon Revolt with Shimano GRX 2×12 (11-36), down tube storage, flip chip and D-Fuse seatpost. 53 mm tyre clearance for everything from gravel to forest trails.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-2" },
  { brand:"Giant", model:"Revolt Advanced 1", frame:"carbon", wheels:"aluminium", wheelBrand:"Giant P-X2", maxTire:53, priceClass:3, price:3399, priceLabel:"~€3.399", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"n/a", group:"Apex XPLR 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Suspension seatpost (30 mm)", tubeless:true, ebike:false, geoDesc:"Carbon Revolt for rough terrain: SRAM Apex XPLR 1×12 and a PostModerne dropper seatpost with 30 mm of suspension. Down tube storage and tyres up to 53 mm.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-1" },
  { brand:"Giant", model:"Revolt Advanced 0", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 2", maxTire:53, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"n/a", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"Carbon Revolt with mechanical Shimano GRX 820 2×12 and carbon CXR 2 wheels (35 mm). D-Fuse SL seatpost, flip chip and tyres up to 53 mm.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-0" },
  { brand:"Giant", model:"Revolt Advanced Pro 1", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 2", maxTire:53, priceClass:5, price:5699, priceLabel:"~€5.699", shifting:"SRAM", electronic:true, integrated:true, weightClass:4, weightLabel:"n/a", group:"Rival AXS E1 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"Advanced Pro frame with wireless SRAM Rival AXS 2×12, carbon CXR 2 wheels and adjustable D-Fuse SLR seatpost. A fast, sporty Revolt.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-pro-1" },
  { brand:"Giant", model:"Revolt Advanced Pro 0", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 1", maxTire:53, priceClass:5, price:6699, priceLabel:"~€6.699", shifting:"SRAM", electronic:true, integrated:true, weightClass:4, weightLabel:"n/a", group:"Force AXS E1 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"S–XL (5)", sizeList:["S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"Top Advanced Pro model: wireless SRAM Force AXS 2×12, carbon CXR 1 wheels and D-Fuse SLR seatpost. Tyres up to 53 mm.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-pro-0" },
  { brand:"Giant", model:"Revolt Advanced SL 2", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 0", maxTire:53, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,9 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"S–XL (5)", sizeList:["S","M","ML","L","XL"], year:2027, mounts:false, fender:false, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"New race Revolt (2027) with Advanced SL carbon frame, SRAM Rival XPLR AXS (1×13) and carbon CXR 0 wheels (50 mm). 7.9 kg, tyres up to 53 mm.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-sl-2-2027" },
  { brand:"Giant", model:"Revolt Advanced SL 1", frame:"carbon", wheels:"carbon", wheelBrand:"Giant CXR 0", maxTire:53, priceClass:5, price:7499, priceLabel:"~€7.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"S–XL (5)", sizeList:["S","M","ML","L","XL"], year:2027, mounts:false, fender:false, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"Race Revolt (2027) with Advanced SL carbon frame, SRAM Force XPLR AXS (1×13) and carbon CXR 0 wheels. 7.6 kg, tyres up to 53 mm.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-sl-1-2027" },
  { brand:"Giant", model:"Revolt Advanced SL 0", frame:"carbon", wheels:"carbon", wheelBrand:"CADEX Max GXR", maxTire:53, priceClass:6, price:9999, priceLabel:"~€9.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,3 kg", group:"RED XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"S–XL (5)", sizeList:["S","M","ML","L","XL"], year:2027, mounts:false, fender:false, damping:"D-Fuse (seatpost)", tubeless:true, ebike:false, geoDesc:"The lightest Revolt (7.3 kg, 2027): Advanced SL carbon, SRAM RED XPLR AXS (1×13) and CADEX Max GXR wheels. Tyres up to 53 mm.", url:"https://www.giant-bicycles.com/nl/revolt-advanced-sl-0-2027" },
  { brand:"Scott", model:"Addict Gravel 40", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros RP2.0", maxTire:45, priceClass:3, price:2799, priceLabel:"~€2.799", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX610 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Entry-level Addict Gravel with HMF carbon, UDH derailleur hanger and mechanical GRX 600/610 2×12. 45 mm tyre clearance and hidden mounts — sporty carbon gravel at an accessible price.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 30", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital 2.0", maxTire:45, priceClass:3, price:3299, priceLabel:"~€3.299", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,9 kg", group:"GRX RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Sporty carbon gravel racer with an aerodynamic frame, fully integrated cables and 2× GRX 820. UDH standard, 45 mm tyre clearance and hidden fender mounts. A fast bike that also suits longer rides.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 20", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital 2.0", maxTire:45, priceClass:4, price:4299, priceLabel:"~€4.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,4 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Fast Addict with wireless SRAM Rival XPLR 13-speed and an integrated cockpit, focused on performance. Lightweight and taut, with hidden mounts for a bit of extra flexibility. For the gravel rider who chases Strava segments.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel 10", frame:"carbon", wheels:"carbon", wheelBrand:"Syncros Capital SL", maxTire:45, priceClass:5, price:5199, priceLabel:"~€5.199", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force AXS 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"High-end Addict Gravel with wireless SRAM Force AXS 2×12 and carbon Syncros wheels. UDH, 45 mm tyres and an integrated cockpit. A strong offer for anyone who wants electronic 2× and carbon wheels.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Scott", model:"Addict Gravel RC", frame:"carbon", wheels:"carbon", wheelBrand:"Syncros Capital SL", maxTire:45, priceClass:6, price:8999, priceLabel:"~€8.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The race top model with ultralight HMX carbon, SRAM Red XPLR 13-speed and carbon Syncros wheels. Pure speed at around 7.6 kg; luggage mounts are minimal, but fenders can still be fitted. For the dedicated gravel racer who wants the lightest.", url:"https://www.scott-sports.com/global/en/products/bike-bikes-gravel-addict-gravel" },
  { brand:"Ridley", model:"Kanzo A GRX 600", frame:"aluminium", wheels:"aluminium", wheelBrand:"Ridley 4ZA", maxTire:47, priceClass:2, price:1999, priceLabel:"~€1.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX RX610 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"An accessible aluminium Kanzo from Belgian brand Ridley with 2× GRX 600 and room for 47 mm tyres. Plenty of mounts and fender eyelets make it versatile for touring and all-round gravel. A solid entry model with a strong reputation.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoAdventure" },
  { brand:"Ridley", model:"Kanzo Adventure GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"DT Swiss G 1800", maxTire:47, priceClass:3, price:2899, priceLabel:"~€2.899", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,0 kg", group:"GRX RX820 1x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Carbon bikepacking gravel with MTB-inspired geometry and around 20 mounts for bags and bottles. 1× GRX and 47 mm tyre clearance make it ready for long, self-supported adventures. Built to go a long way from home, fully loaded.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoAdventure" },
  { brand:"Ridley", model:"Kanzo Fast Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Forza Levanto Carbon", maxTire:42, priceClass:5, price:6499, priceLabel:"~€6.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,8 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"One of the first real aero gravel bikes, with a low, racy position and fast CX geometry. Wireless SRAM Force XPLR 1× and carbon wheels make it light and fast; luggage and fenders are not what it is for. Pick your own colours in the configurator.", url:"https://www.ridley-bikes.com/en_INT/bikes/platform/KanzoFast" },
  { brand:"Cervélo", model:"Áspero GRX", frame:"carbon", wheels:"aluminium", wheelBrand:"HED Emporia GA", maxTire:44, priceClass:4, price:3999, priceLabel:"~€3.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,6 kg", group:"GRX RX820 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"A thoroughbred race gravel bike from Cervélo with aggressive, direct geometry and 2× GRX. No suspension or luggage mounts — purely focused on speed and sharp handling in races. For anyone who wants to win gravel races on mixed terrain.", url:"https://www.cervelo.com/en-US/bikes/aspero" },
  { brand:"Cervélo", model:"Áspero Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:5, price:5499, priceLabel:"~€5.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"A fast Áspero with wireless SRAM Force XPLR 1× and carbon Reserve wheels. Taut, light and aerodynamic, built for competitive gravel. The choice of performance over comfort and luggage.", url:"https://www.cervelo.com/en-US/bikes/aspero" },
  { brand:"Cervélo", model:"Áspero-5 Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:6, price:8299, priceLabel:"~€8.299", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The aerodynamically optimised Áspero-5 with matched or mixed-tyre geometry for maximum speed. Wireless Force XPLR 1× and carbon wheels; entirely focused on racing with no luggage options. One of the fastest gravel frames on the market.", url:"https://www.cervelo.com/en-US/bikes/aspero-5" },
  { brand:"Cervélo", model:"Áspero-5 Red XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Reserve 40|44", maxTire:44, priceClass:6, price:11499, priceLabel:"~€11.499", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"48–61 cm", sizeList:["48","51","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The flagship with SRAM Red XPLR 1×, ultralight and aerodynamically dominant. Built for the sharp end of gravel racing, with no compromises on speed. For the rider who wants the very fastest.", url:"https://www.cervelo.com/en-US/bikes/aspero-5" },
  { brand:"Orbea", model:"Terra H30", frame:"aluminium", wheels:"carbon", wheelBrand:"Oquo RC25", maxTire:50, priceClass:2, price:1899, priceLabel:"~€1.899", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,8 kg", group:"GRX 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"An affordable, playful aluminium gravel bike from Orbea with 1× GRX and room for tyres up to 50 mm. Mounting and fender points make it versatile, and the pricier versions can be personalised for free via MyO. A fun, accessible all-rounder.", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Orbea", model:"Terra M30", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RC30TEAM", maxTire:50, priceClass:3, price:2999, priceLabel:"~€2.999", shifting:"Shimano", electronic:false, integrated:false, weightClass:2, weightLabel:"~8,8 kg", group:"GRX 820", region:"nl", geo:"Adventure Gravel", drivetrain:"1x/2x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"A comfortable OMR carbon Terra with a vibration-damping frame and a handy LOCKR storage compartment in the down tube. Configurable as 1× or 2× GRX, with mounts and fender eyelets for versatile use. Personalisable via MyO for your own look.", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Orbea", model:"Terra M21eTEAM", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RP50LTD", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"Force XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Lightweight OMR carbon Terra with wireless SRAM Force XPLR 1× and carbon Oquo wheels. Fully configurable to your wishes via MyO, with mounts for extra flexibility. Fast and comfortable for longer adventures. (The 'e' here refers to the version — this is not an e-bike.)", url:"https://www.orbea.com/nl-nl/m/terra" },
  { brand:"Pinarello", model:"Grevil F1", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:3500, priceLabel:"~€3.500", shifting:"Shimano", electronic:false, integrated:true, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX610 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 sizes (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Entry-level Grevil F with T600 carbon and mechanical GRX 610 2×12. Keeps the iconic wavy tubes, down tube storage and 50 mm tyre clearance. The most affordable way to combine Pinarello style with practical gravel fun.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/new-grevil-f/new-grevil-f1-shimano-grx-610" },
  { brand:"Pinarello", model:"Grevil F3 GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:4300, priceLabel:"~€4.300", shifting:"Shimano", electronic:false, integrated:true, weightClass:3, weightLabel:"~9,4 kg", group:"GRX RX820 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 sizes (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mid-spec Grevil F with T700 carbon and mechanical Shimano GRX 820 2×12 — a wide range for climbing and speed. The same frame, down tube storage and 50 mm tyre clearance as the SRAM version, but with 2× and Shimano controls. The same price point as the Apex version.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/new-grevil-f/new-grevil-f3-shimano-grx-820" },
  { brand:"Pinarello", model:"Grevil F3 Apex XPLR", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:4, price:4300, priceLabel:"~€4.300", shifting:"SRAM", electronic:true, integrated:true, weightClass:3, weightLabel:"~9,2 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 sizes (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Mid-spec Grevil F with T700 carbon and wireless SRAM Apex XPLR AXS 1×. Integrated cockpit, down tube storage and 50 mm tyre clearance. A first electronic step without the top price.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/new-grevil-f/new-grevil-f3-sram-apex-xplr" },
  { brand:"Pinarello", model:"Grevil F5", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:5, price:5600, priceLabel:"~€5.600", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~9,0 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 sizes (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Sweet-spot Grevil F with T700 carbon and wireless SRAM Rival XPLR 13-speed. Down tube storage, integrated cockpit and 50 mm tyre clearance. Italian style combined with sporty performance.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/new-grevil-f/new-grevil-f5-sram-rival-xplr-axs" },
  { brand:"Pinarello", model:"Grevil F7 GRX 825 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:5, price:6900, priceLabel:"~€6.900", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,8 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"6 sizes (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Grevil F7 with electronic Shimano GRX Di2 RX825 2×12 — a wide range and wireless shifting for long days. T900 carbon, Princeton GR carbon wheels and an integrated cockpit. The Shimano alternative at the high Grevil level.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/new-grevil-f/new-grevil-f7-shimano-grx-825-di2" },
  { brand:"Pinarello", model:"Grevil F7 Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:5, price:7200, priceLabel:"~€7.200", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 sizes (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"A higher Grevil F with T900 carbon and wireless SRAM Force XPLR 13-speed. Princeton GR carbon wheels and an integrated cockpit. For anyone who wants to combine style, speed and versatility.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/new-grevil-f/new-grevil-f7-sram-force-xplr-axs" },
  { brand:"Pinarello", model:"Grevil F9", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton GR", maxTire:50, priceClass:6, price:11000, priceLabel:"~€11.000", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,0 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 sizes (47–60 cm)", sizeList:["47","50","53","55","57,5","60"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Flagship Grevil F with T900 carbon and SRAM Red XPLR 13-speed. Princeton GR carbon, down tube storage and an integrated cockpit. For anyone who wants the most out of the Grevil platform — exclusive and complete.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/new-grevil-f/new-grevil-f9-sram-red-xplr-axs-1x13" },
  { brand:"Pinarello", model:"Dogma GR", frame:"carbon", wheels:"carbon", wheelBrand:"Princeton Grit 4540", maxTire:45, priceClass:6, price:13999, priceLabel:"~€13.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,3 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"9 sizes (43–59.5 cm)", sizeList:["43","46,5","50","51,5","53","54,5","56","57,5","59,5"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Pinarello's gravel flagship with new M40X carbon, a frame of around 960 g and 7.3 kg complete. SRAM Red XPLR 13-speed and a pure race setup for races under five hours. No luggage or suspension — everything is in the service of speed.", url:"https://pinarello.com/europe/en/bikes/gravel/competition/dogma-gr/dogma-gr-sram-red-xplr-axs-1x13" },
  { brand:"Factor", model:"Ostro Gravel Force XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Black Inc Forty Five", maxTire:45, priceClass:6, price:8999, priceLabel:"~€8.999", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Force XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Factor's aero race gravel bike with the 'win everywhere' mentality of the Ostro VAM. Superior stiffness, integrated Black Inc wheels and wireless Force XPLR 1×. For the performance-focused rider who wants an exclusive race machine.", url:"https://factorbikes.com/bikes/ostro-gravel" },
  { brand:"Factor", model:"Ostro Gravel Red XPLR", frame:"carbon", wheels:"carbon", wheelBrand:"Black Inc Forty Five", maxTire:45, priceClass:6, price:11500, priceLabel:"~€11.500", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,4 kg", group:"Red XPLR AXS", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"49–61 cm", sizeList:["49","52","54","56","58","61"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Flagship Ostro Gravel with SRAM Red XPLR 13-speed, UDH derailleur hanger and premium carbon. The lightest and fastest in the range, entirely focused on racing. An exclusive choice for anyone who wants the best of Factor.", url:"https://factorbikes.com/bikes/ostro-gravel" },
  { brand:"Cannondale", model:"Topstone Neo SL 1", frame:"aluminium", wheels:"aluminium", wheelBrand:"WTB ST i23", maxTire:45, priceClass:3, price:3499, priceLabel:"~€3.499", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X35+ hub (40 Nm)", battery:"250 Wh", geoDesc:"Light e-gravel (around 13.5 kg) with a discreet Mahle X35+ hub system (40 Nm) and 250 Wh battery. Feels like a normal gravel bike but with that little bit of tailwind; up to 45 mm tyre clearance and plenty of mounts. For anyone looking for subtle, natural assistance.", url:"https://www.cannondale.com/en-nl/bikes/electric/e-road/topstone-neo-sl" },
  { brand:"Orbea", model:"Gain M30", frame:"carbon", wheels:"carbon", wheelBrand:"Oquo RP35", maxTire:40, priceClass:4, price:4999, priceLabel:"~€4.999", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~11,5 kg", group:"GRX 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XXL (6)", sizeList:["XS","S","M","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X20 (55 Nm)", battery:"350 Wh", geoDesc:"Ultralight all-road/gravel e-bike (around 11.5 kg) with the almost invisible Mahle X20 system (55 Nm). Tyres up to 40 mm make it ideal for fast mixed rides and paved roads, less so for rough gravel. For anyone looking for an elegant, light e-bike that does not look like an e-bike.", url:"https://www.orbea.com/us-en/ebikes/road/gain/" },
  { brand:"Pinarello", model:"Nytro E5 Gravel", frame:"carbon", wheels:"aluminium", wheelBrand:"Fulcrum Rapid Red", maxTire:50, priceClass:6, price:7999, priceLabel:"~€7.999", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"~13,0 kg", group:"Rival XPLR AXS", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"6 sizes", sizeCats:["XS","S","M","L","XL"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:true, motor:"TQ HPR50 (50 Nm)", battery:"360 Wh", geoDesc:"One of the lightest e-gravel bikes, with the smooth TQ HPR50 motor (50 Nm) and 360 Wh battery. Italian tuning, wireless SRAM Rival XPLR 1× and an optional range extender for extra range. For anyone looking for style and discreet assistance.", url:"https://pinarello.com/europe/en/bikes/gravel/supercharged/nytro-e-gravel/nytro-e5-gravel-sram-rival-axs" },
  { brand:"Scott", model:"Solace Gravel eRIDE 30", frame:"carbon", wheels:"aluminium", wheelBrand:"Syncros Capital", maxTire:50, priceClass:5, price:5999, priceLabel:"~€5.999", shifting:"Shimano", electronic:false, integrated:true, weightClass:4, weightLabel:"~14,0 kg", group:"GRX 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"TQ HPR50 (50 Nm)", battery:"360 Wh", geoDesc:"Stylish e-gravel with the whisper-quiet TQ HPR50 motor (50 Nm) and integrated 360 Wh battery. Natural ride feel, room for tyres up to 50 mm and plenty of mounts for adventure. A refined, light e-gravel bike for long rides.", url:"https://www.scott-sports.com/us/en/eride-road-gravel" },
  { brand:"Rose", model:"Blend Gravel", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G20", maxTire:40, priceClass:2, price:1430, priceLabel:"~€1.430", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~10,0 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XXS–XXL (7 sizes)", sizeList:["XXS","XS","S","M","L","XL","XXL"], year:2025, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The Blend Gravel makes getting started easy: aluminium frame with carbon fork, reliable GRX 400 2×10 and 40 mm Continental tyres for a keen price. Integrated cables, UDH standard and fender compatibility make it surprisingly grown-up. With 7 sizes (XXS–XXL) an ideal first gravel bike.", url:"https://www.rosebikes.nl/fietsen/race/endurance/blend/modellen" },
  { brand:"Rose", model:"Hobo Cues", frame:"staal", wheels:"aluminium", wheelBrand:"Rose G30 (650B)", maxTire:55, priceClass:2, price:1330, priceLabel:"~€1.330", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~12,9 kg", group:"Cues 1x10", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"S–XL", sizeList:["S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The Hobo is Rose's steel everyday gravel bike with a straight handlebar (flat bar) — note, so not a drop bar like the other models here. An integrated front rack, 14 mounts and 47 mm WTB tyres on 650B wheels (room up to 55 mm) make it indestructible for city, touring and bikepacking. Low-maintenance Shimano Cues 1×10 with a thumb shifter.", url:"https://www.rosebikes.nl/fietsen/gravel/everyday/hobo" },
  { brand:"Rose", model:"Backroad AL GRX 400", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:2, price:1940, priceLabel:"~€1.940", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,6 kg", group:"GRX RX400 2x10", region:"nl", geo:"Adventure Gravel", drivetrain:"2x", sizes:"XXS–XXL (8 sizes)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The aluminium version of the new Backroad generation (2026) with the same clever details: an integrated frame compartment with tool bag, USB-C charging port at the handlebar and 18 mounts. The 2×10 GRX 400 gives a wide range for touring and commuting, and tyres up to 53 mm fit. With 8 frame sizes (XXS–XXL) there is a size for almost everyone.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL Apex", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:3, price:2140, priceLabel:"~€2.140", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,4 kg", group:"Apex XPLR 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XXL (8 sizes)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Backroad AL with mechanical SRAM Apex XPLR 1×12 — simplicity and little maintenance on a robust aluminium frame. A frame compartment with tool bag, USB-C port and 18 mounts make it just as adventure-ready as the carbon version, for less money. Available in 8 sizes from XXS to XXL.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL GRX 610", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G25", maxTire:53, priceClass:3, price:2550, priceLabel:"~€2.550", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~10,5 kg", group:"GRX RX610 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XXS–XXL (8 sizes)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The best-equipped mechanical Backroad AL, with Shimano GRX RX610 1×12 and a big 10-51 cassette for steep climbs with luggage. The same 2026 platform with storage compartment, USB-C port and 18 mounts; tyres up to 53 mm fit. A complete adventurer without electronics.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad-al" },
  { brand:"Rose", model:"Backroad AL EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"DT Swiss G1800", maxTire:53, priceClass:3, price:2750, priceLabel:"~€2.750", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,8 kg", group:"GRX RX820 2x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"2x", sizes:"XXS–XXL (8 sizes)", sizeList:["XXS","XS","S","M","M/L","L","XL","XXL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Fully equipped Backroad AL: fenders, rack and dynamo lighting fitted at the factory, with 2×12 GRX 820 for fine steps on the road. Comes on 35 mm tyres for commuting and touring; without fenders, tyres up to 53 mm fit. Get on and ride, all year round.", url:"https://www.rosebikes.nl/fietsen/gravel/everyday/backroad-al-eq" },
  { brand:"Rose", model:"Backroad GRX 820", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:3, price:2950, priceLabel:"~€2.950", shifting:"Shimano", electronic:false, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX820 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The completely renewed carbon Backroad (2026) has an integrated storage compartment in the down tube, a USB-C charging port by the stem and 18 mounts. A frame bag and tool bag come as standard and tyres up to 53 mm fit in the frame. With mechanical GRX 820 1×12 it is the keenly priced entry to the new Backroad line.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Apex AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:3, price:3360, priceLabel:"~€3.360", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,2 kg", group:"Apex XPLR AXS 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The same new carbon Backroad, but with wireless electronic SRAM Apex XPLR AXS and a light ~9.2 kg. The frame offers storage in the down tube, a USB-C port and 18 mounts; frame bag and tool bag are included as standard. The most affordable route to wireless shifting on an adventure bike.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad GRX 825 Di2", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:3560, priceLabel:"~€3.560", shifting:"Shimano", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,6 kg", group:"GRX RX825 Di2 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"New Backroad with electronic Shimano GRX Di2 1×12 and 10-51 cassette — precise, light to operate and reliable in mud and dust. All the other 2026 updates are on board too: frame compartment with tool bag, USB-C charging port, 18 mounts and tyre clearance up to 53 mm. For anyone who stays loyal to Shimano but wants wireless comfort.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Force AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:4280, priceLabel:"~€4.280", shifting:"SRAM", electronic:true, integrated:false, weightClass:3, weightLabel:"~9,1 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Top version of the new Backroad with SRAM Force XPLR AXS 1×13 and a full-mount derailleur on the UDH standard. At ~9.1 kg the lightest of the Backroad adventure line, including frame compartment, USB-C port and 18 mounts. Speed combined with full bikepacking equipment.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad Unsupported", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30", maxTire:53, priceClass:4, price:4480, priceLabel:"~€4.480", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~11,0 kg", group:"GRX RX820 1x12", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The Backroad Unsupported is built for ultra racing and self-supported bikepacking: SON hub dynamo, Supernova lighting, a power bank system and a complete bag set all fitted at the factory. The 50 mm Schwalbe G-One Overland tyres and 18 mounts make it ready for non-stop adventure, day and night. A unique concept in this overview.", url:"https://www.rosebikes.nl/fietsen/gravel/adventure/backroad" },
  { brand:"Rose", model:"Backroad FF Rival XPLR AXS", frame:"carbon", wheels:"aluminium", wheelBrand:"Rose G30 LIGHT", maxTire:45, priceClass:4, price:3560, priceLabel:"~€3.560", shifting:"SRAM", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"Rival XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The Backroad FF is Rose's aero race gravel bike in high-modulus carbon with a one-piece cockpit and UDH. This entry version has wireless SRAM Rival XPLR AXS 1×13 with an integrated Quarq power meter — rare in this price class. Up to 45 mm tyre clearance and ~8.6 kg: made for races and KOMs.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF GRX 825 Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:4, price:4580, priceLabel:"~€4.580", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,2 kg", group:"GRX RX825 Di2 2x12", region:"nl", geo:"Race Gravel", drivetrain:"2x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Race Backroad FF with electronic Shimano GRX Di2 2×12 and a 4iiii power meter, for small gear steps at high speed. Carbon Rose GC50 wheels (50 mm deep) make it aerodynamically strong, and at ~8.2 kg it climbs superbly. The only 2× in the FF line.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF XT/GRX Di2", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:4, price:4380, priceLabel:"~€4.380", shifting:"Shimano", electronic:true, integrated:true, weightClass:2, weightLabel:"~8,6 kg", group:"GRX/XT Di2 1x12", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Backroad FF with electronic Shimano GRX/XT Di2 1×12 (9-45, extra-wide range), 4iiii power meter and carbon GC50 wheels. Approx. 8.6 kg.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff/modellen" },
  { brand:"Rose", model:"Backroad FF Force XPLR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:5, price:5090, priceLabel:"~€5.090", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,9 kg", group:"Force XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Backroad FF with SRAM Force XPLR AXS 1×13, integrated Force power meter and carbon GC50 wheels — ~7.9 kg of race kit. The aero one-piece cockpit and the magnetic bag concept combine speed with gravel practicality. For the performance-focused gravel racer.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad FF Red XPLR AXS", frame:"carbon", wheels:"carbon", wheelBrand:"Rose GC50", maxTire:45, priceClass:5, price:6610, priceLabel:"~€6.610", shifting:"SRAM", electronic:true, integrated:true, weightClass:1, weightLabel:"~7,6 kg", group:"Red XPLR AXS 1x13", region:"nl", geo:"Race Gravel", drivetrain:"1x", sizes:"XS–XL (6 sizes)", sizeList:["XS","S","M","M/L","L","XL"], year:2025, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"The flagship of the Backroad FF line: SRAM Red XPLR AXS 1×13, Red power meter and carbon GC50 wheels at just ~7.6 kg. High-modulus carbon and a fully integrated cockpit make this Rose's fastest gravel bike ever. Direct-to-consumer top value compared with the established race brands.", url:"https://www.rosebikes.nl/fietsen/gravel/race/backroad-ff" },
  { brand:"Rose", model:"Backroad AL Plus Apex", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G30+", maxTire:40, priceClass:3, price:3460, priceLabel:"~€3.460", shifting:"SRAM", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,6 kg", group:"Apex XPLR 1x12", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X30 hub (45 Nm)", battery:"250 Wh (+170 Wh extender optional)", geoDesc:"E-gravel you would hardly recognise as an e-bike: the Mahle X30 hub motor (45 Nm) and 250 Wh battery are almost invisibly tucked into the aluminium frame with carbon fork. Up to ~100 km range, optional Range Extender and ~13.6 kg total weight. With 12 mounts and SRAM Apex XPLR 1×12 ready for commuting and adventure.", url:"https://www.rosebikes.nl/fietsen/gravel/e-gravel/backroad-al-plus" },
  { brand:"Rose", model:"Backroad AL Plus Cues", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G30+", maxTire:40, priceClass:4, price:3560, priceLabel:"~€3.560", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~13,9 kg", group:"Cues 1x11", region:"nl", geo:"Adventure Gravel", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X30 hub (45 Nm)", battery:"250 Wh (+170 Wh extender optional)", geoDesc:"Backroad AL Plus with Shimano CUES 1×11 (11-50): the same almost invisible Mahle X30 hub motor (45 Nm) and 250 Wh battery, with a cassette up to 50 teeth for steep sections. Approx. 13.9 kg.", url:"https://www.rosebikes.nl/fietsen/gravel/e-gravel/backroad-al-plus/modellen" },
  { brand:"Rose", model:"Backroad AL Plus EQ", frame:"aluminium", wheels:"aluminium", wheelBrand:"Rose G30+", maxTire:40, priceClass:4, price:3870, priceLabel:"~€3.870", shifting:"Shimano", electronic:false, integrated:false, weightClass:4, weightLabel:"~15,5 kg", group:"Cues 1x11", region:"nl", geo:"Bikepacking / Touring", drivetrain:"1x", sizes:"XS–XL", sizeList:["XS","S","M","L","XL"], year:2026, mounts:true, fender:true, damping:"Geen", tubeless:true, ebike:true, motor:"Mahle X30 hub (45 Nm)", battery:"250 Wh (+170 Wh extender optional)", geoDesc:"The fully equipped e-Backroad: fenders, rack and lights from the factory, plus the discreet Mahle X30 hub motor (45 Nm, 250 Wh). The low-maintenance Shimano Cues 1×11 makes it carefree for daily use and long tours. An all-in-one electric bike for the whole year.", url:"https://www.rosebikes.nl/fietsen/gravel/e-gravel/backroad-al-plus" },
  { brand:"Singular", model:"Pterodactyl (32 inch)", frame:"titanium", wheels:"aluminium", wheelBrand:"32-inch (686 mm)", wheelSize:"32", maxTire:63, priceClass:4, price:4100, priceLabel:"~€4.100 (£3.490)", shifting:"", electronic:false, integrated:false, weightClass:4, weightLabel:"n/a", group:"", region:"world", geo:"Adventure Gravel", drivetrain:"1x", sizes:"L–XXL", sizeList:["L","XL","XXL"], year:2026, mounts:true, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Titanium gravel bike with 32-inch wheels from England, for riders from about 1.78 m. Sold as a rolling chassis: frame, fork, headset, wheels and tyres (2.4 inch), without drivetrain and brakes. Tyres up to 2.5 inch. Made to order, lead time 8 to 10 weeks.", url:"https://singularcycles.com/products/pte" },
  { brand:"Baum", model:"DBM 32", frame:"titanium", wheels:"aluminium", wheelBrand:"32-inch (686 mm)", wheelSize:"32", maxTire:66, priceClass:6, price:9700, priceLabel:"~€9.700 (AU$16.192)", shifting:"SRAM", electronic:true, integrated:false, weightClass:4, weightLabel:"n/a", group:"GX Eagle AXS Transmission", region:"world", geo:"Adventure Gravel", drivetrain:"1x", sizes:"L–XXL", sizeList:["L","XL","XXL"], year:2026, mounts:false, fender:false, damping:"Geen", tubeless:true, ebike:false, geoDesc:"Custom-built titanium gravel bike from Australia, with 32-inch wheels as an option for tall riders. Complete bike from AU$16,192 with SRAM GX Eagle AXS Transmission; tyres up to 2.6 inch. Baum advises each rider on whether 32 inch suits them.", url:"https://baumcycles.com/dbm/" },
];

/* Wielmaat: standaard 700c; 32 inch staat er expliciet bij */
bikes.forEach(b => { if(!b.wheelSize) b.wheelSize = '700c'; });
bikes.forEach(b=>{b.weightLabel=String(b.weightLabel).replace(/(\d),(\d)/,'$1.$2');b.priceLabel=String(b.priceLabel).replace(/(\d)\.(\d{3})/g,'$1,$2');}); const multiKeys = new Set(['brand','price','weight','geo','tire','year','size','groupset','gravelgroep','speed','wielmerk','wielgewicht']);
const filterKeys = ['etype','wielmaat','price','brand','year','shifting','shifttype','groupset','gravelgroep','speed','drivetrain','frame','wheels','wielmerk','wielgewicht','tire','weight','size','geo','damping','mounts','fender'];

const state = {};
filterKeys.forEach(k => state[k] = multiKeys.has(k) ? [] : 'all');

const filterLabels = {
  etype:{all:"All types", normal:"Non-electric", electric:"Electric ⚡"},
  wielmaat:{all:"All wheel sizes","700c":"700c (28 inch)","32":"32 inch"},
  brand:{all:"All brands"},
  drivetrain:{all:"All drivetrains","1x":"1× chainring","2x":"2× chainrings"},
  frame:{all:"All frames",carbon:"Carbon frame",aluminium:"Aluminium frame",staal:"Steel frame",titanium:"Titanium frame"},
  wheels:{all:"All wheels",carbon:"Carbon wheels",aluminium:"Aluminium wheels"},
  mounts:{all:"Mounts: all", yes:"With mounts", no:"Without mounts"},
  fender:{all:"Fenders: all", yes:"Fenders possible", no:"No fender mounts"},
  damping:{all:"Damping: all", yes:"With suspension/damping", no:"Without suspension/damping"},
  price:{all:"All prices","1":"€0–1,000","2":"€1,000–2,000","3":"€2,000–3,500","4":"€3,500–5,000","5":"€5,000–7,500","6":"€7,500+"},
  shifting:{all:"All brands",Shimano:"Shimano",SRAM:"SRAM"},
  shifttype:{all:"Mech+Elec",electronic:"Electronic",mechanical:"Mechanical"},
  gravelgroep:{all:"All gravel groupsets", xplr:"SRAM XPLR", grx:"Shimano GRX"},
  speed:{all:"All cassettes","9":"9 speed","10":"10 speed","11":"11 speed","12":"12 speed","13":"13 speed (newest)"},
  groupset:{all:"All groupsets","Shimano CUES":"Shimano CUES","Shimano GRX 400":"Shimano GRX 400","Shimano GRX 600":"Shimano GRX 600","Shimano GRX 800":"Shimano GRX 800","Shimano GRX Di2":"Shimano GRX Di2","Shimano XT Di2":"Shimano XT Di2","SRAM Apex":"SRAM Apex (mech)","SRAM Apex AXS":"SRAM Apex AXS","SRAM Rival AXS":"SRAM Rival AXS","SRAM Force AXS":"SRAM Force AXS","SRAM Red AXS":"SRAM Red AXS"},
  weight:{all:"All weights","1":"7–8 kg","2":"8–9 kg","3":"9–10 kg","4":">10 kg"},
  wielgewicht:{all:"All wheel weights","2":"Wheels < 1,250 g","3":"Wheels 1,251–1,500 g","4":"Wheels > 1,500 g","0":"Wheel weight unknown"},
  geo:{all:"All geometries","Race Gravel":"Race Gravel","Adventure Gravel":"Adventure","Bikepacking / Touring":"Bikepacking"},
  tire:{all:"All tyre widths","1":"Up to 42 mm","2":"43–47 mm","3":"48–52 mm","4":"≥53 mm"},
  year:{all:"All model years","2024":"Model year 2024","2025":"Model year 2025","2026":"Model year 2026","2027":"Model year 2027"},
  size:{all:"All frame sizes","2XS":"Size 2XS","XS":"Size XS","S":"Size S","M":"Size M","L":"Size L","XL":"Size XL","2XL":"Size 2XL"}
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
  return 'Generic / OEM';
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
    a === 'Generic / OEM' ? 1 : b === 'Generic / OEM' ? -1 : a.localeCompare(b));
  filterLabels.wielmerk = { all: 'All wheel brands' };
  names.forEach(n => {
    filterLabels.wielmerk[n] = 'Wheels: ' + n;
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
const basicKeys = new Set(['etype', 'wielmaat', 'price', 'brand', 'size']);

function toggleAdv() {
  const adv = document.getElementById('gk-filters-adv');
  const btn = document.getElementById('gk-adv-toggle');
  if(!adv || !btn) return;
  const willOpen = adv.hasAttribute('hidden');
  if(willOpen) adv.removeAttribute('hidden'); else adv.setAttribute('hidden', '');
  btn.setAttribute('aria-expanded', String(willOpen));
  const lbl = btn.querySelector('.gk-adv-label');
  if(lbl) lbl.textContent = willOpen ? '🛠️ Fewer filters' : '🛠️ More filters';
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
    case 'wielmaat':   return (b.wheelSize || '700c') === val;
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
  return {nl:'🇳🇱 NL',eu:'🇪🇺 EU',world:'🌍 World'}[r] || r;
}

function driveLabel(d) {
  return {'1x':'1× (one chainring)','2x':'2× (two chainrings)','1x/2x':'1× or 2×'}[d] || d;
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
    if (/Sora|Claris|Tiagra|105/.test(g) && !/GRX/.test(g)) return 'Shimano ' + (g.match(/Sora|Claris|Tiagra|105/) || ['Sora'])[0];
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
  /* oktober 2026: nieuwe modellen (officiële productfoto's van de merken) */
  'Cube|Nuroad Hybrid C:62 Race 400X': 'https://file.cube.eu/azwesc1xfg346/media/8e/a9/be/1784795599/synqup_1117300_S_00.jpg',
  'Cube|Nuroad Hybrid C:62 EXC 400X': 'https://file.cube.eu/azwesc1xfg346/media/36/f4/28/1784795605/synqup_1117400_S_00.jpg',
  'Cube|Nuroad Hybrid C:62 SLX 400X': 'https://file.cube.eu/azwesc1xfg346/media/3e/fb/ac/1784795599/synqup_1117600_S_00.jpg',
  'Cube|Nuroad Hybrid C:62 SLT 400X': 'https://file.cube.eu/azwesc1xfg346/media/14/69/d5/1784795608/synqup_1117900_S_00.jpg',
  'Rose|Backroad FF XT/GRX Di2': _RO('8D9B71BD24C7638BC82ED8B16E73D927'),
  'Rose|Backroad AL Plus Cues': _RO('9A40F2C16FFAD185CEF29E353FC9EC2E'),
  'Singular|Pterodactyl (32 inch)': 'https://cdn.shopify.com/s/files/1/0609/3111/3209/files/pterodactyl-collection-card-2257x1600_c5b58999-7ce8-4f4b-963f-cdacc6404c5e.jpg?width=800',
  'Baum|DBM 32': 'https://baumcycles.com/wp-content/uploads/elementor/thumbs/dbn3-scaled-rbaadesd8g1355v8jss0ucpjctqidfw4q8bhktjf84.jpg',
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
  const fb = '<div class="gk-thumb-fb"><span class="e">🚵</span><span>photo not available</span></div>';
  if (!ph) return `<div class="gk-thumb fb"><img alt="">${fb}</div>`;
  return `<div class="gk-thumb"><img src="${ph}" alt="${b.brand} ${b.model}" loading="lazy" decoding="async" onerror="this.closest('.gk-thumb').classList.add('fb')">${fb}</div>`;
}

/* Leesbare winkelnaam op basis van de affiliate-/product-URL (voor de primaire CTA) */
const shopNames = {
  'canyon.com': 'Canyon', 'trekbikes.com': 'Trek', 'specialized.com': 'Specialized',
  'cube.eu': 'Cube', 'cannondale.com': 'Cannondale', 'giant-bicycles.com': 'Giant',
  'scott-sports.com': 'Scott', 'ridley-bikes.com': 'Ridley', 'cervelo.com': 'Cervélo',
  'orbea.com': 'Orbea', 'pinarello.com': 'Pinarello', 'factorbikes.com': 'Factor',
  'rosebikes.nl': 'Rose Bikes', 'rosebikes.com': 'Rose Bikes',
  'singularcycles.com': 'Singular', 'baumcycles.com': 'Baum'
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
  if(s.depth)   rows.push(['Rim depth', s.depth.replace('(v/a)', '(f/r)')]);
  if(s.int)     rows.push(['Inner rim width', s.int.replace(/(\d),(\d)/g, '$1.$2')]);
  if(s.ext)     rows.push(['Outer rim width', s.ext.replace(/(\d),(\d)/g, '$1.$2').replace('(v/a)', '(f/r)')]);
  if(s.weight)  rows.push(['Wheelset weight', s.weight.replace(/(\d)\.(\d{3})/g, '$1,$2').replace('spaken', 'spokes')]);
  if(s.hub)     rows.push(['Hub', s.hub]);
  if(s.spokes)  rows.push(['Spokes', s.spokes.replace('golven', 'waves').replace('dubbeldik', 'double-butted').replace('gaats', 'holes')]);
  if(s.tubeless)rows.push(['Tubeless', s.tubeless]);
  if(s.tire)    rows.push(['Recommended tyre', s.tire.replace('tot', 'up to').replace('(smal)', '(narrow)')]);
  const grid = rows.map(r => `<span class="k">${r[0]}</span><span class="v">${r[1]}</span>`).join('');
  const src = s.src ? `<div class="gk-wheel-note">Source: ${s.src}</div>` : '';
  return `<details class="gk-wheel"><summary>Wheel details — ${b.wheelBrand}</summary><div class="gk-wheel-grid">${grid}</div>${src}</details>`;
}

function render() {
  let filtered = bikes.filter(matches);
  const sort = document.getElementById('sort-sel').value;
  if(sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
  else if(sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
  else if(sort === 'weight-asc') filtered.sort((a,b) => bikeWeight(a) - bikeWeight(b));
  else filtered.sort((a,b) => a.brand.localeCompare(b.brand));

  document.getElementById('result-count').textContent = filtered.length + ' bike' + (filtered.length !== 1 ? 's' : '') + ' found';

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
  if(filtered.length === 0) { grid.innerHTML = '<div class="gk-empty"><div class="gk-empty-icon">🚵</div>No bikes found. Adjust the filters.</div>'; return; }

  grid.innerHTML = filtered.map(b => {
    const frameBadge = {carbon:'<span class="gk-badge carbon-frame">Carbon frame</span>',aluminium:'<span class="gk-badge alu-frame">Aluminium frame</span>',staal:'<span class="gk-badge steel-frame">Steel</span>',titanium:'<span class="gk-badge ti-frame">Titanium</span>'}[b.frame] || '';
    const wheelBadge = b.wheels === 'carbon' ? '<span class="gk-badge carbon-wheels">Carbon wheels</span>' : '<span class="gk-badge alu-wheels">Alloy wheels</span>';
    const shiftBrandBadge = {Shimano:'<span class="gk-badge shimano">Shimano</span>',SRAM:'<span class="gk-badge sram">SRAM</span>',Campagnolo:'<span class="gk-badge campagnolo">Campagnolo</span>',MicroShift:'<span class="gk-badge microshift">MicroShift</span>'}[b.shifting] || '';
    const shiftTypeBadge = b.electronic ? '<span class="gk-badge electronic">⚡ Electronic</span>' : '<span class="gk-badge mechanical">⚙️ Mechanical</span>';
    const intBadge = b.integrated ? '<span class="gk-badge integrated">Integrated</span>' : '';
    const xplrBadge = isXplr(b) ? '<span class="gk-badge xplr-gravel" title="SRAM XPLR — gravel-specific 1× groupset with an extra-wide cassette range">🪨 SRAM XPLR · gravel groupset</span>' : '';
    const grxBadge = isGrx(b) ? '<span class=\"gk-badge grx-gravel\" title=\"Shimano GRX — gravel-specific groupset from Shimano\">⛰️ Shimano GRX · gravel groupset</span>' : '';
    const ebikeBadge = b.ebike ? '<span class="gk-badge ebike">⚡ E-bike</span>' : '';
    const w32Badge = b.wheelSize === '32' ? '<span class="gk-badge w32">32-inch wheels</span>' : '';

    const motorSpec = b.ebike
      ? (b.motor ? `<span class="gk-spec-key">Motor</span><span class="gk-spec-val">${b.motor}</span>` : '')
        + (b.battery ? `<span class="gk-spec-key">Battery</span><span class="gk-spec-val">${b.battery}</span>` : '')
      : '';

    const feats = [];
    feats.push(b.mounts ? '<span class="gk-feat mounts">🔩 Mounts</span>' : '<span class="gk-feat off">🔩 No mounts</span>');
    feats.push(b.fender ? '<span class="gk-feat fender">🛡️ Fenders possible</span>' : '<span class="gk-feat off">🛡️ No fender mounts</span>');
    feats.push(hasDamping(b) ? `<span class="gk-feat damp">〰️ ${b.damping}</span>` : '<span class="gk-feat off">〰️ No suspension/damping</span>');
    feats.push(b.tubeless ? '<span class="gk-feat tl">◯ Tubeless ready</span>' : '<span class="gk-feat off">◯ Not tubeless</span>');
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
      <div class="gk-badges">${ebikeBadge}${w32Badge}${xplrBadge}${grxBadge}${frameBadge}${wheelBadge}${shiftBrandBadge}${shiftTypeBadge}${intBadge}</div>
      <div class="gk-specs">
        <span class="gk-spec-key">Type</span><span class="gk-spec-val">${b.ebike ? 'Electric ⚡' : 'Non-electric'}</span>
        <span class="gk-spec-key">Model year</span><span class="gk-spec-val">${b.year}</span>
        <span class="gk-spec-key">Drivetrain</span><span class="gk-spec-val">${driveLabel(b.drivetrain)}</span>
        <span class="gk-spec-key">Groupset</span><span class="gk-spec-val">${groupLabel(b)}${isXplr(b) ? '<span class="gk-spec-xplr" title="Gravel-specific SRAM XPLR groupset">XPLR</span>' : ''}${isGrx(b) ? '<span class="gk-spec-grx" title="Gravel-specific Shimano GRX groupset">GRX</span>' : ''}</span>
        <span class="gk-spec-key">Cassette</span><span class="gk-spec-val">${speedCount(b) ? speedCount(b) + ' speed' : '—'}</span>
        <span class="gk-spec-key">Wheelset</span><span class="gk-spec-val">${b.wheelBrand}</span>
        <span class="gk-spec-key">Max. tyre</span><span class="gk-spec-val gk-spec-tire">${b.maxTire} mm</span>
        <span class="gk-spec-key">Frame sizes</span><span class="gk-spec-val">${sizesLabel(b)}</span>
        ${motorSpec}
      </div>
      ${featsRow}
      ${wheelSpecHTML(b)}
      <div class="gk-card-cta">
        <a class="gk-buy-btn" href="${b.url}" target="_blank" rel="noopener">See price at ${shopName(b)} <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
        <div class="gk-cta-row">
          <button class="gk-cmpsel" type="button" data-key="${b.brand}|${b.model}" onclick="toggleCmpSel(this.dataset.key,this)" aria-pressed="false" title="Select to compare side by side (max. 4)">⇄ Compare</button>
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
  'Canyon':     { direct: true, site: 'https://www.canyon.com/nl-nl/', label: 'Canyon sells directly online — there is no dealer network. You arrange ordering and service through canyon.com.' },
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
  'Rose':       { direct: true, site: 'https://www.rosebikes.nl/rose-stores', label: 'Rose sells directly online and has its own ROSE Stores (including Bocholt, just across the Dutch border). No regular dealer network.' }
};

function toggleDealer() {
  const box = document.getElementById('gk-dealer');
  const collapsed = box.classList.toggle('collapsed');
  document.getElementById('gk-dealer-toggle').textContent = collapsed ? '+' : '–';
  document.getElementById('gk-dealer-toggle-label').textContent = collapsed ? 'Expand' : 'Collapse';
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
    note.innerHTML = `${loc.label} <a href="${loc.site}" target="_blank" rel="noopener">To the ${brand} website →</a>`;
    note.style.display = 'block';
    off.style.display = 'none';
  } else {
    note.style.display = 'none';
    off.innerHTML = `Or use the official dealer locator: <a href="${loc.url}" target="_blank" rel="noopener">${brand} dealer locator →</a>`;
    off.style.display = 'block';
  }
}

function zoekDealer() {
  const brand = document.getElementById('dealer-brand').value;
  const pcRaw = document.getElementById('dealer-pc').value.trim().toUpperCase();
  const err = document.getElementById('dealer-err');
  const pcOk = /^[1-9]\d{3}\s?[A-Z]{2}$/.test(pcRaw) || /^[1-9]\d{3}$/.test(pcRaw) || /^\d{5}$/.test(pcRaw) || /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/.test(pcRaw);
  if (!pcOk) { err.style.display = 'block'; return; }
  err.style.display = 'none';
  const loc = dealerLocators[brand];
  const term = (brand && loc && !loc.direct) ? brand + ' bike dealer' : 'gravel bike shop';
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
function bikeWeight(b) { const m = String(b.weightLabel).match(/(\d+)[.,](\d+)/); return m ? parseFloat(m[1] + '.' + m[2]) : 99; }
function geoShort(g) { return {'Race Gravel':'racing','Adventure Gravel':'adventure','Bikepacking / Touring':'bikepacking'}[g] || g; }

function parseQuery(q) {
  const s = norm(q);
  const c = { brand: [], geo: [] };
  let objective = 'none';

  if(/elektr|e-?bike|ebike| motor|trapondersteun|ondersteun|accu|electric|pedal assist|battery|akku|unterstutz/.test(s)) c.ebike = true;
  if(/niet[- ]?elektr|geen motor|gewone fiets|zonder motor|niet-?elektrisch|non[- ]?electric|not electric|no motor|without (a )?motor|nicht[- ]?elektr|ohne motor|kein(en)? motor/.test(s)) c.ebike = false;
  if(/\b32\s*(inch|inches|in\b|"|”|zoll|-inch)|\b32er\b/.test(s)) c.wielmaat = '32';

  let sf = s;
  if(/carbon[- ]?(wiel|wheel|laufr)/.test(sf)) { c.wheels = 'carbon'; sf = sf.replace(/carbon[- ]?(wielen?|wheels?|laufrad|laufrader|laufradern)/g, ' '); }
  else if(/(alumin[a-z]*|alu|alloy)[- ]?(wiel|wheel|laufr)/.test(sf)) { c.wheels = 'aluminium'; sf = sf.replace(/(alumin[a-z]*|alu|alloy)[- ]?(wielen?|wheels?|laufrad|laufrader|laufradern)/g, ' '); }
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

  let pm = s.match(/(?:onder|minder dan|tot|maximaal|max|hooguit|budget van|rond|ongeveer|under|below|less than|up to|around|about|budget of|<)\s*(?:de\s*|the\s*|€\s*)?(\d[\d.,\s]{2,})/);
  if(pm) { const num = parseInt(pm[1].replace(/[^\d]/g, '')); if(num >= 300) c.priceMax = num; }
  let pmin = s.match(/(?:boven|meer dan|vanaf|minimaal|minstens|over|above|more than|from|at least|>)\s*(?:de\s*|the\s*|€\s*)?(\d[\d.,\s]{2,})/);
  if(pmin) { const num = parseInt(pmin[1].replace(/[^\d]/g, '')); if(num >= 300) c.priceMin = num; }

  let wm = s.match(/(?:lichter dan|onder|max|minder dan|lighter than|under|below|less than|<)\s*(?:de\s*)?(\d{1,2}(?:[.,]\d)?)\s*kg/);
  if(wm) c.weightMax = parseFloat(wm[1].replace(',', '.'));

  let tm = s.match(/(\d{2})\s*mm/);
  if(tm) c.tireMin = parseInt(tm[1]);
  if(!c.tireMin && /brede band|dikke band|breedste|brede banden|dikke banden|wide tyre|wide tire|fat tyre|fat tire|widest|breite reifen|breiten reifen|dicke reifen|dicken reifen/.test(s)) c.tireMin = 48;

  let spd = s.match(/\b(9|1[0-3])\s*[- ]?\s*(?:speed|versnellingen|speeds|gears)\b/);
  if(spd) c.speed = parseInt(spd[1], 10);

  let ym = s.match(/\b(202[2-9])\b/);
  if(ym) c.year = parseInt(ym[1]);
  let szm = s.match(/\b(?:maat|size)\s+(2xs|xxs|xs|m\/l|xxl|2xl|xl|s|m|l|\d{2}(?:[.,]5)?)\b/);
  if(szm) { const cats = sizeCatOf(szm[1]); if(cats.length) c.size = cats[0]; }

  if(/lichtste|lichtst|laagste gewicht|minst.*kg|lightest|lowest weight/.test(s)) objective = 'lightest';
  else if(/goedkoopste|laagste prijs|minst.*kost|goedkoopst|cheapest|lowest price/.test(s)) objective = 'cheapest';
  else if(/duurste|hoogste prijs|meest premium|prijzigste|exclusiefste|most expensive|priciest|most premium/.test(s)) objective = 'priciest';
  else if(/budget|betaalbaar|voordelig|prijs-?kwaliteit|instap|beginner|weinig geld|beste koop|scherp geprijsd|affordable|value|cheap|entry|best buy/.test(s)) objective = 'value';
  else if(/snelste|aero|fastest|quickest/.test(s)) objective = 'fastest';
  else if(/beste|aanrader|aanbevel|advies|welke.*kopen|top\b|wat moet ik|best|recommend|advice|which.*buy|what should i/.test(s)) objective = 'best';

  return { c, objective };
}

function bikeMatchesConstraints(b, c) {
  if(c.wielmaat && (b.wheelSize || '700c') !== c.wielmaat) return false;
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
  let noun = c.ebike === true ? 'e-gravel bike' : (c.ebike === false ? 'non-electric gravel bike' : 'gravel bike');
  let mods = [];
  if(c.brand.length) mods.push('from ' + c.brand.join('/'));
  if(c.frame) mods.push('with a ' + (c.frame === 'staal' ? 'steel' : c.frame) + ' frame');
  if(c.geo.length) mods.push('for ' + c.geo.map(geoShort).join('/'));
  if(c.damping) mods.push('with suspension/damping');
  if(c.mounts) mods.push('with mounts');
  if(c.fender) mods.push('with fender mounts');
  if(c.wheels) mods.push('with ' + c.wheels + ' wheels');
  if(c.drivetrain) mods.push('with ' + c.drivetrain + ' drivetrain');
  if(c.shifting) mods.push('with ' + c.shifting);
  if(c.group) mods.push('with ' + (c.group === 'grx' || c.group === 'xplr' || c.group === 'di2' ? c.group.toUpperCase() : c.group[0].toUpperCase() + c.group.slice(1)) + ' groupset');
  if(c.priceMax) mods.push('under €' + c.priceMax.toLocaleString('en-GB'));
  if(c.priceMin) mods.push('over €' + c.priceMin.toLocaleString('en-GB'));
  if(c.weightMax) mods.push('lighter than ' + String(c.weightMax) + ' kg');
  if(c.tireMin) mods.push('with tyres from ' + c.tireMin + ' mm');
  if(c.year) mods.push('from model year ' + c.year);
  if(c.speed) mods.push('with a ' + c.speed + '-speed cassette');
  if(c.size) mods.push('available in size ' + c.size);
  return noun + (mods.length ? ' ' + mods.join(', ') : '');
}

function valueReason(b) {
  return (b.frame === 'carbon' ? 'carbon frame' : 'robust aluminium frame') + ', ' + groupLabel(b) + ' and ' + b.weightLabel + ' for this price';
}

function aiCard(b) {
  return `<div class="gk-ai-card">
    <div class="gk-ai-card-h"><span class="gk-ai-card-name">${b.brand} ${b.model}</span><span class="gk-ai-card-price">${b.priceLabel}</span></div>
    <div class="gk-ai-card-tags"><span class="gk-geo-tag ${geoClass(b.geo)}">${b.geo}</span>${b.ebike ? '<span class="gk-badge ebike">⚡ E-bike</span>' : ''}</div>
    <div class="gk-ai-card-spec">model year ${b.year} · ${b.weightLabel} · ${driveLabel(b.drivetrain)} · ${groupLabel(b)} · max ${b.maxTire} mm · ${b.frame === 'carbon' ? 'carbon' : 'aluminium'}${hasDamping(b) ? ' · ' + b.damping : ''}</div>
    <a href="${b.url}" target="_blank" rel="noopener">View bike →</a>
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
    panel.innerHTML = `<button class="gk-ai-close" onclick="clearAi()" title="Close" aria-label="Close answer">×</button><div class="gk-ai-text">I couldn't find a bike that matches this. Try something broader, for example <em>"lightest gravel bike"</em> or <em>"best budget bike"</em>.</div>`;
    return;
  }

  const top = res.slice(0, 3);
  const n = res.length;
  const t0 = top[0];
  let lead;
  if(objective === 'lightest') lead = `The lightest ${scopeNoun(c)} is the <strong>${t0.brand} ${t0.model}</strong> — ${t0.weightLabel}, ${t0.priceLabel}.`;
  else if(objective === 'cheapest') lead = `The cheapest ${scopeNoun(c)} is the <strong>${t0.brand} ${t0.model}</strong> at ${t0.priceLabel}.`;
  else if(objective === 'priciest') lead = `The most expensive / most premium ${scopeNoun(c)} is the <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}).`;
  else if(objective === 'value') lead = `Best value ${scopeNoun(c)}: the <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}) — ${valueReason(t0)}.`;
  else if(objective === 'fastest') lead = `For pure speed the <strong>${t0.brand} ${t0.model}</strong> is a top choice — ${t0.weightLabel}, ${t0.geo}.`;
  else if(objective === 'best') lead = `My best all-round recommendation (${scopeNoun(c)}): the <strong>${t0.brand} ${t0.model}</strong> (${t0.priceLabel}) — ${valueReason(t0)}.`;
  else lead = `Based on your question I found ${n} matching ${n === 1 ? 'bike' : 'bikes'}${c.brand.length || c.geo.length || c.ebike !== undefined || c.frame || c.damping || c.mounts || c.fender || c.priceMax || c.priceMin || c.weightMax || c.tireMin || c.drivetrain || c.shifting || c.year || c.size ? ' (' + scopeNoun(c) + ')' : ''}. My recommendations:`;

  const cards = top.map(aiCard).join('');
  const apply = n > 3
    ? `<div class="gk-ai-more">…and ${n - 3} more. <button class="gk-ai-apply" onclick="applyAssistant()">Show all ${n} in the list ↓</button></div>`
    : `<button class="gk-ai-apply" onclick="applyAssistant()">Show in the list ↓</button>`;

  panel.innerHTML = `<button class="gk-ai-close" onclick="clearAi()" title="Close" aria-label="Close answer">×</button><div class="gk-ai-text">${lead}</div><div class="gk-ai-cards">${cards}</div><div>${apply}</div>`;
}

function applyAssistant() {
  const c = lastConstraints;
  if(!c) return;
  filterKeys.forEach(k => state[k] = multiKeys.has(k) ? [] : 'all');
  if(c.ebike === true) state.etype = 'electric'; else if(c.ebike === false) state.etype = 'normal';
  if(c.wielmaat) state.wielmaat = c.wielmaat;
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
function cmpJoin(parts) { return parts.length <= 1 ? (parts[0] || '') : parts.slice(0, -1).join(', ') + ' and ' + parts[parts.length - 1]; }
function cmpNames(arr, cap) {
  cap = cap || 3;
  const names = arr.map(cmpStrong);
  if (names.length <= cap) return cmpJoin(names);
  return arr.length + ' bikes, including ' + names[0] + ' and ' + names[1];
}
function cmpEur(n) { return '€' + n.toLocaleString('en-GB'); }
function cmpKg(w) { return (Math.round(w * 10) / 10).toFixed(1) + ' kg'; }
function cmpCap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }
function cmpGroupBy(list, fn) { const m = new Map(); list.forEach(b => { const k = fn(b); if (!m.has(k)) m.set(k, []); m.get(k).push(b); }); return m; }
function cmpNm(b) { const m = String(b.motor || '').match(/(\d+)\s*Nm/); return m ? parseInt(m[1]) : null; }
function cmpWh(b) { const m = String(b.battery || '').match(/(\d+)\s*Wh/); return m ? parseInt(m[1]) : null; }
const cmpGeoLong = { 'Race Gravel': 'race geometry (fast, sporty position)', 'Adventure Gravel': 'adventure geometry (comfortable and versatile)', 'Bikepacking / Touring': 'bikepacking geometry (upright, made for luggage)' };
const cmpGeoShort = { 'Race Gravel': 'race geometry', 'Adventure Gravel': 'adventure geometry', 'Bikepacking / Touring': 'bikepacking geometry' };
const cmpDriveShort = { '1x': '1×', '2x': '2×', '1x/2x': '1× or 2× (configurable)' };
const cmpAdvice = {
  cheap: 'want to spend as little as possible',
  new: 'want the latest tech and standards',
  expensive: 'are after the best of the best',
  light: 'want to ride as light as possible (climbing and speed)',
  ebike: 'want pedal assistance',
  noebike: 'prefer to ride purely on your own power',
  damp: 'want maximum comfort on rough terrain',
  tire: 'regularly head for rough terrain',
  mounts: 'have bikepacking or touring plans',
  fender: 'also ride in the rain or to work',
  twoX: 'want small gear steps and a wide range',
  oneX: 'want simplicity and little maintenance',
  elec: 'want crisp, effortless electronic shifting',
  mech: 'want to keep it simple and affordable',
  carbon: 'want a light, vibration-damping frame',
  alu: 'want a robust, affordable frame',
  cwheels: 'want light, fast wheels',
  georace: 'are mainly after speed',
  geoadv: 'want one versatile bike for everything',
  geotour: 'are planning long trips with luggage'
};

function cmpTraits(b, list) {
  const t = [];
  const uniqMin = fn => { const vs = list.map(fn); const mn = Math.min(...vs); return fn(b) === mn && vs.filter(v => v === mn).length === 1 && mn !== Math.max(...vs); };
  const uniqMax = fn => { const vs = list.map(fn); const mx = Math.max(...vs); return fn(b) === mx && vs.filter(v => v === mx).length === 1 && mx !== Math.min(...vs); };
  const only = pred => pred(b) && list.filter(pred).length === 1;
  if (uniqMin(x => x.price)) t.push({ k: 'cheap', txt: 'the cheapest (' + b.priceLabel + ')' });
  if (uniqMax(x => x.price)) t.push({ k: 'expensive', txt: 'the most expensive (' + b.priceLabel + ')' });
  if (uniqMin(bikeWeight)) t.push({ k: 'light', txt: 'the lightest (' + b.weightLabel + ')' });
  if (uniqMax(bikeWeight)) t.push({ k: 'heavy', txt: 'the heaviest (' + b.weightLabel + ')' });
  if (uniqMax(x => x.year)) t.push({ k: 'new', txt: 'the newest model year (' + b.year + ')' });
  if (uniqMin(x => x.year)) t.push({ k: 'old', txt: 'the oldest model year (' + b.year + '), often keenly priced' });
  if (only(x => x.ebike)) t.push({ k: 'ebike', txt: 'the only e-bike' + (b.motor ? ' (' + b.motor + (b.battery ? ', ' + b.battery : '') + ')' : '') });
  if (only(x => !x.ebike)) t.push({ k: 'noebike', txt: 'the only one without a motor' });
  if (only(x => hasDamping(x))) t.push({ k: 'damp', txt: 'the only one with suspension/damping (' + b.damping + ')' });
  if (only(x => !hasDamping(x))) t.push({ k: 'nodamp', txt: 'the only one <em>without</em> suspension/damping' });
  if (uniqMax(x => x.maxTire)) t.push({ k: 'tire', txt: 'the most tyre clearance (up to ' + b.maxTire + ' mm)' });
  if (only(x => x.mounts)) t.push({ k: 'mounts', txt: 'the only one with mounts' });
  if (only(x => !x.mounts)) t.push({ k: 'nomounts', txt: 'the only one without mounts' });
  if (only(x => x.fender)) t.push({ k: 'fender', txt: 'the only one with fender mounts' });
  if (only(x => !x.fender)) t.push({ k: 'nofender', txt: 'the only one without fender mounts' });
  if (only(x => String(x.drivetrain).includes('2x'))) t.push({ k: 'twoX', txt: 'the only one with a 2× drivetrain' });
  if (only(x => String(x.drivetrain) === '1x')) t.push({ k: 'oneX', txt: 'the only one with a 1× drivetrain' });
  if (only(x => x.electronic)) t.push({ k: 'elec', txt: 'the only one with electronic shifting (' + groupLabel(b) + ')' });
  if (only(x => !x.electronic)) t.push({ k: 'mech', txt: 'the only one with mechanical shifting (' + groupLabel(b) + ')' });
  if (only(x => x.frame === 'carbon')) t.push({ k: 'carbon', txt: 'the only one with a carbon frame' });
  if (only(x => x.frame === 'aluminium')) t.push({ k: 'alu', txt: 'the only one with an aluminium frame' });
  if (only(x => x.wheels === 'carbon')) t.push({ k: 'cwheels', txt: 'the only one with carbon wheels' });
  if (only(x => x.shifting === 'SRAM')) t.push({ k: 'sram', txt: 'the only one with SRAM' });
  if (only(x => x.shifting === 'Shimano')) t.push({ k: 'shimano', txt: 'the only one with Shimano' });
  if (new Set(list.map(x => x.geo)).size > 1 && list.filter(x => x.geo === b.geo).length === 1) {
    const gk = { 'Race Gravel': 'georace', 'Adventure Gravel': 'geoadv', 'Bikepacking / Touring': 'geotour' }[b.geo];
    t.push({ k: gk || 'geo', txt: 'the only one with ' + (cmpGeoShort[b.geo] || b.geo) });
  }
  return t;
}

function buildCompareHTML(list) {
  const n = list.length;
  const head = '<div class="gk-cmp-head">🤖 AI overview: the differences at a glance <span class="gk-cmp-count">' + n + ' ' + (n === 1 ? 'bike' : 'bikes') + '</span></div>';
  const foot = '<div class="gk-cmp-foot">Generated automatically from the specifications of the bikes in your selection.</div>';

  if (n === 0) return head + '<div class="gk-cmp-empty">No bike currently matches your filters. Widen your filters and click again.</div>';

  if (n === 1) {
    const b = list[0];
    return head + '<div class="gk-cmp-intro">Exactly one bike is left: ' + cmpStrong(b) + ' (' + b.priceLabel + ', ' + b.weightLabel + '). So there is nothing to compare. In short: ' + b.geoDesc + '</div>' + foot;
  }

  const sims = [];
  const secs = [];

  const gE = cmpGroupBy(list, b => b.ebike);
  if (gE.size === 1) sims.push(list[0].ebike ? 'all electric (e-bike)' : 'all non-electric');
  else secs.push({ i: '🚲', t: 'Type', h: cmpNames(gE.get(true)) + (gE.get(true).length === 1 ? ' is an e-bike' : ' are e-bikes') + '; ' + cmpNames(gE.get(false)) + ' ' + (gE.get(false).length === 1 ? 'has' : 'have') + ' no motor. With e-bikes, expect more weight and a higher price, but also pedal assistance.' });

  const gY = cmpGroupBy(list, b => b.year);
  if (gY.size === 1) sims.push('all model year ' + list[0].year);
  else {
    const ys = [...gY.entries()].sort((a, b) => b[0] - a[0]);
    secs.push({ i: '📅', t: 'Model year', h: ys.map(([k, v]) => '<strong>' + k + '</strong>: ' + cmpNames(v)).join(' · ') + '. A newer model year usually means the latest standards and specs; an older model year is often more keenly priced.' });
  }

  const pmin = Math.min(...list.map(b => b.price)), pmax = Math.max(...list.map(b => b.price));
  if (pmin === pmax) sims.push('the same guide price (' + cmpEur(pmin) + ')');
  else {
    const bMin = list.filter(b => b.price === pmin), bMax = list.filter(b => b.price === pmax);
    secs.push({ i: '💶', t: 'Price', h: 'Prices range from ' + cmpEur(pmin) + ' (' + cmpNames(bMin, 2) + ') to ' + cmpEur(pmax) + ' (' + cmpNames(bMax, 2) + ') — a difference of ' + cmpEur(pmax - pmin) + '.' });
  }

  const ws = list.map(bikeWeight);
  const wmin = Math.min(...ws), wmax = Math.max(...ws);
  if (wmax - wmin < 0.05) sims.push('virtually the same weight (' + list[0].weightLabel + ')');
  else {
    const bL = list.filter(b => bikeWeight(b) === wmin), bH = list.filter(b => bikeWeight(b) === wmax);
    secs.push({ i: '⚖️', t: 'Weight', h: 'The lightest is ' + cmpNames(bL, 2) + ' at ' + bL[0].weightLabel + '; the heaviest is ' + cmpNames(bH, 2) + ' at ' + bH[0].weightLabel + ' — a difference of about ' + cmpKg(wmax - wmin) + '. Lighter climbs and handles more easily.' });
  }

  const matParts = [];
  const gF = cmpGroupBy(list, b => b.frame);
  if (gF.size === 1) sims.push('all with a ' + (list[0].frame === 'staal' ? 'steel' : list[0].frame) + ' frame');
  else matParts.push('Frame — ' + [...gF.entries()].map(([k, v]) => cmpCap(k) + ': ' + cmpNames(v)).join(' · ') + '. Carbon is lighter and damps vibrations; aluminium is robust and cheaper.');
  const gW = cmpGroupBy(list, b => b.wheels);
  if (gW.size === 1) sims.push('all ' + list[0].wheels + ' wheels');
  else matParts.push('Wheels — ' + [...gW.entries()].map(([k, v]) => cmpCap(k) + ': ' + cmpNames(v)).join(' · ') + '. Carbon wheels are lighter and stiffer, aluminium cheaper.');
  if (matParts.length) secs.push({ i: '🧱', t: 'Material', h: matParts.join('<br>') });

  const shiftParts = [];
  const gS = cmpGroupBy(list, b => b.shifting);
  if (gS.size === 1) sims.push('all ' + list[0].shifting + ' shifting');
  else shiftParts.push([...gS.entries()].map(([k, v]) => k + ': ' + cmpNames(v)).join(' · ') + '.');
  const gT = cmpGroupBy(list, b => b.electronic);
  if (gT.size === 1) sims.push(list[0].electronic ? 'all electronic shifting' : 'all mechanical shifting');
  else shiftParts.push('Electronic (wireless and precise, but pricier): ' + cmpNames(gT.get(true)) + ' · mechanical (simple and affordable): ' + cmpNames(gT.get(false)) + '.');
  if (shiftParts.length) secs.push({ i: '⚙️', t: 'Shifting', h: shiftParts.join('<br>') });

  const gD = cmpGroupBy(list, b => String(b.drivetrain));
  if (gD.size === 1) sims.push('all ' + (cmpDriveShort[String(list[0].drivetrain)] || list[0].drivetrain) + ' drivetrain');
  else secs.push({ i: '🔗', t: 'Drivetrain', h: [...gD.entries()].map(([k, v]) => (cmpDriveShort[k] || k) + ': ' + cmpNames(v)).join(' · ') + '. 1× is simple and light; 2× gives more and smaller gear steps.' });

  const tmin = Math.min(...list.map(b => b.maxTire)), tmax = Math.max(...list.map(b => b.maxTire));
  if (tmin === tmax) sims.push('the same max. tyre width (' + tmin + ' mm)');
  else {
    const bS = list.filter(b => b.maxTire === tmin), bT = list.filter(b => b.maxTire === tmax);
    secs.push({ i: '🛞', t: 'Tyre width', h: 'The maximum tyre width ranges from ' + tmin + ' mm (' + cmpNames(bS, 2) + ') to ' + tmax + ' mm (' + cmpNames(bT, 2) + '). More tyre clearance means more grip and comfort on rough terrain.' });
  }

  const gC = cmpGroupBy(list, b => hasDamping(b));
  if (gC.size === 1) sims.push(hasDamping(list[0]) ? 'all with suspension/damping' : 'none has suspension/damping');
  else {
    const withD = gC.get(true);
    const withTxt = withD.length <= 4 ? cmpJoin(withD.map(b => cmpStrong(b) + ' (' + b.damping + ')')) : cmpNames(withD);
    secs.push({ i: '〰️', t: 'Comfort', h: 'With suspension/damping: ' + withTxt + '. Without: ' + cmpNames(gC.get(false)) + '. Damping absorbs vibrations and bumps on rough terrain.' });
  }

  const prak = [];
  const gM = cmpGroupBy(list, b => b.mounts);
  if (gM.size === 1) sims.push(list[0].mounts ? 'all with mounts for bags' : 'none has extra mounts');
  else prak.push('Mounts (handy for bikepacking): yes on ' + cmpNames(gM.get(true)) + ', not on ' + cmpNames(gM.get(false)) + '.');
  const gFd = cmpGroupBy(list, b => b.fender);
  if (gFd.size === 1) sims.push(list[0].fender ? 'all with fender mounts' : 'none has fender mounts');
  else prak.push('Fenders: possible on ' + cmpNames(gFd.get(true)) + ', not on ' + cmpNames(gFd.get(false)) + '.');
  if (prak.length) secs.push({ i: '🔩', t: 'Practical', h: prak.join('<br>') });

  const gG = cmpGroupBy(list, b => b.geo);
  if (gG.size === 1) sims.push('all with ' + (cmpGeoLong[list[0].geo] || list[0].geo));
  else secs.push({ i: '🧭', t: 'Geometry & riding style', h: [...gG.entries()].map(([k, v]) => (cmpGeoLong[k] || k) + ': ' + cmpNames(v)).join(' · ') + '.' });

  const ebs = list.filter(b => b.ebike);
  if (ebs.length >= 2) {
    const eParts = [];
    const nms = ebs.map(cmpNm).filter(v => v !== null);
    if (nms.length >= 2 && Math.min(...nms) !== Math.max(...nms)) {
      const lo = ebs.find(b => cmpNm(b) === Math.min(...nms)), hi = ebs.find(b => cmpNm(b) === Math.max(...nms));
      eParts.push('motor torque ranges from ' + Math.min(...nms) + ' Nm (' + cmpStrong(lo) + ') to ' + Math.max(...nms) + ' Nm (' + cmpStrong(hi) + ')');
    }
    const whs = ebs.map(cmpWh).filter(v => v !== null);
    if (whs.length >= 2 && Math.min(...whs) !== Math.max(...whs)) {
      const lo = ebs.find(b => cmpWh(b) === Math.min(...whs)), hi = ebs.find(b => cmpWh(b) === Math.max(...whs));
      eParts.push('battery capacity from ' + Math.min(...whs) + ' Wh (' + cmpStrong(lo) + ') to ' + Math.max(...whs) + ' Wh (' + cmpStrong(hi) + ')');
    }
    if (eParts.length) secs.push({ i: '⚡', t: 'E-bike system', h: 'Among the e-bikes: ' + eParts.join('; ') + '. More torque = stronger assistance; more Wh = longer range.' });
  }

  let intro;
  if (!secs.length) intro = '<div class="gk-cmp-intro">These ' + n + ' bikes are virtually identical on the key specs (' + sims.join(' · ') + '). The difference is mainly brand, finish and design.</div>';
  else if (sims.length) intro = '<div class="gk-cmp-intro">What these ' + n + ' bikes have <strong>in common</strong>: ' + sims.join(' · ') + '. The real differences are in: <strong>' + secs.map(s => s.t.toLowerCase()).join(', ') + '</strong>.</div>';
  else intro = '<div class="gk-cmp-intro">These ' + n + ' bikes differ on almost every point — these are the most important:</div>';

  const secsHtml = secs.map(s => '<div class="gk-cmp-sec"><strong class="gk-cmp-t">' + s.i + ' ' + s.t + ':</strong> ' + s.h + '</div>').join('');

  let perBike = '';
  if (n <= 6) {
    const sorted = list.slice().sort((a, b) => a.price - b.price);
    perBike = '<div class="gk-cmp-bikes-title">What makes each bike unique?</div>' + sorted.map(b => {
      const tr = cmpTraits(b, list);
      const phr = tr.slice(0, 3).map(t => t.txt);
      const adv = tr.map(t => cmpAdvice[t.k]).filter(Boolean).slice(0, 2);
      const base = phr.length ? cmpJoin(phr) + '.' : 'sits right in the middle of this selection for price and spec.';
      const advTxt = adv.length ? ' <em>Choose this one if you ' + adv.join(' and ') + '.</em>' : '';
      return '<div class="gk-cmp-bike"><strong>' + b.brand + ' ' + b.model + '</strong> (' + b.priceLabel + ', ' + b.weightLabel + ') — ' + base + advTxt + '</div>';
    }).join('');
  }

  const tip = n > 6 ? '<div class="gk-cmp-tip">💡 With ' + n + ' bikes this stays a broad comparison. Narrow your filters to about 2–6 results and you will also get a comparison per bike here.</div>' : '';

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
  if(list.length === 0) { body.innerHTML = '<div class="gk-live-empty">No bikes — adjust the filters.</div>'; return; }
  body.innerHTML = list.slice().sort((a,b) => a.brand.localeCompare(b.brand) || a.model.localeCompare(b.model)).map(b => {
    const ph = bikePhoto(b);
    const thumb = `<span class="gk-live-thumb">${ph ? `<img src="${ph}" alt="" loading="lazy" decoding="async" onerror="this.parentNode.textContent='🚵'">` : '🚵'}</span>`;
    return `<a class="gk-live-item" href="${b.url}" target="_blank" rel="noopener" title="View the ${b.brand} ${b.model} on the website">${thumb}<span class="gk-live-text"><span class="gk-live-brand">${b.brand}${b.ebike ? ' <span class="gk-live-e">⚡</span>' : ''}</span><span class="gk-live-model">${b.model}</span></span><svg class="gk-live-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>`;
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
    if(lbl) lbl.textContent = c ? 'Expand' : 'Collapse';
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
  if(sub) sub.textContent = `${total} models from ${brands} brands, all on sale in the Netherlands (incl. ${ebikeCount} e-gravel bikes). Updated June 2026.`;
  const desc = document.getElementById('gk-ai-desc');
  if(desc) desc.textContent = `Ask a question in plain language and get a recommendation based on all ${total} models — for example about price, weight, suspension or use.`;
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
  b1:{ idx:1, label:'up to €2,000',    classes:['1','2'] },
  b2:{ idx:2, label:'€2,000–3,500',  classes:['3'] },
  b3:{ idx:3, label:'€3,500–5,000',  classes:['4'] },
  b4:{ idx:4, label:'€5,000+',       classes:['5','6'] }
};
function bikeBudgetIdx(p){ if(p<=2000) return 1; if(p<=3500) return 2; if(p<=5000) return 3; return 4; }

const USE_GEO = {
  bos:         { primary:'Adventure Gravel',      secondary:[],                                       label:'to ride relaxed through forest &amp; sand' },
  bikepacking: { primary:'Bikepacking / Touring', secondary:['Adventure Gravel'],                     label:'to ride with bags' },
  racen:       { primary:'Race Gravel',           secondary:[],                                       label:'to ride hard' },
  events:      { primary:'Race Gravel',           secondary:['Adventure Gravel'],                     label:'to race &amp; ride events' },
  alles:       { primary:'Adventure Gravel',      secondary:['Race Gravel','Bikepacking / Touring'],  label:'to do a bit of everything' }
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
const HEIGHT_LABEL  = { h1:'up to 165 cm', h2:'165–175 cm', h3:'175–185 cm', h4:'185 cm and taller' };
function sizeFits(b){
  if(!finder.height) return true;
  const r=bikeHeightRange(b); if(!r) return true; /* maat onbekend → niet afstraffen */
  const bk=HEIGHT_BUCKET[finder.height];
  return r[0] <= bk[1] && r[1] >= bk[0]; /* overlap rijderlengte ↔ fietsmaten */
}

const REGION_NAME = { maasduinen:'the Maasduinen', veluwe:'the Veluwe', limburg:'South Limburg', ardennen:'the Ardennes', overal:'' };

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
  if(d===0){ budget=32; R.push({w:32,t:'Falls right within your budget'}); }
  else if(d===-1){ budget=22; R.push({w:22,t:'Keenly priced, below your budget'}); }
  else if(d===1){ budget=13; R.push({w:13,t:'Just above your budget'}); }
  else if(d===-2){ budget=9; R.push({w:9,t:'Well below your budget'}); }
  else if(d===2){ budget=4; }
  else { budget=0; }

  /* Gebruik / geometrie — 24 */
  const ug = USE_GEO[finder.use];
  let geo;
  if(b.geo===ug.primary){ geo=24; R.push({w:30,t:'Geometry is perfect if you want '+ug.label}); }
  else if(ug.secondary.indexOf(b.geo)>=0){ geo=15; R.push({w:18,t:'Suitable geometry if you want '+ug.label}); }
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
    R.push({w:14, t:{beginner:'Accessible spec to start with',gemiddeld:'Nice all-round mid-range spec',gevorderd:'Sporty spec for regular riders',expert:'High-end spec for maximum performance'}[finder.level]});
  }

  /* Maat — 12 (lengte → leverbare maat; verbergt niets, duwt alleen) */
  const fits = sizeFits(b);
  b._sizeFit = fits;
  const maat = fits ? 12 : 0;

  /* Voorkeur — 10 (gemiddeld/gevorderd: onderhoud · expert: fit-prioriteit + onderhoud samen) */
  const prefNudge=(kind)=>{
    if(kind==='weight'){ return {v:Math.round(10*light), r:lightB?'Light — your priority':null}; }
    if(kind==='speed'){ const race=b.geo==='Race Gravel'?1:0; return {v:Math.round(10*(0.6*race+0.4*light)), r:(race&&lightB)?'Fast & race-oriented — your priority':null}; }
    if(kind==='comfort'){ const c=(damp?0.4:0)+(b.maxTire>=45?0.35:b.maxTire>=42?0.18:0)+((b.geo==='Adventure Gravel'||b.geo==='Bikepacking / Touring')?0.25:0); return {v:Math.round(10*Math.min(1,c)), r:c>=0.5?'Comfortable — your priority':null}; }
    if(kind==='mounts'){ const m=(b.mounts?0.6:0)+(b.geo==='Bikepacking / Touring'?0.4:0); return {v:Math.round(10*Math.min(1,m)), r:b.mounts?'Plenty of mounting options — your priority':null}; }
    if(kind==='low'){ return {v:Math.min(10,(b.electronic?0:5)+(b.drivetrain==='1x'?5:2)), r:!b.electronic?('Low-maintenance: mechanical'+(b.drivetrain==='1x'?' 1×':'')):null}; }
    if(kind==='tech'){ return {v:Math.min(10,(b.electronic?7:0)+(b.integrated?3:0)), r:b.electronic?'Latest tech: wireless shifting':null}; }
    if(kind==='perf'){ return {v:Math.round(10*(0.6*light+0.4*(groupRank(b)>=4?1:groupRank(b)>=3?0.5:0))), r:(lightB&&groupRank(b)>=4)?'Light & high-end groupset':null}; }
    if(kind==='value'){ return {v:Math.round(10*valuePct(b)), r:valuePct(b)>=0.6?'Strong value for money':null}; }
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
  if(regHit && REGION_NAME[reg]) R.push({w:13,t:'Suitable for '+REGION_NAME[reg]});

  /* Extra navolgbare pluspunten */
  if(wide) R.push({w:11,t:'Lots of tyre clearance: '+b.maxTire+' mm'});
  if(b.electronic) R.push({w:10,t:'Future-proof wireless groupset'});
  if(b.mounts && finder.use!=='bikepacking' && !(finder.level==='expert'&&finder.fitprio==='mounts')) R.push({w:9,t:'Mounts for luggage & fenders'});

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
    maasduinen:'In the Maasduinen you ride a lot of loose sand and forest paths — wide tyres (45 mm+) and a bit of extra comfort really make the difference here.',
    veluwe:'The Veluwe has sandy and forest tracks — comfort and grip pay off here, so go for slightly wider tyres.',
    limburg:'South Limburg goes up and down a lot — a light bike with enough low gears climbs much more pleasantly.',
    ardennen:'In the Ardennes you ride long, tough climbs — weight and a wide gear range really count here.',
    overal:''
  }[finder.region] || '';
}

function currentTip(){
  return {
    race:'Coming from a road bike, the wider tyres and slightly calmer handling take some getting used to — but you gain a lot of comfort and grip on loose ground.',
    mtb:'Coming from a mountain bike, a gravel bike feels lively and fast on the road; you sit sportier and roll much more easily.',
    oldgravel:'Switching from an older gravel bike, you will mainly notice the extra tyre clearance, more modern groupset and lower weight.',
    none:'If this is (more or less) your first bike, you are off to a good start: versatile, forgiving and ready to rack up the kilometres.'
  }[finder.current] || '';
}

/* Waarom #1 boven #2? — concrete verschillen */
function advEdge(a,b){
  const e=[];
  if(a.maxTire>=b.maxTire+3) e.push('more tyre clearance ('+a.maxTire+' vs '+b.maxTire+' mm)');
  if(bikeWeight(a)+0.3<bikeWeight(b)) e.push('a lighter frame');
  if(a.mounts&&!b.mounts) e.push('more mounts for luggage');
  if(hasDamping(a)&&!hasDamping(b)) e.push('damping for extra comfort');
  if(groupRank(a)>groupRank(b)) e.push('a higher-end groupset');
  if(a.price<=b.price*0.92) e.push('a keener price');
  if(a.electronic&&!b.electronic) e.push('wireless shifting');
  return e;
}
function joinNl(arr){ return arr.length<=1 ? (arr[0]||'') : arr.slice(0,-1).join(', ')+' and '+arr[arr.length-1]; }

function buildAdvice(top, second){
  const ug=USE_GEO[finder.use], bb=BUDGET_BANDS[finder.budget];
  const frameRec={beginner:'a reliable aluminium or entry-level carbon',gemiddeld:'a solid carbon or top-class aluminium',gevorderd:'a light carbon',expert:'a lightweight carbon'}[finder.level];
  const tireRec=(finder.use==='bikepacking'||finder.use==='bos')?45:(finder.use==='racen'?40:42);
  const regName=REGION_NAME[finder.region];
  const where=regName?` in <strong>${regName}</strong>`:'';
  const tip=regionTip(), cur=currentTip();
  if(!top){
    return `<div class="gk-advice-head"><span class="gk-fi-logo">${gorillaMini()}</span> Gorilla says</div>
      <p>I couldn't find a bike that fits this combination well — try a bigger budget or a different use.</p>`;
  }
  let lead = `For someone like you who mainly wants <strong>${ug.label}</strong>${where}, with <strong>${bb.label}</strong> to spend, I'd go for ${frameRec} <strong>${ug.primary}</strong> gravel bike with at least <strong>${tireRec} mm</strong> of tyre clearance. My number 1 is the <strong>${top.brand} ${top.model}</strong> (${top.priceLabel}) with a Match Score of <strong>${top._sc.score}%</strong>.`;
  let vs='';
  if(second){
    const edge=advEdge(top,second);
    vs = edge.length
      ? ` I'd pick the <strong>${top.brand} ${top.model}</strong> over the <strong>${second.brand} ${second.model}</strong> (${second._sc.score}%): you get ${joinNl(edge.slice(0,2))}.`
      : ` The <strong>${top.brand} ${top.model}</strong> and the <strong>${second.brand} ${second.model}</strong> (${second._sc.score}%) are very close — the first just wins on the overall match.`;
  }
  return `<div class="gk-advice-head"><span class="gk-fi-logo">${gorillaMini()}</span> Gorilla says</div>
    <p>${lead}${vs}</p>
    ${cur?`<div class="gk-advice-tip">🚲 ${cur}</div>`:''}
    ${tip?`<div class="gk-advice-tip">📍 ${tip}</div>`:''}`;
}

function finderCard(b){
  const sc=b._sc;
  const tier=sc.score>=85?'perfect':sc.score>=70?'sterk':'kan';
  const tierLabel={perfect:'Perfect match',sterk:'Strong choice',kan:'Possible, not ideal'}[tier];
  const sizeBadge = finder.height
    ? (b._sizeFit
        ? `<div class="gk-fsize gk-fsize-ok">✓ Available in your size (${HEIGHT_LABEL[finder.height]})</div>`
        : `<div class="gk-fsize gk-fsize-no">⚠️ Possibly not in your size — check the size advice at ${shopName(b)}</div>`)
    : '';
  return `<div class="gk-fcard gk-f-${tier}${finder.height&&!b._sizeFit?' gk-f-nosize':''}">
    <div class="gk-fscore-wrap"><div class="gk-fscore">🦍 ${sc.score}%</div><div class="gk-ftier">${tierLabel}</div></div>
    ${bikeThumb(b)}
    <div class="gk-brand">${b.brand}</div>
    <div class="gk-model">${b.model}</div>
    <div><span class="gk-geo-tag ${geoClass(b.geo)}">${b.geo}</span></div>
    <div class="gk-fprice">${b.priceLabel} · ⚖️ ${b.weightLabel} · ${groupLabel(b)}${isXplr(b) ? ' <span class="gk-spec-xplr">XPLR</span>' : ''}${isGrx(b) ? ' <span class="gk-spec-grx">GRX</span>' : ''}</div>
    ${sizeBadge}
    <div class="gk-freasons-lbl">Why the Gorilla picks this one</div>
    <ul class="gk-freasons">${sc.reasons.map(r=>`<li>${r}</li>`).join('')}</ul>
    <a class="gk-buy-btn" href="${b.url}" target="_blank" rel="noopener">See price at ${shopName(b)}</a>
    <button class="gk-cmpsel" type="button" data-key="${b.brand}|${b.model}" onclick="toggleCmpSel(this.dataset.key,this)" aria-pressed="false" title="Select to compare side by side (max. 4)">⇄ Compare</button>
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
    <div class="gk-top3-title">Why this top 3? Compare on what matters</div>
    <div class="gk-top3-sub">Higher = better. You can see straight away where number 1 wins and where number 2 or 3 might actually suit you better.</div>
    <table class="gk-t3tbl"><thead>${head}</thead><tbody>
      ${t3row('🛋️ Comfort', ax.map(a=>a.comfort))}
      ${t3row('🚀 Speed', ax.map(a=>a.snelheid))}
      ${t3row('🎒 Bikepacking', ax.map(a=>a.bikepack))}
      ${t3row('💰 Value for money', ax.map(a=>a.value))}
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
    ? 'No bikes found within this budget — try a wider budget class'
    : strong.length>=3
      ? `${strong.length} bikes fit your budget and your profile — the top ${list.length} below`
      : `Limited match within your budget — I'm showing the ${list.length} best-fitting bikes`)
    + (overBudget>0 ? ` · I'm leaving out ${overBudget} bikes above your budget` : '');

  const top3=document.getElementById('finder-top3');
  top3.innerHTML = (finder.level==='gevorderd'||finder.level==='expert') ? buildTop3(list) : '';

  const grid=document.getElementById('finder-grid');
  grid.innerHTML = list.length ? list.map(finderCard).join('') : '<div class="gk-fempty">No suitable bikes found. Try a different budget or use.</div>';
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
      if(n) n.textContent = 'Maximum 4 — remove one first';
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
    el.textContent = on ? '✓ In comparison' : '⇄ Compare';
  });
  const bar = document.getElementById('gk-cmpbar');
  if(!bar) return;
  bar.classList.toggle('show', cmpSel.length > 0);
  const btn = document.getElementById('gk-cmpbar-btn');
  const note = document.getElementById('gk-cmpbar-note');
  if(!btn || !note) return;
  btn.disabled = cmpSel.length < 2;
  btn.textContent = '⇄ Compare ' + cmpSel.length + (cmpSel.length === 1 ? ' bike' : ' bikes');
  note.textContent = cmpSel.length === 1 ? 'Pick at least one more' : (cmpSel.length >= 4 ? 'Maximum reached (4)' : '');
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
  const yn = v => v ? '✓ Yes' : '—';
  const head = '<tr><td></td>' + sel.map(b => '<th><div class="gk-cmpm-thumb">' + bikeThumb(b) + '</div><div class="gk-cmpm-name">' + b.brand + '<br>' + b.model + '</div><button class="gk-cmpm-rm" type="button" data-key="' + cmpKey(b) + '" onclick="toggleCmpSel(this.dataset.key,this); if(cmpSel.length>=2) openCmpModal(); else closeCmpModal();">× remove</button></th>').join('') + '</tr>';
  const anyE = sel.some(b => b.ebike);
  const rows = [
    cmpRowVals('Price', sel, b => b.priceLabel, b => -b.price),
    cmpRowVals('Geometry', sel, b => '<span class="gk-geo-tag ' + geoClass(b.geo) + '">' + b.geo + '</span>'),
    cmpRowVals('Frame', sel, b => b.frame === 'staal' ? 'steel' : b.frame),
    cmpRowVals('Weight', sel, b => b.weightLabel, b => bikeWeight(b) === 99 ? null : -bikeWeight(b)),
    cmpRowVals('Groupset', sel, b => groupLabel(b) + (isXplr(b) ? ' <span class="gk-spec-xplr">XPLR</span>' : '') + (isGrx(b) ? ' <span class="gk-spec-grx">GRX</span>' : '')),
    cmpRowVals('Cassette', sel, b => speedCount(b) ? speedCount(b) + ' speed' : '—', b => speedCount(b)),
    cmpRowVals('Shifting', sel, b => b.electronic ? '⚡ Electronic' : '⚙️ Mechanical'),
    cmpRowVals('Drivetrain', sel, b => driveLabel(b.drivetrain)),
    cmpRowVals('Max. tyre', sel, b => b.maxTire + ' mm', b => b.maxTire),
    cmpRowVals('Wheelset', sel, b => b.wheelBrand + ' (' + b.wheels + ')'),
    cmpRowVals('Wheelset weight', sel, b => { const s = wheelSpecs[b.wheelBrand]; return (s && s.weight) ? s.weight.replace(/(\d)\.(\d{3})/g, '$1,$2').replace('spaken', 'spokes') : 'unknown'; }, b => { const v = wheelWeightVal(b); return v === null ? null : -v; }),
    cmpRowVals('Frame sizes', sel, b => sizesLabel(b)),
    anyE ? cmpRowVals('Motor', sel, b => b.motor || '—') : '',
    anyE ? cmpRowVals('Battery', sel, b => b.battery || '—') : '',
    cmpRowVals('Mounts', sel, b => yn(b.mounts)),
    cmpRowVals('Fenders', sel, b => yn(b.fender)),
    cmpRowVals('Damping', sel, b => hasDamping(b) ? b.damping : '—'),
    cmpRowVals('Tubeless', sel, b => yn(b.tubeless)),
    cmpRowVals('Model year', sel, b => b.year),
    '<tr><td></td>' + sel.map(b => '<td><a class="gk-cmpm-buy" href="' + b.url + '" target="_blank" rel="noopener">View at ' + shopName(b) + '</a></td>').join('') + '</tr>'
  ].join('');
  body.innerHTML = '<div class="gk-top3-title" style="margin-bottom:10px;">Compare your selection (' + sel.length + ')</div><table class="gk-cmpm-tbl"><tbody>' + head + rows + '</tbody></table><div class="gk-wheel-note" style="margin-top:8px;">✓ = best value in that row (lowest price/weight, most tyre clearance).</div>';
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
  wrap.innerHTML = '<div class="gk-refine-title">🔧 Refine your advice <span>(optional — your results update straight away)</span></div>';
  reg.parentNode.insertBefore(wrap, reg.nextSibling);
  REFINE_STEPS.forEach(k => { const e = document.getElementById('fstep-' + k); if(e) wrap.appendChild(e); });
})();

render();
switchTab('finder');
