export interface StadtData {
  slug: string
  name: string
  distanceFromBerlin: string
  description: string
  altbauInfo: string
  metaTitle: string
  metaDescription: string
  services: { title: string; description: string; slug: string }[]
  highlights: string[]
  denkmalschutz: string
}

export const brandenburgStaedte: StadtData[] = [
  {
    slug: 'potsdam',
    name: 'Potsdam',
    distanceFromBerlin: '~35 km',
    description:
      'Potsdam trägt als UNESCO-Weltkulturerbe eine besondere Verantwortung für seine historische Bausubstanz. Die Stadt vereint preußischen Klassizismus, holländische Backsteinarchitektur und gründerzeitliche Villenbebauung auf engstem Raum. Kein anderer Ort in Brandenburg stellt so hohe denkmalpflegerische Anforderungen an Handwerker.',
    altbauInfo:
      'Das Holländische Viertel besteht aus 134 Backsteinbauten aus dem frühen 18. Jahrhundert mit einzigartigen Sprossenfenstern. Die Brandenburger Vorstadt und Nauener Vorstadt zeigen geschlossene Gründerzeitquartiere mit Kastenfenstern und profilierten Holztüren aus der Jahrhundertwende.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Potsdam | Michael Krüger',
    metaDescription:
      'Restaurierung und Nachbau historischer Fenster, Türen und Kastenfenster in Potsdam – denkmalgerecht für UNESCO-Weltkulturerbe und Gründerzeitbauten. Tischlerei Michael Krüger.',
    services: [
      {
        title: 'Kastenfenster-Restaurierung',
        description:
          'Behutsame Aufarbeitung historischer Kastenfenster im Holländischen Viertel und in Gründerzeitwohnungen – mit denkmalkonformer Verglasung und Beschlagtechnik.',
        slug: 'historische-fenster',
      },
      {
        title: 'Denkmalschutz-Fenster',
        description:
          'Originalgetreuer Nachbau von Sprossenfenstern für denkmalgeschützte Gebäude in Potsdam – abgestimmt mit der Unteren Denkmalschutzbehörde des Landkreises.',
        slug: 'historische-fenster',
      },
      {
        title: 'Historische Haustüren',
        description:
          'Restaurierung und Neubau gründerzeitlicher Massivholztüren mit historischen Beschlägen, Oberlichten und Kassettenprofilen für Potsdamer Altbauten.',
        slug: 'historische-haustueren',
      },
      {
        title: 'Energetische Sanierung',
        description:
          'Verbesserung der Dämmwerte historischer Fenster ohne Substanzverlust – durch neue Dichtungsebenen, Innenvorsatzscheiben und Beschlagoptimierung.',
        slug: 'energetische-sanierung',
      },
      {
        title: 'Treppenhaus & Altbaudetails',
        description:
          'Instandsetzung historischer Treppengeländer, Stuckprofile und Holzdetails in Potsdamer Gründerzeit- und Kaiserreichbauten.',
        slug: 'treppen',
      },
    ],
    highlights: [
      'Holländisches Viertel – 134 Bauten aus dem frühen 18. Jahrhundert',
      'Brandenburger Vorstadt – geschlossene Gründerzeitvilla-Bebauung',
      'Nauener Vorstadt – Kaiserzeit-Stadtvillen mit Jugendstildetails',
      'Innenstadt – klassizistische Bürgerhäuser rund um den Alten Markt',
    ],
    denkmalschutz:
      'Potsdam steht seit 1990 auf der UNESCO-Welterbeliste. Alle baulichen Veränderungen an denkmalgeschützten Gebäuden bedürfen der Genehmigung durch die Untere Denkmalschutzbehörde der Landeshauptstadt Potsdam. Für Fenster- und Türenarbeiten gilt: Material, Profilierung und Farbe müssen dem historischen Bestand entsprechen. Die Denkmal-AfA ermöglicht Eigentümern die steuerliche Abschreibung von bis zu 85 % der Sanierungskosten über 12 Jahre.',
  },
  {
    slug: 'luckenwalde',
    name: 'Luckenwalde',
    distanceFromBerlin: '~25 km',
    description:
      'Luckenwalde gehört zur Arbeitsgemeinschaft Historische Stadtkerne in Brandenburg und hat sein Gründerzeitquartier weitgehend intakt erhalten. Die Kreisstadt des Landkreises Teltow-Fläming besitzt ein bemerkenswert geschlossenes Stadtbild aus der Kaiserzeit, das sich um den historischen Marktplatz erstreckt. Mehrgeschossige Mietshäuser mit Stuck- und Klinkerfassaden prägen das Bild der Innenstadt.',
    altbauInfo:
      'Das Gründerzeitquartier rund um die Friedrich-Engels-Straße und den Marktplatz zeigt intakte Ensembles mit Kastenfenstern, profilierten Holztüren und Treppenhausinnenausstattungen aus der Zeit um 1900. Viele Gebäude tragen noch originale Beschläge und Zierverglasung.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Luckenwalde | Michael Krüger',
    metaDescription:
      'Restaurierung historischer Fenster und Türen in Luckenwalde – für Gründerzeitbauten im AG Historische Stadtkerne Brandenburgs. Tischlerei Michael Krüger aus Zossen.',
    services: [
      {
        title: 'Kastenfenster-Restaurierung',
        description:
          'Aufarbeitung der charakteristischen Gründerzeitkastenfenster in Luckenwaldes Innenstadt – Holzreparatur, Dichtung, Beschläge und Anstrich nach historischem Vorbild.',
        slug: 'historische-fenster',
      },
      {
        title: 'Historische Haustüren',
        description:
          'Instandsetzung und Nachbau von Haustüren mit Kassettenprofilen, Oberlichten und historischen Beschlägen für Gründerzeitgebäude in Luckenwalde.',
        slug: 'historische-haustueren',
      },
      {
        title: 'Wohnungstüren & Schallschutz',
        description:
          'Ertüchtigung historischer Wohnungseingangstüren: Schallschutzverbesserung, neue Dichtungen und Sicherheitsbeschläge unter Erhalt der originalen Substanz.',
        slug: 'wohnungstueren-schallschutz',
      },
      {
        title: 'Denkmalschutz-Beratung',
        description:
          'Beratung zu genehmigungskonformen Lösungen für denkmalgeschützte Gebäude in Luckenwalde – Abstimmung mit der Denkmalschutzbehörde inklusive.',
        slug: 'denkmalschutz',
      },
    ],
    highlights: [
      'Historischer Marktplatz mit gründerzeitlicher Randbebauung',
      'Friedrich-Engels-Straße – geschlossene Mietshauszeilen um 1900',
      'Bahnhofsumfeld mit Klinkerbauten der Kaiserzeit',
      'Alte Garnisonsgebäude mit charakteristischen Sprossenfenstern',
    ],
    denkmalschutz:
      'Luckenwalde ist Mitglied der Arbeitsgemeinschaft Historische Stadtkerne im Land Brandenburg, die den Erhalt gewachsener Stadtstrukturen koordiniert. Viele Gebäude im Gründerzeitquartier stehen unter Einzeldenkmalschutz oder liegen in einem Ensembleschutzbereich. Eigentümer profitieren von Förderprogrammen der Städtebauförderung sowie der steuerlichen Denkmal-AfA.',
  },
  {
    slug: 'jueterbog',
    name: 'Jüterbog',
    distanceFromBerlin: '~40 km',
    description:
      'Jüterbog zählt zu den historisch bedeutendsten Städten Brandenburgs und hat sein mittelalterliches Stadtbild in weiten Teilen bewahrt. Drei vollständig erhaltene Stadttore, eine Stadtmauer aus dem 13. Jahrhundert und zahlreiche Fachwerkbauten machen die Stadt zu einem einzigartigen Denkmalensemble. Direkt an der Grenze zu Sachsen-Anhalt gelegen, hat Jüterbog die Wendewirren weitgehend unbeschadet überstanden.',
    altbauInfo:
      'Neben dem mittelalterlichen Kern besticht Jüterbog durch Fachwerkzeilen in der Altstadt und gründerzeitliche Bürgerhäuser entlang der Großen Straße. Viele Gebäude tragen noch originale Holzfenster mit Kreuzstockprofil sowie historische Klöppelgriff-Beschläge.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Jüterbog | Michael Krüger',
    metaDescription:
      'Restaurierung mittelalterlicher und gründerzeitlicher Fenster und Türen in Jüterbog – fachgerecht für eines der besterhaltenen historischen Stadtbilder Brandenburgs.',
    services: [
      {
        title: 'Historische Fenster-Restaurierung',
        description:
          'Instandsetzung von Kreuzstockfenstern, Schlagläden und historischen Holzprofilen in Jüterbogs Altstadt – handwerklich exakt nach Bestandsbefund.',
        slug: 'historische-fenster',
      },
      {
        title: 'Fachwerk-Fenster & Türen',
        description:
          'Denkmalgerechter Nachbau von Holzfenstern und Türen für Fachwerkbauten – mit historischen Profilquerschnitten und atmungsaktiven Leinölfarben.',
        slug: 'historische-fenster',
      },
      {
        title: 'Historische Haustüren',
        description:
          'Restaurierung und Rekonstruktion historischer Haus- und Toreingangstüren für Jüterbogs mittelalterliche und frühneuzeitliche Gebäude.',
        slug: 'historische-haustueren',
      },
      {
        title: 'Denkmalschutz-Beratung',
        description:
          'Planung und Abstimmung denkmalkonformer Maßnahmen – vom Befund über die Behördenabstimmung bis zur fachgerechten Ausführung.',
        slug: 'denkmalschutz',
      },
    ],
    highlights: [
      'Drei erhaltene Stadttore: Dammtor, Zinnaer Tor, Neumarkttor',
      'Stadtmauer aus dem 13. Jahrhundert – weitgehend vollständig',
      'Marktplatz mit gotischem Rathaus und gründerzeitlicher Randbebauung',
      'Fachwerkzeilen in der historischen Kernstadt',
    ],
    denkmalschutz:
      'Die Altstadt von Jüterbog steht als Gesamtensemble unter Denkmalschutz des Landes Brandenburg. Alle Maßnahmen an Außenfassaden, Fenstern und Türen bedürfen der Genehmigung durch das Landesamt für Denkmalpflege Brandenburg (BLDAM). Besonders strenge Anforderungen gelten für Gebäude innerhalb des mittelalterlichen Mauerringes.',
  },
  {
    slug: 'koenigs-wusterhausen',
    name: 'Königs Wusterhausen',
    distanceFromBerlin: '~20 km',
    description:
      'Königs Wusterhausen liegt im direkten Berliner Speckgürtel und verbindet preußische Geschichte mit gründerzeitlicher Villenarchitektur. Rund um das Schloss Königs Wusterhausen, die Sommerresidenz König Friedrich Wilhelms I., entstanden im späten 19. und frühen 20. Jahrhundert repräsentative Bürgervillen und Mietshäuser. Die unmittelbare Nähe zu Berlin macht die Stadt zu einem der gefragtesten Standorte für Altbausanierungen in der Region.',
    altbauInfo:
      'Die Villenkolonie rund um den Schlossteich zeigt zweigeschossige Holz- und Klinkerbauten mit großformatigen Sprossenfenstern, Verandatüren und historischen Wintergärten aus der Gründerzeit. Im Zentrum prägen Mietshäuser mit profilierten Kastenfenstern das Straßenbild.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Königs Wusterhausen | Michael Krüger',
    metaDescription:
      'Restaurierung historischer Fenster und Türen in Königs Wusterhausen – für Gründerzeitvillen und Altbauten nahe Berlin. Tischlerei Michael Krüger, Zossen.',
    services: [
      {
        title: 'Kastenfenster-Restaurierung',
        description:
          'Aufarbeitung gründerzeitlicher Kastenfenster in Königs Wusterhausen – besonders für die Villenkolonie rund um das Schloss mit ihren großformatigen Fensterprofilen.',
        slug: 'historische-fenster',
      },
      {
        title: 'Verandatüren & Terrassentüren',
        description:
          'Restaurierung und Nachbau historischer Veranda- und Terrassentüren für Gründerzeitvillen – mit großen Glasflächen und historischen Beschlägen.',
        slug: 'historische-haustueren',
      },
      {
        title: 'Energetische Sanierung',
        description:
          'Wärmedämmverbesserung historischer Fenster für Altbauten in KW – durch Innenvorsatzscheiben, neue Dichtungsebenen oder denkmalverträgliche Zweifachverglasung.',
        slug: 'energetische-sanierung',
      },
      {
        title: 'Wohnungstüren & Schallschutz',
        description:
          'Ertüchtigung historischer Wohnungseingangstüren in Königs Wusterhausener Mietshäusern: Schallschutz, Einbruchschutz und neue Dichtungen.',
        slug: 'wohnungstueren-schallschutz',
      },
    ],
    highlights: [
      'Schloss Königs Wusterhausen – Sommerresidenz Friedrich Wilhelms I.',
      'Villenkolonie am Schlossteich – Gründerzeit- und Jugendstilelemente',
      'Bahnhofsviertel – gründerzeitliche Mietshäuser aus den 1890er–1910er Jahren',
      'Dahmetal-Ufer mit historischen Sommerhäusern und Anlegestellen',
    ],
    denkmalschutz:
      'Mehrere Gebäude in Königs Wusterhausen, insbesondere rund um das Schloss und im Bahnhofsviertel, stehen unter Einzeldenkmalschutz. Die Untere Denkmalschutzbehörde des Landkreises Dahme-Spreewald ist zuständig für Genehmigungen. Bei denkmalgerechten Sanierungen kann die Denkmal-AfA in Anspruch genommen werden.',
  },
  {
    slug: 'teltow',
    name: 'Teltow',
    distanceFromBerlin: '~20 km',
    description:
      'Teltow ist eine der ältesten Städte Brandenburgs und hat seinen historischen Marktkern direkt an der Berliner Stadtgrenze bewahrt. Die Altstadt mit der romanischen Stadtkirche St. Andreas und den umgebenden Bürgerhäusern zeigt eine seltene Kontinuität städtischer Bebauung. Besonders der Übergang von historischen Bürgerhaus-Strukturen zu gründerzeitlicher Stadterweiterung macht Teltow zu einem interessanten Arbeitsfeld für den historischen Holzbau.',
    altbauInfo:
      'Rund um den Teltower Marktplatz stehen Bürger- und Kaufmannshäuser aus dem 18. und 19. Jahrhundert mit Schlagladen-Fenstern und profilierten Holztüren. Die Gründerzeit-Erweiterung an der Potsdamer Straße zeigt typische Berliner Kastenfenster-Architektur mit Stuck- und Klinkerfassaden.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Teltow | Michael Krüger',
    metaDescription:
      'Restaurierung historischer Fenster und Türen in Teltow – für mittelalterliche Bürgerhäuser und Gründerzeitbauten direkt an der Berliner Stadtgrenze.',
    services: [
      {
        title: 'Kastenfenster-Restaurierung',
        description:
          'Aufarbeitung gründerzeitlicher Kastenfenster in Teltows Stadterweiterungsgebieten – mit Holzreparatur, neuen Dichtungen und originalgetreuer Beschlagtechnik.',
        slug: 'historische-fenster',
      },
      {
        title: 'Historische Fenster & Schlagläden',
        description:
          'Restaurierung älterer Fenster mit Schlagläden in Teltows Altstadtbereich – handwerklich nach Befund mit traditionellen Leinölfarben und Kittfalztechnik.',
        slug: 'historische-fenster',
      },
      {
        title: 'Historische Haustüren',
        description:
          'Instandsetzung und Nachbau historischer Haustüren für Teltower Bürgerhäuser – von der Biedermeier-Kasettentür bis zur gründerzeitlichen Massivholztür.',
        slug: 'historische-haustueren',
      },
      {
        title: 'Energetische Sanierung',
        description:
          'Energetische Ertüchtigung historischer Fenster in Teltow ohne Substanzverlust – für KfW-Förderung qualifizierte Maßnahmen an Altbaufenstern.',
        slug: 'energetische-sanierung',
      },
    ],
    highlights: [
      'Teltower Marktplatz mit Stadtkirche St. Andreas (romanisch)',
      'Historische Bürgerhäuser aus dem 18./19. Jahrhundert im Altstadtkern',
      'Gründerzeitquartiere entlang der Potsdamer Straße',
      'Teltow-Kanal-Uferbebauung mit frühindustriellen Gebäudetypen',
    ],
    denkmalschutz:
      'Der Altstadtkern von Teltow steht als Ensemble unter Denkmalschutz. Besonders die Gebäude rund um den Marktplatz und die Stadtkirche unterliegen strengen Auflagen der Unteren Denkmalschutzbehörde des Landkreises Potsdam-Mittelmark. Sanierungsmaßnahmen sind vorab mit der Behörde abzustimmen.',
  },
  {
    slug: 'luckau',
    name: 'Luckau',
    distanceFromBerlin: '~50 km',
    description:
      'Luckau gehört zu den eindrucksvollsten historischen Städten der Niederlausitz und ist Mitglied der Arbeitsgemeinschaft Historische Stadtkerne in Brandenburg. Die Stadt besitzt einen der besterhaltenen mittelalterlichen Stadtringe Brandenburgs, Renaissance-Giebelhäuser aus dem 16. und 17. Jahrhundert sowie eine vollständige Stadtmauer. Das Stadtbild ist von einer Dichte historischer Bausubstanz geprägt, die in Brandenburg ihresgleichen sucht.',
    altbauInfo:
      'Besonders prägend sind die Renaissancegiebel an Markt und Hauptstraße sowie gotische Bürgerhauskeller, über denen gründerzeitliche Aufstockungen thronen. Viele Fassaden zeigen noch originale Holzfenster mit Sprossen und Kittfalz aus dem späten 19. Jahrhundert, während ältere Bauten Schlagläden-Konstruktionen aus der Biedermeierzeit aufweisen.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Luckau | Michael Krüger',
    metaDescription:
      'Restaurierung historischer Fenster, Türen und Altbaudetails in Luckau – für Renaissancegiebelhäuser und Gründerzeitbauten in der Niederlausitz.',
    services: [
      {
        title: 'Historische Fenster-Restaurierung',
        description:
          'Behutsame Aufarbeitung von Kittfalzfenstern, Sprosse-Verglasungen und historischen Schlagläden in Luckaus Altstadt – nach historischem Befund und Denkmalvorgaben.',
        slug: 'historische-fenster',
      },
      {
        title: 'Renaissance- & Barockfenster',
        description:
          'Restaurierung und denkmalgerechter Nachbau von Fenstern für Luckaus Renaissance- und Barockgebäude – mit historischen Profilquerschnitten und mundgeblasenem Glas auf Anfrage.',
        slug: 'historische-fenster',
      },
      {
        title: 'Historische Haustüren & Tore',
        description:
          'Instandsetzung und Neubau historischer Haus- und Hoftüren für Luckauer Bürgerhäuser – von der gotischen Kielbogentür bis zur gründerzeitlichen Kassettentür.',
        slug: 'historische-haustueren',
      },
      {
        title: 'Denkmalschutz-Beratung',
        description:
          'Planung denkmalkonformer Sanierungsmaßnahmen in Luckau – Materialberatung, Befundaufnahme und Abstimmung mit dem BLDAM inklusive.',
        slug: 'denkmalschutz',
      },
      {
        title: 'Treppenhaus & Altbaudetails',
        description:
          'Erhalt und Restaurierung historischer Treppenhäuser, Geländer und Holzdetails in Luckaus Bürgerhäusern.',
        slug: 'treppen',
      },
    ],
    highlights: [
      'Mittelalterlicher Stadtring mit vollständiger Stadtmauer',
      'Renaissance-Giebelhäuser am Marktplatz (16./17. Jh.)',
      'Stiftskirche St. Nikolai – gotisch, mit romanischen Resten',
      'Niederlausitzer Heimatmuseum im historischen Ständehaus',
    ],
    denkmalschutz:
      'Luckau ist Mitglied der AG Historische Stadtkerne in Brandenburg und verfügt über einen ausgedehnten Denkmalschutzbereich. Das Landesamt für Denkmalpflege Brandenburg (BLDAM) und die Untere Denkmalschutzbehörde des Landkreises Dahme-Spreewald sind für Genehmigungen zuständig. Förderprogramme der Städtebauförderung und der Denkmal-AfA stehen Eigentümern zur Verfügung.',
  },
  {
    slug: 'zossen',
    name: 'Zossen',
    distanceFromBerlin: '~30 km',
    description:
      'Zossen ist unser Heimatstandort und das Zentrum unserer Werkstatt in der Region südlich von Berlin. Die Kleinstadt besitzt einen gewachsenen Ortskern aus der Gründerzeit mit Bürgerhäusern entlang der Hauptstraße sowie charakteristischen Klinkerbauten aus dem frühen 20. Jahrhundert. Als lokaler Tischlermeister kennen wir die Gebäude und ihre Geschichte hier besonders gut.',
    altbauInfo:
      'Im Zossener Ortskern finden sich Gründerzeitgebäude mit Kastenfenstern und Klinkerfassaden aus den Jahren 1890–1920. Die Nebenstraßen zeigen ältere Putzbauten mit Schlagläden-Fenstern und historischen Holztüren. Das Umland von Zossen bietet zahlreiche Herrenhäuser und Gutshöfe mit erhaltenem historischem Holzbau.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Zossen | Michael Krüger',
    metaDescription:
      'Ihre lokale Tischlerei für historische Fenster und Türen in Zossen und Umgebung – Michael Krüger restauriert Kastenfenster und Altbautüren direkt vor Ort.',
    services: [
      {
        title: 'Kastenfenster-Restaurierung',
        description:
          'Aufarbeitung gründerzeitlicher Kastenfenster in Zossen und Umgebung – kurze Wege, lokale Ortskenntnis, faire Preise durch geringe Anfahrt.',
        slug: 'historische-fenster',
      },
      {
        title: 'Historische Haustüren',
        description:
          'Restaurierung und Nachbau historischer Haustüren für Zossener Bürgerhäuser, Gutshöfe und Herrenhäuser im Umland.',
        slug: 'historische-haustueren',
      },
      {
        title: 'Energetische Sanierung',
        description:
          'Energetische Verbesserung historischer Fenster in Zossen ohne Substanzverlust – für KfW-Förderprogramme qualifizierte Maßnahmen.',
        slug: 'energetische-sanierung',
      },
      {
        title: 'Wohnungstüren & Schallschutz',
        description:
          'Schallschutz- und Einbruchschutz-Ertüchtigung historischer Wohnungstüren in Zossener Mietshäusern – zuverlässig und ohne lange Wartezeiten.',
        slug: 'wohnungstueren-schallschutz',
      },
    ],
    highlights: [
      'Historische Hauptstraße mit Gründerzeitbebauung aus 1890–1920',
      'Klinkerbauten der Kaiserzeit im Ortskern',
      'Gutsanlagen und Herrenhäuser im Zossener Umland',
      'Historische Bahnhofsnähe mit frühem Industriebau',
    ],
    denkmalschutz:
      'Einzelne Gebäude im Zossener Ortskern und im Umland (insbesondere Gutsanlagen) stehen unter Denkmalschutz des Landkreises Teltow-Fläming. Bei denkmalgeschützten Objekten koordinieren wir die Abstimmung mit der Unteren Denkmalschutzbehörde und beraten zu Fördermöglichkeiten.',
  },
  {
    slug: 'beelitz',
    name: 'Beelitz',
    distanceFromBerlin: '~45 km',
    description:
      'Beelitz ist überregional bekannt durch die Heilstätten Beelitz – ein denkmalgeschütztes Krankenhausensemble aus dem späten 19. Jahrhundert, das heute als eines der bedeutendsten Industriedenkmäler Brandenburgs gilt. Neben diesem Komplex besitzt die Kleinstadt eine intakte historische Altstadt mit Fachwerkbauten und Bürgerhäusern aus dem 18. und 19. Jahrhundert. Die Kombination aus Altstadt und Großdenkmal macht Beelitz zu einem wichtigen Einsatzort für historischen Holzbau.',
    altbauInfo:
      'Die Beelitzer Altstadt zeigt Fachwerkhäuser aus dem 18. Jahrhundert mit Schlagläden und historischen Kittfalzfenstern sowie gründerzeitliche Erweiterungen mit Kastenfenstern. Die Heilstätten selbst weisen eine besondere Fensterarchitektur mit großformatigen Verbundfenstern und historischen Krankenhausbeschlägen auf, die bei laufenden Sanierungen restauriert werden.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Beelitz | Michael Krüger',
    metaDescription:
      'Restaurierung historischer Fenster und Türen in Beelitz – für die Altstadt und das denkmalgeschützte Heilstätten-Ensemble. Tischlerei Michael Krüger.',
    services: [
      {
        title: 'Historische Fenster-Restaurierung',
        description:
          'Aufarbeitung historischer Kittfalzfenster und Schlagläden in Beelitz – für Fachwerkhäuser und Bürgerhäuser in der Altstadt.',
        slug: 'historische-fenster',
      },
      {
        title: 'Kastenfenster-Restaurierung',
        description:
          'Restaurierung gründerzeitlicher Kastenfenster in Beelitz – mit Holzreparatur, neuen Dichtungen und denkmalkonformer Verglasung.',
        slug: 'historische-fenster',
      },
      {
        title: 'Großdenkmal-Sanierung',
        description:
          'Erfahrung mit Fenstersanierungen an Großdenkmälern – Beratung und Ausführung für die laufenden Sanierungsarbeiten an den Beelitz-Heilstätten.',
        slug: 'denkmalschutz',
      },
      {
        title: 'Historische Haustüren',
        description:
          'Restaurierung und Nachbau historischer Haus- und Gebäudetüren für Beelitzer Altbauten – von der Fachwerkbehausung bis zur Kaiserzeit-Villa.',
        slug: 'historische-haustueren',
      },
      {
        title: 'Denkmalschutz-Beratung',
        description:
          'Planung und Abstimmung denkmalkonformer Maßnahmen für Beelitz und Umgebung – Behördenabstimmung und Förderberatung inklusive.',
        slug: 'denkmalschutz',
      },
    ],
    highlights: [
      'Beelitz-Heilstätten – denkmalgeschütztes Sanatoriumsensemble (1898–1930)',
      'Historische Altstadt mit Fachwerkbauten aus dem 18. Jahrhundert',
      'Stadtkirche St. Marien – gotisch, mit barockem Turmaufsatz',
      'Gründerzeitliche Stadterweiterung mit Mietshäusern und Villen',
    ],
    denkmalschutz:
      'Die Beelitz-Heilstätten stehen als Gesamtensemble unter Denkmalschutz und werden von einer eigens gegründeten Entwicklungsgesellschaft saniert. In der Altstadt unterliegen denkmalgeschützte Gebäude der Genehmigung durch die Untere Denkmalschutzbehörde des Landkreises Potsdam-Mittelmark. Die Denkmal-AfA und Städtebauförderung bieten Eigentümern finanzielle Vorteile.',
  },
]
