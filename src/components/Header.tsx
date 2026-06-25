'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Leistungen', href: '/#leistungen' },
  { label: 'Werterhalt', href: '/#werterhalt' },
  { label: 'Referenzen', href: '/#referenzen' },
  { label: 'Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Kontakt', href: '/kontakt' },
]

function WindowIcon() {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="4" y="4" width="28" height="28" rx="3" stroke="var(--brand)" strokeWidth="2" />
      <line x1="4" y1="13" x2="32" y2="13" stroke="var(--brand)" strokeWidth="2" />
      <line x1="18" y1="13" x2="18" y2="32" stroke="var(--brand)" strokeWidth="2" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2 2.5C2 2.5 3 1 4.5 1C5.5 1 6.5 2 7 3L7.5 4.5C7.8 5.3 7.5 6.2 6.8 6.7L6 7.2C6.7 8.6 7.4 9.3 8.8 10L9.3 9.2C9.8 8.5 10.7 8.2 11.5 8.5L13 9C14 9.5 15 10.5 15 11.5C15 13 13.5 14 13.5 14C12 15 5 13 2 6.5C0.5 3.5 2 2.5 2 2.5Z"
        stroke="var(--brand)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const isHome = pathname === '/'

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  function isActive(href: string) {
    if (href.startsWith('/#')) return pathname === '/'
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'background-color 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
          ...(scrolled || !isHome
            ? {
                backgroundColor: 'rgba(251, 250, 248, 0.97)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderBottom: '1px solid var(--line-soft)',
                boxShadow: '0 2px 16px 0 rgba(42,39,36,0.07)',
              }
            : {
                backgroundColor: 'transparent',
                borderBottom: '1px solid transparent',
              }),
        }}
      >
        <div
          className="wrap"
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '72px',
            gap: '24px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}
          >
            <WindowIcon />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <span
                style={{
                  fontFamily: 'var(--ff-display, Georgia, serif)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  color: 'var(--ink)',
                  letterSpacing: '-0.01em',
                }}
              >
                Michael Krüger
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--muted)',
                  fontWeight: 500,
                  letterSpacing: '0.04em',
                }}
              >
                Tischlerei · seit 1997
              </span>
            </span>
          </Link>

          {/* Desktop nav — hidden below 980px */}
          <nav
            aria-label="Hauptnavigation"
            style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, justifyContent: 'center' }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  padding: '6px 12px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  color: isActive(href) ? 'var(--brand-dark)' : 'var(--ink)',
                  transition: 'color 0.15s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  if (!isActive(href)) {
                    ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)'
                  }
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = isActive(href)
                    ? 'var(--brand-dark)'
                    : 'var(--ink)'
                }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Right side — hidden below 980px */}
          <div
            className="desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}
          >
            <a
              href="tel:+493085607830"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--ink)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--brand)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)'
              }}
            >
              <PhoneIcon />
              030 85 60 78 30
            </a>

            <Link href="/kontakt" className="btn btn--primary" style={{ whiteSpace: 'nowrap' }}>
              Ersteinschätzung anfragen
            </Link>
          </div>

          {/* Hamburger — visible only below 980px */}
          <button
            aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="hamburger-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
              width: '40px',
              height: '40px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              marginLeft: 'auto',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: 'var(--ink)',
                borderRadius: '2px',
                transition: 'transform 0.25s ease, opacity 0.25s ease',
                transformOrigin: 'center',
                transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: 'var(--ink)',
                borderRadius: '2px',
                transition: 'opacity 0.25s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                backgroundColor: 'var(--ink)',
                borderRadius: '2px',
                transition: 'transform 0.25s ease, opacity 0.25s ease',
                transformOrigin: 'center',
                transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              top: '72px',
              left: 0,
              right: 0,
              zIndex: 49,
              backgroundColor: 'rgba(251, 250, 248, 0.97)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid var(--line)',
              boxShadow: '0 8px 32px 0 rgba(42,39,36,0.1)',
            }}
            className="mobile-menu"
          >
            <div className="wrap" style={{ paddingTop: '24px', paddingBottom: '32px' }}>
              <nav
                aria-label="Mobile Navigation"
                style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '24px' }}
              >
                {NAV_LINKS.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 500,
                      padding: '10px 0',
                      textDecoration: 'none',
                      color: isActive(href) ? 'var(--brand-dark)' : 'var(--ink)',
                      borderBottom: '1px solid var(--line-soft)',
                      display: 'block',
                    }}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a
                  href="tel:+493085607830"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    color: 'var(--ink)',
                    textDecoration: 'none',
                  }}
                >
                  <PhoneIcon />
                  030 85 60 78 30
                </a>

                <Link
                  href="/kontakt"
                  className="btn btn--primary"
                  onClick={() => setMenuOpen(false)}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Ersteinschätzung anfragen
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 980px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 979px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
