import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Außentür Olympiastadion Berlin | Tischlerei Krüger',
  description:
    'Neubau einer denkmalgerechten Massivholz-Außentür im Olympiastadion Berlin – öffentlich abgenommen und ins historische Ensemble integriert.',
}

const sidebarProjects = [
  { title: 'Fenstertüren im Kennedysaal', href: '/projekte/kennedysaal' },
  { title: 'Altbaufenster Kita Berlin-Spandau', href: '/projekte/kita' },
]

const sidebarArticles = [
  { title: 'Fenster & Türen im Denkmalschutz', href: '/blog/denkmalschutz' },
  { title: 'Historische Haustüren restaurieren oder nachbauen', href: '/blog/historische-haustueren' },
]

const facts = [
  { label: 'Ort', value: 'Berlin' },
  { label: 'Objekt', value: 'Denkmalgeschütztes Bauensemble' },
  { label: 'Leistung', value: 'Außentür · Massivholz' },
  { label: 'Besonderheit', value: 'Öffentlich abgenommen' },
]

export default function OlympiastadionPage() {
  return (
    <>
      <PageHero
        title="Außentür im Olympiastadion Berlin – denkmalgerecht erneuert"
        tags={['Denkmalgeschützt', 'Öffentlicher Bereich', 'Massivholztür']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Projekte' },
          { label: 'Olympiastadion' },
        ]}
        backgroundImage="/images/leistung-historische-haustuer.jpg"
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
              .facts-bar {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 0;
              }
              @media (max-width: 640px) {
                .facts-bar {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              .fact-item {
                padding: 20px 0;
                border-right: 1px solid var(--line);
              }
              .fact-item:first-child {
                padding-left: 0;
              }
              .fact-item:last-child {
                border-right: none;
              }
            `}</style>
            <div className="facts-bar">
              {facts.map((f) => (
                <div key={f.label} className="fact-item" style={{ paddingLeft: '24px' }}>
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
            Das Olympiastadion Berlin ist eines der markantesten Baudenkmäler der deutschen
            Hauptstadt. Als eine verwitterte Außentür in einem öffentlich zugänglichen Bereich
            des Ensembles ersetzt werden musste, waren die Anforderungen entsprechend hoch:
            denkmalgerecht, sicher, und für den dauerhaften Publikumsbetrieb geeignet.
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
                text: 'Stark verwitterte Außentür im öffentlich zugänglichen, denkmalgeschützten Bereich des Olympiastadions.',
              },
              {
                label: 'Lösung',
                color: '#fef9ec',
                borderColor: 'var(--brand)',
                text: 'Neubau einer Massivholztür in Anlehnung an das historische Vorbild – mit moderner Schließ- und Sicherheitstechnik.',
              },
              {
                label: 'Ergebnis',
                color: '#dcfce7',
                borderColor: '#22c55e',
                text: 'Denkmalgerecht abgenommen, optisch ins Ensemble integriert und für den öffentlichen Betrieb freigegeben.',
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
          <h2>Warum dieses Projekt anspruchsvoll war</h2>
          <p>
            Der Denkmalschutz schreibt vor, dass Ersatzelemente dem historischen Vorbild in
            Form, Proportion und Material so weit wie möglich entsprechen müssen. Gleichzeitig
            verlangt der öffentliche Betrieb eine moderne Schließ- und Sicherheitstechnik, die
            sich unauffällig ins Erscheinungsbild integriert.
          </p>
          <p>
            Die Abstimmung mit der Denkmalbehörde, der Bauleitung und den Sicherheitsverantwortlichen
            des Stadions erforderte mehrere Abstimmungsrunden, bevor mit der Werkstattfertigung
            begonnen werden konnte.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>Unser Vorgehen</h2>
          <ul>
            <li>Aufmaß und Bestandsanalyse vor Ort</li>
            <li>Werkstattfertigung in Massivholz nach historischem Vorbild</li>
            <li>Moderne Schließtechnik integriert (verdeckt montiert)</li>
            <li>Montage und enge Abstimmung mit der Bauleitung</li>
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
              „Moderne Technik dort, wo sie gebraucht wird – Zurückhaltung dort, wo das Denkmal
              es verlangt."
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
