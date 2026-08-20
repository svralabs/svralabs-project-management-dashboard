import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      navigate('/masuk');
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="w-full top-0 sticky z-50 bg-background border-b border-border flex justify-between items-center px-margin py-sm">
        <button
          aria-label="Kembali"
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 transition-transform"
          onClick={() => window.history.back()}
        >
          <span className="material-symbols-outlined text-primary">arrow_back</span>
        </button>
        <h1 className="font-heading-md text-heading-md text-primary">Daftar Akun</h1>
        <div className="w-10"></div>
      </header>
      <main className="flex-1 overflow-y-auto px-margin py-lg flex flex-col">
        <div className="mb-xl text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-container rounded-custom mb-md">
            <span className="material-symbols-outlined text-primary text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>app_registration</span>
          </div>
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-on-background mb-sm">Mulai Perjalanan Anda</h2>
          <p className="text-on-surface-variant max-w-[280px] mx-auto">Kelola tugas Anda dengan efisiensi tinggi dan gaya modern bersama TaskFlow.</p>
        </div>
        <form className="space-y-gutter flex-1" onSubmit={handleSubmit(onSubmit)}>
          {error && <div className="text-error mb-md">{error}</div>}
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="nama_lengkap">Nama Lengkap</label>
            <input
              className="form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all"
              id="nama_lengkap"
              placeholder="Masukkan nama lengkap Anda"
              {...register('nama_lengkap', { required: true })}
            />
            {errors.nama_lengkap && <span className="text-error">Nama lengkap wajib diisi</span>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="email">Email</label>
            <input
              className="form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all"
              id="email"
              placeholder="contoh@email.com"
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.email && <span className="text-error">Email tidak valid</span>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="no_telepon">No. Telepon</label>
            <input
              className="form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all"
              id="no_telepon"
              placeholder="0812xxxx"
              type="tel"
              {...register('no_telepon', { required: true, pattern: /^08\d{8,11}$/ })}
            />
            {errors.no_telepon && <span className="text-error">Nomor telepon tidak valid</span>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="alamat">Alamat</label>
            <textarea
              className="form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all resize-none"
              id="alamat"
              placeholder="Masukkan alamat lengkap Anda"
              rows="2"
              {...register('alamat', { required: true })}
            />
            {errors.alamat && <span className="text-error">Alamat wajib diisi</span>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="kata_sandi">Kata Sandi</label>
            <div className="relative">
              <input
                className="form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all pr-12"
                id="kata_sandi"
                placeholder="Min. 8 karakter"
                type={showPassword ? 'text' : 'password'}
                {...register('kata_sandi', { required: true, minLength: 8 })}
              />
              <button
                className="absolute right-md top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
            {errors.kata_sandi && <span className="text-error">Kata sandi minimal 8 karakter</span>}
          </div>
          <div className="flex items-start space-x-sm py-sm">
            <div className="flex items-center h-5">
              <input
                className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                id="terms"
                type="checkbox"
                {...register('terms', { required: true })}
              />
            </div>
            <label className="text-on-surface-variant leading-tight" htmlFor="terms">
              Saya setuju dengan <a className="text-primary font-medium hover:underline" href="#">syarat &amp; ketentuan</a> yang berlaku.
            </label>
            {errors.terms && <span className="text-error">Anda harus menyetujui syarat dan ketentuan</span>}
          </div>
          <div className="pt-md pb-lg">
            <button
              className="w-full bg-primary text-surface py-md rounded-custom font-heading-md text-heading-md active:scale-[0.98] transition-transform hover:opacity-90 shadow-none"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin material-symbols-outlined">sync</span> Memproses...
                </span>
              ) : 'Daftar'}
            </button>
            <p className="mt-lg text-center text-on-surface-variant">
              Sudah punya akun? <a className="text-primary font-bold hover:underline" href="#">Masuk</a>
            </p>
          </div>
        </form>
      </main>
      <div className="relative h-24 w-full overflow-hidden opacity-40 pointer-events-none mt-auto"></div>
    </>
  );
}
