import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NotifikasiNotifications() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex items-center justify-between px-md h-14">
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-primary transition-colors duration-200 ease-in-out hover:bg-surface-container p-2 rounded-full">
                arrow_back
            </button>
<h1 className="font-heading-md text-heading-md font-bold text-on-surface">Notifikasi</h1>
</div>
<button className="text-primary font-label-caps text-label-caps font-semibold">Tandai Dibaca</button>
</header>

<main className="pt-14 pb-20 px-gutter">

<section className="mt-6">
<h2 className="font-bold text-on-surface-variant mb-4 px-1">Hari Ini</h2>
<div className="space-y-3">

<div className="notification-item bg-surface rounded-xl border border-border p-md flex gap-4 transition-colors duration-200">
<div className="w-12 h-12 bg-secondary-container rounded-[14px] flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-primary" data-icon="receipt">receipt</span>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="font-bold text-on-surface leading-tight">Invoice final sudah terbit</h3>
<span className="text-[11px] text-primary font-medium">10:30</span>
</div>
<p className="font-body-base text-body-base text-on-surface-variant">Silakan cek detail pesanan Anda untuk melakukan pelunasan.</p>
<div className="mt-1 flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="text-[10px] uppercase tracking-wider text-primary font-bold">Penting</span>
</div>
</div>
</div>

<div className="notification-item bg-surface rounded-xl border border-border p-md flex gap-4 transition-colors duration-200">
<div className="w-12 h-12 bg-error-tint rounded-[14px] flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-error-text" data-icon="cancel">cancel</span>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="font-bold text-on-surface leading-tight">Pengajuan pembatalan disetujui</h3>
<span className="text-[11px] text-primary font-medium">08:45</span>
</div>
<p className="font-body-base text-body-base text-on-surface-variant">Pembatalan pesanan #JT-0912 telah disetujui oleh tim.</p>
<div className="mt-1">
<span className="w-2 h-2 inline-block rounded-full bg-primary"></span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8">
<h2 className="font-bold text-on-surface-variant mb-4 px-1">Kemarin</h2>
<div className="space-y-3">

<div className="notification-item bg-surface/60 rounded-xl border border-border p-md flex gap-4 transition-colors duration-200">
<div className="w-12 h-12 bg-success-tint rounded-[14px] flex items-center justify-center shrink-0 opacity-80">
<span className="material-symbols-outlined text-success-text" data-icon="check_circle">check_circle</span>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="font-semibold text-on-surface leading-tight opacity-70">Pembayaran divalidasi</h3>
<span className="text-[11px] text-outline font-medium">14:15</span>
</div>
<p className="font-body-base text-body-base text-on-surface-variant opacity-70">Pembayaran untuk pesanan #JT-1042 telah berhasil diverifikasi.</p>
</div>
</div>

<div className="notification-item bg-surface/60 rounded-xl border border-border p-md flex gap-4 transition-colors duration-200">
<div className="w-12 h-12 bg-surface-container rounded-[14px] flex items-center justify-center shrink-0 opacity-80">
<span className="material-symbols-outlined text-on-secondary-fixed-variant" data-icon="notifications_active">notifications_active</span>
</div>
<div className="flex-1 flex flex-col gap-1">
<div className="flex justify-between items-start">
<h3 className="font-semibold text-on-surface leading-tight opacity-70">Pengingat Bayar</h3>
<span className="text-[11px] text-outline font-medium">09:00</span>
</div>
<p className="font-body-base text-body-base text-on-surface-variant opacity-70">Segera lakukan pembayaran sebelum pukul 18:00 WIB.</p>
</div>
</div>
</div>
</section>

<div className="mt-12 mb-8 bg-primary rounded-2xl p-6 text-on-primary overflow-hidden relative">
<div className="relative z-10">
<h4 className="font-heading-md text-heading-md mb-2">Butuh Bantuan?</h4>
<p className="font-body-base text-on-primary/80 mb-4">Hubungi tim support kami jika Anda mengalami kendala dengan pesanan.</p>
<button className="bg-surface text-primary font-bold px-6 py-2 rounded-full text-sm active:scale-95 transition-transform">Hubungi CS</button>
</div>

<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute right-4 top-4 opacity-20">
<span className="material-symbols-outlined text-6xl" style={{fontVariationSettings: '\'FILL\' 1'}}>help_center</span>
</div>
</div>
</main>

<nav className="fixed bottom-0 w-full z-50 bg-surface border-t border-border flex justify-around items-center h-16 px-gutter pb-safe">

<a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
<span className="material-symbols-outlined" data-icon="home">home</span>
<span className="font-label-caps text-label-caps">Home</span>
</a>

<a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span className="font-label-caps text-label-caps">Orders</span>
</a>

<a className="flex flex-col items-center justify-center text-primary font-bold transition-transform duration-150 active:scale-95" href="#">
<div className="relative">
<span className="material-symbols-outlined" data-icon="notifications" style={{fontVariationSettings: '\'FILL\' 1'}}>notifications</span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-error-text border-2 border-surface rounded-full"></span>
</div>
<span className="font-label-caps text-label-caps">Inbox</span>
</a>

<a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
<span className="material-symbols-outlined" data-icon="person">person</span>
<span className="font-label-caps text-label-caps">Profile</span>
</a>
</nav>


    </div>
  );
}
