import { useState, useRef, useEffect } from 'react';
import { InlineCtaBanner } from './inline-cta-banner';
import { Reveal } from './reveal';

interface DetailRow {
  label: string;
  value: string;
}

interface Position {
  title: string;
  badge: string;
  badgeGradient: string;
  description: string;
  salary: string;
  details: {
    overview: string;
    tasks: string[];
    requirements: string[];
    welcome?: string[];
    conditions: DetailRow[];
  };
}

interface Category {
  title: string;
  positions: Position[];
}

const CATEGORIES: Category[] = [
  {
    title: '店舗運営',
    positions: [
      {
        title: '店舗社員',
        badge: '正社員',
        badgeGradient: 'linear-gradient(135deg, #e53e3e 0%, #f56565 100%)',
        description: '接客・買取査定・売場づくり・大会運営・オリパ企画を一手に。',
        salary: '月給25万円〜',
        details: {
          overview:
            'お客様の「楽しい」が生まれる最前線。接客・レジ対応からスタートし、買取査定、商品管理・売場づくり、大会・イベント運営まで、現場のあらゆる業務を担います。MTGやポケカのトーナメントが盛り上がる瞬間を自分でつくれるのが、この仕事の醍醐味。オリパや福袋の企画など、商品づくりに関わるチャンスもあります。',
          tasks: [
            'レジ・接客 — お客様のゲーム体験を直接サポート',
            '買取査定 — 価格確認・在庫調整',
            '商品管理・売場づくり — 見やすく買いやすいレイアウト設計',
            'イベント運営 — 公式大会・自主大会・プレイスペース管理',
            '店舗美化 — 清潔で居心地のいい空間の維持',
            'オリパ・福袋の企画・作成',
          ],
          requirements: [
            'TCG（トレーディングカードゲーム）が好きな方',
            '基本的なPC操作ができる方',
            '接客・販売の仕事に興味がある方',
          ],
          welcome: [
            'MTG・ポケカ・ロルカナなどのプレイ経験がある方',
            '小売・販売業務の経験がある方',
            'イベント企画・運営に興味がある方',
          ],
          conditions: [
            { label: '雇用形態', value: '正社員' },
            { label: '給与', value: '月給25万円〜（前職年収を考慮して決定）' },
            { label: '賞与', value: '年2回（直近実績: 1.3〜1.5ヶ月分）' },
            { label: '勤務地', value: '流山おおたかの森 GOOD GAME店舗（流山おおたかの森駅 西口徒歩30秒）' },
            { label: '勤務時間', value: 'シフト制（店舗営業時間に準ずる）' },
            { label: '手当', value: '交通費全額支給、催事出勤手当あり' },
            { label: '福利厚生', value: '社会保険完備、キャリアアップ支援' },
            { label: '取り扱いタイトル', value: 'ポケモンカードゲーム・デュエルマスターズ・MTG・ロルカナ・ワンピースカードゲーム・FaB・ヴァンガード・ホロライブカードゲーム・ガンダムカードゲーム' },
          ],
        },
      },
      {
        title: '店舗アルバイト',
        badge: 'アルバイト',
        badgeGradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        description: 'レジ補助・品出し・イベントサポートで現場を支える。',
        salary: '時給1,300円〜',
        details: {
          overview:
            '店舗社員をサポートしながら、接客や品出し、イベント準備など店舗運営の基本業務を担当します。未経験から始めて、業務を覚えながらステップアップできる環境です。最短1ヶ月で社員登用された実績もあります。',
          tasks: [
            'レジ補助・接客対応',
            '品出し・商品陳列',
            '大会・イベントのサポート（受付・設営・片付け）',
            '店内クレンリネス（清掃・整理整頓）',
            '在庫整理・バックヤード業務',
          ],
          requirements: [
            'TCGに興味がある方',
            '週2日以上勤務可能な方',
            '基本的なコミュニケーションが取れる方',
          ],
          welcome: [
            'TCGのプレイ経験がある方',
            '接客・レジ業務の経験がある方',
            '正社員登用を視野に入れている方',
          ],
          conditions: [
            { label: '雇用形態', value: 'アルバイト' },
            { label: '給与', value: '時給1,300円〜（経験・実績に応じてスピード昇給）' },
            { label: '勤務地', value: '流山おおたかの森 GOOD GAME店舗（流山おおたかの森駅 西口徒歩30秒）' },
            { label: '勤務時間', value: 'シフト制（週2日〜応相談）' },
            { label: '手当', value: '交通費全額支給、催事出勤手当あり' },
            { label: '社員登用', value: 'あり（最短1ヶ月で登用実績）' },
          ],
        },
      },
    ],
  },
  {
    title: '通販・EC運営',
    positions: [
      {
        title: '通販社員',
        badge: '正社員',
        badgeGradient: 'linear-gradient(135deg, #e53e3e 0%, #f56565 100%)',
        description: 'Shopify運用・受注処理・商品データ整備でECを回す。',
        salary: '月給25万円〜',
        details: {
          overview:
            '50万点を超える商品データベースの運営から、ピッキング、検品、梱包、発送まで。画面の向こうにいるお客様に「ここで買ってよかった」と思ってもらえるかは、通販チームの仕事の精度にかかっています。カスタマーサポートや商品データの整備など、表には見えにくいけれど事業の根幹を支えるポジションです。',
          tasks: [
            '受注処理 — 注文確認・ステータス管理',
            'ピッキング・検品・梱包 — 正確さが品質を左右する',
            '商品データ整備 — 50万点超の在庫データを最新状態に保つ',
            'カスタマーサポート — 問い合わせ対応・お客様フォロー',
            '価格設計・在庫管理・売上分析',
          ],
          requirements: [
            '基本的なPC操作ができる方',
            '丁寧で正確な作業ができる方',
            'ECや通販業務に興味がある方',
          ],
          welcome: [
            'EC・通販の業務経験がある方',
            'Shopifyの操作経験がある方',
            'データ分析やマーケティングに興味がある方',
            'TCGの知識がある方',
          ],
          conditions: [
            { label: '雇用形態', value: '正社員' },
            { label: '給与', value: '月給25万円〜（前職年収を考慮して決定）' },
            { label: '賞与', value: '年2回（直近実績: 1.3〜1.5ヶ月分）' },
            { label: '勤務地', value: '流山おおたかの森 本社（流山おおたかの森駅 西口徒歩30秒）' },
            { label: '手当', value: '交通費全額支給、催事出勤手当あり' },
            { label: '福利厚生', value: '社会保険完備、キャリアアップ支援' },
            { label: '取り扱いタイトル', value: 'MTG・FaB・ロルカナ・ポケモンカードゲーム' },
          ],
        },
      },
      {
        title: '通販アルバイト',
        badge: 'アルバイト',
        badgeGradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        description: 'カードのピッキング・検品・梱包で通販品質を守る。',
        salary: '時給1,300円〜',
        details: {
          overview:
            '通販チームの一員として、注文されたカードのピッキング・検品・梱包を担当します。正確さとスピードが求められますが、業務は段階的に覚えられるよう設計されています。コツコツと丁寧に取り組める方に最適です。',
          tasks: [
            'カードのピッキング（注文に基づく在庫からの取り出し）',
            '検品（カードの状態確認・品質チェック）',
            '梱包・発送準備（丁寧な梱包で商品品質を守る）',
            '在庫整理・棚卸しサポート',
          ],
          requirements: [
            '丁寧で正確な作業ができる方',
            '週2日以上勤務可能な方',
            'カードやECに興味がある方',
          ],
          welcome: [
            '物流・倉庫業務の経験がある方',
            'TCGの知識がある方',
            '正社員登用を視野に入れている方',
          ],
          conditions: [
            { label: '雇用形態', value: 'アルバイト' },
            { label: '給与', value: '時給1,300円〜（経験・実績に応じてスピード昇給）' },
            { label: '勤務地', value: '流山おおたかの森 本社（流山おおたかの森駅 西口徒歩30秒）' },
            { label: '勤務時間', value: 'シフト制（週2日〜応相談）' },
            { label: '手当', value: '交通費全額支給' },
            { label: '社員登用', value: 'あり（最短1ヶ月で登用実績）' },
          ],
        },
      },
    ],
  },
  {
    title: '事業推進',
    positions: [
      {
        title: '幹部候補社員',
        badge: '正社員',
        badgeGradient: 'linear-gradient(135deg, #e53e3e 0%, #f56565 100%)',
        description: 'KPI設計・数値管理・組織運営で事業成長をけん引。',
        salary: '月給30万円〜',
        details: {
          overview:
            '店舗・通販の両事業を横断的に見ながら、KPI設計や数値管理、組織マネジメントを担うポジションです。成長志向の方には最高の挑戦環境を提供します。',
          tasks: [
            'KPI設計・進捗管理（店舗・通販の事業指標を設計し運用）',
            '数値分析・意思決定支援（売上・利益・在庫回転などのデータ分析）',
            '組織運営・チームマネジメント（採用・育成・評価の仕組みづくり）',
            '新規出店計画の策定・実行（秋葉原・横浜・大阪・福岡）',
            'EC基盤の戦略的改善（Shopify運用の高度化・自動化）',
          ],
          requirements: [
            '事業運営やマネジメントの経験がある方',
            '数値に基づいた意思決定ができる方',
            '複数の業務を横断的にハンドリングできる方',
          ],
          welcome: [
            'EC・小売業界での管理職経験がある方',
            'ITやマーケティングの専門知識がある方',
            'ベンチャー・スタートアップでの勤務経験がある方',
          ],
          conditions: [
            { label: '雇用形態', value: '正社員' },
            { label: '給与', value: '月給30万円〜50万円（経験・能力に応じて決定）' },
            { label: '賞与', value: '年2回（直近実績: 1.3〜1.5ヶ月分）' },
            { label: '勤務地', value: '流山おおたかの森 本社（流山おおたかの森駅 西口徒歩30秒）※今後の新規拠点含む' },
            { label: '手当', value: '交通費全額支給、催事出勤手当あり' },
            { label: '福利厚生', value: '社会保険完備、キャリアアップ支援' },
            { label: 'キャリア例', value: '入社1年で買収企業の役員候補に抜擢された実績あり' },
          ],
        },
      },
    ],
  },
];

