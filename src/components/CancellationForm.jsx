import { useState } from 'react';

export default function CancellationForm({ onSubmit }) {
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ reason, description });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-md">
      <div className="space-y-xs">
        <label htmlFor="reason" className="font-body-base text-body-base text-on-surface-variant">Alasan Pembatalan</label>
        <select
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full px-md py-2 bg-surface-container rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          required
        >
          <option value="">Pilih alasan</option>
          <option value="Tidak sesuai">Tidak sesuai</option>
          <option value="Kualitas buruk">Kualitas buruk</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>
      <div className="space-y-xs">
        <label htmlFor="description" className="font-body-base text-body-base text-on-surface-variant">Deskripsi</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-md py-2 bg-surface-container rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          rows="4"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-primary text-on-primary rounded-full font-label-caps text-label-caps active:scale-95 transition-transform"
      >
        Ajukan Pembatalan
      </button>
    </form>
  );
}
