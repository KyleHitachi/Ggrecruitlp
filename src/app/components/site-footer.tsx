import { Reveal } from './reveal';

export function SiteFooter() {
  return (
    <footer
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        backgroundColor: 'var(--surface-dark, #1a1a1a)',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
      }}
    >
      <div
        className="mx-auto px-8"
        style={{ maxWidth: '1100px', paddingTop: 'var(--space-5xl, 128px)', paddingBottom: 'var(--space-2xl, 48px)' }}
      >
        {/* CTA — generous whitespace (Layer B) */}
        <Reveal>
          <div className="text-center" style={{ marginBottom: 'var(--space-4xl, 96px)' }}>
            <h3
              className="mb-4"
              style={{ fontWeight: 900, fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)', color: '#ffffff' }}
            >
              好きを仕事にする、その先へ。
            </h3>
            <p
              className="mb-3 mx-auto"
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '0.95rem',
                lineHeight: 1.8,
                maxWidth: 560,
              }}
            >
              まずは代表のゴードンとランチしながら話しませんか。とりあえず話を聞いてみたい、くらいで大丈夫です。
            </p>
            <p
              style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: 'var(--space-3xl, 64px)' }}
            >
              応募方法の詳細は現在準備中です。公開まで今しばらくお待ちください。
            </p>
            <a
              href="#応募の流れ"
              className="inline-block px-8 py-3.5 rounded-full text-white transition-all"
              style={{
                background: 'var(--brand-gradient-subtle, linear-gradient(135deg, #e53e3e 0%, #f56565 100%))',
                fontWeight: 700,
                fontSize: '0.92rem',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-brand, 0 8px 24px rgba(229,0,32,0.18))';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              応募方法を確認する
            </a>
          </div>
        </Reveal>

        {/* Company info */}
        <div className="text-center mb-6">
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.8 }}>
            株式会社ツーサイドアップ / GOOD GAME
            <br />
            TCG専門店 GOOD GAME 採用情報
          </p>
        </div>

        {/* Copyright */}
        <div
          className="text-center pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>
            &copy; Two Side Up / GOOD GAME
          </p>
        </div>
      </div>
    </footer>
  );
}
