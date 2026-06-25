import ScrollReveal from '@/components/ScrollReveal'

const STATS = [
  {
    number: '1.100+',
    label: 'Projekte abgeschlossen',
    note: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 11l5 5L18 6" stroke="var(--brand)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '25+',
    label: 'Jahre Erfahrung',
    note: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8" stroke="var(--brand)" strokeWidth="1.8" />
        <path d="M11 7v4l2.5 2.5" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '9',
    label: 'Mitarbeiter im Team',
    note: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="8" cy="7" r="3" stroke="var(--brand)" strokeWidth="1.8" />
        <circle cx="15" cy="7" r="3" stroke="var(--brand)" strokeWidth="1.8" />
        <path d="M2 19c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: 'Top',
    label: 'Referenzen',
    note: 'Olympiastadion · Kennedysaal',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M11 3l2.2 6.5H20l-5.6 4 2.2 6.5L11 16l-5.6 4 2.2-6.5L2 9.5h6.8L11 3z" stroke="var(--brand)" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <section
      className="trustbar-section"
      style={{ backgroundColor: 'var(--bg-alt)', borderBottom: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}
    >
      {/* Subtle warm grain texture */}
      <div className="trustbar-grain" aria-hidden="true" />

      <div className="wrap" style={{ paddingTop: '52px', paddingBottom: '52px', position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
          }}
          className="trust-grid"
        >
          {STATS.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 100}>
              <div className="trust-item" style={{ textAlign: 'center', padding: '0 24px', position: 'relative' }}>
                {/* Vertical divider — not on last item */}
                {i < STATS.length - 1 && (
                  <div className="trust-divider" />
                )}
                {/* Icon */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(179,135,63,0.1)',
                    marginBottom: '12px',
                  }}
                >
                  {stat.icon}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--ff-display, Georgia, serif)',
                    fontSize: 'clamp(2rem, 3vw, 3rem)',
                    fontWeight: 700,
                    color: 'var(--brand)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  {stat.number}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--ink-soft)',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </div>
                {stat.note && (
                  <div
                    style={{
                      fontSize: '0.78rem',
                      color: 'var(--muted)',
                      marginTop: '4px',
                    }}
                  >
                    {stat.note}
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .trustbar-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          opacity: 0.7;
          pointer-events: none;
        }
        .trust-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .trust-divider {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 60px;
          background: linear-gradient(to bottom, transparent, var(--line) 30%, var(--brand) 50%, var(--line) 70%, transparent);
          opacity: 0.5;
        }
        @media (max-width: 640px) {
          .trust-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .trust-divider {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}
