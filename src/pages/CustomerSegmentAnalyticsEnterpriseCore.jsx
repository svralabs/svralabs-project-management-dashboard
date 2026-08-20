import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CustomerSegmentAnalyticsEnterpriseCore() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 left-0 w-full z-50 bg-surface flex justify-between items-center px-padding py-4 max-w-full">
<div className="flex items-center gap-8">
<div className="text-body-md font-h1 tracking-tighter text-secondary">CHECK BOX</div>
<nav className="hidden md:flex items-center gap-6">
<a className="text-primary border-b-2 border-secondary pb-1 font-label-sm text-label-sm active:opacity-80 transition-all" href="#">Home</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 font-label-sm text-label-sm active:opacity-80 transition-all" href="#">Stats</a>
<a className="text-on-surface-variant hover:text-secondary transition-colors duration-200 font-label-sm text-label-sm active:opacity-80 transition-all" href="#">Tree</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="bg-surface-container-high rounded px-3 py-1 flex items-center gap-2 border border-white/5">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">search</span>
<input className="bg-transparent border-none focus:ring-0 text-label-sm font-label-sm w-32 placeholder:text-on-surface-variant/50" placeholder="Search Command..." type="text"/>
</div>
<button className="text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">notifications</span></button>
<button className="text-on-surface-variant hover:text-secondary transition-colors"><span className="material-symbols-outlined">settings</span></button>
<img alt="User profile" className="w-8 h-8 rounded-full border border-secondary/20" src="https://lh3.googleusercontent.com/aida/AP1WRLvTLFWbf7vPLX09OrPRlGnXWa7r0qEr3im5IZ-sYJ_by4oJYJW9jQwgx8dqDJQ_UNalEE7cZhNVyJC4mzQQX8NnYBXURdSzgw2Jdwc5lR4bgpYMyue9Jtfrir5RrD0phLRJ3WjRwugxcgedVzETcBkA5gueoJ6zRosL3ILl5P2hHEsRjV6eVG7j-ko9x8YxnUHnYeB1m9T0s3LzHCLGyimt76wlOlA_IPIHd4ej1FrZS5w2B7p9VmcaOg"/>
</div>
</header>

<aside className="fixed left-0 top-0 h-full flex flex-col z-40 border-r border-white/5 bg-surface-container-lowest w-20 md:w-64 pt-20 hidden md:flex">
<div className="px-6 py-4 flex items-center gap-3">
<div className="w-8 h-8 rounded bg-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-on-secondary text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>terminal</span>
</div>
<div className="hidden md:block">
<div className="text-label-sm font-h1 text-secondary uppercase tracking-widest">NODE_01</div>
<div className="text-[10px] text-on-surface-variant font-label-sm">System: Active</div>
</div>
</div>
<nav className="flex-1 mt-4">
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="hidden md:block font-label-sm text-label-sm">Dashboard</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-secondary border-r-2 border-secondary bg-surface-container-low scale-95 transition-transform" href="#">
<span className="material-symbols-outlined">monitoring</span>
<span className="hidden md:block font-label-sm text-label-sm">Analytics</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200" href="#">
<span className="material-symbols-outlined">account_tree</span>
<span className="hidden md:block font-label-sm text-label-sm">Nodes</span>
</a>
<a className="flex items-center gap-4 px-6 py-4 text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200" href="#">
<span className="material-symbols-outlined">security</span>
<span className="hidden md:block font-label-sm text-label-sm">Security</span>
</a>
</nav>
<div className="border-t border-white/5 py-4">
<a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-primary" href="#">
<span className="material-symbols-outlined">help</span>
<span className="hidden md:block font-label-sm text-label-sm">Support</span>
</a>
<a className="flex items-center gap-4 px-6 py-3 text-on-surface-variant hover:text-error" href="#">
<span className="material-symbols-outlined">logout</span>
<span className="hidden md:block font-label-sm text-label-sm">Logout</span>
</a>
</div>
</aside>

