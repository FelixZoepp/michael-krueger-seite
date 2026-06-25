import ScrollReveal from '@/components/ScrollReveal'

function HouseIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <path
        d="M4 16L18 4L32 16V32H23V24H13V32H4V16Z"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="24" height="28" rx="2" stroke="var(--brand)" strokeWidth="2" />
      <line x1="6" y1="12" x2="30" y2="12" stroke="var(--brand)" strokeWidth="2" />
      <line x1="6" y1="20" x2="30" y2="20" stroke="var(--brand)" strokeWidth="2" />
      <rect x="14" y="26" width="8" height="6" stroke="var(--brand)" strokeWidth="2" />
    </svg>
  )
}

function CompassIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="13" stroke="var(--brand)" strokeWidth="2" />
      <path
        d="M18 10L21 18L18 22L15 18L18 10Z"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const GROUPS = [
  {
    Icon: HouseIcon,
    title: 'Eigentümer & WEGs',
    text: 'Sie besitzen eine Altbauwohnung oder ein Gründerzeithaus und möchten Fenster oder Türen erhalten statt ersetzen.',
  },
  {
    Icon: BuildingIcon,
    title: 'Hausverwaltungen',
    text: 'Sie betreuen Bestände mit historischen Bauelementen und suchen einen zuverlässigen Partner für Sanierung und Wartung.',
  },
  {
    Icon: CompassIcon,
    title: 'Architekten & Denkmalpflege',
    text: 'Sie planen eine denkmalgerechte Sanierung und brauchen einen Ausführungsbetrieb mit Erfahrung und Feingefühl.',
  },
]

export default function ZielgruppenSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="wrap">
        <ScrollReveal>
          <span className="eyebrow">Für wen wir arbeiten</span>
          <h2 style={{ marginTop: '16px', marginBottom: '52px' }}>
            Ob Eigentümer, Verwaltung oder Architekt
          </h2>
        </ScrollReveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
          }}
          className="ziel-grid"
        >
          {GROUPS.map(({ Icon, title, text }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div
                style={{
                  backgroundColor: 'var(--paper)',
                  borderRadius: 'var(--r)',
                  padding: '36px',
                  border: '1px solid var(--line)',
                  height: '100%',
                }}
              >
                <div style={{ marginBottom: '20px' }}>
                  <Icon />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--ff-display, Georgia, serif)',
                    fontSize: '1.2rem',
                    color: 'var(--ink)',
                    marginBottom: '12px',
                  }}
                >
                  {title}
                </h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--ink-soft)' }}>
                  {text}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        .ziel-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: 768px) {
          .ziel-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
