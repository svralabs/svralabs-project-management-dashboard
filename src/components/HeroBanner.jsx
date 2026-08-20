import React from 'react';

export default function HeroBanner() {
  return (
    <div className="relative h-48 bg-gradient-to-r from-primary to-primary-container rounded-xl overflow-hidden">
      <img
        className="w-full h-full object-cover opacity-70"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCl6UIpKBQfEF9dZKZExYwWmvQtho7OaHCybsQO8TKFG2j39X-4C5npFQg3VMi2ZRpEDztkXwReqmdDTCYbWpCz6jFptrC89H1FKFW_KSmqVinbG7-g77DCuTz9Zooc3fsjyLiAFMjA8OlL1RHONwQCfbx2YzYmBWdzlJ-wTYrYYGpeLmukycHK-M_6QdGx-5kpxZXS-LHsTONv0UQG2WbzvC17-HvTg-FAJpbIqOktjM8SSAcLUXHz"
        alt="Hero banner"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h2 className="font-heading-lg text-on-primary text-2xl mb-2">Selamat Datang di Personal Shopper</h2>
        <p className="text-on-primary-container text-sm">Temukan produk terbaik untuk Anda</p>
      </div>
    </div>
  );
}
