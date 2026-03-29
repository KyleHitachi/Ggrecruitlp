import { InlineCtaBanner } from './inline-cta-banner';
import { Reveal } from './reveal';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface JobCard {
  title: string;
  tag: string;
  tagColor: string;
  description: string;
  items: string[];
  photo: string;
  photoAlt: string;
  accentColor: string;
}

const CARDS: JobCard[] = [
  {
    title: '店舗の仕事',
    tag: '接客・査定・イベント運営',
    tagColor: '#e50020',
    accentColor: '#e50020',
    photo: 'https://images.unsplash.com/photo-1764795849833-6e9d6e399a77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzdG9yZSUyMGVtcGxveWVlJTIwY3VzdG9tZXIlMjBzZXJ2aWNlJTIwY291bnRlcnxlbnwxfHx8fDE3NzQ1MzE1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    photoAlt: '[実店舗での接客風景]',
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
    tag: '受注・検品・発送・データ管理',
    tagColor: '#2563eb',
    accentColor: '#2563eb',
    photo: 'https://images.unsplash.com/photo-1609559376553-930b6209cc4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjB3b3JrZXIlMjBwYWNraW5nJTIwc2hpcHBpbmclMjBib3hlc3xlbnwxfHx8fDE3NzQ1MzE1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    photoAlt: '[通販の梱包・発送作業風景]',
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
    tag: 'EC基盤・業務改善・配信',
    tagColor: '#7c3aed',
    accentColor: '#7c3aed',
    photo: 'https://images.unsplash.com/photo-1770910278198-eed8b040554b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBzaGVsdmVzJTIwb3JnYW5pemVkfGVufDF8fHx8MTc3NDUzMTU0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    photoAlt: '[EC運用・デジタル業務の作業環境]',
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
              Work at GOOD GAME
            </p>
            <h2
              className="mb-3"
              style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary, #0d0d12)' }}
            >
              仕事紹介
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
            <p style={{ color: 'var(--text-muted, #6e6e82)', fontSize: '0.95rem', lineHeight: 1.8, maxWidth: 640 }}>
              店舗・通販・デジタルの3つの現場。それぞれ求められるスキルも、やりがいも異なります。
            </p>
          </div>
        </Reveal>

        {/* Cards — each visually distinct by accent color */}
        <div className="flex flex-col" style={{ gap: 'var(--space-lg, 24px)' }}>
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <JobCardComponent card={card} />
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

function JobCardComponent({ card }: { card: JobCard }) {
  return (
    <div
      className="overflow-hidden transition-all"
      style={{
        backgroundColor: 'var(--surface-default, #ffffff)',
        borderRadius: 16,
        border: '1px solid rgba(0,0,0,0.07)',
        transitionDuration: '0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Photo strip */}
      <div className="relative w-full" style={{ height: 200 }}>
        <ImageWithFallback
          src={card.photo}
          alt={card.photoAlt}
          className="w-full h-full object-cover"
          style={{ display: 'block' }}
        />
        {/* Dark overlay for readability */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.5) 100%)' }}
        />
        {/* Category tag — shop-style label */}
        <div
          className="absolute top-4 left-4 flex items-center gap-2"
        >
          <span
            className="px-3 py-1 rounded"
            style={{
              backgroundColor: card.tagColor,
              color: '#fff',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            {card.tag}
          </span>
        </div>
        {/* Title overlay at bottom of photo */}
        <div className="absolute bottom-4 left-5 right-5">
          <h3
            style={{
              fontWeight: 900,
              fontSize: '1.3rem',
              color: '#fff',
              textShadow: '0 1px 4px rgba(0,0,0,0.3)',
            }}
          >
            {card.title}
          </h3>
        </div>
      </div>

      <div style={{ padding: '24px 28px 28px' }}>
        {/* Description */}
        <p
          className="mb-5"
          style={{ color: 'var(--text-secondary, #3a3a4a)', fontSize: '0.92rem', lineHeight: 1.85, maxWidth: 720 }}
        >
          {card.description}
        </p>

        {/* Bullet list — with accent-colored dots */}
        <ul className="flex flex-col gap-2">
          {card.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3"
              style={{ color: 'var(--text-secondary, #3a3a4a)', fontSize: '0.88rem', lineHeight: 1.7 }}
            >
              <span
                className="shrink-0 mt-2"
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  backgroundColor: card.accentColor,
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
