import { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  cascade?: boolean;
  delay?: number;
  style?: React.CSSProperties;
}

export function Reveal({ children, className = '', cascade, delay = 0, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: '-40px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const cls = [
    cascade ? 'reveal-child' : 'reveal',
    revealed ? 'revealed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cls} style={style}>
      {children}
    </div>
  );
}
