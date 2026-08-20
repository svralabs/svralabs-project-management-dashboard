import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BerandaHome() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex justify-between items-center px-gutter py-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A close-up portrait of a young Indonesian man with a friendly smile, clean-cut hair, and modern professional attire. He is positioned against a soft-focus minimalist background with neutral tones and lavender accents, reflecting a high-end luxury lifestyle and personal shopper brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6UIpKBQfEF9dZKZExYwWmvQtho7OaHCybsQO8TKFG2j39X-4C5npFQg3VMi2ZRpEDztkXwReqmdDTCYbWpCz6jFptrC89H1FKFW_KSmqVinbG7-g77DCuTz9Zooc3fsjyLiAFMjA8OlL1RHONwQCfbx2YzYmBWdzlJ-wTYrYYGpeLmukycHK-M_6QdGx-5kpxZXS-LHsTONv0UQG2WbzvC17-HvTg-FAJpbIqOktjM8SSAcLUXHz"/>
</div>
<span className="font-heading-md-mobile text-heading-md-mobile text-on-surface">Halo, Rio</span>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95 duration-150">
<span className="material-symbols-outlined text-primary">notifications</span>
</button>
</header>
<main className="mt-20 px-gutter space-y-lg">

<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-base" placeholder="Cari produk atau event" type="text"/>
</div>

<section>
<div className="flex justify-between items-center mb-md">
<h2 className="font-heading-md-mobile text-heading-md-mobile">Event Berlangsung</h2>
<button className="text-primary font-label-caps text-label-caps">Lihat Semua</button>
</div>
<div className="flex gap-md overflow-x-auto no-scrollbar pb-2">

<div className="min-w-[280px] bg-surface rounded-xl border border-border overflow-hidden flex-shrink-0 transition-transform active:scale-[0.98]">
<div className="relative h-40">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7pfFOwMsHeVymR3qvJ52Ei_E6IqJnT619wbeVF_uKKXsgpFo93xiktlC82rzobLzvOB7D-WkJnXxCaT77NqO9EpR1J97RBVBnKkVvR6Jb5Balqe4B7RWi15MYNRHutMNKjOZTkgJE3mF0EqLcACK1CIJtIEGYkOYHF-6bVzWFb2S0GO2VGK6lW_Z0x7Accai5R2q84n9YMEZp5KuaZ7sXfVfPLU3OX73pO9IrFg_sA3uHsDovdJJ"/>
<div className="absolute top-3 left-3 bg-error-tint px-3 py-1 rounded-sm border border-error-container">
<span className="text-error-text font-label-caps text-[10px] uppercase tracking-wider">Berakhir 3 hari lagi</span>
</div>
</div>
<div className="p-md flex justify-between items-center">
<div>
<h3 className="font-heading-md-mobile text-sm mb-1">Paris Luxury Haul</h3>
<p className="text-tx-secondary text-xs">Oleh: Personal Shopper Pro</p>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-label-caps active:scale-90 transition-all">Lihat</button>
</div>
</div>

<div className="min-w-[280px] bg-surface rounded-xl border border-border overflow-hidden flex-shrink-0 transition-transform active:scale-[0.98]">
<div className="relative h-40">
<div className="w-full h-full bg-cover bg-center" data-alt="A wide-angle, high-density shot of a luxury shopping district in Tokyo at sunset. Neon signs and high-end boutiques are beautifully lit with soft purples and oranges. In the foreground, a stylish person holds several designer shopping bags, suggesting a successful luxury haul event for an international personal shopping service." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDIHhy6ORaX0NydEs_giswAzAMEJFDm0PHLT9ipk6k-xqtsQWyRjU80M-YvsUqYSenTQBwvrD8DkJsLueQQvQyJPggasEFNKXkmVDi_rhhfTV7a_V6siUTDVLS341SD2iLU2ExZL2EHHKoWObO-V1Woezcg8dDUeAsrQ5Fbtm8lucYrws7SWLMQinGZbw8mVBt8fNGV0pGuDjYN-1gDYhw4j-Go9zxkOlhvCbTqgEB1n7dA-CEoOAud\')'}}></div>
<div className="absolute top-3 left-3 bg-error-tint px-3 py-1 rounded-sm border border-error-container">
<span className="text-error-text font-label-caps text-[10px] uppercase tracking-wider">Berakhir 1 hari lagi</span>
</div>
</div>
<div className="p-md flex justify-between items-center">
<div>
<h3 className="font-heading-md-mobile text-sm mb-1">Ginza Tokyo Pick</h3>
<p className="text-tx-secondary text-xs">Oleh: Tokyo Curator</p>
</div>
<button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-label-caps active:scale-90 transition-all">Lihat</button>
</div>
</div>
</div>
</section>

