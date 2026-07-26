import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Impressum | Tischlerei Krüger',
  description: 'Impressum der Tischlerei Michael Krüger – Meisterbetrieb für historische Fenster, Türen & Treppen in Berlin.',
}

export default function ImpressumPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Startseite', url: '/' }, { name: 'Impressum' }]} />
      <PageHero
        title="Impressum"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Impressum' },
        ]}
        backgroundImage="/images/werkstatt-zossen.jpg"
      />
      <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div style={{ lineHeight: 1.8, color: 'var(--ink-soft)' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              Angaben gemäß § 5 TMG
            </h2>

            <p style={{ marginBottom: '24px' }}>
              Michael Krüger Tischlermeister
              <br />
              Historische-Bauelemente.de
              <br />
              Witzlebenstraße 21A
              <br />
              14057 Berlin
              <br />
              Deutschland
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--ink)' }}>
              Kontakt
            </h3>
            <p style={{ marginBottom: '24px' }}>
              Telefon: 030 85 60 78 30
              <br />
              E-Mail:{' '}
              <a
                href="mailto:info@historische-bauelemente.de"
                style={{ color: 'var(--brand-dark)', textDecoration: 'none' }}
              >
                info@historische-bauelemente.de
              </a>
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--ink)' }}>
              Handwerksbetrieb
            </h3>
            <p style={{ marginBottom: '24px' }}>
              Eingetragener Handwerksbetrieb der
              <br />
              Handwerkskammer Berlin
              <br />
              Blücherstr. 68, 10961 Berlin
              <br />
              Betriebsnummer: 92903
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--ink)' }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p style={{ marginBottom: '24px' }}>
              Michael Krüger
              <br />
              Witzlebenstraße 21A
              <br />
              14057 Berlin
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--ink)' }}>
              Streitbeilegung
            </h3>
            <p style={{ marginBottom: '24px' }}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--brand-dark)', textDecoration: 'none' }}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .
              <br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--ink)' }}>
              Urheberrecht
            </h3>
            <p style={{ marginBottom: '24px' }}>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <h3 style={{ fontSize: '1.15rem', marginBottom: '12px', color: 'var(--ink)' }}>
              Haftung für Links
            </h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber verantwortlich.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
