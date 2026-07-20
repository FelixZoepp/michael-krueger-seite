import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Historische Treppen & Altbaudetails erhalten | Tischlerei Krüger',
  description:
    'Typische Schäden an historischen Holztreppen, fachgerechte Reparatur und warum sich der Erhalt lohnt – aus der Werkstatt eines Berliner Tischlermeisters.',
}

const otherArticles = [
  { title: 'Kastenfenster restaurieren statt austauschen', href: '/blog/kastenfenster' },
  { title: 'Altbaufenster energetisch sanieren', href: '/blog/energetische-sanierung' },
  { title: 'Wohnungseingangstüren: Schallschutz & Sicherheit', href: '/blog/wohnungstueren-schallschutz' },
  { title: 'Historische Haustüren restaurieren oder nachbauen', href: '/blog/historische-haustueren' },
  { title: 'Fenster & Türen im Denkmalschutz', href: '/blog/denkmalschutz' },
]

export default function TreppenAltbaudetailsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: 'Historische Treppen & Altbaudetails fachgerecht erhalten',
          description: 'Typische Schäden an historischen Holztreppen, fachgerechte Reparatur und warum sich der Erhalt lohnt.',
          image: 'https://michael-krueger-seite.vercel.app/images/leistung-treppen-treppenhaus.jpg',
          author: { '@type': 'Person', name: 'Michael Krüger', jobTitle: 'Tischlermeister', url: 'https://michael-krueger-seite.vercel.app/team' },
          publisher: { '@type': 'Organization', name: 'Tischlerei Michael Krüger', url: 'https://michael-krueger-seite.vercel.app' },
          datePublished: '2024-06-25',
          dateModified: '2025-01-15',
          mainEntityOfPage: 'https://michael-krueger-seite.vercel.app/blog/treppen-altbaudetails',
          keywords: ['historische Treppen', 'Altbaudetails', 'Holztreppe', 'Restaurierung'],
        }) }}
      />
      <PageHero
        title="Historische Treppen & Altbaudetails fachgerecht erhalten"
        tags={['Treppen', 'Fachartikel']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Ratgeber', href: '/blog' },
          { label: 'Treppen & Altbaudetails' },
        ]}
        backgroundImage="/images/leistung-treppen-treppenhaus.jpg"
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
            Eine historische Holztreppe ist ein Schmuckstück – und ein beanspruchtes Bauteil.
            Täglich mehrfach begangen, regelmäßig gereinigt, gelegentlich nass geworden. Mit
            dem richtigen Handwerk lässt sie sich erhalten, stabilisieren und für weitere
            Jahrzehnte fit machen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2>Typische Schäden und ihre Ursachen</h2>
          <ul>
            <li>
              <strong>Knarren und Quietschen:</strong> Die häufigste Beschwerde. Ursache ist
              meist nicht die Treppe selbst, sondern die Verbindungen zwischen Stufe und Wange –
              die sich durch Temperaturwechsel und Belastung gelockert haben.
            </li>
            <li>
              <strong>Abgetretene Trittstufen:</strong> In sehr alten Treppen können Stufen
              mittig deutlich eingelaufen sein. Bis zu einem gewissen Grad ist das reparierbar –
              durch Aufarbeitung der Oberfläche oder Ergänzung des Materials.
            </li>
            <li>
              <strong>Lockere Geländer und Handläufe:</strong> Durch gelockerte Verbindungen
              oder gerissenes Holz. Oft reicht eine Nachverdübelung oder das Einkleben
              gelockerter Sprossen.
            </li>
            <li>
              <strong>Holzschädlinge und Feuchteschäden:</strong> Im Sockelbereich oder an
              Anschlüssen zu Mauern. Hier ist eine Beurteilung vor Ort unerlässlich, um das
              Ausmaß des Schadens zu verstehen.
            </li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2>Reparieren statt austauschen</h2>
          <p>
            Historische Treppenstufen bestehen fast immer aus massivem Holz – in einer Stärke,
            die heute kaum noch wirtschaftlich produziert wird. Eine neue Fertigtreppenanlage
            bietet das in aller Regel nicht. Wer eine historische Treppe erhält, bewahrt damit
            ein Bauteil, das durch nichts Gleichwertiges ersetzt werden kann.
          </p>
          <p>
            Bei Ergänzungen – etwa bei einer stark beschädigten Stufe – verwenden wir passendes
            Altholz oder trocken gelagertes Massivholz mit vergleichbarer Dichte und Maserung.
            Verbindungen werden traditionell mit Leim, Dübeln und Holzschrauben hergestellt,
            nicht mit modernen Metallverbindern, die im Altbau oft nicht passen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>Auch die kleinen Details zählen</h2>
          <p>
            Im Altbau sind es oft die Details, die den Unterschied machen: eine profilierte
            Fensterbank, eine Sockelleiste mit klassischem Profil, eine Stuckunterleiste. Diese
            Elemente werden bei Sanierungen häufig durch schlichte Standardprofile ersetzt –
            mit dem Ergebnis, dass der Raum seinen Charakter verliert.
          </p>
          <p>
            Wir fertigen Ergänzungen nach historischem Vorbild – von der Fensterbank über
            Zierleisten bis hin zu Sockelabschlüssen. Was nicht mehr kaufbar ist, wird in
            unserer Werkstatt neu gefräst.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <blockquote>
            „Im Detail entscheidet sich, ob ein Altbau saniert wirkt – oder erhalten."
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <p>
            Sprechen Sie uns an, wenn Sie eine historische Treppe oder andere Altbaudetails
            erhalten oder restaurieren möchten. Wir beurteilen den Zustand vor Ort –
            kostenlos und ohne Verpflichtung.
          </p>
        </ScrollReveal>
      </ArticleLayout>
    </>
  )
}
