import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Altbaufenster energetisch sanieren | Tischlerei Krüger',
  description:
    'Bessere Dämmwerte ohne Substanzverlust – die wirksamsten Maßnahmen für historische Fenster im Berliner Altbau.',
}

const otherArticles = [
  { title: 'Kastenfenster restaurieren statt austauschen', href: '/blog/kastenfenster' },
  { title: 'Wohnungseingangstüren: Schallschutz & Sicherheit', href: '/blog/wohnungstueren-schallschutz' },
  { title: 'Historische Haustüren restaurieren oder nachbauen', href: '/blog/historische-haustueren' },
  { title: 'Fenster & Türen im Denkmalschutz', href: '/blog/denkmalschutz' },
  { title: 'Historische Treppen & Altbaudetails erhalten', href: '/blog/treppen-altbaudetails' },
]

export default function EnergetischeSanierungPage() {
  return (
    <>
      <PageHero
        title="Altbaufenster energetisch sanieren – bessere Dämmwerte ohne Denkmalverlust"
        tags={['Energie', 'Fachartikel']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Ratgeber', href: '/blog' },
          { label: 'Energetische Sanierung' },
        ]}
        backgroundImage="/images/leistung-energetische-fenstersanierung.jpg"
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
            «Die alten Fenster müssen raus» – dieser Rat kommt schnell, stimmt aber seltener
            als man denkt. Historische Fenster lassen sich oft deutlich besser dämmen, als ihr
            Ruf vermuten lässt.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2>Wo Altbaufenster wirklich Energie verlieren</h2>
          <p>
            Der größte Energieverlust an alten Fenstern entsteht nicht durch das Glas, sondern
            durch undichte Anschlüsse: poröse Dichtungen, verzogene Flügel, verschlissene
            Beschläge. Diese Schwachstellen lassen sich mit überschaubarem Aufwand beheben –
            und der Effekt auf die Dämmwirkung ist erheblich.
          </p>
          <p>
            Erst in einem zweiten Schritt lohnt es sich, über die Verglasung nachzudenken.
            Viele historische Fenster haben einfache Einfachverglasung, die sich durch
            Vorsatzscheiben oder Isolierverglasung ertüchtigen lässt.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2>Die wirksamsten Maßnahmen</h2>
          <ul>
            <li>Dichtungen erneuern (Gummi- oder Bürstendichtung im Falz)</li>
            <li>Verglasung ertüchtigen (Vorsatzscheibe, Wärmeschutzfolie oder Isolierglas)</li>
            <li>Beschläge einstellen oder ersetzen für dichten Anpressdruck</li>
            <li>Kastenfenster-Effekt nutzen: innere Ebene isolieren, äußere historisch erhalten</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={160}>
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
              Der Kastenfenster-Vorteil
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.65, marginBottom: 0 }}>
              Die innere Ebene ertüchtigen, die äußere bleibt historisch – so verbessern Sie
              die Dämmung, ohne das Erscheinungsbild zu verändern.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2>Bauphysik nicht vergessen</h2>
          <p>
            Wer Fenster abdichtet, muss auch an Lüftung denken. Ältere Gebäude „atmeten" durch
            undichte Fenster – wird dieser Luftaustausch plötzlich unterbunden, kann es zu
            Tauwasserbildung und Schimmel kommen.
          </p>
          <p>
            Wir empfehlen daher bei jeder energetischen Ertüchtigung eine Beurteilung des
            Lüftungskonzepts: Sind Lüftungsöffnungen vorhanden? Sind Nutzerinnen und Nutzer
            bereit, regelmäßig zu lüften? Nur wenn diese Fragen geklärt sind, wird die
            Sanierung dauerhaft erfolgreich.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <h2>Fazit</h2>
          <p>
            Historische Fenster müssen nicht zwingend ausgetauscht werden, um gut zu dämmen.
            Mit den richtigen Maßnahmen – in der richtigen Reihenfolge – lässt sich die
            Energiebilanz erheblich verbessern, ohne wertvolle Bausubstanz zu opfern.
          </p>
          <p>
            Wir beurteilen Ihre Fenster kostenlos vor Ort und zeigen Ihnen, welche Maßnahmen
            für Ihre Situation sinnvoll sind.
          </p>
        </ScrollReveal>
      </ArticleLayout>
    </>
  )
}
