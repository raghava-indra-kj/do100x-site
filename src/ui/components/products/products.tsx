import { Rows3, Eye, Sparkles, BookOpen, GraduationCap, ArrowRight, Lightbulb, ArrowUpRight } from 'lucide-react'

const reader = {
  name: 'Reader',
  href: 'https://reader.do100x.com',
  logo: '/branding/logos/reader/logo-original.png',
  image: '/branding/illustrations/reader-hero.png',
  tagline: 'Reading made easy.',
  problem:
    `Reading long things is hard. Articles, books, tutorials — you start, your eyes get tired, you hit a word you don't know, you can't fully understand, you forget what you read, and you have no idea how to use it in real life. So you just stop. It's not your fault. It's just how reading works.`,
  solution:
    `Reader solves the reading struggle by breaking long text into short, gentle parts. Tired eyes are calmed by a clean, strain-free layout. Unknown words get instant meaning. Confusing sections become clear through real-world examples and analogies. And simple take-away notes turn reading into real-life action.`,
  features: [
    { Icon: Rows3, label: 'Small, gentle parts', text: 'Long articles, books, documents — broken into bite-sized pieces that feel light and easy.' },
    { Icon: Eye, label: 'Easy on your eyes', text: 'A clean, soft layout with gentle colors that keep your eyes fresh, even after hours.' },
    { Icon: BookOpen, label: 'Instant word meanings', text: 'Tap any word to see its meaning right away, no leaving the page.' },
    { Icon: Sparkles, label: "Help when you're stuck", text: "Don't understand a section? The AI explains it with real-world examples and simple analogies." },
    { Icon: GraduationCap, label: 'Remember what you read', text: 'Short quizzes after each part lock the learning in, so it stays with you.' },
  ],
  note: 'Just open it and start reading.',
}

const developerEmail = import.meta.env.VITE_DEVELOPER_EMAIL

export function Products() {
  return (
    <section style={{ background: 'var(--surface-soft)', padding: 'clamp(40px, 6vw, 72px) 32px' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>

        {/* Section header */}
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
            Our Products
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
            We do not build apps. We build real products that solve your real problems.
          </p>
        </div>

        {/* Reader card */}
        <div
          style={{
            background: 'var(--surface-canvas)',
            border: '1px solid var(--border-hairline)',
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-card)',
          }}
        >

          {/* Card content */}
          <div style={{ padding: 'clamp(28px, 3.5vw, 44px)' }}>

            {/* Row 1: app name + CTA on same line */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-lg)', flexWrap: 'wrap', marginBottom: 'var(--space-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <img src={reader.logo} alt="" style={{ width: 60, height: 60, objectFit: 'contain' }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 20, fontWeight: 600, color: 'var(--text-ink)', lineHeight: 1.2 }}>
                    {reader.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, color: 'var(--color-primary)' }}>
                    {reader.tagline}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
                <a
                  href={reader.href}
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
                  Open Reader
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Row 2: problem — full width */}
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
              {reader.problem}
            </p>

            {/* Row 3: solution — full width */}
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                lineHeight: 1.65,
                color: 'var(--text-body)',
                margin: 0,
              }}
            >
              {reader.solution}
            </p>

          </div>


          {/* Features — bottom grid, still inside the same card */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5"
            style={{
              borderTop: '1px solid var(--border-hairline)',
              gap: '1px',
              background: 'var(--border-hairline)',
            }}
          >
            {reader.features.map(({ Icon, label, text }) => (
              <div
                key={label}
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
                  <Icon size={16} />
                </span>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--text-ink)', marginBottom: 4 }}>
                  {label}
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, lineHeight: 1.55, color: 'var(--text-body)' }}>
                  {text}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Request a tool — slim strip */}
        <a
          href={`mailto:${developerEmail}?subject=Tool%20idea%20for%20do100x`}
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
                Request a tool
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--text-body)' }}>
                Stuck on something no tool seems to solve? Tell me what would make your work easier.
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
            Share an idea
            <ArrowUpRight size={16} />
          </span>
        </a>

      </div>
    </section>
  )
}
