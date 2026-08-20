import { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderStatusBadge from '../components/OrderStatusBadge';

export default function DaftarPesananSaya() {
  const [activeTab, setActiveTab] = useState('Semua');

  const orders = [
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
          name: 'Lampu Tidur Bayi LED',
          price: 'Rp350.000',
          quantity: 1,
          image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4'
        }
      ]
    }
  ];

  const filteredOrders = activeTab === 'Semua' ? orders : orders.filter(order => order.status === activeTab);

  return (
    <div className="min-h-screen bg-surface-container">
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
        {['Semua', 'Diproses', 'Menunggu Bayar', 'Selesai'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-lg py-2 ${activeTab === tab ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container'} rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="px-margin py-lg space-y-md">
        {filteredOrders.map(order => (
          <div
            key={order.id}
            className={`bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md ${order.status === 'Dibatalkan' ? 'opacity-75' : ''}`}
          >
            <div className="flex justify-between items-start">
              <div className="space-y-xs">
                <p className="font-label-caps text-label-caps text-on-surface-variant">#{order.id}</p>
                <h3 className="font-heading-md text-heading-md">{order.title}</h3>
                <p className="font-body-base text-body-base text-tx-secondary">{order.date}</p>
              </div>
              <OrderStatusBadge status={order.status} />
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
                  <p className="font-heading-md text-heading-md text-primary">{order.items[0].price}</p>
                  <p className="text-xs text-tx-secondary">{order.items[0].quantity} Barang</p>
                </div>
              </div>
            </div>
            {order.status === 'Menunggu Bayar' && (
              <Link
                to={`/pesanan-saya/${order.id}/review`}
                className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform text-center"
              >
                Bayar Sekarang
              </Link>
            )}
            {order.status === 'Selesai' && (
              <Link
                to={`/pesanan-saya/${order.id}/detail`}
                className="w-full py-2 bg-surface-container text-on-surface-variant rounded-full font-label-caps text-label-caps active:scale-95 transition-transform text-center"
              >
                Lihat Detail
              </Link>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
