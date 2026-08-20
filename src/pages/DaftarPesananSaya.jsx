import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getOrders } from '../api/orders';

export default function DaftarPesananSaya() {
  const [orders, setOrders] = useState([]);
  const [activeFilter, setActiveFilter] = useState('Semua');

  useEffect(() => {
    async function fetchOrders() {
      const data = await getOrders();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  const filteredOrders = activeFilter === 'Semua'
    ? orders
    : orders.filter(order => order.status === activeFilter);

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
          <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
            <span className="material-symbols-outlined text-on-surface-variant">person</span>
          </div>
          <h1 className="font-heading-md text-heading-md text-primary dark:text-primary-fixed-dim">Pesanan Saya</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="active:scale-95 transition-transform hover:bg-surface-container transition-colors p-2 rounded-full">
            <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
          </button>
        </div>
      </header>

      <nav className="bg-surface sticky top-[72px] z-30 px-margin py-sm flex gap-sm overflow-x-auto no-scrollbar border-b border-border">
        {['Semua', 'Diproses', 'Menunggu Bayar', 'Selesai', 'Dibatalkan'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-lg py-2 ${activeFilter === filter ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container'} rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform`}
          >
            {filter}
          </button>
        ))}
      </nav>

      <main className="px-margin py-lg space-y-md">
        {filteredOrders.map((order) => (
          <Link
            key={order.id}
            to={`/pesanan/${order.id}`}
            className={`block bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md ${order.status === 'Dibatalkan' ? 'opacity-75' : ''}`}
          >
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
            <div className="flex items-center gap-md pt-sm border-t border-border">
              <div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
                <img
                  className={`w-full h-full object-cover ${order.status === 'Menunggu Bayar' ? 'grayscale opacity-60' : order.status === 'Selesai' ? 'opacity-80' : ''}`}
                  src={order.items[0].image}
                  alt={order.items[0].name}
                />
              </div>
              <div className="flex-grow">
                <p className="font-body-base text-body-base text-on-surface-variant">{order.items[0].name}</p>
                <div className="mt-xs flex justify-between items-end">
                  <p className="font-heading-md text-heading-md text-primary">Rp{order.items[0].price.toLocaleString()}</p>
                  <p className="text-xs text-tx-secondary">{order.items[0].quantity} Barang</p>
                </div>
              </div>
            </div>
            {order.status === 'Menunggu Bayar' && (
              <button className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">
                Bayar Sekarang
              </button>
            )}
          </Link>
        ))}
      </main>
    </div>
  );
}
