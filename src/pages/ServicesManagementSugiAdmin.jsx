import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ServicesManagementSugiAdmin() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="h-screen w-72 flex flex-col fixed left-0 top-0 border-r-0 bg-[#f6f3f2] flat no shadows z-40">
<div className="px-8 py-8 mb-4">
<h1 className="font-headline text-lg font-bold text-[#556347] tracking-tighter">Sugi Admin</h1>
<p className="font-body text-xs text-on-surface-variant mt-1">Editorial Control</p>
</div>
<div className="flex flex-col gap-y-2 py-8 h-full overflow-y-auto">
<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all font-['Plus_Jakarta_Sans'] font-medium text-sm group" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-105 transition-transform">dashboard</span>
                Dashboard
            </a>
<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all font-['Plus_Jakarta_Sans'] font-medium text-sm group" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-105 transition-transform">calendar_today</span>
                Bookings
            </a>
<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all font-['Plus_Jakarta_Sans'] font-medium text-sm group" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-105 transition-transform">local_offer</span>
                Promos
            </a>

<a className="flex items-center gap-4 bg-[#C9D9B6] text-[#556347] rounded-full mx-4 px-6 py-3 font-semibold font-['Plus_Jakarta_Sans'] text-sm scale-95 duration-150" href="#">
<span className="material-symbols-outlined text-xl" style={{fontVariationSettings: '\'FILL\' 1'}}>concierge</span>
                Services
            </a>
<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all font-['Plus_Jakarta_Sans'] font-medium text-sm group" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-105 transition-transform">group</span>
                Users
            </a>
<a className="flex items-center gap-4 text-[#454840] mx-4 px-6 py-3 hover:bg-[#f6f3f2] rounded-full transition-all font-['Plus_Jakarta_Sans'] font-medium text-sm group mt-auto" href="#">
<span className="material-symbols-outlined text-xl group-hover:scale-105 transition-transform">settings</span>
                Settings
            </a>
</div>
</nav>

<div className="flex-1 ml-72 flex flex-col relative h-screen">

<header className="docked full-width top-0 z-30 absolute bg-[#fbf9f8]/80 backdrop-blur-3xl shadow-[0_20px_40px_rgba(85,99,71,0.06)] bg-[#f6f3f2] no-border shadow-none">
<div className="flex justify-between items-center w-full px-8 py-4 h-20">
<div className="flex items-center gap-4">
<span className="text-xl font-bold tracking-tighter text-[#556347] font-headline">Sugi Booking</span>
</div>
<div className="flex items-center gap-6">
<div className="relative hidden md:block">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant text-sm">search</span>
<input className="bg-surface-container-low text-on-surface rounded-md pl-10 pr-4 py-2 text-sm font-body w-64 focus:bg-surface-container-lowest focus:ring-0 focus:border-transparent outline-none transition-colors border border-transparent focus:border-primary/20 placeholder:text-on-surface-variant" placeholder="Search services..." type="text"/>
</div>
<button className="text-[#556347] hover:bg-[#f6f3f2] transition-all duration-300 p-2 rounded-full scale-102 transition-transform duration-200">
<span className="material-symbols-outlined">notifications</span>
</button>
<button className="text-[#556347] hover:bg-[#f6f3f2] transition-all duration-300 p-2 rounded-full scale-102 transition-transform duration-200">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>account_circle</span>
</button>
</div>
</div>
</header>

<main className="flex-1 overflow-y-auto pt-28 px-12 pb-24 bg-surface-container">

<div className="mb-16 max-w-4xl">
<h2 className="font-headline text-[3.5rem] leading-tight font-extrabold text-on-surface tracking-[-0.02em] mb-4">
                    Services <span className="gradient-text">Portfolio</span>
