export function Hero() {
  return (
    <section
      style={{
        padding: 'clamp(28px, 4vw, 48px) 32px',
        background: 'var(--surface-canvas)',
      }}
    >
      <div
        className="flex flex-col md:flex-row items-center"
        style={{ maxWidth: 'var(--container-max)', margin: '0 auto', gap: 'clamp(24px, 5vw, 56px)' }}
      >
        {/* Text */}
        <div className="text-center md:text-left" style={{ flex: 1 }}>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontWeight: 400,
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.12,
              letterSpacing: '-1.2px',
              color: 'var(--text-ink)',
              margin: 0,
            }}
          >
            Do everything{' '}
            <span style={{ color: 'var(--color-primary)' }}>100 times better</span>, with our simple AI-powered tools.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(16px, 2.2vw, 18px)',
              lineHeight: 1.65,
              color: 'var(--text-body)',
              margin: 'var(--space-md) 0 0 0',
            }}
          >
            A growing collection of tools for students, working professionals, and entrepreneurs to tackle real problems and do everything 100 times better.
          </p>
        </div>

        {/* Illustration */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img
            src="/branding/illustrations/hero.png"
            alt=""
            style={{ width: '100%', maxWidth: 460, height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}
