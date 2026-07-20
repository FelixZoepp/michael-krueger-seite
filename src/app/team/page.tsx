import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ArticleLayout from '@/components/ArticleLayout'
import Sidebar from '@/components/Sidebar'
import ScrollReveal from '@/components/ScrollReveal'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Team & Expertise – Tischlermeister Michael Krüger',
  description:
    'Lernen Sie Tischlermeister Michael Krüger und sein Team kennen. Seit 1997 im Handel mit historischen Bauelementen, Meisterbetrieb seit 2016. 9 Mitarbeiter in Berlin – spezialisiert auf historische Fenster, Türen und Treppen.',
}

const sidebarProjects = [
  { title: 'Außentür Olympiastadion Berlin', href: '/projekte/olympiastadion' },
  { title: 'Fenstertüren im Kennedysaal', href: '/projekte/kennedysaal' },
  { title: 'Altbaufenster Kita Berlin-Spandau', href: '/projekte/kita' },
]

export default function TeamPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Startseite', url: '/' }, { name: 'Team' }]} />
      <PageHero
        title="Tischlermeister Michael Krüger & sein Team"
        subtitle="Ein Meisterbetrieb aus Berlin – spezialisiert auf historische Fenster, Türen und Treppen. Seit 1997 im Geschäft, Meister seit 2016."
        tags={['Meisterbetrieb seit 2016', '9 Mitarbeiter', 'Denkmalpflege']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Team' },
        ]}
        backgroundImage="/images/leistung-historische-fenster.jpg"
      />

      <ArticleLayout
        sidebar={
          <Sidebar
            ctaText="Projekt besprechen"
            ctaHref="/kontakt"
            projects={sidebarProjects}
          />
        }
      >
        <ScrollReveal>
          <p className="prose-lead">
            Wir werden gerufen, wenn andere verzweifeln. Seit 1997 ist Tischlermeister Michael
            Krüger der Ansprechpartner für historische Fenster, Türen und Treppen in Berlin und
            Brandenburg.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <h2>Vom Händler zum Berliner Meister</h2>
          <div className="team-portrait" style={{ float: 'right', margin: '0 0 24px 32px', maxWidth: '280px', borderRadius: '6px', overflow: 'hidden' }}>
            <Image
              src="/images/michael-krueger-portrait.jpg"
              alt="Tischlermeister Michael Krüger in seiner Werkstatt"
              width={280}
              height={320}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <p>
            1997 begann Michael Krüger mit dem Handel historischer Bauelemente – aus der
            Überzeugung heraus, dass Originalsubstanz erhaltenswert ist. Die Faszination für
            das Handwerk ließ ihn nicht los: 2016 legte er die Meisterprüfung ab und führt
            seitdem einen anerkannten Meisterbetrieb in Berlin-Charlottenburg.
          </p>
          <p>
            Mit seinem Team hat er über 1.100 Projekte abgeschlossen – vom einfachen
            Kastenfenster bis zur aufwendigen Rekonstruktion einer Berliner Gründerzeit-Haustür.
            Jedes Projekt trägt seine persönliche Handschrift: sorgfältige Analyse, ehrliche
            Einschätzung, handwerkliche Präzision.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <h2>Unsere Expertise</h2>
          <ul>
            <li>Kastenfenster im Berliner Altbau – Restaurierung und Aufarbeitung</li>
            <li>Denkmalgerechte Sanierung nach Vorgaben der Denkmalschutzbehörde</li>
            <li>Historische Haus- und Wohnungstüren – Restaurierung und originalgetreuer Nachbau</li>
            <li>Treppen und Altbaudetails – Reparatur, Ergänzung, Oberflächenbehandlung</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <h2>Das Team</h2>
          <div style={{ margin: '24px 0 32px', borderRadius: '6px', overflow: 'hidden' }}>
            <Image
              src="/images/team-krueger.jpg"
              alt="Das Team der Tischlerei Krüger – 9 Mitarbeiter vor der Werkstatt in Zossen"
              width={800}
              height={533}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
          <p>
            Rund neun Personen arbeiten fest in unserem Betrieb: 1 Meister, 4 Gesellen,
            3 Auszubildende und 1,5 Bürostellen – keine Leiharbeiter, keine Subunternehmer.
            Jeder kennt unsere Standards, jeder hat Erfahrung mit historischer Bausubstanz.
            Das ermöglicht eine gleichbleibende Qualität von der ersten Aufmaß bis zur finalen
            Abnahme.
          </p>
          <p>
            Die feste Teamstruktur bedeutet auch: Sie haben immer denselben Ansprechpartner,
            und die handwerkliche Verantwortung liegt bei uns – nicht irgendwo zwischen
            Subunternehmen und Koordinatoren.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h2>Werkstatt in Zossen</h2>
          <div className="team-werkstatt-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', margin: '24px 0' }}>
            <div style={{ borderRadius: '6px', overflow: 'hidden' }}>
              <Image
                src="/images/mm001.jpg"
                alt="Michael Krüger beim Hobeln in der Werkstatt"
                width={400}
                height={267}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ borderRadius: '6px', overflow: 'hidden' }}>
              <Image
                src="/images/mm005.jpg"
                alt="Michael Krüger bei der Arbeit an der Werkbank"
                width={400}
                height={267}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
          <p>
            Unsere 300 m² große Werkstatt in Zossen ist das Herzstück des
            Betriebs. Hier entstehen Fenster, Türen und Sonderanfertigungen – ausschließlich
            aus Brandenburger Kieferbohlen, mit traditionellen Handwerkstechniken und moderner
            Produktionstechnik. Die Lage südlich von Berlin ermöglicht kurze Wege zu unseren
            Baustellen in der ganzen Stadt und im Umland.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <h2>Wie wir arbeiten</h2>
          <p>
            Jedes Projekt beginnt mit einer kostenlosen Ersteinschätzung vor Ort. Wir
            beurteilen den Zustand des Bestands, erklären die Optionen – und geben ein
            ehrliches Bild davon, was sich lohnt und was nicht.
          </p>
          <p>
            Unsere Angebote sind Festpreise. Keine bösen Überraschungen, keine nachträglichen
            Aufschläge. Nach Abschluss der Arbeiten erhalten Sie von uns eine Wartungsempfehlung,
            damit Ihr Fenster oder Ihre Tür weitere Jahrzehnte hält.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={280}>
          <blockquote>
            „Wir glauben, dass historische Bauelemente erhaltenswert sind – und dass sich mit
            dem richtigen Handwerk fast alles retten lässt."
          </blockquote>
        </ScrollReveal>
      </ArticleLayout>

      {/* CTA band */}
      <section
        style={{
          backgroundColor: 'var(--header)',
          padding: '64px 0',
        }}
      >
        <div className="wrap" style={{ textAlign: 'center' }}>
          <ScrollReveal>
            <h2
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '16px',
              }}
            >
              Ihr Projekt in guten Händen.
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '1.05rem',
                marginBottom: '32px',
                maxWidth: '520px',
                margin: '0 auto 32px',
              }}
            >
              Sprechen Sie mit uns – kostenlos, unverbindlich und auf Augenhöhe.
            </p>
            <Link href="/kontakt" className="btn btn--primary">
              Jetzt Kontakt aufnehmen
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
