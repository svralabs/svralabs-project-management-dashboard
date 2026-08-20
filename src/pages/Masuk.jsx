import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Masuk() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full top-0 bg-background flex items-center px-gutter h-16 sticky z-50">
<button aria-label="Kembali" className="material-symbols-outlined text-primary p-2 -ml-2 rounded-full hover:bg-surface-variant transition-colors active:scale-95 transition-transform">
            arrow_back
        </button>
<h1 className="font-display-lg-mobile text-display-lg-mobile text-primary ml-2">Masuk</h1>
</header>
<main className="w-full max-w-md px-gutter flex-1 flex flex-col py-xl">

<div className="mb-xl text-center">
<div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-primary mb-md">
<span className="material-symbols-outlined text-white text-4xl" style={{fontVariationSettings: '\'FILL\' 1'}}>volume_mute</span>
</div>
<h2 className="font-heading-md text-heading-md text-on-background mb-xs">Selamat Datang Kembali</h2>
<p className="text-tx-secondary">Kelola tugas harian Anda dengan mudah.</p>
</div>

<section className="space-y-lg bento-card p-lg rounded-lg">

<div className="space-y-xs">
<label className="font-label-caps text-label-caps text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full px-md py-3 bg-surface rounded-lg border border-border text-body-base focus:ring-0 focus:border-primary transition-all duration-200" id="email" placeholder="nama@email.com" type="email"/>
</div>

<div className="space-y-xs">
<label className="font-label-caps text-label-caps text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="password">Kata Sandi</label>
<div className="relative group">
<input className="w-full px-md py-3 bg-surface rounded-lg border border-border text-body-base focus:ring-0 focus:border-primary transition-all duration-200 pr-12" id="password" placeholder="••••••••" type="password"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors p-1" onclick="togglePassword()" type="button">
<span className="material-symbols-outlined" id="password-toggle-icon">visibility</span>
</button>
</div>
<div className="flex justify-end">
<a className="text-label-caps font-label-caps text-primary hover:underline transition-all" href="#">Lupa kata sandi?</a>
</div>
</div>
</section>

<section className="mt-xl space-y-md">

<button className="w-full bg-primary text-white py-4 px-xl rounded-lg font-heading-md text-body-base transition-all active:scale-95 hover:opacity-90">
                Masuk
            </button>

<div className="flex items-center gap-md py-md">
<div className="flex-1 h-px bg-border"></div>
<span className="font-label-caps text-label-caps text-tx-secondary uppercase tracking-widest">atau</span>
<div className="flex-1 h-px bg-border"></div>
</div>

<button className="w-full bg-surface border border-border text-on-surface py-3.5 px-xl rounded-lg font-heading-md text-body-base flex items-center justify-center gap-md transition-all active:scale-95 hover:bg-surface-variant">
<svg className="mr-2" height="20" viewbox="0 0 24 24" width="20">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</svg>
                Masuk dengan Google
            </button>
</section>

<footer className="mt-auto py-lg text-center">
<p className="text-body-base text-tx-secondary">
                Belum punya akun? 
                <a className="text-primary font-bold hover:underline ml-1" href="#">Daftar</a>
</p>
</footer>
</main>



    </div>
  );
}
