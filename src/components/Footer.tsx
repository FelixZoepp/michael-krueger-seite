'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--header)', color: '#ffffff' }}>
      <div className="section">
        <div className="wrap">
          {/* 4-column grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '48px',
              marginBottom: '56px',
            }}
            className="footer-grid"
          >
            {/* Col 1: Logo + address + phone */}
            <div>
              <Link
                href="/"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  marginBottom: '20px',
                }}
              >
                <Image
                  src="/images/logo-tischlermeister.png"
                  alt="Krüger Tischlermeister – Logo"
                  width={180}
                  height={50}
                  style={{
                    height: '40px',
                    width: 'auto',
                    filter: 'brightness(0) invert(1)',
                  }}
                />
              </Link>

              <address
                style={{
                  fontStyle: 'normal',
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}
              >
                Witzlebenstraße 21a
                <br />
                14057 Berlin-Charlottenburg
              </address>

              <a
                href="tel:+493085607830"
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                  display: 'block',
                  marginBottom: '4px',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.8)'
                }}
              >
                030 85 60 78 30
              </a>
              <a
                href="mailto:info@historische-bauelemente.de"
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.6)',
                  textDecoration: 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)'
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'
                }}
              >
                info@historische-bauelemente.de
              </a>
            </div>

            {/* Col 2: Projekte */}
            <div>
              <h3
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--brand)',
                  marginBottom: '20px',
                  fontFamily: 'var(--ff-body, sans-serif)',
                }}
              >
                Projekte
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Olympiastadion', href: '/projekte/olympiastadion' },
                  { label: 'Kennedysaal', href: '/projekte/kennedysaal' },
                  { label: 'Kita Berlin-Spandau', href: '/projekte/kita' },
                  { label: 'Alle Referenzen', href: '/#referenzen' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Mehr */}
            <div>
              <h3
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--brand)',
                  marginBottom: '20px',
                  fontFamily: 'var(--ff-body, sans-serif)',
                }}
              >
                Mehr
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Leistungen', href: '/#leistungen' },
                  { label: 'Team', href: '/team' },
                  { label: 'Ratgeber', href: '/blog' },
                  { label: 'Kontakt', href: '/kontakt' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4: Standorte */}
            <div>
              <h3
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--brand)',
                  marginBottom: '20px',
                  fontFamily: 'var(--ff-body, sans-serif)',
                }}
              >
                Standorte
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Potsdam', href: '/brandenburg/potsdam' },
                  { label: 'Luckenwalde', href: '/brandenburg/luckenwalde' },
                  { label: 'Jüterbog', href: '/brandenburg/jueterbog' },
                  { label: 'Zossen', href: '/brandenburg/zossen' },
                  { label: 'Alle Standorte', href: '/brandenburg' },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <FooterLink href={href}>{label}</FooterLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
              © 2024 Tischlerei Michael Krüger
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <FooterLink href="#">Datenschutz</FooterLink>
              <FooterLink href="#">Impressum</FooterLink>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      style={{
        fontSize: '0.9rem',
        color: 'rgba(255,255,255,0.6)',
        textDecoration: 'none',
        transition: 'color 0.15s ease',
        display: 'inline-block',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'
      }}
    >
      {children}
    </Link>
  )
}
