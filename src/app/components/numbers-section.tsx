import { Reveal } from './reveal';

const STATS = [
  { value: '1ヶ月', label: '最短社員登用' },
  { value: '25〜50万円', label: '正社員月給レンジ' },
  { value: '50万点+', label: '通販商品データベース' },
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
        style={{ maxWidth: '1100px', paddingTop: 'var(--space-3xl, 64px)', paddingBottom: 'var(--space-3xl, 64px)' }}
      >
        <Reveal cascade>
          <div className="grid grid-cols-1 sm:grid-cols-3 relative gap-8 sm:gap-0">
            {STATS.map((stat, i) => (
              <div key={stat.label} className="relative flex flex-col items-center text-center px-4">
                {i > 0 && (
                  <div
                    className="absolute left-0 top-1/2 -translate-y-1/2 hidden sm:block"
                    style={{ width: '1px', height: '48px', backgroundColor: 'var(--ref-neutral-200, #e0e0e8)' }}
                  />
                )}
                <span
                  style={{
                    fontSize: '48px',
                    fontWeight: 900,
                    lineHeight: 1.1,
                    fontFamily: "'Inter', 'Zen Kaku Gothic New', sans-serif",
                    background: 'var(--brand-gradient, linear-gradient(135deg, #e53e3e 0%, #f6993f 100%))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {stat.value}
                </span>
                <span style={{ fontSize: '14px', color: 'var(--text-muted, #6e6e82)', marginTop: 'var(--space-sm, 8px)' }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
