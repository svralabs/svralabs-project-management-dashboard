import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DashboardHomeBalancedVariation2() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<aside className="h-screen w-20 fixed left-0 top-0 flex flex-col border-r border-neutral-800 bg-neutral-900 dark:bg-[#171717] z-50">
<div className="flex flex-col items-center py-8 gap-8 h-full">
<div className="bg-[#C4F82A] text-black rounded-full w-10 h-10 flex items-center justify-center font-black">CB</div>
<nav className="flex flex-col items-center gap-6 flex-1">
<a className="bg-[#C4F82A] text-black rounded-full p-3 transition-all duration-200 scale-95 active:scale-90" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>home</span>
</a>
<a className="text-neutral-500 hover:text-white p-3 transition-all duration-200 hover:bg-neutral-800 rounded-full" href="#">
<span className="material-symbols-outlined">query_stats</span>
</a>
<a className="text-neutral-500 hover:text-white p-3 transition-all duration-200 hover:bg-neutral-800 rounded-full" href="#">
<span className="material-symbols-outlined">account_tree</span>
</a>
<a className="text-neutral-500 hover:text-white p-3 transition-all duration-200 hover:bg-neutral-800 rounded-full" href="#">
<span className="material-symbols-outlined">assessment</span>
</a>
</nav>
<div className="mt-auto">
<a className="text-neutral-500 hover:text-white p-3 transition-all duration-200 hover:bg-neutral-800 rounded-full" href="#">
<span className="material-symbols-outlined">settings</span>
</a>
</div>
</div>
</aside>

<header className="h-20 w-[calc(100%-5rem)] ml-20 flex items-center px-8 sticky top-0 z-40 bg-[#0A0A0A] border-b border-neutral-800">
<div className="flex justify-between items-center w-full">
<div className="text-2xl font-black tracking-tighter text-white uppercase font-inter tabular-nums">CHECK BOX</div>
<div className="flex items-center gap-6">
<div className="relative group">
<span className="material-symbols-outlined text-neutral-400 group-hover:text-[#C4F82A] transition-colors cursor-pointer">search</span>
</div>
<div className="relative group">
<span className="material-symbols-outlined text-neutral-400 group-hover:text-[#C4F82A] transition-colors cursor-pointer">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-secondary-container rounded-full"></span>
</div>
<div className="h-10 w-10 rounded-full overflow-hidden border border-neutral-800">
<img alt="Bogdan Nikitin" className="w-full h-full object-cover" data-alt="A close-up professional headshot of a person with a focused, intelligent expression. The lighting is dramatic and moody, using soft key light and deep shadows to emphasize facial structure. The background is a clean, dark minimalist workspace that matches the high-contrast technical UI aesthetic. The overall tone is authoritative and modern." src="https://lh3.googleusercontent.com/aida/ADBb0ugjn5ZhMYgOkiDmobd9_7DaDkpeLXbcg_iWn55_rGzONZ3NvZjCGy6xyJvk2zXzslsyFCeb53AkI27zFxTJ24rIaBradDQ4lJdz2q49N_Rz-NR2egilSeFiA1rbsjQN55Zo7EdwARYkVUvaqnzsj7_Nztgl9rUHfgN3IoJGtlNlIpHH9TwaLi6EYABgosaOtjfF1fwNwYrM63r1BWrev1mHUm5g67rnfsUQpOFkdX157nYBMo9yWtfcih0od-B40soruVMjbSI4"/>
</div>
</div>
</div>
</header>

<main className="ml-20 p-8 min-h-screen">

<section className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
<div>
<h1 className="text-h1 font-h1 uppercase tracking-tight text-white mb-2">CHECK BOX</h1>
<p className="text-label-sm font-label-sm text-neutral-500 uppercase tracking-widest">Global Analytics Environment / v2.0</p>
</div>
<div className="flex gap-3">
<div className="bg-surface rounded-full px-6 py-2 flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-neutral-300">
                    Region: <span className="text-white">Global</span>
<span className="material-symbols-outlined text-xs">expand_more</span>
</div>
<div className="bg-surface rounded-full px-6 py-2 flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-neutral-300">
                    Period: <span className="text-white">Last 30D</span>
<span className="material-symbols-outlined text-xs">expand_more</span>
</div>
<div className="bg-surface rounded-full px-6 py-2 flex items-center gap-4 text-sm font-bold uppercase tracking-wider text-neutral-300">
                    Filter: <span className="text-white">Active Only</span>
