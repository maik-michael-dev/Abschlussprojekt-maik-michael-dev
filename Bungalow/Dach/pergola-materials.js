// Zentralisierte Materiallisten und eine wiederverwendbare Render-Funktion

export const pergolaMaterials = {
  'Balken': [
    'Konstruktionsvollholz (KVH) 12x12',
    'Brettschichtholz (BSH) Leimholzträger',
    'Druckimprägniertes Konstruktionsholz',
    'Lärchenholz, witterungsbeständig',
    'Douglasienbalken, gehobelt',
    'Eichenbalken, massiv',
    'Thermoholz Balken (thermisch modifiziert)',
    'Stahlträger feuerverzinkt als Unterzug',
    'Aluminium-Holz-Verbundbalken',
    'Faserverstärkte Kunststoffbalken (GFK)'
  ],
  'Dach über Kamin (links)': [
    'Wetterfeste Glasauflage (Sicherheitsglas)',
    'Polycarbonat-Dachplatte (transparent)',
    'Metallblechprofil (stehfalz) mit Beschichtung',
    'EPDM-Dachfolie (dauerhaft dicht)',
    'Unterkonstruktion aus Konstruktionsholz',
    'Holzlatten mit Belüftungsfuge',
    'Dämmplatten (Mineralwolle) für Wärmeverhalten',
    'Traufblech & Firstabschluss aus Aluminium',
    'Regenschutzblech aus Edelstahl',
    'Sonnenschutzlamellen / Lamellen aus Holz'
  ],
  'Dach über Sitzfläche (rechts)': [
    'VSG-Glas (verbundsicherheitsglas) für Witterung',
    'Sichtschutzlamellen aus bangkirai',
    'Transparente Wellplatten (PVC) mit UV-Schutz',
    'Dachschindeln aus Faserzement',
    'Beschattungssegel (textil, wasserabweisend)',
    'Rollbare Markise mit Aluminiumprofil',
    'Lattenrost aus wetterfestem Hartholz',
    'Beschichtete Stahlprofile',
    'Dämmmatten für akustische Entkopplung',
    'Wasserableitendes Firstprofil'
  ],
  'Tischbereich': [
    'Massivholz Tischplatte (Eiche, geölt)',
    'HPL-Platte (wetterfest) auf Unterkonstruktion',
    'Keramikarbeitsplatte (frostsicher)',
    'Edelstahl Tischgestell, pulverbeschichtet',
    'Teakholz-Tischplatte (FSC-zertifiziert)',
    'Thermoholz Tischplatte (stabilisiert)',
    'Sicherheitsglas-Tischplatte (gehärtet)',
    'Wetterfester Kunststoff (HDPE) Tischplatte',
    'Beschichtete Aluminiumplatte',
    'Outdoor-Lack/Öl für Holzschutz'
  ],
  'Vertiefung neben Kamin (Gasflasche)': [
    'Feuerfeste Betonmulde mit Ablaufrinne',
    'Edelstahl-Gasflaschenhalter mit Verriegelung',
    'Belüftete Stahlbox mit pulverbeschichteter Tür',
    'Keramik- oder Feinsteinzeugverkleidung',
    'Rostfreier Gitterrost mit Rostschutzbeschichtung',
    'Wetterfeste Kunststoffbox mit Belüftungsschlitzen',
    'Schwenkhalter aus Edelstahl für Gasflasche',
    'Gummimatte rutschfest und schallisolierend',
    'Feuerbeständiger Putz / Brandschutzverkleidung',
    'Montagewinkel und Befestigungsschrauben aus Edelstahl'
  ],
  'Fußboden': [
    'Terrassendielen Lärche, gehobelt und geölt',
    'WPC-Terrassendielen (witterungsbeständig)',
    'Betonplatten (geflammt) als Nutzbelag',
    'Frostfeste Keramikplatten (rutschhemmend)',
    'Klinker- oder Pflastersteine',
    'Epoxidharzboden für Außenbereiche (beschichtet)',
    'Rutschfeste Gummiplatten unter Sitzbereich',
    'Kiesbett mit Trennvlies für Drainage',
    'Natursteinplatten (z. B. Sandstein)',
    'Drainageplatten / Terrassenunterkonstruktion'
  ]
};

export const bungalowMaterials = {
  'Dachbedeckungen': [
    'Tonziegel klassisch',
    'Betondachstein anthrazit',
    'Dachziegel glasiert',
    'Metallstehfalz (Blech)',
    'Schieferplatten (Naturstein)',
    'Bitumen-Schindeln',
    'Trapezblech (Profilblech)',
    'Faserzement-Schindeln',
    'Kunststoff-Dachplatten (Polycarbonat)',
    'Gründach-Substrat (extensive Begrünung)'
  ],
  'Solarplattenarten': [
    'Monokristalline Solarmodule',
    'Polykristalline Solarmodule',
    'Dünnschichtmodule (CIGS)',
    'Glas-Glas-Module',
    'Bifaciale Solarmodule',
    'Gebäudeintegrierte Photovoltaik (BIPV)',
    'Flexible Dünnschichtmodule',
    'PERC-Module',
    'Half-cut / halbgeschnittene Zellen-Module',
    'Module mit Leistungselektronik (Optimierer)'
  ],
  'Dachfensterarten': [
    'Klapp-Schwingfenster',
    'Schwingfenster',
    'Festverglaste Dachfenster',
    'Öffnungsfenster mit RWA (Rauch-Wärme-Abzug)',
    'Dachausstiegsfenster (Notausstieg)',
    'Elektrisch gesteuertes Dachfenster',
    'Dachfenster mit Außenrollladen',
    'Dachfenster mit Verdunkelungsrollo',
    'Schallschutz-Dachfenster',
    'Dachfenster mit Isolierverglasung'
  ],
  'Wintergartenfensterarten': [
    'Isolierglas-Festverglasung',
    'Schiebe-Fensterelemente',
    'Hebe-Schiebe-Türen',
    'Klapp-Schiebe-Elemente',
    'Panorama-Fenster',
    'Rahmenlose Glas-Fassaden',
    'Holz-Alu Fenster mit Isolierverglasung',
    'Aluminium-Rahmenkonstruktionen',
    'Wärmedämmende Verglasung (low-e)',
    'Beschattete Verglasungs-Systeme (integrierte Jalousien)'
  ]
};

export function renderMaterialsInto(containerEl, materialsObj) {
  containerEl.innerHTML = '';
  for (const [cat, items] of Object.entries(materialsObj)) {
    const section = document.createElement('section');
    const h = document.createElement('h4');
    h.textContent = cat;
    section.appendChild(h);
    const ul = document.createElement('ul');
    for (const it of items) {
      const li = document.createElement('li');
      li.textContent = it;
      ul.appendChild(li);
    }
    section.appendChild(ul);
    containerEl.appendChild(section);
  }
}
