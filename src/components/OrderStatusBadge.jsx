export default function OrderStatusBadge({ status }) {
  const statusConfig = {
    Diproses: { bg: 'bg-secondary-container', text: 'text-primary' },
    'Menunggu Bayar': { bg: 'bg-secondary-container', text: 'text-on-secondary-container' },
    Selesai: { bg: 'bg-success-tint', text: 'text-success-text' },
    Dibatalkan: { bg: 'bg-error-tint', text: 'text-error-text' },
  };

  const { bg, text } = statusConfig[status] || { bg: 'bg-surface-container', text: 'text-on-surface-variant' };

  return (
    <span className={`px-3 py-1 ${bg} ${text} text-[11px] font-bold rounded-full uppercase tracking-wider`}>
      {status}
    </span>
  );
}
