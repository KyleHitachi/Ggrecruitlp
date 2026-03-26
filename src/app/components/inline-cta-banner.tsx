export function InlineCtaBanner() {
  return (
    <div
      className="flex items-center justify-between flex-wrap gap-4 w-full"
      style={{
        backgroundColor: '#f7f7f9',
        border: '1px solid #e0e0e8',
        borderRadius: 16,
        padding: '20px 28px',
      }}
    >
      <span style={{ fontWeight: 700, color: '#0d0d12', fontSize: '0.95rem' }}>
        気になったら、まずはランチ面談から。
      </span>
      <a
        href="#応募の流れ"
        className="rounded-full shrink-0"
        style={{
          background: 'linear-gradient(135deg, #e53e3e 0%, #f6993f 100%)',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.85rem',
          padding: '10px 28px',
          textDecoration: 'none',
        }}
      >
        話を聞いてみる
      </a>
    </div>
  );
}
