import { Rows3, Eye, Sparkles, BookOpen, GraduationCap, ArrowRight, Lightbulb, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { site } from '../../config/site'

const readerLogo = '/branding/logos/reader.png'

const featureIcons = [Rows3, Eye, BookOpen, Sparkles, GraduationCap]

type Feature = { label: string; text: string }

export function Products() {
  const { t } = useTranslation()
  const features = t('products.reader.features', { returnObjects: true }) as unknown as Feature[]
  const requestHref = `mailto:${site.developer.email}?subject=${encodeURIComponent(t('products.request.emailSubject'))}`

  return (
    <section style={{ background: 'var(--surface-soft)', padding: 'clamp(40px, 6vw, 72px) 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>

        <div style={{ textAlign: 'center', marginBottom: 'var(--space-xxl)' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(36px, 5vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-1.2px',
              color: 'var(--text-ink)',
              margin: '0 0 var(--space-md) 0',
            }}
          >
            {t('products.heading')}
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(15px, 2vw, 17px)',
              lineHeight: 1.6,
              color: 'var(--text-body)',
              maxWidth: 620,
              margin: '0 auto',
            }}
          >
            {t('products.subtitle')}
          </p>
        </div>

        <div
          style={{
            background: 'var(--surface-canvas)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
          }}
        >

          <div style={{ padding: 'clamp(28px, 3.5vw, 44px)' }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-lg)', flexWrap: 'wrap', marginBottom: 'var(--space-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={readerLogo} alt="" style={{ width: 60, height: 60, objectFit: 'contain' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 600, color: 'var(--text-ink)', lineHeight: 1.2 }}>
                    {t('products.reader.name')}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--color-primary)' }}>
                    {t('products.reader.tagline')}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <a
                  href={site.reader.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    height: 44,
                    padding: '0 22px',
                    background: 'var(--gradient-brand)',
                    color: 'var(--color-on-primary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: 15,
                    fontWeight: 600,
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.2s, transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  {t('products.reader.cta')}
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                lineHeight: 1.55,
                fontWeight: 500,
                color: 'var(--text-strong)',
                margin: '0 0 var(--space-sm) 0',
              }}
            >
              {t('products.reader.problem')}
            </p>

            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                lineHeight: 1.65,
                color: 'var(--text-body)',
                margin: 0,
              }}
            >
              {t('products.reader.solution')}
            </p>

          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5"
            style={{
              borderTop: '1px solid var(--border-hairline)',
              gap: '1px',
              background: 'var(--border-hairline)',
            }}
          >
            {features.map((feature, index) => {
              const Icon = featureIcons[index]
              return (
                <div
                  key={feature.label}
                  style={{
                    background: 'var(--surface-canvas)',
                    padding: 'var(--space-lg)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 32,
                      height: 32,
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(196, 98, 58, 0.1)',
                      color: 'var(--color-primary)',
                      marginBottom: 'var(--space-xs)',
                    }}
                  >
                    {Icon ? <Icon size={16} /> : null}
                  </span>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-ink)', marginBottom: 4 }}>
                    {feature.label}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.55, color: 'var(--text-body)' }}>
                    {feature.text}
                  </div>
                </div>
              )
            })}
          </div>

        </div>

        <a
          href={requestHref}
          className="flex flex-col sm:flex-row sm:items-center"
          style={{
            marginTop: 'var(--space-lg)',
            justifyContent: 'space-between',
            gap: 'var(--space-md)',
            background: 'var(--surface-canvas)',
            border: '1px dashed var(--border-hairline)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--space-lg) var(--space-xl)',
            textDecoration: 'none',
            transition: 'border-color 0.15s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)' }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-hairline)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 44,
                height: 44,
                flexShrink: 0,
                borderRadius: 'var(--radius-pill)',
                background: 'var(--surface-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-primary)',
              }}
            >
              <Lightbulb size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 500, color: 'var(--text-ink)' }}>
                {t('products.request.title')}
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>
                {t('products.request.description')}
              </div>
            </div>
          </div>
          <span
            style={{
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              fontFamily: 'var(--font-sans)',
              fontSize: 14,
              fontWeight: 500,
              color: 'var(--color-primary)',
            }}
          >
            {t('products.request.action')}
            <ArrowUpRight size={16} />
          </span>
        </a>

      </div>
    </section>
  )
}
