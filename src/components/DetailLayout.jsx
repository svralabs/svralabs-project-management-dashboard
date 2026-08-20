import { useState, useEffect } from 'react';

export default function DetailLayout({ children, product, onQuantityChange }) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (product) {
      const total = (product.price + product.fee) * quantity;
      setTotalPrice(total);
    }
  }, [quantity, product]);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
    onQuantityChange(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <main className="w-full max-w-md bg-surface min-h-screen flex flex-col relative overflow-x-hidden">
      {children}
      <section className="flex-1 px-margin py-xl bg-surface rounded-t-[24px] -mt-6 relative z-10">
        <div className="mb-lg">
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-tx-primary mb-xs">{product?.name}</h1>
          <div className="flex items-baseline gap-sm">
            <span className="text-heading-md font-heading-md text-brand-primary">Rp{product?.price.toLocaleString('id-ID')}</span>
          </div>
          <div className="mt-sm px-md py-sm bg-surface-container rounded-xl flex items-center justify-between">
            <span className="text-label-caps font-label-caps text-tx-secondary">Harga Rp{product?.price.toLocaleString('id-ID')} + Fee Rp{product?.fee.toLocaleString('id-ID')}</span>
          </div>
        </div>
        {product?.event && (
          <div className="flex items-center gap-sm mb-xl py-sm">
            <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">event_available</span>
            </div>
            <div className="flex flex-col">
              <span className="text-label-caps font-label-caps text-on-surface-variant">Event: {product.event.name}</span>
              <span className="text-label-caps font-label-caps text-error-text">{product.event.status}</span>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mb-xl border-y border-border py-md">
          <span className="text-body-base font-medium text-tx-primary">Jumlah</span>
          <div className="flex items-center gap-md bg-surface-container rounded-full p-1 border border-border">
            <button
              className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-brand-primary hover:bg-primary-fixed transition-colors active:scale-90"
              onClick={decrementQuantity}
            >
              <span className="material-symbols-outlined text-[18px]">remove</span>
            </button>
            <span className="font-bold text-tx-primary w-6 text-center">{quantity}</span>
            <button
              className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-brand-primary hover:bg-primary-fixed transition-colors active:scale-90"
              onClick={incrementQuantity}
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>
        </div>
        <div className="mb-32">
          <h2 className="font-heading-md text-heading-md text-tx-primary mb-sm">Deskripsi Produk</h2>
          <div className="space-y-md text-body-base font-body-base text-on-surface-variant leading-relaxed">
            <p>{product?.description}</p>
            <ul className="list-disc pl-5 space-y-xs">
              {product?.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white p-md border-t border-border flex items-center gap-lg z-50">
        <div className="flex flex-col shrink-0">
          <span className="text-label-caps font-label-caps text-tx-secondary">Total Tagihan</span>
          <span className="text-heading-md font-bold text-brand-primary">Rp{totalPrice.toLocaleString('id-ID')}</span>
        </div>
        <button className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-sm active:scale-[0.98] transition-transform shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
          Tambah ke Pesanan
        </button>
      </div>
    </main>
  );
}
