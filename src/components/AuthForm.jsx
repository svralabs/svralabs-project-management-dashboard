import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AuthForm({ type, onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email wajib diisi';
    if (!password) newErrors.password = 'Kata sandi wajib diisi';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ email, password });
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-lg bento-card p-lg rounded-lg">
      <div className="space-y-xs">
        <label className="font-label-caps text-label-caps text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="email">Email</label>
        <input
          className="w-full px-md py-3 bg-surface rounded-lg border border-border text-body-base focus:ring-0 focus:border-primary transition-all duration-200"
          id="email"
          type="email"
          placeholder="nama@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="text-error text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="space-y-xs">
        <label className="font-label-caps text-label-caps text-on-surface-variant ml-1 uppercase tracking-wider" htmlFor="password">Kata Sandi</label>
        <div className="relative group">
          <input
            className="w-full px-md py-3 bg-surface rounded-lg border border-border text-body-base focus:ring-0 focus:border-primary transition-all duration-200 pr-12"
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-primary transition-colors p-1"
            onClick={togglePassword}
          >
            <span className="material-symbols-outlined">
              {showPassword ? 'visibility_off' : 'visibility'}
            </span>
          </button>
        </div>
        {errors.password && <p className="text-error text-sm mt-1">{errors.password}</p>}
        {type === 'login' && (
          <div className="flex justify-end">
            <Link to="/lupa-kata-sandi" className="text-label-caps font-label-caps text-primary hover:underline transition-all">
              Lupa kata sandi?
            </Link>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-4 px-xl rounded-lg font-heading-md text-body-base transition-all active:scale-95 hover:opacity-90"
      >
        {type === 'login' ? 'Masuk' : 'Daftar'}
      </button>
      <div className="flex items-center gap-md py-md">
        <div className="flex-1 h-px bg-border"></div>
        <span className="font-label-caps text-label-caps text-tx-secondary uppercase tracking-widest">atau</span>
        <div className="flex-1 h-px bg-border"></div>
      </div>
      <button
        type="button"
        className="w-full bg-surface border border-border text-on-surface py-3.5 px-xl rounded-lg font-heading-md text-body-base flex items-center justify-center gap-md transition-all active:scale-95 hover:bg-surface-variant"
      >
        <svg className="mr-2" height="20" viewBox="0 0 24 24" width="20">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
        </svg>
        Masuk dengan Google
      </button>
    </form>
  );
}
