'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const STEPS = [
  {
    question: 'Was betrifft Ihr Anliegen?',
    options: ['Fenster', 'Türen', 'Treppen', 'Reparatur', 'Sonstiges'],
  },
  {
    question: 'Worum geht es?',
    options: ['Neues Projekt', 'Restaurierung', 'Reparatur', 'Wartung'],
  },
  {
    question: 'Um welches Objekt handelt es sich?',
    options: ['Altbauwohnung', 'Gründerzeithaus', 'Gewerbe/Öffentlich', 'Sonstiges'],
  },
]

export default function KontaktSection() {
  const [step, setStep] = useState(0)
  const [selections, setSelections] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [direction, setDirection] = useState(1)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })

  const totalSteps = 4

  function selectOption(option: string) {
    const next = [...selections]
    next[step] = option
    setSelections(next)
    setDirection(1)
    setTimeout(() => setStep((s) => s + 1), 200)
  }

  function goBack() {
    if (step === 0) return
    setDirection(-1)
    setStep((s) => s - 1)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  }

  return (
    <section
      id="kontakt"
      className="section"
      style={{ backgroundColor: 'var(--header)' }}
    >
      <div className="wrap">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ color: '#ffffff' }}>
            Jetzt kostenlose Ersteinschätzung anfragen
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginTop: '12px', maxWidth: '540px', margin: '12px auto 0' }}>
            In wenigen Schritten zu Ihrem unverbindlichen Angebot – kostenfrei vor Ort.
          </p>
        </div>

        <div
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            backgroundColor: 'var(--paper)',
            borderRadius: 'var(--r)',
            padding: '40px',
            boxShadow: '0 24px 64px rgba(0,0,0,0.25)',
          }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'center', padding: '20px 0' }}
            >
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
              <h3
                style={{
                  fontFamily: 'var(--ff-display, Georgia, serif)',
                  fontSize: '1.5rem',
                  color: 'var(--ink)',
                  marginBottom: '12px',
                }}
              >
                Vielen Dank!
              </h3>
              <p style={{ color: 'var(--ink-soft)', lineHeight: 1.7 }}>
                Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden.
                <br />
                <strong>Ihr Anliegen:</strong> {selections.join(' → ')}
              </p>
            </motion.div>
          ) : (
            <>
              {/* Progress bar */}
              <div style={{ marginBottom: '32px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px',
                  }}
                >
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--muted)' }}>
                    Schritt {step + 1} von {totalSteps}
                  </span>
                  {step > 0 && (
                    <button
                      onClick={goBack}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '0.82rem',
                        color: 'var(--ink-soft)',
                        fontWeight: 500,
                      }}
                    >
                      ← Zurück
                    </button>
                  )}
                </div>
                <div
                  style={{
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: 'var(--line)',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    style={{
                      height: '100%',
                      backgroundColor: 'var(--brand)',
                      borderRadius: '2px',
                    }}
                    animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                  />
                </div>
              </div>

              {/* Step content */}
              <AnimatePresence mode="wait" custom={direction}>
                {step < 3 ? (
                  <motion.div
                    key={`step-${step}`}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--ff-display, Georgia, serif)',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        marginBottom: '24px',
                      }}
                    >
                      {STEPS[step].question}
                    </p>
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '12px',
                      }}
                    >
                      {STEPS[step].options.map((option) => (
                        <button
                          key={option}
                          onClick={() => selectOption(option)}
                          style={{
                            padding: '14px 16px',
                            borderRadius: 'var(--r-sm)',
                            border: `2px solid ${selections[step] === option ? 'var(--brand)' : 'var(--line)'}`,
                            backgroundColor:
                              selections[step] === option ? 'var(--brand)' : 'transparent',
                            color: selections[step] === option ? '#ffffff' : 'var(--ink)',
                            fontFamily: 'var(--ff-body, sans-serif)',
                            fontSize: '0.95rem',
                            fontWeight: 500,
                            cursor: 'pointer',
                            transition: 'all 0.18s ease',
                            textAlign: 'left',
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step-contact"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--ff-display, Georgia, serif)',
                        fontSize: '1.15rem',
                        fontWeight: 600,
                        color: 'var(--ink)',
                        marginBottom: '24px',
                      }}
                    >
                      Ihre Kontaktdaten
                    </p>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      <input
                        type="text"
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                        style={inputStyle}
                      />
                      <input
                        type="email"
                        placeholder="E-Mail *"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                        style={inputStyle}
                      />
                      <input
                        type="tel"
                        placeholder="Telefon (optional)"
                        value={formData.phone}
                        onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                        style={inputStyle}
                      />
                      <textarea
                        placeholder="Ihre Nachricht (optional)"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                        style={{ ...inputStyle, resize: 'vertical' }}
                      />
                      <button type="submit" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                        Anfrage absenden
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>

        {/* Direct contact row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '32px',
            marginTop: '36px',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="tel:+493085607830"
            style={{
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.15s ease',
            }}
          >
            <span style={{ color: 'var(--brand)' }}>📞</span>
            030 85 60 78 30
          </a>
          <a
            href="mailto:info@historische-bauelemente.de"
            style={{
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              fontSize: '0.9rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ color: 'var(--brand)' }}>✉</span>
            info@historische-bauelemente.de
          </a>
        </div>
      </div>
    </section>
  )
}

const inputStyle: React.CSSProperties = {
  padding: '13px 16px',
  borderRadius: 'var(--r-sm)',
  border: '1px solid var(--line)',
  backgroundColor: 'var(--bg)',
  color: 'var(--ink)',
  fontSize: '0.95rem',
  fontFamily: 'var(--ff-body, sans-serif)',
  outline: 'none',
  width: '100%',
  boxSizing: 'border-box',
}
