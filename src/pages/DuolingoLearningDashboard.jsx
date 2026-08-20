import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DuolingoLearningDashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      
<div className="app-container" data-purpose="main-application-shell">

<aside className="side-nav">
<img alt="Duolingo" className="logo w-[130px] mb-7 mx-3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAS31gsBf83s2hqTeS9fZ1yspLpfqk4NBWRKb3opGg9KbI2SZGH5mgWzPs0ga6vl9_bBpk9uap6SOj5raf7SW9Ei4bvMfK62EPs48TLqnGt7n7iHsgjZcXN0eOwhI7sWq3lEaNTDcwkhBrQ9jEDW_2kh_Ia9jmxvUjaE0S6K9qxl7V14zGzT4iwFHamlSGPHp53B8Dw8p2Dk4vLFJDsYfVCC0ZOu3kNnYxmFxTLTsMUDdLET0yD0rA-VA"/>
<nav data-purpose="sidebar-links">
<div className="nav-item active"><span className="text-[22px] w-[26px] text-center">🏠</span><span className="txt">Belajar</span></div>
<div className="nav-item"><span className="text-[22px] w-[26px] text-center">🔤</span><span className="txt">Latihan</span></div>
<div className="nav-item"><span className="text-[22px] w-[26px] text-center">🏆</span><span className="txt">Liga</span></div>
<div className="nav-item"><span className="text-[22px] w-[26px] text-center">🎯</span><span className="txt">Misi</span></div>
<div className="nav-item"><span className="text-[22px] w-[26px] text-center">🛒</span><span className="txt">Toko</span></div>
<div className="nav-item"><span className="text-[22px] w-[26px] text-center">👤</span><span className="txt">Profil</span></div>
</nav>
</aside>


<main className="main-content">

<header className="sticky top-0 bg-white flex justify-end gap-[18px] p-[14px_24px] border-b-2 border-[rgb(229,229,229)] z-10" data-purpose="status-bar">
<div className="flex items-center gap-1.5 text-base font-extrabold">
<img alt="Spanish Flag" className="w-[26px] h-5 object-contain rounded-[3px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb_N8VHqXVy97kS9koNq3ir5ikLqQTJ7c_otXP5nxyyzn0lYwV3-MinTN0XLsANID0ijjW3sdYz8m29jUiItjYYVlAfrBGyTqigo5llUIFsvrdeJKHkV44WLoqRKRFLA2PPeRdpurIM2anQL0c2iogPKnA3S2T40UhMuVb3pfishrcDBztuiw8HOhRxoVcSbt2iZ9yokoNGD7w2p5-N2gnCHa41kUOi8T8T-DlYWGUxbiSqU6-PYSOMA"/>
<span>ES</span>
</div>
<div className="flex items-center gap-1.5 text-base font-extrabold text-[#FF9600]">🔥 42</div>
<div className="flex items-center gap-1.5 text-base font-extrabold text-[#1CB0F6]">💎 1.250</div>
<div className="flex items-center gap-1.5 text-base font-extrabold text-[#FF4B4B]">❤️ 5</div>
</header>

<section className="bg-[rgb(88,204,2)] text-white rounded-2xl p-[18px_22px] m-6 flex justify-between items-center shadow-[0_4px_0_#61B800]" data-purpose="unit-header">
<div className="meta">
<div className="text-[12px] font-extrabold uppercase tracking-widest opacity-85">Bagian 1 · Unit 4</div>
<h2 className="font-['Feather_Bold','Nunito',sans-serif] text-[22px] mt-1">Pesan makanan &amp; minuman</h2>
</div>
<button className="bg-[rgba(0,0,0,0.12)] border-none text-white font-extrabold uppercase text-[12px] tracking-[0.5px] p-[10px_14px] rounded-xl cursor-pointer flex items-center gap-2 hover:bg-[rgba(0,0,0,0.2)] transition-colors">
          📘 Panduan
        </button>
</section>

<section className="path-container" data-purpose="learning-path">

<div className="node-wrap">
<button className="node done"><span className="crown">👑</span>⭐</button>
</div>

<div className="node-wrap" style={{marginLeft: '-60px'}}>
<button className="node done">⭐</button>
</div>

<div className="node-wrap" style={{marginLeft: '-90px'}}>
<button className="node done">📖</button>
</div>

