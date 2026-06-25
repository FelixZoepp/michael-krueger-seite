'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const DISTRICTS = [
  'Charlottenburg',
  'Prenzlauer Berg',
  'Kreuzberg',
  'Schöneberg',
  'Steglitz',
  'Spandau',
  'Zehlendorf',
  'Wilmersdorf',
  'Friedenau',
  'Dahlem',
  'Grunewald',
  'Wannsee',
]

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1600
    const step = 16
    const increment = target / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

function ShieldIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 4L6 10V20C6 28.3 12.1 36.1 20 38C27.9 36.1 34 28.3 34 20V10L20 4Z"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 20L18 24L26 16"
        stroke="var(--brand)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function BentoSection() {
  const marqueeRef = useRef<HTMLDivElement>(null)

  return (
    <section className="section" id="werterhalt" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Warum Wir</span>
          <h2 style={{ marginTop: '16px', marginBottom: '48px' }}>5 Gründe für Krüger</h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridAutoRows: 'minmax(200px, auto)',
            gap: '20px',
          }}
          className="bento-grid"
        >
          {/* Tile 1: Dark, col-span-2 row-span-2 */}
          <motion.div
            className="bento-tile-large bento-tile"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.05 }}
            style={{
              gridColumn: 'span 2',
              gridRow: 'span 2',
              backgroundColor: 'var(--header)',
              borderRadius: '18px',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Wood grain CSS pattern */}
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `repeating-linear-gradient(
                  88deg,
                  transparent,
                  transparent 3px,
                  rgba(255,255,255,0.012) 3px,
                  rgba(255,255,255,0.012) 4px
                ), repeating-linear-gradient(
                  92deg,
                  transparent,
                  transparent 7px,
                  rgba(255,255,255,0.008) 7px,
                  rgba(255,255,255,0.008) 9px
                )`,
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '32px',
                left: '40px',
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(4rem, 8vw, 7rem)',
                fontWeight: 700,
                color: 'rgba(179,135,63,0.15)',
                lineHeight: 1,
                userSelect: 'none',
              }}
            >
              25
            </div>
            <div
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                fontWeight: 700,
                color: 'var(--brand)',
                lineHeight: 1,
                marginBottom: '16px',
              }}
            >
              <AnimatedCounter target={25} suffix="+" />
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '1rem',
                lineHeight: 1.55,
                maxWidth: '280px',
              }}
            >
              Echtes Meisterhandwerk seit über 25 Jahren.
            </p>
          </motion.div>

          {/* Tile 2: Wide, 60% Werterhalt */}
          <motion.div
            className="bento-tile"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            style={{
              gridColumn: 'span 2',
              backgroundColor: 'var(--brand-tint)',
              borderRadius: '12px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: 'clamp(2.4rem, 4vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1,
                marginBottom: '12px',
                background: 'linear-gradient(90deg, var(--brand-dark) 0%, var(--beam-hi) 50%, var(--brand-dark) 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
              className="gold-shimmer"
            >
              60 % Werterhalt
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--ink-soft)', lineHeight: 1.6 }}>
              Restaurierung erhält 60 % mehr Gebäudewert als ein Komplettaustausch.
            </p>
          </motion.div>

          {/* Tile 3: Denkmalsicher */}
          <motion.div
            className="bento-tile"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            style={{
              gridColumn: 'span 1',
              backgroundColor: 'var(--paper)',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <ShieldIcon />
            <h3
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: '1.2rem',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              Denkmalsicher
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>
              Alle Arbeiten denkmalkonform – abgestimmt mit Behörden und Architekten.
            </p>
          </motion.div>

          {/* Tile 4: Alles aus einer Hand */}
          <motion.div
            className="bento-tile"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.2 }}
            style={{
              gridColumn: 'span 1',
              backgroundColor: 'var(--paper)',
              borderRadius: '20px',
              padding: '32px',
              border: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                backgroundColor: 'var(--brand-tint)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="9" stroke="var(--brand)" strokeWidth="1.8" />
                <path d="M11 7V11L13.5 13.5" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </div>
            <h3
              style={{
                fontFamily: 'var(--ff-display, Georgia, serif)',
                fontSize: '1.2rem',
                color: 'var(--ink)',
                margin: 0,
              }}
            >
              Alles aus einer Hand
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>
              Beratung, Werkstattfertigung, Montage und Wartung – ein Ansprechpartner.
            </p>
          </motion.div>

          {/* Tile 5: Marquee, full-width col-span-4 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.25 }}
            style={{
              gridColumn: 'span 4',
              backgroundColor: 'var(--header)',
              borderRadius: '14px',
              padding: '28px 0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
            className="bento-marquee-tile"
          >
            <div
              style={{
                padding: '0 32px',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--ff-display, Georgia, serif)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: 'var(--brand)',
                }}
              >
                1.100+ Projekte
              </span>
              <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)' }}>
                in ganz Berlin & Brandenburg
              </span>
            </div>
            <div
              ref={marqueeRef}
              style={{
                overflow: 'hidden',
                width: '100%',
                maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              }}
            >
              <div className="marquee-track">
                {[...DISTRICTS, ...DISTRICTS].map((d, i) => (
                  <span
                    key={`${d}-${i}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '6px 18px',
                      borderRadius: '100px',
                      backgroundColor: 'rgba(255,255,255,0.07)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      color: 'rgba(255,255,255,0.75)',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      marginRight: '12px',
                      flexShrink: 0,
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          display: inline-flex;
          animation: marquee 48s linear infinite;
          padding: 4px 0;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .bento-tile {
          transition: box-shadow 0.28s ease, transform 0.28s ease;
        }
        .bento-tile:hover {
          box-shadow: 0 8px 32px rgba(179,135,63,0.12), 0 2px 8px rgba(42,39,36,0.08);
          transform: translateY(-2px);
        }
        @keyframes goldShimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        .gold-shimmer {
          animation: goldShimmer 4s linear infinite;
        }
        .bento-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 980px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .bento-tile-large {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
          .bento-marquee-tile {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 560px) {
          .bento-grid {
            grid-template-columns: 1fr !important;
          }
          .bento-tile-large {
            grid-column: span 1 !important;
          }
          .bento-marquee-tile {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  )
}
