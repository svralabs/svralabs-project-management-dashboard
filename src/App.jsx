import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import Masuk from './pages/Masuk';
import DaftarPesananSaya from './pages/DaftarPesananSaya';
import DetailPesanan from './pages/DetailPesanan';
import DetailEventKatalog from './pages/DetailEventKatalog';
import ScheduleCalendar from './pages/ScheduleCalendar';
import DetailProduk from './pages/DetailProduk';
import PesananBerhasil from './pages/PesananBerhasil';
import AjukanPembatalan from './pages/AjukanPembatalan';
import AdminDashboard from './pages/AdminDashboard';
import Notifikasi from './pages/Notifikasi';
import Beranda from './pages/Beranda';
import UploadBuktiPembayaran from './pages/UploadBuktiPembayaran';

function ScreenBar() {
  const loc = useLocation();
  const navs = [
    { path: '/', label: 'Masuk' },
    { path: '/daftarpesanansaya', label: 'DaftarPesananSaya' },
    { path: '/detailpesanan', label: 'DetailPesanan' },
    { path: '/detaileventkatalog', label: 'DetailEventKatalog' },
    { path: '/schedulecalendar', label: 'ScheduleCalendar' },
    { path: '/detailproduk', label: 'DetailProduk' },
    { path: '/pesananberhasil', label: 'PesananBerhasil' },
    { path: '/ajukanpembatalan', label: 'AjukanPembatalan' },
    { path: '/admindashboard', label: 'AdminDashboard' },
    { path: '/notifikasi', label: 'Notifikasi' },
    { path: '/beranda', label: 'Beranda' },
    { path: '/uploadbuktipembayaran', label: 'UploadBuktiPembayaran' }
  ];

  return (
    <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 bg-slate-900/90 backdrop-blur-md border border-slate-700/60 rounded-full px-3 py-1.5 shadow-2xl flex items-center gap-1.5 overflow-x-auto max-w-[95vw]">
      <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest px-2 hidden sm:inline">Screens:</span>
      {navs.map((n) => {
        const active = loc.pathname === n.path;
        return (
          <Link
            key={n.path}
            to={n.path}
            className={`px-3 py-1 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
              active
                ? 'bg-violet-600 text-white shadow-md shadow-violet-500/30'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            {n.label}
          </Link>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <BrowserRouter>
              <ScreenBar />
              <div className="pt-10 min-h-screen">
                <Routes>
                  <Route path='/' element={<Masuk />} />
        <Route path='/daftarpesanansaya' element={<DaftarPesananSaya />} />
        <Route path='/detailpesanan' element={<DetailPesanan />} />
        <Route path='/detaileventkatalog' element={<DetailEventKatalog />} />
        <Route path='/schedulecalendar' element={<ScheduleCalendar />} />
        <Route path='/detailproduk' element={<DetailProduk />} />
        <Route path='/pesananberhasil' element={<PesananBerhasil />} />
        <Route path='/ajukanpembatalan' element={<AjukanPembatalan />} />
        <Route path='/admindashboard' element={<AdminDashboard />} />
        <Route path='/notifikasi' element={<Notifikasi />} />
        <Route path='/beranda' element={<Beranda />} />
        <Route path='/uploadbuktipembayaran' element={<UploadBuktiPembayaran />} />
                  <Route path="*" element={<Masuk />} />
                </Routes>
              </div>
            </BrowserRouter>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