<div className="node-wrap" style={{marginLeft: '-50px'}}>
<div className="ring"></div>
<div className="info-bubble">
<div className="text-[11px] font-extrabold uppercase tracking-[0.5px] text-[rgb(88,204,2)]">Lanjutkan</div>
<div className="text-[13px] font-bold text-[rgb(75,75,75)] my-1 mb-2.5">Pelajaran 4 · Restoran</div>
<button className="btn-duo btn-duo-primary w-full">Mulai +10 XP</button>
</div>
<button className="node current">⭐</button>
</div>

<div className="node-wrap" style={{marginLeft: '30px'}}>
<button className="node locked">🔒</button>
</div>

<div className="node-wrap" style={{marginLeft: '80px'}}>
<button className="node locked">🏅</button>
</div>

<div className="node-wrap" style={{marginLeft: '20px'}}>
<button className="node locked">🔒</button>
</div>

<div className="node-wrap" style={{marginLeft: '-60px'}}>
<button className="node locked">💎</button>
</div>
</section>
</main>


<aside className="right-rail p-[24px_20px] flex flex-col gap-5 border-l-2 border-[rgb(229,229,229)]">

<div className="bg-gradient-to-br from-[#9b6bff] to-[#7d3cff] text-white rounded-2xl p-[18px]" data-purpose="super-promo">
<h3 className="text-white text-[15px] font-extrabold uppercase tracking-[0.5px] mb-3.5">Super Duolingo</h3>
<p className="text-[13px] font-semibold text-[rgba(255,255,255,0.85)] mb-3.5 leading-[1.45]">Belajar tanpa batas dengan hati tak terbatas dan bebas iklan. Coba gratis 1 minggu.</p>
<button className="btn-duo w-full bg-white text-[#7d3cff] shadow-[0_4px_0_rgba(0,0,0,0.18)]">Coba 1 minggu gratis</button>
</div>

<div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-[18px]" data-purpose="daily-quests">
<h3 className="text-[15px] font-extrabold uppercase tracking-[0.5px] text-[rgb(75,75,75)] mb-3.5 flex justify-between items-center">
          Misi Harian <a className="text-[12px] text-[#1CB0F6]" href="#">Lihat semua</a>
</h3>

<div className="flex items-center gap-3 mb-3.5">
<span className="text-2xl w-[34px] text-center">⚡</span>
<div className="flex-1">
<div className="text-[13px] font-bold mb-1.5 text-[rgb(75,75,75)]">Raih 30 XP</div>
<div className="h-3.5 bg-[rgb(229,229,229)] rounded-full overflow-hidden relative">
<div className="h-full bg-[#FFC800] rounded-full" style={{width: '66%'}}></div>
<span className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-white">20 / 30</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 mb-3.5">
<span className="text-2xl w-[34px] text-center">🎯</span>
<div className="flex-1">
<div className="text-[13px] font-bold mb-1.5 text-[rgb(75,75,75)]">Skor 90% di 3 pelajaran</div>
<div className="h-3.5 bg-[rgb(229,229,229)] rounded-full overflow-hidden relative">
<div className="h-full bg-[#1CB0F6] rounded-full" style={{width: '33%'}}></div>
<span className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-white">1 / 3</span>
</div>
</div>
</div>

<div className="flex items-center gap-3 mb-3.5">
<span className="text-2xl w-[34px] text-center">⏱️</span>
<div className="flex-1">
<div className="text-[13px] font-bold mb-1.5 text-[rgb(75,75,75)]">Latihan 10 menit</div>
<div className="h-3.5 bg-[rgb(229,229,229)] rounded-full overflow-hidden relative">
<div className="h-full bg-[rgb(88,204,2)] rounded-full" style={{width: '80%'}}></div>
<span className="absolute inset-0 flex items-center justify-center text-[10px] font-extrabold text-white">8 / 10</span>
</div>
</div>
</div>
</div>

<div className="border-2 border-[rgb(229,229,229)] rounded-2xl p-[18px]" data-purpose="league-ranking">
<h3 className="text-[15px] font-extrabold uppercase tracking-[0.5px] text-[rgb(75,75,75)] mb-3.5 flex justify-between items-center">
          Liga Emerald <a className="text-[12px] text-[#1CB0F6]" href="#">Aturan</a>
</h3>
<div className="flex items-center gap-3 mb-3.5">
<div className="w-12 h-12 rounded-full bg-[rgba(255,200,0,0.18)] flex items-center justify-center text-[26px]">🏆</div>
<div>
<div className="text-[15px] font-extrabold text-[rgb(75,75,75)]">Peringkat 3</div>
<div className="text-[12px] font-semibold text-[rgb(119,119,119)]">7 teratas naik ke Liga Sapphire</div>
</div>
</div>

