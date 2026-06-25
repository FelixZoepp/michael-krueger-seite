'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '620px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--header)',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="/images/hero-kastenfenster-altbau.jpg"
          alt="Historische Kastenfenster im Berliner Altbau"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="100vw"
        />
        {/* Dark gradient left→right so white text is readable */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(90deg, rgba(18,14,8,0.92) 0%, rgba(24,18,10,0.82) 35%, rgba(33,31,28,0.45) 65%, rgba(33,31,28,0.15) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="wrap section" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          style={{ maxWidth: '760px' }}
        >
          {/* H1 */}
          <h1
            style={{
              fontFamily: 'var(--ff-display, Georgia, serif)',
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 600,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: '24px',
              letterSpacing: '-0.02em',
              textShadow: '0 2px 24px rgba(0,0,0,0.35), 0 1px 4px rgba(0,0,0,0.2)',
            }}
          >
            Historische Fenster und Türen{' '}
            <span className="hero-accent">erhalten</span>
            {' '}– statt teuer ersetzen.
          </h1>

          {/* Location badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
              padding: '6px 14px',
              borderRadius: '20px',
              backgroundColor: 'rgba(179,135,63,0.18)',
              border: '1px solid rgba(179,135,63,0.35)',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1C4.8 1 3 2.8 3 5c0 3 4 7.5 4 7.5S11 8 11 5c0-2.2-1.8-4-4-4Zm0 5.5A1.5 1.5 0 1 1 7 3.5a1.5 1.5 0 0 1 0 3Z" fill="var(--brand)" />
            </svg>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.03em' }}>
              Berlin &amp; Brandenburg · Werkstatt in Berlin-Reinickendorf
            </span>
          </div>

          {/* Subtitle */}
          <p
            style={{
              color: 'rgba(255,255,255,0.82)',
              fontSize: 'clamp(1rem, 2vw, 1.18rem)',
              lineHeight: 1.65,
              maxWidth: '640px',
              marginBottom: '36px',
            }}
          >
            Tischlermeister Michael Krüger restauriert Kastenfenster, Türen und Treppen im Berliner
            Altbau – handwerklich, denkmalgerecht und zum Festpreis.
          </p>

          {/* CTA */}
          <Link
            href="#kontakt"
            className="btn btn--primary"
            style={{ fontSize: '1.05rem', padding: '16px 36px' }}
          >
            Kostenlose Ersteinschätzung
          </Link>

          {/* Trust row */}
          <div
            style={{
              marginTop: '40px',
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '8px 0',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '0.85rem',
            }}
          >
            {['★★★★★ Bestbewertet auf Google', 'Meisterbetrieb seit 2016 · 25+ Jahre Erfahrung', 'Berlin & Brandenburg'].map(
              (item, i, arr) => (
                <span key={item} style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ padding: '0 16px', paddingLeft: i === 0 ? 0 : '16px' }}>{item}</span>
                  {i < arr.length - 1 && (
                    <span
                      style={{
                        display: 'block',
                        width: '1px',
                        height: '14px',
                        backgroundColor: 'rgba(255,255,255,0.22)',
                        flexShrink: 0,
                      }}
                    />
                  )}
                </span>
              )
            )}
          </div>

          <style>{`
            .hero-accent {
              position: relative;
              display: inline-block;
            }
            .hero-accent::after {
              content: '';
              position: absolute;
              bottom: -3px;
              left: 0;
              width: 100%;
              height: 3px;
              background: linear-gradient(90deg, var(--brand) 0%, var(--beam-hi) 60%, transparent 100%);
              border-radius: 2px;
              opacity: 0.85;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  )
}
