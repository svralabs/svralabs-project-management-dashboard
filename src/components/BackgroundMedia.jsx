import React from 'react';

export default function BackgroundMedia() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#8F85E0]/20 to-[#8F85E0]/10"></div>
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXx3zGYjA5FKdH8gT_Jyobf3zlw7H-XeQFpo5cbk7CfWkoHJWzWjku6Go9z1uyzvyKtT08Uv4ZozJ5p_9f96n5DTBIDS6DuloEAy4uL7RuylUiCrkTFwGg-Nb0Bj9DRgt8Z9mWPvbWJHQV8iafq-Vvt7bpeansKQ8gsz8w3bupEWemUGx4bpsBvt578lWEa9uwpFyIMx_ZP8g3QLhvqjMriwPrjHi_iuPWPR9KGeGNXT79626y9PVQ"
        alt="Background illustration"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
    </div>
  );
}
