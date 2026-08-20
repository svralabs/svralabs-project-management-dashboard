import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { uploadPaymentProof } from '../api/payments';

export default function UploadBuktiPembayaran() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [note, setNote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (!['image/jpeg', 'image/png'].includes(selectedFile.type)) {
        alert('Hanya file JPEG/PNG yang diperbolehkan');
        return;
      }
      if (selectedFile.size > 2 * 1024 * 1024) {
        alert('Ukuran file tidak boleh lebih dari 2MB');
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setFile(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert('Silakan unggah bukti pembayaran');
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('payment_proof', file);
      formData.append('note', note);

      await uploadPaymentProof(id, formData);
      navigate('/pesanan_berhasil');
    } catch (error) {
      console.error('Error uploading payment proof:', error);
      alert('Gagal mengunggah bukti pembayaran. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

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
        <div
          className="custom-dashed p-xl bg-surface-container-lowest flex flex-col items-center justify-center text-center space-y-md cursor-pointer active:scale-[0.98] transition-transform"
          onClick={() => document.getElementById('file-input').click()}
        >
          <input
            accept="image/jpeg, image/png"
            className="hidden"
            id="file-input"
            type="file"
            onChange={handleFileChange}
          />
          {!preview ? (
            <div className="flex flex-col items-center">
              <div className="bg-primary-fixed p-md rounded-full mb-md">
                <span className="material-symbols-outlined text-primary text-[32px]">cloud_upload</span>
              </div>
              <p className="font-body-base font-semibold text-on-surface">Ketuk untuk unggah bukti transfer</p>
              <p className="text-xs text-on-surface-variant mt-1">JPG, PNG (Maks. 2MB)</p>
            </div>
          ) : (
            <div className="w-full space-y-md">
              <div className="relative rounded-lg overflow-hidden border border-border">
                <img
                  className="w-full h-48 object-cover"
                  src={preview}
                  alt="Preview bukti pembayaran"
                />
                <button
                  className="absolute top-2 right-2 bg-on-surface/50 text-white p-1 rounded-full backdrop-blur-sm"
                  onClick={handleRemoveFile}
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>
              <p className="text-xs text-on-surface-variant truncate font-mono">{file.name}</p>
            </div>
          )}
        </div>
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
          <button
            className="w-full bg-primary text-white font-bold py-md px-xl rounded-full shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <span className="font-body-base">{isLoading ? 'Mengirim...' : 'Kirim Bukti Pembayaran'}</span>
            <span className="material-symbols-outlined">send</span>
          </button>
        </div>
      </div>
    </>
  );
}
