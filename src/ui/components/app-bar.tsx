import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { site } from '../../config/site'

export function AppBar() {
  const { t } = useTranslation()

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
        <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img
            src="/branding/logos/do100x-appbar.png"
            alt={t('appBar.logoAlt')}
            style={{ height: 32, width: 'auto', objectFit: 'contain' }}
          />
        </a>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <a
            href={site.reader.url}
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
            {t('appBar.reader')}
            <ExternalLink size={13} />
          </a>
        </nav>
      </div>
    </header>
  )
}
