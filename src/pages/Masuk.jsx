import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';

export default function Masuk() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = ({ email, password }) => {
    // Mock auth flow
    if (email === 'user@example.com' && password === 'password') {
      localStorage.setItem('authToken', 'mock-token');
      navigate('/');
    } else {
      setError('Email atau kata sandi salah');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
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
        {error && <p className="text-error text-center mb-md">{error}</p>}
        <AuthForm type="login" onSubmit={handleLogin} />
        <footer className="mt-auto py-lg text-center">
          <p className="text-body-base text-tx-secondary">
            Belum punya akun? <Link to="/daftar" className="text-primary font-bold hover:underline ml-1">Daftar</Link>
          </p>
        </footer>
      </main>
    </div>
  );
}
