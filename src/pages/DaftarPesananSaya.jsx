import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DaftarPesananSaya() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

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
<button className="px-lg py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform">
            Semua
        </button>
<button className="px-lg py-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform">
            Diproses
        </button>
<button className="px-lg py-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform">
            Menunggu Bayar
        </button>
<button className="px-lg py-2 text-on-surface-variant hover:bg-surface-container transition-colors rounded-full font-label-caps text-label-caps whitespace-nowrap active:scale-95 transition-transform">
            Selesai
        </button>
</nav>

<main className="px-margin py-lg space-y-md">

<div className="bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md">
<div className="flex justify-between items-start">
<div className="space-y-xs">
<p className="font-label-caps text-label-caps text-on-surface-variant">#JT-1042</p>
<h3 className="font-heading-md text-heading-md">Perlengkapan Bayi</h3>
<p className="font-body-base text-body-base text-tx-secondary">15 Juli 2026</p>
</div>
<span className="px-3 py-1 bg-secondary-container text-primary text-[11px] font-bold rounded-full uppercase tracking-wider">
                    Diproses
                </span>
</div>
<div className="flex items-center gap-md pt-sm border-t border-border">
<div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4"/>
</div>
<div className="flex-grow">
<p className="font-body-base text-body-base text-on-surface-variant">Stroller Modern Premium - Dark Edition</p>
<div className="mt-xs flex justify-between items-end">
<p className="font-heading-md text-heading-md text-primary">Rp2.175.000</p>
<p className="text-xs text-tx-secondary">1 Barang</p>
</div>
</div>
</div>
</div>

<div className="bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md">
<div className="flex justify-between items-start">
<div className="space-y-xs">
<p className="font-label-caps text-label-caps text-on-surface-variant">#JT-0988</p>
<h3 className="font-heading-md text-heading-md">Koleksi Mainan</h3>
<p className="font-body-base text-body-base text-tx-secondary">14 Juli 2026</p>
</div>
<span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[11px] font-bold rounded-full uppercase tracking-wider">
                    Menunggu Bayar
                </span>
</div>
<div className="flex items-center gap-md pt-sm border-t border-border">
<div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
<img className="w-full h-full object-cover grayscale opacity-60" src="https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4"/>
</div>
<div className="flex-grow">
<p className="font-body-base text-body-base text-on-surface-variant">Puzzle Kayu Montessori (Set of 5)</p>
<div className="mt-xs flex justify-between items-end">
<p className="font-heading-md text-heading-md text-primary">Rp450.000</p>
<p className="text-xs text-tx-secondary">2 Barang</p>
</div>
</div>
</div>
<button className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">
                Bayar Sekarang
            </button>
</div>

<div className="bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md">
<div className="flex justify-between items-start">
<div className="space-y-xs">
<p className="font-label-caps text-label-caps text-on-surface-variant">#JT-0855</p>
<h3 className="font-heading-md text-heading-md">Kebutuhan Ibu</h3>
<p className="font-body-base text-body-base text-tx-secondary">10 Juli 2026</p>
</div>
<span className="px-3 py-1 bg-success-tint text-success-text text-[11px] font-bold rounded-full uppercase tracking-wider">
                    Selesai
                </span>
</div>
<div className="flex items-center gap-md pt-sm border-t border-border">
<div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
<img className="w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4"/>
</div>
<div className="flex-grow">
<p className="font-body-base text-body-base text-on-surface-variant">Tas Diaper Waterproof Oxford</p>
<div className="mt-xs flex justify-between items-end">
<p className="font-heading-md text-heading-md text-primary">Rp825.000</p>
<p className="text-xs text-tx-secondary">1 Barang</p>
</div>
</div>
</div>
</div>

<div className="bg-surface border border-border rounded-[14px] p-md flex flex-col gap-md opacity-75">
<div className="flex justify-between items-start">
<div className="space-y-xs">
<p className="font-label-caps text-label-caps text-on-surface-variant">#JT-0712</p>
<h3 className="font-heading-md text-heading-md">Aksesoris Kamar</h3>
<p className="font-body-base text-body-base text-tx-secondary">05 Juli 2026</p>
</div>
<span className="px-3 py-1 bg-error-tint text-error-text text-[11px] font-bold rounded-full uppercase tracking-wider">
                    Dibatalkan
                </span>
</div>
<div className="flex items-center gap-md pt-sm border-t border-border">
<div className="w-20 h-20 bg-surface-container rounded-lg overflow-hidden shrink-0 border border-border">
<img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4"/>
</div>
<div className="flex-grow">
<p className="font-body-base text-body-base text-on-surface-variant">Lampu Tidur Cloud Smart LED</p>
<div className="mt-xs flex justify-between items-end">
<p className="font-heading-md text-heading-md text-tx-secondary line-through">Rp320.000</p>
<p className="text-xs text-tx-secondary">1 Barang</p>
</div>
</div>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full z-50 rounded-t-xl bg-surface dark:bg-surface-dim border-t border-border dark:border-outline-variant flex justify-around items-center px-gutter py-sm">

<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-transform">
<span className="material-symbols-outlined">home</span>
<span className="font-label-caps text-label-caps mt-1">Beranda</span>
</div>

<div className="flex flex-col items-center justify-center bg-secondary-container dark:bg-secondary text-on-secondary-container dark:text-on-secondary rounded-full px-4 py-1 active:scale-90 transition-transform">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_bag</span>
<span className="font-label-caps text-label-caps mt-1">Pesanan</span>
</div>

<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-transform">
<span className="material-symbols-outlined">calendar_today</span>
<span className="font-label-caps text-label-caps mt-1">Kalender</span>
</div>

<div className="flex flex-col items-center justify-center text-on-surface-variant dark:text-on-surface-variant px-4 py-1 hover:text-primary dark:hover:text-primary-fixed-dim active:scale-90 transition-transform">
<span className="material-symbols-outlined">person</span>
<span className="font-label-caps text-label-caps mt-1">Akun</span>
</div>
</nav>



    </div>
  );
}