</h2>
<p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-2xl">
                    Curate and manage the core travel verticals. Monitor performance, adjust inventory, and refine pricing strategies across flights, bespoke bus journeys, and premium hotel stays.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between">
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-surface-container-low rounded-lg text-primary">
<span className="material-symbols-outlined">trending_up</span>
</div>
<span className="bg-tertiary-container text-on-tertiary-container text-xs font-semibold px-3 py-1 rounded-sm font-label uppercase tracking-wider">Overall</span>
</div>
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Total Daily Volume</p>
<p className="font-headline text-3xl font-bold text-on-surface">14,208 <span className="text-sm font-medium text-primary ml-2">+12%</span></p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between">
<div className="flex justify-between items-start mb-8">
<div className="p-3 bg-surface-container-low rounded-lg text-tertiary">
<span className="material-symbols-outlined">payments</span>
</div>
</div>
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Revenue MTD</p>
<p className="font-headline text-3xl font-bold text-on-surface">$1.2M <span className="text-sm font-medium text-primary ml-2">+4.5%</span></p>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
<div className="absolute -right-6 -top-6 text-surface-container-low opacity-50">
<span className="material-symbols-outlined text-[120px]">public</span>
</div>
<div className="relative z-10 flex justify-between items-start mb-8">
<div className="p-3 bg-surface-container-low rounded-lg text-primary">
<span className="material-symbols-outlined">check_circle</span>
</div>
</div>
<div className="relative z-10">
<p className="font-body text-sm text-on-surface-variant mb-1">System Status</p>
<p className="font-headline text-3xl font-bold text-primary">Optimal</p>
</div>
</div>
</div>

<div className="space-y-12">

<div className="bg-surface-container-lowest rounded-[1.5rem] overflow-hidden flex flex-col lg:flex-row shadow-[0_20px_40px_rgba(85,99,71,0.03)]">
<div className="lg:w-2/5 relative min-h-[300px]">
<img alt="Flights Service Overview" className="absolute inset-0 w-full h-full object-cover" data-alt="soft aerial view of clouds from a plane window bathed in warm golden hour light quiet luxury travel aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjDPp--_VWRp9ptLYVOdffRzVLnOQhXsxM5lFTOodJGnhDEuCBG_pu5mk0uKGLAQT5ZEQmdUQx5zDw6qBpGA2crpK0DyqxZbOqjszIkDKNV0fVoFxDp1bCZzQzbrhiYJb3P309BJbfwJHKKhml37qZQBmrTVqnza9HtnaNaLhg3gW7fbhiAZ2orjzH20tqIvpNODBsBw6KakK4YNw2PqUl-TLQ28KP9NbDJ_xGJiM41z7IzZyj3TRCC4miaAWKKSC1hQpar1OtOss"/>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface-container-lowest/90 lg:to-surface-container-lowest"></div>
<div className="absolute bottom-8 left-8 glass-panel p-4 rounded-xl flex items-center gap-3">
<div className="bg-primary text-on-primary p-2 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-sm">flight_takeoff</span>
</div>
<span className="font-headline font-semibold text-primary">Global Reach</span>
</div>
</div>
<div className="lg:w-3/5 p-12 flex flex-col justify-center bg-surface-container-lowest relative z-10">
<div className="flex justify-between items-center mb-6">
<h3 className="font-headline text-2xl font-bold text-on-surface">Flight Logistics</h3>
<span className="flex items-center gap-2 text-sm font-medium text-primary bg-primary-fixed px-4 py-2 rounded-full">
<span className="material-symbols-outlined text-sm">circle</span> Live
                            </span>
</div>
<div className="grid grid-cols-2 gap-8 mb-10">
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Daily Bookings</p>
<p className="font-headline text-xl font-semibold text-on-surface">8,450</p>
</div>
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Avg. Margin</p>
<p className="font-headline text-xl font-semibold text-on-surface">14.2%</p>
</div>
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Active Routes</p>
<p className="font-headline text-xl font-semibold text-on-surface">1,204</p>
</div>
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Partner Airlines</p>
<p className="font-headline text-xl font-semibold text-on-surface">42</p>
</div>
</div>
<div className="flex gap-4">
<button className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-medium font-label rounded-full px-8 py-3.5 shadow-[0_4px_14px_rgba(85,99,71,0.15)] hover:scale-[1.02] transition-transform flex items-center gap-2">
<span className="material-symbols-outlined text-[20px]">tune</span> Manage Pricing
                            </button>
