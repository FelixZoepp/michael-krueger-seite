import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import LeistungenSection from '@/components/LeistungenSection'
import BentoSection from '@/components/BentoSection'
import AblaufSection from '@/components/AblaufSection'
import ReferenzenSection from '@/components/ReferenzenSection'
import ZielgruppenSection from '@/components/ZielgruppenSection'
import UeberUnsSection from '@/components/UeberUnsSection'
import KundenstimmenSection from '@/components/KundenstimmenSection'
import FAQSection from '@/components/FAQSection'
import VideoSection from '@/components/VideoSection'

export const metadata = {
  title:
    'Historische Fenster & Türen restaurieren | Berlin & Brandenburg | Tischlerei Krüger',
  description:
    'Kastenfenster, Türen & Treppen denkmalgerecht restaurieren statt ersetzen – Meisterbetrieb in Berlin & Brandenburg seit 1997. Kostenlose telefonische Ersteinschätzung.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Lohnt sich eine Aufarbeitung alter Fenster wirklich?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In den meisten Fällen ja. Historische Fenster bestehen aus langsam gewachsenem Holz, das oft besser ist als modernes Bauholz. Eine fachgerechte Restaurierung kostet 40–60 % weniger als ein Austausch und erhält die Gebäudesubstanz.',
      },
    },
    {
      '@type': 'Question',
      name: 'Erreichen restaurierte Kastenfenster moderne Dämmwerte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mit neuen Dichtungen, ertüchtigter Verglasung und dem natürlichen Kastenfenster-Effekt (Luftpolster zwischen zwei Ebenen) erreichen restaurierte Fenster sehr gute Werte – oft vergleichbar mit modernem Isolierglas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Wie läuft es bei denkmalgeschützten Gebäuden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wir übernehmen die Abstimmung mit der Unteren Denkmalschutzbehörde. Alle Arbeiten werden so ausgeführt, dass sie den Auflagen entsprechen – von Profilmaßen über Materialwahl bis zur Oberfläche.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kann ich auch einzelne Reparaturen beauftragen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja. Ob klemmende Fenster, defekte Beschläge oder eine verzogene Tür – wir übernehmen auch Einzelreparaturen, schnell und unkompliziert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Arbeiten Sie auch für Hausverwaltungen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, regelmäßig. Wir betreuen Bestände mit historischen Fenstern und Türen und bieten Rahmenvereinbarungen für Wartung und Reparatur.',
      },
    },
    {
      '@type': 'Question',
      name: 'In welchem Gebiet sind Sie tätig?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Unser Schwerpunkt liegt in Berlin und Brandenburg – bis ca. 100 km um unsere Werkstatt in Zossen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Was kostet eine Ersteinschätzung?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Die telefonische Ersteinschätzung ist kostenfrei und unverbindlich. Schildern Sie uns Ihr Anliegen – gerne auch mit Fotos per WhatsApp.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <LeistungenSection />
      <BentoSection />
      <AblaufSection />
      <ReferenzenSection />
      <VideoSection />
      <ZielgruppenSection />
      <UeberUnsSection />
      <KundenstimmenSection />
      <FAQSection />

      {/* CTA band */}
      <section
        id="kontakt"
        style={{ backgroundColor: 'var(--header)', padding: '80px 0' }}
      >
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: 'var(--ff-display, Georgia, serif)',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            Kostenlose telefonische Ersteinschätzung
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.05rem',
              maxWidth: '560px',
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            Schildern Sie uns Ihr Anliegen am Telefon – wir geben Ihnen eine erste
            Einschätzung, kostenfrei und unverbindlich. Gerne auch Bilder vorab per{' '}
            <a
              href="https://wa.me/491636983248?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20Ersteinsch%C3%A4tzung."
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'var(--brand)', textDecoration: 'underline', fontWeight: 600 }}
            >
              WhatsApp
            </a>
            .
          </p>
          <Link
            href="/kontakt"
            className="btn btn--primary"
            style={{ fontSize: '1.05rem', padding: '14px 32px' }}
          >
            Jetzt anrufen
          </Link>
          <p
            style={{
              marginTop: '24px',
              fontSize: '0.9rem',
              color: 'rgba(255,255,255,0.5)',
            }}
          >
            Oder rufen Sie uns an:{' '}
            <a
              href="tel:+493085607830"
              style={{
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              030 85 60 78 30
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
