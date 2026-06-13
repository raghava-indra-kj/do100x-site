import { Mail, ExternalLink, UserCheck, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { site } from '../../config/site'

const colHeading: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--text-on-dark)',
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
}

const link: React.CSSProperties = {
  color: 'var(--text-on-dark-soft)',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  fontSize: 14,
  transition: 'color 0.15s',
}

export function Footer() {
  const { t } = useTranslation()
  const { email, linkedin, name } = site.developer

  const linkHoverOn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--text-on-dark)'
  }
  const linkHoverOff = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--text-on-dark-soft)'
  }

  return (
    <footer
      style={{
        background: 'var(--surface-dark)',
        padding: '56px 32px 28px',
        fontFamily: 'var(--font-sans)',
        color: 'var(--text-on-dark-soft)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 48,
            paddingBottom: 40,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 380 }}>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: 18,
                letterSpacing: '-0.3px',
                color: 'var(--text-on-dark)',
              }}
            >
              {t('footer.brand')}
            </span>
            <span style={{ fontSize: 14, color: 'var(--text-on-dark-soft)', lineHeight: 1.7 }}>
              {t('footer.about')}
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={colHeading}>{t('footer.productHeading')}</span>
            <a
              href={site.reader.url}
              target="_blank"
              rel="noopener noreferrer"
              style={link}
              onMouseEnter={linkHoverOn}
              onMouseLeave={linkHoverOff}
            >
              {t('footer.reader')}
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={colHeading}>{t('footer.connectHeading')}</span>
            <a
              href={`mailto:${email}`}
              style={link}
              onMouseEnter={linkHoverOn}
              onMouseLeave={linkHoverOff}
            >
              <Mail size={14} />
              {email}
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={link}
              onMouseEnter={linkHoverOn}
              onMouseLeave={linkHoverOff}
            >
              <ExternalLink size={14} />
              {t('footer.linkedin')}
            </a>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(t('footer.hireMeSubject'))}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 4,
                padding: '8px 16px',
                background: 'var(--color-primary)',
                color: 'var(--color-on-primary)',
                borderRadius: 'var(--radius-md)',
                fontSize: 13,
                fontWeight: 600,
                textDecoration: 'none',
                letterSpacing: '0.2px',
                alignSelf: 'flex-start',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--color-primary-active)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-primary)'
              }}
            >
              <UserCheck size={14} />
              {t('footer.hireMe')}
            </a>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
            paddingTop: 24,
            fontSize: 13,
            color: 'var(--text-on-dark-soft)',
          }}
        >
          <span>{t('footer.copyright', { year: new Date().getFullYear() })}</span>
          <span>{t('footer.madeBy', { name })}</span>
        </div>

      </div>
    </footer>
  )
}
