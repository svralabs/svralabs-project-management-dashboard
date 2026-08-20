import React from 'react';
import Banner from '../components/Banner';
import ProductCard from '../components/ProductCard';

export default function Beranda() {
  const events = [
    {
      id: 1,
      title: 'Paris Luxury Haul',
      subtitle: 'Personal Shopper Pro',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7pfFOwMsHeVymR3qvJ52Ei_E6IqJnT619wbeVF_uKKXsgpFo93xiktlC82rzobLzvOB7D-WkJnXxCaT77NqO9EpR1J97RBVBnKkVvR6Jb5Balqe4B7RWi15MYNRHutMNKjOZTkgJE3mF0EqLcACK1CIJtIEGYkOYHF-6bVzWFb2S0GO2VGK6lW_Z0x7Accai5R2q84n9YMEZp5KuaZ7sXfVfPLU3OX73pO9IrFg_sA3uHsDovdJJ',
      daysLeft: 3
    },
    {
      id: 2,
      title: 'Ginza Tokyo Pick',
      subtitle: 'Tokyo Curator',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIHhy6ORaX0NydEs_giswAzAMEJFDm0PHLT9ipk6k-xqtsQWyRjU80M-YvsUqYSenTQBwvrD8DkJsLueQQvQyJPggasEFNKXkmVDi_rhhfTV7a_V6siUTDVLS341SD2iLU2ExZL2EHHKoWObO-V1Woezcg8dDUeAsrQ5Fbtm8lucYrws7SWLMQinGZbw8mVBt8fNGV0pGuDjYN-1gDYhw4j-Go9zxkOlhvCbTqgEB1n7dA-CEoOAud',
      daysLeft: 1
    }
  ];

  const products = [
    {
      id: 1,
      title: 'Product 1',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGVFojt6YBBRXMzDuYe4hnab4NwciHWvgkj_ortJRAuekFe0-pRK5UcZTzB0w7hrOgNa0zUgjbdwdRD1E1Mlcr8CZYmLvmZLGVqz7129VtsLbWsOlu3Odq1VyFSlHRgLq5d3wBh7eQA2hx4gY5gGqU2Ubd-8KjydSdue_6p92j85BkksdD7xrGo4en4_ymNSuw-STe3RZi6Sh7OCTQ9ql_BCfUazmQ1xlHn8lvIOjD85jI6MsWisY3',
      fee: 10
    },
    {
      id: 2,
      title: 'Product 2',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ7pfFOwMsHeVymR3qvJ52Ei_E6IqJnT619wbeVF_uKKXsgpFo93xiktlC82rzobLzvOB7D-WkJnXxCaT77NqO9EpR1J97RBVBnKkVvR6Jb5Balqe4B7RWi15MYNRHutMNKjOZTkgJE3mF0EqLcACK1CIJtIEGYkOYHF-6bVzWFb2S0GO2VGK6lW_Z0x7Accai5R2q84n9YMEZp5KuaZ7sXfVfPLU3OX73pO9IrFg_sA3uHsDovdJJ',
      fee: 15
    },
    {
      id: 3,
      title: 'Product 3',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIHhy6ORaX0NydEs_giswAzAMEJFDm0PHLT9ipk6k-xqtsQWyRjU80M-YvsUqYSenTQBwvrD8DkJsLueQQvQyJPggasEFNKXkmVDi_rhhfTV7a_V6siUTDVLS341SD2iLU2ExZL2EHHKoWObO-V1Woezcg8dDUeAsrQ5Fbtm8lucYrws7SWLMQinGZbw8mVBt8fNGV0pGuDjYN-1gDYhw4j-Go9zxkOlhvCbTqgEB1n7dA-CEoOAud',
      fee: 20
    },
    {
      id: 4,
      title: 'Product 4',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGVFojt6YBBRXMzDuYe4hnab4NwciHWvgkj_ortJRAuekFe0-pRK5UcZTzB0w7hrOgNa0zUgjbdwdRD1E1Mlcr8CZYmLvmZLGVqz7129VtsLbWsOlu3Odq1VyFSlHRgLq5d3wBh7eQA2hx4gY5gGqU2Ubd-8KjydSdue_6p92j85BkksdD7xrGo4en4_ymNSuw-STe3RZi6Sh7OCTQ9ql_BCfUazmQ1xlHn8lvIOjD85jI6MsWisY3',
      fee: 25
    }
  ];

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex justify-between items-center px-gutter py-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6UIpKBQfEF9dZKZExYwWmvQtho7OaHCybsQO8TKFG2j39X-4C5npFQg3VMi2ZRpEDztkXwReqmdDTCYbWpCz6jFptrC89H1FKFW_KSmqVinbG7-g77DCuTz9Zooc3fsjyLiAFMjA8OlL1RHONwQCfbx2YzYmBWdzlJ-wTYrYYGpeLmukycHK-M_6QdGx-5kpxZXS-LHsTONv0UQG2WbzvC17-HvTg-FAJpbIqOktjM8SSAcLUXHz" alt="User avatar" />
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
          <input className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-base" placeholder="Cari produk atau event" type="text" />
        </div>
        <section>
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-heading-md-mobile text-heading-md-mobile">Event Berlangsung</h2>
            <button className="text-primary font-label-caps text-label-caps">Lihat Semua</button>
          </div>
          <div className="flex gap-md overflow-x-auto no-scrollbar pb-2">
            {events.map(event => (
              <Banner key={event.id} title={event.title} subtitle={event.subtitle} imageUrl={event.imageUrl} daysLeft={event.daysLeft} />
            ))}
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
            {products.map(product => (
              <ProductCard key={product.id} title={product.title} imageUrl={product.imageUrl} fee={product.fee} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
