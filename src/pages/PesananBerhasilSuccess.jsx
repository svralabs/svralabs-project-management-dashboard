import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function PesananBerhasilSuccess() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<header className="w-full sticky top-0 z-40 bg-surface dark:bg-surface-dim border-b border-border dark:border-outline-variant flex justify-between items-center px-margin py-md">
<div className="flex items-center gap-sm">
<div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden border border-border">
<img className="w-full h-full object-cover" data-alt="A professional close-up studio portrait of a friendly young Indonesian shopper with a warm smile. The background is a clean, neutral soft grey, maintaining a corporate modernism aesthetic with high-key, even lighting. The overall mood is reliable and welcoming, fitting for a premium personal shopping application." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzy0Js9ttkoHVxll8xJW1NaEqC7ORSX_DUw797pHBGI9GJxd8_1czbS9cqPchxvZOTFGEjZtt01q_we58iDk_1DZLMsWFo5o1ouVaa5qNjI-BjturZLrHfr8ArjbvYY6w0biquGS6l_0JpuMw88HY8CKOUedgGegLdJkjTGC0uZ5pEg4ib1MQU8bx8PAZ6bLlId61Rqjr7ZGuVkPW7y62s6_7UnyCXoFX2_OjY9NQJdQ4f2IXB9sUy"/>
</div>
<h1 className="font-heading-md text-heading-md text-primary dark:text-primary-fixed-dim">Hi, Shopper!</h1>
</div>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95 transition-transform">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
</button>
</header>

<main className="flex-1 w-full max-w-md px-margin flex flex-col items-center justify-center py-xl space-y-lg">

<div className="relative w-48 h-48 flex items-center justify-center">

<div className="absolute inset-0 bg-success-tint rounded-full opacity-50 scale-110"></div>
<div className="absolute inset-0 bg-success-tint rounded-full opacity-30 scale-125"></div>
<div className="success-icon-animate bg-surface border border-border w-24 h-24 rounded-2xl flex items-center justify-center">
<span className="material-symbols-outlined text-[64px] text-success-text" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
</div>
</div>

<div className="text-center space-y-xs">
<h2 className="font-display-lg-mobile text-display-lg-mobile text-on-surface">Pesanan Berhasil Dibuat</h2>
<p className="font-body-base text-body-base text-on-surface-variant">No. Pesanan: <span className="font-bold text-primary">#JT-1042</span></p>
</div>

<div className="w-full bg-success-tint border border-success-text/20 p-lg rounded-2xl flex gap-md">
<span className="material-symbols-outlined text-success-text shrink-0">info</span>
<p className="font-body-base text-body-base text-success-text leading-relaxed">
                Tim kami akan membelikan barang Anda. Invoice akan dikirim setelah barang berhasil dibeli.
            </p>
</div>

<div className="w-full bg-surface border border-border rounded-2xl overflow-hidden">
<div className="h-48 w-full relative">
<img className="w-full h-full object-cover" data-alt="A high-quality lifestyle shot of several branded shopping bags from luxury retailers neatly arranged on a clean white marble table. The scene is bright and airy with soft natural light streaming in, creating a professional and high-end atmosphere. The composition is minimalist and organized, reflecting a successful and efficient shopping experience for the user." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCEX27PC1unLE7OTZbn0kPtgryGpRx7K_wIh3--9VMDYJPchnaWC8IoPZxV2SuU4DgALZpBC-9HGzQGT1mFbnw3oLslWBNQIQZ14HhrMS_VE0akYITbqjSGHGaSzw_C2Pf96yCb6Jnq_33fzmYmqAUqW0Q1FK1Ebdrh5IkJdYzPmgu2ACmfHJtTUz8SeCmSXhCabhECDH_rh8fIEdk7f5vIjHHuICm0rOiJIIuVL4hUkGfzYUzwFYR"/>
<div className="absolute top-md right-md bg-surface/90 backdrop-blur px-sm py-xs rounded-lg border border-border flex items-center gap-xs">
<span className="material-symbols-outlined text-primary text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>verified</span>
<span className="text-[10px] font-bold text-primary uppercase tracking-wider">Verified Purchase</span>
</div>
</div>
<div className="p-md flex justify-between items-center">
<div className="flex -space-x-sm">
<div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Small avatar of a personal shopper with professional lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj85oGz1bBB0CoYc3qynrX-2L8fdh14rompibvwKE89aNkzjpRbuPqiK94wTEQSPnDgZp0qu1XoGrccbozK9zeAuUa71ZoGXwVNyLBk_Whofe9EgWDHSgjV9ACNVJ-3gM1POo5ZPFw_ulTf8_QwnE2RkmAcE5EACTZSlQh1hl1eRchy6yuTK5SAbtWsqlvtV26Bd67hq5X1EtqL3bjoOCrHQEdH97RJFw4DdzcwmPbJohiduPXfwHt"/>
</div>
<div className="w-6 h-6 rounded-full border-2 border-surface bg-surface-container-high flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                        +2
                    </div>
</div>
<span className="text-[12px] font-medium text-on-surface-variant">Diperiksa oleh 3 kurir profesional</span>
</div>
</div>

<div className="w-full pt-md space-y-sm">
<button className="w-full py-md px-lg bg-[#8F85E0] text-surface rounded-full font-bold text-body-base active:scale-95 transition-all hover:brightness-110">
                Lihat Pesanan
            </button>
<button className="w-full py-md px-lg text-primary rounded-full font-bold text-body-base active:scale-95 transition-all hover:bg-surface-container">
                Kembali ke Beranda
            </button>
</div>
</main>




    </div>
  );
}
