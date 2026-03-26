import { useState, useRef, useEffect } from 'react';
import { Reveal } from './reveal';

const FAQ_ITEMS = [
  {
    question: '未経験でも応募できますか',
    answer:
      'もちろん応募できます。PCの基本操作ができれば十分です。業務は段階的に覚えられるよう設計されており、先輩スタッフがマンツーマンでサポートします。実際に未経験のアルバイトから最短1ヶ月で社員登用された例もあります。',
  },
  {
    question: 'カードの知識がなくても大丈夫ですか？',
    answer:
      '大丈夫です。ポケカだけ詳しい、MTGだけ詳しい、という方も歓迎です。知らないタイトルは働きながら覚えていけば問題ありません。大切なのは学ぶ姿勢です。',
  },
  {
    question: '職務経歴書に自信がありません',
    answer:
      'アルバイト応募や未経験の方は、書式自由の簡易形式で問題ありません。これまでの経験を率直に記載してくだされば大丈夫です。書類の見栄えより、お会いして話すことを重視しています。',
  },
  {
    question: 'ランチ面談では何を話しますか',
    answer:
      '業務内容、働き方、お互いの期待値のすり合わせが中心です。堅い面接ではなく、ざっくばらんに話す場なので、職場の雰囲気や人間関係を確認する機会としても使ってください。代金は会社負担です。',
  },
  {
    question: 'どのような人が合わない環境ですか？',
    answer:
      '面接の段階では、事前準備をしてこない方は厳しいと感じます。入社後は、言い訳や他責にする人、自分の正論だけを押し通す人はミスマッチになりがちです。自分だったらどうできたか、と自責で向き合える芯の強さを大切にしています。',
  },
  {
    question: 'どんな点を重視して選考しますか',
    answer:
      '誠実さ、継続的に取り組む姿勢、「もっと良くしよう」という改善志向、そして周囲と連携できるコミュニケーション力を重視しています。学歴や経歴の見栄えより、実際の仕事で再現できる力を見ています。',
  },
  {
    question: 'アルバイトから正社員になれますか？',
    answer:
      '社員登用制度があり、最短1ヶ月で登用された実績もあります。希望がなければアルバイトのまま自分のペースで働くことも歓迎です。',
  },
  {
    question: 'GOOD GAME BREAKに出演できますか？',
    answer:
      '意欲があれば前向きに検討します。店舗のプレイスペースで再開を予定しており、お客様との距離が近いライブ感のある配信を目指しています。',
  },
];

export function FaqSection() {
  return (
    <section
      id="FAQ"
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
        <Reveal>
          <div style={{ marginBottom: 'var(--space-xl, 32px)' }}>
            <h2
              className="mb-3"
              style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary, #1a1a1a)' }}
            >
              よくある質問
            </h2>
            <div
              className="rounded-full mb-5"
              style={{
                width: 40,
                height: 4,
                background: 'var(--brand-gradient-subtle, linear-gradient(90deg, #e53e3e 0%, #f56565 100%))',
              }}
            />
          </div>
        </Reveal>

        <Reveal cascade>
          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <FaqItem key={i} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqItem({ item }: { item: { question: string; answer: string } }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className="transition-all"
      style={{
        backgroundColor: hovered && !isOpen ? 'var(--surface-subtle, #fafafa)' : 'var(--surface-default, #fff)',
        borderRadius: 16,
        border: '1px solid rgba(0,0,0,0.06)',
        overflow: 'hidden',
        transitionDuration: '0.2s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left transition-colors"
        style={{
          padding: '20px 28px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-primary, #1a1a1a)', lineHeight: 1.6 }}>
          {item.question}
        </span>
        <span
          className="shrink-0 flex items-center justify-center rounded-full transition-all"
          style={{
            width: 28,
            height: 28,
            backgroundColor: isOpen ? 'var(--brand-primary, #e50020)' : '#f0f0f0',
            color: isOpen ? '#fff' : '#666',
            transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transitionDuration: '250ms',
            fontSize: '1.1rem',
            fontWeight: 300,
          }}
        >
          +
        </span>
      </button>

      <div
        className="overflow-hidden transition-all"
        style={{
          maxHeight: isOpen ? height ?? 400 : 0,
          opacity: isOpen ? 1 : 0,
          transitionDuration: '300ms',
        }}
      >
        <div
          ref={contentRef}
          style={{
            padding: '0 28px 20px',
            color: 'var(--text-secondary, #4a4a5a)',
            fontSize: '0.9rem',
            lineHeight: 1.85,
          }}
        >
          {item.answer}
        </div>
      </div>
    </div>
  );
}
