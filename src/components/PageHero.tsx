import Image from 'next/image'
import Link from 'next/link'

interface Breadcrumb {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  tags?: string[]
  breadcrumbs?: Breadcrumb[]
  backgroundImage: string
}

export default function PageHero({
  title,
  subtitle,
  tags = [],
  breadcrumbs = [],
  backgroundImage,
}: PageHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '350px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        priority
      />
      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(33,31,28,0.72) 0%, rgba(33,31,28,0.82) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="wrap"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: '108px',
          paddingBottom: '56px',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {i > 0 && (
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>/</span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    style={{
                      fontSize: '0.8rem',
                      color: 'rgba(255,255,255,0.6)',
                      textDecoration: 'none',
                    }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Title */}
        <h1
          style={{
            fontFamily: 'var(--ff-display, Georgia, serif)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.12,
            letterSpacing: '-0.01em',
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            style={{
              marginTop: '16px',
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '640px',
              margin: '16px auto 0',
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        )}

        {/* Tags */}
        {tags.length > 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '24px',
              flexWrap: 'wrap',
            }}
          >
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  backgroundColor: 'var(--brand-tint)',
                  color: 'var(--brand-dark)',
                  borderRadius: '9999px',
                  padding: '4px 12px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
