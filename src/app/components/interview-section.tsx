import { useState, useRef, useEffect } from 'react';
import { InlineCtaBanner } from './inline-cta-banner';
import { Reveal } from './reveal';

const NAV_ITEMS = [
  { id: 'representative', label: '代表インタビュー' },
  { id: 'new-staff', label: '入社2ヶ月目スタッフ' },
  { id: 'ec-staff', label: '通販社員インタビュー' },
];

interface QAItem {
  question: string;
  paragraphs: string[];
}

const REPRESENTATIVE_QA: QAItem[] = [
  {
    question: '今回、新たな仲間を募集する理由を教えてください。',
    paragraphs: [
      'おかげさまで多くのお客様に支えられ、店舗も通販も成長を続けていますが、僕たちは今の状態に留まるつもりはありません。今後、秋葉原はもちろん、横浜、大阪、福岡などへの新規出店も視野に入れています。',
      'ビジネスとして組織をさらに大きくしていくためには、一緒にその未来を創ってくれる新しい仲間の存在が不可欠なんです。',
    ],
  },
  {
    question: 'どのような方に仲間になってほしいですか。',
    paragraphs: [
      '一番ベースにあるのは、トレカが好きで、他人に優しくていい人です。僕自身がマジック：ザ・ギャザリングが大好きですし、同じ好きという共通言語があることは大切だと思っています。',
      'ただ、全員にバリバリ働いて上を目指せと言いたいわけではありません。接客や清掃、通販の梱包といったベースの仕事をコツコツ真面目にやって、自分のプライベートを大切にしたいという働き方も大歓迎です。',
      '一方で、ITやマーケティングを駆使して難易度の高い仕事に挑戦し、給与をどんどん上げていきたいという成長志向の人にも、最高の環境を提供できると思っています。それぞれの幸せの形に寄り添える、選択肢のある組織でありたいですね。',
    ],
  },
  {
    question: '実際に入社後、どのようなキャリアパスがありますか。',
    paragraphs: [
      '本人のやりたいという気持ち次第で、いくらでも可能性は広がります。例えば、未経験のアルバイトから始めて、最短1ヶ月で社員登用されたスタッフもいますし、たった1年で他社のキャリア採用に通じるレベルの専門性を身につけ、劇的に給与を上げたスタッフもいます。',
      '意欲があれば、通販の責任者を任せたり、新しく買収した企業の次期社長や役員候補として抜擢するような、ベンチャーならではのドラスティックなキャリアも実際に用意しています。やりたいと言ってくれるスタッフには、僕も時間とコストをかけてとことん付き合いますよ。',
    ],
  },
  {
    question: '逆に、GOOD GAMEに合わないのはどのような人でしょうか。',
    paragraphs: [
      '面接の段階で合わないなと思うのは、事前準備をしない人です。会社が何をやっているか調べないなど、準備の優先順位が低い人は、入社後もしんどいと思います。',
      '入社後で言うと、言い訳をして他責にする人ですね。自分ではコントロールできない環境のせいにしても何も変わらないので、自分だったらどうできたかと自責で向き合える芯の強さが必要です。あとは、自分だけの視点で正論パンチを突きつけてしまう人。ビジネスに一義的な正論はないので、周囲の意見も聞いて全体最適を考えられる人と一緒に働きたいですね。',
    ],
  },
  {
    question: '最後に、応募を検討している方へメッセージをお願いします。',
    paragraphs: [
      'いきなり面接や転職となるとハードルが高いと思うので、まずはカジュアルなランチ面談で僕とお話ししませんか。',
      '美味しいご飯を食べながら、ざっくばらんに会話することで、お互いの本来の良さが見えてくると思っています。とりあえず話を聞いてみたいくらいで構いませんので、少しでも興味を持っていただけたら、ぜひ気軽に応募してください。お待ちしています。',
    ],
  },
];

