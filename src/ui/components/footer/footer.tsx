import { Mail, ExternalLink, UserCheck, ArrowUpRight } from 'lucide-react'

const name = import.meta.env.VITE_DEVELOPER_NAME
const email = import.meta.env.VITE_DEVELOPER_EMAIL
const linkedin = import.meta.env.VITE_DEVELOPER_LINKEDIN

const colHeading: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--text-on-dark)',
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
}

export function Footer() {
  const linkHoverOn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--text-on-dark)'
  }
  const linkHoverOff = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.color = 'var(--text-on-dark-soft)'
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
          {/* About */}
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
              do100x.com
            </span>
            <span style={{ fontSize: 14, color: 'var(--text-on-dark-soft)', lineHeight: 1.7 }}>
              do100x builds simple, high-quality, AI-powered tools for students, professionals, and entrepreneurs — each one carefully designed to remove one real problem from your day, so you can spend more time on what actually matters.
            </span>
          </div>

          {/* Product */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={colHeading}>Product</span>
            <a
              href="https://reader.do100x.com"
              target="_blank"
              rel="noopener noreferrer"
              style={link}
              onMouseEnter={linkHoverOn}
              onMouseLeave={linkHoverOff}
            >
              Reader
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Connect */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <span style={colHeading}>Connect</span>
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
              LinkedIn
            </a>
            <a
              href={`mailto:${email}?subject=Let's%20work%20together`}
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
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom bar */}
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
          <span>&copy; {new Date().getFullYear()} do100x.com — All rights reserved.</span>
          <span>Made with ❤️ by {name}</span>
        </div>

      </div>
    </footer>
  )
}
