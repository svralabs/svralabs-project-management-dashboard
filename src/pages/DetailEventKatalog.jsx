import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DetailEventKatalog() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<nav className="bg-background dark:bg-background text-primary dark:text-inverse-primary w-full top-0 sticky z-40 border-b border-border dark:border-outline-variant flex justify-between items-center px-margin py-sm">
<div className="flex items-center gap-md">
<button className="material-symbols-outlined hover:bg-surface-container-low transition-colors rounded-full p-xs active:scale-95">arrow_back</button>
<h1 className="font-heading-md text-heading-md">TaskFlow</h1>
</div>
<div className="flex items-center gap-md">
<span className="material-symbols-outlined p-xs">notifications</span>
<div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center border border-border">
<span className="material-symbols-outlined text-[20px]">person</span>
</div>
</div>
</nav>
<main className="pb-32">

<section className="relative w-full h-[280px] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover" data-alt="A wide-angle, cinematic view of a modern, high-end baby boutique interior during an exclusive event. The space is filled with elegant strollers on display platforms and neatly organized wooden shelves stocked with luxury baby products in soft pastel tones. The lighting is warm and inviting, creating a sophisticated light-mode atmosphere with a professional corporate modernist aesthetic. The environment feels spacious, organized, and premium." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQZyQFl3-w2AOt0Klam8TwV6eJ3GpXwV-fOECG_dX_ANsBwXovWbEay5Q0TcJBTnjtUupVKMF-HLMG4CRE5myx9g-CWYSj04TOrn2swXuTV0FsI7IMAoMGdyXczkcBG_6cl6MWpxMuv7aX2wWTpZlemnu1T_iAaPW90ucCiQek0q_Su3yd1mXeUu-Dq5ciW9_A1iCsvFm74VTXAXZ7cSxu3TtFYkAyyoo8xYWSzjlR1fB6GLLqeTtK"/>
<div className="absolute bottom-0 left-0 p-margin z-20 w-full">
<div className="flex items-center gap-sm mb-xs">
<span className="px-sm py-[2px] bg-success-tint text-success-text text-label-caps font-label-caps rounded-sm border border-success-text/20">Aktif</span>
</div>
<h2 className="text-white font-display-lg-mobile text-display-lg-mobile mb-xs">Event Perlengkapan Bayi</h2>
<p className="text-white/80 text-body-base">Periode: 10–20 Juli 2026</p>
</div>
</section>

<div className="sticky top-[52px] bg-bg-canvas/95 backdrop-blur-md z-30 py-md px-margin overflow-x-auto no-scrollbar border-b border-border">
<div className="flex items-center gap-sm min-w-max">
<button className="px-md py-sm bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform">Semua</button>
<button className="px-md py-sm bg-surface text-on-surface-variant border border-border rounded-full font-label-caps text-label-caps hover:bg-surface-container-low transition-colors">Popok</button>
<button className="px-md py-sm bg-surface text-on-surface-variant border border-border rounded-full font-label-caps text-label-caps hover:bg-surface-container-low transition-colors">Susu</button>
<button className="px-md py-sm bg-surface text-on-surface-variant border border-border rounded-full font-label-caps text-label-caps hover:bg-surface-container-low transition-colors">Mainan</button>
<button className="px-md py-sm bg-surface text-on-surface-variant border border-border rounded-full font-label-caps text-label-caps hover:bg-surface-container-low transition-colors">Pakaian</button>
</div>
</div>

<div className="px-margin pt-md grid grid-cols-2 gap-md">

<div className="bg-surface rounded-lg border border-border overflow-hidden flex flex-col group">
<div className="relative h-40 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A studio photograph of a premium baby diaper package from the brand LuxeCare. The packaging is white with minimal light brown accents, featuring a sleeping baby illustration. The background is a clean, neutral grey surface in a corporate modernist style. The lighting is soft and shadowless, emphasizing the high-quality materials and professional design. The overall aesthetic is reliable and efficient." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBE0proUpDsHJnpoZIMpr7k71aHe429GHupXrO2Z2NQO0nBGJ2TQyecamnLIq3OQjcjeqGbn2oMA8KYOIHFkxto1lMUc5KQTI47E9CParlVvq-9C9D69tKeL5EgzWi8AytzjIQYwtW-GEMtpNH9K7vmr7r_BierDFhvhuA3WUjrgxUF74BIL5k_uZLJRAOzmSLmqdSUbLHYD8GlfZAaxAKTczUyrIS-tBB89xB1IA_FfOEzLB-PdbIH"/>
</div>
<div className="p-sm flex flex-col flex-grow">
<span className="text-error-text bg-error-tint px-xs py-[2px] rounded-sm text-[10px] font-bold w-fit mb-xs">+Fee Rp15.000</span>
<h3 className="text-body-base font-semibold text-on-surface line-clamp-1 mb-xs">Popok Bayi Premium</h3>
<p className="text-primary font-bold text-body-base mt-auto">Rp150.000</p>
<button className="mt-sm w-full py-xs bg-secondary text-on-secondary rounded-lg font-label-caps text-label-caps hover:bg-on-secondary-fixed-variant transition-colors active:scale-95">+ Tambah</button>
</div>
</div>

