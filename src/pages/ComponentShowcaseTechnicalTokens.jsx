import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ComponentShowcaseTechnicalTokens() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="fixed left-0 top-0 h-screen w-20 border-r border-neutral-800 bg-[#171717] dark:bg-neutral-900 flex flex-col items-center py-6 z-50">
<div className="mb-12">
<span className="text-[#C4F82A] font-black text-2xl tracking-tighter">INI</span>
</div>
<div className="flex flex-col gap-8 flex-1">
<a className="bg-[#C4F82A] text-black rounded-full p-3 scale-95 active:bg-[#C4F82A]/20 transition-all duration-150" href="#">
<span className="material-symbols-outlined">grid_view</span>
</a>
<a className="text-neutral-500 hover:text-[#C4F82A] p-3 hover:bg-neutral-800 transition-all duration-150" href="#">
<span className="material-symbols-outlined">monitoring</span>
</a>
<a className="text-neutral-500 hover:text-[#C4F82A] p-3 hover:bg-neutral-800 transition-all duration-150" href="#">
<span className="material-symbols-outlined">hub</span>
</a>
<a className="text-neutral-500 hover:text-[#C4F82A] p-3 hover:bg-neutral-800 transition-all duration-150" href="#">
<span className="material-symbols-outlined">settings</span>
</a>
</div>
<div className="mt-auto">
<a className="text-neutral-500 hover:text-[#C4F82A] p-3 hover:bg-neutral-800 transition-all duration-150" href="#">
<span className="material-symbols-outlined">help_outline</span>
</a>
</div>
</nav>

<header className="fixed top-0 right-0 left-20 h-16 flex justify-between items-center px-8 z-40 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-neutral-800">
<div className="flex items-center gap-8">
<span className="text-xl font-black text-[#C4F82A]">CHECK BOX</span>
<nav className="hidden md:flex gap-6">
<a className="font-inter text-xs font-semibold uppercase tracking-widest border-b-2 border-[#C4F82A] text-[#C4F82A] pb-2" href="#">Check Box</a>
<a className="font-inter text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white pb-2 transition-colors" href="#">Monitoring</a>
<a className="font-inter text-xs font-semibold uppercase tracking-widest text-neutral-400 hover:text-white pb-2 transition-colors" href="#">Support</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="relative flex items-center">
<span className="material-symbols-outlined absolute left-3 text-neutral-500 text-sm">search</span>
<input className="bg-neutral-900 border-none rounded-full py-2 pl-10 pr-4 text-[10px] font-bold tracking-widest uppercase focus:ring-1 focus:ring-[#C4F82A] w-48 transition-all" placeholder="SEARCH SYSTEM..." type="text"/>
</div>
<div className="flex items-center gap-4 text-neutral-400">
<span className="material-symbols-outlined hover:text-[#C1F425] cursor-pointer transition-colors">notifications</span>
<span className="material-symbols-outlined hover:text-[#C1F425] cursor-pointer transition-colors">settings</span>
<div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-700">
<img alt="User Analyst Profile" className="w-full h-full object-cover" data-alt="A professional headshot of a technical data analyst with glasses, wearing a sleek black turtleneck, rendered in a high-contrast minimalist digital art style. The lighting is dramatic and moody, reflecting a high-performance tech environment. The background is a solid deep charcoal grey, emphasizing a modern corporate yet edgy aesthetic consistent with a technical dashboard UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaxpxAR9vJylh9v6xBTBem1TQACycRwzBXjT4pT0qBE5sTIQhuKWAirZXVlEct57DczKF3BZW99BmjvT05OXgxlLP7WHM_IM2CmgobYi0M-2uvxpSSdbeCc0goZYS_4RBThzJUQcVSs3fJlXApOMBbXcIT6UJQMqsJSsZz7nLK1JSR3YgGhqAYu-_MRBmZjAiJVTA9RDyN5IbUb1N92TBBYcmUxpqvRQLbG-gRW-4BwBIZ021Qb_MbGK5O1SOFaX-Z1Ffr9pJsDQ"/>
</div>
</div>
</div>
</header>
<main className="ml-20 pt-24 p-gap space-y-gap max-w-7xl mx-auto">

<section className="mb-12">
<h1 className="font-h1 text-h1 text-white mb-2 uppercase tracking-tighter">System Visual Primitives</h1>
<p className="font-body-md text-body-md text-neutral-400 max-w-2xl">A comprehensive showcase of the atomic design tokens and functional components powering the CHECK BOX command interface.</p>
</section>

<div className="grid grid-cols-12 gap-gap">

