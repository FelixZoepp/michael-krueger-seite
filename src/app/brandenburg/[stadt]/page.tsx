import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { brandenburgStaedte } from '@/data/brandenburg-staedte'

export async function generateStaticParams() {
  return brandenburgStaedte.map((stadt) => ({ stadt: stadt.slug }))
}

type Props = {
  params: Promise<{ stadt: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stadt: stadtSlug } = await params
  const data = brandenburgStaedte.find((s) => s.slug === stadtSlug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  }
}

export default async function BrandenburgStadtPage({ params }: Props) {
  const { stadt: stadtSlug } = await params
  const data = brandenburgStaedte.find((s) => s.slug === stadtSlug)

  if (!data) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Stadtseite nicht gefunden</h1>
          <Link href="/brandenburg">Zurück zur Übersicht</Link>
        </div>
      </section>
    )
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tischlerei Michael Krüger',
    description: `Historische Fenster und Türen restaurieren in ${data.name} – Tischlerei Michael Krüger`,
    url: `https://michael-krueger-seite.vercel.app/brandenburg/${data.slug}`,
    telephone: '+493085607830',
    email: 'info@historische-bauelemente.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Witzlebenstraße 21a',
      addressLocality: 'Berlin-Charlottenburg',
      postalCode: '14057',
      addressCountry: 'DE',
    },
    areaServed: {
      '@type': 'City',
      name: data.name,
    },
    priceRange: '€€',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        title={`Tischlerei für historische Fenster & Türen in ${data.name}`}
        subtitle={`Denkmalgerechte Restaurierung und Nachbau – nur ${data.distanceFromBerlin} von Berlin entfernt`}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Brandenburg', href: '/brandenburg' },
          { label: data.name },
        ]}
        backgroundImage="/images/leistung-historische-fenster.jpg"
      />

      {/* Intro */}
      <section className="section">
        <div className="wrap">
          <div
            style={{
              maxWidth: '760px',
              margin: '0 auto',
            }}
          >
            <ScrollReveal>
              <p
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--brand)',
                  marginBottom: '16px',
                }}
              >
                Nur {data.distanceFromBerlin} von Berlin entfernt
              </p>
              <h1
                style={{
                  fontFamily: 'var(--ff-display, Georgia, serif)',
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  lineHeight: 1.2,
                  marginBottom: '24px',
                  letterSpacing: '-0.01em',
                }}
              >
                Tischlerei für historische Fenster &amp; Türen in {data.name}
              </h1>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                {data.description}
              </p>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                }}
              >
                {data.altbauInfo}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Denkmalschutz Info */}
      <section style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)' }}>
        <div className="section">
          <div className="wrap">
            <ScrollReveal>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 2fr',
                  gap: '48px',
                  alignItems: 'start',
                }}
                className="denkmal-grid"
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--brand)',
                      marginBottom: '12px',
                    }}
                  >
                    Denkmalschutz
                  </p>
                  <h2
                    style={{
                      fontFamily: 'var(--ff-display, Georgia, serif)',
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      lineHeight: 1.25,
                      marginBottom: '0',
                    }}
                  >
                    Was Sie in {data.name} wissen müssen
                  </h2>
                </div>
                <div>
                  <p
                    style={{
                      fontSize: '0.97rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.75,
                    }}
                  >
                    {data.denkmalschutz}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <p
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand)',
                marginBottom: '12px',
                textAlign: 'center',
              }}
            >
              Leistungen in {data.name}
            </p>
            <h2
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(1.3rem, 2.8vw, 1.9rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                textAlign: 'center',
                marginBottom: '48px',
                lineHeight: 1.2,
              }}
            >
              Was wir für Sie tun
            </h2>
          </ScrollReveal>

          <>
            <style>{`
              .services-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 24px;
              }
              @media (max-width: 979px) {
                .services-grid { grid-template-columns: repeat(2, 1fr); }
              }
              @media (max-width: 580px) {
                .services-grid { grid-template-columns: 1fr; }
              }
              .denkmal-grid {
                grid-template-columns: 1fr 2fr;
              }
              @media (max-width: 720px) {
                .denkmal-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
              }
            `}</style>
            <div className="services-grid">
              {data.services.map((service, i) => (
                <ScrollReveal key={service.slug + i} delay={i * 60}>
                  <div
                    style={{
                      backgroundColor: 'var(--paper)',
                      border: '1px solid var(--line)',
                      borderRadius: 'var(--r)',
                      padding: '28px',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--ff-display, Georgia, serif)',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: 'var(--ink)',
                        lineHeight: 1.3,
                        margin: 0,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.65,
                        margin: 0,
                        flex: 1,
                      }}
                    >
                      {service.description}
                    </p>
                    <Link
                      href={`/blog/${service.slug}`}
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--brand-dark)',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      Mehr erfahren →
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </>
        </div>
      </section>

      {/* Historic Highlights */}
      <section style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--line)' }}>
        <div className="section">
          <div className="wrap">
            <ScrollReveal>
              <p
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--brand)',
                  marginBottom: '12px',
                }}
              >
                Historische Bausubstanz
              </p>
              <h2
                style={{
                  fontFamily: 'var(--ff-display, Georgia, serif)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '32px',
                  lineHeight: 1.25,
                }}
              >
                Bedeutende Gebäude &amp; Ensembles in {data.name}
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px',
                }}
              >
                {data.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '0.97rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: 'var(--brand)',
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div
              style={{
                backgroundColor: 'var(--brand-tint)',
                border: '1px solid var(--brand)',
                borderRadius: 'var(--r)',
                padding: '48px',
                textAlign: 'center',
                maxWidth: '680px',
                margin: '0 auto',
              }}
            >
              <h2
                style={{
                  fontFamily: 'var(--ff-display, Georgia, serif)',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  marginBottom: '16px',
                  lineHeight: 1.25,
                }}
              >
                Projekt in {data.name}?
              </h2>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.65,
                  marginBottom: '28px',
                  maxWidth: '480px',
                  margin: '0 auto 28px',
                }}
              >
                Nur {data.distanceFromBerlin} von unserer Werkstatt entfernt – wir kommen zu Ihnen
                und beraten Sie unverbindlich vor Ort.
              </p>
              <Link href="/kontakt" className="btn btn--primary">
                Kostenloses Beratungsgespräch anfragen
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
