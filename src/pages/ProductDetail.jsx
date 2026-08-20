import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/masuk');
      return;
    }

    fetch(`/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id, navigate]);

  const increment = () => {
    if (product && quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (!product) return <div>Loading...</div>;

  const totalPrice = (product.price + product.fee) * quantity;

  return (
    <main className="w-full max-w-md bg-surface min-h-screen flex flex-col relative overflow-x-hidden">
      <section className="relative h-[420px] w-full shrink-0 overflow-hidden">
        <div className="absolute top-md left-md z-20">
          <button
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-tx-primary active:scale-95 transition-transform"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
        <div className="flex h-full w-full">
          <img
            alt="Product Image Carousel"
            className="w-full h-full object-cover"
            src={product.image}
          />
        </div>
        <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          <div className="w-6 h-1 rounded-full bg-brand-primary"></div>
          <div className="w-1.5 h-1 rounded-full bg-white/60"></div>
          <div className="w-1.5 h-1 rounded-full bg-white/60"></div>
        </div>
      </section>

      <section className="flex-1 px-margin py-xl bg-surface rounded-t-[24px] -mt-6 relative z-10">
        <div className="mb-lg">
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-tx-primary mb-xs">
            {product.name}
          </h1>
          <div className="flex items-baseline gap-sm">
            <span className="text-heading-md font-heading-md text-brand-primary">
              Rp{product.price.toLocaleString('id-ID')}
            </span>
          </div>
          <div className="mt-sm px-md py-sm bg-surface-container rounded-xl flex items-center justify-between">
            <span className="text-label-caps font-label-caps text-tx-secondary">
              Harga Rp{product.price.toLocaleString('id-ID')} + Fee Rp{product.fee.toLocaleString('id-ID')}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-sm mb-xl py-sm">
          <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[20px]">event_available</span>
          </div>
          <div className="flex flex-col">
            <span className="text-label-caps font-label-caps text-on-surface-variant">
              Event: {product.event}
            </span>
            <span className="text-label-caps font-label-caps text-error-text">
              Berakhir {product.eventEndsIn} hari lagi
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-xl border-y border-border py-md">
          <span className="text-body-base font-medium text-tx-primary">Jumlah</span>
          <div className="flex items-center gap-md bg-surface-container rounded-full p-1 border border-border">
            <button
              className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-brand-primary hover:bg-primary-fixed transition-colors active:scale-90"
              onClick={decrement}
            >
              <span className="material-symbols-outlined text-[18px]">remove</span>
            </button>
            <span className="font-bold text-tx-primary w-6 text-center">
              {quantity}
            </span>
            <button
              className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-brand-primary hover:bg-primary-fixed transition-colors active:scale-90"
              onClick={increment}
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
            </button>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="font-heading-md text-heading-md text-tx-primary mb-sm">
            Deskripsi Produk
          </h2>
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
          <span className="text-label-caps font-label-caps text-tx-secondary">
            Total Tagihan
          </span>
          <span className="text-heading-md font-bold text-brand-primary">
            Rp{totalPrice.toLocaleString('id-ID')}
          </span>
        </div>
        <button
          className="flex-1 bg-brand-primary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-sm active:scale-[0.98] transition-transform shadow-lg shadow-primary/20"
          onClick={() => {
            fetch('/api/cart', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              },
              body: JSON.stringify({
                productId: product.id,
                quantity: quantity
              })
            })
              .then(response => response.json())
              .then(data => console.log('Added to cart:', data))
              .catch(error => console.error('Error adding to cart:', error));
          }}
        >
          <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            shopping_cart
          </span>
          Tambah ke Pesanan
        </button>
      </div>
    </main>
  );
}
