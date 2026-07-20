import ScrollReveal from '@/components/ScrollReveal'

export default function ProblemSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="wrap" style={{ maxWidth: '760px' }}>
        <ScrollReveal>
          <span className="eyebrow">Das Problem</span>
          <h2 style={{ marginTop: '16px', marginBottom: '20px' }}>
            Kennen Sie das? Ihre Altbaufenster klemmen, es zieht – und der erste Rat lautet:
            rausreißen.
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.75 }}>
            In vielen Fällen ist das unnötig, teuer und zerstört unwiederbringliche Substanz. Wir
            zeigen Ihnen die bessere Alternative.
          </p>
          <p
            style={{
              fontSize: '1.35rem',
              fontWeight: 700,
              fontFamily: 'var(--ff-display, Georgia, serif)',
              color: 'var(--brand-dark)',
              marginTop: '28px',
              lineHeight: 1.4,
            }}
          >
            Substanz bewahren. Werte sichern.
          </p>
          <div
            style={{
              marginTop: '36px',
              padding: '28px 32px',
              backgroundColor: 'var(--paper)',
              borderRadius: 'var(--r, 8px)',
              border: '1px solid var(--line)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: '1.1rem',
                color: 'var(--ink)',
                marginBottom: '12px',
              }}
            >
              Aufarbeitung vs. Restaurierung – was ist der Unterschied?
            </h3>
            <p style={{ fontSize: '0.95rem', lineHeight: 1.75, color: 'var(--ink-soft)', margin: 0 }}>
              <strong>Aufarbeitung</strong> bedeutet, ein Bauteil funktionsfähig zu machen – Schleifen,
              Streichen, Dichtungen erneuern. <strong>Restaurierung</strong> geht weiter: Hier wird
              die historische Substanz originalgetreu wiederhergestellt, inklusive Profilen, Beschlägen
              und Oberflächen. Wir beherrschen beides – und beraten Sie ehrlich, was bei Ihrem Objekt
              sinnvoll ist.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
