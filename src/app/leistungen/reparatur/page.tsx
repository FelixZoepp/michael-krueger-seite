import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reparatur & Restaurierung von Fenstern und Türen | Tischlerei Krüger Berlin',
  description:
    'Schnelle Einzelreparaturen an Fenstern, Türen und Holzbauteilen in Berlin & Brandenburg. Fachgerecht, kostengünstig, ohne unnötige Komplettsanierung.',
}

const problems = [
  'Klemmende Fenster, die sich nicht mehr richtig öffnen lassen',
  'Defekte Beschläge – Griffe lose, Scheren gebrochen, Scharniere ausgeleiert',
  'Verzogene Türen mit Spalten oder Schleifspuren am Boden',
  'Lose oder gebrochene Sprossen in Fenstern und Oberlichtern',
  'Gerissenes oder faulendes Holz an Rahmen, Flügeln oder Zargen',
]

export default function ReparaturPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Startseite', url: '/' },
          { name: 'Leistungen' },
          { name: 'Reparatur & Restaurierung' },
        ]}
      />

      <PageHero
        title="Reparatur & Restaurierung"
        subtitle="Schnelle, fachgerechte Einzelreparaturen – ohne unnötige Komplettsanierung."
        tags={['Reparatur', 'Beschläge', 'Holzarbeiten']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Leistungen' },
          { label: 'Reparatur & Restaurierung' },
        ]}
        backgroundImage="/images/leistung-reparatur-restaurierung.jpg"
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
                poster="/images/leistung-reparatur-restaurierung.jpg"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  backgroundColor: '#2a2724',
                }}
              >
                <source src="/videos/leistung-reparatur.mp4" type="video/mp4" />
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
                Nicht jedes Problem an einem Fenster oder einer Tür erfordert eine
                Komplettsanierung. Oft ist es ein einzelner defekter Beschlag, eine
                gebrochene Sprosse oder ein Riss im Holz, der behoben werden muss. Genau
                dafür bieten wir gezielte Einzelreparaturen an – schnell, fachgerecht und
                zu einem Bruchteil der Kosten eines Austauschs. Als spezialisierte
                Tischlerei verfügen wir über die Werkzeuge, die Erfahrung und das
                Materialwissen, um auch punktuelle Schäden dauerhaft zu beheben.
              </p>
              <p>
                Bei Beschlagproblemen prüfen wir zunächst, ob eine Justierung ausreicht
                oder ob Teile getauscht werden müssen. Für historische Fenster halten wir
                ein Sortiment gängiger Altbaubeschläge vor; wo keine Ersatzteile mehr
                verfügbar sind, fertigen wir passende Teile in unserer Werkstatt nach.
                Defekte Scheren, gebrochene Ecklager und ausgeschlagene Scharniere werden
                dabei ebenso fachgerecht behandelt wie klemmende Espagnoletten oder
                schwergängige Getriebe an Dreh-Kipp-Fenstern.
              </p>
              <p>
                Bei Holzschäden hängt das Vorgehen vom Ausmaß der Schädigung ab. Oberflächliche
                Risse lassen sich mit Epoxidharz stabilisieren und anschließend spachteln.
                Tiefere Schäden erfordern das Ausstemmen des geschädigten Bereichs und das
                Einsetzen eines passgenauen Holzstücks gleicher Art und Faser. Lose Sprossen
                werden verleimt, gesichert und bei Bedarf nachprofiliert. Das Ziel ist immer,
                die Reparaturstelle nach der Oberflächenbehandlung unsichtbar in das
                Gesamtbild einzufügen.
              </p>
              <p>
                Wir reparieren direkt vor Ort, wann immer das möglich ist. Bei aufwendigeren
                Arbeiten hängen wir den betroffenen Flügel oder die Tür aus und bearbeiten
                sie in unserer Werkstatt. In beiden Fällen ist das Fenster oder die Tür in
                der Regel am selben Tag wieder funktionstüchtig. Für Hausverwaltungen
                bieten wir auch regelmäßige Wartungsrunden an, bei denen wir den gesamten
                Fenster- und Türbestand eines Objekts systematisch prüfen und kleinere
                Mängel direkt beseitigen, bevor sie zu größeren Schäden werden.
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