export function JobPositions() {
  return (
    <section
      id="募集職種"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        backgroundColor: 'var(--surface-muted, #f2f2f5)',
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
              募集職種
            </h2>
            <div
              className="rounded-full mb-5"
              style={{
                width: 40,
                height: 4,
                background: 'var(--brand-gradient-subtle, linear-gradient(90deg, #e53e3e 0%, #f56565 100%))',
              }}
            />
            <p style={{ color: 'var(--text-muted, #6e6e82)', fontSize: '1rem', lineHeight: 1.8, maxWidth: 720 }}>
              店舗・通販・事業推進の3領域で5ポジションを募集中。未経験からの挑戦も、経験を活かしたステップアップも歓迎です。
            </p>
          </div>
        </Reveal>

        {/* Category Cards */}
        <div className="flex flex-col gap-6">
          {CATEGORIES.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <CategoryCard category={cat} />
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

function CategoryCard({ category }: { category: Category }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="transition-all"
      style={{
        backgroundColor: '#ffffff',
        borderRadius: 24,
        border: '1px solid rgba(0,0,0,0.06)',
        padding: '36px 40px',
        boxShadow: hovered ? '0 12px 32px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.02)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transitionDuration: '300ms',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Category Title */}
      <h3
        className="mb-6"
        style={{
          borderLeft: '4px solid #e53e3e',
          paddingLeft: 16,
          fontWeight: 900,
          fontSize: '1.2rem',
          color: '#1a1a1a',
        }}
      >
        {category.title}
      </h3>

      {/* Positions */}
      <div className="flex flex-col gap-5">
        {category.positions.map((pos, i) => (
          <div key={pos.title}>
            {i > 0 && (
              <div
                className="mb-5"
                style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.05)' }}
              />
            )}
            <PositionRow position={pos} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PositionRow({ position }: { position: Position }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div>
      {/* Summary row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1a1a1a' }}>
              {position.title}
            </span>
            <span
              className="text-white px-3 py-0.5 rounded-full"
              style={{
                background: position.badgeGradient,
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              {position.badge}
            </span>
          </div>
          <p
            style={{ color: '#5a5a6a', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: 4 }}
          >
            {position.description}
          </p>
          <span style={{ color: '#e53e3e', fontWeight: 700, fontSize: '0.92rem' }}>
            {position.salary}
          </span>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="shrink-0 px-6 py-2.5 rounded-full text-white transition-all hover:shadow-lg hover:scale-105"
          style={{
            background: isOpen
              ? 'linear-gradient(135deg, #4a4a5a 0%, #6a6a7a 100%)'
              : 'linear-gradient(135deg, #e53e3e 0%, #f56565 100%)',
            fontSize: '0.84rem',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {isOpen ? '閉じる' : '詳細を見る'}
        </button>
      </div>

      {/* Expandable detail panel */}
      <div
        className="overflow-hidden transition-all"
        style={{
          maxHeight: isOpen ? height ?? 2000 : 0,
          opacity: isOpen ? 1 : 0,
          transitionDuration: '400ms',
          transitionTimingFunction: 'ease',
        }}
      >
        <div ref={contentRef}>
          <div
            className="mt-6 rounded-2xl"
            style={{
              backgroundColor: '#f8f8fa',
              border: '1px solid rgba(0,0,0,0.04)',
              padding: '32px 36px',
            }}
          >
            {/* Overview */}
            <div className="mb-7">
              <SectionLabel>仕事内容</SectionLabel>
              <p
                style={{
                  color: '#4a4a5a',
                  fontSize: '0.9rem',
                  lineHeight: 1.85,
                  marginBottom: 16,
                }}
              >
                {position.details.overview}
              </p>
              <ul className="flex flex-col gap-2">
                {position.details.tasks.map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-3"
                    style={{ color: '#4a4a5a', fontSize: '0.88rem', lineHeight: 1.7 }}
                  >
                    <span
                      className="shrink-0 mt-2"
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        backgroundColor: '#e53e3e',
                      }}
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-7">
              <SectionLabel>応募資格</SectionLabel>
              <ul className="flex flex-col gap-2">
                {position.details.requirements.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3"
                    style={{ color: '#4a4a5a', fontSize: '0.88rem', lineHeight: 1.7 }}
                  >
                    <span
                      className="shrink-0"
                      style={{ color: '#e53e3e', fontWeight: 700, fontSize: '0.85rem' }}
                    >
                      ✓
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Welcome */}
            {position.details.welcome && position.details.welcome.length > 0 && (
              <div className="mb-7">
                <SectionLabel>歓迎条件</SectionLabel>
                <ul className="flex flex-col gap-2">
                  {position.details.welcome.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-3"
                      style={{ color: '#4a4a5a', fontSize: '0.88rem', lineHeight: 1.7 }}
                    >
                      <span style={{ color: '#f59e0b', fontSize: '0.8rem' }}>★</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Conditions table */}
            <div>
              <SectionLabel>勤務条件</SectionLabel>
              <div
                className="rounded-xl overflow-hidden"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                {position.details.conditions.map((c, i) => (
                  <div
                    key={c.label}
                    className="flex flex-col sm:flex-row gap-1 sm:gap-6"
                    style={{
                      padding: '14px 20px',
                      borderBottom:
                        i < position.details.conditions.length - 1
                          ? '1px solid rgba(0,0,0,0.04)'
                          : 'none',
                    }}
                  >
                    <div
                      className="shrink-0"
                      style={{
                        width: 130,
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        color: '#1a1a1a',
                      }}
                    >
                      {c.label}
                    </div>
                    <div
                      className="flex-1"
                      style={{ color: '#4a4a5a', fontSize: '0.85rem', lineHeight: 1.75 }}
                    >
                      {c.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Apply CTA inside detail */}
            <div className="mt-8 text-center">
              <a
                href="#応募の流れ"
                className="inline-block px-8 py-3 rounded-full text-white transition-all hover:shadow-lg hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #e53e3e 0%, #f56565 100%)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                }}
              >
                この職種に応募する
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mb-4 flex items-center gap-3"
      style={{ fontWeight: 900, fontSize: '0.92rem', color: '#1a1a1a' }}
    >
      <span
        style={{
          width: 3,
          height: 16,
          borderRadius: 2,
          background: 'linear-gradient(180deg, #e53e3e 0%, #f56565 100%)',
          display: 'inline-block',
        }}
      />
      {children}
    </div>
  );
}