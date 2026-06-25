import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { berlinBezirke, getBezirkBySlug } from '@/data/berlin-bezirke'

type Props = {
  params: Promise<{ bezirk: string }>
}

export async function generateStaticParams() {
  return berlinBezirke.map((b) => ({ bezirk: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bezirk: slug } = await params
  const data = getBezirkBySlug(slug)
  if (!data) return {}
  return {
    title: data.metaTitle,
    description: data.metaDescription,
  }
}

export default async function BezirkPage({ params }: Props) {
  const { bezirk: slug } = await params
  const data = getBezirkBySlug(slug)
  if (!data) notFound()

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tischlerei Krüger',
    description: `Restaurierung historischer Fenster & Türen in ${data.name}, Berlin.`,
    url: `https://www.tischlerei-krueger-berlin.de/berlin/${data.slug}`,
    telephone: '+491636983248',
    address: {
      '@type': 'PostalAddress',
      addressLocality: `${data.name}, Berlin`,
      addressCountry: 'DE',
    },
    areaServed: {
      '@type': 'Place',
      name: `${data.name}, ${data.bezirk}, Berlin`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Leistungen',
      itemListElement: data.services.map((s) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: s.title,
          description: s.description,
        },
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <PageHero
        title={`Tischlerei für historische Fenster & Türen in ${data.name}`}
        subtitle={`Kastenfenster restaurieren, historische Haustüren aufarbeiten und Altbaudetails erhalten – Meisterbetrieb in ${data.name}.`}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Berlin', href: '/berlin' },
          { label: data.name },
        ]}
        backgroundImage="/images/hero-kastenfenster-altbau.jpg"
      />

      {/* Intro */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--brand-dark)',
                marginBottom: '12px',
              }}
            >
              {data.bezirk} · Berlin
            </p>
            <h2
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                lineHeight: 1.2,
                marginBottom: '24px',
              }}
            >
              Altbausubstanz in {data.name} fachgerecht erhalten
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
                marginBottom: '20px',
              }}
            >
              {data.description}
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
              }}
            >
              {data.altbauInfo}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section
        className="section"
        style={{ backgroundColor: 'var(--sand, #f7f4ef)' }}
      >
        <div className="wrap">
          <ScrollReveal>
            <h2
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                textAlign: 'center',
                marginBottom: '40px',
              }}
            >
              Unsere Leistungen in {data.name}
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
                .services-grid {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              @media (max-width: 640px) {
                .services-grid {
                  grid-template-columns: 1fr;
                }
              }
              .service-card {
                background-color: var(--paper, #fff);
                border-radius: var(--r, 8px);
                padding: 28px 24px;
                box-shadow: 0 2px 12px 0 rgba(33,31,28,0.07);
                display: flex;
                flex-direction: column;
                transition: box-shadow 0.22s ease, transform 0.22s ease;
              }
              .service-card:hover {
                box-shadow: 0 8px 32px 0 rgba(33,31,28,0.13);
                transform: translateY(-2px);
              }
            `}</style>
            <div className="services-grid">
              {data.services.map((service, i) => (
                <ScrollReveal key={service.slug + i} delay={i * 60}>
                  <div className="service-card">
                    <h3
                      style={{
                        fontFamily: 'var(--ff-display, Georgia, serif)',
                        fontSize: '1.05rem',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        marginBottom: '12px',
                        lineHeight: 1.3,
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: 'var(--ink-soft)',
                        lineHeight: 1.65,
                        flex: 1,
                        marginBottom: '16px',
                      }}
                    >
                      {service.description}
                    </p>
                    <Link
                      href={service.slug}
                      style={{
                        fontSize: '0.88rem',
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

      {/* Warum wir */}
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
              Warum Tischlerei Krüger in {data.name}?
            </h2>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}
            >
              Als Meisterbetrieb aus der Region sind wir regelmäßig in {data.name} tätig und kennen den lokalen Altbaubestand aus eigener Erfahrung. Wir wissen, welche Bautoleranzen typisch für Gründerzeitbauten im {data.bezirk} sind, welche Denkmalschutzbehörden zuständig sind und welche Lösungen sich in der Praxis bewährt haben.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}
            >
              Wir ersetzen nicht, was noch zu retten ist. Unser Ansatz ist immer: zuerst prüfen, dann reparieren, nur im Notfall neu fertigen. Das spart Kosten, erhält die historische Substanz und produziert weniger Abfall. Dieses Prinzip gilt in Prenzlauer Berg genauso wie in {data.name}.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--ink-soft)',
                lineHeight: 1.8,
              }}
            >
              Unsere Werkstatt in Zossen ist rund 30 Fahrminuten entfernt – Einzelteile, die überarbeitet werden müssen, nehmen wir mit und bringen sie fertig zurück. Die Montage vor Ort erfolgt sauber und ohne lange Ausfallzeiten für die Wohnung oder das Haus.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Kiezinfo */}
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
                marginBottom: '32px',
              }}
            >
              Kieze & Wahrzeichen in {data.name}
            </h2>
          </ScrollReveal>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            <ScrollReveal>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--ff-display, Georgia, serif)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '14px',
                  }}
                >
                  Kieze & Stadtteile
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {data.neighborhoods.map((n) => (
                    <li
                      key={n}
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--ink-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--brand-dark)',
                          flexShrink: 0,
                        }}
                      />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--ff-display, Georgia, serif)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    marginBottom: '14px',
                  }}
                >
                  Historische Orte & Bauten
                </h3>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                  }}
                >
                  {data.landmarks.map((l) => (
                    <li
                      key={l}
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--ink-soft)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--brand-dark)',
                          flexShrink: 0,
                        }}
                      />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                fontWeight: 700,
                color: 'var(--ink)',
                marginBottom: '36px',
              }}
            >
              Häufige Fragen für {data.name}
            </h2>
          </ScrollReveal>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {data.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div
                  style={{
                    borderLeft: '3px solid var(--brand-dark)',
                    paddingLeft: '20px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--ff-display, Georgia, serif)',
                      fontSize: '1.05rem',
                      fontWeight: 600,
                      color: 'var(--ink)',
                      marginBottom: '10px',
                      lineHeight: 1.35,
                    }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
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
              Kostenlose Ersteinschätzung in {data.name}
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
              Schildern Sie uns Ihr Anliegen – wir kommen zu Ihnen nach {data.name} und beraten Sie vor Ort. Kostenfrei und unverbindlich.
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
                href="tel:+491636983248"
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
