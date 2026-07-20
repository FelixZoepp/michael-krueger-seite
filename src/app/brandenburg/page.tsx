import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { brandenburgStaedte } from '@/data/brandenburg-staedte'

export const metadata: Metadata = {
  title: 'Tischlerei für historische Fenster & Türen in Brandenburg | Michael Krüger',
  description:
    'Michael Krüger restauriert historische Fenster, Türen und Altbaudetails in ganz Brandenburg – von Potsdam bis Jüterbog, von Luckau bis Beelitz. Denkmalgerecht und erfahren.',
}

export default function BrandenburgPage() {
  return (
    <>
      <PageHero
        title="Ihr Tischlermeister in Brandenburg"
        subtitle="Restaurierung historischer Fenster, Türen und Altbaudetails – denkmalgerecht in der ganzen Region südlich und westlich von Berlin."
        tags={['Denkmalschutz', 'Gründerzeit', 'Altbau', 'Brandenburg']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Brandenburg' },
        ]}
        backgroundImage="/images/werkstatt-zossen.jpg"
      />

      {/* Intro */}
      <section className="section">
        <div className="wrap">
          <ScrollReveal>
            <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
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
                Werkstatt Zossen · Seit 1997
              </p>
              <h2
                style={{
                  fontFamily: 'var(--ff-display, Georgia, serif)',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--ink)',
                  lineHeight: 1.2,
                  marginBottom: '24px',
                  letterSpacing: '-0.01em',
                }}
              >
                Historischer Holzbau braucht handwerkliche Erfahrung
              </h2>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                Von unserer Werkstatt in Zossen aus betreuen wir Sanierungsprojekte in ganz
                Brandenburg. Die Region ist reich an historischer Bausubstanz – von UNESCO-Welterbe
                in Potsdam über mittelalterliche Stadtkerne in Jüterbog und Luckau bis zu
                gründerzeitlichen Villenkolonien in Königs Wusterhausen und Teltow.
              </p>
              <p
                style={{
                  fontSize: '1.02rem',
                  color: 'var(--ink-soft)',
                  lineHeight: 1.7,
                }}
              >
                Jede dieser Städte stellt andere Anforderungen an Material, Profilgebung und
                Behördenabstimmung. Wir kennen die regionalen Denkmalschutzbehörden und bringen
                die handwerkliche Erfahrung mit, die solche Arbeiten verlangen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Cities Grid */}
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
                  textAlign: 'center',
                }}
              >
                Standorte
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
                Städte in Brandenburg
              </h2>
            </ScrollReveal>

            <>
              <style>{`
                .cities-grid {
                  display: grid;
                  grid-template-columns: repeat(4, 1fr);
                  gap: 20px;
                }
                @media (max-width: 979px) {
                  .cities-grid { grid-template-columns: repeat(2, 1fr); }
                }
                @media (max-width: 540px) {
                  .cities-grid { grid-template-columns: 1fr; }
                }
                .city-card {
                  background-color: var(--paper);
                  border: 1px solid var(--line);
                  border-radius: var(--r);
                  padding: 24px;
                  display: flex;
                  flex-direction: column;
                  gap: 10px;
                  transition: box-shadow 0.2s ease, transform 0.2s ease;
                  text-decoration: none;
                  color: inherit;
                }
                .city-card:hover {
                  box-shadow: 0 6px 24px rgba(33,31,28,0.12);
                  transform: translateY(-2px);
                }
              `}</style>
              <div className="cities-grid">
                {brandenburgStaedte.map((stadt, i) => (
                  <ScrollReveal key={stadt.slug} delay={i * 50}>
                    <Link href={`/brandenburg/${stadt.slug}`} className="city-card">
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '8px',
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: 'var(--ff-display, Georgia, serif)',
                            fontSize: '1.1rem',
                            fontWeight: 700,
                            color: 'var(--ink)',
                            margin: 0,
                            lineHeight: 1.2,
                          }}
                        >
                          {stadt.name}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            color: 'var(--brand-dark)',
                            backgroundColor: 'var(--brand-tint)',
                            borderRadius: '9999px',
                            padding: '3px 10px',
                            whiteSpace: 'nowrap',
                            flexShrink: 0,
                          }}
                        >
                          {stadt.distanceFromBerlin}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--ink-soft)',
                          lineHeight: 1.6,
                          margin: 0,
                          flex: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        } as React.CSSProperties}
                      >
                        {stadt.description.split('. ')[0]}.
                      </p>
                      <span
                        style={{
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--brand-dark)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          marginTop: '4px',
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
        </div>
      </section>

      {/* Why Brandenburg section */}
      <section className="section">
        <div className="wrap">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '32px',
            }}
            className="why-grid"
          >
            <>
              <style>{`
                .why-grid {
                  grid-template-columns: repeat(3, 1fr);
                }
                @media (max-width: 720px) {
                  .why-grid { grid-template-columns: 1fr !important; }
                }
              `}</style>
            </>
            {[
              {
                title: 'Kurze Wege',
                text: 'Von unserer Werkstatt in Zossen aus sind alle brandenburgischen Städte in der Region in unter einer Stunde erreichbar – keine langen Wartezeiten, kein teurer Anfahrtsaufschlag.',
              },
              {
                title: 'Regionale Kenntnis',
                text: 'Wir kennen die zuständigen Denkmalschutzbehörden in Potsdam-Mittelmark, Teltow-Fläming und Dahme-Spreewald und wissen, wie Genehmigungsverfahren in der Region ablaufen.',
              },
              {
                title: 'Materialerfahrung',
                text: 'Jede Region bringt andere Holzarten und Profiltraditionen mit. Wir können Brandenburgische Kiefer, Eiche und Lärche handwerklich einsetzen und historischen Befunden gerecht werden.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div>
                  <div
                    style={{
                      width: '40px',
                      height: '3px',
                      backgroundColor: 'var(--brand)',
                      marginBottom: '20px',
                      borderRadius: '2px',
                    }}
                  />
                  <h3
                    style={{
                      fontFamily: 'var(--ff-display, Georgia, serif)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      color: 'var(--ink)',
                      marginBottom: '12px',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--ink-soft)',
                      lineHeight: 1.7,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--bg-alt)', borderTop: '1px solid var(--line)' }}>
        <div className="section">
          <div className="wrap">
            <ScrollReveal>
              <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
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
                  Projekt in Brandenburg?
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.65,
                    marginBottom: '28px',
                  }}
                >
                  Rufen Sie uns an oder schreiben Sie uns – wir vereinbaren einen kostenlosen
                  Vor-Ort-Termin und beraten Sie unverbindlich zu Ihrem Projekt.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/kontakt" className="btn btn--primary">
                    Kontakt aufnehmen
                  </Link>
                  <a
                    href="tel:+493085607830"
                    className="btn btn--ghost"
                    style={{ textDecoration: 'none' }}
                  >
                    030 85 60 78 30
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
