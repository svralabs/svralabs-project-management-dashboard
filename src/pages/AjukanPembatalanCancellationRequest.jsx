import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AjukanPembatalanCancellationRequest() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="w-full min-h-screen text-slate-100 font-sans">
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="max-w-md mx-auto h-full bg-surface-container-low p-margin space-y-md opacity-40">
<div className="w-full h-32 bg-surface rounded-xl border border-border"></div>
<div className="w-full h-12 bg-surface rounded-lg border border-border"></div>
<div className="grid grid-cols-2 gap-sm">
<div className="h-24 bg-surface rounded-lg border border-border"></div>
<div className="h-24 bg-surface rounded-lg border border-border"></div>
</div>
<div className="w-full h-64 bg-surface rounded-xl border border-border"></div>
</div>
</div>

<div className="fixed inset-0 z-40 bottom-sheet-overlay transition-opacity duration-300" id="overlay"></div>

<div className="fixed bottom-0 left-0 right-0 z-50 transform translate-y-0 transition-transform duration-300 ease-out max-w-2xl mx-auto" id="bottom-sheet">
<div className="bg-surface rounded-t-[20px] w-full border-t border-x border-border flex flex-col max-h-[795px]">

<header className="flex items-center px-lg py-md w-full border-b border-border bg-surface rounded-t-[20px] z-10 sticky top-0">
<div className="flex items-center justify-between w-full">
<h1 className="font-heading-md text-heading-md text-on-surface">Ajukan Pembatalan</h1>
<button aria-label="Tutup" className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors duration-200 flex items-center justify-center">
<span className="material-symbols-outlined text-md">close</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-margin space-y-lg no-scrollbar">

<div className="space-y-md">

<div className="space-y-xs">
<label className="font-label-caps text-label-caps text-on-surface-variant ml-xs" htmlFor="reason">Alasan Pembatalan</label>
<div className="relative">
<select className="w-full bg-surface border border-outline-variant rounded-xl py-md px-md text-body-base appearance-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" id="reason">
<option disabled="" selected="" value="">Pilih alasan pembatalan...</option>
<option value="address">Salah alamat</option>
<option value="change">Ingin mengubah pesanan</option>
<option value="other">Lainnya</option>
</select>
<span className="material-symbols-outlined absolute right-md top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
</div>
</div>

<div className="space-y-xs">
<label className="font-label-caps text-label-caps text-on-surface-variant ml-xs" htmlFor="description">Keterangan tambahan</label>
<textarea className="w-full bg-surface border border-outline-variant rounded-xl py-md px-md text-body-base focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" id="description" placeholder="Ceritakan detail alasan Anda..." rows="4"></textarea>
</div>
</div>

<div className="bg-error-tint rounded-lg p-md border border-error/10 flex gap-sm items-start">
<span className="material-symbols-outlined text-error text-[20px] mt-xs">info</span>
<p className="text-body-base text-error-text font-medium leading-tight">
                        Pembatalan hanya bisa disetujui jika barang belum dibeli oleh tim.
                    </p>
</div>

<div className="grid grid-cols-3 gap-sm opacity-60">
<div className="h-2 bg-surface-container rounded-full col-span-2"></div>
<div className="h-2 bg-surface-container rounded-full"></div>
</div>
</div>

<footer className="bg-surface border-t border-border px-margin py-md flex flex-col sm:flex-row gap-sm items-stretch">
<button className="flex-1 order-2 sm:order-1 border border-outline-variant text-on-surface-variant font-label-caps text-label-caps h-12 rounded-full hover:bg-surface-container-low transition-colors duration-200 flex items-center justify-center gap-xs">
<span className="material-symbols-outlined text-[18px]">cancel</span>
                    Batal
                </button>
<button className="flex-1 order-1 sm:order-2 bg-error text-on-error font-label-caps text-label-caps h-12 rounded-full hover:opacity-90 transition-all duration-150 active:scale-95 flex items-center justify-center gap-xs" id="submitBtn">
<span className="material-symbols-outlined text-[18px]">send</span>
                    Kirim Pengajuan
                </button>
</footer>
</div>
</div>


    </div>
  );
}