<section>
<div className="flex gap-sm overflow-x-auto no-scrollbar">
<button className="px-5 py-2 rounded-full bg-secondary-container text-primary font-label-caps text-label-caps border border-primary-container whitespace-nowrap active:scale-95 transition-all">Semua</button>
<button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Bayi</button>
<button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Skincare</button>
<button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Fashion</button>
<button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Elektronik</button>
<button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Makanan</button>
</div>
</section>

<section>
<h2 className="font-heading-md-mobile text-heading-md-mobile mb-md">Katalog Populer</h2>
<div className="grid grid-cols-2 gap-md">

<div className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col active:scale-[0.97] transition-all">
<div className="relative aspect-square">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGVFojt6YBBRXMzDuYe4hnab4NwciHWvgkj_ortJRAuekFe0-pRK5UcZTzB0w7hrOgNa0zUgjbdwdRD1E1Mlcr8CZYmLvmZLGVqz7129VtsLbWsOlu3Odq1VyFSlHRgLq5d3wBh7eQA2hx4gY5gGqU2Ubd-8KjydSdue_6p92j85BkksdD7xrGo4en4_ymNSuw-STe3RZi6Sh7OCTQ9ql_BCfUazmQ1xlHn8lvIOjD85jI6MsWisY3"/>
<div className="absolute bottom-2 left-2 bg-success-tint px-2 py-0.5 rounded-sm border border-success-text/20">
<span className="text-success-text font-label-caps text-[10px]">+Fee 10%</span>
</div>
</div>
<div className="p-sm flex flex-col flex-grow">
<h4 className="font-body-base font-semibold text-on-surface line-clamp-1 mb-1">Premium Skincare Set</h4>
<p className="text-primary font-heading-md-mobile text-sm">Rp 1.200.000</p>
</div>
</div>

<div className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col active:scale-[0.97] transition-all">
<div className="relative aspect-square">
<img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAQAbGYryrAak_YB1Xb4XSwIXziYhKEKU7X-Vxzebc5fSZfAbyOgkzjntWPQZCjYb-z08h7djksLMSbAF7quph1XfFlRerzk38P-wbu7XOk7STnigvaCb_Brkfgn8EfBricqE6ib2egezPM2LMmGfbuGa2LaGZ1VBVUSbQKzLkJ0JwYmzclpHDXLnLItXH2M0HX9n7du4CTSROn2q9bZssTbRW3hNHH2ngKk9kObAz2AypqpzQTfAI"/>
<div className="absolute bottom-2 left-2 bg-success-tint px-2 py-0.5 rounded-sm border border-success-text/20">
<span className="text-success-text font-label-caps text-[10px]">+Fee 10%</span>
</div>
</div>
<div className="p-sm flex flex-col flex-grow">
<h4 className="font-body-base font-semibold text-on-surface line-clamp-1 mb-1">Designer Handbag</h4>
<p className="text-primary font-heading-md-mobile text-sm">Rp 3.500.000</p>
</div>
</div>

