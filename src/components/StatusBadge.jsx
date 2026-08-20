export default function StatusBadge({ status }) {
  const statusStyles = {
    Diproses: 'bg-secondary-container text-primary',
    'Menunggu Bayar': 'bg-secondary-container text-on-secondary-container',
    Selesai: 'bg-success-tint text-success-text',
    Dibatalkan: 'bg-error-tint text-error-text',
  };

  return (
    <span className={`px-3 py-1 ${statusStyles[status]} text-[11px] font-bold rounded-full uppercase tracking-wider`}>
      {status}
    </span>
  );
}
