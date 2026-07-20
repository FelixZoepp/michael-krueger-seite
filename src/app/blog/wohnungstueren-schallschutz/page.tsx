import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Wohnungseingangstüren: Schallschutz & Sicherheit | Tischlerei Krüger',
  description:
    'Schallschutz, Einbruchschutz und Brandschutz an bestehenden Altbautüren nachrüsten – was möglich ist und was nicht.',
}

const otherArticles = [
  { title: 'Kastenfenster restaurieren statt austauschen', href: '/blog/kastenfenster' },
  { title: 'Altbaufenster energetisch sanieren', href: '/blog/energetische-sanierung' },
  { title: 'Historische Haustüren restaurieren oder nachbauen', href: '/blog/historische-haustueren' },
  { title: 'Fenster & Türen im Denkmalschutz', href: '/blog/denkmalschutz' },
  { title: 'Historische Treppen & Altbaudetails erhalten', href: '/blog/treppen-altbaudetails' },
]

export default function WohnungstuerenSchallschutzPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Wohnungseingangstüren: Schallschutz, Einbruchschutz & Brandschutz nachrüsten',
          description: 'Schallschutz, Einbruchschutz und Brandschutz an bestehenden Altbautüren nachrüsten.',
          image: 'https://michael-krueger-seite.vercel.app/images/leistung-wohnungseingangstuer.jpg',
          author: { '@type': 'Person', name: 'Michael Krüger', jobTitle: 'Tischlermeister', url: 'https://michael-krueger-seite.vercel.app/team' },
          publisher: { '@type': 'Organization', name: 'Tischlerei Michael Krüger', url: 'https://michael-krueger-seite.vercel.app' },
          datePublished: '2024-06-25',
          dateModified: '2025-01-15',
          mainEntityOfPage: 'https://michael-krueger-seite.vercel.app/blog/wohnungstueren-schallschutz',
          keywords: ['Wohnungseingangstür', 'Schallschutz', 'Einbruchschutz', 'Brandschutz', 'Altbautür'],
        }) }}
      />
      <PageHero
        title="Wohnungseingangstüren: Schallschutz, Einbruchschutz & Brandschutz nachrüsten"
        tags={['Türen', 'Fachartikel']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Ratgeber', href: '/blog' },
          { label: 'Wohnungseingangstüren' },
        ]}
        backgroundImage="/images/leistung-wohnungseingangstuer.jpg"
      />

      <ArticleLayout
        sidebar={
          <Sidebar
            ctaText="Projekt besprechen"
            ctaHref="/kontakt"
            articles={otherArticles}
          />
        }
      >
        <ScrollReveal>
          <p className="prose-lead">
            Die Wohnungseingangstür ist die wichtigste Tür der Wohnung – und oft die am meisten
            vernachlässigte. Im Altbau sind viele Wohnungstüren Jahrzehnte alt, ohne dass je
            an Schall-, Einbruch- oder Brandschutz gedacht wurde. Das lässt sich ändern.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2>Die drei Schutzfunktionen</h2>

          <h3>Schallschutz</h3>
          <p>
            Eine wirkungsvolle Schalldämmung setzt an drei Stellen an: dichte Anschläge rund
            um den Türrahmen, eine absenkbare Bodendichtung (die beim Schließen automatisch
            absenkt und den Spalt zum Boden schließt) sowie ein möglichst schweres Türblatt.
            Historische Massivholztüren haben oft schon das nötige Gewicht – es fehlen nur die
            modernen Dichtungen.
          </p>

          <h3>Einbruchschutz</h3>
          <p>
            Eine sichere Wohnungseingangstür braucht mehr als ein gutes Schloss. Mehrfach-
            verriegelung (mindestens 3 Punkte), verstärkte Schließbleche und
            Bandseitensicherungen (gegen Heraushebeln) sind die wichtigsten Maßnahmen.
            Viele dieser Elemente lassen sich an bestehenden Türrahmen nachrüsten.
          </p>

          <h3>Rauch- & Brandschutz</h3>
          <p>
            Wohnungstüren in Mehrfamilienhäusern sollten dichtschließend und rauchhemmend
            sein. Intumeszierende Dichtungsbänder (quellen bei Hitze auf und schließen Fugen)
            sind eine kostengünstige Nachrüstung, die den Rauchübertritt im Brandfall
            erheblich verlangsamt.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>Ertüchtigen statt ersetzen</h2>
          <p>
            Eine historische Wohnungstür aus Massivholz hat oft eine bessere Grundsubstanz
            als moderne Türblätter mit Wabenkernfüllung. Statt die Tür zu ersetzen, lohnt es
            sich häufig, sie zu ertüchtigen: neue Dichtungen einsetzen, Verriegelung
            nachrüsten, Beschläge aktualisieren.
          </p>
          <p>
            Wir beurteilen vor Ort, welche Maßnahmen sinnvoll sind – und geben Ihnen ein
            ehrliches Bild davon, ob die bestehende Tür das Potenzial hat, die gewünschten
            Schutzwerte zu erreichen.
          </p>
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
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--brand-dark)',
                marginBottom: '8px',
              }}
            >
              Tipp für Eigentümer & Verwaltungen
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.65, marginBottom: 0 }}>
              Klären Sie frühzeitig, welche Schallschutz- und Brandschutzanforderungen für
              Ihre Wohnungstüren gelten. Die Anforderungen unterscheiden sich je nach
              Gebäudeklasse und Baujahr.
            </p>
          </div>
        </ScrollReveal>
      </ArticleLayout>
    </>
  )
}
