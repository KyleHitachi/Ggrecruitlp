import { useState } from 'react';
import { InlineCtaBanner } from './inline-cta-banner';
import { Reveal } from './reveal';

interface JobCard {
  title: string;
  description: string;
  items: string[];
  imageLabel: string;
}

const CARDS: JobCard[] = [
  {
    title: '店舗の仕事',
    imageLabel: '店舗業務イメージ',
    description:
      'お客様の「楽しい」が生まれる最前線。接客・レジ対応からスタートし、買取査定、商品管理・売場づくり、大会・イベント運営まで、現場のあらゆる業務を担います。MTGやポケカのトーナメントが盛り上がる瞬間を自分でつくれるのが、この仕事の醍醐味。オリパや福袋の企画など、商品づくりに関わるチャンスもあります。',
    items: [
      'レジ・接客 — お客様のゲーム体験を直接サポート',
      '買取査定 — 価格確認・在庫調整',
      '商品管理・売場づくり — 見やすく買いやすいレイアウト設計',
      'イベント運営 — 公式大会・自主大会・プレイスペース管理',
      '店舗美化 — 清潔で居心地のいい空間の維持',
    ],
  },
  {
    title: '通販の仕事',
    imageLabel: '通販業務イメージ',
    description:
      '50万点を超える商品データベースの運営から、ピッキング、検品、梱包、発送まで。画面の向こうにいるお客様に「ここで買ってよかった」と思ってもらえるかは、通販チームの仕事の精度にかかっています。カスタマーサポートや商品データの整備など、表には見えにくいけれど事業の根幹を支えるポジションです。',
    items: [
      '受注処理 — 注文確認・ステータス管理',
      'ピッキング・検品・梱包 — 正確さが品質を左右する',
      '商品データ整備 — 50万点超の在庫データを最新状態に保つ',
      'カスタマーサポート — 問い合わせ対応・お客様フォロー',
    ],
  },
  {
    title: 'デジタル・メディア',
    imageLabel: 'デジタル業務イメージ',
    description:
      '母体のツーサイドアップが持つWeb・EC運用の知見を活かし、EC基盤の運用改善から業務フローの効率化まで、デジタル面でGOOD GAMEを支えます。また、店舗プレイスペースでの再開を予定しているライブ配信「GOOD GAME BREAK」への出演も、意欲があれば前向きに検討します。',
    items: [
      'EC基盤運用（通販管理画面設定・システム改善・自動化）',
      '業務フロー改善（ムダをなくして生産性を上げる仕組みづくり）',
      'GOOD GAME BREAK（配信）出演の可能性（意欲次第で参加可）',
    ],
  },
];

export function JobIntroduction() {
  return (
    <section
      id="仕事紹介"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        backgroundColor: 'var(--surface-subtle, #fafafa)',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
      }}
    >
      <div
        className="mx-auto px-8"
        style={{ maxWidth: '1100px', paddingTop: 'var(--space-4xl, 96px)', paddingBottom: 'var(--space-4xl, 96px)' }}
      >
        {/* Section Header */}
        <Reveal>
          <div style={{ marginBottom: 'var(--space-xl, 32px)' }}>
            <h2
              className="mb-3"
              style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary, #1a1a1a)' }}
            >
              仕事紹介
            </h2>
            <div
              className="rounded-full mb-5"
              style={{
                width: 40,
                height: 4,
                background: 'var(--brand-gradient-subtle, linear-gradient(90deg, #e53e3e 0%, #f56565 100%))',
              }}
            />
            <p style={{ color: 'var(--text-muted, #6e6e82)', fontSize: '1rem', lineHeight: 1.8 }}>
              GOOD GAMEでは、店舗・通販・デジタルの3つの領域で日々仕事が動いています。それぞれの現場の具体像をお伝えします。
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <div className="flex flex-col" style={{ gap: 'var(--space-xl, 32px)' }}>
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <Card card={card} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={300}>
          <div style={{ marginTop: 'var(--space-xl, 32px)' }}>
            <InlineCtaBanner />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Card({ card }: { card: JobCard }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden transition-all"
      style={{
        backgroundColor: 'var(--surface-default, #ffffff)',
        borderRadius: 'var(--card-radius-lg, 32px)',
        border: '1px solid rgba(0,0,0,0.06)',
        padding: 0,
        boxShadow: hovered
          ? 'var(--shadow-card-hover, 0 12px 32px rgba(0,0,0,0.08))'
          : 'var(--shadow-md, 0 8px 32px rgba(0,0,0,0.06))',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transitionDuration: '300ms',
        transitionTimingFunction: 'ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image placeholder */}
      <div
        className="flex flex-col items-center justify-center gap-2 w-full"
        style={{
          height: 180,
          backgroundColor: 'var(--surface-muted, #f2f2f5)',
          borderRadius: '16px 16px 0 0',
        }}
      >
        <svg
          width="28"
          height="28"
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
        <span style={{ color: '#b0b0ba', fontSize: '0.78rem', fontWeight: 600 }}>{card.imageLabel}</span>
      </div>

      <div style={{ padding: 'var(--card-padding, 32px) 44px 40px' }}>
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 transition-opacity"
          style={{
            height: 4,
            background: 'var(--brand-gradient-subtle, linear-gradient(90deg, #e53e3e 0%, #f56565 100%))',
            opacity: hovered ? 1 : 0,
            transitionDuration: '300ms',
          }}
        />

        {/* Title with red left border */}
        <h3
          className="mb-4"
          style={{
            borderLeft: '4px solid var(--brand-primary, #e50020)',
            paddingLeft: 'var(--space-md, 16px)',
            fontWeight: 900,
            fontSize: '1.25rem',
            color: 'var(--text-primary, #1a1a1a)',
          }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="mb-5"
          style={{ color: 'var(--text-secondary, #3a3a4a)', fontSize: '0.95rem', lineHeight: 1.85, maxWidth: 720 }}
        >
          {card.description}
        </p>

        {/* Bullet list */}
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {card.items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2"
              style={{ color: 'var(--text-secondary, #3a3a4a)', fontSize: '0.9rem' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: 'var(--brand-primary, #e50020)',
                  flexShrink: 0,
                }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
