import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Historische Haustüren restaurieren & nachbauen | Tischlerei Krüger Berlin',
  description:
    'Originalgetreue Restaurierung und Nachbau historischer Haustüren in Berlin & Brandenburg. Denkmalgerecht, mit modernen Sicherheitsstandards.',
}

const problems = [
  'Undichtigkeit – Wind und Feuchtigkeit dringen durch Fugen ein',
  'Sicherheitsmängel durch veraltete Schlösser und fehlende Verriegelung',
  'Verwittertes Holz an Rahmen, Füllungen und Sockelbereich',
  'Defekte oder fehlende Zierleisten und Profilierungen',
  'Denkmalschutzauflagen, die einen einfachen Austausch ausschließen',
]

export default function HistorischeHaustuerenPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Startseite', url: '/' },
          { name: 'Leistungen' },
          { name: 'Historische Haustüren' },
        ]}
      />

      <PageHero
        title="Historische Haustüren"
        subtitle="Originalgetreu restaurieren oder nachbauen – mit modernen Sicherheitsstandards hinter historischer Fassade."
        tags={['Haustüren', 'Denkmalschutz', 'Nachbau']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Leistungen' },
          { label: 'Historische Haustüren' },
        ]}
        backgroundImage="/images/leistung-historische-haustuer.jpg"
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
                poster="/images/leistung-historische-haustuer.jpg"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  backgroundColor: '#2a2724',
                }}
              >
                <source src="/videos/leistung-historische-haustueren.mp4" type="video/mp4" />
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
                Die Haustür ist das Gesicht eines Gebäudes. Bei historischen Mehrfamilienhäusern
                in Berlin und Brandenburg prägen aufwendig gestaltete Haustüren mit Kassetten,
                Schnitzereien, Oberlichten und Schmiedeeisenbeschlägen den Charakter ganzer
                Straßenzüge. Wenn diese Türen dem Verfall preisgegeben oder durch gesichtslose
                Aluminiumelemente ersetzt werden, geht ein Stück Stadtbild unwiederbringlich
                verloren.
              </p>
              <p>
                Bei der Restaurierung einer historischen Haustür beginnen wir mit einer
                detaillierten Dokumentation: Wir erfassen alle Profile, Zierleisten,
                Füllungsteilungen und Beschläge. Anschließend wird die Tür ausgehängt und
                in unserer Werkstatt bearbeitet. Verwittertes Holz wird ausgestemmt und
                durch arttypisches Material ersetzt – bei Gründerzeittüren typischerweise
                Kiefer oder Eiche, bei Jugendstiltüren oft Eiche mit feinen
                Profilierungen. Fehlende Zierleisten werden nach Vorlage der
                vorhandenen Reste originalgetreu nachgefertigt.
              </p>
              <p>
                Wo eine Restaurierung wirtschaftlich nicht mehr sinnvoll ist – etwa bei
                stark geschädigtem Holz oder wenn tragende Teile der Konstruktion betroffen
                sind – fertigen wir einen originalgetreuen Nachbau. Dieser folgt exakt
                den Proportionen, Profilen und Konstruktionsdetails des Originals, wird
                aber aus frischem, dauerhaftem Massivholz gefertigt und mit moderner
                Schließtechnik ausgestattet. In der Abstimmung mit der Denkmalbehörde
                übernehmen wir die erforderliche Dokumentation und Antragstellung, sodass
                der Genehmigungsprozess für Sie reibungslos verläuft.
              </p>
              <p>
                Unabhängig davon, ob restauriert oder nachgebaut wird: Jede Haustür
                verlässt unsere Werkstatt mit modernen Mehrfachverriegelungen, hochwertigen
                Dichtungen und einem Oberflächenschutz, der für viele Jahre Witterung
                standhält. Von außen sieht man das nicht – und genau das ist das Ziel.
                Historische Gestaltung, zeitgemäße Funktion.
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
