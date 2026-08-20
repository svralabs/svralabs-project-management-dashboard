import StatusBadge from './StatusBadge';

export default function OrderCard({ order, onClick }) {
  const { id, title, date, status, items, total, quantity, imageUrl, actionButton } = order;

  return (
    <div className="bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md" onClick={onClick}>
      <div className="flex justify-between items-start">
        <div className="space-y-xs">
          <p className="font-label-caps text-label-caps text-on-surface-variant">{id}</p>
          <h3 className="font-heading-md text-heading-md">{title}</h3>
          <p className="font-body-base text-body-base text-tx-secondary">{date}</p>
        </div>
        <StatusBadge status={status} />
      </div>
      <div className="flex items-center gap-md pt-sm border-t border-border">
        <div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
          <img
            className={`w-full h-full object-cover ${status === 'Menunggu Bayar' ? 'grayscale opacity-60' : status === 'Selesai' ? 'opacity-80' : ''}`}
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className="flex-grow">
          <p className="font-body-base text-body-base text-on-surface-variant">{items}</p>
          <div className="mt-xs flex justify-between items-end">
            <p className="font-heading-md text-heading-md text-primary">{total}</p>
            <p className="text-xs text-tx-secondary">{quantity} Barang</p>
          </div>
        </div>
      </div>
      {actionButton && (
        <button className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">
          {actionButton}
        </button>
      )}
    </div>
  );
}
