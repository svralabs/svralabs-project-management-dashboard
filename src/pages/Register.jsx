import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    email: '',
    no_telepon: '',
    alamat: '',
    kata_sandi: '',
    confirm_kata_sandi: '',
    terms: false
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.nama_lengkap) newErrors.nama_lengkap = 'Nama lengkap wajib diisi';
    if (!formData.email) {
      newErrors.email = 'Email wajib diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }
    if (!formData.no_telepon) newErrors.no_telepon = 'No. telepon wajib diisi';
    if (!formData.alamat) newErrors.alamat = 'Alamat wajib diisi';
    if (!formData.kata_sandi) {
      newErrors.kata_sandi = 'Kata sandi wajib diisi';
    } else if (formData.kata_sandi.length < 8) {
      newErrors.kata_sandi = 'Kata sandi minimal 8 karakter';
    }
    if (formData.kata_sandi !== formData.confirm_kata_sandi) {
      newErrors.confirm_kata_sandi = 'Kata sandi tidak cocok';
    }
    if (!formData.terms) newErrors.terms = 'Anda harus menyetujui syarat & ketentuan';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nama_lengkap: formData.nama_lengkap,
            email: formData.email,
            no_telepon: formData.no_telepon,
            alamat: formData.alamat,
            kata_sandi: formData.kata_sandi
          }),
        });
        if (response.ok) {
          navigate('/beranda');
        } else {
          const errorData = await response.json();
          setErrors({ api: errorData.message || 'Pendaftaran gagal' });
        }
      } catch (error) {
        setErrors({ api: 'Terjadi kesalahan jaringan' });
      }
    }
  };

  return (
    <>
      <header className="w-full top-0 sticky z-50 bg-background border-b border-border flex justify-between items-center px-margin py-sm">
        <button aria-label="Kembali" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container-low transition-colors active:scale-95 transition-transform" onClick={() => window.history.back()}>
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
        <form className="space-y-gutter flex-1" onSubmit={handleSubmit}>
          {errors.api && <div className="text-error mb-md">{errors.api}</div>}
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="nama_lengkap">Nama Lengkap</label>
            <input
              className={`form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all ${errors.nama_lengkap ? 'border-error' : ''}`}
              id="nama_lengkap"
              name="nama_lengkap"
              placeholder="Masukkan nama lengkap Anda"
              type="text"
              value={formData.nama_lengkap}
              onChange={handleChange}
              required
            />
            {errors.nama_lengkap && <p className="text-error text-sm mt-1">{errors.nama_lengkap}</p>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="email">Email</label>
            <input
              className={`form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all ${errors.email ? 'border-error' : ''}`}
              id="email"
              name="email"
              placeholder="contoh@email.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="no_telepon">No. Telepon</label>
            <input
              className={`form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all ${errors.no_telepon ? 'border-error' : ''}`}
              id="no_telepon"
              name="no_telepon"
              placeholder="0812xxxx"
              type="tel"
              value={formData.no_telepon}
              onChange={handleChange}
              required
            />
            {errors.no_telepon && <p className="text-error text-sm mt-1">{errors.no_telepon}</p>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="alamat">Alamat</label>
            <textarea
              className={`form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all resize-none ${errors.alamat ? 'border-error' : ''}`}
              id="alamat"
              name="alamat"
              placeholder="Masukkan alamat lengkap Anda"
              rows="2"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
            {errors.alamat && <p className="text-error text-sm mt-1">{errors.alamat}</p>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="kata_sandi">Kata Sandi</label>
            <div className="relative">
              <input
                className={`form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all pr-12 ${errors.kata_sandi ? 'border-error' : ''}`}
                id="kata_sandi"
                name="kata_sandi"
                placeholder="Min. 8 karakter"
                type={showPassword ? 'text' : 'password'}
                value={formData.kata_sandi}
                onChange={handleChange}
                required
              />
              <button
                className="absolute right-md top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors"
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <span className="material-symbols-outlined">{showPassword ? 'visibility_off' : 'visibility'}</span>
              </button>
            </div>
            {errors.kata_sandi && <p className="text-error text-sm mt-1">{errors.kata_sandi}</p>}
          </div>
          <div className="flex flex-col space-y-xs">
            <label className="font-label-caps text-label-caps text-on-surface-variant px-1 uppercase tracking-wider" htmlFor="confirm_kata_sandi">Konfirmasi Kata Sandi</label>
            <input
              className={`form-input w-full px-md py-md bg-surface border border-border rounded-custom text-on-surface placeholder:text-outline transition-all ${errors.confirm_kata_sandi ? 'border-error' : ''}`}
              id="confirm_kata_sandi"
              name="confirm_kata_sandi"
              placeholder="Konfirmasi kata sandi"
              type="password"
              value={formData.confirm_kata_sandi}
              onChange={handleChange}
              required
            />
            {errors.confirm_kata_sandi && <p className="text-error text-sm mt-1">{errors.confirm_kata_sandi}</p>}
          </div>
          <div className="flex items-start space-x-sm py-sm">
            <div className="flex items-center h-5">
              <input
                className={`w-5 h-5 rounded border-border text-primary focus:ring-primary ${errors.terms ? 'border-error' : ''}`}
                id="terms"
                name="terms"
                type="checkbox"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
            </div>
            <label className="text-on-surface-variant leading-tight" htmlFor="terms">
              Saya setuju dengan <a className="text-primary font-medium hover:underline" href="#">syarat & ketentuan</a> yang berlaku.
            </label>
          </div>
          <div className="pt-md pb-lg">
            <button
              className="w-full bg-primary text-surface py-md rounded-custom font-heading-md text-heading-md active:scale-[0.98] transition-transform hover:opacity-90 shadow-none"
              type="submit"
            >
              Daftar
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
