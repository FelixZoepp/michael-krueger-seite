import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const PROJECTS = [
  {
    image: '/images/referenz-olympiastadion.jpg',
    title: 'Olympiastadion Berlin',
    problem: 'Verwitterte Außentür im denkmalgeschützten Bereich',
    loesung: 'Massivholztür mit moderner Sicherheitstechnik',
    ergebnis: 'Öffentlich abgenommen und denkmalgerecht',
    href: '/projekte/olympiastadion',
  },
  {
    image: '/images/referenz-kennedysaal.jpg',
    title: 'Kennedysaal Berlin',
    problem: 'Historische Fenstertüren undicht und energetisch schwach',
    loesung: 'Stilechte Rekonstruktion mit Isolierverglasung',
    ergebnis: 'Originalgetreue Optik mit moderner Dämmung',
    href: '/projekte/kennedysaal',
  },
  {
    image: '/images/referenz-kita-altbaufenster.jpg',
    title: 'Kita Berlin-Spandau',
    problem: 'Altbaufenster in einer Kindereinrichtung marode',
    loesung: 'Aufarbeitung statt Austausch – kindersicher und emissionsarm',
    ergebnis: '40–60 % günstiger als neue Fenster',
    href: '/projekte/kita',
  },
]

export default function ReferenzenSection() {
  return (
    <section className="section" id="referenzen" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="wrap">
        <ScrollReveal>
          <span className="eyebrow">Referenzen</span>
          <h2 style={{ marginTop: '16px', marginBottom: '52px' }}>Ausgewählte Projekte</h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="referenz-grid"
        >
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 100}>
              <article
                className="referenz-card"
                style={{
                  backgroundColor: 'var(--paper)',
                  borderRadius: 'var(--r)',
                  overflow: 'hidden',
                  /* Photo frame: outer shadow + inner mat border */
                  boxShadow: '0 2px 12px rgba(42,39,36,0.09), 0 0 0 1px rgba(42,39,36,0.06)',
                  transition: 'box-shadow 0.26s ease, transform 0.26s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  /* Inner mat effect via outline */
                  outline: '4px solid var(--paper)',
                  outlineOffset: '-6px',
                }}
              >
                {/* Image with zoom on hover */}
                <div
                  className="referenz-img-wrap"
                  style={{ position: 'relative', height: '220px', flexShrink: 0, overflow: 'hidden' }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="referenz-img"
                    style={{ objectFit: 'cover', transition: 'transform 0.45s ease' }}
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--ff-display, Georgia, serif)',
                      fontSize: '1.15rem',
                      color: 'var(--ink)',
                      marginBottom: '16px',
                    }}
                  >
                    {project.title}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginBottom: '20px',
                      flex: 1,
                    }}
                  >
                    {[
                      { label: 'Problem', value: project.problem, dot: '#c0392b' },
                      { label: 'Lösung', value: project.loesung, dot: 'var(--brand)' },
                      { label: 'Ergebnis', value: project.ergebnis, dot: '#4a7c4e' },
                    ].map(({ label, value, dot }) => (
                      <div key={label} style={{ display: 'flex', gap: '10px', fontSize: '0.875rem', alignItems: 'flex-start' }}>
                        {/* Colored dot icon */}
                        <span
                          style={{
                            display: 'inline-block',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: dot,
                            flexShrink: 0,
                            marginTop: '5px',
                          }}
                        />
                        <span>
                          <span
                            style={{
                              color: 'var(--ink)',
                              fontWeight: 600,
                              marginRight: '4px',
                            }}
                          >
                            {label}:
                          </span>
                          <span style={{ color: 'var(--ink-soft)' }}>{value}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href={project.href}
                    className="referenz-link"
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: 'var(--brand-dark)',
                      textDecoration: 'none',
                      display: 'inline-block',
                    }}
                  >
                    Projekt ansehen →
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .referenz-card:hover {
          box-shadow: 0 12px 40px rgba(42,39,36,0.16), 0 0 0 1px rgba(179,135,63,0.15);
          transform: translateY(-4px);
        }
        .referenz-card:hover .referenz-img {
          transform: scale(1.03);
        }
        .referenz-link {
          position: relative;
        }
        .referenz-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background-color: var(--brand-dark);
          transition: width 0.24s ease;
        }
        .referenz-card:hover .referenz-link::after {
          width: 100%;
        }
        .referenz-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 980px) {
          .referenz-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
