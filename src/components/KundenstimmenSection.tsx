import ScrollReveal from '@/components/ScrollReveal'

const REVIEWS = [
  {
    quote:
      'Herr Krüger hat unsere Kastenfenster wunderbar restauriert. Endlich zieht es nicht mehr, und die Optik ist besser als je zuvor.',
    name: 'Familie M.',
    role: 'Charlottenburg',
  },
  {
    quote:
      'Professionell, pünktlich und transparent. Die Wohnungseingangstüren in unserem Altbau sind jetzt sicher und schallgedämmt.',
    name: 'Hausverwaltung P.',
    role: 'Prenzlauer Berg',
  },
  {
    quote:
      'Die Abstimmung mit der Denkmalbehörde lief reibungslos. Absolute Empfehlung für historische Projekte.',
    name: 'Architekturbüro S.',
    role: 'Berlin-Mitte',
  },
]

export default function KundenstimmenSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="wrap">
        <ScrollReveal>
          <span className="eyebrow">Kundenstimmen</span>
          <h2 style={{ marginTop: '16px', marginBottom: '52px' }}>Das sagen unsere Kunden</h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
          }}
          className="kunden-grid"
        >
          {REVIEWS.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 100}>
              <div
                className={`kunden-card kunden-card-${i}`}
                style={{
                  backgroundColor: '#fffef9',
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`,
                  borderRadius: 'var(--r)',
                  padding: '32px',
                  border: '1px solid rgba(179,135,63,0.18)',
                  boxShadow: '2px 4px 16px rgba(42,39,36,0.08), 0 1px 3px rgba(42,39,36,0.04)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Large decorative opening quote */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '20px',
                    fontFamily: 'Georgia, serif',
                    fontSize: '5rem',
                    lineHeight: 1,
                    color: 'var(--brand)',
                    opacity: 0.12,
                    userSelect: 'none',
                    pointerEvents: 'none',
                  }}
                >
                  „
                </div>

                {/* SVG Stars */}
                <div style={{ display: 'flex', gap: '3px' }}>
                  {[...Array(5)].map((_, s) => (
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="var(--gold-star)" aria-hidden="true">
                      <path d="M8 1l1.8 5.2H15l-4.5 3.3 1.7 5.2L8 11.5l-4.2 3.2 1.7-5.2L1 6.2h5.2L8 1z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p
                  style={{
                    fontSize: '0.97rem',
                    lineHeight: 1.75,
                    color: 'var(--ink)',
                    flex: 1,
                    fontStyle: 'italic',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  „{review.quote}"
                </p>

                {/* Attribution */}
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '14px' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>
                    {review.name}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--muted)' }}>{review.role}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .kunden-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        /* Subtle card rotation for "pinned on board" feel */
        .kunden-card-0 { transform: rotate(-0.6deg); }
        .kunden-card-1 { transform: rotate(0.4deg); }
        .kunden-card-2 { transform: rotate(-0.3deg); }
        .kunden-card:hover {
          transform: rotate(0deg) translateY(-3px) !important;
          box-shadow: 3px 8px 28px rgba(42,39,36,0.14), 0 1px 4px rgba(42,39,36,0.06) !important;
        }
        @media (max-width: 768px) {
          .kunden-grid {
            grid-template-columns: 1fr !important;
          }
          .kunden-card-0,
          .kunden-card-1,
          .kunden-card-2 {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
