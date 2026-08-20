import { useState } from 'react';
import FileUpload from '../components/FileUpload';

export default function UploadBuktiPembayaran() {
  const [note, setNote] = useState('');

  return (
    <>
      <header className="w-full sticky top-0 z-40 bg-surface border-b border-border flex justify-between items-center px-margin py-md">
        <div className="flex items-center gap-4">
          <button className="active:scale-95 transition-transform p-1 -ml-1 text-on-surface-variant">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="font-heading-md text-heading-md text-on-surface">Upload Bukti Pembayaran</h1>
        </div>
        <div className="w-6"></div>
      </header>
      <main className="px-margin pt-md pb-32 max-w-md mx-auto space-y-md">
        <div className="bg-surface border border-border rounded-lg p-lg space-y-md">
          <div className="flex flex-col gap-1">
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">Total Tagihan</span>
            <span className="font-display-lg-mobile text-display-lg-mobile text-primary">Rp345.000</span>
          </div>
          <div className="h-px bg-border w-full"></div>
          <div className="flex items-start gap-md">
            <div className="bg-secondary-container p-2 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-on-secondary-container">account_balance_wallet</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-caps text-label-caps text-on-surface-variant">Transfer ke:</span>
              <span className="font-body-base font-bold text-on-surface">BCA 1234567890</span>
              <span className="font-body-base text-on-surface-variant">a.n. HI SHOPPER!</span>
            </div>
          </div>
        </div>
        <FileUpload />
        <div className="space-y-xs">
          <label className="font-label-caps text-label-caps text-on-surface-variant ml-1" htmlFor="catatan">Catatan (opsional)</label>
          <textarea
            className="w-full rounded-lg border border-border bg-surface px-md py-md text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-outline-variant"
            id="catatan"
            placeholder="Contoh: Pembayaran pesanan #INV001"
            rows="3"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center gap-2 pt-md">
          <span className="material-symbols-outlined text-on-surface-variant text-[18px]">verified_user</span>
          <p className="text-xs text-on-surface-variant italic">Admin akan memvalidasi pembayaran Anda.</p>
        </div>
      </main>
      <div className="fixed bottom-0 left-0 right-0 p-margin bg-gradient-to-t from-background via-background to-transparent z-40">
        <div className="max-w-md mx-auto">
          <button className="w-full bg-primary text-white font-bold py-md px-xl rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
            <span className="font-body-base">Kirim Bukti Pembayaran</span>
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </>
  );
}
