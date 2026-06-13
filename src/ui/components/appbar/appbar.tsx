import { ExternalLink } from 'lucide-react'

export function AppBar() {
  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'var(--surface-canvas)',
        borderBottom: '1px solid var(--border-hairline)',
        padding: '0 32px',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Brand */}
        <a
          href="/"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}
        >
          <img
            src="/branding/logos/logo-appbar-original.png"
            alt="do100x"
            style={{ height: 32, width: 'auto', objectFit: 'contain' }}
          />
        </a>

        {/* Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <a
            href="https://reader.do100x.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--text-body)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              padding: '6px 12px',
              borderRadius: 'var(--radius-md)',
              transition: 'background 0.15s, color 0.15s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--surface-soft)'
              e.currentTarget.style.color = 'var(--text-ink)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--text-body)'
            }}
          >
            Reader
            <ExternalLink size={13} />
          </a>
        </nav>
      </div>
    </header>
  )
}
