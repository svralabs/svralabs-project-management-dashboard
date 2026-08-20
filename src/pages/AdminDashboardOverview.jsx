import React from 'react';

const AdminDashboardOverview = () => {
  const kpiCards = [
    { icon: 'shopping_cart', title: 'Order Masuk', value: '124', change: '+12%', changeColor: 'success', bgColor: 'primary-container', textColor: 'on-primary-container' },
    { icon: 'sync_alt', title: 'Transaksi Berjalan', value: '45', change: '-2%', changeColor: 'error', bgColor: 'secondary-container', textColor: 'on-secondary-container' },
    { icon: 'pending_actions', title: 'Menunggu Pembayaran', value: '18', bgColor: 'surface-container-high', textColor: 'primary' },
    { icon: 'payments', title: 'Pembayaran Berhasil', value: '89', change: '+8%', changeColor: 'success', bgColor: 'tertiary-container', textColor: 'on-tertiary-container' }
  ];

  return (
    <div className="flex h-screen bg-surface-container-low">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 border-r border-outline-variant bg-surface flex flex-col p-md z-50">
        <div className="mb-xl px-sm">
          <h1 className="font-display text-heading-md font-bold text-primary">JastipPro</h1>
          <p className="text-xs text-on-surface-variant">Admin Console</p>
        </div>
        <nav className="flex-1 space-y-sm">
          <a className="flex items-center gap-md p-md bg-secondary-container text-on-secondary-container font-semibold rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">group</span>
            <span>Customer</span>
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">event</span>
            <span>Event</span>
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">menu_book</span>
            <span>Katalog</span>
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">receipt_long</span>
            <span>Transaksi</span>
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">description</span>
            <span>Invoice</span>
          </a>
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">calculate</span>
            <span>Kalkulator AI</span>
          </a>
        </nav>
        <div className="mt-auto border-t border-outline-variant pt-md">
          <a className="flex items-center gap-md p-md text-on-surface-variant hover:bg-surface-container-high hover:text-primary rounded-lg cursor-pointer active:scale-95 transition-colors duration-200" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span>Pengaturan</span>
          </a>
          <div className="mt-md flex items-center gap-md p-sm">
            <img className="w-10 h-10 rounded-full border border-outline-variant object-cover" alt="Admin profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsUetNI6x_X2DbXUeeYsN3B136jo2HpmO-PF9diMzPvI46qTST8XKS2OhrmZyynkFXVhtYDxNRAflKNfaxXGKrYzq-FWqT3j7XUJyOKApu-GSOweWS5n5lYNolD-q7lNmKerGhENIvisXpIvKsTOpV7yZjxy2XngFxX9V9LMv18NB_JHT67eSdCFE_GazgnIs2rw3ocENgwNz6WXN4xliQH2fYib2txYkqCJh8qX0xdtLyEYQlQiqR"/>
            <div className="overflow-hidden">
              <p className="text-sm font-semibold truncate">Admin Utama</p>
              <p className="text-xs text-on-surface-variant truncate">admin@jastippro.id</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* TopNavBar */}
        <header className="fixed top-0 right-0 w-[calc(100%-16rem)] h-16 border-b border-outline-variant bg-surface flex justify-between items-center px-lg z-40">
          <div className="flex items-center gap-md w-1/3">
            <div className="relative w-full group">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all text-sm" placeholder="Cari pesanan atau pelanggan..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-lg">
            <div className="flex items-center gap-md">
              <button className="relative p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full border-2 border-surface"></span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors">
                <span className="material-symbols-outlined">help_outline</span>
              </button>
            </div>
            <div className="h-8 w-px bg-outline-variant"></div>
            <div className="flex items-center gap-sm">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold">Admin Dashboard</p>
                <p className="text-xs text-on-surface-variant">Online</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="mt-16 p-lg">
          {/* KPI Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-lg mb-lg">
            {kpiCards.map((card, index) => (
              <div key={index} className="bg-surface p-lg rounded-xl border border-outline-variant">
                <div className="flex justify-between items-start mb-md">
                  <span className={`material-symbols-outlined p-2 bg-${card.bgColor} text-${card.textColor} rounded-lg`}>{card.icon}</span>
                  {card.change && (
                    <span className={`text-${card.changeColor}-text text-xs font-semibold bg-${card.changeColor}-tint px-2 py-1 rounded-sm`}>{card.change}</span>
                  )}
                </div>
                <p className="text-on-surface-variant text-sm mb-xs">{card.title}</p>
                <h2 className="text-display-lg text-2xl font-bold">{card.value}</h2>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardOverview;
