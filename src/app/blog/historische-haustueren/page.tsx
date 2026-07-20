import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Historische Haustüren restaurieren oder nachbauen | Tischlerei Krüger',
  description:
    'Restaurieren oder originalgetreu nachbauen? Entscheidungskriterien und Möglichkeiten für historische Haustüren im Berliner Altbau.',
}

const otherArticles = [
  { title: 'Kastenfenster restaurieren statt austauschen', href: '/blog/kastenfenster' },
  { title: 'Altbaufenster energetisch sanieren', href: '/blog/energetische-sanierung' },
  { title: 'Wohnungseingangstüren: Schallschutz & Sicherheit', href: '/blog/wohnungstueren-schallschutz' },
  { title: 'Fenster & Türen im Denkmalschutz', href: '/blog/denkmalschutz' },
  { title: 'Historische Treppen & Altbaudetails erhalten', href: '/blog/treppen-altbaudetails' },
]

export default function HistorischeHaustuerenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Historische Haustüren: restaurieren oder originalgetreu nachbauen?',
          description: 'Restaurieren oder originalgetreu nachbauen? Entscheidungskriterien für historische Haustüren im Berliner Altbau.',
          image: 'https://michael-krueger-seite.vercel.app/images/leistung-historische-haustuer.jpg',
          author: { '@type': 'Person', name: 'Michael Krüger', jobTitle: 'Tischlermeister', url: 'https://michael-krueger-seite.vercel.app/team' },
          publisher: { '@type': 'Organization', name: 'Tischlerei Michael Krüger', url: 'https://michael-krueger-seite.vercel.app' },
          datePublished: '2024-06-25',
          dateModified: '2025-01-15',
          mainEntityOfPage: 'https://michael-krueger-seite.vercel.app/blog/historische-haustueren',
          keywords: ['historische Haustür', 'Restaurierung', 'Nachbau', 'Berlin Altbau'],
        }) }}
      />
      <PageHero
        title="Historische Haustüren: restaurieren oder originalgetreu nachbauen?"
        tags={['Türen', 'Fachartikel']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Ratgeber', href: '/blog' },
          { label: 'Historische Haustüren' },
        ]}
        backgroundImage="/images/leistung-historische-haustuer.jpg"
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
            Eine historische Haustür ist mehr als ein Eingang – sie ist Visitenkarte,
            Denkmalschutz-Element und Sicherheitsbarriere. Wer sie ersetzen muss oder will,
            steht vor der Frage: restaurieren oder originalgetreu nachbauen?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2>Wann sich die Restaurierung lohnt</h2>
          <p>
            Wenn die Grundsubstanz der Tür gesund ist, ist Restaurierung fast immer die bessere
            Wahl. Typische Probleme, die sich reparieren lassen: oberflächliche Holzschäden und
            Risse, Verzug durch Feuchtigkeit (oft durch Neueinstellung der Beschläge zu
            korrigieren), verschlissene oder fehlende Beschläge sowie eine abgenutzte
            Oberfläche.
          </p>
          <p>
            Bei einer Restaurierung bleibt das Original erhalten – mitsamt seiner handwerklichen
            Qualität und historischen Bedeutung. Das ist nicht nur denkmalpflegerisch wertvoller,
            sondern oft auch günstiger.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2>Wann der Nachbau sinnvoll ist</h2>
          <p>
            Wenn die Tür durch Fäulnis großflächig geschädigt ist, wenn frühere Umbauten die
            Ursprungsform unwiederbringlich verändert haben oder wenn keine funktionale
            Grundlage mehr vorhanden ist, empfehlen wir einen Nachbau.
          </p>
          <p>
            Bei einem Nachbau nehmen wir zunächst eine detaillierte Profilaufnahme vor – vom
            historischen Bestand, von alten Fotos oder von vergleichbaren Türen im Haus oder
            der Straße. Dann fertigen wir die Tür maßgenau in der Werkstatt, mit denselben
            Holzarten und Profilen wie das Original.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>Die Entscheidungskriterien</h2>
          <ul>
            <li>Substanzzustand: Wie viel gesundes Holz ist noch vorhanden?</li>
            <li>Denkmalschutzauflagen: Was schreibt die Behörde vor oder empfiehlt?</li>
            <li>Funktionale Anforderungen: Schallschutz, Einbruchschutz, Wärmedämmung</li>
            <li>Wirtschaftlichkeit: Ab welchem Aufwand wird ein Nachbau günstiger?</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <blockquote>
            „Ob restauriert oder nachgebaut: Das Ziel ist immer dieselbe Tür – eine, die zum
            Haus passt, sicher ist und weitere Jahrzehnte hält."
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <h2>Sicherheit und Wärme integrieren</h2>
          <p>
            Sowohl bei Restaurierung als auch beim Nachbau lassen sich moderne
            Sicherheits- und Dämmelemente integrieren: Mehrfachverriegelung, verstärkte
            Schließbleche, umlaufende Dichtungen und – bei Nachbauten – gedämmte Füllungen
            hinter historischen Profilen.
          </p>
          <p>
            Der Unterschied zu einer Standardtür vom Hersteller: Bei uns wird das Sicherheits-
            und Dämmniveau individuell auf das Gebäude und die Anforderungen abgestimmt –
            nicht auf eine Serienproduktion.
          </p>
        </ScrollReveal>
      </ArticleLayout>
    </>
  )
}