<main className="flex-1 mt-20 md:ml-64 p-padding overflow-y-auto">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h1 className="font-h1 text-h1 uppercase tracking-tight text-primary">SEGMENT: ENTERPRISE_CORE</h1>
<p className="font-body-md text-on-surface-variant/80">Global Analytics Environment / v2.0</p>
</div>
<div className="flex gap-2">
<div className="bg-surface-container rounded-lg px-4 py-2 border border-white/5 flex items-center gap-3">
<span className="text-[10px] text-on-surface-variant uppercase font-label-sm">Date:</span>
<span className="text-label-sm font-label-sm">Now</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
<div className="bg-surface-container rounded-lg px-4 py-2 border border-white/5 flex items-center gap-3">
<span className="text-[10px] text-on-surface-variant uppercase font-label-sm">Product:</span>
<span className="text-label-sm font-label-sm">All</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-gap mb-gap">
<div className="bg-surface p-padding rounded-xl glass-edge relative overflow-hidden">
<div className="flex justify-between items-start">
<span className="text-label-sm font-label-sm uppercase tracking-widest text-on-surface-variant">LTV</span>
<span className="material-symbols-outlined text-secondary">trending_up</span>
</div>
<div className="mt-4 font-kpi-number text-kpi-number tabular-nums text-primary">$1.2M</div>
<div className="text-[12px] text-secondary font-label-sm mt-1">+14.2% vs prev month</div>
<div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[80px]">payments</span>
</div>
</div>
<div className="bg-surface p-padding rounded-xl glass-edge relative overflow-hidden">
<div className="flex justify-between items-start">
<span className="text-label-sm font-label-sm uppercase tracking-widest text-on-surface-variant">CHURN_RISK</span>
<span className="material-symbols-outlined text-error">warning</span>
</div>
<div className="mt-4 font-kpi-number text-kpi-number tabular-nums text-primary">1.2%</div>
<div className="text-[12px] text-on-surface-variant font-label-sm mt-1">Stable within threshold</div>
<div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[80px]">emergency</span>
</div>
</div>
<div className="bg-surface p-padding rounded-xl glass-edge relative overflow-hidden">
<div className="flex justify-between items-start">
<span className="text-label-sm font-label-sm uppercase tracking-widest text-on-surface-variant">ACTIVE_NODES</span>
<span className="material-symbols-outlined text-secondary">hub</span>
</div>
<div className="mt-4 font-kpi-number text-kpi-number tabular-nums text-primary">4.2k</div>
<div className="text-[12px] text-secondary font-label-sm mt-1">Peak capacity reached</div>
<div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
<span className="material-symbols-outlined text-[80px]">memory</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-gap auto-rows-[280px]">

<div className="lg:col-span-8 bg-surface p-padding rounded-xl glass-edge flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Behavioral Breakdown</h3>
<div className="flex gap-4">
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-secondary"></span><span className="text-[10px] uppercase font-label-sm text-on-surface-variant">Resource Usage</span></div>
<div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white"></span><span className="text-[10px] uppercase font-label-sm text-on-surface-variant">Peak</span></div>
</div>
</div>
<div className="flex-1 flex items-end gap-2 px-4 pb-4">

<div className="flex-1 bg-secondary h-[45%] relative group">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-label-sm opacity-0 group-hover:opacity-100 transition-opacity">45%</div>
</div>
<div className="flex-1 bg-white/20 h-[65%] relative group hover:bg-secondary transition-colors">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-label-sm opacity-0 group-hover:opacity-100">65%</div>
</div>
<div className="flex-1 bg-secondary h-[85%] relative group"></div>
<div className="flex-1 bg-white/20 h-[55%] relative group hover:bg-secondary"></div>
<div className="flex-1 bg-secondary h-[95%] relative group"></div>
<div className="flex-1 bg-white/20 h-[40%] relative group hover:bg-secondary"></div>
<div className="flex-1 bg-secondary h-[70%] relative group"></div>
<div className="flex-1 bg-white/20 h-[50%] relative group hover:bg-secondary"></div>
<div className="flex-1 bg-secondary h-[80%] relative group"></div>
<div className="flex-1 bg-white/20 h-[60%] relative group hover:bg-secondary"></div>
<div className="flex-1 bg-secondary h-[45%] relative group"></div>
<div className="flex-1 bg-white/20 h-[85%] relative group hover:bg-secondary"></div>
</div>
<div className="flex justify-between text-[10px] font-label-sm text-on-surface-variant px-4 pt-2 border-t border-white/5">
<span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span><span>JUL</span><span>AUG</span><span>SEP</span><span>OCT</span><span>NOV</span><span>DEC</span>
</div>
</div>

