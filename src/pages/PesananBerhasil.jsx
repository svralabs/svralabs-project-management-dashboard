import { useNavigate } from 'react-router-dom';

export default function PesananBerhasil() {
  const navigate = useNavigate();

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-surface border-b border-border flex justify-between items-center px-margin py-md">
        <div className="flex items-center gap-4">
          <button
            className="active:scale-95 transition-transform p-1 -ml-1 text-on-surface-variant"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-heading-md text-heading-md text-on-surface">Pesanan Berhasil</h1>
        </div>
        <div className="w-6"></div>
      </header>
      <main className="px-margin pt-md pb-32 max-w-md mx-auto space-y-md">
        <div className="bg-surface border border-border rounded-lg p-lg space-y-md">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-primary-container p-4 rounded-full">
              <span className="material-symbols-outlined text-primary text-[48px]">check_circle</span>
            </div>
            <div className="text-center">
              <h2 className="font-heading-lg text-heading-lg text-on-surface">Pembayaran Berhasil</h2>
              <p className="text-body-base text-on-surface-variant mt-2">Terima kasih telah melakukan pembayaran. Pesanan Anda sedang diproses.</p>
            </div>
          </div>
          <div className="h-px bg-border w-full"></div>
          <div className="space-y-md">
            <div className="flex justify-between">
              <span className="text-body-base text-on-surface-variant">Nomor Pesanan</span>
              <span className="text-body-base font-bold text-on-surface">#INV001</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body-base text-on-surface-variant">Total Pembayaran</span>
              <span className="text-body-base font-bold text-on-surface">Rp345.000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-body-base text-on-surface-variant">Metode Pembayaran</span>
              <span className="text-body-base font-bold text-on-surface">Transfer Bank</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <button
            className="w-full bg-primary text-white font-bold py-md px-xl rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
            onClick={() => navigate('/')}
          >
            <span className="font-body-base">Kembali ke Beranda</span>
            <span className="material-symbols-outlined">home</span>
          </button>
          <button
            className="w-full bg-surface text-primary font-bold py-md px-xl rounded-full border border-primary active:scale-95 transition-transform flex items-center justify-center gap-2"
            onClick={() => navigate('/riwayat_pesanan')}
          >
            <span className="font-body-base">Lihat Riwayat Pesanan</span>
            <span className="material-symbols-outlined">history</span>
          </button>
        </div>
      </main>
    </>
  );
}
