import ScrollReveal from '@/components/ScrollReveal'

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M2 2.5C2 2.5 3 1 4.5 1C5.5 1 6.5 2 7 3L7.5 4.5C7.8 5.3 7.5 6.2 6.8 6.7L6 7.2C6.7 8.6 7.4 9.3 8.8 10L9.3 9.2C9.8 8.5 10.7 8.2 11.5 8.5L13 9C14 9.5 15 10.5 15 11.5C15 13 13.5 14 13.5 14C12 15 5 13 2 6.5C0.5 3.5 2 2.5 2 2.5Z" stroke="var(--brand)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function IconMagnifier() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8.5" r="5.5" stroke="var(--brand)" strokeWidth="1.8" />
      <path d="M13 13l4 4" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IconPaper() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="14" height="17" rx="2" stroke="var(--brand)" strokeWidth="1.8" />
      <path d="M7 7h6M7 11h6M7 15h3" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function IconHammer() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4 16L12 8M12 8l2-4 2 2-4 2M4 16l-2 2" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 10l4 4" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

const STEPS = [
  {
    num: '01',
    title: 'Kostenlose telefonische Ersteinschätzung',
    description:
      'Rufen Sie uns an und schildern Sie Ihr Anliegen. Wir geben Ihnen eine erste Einschätzung – kostenfrei und unverbindlich. Gerne können Sie uns vorab Bilder per WhatsApp senden.',
    icon: <IconPhone />,
  },
  {
    num: '02',
    title: 'Besichtigung vor Ort',
    description:
      'Wir kommen zu Ihnen, prüfen den Bestand und besprechen die Möglichkeiten direkt am Objekt.',
    icon: <IconMagnifier />,
  },
  {
    num: '03',
    title: 'Transparentes Angebot',
    description:
      'Sie erhalten ein Festpreisangebot – ohne versteckte Kosten, mit klarem Zeitplan.',
    icon: <IconPaper />,
  },
  {
    num: '04',
    title: 'Umsetzung ohne Ihren Zeitaufwand',
    description:
      'Unser Team übernimmt die komplette Ausführung – termingerecht, sauber und mit Gewährleistung. Sie müssen sich um nichts kümmern.',
    icon: <IconHammer />,
  },
]

export default function AblaufSection() {
  return (
    <section className="section" id="ablauf" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="wrap">
        <ScrollReveal>
          <span className="eyebrow">So läuft's</span>
          <h2 style={{ marginTop: '16px', marginBottom: '56px' }}>
            In vier Schritten zum Ergebnis
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '32px',
            position: 'relative',
          }}
          className="ablauf-grid"
        >
          {/* Connecting dashed line – desktop only */}
          <div
            className="ablauf-line"
            style={{
              position: 'absolute',
              top: '28px',
              left: 'calc(16.666% + 28px)',
              right: 'calc(16.666% + 28px)',
              height: '2px',
              backgroundImage: 'repeating-linear-gradient(to right, var(--brand) 0, var(--brand) 6px, transparent 6px, transparent 14px)',
              opacity: 0.45,
              zIndex: 0,
            }}
          />

          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 120}>
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Step number circle with warm shadow */}
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--brand)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 0 6px var(--bg-alt), 0 4px 16px rgba(179,135,63,0.35)',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--ff-display, Georgia, serif)',
                        fontWeight: 700,
                        fontSize: '1rem',
                        color: '#ffffff',
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  {/* Craft icon floating near circle */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      right: '-22px',
                      backgroundColor: 'var(--brand-tint)',
                      borderRadius: '50%',
                      width: '26px',
                      height: '26px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 1px 4px rgba(42,39,36,0.1)',
                      border: '1px solid rgba(179,135,63,0.2)',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--ff-display, Georgia, serif)',
                    fontSize: '1.2rem',
                    color: 'var(--ink)',
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .ablauf-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 980px) {
          .ablauf-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .ablauf-grid {
            grid-template-columns: 1fr !important;
          }
          .ablauf-line {
            display: none !important;
          }
        }
      `}</style>
    </section>
  )
}
