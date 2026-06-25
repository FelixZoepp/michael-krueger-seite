import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import ProblemSection from '@/components/ProblemSection'
import LeistungenSection from '@/components/LeistungenSection'
import BentoSection from '@/components/BentoSection'
import LeadmagnetSection from '@/components/LeadmagnetSection'
import AblaufSection from '@/components/AblaufSection'
import ReferenzenSection from '@/components/ReferenzenSection'
import ZielgruppenSection from '@/components/ZielgruppenSection'
import UeberUnsSection from '@/components/UeberUnsSection'
import KundenstimmenSection from '@/components/KundenstimmenSection'
import FAQSection from '@/components/FAQSection'

export const metadata = {
  title:
    'Historische Fenster & Türen restaurieren | Berlin & Brandenburg | Tischlerei Krüger',
  description:
    'Kastenfenster, Türen & Treppen denkmalgerecht restaurieren statt ersetzen – Meisterbetrieb in Berlin & Brandenburg seit 1997. Kostenlose Ersteinschätzung.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <LeistungenSection />
      <BentoSection />
      <LeadmagnetSection />
      <AblaufSection />
      <ReferenzenSection />
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
            Bereit für eine kostenlose Ersteinschätzung?
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
            Schildern Sie uns Ihr Anliegen – wir kommen zu Ihnen und beraten Sie vor Ort.
            Kostenfrei und unverbindlich.
          </p>
          <Link
            href="/kontakt"
            className="btn btn--primary"
            style={{ fontSize: '1.05rem', padding: '14px 32px' }}
          >
            Jetzt Ersteinschätzung anfragen
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