<div className="lg:col-span-4 bg-surface p-padding rounded-xl glass-edge flex flex-col">
<h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-6">Purchase Frequency</h3>
<div className="grid grid-cols-10 gap-2 flex-1 items-center justify-center">


</div>
<div className="mt-4 flex justify-between items-center">
<span className="text-label-sm font-label-sm tabular-nums text-secondary">78.4% RETENTION</span>
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">more_horiz</span>
</div>
</div>

<div className="lg:col-span-4 bg-surface p-padding rounded-xl glass-edge flex flex-col">
<h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-4">Regional Distribution</h3>
<div className="relative flex-1 w-full flex items-center justify-center">

<div className="grid grid-cols-8 gap-1">

</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="border-l-2 border-secondary pl-3">
<div className="text-[10px] text-on-surface-variant uppercase">North Am.</div>
<div className="text-label-sm font-h1 text-primary">42%</div>
</div>
<div className="border-l-2 border-[#ff7f1c] pl-3">
<div className="text-[10px] text-on-surface-variant uppercase">Europe</div>
<div className="text-label-sm font-h1 text-primary">31%</div>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-surface p-padding rounded-xl glass-edge flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface">Engagement Timeline</h3>
<div className="text-[10px] text-secondary font-label-sm px-2 py-0.5 rounded bg-secondary/10 border border-secondary/20 uppercase">Real-time Feed</div>
</div>
<div className="flex-1 space-y-4 overflow-hidden relative">

