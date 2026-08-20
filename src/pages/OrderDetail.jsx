import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function OrderDetail() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${id}`);
        if (!response.ok) throw new Error('Failed to fetch order');
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrder();
  }, [id]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      setFile(selectedFile);
    } else {
      alert('Please select an image file');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('proof', file);

    try {
      const response = await fetch(`/api/orders/${id}/upload-proof`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) throw new Error('Upload failed');
      alert('Payment proof uploaded successfully');
    } catch (err) {
      alert(err.message);
    }
  };

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen text-error">{error}</div>;
  if (!order) return <div className="flex justify-center items-center h-screen">Order not found</div>;

  return (
    <>
      <header className="bg-surface sticky top-0 w-full z-50 flex items-center justify-between px-margin py-sm border-b border-border">
        <div className="flex items-center gap-4">
          <Link to="/" className="active:scale-95 duration-100 p-1 rounded-full hover:bg-surface-container-high transition-colors">
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </Link>
          <div>
            <h1 className="font-heading-md text-heading-md-mobile text-on-surface">Detail Pesanan</h1>
            <p className="text-xs text-on-surface-variant">#{order.orderNumber}</p>
          </div>
        </div>
        <button className="active:scale-95 duration-100 p-1 rounded-full hover:bg-surface-container-high transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
        </button>
      </header>
      <main className="p-md space-y-md max-w-md mx-auto">
        <section className="bg-surface border border-border rounded-2xl p-md">
          <div className="relative flex justify-between items-start">
            <div className="absolute top-4 left-0 w-full h-[2px] bg-surface-container-highest -z-0"></div>
            <div className="absolute top-4 left-0 w-2/3 h-[2px] bg-primary -z-0"></div>
            {order.statusSteps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center gap-2 w-1/4">
                <div className={`w-8 h-8 rounded-full ${step.completed ? 'bg-primary' : 'bg-surface-container-highest'} flex items-center justify-center ${step.completed ? 'text-white' : 'text-on-surface-variant'}`}>
                  {step.completed ? (
                    <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  ) : (
                    <div className={`w-2 h-2 rounded-full ${step.active ? 'bg-white' : 'bg-outline-variant'}`}></div>
                  )}
                </div>
                <span className={`text-[10px] text-center ${step.active ? 'font-bold text-primary' : 'font-medium text-on-surface'}`}>{step.label}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="space-y-sm">
          <h2 className="font-label-caps text-label-caps text-on-surface-variant px-1">ITEM PESANAN</h2>
          {order.items.map((item, index) => (
            <div key={index} className="bg-surface border border-border rounded-2xl p-md flex gap-md">
              <div className="w-20 h-20 rounded-xl bg-surface-container-low flex-shrink-0 overflow-hidden border border-border">
                <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-medium text-on-surface text-body-base leading-tight">{item.name}</h3>
                  <p className="text-xs text-on-surface-variant mt-0.5">{item.quantity}x item</p>
                </div>
                <div className="flex justify-between items-end">
                  <div className="text-xs text-on-surface-variant">Fee: <span className="text-on-surface">Rp{item.fee}</span></div>
                  <div className="font-bold text-primary text-body-base">Rp{item.price}</div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="bg-surface border border-border rounded-2xl p-md space-y-md">
          <h2 className="font-label-caps text-label-caps text-on-surface-variant">RINGKASAN BIAYA</h2>
          <div className="space-y-sm">
            <div className="flex justify-between text-body-base">
              <span className="text-on-surface-variant">Subtotal</span>
              <span className="text-on-surface">Rp{order.costBreakdown.subtotal}</span>
            </div>
            <div className="flex justify-between text-body-base">
              <span className="text-on-surface-variant">Total Fee</span>
              <span className="text-on-surface">Rp{order.costBreakdown.totalFee}</span>
            </div>
            <div className="flex justify-between text-body-base">
              <span className="text-on-surface-variant">Biaya Packing</span>
              <span className="text-on-surface">Rp{order.costBreakdown.packingFee}</span>
            </div>
            <div className="flex justify-between text-body-base">
              <span className="text-on-surface-variant">Ongkir</span>
              <span className="text-on-surface">Rp{order.costBreakdown.shippingFee}</span>
            </div>
            <div className="pt-sm border-t border-dashed border-outline-variant flex justify-between items-center">
              <span className="font-semibold text-on-surface">Total Pembayaran</span>
              <span className="text-heading-md-mobile font-bold text-primary">Rp{order.costBreakdown.totalPayment}</span>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-sm pt-4">
          <Link to="/ajukan-pembatalan" className="w-full py-3 px-4 rounded-full border border-error text-error font-semibold text-body-base active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-error-tint">
            <span className="material-symbols-outlined text-[18px]">cancel</span>
            Ajukan Pembatalan
          </Link>
          <button className="w-full py-2 text-primary font-medium text-sm underline flex items-center justify-center gap-1 active:opacity-70 transition-opacity">
            <span className="material-symbols-outlined text-[16px]">download</span>
            Unduh Invoice
          </button>
        </section>
      </main>
      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-border p-md z-50 flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <input type="file" id="proof-upload" className="hidden" onChange={handleFileChange} accept="image/*" />
          <label htmlFor="proof-upload" className="w-full py-4 rounded-full bg-[#8F85E0] text-white font-bold text-body-base shadow-lg shadow-[#8F85E0]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cloud_upload</span>
            Upload Bukti Bayar
          </label>
        </form>
      </div>
    </>
  );
}
