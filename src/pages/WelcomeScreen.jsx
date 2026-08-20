import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function WelcomeScreen() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<main className="flex-1 flex flex-col justify-between px-margin py-xl max-w-md mx-auto w-full overflow-hidden">

<header className="flex justify-center items-center py-gutter fade-in" style={{animationDelay: '0.1s'}}>
<div className="w-48 h-16 flex items-center justify-center">
<img alt="Logo [NAMA BRAND]" className="max-w-full max-h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKVsjU38WuVwheL8P2Z5BIZTCpO-RwhX96C3n5F8jvcofKHujGysNkS2ZYkzdR0mWdTRIfR3Vj7qAOoOIBPA_9IdLWuf-UzFBiX_0diu7qPEvqdeWeKDXsNTvKgyzwTLZO97xZ4dfywgZbhb2EFDHIVDDoAdvYllAD7WqEhvXag1m7qs5CDkIsabA0TGDPnenap8kpCWJm7DDv-3-dx4QMbjdjShiOVzUESMk4ORMCpMb8gFI1QJMd"/>
</div>
</header>

<section className="flex-1 flex flex-col items-center justify-center fade-in" style={{animationDelay: '0.3s'}}>
<div className="relative w-full aspect-square max-w-[280px] mb-xl">
<img alt="Shopping bag illustration with gifts" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXx3zGYjA5FKdH8gT_Jyobf3zlw7H-XeQFpo5cbk7CfWkoHJWzWjku6Go9z1uyzvyKtT08Uv4ZozJ5p_9f96n5DTBIDS6DuloEAy4uL7RuylUiCrkTFwGg-Nb0Bj9DRgt8Z9mWPvbWJHQV8iafq-Vvt7bpeansKQ8gsz8w3bupEWemUGx4bpsBvt578lWEa9uwpFyIMx_ZP8g3QLhvqjMriwPrjHi_iuPWPR9KGeGNXT79626y9PVQ"/>
</div>

<div className="text-center space-y-md">
<h1 className="font-display-lg-mobile text-display-lg-mobile text-tx-primary tracking-tight">
                    Titip belanja, gampang & aman
                </h1>
<p className="font-body-base text-body-base text-tx-secondary px-sm leading-relaxed">
                    Solusi praktis belanja produk impian dari mana saja dengan aman.
                </p>
</div>
</section>

<footer className="flex flex-col gap-md py-gutter fade-in" style={{animationDelay: '0.5s'}}>
<button className="w-full h-[54px] bg-[#8F85E0] text-on-primary font-heading-md text-heading-md custom-rounded shadow-sm btn-active-state transition-all flex items-center justify-center">
                Masuk
            </button>
<button className="w-full h-[54px] bg-transparent border border-outline-variant text-tx-primary font-heading-md text-heading-md custom-rounded btn-active-state transition-all flex items-center justify-center">
                Daftar
            </button>

<div className="mt-sm text-center">
<p className="font-label-caps text-label-caps text-outline italic">
                    Versi 1.0.4 • TaskFlow Powered
                </p>
</div>
</footer>
</main>



    </div>
  );
}
