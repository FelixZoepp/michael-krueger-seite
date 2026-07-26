export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Carpenter'],
    '@id': 'https://michael-krueger-seite.vercel.app',
    name: 'Tischlerei Michael Krüger',
    alternateName: [
      'Michael Krüger Tischlerei historische Bauelemente',
      'Tischlerei Krüger Berlin',
    ],
    description:
      'Meisterbetrieb für Restaurierung und Neubau historischer Fenster, Türen und Treppen in Berlin und Brandenburg. Seit 1997, Meister seit 2016.',
    url: 'https://michael-krueger-seite.vercel.app',
    email: 'info@historische-bauelemente.de',
    telephone: '+493085607830',
    foundingDate: '1997',
    priceRange: '€€',
    image: 'https://michael-krueger-seite.vercel.app/images/team-krueger.jpg',
    address: [
      {
        '@type': 'PostalAddress',
        name: 'Büro Berlin-Charlottenburg',
        streetAddress: 'Witzlebenstraße 21a',
        addressLocality: 'Berlin',
        addressRegion: 'Berlin',
        postalCode: '14057',
        addressCountry: 'DE',
      },
      {
        '@type': 'PostalAddress',
        name: 'Werkstatt Zossen',
        addressLocality: 'Zossen',
        addressRegion: 'Brandenburg',
        addressCountry: 'DE',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.516,
      longitude: 13.295,
    },
    areaServed: [
      { '@type': 'City', name: 'Berlin', addressCountry: 'DE' },
      { '@type': 'State', name: 'Brandenburg', addressCountry: 'DE' },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '15:30',
    },
    founder: {
      '@type': 'Person',
      name: 'Michael Krüger',
      jobTitle: 'Tischlermeister',
    },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 9,
    },
    knowsAbout: [
      'Kastenfenster Restaurierung',
      'Historische Fenster Berlin',
      'Denkmalschutz Fenster und Türen',
      'Altbautüren Restaurierung',
      'Historische Haustüren',
      'Energetische Fenstersanierung',
      'Treppen Restaurierung Altbau',
      'Brandenburger Kiefernholz',
    ],
    sameAs: [
      'https://wa.me/491636983248',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungen',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Historische Fenster & Kastenfenster restaurieren',
            description:
              'Fachgerechte Restaurierung von Kastenfenstern im Berliner Altbau mit Originalprofilierung und moderner Abdichtung.',
            url: 'https://michael-krueger-seite.vercel.app/leistungen/historische-fenster',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Energetische Fenstersanierung',
            description:
              'Verbesserung der Wärmedämmung historischer Fenster ohne Substanzverlust.',
            url: 'https://michael-krueger-seite.vercel.app/leistungen/energetische-sanierung',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wohnungseingangstüren',
            description:
              'Schallschutz, Einbruchschutz und Brandschutz nachrüsten an bestehenden Altbautüren.',
            url: 'https://michael-krueger-seite.vercel.app/leistungen/wohnungseingangstueren',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Historische Haustüren restaurieren',
            description:
              'Restaurierung und originalgetreuer Nachbau historischer Haus- und Wohnungseingangstüren.',
            url: 'https://michael-krueger-seite.vercel.app/leistungen/historische-haustueren',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Reparatur & Restaurierung',
            description:
              'Einzelreparaturen an Fenstern, Türen und Holzbauelementen – schnell und fachgerecht.',
            url: 'https://michael-krueger-seite.vercel.app/leistungen/reparatur',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Treppen & Altbaudetails',
            description:
              'Reparatur und Restaurierung historischer Treppen, Geländer und Altbaudetails.',
            url: 'https://michael-krueger-seite.vercel.app/leistungen/treppen',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
