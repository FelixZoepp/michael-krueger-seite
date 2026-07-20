import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const SERVICES = [
  {
    image: '/images/leistung-historische-fenster.jpg',
    title: 'Historische Fenster & Kastenfenster',
    description:
      'Fachgerechte Restaurierung von Berliner Kastenfenstern und historischen Holzfenstern – mit originalen Profilen und moderner Dichtungstechnik.',
  },
  {
    image: '/images/leistung-energetische-fenstersanierung.jpg',
    title: 'Energetische Fenstersanierung',
    description:
      'Bessere Dämmwerte ohne Substanzverlust: neue Dichtungen, ertüchtigte Verglasung und justierte Beschläge für historische Fenster.',
  },
  {
    image: '/images/leistung-wohnungseingangstuer.jpg',
    title: 'Wohnungseingangstüren',
    description:
      'Schallschutz, Einbruchschutz und Brandschutz nachrüsten – an bestehenden Altbautüren, ohne Austausch.',
  },
  {
    image: '/images/leistung-historische-haustuer.jpg',
    title: 'Historische Haustüren',
    description:
      'Restaurierung oder originalgetreuer Nachbau historischer Haustüren – mit modernem Sicherheitsstandard.',
  },
  {
    image: '/images/leistung-reparatur-restaurierung.jpg',
    title: 'Reparatur & Restaurierung',
    description:
      'Einzelne Reparaturen an Fenstern, Türen und Holzbauelementen – schnell, fachgerecht und kostengünstig.',
  },
  {
    image: '/images/leistung-treppen-treppenhaus.jpg',
    title: 'Treppen & Altbaudetails',
    description:
      'Historische Treppen aufarbeiten, Geländer befestigen und Details wie Zierleisten und Fensterbänke erhalten.',
  },
]

export default function LeistungenSection() {
  return (
    <section className="section" id="leistungen" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="wrap">
        <ScrollReveal>
          <span className="eyebrow">Leistungen</span>
          <h2 style={{ marginTop: '16px', marginBottom: '52px' }}>Handwerk für den Altbau</h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="leistungen-grid"
        >
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <article
                className="service-card"
                style={{
                  backgroundColor: 'var(--paper)',
                  borderRadius: 'var(--r)',
                  overflow: 'hidden',
                  boxShadow: '2px 3px 12px rgba(42,39,36,0.07), -1px 1px 6px rgba(42,39,36,0.03)',
                  transition: 'box-shadow 0.35s cubic-bezier(0.22, 1, 0.36, 1), transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderTop: '3px solid var(--brand)',
                }}
              >
                <div className="service-img-wrap" style={{ position: 'relative', height: '220px', flexShrink: 0, overflow: 'hidden' }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="service-img"
                    style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                  {/* Warm tint overlay on hover */}
                  <div className="service-img-tint" />
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontSize: '1.1rem',
                      fontFamily: 'var(--ff-display, Georgia, serif)',
                      color: 'var(--ink)',
                      marginBottom: '10px',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, flex: 1, marginBottom: '20px' }}>
                    {service.description}
                  </p>
                  <Link
                    href="#kontakt"
                    className="service-mehr-link"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--brand-dark)',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    Mehr erfahren →
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .service-card:hover {
          box-shadow: 3px 10px 36px rgba(42,39,36,0.16), -2px 3px 10px rgba(42,39,36,0.05);
          transform: translateY(-4px);
        }
        .service-card:hover .service-img {
          transform: scale(1.04);
        }
        .service-img-tint {
          position: absolute;
          inset: 0;
          background: rgba(179,135,63,0);
          transition: background 0.4s ease;
          pointer-events: none;
        }
        .service-card:hover .service-img-tint {
          background: rgba(179,135,63,0.1);
        }
        .service-mehr-link {
          position: relative;
        }
        .service-mehr-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--brand-dark);
          transition: width 0.24s ease;
        }
        .service-card:hover .service-mehr-link::after {
          width: 100%;
        }
        .leistungen-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 980px) {
          .leistungen-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          .leistungen-grid {
            grid-template-columns: 1fr !important;
          }
          .service-img-wrap {
            height: 180px !important;
          }
        }
      `}</style>
    </section>
  )
}