<button className="bg-surface-container-highest text-on-surface font-medium font-label rounded-full px-8 py-3.5 hover:bg-surface-variant transition-colors">
                                View Inventory
                            </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-surface-container-lowest rounded-[1.5rem] p-10 flex flex-col justify-between shadow-[0_20px_40px_rgba(85,99,71,0.03)]">
<div>
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-4">
<div className="bg-tertiary-container text-on-tertiary-container p-3 rounded-xl">
<span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: '\'FILL\' 1'}}>hotel</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface">Hotel Collections</h3>
</div>
<span className="material-symbols-outlined text-outline-variant hover:text-primary cursor-pointer transition-colors">more_horiz</span>
</div>
<p className="font-body text-on-surface-variant text-sm mb-8 leading-relaxed">
                                Managing inventory across boutique and luxury partners. Occupancy rates are trending positively for the upcoming season.
                            </p>
<div className="space-y-6 mb-10">
<div className="flex justify-between items-end">
<div>
<p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mb-1">Avg Occupancy</p>
<p className="font-headline text-2xl font-semibold text-on-surface">78%</p>
</div>
<div className="w-32 h-1 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-tertiary w-[78%] rounded-full"></div>
</div>
</div>
<div className="flex justify-between items-end">
<div>
<p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mb-1">RevPAR</p>
<p className="font-headline text-2xl font-semibold text-on-surface">$245</p>
</div>
<div className="w-32 h-1 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary w-[65%] rounded-full"></div>
</div>
</div>
</div>
</div>
<button className="w-full bg-surface-container-highest text-on-surface font-medium font-label rounded-full px-6 py-3.5 hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[20px]">contract</span> Edit Allotments
                        </button>
</div>

<div className="bg-surface-container-lowest rounded-[1.5rem] p-10 flex flex-col justify-between shadow-[0_20px_40px_rgba(85,99,71,0.03)] relative overflow-hidden">

<div className="absolute -right-12 -bottom-12 opacity-[0.03] pointer-events-none">
<span className="material-symbols-outlined text-[240px]">directions_bus</span>
</div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-8">
<div className="flex items-center gap-4">
<div className="bg-surface-container-low text-primary p-3 rounded-xl">
<span className="material-symbols-outlined text-[28px]" style={{fontVariationSettings: '\'FILL\' 1'}}>directions_bus</span>
</div>
<h3 className="font-headline text-xl font-bold text-on-surface">Overland Journeys</h3>
</div>
<span className="bg-surface-container-low text-on-surface-variant text-xs font-semibold px-3 py-1 rounded-sm font-label uppercase tracking-wider">Stable</span>
</div>
<div className="grid grid-cols-2 gap-x-8 gap-y-6 mb-10">
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Volume</p>
<p className="font-headline text-lg font-semibold text-on-surface">3,200 <span className="text-xs font-normal text-on-surface-variant">/day</span></p>
</div>
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Active Fleet</p>
<p className="font-headline text-lg font-semibold text-on-surface">184</p>
</div>
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">Popular Route</p>
<p className="font-headline text-sm font-medium text-on-surface truncate">Vienna → Prague</p>
</div>
<div>
<p className="font-body text-sm text-on-surface-variant mb-1">On-Time Rate</p>
<p className="font-headline text-lg font-semibold text-primary">94%</p>
</div>
</div>
</div>
<div className="flex gap-4 relative z-10 mt-auto">
<button className="flex-1 bg-surface-container-highest text-on-surface font-medium font-label rounded-full px-4 py-3.5 hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">route</span> Schedules
                            </button>
<button className="flex-1 bg-surface-container-highest text-on-surface font-medium font-label rounded-full px-4 py-3.5 hover:bg-surface-variant transition-colors flex items-center justify-center gap-2">
<span className="material-symbols-outlined text-[18px]">sell</span> Promos
                            </button>
</div>
</div>
</div>
</div>
</main>
</div>

    </div>
  );
}
