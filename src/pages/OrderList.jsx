import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function OrderList() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('Semua');

  const filters = ['Semua', 'Diproses', 'Menunggu Bayar', 'Selesai', 'Dibatalkan'];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const mockOrders = [
          {
            id: 'JT-1042',
            title: 'Perlengkapan Bayi',
            date: '15 Juli 2026',
            status: 'Diproses',
            items: [
              {
                name: 'Stroller Modern Premium - Dark Edition',
                price: 'Rp2.175.000',
                quantity: 1,
                image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4'
              }
            ]
          },
          {
            id: 'JT-0988',
            title: 'Koleksi Mainan',
            date: '14 Juli 2026',
            status: 'Menunggu Bayar',
            items: [
              {
                name: 'Puzzle Kayu Montessori (Set of 5)',
                price: 'Rp450.000',
                quantity: 2,
                image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4'
              }
            ]
          },
          {
            id: 'JT-0855',
            title: 'Kebutuhan Ibu',
            date: '10 Juli 2026',
            status: 'Selesai',
            items: [
              {
                name: 'Tas Diaper Waterproof Oxford',
                price: 'Rp825.000',
                quantity: 1,
                image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4'
              }
            ]
          },
          {
            id: 'JT-0712',
            title: 'Aksesoris Kamar',
            date: '05 Juli 2026',
            status: 'Dibatalkan',
            items: [
              {
                name: 'Bantal Bayi Organik',
                price: 'Rp350.000',
                quantity: 1,
                image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4'
              }
            ]
          }
        ];
        setOrders(mockOrders);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const filteredOrders = activeFilter === 'Semua'
    ? orders
    : orders.filter(order => order.status === activeFilter);

  const getStatusStyle = (status) => {
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
        return 'bg-secondary-container text-primary';
    }
  };

  const getImageStyle = (status) => {
    switch (status) {
      case 'Menunggu Bayar':
        return 'grayscale opacity-60';
      case 'Selesai':
        return 'opacity-80';
      case 'Dibatalkan':
        return 'grayscale opacity-60';
      default:
        return '';
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">Error: {error}</div>;

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
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-lg py-2 ${activeFilter === filter ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container transition-colors'} rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform`}
          >
            {filter}
          </button>
        ))}
      </nav>

      <main className="px-margin py-lg space-y-md">
        {filteredOrders.map(order => (
          <Link to={`/order/${order.id}`} key={order.id} className="block">
            <div className={`bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md ${order.status === 'Dibatalkan' ? 'opacity-75' : ''}`}>
              <div className="flex justify-between items-start">
                <div className="space-y-xs">
                  <p className="font-label-caps text-label-caps text-on-surface-variant">#{order.id}</p>
                  <h3 className="font-heading-md text-heading-md">{order.title}</h3>
                  <p className="font-body-base text-body-base text-tx-secondary">{order.date}</p>
                </div>
                <span className={`px-3 py-1 ${getStatusStyle(order.status)} text-[11px] font-bold rounded-full uppercase tracking-wider`}>
                  {order.status}
                </span>
              </div>
              <div className="flex items-center gap-md pt-sm border-t border-border">
                <div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
                  <img
                    className={`w-full h-full object-cover ${getImageStyle(order.status)}`}
                    src={order.items[0].image}
                    alt={order.items[0].name}
                  />
                </div>
                <div className="flex-grow">
                  <p className="font-body-base text-body-base text-on-surface-variant">{order.items[0].name}</p>
                  <div className="mt-xs flex justify-between items-end">
                    <p className="font-heading-md text-heading-md text-primary">{order.items[0].price}</p>
                    <p className="text-xs text-tx-secondary">{order.items[0].quantity} Barang</p>
                  </div>
                </div>
              </div>
              {order.status === 'Menunggu Bayar' && (
                <button className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">
                  Bayar Sekarang
                </button>
              )}
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
