import React from 'react'

const IMG = {
  avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCl6UIpKBQfEF9dZKZExYwWmvQtho7OaHCybsQO8TKFG2j39X-4C5npFQg3VMi2ZRpEDztkXwReqmdDTCYbWpCz6jFptrC89H1FKFW_KSmqVinbG7-g77DCuTz9Zooc3fsjyLiAFMjA8OlL1RHONwQCfbx2YzYmBWdzlJ-wTYrYYGpeLmukycHK-M_6QdGx-5kpxZXS-LHsTONv0UQG2WbzvC17-HvTg-FAJpbIqOktjM8SSAcLUXHz',
  paris: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7pfFOwMsHeVymR3qvJ52Ei_E6IqJnT619wbeVF_uKKXsgpFo93xiktlC82rzobLzvOB7D-WkJnXxCaT77NqO9EpR1J97RBVBnKkVvR6Jb5Balqe4B7RWi15MYNRHutMNKjOZTkgJE3mF0EqLcACK1CIJtIEGYkOYHF-6bVzWFb2S0GO2VGK6lW_Z0x7Accai5R2q84n9YMEZp5KuaZ7sXfVfPLU3OX73pO9IrFg_sA3uHsDovdJJ',
  ginza: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIHhy6ORaX0NydEs_giswAzAMEJFDm0PHLT9ipk6k-xqtsQWyRjU80M-YvsUqYSenTQBwvrD8DkJsLueQQvQyJPggasEFNKXkmVDi_rhhfTV7a_V6siUTDVLS341SD2iLU2ExZL2EHHKoWObO-V1Woezcg8dDUeAsrQ5Fbtm8lucYrws7SWLMQinGZbw8mVBt8fNGV0pGuDjYN-1gDYhw4j-Go9zxkOlhvCbTqgEB1n7dA-CEoOAud',
  skincare: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGVFojt6YBBRXMzDuYe4hnab4NwciHWvgkj_ortJRAuekFe0-pRK5UcZTzB0w7hrOgNa0zUgjbdwdRD1E1Mlcr8CZYmLvmZLGVqz7129VtsLbWsOlu3Odq1VyFSlHRgLq5d3wBh7eQA2hx4gY5gGqU2Ubd-8KjydSdue_6p92j85BkksdD7xrGo4en4_ymNSuw-STe3RZi6Sh7OCTQ9ql_BCfUazmQ1xlHn8lvIOjD85jI6MsWisY3',
  handbag: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAQAbGYryrAak_YB1Xb4XSwIXziYhKEKU7X-Vxzebc5fSZfAbyOgkzjntWPQZCjYb-z08h7djksLMSbAF7quph1XfFlRerzk38P-wbu7XOk7STnigvaCb_Brkfgn8EfBricqE6ib2egezPM2LMmGfbuGa2LaGZ1VBVUSbQKzLkJ0JwYmzclpHDXLnLItXH2M0HX9n7du4CTSROn2q9bZssTbRW3hNHH2ngKk9kObAz2AypqpzQTfAI',
  sneaker: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDf5lNCnFL4xQj0fGoDMDM9dw60D8xv0HJIIFnKYhe9CEtOm4VijUKf-58Qhi7Sxw_6UqjEKZ2ROUvxeN2zLQ6ez5CjO2Ev9A90ZX8jguW_CRHgx3dSh7NmYdsONtmXb8qvwK_1R4582b8ranA4vxbbMRRLwqOBTDGyhEhVGtCv8LxRdMaJe-Wp5cqPHRoSkACajDnfm-bH4Hs2fmiLUy9T5Bzb0DOt6yGTO1V7Fmi0uQJV1UxgAgZ',
  choco: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz-5NIR6g3RohT3PfWJkS2MCOg-MNKrRUmJ7xTkejNdgUBCJrwo9Cbuf1iH0FMPWzwxWylkYVkQ9IImZweyCqzKttKyD2QZvnVMTt_xobSUAUj-H6HlX3SywhQYEMuBWdgO5pkW0A8XpFhU8w4CtWD8GAIAU7ZHY2P8vrMq72-YhOAyOq7H_fwjpRd0AFvf_40Uj9bcSkQXy9bLeffWJNJWruiCL8dyye3Q8Lh17gfiswUBef1Pe0M',
}

const EVENTS = [
  { img: IMG.paris, asBg: false, badge: 'Berakhir 3 hari lagi', title: 'Paris Luxury Haul', by: 'Oleh: Personal Shopper Pro' },
  { img: IMG.ginza, asBg: true, badge: 'Berakhir 1 hari lagi', title: 'Ginza Tokyo Pick', by: 'Oleh: Tokyo Curator' },
]
const CHIPS = ['Semua', 'Bayi', 'Skincare', 'Fashion', 'Elektronik', 'Makanan']
const PRODUCTS = [
  { img: IMG.skincare, asBg: false, name: 'Premium Skincare Set', price: 'Rp 1.200.000', fee: '+Fee 10%' },
  { img: IMG.handbag, asBg: false, name: 'Designer Handbag', price: 'Rp 3.500.000', fee: '+Fee 10%' },
  { img: IMG.sneaker, asBg: true, name: 'Limited Edition Sneaker', price: 'Rp 2.850.000', fee: '+Fee 12%' },
  { img: IMG.choco, asBg: true, name: 'Gourmet Chocolate Box', price: 'Rp 450.000', fee: '+Fee 8%' },
]

