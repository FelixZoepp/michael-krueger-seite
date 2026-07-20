import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export default function UeberUnsSection() {
  return (
    <section className="section" id="ueber-uns" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="wrap">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
          }}
          className="ueber-grid"
        >
          {/* Left: Image */}
          <ScrollReveal direction="left">
            {/* Old-photograph frame treatment */}
            <div
              style={{
                position: 'relative',
                padding: '8px',
                backgroundColor: 'var(--paper)',
                borderRadius: '4px',
                boxShadow: '0 4px 28px rgba(42,39,36,0.18), 0 1px 6px rgba(42,39,36,0.1), inset 0 0 0 1px rgba(179,135,63,0.2)',
              }}
            >
              <div
                className="ueber-img-inner"
                style={{
                  position: 'relative',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  aspectRatio: '4/3',
                  transition: 'transform 0.4s ease',
                }}
              >
                <Image
                  src="/images/werkstatt-zossen.jpg"
                  alt="Werkstatt der Tischlerei Krüger in Zossen"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Warm vintage tint */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(179,135,63,0.06) 0%, transparent 60%)',
                    pointerEvents: 'none',
                  }}
                />
              </div>
              {/* Thin inner border / mat line */}
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: '12px',
                  border: '1px solid rgba(179,135,63,0.25)',
                  borderRadius: '2px',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </ScrollReveal>

          {/* Right: Text */}
          <ScrollReveal delay={100} direction="right">
            <span className="eyebrow">Über Uns</span>
            <h2 style={{ marginTop: '16px', marginBottom: '20px' }}>25+ Jahre Erfahrung – Meisterbetrieb seit 2016</h2>
            <p style={{ lineHeight: 1.75, marginBottom: '16px' }}>
              Seit 1997 handelt Michael Krüger mit historischen Bauelementen – mit einer klaren
              Mission: Erhalten statt ersetzen. 2016 legte er die Meisterprüfung ab und führt
              seitdem einen anerkannten Meisterbetrieb. Heute arbeitet ein neunköpfiges Team in
              unserer 300 m² großen Werkstatt in Zossen – spezialisiert auf
              Kastenfenster, Altbautüren und denkmalgerechte Restaurierung.
            </p>
            <p style={{ lineHeight: 1.75, marginBottom: '28px' }}>
              Mit über 1.100 abgeschlossenen Projekten in Berlin und Brandenburg haben wir uns als
              verlässlicher Partner für Eigentümer, Hausverwaltungen und Architekten etabliert.
              Wir verarbeiten ausschließlich Brandenburger Kieferbohlen – für maximale Authentizität
              und Langlebigkeit. Alle Arbeiten entstehen in unserer eigenen Werkstatt, mit dem
              Qualitätsanspruch eines eingetragenen Meisterbetriebs.
            </p>

            <blockquote
              style={{
                borderLeft: '3px solid var(--brand)',
                paddingLeft: '20px',
                marginBottom: '28px',
                fontStyle: 'italic',
                fontSize: '1.12rem',
                color: 'var(--ink)',
                lineHeight: 1.6,
                position: 'relative',
              }}
            >
              „Wir werden gerufen, wenn andere verzweifeln."
              {/* Decorative hand-written underline */}
              <svg
                aria-hidden="true"
                viewBox="0 0 260 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: 'block',
                  marginTop: '8px',
                  width: '100%',
                  maxWidth: '260px',
                  height: '10px',
                  opacity: 0.6,
                }}
              >
                <path
                  d="M2 6 C 40 2, 80 9, 130 5 S 210 3, 258 7"
                  stroke="var(--brand)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </blockquote>

            <Link
              href="/team"
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: 'var(--brand-dark)',
                textDecoration: 'none',
              }}
            >
              Unser Team kennenlernen →
            </Link>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .ueber-grid {
          grid-template-columns: 1fr 1fr;
        }
        .ueber-img-inner:hover {
          transform: scale(1.015) rotate(0.3deg);
        }
        @media (max-width: 768px) {
          .ueber-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
