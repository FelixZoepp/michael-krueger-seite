import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | Tischlerei Krüger',
  description: 'Datenschutzerklärung der Tischlerei Michael Krüger – Informationen zum Umgang mit personenbezogenen Daten.',
}

export default function DatenschutzPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Startseite', url: '/' }, { name: 'Datenschutz' }]} />
      <PageHero
        title="Datenschutzerklärung"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Datenschutz' },
        ]}
        backgroundImage="/images/werkstatt-zossen.jpg"
      />
      <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="wrap" style={{ maxWidth: '720px' }}>
          <div style={{ lineHeight: 1.8, color: 'var(--ink-soft)' }}>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              1. Verantwortlicher
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Michael Krüger Tischlermeister
              <br />
              Witzlebenstraße 21A
              <br />
              14057 Berlin
              <br />
              Telefon: 030 85 60 78 30
              <br />
              E-Mail:{' '}
              <a href="mailto:info@historische-bauelemente.de" style={{ color: 'var(--brand-dark)', textDecoration: 'none' }}>
                info@historische-bauelemente.de
              </a>
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              2. Allgemeines zur Datenverarbeitung
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit
              dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
              Leistungen erforderlich ist. Die Verarbeitung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b, f DSGVO (Vertragserfüllung, berechtigtes Interesse) bzw. bei
              Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              3. Hosting
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Diese Website wird bei Vercel Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA)
              gehostet. Beim Besuch der Website werden automatisch Informationen an den Server
              übermittelt (z.&nbsp;B. IP-Adresse, Browsertyp, Zeitpunkt des Zugriffs). Weitere
              Informationen finden Sie in der Datenschutzerklärung von Vercel:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--brand-dark)', textDecoration: 'none' }}
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              4. Erfassung von Daten beim Besuch der Website
            </h2>
            <p style={{ marginBottom: '12px' }}>
              Beim Aufrufen unserer Website werden durch den Browser automatisch Informationen
              an den Server übermittelt. Diese Informationen werden temporär in sogenannten
              Server-Logfiles gespeichert:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p style={{ marginBottom: '24px' }}>
              Diese Daten werden ausschließlich zur Sicherstellung eines störungsfreien Betriebs
              der Website und zur Verbesserung unseres Angebots ausgewertet. Eine
              Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              5. Kontaktaufnahme
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Wenn Sie uns per Kontaktformular, E-Mail, Telefon oder WhatsApp kontaktieren,
              werden die von Ihnen mitgeteilten Daten (z.&nbsp;B. Name, E-Mail-Adresse,
              Telefonnummer, Nachrichteninhalt) zum Zwecke der Bearbeitung Ihrer Anfrage und
              für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht
              ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse).
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              6. WhatsApp
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Sie haben die Möglichkeit, uns über WhatsApp zu kontaktieren. WhatsApp wird
              betrieben von der Meta Platforms Ireland Ltd., 4 Grand Canal Square, Dublin 2,
              Irland. Wenn Sie uns per WhatsApp kontaktieren, werden die von Ihnen übermittelten
              Daten (z.&nbsp;B. Telefonnummer, Name, Nachrichteninhalt, Fotos) von WhatsApp
              verarbeitet. Weitere Informationen finden Sie in der Datenschutzerklärung von
              WhatsApp:{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--brand-dark)', textDecoration: 'none' }}
              >
                whatsapp.com/privacy
              </a>
              .
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              7. Cookies
            </h2>
            <p style={{ marginBottom: '24px' }}>
              Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den
              Betrieb der Website erforderlich sind. Eine gesonderte Einwilligung ist hierfür
              nicht erforderlich (§ 25 Abs. 2 TDDDG). Es werden keine Tracking- oder
              Analyse-Cookies eingesetzt.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              8. Ihre Rechte
            </h2>
            <p style={{ marginBottom: '12px' }}>
              Sie haben gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen
              Daten:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
            </ul>
            <p style={{ marginBottom: '24px' }}>
              Wenn Sie der Auffassung sind, dass die Verarbeitung Ihrer Daten gegen das
              Datenschutzrecht verstößt, haben Sie das Recht, sich bei einer
              Datenschutz-Aufsichtsbehörde zu beschweren. Die für Berlin zuständige Behörde
              ist:
            </p>
            <p style={{ marginBottom: '24px' }}>
              Berliner Beauftragte für Datenschutz und Informationsfreiheit
              <br />
              Friedrichstr. 219
              <br />
              10969 Berlin
              <br />
              <a
                href="https://www.datenschutz-berlin.de"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--brand-dark)', textDecoration: 'none' }}
              >
                www.datenschutz-berlin.de
              </a>
            </p>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '24px', color: 'var(--ink)' }}>
              9. Aktualität
            </h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Juli 2025. Durch
              die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher bzw.
              behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
              ändern.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