const EC_QA: QAItem[] = [
  {
    question: '現在担当している業務内容を教えてください。',
    paragraphs: [
      'GOOD GAMEの通販部門全体を見ています。受注処理や梱包管理はもちろんですが、商品登録、価格設計、在庫管理、売上分析、システムの改善まで、正直かなり幅広くやっていますね。通販って「ただ発送するだけ」と思われがちなんですけど、実際は「どうすればもっと多くのお客様に、もっと良い形で届けられるか」を設計する仕事なんです。',
      '価格の付け方ひとつで回転率は変わりますし、商品ページの見せ方や導線を工夫するだけで売上が大きく動くこともあります。現場の作業をやりつつ、常に全体を見ながら動いている感じです。',
    ],
  },
  {
    question: '通販部門のやりがいはどんなところにありますか。',
    paragraphs: [
      'やったことが数字ではっきり返ってくるところですね。改善を積み重ねれば、売上や利益率、在庫回転といった指標に必ず反映されます。仮説を立てて、実行して、検証する。このサイクルを回し続けられるのは素直に楽しいです。',
      'ただ、数字の向こう側には必ずお客様がいるんですよね。発売日に届くのを楽しみにしている方、ずっと探していたカードを見つけた方。その期待を裏切らない精度とスピードを保つのも大事な責任です。効率と誠実さの両立が、この仕事の本質だと思っています。',
    ],
  },
  {
    question: 'GOOD GAMEの通販部門で働く環境の特徴は何でしょうか。',
    paragraphs: [
      '裁量が大きいことですね。「こうした方がいい」と思ったら、わりとすぐ実行に移せます。ツールの導入やフローの見直し、価格戦略の変更まで、自分の判断が事業にダイレクトに反映される環境です。',
      'あと、店舗と密接に連携しているので、現場感覚を持ちながらECを回せるのは大きいですね。机上の理論だけじゃなくて、リアルな市場の動きを踏まえて意思決定できる。これはカードショップならではの強みだと感じています。',
    ],
  },
  {
    question: 'どのような方が通販部門に向いていると思いますか。',
    paragraphs: [
      '丁寧に物事を積み上げられる方、数字を見ることに抵抗がない方、それと「もっと良くできるんじゃないか」と考え続けられる方ですね。派手さはないですけど、精度と継続が価値になる仕事です。',
      'ITやマーケティングに興味がある方にとっても、実践の場としてはかなり良い環境だと思います。自分の工夫がそのまま売上や利益に跳ね返ってくるので、成長している実感は得やすいですよ。',
    ],
  },
  {
    question: '逆に、大変な点はありますか。',
    paragraphs: [
      '正確性が常に求められる点ですね。価格や在庫のミスはお客様の信頼に直結しますし、発送遅延や誤出荷も同じです。だからこそ、人の注意力に頼るのではなく、仕組みで再発を防ぐ姿勢が大事になります。',
      '責任は大きいですが、その分、改善の余地も大きい分野です。仕組みを作れば作るほど組織が強くなっていくのは実感できますし、自分自身のスキルも確実に磨かれていきます。',
    ],
  },
  {
    question: '今後、通販部門をどのように発展させていきたいですか。',
    paragraphs: [
      'よりデータドリブンな運営を強化していきたいですね。感覚に頼るのではなく、数字に基づいた意思決定を積み重ねて、安定的に成長できる組織にしていきたいと思っています。',
      '同時に、現場の精度をさらに高めて、お客様から「ここなら安心して買える」と思ってもらえる基盤を作り続けたいです。',
    ],
  },
  {
    question: '応募を検討している方へメッセージをお願いします。',
    paragraphs: [
      '通販は表からは見えにくい仕事ですが、事業の根幹を支えている部署です。数字や仕組みに興味がある方、裏側から事業を強くしていきたいという方には、やりがいのある環境だと思います。',
      '地道な積み重ねを楽しめる方と、一緒に成長していけたら嬉しいです。',
    ],
  },
];

