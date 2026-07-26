export interface BezirkData {
  slug: string
  name: string
  bezirk: string
  description: string
  altbauInfo: string
  metaTitle: string
  metaDescription: string
  services: { title: string; description: string; slug: string }[]
  neighborhoods: string[]
  landmarks: string[]
  faqs: { question: string; answer: string }[]
}

export const berlinBezirke: BezirkData[] = [
  {
    slug: 'prenzlauer-berg',
    name: 'Prenzlauer Berg',
    bezirk: 'Pankow',
    description:
      'Prenzlauer Berg beherbergt das größte zusammenhängende Gründerzeitviertel Deutschlands. Rund 67 % aller Gebäude stammen aus der Zeit vor 1914 – fünf- bis sechsgeschossige Mietshäuser mit reich gegliederten Fassaden, die das Stadtbild bis heute dominieren. Nach dem Mauerfall blieb die Bausubstanz weitgehend unangetastet; viele Häuser überdauerten die Jahrzehnte im Dornröschenschlaf und warten nun auf eine fachgerechte Sanierung.',
    altbauInfo:
      'Typisch für Prenzlauer Berg sind Kastenfensterkonstruktionen aus der Gründerzeit, profilierte Holz-Haustüren mit Bleiglasoberlicht und aufwendige Stucktreppen im Vorderhaus. Die Dichte der original erhaltenen Fenster- und Türsubstanz ist in ganz Berlin einmalig – ein Schatz, den es zu bewahren gilt.',
    metaTitle: 'Tischlerei für historische Fenster & Türen in Prenzlauer Berg | Krüger',
    metaDescription:
      'Kastenfenster restaurieren, historische Haustüren aufarbeiten und Altbaudetails erhalten in Prenzlauer Berg. Meisterbetrieb vor Ort – kostenlose Ersteinschätzung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Die Gründerzeit-Kastenfenster in Prenzlauer Berg sind oft noch im Original erhalten. Wir reparieren Rahmen, erneuern Dichtungen und verbessern die Dämmwerte – ohne den historischen Charakter zu zerstören.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Profilierte Holz-Haustüren mit Bleiglasoberlicht sind das Gesicht Ihres Gründerzeithauses. Wir restaurieren das Original fachgerecht statt es durch moderne Türen zu ersetzen.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'Viele Häuser in Prenzlauer Berg stehen unter Denkmalschutz. Wir kennen die Berliner Denkmalschutzbehörde und sorgen für Lösungen, die genehmigt werden.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Bessere Dämmwerte ohne Substanzverlust: Vorsatzflügel, neue Verglasung und sorgfältige Abdichtung machen Ihre historischen Fenster energieeffizienter.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'Schall- und Einbruchschutz nachrüsten an bestehenden Altbau-Wohnungstüren – passend zum historischen Treppenhaus.',
        slug: '/leistungen/wohnungseingangstueren',
      },
      {
        title: 'Treppen & Altbaudetails',
        description:
          'Stucktreppen, Geländer und Eingangshallen gehören zum Gründerzeit-Ensemble. Wir erhalten, reparieren und ergänzen fehlende Holzdetails handwerklich.',
        slug: '/leistungen/treppen',
      },
    ],
    neighborhoods: ['Kollwitzplatz', 'Helmholtzplatz', 'Bötzowviertel', 'Teutoburger Platz', 'Pfefferberg-Kiez'],
    landmarks: ['Wasserturm Prenzlauer Berg', 'Kulturbrauerei', 'Gethsemanekirche', 'Synagoge Rykestraße'],
    faqs: [
      {
        question: 'Sind die alten Kastenfenster in Prenzlauer Berg noch zu retten?',
        answer:
          'In den allermeisten Fällen ja. Die Gründerzeit-Kastenfenster im Bezirk sind aus massivem Kiefernholz gefertigt und überraschend widerstandsfähig. Selbst starke Verwitterung, klemmende Flügel oder defekte Beschläge lassen sich fachgerecht beheben. Wir beurteilen den Zustand kostenlos vor Ort.',
      },
      {
        question: 'Mein Haus in Prenzlauer Berg steht unter Denkmalschutz – was darf ich an den Fenstern ändern?',
        answer:
          'Unter Denkmalschutz sind Materialwechsel (z. B. Holz zu Kunststoff oder Alu) genehmigungspflichtig und werden selten gestattet. Die Restaurierung oder denkmalgerechte Erneuerung in Holz ist dagegen meist problemlos möglich. Wir beraten Sie zu den konkreten Auflagen Ihrer Hausnummer.',
      },
      {
        question: 'Wie lange dauert die Restaurierung von Kastenfenstern in einer Altbauwohnung?',
        answer:
          'Eine typische Wohnung mit vier bis sechs Kastenfenstern bearbeiten wir innerhalb von zwei bis drei Tagen. Wir arbeiten Raum für Raum, sodass die Wohnung bewohnbar bleibt. Genaue Zeitangaben nennen wir nach der Vor-Ort-Einschätzung.',
      },
    ],
  },
  {
    slug: 'kreuzberg',
    name: 'Kreuzberg',
    bezirk: 'Friedrichshain-Kreuzberg',
    description:
      'Kreuzberg entstand als Arbeiterbezirk in der Hochphase der Berliner Industrialisierung. Dichte Mietskasernenkomplexe mit engen Hinterhöfen prägen SO36 und das Bergmannkiez – Architektur, die von Migranten, Studenten und Künstlern immer wieder neu belebt wurde. Die Bausubstanz ist robust, oft über Jahrzehnte improvisiert geflickt und verdient heute professionelle Handwerksqualität.',
    altbauInfo:
      'Kreuzberger Gründerzeithäuser sind kompakter als die Prenzlauer Berger Variante, die Fensterprofile schlichter und auf Wirtschaftlichkeit ausgelegt. Viele Treppenhäuser wurden in der Nachkriegszeit vereinfacht; erhaltene Originalfenster und -türen sind hier ein besonderer Wert, der sich in der Substanz widerspiegelt.',
    metaTitle: 'Historische Fenster & Türen restaurieren in Kreuzberg | Tischlerei Krüger',
    metaDescription:
      'Fensterrestaurierung, Türenaufarbeitung und Altbausanierung in Kreuzberg SO36 und Bergmannkiez. Meisterbetrieb – kostenlose Ersteinschätzung vor Ort.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Kreuzberger Mietshäuser besitzen oft original erhaltene Kastenfenster aus der Kaiserzeit. Wir restaurieren Rahmen, dichten ab und ergänzen fehlende Profile nach historischem Vorbild.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Schlichte, aber charaktervolle Gründerzeit-Haustüren in Kreuzberg – wir reparieren Risse, schleifen, lackieren und bringen die Türen ohne Neubau auf modernen Standard.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'In dicht besiedelten Mietshäusern ist Schallschutz entscheidend. Wir rüsten bestehende Altbautüren mit Dichtungen, Schlössern und Sicherheitsbeschlägen nach.',
        slug: '/leistungen/wohnungseingangstueren',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Auch in Kreuzberger Altbauten lassen sich Heizkosten senken – durch Aufarbeitung und Abdichtung der vorhandenen Kastenfenster statt kostspieligem Austausch.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Reparatur & Wartung',
        description:
          'Klemmt ein Fenster oder lässt sich eine alte Haustür nicht mehr richtig schließen? Wir beheben Schäden schnell und fachgerecht – auch als Notfallreparatur.',
        slug: '/leistungen/historische-fenster',
      },
    ],
    neighborhoods: ['Bergmannkiez', 'SO36', 'Graefekiez', 'Chamissokiez', 'Wrangelkiez'],
    landmarks: ['Viktoriapark', 'Chamissoplatz', 'Marheinekehalle', 'Anhalter Bahnhof (Ruine)'],
    faqs: [
      {
        question: 'Lohnt sich die Restaurierung bei stark verwitterten Kreuzberger Altbaufenstern?',
        answer:
          'Selbst bei starker Farbablagerung, aufgequollenem Holz oder defekten Beschlägen ist eine Restaurierung meist günstiger als ein Neufenster und erhält den historischen Charakter. Wir schätzen den Aufwand ehrlich ein – kostenlos vor Ort.',
      },
      {
        question: 'Wie gehe ich mit einer denkmalgeschützten Haustür in Kreuzberg um?',
        answer:
          'Genehmigungspflichtige Veränderungen an denkmalgeschützten Haustüren müssen beim Bezirksamt Friedrichshain-Kreuzberg beantragt werden. Wir kennen die Anforderungen und helfen beim Genehmigungsprozess.',
      },
      {
        question: 'Kann ich meine Kreuzberger Altbauwohnung selbst beauftragen oder muss das die Hausverwaltung?',
        answer:
          'Fenster und Türen im Innenbereich dürfen Mieter meist eigenständig beauftragen, sobald die Hausverwaltung zustimmt. Für Haustüren und Fassadenelemente ist der Eigentümer zuständig. Wir kommunizieren auf Wunsch direkt mit Ihrer Verwaltung.',
      },
    ],
  },
  {
    slug: 'charlottenburg',
    name: 'Charlottenburg',
    bezirk: 'Charlottenburg-Wilmersdorf',
    description:
      'Charlottenburg war einst eigenständige Residenzstadt und gilt als das bürgerliche Herz Alt-Berlins. Die Gründerzeit- und Jugendstilquartiere rund um den Kurfürstendamm und die Fasanenstraße zeugen von gehobener Baukunst: breite Bürgersteige, viergeschossige Villen und repräsentative Mietshäuser mit aufwendigen Stuckornamenten. Hier trifft Handwerksqualität auf höchste gestalterische Ansprüche.',
    altbauInfo:
      'Charlottenburger Altbauten zeichnen sich durch besonders hochwertige Fenster- und Türkonstruktionen aus: Jugendstil-Oberlichter, fein profilierte Kastenfensterrahmen und massive Eichen- oder Mahagoni-Haustüren. Viele Objekte stehen unter Ensemble- oder Einzeldenkmalschutz und erfordern eine handwerklich präzise und behördenabgestimmte Restaurierung.',
    metaTitle: 'Kastenfenster & Jugendstiltüren restaurieren in Charlottenburg | Krüger',
    metaDescription:
      'Restaurierung historischer Fenster, Jugendstiltüren und Altbaudetails in Charlottenburg. Denkmalgerechte Lösungen vom Meisterbetrieb – kostenlose Beratung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Charlottenburgs Gründerzeit- und Jugendstil-Kastenfenster sind oft aufwendig profiliert. Wir restaurieren Gehrungen, erneuern Glasfalzdichtungen und stellen originale Beschläge wieder her.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Eichen- und Mahagonihaustüren mit Jugendstilschnitzereien und Bleiglasfüllungen sind das Aushängeschild bürgerlicher Charlottenburger Häuser. Wir erhalten das Original.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'Beim Bezirksamt Charlottenburg-Wilmersdorf beantragen wir Genehmigungen und stimmen Materialien ab – damit Ihre Sanierung ohne Behördenprobleme abläuft.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Hochwertige Jugendstil-Kastenfenster lassen sich durch Vorsatzflügel und Wärmeschutzverglasung deutlich energieeffizienter machen – ohne Materialwechsel.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Treppen & Altbaudetails',
        description:
          'Repräsentative Eingangshallen mit Marmorstufen und Holzgeländern – wir ergänzen fehlende Details und restaurieren Treppen im historischen Stil.',
        slug: '/leistungen/treppen',
      },
    ],
    neighborhoods: ['Fasanenstraße', 'Savignyplatz', 'Stuttgarter Platz', 'Kantstraße', 'Schloßstraße'],
    landmarks: ['Schloss Charlottenburg', 'Kaiser-Wilhelm-Gedächtniskirche', 'Kurfürstendamm', 'Savignyplatz'],
    faqs: [
      {
        question: 'Welche Besonderheiten haben Jugendstil-Fenster in Charlottenburg?',
        answer:
          'Jugendstil-Fenster besitzen oft geschwungene Sprossen, florale Bleiverglasungen und fein gefräste Rahmenprofile. Bei der Restaurierung müssen diese Details erhalten oder handwerklich rekonstruiert werden – ein Austausch durch Standardfenster scheidet bei denkmalgeschützten Objekten aus.',
      },
      {
        question: 'Wie teuer ist die Restaurierung einer alten Eichenholz-Haustür in Charlottenburg?',
        answer:
          'Das hängt vom Zustand ab: Kleine Reparaturen mit Schleifen und Lackieren beginnen bei wenigen hundert Euro, aufwendige Restaurierungen mit Instandsetzung von Bleiglas und Schnitzdetails können vierstellig werden. Wir geben nach der kostenlosen Vor-Ort-Besichtigung ein transparentes Angebot.',
      },
      {
        question: 'Brauche ich für die Fensterrestaurierung in meinem Charlottenburger Altbau eine Genehmigung?',
        answer:
          'Bei denkmalgeschützten Gebäuden ist eine Restaurierung in gleicher Materialität oft genehmigungsfrei. Jede Abweichung – z. B. geänderte Sprossenteilung oder Materialwechsel – muss beantragt werden. Wir klären das vorab für Sie.',
      },
    ],
  },
  {
    slug: 'schoeneberg',
    name: 'Schöneberg',
    bezirk: 'Tempelhof-Schöneberg',
    description:
      'Schöneberg verbindet lebhafte Kiez-Kultur mit dichtem Gründerzeitbestand. Besonders rund um Akazienstraße, Goltzstraße und den Winterfeldtplatz reihen sich vier- bis fünfgeschossige Mietshäuser aneinander, deren Fassaden eine Mischung aus historistischen Ornamenten und frühem Sachlichkeitsstil zeigen. Das Viertel blieb im Zweiten Weltkrieg großteils verschont und besitzt viel original erhaltene Bausubstanz.',
    altbauInfo:
      'Schöneberger Altbauten aus dem späten Kaiserreich zeichnen sich durch qualitätsvolle Fichtenholz-Kastenfenster, profilierte Wintergartenlauben und teils noch original erhaltene Schiebetüren zwischen den Zimmern aus. Der Winterfeldtplatz-Kiez gilt als eines der am besten erhaltenen Gründerzeit-Ensembles Berlins.',
    metaTitle: 'Fenster & Türen im Altbau restaurieren in Schöneberg | Tischlerei Krüger',
    metaDescription:
      'Kastenfenster aufarbeiten, Haustüren restaurieren und Altbaudetails erhalten in Schöneberg – Bergmannkiez, Winterfeldtplatz. Meisterbetrieb, kostenlose Beratung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Im Schöneberger Altbau stecken oft gut erhaltene Fichtenholz-Kastenfenster. Wir schleifen, dichten, verglühen und bringen die Flügel wieder in Form.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Schöneberger Haustüren mit Oberlicht und historischen Beschlägen sind erhaltenswert. Wir restaurieren ohne Neubau und passen das Ergebnis an heutige Sicherheitsstandards an.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'In den kompakten Schöneberger Mietshäusern ist guter Schallschutz essenziell. Wir rüsten Altbautüren mit modernen Dichtungen und Mehrpunktschlössern nach.',
        slug: '/leistungen/wohnungseingangstueren',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Durch gezielte Abdichtung und Vorsatzflügel lässt sich der Energieverbrauch in Schöneberger Altbauten spürbar senken – ohne Charakter zu verlieren.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Reparatur & Wartung',
        description:
          'Schöneberger Altbaufenster, die klemmen, pfeifen oder undicht sind – wir kommen schnell, beheben die Ursache und hinterlassen keine offenen Fragen.',
        slug: '/leistungen/historische-fenster',
      },
    ],
    neighborhoods: ['Winterfeldtplatz', 'Akazienstraße', 'Goltzstraße', 'Bayerisches Viertel', 'Nollendorfplatz'],
    landmarks: ['Rathaus Schöneberg', 'Winterfeldtmarkt', 'Nollendorfplatz', 'Bayerischer Platz'],
    faqs: [
      {
        question: 'Kann ich die Kastenfenster in meiner Schöneberger Altbauwohnung selbst restaurieren lassen?',
        answer:
          'Als Mieter können Sie Fenster mit Zustimmung der Hausverwaltung restaurieren lassen, sofern keine baulichen Eingriffe in die Außenhülle nötig sind. Für Eigentümer gibt es in Schöneberg teilweise Fördermittel über das Sanierungsprogramm Aktive Zentren. Wir beraten Sie kostenlos.',
      },
      {
        question: 'Was kostet die Aufarbeitung eines Kastenfensters in Schöneberg?',
        answer:
          'Je nach Zustand und Fenstergröße liegen die Kosten für ein Kastenfenster-Element (beide Flügel, Rahmen, Abdichtung) typischerweise zwischen 400 und 900 Euro. Bei mehreren Fenstern sinkt der Preis pro Einheit. Genaue Preise nach der kostenlosen Besichtigung.',
      },
      {
        question: 'Sind Schöneberger Häuser aus den 1920er-Jahren auch Altbau?',
        answer:
          'Ja. Häuser aus den 1920er-Jahren fallen unter den Berliner Altbaubegriff und besitzen oft noch originale Holzfenster – auch wenn diese schlichter gestaltet sind als die Gründerzeit-Kastenfenster. Wir sanieren beide Typen fachgerecht.',
      },
    ],
  },
  {
    slug: 'friedrichshain',
    name: 'Friedrichshain',
    bezirk: 'Friedrichshain-Kreuzberg',
    description:
      'Friedrichshain ist einer der wenigen Berliner Bezirke, in denen nennenswerte Teile der Gründerzeit-Bebauung den Zweiten Weltkrieg weitgehend unbeschadet überlebten. Rund um den Boxhagener Platz, entlang der Simon-Dach-Straße und im Samariterviertel stehen dichte Mietshauszeilen, die heute als Bestandskerne unter wachsendem Sanierungsdruck stehen.',
    altbauInfo:
      'Der Friedrichshainer Altbaubestand ist heterogen: Neben original erhaltenen Kastenfenstern aus der Kaiserzeit finden sich Zwischenlösungen aus DDR-Zeiten, bei denen Flügel oder Scheiben ausgetauscht wurden. Gerade diese gemischten Zustände erfordern handwerkliche Erfahrung, um das Beste aus der vorhandenen Substanz herauszuholen.',
    metaTitle: 'Altbaufenster & Türen restaurieren in Friedrichshain | Tischlerei Krüger',
    metaDescription:
      'Kastenfenster reparieren, Haustüren restaurieren und Altbausubstanz erhalten in Friedrichshain. Meisterbetrieb – kostenlose Vor-Ort-Einschätzung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Ob im Samariterkiez oder am Boxhagener Platz – wir kennen den gemischten Bestand in Friedrichshain und entwickeln passende Lösungen für jede Fenstergeneration.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Erhaltene Gründerzeit-Haustüren in Friedrichshain verdienen eine fachgerechte Restaurierung statt billiger Ersatztüren. Wir reparieren, schleifen und fassen neu.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'Schallschutz und Sicherheit für Wohnungseingangstüren in Friedrichshainer Mietshäusern – nachrüstbar ohne großen baulichen Aufwand.',
        slug: '/leistungen/wohnungseingangstueren',
      },
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'Für Objekte im Milieuschutzgebiet Boxhagener Platz beraten wir zu genehmigungskonformen Lösungen und begleiten den Abstimmungsprozess mit der Behörde.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Reparatur & Wartung',
        description:
          'Defekte Fenstergriffe, klemmende Flügel oder durchhängende Scharniere – wir beheben kleine Schäden, bevor sie zu großen werden.',
        slug: '/leistungen/historische-fenster',
      },
    ],
    neighborhoods: ['Boxhagener Platz', 'Samariterviertel', 'Simon-Dach-Straße', 'Rüdersdorfer Straße', 'Frankfurter Allee Nord'],
    landmarks: ['Volkspark Friedrichshain', 'Oberbaumbrücke', 'RAW-Gelände', 'Karl-Marx-Allee'],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen echten Gründerzeit-Kastenfenstern und DDR-Nachbauten?',
        answer:
          'Originale Gründerzeit-Kastenfenster haben massivere Holzprofile, präzisere Falzgeometrien und teilweise noch historisches Zylinderglas. DDR-Ersatzfenster sind oft aus geminderter Holzqualität und mit einfachen Glasscheiben. Wir unterscheiden beides und wählen die passende Restaurierungsstrategie.',
      },
      {
        question: 'Gibt es in Friedrichshain Fördermittel für die Altbausanierung?',
        answer:
          'Ja. In Milieuschutzgebieten wie dem Samariterkiez und rund um den Boxhagener Platz können Eigentümer Fördermittel über das Berliner Stadtentwicklungsprogramm beantragen. Wir helfen bei der Dokumentation für Förderanträge.',
      },
      {
        question: 'Kann ich Fenster und Türen in meiner DDR-Plattenbauwohnung bei Ihnen beauftragen?',
        answer:
          'Nein – wir sind auf historische Holzfenster und -türen im Gründerzeit-Altbau spezialisiert. Plattenbau-Fenster aus Beton oder Aluminium sind nicht unser Handwerk.',
      },
    ],
  },
  {
    slug: 'wedding',
    name: 'Wedding',
    bezirk: 'Mitte',
    description:
      'Wedding ist Berlins klassischer Arbeiterbezirk: dichte Gründerzeit-Mietshäuser, die um die Jahrhundertwende für die Arbeiterschaft der umliegenden Fabriken errichtet wurden. Das AEG-Quartier und das Nettelbeckufer stehen für eine Architektur, die Funktion über Ornament stellte, aber in ihrer Schlichtheit eine eigene Stärke besitzt. Wedding erlebt seit Jahren eine Neubelebung – die Altbausubstanz rückt dabei wieder in den Fokus.',
    altbauInfo:
      'Weddinger Kastenfenster sind oft robuster und weniger ornamental als die bürgerlichen Varianten in Charlottenburg – aber nicht weniger erhaltenswert. Die meist einfach profilierten Holzrahmen sind aus Kiefernholz gefertigt und zeigen nach Jahrzehnten ohne Sanierung erheblichen Aufholbedarf bei Dichtigkeit und Anstrich.',
    metaTitle: 'Altbaufenster & Türen restaurieren in Wedding | Tischlerei Krüger',
    metaDescription:
      'Kastenfenster aufarbeiten und Altbausubstanz erhalten in Wedding – AEG-Viertel, Nettelbeckufer. Meisterbetrieb aus der Region, kostenlose Ersteinschätzung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Weddinger Arbeiterhäuser stecken voller robuster Kiefernholz-Kastenfenster, die oft nur Abdichtung und frischen Anstrich benötigen. Wir beurteilen ehrlich und arbeiten effizient.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Gerade in älteren Wedding-Häusern lässt sich durch gezielte Abdichtung viel Heizenergie sparen – ohne die Fenster auszutauschen.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Schlichte, aber solide Gründerzeit-Haustüren in Wedding – wir reparieren, schleifen und lackieren statt auszutauschen.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'Schalldichte und einbruchhemmende Wohnungseingangstüren für dicht besiedelte Weddinger Mietshäuser – nachrüstbar am Bestand.',
        slug: '/leistungen/wohnungseingangstueren',
      },
      {
        title: 'Reparatur & Wartung',
        description:
          'Schnelle Reparaturen für klemmende Fenster, defekte Beschläge und undichte Fugen – wir sind in Wedding regelmäßig vor Ort.',
        slug: '/leistungen/historische-fenster',
      },
    ],
    neighborhoods: ['Nettelbeckufer', 'Afrikanisches Viertel', 'Gesundbrunnen', 'Reinickendorfer Straße', 'Sparrplatz'],
    landmarks: ['AEG-Turbinenhalle', 'Staudenhof', 'Humboldthain', 'Badstraße'],
    faqs: [
      {
        question: 'Sind Restaurierungen in Weddinger Arbeiterhäusern wirklich wirtschaftlich?',
        answer:
          'Ja, oft sogar mehr als in aufwendigeren Gründerzeitvierteln, weil die Fenster schlichter sind und der Restaurierungsaufwand geringer ausfällt. Einfachere Profile bedeuten weniger Stunden bei gleicher Qualität.',
      },
      {
        question: 'Mein Haus in Wedding hat noch alle Originalfenster aus 1910 – was soll ich zuerst tun?',
        answer:
          'Zuerst den Zustand prüfen lassen: Sind Rahmen noch stabil? Dichten die Fenster grundsätzlich? Meist empfehlen wir eine Grundaufarbeitung in zwei Phasen: erst Dichtigkeit und Funktion herstellen, dann Oberflächen erneuern.',
      },
      {
        question: 'Bieten Sie auch kleinere Reparaturaufträge in Wedding an?',
        answer:
          'Ja. Auch einzelne Fensterflügel, defekte Griffe oder klemmende Beschläge beheben wir – wir sind keine Massenabfertigung, sondern ein Handwerksbetrieb mit Einzelauftrag.',
      },
    ],
  },
  {
    slug: 'wilmersdorf',
    name: 'Wilmersdorf',
    bezirk: 'Charlottenburg-Wilmersdorf',
    description:
      'Wilmersdorf ist das ruhigere, gediegenere Pendant zu Charlottenburg. Rund um den Ludwigkirchplatz und die Pariser Straße stehen großbürgerliche Gründerzeit- und frühe Jugendstilhäuser, in denen Berlins gebildetes Bürgertum lebte. Das Viertel hat seinen gehobenen Charakter bewahrt und legt entsprechend hohe Maßstäbe an die handwerkliche Qualität jeder Sanierungsmaßnahme.',
    altbauInfo:
      'Wilmersdorfer Altbauten aus den 1890er- bis 1910er-Jahren zeigen oft aufwendigere Fensterprofile als die Arbeiterbezirke: Doppelkastenfenster mit Holzsprossen, Oberlichtflügel und Haustüren mit Messingbeschlägen sind keine Seltenheit. Der Erhalt dieser Details ist prägend für den Charakter der Straßenzüge.',
    metaTitle: 'Historische Fenster & Türen restaurieren in Wilmersdorf | Krüger',
    metaDescription:
      'Kastenfenster und Jugendstiltüren restaurieren in Wilmersdorf – Ludwigkirchplatz, Pariser Straße. Qualitätshandwerk vom Meisterbetrieb, kostenlose Beratung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Wilmersdorfer Doppelkastenfenster mit Sprossen und Messingbeschlägen restaurieren wir mit der Sorgfalt, die diese Substanz verdient – originalgetreu und dauerhaft.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Jugendstil-Haustüren mit Ornamentbeschlägen und Bleiglasfüllungen sind das Aushängeschild der Wilmersdorfer Straßenzüge. Wir bewahren das Original.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'Für denkmalgeschützte Wilmersdorfer Objekte kennen wir die Abstimmungswege mit dem Bezirksamt und sorgen für reibungslose Genehmigungsverfahren.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Vorsatzflügel und Wärmeschutzverglasung steigern die Energieeffizienz ohne Eingriff in die historische Optik – ideal für denkmalgeschützte Häuser in Wilmersdorf.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Treppen & Altbaudetails',
        description:
          'Repräsentative Treppenhäuser mit Holzgeländern und Mosaikböden – wir ergänzen Fehlteile handwerklich und erhalten die Atmosphäre des Hauses.',
        slug: '/leistungen/treppen',
      },
    ],
    neighborhoods: ['Ludwigkirchplatz', 'Pariser Straße', 'Fehrbelliner Platz', 'Güntzelstraße', 'Blissestraße'],
    landmarks: ['Ludwigskirche', 'Fehrbelliner Platz', 'Volkspark Wilmersdorf', 'Preußenpark'],
    faqs: [
      {
        question: 'Was ist ein Doppelkastenfenster und wie unterscheidet es sich vom normalen Kastenfenster?',
        answer:
          'Beim Doppelkastenfenster sitzen die Innen- und Außenflügel nicht in einem einzigen Rahmenkasten, sondern in separaten, übereinanderliegenden Ebenen. Das ergibt noch bessere Dämmwerte und war in gehobenen Wohnhäusern wie denen in Wilmersdorf verbreitet. Die Restaurierung erfordert präzises Maßhalten bei beiden Flügelebenen.',
      },
      {
        question: 'Wie finde ich heraus, ob mein Wilmersdorfer Haus unter Denkmalschutz steht?',
        answer:
          'Im Berliner Denkmaldatenbank-Portal können Sie per Adresse prüfen, ob ein Objekt als Einzel- oder Ensembledenkmal eingetragen ist. Wir erledigen diese Recherche für Sie vorab und teilen Ihnen das Ergebnis mit der ersten Kontaktaufnahme mit.',
      },
      {
        question: 'Kann man Messingbeschläge an alten Fenstern in Wilmersdorf aufarbeiten oder müssen diese ersetzt werden?',
        answer:
          'Messingbeschläge können in den meisten Fällen aufgearbeitet werden: Entlacken, Polieren und ggf. Nachdrehen schadhafter Teile. Nur bei stark korrodiertem oder gebrochenem Material empfehlen wir originalgetreuen Ersatz aus unserem Beschlagfundus.',
      },
    ],
  },
  {
    slug: 'tempelhof',
    name: 'Tempelhof',
    bezirk: 'Tempelhof-Schöneberg',
    description:
      'Tempelhof besitzt einen besonderen Mix aus Arbeiteraltbau der Jahrhundertwende und Villenstraßen der 1920er-Jahre. Nördlich der Ringbahn dominieren dichte Gründerzeit-Mietshäuser, südlich schließen ruhigere Straßenzüge mit Eigenheimen und kleineren Mietshäusern an. Das ehemalige Flughafengelände prägt das Selbstbild des Bezirks, doch der Altbaubestand rund um die Tempelhof-Göritzer Mitte ist handwerklich mindestens ebenso interessant.',
    altbauInfo:
      'Tempelhöfer Altbauten aus der Kaiserzeit zeigen robuste Kastenfenster in vereinfachten Profilen, die auf Wirtschaftlichkeit ausgelegt waren. In den Villenstraßen der 1920er-Jahre finden sich dagegen Sprossenfenster mit Holzrahmen in historistischem Stil, die ebenfalls besonderer Pflege bedürfen.',
    metaTitle: 'Kastenfenster & Altbautüren restaurieren in Tempelhof | Tischlerei Krüger',
    metaDescription:
      'Fenster- und Türrestaurierung in Tempelhof – Arbeiteraltbau und Villenstraßen. Meisterbetrieb, erfahren in historischen Holzkonstruktionen. Kostenlose Beratung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Tempelhofs Gründerzeit-Kastenfenster aus Kiefernholz – wir beurteilen den Bestand ehrlich und arbeiten effizient, ohne unnötige Kosten zu verursachen.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Durch Abdichtung und Vorsatzflügel lässt sich in Tempelhöfer Altbauten der Energieverbrauch erheblich senken – wirtschaftlich und ohne Eingriff ins Erscheinungsbild.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Schlichte Holz-Haustüren aus dem frühen 20. Jahrhundert – wir reparieren, schleifen und lackieren und erhalten den Charakter des Hauses.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'In Tempelhöfer Mehrfamilienhäusern nachrüsten: besserer Schallschutz und Sicherheit für bestehende Wohnungseingangstüren.',
        slug: '/leistungen/wohnungseingangstueren',
      },
      {
        title: 'Reparatur & Wartung',
        description:
          'Kleine Schäden, bevor sie groß werden: Fensterwartung, Beschlagreparatur und Dichtigkeitsprüfung für Tempelhöfer Altbauten.',
        slug: '/leistungen/historische-fenster',
      },
    ],
    neighborhoods: ['Tempelhof-Mitte', 'Mariendorf', 'Lichtenrade', 'Ringbahnviertel', 'Alt-Tempelhof'],
    landmarks: ['Tempelhofer Feld', 'Rathaus Tempelhof', 'Mariendorfer Hafen', 'Ullsteinhaus'],
    faqs: [
      {
        question: 'Was ist der Unterschied zwischen Kastenfenstern in Arbeiter- und Villenhäusern?',
        answer:
          'Arbeiterhäuser haben einfacher profilierte, aber oft sehr robuste Rahmen aus Kiefernholz. Villenhäuser besitzen häufig aufwendigere Profile mit Sprossen oder Rundbogenabschlüssen. Beide Typen können wir restaurieren, der Aufwand unterscheidet sich aber je nach Profilkomplexität.',
      },
      {
        question: 'Wie oft sollte man Altbaufenster in Tempelhof warten lassen?',
        answer:
          'Wir empfehlen eine Sichtprüfung alle drei bis fünf Jahre: Dichtungen checken, Beschläge ölen, Anstrich auf Rissbildung prüfen. Regelmäßige Kleinstwartung verhindert teure Schäden an Rahmen und Verglasung.',
      },
      {
        question: 'Kann man in einem Tempelhöfer Haus ohne Denkmalschutz die Fenster auch einfach tauschen?',
        answer:
          'Ja, das ist möglich. Wir empfehlen aber, zuerst den Zustand der Originalfenster einzuschätzen – in vielen Fällen ist die Restaurierung günstiger und ergibt ein besseres Ergebnis als Standardfenster vom Baustoffhandel.',
      },
    ],
  },
  {
    slug: 'neukoelln',
    name: 'Neukölln',
    bezirk: 'Neukölln',
    description:
      'Neukölln ist einer der am dichtesten besiedelten Berliner Bezirke. Der historische Kern um Rixdorf sowie die Straßenzüge nördlich der Karl-Marx-Straße beherbergen einen der umfangreichsten Gründerzeit-Altbaubestände der Stadt. Lange vernachlässigt, erlebt Neukölln seit einem Jahrzehnt eine intensive Neubelebung – und damit steigt der Bedarf an fachgerechter Altbausanierung erheblich.',
    altbauInfo:
      'Neuköllner Mietshäuser aus der Gründerzeit besitzen häufig noch unberührte Kastenfenster und profilierte Holzhaustüren, die den DDR-Jahrzehnten oder der Nachkriegspragmatik entgangen sind. Gerade in Rixdorf finden sich kompakte, gut erhaltene Häuserzeilen, die handwerklich außerordentlich interessant sind.',
    metaTitle: 'Fenster & Türen im Altbau restaurieren in Neukölln | Tischlerei Krüger',
    metaDescription:
      'Kastenfenster aufarbeiten, Haustüren restaurieren in Neukölln und Rixdorf. Erfahrener Meisterbetrieb für Gründerzeit-Altbau, kostenlose Ersteinschätzung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Unberührte Gründerzeit-Kastenfenster in Neukölln sind ein Schatz. Wir restaurieren schonend und erhalten die originale Holzsubstanz so weit wie möglich.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Rixdorfer Haustüren mit Oberlicht und historischen Beschlägen – wir restaurieren, ohne den Charakter des Hauses zu verändern.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'In Neuköllner Altbauten senkt gezielte Fensterabdichtung die Heizkosten signifikant – ohne Austausch der historischen Originalfenster.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'Schallschutz und Einbruchschutz nachrüsten an Wohnungseingangstüren in Neuköllner Mietshäusern – diskret und ohne Tausch.',
        slug: '/leistungen/wohnungseingangstueren',
      },
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'Für denkmalgeschützte Objekte in Rixdorf beraten wir zu genehmigungskonformen Restaurierungslösungen.',
        slug: '/leistungen/historische-fenster',
      },
    ],
    neighborhoods: ['Rixdorf', 'Karl-Marx-Straße', 'Richardplatz', 'Reuterkiez', 'Rollberg'],
    landmarks: ['Richardplatz Rixdorf', 'Körnerpark', 'Rathaus Neukölln', 'Tempelhof (Grenzlage)'],
    faqs: [
      {
        question: 'Lohnt sich die Fensterrestaurierung in Neukölln, wenn die Häuser stark renovierungsbedürftig sind?',
        answer:
          'Gerade dann: Fenster sind eines der ersten Bauteile, bei denen sich Investitionen direkt in Komfort und Energieeffizienz niederschlagen. Eine Restaurierung der Originalfenster ist dabei günstiger als ein Tausch und erhält den historischen Charakter.',
      },
      {
        question: 'Gibt es in Neukölln Sanierungsgebiete mit Fördermitteln?',
        answer:
          'Ja. Teile von Neukölln – insbesondere um die Karl-Marx-Straße – sind als Sanierungsgebiet ausgewiesen. Eigentümer können über das Stadtentwicklungsprogramm Fördergelder für Instandsetzungsmaßnahmen beantragen. Wir helfen mit der handwerklichen Dokumentation.',
      },
      {
        question: 'Was ist das Besondere an den Häusern in Rixdorf?',
        answer:
          'Rixdorf besitzt eine besonders dichte Bebauung aus der Zeit um 1900, teils mit kleineren Miets- und Reihenhäusern in kompakter Blockstruktur. Viele Gebäude stehen unter Ensembleschutz und haben ihre originale Substanz gut bewahrt.',
      },
    ],
  },
  {
    slug: 'moabit',
    name: 'Moabit',
    bezirk: 'Mitte',
    description:
      'Moabit ist Berlins Arbeiterviertel an der Spree – eine Halbinsel aus Gründerzeitblöcken, die zwischen Tiergarten, Berlin-Spandauer Schifffahrtskanal und Havel eingeklemmt ist. Die dichten Mietskasernenkomplexe entstanden im Zuge der Industrialisierung rund um die Borsig-Werke und besitzen einen robusten, wenig ornamentierten Charakter. Moabit ist ein ehrliches Viertel, das professionelle Handwerksarbeit mehr als guten Namen braucht.',
    altbauInfo:
      'Moabiter Gründerzeithäuser sind massiv und funktional gebaut: breite Kiefernholzrahmen für die Kastenfenster, schlichte Haustürblätter mit wenig Ornamentik, aber solider Holzkonstruktion. Viele Häuser wurden in den 1960er- und 1970er-Jahren mit Standardfenstern bestückt, doch in den Vorderhäusern sind noch zahlreiche Originalfenster erhalten.',
    metaTitle: 'Altbaufenster & Türen restaurieren in Moabit | Tischlerei Krüger',
    metaDescription:
      'Kastenfenster reparieren, Haustüren aufarbeiten in Moabit. Meisterbetrieb für Gründerzeit-Altbau an der Spree – kostenlose Ersteinschätzung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Moabiter Kastenfenster brauchen keine Ornamentik – aber sie brauchen professionelle Aufarbeitung. Wir reparieren funktional und dauerhaft.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Durch Abdichtung und Vorsatzscheiben lässt sich in Moabiter Altbauten der Energieverbrauch erheblich senken – ohne die Originalfenster zu ersetzen.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Schlichte Moabiter Haustüren restaurieren, schleifen und lackieren – wir erhalten die originale Substanz und verbessern gleichzeitig Sicherheit und Dichtigkeit.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'In dicht besiedelten Moabiter Mietshäusern ist Schallschutz besonders wichtig. Wir rüsten bestehende Türen mit Dichtungen und modernen Schlössern nach.',
        slug: '/leistungen/wohnungseingangstueren',
      },
      {
        title: 'Reparatur & Wartung',
        description:
          'Klemmt, pfeift oder zieht? Wir reparieren schnell und unkompliziert – auch als Einzel-Reparaturauftrag ohne Mindestumsatz.',
        slug: '/leistungen/historische-fenster',
      },
    ],
    neighborhoods: ['Turmstraße', 'Stephankiez', 'Ottostraße', 'Lehrter Straße', 'Alt-Moabit'],
    landmarks: ['Borsig-Halle', 'Kleiner Tiergarten', 'Justizzentrum Moabit', 'Spree-Bogen'],
    faqs: [
      {
        question: 'Mein Moabiter Mietshaus hat teils Original- und teils DDR-Ersatzfenster – wie gehe ich vor?',
        answer:
          'Wir empfehlen, zuerst die Originalfenster zu restaurieren und die Ersatzfenster nach Bedarf anzupassen. Eine komplette Vereinheitlichung ist sinnvoll, aber nicht immer das Erste, das man tun muss. Wir priorisieren nach Dringlichkeit.',
      },
      {
        question: 'Wie weit fährt Tischlerei Krüger für Aufträge in Moabit?',
        answer:
          'Wir sind regelmäßig in Moabit tätig und haben keinen Mindestrechnungsbetrag für die Anfahrt. Auch kleine Reparaturaufträge nehmen wir an.',
      },
      {
        question: 'Lohnt es sich für einen Moabiter Vermieter, in Fensterrestaurierung zu investieren?',
        answer:
          'Ja. Restaurierte Originalfenster erhöhen die Wohnqualität, senken Nebenkosten und sind bei Mieterhöhungsverfahren als Modernisierung anrechenbar. Wir stellen auf Wunsch Dokumentationen für die Betriebskostenabrechnung aus.',
      },
    ],
  },
  {
    slug: 'mitte',
    name: 'Mitte',
    bezirk: 'Mitte',
    description:
      'Berlin-Mitte ist der historische Kern der Stadt – und gleichzeitig einer der komplexesten Orte für Altbausanierung. Neben gründerzeitlichen Mietshäusern stehen hier barocke Stadtpalais, preußische Verwaltungsbauten und frühe Moderne nebeneinander. Der Denkmalschutz ist allgegenwärtig, und jede handwerkliche Maßnahme muss in diesem Kontext durchdacht und behördenkonform sein.',
    altbauInfo:
      'Die Bausubstanz in Mitte ist außergewöhnlich heterogen: Kastenfenster in gründerzeitlichen Mietshäusern treffen auf historische Werksteinfassaden mit aufwendigen Fensterlaibungen aus dem 18. Jahrhundert. In manchen Gebäuden sind Fenster- und Türkonstruktionen mehrerer Epochen übereinandergelagert – das erfordert viel handwerkliche Erfahrung und historisches Verständnis.',
    metaTitle: 'Historische Fenster & Türen restaurieren in Berlin-Mitte | Krüger',
    metaDescription:
      'Denkmalgerechte Fenster- und Türrestaurierung in Berlin-Mitte. Historische Baukonstruktionen fachgerecht erhalten – Meisterbetrieb, kostenlose Beratung.',
    services: [
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'In Berlin-Mitte ist denkmalgerechtes Arbeiten nicht die Ausnahme, sondern die Regel. Wir kennen die Anforderungen der Berliner Denkmalschutzbehörde und arbeiten seit Jahren erfolgreich in diesem Umfeld.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Gründerzeit-Kastenfenster in Mitte – teilweise im historischen Kontext von Stadtpalais und repräsentativen Mietshäusern. Wir restaurieren mit höchster handwerklicher Sorgfalt.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Haustüren in Berlin-Mitte sind oft Teil denkmalgeschützter Ensembles. Wir restaurieren originalgetreu – vom barocken Türblatt bis zur Gründerzeit-Haustür mit Bleiglas.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Auch im Denkmalschutz ist Energieeffizienz möglich: Wir setzen auf Vorsatzflügel und abgestimmte Verglasungslösungen, die von der Behörde genehmigt werden.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Treppen & Altbaudetails',
        description:
          'Historische Treppenhäuser, Stuck und Holzgeländer in Mitte – wir erhalten und ergänzen handwerklich präzise.',
        slug: '/leistungen/treppen',
      },
    ],
    neighborhoods: ['Scheunenviertel', 'Nikolaiviertel', 'Hackescher Markt', 'Spandauer Vorstadt', 'Dorotheenstadt'],
    landmarks: ['Berliner Dom', 'Hackescher Markt', 'Neue Synagoge', 'Rotes Rathaus'],
    faqs: [
      {
        question: 'Was macht Fensterrestaurierung in Berlin-Mitte so besonders anspruchsvoll?',
        answer:
          'Die Vielfalt der Bauepochen und die Dichte der Denkmäler: Ein Haus in Mitte kann Fenster aus dem 18., 19. und frühen 20. Jahrhundert aufweisen – jedes mit eigenen Profilen, Beschlägen und Materialien. Wir analysieren zuerst die historische Situation, bevor wir ein Konzept entwickeln.',
      },
      {
        question: 'Welche Behörde ist in Berlin-Mitte für Denkmalschutzfragen zuständig?',
        answer:
          'Das Landesdenkmalamt Berlin (LDA) und das Bezirksamt Mitte teilen sich die Zuständigkeit, je nach Schutzstatus des Objektes. Wir koordinieren die Abstimmung für Sie und reichen Unterlagen ein, wo es nötig ist.',
      },
      {
        question: 'Sind alte Haustüren in Mitte versicherbar und einbruchhemmend nachrüstbar?',
        answer:
          'Ja. Auch historische Holztüren können mit hochwertigen Mehrpunktschlössern, verstärkten Stahlzargen und einbruchhemmenden Beschlägen aufgerüstet werden – ohne das äußere Erscheinungsbild zu verändern, was die Denkmalschutzbehörde in der Regel akzeptiert.',
      },
    ],
  },
  {
    slug: 'pankow',
    name: 'Pankow',
    bezirk: 'Pankow',
    description:
      'Pankow – das Dorf im Bezirk – ist geprägt von Villen, Landhäusern und einem Stadtgrundriss, der sich an historischen Dorfauen orientiert. Rund um Schlosspark Schönhausen und entlang der Berliner Straße entstand im Kaiserreich eine hochbürgerliche Siedlung, die ihren grünen, dörflichen Charakter bis heute bewahrt hat. Altbausanierung in Pankow bedeutet meist: Villen und Mehrfamilienhäuser mit individueller Geschichte.',
    altbauInfo:
      'Pankower Altbauten umfassen eine breite Palette: von einfachen Arbeiterhäusern nahe der Ringbahn bis zu repräsentativen Villen mit aufwendigen Holzfenstern, Wintergärten und historischen Terrassentüren. Besonders die Häuser um den Schlosspark besitzen teils noch original erhaltene Sprossen- und Kastenfenster aus dem späten 19. Jahrhundert.',
    metaTitle: 'Historische Fenster & Türen restaurieren in Pankow | Tischlerei Krüger',
    metaDescription:
      'Kastenfenster, Villenfenster und historische Türen restaurieren in Pankow. Erfahrener Meisterbetrieb, kostenlose Ersteinschätzung vor Ort.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Pankower Villen-Kastenfenster mit Sprossen und Oberlichtflügeln – wir restaurieren präzise und erhalten die Eigenheit jedes Hauses.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Villen- und Landhaushaustüren aus der Kaiserzeit – Doppelflügtüren, Wintergartenelemente und Vordachkonstruktionen – restaurieren wir mit handwerklicher Sorgfalt.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Treppen & Altbaudetails',
        description:
          'Villentreppenhäuser mit Holzgeländern, Balustergittern und Parkettböden – wir erhalten, ergänzen und restaurieren historische Holzdetails.',
        slug: '/leistungen/treppen',
      },
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'Schlosspark-nahe Objekte in Pankow stehen oft unter Denkmalschutz. Wir klären Auflagen vorab und sorgen für genehmigungskonforme Lösungen.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Auch in freistehenden Pankower Villen lohnt sich die energetische Ertüchtigung der historischen Holzfenster – wir zeigen Ihnen, wie das ohne Substanzverlust geht.',
        slug: '/leistungen/energetische-sanierung',
      },
    ],
    neighborhoods: ['Schlosspark Schönhausen', 'Pankow-Mitte', 'Buch', 'Niederschönhausen', 'Weißensee'],
    landmarks: ['Schloss Schönhausen', 'Bürgerpark Pankow', 'Dorfkirche Pankow', 'Panke-Aue'],
    faqs: [
      {
        question: 'Restaurieren Sie auch Terrassentüren und Wintergartenfenster in Pankower Villen?',
        answer:
          'Ja. Terrassentüren und Wintergarten-Verglasungen aus der Kaiserzeit sind unsere Spezialität. Wir reparieren Holzrahmen, ersetzen gebrochene Scheiben (auch Blei- und Kathedralglas) und dichten die Konstruktion fachgerecht ab.',
      },
      {
        question: 'Wie geht man bei einer alten Pankower Villa vor, wenn man nicht weiß, was genau restauriert werden muss?',
        answer:
          'Mit einer kostenlosen Bestandsaufnahme vor Ort. Wir prüfen alle Fenster, Türen und sichtbaren Holzdetails und erstellen eine priorisierte Mängelliste – von dringendem Handlungsbedarf bis zu langfristig geplanten Maßnahmen.',
      },
      {
        question: 'Sind alte Holz-Terrassentüren wirklich besser als moderne Alu-Alternativen?',
        answer:
          'Bei historischen Villen: fast immer. Originalholz passt zum Gebäude, lässt sich reparieren (nicht nur ersetzen) und hat in gut gepflegtem Zustand ähnliche Dämmwerte wie moderne Mittelklasse-Alu-Türen. Der Unterschied liegt im Charakter und in der Langlebigkeit.',
      },
    ],
  },
  {
    slug: 'steglitz',
    name: 'Steglitz',
    bezirk: 'Steglitz-Zehlendorf',
    description:
      'Steglitz ist ein gediegenes bürgerliches Wohnviertel im Südwesten Berlins. Das gründerzeitliche Stadtzentrum um den Schloßstraßen-Boulevard und die ruhigen Villenviertel dahinter vereinen Gründerzeitmietshaus und Einfamilienhaus-Kultur. Wer hier baut oder saniert, legt Wert auf Qualität und Dauerhaftigkeit – Eigenschaften, die unser Handwerk teilt.',
    altbauInfo:
      'Steglitzer Altbauten aus dem späten 19. und frühen 20. Jahrhundert zeigen eine handwerkliche Qualität, die auf die bürgerliche Käuferschicht zugeschnitten war: hochwertigere Holzprofile bei Kastenfenstern, mehr Sorgfalt in den Beschlägen und teils noch original erhaltene Wohnungsinnentüren mit profilierter Füllung.',
    metaTitle: 'Historische Fenster & Türen restaurieren in Steglitz | Tischlerei Krüger',
    metaDescription:
      'Kastenfenster, Villenfenster und Altbaudetails restaurieren in Steglitz. Qualitätshandwerk vom Meisterbetrieb – kostenlose Beratung für Eigentümer.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Steglitzer Bürgerhaus-Kastenfenster mit hochwertigen Holzprofilen – wir restaurieren sorgfältig und erhalten die Qualität der Originalsubstanz.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Bürgerliche Haustüren in Steglitz – oft mit Oberlicht, Profilrahmen und historischen Beschlägen. Wir restaurieren statt ersetzen.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Energieeffizienz und historischer Charakter schließen sich nicht aus: Wir zeigen Steglitzer Eigentümern, wie Vorsatzflügel und moderne Verglasung ohne Substanzverlust funktionieren.',
        slug: '/leistungen/energetische-sanierung',
      },
      {
        title: 'Treppen & Altbaudetails',
        description:
          'Profilierte Holzgeländer, Stuckdecken und historische Innentüren – wir ergänzen fehlende Details und erhalten die Atmosphäre bürgerlicher Altbauten.',
        slug: '/leistungen/treppen',
      },
      {
        title: 'Wohnungseingangstüren',
        description:
          'Schalldichte und einbruchhemmende Wohnungseingangstüren für Steglitzer Mehrfamilienhäuser – Nachrüstung ohne Neubau.',
        slug: '/leistungen/wohnungseingangstueren',
      },
    ],
    neighborhoods: ['Schloßstraße', 'Südende', 'Lankwitz', 'Lichterfelde West', 'Steglitz-Mitte'],
    landmarks: ['Schloss Steglitz (Wrangel-Schlösschen)', 'Kreisel Steglitz', 'Botanischer Garten', 'Rathaus Steglitz'],
    faqs: [
      {
        question: 'Warum sind Steglitzer Altbaufenster oft besser erhalten als in anderen Bezirken?',
        answer:
          'Das bürgerliche Publikum hat historisch mehr Wert auf Pflege und Qualität gelegt. Außerdem war Steglitz im Krieg weniger stark bombardiert als die innerstädtischen Arbeiterbezirke – die Originalsubstanz hat schlicht besser überlebt.',
      },
      {
        question: 'Können profilierte Holzinnentüren in Steglitzer Altbauten auch restauriert werden?',
        answer:
          'Ja, das ist eines unserer Spezialgebiete. Füllungstüren mit profilierten Rahmen lassen sich schleifen, spachteln und neu fassen – auch wenn Füllungen gebrochen oder Beschläge verloren sind, fertigen wir Ersatz handwerklich nach.',
      },
      {
        question: 'Gibt es in Steglitz Förderprogramme für die Fensterrestaurierung?',
        answer:
          'Je nach Objekt können KfW-Förderprogramme für energetische Sanierung genutzt werden. Für denkmalgeschützte Steglitzer Gebäude gibt es zusätzlich Denkmalschutzmittel. Wir beraten, welches Programm passt.',
      },
    ],
  },
  {
    slug: 'spandau',
    name: 'Spandau',
    bezirk: 'Spandau',
    description:
      'Spandau ist Berlins ältester Stadtteil – eine eigenständige Stadt mit mittelalterlichem Kern, Festungsanlagen und einem frühneuzeitlichen Stadtgrundriss, der bis heute ablesbar ist. Die Altstadt mit ihrem Fachwerk und ihren historischen Bürgerhäusern ist ein Unikum im Berliner Stadtbild. Wer in Spandau restauriert, braucht handwerkliches Wissen, das über die gründerzeitliche Normalrestaurierung weit hinausgeht.',
    altbauInfo:
      'Spandauer Altbaukonstruktionen umfassen eine breite Zeitspanne: von Fachwerkhäusern aus dem 17. und 18. Jahrhundert über frühklassizistische Bürgerhäuser bis zu Gründerzeitbauten am Rande der Altstadt. Fenster und Türen dieser Epochen unterscheiden sich stark in Konstruktion, Profil und Material – ihre Restaurierung ist anspruchsvoll und erfordert historische Kenntnisse.',
    metaTitle: 'Historische Fenster & Türen restaurieren in Spandau | Tischlerei Krüger',
    metaDescription:
      'Fenster und Türen in der Spandauer Altstadt und im Gründerzeitviertel restaurieren. Meisterbetrieb mit Erfahrung in historischen Holzkonstruktionen, kostenlose Beratung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Gründerzeit-Kastenfenster am Rande der Spandauer Altstadt – wir restaurieren fachgerecht und erhalten die Originalsubstanz.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Von der frühklassizistischen Bürgerhaustür bis zur Gründerzeit-Eingangstür – Spandaus Türen sind vielfältig. Wir restaurieren mit historischem Verständnis.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'Die Spandauer Altstadt ist ein Gesamtdenkmal. Hier gelten strenge Auflagen für jede Veränderung an Fenstern und Türen. Wir kennen die Anforderungen.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Treppen & Altbaudetails',
        description:
          'Historische Treppenhäuser und Holzdetails in Spandauer Bürgerhäusern – wir erhalten, ergänzen und restaurieren handwerklich präzise.',
        slug: '/leistungen/treppen',
      },
      {
        title: 'Reparatur & Wartung',
        description:
          'Für kleine Schäden an historischen Fenstern und Türen in Spandau – wir kommen auch für Einzelreparaturen.',
        slug: '/leistungen/historische-fenster',
      },
    ],
    neighborhoods: ['Spandauer Altstadt', 'Haselhorst', 'Gatow', 'Kladow', 'Spandauer Neustadt'],
    landmarks: ['Zitadelle Spandau', 'Altstadt Spandau', 'Gotisches Haus', 'St.-Nikolai-Kirche'],
    faqs: [
      {
        question: 'Können Sie auch Fenster in echten Fachwerkhäusern restaurieren?',
        answer:
          'Ja. Fachwerk-Fenster sind meist einfache Holzrahmen mit Kittverglasungen oder historischem Butzenscheibenglas. Die Restaurierung erfordert Kenntnisse über historische Kittrezepturen und Holzverbindungstechniken – beides haben wir.',
      },
      {
        question: 'Welche Besonderheiten gelten für Arbeiten in der Spandauer Altstadt?',
        answer:
          'Die Spandauer Altstadt ist als Gesamtdenkmal eingestuft. Das bedeutet: Jede Veränderung an Außenfenstern und -türen ist genehmigungspflichtig. Wir koordinieren die Abstimmung mit dem Bezirksamt und dem Landesdenkmalamt.',
      },
      {
        question: 'Wie unterscheiden sich die Anforderungen bei einem Haus aus 1750 gegenüber einem aus 1900?',
        answer:
          'Grundlegend. Häuser aus dem 18. Jahrhundert haben Fenster ohne Kastenkonstruktion, oft mit Kittfalz und einfachem Glas. Materialwahl, Profilgeometrie und Befestigungstechniken sind völlig anders als bei Gründerzeit-Kastenfenstern. Wir kennen beide Welten.',
      },
    ],
  },
  {
    slug: 'zehlendorf',
    name: 'Zehlendorf',
    bezirk: 'Steglitz-Zehlendorf',
    description:
      'Zehlendorf ist das grüne, gediegene Villenviertel im Südwesten Berlins. Rund um den Mexikoplatz und entlang der Onkel-Tom-Straße stehen hochwertige Einfamilienhäuser, Doppelvillen und kleine Mietshäuser aus den 1880er- bis 1930er-Jahren. Hier saniert man mit langen Planungshorizonten und hohem Qualitätsanspruch – genau das, was unser Handwerk am besten kann.',
    altbauInfo:
      'Zehlendorfer Altbauten zeichnen sich durch besonders hochwertige Holzkonstruktionen aus: Sprossenfenster in Eiche oder Lärche, aufwendige Haustüren mit Eingangsvordach und Bleiglasfüllungen sowie Terrassentüren, die Wohnraum und Garten verbinden. In manchen Häusern findet man noch vollständig originale Fenster aus der Weimarer Republik.',
    metaTitle: 'Villenfenster & historische Türen restaurieren in Zehlendorf | Krüger',
    metaDescription:
      'Historische Sprossenfenster, Villentüren und Altbaudetails restaurieren in Zehlendorf – Mexikoplatz, Onkel-Tom-Straße. Meisterbetrieb, kostenlose Beratung.',
    services: [
      {
        title: 'Kastenfenster aufarbeiten & restaurieren',
        description:
          'Zehlendorfer Villen-Kastenfenster aus Eiche oder Lärche – wir restaurieren mit handwerklicher Präzision und erhalten die Originalsubstanz für weitere Jahrzehnte.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Historische Haustüren restaurieren',
        description:
          'Zweiflügelige Villeneingangstüren mit Bleiglasfüllungen, Holzschnitzdetails und Messingbeschlägen – Zehlendorfs Haustüren sind außergewöhnlich. Wir bewahren sie.',
        slug: '/leistungen/historische-haustueren',
      },
      {
        title: 'Treppen & Altbaudetails',
        description:
          'Eichenholz-Treppenhäuser, Eingangspodeste und Balkongeländer in Zehlendorfer Villen – wir erhalten und ergänzen mit originalgetreuen Holzarbeiten.',
        slug: '/leistungen/treppen',
      },
      {
        title: 'Denkmalgerechte Fenstersanierung',
        description:
          'Für denkmalgeschützte Zehlendorfer Villen entwickeln wir Konzepte, die den Anforderungen der Behörde entsprechen und gleichzeitig modernen Komfort ermöglichen.',
        slug: '/leistungen/historische-fenster',
      },
      {
        title: 'Energetische Altbaufenstersanierung',
        description:
          'Historische Sprossenfenster aus Eiche lassen sich durch Vorsatzflügel und Wärmeschutzverglasung deutlich energieeffizienter machen – ohne das Erscheinungsbild zu verändern.',
        slug: '/leistungen/energetische-sanierung',
      },
    ],
    neighborhoods: ['Mexikoplatz', 'Onkel-Tom-Straße', 'Nikolassee', 'Wannsee', 'Dahlem'],
    landmarks: ['Mexikoplatz', 'S-Bahnhof Zehlendorf', 'Brücke-Museum', 'Schlachtensee'],
    faqs: [
      {
        question: 'Wie pflegt man historische Eichenholzfenster in einer Zehlendorfer Villa langfristig?',
        answer:
          'Entscheidend ist ein regelmäßiger Anstrich mit Leinöl-Alkydharzlacken alle 5–8 Jahre und die jährliche Kontrolle der Glasfalzdichtungen. Wir bieten Wartungsverträge an, bei denen wir einmal im Jahr alle Fenster prüfen und kleine Schäden sofort beheben.',
      },
      {
        question: 'Kann ich Sprossenfenster in meiner Zehlendorfer Villa energetisch verbessern, ohne die Optik zu verändern?',
        answer:
          'Ja. Durch Vorsatzflügel auf der Innenseite, die exakt die gleiche Sprossenteilung aufweisen wie die Außenflügel, lässt sich ein Kastenfenster-Effekt erzeugen, ohne die Originalfenster anzutasten. Das Ergebnis ist optisch unauffällig und energetisch wirksam.',
      },
      {
        question: 'Was kostet die Restaurierung einer zweiflügeligen Villeneingangstür in Zehlendorf?',
        answer:
          'Das hängt stark vom Zustand ab. Eine Grundrestaurierung (Schleifen, Abdichten, Lackieren, Beschläge aufarbeiten) beginnt bei 1.200 bis 2.000 Euro. Komplexere Arbeiten wie das Erneuern von Bleiverglasungen oder das Nachbauen fehlender Schnitzdetails werden individuell kalkuliert.',
      },
    ],
  },
]

export function getBezirkBySlug(slug: string): BezirkData | undefined {
  return berlinBezirke.find((b) => b.slug === slug)
}
