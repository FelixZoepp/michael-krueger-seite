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
        </ScrollReveal>
      </div>
    </section>
  )
}
