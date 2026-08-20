import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetailProduk() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      
<main className="w-full max-w-md bg-surface min-h-screen flex flex-col relative overflow-x-hidden">

<section className="relative h-[420px] w-full shrink-0 overflow-hidden">
<div className="absolute top-md left-md z-20">
<button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-tx-primary active:scale-95 transition-transform" onclick="history.back()">
<span className="material-symbols-outlined">arrow_back</span>
</button>
</div>
<div className="flex h-full w-full">
<img alt="Product Image Carousel" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnXOsKeD0T55WTpgBOfcBZzP59Oa_QCP1sHcw3bfKuS-p1CtRAUtMgAhVXOuY35ZZ-iWp09L7bzI4A98w_HwJ7rQSPLHi7cm-R1lKCH4iPPDZB3y9skdfDUkOim0yExjO_CdIJzhOZ17PoZ4MW1l00YUuWt_qSTZtGko_8mFHiFDH3KO-1ZKuPbYsxQEh2x2-NbS8FbO32BTQESSLvI6eW-ZQcwNeklrN4hQxQQcQN4zaew_RYg4jA"/>
</div>

<div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
<div className="w-6 h-1 rounded-full bg-brand-primary"></div>
<div className="w-1.5 h-1 rounded-full bg-white/60"></div>
<div className="w-1.5 h-1 rounded-full bg-white/60"></div>
</div>
</section>

<section className="flex-1 px-margin py-xl bg-surface rounded-t-[24px] -mt-6 relative z-10">

<div className="mb-lg">
<h1 className="font-display-lg-mobile text-display-lg-mobile text-tx-primary mb-xs">Stroller Bayi Premium</h1>
<div className="flex items-baseline gap-sm">
<span className="text-heading-md font-heading-md text-brand-primary">Rp150.000</span>
</div>
<div className="mt-sm px-md py-sm bg-surface-container rounded-xl flex items-center justify-between">
<span className="text-label-caps font-label-caps text-tx-secondary">Harga Rp150.000 + Fee Rp15.000</span>
</div>
</div>

<div className="flex items-center gap-sm mb-xl py-sm">
<div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">event_available</span>
</div>
<div className="flex flex-col">
<span className="text-label-caps font-label-caps text-on-surface-variant">Event: Perlengkapan Bayi</span>
<span className="text-label-caps font-label-caps text-error-text">Berakhir 3 hari lagi</span>
</div>
</div>

<div className="flex items-center justify-between mb-xl border-y border-border py-md">
<span className="text-body-base font-medium text-tx-primary">Jumlah</span>
<div className="flex items-center gap-md bg-surface-container rounded-full p-1 border border-border">
<button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-brand-primary hover:bg-primary-fixed transition-colors active:scale-90" id="decrement">
<span className="material-symbols-outlined text-[18px]">remove</span>
</button>
<span className="font-bold text-tx-primary w-6 text-center" id="quantity">1</span>
<button className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-brand-primary hover:bg-primary-fixed transition-colors active:scale-90" id="increment">
<span className="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>

<div className="mb-32">
<h2 className="font-heading-md text-heading-md text-tx-primary mb-sm">Deskripsi Produk</h2>
<div className="space-y-md text-body-base font-body-base text-on-surface-variant leading-relaxed">
<p>
            Stroller bayi premium ini dirancang untuk memberikan kenyamanan maksimal bagi sang buah hati sekaligus kemudahan bagi orang tua. Menggunakan material berkualitas tinggi dengan rangka aluminium yang ringan namun sangat kokoh.
          </p>
<ul className="list-disc pl-5 space-y-xs">
<li>Sistem lipat satu tangan yang sangat praktis.</li>
<li>Sandaran kursi yang dapat diatur hingga posisi tidur.</li>
<li>Kanopi lebar dengan perlindungan UV 50+.</li>
<li>Roda dengan suspensi ganda untuk jalanan tidak rata.</li>
</ul>
</div>
</div>
</section>

<div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white p-md border-t border-border flex items-center gap-lg z-50">
<div className="flex flex-col shrink-0">
<span className="text-label-caps font-label-caps text-tx-secondary">Total Tagihan</span>
<span className="text-heading-md font-bold text-brand-primary" id="total-price">Rp165.000</span>
</div>
<button className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-sm active:scale-[0.98] transition-transform shadow-lg shadow-primary/20">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>shopping_cart</span>
        Tambah ke Pesanan
      </button>
</div>
</main>


    </div>
  );
}