export default function App() {
  return (
    <div className="bg-background text-on-surface pb-24">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex justify-between items-center px-gutter py-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
            <img className="w-full h-full object-cover" src={IMG.avatar} alt="avatar" />
          </div>
          <span className="font-heading-md-mobile text-heading-md-mobile text-on-surface">Halo, Rio</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95 duration-150">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>

      <main className="mt-20 px-gutter space-y-lg">
        {/* Search */}
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-base" placeholder="Cari produk atau event" type="text" />
        </div>

        {/* Event Berlangsung */}
        <section>
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-heading-md-mobile text-heading-md-mobile">Event Berlangsung</h2>
            <button className="text-primary font-label-caps text-label-caps">Lihat Semua</button>
          </div>
          <div className="flex gap-md overflow-x-auto no-scrollbar pb-2">
            {EVENTS.map((e) => (
              <div key={e.title} className="min-w-[280px] bg-surface rounded-xl border border-border overflow-hidden flex-shrink-0 transition-transform active:scale-[0.98]">
                <div className="relative h-40">
                  {e.asBg ? (
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${e.img}')` }} />
                  ) : (
                    <img className="w-full h-full object-cover" src={e.img} alt={e.title} />
                  )}
                  <div className="absolute top-3 left-3 bg-error-tint px-3 py-1 rounded-sm border border-error-container">
                    <span className="text-error-text font-label-caps text-[10px] uppercase tracking-wider">{e.badge}</span>
                  </div>
                </div>
                <div className="p-md flex justify-between items-center">
                  <div>
                    <h3 className="font-heading-md-mobile text-sm mb-1">{e.title}</h3>
                    <p className="text-tx-secondary text-xs">{e.by}</p>
                  </div>
                  <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-label-caps active:scale-90 transition-all">Lihat</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Chips */}
        <section>
          <div className="flex gap-sm overflow-x-auto no-scrollbar">
            {CHIPS.map((c, i) => (
              <button
                key={c}
                className={
                  i === 0
                    ? 'px-5 py-2 rounded-full bg-secondary-container text-primary font-label-caps text-label-caps border border-primary-container whitespace-nowrap active:scale-95 transition-all'
                    : 'px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all'
                }
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Katalog Populer */}
        <section>
          <h2 className="font-heading-md-mobile text-heading-md-mobile mb-md">Katalog Populer</h2>
          <div className="grid grid-cols-2 gap-md">
            {PRODUCTS.map((p) => (
              <div key={p.name} className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col active:scale-[0.97] transition-all">
                <div className="relative aspect-square">
                  {p.asBg ? (
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${p.img}')` }} />
                  ) : (
                    <img className="w-full h-full object-cover" src={p.img} alt={p.name} />
                  )}
                  <div className="absolute bottom-2 left-2 bg-success-tint px-2 py-0.5 rounded-sm border border-success-text/20">
                    <span className="text-success-text font-label-caps text-[10px]">{p.fee}</span>
                  </div>
                </div>
                <div className="p-sm flex flex-col flex-grow">
                  <h4 className="font-body-base font-semibold text-on-surface line-clamp-1 mb-1">{p.name}</h4>
                  <p className="text-primary font-heading-md-mobile text-sm">{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ad Banner */}
        <section className="relative rounded-xl overflow-hidden h-32 border border-border">
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white bg-black/10 backdrop-blur-[2px]">
            <h3 className="font-display text-lg">Promo Akhir Pekan</h3>
            <p className="font-label-caps text-[10px] opacity-90 uppercase">Diskon Fee Titip Hingga 50%</p>
            <button className="mt-2 bg-white text-primary px-4 py-1.5 rounded-full font-label-caps text-[10px] font-bold">Klaim Voucher</button>
          </div>
        </section>
      </main>

      {/* BottomNav */}
      <nav className="fixed bottom-0 w-full z-50 bg-surface border-t border-border flex justify-around items-center px-4 py-2 h-16 shadow-[0_-4px_12px_rgba(0,0,0,0.03)]">
        <a className="flex flex-col items-center justify-center bg-secondary-container text-primary rounded-xl px-4 py-1.5 transition-all" href="#">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
          <span className="font-label-caps text-[10px] mt-0.5">Beranda</span>
        </a>
        {[
          { icon: 'receipt_long', label: 'Pesanan' },
          { icon: 'calendar_month', label: 'Kalender' },
          { icon: 'person', label: 'Akun' },
        ].map((n) => (
          <a key={n.label} className="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1 hover:bg-surface-container-low transition-all active:scale-90 duration-200" href="#">
            <span className="material-symbols-outlined">{n.icon}</span>
            <span className="font-label-caps text-[10px] mt-0.5">{n.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