<span className="material-symbols-outlined text-xs">expand_more</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 flex flex-col gap-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-surface rounded-[20px] p-6 h-64 relative overflow-hidden">
<div className="flex justify-between items-start mb-8">
<span className="text-label-sm font-label-sm text-neutral-400 uppercase tracking-[0.2em]">Customer</span>
<span className="text-kpi-number font-kpi-number tabular-nums text-white">4.2k</span>
</div>

<div className="absolute inset-x-0 bottom-0 h-32 px-2">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 400 100">

<path d="M0,80 Q50,20 100,50 T200,60 T300,30 T400,70" fill="none" stroke="#FF7A00" strokeLinecap="round" strokeWidth="3"></path>

<path d="M0,60 Q50,80 100,40 T200,20 T300,70 T400,40" fill="none" stroke="#C4F82A" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>
<div className="absolute bottom-4 left-6 right-6 flex items-center justify-between border-t border-neutral-800/50 pt-4">
<div className="flex gap-4">
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
<span className="text-[9px] uppercase text-neutral-500 font-bold">Standard</span>
</div>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A]"></span>
<span className="text-[9px] uppercase text-neutral-500 font-bold">Premium</span>
</div>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
<span className="text-[9px] uppercase text-neutral-500 font-bold">Enterprise</span>
</div>
</div>
</div></div>

