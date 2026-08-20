import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetailPesananTransactionDetail() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="bg-surface sticky top-0 w-full z-50 flex items-center justify-between px-margin py-sm border-b border-border">
<div className="flex items-center gap-4">
<button className="active:scale-95 duration-100 p-1 rounded-full hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<div>
<h1 className="font-heading-md text-heading-md-mobile text-on-surface">Detail Pesanan</h1>
<p className="text-xs text-on-surface-variant">#JT-1042</p>
</div>
</div>
<button className="active:scale-95 duration-100 p-1 rounded-full hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</header>
<main className="p-md space-y-md max-w-md mx-auto">

<section className="bg-surface border border-border rounded-2xl p-md">
<div className="relative flex justify-between items-start">

<div className="absolute top-4 left-0 w-full h-[2px] bg-surface-container-highest -z-0"></div>

<div className="absolute top-4 left-0 w-2/3 h-[2px] bg-primary -z-0"></div>

<div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check</span>
</div>
<span className="text-[10px] text-center font-medium leading-tight text-on-surface">Order Masuk</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check</span>
</div>
<span className="text-[10px] text-center font-medium leading-tight text-on-surface">Barang Terbeli</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
<div className="w-8 h-8 rounded-full bg-primary border-4 border-primary-fixed flex items-center justify-center text-white">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="text-[10px] text-center font-bold leading-tight text-primary">Menunggu Pembayaran</span>
</div>

<div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
<div className="w-2 h-2 rounded-full bg-outline-variant"></div>
</div>
<span className="text-[10px] text-center font-medium leading-tight text-on-surface-variant">Lunas/ Selesai</span>
</div>
</div>
</section>

<section className="space-y-sm">
<h2 className="font-label-caps text-label-caps text-on-surface-variant px-1">ITEM PESANAN</h2>
<div className="bg-surface border border-border rounded-2xl p-md flex gap-md">
<div className="w-20 h-20 rounded-xl bg-surface-container-low flex-shrink-0 overflow-hidden border border-border">
<img alt="Premium Baby Stroller" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4"/>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<h3 className="font-medium text-on-surface text-body-base leading-tight">Stroller Bayi Premium</h3>
<p className="text-xs text-on-surface-variant mt-0.5">1x item</p>
</div>
<div className="flex justify-between items-end">
<div className="text-xs text-on-surface-variant">Fee: <span className="text-on-surface">Rp15.000</span></div>
<div className="font-bold text-primary text-body-base">Rp150.000</div>
</div>
</div>
</div>
</section>

<section className="bg-surface border border-border rounded-2xl p-md space-y-md">
<h2 className="font-label-caps text-label-caps text-on-surface-variant">RINGKASAN BIAYA</h2>
<div className="space-y-sm">
<div className="flex justify-between text-body-base">
<span className="text-on-surface-variant">Subtotal</span>
<span className="text-on-surface">Rp150.000</span>
</div>
<div className="flex justify-between text-body-base">
<span className="text-on-surface-variant">Total Fee</span>
<span className="text-on-surface">Rp15.000</span>
</div>
<div className="flex justify-between text-body-base">
<span className="text-on-surface-variant">Biaya Packing</span>
<span className="text-on-surface">Rp10.000</span>
</div>
<div className="flex justify-between text-body-base">
<span className="text-on-surface-variant">Ongkir</span>
<span className="text-on-surface">Rp25.000</span>
</div>
<div className="pt-sm border-t border-dashed border-outline-variant flex justify-between items-center">
<span className="font-semibold text-on-surface">Total Pembayaran</span>
<span className="text-heading-md-mobile font-bold text-primary">Rp200.000</span>
</div>
</div>
</section>

<section className="flex flex-col gap-sm pt-4">
<button className="w-full py-3 px-4 rounded-full border border-error text-error font-semibold text-body-base active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-error-tint">
<span className="material-symbols-outlined text-[18px]">cancel</span>
                Ajukan Pembatalan
            </button>
<button className="w-full py-2 text-primary font-medium text-sm underline flex items-center justify-center gap-1 active:opacity-70 transition-opacity">
<span className="material-symbols-outlined text-[16px]">download</span>
                Unduh Invoice
            </button>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full bg-surface border-t border-border p-md z-50 flex justify-center">
<button className="w-full max-w-md py-4 rounded-full bg-[#8F85E0] text-white font-bold text-body-base shadow-lg shadow-[#8F85E0]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>cloud_upload</span>
            Upload Bukti Bayar
        </button>
</div>

<nav className="fixed bottom-0 left-0 w-full z-40 flex justify-around items-center bg-surface dark:bg-surface-dim px-2 pb-6 pt-2 border-t border-border hidden">

<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1" href="#">
<span className="material-symbols-outlined">home</span>
<span className="font-label-caps text-label-caps">Beranda</span>
</a>
<a className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-3 py-1" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>receipt_long</span>
<span className="font-label-caps text-label-caps">Pesanan</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1" href="#">
<span className="material-symbols-outlined">chat_bubble</span>
<span className="font-label-caps text-label-caps">Pesan</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-caps text-label-caps">Profil</span>
</a>
</nav>


    </div>
  );
}
