import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

const PROJECTS = [
  {
    title: 'Olympiastadion Berlin',
    typ: 'Außentür-Restaurierung',
    beschreibung: 'Massivholztür mit moderner Sicherheitstechnik – denkmalgerecht und öffentlich abgenommen.',
    href: '/projekte/olympiastadion',
  },
  {
    title: 'Kennedysaal Berlin',
    typ: 'Fenstertüren-Rekonstruktion',
    beschreibung: 'Stilechte Rekonstruktion historischer Fenstertüren mit Isolierverglasung – originalgetreue Optik mit moderner Dämmung.',
    href: '/projekte/kennedysaal',
  },
  {
    title: 'Kita Berlin-Spandau',
    typ: 'Altbaufenster-Aufarbeitung',
    beschreibung: 'Aufarbeitung statt Austausch – kindersicher, emissionsarm und 40–60 % günstiger als neue Fenster.',
    href: '/projekte/kita',
  },
]

export default function ReferenzenSection() {
  return (
    <section className="section" id="referenzen" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="wrap" style={{ maxWidth: '800px' }}>
        <ScrollReveal>
          <span className="eyebrow">Referenzen</span>
          <h2 style={{ marginTop: '16px', marginBottom: '48px' }}>Unsere Referenzen</h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {PROJECTS.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 80}>
              <Link
                href={project.href}
                className="ref-list-item"
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '24px',
                  padding: '28px 0',
                  borderBottom: '1px solid var(--line)',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'padding-left 0.2s ease',
                }}
              >
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--ff-display, Georgia, serif)',
                        fontSize: '1.15rem',
                        color: 'var(--ink)',
                        margin: 0,
                      }}
                    >
                      {project.title}
                    </h3>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: 'var(--brand-dark)',
                        backgroundColor: 'var(--brand-tint)',
                        padding: '2px 10px',
                        borderRadius: '100px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {project.typ}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>
                    {project.beschreibung}
                  </p>
                </div>
                <span
                  className="ref-arrow"
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--brand)',
                    flexShrink: 0,
                    marginTop: '4px',
                    transition: 'transform 0.2s ease',
                  }}
                >
                  →
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .ref-list-item:hover {
          padding-left: 8px !important;
        }
        .ref-list-item:hover .ref-arrow {
          transform: translateX(4px);
        }
        .ref-list-item:first-child {
          border-top: 1px solid var(--line);
        }
      `}</style>
    </section>
  )
}
