import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const statusColors = {
  processing: 'bg-secondary-container text-primary',
  pending: 'bg-secondary-container text-on-secondary-container',
  completed: 'bg-success-tint text-success-text',
  cancelled: 'bg-error-tint text-error-text',
};

const mockOrders = [
  {
    id: 'JT-1042',
    title: 'Perlengkapan Bayi',
    date: '15 Juli 2026',
    status: 'processing',
    items: [
      {
        name: 'Stroller Modern Premium - Dark Edition',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
        price: 2175000,
        quantity: 1,
      },
    ],
  },
  {
    id: 'JT-0988',
    title: 'Koleksi Mainan',
    date: '14 Juli 2026',
    status: 'pending',
    items: [
      {
        name: 'Puzzle Kayu Montessori (Set of 5)',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
        price: 450000,
        quantity: 2,
      },
    ],
  },
  {
    id: 'JT-0855',
    title: 'Kebutuhan Ibu',
    date: '10 Juli 2026',
    status: 'completed',
    items: [
      {
        name: 'Tas Diaper Waterproof Oxford',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
        price: 825000,
        quantity: 1,
      },
    ],
  },
  {
    id: 'JT-0712',
    title: 'Aksesoris Kamar',
    date: '05 Juli 2026',
    status: 'cancelled',
    items: [
      {
        name: 'Baby Monitor Digital',
        image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
        price: 1250000,
        quantity: 1,
      },
    ],
  },
];

export default function OrderList() {
  const [activeTab, setActiveTab] = useState('all');
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/masuk');
      return;
    }

    // In a real app, you would fetch from /api/orders
    // fetch('/api/orders')
    //   .then(response => response.json())
    //   .then(data => setOrders(data))
    //   .catch(error => console.error('Error:', error));

    setOrders(mockOrders);
  }, [navigate]);

  const filteredOrders = orders.filter(order => {
    if (activeTab === 'all') return true;
    return order.status === activeTab;
  });

  const paginatedOrders = filteredOrders.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  const totalPages = Math.ceil(filteredOrders.length / 10);

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
        {['all', 'processing', 'pending', 'completed', 'cancelled'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-lg py-2 ${activeTab === tab ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container'} rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform`}
          >
            {tab === 'all' ? 'Semua' : tab === 'processing' ? 'Diproses' : tab === 'pending' ? 'Menunggu Bayar' : tab === 'completed' ? 'Selesai' : 'Dibatalkan'}
          </button>
        ))}
      </nav>

      <main className="px-margin py-lg space-y-md">
        {paginatedOrders.map(order => (
          <div
            key={order.id}
            className={`bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md ${order.status === 'cancelled' ? 'opacity-75' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div className="space-y-xs">
                <p className="font-label-caps text-label-caps text-on-surface-variant">#{order.id}</p>
                <h3 className="font-heading-md text-heading-md">{order.title}</h3>
                <p className="font-body-base text-body-base text-tx-secondary">{order.date}</p>
              </div>
              <span className={`px-3 py-1 ${statusColors[order.status]} text-[11px] font-bold rounded-full uppercase tracking-wider`}>
                {order.status === 'processing' ? 'Diproses' : order.status === 'pending' ? 'Menunggu Bayar' : order.status === 'completed' ? 'Selesai' : 'Dibatalkan'}
              </span>
            </div>
            <div className="flex items-center gap-md pt-sm border-t border-border">
              <div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
                <img
                  className={`w-full h-full object-cover ${order.status === 'pending' ? 'grayscale opacity-60' : order.status === 'completed' ? 'opacity-80' : ''}`}
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
            {order.status === 'pending' && (
              <button className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">
                Bayar Sekarang
              </button>
            )}
          </div>
        ))}

        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-md">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full disabled:opacity-50"
            >
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-full ${currentPage === page ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container'}`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full disabled:opacity-50"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
