import ScrollReveal from '@/components/ScrollReveal'

export default function VideoSection() {
  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
      <div className="wrap">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span className="eyebrow">Einblick in unsere Arbeit</span>
            <h2 style={{ marginTop: '16px' }}>
              Türen mit Geschichte
            </h2>
            <p
              style={{
                maxWidth: '560px',
                margin: '16px auto 0',
                color: 'var(--ink-soft)',
                lineHeight: 1.7,
              }}
            >
              Jede historische Tür erzählt eine Geschichte. Sehen Sie, wie wir sie bewahren.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100} direction="scale">
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow:
                '0 8px 40px rgba(42,39,36,0.15), 0 2px 8px rgba(42,39,36,0.08)',
            }}
          >
            <video
              controls
              preload="metadata"
              playsInline
              poster="/images/michael-krueger-portrait.jpg"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                backgroundColor: '#2a2724',
              }}
            >
              <source src="/videos/tueren-geschichten.mp4" type="video/mp4" />
              Ihr Browser unterstützt das Video-Element nicht.
            </video>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
