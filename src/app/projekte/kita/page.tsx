import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Altbaufenster Kita Berlin-Spandau | Tischlerei Krüger',
  description:
    'Komplette Fensteraufarbeitung in einer Berliner Kindertagesstätte – kindersicher, emissionsarm und zu einem Bruchteil der Austauschkosten.',
}

const sidebarProjects = [
  { title: 'Außentür Olympiastadion Berlin', href: '/projekte/olympiastadion' },
  { title: 'Fenstertüren im Kennedysaal', href: '/projekte/kennedysaal' },
]

const sidebarArticles = [
  { title: 'Kastenfenster restaurieren statt austauschen', href: '/blog/kastenfenster' },
  { title: 'Altbaufenster energetisch sanieren', href: '/blog/energetische-sanierung' },
]

const facts = [
  { label: 'Ort', value: 'Berlin-Spandau' },
  { label: 'Objekt', value: 'Kindertagesstätte' },
  { label: 'Leistung', value: 'Fensteraufarbeitung' },
  { label: 'Vorteil', value: 'Bruchteil der Austauschkosten' },
]

export default function KitaPage() {
  return (
    <>
      <PageHero
        title="Altbaufenster in einer Berliner Kita – aufgearbeitet statt ausgetauscht"
        tags={['Kindereinrichtung', 'Emissionsarm', 'Kostenbewusst']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Projekte' },
          { label: 'Kita Berlin-Spandau' },
        ]}
        backgroundImage="/images/leistung-historische-fenster.jpg"
      />

      {/* Facts bar */}
      <div
        style={{
          backgroundColor: 'var(--bg-alt)',
          borderBottom: '1px solid var(--line)',
        }}
      >
        <div className="wrap">
          <>
            <style>{`
              .facts-bar-kita {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 0;
              }
              @media (max-width: 640px) {
                .facts-bar-kita {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              .fact-item-kita {
                padding: 20px 0;
                border-right: 1px solid var(--line);
              }
              .fact-item-kita:last-child {
                border-right: none;
              }
            `}</style>
            <div className="facts-bar-kita">
              {facts.map((f) => (
                <div key={f.label} className="fact-item-kita" style={{ paddingLeft: '24px' }}>
                  <p style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '4px' }}>
                    {f.label}
                  </p>
                  <p style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--ink)', marginBottom: 0 }}>
                    {f.value}
                  </p>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>

      <ArticleLayout
        sidebar={
          <Sidebar
            ctaText="Projekt besprechen"
            ctaHref="/kontakt"
            projects={sidebarProjects}
            articles={sidebarArticles}
          />
        }
      >
        <ScrollReveal>
          <p className="prose-lead">
            Marode Altbaufenster in einer Kindertagesstätte – undicht, schwergängig und optisch
            abgenutzt. Der erste Impuls war Kompletttausch. Unsere Einschätzung vor Ort ergab:
            Die Substanz ist gut. Eine Aufarbeitung würde deutlich günstiger kommen und die
            gleiche Funktionalität liefern.
          </p>
        </ScrollReveal>

        {/* PLE blocks */}
        <ScrollReveal delay={80}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              margin: '32px 0',
            }}
          >
            {[
              {
                label: 'Problem',
                color: '#fee2e2',
                borderColor: '#ef4444',
                text: 'Marode Altbaufenster in einer Kindertagesstätte – undicht, schwergängig und optisch abgenutzt.',
              },
              {
                label: 'Lösung',
                color: '#fef9ec',
                borderColor: 'var(--brand)',
                text: 'Komplette Aufarbeitung der bestehenden Fenster: neue Dichtungen, überarbeitete Beschläge, kindersichere Griffe und emissionsarme Oberflächen.',
              },
              {
                label: 'Ergebnis',
                color: '#dcfce7',
                borderColor: '#22c55e',
                text: 'Funktional einwandfreie Fenster zu einem Bruchteil der Austauschkosten – kindersicher und gesundheitlich unbedenklich.',
              },
            ].map((block) => (
              <div
                key={block.label}
                style={{
                  backgroundColor: block.color,
                  borderTop: `3px solid ${block.borderColor}`,
                  borderRadius: 'var(--r-sm)',
                  padding: '20px',
                }}
              >
                <p
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ink)',
                    marginBottom: '8px',
                  }}
                >
                  {block.label}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 0 }}>
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2>Warum Aufarbeiten hier die bessere Wahl war</h2>
          <p>
            Der Austausch aller Fenster in einer Kindertagesstätte hätte nicht nur erhebliche
            Kosten verursacht, sondern auch einen längeren Betriebsausfall bedeutet. Durch die
            Aufarbeitung der bestehenden Fenster konnten wir Raum für Raum vorgehen und den
            laufenden Betrieb der Einrichtung weitgehend aufrechterhalten.
          </p>
          <p>
            Die Kosteneinsparung gegenüber einem Komplettaustausch betrug rund 40 bis 60 Prozent –
            bei gleicher Funktionalität und verbesserter Energieeffizienz durch neue Dichtungen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>Sicherheit und gesunde Oberflächen</h2>
          <ul>
            <li>Kindersichere Beschläge und abschließbare Griffe</li>
            <li>Emissionsarme Oberflächen für gesundes Raumklima</li>
            <li>Energetische Verbesserung durch neue Dichtungen</li>
            <li>Erhalt der historischen Bausubstanz</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div
            style={{
              backgroundColor: 'var(--brand-tint)',
              borderLeft: '3px solid var(--brand)',
              borderRadius: '0 var(--r-sm) var(--r-sm) 0',
              padding: '20px 24px',
              margin: '32px 0',
            }}
          >
            <p
              style={{
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--ink)',
                lineHeight: 1.65,
                marginBottom: 0,
              }}
            >
              „40–60 % weniger als neue Fenster – bei voller Funktionalität und kindgerechter
              Sicherheit."
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <Link href="/kontakt" className="btn btn--primary">
            Ähnliches Projekt anfragen
          </Link>
        </ScrollReveal>
      </ArticleLayout>
    </>
  )
}
