import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function DaftarAkun() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email wajib diisi';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Email tidak valid';
    if (!password) newErrors.password = 'Kata sandi wajib diisi';
    else if (password.length < 6) newErrors.password = 'Kata sandi minimal 6 karakter';
    if (!phone) newErrors.phone = 'Nomor telepon wajib diisi';
    else if (!/^\+?[0-9]{10,15}$/.test(phone)) newErrors.phone = 'Nomor telepon tidak valid';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch('https://api.example.com/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, phone }),
        });
        if (response.ok) {
          navigate('/beranda');
        } else {
          setErrors({ form: 'Pendaftaran gagal. Periksa data Anda.' });
        }
      } catch (error) {
        setErrors({ form: 'Terjadi kesalahan. Silakan coba lagi.' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full top-0 bg-background flex items-center px-gutter h-16 sticky z-50">
        <button aria-label="Kembali" className="material-symbols-outlined text-primary p-2 -ml-2 rounded-full hover:bg-surface-variant transition-colors active:scale-95 transition-transform">
          arrow_back
        </button>
        <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary ml-2">Daftar Akun</h1>
      </header>
      <main className="w-full max-w-md px-gutter flex-1 flex flex-col py-xl">
        <div className="mb-xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-primary mb-md">
            <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>person_add</span>
          </div>
          <h2 className="font-heading-md text-heading-md text-on-background mb-xs">Buat Akun Baru</h2>
          <p className="text-tx-secondary">Mulai mengelola tugas Anda dengan mudah.</p>
        </div>
        <AuthForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          phone={phone}
          setPhone={setPhone}
          errors={errors}
          handleSubmit={handleSubmit}
          buttonText="Daftar"
        />
        <footer className="mt-auto py-lg text-center">
          <p className="text-body-base text-tx-secondary">
            Sudah punya akun? <Link className="text-primary font-bold hover:underline ml-1" to="/masuk">Masuk</Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
