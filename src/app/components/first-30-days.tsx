import { Reveal } from './reveal';

const STEPS = [
  {
    label: 'WEEK 1',
    title: '1週目',
    items: [
      '業務フローと社内ルールをインプット',
      '先輩スタッフに付きながら基本オペレーションを練習',
      '担当メンバーと名前で呼び合える関係をつくる',
    ],
  },
  {
    label: 'WEEK 2-3',
    title: '2〜3週目',
    items: [
      '日次業務を自分のペースで回せるようになる',
      '品質とスピードのバランスを安定させる',
      '「こうしたら良くなる」を小さくてもいいので1つ実行する',
    ],
  },
  {
    label: 'WEEK 4',
    title: '4週目',
    items: [
      '担当範囲の業務を一通り完結できる状態へ',
      '1ヶ月を振り返り、次月の目標を一緒に設定',
      '面談で「次に何に挑戦したいか」を話す',
    ],
  },
];

export function First30Days() {
  return (
    <section
      id="入社後30日"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        backgroundColor: 'var(--surface-default, #ffffff)',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
      }}
    >
      <div
        className="mx-auto px-8"
        style={{ maxWidth: '1100px', paddingTop: 'var(--space-4xl, 96px)', paddingBottom: 'var(--space-4xl, 96px)' }}
      >
        <Reveal>
          <div style={{ marginBottom: 'var(--space-xl, 32px)' }}>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted, #6e6e82)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif",
                marginBottom: 'var(--space-sm, 8px)',
              }}
            >
              First 30 Days
            </p>
            <h2
              className="mb-3"
              style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary, #0d0d12)' }}
            >
              入社後最初の30日
            </h2>
            <div
              className="mb-5"
              style={{
                width: 40,
                height: 3,
                backgroundColor: 'var(--brand-primary, #e50020)',
                borderRadius: 1,
              }}
            />
          </div>
        </Reveal>

        <Reveal cascade>
          <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 'var(--space-xl, 32px)' }}>
            {STEPS.map((step, i) => (
              <div
                key={step.label}
                className="relative transition-all hover:-translate-y-1"
                style={{
                  backgroundColor: 'var(--surface-subtle, #fafafa)',
                  borderRadius: 'var(--card-radius, 24px)',
                  border: '1px solid rgba(0,0,0,0.06)',
                  padding: '36px var(--card-padding, 32px)',
                  boxShadow: 'var(--shadow-sm)',
                  transitionDuration: '0.3s',
                }}
              >
                {/* Step badge */}
                <div
                  className="inline-flex items-center px-4 py-1.5 rounded-full mb-5"
                  style={{
                    background: 'var(--brand-gradient-subtle, linear-gradient(135deg, #e53e3e 0%, #f56565 100%))',
                    color: '#fff',
                    fontSize: '0.72rem',
                    fontWeight: 900,
                    letterSpacing: '0.05em',
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {step.label}
                </div>

                <h3
                  className="mb-4"
                  style={{ fontWeight: 900, fontSize: '1.15rem', color: 'var(--text-primary, #1a1a1a)' }}
                >
                  {step.title}
                </h3>

                <ul className="flex flex-col gap-3">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3"
                      style={{ color: 'var(--text-secondary, #4a4a5a)', fontSize: '0.9rem', lineHeight: 1.75 }}
                    >
                      <span
                        className="shrink-0 mt-2"
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          backgroundColor: 'var(--brand-primary, #e50020)',
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Connector line for non-last items (desktop) */}
                {i < STEPS.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5"
                    style={{ backgroundColor: 'rgba(229,62,62,0.2)' }}
                  />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}