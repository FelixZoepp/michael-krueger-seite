import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://michael-krueger-seite.vercel.app'

  const berlinBezirke = [
    'prenzlauer-berg', 'kreuzberg', 'charlottenburg', 'schoeneberg',
    'friedrichshain', 'wedding', 'wilmersdorf', 'tempelhof',
    'neukoelln', 'moabit', 'mitte', 'pankow', 'steglitz', 'spandau', 'zehlendorf',
  ]

  const brandenburgStaedte = [
    'potsdam', 'luckenwalde', 'jueterbog', 'koenigs-wusterhausen',
    'teltow', 'luckau', 'zossen', 'beelitz',
  ]

  const blogPosts = [
    'kastenfenster', 'energetische-sanierung', 'denkmalschutz',
    'wohnungstueren-schallschutz', 'historische-haustueren', 'treppen-altbaudetails',
  ]

  const leistungen = [
    'historische-fenster', 'energetische-sanierung', 'wohnungseingangstueren',
    'historische-haustueren', 'reparatur', 'treppen',
  ]

  const legalPages = ['impressum', 'datenschutz']

  const projekte = ['olympiastadion', 'kennedysaal', 'kita']

  return [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/team`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/kontakt`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/berlin`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/brandenburg`, changeFrequency: 'monthly', priority: 0.9 },
    ...leistungen.map(slug => ({
      url: `${baseUrl}/leistungen/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...legalPages.map(slug => ({
      url: `${baseUrl}/${slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
    ...berlinBezirke.map(slug => ({
      url: `${baseUrl}/berlin/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...brandenburgStaedte.map(slug => ({
      url: `${baseUrl}/brandenburg/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...blogPosts.map(slug => ({
      url: `${baseUrl}/blog/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...projekte.map(slug => ({
      url: `${baseUrl}/projekte/${slug}`,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ]
}
