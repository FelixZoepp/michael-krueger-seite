import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Kastenfenster restaurieren statt austauschen | Tischlerei Krüger',
  description:
    'Warum sich die Restaurierung von Kastenfenstern im Berliner Altbau fast immer lohnt – und wie eine fachgerechte Aufarbeitung abläuft.',
}

const otherArticles = [
  { title: 'Altbaufenster energetisch sanieren', href: '/blog/energetische-sanierung' },
  { title: 'Wohnungseingangstüren: Schallschutz & Sicherheit', href: '/blog/wohnungstueren-schallschutz' },
  { title: 'Historische Haustüren restaurieren oder nachbauen', href: '/blog/historische-haustueren' },
  { title: 'Fenster & Türen im Denkmalschutz', href: '/blog/denkmalschutz' },
  { title: 'Historische Treppen & Altbaudetails erhalten', href: '/blog/treppen-altbaudetails' },
]

export default function KastenfensterPage() {
  return (
    <>
      <PageHero
        title="Kastenfenster restaurieren statt austauschen – was wirklich dahintersteckt"
        tags={['Fenster', 'Fachartikel']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Ratgeber', href: '/blog' },
          { label: 'Kastenfenster' },
        ]}
        backgroundImage="/images/leistung-historische-fenster.jpg"
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
            Kaum ein Bauteil prägt den Berliner Altbau so sehr wie das Kastenfenster. Doch wenn
            es klemmt oder zieht, heißt es schnell: raus damit. Dabei lohnt sich die
            Restaurierung fast immer.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2>Was ein Kastenfenster besonders macht</h2>
          <p>
            Das Kastenfenster besteht aus zwei übereinanderliegenden Fensterebenen – einer
            äußeren und einer inneren – mit einem Luftpolster dazwischen. Dieses Prinzip ist
            physikalisch clever: Die ruhende Luftschicht wirkt als natürlicher Wärmedämmer und
            erreicht Dämmwerte, die mit einfacher Isolierverglasung vergleichbar sind.
          </p>
          <p>
            Hinzu kommt: Das Holz in Gründerzeitfenstern ist langsam gewachsen, dicht und
            verrottungsresistenter als heutiges Schnittholz. Wer ein solches Fenster wegwirft,
            verschwendet eine Ressource, die heute gar nicht mehr produziert werden kann.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2>Warum ein Austausch selten nötig ist</h2>
          <p>
            Die meisten Kastenfenster, die als „kaputt" gelten, sind es nicht. Sie klemmen,
            weil die Beschläge verschlissen sind oder das Holz sich durch Feuchtigkeit verzogen
            hat. Sie ziehen, weil die Dichtungen porös geworden sind. Beides ist reparierbar –
            und zwar oft schneller und günstiger als man denkt.
          </p>
          <p>
            Erst wenn das Holz großflächig verrottet oder strukturell beschädigt ist, wird ein
            Austausch wirklich notwendig. In der Praxis trifft das auf weniger als 20 % der
            Fenster zu, die uns zur Beurteilung vorgelegt werden.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>So läuft eine fachgerechte Restaurierung ab</h2>
          <ul>
            <li>Bestandsaufnahme und Zustandsbewertung vor Ort</li>
            <li>Reinigen und Entlacken der Profile</li>
            <li>Holzreparaturen und Ergänzungen mit Epoxidharz oder neuem Holz</li>
            <li>Beschläge prüfen, einstellen oder erneuern</li>
            <li>Neue Dichtungen einsetzen (Gummi oder Bürstendichtung)</li>
            <li>Oberfläche schleifen und mit atmungsaktiver Farbe streichen</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <blockquote>
            „Ein gut restauriertes Kastenfenster hält oft länger als ein neues Fenster – weil
            das alte Holz schon bewiesen hat, dass es Jahrzehnte überdauert."
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <h2>Kosten und Förderung</h2>
          <p>
            Eine fachgerechte Kastenfenster-Restaurierung kostet in der Regel 40 bis 60 Prozent
            weniger als der Einbau neuer Fenster. Bei denkmalgeschützten Gebäuden kommt die
            Denkmal-AfA hinzu: Eigentümer können bis zu 85 % der Sanierungskosten über 12 Jahre
            steuerlich abschreiben.
          </p>
          <p>
            Auch Förderprogramme der KfW oder der Investitionsbank Berlin können für Altbaufenster
            in Anspruch genommen werden. Wir beraten Sie gerne, welche Förderung für Ihr Projekt
            in Frage kommt.
          </p>
        </ScrollReveal>
      </ArticleLayout>
    </>
  )
}
