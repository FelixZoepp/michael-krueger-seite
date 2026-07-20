import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import KontaktForm from '@/components/KontaktForm'
import BreadcrumbSchema from '@/components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Kontakt & Ersteinschätzung | Tischlerei Krüger',
  description:
    'Kostenlose Ersteinschätzung für Ihr Fenster-, Türen- oder Treppenprojekt anfragen. Tischlermeister Michael Krüger – Berlin & Brandenburg.',
}

export default function KontaktPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Startseite', url: '/' }, { name: 'Kontakt' }]} />
      <PageHero
        title="Kostenlose Ersteinschätzung anfragen"
        subtitle="In wenigen Schritten zu Ihrem unverbindlichen Angebot – wir kommen kostenfrei zu Ihnen vor Ort."
        tags={['Kostenfrei', 'Unverbindlich', 'Vor-Ort-Termin']}
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Kontakt' },
        ]}
        backgroundImage="/images/werkstatt-zossen.jpg"
      />
      <section className="section" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="wrap">
          <KontaktForm />
        </div>
      </section>
    </>
  )
}