<div className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col active:scale-[0.97] transition-all">
<div className="relative aspect-square">
<div className="w-full h-full bg-cover bg-center" data-alt="A high-end designer sneaker in a minimalist, soft-lit studio setting. The shoe features premium textures and a modern silhouette, reflecting corporate modernism and elite fashion trends. The lighting is crisp and clear, highlighting the craftsmanship and luxury appeal suitable for a high-fee personal shopping catalog." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuCDf5lNCnFL4xQj0fGoDMDM9dw60D8xv0HJIIFnKYhe9CEtOm4VijUKf-58Qhi7Sxw_6UqjEKZ2ROUvxeN2zLQ6ez5CjO2Ev9A90ZX8jguW_CRHgx3dSh7NmYdsONtmXb8qvwK_1R4582b8ranA4vxbbMRRLwqOBTDGyhEhVGtCv8LxRdMaJe-Wp5cqPHRoSkACajDnfm-bH4Hs2fmiLUy9T5Bzb0DOt6yGTO1V7Fmi0uQJV1UxgAgZ\')'}}></div>
<div className="absolute bottom-2 left-2 bg-success-tint px-2 py-0.5 rounded-sm border border-success-text/20">
<span className="text-success-text font-label-caps text-[10px]">+Fee 12%</span>
</div>
</div>
<div className="p-sm flex flex-col flex-grow">
<h4 className="font-body-base font-semibold text-on-surface line-clamp-1 mb-1">Limited Edition Sneaker</h4>
<p className="text-primary font-heading-md-mobile text-sm">Rp 2.850.000</p>
</div>
</div>

<div className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col active:scale-[0.97] transition-all">
<div className="relative aspect-square">
<div className="w-full h-full bg-cover bg-center" data-alt="A collection of luxury Belgian chocolates arranged artistically on a marble surface. The lighting is warm and inviting, emphasizing the rich textures and premium packaging of the confectionaries. This high-key aesthetic perfectly matches the lavender and white color palette of the Titipin Aja application's global marketplace." style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuAz-5NIR6g3RohT3PfWJkS2MCOg-MNKrRUmJ7xTkejNdgUBCJrwo9Cbuf1iH0FMPWzwxWylkYVkQ9IImZweyCqzKttKyD2QZvnVMTt_xobSUAUj-H6HlX3SywhQYEMuBWdgO5pkW0A8XpFhU8w4CtWD8GAIAU7ZHY2P8vrMq72-YhOAyOq7H_fwjpRd0AFvf_40Uj9bcSkQXy9bLeffWJNJWruiCL8dyye3Q8Lh17gfiswUBef1Pe0M\')'}}></div>
<div className="absolute bottom-2 left-2 bg-success-tint px-2 py-0.5 rounded-sm border border-success-text/20">
<span className="text-success-text font-label-caps text-[10px]">+Fee 8%</span>
</div>
</div>
<div className="p-sm flex flex-col flex-grow">
<h4 className="font-body-base font-semibold text-on-surface line-clamp-1 mb-1">Gourmet Chocolate Box</h4>
<p className="text-primary font-heading-md-mobile text-sm">Rp 450.000</p>
</div>
</div>
</div>
</section>

<section className="relative rounded-xl overflow-hidden h-32 border border-border">

<div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/10 backdrop-blur-[2px]">
<h3 className="font-display text-lg">Promo Akhir Pekan</h3>
<p className="font-label-caps text-[10px] opacity-90 uppercase">Diskon Fee Titip Hingga 50%</p>
<button className="mt-2 bg-white text-primary px-4 py-1.5 rounded-full font-label-caps text-[10px] font-bold">Klaim Voucher</button>
</div>
</section>
</main>

<nav className="fixed bottom-0 w-full z-50 bg-surface border-t border-border flex justify-around items-center px-4 py-2 h-16 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">

<a className="flex flex-col items-center justify-center bg-secondary-container text-primary rounded-xl px-4 py-1.5 transition-all" href="#">
<span className="material-symbols-outlined" style={{fontVariationSettings: '\'FILL\' 1'}}>home</span>
<span className="font-label-caps text-[10px] mt-0.5">Beranda</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-container-low transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">receipt_long</span>
<span className="font-label-caps text-[10px] mt-0.5">Pesanan</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-container-low transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">calendar_month</span>
<span className="font-label-caps text-[10px] mt-0.5">Kalender</span>
</a>
<a className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-container-low transition-all active:scale-90 duration-200" href="#">
<span className="material-symbols-outlined">person</span>
<span className="font-label-caps text-[10px] mt-0.5">Akun</span>
</a>
</nav>


    </div>
  );
}
