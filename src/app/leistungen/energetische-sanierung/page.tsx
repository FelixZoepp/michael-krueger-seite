import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Energetische Fenstersanierung | Tischlerei Krüger Berlin',
  description:
    'Energetische Sanierung bestehender Fenster in Berlin & Brandenburg. Neue Dichtungen, ertüchtigte Verglasung und verbesserte U-Werte – ohne Substanzverlust.',
}

const problems = [
  'Hohe Heizkosten durch schlecht gedämmte Fenster',
  'Spürbare Zugluft trotz geschlossener Fenster',
  'Kondenswasser an den Scheiben und Fensterrahmen',
  'Schlechte U-Werte, die keine Förderung ermöglichen',
  'Schimmelgefahr an Fensterlaibung und Mauerwerk',
]

export default function EnergetischeSanierungPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Startseite', url: '/' },
          { name: 'Leistungen' },
          { name: 'Energetische Fenstersanierung' },
        ]}
      />

      <PageHero
        title="Energetische Fenstersanierung"
        subtitle="Wärmeschutz verbessern, Heizkosten senken – ohne den Charakter Ihrer Fenster zu opfern."
        tags={['Energieeffizienz', 'Wärmeschutz', 'Bestandssanierung']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Leistungen' },
          { label: 'Energetische Sanierung' },
        ]}
        backgroundImage="/images/leistung-energetische-fenstersanierung.jpg"
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
                poster="/images/leistung-energetische-fenstersanierung.jpg"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  backgroundColor: '#2a2724',
                }}
              >
                <source src="/videos/leistung-energetische-sanierung.mp4" type="video/mp4" />
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
                Viele Eigentümer glauben, dass hohe Heizkosten und Zugluft zwangsläufig den
                Austausch aller Fenster erfordern. Das ist in den meisten Fällen nicht richtig.
                Der größte Teil der Wärmeverluste an Bestandsfenstern entsteht nicht durch das
                Glas, sondern durch undichte Fugen zwischen Flügel und Rahmen, durch fehlende
                oder verhärtete Dichtungen und durch schlecht justierte Beschläge. Genau dort
                setzen wir an.
              </p>
              <p>
                Bei der energetischen Fenstersanierung tauschen wir zunächst alle Dichtungsebenen
                aus. Wir verwenden hochwertige Falz- und Anschlagdichtungen, die exakt auf das
                jeweilige Profil abgestimmt sind. Im nächsten Schritt justieren wir sämtliche
                Beschläge, sodass die Flügel wieder vollständig und gleichmäßig an den Rahmen
                anliegen. Wo sinnvoll, ertüchtigen wir die vorhandene Verglasung – etwa durch
                den Einbau einer Isolierglasscheibe in den bestehenden Rahmen oder durch eine
                zusätzliche Vorsatzscheibe bei Kastenfenstern.
              </p>
              <p>
                Diese Maßnahmen bewirken in der Summe eine erhebliche Verbesserung der
                Wärmedämmung. Die Oberflächentemperatur an der Fensterinnenseite steigt, das
                Risiko von Kondenswasser und Schimmelbildung sinkt deutlich. In vielen Fällen
                lassen sich die U-Werte so weit verbessern, dass auch Förderprogramme wie die
                der KfW genutzt werden können. Wir beraten Sie gern dazu, welche Nachweise
                erforderlich sind.
              </p>
              <p>
                Der entscheidende Vorteil gegenüber einem kompletten Fenstertausch: Die
                bauliche Substanz bleibt erhalten. Es gibt keinen Eingriff in Mauerwerk oder
                Putz, keine aufwendigen Anschlussarbeiten, keine wochenlange Baustelle. Die
                Sanierung erfolgt in der Regel direkt am eingebauten Fenster und ist pro
                Einheit innerhalb weniger Stunden abgeschlossen. Für Mieter bedeutet das
                minimale Einschränkungen, für Eigentümer deutlich geringere Kosten bei
                messbarem energetischem Gewinn.
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
