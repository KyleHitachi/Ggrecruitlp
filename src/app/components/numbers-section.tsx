import { Reveal } from './reveal';

const STATS = [
  {
    value: '1ヶ月',
    label: '最短社員登用',
    note: 'アルバイトからの登用実績',
  },
  {
    value: '50万点+',
    label: '通販商品データベース',
    note: 'Shopify基盤で運用中',
  },
  {
    value: '9',
    label: '取り扱いタイトル',
    note: 'MTG / ポケカ / ロルカナ 他',
  },
  {
    value: '30秒',
    label: '駅徒歩アクセス',
    note: '流山おおたかの森駅 西口',
  },
];

export function NumbersSection() {
  return (
    <section
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        backgroundColor: 'var(--surface-default, #ffffff)',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
      }}
    >
      <div
        className="mx-auto px-8"
        style={{
          maxWidth: '1100px',
          paddingTop: 'var(--space-2xl, 48px)',
          paddingBottom: 'var(--space-2xl, 48px)',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <Reveal cascade>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className="relative flex flex-col items-center text-center px-4 py-3"
              >
                {/* Vertical divider (desktop) */}
                {i > 0 && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block"
                    style={{ width: '1px', height: '48px', backgroundColor: 'rgba(0,0,0,0.08)' }}
                  />
                )}
                <span
                  style={{
                    fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    fontFamily: "'Inter', 'Zen Kaku Gothic New', sans-serif",
                    color: 'var(--text-primary, #0d0d12)',
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: 'var(--text-secondary, #3a3a4a)',
                    marginTop: 'var(--space-sm, 8px)',
                  }}
                >
                  {stat.label}
                </span>
                <span
                  style={{
                    fontSize: '0.7rem',
                    color: 'var(--text-muted, #6e6e82)',
                    marginTop: 'var(--space-xs, 4px)',
                  }}
                >
                  {stat.note}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
