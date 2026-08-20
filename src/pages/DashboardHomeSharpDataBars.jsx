import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardHomeSharpDataBars() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 left-0 w-full z-50 bg-background flex justify-between items-center px-gutter h-16 border-b border-[#27272A]">
<div className="flex items-center gap-4">
<span className="text-body-md font-h1 font-bold text-primary tracking-tight">CHECK BOX</span>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-6 items-center">
<a className="text-primary font-bold font-label-sm text-label-sm cursor-pointer active:scale-95 transition-colors" href="#">Home</a>
<a className="text-on-surface-variant font-label-sm text-label-sm cursor-pointer active:scale-95 hover:text-primary transition-colors" href="#">Stats</a>
<a className="text-on-surface-variant font-label-sm text-label-sm cursor-pointer active:scale-95 hover:text-primary transition-colors" href="#">Tree</a>
</div>
<div className="flex items-center gap-4">
<span className="material-symbols-outlined cursor-pointer active:scale-95 p-2 rounded-full hover:bg-surface-container-high text-on-surface-variant">notifications</span>
<div className="w-8 h-8 rounded-full overflow-hidden border border-[#27272A]">
<img alt="User profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXATJdZd_AmTpvsqpWC7n0EGKqhkpgliNhRjpxYBQBLTzO0M2iit0EFNj30e71pBd0Hrkv6nbU6JzK1Ote8_dckba7fDi9mGDkgDx1FmjUzR2r0m8nvsP6jDJfRNpJrhG0odWwpGyDJXYZiiKFvkdHwGMy-SUClO5yEtKFOxJES2duvSdwB_bSst6bds6iYrm4nBhXCArEyv__3OcFxyN_bf7ZuYhngyJEos69KNb9Hbkm8yzw2VaU-mXFnrkSzxD_xtMDIYic9w"/>
</div>
</div>
</div>
</header>

<aside className="fixed left-0 top-16 hidden md:flex flex-col items-center py-gutter gap-gap bg-background h-[calc(100vh-64px)] w-20 border-r border-[#27272A] transition-all duration-200">
<div className="flex flex-col items-center gap-8 w-full">
<div className="flex flex-col items-center gap-1 w-full text-secondary border-l-2 border-secondary bg-secondary/5 py-2">
<span className="material-symbols-outlined">home</span>
<span className="font-label-sm text-label-sm">Home</span>
</div>
<div className="flex flex-col items-center gap-1 w-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high py-2 cursor-pointer transition-all">
<span className="material-symbols-outlined">bar_chart</span>
<span className="font-label-sm text-label-sm">Stats</span>
</div>
<div className="flex flex-col items-center gap-1 w-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high py-2 cursor-pointer transition-all">
<span className="material-symbols-outlined">account_tree</span>
<span className="font-label-sm text-label-sm">Tree</span>
</div>
<div className="flex flex-col items-center gap-1 w-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high py-2 cursor-pointer transition-all">
<span className="material-symbols-outlined">description</span>
<span className="font-label-sm text-label-sm">Reports</span>
</div>
<div className="mt-auto flex flex-col items-center gap-1 w-full text-on-surface-variant hover:text-primary hover:bg-surface-container-high py-2 cursor-pointer transition-all">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-sm text-label-sm">Settings</span>
</div>
</div>
</aside>

<main className="md:ml-20 pt-24 px-gutter pb-gutter max-w-7xl mx-auto w-full">

<section className="mb-gutter flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h1 className="font-h1 text-h1 text-primary">CHECK BOX</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Global Analytics Environment / v2.0</p>
</div>
<div className="flex gap-3 overflow-x-auto pb-2">
<div className="px-4 py-2 bg-surface-container-high rounded-full border border-[#27272A] flex items-center gap-2 cursor-pointer hover:border-on-surface-variant transition-colors group">
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary">Region: EMEA</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
</div>
<div className="px-4 py-2 bg-surface-container-high rounded-full border border-[#27272A] flex items-center gap-2 cursor-pointer hover:border-on-surface-variant transition-colors group">
<span className="font-label-sm text-label-sm text-on-surface-variant group-hover:text-primary">Period: Last 30d</span>
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">expand_more</span>
</div>
<div className="px-6 py-2 bg-secondary rounded-full flex items-center gap-2 cursor-pointer active:scale-95 transition-all">
<span className="font-label-sm text-label-sm text-on-secondary font-bold">FILTERS</span>
<span className="material-symbols-outlined text-[16px] text-on-secondary" style={{fontVariationSettings: '\'FILL\' 1'}}>filter_alt</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-12 gap-gap mb-gap">

<div className="md:col-span-4 surface-card p-padding rounded-[20px] flex flex-col justify-between h-[340px]">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Active Customers</span>
<h2 className="font-kpi-number text-kpi-number tabular mt-2">4.2k</h2>
</div>
<div className="relative h-32 w-full mt-4">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 400 100">
<path d="M0,80 Q50,20 100,60 T200,40 T300,70 T400,30" fill="none" stroke="#C1F425" strokeLinecap="round" strokeWidth="3"></path>
<path d="M0,60 Q70,90 140,50 T280,70 T400,90" fill="none" opacity="0.8" stroke="#FF7F1C" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<div className="flex gap-4 mt-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-neon-lime"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Primary</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-accent"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Reference</span>
</div>
</div>
</div>

<div className="md:col-span-8 surface-card p-padding rounded-[20px] flex flex-col h-[340px]">
<div className="flex justify-between items-start">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Product Distribution Matrix</span>
<p className="font-body-md text-body-md text-primary font-bold mt-1">Global Tiering</p>
</div>
<div className="flex gap-8 tabular">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant">INDEX</span>
<div className="text-secondary font-bold text-lg tabular">94.1</div>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant">GROWTH</span>
<div className="text-white font-bold text-lg tabular">+12.4%</div>
</div>
</div>
</div>

<div className="flex-1 grid grid-cols-12 grid-rows-6 gap-2 mt-6">

</div>
</div>

<div className="md:col-span-7 surface-card p-padding rounded-[20px] flex flex-col min-h-[400px]">
<div className="flex justify-between items-center mb-8">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Resource Allocation</span>
<p className="font-body-md text-body-md text-primary font-bold mt-1">Instance Density / Multi-Cloud</p>
</div>
<span className="px-4 py-1 bg-surface-container-high border border-[#27272A] text-primary font-label-sm text-label-sm rounded-full font-bold tabular">Total: 1,012</span>
</div>
<div className="flex-1 flex items-end justify-between gap-3 px-4">


</div>
</div>

<div className="md:col-span-5 surface-card p-padding rounded-[20px] flex flex-col min-h-[400px]">
<div className="flex justify-between items-start mb-6">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Project Pipelines</span>
<p className="font-body-md text-body-md text-primary font-bold mt-1">Velocity Timeline</p>
</div>
<span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">more_horiz</span>
</div>
<div className="flex-1 flex flex-col gap-3">


</div>
<div className="mt-4 pt-4 border-t border-[#27272A] flex justify-between items-center">
<span className="font-label-sm text-label-sm text-on-surface-variant">Active Instances</span>
<span className="font-label-sm text-label-sm text-primary font-bold tabular">148 Units</span>
</div>
</div>
</div>

<section className="grid grid-cols-2 md:grid-cols-4 gap-gap">
<div className="surface-card p-5 rounded-[20px]">
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">UPTIME</span>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-primary tabular">99.98%</span>
<span className="w-2 h-2 rounded-full bg-neon-lime shadow-[0_0_8px_#C1F425]"></span>
</div>
</div>
<div className="surface-card p-5 rounded-[20px]">
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">LATENCY</span>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-primary tabular">14ms</span>
<span className="material-symbols-outlined text-secondary text-[18px]">bolt</span>
</div>
</div>
<div className="surface-card p-5 rounded-[20px]">
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">SECURITY</span>
<div className="flex items-center justify-between">
<span className="text-xl font-bold text-primary tabular">LEVEL 4</span>
<span className="material-symbols-outlined text-white text-[18px]">verified_user</span>
</div>
</div>
<div className="surface-card p-5 rounded-[20px]">
<span className="font-label-sm text-label-sm text-on-surface-variant block mb-1">LOAD BALANCE</span>
<div className="mt-2 h-2 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-secondary rounded-none" style={{width: '67%'}}></div>
</div>
<div className="mt-2 text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant tabular">67%</span>
</div>
</div>
</section>
</main>



    </div>
  );
}
