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
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Energetische Fenstersanierung',
            description:
              'Verbesserung der Wärmedämmung historischer Fenster ohne Substanzverlust.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Historische Türen restaurieren',
            description:
              'Restaurierung und originalgetreuer Nachbau historischer Haus- und Wohnungseingangstüren.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Treppen & Altbaudetails',
            description:
              'Reparatur und Restaurierung historischer Treppen, Geländer und Altbaudetails.',
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
