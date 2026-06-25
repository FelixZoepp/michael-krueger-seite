'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const FAQS = [
  {
    q: 'Lohnt sich eine Aufarbeitung alter Fenster wirklich?',
    a: 'In den meisten Fällen ja. Historische Fenster bestehen aus langsam gewachsenem Holz, das oft besser ist als modernes Bauholz. Eine fachgerechte Restaurierung kostet 40–60 % weniger als ein Austausch und erhält die Gebäudesubstanz.',
  },
  {
    q: 'Erreichen restaurierte Kastenfenster moderne Dämmwerte?',
    a: 'Mit neuen Dichtungen, ertüchtigter Verglasung und dem natürlichen Kastenfenster-Effekt (Luftpolster zwischen zwei Ebenen) erreichen restaurierte Fenster sehr gute Werte – oft vergleichbar mit modernem Isolierglas.',
  },
  {
    q: 'Wie läuft es bei denkmalgeschützten Gebäuden?',
    a: 'Wir übernehmen die Abstimmung mit der Unteren Denkmalschutzbehörde. Alle Arbeiten werden so ausgeführt, dass sie den Auflagen entsprechen – von Profilmaßen über Materialwahl bis zur Oberfläche.',
  },
  {
    q: 'Kann ich auch einzelne Reparaturen beauftragen?',
    a: 'Ja. Ob klemmende Fenster, defekte Beschläge oder eine verzogene Tür – wir übernehmen auch Einzelreparaturen, schnell und unkompliziert.',
  },
  {
    q: 'Arbeiten Sie auch für Hausverwaltungen?',
    a: 'Ja, regelmäßig. Wir betreuen Bestände mit historischen Fenstern und Türen und bieten Rahmenvereinbarungen für Wartung und Reparatur.',
  },
  {
    q: 'In welchem Gebiet sind Sie tätig?',
    a: 'Unser Schwerpunkt liegt in Berlin und Brandenburg – bis ca. 100 km um unsere Werkstatt in Zossen.',
  },
  {
    q: 'Was kostet eine Ersteinschätzung?',
    a: 'Nichts. Wir kommen zu Ihnen, prüfen den Bestand und beraten Sie – kostenfrei und unverbindlich.',
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section" id="faq" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '52px' }}>
          <span className="eyebrow">Häufige Fragen</span>
          <h2 style={{ marginTop: '16px' }}>Antworten auf Ihre Fragen</h2>
        </div>

        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                borderBottom: '1px solid var(--line)',
                borderLeft: open === i ? '3px solid var(--brand)' : '3px solid transparent',
                paddingLeft: open === i ? '16px' : '0',
                transition: 'border-color 0.22s ease, padding-left 0.22s ease',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  color: 'var(--ink)',
                  fontFamily: 'var(--ff-body, sans-serif)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  lineHeight: 1.45,
                }}
              >
                <span>{faq.q}</span>
                {/* Animated + to × icon */}
                <span
                  className={`faq-icon ${open === i ? 'faq-icon--open' : ''}`}
                  style={{
                    flexShrink: 0,
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    backgroundColor: open === i ? 'var(--brand)' : 'var(--brand-tint)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background-color 0.22s ease',
                    position: 'relative',
                  }}
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    {/* Horizontal bar — always visible */}
                    <rect
                      x="1" y="5.4" width="10" height="1.2"
                      rx="0.6"
                      fill={open === i ? '#ffffff' : 'var(--brand-dark)'}
                      style={{ transition: 'fill 0.22s ease' }}
                    />
                    {/* Vertical bar — rotates away when open */}
                    <rect
                      x="5.4" y="1" width="1.2" height="10"
                      rx="0.6"
                      fill={open === i ? '#ffffff' : 'var(--brand-dark)'}
                      className="faq-v-bar"
                      style={{
                        transformOrigin: '6px 6px',
                        transform: open === i ? 'rotate(90deg) scaleY(0)' : 'rotate(0deg) scaleY(1)',
                        transition: 'transform 0.28s ease, fill 0.22s ease',
                      }}
                    />
                  </svg>
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div
                      style={{
                        paddingBottom: '20px',
                        paddingTop: '2px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(244,236,221,0.45)',
                        padding: '12px 14px 16px',
                        marginBottom: '8px',
                      }}
                    >
                      <p
                        style={{
                          margin: 0,
                          fontSize: '0.95rem',
                          lineHeight: 1.75,
                          color: 'var(--ink-soft)',
                        }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
