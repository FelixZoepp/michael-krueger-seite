import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Ratgeber & Fachartikel | Tischlerei Krüger',
  description:
    'Wissen rund um den Erhalt historischer Fenster, Türen und Altbausubstanz – aus der Werkstatt eines Berliner Tischlermeisters.',
}

const articles = [
  {
    href: '/blog/kastenfenster',
    image: '/images/leistung-historische-fenster.jpg',
    category: 'Fenster',
    title: 'Kastenfenster restaurieren statt austauschen',
    excerpt:
      'Kaum ein Bauteil prägt den Berliner Altbau so sehr wie das Kastenfenster. Warum sich die Restaurierung fast immer lohnt.',
  },
  {
    href: '/blog/energetische-sanierung',
    image: '/images/leistung-energetische-fenstersanierung.jpg',
    category: 'Energie',
    title: 'Altbaufenster energetisch sanieren',
    excerpt:
      'Bessere Dämmwerte ohne Substanzverlust – die wirksamsten Maßnahmen für historische Fenster.',
  },
  {
    href: '/blog/wohnungstueren-schallschutz',
    image: '/images/leistung-wohnungseingangstuer.jpg',
    category: 'Türen',
    title: 'Wohnungseingangstüren: Schallschutz & Sicherheit',
    excerpt:
      'Schallschutz, Einbruchschutz und Brandschutz an bestehenden Altbautüren nachrüsten.',
  },
  {
    href: '/blog/historische-haustueren',
    image: '/images/leistung-historische-haustuer.jpg',
    category: 'Türen',
    title: 'Historische Haustüren restaurieren oder nachbauen',
    excerpt:
      'Restaurieren oder originalgetreu nachbauen? Entscheidungskriterien und Möglichkeiten.',
  },
  {
    href: '/blog/denkmalschutz',
    image: '/images/leistung-reparatur-restaurierung.jpg',
    category: 'Denkmalschutz',
    title: 'Fenster & Türen im Denkmalschutz',
    excerpt:
      'Was Eigentümer wissen müssen – von der Genehmigungspflicht bis zur Förderung.',
  },
  {
    href: '/blog/treppen-altbaudetails',
    image: '/images/leistung-treppen-treppenhaus.jpg',
    category: 'Treppen',
    title: 'Historische Treppen & Altbaudetails erhalten',
    excerpt:
      'Typische Schäden, fachgerechte Reparatur und warum sich der Erhalt lohnt.',
  },
]

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="Ratgeber & Fachartikel"
        subtitle="Wissen rund um den Erhalt historischer Fenster, Türen und Altbausubstanz – aus der Werkstatt eines Berliner Tischlermeisters."
        tags={['Fenster', 'Türen', 'Energie', 'Denkmalschutz']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Ratgeber' },
        ]}
        backgroundImage="/images/leistung-historische-fenster.jpg"
      />

      <section className="section">
        <div className="wrap">
          <>
            <style>{`
              .blog-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 28px;
              }
              @media (max-width: 979px) {
                .blog-grid {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              @media (max-width: 640px) {
                .blog-grid {
                  grid-template-columns: 1fr;
                }
              }
              .blog-card {
                background-color: var(--paper);
                border-radius: var(--r);
                box-shadow: 0 2px 12px 0 rgba(33,31,28,0.07);
                overflow: hidden;
                transition: box-shadow 0.22s ease, transform 0.22s ease;
                display: flex;
                flex-direction: column;
              }
              .blog-card:hover {
                box-shadow: 0 8px 32px 0 rgba(33,31,28,0.14);
                transform: translateY(-2px);
              }
              .blog-card-img {
                position: relative;
                aspect-ratio: 16 / 10;
                overflow: hidden;
              }
              .blog-card-body {
                padding: 24px;
                display: flex;
                flex-direction: column;
                flex: 1;
              }
              .blog-excerpt {
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
              }
            `}</style>

            <div className="blog-grid">
              {articles.map((article, i) => (
                <ScrollReveal key={article.href} delay={i * 60}>
                  <article className="blog-card">
                    <div className="blog-card-img">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 640px) 100vw, (max-width: 979px) 50vw, 33vw"
                      />
                    </div>
                    <div className="blog-card-body">
                      <span className="eyebrow" style={{ marginBottom: '10px', fontSize: '0.72rem' }}>
                        {article.category}
                      </span>
                      <h3
                        style={{
                          fontFamily: 'var(--ff-display, Georgia, serif)',
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: 'var(--ink)',
                          marginBottom: '10px',
                          lineHeight: 1.3,
                        }}
                      >
                        {article.title}
                      </h3>
                      <p
                        className="blog-excerpt"
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--ink-soft)',
                          lineHeight: 1.6,
                          flex: 1,
                          marginBottom: '16px',
                        }}
                      >
                        {article.excerpt}
                      </p>
                      <Link
                        href={article.href}
                        style={{
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: 'var(--brand-dark)',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                        }}
                      >
                        Artikel lesen →
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </>
        </div>
      </section>
    </>
  )
}
