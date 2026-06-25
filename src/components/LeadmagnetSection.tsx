'use client'

import ScrollReveal from '@/components/ScrollReveal'

export default function LeadmagnetSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--header)' }}>
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="leadmagnet-grid"
        >
          {/* Left: Mock book cover */}
          <ScrollReveal>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--r)',
                overflow: 'hidden',
                aspectRatio: '3/4',
                maxWidth: '320px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, var(--brand-dark) 0%, #5a3d10 100%)',
                boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '32px',
              }}
            >
              {/* Badge */}
              <div
                style={{
                  alignSelf: 'flex-start',
                  backgroundColor: 'var(--brand)',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '5px 12px',
                  borderRadius: '4px',
                }}
              >
                Gratis-Ratgeber
              </div>

              {/* Decorative window icon */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  aria-hidden="true"
                  style={{ opacity: 0.3 }}
                >
                  <rect x="8" y="8" width="64" height="64" rx="6" stroke="white" strokeWidth="3" />
                  <line x1="8" y1="30" x2="72" y2="30" stroke="white" strokeWidth="3" />
                  <line x1="40" y1="30" x2="40" y2="72" stroke="white" strokeWidth="3" />
                </svg>
              </div>

              {/* Title */}
              <div>
                <p
                  style={{
                    fontFamily: 'var(--ff-display, Georgia, serif)',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    lineHeight: 1.35,
                    marginBottom: '12px',
                  }}
                >
                  Warum Sie keine neuen Fenster kaufen sollten
                </p>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)' }}>
                  Tischlerei Michael Krüger
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Text + form */}
          <ScrollReveal delay={100}>
            <h2
              style={{
                color: '#ffffff',
                marginBottom: '16px',
              }}
            >
              Gratis-Ratgeber: Warum Sie keine neuen Fenster kaufen sollten
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '32px' }}>
              Erfahren Sie, wie Sie mit einer fachgerechten Restaurierung bis zu 60 % der Kosten
              sparen, die Gebäudesubstanz erhalten und dabei sogar besser dämmen als mit
              Neuware – zusammengefasst in einem kostenlosen PDF von Tischlermeister Michael Krüger.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}
            >
              <input
                type="text"
                placeholder="Ihr Name"
                style={{
                  padding: '13px 16px',
                  borderRadius: 'var(--r-sm)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                style={{
                  padding: '13px 16px',
                  borderRadius: 'var(--r-sm)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                }}
              />
              <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start' }}>
                Ratgeber kostenlos herunterladen
              </button>
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.35)', margin: 0 }}>
                Kein Spam. Abmeldung jederzeit möglich.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .leadmagnet-grid {
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 768px) {
          .leadmagnet-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