<div className="bg-surface rounded-lg border border-border overflow-hidden flex flex-col group">
<div className="relative h-40 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A premium tin of organic baby formula milk powder by Naturae Organics. The tin has a cream-colored lid and a sophisticated label with soft earth tones and a botanical illustration. The photography is clean and professional, set against a bright, minimalist white background. This image follows a high-end corporate modernist aesthetic, highlighting the reliability and purity of the product with crisp details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH7jEdE-sm4peuVsNTO02mIyN6bls6wfag08ExHJ79yNqwIdGpnAHI6jsUGX2w2bRun_5edv0rUeCt8SUB5S3-i4JQnHmqZBMY5uP-wdkSMgTqTgNqNUBarVv04-Vmu3sR2trZ7tTfrfiZ9hiGfZuMY8GCTDkcjtikqGYwCt0xsztQmTPcD2LiDogrWteg6pfTuOVsD8sENKOkjU2lg5dtmQHQqSjPIHQYdLA7U85fkuLErNvhkGl1"/>
</div>
<div className="p-sm flex flex-col flex-grow">
<span className="text-primary bg-primary/10 px-xs py-[2px] rounded-sm text-[10px] font-bold w-fit mb-xs">+Fee 10%</span>
<h3 className="text-body-base font-semibold text-on-surface line-clamp-1 mb-xs">Susu Formula Organik</h3>
<p className="text-primary font-bold text-body-base mt-auto">Rp325.000</p>
<button className="mt-sm w-full py-xs bg-secondary text-on-secondary rounded-lg font-label-caps text-label-caps hover:bg-on-secondary-fixed-variant transition-colors active:scale-95">+ Tambah</button>
</div>
</div>

<div className="bg-surface rounded-lg border border-border overflow-hidden flex flex-col group">
<div className="relative h-40 w-full overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A collection of colorful educational wooden toys for toddlers arranged neatly on a grey surface. The set includes a stacking ring tower, a shape-sorting cube, a bead maze, and numbered building blocks in soft primary and pastel colors. The lighting is even and bright, creating a clean modernist look. The style is professional and organized, emphasizing clarity and educational value in a minimalist setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv5f0QPjPtRtOMcucvZY524jsrx3Jqh_cwthxXS3PbpF-cKAVr72lO0GpfDOjI_YKri76hVGZhp9F3MO8DwUlORN_sbjj1ar2PGIvgNG6Slfujw-XZlRLfRiuwfP3ujTYGZx5cjU5_AviR71xABaCxpBdZv6IZzw9KwYXKfBOVURiF9n85BSGxeVwWtTFs_tV0oG2C6ZZgOaROKDRPhMLwkm8tW_pvniyiPp3TsK1EBssbBNu4RJdF"/>
</div>
<div className="p-sm flex flex-col flex-grow">
<span className="text-error-text bg-error-tint px-xs py-[2px] rounded-sm text-[10px] font-bold w-fit mb-xs">+Fee Rp8.500</span>
<h3 className="text-body-base font-semibold text-on-surface line-clamp-1 mb-xs">Mainan Edukasi Kayu</h3>
<p className="text-primary font-bold text-body-base mt-auto">Rp85.000</p>
<button className="mt-sm w-full py-xs bg-secondary text-on-secondary rounded-lg font-label-caps text-label-caps hover:bg-on-secondary-fixed-variant transition-colors active:scale-95">+ Tambah</button>
</div>
</div>

<div className="bg-surface rounded-lg border border-border overflow-hidden flex flex-col group">
<div className="relative h-40 w-full overflow-hidden bg-surface-container-low flex items-center justify-center">
<span className="material-symbols-outlined text-outline text-5xl">child_care</span>
</div>
<div className="p-sm flex flex-col flex-grow">
<span className="text-primary bg-primary/10 px-xs py-[2px] rounded-sm text-[10px] font-bold w-fit mb-xs">+Fee 10%</span>
<h3 className="text-body-base font-semibold text-on-surface line-clamp-1 mb-xs">Botol Susu Anti-Sedak</h3>
<p className="text-primary font-bold text-body-base mt-auto">Rp120.000</p>
<button className="mt-sm w-full py-xs bg-secondary text-on-secondary rounded-lg font-label-caps text-label-caps hover:bg-on-secondary-fixed-variant transition-colors active:scale-95">+ Tambah</button>
</div>
</div>
</div>
</main>

<button className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center z-50 active:scale-90 transition-transform">
<span className="material-symbols-outlined text-2xl">shopping_cart</span>
<span className="absolute -top-1 -right-1 bg-error text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-background">3</span>
</button>

<nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-inverse-surface dark:bg-surface-container-highest rounded-full z-50 flex justify-around items-center px-lg py-sm">
<a className="flex items-center justify-center text-outline-variant dark:text-on-surface-variant w-10 h-10 hover:opacity-80 transition-opacity" href="#">
<span className="material-symbols-outlined">home</span>
</a>
<a className="flex items-center justify-center bg-primary dark:bg-primary-container text-on-primary dark:text-on-primary-container rounded-full w-12 h-12 active:scale-90 transition-transform duration-200" href="#">
<span className="material-symbols-outlined">calendar_month</span>
</a>
<a className="flex items-center justify-center text-outline-variant dark:text-on-surface-variant w-10 h-10 hover:opacity-80 transition-opacity" href="#">
<span className="material-symbols-outlined">add</span>
</a>
<a className="flex items-center justify-center text-outline-variant dark:text-on-surface-variant w-10 h-10 hover:opacity-80 transition-opacity" href="#">
<span className="material-symbols-outlined">analytics</span>
</a>
<a className="flex items-center justify-center text-outline-variant dark:text-on-surface-variant w-10 h-10 hover:opacity-80 transition-opacity" href="#">
<span className="material-symbols-outlined">person</span>
</a>
</nav>


    </div>
  );
}
