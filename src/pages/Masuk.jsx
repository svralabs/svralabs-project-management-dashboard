import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Masuk() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Format email tidak valid';
    if (!password) newErrors.password = 'Kata sandi wajib diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
        if (!response.ok) throw new Error('Login gagal');
        navigate('/beranda');
      } catch (error) {
        setErrors({ form: error.message || 'Login gagal' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full top-0 bg-background flex items-center px-gutter h-16 sticky z-50">
        <button aria-label="Kembali" className="material-symbols-outlined text-primary p-2 -ml-2 rounded-full hover:bg-surface-variant transition-colors active:scale-95 transition-transform">
          arrow_back
        </button>
        <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary ml-2">Masuk</h1>
      </header>
      <main className="w-full max-w-md px-gutter flex-1 flex flex-col py-xl">
        <div className="mb-xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-primary mb-md">
            <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>volume_mute</span>
          </div>
          <h2 className="font-heading-md text-heading-md text-on-background mb-xs">Selamat Datang Kembali</h2>
          <p className="text-tx-secondary">Kelola tugas harian Anda dengan mudah.</p>
        </div>
        <section className="space-y-lg bento-card p-lg rounded-lg">
          <div className="space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="email">Email</label>
            <input
              className="w-full px-md py-3 bg-surface rounded-lg border border-border text-body-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="contoh@email.com"
            />
            {errors.email && <p className="text-error text-xs mt-1">{errors.email}</p>}
          </div>
          <div className="space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="password">Kata Sandi</label>
            <div className="relative">
              <input
                className="w-full px-md py-3 bg-surface rounded-lg border border-border text-body-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-on-surface-variant"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "visibility_off" : "visibility"}
              </button>
            </div>
            {errors.password && <p className="text-error text-xs mt-1">{errors.password}</p>}
          </div>
          {errors.form && <p className="text-error text-xs mt-1">{errors.form}</p>}
          <button
            className="w-full bg-primary text-on-primary py-3 rounded-lg font-label-lg hover:bg-primary/90 transition-colors active:scale-95 transition-transform"
            onClick={handleSubmit}
          >
            Masuk
          </button>
        </section>
      </main>
    </div>
  );
}
