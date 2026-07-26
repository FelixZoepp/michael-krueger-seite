import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Historische Fenster & Kastenfenster restaurieren | Tischlerei Krüger Berlin',
  description:
    'Fachgerechte Restaurierung historischer Fenster und Kastenfenster in Berlin & Brandenburg. Originalprofile erhalten, moderne Dichtungstechnik, 40–60 % günstiger als Austausch.',
}

const problems = [
  'Klemmende Fenster, die sich kaum öffnen oder schließen lassen',
  'Zugige Rahmen mit spürbarem Luftzug bei geschlossenem Fenster',
  'Poröse oder fehlende Dichtungen ohne Dämmwirkung',
  'Abblätternde Farbe und freiliegendes Holz an den Profilen',
  'Schwergängige Beschläge und defekte Verschlussmechanismen',
]

export default function HistorischeFensterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Historische Fenster & Kastenfenster restaurieren',
          description: 'Fachgerechte Restaurierung historischer Fenster und Kastenfenster in Berlin & Brandenburg. Originalprofile erhalten, moderne Dichtungstechnik, 40–60 % günstiger als Austausch.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Tischlerei Michael Krüger',
            url: 'https://michael-krueger-seite.vercel.app',
            telephone: '+493085607830',
          },
          areaServed: [
            { '@type': 'City', name: 'Berlin' },
            { '@type': 'State', name: 'Brandenburg' },
          ],
          url: 'https://michael-krueger-seite.vercel.app/leistungen/historische-fenster',
        }) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Startseite', url: '/' },
          { name: 'Leistungen' },
          { name: 'Historische Fenster & Kastenfenster' },
        ]}
      />

      <PageHero
        title="Historische Fenster & Kastenfenster"
        subtitle="Restaurierung statt Austausch – originalgetreu, energetisch verbessert und wirtschaftlich sinnvoll."
        tags={['Kastenfenster', 'Denkmalschutz', 'Restaurierung']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Leistungen' },
          { label: 'Historische Fenster' },
        ]}
        backgroundImage="/images/leistung-historische-fenster.jpg"
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
                poster="/images/leistung-historische-fenster.jpg"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  backgroundColor: '#2a2724',
                }}
              >
                <source src="/videos/leistung-historische-fenster.mp4" type="video/mp4" />
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
                Historische Fenster und Berliner Kastenfenster sind baugeschichtliche Dokumente.
                Ihre Profile, Proportionen und Konstruktionsdetails erzählen von der Handwerkskunst
                vergangener Jahrzehnte. Ein Austausch gegen moderne Kunststofffenster zerstört
                diesen Charakter unwiderruflich – und ist in vielen Fällen gar nicht nötig. Bei
                der Tischlerei Krüger setzen wir konsequent auf Restaurierung: Wir erhalten die
                originale Substanz und bringen die Fenster auf einen zeitgemäßen technischen Stand.
              </p>
              <p>
                Unser Vorgehen beginnt mit einer sorgfältigen Bestandsaufnahme. Wir prüfen den
                Zustand des Holzes, der Beschläge, der Verglasung und der Dichtungsebenen. Auf
                dieser Grundlage erstellen wir ein Sanierungskonzept, das genau die Maßnahmen
                umfasst, die tatsächlich erforderlich sind – nicht mehr und nicht weniger.
                Geschädigtes Holz wird ausgestemmt und mit arttypischem Material ergänzt,
                vorhandene Profile werden exakt nachgearbeitet. Beschläge werden gangbar gemacht
                oder durch passende historische Nachfertigungen ersetzt.
              </p>
              <p>
                Ein wesentlicher Bestandteil unserer Arbeit ist die moderne Dichtungstechnik.
                Durch den Einbau umlaufender Falzdichtungen, die Ertüchtigung der Verglasung
                und die fachgerechte Justierung aller beweglichen Teile erreichen wir eine
                deutliche Verbesserung des Wärmeschutzes – ohne das Erscheinungsbild zu
                verändern. Bei Kastenfenstern nutzen wir zusätzlich den bauphysikalischen
                Vorteil der Doppelkonstruktion, um Schall- und Wärmeschutz zu optimieren.
              </p>
              <p>
                Das Ergebnis: funktionstüchtige Fenster, die aussehen wie am Tag ihrer
                Entstehung, dabei aber 40–60 % weniger kosten als ein kompletter Austausch.
                Gleichzeitig bleiben Denkmalschutzauflagen eingehalten und der architektonische
                Charakter des Gebäudes gewahrt. Für Eigentümer, Hausverwaltungen und
                Wohnungsbaugesellschaften ist das eine wirtschaftlich und gestalterisch
                überzeugende Lösung.
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