<div className="col-span-12 lg:col-span-8 bg-surface-container-high border border-outline-variant rounded-bento p-padding flex flex-col justify-between">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block">01 / Identity &amp; Type</span>
<div className="flex items-baseline gap-4 mb-8">
<span className="text-6xl font-black text-secondary tracking-tighter">CHECK BOX</span>
<span className="text-neutral-500 font-bold tracking-tighter">V4.02_STABLE</span>
</div>
</div>
<div className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<p className="text-neutral-500 font-label-sm text-[10px] uppercase">H1 Display / Inter Bold</p>
<h2 className="font-h1 text-h1">HYPER-DENSE DATA VIZ</h2>
</div>
<div className="space-y-2">
<p className="text-neutral-500 font-label-sm text-[10px] uppercase">KPI Numeric / Tabular</p>
<p className="font-kpi-number text-kpi-number tabular-nums">98,241.00</p>
</div>
</div>
<div className="pt-6 border-t border-neutral-800">
<p className="font-body-md text-body-md text-neutral-300 leading-relaxed">
                            The typography system prioritizes <span className="text-white font-bold">legibility in high-stress environments</span>. 
                            Using tabular-nums ensures that oscillating data values remain visually stable across updates.
                        </p>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-4 bg-surface-container-high border border-outline-variant rounded-bento p-padding">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-8 block">02 / Command Controls</span>
<div className="flex flex-col gap-6">

<button className="w-full bg-secondary text-black font-bold py-4 px-8 rounded-full flex justify-between items-center group transition-all hover:scale-[1.02] active:scale-95">
<span className="uppercase tracking-widest text-xs">Initialize System</span>
<span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>

<button className="w-full border border-neutral-700 text-white font-bold py-4 px-8 rounded-full flex justify-between items-center hover:bg-neutral-800 transition-all active:scale-95">
<span className="uppercase tracking-widest text-xs">Diagnostic Run</span>
<span className="material-symbols-outlined">analytics</span>
</button>

<div className="flex gap-4">
<button className="flex-1 border border-neutral-800 text-neutral-400 py-4 px-4 rounded-full hover:text-white hover:border-neutral-600 transition-all flex items-center justify-center">
<span className="material-symbols-outlined">refresh</span>
</button>
<button className="flex-1 border border-neutral-800 text-neutral-400 py-4 px-4 rounded-full hover:text-white hover:border-neutral-600 transition-all flex items-center justify-center">
<span className="material-symbols-outlined">download</span>
</button>
<button className="flex-1 border border-neutral-800 text-neutral-400 py-4 px-4 rounded-full hover:text-white hover:border-neutral-600 transition-all flex items-center justify-center">
<span className="material-symbols-outlined">share</span>
</button>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-5 bg-surface-container-high border border-outline-variant rounded-bento p-padding overflow-hidden relative">
<div className="dot-matrix absolute inset-0 opacity-20 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-8 block">03 / Status Matrix</span>
<div className="flex flex-wrap gap-3 mb-auto">

<div className="bg-secondary/10 border border-secondary/30 rounded-full py-2 px-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></div>
<span className="text-[10px] font-black uppercase tracking-widest text-secondary">Operational</span>
</div>

<div className="bg-secondary-container/10 border border-secondary-container/30 rounded-full py-2 px-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-secondary-container"></div>
<span className="text-[10px] font-black uppercase tracking-widest text-secondary-container">Critical_Error</span>
</div>

<div className="bg-white/5 border border-white/10 rounded-full py-2 px-4 flex items-center gap-2">
<span className="material-symbols-outlined text-[12px] animate-spin text-neutral-400">sync</span>
<span className="text-[10px] font-black uppercase tracking-widest text-neutral-400">Synchronizing</span>
</div>

<div className="bg-white/5 border border-white/10 rounded-full py-2 px-4 flex items-center gap-2">
<span className="text-[10px] font-black uppercase tracking-widest text-neutral-500">Standby_Mode</span>
</div>

<div className="bg-white/5 border border-white/10 rounded-full py-2 px-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
<span className="text-[10px] font-black uppercase tracking-widest text-blue-400">Neural_Linked</span>
</div>
</div>
<div className="mt-8">
<div className="bg-black p-4 rounded-xl border border-neutral-800">
<div className="flex justify-between items-center mb-2">
<span className="text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">System Health Distribution</span>
<span className="text-[10px] font-bold text-secondary tracking-tighter tabular-nums">99.8%</span>
</div>
<div className="flex gap-1">
<div className="h-1.5 flex-[12] bg-secondary rounded-full"></div>
<div className="h-1.5 flex-[2] bg-secondary-container rounded-full"></div>
<div className="h-1.5 flex-[1] bg-neutral-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 lg:col-span-7 bg-surface-container-high border border-outline-variant rounded-bento p-padding">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-8 block">04 / Metric Tokens</span>
<div className="grid grid-cols-1 md:grid-cols-2 gap-gap">

