import { FileText, Users, MessageSquare, PartyPopper } from 'lucide-react';
import { motion } from 'motion/react';
import { Reveal } from './reveal';

const STEPS = [
  {
    step: '1',
    title: '応募フォーム記入',
    description:
      '下記の応募フォームに必要事項をご記入ください。履歴書と職務経歴書をアップロードし、お名前・連絡先などの基本情報を入力してください。',
    icon: FileText,
  },
  {
    step: '2',
    title: 'ランチ面談',
    description:
      '代表のゴードンやスタッフと一緒に食事をしながら、お互いの期待値をすり合わせます。カジュアルな雰囲気でざっくばらんにお話ししましょう。代金はもちろん会社負担です。',
    icon: Users,
  },
  {
    step: '3',
    title: '正式面接',
    description:
      '給与や働き方などの条件面と、今後のキャリアプランを確認し、双方が納得したうえで合意形成を行います。',
    icon: MessageSquare,
  },
  {
    step: '4',
    title: '内定・入社',
    description:
      'GOOD GAMEの未来をつくるチームへようこそ。初日から先輩スタッフがサポートします。',
    icon: PartyPopper,
  },
];

export function ApplicationProcess() {
  return (
    <section
      id="応募の流れ"
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
              How to Apply
            </p>
            <h2
              className="mb-3"
              style={{ fontWeight: 900, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', color: 'var(--text-primary, #0d0d12)' }}
            >
              応募の流れ
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

        <div className="relative flex flex-col gap-5">
          {STEPS.map((s, index) => {
            const Icon = s.icon;
            return (
              <div key={s.step} className="relative">
                {/* Connecting line */}
                {index < STEPS.length - 1 && (
                  <div
                    className="absolute left-[22px] top-[76px] w-0.5 z-0"
                    style={{
                      height: 'calc(100% + 20px)',
                      background: 'linear-gradient(180deg, #f56565 0%, #e53e3e 100%)',
                      opacity: 0.3,
                    }}
                  />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{
                    y: -4,
                    boxShadow: 'var(--shadow-brand, 0 8px 24px rgba(229,0,32,0.18))',
                  }}
                  className="relative flex gap-6 items-start cursor-pointer"
                  style={{
                    backgroundColor: 'var(--surface-default, #ffffff)',
                    borderRadius: 'var(--card-radius, 24px)',
                    border: '1px solid rgba(0,0,0,0.06)',
                    padding: 'var(--card-padding, 32px) 36px',
                    transition: 'all 0.3s ease',
                    boxShadow: 'var(--shadow-sm, 0 2px 8px rgba(0,0,0,0.04))',
                  }}
                >
                  {/* Step number with icon */}
                  <div className="shrink-0 relative">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center rounded-full relative z-10"
                      style={{
                        width: 44,
                        height: 44,
                        background: 'var(--brand-gradient-subtle, linear-gradient(135deg, #e53e3e 0%, #f56565 100%))',
                        color: '#fff',
                        fontWeight: 900,
                        fontSize: '1.1rem',
                        fontFamily: "'Inter', sans-serif",
                        boxShadow: '0 4px 12px rgba(229, 62, 62, 0.3)',
                      }}
                    >
                      {s.step}
                    </motion.div>
                    {/* Icon badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                      className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 z-20"
                      style={{
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <Icon size={16} style={{ color: 'var(--brand-primary, #e50020)' }} />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <h3
                      className="mb-2"
                      style={{ fontWeight: 900, fontSize: '1.05rem', color: 'var(--text-primary, #1a1a1a)' }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary, #4a4a5a)', fontSize: '0.9rem', lineHeight: 1.85 }}>
                      {s.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Note */}
        <Reveal delay={400}>
          <div
            className="mt-8 p-5 rounded-xl"
            style={{
              backgroundColor: 'var(--surface-default, #fff)',
              borderLeft: '4px solid var(--brand-primary, #e50020)',
              boxShadow: 'var(--shadow-sm, 0 2px 8px rgba(0,0,0,0.04))',
            }}
          >
            <p style={{ color: 'var(--text-secondary, #3a3a4a)', fontSize: '0.9rem', lineHeight: 1.8 }}>
              選考スピードも大切にしています。書類確認から初回連絡まで3営業日以内、最終面接後の結果連絡も原則3営業日以内でお伝えします。
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}