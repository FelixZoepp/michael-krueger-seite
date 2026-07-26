import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'
import ScrollReveal from '@/components/ScrollReveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Treppen & Altbaudetails aufarbeiten | Tischlerei Krüger Berlin',
  description:
    'Treppenstufen, Geländer, Zierleisten und Fensterbänke im Altbau fachgerecht aufarbeiten. Substanzerhalt und handwerkliche Qualität – Tischlerei Krüger Berlin.',
}

const problems = [
  'Knarrende Stufen durch gelöste Verbindungen und ausgetrocknetes Holz',
  'Lose oder wackelige Geländer ohne sicheren Halt',
  'Abgetretene Oberflächen mit sichtbaren Gebrauchsspuren',
  'Fehlende oder beschädigte Zierleisten an Wänden und Decken',
  'Beschädigte Fensterbänke mit Rissen, Verfärbungen oder Abplatzungen',
]

export default function TreppenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Treppen & Altbaudetails aufarbeiten',
          description: 'Treppenstufen, Geländer, Zierleisten und Fensterbänke im Altbau fachgerecht aufarbeiten. Substanzerhalt und handwerkliche Qualität – Tischlerei Krüger Berlin.',
          provider: {
            '@type': 'LocalBusiness',
            name: 'Tischlerei Michael Krüger',
            url: 'https://michael-krueger-seite.vercel.app',
            telephone: '+493085607830',
          },
          areaServed: [
            { '@type': 'City', name: 'Berlin' },
            { '@type': 'State', name: 'Brandenburg' },
          ],
          url: 'https://michael-krueger-seite.vercel.app/leistungen/treppen',
        }) }}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Startseite', url: '/' },
          { name: 'Leistungen' },
          { name: 'Treppen & Altbaudetails' },
        ]}
      />

      <PageHero
        title="Treppen & Altbaudetails"
        subtitle="Treppenstufen, Geländer, Zierleisten und Fensterbänke – handwerklich aufgearbeitet, nicht ersetzt."
        tags={['Treppen', 'Zierleisten', 'Altbaudetails']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Leistungen' },
          { label: 'Treppen & Altbaudetails' },
        ]}
        backgroundImage="/images/leistung-treppen-treppenhaus.jpg"
      />

      {/* Video Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <div style={{
              borderRadius: 'var(--r)',
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(42,39,36,0.15), 0 2px 8px rgba(42,39,36,0.08)',
            }}>
              <video
                controls
                preload="metadata"
                playsInline
                poster="/images/leistung-treppen-treppenhaus.jpg"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  backgroundColor: '#2a2724',
                }}
              >
                <source src="/videos/leistung-treppen.mp4" type="video/mp4" />
                Ihr Browser unterstützt das Video-Element nicht.
              </video>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Häufige Probleme */}
      <section className="section" style={{ backgroundColor: 'var(--bg-alt)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <span className="eyebrow">Häufige Probleme</span>
            <h2 style={{ marginTop: '16px', marginBottom: '40px' }}>
              Das kennen viele Eigentümer
            </h2>
          </ScrollReveal>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {problems.map((problem, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div style={{
                  backgroundColor: 'var(--paper)',
                  borderRadius: 'var(--r-sm)',
                  padding: '24px',
                  borderLeft: '3px solid var(--brand)',
                  boxShadow: '1px 2px 8px rgba(42,39,36,0.06)',
                }}>
                  <p style={{ margin: 0, color: 'var(--ink)', fontWeight: 500 }}>
                    {problem}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Wie Krüger hilft */}
      <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: '800px' }}>
          <ScrollReveal>
            <span className="eyebrow">Unsere Lösung</span>
            <h2 style={{ marginTop: '16px', marginBottom: '24px' }}>
              So gehen wir vor
            </h2>
            <div style={{ lineHeight: 1.8, color: 'var(--ink-soft)' }}>
              <p>
                Treppenhäuser sind das Rückgrat jedes Altbaus. Gedrechselte Geländerstäbe,
                profilierte Handläufe, kunstvoll gefräste Wangen und massiv aufgedoppelte
                Stufen zeugen von einer Baukultur, die sich in Neubauten kaum noch findet.
                Doch Jahrzehnte der Nutzung hinterlassen Spuren: Stufen knarren, Geländer
                wackeln, Oberflächen sind abgetreten. Anstatt diese Elemente herauszureißen
                und durch standardisierte Baumarktware zu ersetzen, arbeiten wir sie
                fachgerecht auf und erhalten so ein Stück bauliches Erbe.
              </p>
              <p>
                Bei knarrenden Stufen liegt die Ursache fast immer in gelösten Verbindungen
                zwischen Trittstufe, Setzstufe und Treppenwange. Wir verschrauben und
                verleimen diese Verbindungen neu, unterfüttern bei Bedarf mit Keilen und
                stellen so die Stabilität wieder her – dauerhaft und ohne sichtbare
                Eingriffe an der Oberseite. Abgetretene Oberflächen werden abgeschliffen
                und neu versiegelt oder geölt, je nach Holzart und gewünschtem
                Erscheinungsbild. Bei stärker geschädigten Stufen setzen wir neue
                Trittflächen aus gleichartigem Holz auf die bestehende Konstruktion.
              </p>
              <p>
                Lose Geländer werden an der Basis neu verankert. Gebrochene oder
                fehlende Geländerstäbe fertigen wir auf unserer Drechselbank nach –
                exakt in der Profilierung des Bestands. Handläufe werden nachgeschliffen
                und bei Bedarf verlängert oder ergänzt, sodass sie den heutigen
                Sicherheitsanforderungen entsprechen, ohne den historischen Charakter
                zu verändern.
              </p>
              <p>
                Neben Treppen kümmern wir uns um sämtliche Holzdetails im Altbau:
                Sockelleisten, Deckenstuck-Anschlüsse, Fensterbänke, Türumrahmungen
                und Zierleisten. Fehlende Abschnitte werden nach Vorlage der vorhandenen
                Reste nachgefertigt und nahtlos eingepasst. Beschädigte Fensterbänke aus
                Holz oder Naturstein schleifen wir auf, ergänzen Fehlstellen und
                versiegeln die Oberfläche neu. So entsteht ein stimmiges Gesamtbild, das
                den Wert der Immobilie sichert und den Charakter des Hauses bewahrt.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--header)', padding: '80px 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--ff-display, Georgia, serif)',
            fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '16px',
          }}>
            Kostenlose Ersteinschätzung für Ihr Projekt
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.65)',
            fontSize: '1.05rem',
            maxWidth: '560px',
            margin: '0 auto 36px',
            lineHeight: 1.7,
          }}>
            Schildern Sie uns Ihr Anliegen – wir geben Ihnen eine erste Einschätzung, kostenfrei und unverbindlich.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/kontakt" className="btn btn--primary" style={{ fontSize: '1.05rem', padding: '14px 32px' }}>
              Ersteinschätzung anfragen
            </Link>
            <a
              href="https://wa.me/491636983248?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ersteinsch%C3%A4tzung."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              style={{
                fontSize: '1.05rem',
                padding: '14px 32px',
                color: '#ffffff',
                borderColor: 'rgba(255,255,255,0.3)',
              }}
            >
              WhatsApp schreiben
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
