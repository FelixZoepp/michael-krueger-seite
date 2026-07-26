import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Wohnungseingangstüren sanieren & nachrüsten | Tischlerei Krüger Berlin',
  description:
    'Schallschutz, Einbruchschutz und Brandschutz für Wohnungseingangstüren im Altbau. Nachrüstung an bestehenden Türen ohne Austausch – Tischlerei Krüger Berlin.',
}

const problems = [
  'Schlechter Schallschutz – Gespräche im Treppenhaus sind hörbar',
  'Sicherheitsbedenken durch veraltete Schlösser und Beschläge',
  'Klemmende Schlösser und schwergängige Schließmechanismen',
  'Verzogene Rahmen mit sichtbaren Spalten zum Türblatt',
  'Undichte Türblätter ohne funktionsfähige Dichtungsebene',
]

export default function WohnungseingangsturenPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Startseite', url: '/' },
          { name: 'Leistungen' },
          { name: 'Wohnungseingangstüren' },
        ]}
      />

      <PageHero
        title="Wohnungseingangstüren"
        subtitle="Schallschutz, Sicherheit und Brandschutz nachrüsten – an Ihren bestehenden Altbautüren."
        tags={['Schallschutz', 'Einbruchschutz', 'Brandschutz']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Leistungen' },
          { label: 'Wohnungseingangstüren' },
        ]}
        backgroundImage="/images/leistung-wohnungseingangstuer.jpg"
      />

      {/* Video Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <div style={{
              borderRadius: 'var(--r)',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(42,39,36,0.15), 0 2px 8px rgba(42,39,36,0.08)',
            }}>
              <video
                controls
                preload="metadata"
                playsInline
                poster="/images/leistung-wohnungseingangstuer.jpg"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  backgroundColor: '#2a2724',
                }}
              >
                <source src="/videos/leistung-wohnungseingangstueren.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Element nicht.
              </video>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Häufige Probleme */}
      <section className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <span className="eyebrow">Häufige Probleme</span>
            <h2 style={{ marginTop: '16px', marginBottom: '40px' }}>
              Das kennen viele Eigentümer
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {problems.map((problem, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{
                  backgroundColor: 'var(--paper)',
                  borderRadius: 'var(--r-sm)',
                  padding: '24px',
                  borderLeft: '3px solid var(--brand)',
                  boxShadow: '1px 2px 8px rgba(42,39,36,0.06)',
                }}>
                  <p style={{ margin: 0, color: 'var(--ink)', fontWeight: 500 }}>
                    {problem}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wie Krüger hilft */}
      <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <span className="eyebrow">Unsere Lösung</span>
            <h2 style={{ marginTop: '16px', marginBottom: '24px' }}>
              So gehen wir vor
            </h2>
            <div style={{ lineHeight: 1.8, color: 'var(--ink-soft)' }}>
              <p>
                Wohnungseingangstüren im Altbau haben oft Jahrzehnte auf dem Buckel. Sie wurden
                für eine Zeit gebaut, in der Schallschutz und Einbruchsicherheit eine
                untergeordnete Rolle spielten. Die Folge: dünne Türblätter, einfache
                Buntbartschlösser und Zargen ohne Dichtung. Ein kompletter Austausch ist jedoch
                in vielen Berliner Altbauten problematisch – weil die Zargen eingemauert sind,
                weil der Denkmalschutz greift oder weil die Kosten für dutzende Türen in einem
                Mehrfamilienhaus den Rahmen sprengen.
              </p>
              <p>
                Unsere Lösung setzt an der vorhandenen Tür an. Wir verstärken das Türblatt,
                rüsten mehrfach verriegelnde Schlösser nach und bauen umlaufende Dichtungen
                ein. Der Schallschutz lässt sich durch gezielte Maßnahmen – etwa eine
                zusätzliche Schallschutzauflage oder einen Türfalz-Umbau – um bis zu 10 dB
                verbessern, was einer gefühlten Halbierung der Lautstärke entspricht. Bei
                Bedarf rüsten wir auch Türspione, Schutzbeschläge und Sicherheitsschließbleche
                nach.
              </p>
              <p>
                Ein besonderes Augenmerk liegt auf dem Brandschutz. In Mehrfamilienhäusern
                müssen Wohnungseingangstüren in der Regel die Anforderungen einer T30-Tür
                erfüllen. Wir prüfen den Bestand, beraten zu den Möglichkeiten der Ertüchtigung
                und setzen die erforderlichen Maßnahmen fachgerecht um – einschließlich
                selbstschließender Türschließer und intumeszierender Dichtungen, die im
                Brandfall aufschäumen und den Durchlass versperren.
              </p>
              <p>
                Das Ergebnis ist eine Tür, die den heutigen Anforderungen an Schall-,
                Einbruch- und Brandschutz genügt, dabei aber ihre historische Optik behält.
                Für Hausverwaltungen und WEGs bieten wir Serienlösungen an, bei denen alle
                Türen eines Hauses in einem koordinierten Ablauf saniert werden – effizient
                und mit minimaler Belästigung der Mieter.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--header)', padding: '80px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--ff-display, Georgia, serif)',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '16px',
          }}>
            Kostenlose Ersteinschätzung für Ihr Projekt
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1.05rem',
            maxWidth: '560px',
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Schildern Sie uns Ihr Anliegen – wir geben Ihnen eine erste Einschätzung, kostenfrei und unverbindlich.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" className="btn btn--primary" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
              Ersteinschätzung anfragen
            </Link>
            <a
              href="https://wa.me/491636983248?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ersteinsch%C3%A4tzung."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              style={{
                fontSize: '1.05rem',
                padding: '14px 32px',
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.3)',
              }}
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
