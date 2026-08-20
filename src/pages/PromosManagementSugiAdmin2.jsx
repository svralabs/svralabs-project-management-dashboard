import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PromosManagementSugiAdmin2() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="bg-[#f6f3f2] h-screen w-72 flex flex-col fixed left-0 top-0 border-r-0 no-shadows z-50">

<div className="px-10 py-12 flex flex-col gap-2">
<h1 className="font-headline text-lg font-bold text-[#556347] tracking-tight">Sugi Admin</h1>
<p className="font-body text-xs font-medium text-on-surface-variant tracking-widest uppercase">Editorial Control</p>
</div>

<nav className="flex flex-col gap-y-2 py-8 h-full font-headline font-medium text-sm">

<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#fbf9f8] rounded-full transition-all group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">dashboard</span>
                Dashboard
            </a>

<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#fbf9f8] rounded-full transition-all group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">calendar_today</span>
                Bookings
            </a>

<a className="flex items-center gap-4 bg-[#C9D9B6] text-[#556347] rounded-full mx-4 px-6 py-3 font-semibold scale-95 duration-150 shadow-[0_4px_12px_rgba(85,99,71,0.08)]" href="#">
<span className="material-symbols-outlined fill-icon text-[20px]">local_offer</span>
                Promos
            </a>

<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#fbf9f8] rounded-full transition-all group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">concierge</span>
                Services
            </a>

<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#fbf9f8] rounded-full transition-all group" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">group</span>
                Users
            </a>

<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#fbf9f8] rounded-full transition-all group mt-auto mb-8" href="#">
<span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">settings</span>
                Settings
            </a>
</nav>
</aside>

<main className="ml-72 flex-1 p-12 lg:p-16 max-w-[1600px] w-full">

<header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="flex flex-col gap-3">
<h2 className="font-headline text-4xl lg:text-5xl font-extrabold text-on-surface tracking-[-0.02em]">Promos &amp; Vouchers</h2>
<p className="font-body text-on-surface-variant text-lg max-w-xl">Curate special offers and manage promotional campaigns to elevate the guest booking experience.</p>
</div>

<button className="flex items-center gap-2 bg-gradient-to-br from-primary to-[#6b7b59] text-on-primary rounded-full px-8 py-4 font-headline font-semibold shadow-[0_20px_40px_rgba(85,99,71,0.15)] hover:scale-[1.02] transition-transform duration-300">
<span className="material-symbols-outlined text-[20px]">add</span>
                Add New Promo
            </button>
</header>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<article className="md:col-span-8 bg-surface-container-lowest rounded-[2rem] overflow-hidden relative group min-h-[400px] flex flex-col justify-between p-10 z-10 transition-transform duration-500 hover:shadow-[0_30px_60px_rgba(85,99,71,0.08)]">

<div className="absolute inset-0 z-0 bg-surface-container">
<img alt="" className="w-full h-full object-cover opacity-60 mix-blend-multiply group-hover:scale-105 transition-transform duration-1000 ease-out" data-alt="serene coastal landscape at sunset with warm golden hour light reflecting off gentle ocean waves, soft editorial mood" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3OTMuGguhQiggxccgNoRtY1QathbilQdMDmBW60gQvkvwWKbHVnMWuhUXx_JFukUmuNnKwrbUG7o1CLrTSe9Y8FK_0YYdttBssSOXrEhIJFiZyF9qoMdl7Nn0aqif61HhYVwQmQ-fFbt3PPPLmd4yWWXjFXKEN6ssGvVVwsKl6Q2CgKHKRlIfy7zggKSK3gPrcwHBFCFrhsrB5A5GQ9CvoyWzSrLmDn8KNWYbmvHZ6FXcEJAEx9r-kpwPc6ypdu7Uwv0cb4QzoWA"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/80 to-transparent z-10"></div>
</div>
<div className="relative z-20 flex justify-between items-start">

<span className="inline-flex items-center gap-1.5 bg-tertiary-container text-on-tertiary-container font-headline font-semibold text-xs px-3 py-1.5 rounded-sm tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
                        Active Campaign
                    </span>
<button className="w-10 h-10 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_horiz</span>
</button>
</div>
<div className="relative z-20 mt-auto">
<div className="inline-block bg-primary-container/90 backdrop-blur-xl text-on-primary-container px-6 py-2 rounded-full font-headline font-bold text-3xl mb-6 shadow-[0_10px_20px_rgba(201,217,182,0.3)]">
                        25% OFF
                    </div>
