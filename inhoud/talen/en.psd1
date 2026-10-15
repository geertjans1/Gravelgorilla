@{
  # Engels — gebruikt door .claude/bouw-site.ps1. Pagina's komen in /en/.
  taal = 'en'; pre = '/en'; ogLocale = 'en_GB'; naam = 'English'; kort = 'EN'

  ui = @{
    brandAria = 'Gravel Gorilla, to the homepage'; menuAria = 'Main menu'; tools = 'Tools'; overOns = 'About us'; contact = 'Contact'; privacy = 'Privacy'
    themaAria = 'Dark mode on or off'; themaTitel = 'Night ride on/off'; startKiezer = 'Start the finder'; menuOpen = 'Open menu'; taalAria = 'Choose your language'
    voetSlot = 'The gorilla shows the way.<br>You ride.'; voetNav = 'Footer'
    voetKlein = '© 2026 Gravel Gorilla · made by Geert Jans, gravel rider · no cookies, no ads'
    terugTools = '← Back to all tools'; home = '← Home'; faqKop = 'Frequently asked questions'; andereKop = 'Other <span class="groen">tools</span>'
    deel = 'Share this tool'; deelVraag = 'Useful? Send this tool to your riding mates.'; deelKopie = 'Copy link'; deelGekopieerd = 'Link copied!'; deelMail = 'Email'; deelOnderwerp = 'Handy tool for gravel riders'
    vgKop = 'Ask the <span class="groen">Gorilla</span>'; vgUitleg = 'Ask your question in plain English. If the gorilla can fill in the tool for you, he does it right away.'
    vgAria = 'Your question for the gorilla'; vgPlek = 'Ask your question'; vgKnop = 'Ask'; vgVoorbeelden = 'Example questions'
    alleenNl = 'This tool is currently only available in Dutch. The English version is on its way: the gorilla is translating.'
    filters = @{ kiezen = 'choose'; berekenen = 'calculate'; plannen = 'plan' }
    broodTools = 'Tools'; nieuw = 'New'
  }
  orgBeschrijving = 'Independent Dutch website with free tools for gravel riders: choosing a gravel bike and frame size, gravel tyres, tyre pressure, wheels, gearing, gravel routes, ultra events, a bikepacking packing list, profile stickers and clothing advice.'
  eersteTip = @{ tekst = 'Riding a lot of sand? A wider tyre with a bit less pressure sinks in less than a narrow, hard tyre.'; link = '/tools/bandenspanning-calculator/' }
  homeTitel = 'Gravel bike finder, tyre pressure and more | Gravel Gorilla'
  homeBeschrijving = 'Free tools for gravel riders: choose your gravel bike and frame size, calculate tyre pressure and gearing, find gravel routes, a packing list, clothing advice and more.'
  lijstNaam = 'Free tools for gravel riders'
  getallen = @('zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen')
  paginas = @{
    'over-ons' = @{ titel = 'About Gravel Gorilla: free tools for gravel riders'; beschrijving = 'Gravel Gorilla is made by Geert Jans, gravel rider: free tools for gravel bikes, tyres, wheels, events and clothing. Honest and without an account.' }
    'contact' = @{ titel = 'Contact | Gravel Gorilla'; beschrijving = 'A question, a tip, a wrong price or an idea for a new gravel tool? Email Gravel Gorilla at info@gravelgorilla.nl. We read everything.' }
    'privacy' = @{ titel = 'Privacy statement | Gravel Gorilla'; beschrijving = 'Gravel Gorilla uses no cookies and no ads. Read in plain language which data the site and the tools do use, and why.' }
  }

  tools = @{
    'gravelbike-kiezer' = @{ kop = 'Gravel Bike <span class="groen">Finder</span>'; titel = 'Gravel Bike Finder'; seoTitel = 'Which gravel bike suits me? Free finder | Gravel Gorilla'
      sub = 'Find the gravel bike that suits you.'; beschrijving = 'Which gravel bike suits you? Five short questions and you get an honest Match Score with the reasons, from 147 models by 13 brands. Free.'
      naamKort = 'Gravel Bike Finder'; kort = 'A few questions about how and where you ride, and you see which of 147 gravel bikes suit you.'; uitlegKop = 'About this finder' }
    'bandenspanning-calculator' = @{ kop = 'Tyre Pressure <span class="groen">Calculator</span>'; titel = 'Tyre Pressure Calculator'; seoTitel = 'Gravel bike tyre pressure calculator | Gravel Gorilla'
      sub = 'The right pressure for your weight, tyre width and surface. Front and rear separately, in bar and psi.'; beschrijving = 'Calculate the right tyre pressure for your gravel bike based on your weight, tyre width, wheel size and surface. Front and rear separately, in bar and psi.'
      naamKort = 'Tyre Pressure'; kort = 'The right pressure for your weight, tyre width and surface. Front and rear separately.'; uitlegKop = 'About this calculator' }
    'gravelwielen-kiezer' = @{ kop = 'Gravel Wheel <span class="groen">Finder</span>'; titel = 'Gravel Wheel Finder'; seoTitel = 'Choosing gravel wheels: which wheelset fits? | Gravel Gorilla'
      sub = 'Light, tough or fast? Find the wheelset that suits your bike and riding style.'; beschrijving = 'Which gravel wheels suit you? Find the wheelset for your bike, budget and riding style. Carbon or aluminium, 700c or 650b: honest advice from over 100 wheelsets.'
      naamKort = 'Wheel Finder'; kort = 'Light, tough or fast? Find the wheelset that suits your bike and riding style.'; uitlegKop = 'About this finder' }
    'ultra-eventkiezer' = @{ kop = 'Ultra Event <span class="groen">Finder</span>'; titel = 'Ultra Event Finder'; seoTitel = 'Ultra gravel events 2027–2028 calendar | Gravel Gorilla'
      sub = 'Which ultra gravel event suits your experience, fitness and calendar?'; beschrijving = 'Calendar with 80 ultra gravel and bikepacking events in 2027 and 2028. Filter by month, country, distance, surface and bike and find the event that suits you.'
      naamKort = 'Ultra Event Finder'; kort = 'Which ultra gravel event suits your experience, fitness and calendar? You get a shortlist.'; uitlegKop = 'About this finder' }
    'profielsticker' = @{ kop = 'Profile <span class="groen">Sticker</span>'; titel = 'Profile Sticker'; seoTitel = 'Make a profile sticker from your GPX (free) | Gravel Gorilla'
      sub = 'From GPX to a sticker for your top tube or handlebar. With the climbs, your stops, your power and exactly when to eat.'; beschrijving = 'Make a free profile sticker from your GPX for your top tube or handlebar: elevation profile, climbs, surface, stops, power and when to eat. Print or download.'
      naamKort = 'Profile Sticker'; kort = 'From GPX to a sticker for your top tube: climbs, stops, power and when to eat.'; uitlegKop = 'Never guess what is around the corner' }
    'kledingadvies' = @{ kop = 'Clothing <span class="groen">Advice</span>'; titel = 'Clothing Advice'; seoTitel = 'What to wear on the bike? Clothing advice | Gravel Gorilla'
      sub = 'Too warm or too cold? Enter the weather and your ride and see what to wear for each part of your body, and what goes in your back pocket.'; beschrijving = 'What to wear on your gravel bike? Free clothing advice based on temperature, wind, rain, ride length and pace, with the weather forecast for your location.'
      naamKort = 'Clothing Advice'; kort = 'Too warm or too cold? See what to wear for each body part, with the forecast for your ride.'; uitlegKop = 'Never too warm or too cold again' }
    'gravelbanden-kiezer' = @{ kop = 'Gravel Tyre <span class="groen">Finder</span>'; titel = 'Gravel Tyre Finder'; seoTitel = 'Which gravel tyre suits you? Tyre finder | Gravel Gorilla'
      sub = 'Slide your surface, riding style and weather and see which width, which tread and which tyres suit you.'; beschrijving = 'Which gravel tyre should you choose? Set surface, riding style and weather and get advice on width and tread, plus the best matching tyres from over 40 models.'
      naamKort = 'Tyre Finder'; kort = 'Set surface, riding style and weather, and see which width, tread and tyres fit.'; uitlegKop = 'How to choose the right gravel tyre' }
    'maatbepaler' = @{ kop = 'Size <span class="groen">Finder</span>'; titel = 'Frame Size Finder'; seoTitel = 'Which gravel bike frame size? Size finder | Gravel Gorilla'
      sub = 'Enter your height and inseam and see which frame size, saddle height and stack and reach suit you. Also when you are between two sizes.'; beschrijving = 'Which gravel bike frame size do you need? Calculate your size from your height and inseam, plus saddle height, stack and reach. With advice if you are between two sizes.'
      naamKort = 'Size Finder'; kort = 'Enter your height and inseam and see which frame size and saddle height fit. Also between two sizes.'; uitlegKop = 'How to choose the right frame size'; label = 'New' }
    'paklijst-bikepacking' = @{ kop = 'Packing <span class="groen">List</span>'; titel = 'Bikepacking Packing List'; seoTitel = 'Bikepacking packing list: what to take? | Gravel Gorilla'
      sub = 'A checklist that grows with your trip: length, season, sleeping and food. With the weight included.'; beschrijving = 'Bikepacking packing list that adapts to your trip: choose length, season, sleeping and resupply and tick off what you take. With weight, copy and print.'
      naamKort = 'Packing List'; kort = 'A checklist per trip length and season, with the weight of your luggage.'; uitlegKop = 'Never forget anything again'; label = 'New' }
    'gravelroutes' = @{ kop = 'Gravel <span class="groen">Routes</span>'; titel = 'Gravel Routes in the Netherlands and Belgium'; seoTitel = 'Gravel routes in the Netherlands and Belgium | Gravel Gorilla'
      sub = 'Official gravel routes and GPX routes in the Netherlands and Flanders. Choose a province, a distance and how you find your way.'; beschrijving = 'Gravel routes in the Netherlands and Belgium: signposted routes and GPX routes per province, filtered by distance. With links to the official source.'
      naamKort = 'Gravel Routes'; kort = 'Signposted gravel routes and GPX routes in the Netherlands and Flanders, by province and distance.'; uitlegKop = 'Gravel riding where it is allowed'; label = 'New' }
    'versnellingscalculator' = @{ kop = 'Gear <span class="groen">Calculator</span>'; titel = 'Gear Calculator'; seoTitel = 'Gravel bike gear calculator: chainring and cassette | Gravel Gorilla'
      sub = 'Choose your chainring and cassette and see your lowest gear, your top speed and how steep you can still climb. Compare two setups.'; beschrijving = 'Which chainring and cassette for your gravel bike? Calculate your lowest gear, top speed and the steepest climb you can ride, and compare two setups.'
      naamKort = 'Gearing'; kort = 'Compare chainring and cassette: your lowest gear and how steep you can still climb.'; uitlegKop = 'The right gear for every climb'; label = 'New' }
  }

  # homepage: Nederlandse tekst → Engelse tekst (de Nederlandse homepage index.html is de bron)
  home = @(
    @('<title>Gravelbike kiezen, bandenspanning en meer | Gravel Gorilla</title>', '<title>Gravel bike finder, tyre pressure and more | Gravel Gorilla</title>'),
    @('Gratis tools voor gravelrijders: gravelbike en framemaat kiezen, bandenspanning en versnellingen berekenen, gravelroutes vinden, paklijst, kledingadvies en meer.', 'Free tools for gravel riders: choose your gravel bike and frame size, calculate tyre pressure and gearing, find gravel routes, a packing list, clothing advice and more.'),
    @('Gravel Gorilla: laat de gorilla je helpen', 'Gravel Gorilla: let the gorilla help you'),
    @('<span class="regel"><span>Laat de gorilla</span></span>', '<span class="regel"><span>Let the gorilla</span></span>'),
    @('<span class="regel"><span class="groen">je helpen.</span></span>', '<span class="regel"><span class="groen">help you.</span></span>'),
    @('Twijfel je over een gravelbike, wielen, bandenspanning of wat je aantrekt? De gorilla rekent het voor je uit. Gratis en eerlijk, zonder dat iemand je iets probeert te verkopen.', 'Not sure about a gravel bike, wheels, tyre pressure or what to wear? The gorilla works it out for you. Free and honest, with nobody trying to sell you anything.'),
    @('Ik wil… <span>kies, of wijs het aan op de fiets</span>', 'I want to… <span>choose, or point at the bike</span>'),
    @('</span>een gravelbike kiezen</a>', '</span>choose a gravel bike</a>'),
    @('</span>mijn bandenspanning weten</a>', '</span>know my tyre pressure</a>'),
    @('</span>de juiste wielen vinden</a>', '</span>find the right wheels</a>'),
    @('</span>de juiste banden kiezen</a>', '</span>choose the right tyres</a>'),
    @('</span>een ultra-event vinden</a>', '</span>find an ultra event</a>'),
    @('</span>een profielsticker maken</a>', '</span>make a profile sticker</a>'),
    @('</span>weten wat ik aantrek</a>', '</span>know what to wear</a>'),
    @('</span>mijn framemaat weten</a>', '</span>know my frame size</a>'),
    @('</span>weten wat ik meeneem</a>', '</span>know what to pack</a>'),
    @('</span>een gravelroute vinden</a>', '</span>find a gravel route</a>'),
    @('</span>mijn versnellingen berekenen</a>', '</span>calculate my gearing</a>'),
    @('LAAT DE GORILLA JE HELPEN  ·  GRATIS GRAVELTOOLS', 'LET THE GORILLA HELP YOU  ·  FREE GRAVEL TOOLS'),
    @('aria-label="Route over deze pagina"', 'aria-label="Route through this page"'),
    @('<small>Top</small>Wegwijzer', '<small>Summit</small>Signpost'),
    @('<small>Post</small>Gorilla-tips', '<small>Feed zone</small>Gorilla tips'),
    @('<small>Top</small>Over ons', '<small>Summit</small>About us'),
    @('<h2 class="kop-l verschijn">Waar wil<br>je heen?</h2>', '<h2 class="kop-l verschijn">Where do you<br>want to go?</h2>'),
    @('data-filter="alle" aria-pressed="true">Alles</button>', 'data-filter="alle" aria-pressed="true">All</button>'),
    @('aria-pressed="false">Kiezen</button>', 'aria-pressed="false">Choose</button>'),
    @('aria-pressed="false">Berekenen</button>', 'aria-pressed="false">Calculate</button>'),
    @('aria-pressed="false">Plannen</button>', 'aria-pressed="false">Plan</button>'),
    @('placeholder="Zoek een tool" aria-label="Zoek een tool"', 'placeholder="Search for a tool" aria-label="Search for a tool"'),
    @('Hier loopt het pad dood. Probeer een ander woord, of <a href="/contact/">tip de gorilla</a> welke tool je mist.', 'Dead end. Try another word, or <a href="/contact/">tell the gorilla</a> which tool you are missing.'),
    @('<p class="tips__label">Gorilla-tip <span', '<p class="tips__label">Gorilla tip <span'),
    @('aria-label="Vorige tip"', 'aria-label="Previous tip"'),
    @('aria-label="Volgende tip"', 'aria-label="Next tip"'),
    @('id="tipLink">Naar de tool</a>', 'id="tipLink">To the tool</a>')
  )
}
