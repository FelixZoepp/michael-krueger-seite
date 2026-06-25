import ScrollReveal from '@/components/ScrollReveal'

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
    title: 'Kostenlose Ersteinschätzung',
    description:
      'Sie schildern Ihr Anliegen – wir kommen vorbei, prüfen den Bestand und beraten Sie vor Ort. Kostenfrei und unverbindlich.',
    icon: <IconMagnifier />,
  },
  {
    num: '02',
    title: 'Festes Angebot',
    description:
      'Sie erhalten ein transparentes Festpreisangebot – ohne versteckte Kosten, mit klarem Zeitplan.',
    icon: <IconPaper />,
  },
  {
    num: '03',
    title: 'Meisterhafte Ausführung',
    description:
      'Unser fünfköpfiges Team setzt die Arbeiten um – termingerecht, sauber und mit Gewährleistung.',
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
            In drei Schritten zum Ergebnis
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '40px',
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
          grid-template-columns: repeat(3, 1fr);
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