<div className="bg-surface rounded-[20px] p-6 h-64"><span className="text-label-sm font-label-sm text-neutral-400 uppercase tracking-[0.2em] mb-4 block">Product</span>
<div className="grid grid-cols-10 gap-2 h-32 mb-4">
<div className="w-full aspect-square rounded-full bg-[#C4F82A]"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-[#FF7A00]"></div><div className="w-full aspect-square rounded-full bg-white"></div><div className="w-full aspect-square rounded-full bg-neutral-700"></div><div className="w-full aspect-square rounded-full bg-[#C4F82A]"></div><div className="w-full aspect-square rounded-full bg-white"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-[#FF7A00]"></div>
<div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-white"></div><div className="w-full aspect-square rounded-full bg-[#C4F82A]"></div><div className="w-full aspect-square rounded-full bg-neutral-700"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-[#C4F82A]"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-white"></div><div className="w-full aspect-square rounded-full bg-neutral-700"></div>
<div className="w-full aspect-square rounded-full bg-[#FF7A00]"></div><div className="w-full aspect-square rounded-full bg-[#C4F82A]"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-white"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-white"></div><div className="w-full aspect-square rounded-full bg-neutral-700"></div><div className="w-full aspect-square rounded-full bg-[#C4F82A]"></div><div className="w-full aspect-square rounded-full bg-neutral-800"></div><div className="w-full aspect-square rounded-full bg-[#FF7A00]"></div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-neutral-800">
<div className="flex gap-3">
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-white"></span>
<span className="text-[9px] uppercase text-neutral-500 font-bold">Std</span>
</div>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#C4F82A]"></span>
<span className="text-[9px] uppercase text-neutral-500 font-bold">Prm</span>
</div>
<div className="flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]"></span>
<span className="text-[9px] uppercase text-neutral-500 font-bold">Ent</span>
</div>
</div>
<div className="text-[10px] text-neutral-500 tabular-nums uppercase font-bold">
        Index: 0.82 <span className="text-[#C4F82A] ml-2">+14.2%</span>
</div>
</div></div>
</div>

<div className="bg-surface rounded-[20px] p-8 flex-1"><div className="flex justify-between items-center mb-10">
<span className="text-label-sm font-label-sm text-neutral-400 uppercase tracking-[0.2em]">Product Resources</span>
</div>
<div className="flex items-end justify-between gap-6 h-56 px-4 mb-8"><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">1,012</span><div className="w-full h-48 bg-white rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">658</span><div className="w-full h-32 bg-[#C4F82A] rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">233</span><div className="w-full h-20 bg-[#FF7A00] rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">894</span><div className="w-full h-40 bg-white rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">512</span><div className="w-full h-24 bg-[#C4F82A] rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">710</span><div className="w-full h-36 bg-[#FF7A00] rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">942</span><div className="w-full h-44 bg-white rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">425</span><div className="w-full h-28 bg-[#C4F82A] rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">318</span><div className="w-full h-20 bg-[#FF7A00] rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">764</span><div className="w-full h-38 bg-white rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">589</span><div className="w-full h-30 bg-[#C4F82A] rounded-full transition-all duration-300"></div></div><div className="flex flex-col items-center flex-1 group"><span className="text-[10px] font-black tabular-nums text-white mb-2">442</span><div className="w-full h-24 bg-[#FF7A00] rounded-full transition-all duration-300"></div></div></div>
<div className="flex items-center justify-between pt-6 border-t border-neutral-800"><div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-white"></span>
<span className="text-[10px] uppercase text-neutral-400 font-bold tracking-wider">Resources</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#C4F82A]"></span>
<span className="text-[10px] uppercase text-neutral-400 font-bold tracking-wider">Valid</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
<span className="text-[10px] uppercase text-neutral-400 font-bold tracking-wider">Invalid</span>
</div>
</div>
<div className="bg-white px-4 py-1.5 rounded-full">
<span className="text-[10px] font-black text-black tabular-nums uppercase tracking-wider">Total: 1,012</span>
</div></div></div>
</div>

<div className="lg:col-span-4">
<div className="bg-surface rounded-[20px] p-8 h-full flex flex-col"><div className="flex items-center justify-between mb-8">
<span className="text-label-sm font-label-sm text-neutral-400 uppercase tracking-[0.2em]">Projects Timeline</span>
<span className="material-symbols-outlined text-neutral-500">more_horiz</span>
</div>
<div className="flex-1 flex flex-col min-h-0">
<div className="flex flex-1">
<div className="flex flex-col justify-between py-2 pr-4 text-[10px] font-bold text-neutral-600 tabular-nums border-r border-neutral-800">
<span>30.09</span><span>29.09</span><span>28.09</span><span>27.09</span><span>26.09</span><span>25.09</span><span>24.09</span>
</div>
<div className="flex-1 relative flex flex-col justify-around py-2 pl-4"><div className="w-full h-[1px] bg-neutral-800/50 absolute top-[10%] left-0"></div><div className="w-full h-[1px] bg-neutral-800/50 absolute top-[25%] left-0"></div><div className="w-full h-[1px] bg-neutral-800/50 absolute top-[40%] left-0"></div><div className="w-full h-[1px] bg-neutral-800/50 absolute top-[55%] left-0"></div><div className="w-full h-[1px] bg-neutral-800/50 absolute top-[70%] left-0"></div><div className="w-full h-[1px] bg-neutral-800/50 absolute top-[85%] left-0"></div><div className="relative flex items-center bg-neutral-800 rounded-full h-6 w-[85%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-neutral-800 object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujrnuxtqtpstTBhQYjrL9WdHljLMoI0XYu1KMeMp-2GNNRKqS6sCtK4l2M1W0Zbt0KNmNmQI58PZbJWCm8K8HifiPaZbHqqbj15XMCLZId_zdskVeV9aCWtRF1b5THwCu61-su5IGhOfJULvxyEhzrhMD-PB4dKv7Qrqh55bzxoyTym59eV9F9E5USVFfgPuqfOFZaxsvlu-LjKuiXz-B8oNOWN2fpCZoBLjsjNiaulnu7rQuioD093vg"/><span className="ml-3 text-[10px] font-black text-white tabular-nums">ID 829-01</span></div><div className="relative flex items-center bg-[#C4F82A] rounded-full h-6 w-[65%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-[#C4F82A] object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujTnUQvvabK9nacSAci1QVQSTGx9PJ9YdK_E6EFAWh383aNxxOAoBLaCTV5W4y_WkAyn7c8ftub1Zt358IG5xY89U7ltamD8xHjuI2zHbTlaIT8j_hcnrOQ1y0KD-UC3NLxEFcqi5nAF3_xEn8aToP-53BHVUlQnp1rUu1tao2D8-SjYW3_qN2730HRm1ZE8PXQuhFqxu4blA3rMf2uXL5DRkUX0lRipOovYVPzV6yWGkSoB_G8w9w_8g"/><span className="ml-3 text-[10px] font-black text-black tabular-nums">ID 944-X2</span></div><div className="relative flex items-center bg-[#FF7A00] rounded-full h-6 w-[95%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-[#FF7A00] object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujkQWL9OScsEl0dSRUwRfi7Inlu_vZ37rb-jWpV_vHBTXySR7Xl0RgsqlIsjZoWhh296gJrUwCIkIJtow-H7uxhZWDttnWtj-HJt-fXKgDpXBDSOi6xaroXyxSB2ug7CbeVWeiv1cz4nloXSKh1ZBvrWt8sYR8hYsY4fsq24TjoZQVO5EIGgzkCfslYbaOgSllFHc45LmTtwS3N-Q5KEkb1T728wm4VpBStoymSeDieTXHYJHVqOyc8"/><span className="ml-3 text-[10px] font-black text-black tabular-nums">ID 102-L9</span></div><div className="relative flex items-center bg-white rounded-full h-6 w-[75%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uhRErMLkF1mAheqKk9Iy2nFxPPQHQh-VaEYORQgPyxfTTBKxVrRLKmT_yr1RRhqs8IPwAdR1tK5rTBeV26hF99EacIA4ByDwWRoyvuBrC-fjuQiY-g5ekcauShwwujIgPMvqw2HPneZeTDUQXMHQmfgrkfGDvOo7eU-AgWUaGaQctkTlQT9fPk0_Ar71Uc1zjZl8tguardzi7Vp2s04OZx_G9o5er6RAwqbxXAMLMyTKq4rg5Ag4o6TbQ"/><span className="ml-3 text-[10px] font-black text-black tabular-nums">ID 551-A0</span></div><div className="relative flex items-center bg-neutral-800 rounded-full h-6 w-[45%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-neutral-800 object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ugjn5ZhMYgOkiDmobd9_7DaDkpeLXbcg_iWn55_rGzONZ3NvZjCGy6xyJvk2zXzslsyFCeb53AkI27zFxTJ24rIaBradDQ4lJdz2q49N_Rz-NR2egilSeFiA1rbsjQN55Zo7EdwARYkVUvaqnzsj7_Nztgl9rUHfgN3IoJGtlNlIpHH9TwaLi6EYABgosaOtjfF1fwNwYrM63r1BWrev1mHUm5g67rnfsUQpOFkdX157nYBMo9yWtfcih0od-B40soruVMjbSI4"/><span className="ml-3 text-[10px] font-black text-white tabular-nums">ID 442-M4</span></div><div className="relative flex items-center bg-[#C4F82A] rounded-full h-6 w-[90%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-[#C4F82A] object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujrnuxtqtpstTBhQYjrL9WdHljLMoI0XYu1KMeMp-2GNNRKqS6sCtK4l2M1W0Zbt0KNmNmQI58PZbJWCm8K8HifiPaZbHqqbj15XMCLZId_zdskVeV9aCWtRF1b5THwCu61-su5IGhOfJULvxyEhzrhMD-PB4dKv7Qrqh55bzxoyTym59eV9F9E5USVFfgPuqfOFZaxsvlu-LjKuiXz-B8oNOWN2fpCZoBLjsjNiaulnu7rQuioD093vg"/><span className="ml-3 text-[10px] font-black text-black tabular-nums">ID 667-K1</span></div><div className="relative flex items-center bg-[#FF7A00] rounded-full h-6 w-[55%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-[#FF7A00] object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujTnUQvvabK9nacSAci1QVQSTGx9PJ9YdK_E6EFAWh383aNxxOAoBLaCTV5W4y_WkAyn7c8ftub1Zt358IG5xY89U7ltamD8xHjuI2zHbTlaIT8j_hcnrOQ1y0KD-UC3NLxEFcqi5nAF3_xEn8aToP-53BHVUlQnp1rUu1tao2D8-SjYW3_qN2730HRm1ZE8PXQuhFqxu4blA3rMf2uXL5DRkUX0lRipOovYVPzV6yWGkSoB_G8w9w_8g"/><span className="ml-3 text-[10px] font-black text-black tabular-nums">ID 128-B9</span></div><div className="relative flex items-center bg-white rounded-full h-6 w-[80%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ujkQWL9OScsEl0dSRUwRfi7Inlu_vZ37rb-jWpV_vHBTXySR7Xl0RgsqlIsjZoWhh296gJrUwCIkIJtow-H7uxhZWDttnWtj-HJt-fXKgDpXBDSOi6xaroXyxSB2ug7CbeVWeiv1cz4nloXSKh1ZBvrWt8sYR8hYsY4fsq24TjoZQVO5EIGgzkCfslYbaOgSllFHc45LmTtwS3N-Q5KEkb1T728wm4VpBStoymSeDieTXHYJHVqOyc8"/><span className="ml-3 text-[10px] font-black text-black tabular-nums">ID 339-N7</span></div><div className="relative flex items-center bg-neutral-800 rounded-full h-6 w-[70%] pr-4 overflow-hidden group mb-1"><img className="h-6 w-6 rounded-full border-2 border-neutral-800 object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uhRErMLkF1mAheqKk9Iy2nFxPPQHQh-VaEYORQgPyxfTTBKxVrRLKmT_yr1RRhqs8IPwAdR1tK5rTBeV26hF99EacIA4ByDwWRoyvuBrC-fjuQiY-g5ekcauShwwujIgPMvqw2HPneZeTDUQXMHQmfgrkfGDvOo7eU-AgWUaGaQctkTlQT9fPk0_Ar71Uc1zjZl8tguardzi7Vp2s04OZx_G9o5er6RAwqbxXAMLMyTKq4rg5Ag4o6TbQ"/><span className="ml-3 text-[10px] font-black text-white tabular-nums">ID 812-P3</span></div><div className="relative flex items-center bg-[#C4F82A] rounded-full h-6 w-[40%] pr-4 overflow-hidden group"><img className="h-6 w-6 rounded-full border-2 border-[#C4F82A] object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0ugjn5ZhMYgOkiDmobd9_7DaDkpeLXbcg_iWn55_rGzONZ3NvZjCGy6xyJvk2zXzslsyFCeb53AkI27zFxTJ24rIaBradDQ4lJdz2q49N_Rz-NR2egilSeFiA1rbsjQN55Zo7EdwARYkVUvaqnzsj7_Nztgl9rUHfgN3IoJGtlNlIpHH9TwaLi6EYABgosaOtjfF1fwNwYrM63r1BWrev1mHUm5g67rnfsUQpOFkdX157nYBMo9yWtfcih0od-B40soruVMjbSI4"/><span className="ml-3 text-[10px] font-black text-black tabular-nums">ID 255-W0</span></div></div>
</div>
<div className="flex ml-14 justify-between mt-4 text-[10px] font-bold text-neutral-600 tabular-nums">
<span>0</span><span>10</span><span>20</span><span>30</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-neutral-800">
<div className="flex items-center justify-between mb-8"><div className="flex flex-wrap gap-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-white"></span>
<span className="text-[10px] uppercase text-neutral-400 font-bold">Customer</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#C4F82A]"></span>
<span className="text-[10px] uppercase text-neutral-400 font-bold">Product</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#FF7A00]"></span>
<span className="text-[10px] uppercase text-neutral-400 font-bold">Web</span>
</div>
</div>
<div className="bg-white px-4 py-1.5 rounded-full">
<span className="text-[10px] font-black text-black tabular-nums uppercase">Total: 284</span>
</div></div>
<button className="w-full bg-[#C4F82A] text-black font-black uppercase text-[10px] tracking-widest py-4 rounded-full hover:opacity-90 transition-opacity">View Full Roadmap</button>
</div></div>
</div>
</div>

<footer className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-surface rounded-[20px] p-6 flex flex-col gap-2">
<span className="text-[10px] font-bold text-neutral-500 uppercase">Uptime</span>
<span className="text-xl font-black text-white tabular-nums">99.98%</span>
</div>
<div className="bg-surface rounded-[20px] p-6 flex flex-col gap-2">
<span className="text-[10px] font-bold text-neutral-500 uppercase">Latency</span>
<span className="text-xl font-black text-white tabular-nums">14ms</span>
</div>
<div className="bg-surface rounded-[20px] p-6 flex flex-col gap-2">
<span className="text-[10px] font-bold text-neutral-500 uppercase">Security</span>
<span className="text-xl font-black text-[#C4F82A] uppercase">Level 4</span>
</div>
<div className="bg-surface rounded-[20px] p-6 flex flex-col gap-2">
<span className="text-[10px] font-bold text-neutral-500 uppercase">Load Balance</span>
<div className="flex items-center gap-2">
<div className="h-2 flex-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-[#C4F82A] rounded-full"></div>
</div>
<span className="text-xs font-black text-white">67%</span>
</div>
</div>
</footer>
</main>

    </div>
  );
}