export function InterviewSection() {
  const [activeNav, setActiveNav] = useState('representative');

  return (
    <section
      id="インタビュー"
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
          <div className="mb-10">
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
              Interviews
            </p>
            <h2
              className="mb-3"
              style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary, #0d0d12)' }}
            >
              インタビュー
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

        {/* Sticky Nav */}
        <div
          className="sticky z-10 mb-10 flex gap-2 flex-wrap rounded-full px-3 py-2 w-fit"
          style={{
            top: 84,
            backgroundColor: 'rgba(255,255,255,0.82)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveNav(item.id);
                document.getElementById(`interview-${item.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="rounded-full px-5 py-2 transition-all"
              style={{
                fontSize: '0.84rem',
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                backgroundColor: activeNav === item.id ? '#e53e3e' : 'transparent',
                color: activeNav === item.id ? '#fff' : '#5a5a6a',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Representative Interview */}
        <Reveal>
          <div id="interview-representative">
            <InterviewCard
              title="代表インタビュー"
              lead="カードゲームが好きという気持を土台に、自分らしいキャリアを描ける場所を作りたい。"
              name="代表取締役社長 ゴードン"
              speaker="ゴードン"
              qaList={REPRESENTATIVE_QA}
              defaultOpen={0}
              dark
              initial="G"
            />
          </div>
        </Reveal>

        {/* Staff Voice Card */}
        <Reveal delay={100}>
          <div id="interview-new-staff" className="mt-10">
            <div
              className="relative overflow-hidden"
              style={{
                backgroundColor: '#fff',
                borderRadius: 32,
                border: '1px solid rgba(0,0,0,0.06)',
                padding: '48px 48px 40px',
              }}
            >
              <span
                className="absolute select-none pointer-events-none"
                style={{
                  top: -10,
                  left: 24,
                  fontSize: '12rem',
                  fontWeight: 900,
                  lineHeight: 1,
                  color: 'rgba(229,62,62,0.06)',
                  fontFamily: 'Georgia, serif',
                }}
              >
                &ldquo;
              </span>
              <div className="relative">
                <h3
                  className="mb-4"
                  style={{
                    borderLeft: '4px solid #e53e3e',
                    paddingLeft: 16,
                    fontWeight: 900,
                    fontSize: '1.2rem',
                    color: '#1a1a1a',
                  }}
                >
                  入社2ヶ月目スタッフ インタビュー
                </h3>
                <div className="flex items-center gap-4 mb-3">
                  <AvatarCircle initial="S" />
                  <p style={{ fontSize: '0.82rem', color: '#8a8a9a' }}>
                    スナノさん（入社2ヶ月目）
                  </p>
                </div>
                <p
                  style={{
                    fontSize: '1.08rem',
                    fontStyle: 'italic',
                    color: '#2a2a3a',
                    lineHeight: 1.9,
                    maxWidth: 680,
                  }}
                >
                  「想像以上にやりがいのある業界だし、会社だなと感じています。自分で選んできたので、やりがいしかない。多分今が一番楽しいです。」
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* EC Interview */}
        <Reveal delay={200}>
          <div id="interview-ec-staff" className="mt-10">
            <InterviewCard
              title="通販社員インタビュー"
              lead="数字と仕組みで、事業の土台を強くする。"
              name="通販部門責任者　常陸"
              speaker="常陸"
              qaList={EC_QA}
              defaultOpen={0}
              initial="H"
            />
          </div>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10">
            <InlineCtaBanner />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AvatarCircle({ initial }: { initial: string }) {
  return (
    <div
      className="shrink-0 flex items-center justify-center"
      style={{
        width: 56,
        height: 56,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #e53e3e 0%, #f6993f 100%)',
        color: '#fff',
        fontWeight: 900,
        fontSize: '1.2rem',
      }}
    >
      {initial}
    </div>
  );
}

function InterviewCard({
  title,
  lead,
  name,
  speaker,
  qaList,
  defaultOpen,
  dark,
  initial,
}: {
  title: string;
  lead: string;
  name: string;
  speaker: string;
  qaList: QAItem[];
  defaultOpen: number | null;
  dark?: boolean;
  initial?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        backgroundColor: dark ? '#0d0d12' : '#fff',
        borderRadius: 32,
        border: dark ? 'none' : '1px solid rgba(0,0,0,0.06)',
        padding: '48px 48px 40px',
        boxShadow: dark ? '0 24px 60px rgba(0,0,0,0.15)' : undefined,
      }}
    >
      <span
        className="absolute select-none pointer-events-none"
        style={{
          top: -10,
          left: 24,
          fontSize: '12rem',
          fontWeight: 900,
          lineHeight: 1,
          color: dark ? undefined : 'rgba(229,62,62,0.06)',
          background: dark ? 'linear-gradient(135deg, #e53e3e 0%, #f6993f 100%)' : undefined,
          WebkitBackgroundClip: dark ? 'text' : undefined,
          WebkitTextFillColor: dark ? 'transparent' : undefined,
          opacity: dark ? 0.1 : undefined,
          fontFamily: 'Georgia, serif',
        }}
      >
        &ldquo;
      </span>

      <div className="relative">
        <h3
          className="mb-4"
          style={{
            borderLeft: '4px solid #e53e3e',
            paddingLeft: 16,
            fontWeight: 900,
            fontSize: '1.2rem',
            color: dark ? '#f0f2fa' : '#1a1a1a',
          }}
        >
          {title}
        </h3>

        <p
          className="mb-2"
          style={{
            fontSize: '1.08rem',
            fontStyle: 'italic',
            color: dark ? 'rgba(255,255,255,0.7)' : '#2a2a3a',
            lineHeight: 1.9,
            maxWidth: 680,
          }}
        >
          {lead}
        </p>

        <div className="flex items-center gap-4 mb-8">
          {initial && <AvatarCircle initial={initial} />}
          <p style={{ fontSize: '0.82rem', color: dark ? 'rgba(255,255,255,0.4)' : '#8a8a9a' }}>
            {name}
          </p>
        </div>

        <div className="flex flex-col">
          {qaList.map((qa, i) => (
            <AccordionItem
              key={i}
              qa={qa}
              speaker={speaker}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              isLast={i === qaList.length - 1}
              dark={dark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AccordionItem({
  qa,
  speaker,
  isOpen,
  onToggle,
  isLast,
  dark,
}: {
  qa: QAItem;
  speaker: string;
  isOpen: boolean;
  onToggle: () => void;
  isLast: boolean;
  dark?: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      style={{
        borderBottom: isLast ? 'none' : `1px solid ${dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.05)'}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 py-5 text-left transition-colors"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        <span
          className="shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: 28,
            height: 28,
            background: dark
              ? 'linear-gradient(135deg, #e53e3e 0%, #f6993f 100%)'
              : 'linear-gradient(135deg, #e53e3e 0%, #f56565 100%)',
            color: '#fff',
            fontSize: '0.78rem',
            fontWeight: 900,
            marginTop: 1,
          }}
        >
          Q
        </span>
        <span
          className="flex-1"
          style={{ fontWeight: 700, fontSize: '0.95rem', color: dark ? '#f0f2fa' : '#1a1a1a', lineHeight: 1.7 }}
        >
          {qa.question}
        </span>
        <span
          className="shrink-0 transition-transform"
          style={{
            fontSize: '1.2rem',
            color: dark ? 'rgba(255,255,255,0.35)' : '#aaa',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transitionDuration: '250ms',
            marginTop: 2,
          }}
        >
          ▾
        </span>
      </button>

      <div
        className="overflow-hidden transition-all"
        style={{
          maxHeight: isOpen ? height ?? 800 : 0,
          opacity: isOpen ? 1 : 0,
          transitionDuration: '300ms',
        }}
      >
        <div
          ref={contentRef}
          className="pb-5 pl-12 flex flex-col gap-3"
          style={{ color: dark ? 'rgba(255,255,255,0.65)' : '#4a4a5a', fontSize: '0.9rem', lineHeight: 1.85 }}
        >
          {qa.paragraphs.map((p, i) => (
            <p key={i}>
              {i === 0 && <strong style={{ color: dark ? 'rgba(255,255,255,0.8)' : '#3a3a4a' }}>{speaker}</strong>}{' '}
              {i === 0 ? p : p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}