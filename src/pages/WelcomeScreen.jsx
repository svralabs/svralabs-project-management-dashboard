import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundMedia from '../components/BackgroundMedia';

const languages = [
  { code: 'id', name: 'Bahasa Indonesia' },
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
];

export default function WelcomeScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const navigate = useNavigate();

  const handleLanguageChange = (e) => {
    const selected = languages.find(lang => lang.code === e.target.value);
    setSelectedLanguage(selected);
  };

  const handleGetStarted = () => {
    navigate('/onboarding');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <BackgroundMedia />

      <main className="flex-1 flex flex-col justify-between px-4 py-8 max-w-md mx-auto w-full overflow-hidden">
        <header className="flex justify-between items-center py-4 fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="w-24 h-8 flex items-center justify-center">
            <img
              alt="Logo [NAMA BRAND]"
              className="max-w-full max-h-full object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKVsjU38WuVwheL8P2Z5BIZTCpO-RwhX96C3n5F8jvcofKHujGysNkS2ZYkzdR0mWdTRIfR3Vj7qAOoIBPA_9IdLWuf-UzFBiX_0diu7qPEvqdeWeKDXsNTvKgyzwTLZO97xZ4dfywgZbhb2EFDHIVDDoAdvYllAD7WqEhvXag1m7qs5CDkIsabA0TGDPnenap8kpCWJm7DDv-3-dx4QMbjdjShiOVzUESMk4ORMCpMb8gFI1QJMd"
            />
          </div>
          <div className="relative">
            <select
              value={selectedLanguage.code}
              onChange={handleLanguageChange}
              className="appearance-none bg-transparent border border-outline-variant rounded-full px-4 py-2 pr-8 text-tx-primary font-label-caps text-label-caps"
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 transform -translate-y-1/2 text-outline-variant">
              expand_more
            </span>
          </div>
        </header>

        <section className="flex-1 flex flex-col items-center justify-center fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative w-full aspect-square max-w-[280px] mb-8">
            <img
              alt="Shopping bag illustration with gifts"
              className="w-full h-full object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXx3zGYjA5FKdH8gT_Jyobf3zlw7H-XeQFpo5cbk7CfWkoHJWzWjku6Go9z1uyzvyKtT08Uv4ZozJ5p_9f96n5DTBIDS6DuloEAy4uL7RuylUiCrkTFwGg-Nb0Bj9DRgt8Z9mWPvbWJHQV8iafq-Vvt7bpeansKQ8gsz8w3bupEWemUGx4bpsBvt578lWEa9uwpFyIMx_ZP8g3QLhvqjMriwPrjHi_iuPWPR9KGeGNXT79626y9PVQ"
            />
          </div>

          <div className="text-center space-y-4">
            <h1 className="font-display-lg-mobile text-display-lg-mobile text-tx-primary tracking-tight">
              Titip belanja, gampang & aman
            </h1>
            <p className="font-body-base text-body-base text-tx-secondary px-2 leading-relaxed">
              Solusi praktis belanja produk impian dari mana saja dengan aman.
            </p>
          </div>
        </section>

        <footer className="flex flex-col gap-4 py-4 fade-in" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={handleGetStarted}
            className="w-full h-[54px] bg-[#8F85E0] text-on-primary font-heading-md text-heading-md rounded-full shadow-sm hover:opacity-90 transition-all flex items-center justify-center"
          >
            Mulai
          </button>

          <div className="mt-2 text-center">
            <p className="font-label-caps text-label-caps text-outline italic">
              Versi 1.0.4 • TaskFlow Powered
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
