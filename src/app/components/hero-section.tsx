import { Reveal } from './reveal';

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #fff5f5 100%)',
        }}
      />

      {/* Diamond pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 35px, #e53e3e 35px, #e53e3e 36px),
            repeating-linear-gradient(-45deg, transparent, transparent 35px, #e53e3e 35px, #e53e3e 36px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Mountain silhouette decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48">
        <svg
          viewBox="0 0 1440 192"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,192 L0,96 L240,32 L480,64 L720,16 L960,48 L1200,80 L1440,40 L1440,192 Z"
            fill="rgba(229, 62, 62, 0.04)"
          />
          <path
            d="M0,192 L0,128 L360,72 L600,112 L840,56 L1080,96 L1320,120 L1440,88 L1440,192 Z"
            fill="rgba(229, 62, 62, 0.05)"
          />
        </svg>
      </div>

      {/* Content */}
      <div
        className="relative mx-auto px-8 flex items-center gap-12 flex-wrap"
        style={{
          maxWidth: '1100px',
          paddingTop: 'var(--space-5xl, 128px)',
          paddingBottom: 'var(--space-4xl, 96px)',
        }}
      >
        {/* Left column */}
        <div className="flex-1" style={{ minWidth: 320 }}>
          {/* Frosted glass scrim for readability (Layer E) */}
          <Reveal>
            {/* Label Badge */}
            <div className="mb-6">
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  color: 'var(--brand-primary, #e50020)',
                  border: '1.5px solid var(--brand-primary, #e50020)',
                  backgroundColor: 'var(--brand-surface, rgba(229,0,32,0.04))',
                }}
              >
                TWO SIDE UP / GOOD GAME
              </span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            {/* Heading */}
            <h1
              className="mb-0 leading-tight whitespace-nowrap max-[640px]:whitespace-normal"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 900,
                color: 'var(--text-primary, #0d0d12)',
              }}
            >
              好きだけじゃ終われない人へ。
            </h1>
            <p
              className="mb-6"
              style={{
                fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: 'var(--brand-primary, #e50020)',
                marginTop: 'var(--space-sm, 8px)',
              }}
            >
              GOOD GAMEは、まだ始まったばかりだ。
            </p>
          </Reveal>

          <Reveal delay={160}>
            {/* Description */}
            <p
              className="mb-8 leading-relaxed"
              style={{
                color: 'var(--text-secondary, #3a3a4a)',
                maxWidth: '680px',
                fontSize: '1.05rem',
                lineHeight: '1.8',
              }}
            >
              GOOD GAMEは、流山おおたかの森を拠点にMTG・ポケカ・ロルカナなどを扱うTCG専門店です。母体はWeb・EC運用のプロ集団。肩書きより手を挙げる人が評価される会社です。店舗と通販をひとつのチームで進化させながら、一緒に成長できる仲間を探しています。
            </p>
          </Reveal>

          <Reveal delay={240}>
            {/* Note Box */}
            <div
              className="mb-8 p-5 rounded"
              style={{
                maxWidth: '680px',
                backgroundColor: 'var(--surface-subtle, #fafafa)',
                borderLeft: '4px solid var(--brand-primary, #e50020)',
              }}
            >
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary, #3a3a4a)' }}>
                秋葉原をはじめ、横浜・大阪・福岡への出店構想も進行中。入社1年で役員候補に抜擢された実績もあります。
              </p>
            </div>
          </Reveal>

          <Reveal delay={320}>
            {/* Buttons — extra whitespace above (Layer B: space-3xl) */}
            <div className="flex flex-wrap gap-4" style={{ marginTop: 'var(--space-3xl, 64px)', marginBottom: 'var(--space-xl, 32px)' }}>
              <a
                href="#募集職種"
                className="px-8 py-3.5 rounded-full text-white inline-block transition-all"
                style={{
                  background: 'var(--brand-gradient-subtle, linear-gradient(135deg, #e53e3e 0%, #f56565 100%))',
                  fontSize: '1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-brand, 0 8px 24px rgba(229,0,32,0.18))';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                募集職種を見る
              </a>
              <a
                href="#応募の流れ"
                className="px-8 py-3.5 rounded-full inline-block transition-all"
                style={{
                  color: 'var(--brand-primary, #e50020)',
                  border: '2px solid var(--brand-primary, #e50020)',
                  backgroundColor: 'transparent',
                  fontSize: '1rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--brand-surface, rgba(229,0,32,0.04))';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                応募の流れ
              </a>
            </div>

            {/* Divider */}
            <div
              className="h-1 rounded-full"
              style={{
                width: '60px',
                background: 'var(--brand-gradient-subtle, linear-gradient(90deg, #e53e3e 0%, #f56565 100%))',
              }}
            />
          </Reveal>
        </div>

        {/* Right column - Store photo placeholder */}
        <Reveal delay={200}>
          <div
            className="shrink-0 flex flex-col items-center justify-center gap-3"
            style={{
              width: 480,
              height: 320,
              borderRadius: 'var(--card-radius, 24px)',
              backgroundColor: 'var(--surface-muted, #f2f2f5)',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#b0b0ba"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
              <circle cx="12" cy="13" r="4" />
            </svg>
            <span style={{ color: '#b0b0ba', fontSize: '0.82rem', fontWeight: 600 }}>店舗写真</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
