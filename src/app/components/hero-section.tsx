import { Reveal } from './reveal';
import { ImageWithFallback } from './figma/ImageWithFallback';

const HERO_IMG = 'https://images.unsplash.com/photo-1701759285696-1452708c8659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWN0aWJsZSUyMGNhcmQlMjBzaG9wJTIwZGlzcGxheSUyMGNhc2UlMjByZXRhaWx8ZW58MXx8fHwxNzc0NTMxNTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

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
      {/* Background — warm off-white, no diamond pattern */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #faf8f6 60%, #f5f0ec 100%)',
        }}
      />

      {/* Subtle accent line at top */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: 3,
          background: 'linear-gradient(90deg, var(--brand-primary, #e50020) 0%, var(--accent-secondary, #FF6B3D) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="relative mx-auto px-8"
        style={{
          maxWidth: '1100px',
          paddingTop: 'var(--space-5xl, 128px)',
          paddingBottom: 'var(--space-4xl, 96px)',
        }}
      >
        <div className="flex items-start gap-20 flex-wrap lg:flex-nowrap">
          {/* Left column — copy */}
          <div className="flex-1" style={{ minWidth: 320 }}>
            <Reveal>
              {/* Context badge — shop-specific */}
              <div className="mb-6">
                <span
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm"
                  style={{
                    color: 'var(--brand-primary, #e50020)',
                    backgroundColor: 'rgba(229, 0, 32, 0.05)',
                    border: '1px solid rgba(229, 0, 32, 0.12)',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                  }}
                >
                  <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>●</span>
                  TCG専門店 GOOD GAME — 採用情報
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              {/* Main heading — TCG industry specific */}
              <h1
                className="leading-tight max-[640px]:whitespace-normal"
                style={{
                  fontSize: 'clamp(2.4rem, 4.8vw, 3.6rem)',
                  fontWeight: 900,
                  color: 'var(--text-primary, #0d0d12)',
                  marginBottom: 'var(--space-md, 16px)',
                  letterSpacing: '-0.03em',
                }}
              >
                好きなカードで、
                <br />
                ちゃんと働く。
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1.15rem, 2.3vw, 1.65rem)',
                  fontWeight: 700,
                  color: 'var(--brand-primary, #e50020)',
                  marginBottom: 'var(--space-xl, 32px)',
                  lineHeight: 1.4,
                }}
              >
                遊ぶ側から、支える側へ。
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p
                className="leading-relaxed"
                style={{
                  color: 'var(--text-secondary, #3a3a4a)',
                  maxWidth: '580px',
                  fontSize: '1rem',
                  lineHeight: '1.85',
                  marginBottom: 'var(--space-xl, 32px)',
                }}
              >
                GOOD GAMEは流山おおたかの森のTCG専門店。MTG・ポケモンカードゲーム・FaB・ロルカナ・ワンピースカードゲーム・ガンダムカードゲーム・デュエルマスターズ・ホロライブカードゲーム・ヴァンガードの販売・買取・大会運営・EC通販を一手に担っています。母体はWeb・EC運用のプロ集団。肩書きより手を挙げる人が評価される会社です。
              </p>
            </Reveal>

            <Reveal delay={240}>
              {/* Note — concrete, not abstract */}
              <div
                className="p-4 mb-10"
                style={{
                  maxWidth: '580px',
                  backgroundColor: '#f7f6f4',
                  borderLeft: '3px solid var(--brand-primary, #e50020)',
                  borderRadius: '0 8px 8px 0',
                }}
              >
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary, #3a3a4a)' }}>
                  秋葉原・横浜・大阪・福岡への出店構想が進行中。入社1年で役員候補に抜擢された実績あり。
                </p>
              </div>
            </Reveal>

            <Reveal delay={320}>
              {/* CTAs — clear hierarchy: primary = カジュアル面談, secondary = 募集職種 */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#応募の流れ"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white transition-all"
                  style={{
                    background: 'var(--brand-primary, #e50020)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(229, 0, 32, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(229, 0, 32, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(229, 0, 32, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  まず話を聞いてみる
                </a>
                <a
                  href="#募集職種"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-all"
                  style={{
                    color: 'var(--text-secondary, #3a3a4a)',
                    border: '1px solid rgba(0,0,0,0.15)',
                    backgroundColor: 'transparent',
                    fontSize: '0.95rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.03)';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                  }}
                >
                  募集職種を見る
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right column — real store photo */}
          <Reveal delay={200}>
            <div className="shrink-0 relative" style={{ width: 480 }}>
              <div
                className="overflow-hidden"
                style={{
                  borderRadius: '20px',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.04)',
                }}
              >
                <ImageWithFallback
                  src={HERO_IMG}
                  alt="GOOD GAME 店舗のカードディスプレイ"
                  className="w-full object-cover"
                  style={{ height: 360, display: 'block' }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}