import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PesananSayaOrderReview() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant flex items-center px-margin h-16 w-full">
<button className="mr-4 p-2 rounded-full hover:bg-surface-container-low transition-colors duration-200 active:opacity-70">
<span className="material-symbols-outlined text-primary">arrow_back</span>
</button>
<h1 className="font-heading-md text-heading-md text-tx-primary">Pesanan Saya</h1>
</header>
<main className="mt-20 px-4 max-w-lg mx-auto space-y-6">

<section className="space-y-4">
<div className="flex justify-between items-center px-1">
<h2 className="font-heading-md text-body-base font-bold text-tx-primary">Daftar Produk</h2>
<span className="text-label-caps text-on-surface-variant">2 Item</span>
</div>

<div className="bg-surface border border-border rounded-2xl p-4 flex gap-4 transition-all hover:border-primary-container">
<div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover" src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"/>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-heading-md text-body-base text-tx-primary leading-tight">Stroller Bayi Premium</h3>
<div className="flex gap-1">
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1 text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
<p className="text-label-caps text-on-surface-variant mt-0.5">1x</p>
</div>
<div className="flex justify-between items-end mt-2">
<div className="text-label-caps text-on-surface-variant">Fee Rp15.000</div>
<div className="font-bold text-primary">Rp1.850.000</div>
</div>
</div>
</div>

<div className="bg-surface border border-border rounded-2xl p-4 flex gap-4 transition-all hover:border-primary-container">
<div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-surface-container-low">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4"/>
</div>
<div className="flex-grow flex flex-col justify-between">
<div>
<div className="flex justify-between items-start">
<h3 className="font-heading-md text-body-base text-tx-primary leading-tight">LuxeCare Premium Diapers</h3>
<div className="flex gap-1">
<button className="p-1 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px]">edit</span>
</button>
<button className="p-1 text-on-surface-variant hover:text-error transition-colors">
<span className="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
</div>
<p className="text-label-caps text-on-surface-variant mt-0.5">2x</p>
</div>
<div className="flex justify-between items-end mt-2">
<div className="text-label-caps text-on-surface-variant">Fee Rp5.000</div>
<div className="font-bold text-primary">Rp300.000</div>
</div>
</div>
</div>
</section>

<section className="space-y-4">
<h2 className="font-heading-md text-body-base font-bold text-tx-primary px-1">Data Penerima</h2>
<div className="bg-surface border border-border rounded-2xl p-5 space-y-4">
<div className="space-y-1.5">
<label className="font-label-caps text-on-surface-variant ml-1">Nama Penerima</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl px-4 py-3 font-body-base input-focus transition-all" placeholder="Masukkan nama lengkap" type="text" value="Andi Setiawan"/>
</div>
<div className="space-y-1.5">
<label className="font-label-caps text-on-surface-variant ml-1">No. Telepon Penerima</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl px-4 py-3 font-body-base input-focus transition-all" placeholder="0812xxxx" type="tel" value="081234567890"/>
</div>
<div className="space-y-1.5">
<label className="font-label-caps text-on-surface-variant ml-1">Alamat Lengkap Penerima</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-2xl px-4 py-3 font-body-base input-focus transition-all resize-none" placeholder="Jl. Mawar No. 123, Jakarta Selatan" rows="3">Jl. Melati Putih No. 45, Kebayoran Baru, Jakarta Selatan, 12150</textarea>
</div>
</div>
</section>

<section className="space-y-4 pb-8">
<h2 className="font-heading-md text-body-base font-bold text-tx-primary px-1">Ringkasan Biaya</h2>
<div className="bg-surface border border-border rounded-2xl p-5 space-y-3">
<div className="flex justify-between items-center">
<span className="text-body-base text-on-surface-variant">Subtotal</span>
<span className="text-body-base font-medium text-tx-primary">Rp2.150.000</span>
</div>
<div className="flex justify-between items-center">
<span className="text-body-base text-on-surface-variant">Total Fee</span>
<span className="text-body-base font-medium text-tx-primary">Rp25.000</span>
</div>
<div className="pt-3 border-t border-outline-variant flex justify-between items-center">
<span className="font-heading-md text-body-base text-tx-primary">Estimasi Total</span>
<span className="font-heading-md text-heading-md text-primary">Rp2.175.000</span>
</div>
<p className="text-[11px] leading-relaxed text-on-surface-variant mt-2 italic">
                    * Ongkir &amp; biaya packing dihitung setelah barang dibeli oleh admin kami.
                </p>
</div>
</section>
</main>

<div className="fixed bottom-0 left-0 w-full bg-surface border-t border-outline-variant px-margin py-4 z-50">
<div className="max-w-lg mx-auto">
<button className="btn-primary w-full py-4 rounded-2xl text-on-primary font-bold text-body-base shadow-lg transition-transform active:scale-95 duration-200">
                Buat Pesanan
            </button>
</div>
</div>

<nav className="hidden md:flex fixed bottom-0 left-0 w-full h-20 justify-around items-center px-4 bg-surface border-t border-outline-variant">
<div className="flex flex-col items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined">home</span>
<span className="text-label-caps">Home</span>
</div>
<div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-xl px-3 py-1">
<span className="material-symbols-outlined">receipt_long</span>
<span className="text-label-caps">Pesanan</span>
</div>
<div className="flex flex-col items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined">mail</span>
<span className="text-label-caps">Inbox</span>
</div>
<div className="flex flex-col items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined">person</span>
<span className="text-label-caps">Profil</span>
</div>
</nav>


    </div>
  );
}