<h3 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight mb-2">Summer Solstice Escape</h3>
<p className="font-body text-on-surface-variant max-w-md mb-6 leading-relaxed">Exclusive savings on all coastal properties booked through the month of August. Valid for stays over 3 nights.</p>
<div className="flex items-center gap-6 text-sm font-medium text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
                            Expires Aug 31, 2024
                        </div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px]">confirmation_number</span>
                            142 Redeemed
                        </div>
</div>
</div>
</article>

<div className="md:col-span-4 bg-primary rounded-[2rem] p-10 flex flex-col justify-between text-on-primary relative overflow-hidden">
<div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-fixed-dim rounded-full mix-blend-overlay blur-3xl opacity-50"></div>
<div>
<h3 className="font-headline text-xl font-medium text-primary-container mb-1">Total Savings Delivered</h3>
<div className="font-headline text-5xl font-extrabold tracking-tighter mt-4">$14,250</div>
</div>
<div className="flex flex-col gap-4 mt-12">
<div className="flex items-center justify-between bg-white/10 rounded-xl p-4 backdrop-blur-sm">
<span className="font-body text-sm font-medium">Active Promos</span>
<span className="font-headline font-bold text-lg">4</span>
</div>
<div className="flex items-center justify-between bg-white/5 rounded-xl p-4 backdrop-blur-sm">
<span className="font-body text-sm text-primary-container">Scheduled</span>
<span className="font-headline font-bold text-lg text-primary-container">2</span>
</div>
</div>
</div>

<article className="md:col-span-5 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col gap-6 shadow-sm hover:shadow-md transition-shadow duration-300">
<div className="flex justify-between items-start">
<div className="w-14 h-14 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[28px] fill-icon">weekend</span>
</div>
<span className="bg-surface-container-high text-on-surface-variant font-headline font-medium text-xs px-3 py-1.5 rounded-full">
                        Scheduled
                    </span>
</div>
<div>
<div className="font-headline font-bold text-2xl text-primary mb-2">$50 Fixed Discount</div>
<h3 className="font-headline text-xl font-semibold text-on-surface mb-2">Autumn Retreat Special</h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">Applies automatically to weekend bookings during October.</p>
</div>
<div className="mt-auto pt-6 border-t border-surface-container-highest flex items-center justify-between">
<span className="font-label text-xs text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px]">schedule</span>
                        Starts Oct 1, 2024
                    </span>
<button className="text-primary font-headline font-semibold text-sm hover:text-tertiary transition-colors">Edit Details</button>
</div>
</article>

<div className="md:col-span-7 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col">
<div className="flex items-center justify-between mb-8">
<h3 className="font-headline text-2xl font-bold text-on-surface">Active Voucher Codes</h3>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">filter_list</span>
</button>
</div>
<div className="flex flex-col gap-4">

<div className="group flex items-center justify-between p-5 rounded-2xl bg-surface hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-5">
<div className="bg-primary-container/30 text-primary p-3 rounded-xl">
<span className="material-symbols-outlined text-[20px]">loyalty</span>
</div>
<div>
<div className="font-headline font-bold text-lg text-on-surface tracking-wide">WELCOME10</div>
<div className="font-body text-sm text-on-surface-variant">10% Off • First-time guests</div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline-block font-body text-xs text-on-surface-variant bg-surface-container-highest px-2.5 py-1 rounded-md">No Expiry</span>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest hover:text-primary transition-all opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[18px]">content_copy</span>
</button>
</div>
</div>

<div className="group flex items-center justify-between p-5 rounded-2xl bg-surface hover:bg-surface-container-low transition-colors">
<div className="flex items-center gap-5">
<div className="bg-tertiary-container/30 text-tertiary p-3 rounded-xl">
<span className="material-symbols-outlined text-[20px]">stars</span>
</div>
<div>
<div className="font-headline font-bold text-lg text-on-surface tracking-wide">VIPUPGRADE</div>
<div className="font-body text-sm text-on-surface-variant">Free Room Upgrade • Tier 2+</div>
</div>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline-block font-body text-xs text-error bg-error-container/50 px-2.5 py-1 rounded-md">Exp. Tomorrow</span>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest hover:text-primary transition-all opacity-0 group-hover:opacity-100">
<span className="material-symbols-outlined text-[18px]">content_copy</span>
</button>
</div>
</div>

<button className="mt-4 text-center font-headline font-medium text-sm text-primary hover:text-tertiary transition-colors py-2">
                        View All Vouchers
                    </button>
</div>
</div>
</div>
</main>

    </div>
  );
}