<div className="flex items-center gap-4 relative">
<div className="w-px h-full absolute left-[15px] top-6 bg-white/5"></div>
<div className="w-8 h-8 rounded-full bg-secondary-container/20 border border-secondary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[14px] text-secondary">bolt</span>
</div>
<div className="flex-1 flex items-center justify-between bg-surface-container-low p-3 rounded glass-edge">
<div>
<div className="text-label-sm font-h1 text-primary">API_NODE_EXCUTION</div>
<div className="text-[10px] text-on-surface-variant">User: ID_9982 initiated high-load query</div>
</div>
<div className="text-right">
<div className="text-[10px] font-label-sm text-secondary tabular-nums">0.02ms</div>
<div className="text-[9px] text-on-surface-variant uppercase">JUST NOW</div>
</div>
</div>
</div>
<div className="flex items-center gap-4 relative">
<div className="w-px h-full absolute left-[15px] top-6 bg-white/5"></div>
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-white/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[14px] text-on-surface-variant">sync</span>
</div>
<div className="flex-1 flex items-center justify-between bg-surface-container-low p-3 rounded glass-edge opacity-60">
<div>
<div className="text-label-sm font-h1 text-primary">SYNC_COMPLETED</div>
<div className="text-[10px] text-on-surface-variant">Data reconciliation across 12 zones successful</div>
</div>
<div className="text-right">
<div className="text-[10px] font-label-sm text-on-surface-variant tabular-nums">1.4s</div>
<div className="text-[9px] text-on-surface-variant uppercase">2M AGO</div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-surface-container-highest border border-white/10 flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[14px] text-[#ff7f1c]">warning</span>
</div>
<div className="flex-1 flex items-center justify-between bg-surface-container-low p-3 rounded glass-edge opacity-40">
<div>
<div className="text-label-sm font-h1 text-primary">LATENCY_SPIKE</div>
<div className="text-[10px] text-on-surface-variant">Regional hub 'US-WEST-2' reported 150ms delay</div>
</div>
<div className="text-right">
<div className="text-[10px] font-label-sm text-error tabular-nums">152ms</div>
<div className="text-[9px] text-on-surface-variant uppercase">15M AGO</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-12 bg-surface p-padding rounded-xl glass-edge flex flex-col lg:flex-row items-center gap-8 h-auto">
<div className="flex-1">
<h3 className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface mb-4">Enterprise Segmentation Identity</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="p-4 bg-surface-container rounded border border-white/5">
<div className="text-[10px] text-on-surface-variant uppercase font-label-sm mb-1">Risk Profile</div>
<div className="text-body-md font-h1 text-secondary">LOW_PRIORITY</div>
</div>
<div className="p-4 bg-surface-container rounded border border-white/5">
<div className="text-[10px] text-on-surface-variant uppercase font-label-sm mb-1">Growth Index</div>
<div className="text-body-md font-h1 text-secondary">STABLE</div>
</div>
<div className="p-4 bg-surface-container rounded border border-white/5">
<div className="text-[10px] text-on-surface-variant uppercase font-label-sm mb-1">Support Tier</div>
<div className="text-body-md font-h1 text-primary">TIER_01</div>
</div>
<div className="p-4 bg-surface-container rounded border border-white/5">
<div className="text-[10px] text-on-surface-variant uppercase font-label-sm mb-1">Last Update</div>
<div className="text-body-md font-h1 text-primary tabular-nums">04.12.24</div>
</div>
</div>
</div>
<div className="w-full lg:w-64 h-32 rounded-lg bg-surface-container overflow-hidden border border-white/10 relative">
<img className="w-full h-full object-cover grayscale brightness-50 contrast-125" data-alt="A macro photography shot of circuit board patterns glowing with neon lime light in a dark, high-tech laboratory setting. The lighting is moody and low-key with sharp highlights on the metallic traces and microchips. The overall aesthetic is technical, clean, and futuristic, following a dark mode onyx and neon lime palette for a premium corporate look." src="https://lh3.googleusercontent.com/aida/AP1WRLvVthJ5UhYfxxaEYYNyxlgwOW8FMPYf-BXObfKtW_zgb6ch_DehwWvEktXkAY-IktM74kR9VIb1hhdT8iQyjsshTnSroX1o6QMaFfMPO28gNpqbofzVpUTyaICULFqu1XgxcDAslHo7pl1oFIchDpx0gMfaEw5NO_C-tlBHxX_FIUtiCJYSaznz5rcjSu99Ex9_sMq4LHLwnM1-IWGDmJWoe_dYAitFUOjuKVqNEk-Fc5WhViQfTJk4-Q"/>
<div className="absolute inset-0 bg-secondary/10 mix-blend-color"></div>
<div className="absolute bottom-2 left-2 flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="text-[8px] font-label-sm text-secondary uppercase tracking-tighter">Live Stream</span>
</div>
</div>
</div>
</div>
</main>

<button className="fixed bottom-8 right-8 w-16 h-16 bg-secondary text-on-secondary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
<span className="material-symbols-outlined text-[32px]" style={{fontVariationSettings: '\'FILL\' 1'}}>add</span>
</button>

<nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest flex justify-around items-center py-3 px-padding z-50 border-t border-white/5">
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-[10px] font-label-sm">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-secondary">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>monitoring</span>
<span className="text-[10px] font-label-sm">Stats</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">account_tree</span>
<span className="text-[10px] font-label-sm">Tree</span>
</button>
<button className="flex flex-col items-center gap-1 text-on-surface-variant">
<span className="material-symbols-outlined">settings</span>
<span className="text-[10px] font-label-sm">System</span>
</button>
</nav>


    </div>
  );
}
