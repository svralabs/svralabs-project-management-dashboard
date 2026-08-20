import React from 'react';
import NotificationItem from '../components/NotificationItem';

export default function Notifikasi() {
  const todayNotifications = [
    {
      id: 1,
      icon: 'receipt',
      title: 'Invoice final sudah terbit',
      time: '10:30',
      message: 'Silakan cek detail pesanan Anda untuk melakukan pelunasan.',
      priority: 'Penting',
      isRead: false
    },
    {
      id: 2,
      icon: 'cancel',
      title: 'Pengajuan pembatalan disetujui',
      time: '08:45',
      message: 'Pembatalan pesanan #JT-0912 telah disetujui oleh tim.',
      priority: 'Error',
      isRead: false
    }
  ];

  const yesterdayNotifications = [
    {
      id: 3,
      icon: 'check_circle',
      title: 'Pembayaran divalidasi',
      time: '14:15',
      message: 'Pembayaran untuk pesanan #JT-1042 telah berhasil diverifikasi.',
      priority: null,
      isRead: true
    },
    {
      id: 4,
      icon: 'notifications_active',
      title: 'Pengingat Bayar',
      time: '09:00',
      message: 'Segera lakukan pembayaran sebelum pukul 18:00 WIB.',
      priority: null,
      isRead: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex items-center justify-between px-md h-14">
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-primary transition-colors duration-200 ease-in-out hover:bg-surface-container p-2 rounded-full">
            arrow_back
          </button>
          <h1 className="font-heading-md text-heading-md font-bold text-on-surface">Notifikasi</h1>
        </div>
        <button className="text-primary font-label-caps text-label-caps font-semibold">Tandai Dibaca</button>
      </header>

      <main className="pt-14 pb-20 px-gutter">
        <section className="mt-6">
          <h2 className="font-bold text-on-surface-variant mb-4 px-1">Hari Ini</h2>
          <div className="space-y-3">
            {todayNotifications.map(notification => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-bold text-on-surface-variant mb-4 px-1">Kemarin</h2>
          <div className="space-y-3">
            {yesterdayNotifications.map(notification => (
              <NotificationItem key={notification.id} {...notification} />
            ))}
          </div>
        </section>

        <div className="mt-12 mb-8 bg-primary rounded-2xl p-6 text-on-primary overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="font-heading-md text-heading-md mb-2">Butuh Bantuan?</h4>
            <p className="font-body-base text-on-primary/80 mb-4">Hubungi tim support kami jika Anda mengalami kendala dengan pesanan.</p>
            <button className="bg-surface text-primary font-bold px-6 py-2 rounded-full text-sm active:scale-95 transition-transform">Hubungi CS</button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute right-4 top-4 opacity-20">
            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>help_center</span>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 w-full z-50 bg-surface border-t border-border flex justify-around items-center h-16 px-gutter pb-safe">
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined" data-icon="home">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
          <span className="font-label-caps text-label-caps">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary font-bold transition-transform duration-150 active:scale-95" href="#">
          <div className="relative">
            <span className="material-symbols-outlined" data-icon="notifications" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error-text border-2 border-surface rounded-full"></span>
          </div>
          <span className="font-label-caps text-label-caps">Inbox</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-label-caps text-label-caps">Profile</span>
        </a>
      </nav>
    </div>
  );
}
