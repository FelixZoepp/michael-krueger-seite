import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Fenster & Türen im Denkmalschutz | Tischlerei Krüger',
  description:
    'Was Eigentümer denkmalgeschützter Gebäude über Fenster und Türen wissen müssen – von der Genehmigungspflicht bis zur steuerlichen Förderung.',
}

const otherArticles = [
  { title: 'Kastenfenster restaurieren statt austauschen', href: '/blog/kastenfenster' },
  { title: 'Altbaufenster energetisch sanieren', href: '/blog/energetische-sanierung' },
  { title: 'Wohnungseingangstüren: Schallschutz & Sicherheit', href: '/blog/wohnungstueren-schallschutz' },
  { title: 'Historische Haustüren restaurieren oder nachbauen', href: '/blog/historische-haustueren' },
  { title: 'Historische Treppen & Altbaudetails erhalten', href: '/blog/treppen-altbaudetails' },
]

export default function DenkmalschutzPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Fenster & Türen im Denkmalschutz – was Eigentümer wissen müssen',
          description: 'Was Eigentümer denkmalgeschützter Gebäude über Fenster und Türen wissen müssen.',
          image: 'https://michael-krueger-seite.vercel.app/images/leistung-reparatur-restaurierung.jpg',
          author: { '@type': 'Person', name: 'Michael Krüger', jobTitle: 'Tischlermeister', url: 'https://michael-krueger-seite.vercel.app/team' },
          publisher: { '@type': 'Organization', name: 'Tischlerei Michael Krüger', url: 'https://michael-krueger-seite.vercel.app' },
          datePublished: '2024-06-25',
          dateModified: '2025-01-15',
          mainEntityOfPage: 'https://michael-krueger-seite.vercel.app/blog/denkmalschutz',
          keywords: ['Denkmalschutz', 'historische Fenster', 'Genehmigungspflicht', 'Denkmalschutzbehörde'],
        }) }}
      />
      <PageHero
        title="Fenster & Türen im Denkmalschutz – was Eigentümer wissen müssen"
        tags={['Denkmalschutz', 'Fachartikel']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Ratgeber', href: '/blog' },
          { label: 'Denkmalschutz' },
        ]}
        backgroundImage="/images/leistung-reparatur-restaurierung.jpg"
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
            Wer ein denkmalgeschütztes Haus besitzt, darf an Fenstern und Türen nicht einfach
            frei verändern. Doch die Regeln sind klarer, als viele denken – und die
            Möglichkeiten größer, als mancher Eigentümer vermutet.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2>Was unter Denkmalschutz fällt</h2>
          <p>
            Bei denkmalgeschützten Gebäuden sind alle Veränderungen an der äußeren Erscheinung
            genehmigungspflichtig – das gilt explizit für Fenster und Türen. Die Behörde
            bewertet dabei Form und Proportion, Profilteilung, Material und Oberflächenfarbe.
          </p>
          <p>
            Auch Instandsetzungsarbeiten können genehmigungspflichtig sein, wenn sie die
            Substanz verändern. Im Zweifelsfall gilt: lieber einmal mehr nachfragen als hinterher
            rückbauen müssen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2>Was meist erlaubt ist – und was nicht</h2>
          <ul>
            <li>Erhalt und Restaurierung bestehender Fenster und Türen ist immer erlaubt</li>
            <li>Rekonstruktion nach historischem Vorbild ist in der Regel möglich</li>
            <li>Kunststofffenster sind in denkmalgeschützten Gebäuden in der Regel verboten</li>
            <li>Energetische Ertüchtigung ist meist möglich, wenn das Erscheinungsbild erhalten bleibt</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>So läuft die Abstimmung ab</h2>
          <p>
            Der erste Schritt ist immer ein Gespräch mit der unteren Denkmalschutzbehörde des
            jeweiligen Bezirks. Dort erfahren Sie, was für Ihr Objekt gilt und welche
            Unterlagen für einen Antrag benötigt werden.
          </p>
          <p>
            Wir unterstützen unsere Kunden bei dieser Abstimmung: Wir erstellen
            Bestandsdokumentationen, Profilaufnahmen und Werkpläne, die für den Antrag
            benötigt werden. Unsere Erfahrung mit Berliner Denkmalschutzbehörden hilft,
            Genehmigungen zügig zu bekommen.
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
              Förderung & Steuer
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--ink)', lineHeight: 1.65, marginBottom: 0 }}>
              Denkmalgeschützte Gebäude profitieren von der Denkmal-AfA – steuerliche
              Begünstigungen, die einen Großteil der Kosten auffangen können. Eigentümer
              können bis zu 85 % der Sanierungskosten über 12 Jahre abschreiben.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <h2>Unser Rat</h2>
          <p>
            Beginnen Sie früh mit der Abstimmung – nicht erst, wenn der Handwerker schon
            bestellt ist. Dokumentieren Sie den Bestand sorgfältig, bevor etwas verändert wird.
            Und wählen Sie einen Handwerksbetrieb, der Erfahrung mit denkmalgeschützten Gebäuden
            hat und die Anforderungen der Behörden kennt.
          </p>
          <p>
            Wir kennen die Berliner Denkmalschutzbehörden aus über 1.100 Projekten. Sprechen
            Sie uns an – wir beraten Sie gerne, bevor es losgeht.
          </p>
        </ScrollReveal>
      </ArticleLayout>
    </>
  )
}
