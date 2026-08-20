import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {ArrowLeft, Globe as MoreVertical, Check, X, Download, Globe as CloudUpload} from 'lucide-react';

export default function OrderDetail() {
  const [order, setOrder] = useState(null);
  const [paymentProof, setPaymentProof] = useState(null);
  const [preview, setPreview] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/masuk');
      return;
    }

    fetch(`/api/orders/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setOrder(data))
      .catch(error => console.error('Error fetching order:', error));
  }, [id, navigate]);

  const handlePaymentProofChange = (e) => {
    const file = e.target.files[0];
    setPaymentProof(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmitPaymentProof = () => {
    if (!paymentProof) return;

    const formData = new FormData();
    formData.append('paymentProof', paymentProof);

    const token = localStorage.getItem('token');
    fetch(`/api/orders/${id}/payment-proof`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log('Payment proof uploaded:', data);
        setPaymentProof(null);
        setPreview(null);
      })
      .catch(error => console.error('Error uploading payment proof:', error));
  };

  if (!order) return <div>Loading...</div>;

  return (
    <>
      <header className="bg-surface sticky top-0 w-full z-50 flex items-center justify-between px-margin py-sm border-b border-border">
        <div className="flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="active:scale-95 duration-100 p-1 rounded-full hover:bg-surface-container-high transition-colors">
            <ArrowLeft className="text-primary" />
          </button>
          <div>
            <h1 className="font-heading-md text-heading-md-mobile text-on-surface">Detail Pesanan</h1>
            <p className="text-xs text-on-surface-variant">#{order.orderNumber}</p>
          </div>
        </div>
        <button className="active:scale-95 duration-100 p-1 rounded-full hover:bg-surface-container-high transition-colors">
          <MoreVertical className="text-on-surface-variant" />
        </button>
      </header>
      <main className="p-md space-y-md max-w-md mx-auto">
        <section className="bg-surface border border-border rounded-2xl p-md">
          <div className="relative flex justify-between items-start">
            <div className="absolute top-4 left-0 w-full h-[2px] bg-surface-container-highest -z-0"></div>
            <div className="absolute top-4 left-0 w-2/3 h-[2px] bg-primary -z-0"></div>

            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <Check className="text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }} />
              </div>
              <span className="text-[10px] text-center font-medium leading-tight text-on-surface">Order Masuk</span>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <Check className="text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }} />
              </div>
              <span className="text-[10px] text-center font-medium leading-tight text-on-surface">Barang Terbeli</span>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
              <div className="w-8 h-8 rounded-full bg-primary border-4 border-primary-fixed flex items-center justify-center text-white">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>
              <span className="text-[10px] text-center font-bold leading-tight text-primary">Menunggu Pembayaran</span>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-2 w-1/4">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                <div className="w-2 h-2 rounded-full bg-outline-variant"></div>
              </div>
              <span className="text-[10px] text-center font-medium leading-tight text-on-surface-variant">Lunas/ Selesai</span>
            </div>
          </div>
        </section>

        <section className="space-y-sm">
          <h2 className="font-label-caps text-label-caps text-on-surface-variant px-1">ITEM PESANAN</h2>
          {order.items.map((item, index) => (
            <div key={index} className="bg-surface border border-border rounded-2xl p-md flex gap-md">
              <div className="w-20 h-20 rounded-xl bg-surface-container-low flex-shrink-0 overflow-hidden border border-border">
                <img alt={item.name} className="w-full h-full object-cover" src={item.imageUrl} />
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
              <span className="text-on-surface">Rp{order.subtotal}</span>
            </div>
            <div className="flex justify-between text-body-base">
              <span className="text-on-surface-variant">Total Fee</span>
              <span className="text-on-surface">Rp{order.totalFee}</span>
            </div>
            <div className="flex justify-between text-body-base">
              <span className="text-on-surface-variant">Biaya Packing</span>
              <span className="text-on-surface">Rp{order.packingFee}</span>
            </div>
            <div className="flex justify-between text-body-base">
              <span className="text-on-surface-variant">Ongkir</span>
              <span className="text-on-surface">Rp{order.shippingFee}</span>
            </div>
            <div className="pt-sm border-t border-dashed border-outline-variant flex justify-between items-center">
              <span className="font-semibold text-on-surface">Total Pembayaran</span>
              <span className="text-heading-md-mobile font-bold text-primary">Rp{order.totalPayment}</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-sm pt-4">
          <Link to={`/ajukan-pembatalan/${id}`} className="w-full py-3 px-4 rounded-full border border-error text-error font-semibold text-body-base active:scale-95 transition-all flex items-center justify-center gap-2 hover:bg-error-tint">
            <X className="text-[18px]" />
            Ajukan Pembatalan
          </Link>
          <button className="w-full py-2 text-primary font-medium text-sm underline flex items-center justify-center gap-1 active:opacity-70 transition-opacity">
            <Download className="text-[16px]" />
            Unduh Invoice
          </button>
        </section>
      </main>

      <div className="fixed bottom-0 left-0 w-full bg-surface border-t border-border p-md z-50 flex justify-center">
        <button onClick={handleSubmitPaymentProof} className="w-full max-w-md py-4 rounded-full bg-[#8F85E0] text-white font-bold text-body-base shadow-lg shadow-[#8F85E0]/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
          <CloudUpload />
          Upload Bukti Bayar
        </button>
      </div>

      {preview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-md">
            <img src={preview} alt="Payment proof preview" className="max-h-96" />
            <div className="mt-4 flex justify-end gap-2">
              <button onClick={() => setPreview(null)} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>
              <button onClick={handleSubmitPaymentProof} className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
