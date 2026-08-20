import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookingsManagementSugiAdmin() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="h-screen w-72 flex flex-col fixed left-0 top-0 border-r-0 bg-[#f6f3f2] dark:bg-[#1b1c1c] z-40">
<div className="px-8 py-8 flex flex-col gap-2">
<h1 className="text-lg font-bold text-[#556347] font-headline">Sugi Admin</h1>
<p className="text-sm text-on-surface-variant font-body">Editorial Control</p>
</div>
<div className="flex flex-col gap-y-2 py-8 h-full font-['Plus_Jakarta_Sans'] font-medium text-sm text-[#556347] dark:text-[#C9D9B6]">
<a className="flex items-center gap-4 text-[#454840] dark:text-[#c5c8ba] mx-4 px-6 py-3 hover:bg-[#f6f3f2] dark:hover:bg-[#252724] rounded-full transition-all" href="#">
<span className="material-symbols-outlined">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-4 bg-[#C9D9B6] text-[#556347] rounded-full mx-4 px-6 py-3 font-semibold scale-95 duration-150" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>calendar_today</span>
                Bookings
            </a>
<a className="flex items-center gap-4 text-[#454840] dark:text-[#c5c8ba] mx-4 px-6 py-3 hover:bg-[#f6f3f2] dark:hover:bg-[#252724] rounded-full transition-all" href="#">
<span className="material-symbols-outlined">local_offer</span>
                Promos
            </a>
<a className="flex items-center gap-4 text-[#454840] dark:text-[#c5c8ba] mx-4 px-6 py-3 hover:bg-[#f6f3f2] dark:hover:bg-[#252724] rounded-full transition-all" href="#">
<span className="material-symbols-outlined">concierge</span>
                Services
            </a>
<a className="flex items-center gap-4 text-[#454840] dark:text-[#c5c8ba] mx-4 px-6 py-3 hover:bg-[#f6f3f2] dark:hover:bg-[#252724] rounded-full transition-all" href="#">
<span className="material-symbols-outlined">group</span>
                Users
            </a>
<a className="flex items-center gap-4 text-[#454840] dark:text-[#c5c8ba] mx-4 px-6 py-3 hover:bg-[#f6f3f2] dark:hover:bg-[#252724] rounded-full transition-all" href="#">
<span className="material-symbols-outlined">settings</span>
                Settings
            </a>
</div>
<div className="mt-auto p-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
<img alt="Admin Profile" className="w-full h-full object-cover" data-alt="close up portrait of a professional man in a bright office" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDK1Wubi74OJvDmfCN116NTTB-_vrCiU4kdIWLGa9KXJzdNY6UTtoKgUdUPGlsH-8UgikiC1Ry1fh21m3nWLsb338jGBkP8nIyKoO0I6PLLAMqICNgn1LJLSTgi6D0vzcPJ9puhQPW9XwCZ2C8kvSCI0d7mzH1tvszVI8-SXQ0MK9aVOrfYTfL7D2RqIgMBGBG9e-Rf8hLwO0KQbC-nmaUlpwiQPvXjGV-hJEcsvUlWEq5vsT8oM88E43FKVNBLlBlItpFeYTDb3jA"/>
</div>
<div>
<p className="font-medium text-sm text-on-surface">Admin User</p>
<p className="text-xs text-on-surface-variant">admin@sugi.com</p>
</div>
</div>
</div>
</nav>

<main className="ml-72 flex-1 flex flex-col min-h-screen bg-surface">

<header className="flex justify-between items-center w-full px-8 py-4 h-20 bg-[#fbf9f8]/80 dark:bg-[#1b1c1c]/80 backdrop-blur-3xl sticky top-0 z-30 shadow-[0_20px_40px_rgba(85,99,71,0.06)] bg-[#f6f3f2] dark:bg-[#252724] no-border shadow-none">
<div className="text-xl font-bold tracking-tighter text-[#556347] dark:text-[#C9D9B6] font-['Plus_Jakarta_Sans'] tracking-tight text-sm">
                Sugi Booking
            </div>
<div className="flex items-center gap-6">
<div className="relative group">
<span className="material-symbols-outlined text-[#454840] cursor-pointer hover:bg-[#f6f3f2] dark:hover:bg-[#2a2c28] transition-all duration-300 p-2 rounded-full scale-102 transition-transform duration-200">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</div>
<span className="material-symbols-outlined text-[#454840] cursor-pointer hover:bg-[#f6f3f2] dark:hover:bg-[#2a2c28] transition-all duration-300 p-2 rounded-full scale-102 transition-transform duration-200">account_circle</span>
</div>
</header>
<div className="p-8 lg:p-12 max-w-7xl mx-auto w-full flex-1">

<div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface tracking-tight mb-2">Bookings Ledger</h2>
<p className="text-on-surface-variant font-body text-lg">Manage and review all customer reservations.</p>
</div>
<button className="btn-gradient text-on-primary font-medium py-4 px-8 rounded-full hover:scale-[1.02] transition-transform duration-300 flex items-center gap-2 shadow-[0_20px_40px_rgba(85,99,71,0.2)]">
<span className="material-symbols-outlined">add</span>
                    New Booking
                </button>
</div>

<div className="glass-panel p-6 rounded-xl mb-12 flex flex-col lg:flex-row gap-6 items-center shadow-[0_20px_40px_rgba(85,99,71,0.04)] border border-outline-variant/15">
<div className="w-full lg:w-1/3 relative">
<label className="block text-xs font-label text-on-surface-variant mb-1 uppercase tracking-wider">Search</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface-container-lowest border-0 rounded-lg py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all text-on-surface placeholder-on-surface-variant/50" placeholder="Booking ID, Name..." type="text"/>
</div>
</div>
<div className="w-full lg:w-1/4">
<label className="block text-xs font-label text-on-surface-variant mb-1 uppercase tracking-wider">Status</label>
<select className="w-full bg-surface-container-lowest border-0 rounded-lg py-3 px-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all text-on-surface appearance-none">
<option>All Statuses</option>
<option>Confirmed</option>
<option>Pending</option>
<option>Cancelled</option>
</select>
</div>
<div className="w-full lg:w-1/4">
<label className="block text-xs font-label text-on-surface-variant mb-1 uppercase tracking-wider">Date Range</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">calendar_month</span>
<input className="w-full bg-surface-container-lowest border-0 rounded-lg py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary/20 transition-all text-on-surface placeholder-on-surface-variant" placeholder="Last 30 Days" type="text"/>
</div>
</div>
<div className="w-full lg:w-auto flex-1 flex justify-end mt-4 lg:mt-0">
<button className="text-primary font-medium hover:bg-surface-container-high px-6 py-3 rounded-full transition-colors flex items-center gap-2">
<span className="material-symbols-outlined">filter_list</span>
                         More Filters
                     </button>
</div>
</div>


<div className="bg-surface-container-low rounded-xl p-8 shadow-sm">

<div className="hidden md:grid grid-cols-12 gap-4 pb-4 mb-4 text-xs font-label text-on-surface-variant uppercase tracking-wider">
<div className="col-span-2">Booking ID</div>
<div className="col-span-3">Customer</div>
<div className="col-span-2">Service</div>
<div className="col-span-2">Date</div>
<div className="col-span-1 text-right">Amount</div>
<div className="col-span-2 text-right">Status</div>
</div>

<div className="flex flex-col gap-4">

<div className="bg-surface-container-lowest rounded-lg p-4 md:p-6 hover:bg-surface-container-high transition-colors group cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="col-span-2 font-medium text-on-surface font-headline">#BKG-8839</div>
<div className="col-span-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">EW</div>
<div>
<p className="text-sm font-medium text-on-surface">Eleanor Vance</p>
<p className="text-xs text-on-surface-variant">eleanor@example.com</p>
</div>
</div>
<div className="col-span-2 flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">flight</span>
                                Flight to CDG
                            </div>
<div className="col-span-2 text-sm text-on-surface-variant">Oct 12, 2023</div>
<div className="col-span-1 text-right font-medium text-on-surface">$1,240</div>
<div className="col-span-2 flex justify-end">
<span className="bg-primary-container/30 text-on-primary-container px-3 py-1 rounded-sm text-xs font-medium">Confirmed</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg p-4 md:p-6 hover:bg-surface-container-high transition-colors group cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="col-span-2 font-medium text-on-surface font-headline">#BKG-8840</div>
<div className="col-span-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-bold text-xs">MD</div>
<div>
<p className="text-sm font-medium text-on-surface">Marcus Davis</p>
<p className="text-xs text-on-surface-variant">marcus.d@example.com</p>
</div>
</div>
<div className="col-span-2 flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">hotel</span>
                                Grand Plaza Suite
                            </div>
<div className="col-span-2 text-sm text-on-surface-variant">Oct 14, 2023</div>
<div className="col-span-1 text-right font-medium text-on-surface">$850</div>
<div className="col-span-2 flex justify-end">
<span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-sm text-xs font-medium">Pending</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg p-4 md:p-6 hover:bg-surface-container-high transition-colors group cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="col-span-2 font-medium text-on-surface font-headline">#BKG-8841</div>
<div className="col-span-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-xs">SJ</div>
<div>
<p className="text-sm font-medium text-on-surface">Sarah Jenkins</p>
<p className="text-xs text-on-surface-variant">sarah.j@example.com</p>
</div>
</div>
<div className="col-span-2 flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">directions_bus</span>
                                Intercity Express
                            </div>
<div className="col-span-2 text-sm text-on-surface-variant">Oct 15, 2023</div>
<div className="col-span-1 text-right font-medium text-on-surface">$45</div>
<div className="col-span-2 flex justify-end">
<span className="bg-error-container/50 text-on-error-container px-3 py-1 rounded-sm text-xs font-medium">Cancelled</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-lg p-4 md:p-6 hover:bg-surface-container-high transition-colors group cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
<div className="col-span-2 font-medium text-on-surface font-headline">#BKG-8842</div>
<div className="col-span-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-bold text-xs">TR</div>
<div>
<p className="text-sm font-medium text-on-surface">Thomas Reed</p>
<p className="text-xs text-on-surface-variant">treed@example.com</p>
</div>
</div>
<div className="col-span-2 flex items-center gap-2 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[18px]">flight</span>
                                Flight to JFK
                            </div>
<div className="col-span-2 text-sm text-on-surface-variant">Oct 18, 2023</div>
<div className="col-span-1 text-right font-medium text-on-surface">$890</div>
<div className="col-span-2 flex justify-end">
<span className="bg-primary-container/30 text-on-primary-container px-3 py-1 rounded-sm text-xs font-medium">Confirmed</span>
</div>
</div>
</div>
</div>

<div className="mt-8 flex items-center justify-between">
<p className="text-sm text-on-surface-variant">Showing 1 to 4 of 24 entries</p>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-colors disabled:opacity-50" disabled="">
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-container text-on-primary-container font-medium">1</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-colors">2</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-colors">3</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container-high transition-colors">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
</div>
</div>
</main>

    </div>
  );
}
