import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderCard from '../components/OrderCard';

const mockOrders = [
  {
    id: '#JT-1042',
    title: 'Perlengkapan Bayi',
    date: '15 Juli 2026',
    status: 'Diproses',
    items: 'Stroller Modern Premium - Dark Edition',
    total: 'Rp2.175.000',
    quantity: 1,
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
  },
  {
    id: '#JT-0988',
    title: 'Koleksi Mainan',
    date: '14 Juli 2026',
    status: 'Menunggu Bayar',
    items: 'Puzzle Kayu Montessori (Set of 5)',
    total: 'Rp450.000',
    quantity: 2,
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
    actionButton: 'Bayar Sekarang',
  },
  {
    id: '#JT-0855',
    title: 'Kebutuhan Ibu',
    date: '10 Juli 2026',
    status: 'Selesai',
    items: 'Tas Diaper Waterproof Oxford',
    total: 'Rp825.000',
    quantity: 1,
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
  },
  {
    id: '#JT-0712',
    title: 'Aksesoris Kamar',
    date: '05 Juli 2026',
    status: 'Dibatalkan',
    items: 'Lampu Tidur Bayi LED',
    total: 'Rp350.000',
    quantity: 1,
    imageUrl: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
  },
];

export default function DaftarPesananSaya() {
  const [activeFilter, setActiveFilter] = useState('Semua');
  const navigate = useNavigate();

  const filteredOrders = activeFilter === 'Semua'
    ? mockOrders
    : mockOrders.filter(order => order.status === activeFilter);

  const handleOrderClick = (orderId) => {
    navigate(`/detail-pesanan/${orderId}`);
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
        {['Semua', 'Diproses', 'Menunggu Bayar', 'Selesai'].map(filter => (
          <button
            key={filter}
            className={`px-lg py-2 ${activeFilter === filter ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container'} rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </nav>

      <main className="px-margin py-lg space-y-md">
        {filteredOrders.map(order => (
          <OrderCard
            key={order.id}
            order={order}
            onClick={() => handleOrderClick(order.id)}
          />
        ))}
      </main>
    </div>
  );
}
