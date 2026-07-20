import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { berlinBezirke } from '@/data/berlin-bezirke'

export const metadata: Metadata = {
  title: 'Tischlerei für historische Fenster & Türen in Berlin | Michael Krüger',
  description:
    'Kastenfenster restaurieren, historische Haustüren aufarbeiten und Altbaudetails erhalten – in allen Berliner Bezirken. Meisterbetrieb, kostenlose Ersteinschätzung.',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Tischlerei Krüger',
  description:
    'Restaurierung historischer Fenster und Türen in Berlin und Brandenburg. Kastenfenster, Haustüren, Treppenhäuser – denkmalgerecht und handwerklich.',
  url: 'https://michael-krueger-seite.vercel.app/berlin',
  telephone: '+493085607830',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Berlin',
    addressCountry: 'DE',
  },
  areaServed: {
    '@type': 'City',
    name: 'Berlin',
  },
}

export default function BerlinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        title="Ihr Tischlermeister in Berlin"
        subtitle="Historische Fenster, Türen und Altbaudetails fachgerecht restaurieren – in allen Berliner Bezirken. Meisterbetrieb seit 2008."
        tags={['Gründerzeit', 'Denkmalschutz', 'Kastenfenster', 'Altbau']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Berlin' },
        ]}
        backgroundImage="/images/werkstatt-zossen.jpg"
      />

      {/* Intro */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                marginBottom: '24px',
              }}
            >
              Berlin ist Gründerzeit – und Gründerzeit ist unser Handwerk
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}
            >
              Berlin besitzt einen der umfangreichsten Gründerzeit-Altbaubestände Europas. Hunderttausende Mietshäuser aus der Zeit zwischen 1870 und 1914 prägen das Stadtbild – und mit ihnen Millionen von historischen Kastenfenstern, profilierten Holzhaustüren und aufwendigen Treppenhäusern, die fachgerechte Pflege und Restaurierung brauchen.
            </p>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
              }}
            >
              Als Meisterbetrieb sind wir in ganz Berlin tätig – von Prenzlauer Berg bis Zehlendorf, von Spandau bis Friedrichshain. Jeder Bezirk hat seine eigene Baugeschichte und seine eigenen Besonderheiten. Wählen Sie Ihren Bezirk und erfahren Sie, was wir dort für Sie tun können.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* District grid */}
      <section
        className="section"
        style={{ backgroundColor: 'var(--sand, #f7f4ef)' }}
      >
        <div className="wrap">
          <ScrollReveal>
            <h2
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(1.3rem, 2.2vw, 1.8rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              Berliner Bezirke & Stadtteile
            </h2>
          </ScrollReveal>

          <>
            <style>{`
              .bezirk-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
              }
              @media (max-width: 979px) {
                .bezirk-grid {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              @media (max-width: 640px) {
                .bezirk-grid {
                  grid-template-columns: 1fr;
                }
              }
              .bezirk-card {
                background-color: var(--paper, #fff);
                border-radius: var(--r, 8px);
                padding: 24px;
                box-shadow: 0 2px 12px 0 rgba(33,31,28,0.07);
                display: flex;
                flex-direction: column;
                text-decoration: none;
                color: inherit;
                transition: box-shadow 0.22s ease, transform 0.22s ease;
              }
              .bezirk-card:hover {
                box-shadow: 0 8px 32px 0 rgba(33,31,28,0.13);
                transform: translateY(-2px);
              }
            `}</style>
            <div className="bezirk-grid">
              {berlinBezirke.map((b, i) => (
                <ScrollReveal key={b.slug} delay={i * 40}>
                  <Link href={`/berlin/${b.slug}`} className="bezirk-card">
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--brand-dark)',
                        marginBottom: '8px',
                        display: 'block',
                      }}
                    >
                      {b.bezirk}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--ff-display, Georgia, serif)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        marginBottom: '12px',
                        lineHeight: 1.25,
                      }}
                    >
                      {b.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.65,
                        flex: 1,
                        marginBottom: '16px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {b.description}
                    </p>
                    <span
                      style={{
                        fontSize: '0.88rem',
                        fontWeight: 600,
                        color: 'var(--brand-dark)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      Mehr erfahren →
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{ backgroundColor: 'var(--header)', padding: '80px 0' }}
      >
        <div className="wrap" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
              }}
            >
              Kostenlose Ersteinschätzung in Berlin
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '1.05rem',
                maxWidth: '560px',
                margin: '0 auto 36px',
                lineHeight: 1.7,
              }}
            >
              Schildern Sie uns Ihr Anliegen – wir kommen zu Ihnen und beraten Sie vor Ort. Kostenfrei und unverbindlich.
            </p>
            <Link
              href="/kontakt"
              className="btn btn--primary"
              style={{ fontSize: '1.05rem', padding: '14px 32px' }}
            >
              Jetzt Ersteinschätzung anfragen
            </Link>
            <p
              style={{
                marginTop: '24px',
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              Oder rufen Sie uns an:{' '}
              <a
                href="tel:+493085607830"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  fontWeight: 600,
                }}
              >
                0163 698 3248
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
