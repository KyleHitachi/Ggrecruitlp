import { Reveal } from './reveal';

export function SiteFooter() {
  return (
    <footer
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        backgroundColor: '#111118',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
      }}
    >
      <div
        className="mx-auto px-8"
        style={{ maxWidth: '1100px', paddingTop: 'var(--space-5xl, 128px)', paddingBottom: 'var(--space-2xl, 48px)' }}
      >
        {/* CTA */}
        <Reveal>
          <div className="text-center" style={{ marginBottom: 'var(--space-4xl, 96px)' }}>
            <h3
              style={{ fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: '#ffffff', marginBottom: 'var(--space-md, 16px)' }}
            >
              好きなカードで、ちゃんと働く。
            </h3>
            <p
              className="mx-auto"
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 'var(--space-xl, 32px)',
              }}
            >
              まずは代表のゴードンとランチしながら話しませんか。
              <br />
              とりあえず話を聞いてみたい、くらいで大丈夫です。
            </p>

            {/* Anxiety-reducing checklist */}
            <div
              className="mx-auto flex flex-col gap-2 text-left w-fit"
              style={{ marginBottom: 'var(--space-xl, 32px)' }}
            >
              {[
                'ランチ代は会社が負担します',
                'アルバイト・未経験の方も歓迎',
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3"
                  style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)' }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 18,
                      height: 18,
                      borderRadius: 4,
                      backgroundColor: 'rgba(229, 0, 32, 0.2)',
                      color: '#ff6b6b',
                      fontSize: '0.65rem',
                      fontWeight: 900,
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </span>
                  {text}
                </div>
              ))}
            </div>

            {/* CTA buttons — clear hierarchy */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <a
                href="#応募の流れ"
                className="inline-flex items-center px-8 py-3.5 rounded-lg text-white transition-all"
                style={{
                  background: 'var(--brand-primary, #e50020)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 16px rgba(229, 0, 32, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(229, 0, 32, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(229, 0, 32, 0.3)';
                }}
              >
                まず話を聞いてみる
              </a>
              <a
                href="#募集職種"
                className="inline-flex items-center px-8 py-3.5 rounded-lg transition-all"
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                募集職種を見る
              </a>
            </div>
          </div>
        </Reveal>

        {/* Company info */}
        <div className="text-center mb-6">
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.82rem', lineHeight: 1.8 }}>
            株式会社ツーサイドアップ / GOOD GAME
            <br />
            TCG専門店 GOOD GAME 採用情報
          </p>
        </div>

        {/* Copyright */}
        <div
          className="text-center pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem' }}>
            &copy; Two Side Up / GOOD GAME
          </p>
        </div>
      </div>
    </footer>
  );
}