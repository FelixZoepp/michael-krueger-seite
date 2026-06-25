import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Fenstertüren Kennedysaal Berlin | Tischlerei Krüger',
  description:
    'Stilechte Rekonstruktion historischer Fenstertüren im Kennedysaal Berlin – originalgetreue Profile mit moderner Isolierverglasung.',
}

const sidebarProjects = [
  { title: 'Außentür Olympiastadion Berlin', href: '/projekte/olympiastadion' },
  { title: 'Altbaufenster Kita Berlin-Spandau', href: '/projekte/kita' },
]

const sidebarArticles = [
  { title: 'Fenster & Türen im Denkmalschutz', href: '/blog/denkmalschutz' },
  { title: 'Historische Haustüren restaurieren oder nachbauen', href: '/blog/historische-haustueren' },
]

const facts = [
  { label: 'Ort', value: 'Berlin' },
  { label: 'Objekt', value: 'Repräsentativer Saal' },
  { label: 'Leistung', value: 'Fenstertüren · Rekonstruktion' },
  { label: 'Fokus', value: 'Licht & Dämmung' },
]

export default function KennedysaalPage() {
  return (
    <>
      <PageHero
        title="Historische Fenstertüren im Kennedysaal – stilecht rekonstruiert"
        tags={['Rekonstruktion', 'Isolierverglasung', 'Denkmalschutz']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Projekte' },
          { label: 'Kennedysaal' },
        ]}
        backgroundImage="/images/leistung-energetische-fenstersanierung.jpg"
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
              .facts-bar-k {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 0;
              }
              @media (max-width: 640px) {
                .facts-bar-k {
                  grid-template-columns: repeat(2, 1fr);
                }
              }
              .fact-item-k {
                padding: 20px 0;
                border-right: 1px solid var(--line);
              }
              .fact-item-k:last-child {
                border-right: none;
              }
            `}</style>
            <div className="facts-bar-k">
              {facts.map((f) => (
                <div key={f.label} className="fact-item-k" style={{ paddingLeft: '24px' }}>
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
            Der Kennedysaal ist ein repräsentativer Versammlungsraum mit hohen denkmalpflegerischen
            Anforderungen. Die bestehenden Fenstertüren waren undicht, energetisch schwach und
            entsprachen nicht mehr den Nutzungsanforderungen – ohne die historische Optik des
            Saals zu verändern, musste eine Lösung gefunden werden.
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
                text: 'Undichte, energetisch schwache Fenstertüren in einem repräsentativen Saal mit hohen denkmalpflegerischen Anforderungen.',
              },
              {
                label: 'Lösung',
                color: '#fef9ec',
                borderColor: 'var(--brand)',
                text: 'Stilechte Rekonstruktion der Fenstertüren mit moderner Isolierverglasung – Profil und Optik des Originals erhalten.',
              },
              {
                label: 'Ergebnis',
                color: '#dcfce7',
                borderColor: '#22c55e',
                text: 'Originalgetreue Optik bei deutlich verbesserter Wärmedämmung und Dichtheit.',
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
          <h2>Die Herausforderung: Erhalt und Energie zugleich</h2>
          <p>
            Im Kennedysaal treffen zwei Anforderungen aufeinander, die sich auf den ersten Blick
            widersprechen: die denkmalpflegerische Forderung nach Erhalt des historischen
            Erscheinungsbilds und der Wunsch nach moderner Wärmedämmung. Moderne Einfachverglasung
            war keine Option – aber auch eine vollständige Veränderung der Profilgeometrie war
            ausgeschlossen.
          </p>
          <p>
            Die Lösung war eine sorgfältige Profilaufnahme des Bestands, gefolgt von einer
            maßgenauen Rekonstruktion mit den exakten historischen Abmessungen – kombiniert
            mit zeitgemäßer Isolierverglasung.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>Originalgetreu rekonstruiert</h2>
          <ul>
            <li>Profilaufnahme des historischen Bestands</li>
            <li>Maßgenaue Neufertigung in der Werkstatt</li>
            <li>Isolierverglasung für bessere Dämmung ohne Profilveränderung</li>
            <li>Abstimmung mit der Denkmalschutzbehörde</li>
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
              „Originalgetreue Profile erhalten den Wert – moderne Verglasung senkt die Kosten."
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