<div className="bg-black/50 p-6 rounded-bento border border-neutral-800 flex items-center justify-between">
<div className="space-y-1">
<p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Active Nodes</p>
<h3 className="text-3xl font-black tabular-nums">4.2k</h3>
</div>
<div className="bg-secondary/10 px-3 py-1.5 rounded-full border border-secondary/20 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary">trending_up</span>
<span className="text-[11px] font-black text-secondary tabular-nums">+12%</span>
</div>
</div>

<div className="bg-black/50 p-6 rounded-bento border border-neutral-800 flex items-center justify-between">
<div className="space-y-1">
<p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Latency_Ms</p>
<h3 className="text-3xl font-black tabular-nums">18.4</h3>
</div>
<div className="bg-secondary-container/10 px-3 py-1.5 rounded-full border border-secondary-container/20 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px] text-secondary-container">trending_down</span>
<span className="text-[11px] font-black text-secondary-container tabular-nums">-0.4%</span>
</div>
</div>

<div className="col-span-1 md:col-span-2 bg-neutral-900/50 p-8 rounded-bento border border-neutral-800 flex flex-col md:flex-row items-center gap-8">
<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full border-4 border-[#171717] bg-secondary flex items-center justify-center text-black font-black">MB</div>
<div className="w-12 h-12 rounded-full border-4 border-[#171717] bg-neutral-800 flex items-center justify-center text-white font-black">JS</div>
<div className="w-12 h-12 rounded-full border-4 border-[#171717] bg-neutral-700 flex items-center justify-center text-neutral-400 text-xs">+12</div>
</div>
<div className="h-10 w-px bg-neutral-800 hidden md:block"></div>
<div className="flex-1 w-full">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Projected Capacity</span>
<div className="bg-white text-black px-2 py-0.5 rounded text-[10px] font-black uppercase">Alpha_V1</div>
</div>
<div className="h-3 w-full bg-black rounded-full overflow-hidden border border-neutral-800 p-[2px]">
<div className="h-full bg-white rounded-full" style={{width: '74%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 bg-surface-container-high border border-outline-variant rounded-bento p-padding relative overflow-hidden">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
<div className="space-y-6">
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-[0.2em] mb-4 block">05 / Data Primitives</span>
<div className="space-y-8">
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-bold uppercase text-neutral-500">
<span>Primary Progress</span>
<span className="text-white">88%</span>
</div>
<div className="h-4 bg-black border border-neutral-800 rounded-full p-1">
<div className="h-full bg-secondary rounded-full w-[88%]"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-[10px] font-bold uppercase text-neutral-500">
<span>Neutral Progress</span>
<span className="text-white">42%</span>
</div>
<div className="h-4 bg-black border border-neutral-800 rounded-full p-1">
<div className="h-full bg-white rounded-full w-[42%]"></div>
</div>
</div>
</div>
</div>
<div className="md:col-span-2">
<div className="h-64 w-full bg-black rounded-xl border border-neutral-800 relative overflow-hidden group">
<div className="dot-matrix absolute inset-0 opacity-40"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<p className="text-secondary text-[10px] font-black uppercase tracking-[0.5em] mb-4">Neural Grid Active</p>
<div className="flex gap-2 justify-center">
<div className="w-1 h-8 bg-secondary/20 group-hover:bg-secondary/100 transition-all duration-300"></div>
<div className="w-1 h-12 bg-secondary/40 group-hover:bg-secondary/100 transition-all duration-300 delay-75"></div>
<div className="w-1 h-6 bg-secondary/60 group-hover:bg-secondary/100 transition-all duration-300 delay-150"></div>
<div className="w-1 h-10 bg-secondary/80 group-hover:bg-secondary/100 transition-all duration-300 delay-200"></div>
<div className="w-1 h-8 bg-secondary/20 group-hover:bg-secondary/100 transition-all duration-300 delay-300"></div>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 font-mono text-[8px] text-neutral-700 leading-tight">
                                0xFA42 - KERNEL_INIT<br/>
                                LINK_STATUS: VERIFIED<br/>
                                BUFFER_OVERFLOW: NONE
                            </div>
</div>
</div>
</div>
</div>
</div>

<footer className="mt-24 pb-12 border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-4">
<span className="text-xl font-black text-secondary">CHECK BOX</span>
<span className="text-neutral-600 text-xs font-medium">DESIGN SYSTEM v1.0.4 — © 2024 INI CORE</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors" href="#">Documentation</a>
<a className="text-neutral-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors" href="#">GitHub Repo</a>
<a className="text-neutral-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors" href="#">System Status</a>
</div>
</footer>
</main>


    </div>
  );
}
