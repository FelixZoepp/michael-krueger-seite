import React from 'react'

interface ArticleLayoutProps {
  children: React.ReactNode
  sidebar: React.ReactNode
}

export default function ArticleLayout({ children, sidebar }: ArticleLayoutProps) {
  return (
    <>
      <style>{`
        .article-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (max-width: 979px) {
          .article-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .article-sidebar {
            order: 2;
          }
        }
        .prose-content {
          max-width: 68ch;
        }
        .prose-content p {
          margin-bottom: 1.2em;
          color: var(--ink-soft);
          line-height: 1.7;
        }
        .prose-content ul {
          list-style-type: disc;
          padding-left: 1.5em;
          margin-bottom: 1.2em;
        }
        .prose-content ol {
          list-style-type: decimal;
          padding-left: 1.5em;
          margin-bottom: 1.2em;
        }
        .prose-content li {
          margin-bottom: 0.5em;
          color: var(--ink-soft);
          line-height: 1.65;
        }
        .prose-content h2 {
          margin-top: 2em;
          margin-bottom: 0.8em;
          font-size: clamp(1.3rem, 2.4vw, 1.75rem);
          color: var(--ink);
        }
        .prose-content h3 {
          margin-top: 1.4em;
          margin-bottom: 0.5em;
          font-size: 1.15rem;
          color: var(--ink);
        }
        .prose-content blockquote {
          border-left: 3px solid var(--brand);
          padding-left: 1.25em;
          font-style: italic;
          color: var(--ink-soft);
          margin: 1.8em 0;
          font-size: 1.05rem;
          line-height: 1.65;
        }
        .prose-content a {
          color: var(--brand-dark);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .prose-lead {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--ink-soft);
          margin-bottom: 2em;
        }
      `}</style>

      <div className="wrap" style={{ paddingTop: '56px', paddingBottom: '80px' }}>
        <div className="article-grid">
          {/* Main prose area */}
          <div className="prose-content">
            {children}
          </div>

          {/* Sticky sidebar */}
          <div
            className="article-sidebar"
            style={{ position: 'sticky', top: '100px' }}
          >
            {sidebar}
          </div>
        </div>
      </div>
    </>
  )
}
