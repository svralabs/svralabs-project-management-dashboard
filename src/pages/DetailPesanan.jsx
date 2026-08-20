import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getOrderById } from '../api/orders';

export default function DetailPesanan() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    async function fetchOrder() {
      const data = await getOrderById(id);
      setOrder(data);
    }
    fetchOrder();
  }, [id]);

  if (!order) return <div>Loading...</div>;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Diproses':
        return 'bg-secondary-container text-primary';
      case 'Menunggu Bayar':
        return 'bg-secondary-container text-on-secondary-container';
      case 'Selesai':
        return 'bg-success-tint text-success-text';
      case 'Dibatalkan':
        return 'bg-error-tint text-error-text';
      default:
        return 'bg-surface-container text-on-surface-variant';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="w-full sticky top-0 z-40 bg-surface dark:bg-surface-dim border-b border-border dark:border-outline-variant flex justify-between items-center px-margin py-md">
        <div className="flex items-center gap-3">
          <Link to="/pesanan" className="active:scale-95 transition-transform hover:bg-surface-container transition-colors p-2 rounded-full">
            <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
          </Link>
          <h1 className="font-heading-md text-heading-md text-primary dark:text-primary-fixed-dim">Detail Pesanan</h1>
        </div>
      </header>

      <main className="px-margin py-lg space-y-md">
        <div className="bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md">
          <div className="flex justify-between items-start">
            <div className="space-y-xs">
              <p className="font-label-caps text-label-caps text-on-surface-variant">#{order.id}</p>
              <h3 className="font-heading-md text-heading-md">{order.title}</h3>
              <p className="font-body-base text-body-base text-tx-secondary">{order.date}</p>
            </div>
            <span className={`px-3 py-1 ${getStatusColor(order.status)} text-[11px] font-bold rounded-full uppercase tracking-wider`}>
              {order.status}
            </span>
          </div>

          <div className="pt-sm border-t border-border space-y-md">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center gap-md">
                <div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
                  <img
                    className={`w-full h-full object-cover ${order.status === 'Menunggu Bayar' ? 'grayscale opacity-60' : order.status === 'Selesai' ? 'opacity-80' : ''}`}
                    src={item.image}
                    alt={item.name}
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-body-base text-body-base text-on-surface-variant">{item.name}</p>
                  <div className="mt-xs flex justify-between items-end">
                    <p className="font-heading-md text-heading-md text-primary">Rp{item.price.toLocaleString()}</p>
                    <p className="text-xs text-tx-secondary">{item.quantity} Barang</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {order.status === 'Menunggu Bayar' && (
            <button className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">
              Bayar Sekarang
            </button>
          )}

          {order.status === 'Diproses' && (
            <Link
              to={`/ajukan_pembatalan/${order.id}`}
              className="w-full py-2 bg-error text-on-error rounded-full font-label-caps text-label-caps active:scale-95 transition-transform text-center"
            >
              Ajukan Pembatalan
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
