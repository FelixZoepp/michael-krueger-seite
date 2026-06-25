import Link from 'next/link'

interface SidebarLink {
  title: string
  href: string
}

interface SidebarProps {
  ctaText: string
  ctaHref: string
  projects?: SidebarLink[]
  articles?: SidebarLink[]
}

export default function Sidebar({ ctaText, ctaHref, projects = [], articles = [] }: SidebarProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* CTA card */}
      <div
        style={{
          backgroundColor: 'var(--header)',
          borderRadius: 'var(--r)',
          padding: '28px 24px',
          boxShadow: '0 4px 20px 0 rgba(33,31,28,0.18)',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--ff-display, Georgia, serif)',
            fontSize: '1.15rem',
            fontWeight: 600,
            color: '#ffffff',
            marginBottom: '8px',
            lineHeight: 1.3,
          }}
        >
          Ihr Projekt besprechen
        </p>
        <p
          style={{
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '20px',
            lineHeight: 1.55,
          }}
        >
          Kostenlose Ersteinschätzung – wir melden uns innerhalb von 24 Stunden.
        </p>
        <Link
          href={ctaHref}
          className="btn btn--primary"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {ctaText}
        </Link>
      </div>

      {/* Projects card */}
      {projects.length > 0 && (
        <div
          style={{
            backgroundColor: 'var(--paper)',
            borderRadius: 'var(--r)',
            padding: '24px',
            boxShadow: '0 2px 12px 0 rgba(33,31,28,0.07)',
          }}
        >
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '14px',
            }}
          >
            Weitere Projekte
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {projects.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '1rem' }}>→</span>
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Articles card */}
      {articles.length > 0 && (
        <div
          style={{
            backgroundColor: 'var(--paper)',
            borderRadius: 'var(--r)',
            padding: '24px',
            boxShadow: '0 2px 12px 0 rgba(33,31,28,0.07)',
          }}
        >
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '14px',
            }}
          >
            Passende Fachartikel
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {articles.map((a) => (
              <li key={a.href}>
                <Link
                  href={a.href}
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--ink)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: 'var(--brand)', fontWeight: 700, fontSize: '1rem' }}>→</span>
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
