import { useState, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = ['仕事紹介', '募集職種', 'インタビュー', '応募の流れ', 'FAQ'];

import logoImg from 'figma:asset/8108eded053aed8621e81c6d38e0c42f579b2116.png';

export function StickyHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="site-header fixed top-0 left-0 right-0 z-50 transition-all"
      style={{
        maxWidth: '1440px',
        margin: '0 auto',
        height: 'var(--header-height, 72px)',
        backgroundColor: scrolled
          ? 'var(--header-bg-scrolled, rgba(250,250,250,0.95))'
          : 'var(--header-bg, rgba(250,250,250,0.82))',
        backdropFilter: 'var(--header-blur, blur(24px) saturate(1.6))',
        WebkitBackdropFilter: 'var(--header-blur, blur(24px) saturate(1.6))',
        borderBottom: scrolled
          ? '1px solid rgba(0,0,0,0.08)'
          : '1px solid rgba(0,0,0,0.04)',
        fontFamily: "'Zen Kaku Gothic New', sans-serif",
        transitionDuration: '0.35s',
      }}
    >
      <div
        className="flex items-center justify-between h-full mx-auto px-8"
        style={{ maxWidth: '1100px' }}
      >
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3 shrink-0">
          <ImageWithFallback
            src={logoImg}
            alt="GOOD GAME logo"
            className="object-contain"
            style={{ height: 42 }}
          />
          <span
            style={{
              fontWeight: 700,
              fontSize: '1rem',
              color: 'var(--text-primary, #0d0d12)',
              whiteSpace: 'nowrap',
            }}
          >
            GOOD GAME 採用情報
          </span>
        </div>

        {/* Center-Right: Nav Links (desktop) */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label}`}
              className="nav-link transition-all"
              style={{
                fontSize: '0.86rem',
                fontWeight: 600,
                color: 'var(--text-muted, #6e6e82)',
                padding: '6px 14px',
                borderRadius: 'var(--btn-radius, 9999px)',
                textDecoration: 'none',
                transitionDuration: '0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'rgba(0,0,0,0.05)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-primary, #0d0d12)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  'transparent';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted, #6e6e82)';
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Hamburger (mobile) */}
        <button
          className="md:hidden flex items-center justify-center"
          style={{ width: 40, height: 40, color: 'var(--text-secondary, #3a3a4a)' }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="メニュー"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden absolute left-0 right-0 top-[72px] py-3 px-6"
          style={{
            backgroundColor: 'rgba(250,250,250,0.96)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          {NAV_LINKS.map((label) => (
            <a
              key={label}
              href={`#${label}`}
              className="block py-3 px-4 rounded-lg transition-colors"
              style={{
                fontSize: '0.92rem',
                fontWeight: 600,
                color: 'var(--text-secondary, #3a3a4a)',
                textDecoration: 'none',
              }}
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
