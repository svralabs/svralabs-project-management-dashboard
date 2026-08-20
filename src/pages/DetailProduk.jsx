import { useState, useEffect } from 'react';
import ImageGallery from '../components/ImageGallery';

export default function DetailProduk() {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Mock API call
    const mockProduct = {
      id: 1,
      name: 'Stroller Bayi Premium',
      price: 150000,
      fee: 15000,
      description: 'Stroller bayi premium ini dirancang untuk memberikan kenyamanan maksimal bagi sang buah hati sekaligus kemudahan bagi orang tua. Menggunakan material berkualitas tinggi dengan rangka aluminium yang ringan namun sangat kokoh.',
      features: [
        'Sistem lipat satu tangan yang sangat praktis.',
        'Sandaran kursi yang dapat diatur hingga posisi tidur.',
        'Kanopi lebar dengan perlindungan UV 50+.',
        'Roda dengan suspensi ganda untuk jalanan tidak rata.'
      ],
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDnXOsKeD0T55WTpgBOfcBZzP59Oa_QCP1sHcw3bfKuS-p1CtRAUtMgAhVXOuY35ZZ-iWp09L7bzI4A98w_HwJ7rQSPLHi7cm-R1lKCH4iPPDZB3y9skdfDUkOim0yExjO_CdIJzhOZ17PoZ4MW1l00YUuWt_qSTZtGko_8mFHiFDH3KO-1ZKuPbYsxQEh2x2-NbS8FbO32BTQESSLvI6eW-ZQcwNeklrN4hQxQQcQN4zaew_RYg4jA',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
      ]
    };
    setProduct(mockProduct);
  }, []);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  if (!product) return <div>Loading...</div>;

  const totalPrice = (product.price + product.fee) * quantity;

  return (
    <main className="w-full max-w-md bg-surface min-h-screen flex flex-col relative overflow-x-hidden">
      <ImageGallery images={product.images} />

      <section className="flex-1 px-margin py-xl bg-surface rounded-t-[24px] -mt-6 relative z-10">
        <div className="mb-lg">
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-tx-primary mb-xs">{product.name}</h1>
          <div className="flex items-baseline gap-sm">
            <span className="text-heading-md font-heading-md text-brand-primary">Rp{product.price.toLocaleString('id-ID')}</span>
          </div>
          <div className="mt-sm px-md py-sm bg-surface-container rounded-xl flex items-center justify-between">
            <span className="text-label-caps font-label-caps text-tx-secondary">Harga Rp{product.price.toLocaleString('id-ID')} + Fee Rp{product.fee.toLocaleString('id-ID')}</span>
          </div>
        </div>

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
            <p>{product.description}</p>
            <ul className="list-disc pl-5 space-y-xs">
              {product.features.map((feature, index) => (
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
