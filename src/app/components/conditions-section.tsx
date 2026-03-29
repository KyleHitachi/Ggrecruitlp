import { Reveal } from './reveal';

const CONDITIONS = [
  {
    label: '給与',
    value:
      '正社員は月給25万円〜50万円（前職年収を考慮して決定）。賞与年2回（直近実績: 1.3〜1.5ヶ月分）。アルバイトは時給1,300円〜で、経験・実績に応じてスピード昇給。意欲と成果次第で、入社1年で大幅に給与を上げた実績もあります。',
  },
  {
    label: '勤務地',
    value:
      '雇入れ直後は流山おおたかの森のGOOD GAME店舗または本社（流山おおたかの森駅 西口徒歩30秒）。変更の範囲は会社の定める拠点で、秋葉原など今後の新規拠点を含みます。',
  },
  {
    label: '業務内容',
    value:
      '雇入れ直後は各職種の募集要項に記載の業務。変更の範囲は会社の定める業務で、本人の適性や希望に応じて相談のうえ決定します。',
  },
  {
    label: '店頭取り扱いタイトル',
    value:
      'MTG・ポケモンカードゲーム・FaB・ロルカナ・ワンピースカードゲーム・ガンダムカードゲーム・デュエルマスターズ・ホロライブカードゲーム・ヴァンガード',
  },
  {
    label: '通販取り扱いタイトル',
    value: 'MTG・FaB・ロルカナ・ポケモンカードゲーム',
  },
  {
    label: '手当',
    value:
      '交通費全額支給。催事出勤手当あり（プレイヤーズコンベンション等のイベント出展時に別途支給）。',
  },
  {
    label: '福利厚生',
    value: '社会保険完備、キャリアアップ支援（社員登用制度あり）。',
  },
];

export function ConditionsSection() {
  return (
    <section
      id="勤務条件"
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
              Benefits & Conditions
            </p>
            <h2
              className="mb-3"
              style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary, #0d0d12)' }}
            >
              勤務条件・福利厚生
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

        <Reveal>
          <div
            style={{
              backgroundColor: 'var(--surface-subtle, #fafafa)',
              borderRadius: 'var(--card-radius, 24px)',
              border: '1px solid rgba(0,0,0,0.06)',
              overflow: 'hidden',
            }}
          >
            {CONDITIONS.map((c, i) => (
              <div
                key={c.label}
                className="flex flex-col sm:flex-row gap-2 sm:gap-8"
                style={{
                  padding: 'var(--space-lg, 24px) var(--card-padding, 32px)',
                  borderBottom:
                    i < CONDITIONS.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                }}
              >
                <div
                  className="shrink-0"
                  style={{
                    width: 160,
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    color: 'var(--text-primary, #1a1a1a)',
                    paddingTop: 2,
                  }}
                >
                  {c.label}
                </div>
                <div
                  className="flex-1"
                  style={{ color: 'var(--text-secondary, #4a4a5a)', fontSize: '0.9rem', lineHeight: 1.85 }}
                >
                  {c.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Access Map Placeholder */}
        <Reveal delay={200}>
          <div
            className="relative flex flex-col items-center justify-center w-full overflow-hidden"
            style={{
              height: 280,
              borderRadius: 16,
              backgroundColor: '#eef0f3',
              marginTop: 'var(--space-xl, 32px)',
            }}
          >
            {/* Faux map grid texture */}
            <div
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage:
                  'linear-gradient(0deg, #c0c4cc 1px, transparent 1px), linear-gradient(90deg, #c0c4cc 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            <div className="relative flex flex-col items-center gap-2 text-center px-6">
              {/* Pin icon */}
              <div
                className="flex items-center justify-center mb-1"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: 'var(--brand-gradient, linear-gradient(135deg, #e53e3e 0%, #f6993f 100%))',
                  boxShadow: '0 4px 12px rgba(229,62,62,0.3)',
                }}
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>

              <span style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary, #1a1a1a)' }}>
                GOOD GAME 流山おおたかの森
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary, #4a4a5a)', lineHeight: 1.6 }}>
                千葉県流山市おおたかの森西1-2-2 SAKURA TERRACE 3F
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary, #4a4a5a)' }}>
                流山おおたかの森駅 西口徒歩30秒
              </span>

              <span className="mt-3" style={{ fontSize: '0.72rem', color: '#a0a0aa' }}>
                ※実装時にGoogle Maps埋め込み
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}