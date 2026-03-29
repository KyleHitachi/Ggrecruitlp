export function InlineCtaBanner() {
  return (
    <div
      className="flex items-center justify-between flex-wrap gap-4 w-full"
      style={{
        backgroundColor: '#f7f6f4',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: 12,
        padding: '20px 28px',
      }}
    >
      <span style={{ fontWeight: 700, color: 'var(--text-primary, #0d0d12)', fontSize: '0.95rem' }}>
        気になったら、まずはランチ面談から。
      </span>
      <a
        href="#応募の流れ"
        className="rounded-lg shrink-0 transition-all"
        style={{
          backgroundColor: 'var(--brand-primary, #e50020)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.85rem',
          padding: '10px 28px',
          textDecoration: 'none',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(229, 0, 32, 0.25)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        話を聞いてみる
      </a>
    </div>
  );
}
