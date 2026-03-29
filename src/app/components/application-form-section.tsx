import { useState } from 'react';
import { Reveal } from './reveal';
import { Upload, User, Mail, Phone, FileText } from 'lucide-react';

export function ApplicationFormSection() {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [cvFile, setCvFile] = useState<File | null>(null);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<File | null>>
  ) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  return (
    <section
      id="応募フォーム"
      className="relative"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
        paddingTop: 'var(--space-4xl, 96px)',
        paddingBottom: 'var(--space-4xl, 96px)',
      }}
    >
      <div className="mx-auto px-8" style={{ maxWidth: '1100px' }}>
        {/* Section Header */}
        <Reveal>
          <div className="mb-12 text-center">
            <p
              className="uppercase tracking-widest mb-3"
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: 'var(--text-muted, #6e6e82)',
                letterSpacing: '0.15em',
              }}
            >
              Application Form
            </p>
            <h2
              className="inline-block relative"
              style={{
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                fontWeight: 800,
                color: 'var(--text-primary, #0d0d12)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--space-sm, 8px)',
              }}
            >
              応募フォーム
              <span
                className="absolute left-0 -bottom-2"
                style={{
                  width: '100%',
                  height: 4,
                  background: 'linear-gradient(90deg, var(--brand-primary, #e50020) 0%, var(--accent-secondary, #FF6B3D) 100%)',
                  borderRadius: 2,
                }}
              />
            </h2>
            <p
              className="mt-6"
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-secondary, #3a3a4a)',
                maxWidth: '640px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              下記フォームに必要事項をご入力の上、ご応募ください。
              <br />
              まずは気軽にお話ししましょう。
            </p>
          </div>
        </Reveal>

        {/* Form Card */}
        <Reveal delay={100}>
          <div
            className="relative overflow-hidden transition-all"
            style={{
              backgroundColor: 'white',
              borderRadius: '20px',
              padding: 'var(--space-2xl, 48px)',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            <form>
              {/* File Upload Section */}
              <div className="mb-10">
                <h3
                  className="mb-6 flex items-center gap-2"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary, #0d0d12)',
                  }}
                >
                  <FileText size={20} style={{ color: 'var(--brand-primary, #e50020)' }} />
                  書類のアップロード
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Resume Upload */}
                  <div>
                    <label
                      htmlFor="resume-upload"
                      className="block mb-2"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary, #3a3a4a)',
                      }}
                    >
                      履歴書 <span style={{ color: 'var(--brand-primary, #e50020)' }}>*</span>
                    </label>
                    <div
                      className="relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all hover:border-opacity-60"
                      style={{
                        borderColor: resumeFile ? 'var(--brand-primary, #e50020)' : 'rgba(0,0,0,0.15)',
                        backgroundColor: resumeFile ? 'rgba(229, 0, 32, 0.02)' : '#fafafa',
                      }}
                      onClick={() => document.getElementById('resume-upload')?.click()}
                    >
                      <input
                        id="resume-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setResumeFile)}
                      />
                      <Upload
                        size={32}
                        className="mx-auto mb-2"
                        style={{ color: resumeFile ? 'var(--brand-primary, #e50020)' : '#999' }}
                      />
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary, #3a3a4a)' }}>
                        {resumeFile ? resumeFile.name : 'ファイルを選択またはドロップ'}
                      </p>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted, #6e6e82)', marginTop: 4 }}>
                        PDF, DOC, DOCX
                      </p>
                    </div>
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label
                      htmlFor="cv-upload"
                      className="block mb-2"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary, #3a3a4a)',
                      }}
                    >
                      職務経歴書 <span style={{ color: 'var(--brand-primary, #e50020)' }}>*</span>
                    </label>
                    <div
                      className="relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-all hover:border-opacity-60"
                      style={{
                        borderColor: cvFile ? 'var(--brand-primary, #e50020)' : 'rgba(0,0,0,0.15)',
                        backgroundColor: cvFile ? 'rgba(229, 0, 32, 0.02)' : '#fafafa',
                      }}
                      onClick={() => document.getElementById('cv-upload')?.click()}
                    >
                      <input
                        id="cv-upload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setCvFile)}
                      />
                      <Upload
                        size={32}
                        className="mx-auto mb-2"
                        style={{ color: cvFile ? 'var(--brand-primary, #e50020)' : '#999' }}
                      />
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary, #3a3a4a)' }}>
                        {cvFile ? cvFile.name : 'ファイルを選択またはドロップ'}
                      </p>
                      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted, #6e6e82)', marginTop: 4 }}>
                        PDF, DOC, DOCX
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Basic Information Section */}
              <div className="mb-8">
                <h3
                  className="mb-6 flex items-center gap-2"
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-primary, #0d0d12)',
                  }}
                >
                  <User size={20} style={{ color: 'var(--brand-primary, #e50020)' }} />
                  基本情報
                </h3>

                <div className="space-y-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary, #3a3a4a)',
                      }}
                    >
                      お名前 <span style={{ color: 'var(--brand-primary, #e50020)' }}>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="山田 太郎"
                      className="w-full px-4 py-3 rounded-lg transition-all"
                      style={{
                        border: '1px solid rgba(0,0,0,0.15)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--brand-primary, #e50020)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(229, 0, 32, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary, #3a3a4a)',
                      }}
                    >
                      メールアドレス <span style={{ color: 'var(--brand-primary, #e50020)' }}>*</span>
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-3 top-1/2"
                        style={{ transform: 'translateY(-50%)', color: '#999' }}
                      />
                      <input
                        id="email"
                        type="email"
                        placeholder="example@email.com"
                        className="w-full pl-11 pr-4 py-3 rounded-lg transition-all"
                        style={{
                          border: '1px solid rgba(0,0,0,0.15)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--brand-primary, #e50020)';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(229, 0, 32, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary, #3a3a4a)',
                      }}
                    >
                      電話番号 <span style={{ color: 'var(--brand-primary, #e50020)' }}>*</span>
                    </label>
                    <div className="relative">
                      <Phone
                        size={18}
                        className="absolute left-3 top-1/2"
                        style={{ transform: 'translateY(-50%)', color: '#999' }}
                      />
                      <input
                        id="phone"
                        type="tel"
                        placeholder="090-1234-5678"
                        className="w-full pl-11 pr-4 py-3 rounded-lg transition-all"
                        style={{
                          border: '1px solid rgba(0,0,0,0.15)',
                          fontSize: '0.95rem',
                          outline: 'none',
                        }}
                        onFocus={(e) => {
                          e.currentTarget.style.borderColor = 'var(--brand-primary, #e50020)';
                          e.currentTarget.style.boxShadow = '0 0 0 3px rgba(229, 0, 32, 0.1)';
                        }}
                        onBlur={(e) => {
                          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2"
                      style={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary, #3a3a4a)',
                      }}
                    >
                      メッセージ{' '}
                      <span style={{ color: 'var(--text-muted, #6e6e82)', fontSize: '0.75rem' }}>(任意)</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="ご質問や気になる点などありましたら、お気軽にご記入ください。"
                      className="w-full px-4 py-3 rounded-lg transition-all resize-none"
                      style={{
                        border: '1px solid rgba(0,0,0,0.15)',
                        fontSize: '0.95rem',
                        outline: 'none',
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = 'var(--brand-primary, #e50020)';
                        e.currentTarget.style.boxShadow = '0 0 0 3px rgba(229, 0, 32, 0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(0,0,0,0.15)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-10 py-4 rounded-lg text-white transition-all"
                  style={{
                    background: 'var(--brand-primary, #e50020)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(229, 0, 32, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(229, 0, 32, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(229, 0, 32, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    alert('※ このフォームはプレイスホルダーです。実装時にバックエンド処理を接続してください。');
                  }}
                >
                  応募する
                </button>
                <p
                  className="mt-4"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--text-muted, #6e6e82)',
                    lineHeight: 1.6,
                  }}
                >
                  ※ このフォームは実装例です。実際の運用時にはバックエンドシステムと接続してください。
                </p>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}