<div className="divide-y divide-[rgb(229,229,229)]">

<div className="flex items-center gap-2.5 py-2">
<span className="w-[22px] text-[13px] font-extrabold text-[rgb(175,175,175)] text-center">1</span>
<img alt="Maya" className="w-[30px] h-[30px] rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBDVWIgxg1LqqpxwdwC9ZoMsvB000lqTmsAd90Gil0wm-eMpqN7cHkxjwqKy84MKq1NTG9UsE7pEkT1DjADN3jfADG0DcQ8dbwIHZks4u_dFH28pKwn1DU3dlCkFOeghO4kzkSPHymq22bqCXJXETyWfhJTNo32cqE3maN_xQ28zoq_XGSRT8UvXrU_Kykts7lVagD1MBLZtIQlcGw817Wi92wZJ2PDLN-Z3_BHYQ_eSbBiEQ2YeEqFw"/>
<span className="flex-1 text-[13px] font-bold text-[rgb(75,75,75)]">Maya</span>
<span className="text-[12px] font-bold text-[rgb(175,175,175)]">820 XP</span>
</div>

<div className="flex items-center gap-2.5 py-2">
<span className="w-[22px] text-[13px] font-extrabold text-[rgb(175,175,175)] text-center">2</span>
<img alt="Daniel" className="w-[30px] h-[30px] rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEd28xU_Pe8SMnT5dgI1S3yhNd9uCUXhDKCeh9vRjU3ym0n0YP42G26qsmPnthNURah45tEBPc5xtVtP1c_IGtkezTVIWlm14bft5jBzowuMcXKdZ3tk6zHp3AIKxOmghJ-2fw4pIXbfAEsXwdMRrS8m4JD4-ZdUiv74UnRs95_xRC_BhsQytbWzcVpTM05npAxgBpWq8o5dr6FE_Ntw8wc1hAqc-Jn0rG-DpzsryvZG_r_bQMISfygQ"/>
<span className="flex-1 text-[13px] font-bold text-[rgb(75,75,75)]">Daniel</span>
<span className="text-[12px] font-bold text-[rgb(175,175,175)]">640 XP</span>
</div>

<div className="flex items-center gap-2.5 py-2 bg-[rgba(88,204,2,0.06)] -mx-2 px-2 rounded-xl">
<span className="w-[22px] text-[13px] font-extrabold text-[rgb(175,175,175)] text-center">3</span>
<img alt="Kamu" className="w-[30px] h-[30px] rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc5O1AJilITDFWA_uUd6Nyo6_l4wriBaatDaKGRfuHs5GtOrJL5ARaj9hYyaMOgkfAFDCZUJysEJWT57QPGg7tiOYlwF5Dd4E0sJH-ALYT3GJlCZYPZ6hRgflg-iJr6d9z2HcFi_p_6ShqHeOyyAxvMYx2M0i4X9S6KrjvGZU4p75gYf81aEijx1fe3oPXetRaznWiQRVMENOkIFjyZV7dG5J-eqcw1Mm0VliangsjQS61Qav6nCybxQ"/>
<span className="flex-1 text-[13px] font-bold text-[rgb(88,204,2)]">Kamu</span>
<span className="text-[12px] font-bold text-[rgb(175,175,175)]">610 XP</span>
</div>

<div className="flex items-center gap-2.5 py-2">
<span className="w-[22px] text-[13px] font-extrabold text-[rgb(175,175,175)] text-center">4</span>
<img alt="Rara" className="w-[30px] h-[30px] rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQZiIO8eZ05mKjXSHRk_76OpkciLP2fZqGSSTV5f3Ov3gJ7vyVmSf92c0QcqEhDAuapKnzaqFa8FWHAAPc2jnRN7fiuBlYpXu0gG-wlPi4jsBaBFtjytV6L8Ve2U-samlQzqnIMVWEJjGBi0cB4KJ7sMTO7xQog1En5gdRsow79Ff6Qg5tyzZHV7pX3XuX7zyL27rXEd3acTKFRHhq2FzPlWtaPrGwpcE8eP5t7uECHWskdpraf6eD_g"/>
<span className="flex-1 text-[13px] font-bold text-[rgb(75,75,75)]">Rara</span>
<span className="text-[12px] font-bold text-[rgb(175,175,175)]">540 XP</span>
</div>
</div>
</div>
</aside>

</div>

    </div>
  );
}
