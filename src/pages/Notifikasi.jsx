import { useState } from 'react';
import {ArrowLeft as ArrowBack} from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'Invoice final sudah terbit',
    time: '10:30',
    message: 'Silakan cek detail pesanan Anda untuk melakukan pelunasan.',
    icon: 'receipt',
    type: 'important',
    read: false,
    date: 'today'
  },
  {
    id: 2,
    title: 'Pengajuan pembatalan disetujui',
    time: '08:45',
    message: 'Pembatalan pesanan #JT-0912 telah disetujui oleh tim.',
    icon: 'cancel',
    type: 'error',
    read: false,
    date: 'today'
  },
  {
    id: 3,
    title: 'Pembayaran divalidasi',
    time: '14:15',
    message: 'Pembayaran untuk pesanan #JT-1042 telah berhasil diverifikasi.',
    icon: 'check_circle',
    type: 'success',
    read: true,
    date: 'yesterday'
  },
  {
    id: 4,
    title: 'Pengingat Bayar',
    time: '09:00',
    message: 'Segera lakukan pembayaran sebelum pukul 18:00 WIB.',
    icon: 'notifications_active',
    type: 'reminder',
    read: true,
    date: 'yesterday'
  }
];

export default function Notifikasi() {
  const [notificationList, setNotificationList] = useState(notifications);

  const markAllAsRead = () => {
    setNotificationList(notificationList.map(notification => ({
      ...notification,
      read: true
    })));
  };

  const getNotificationStyle = (notification) => {
    if (notification.read) {
      return 'bg-surface/60 opacity-70';
    }
    switch (notification.type) {
      case 'important':
        return 'bg-secondary-container';
      case 'error':
        return 'bg-error-tint';
      case 'success':
        return 'bg-success-tint';
      default:
        return 'bg-surface-container';
    }
  };

  const getIconColor = (notification) => {
    if (notification.read) {
      return 'text-on-secondary-fixed-variant opacity-80';
    }
    switch (notification.type) {
      case 'important':
        return 'text-primary';
      case 'error':
        return 'text-error-text';
      case 'success':
        return 'text-success-text';
      default:
        return 'text-on-secondary-fixed-variant';
    }
  };

  const todayNotifications = notificationList.filter(n => n.date === 'today');
  const yesterdayNotifications = notificationList.filter(n => n.date === 'yesterday');

  return (
    <div className="min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex items-center justify-between px-md h-14">
        <div className="flex items-center gap-4">
          <button className="text-primary transition-colors duration-200 ease-in-out hover:bg-surface-container p-2 rounded-full">
            <ArrowBack size={24} />
          </button>
          <h1 className="font-heading-md text-heading-md font-bold text-on-surface">Notifikasi</h1>
        </div>
        <button
          className="text-primary font-label-caps text-label-caps font-semibold"
          onClick={markAllAsRead}
        >
          Tandai Dibaca
        </button>
      </header>

      <main className="pt-14 pb-20 px-gutter">
        {todayNotifications.length > 0 && (
          <section className="mt-6">
            <h2 className="font-bold text-on-surface-variant mb-4 px-1">Hari Ini</h2>
            <div className="space-y-3">
              {todayNotifications.map(notification => (
                <div
                  key={notification.id}
                  className={`notification-item rounded-xl border border-border p-md flex gap-4 transition-colors duration-200 ${getNotificationStyle(notification)}`}
                >
                  <div className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0">
                    <span className={`material-symbols-outlined ${getIconColor(notification)}`}>{notification.icon}</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <h3 className={`font-bold text-on-surface leading-tight ${notification.read ? 'font-semibold' : ''}`}>
                        {notification.title}
                      </h3>
                      <span className={`text-[11px] font-medium ${notification.read ? 'text-outline' : 'text-primary'}`}>
                        {notification.time}
                      </span>
                    </div>
                    <p className="font-body-base text-body-base text-on-surface-variant">
                      {notification.message}
                    </p>
                    {notification.type === 'important' && (
                      <div className="mt-1 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-[10px] uppercase tracking-wider text-primary font-bold">Penting</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {yesterdayNotifications.length > 0 && (
          <section className="mt-8">
            <h2 className="font-bold text-on-surface-variant mb-4 px-1">Kemarin</h2>
            <div className="space-y-3">
              {yesterdayNotifications.map(notification => (
                <div
                  key={notification.id}
                  className={`notification-item rounded-xl border border-border p-md flex gap-4 transition-colors duration-200 ${getNotificationStyle(notification)}`}
                >
                  <div className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0">
                    <span className={`material-symbols-outlined ${getIconColor(notification)}`}>{notification.icon}</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex justify-between items-start">
                      <h3 className={`font-bold text-on-surface leading-tight ${notification.read ? 'font-semibold' : ''}`}>
                        {notification.title}
                      </h3>
                      <span className={`text-[11px] font-medium ${notification.read ? 'text-outline' : 'text-primary'}`}>
                        {notification.time}
                      </span>
                    </div>
                    <p className="font-body-base text-body-base text-on-surface-variant">
                      {notification.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-12 mb-8 bg-primary rounded-2xl p-6 text-on-primary overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="font-heading-md text-heading-md mb-2">Butuh Bantuan?</h4>
            <p className="font-body-base text-on-primary/80 mb-4">Hubungi tim support kami jika Anda mengalami kendala dengan pesanan.</p>
            <button className="bg-surface text-primary font-bold px-6 py-2 rounded-full text-sm active:scale-95 transition-transform">
              Hubungi CS
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute right-4 top-4 opacity-20">
            <span className="material-symbols-outlined text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>help_center</span>
          </div>
        </div>
      </main>

      <nav className="fixed bottom-0 w-full z-50 bg-surface border-t border-border flex justify-around items-center h-16 px-gutter pb-safe">
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-caps text-label-caps">Home</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined">receipt_long</span>
          <span className="font-label-caps text-label-caps">Orders</span>
        </a>
        <a className="flex flex-col items-center justify-center text-primary font-bold transition-transform duration-150 active:scale-95" href="#">
          <div className="relative">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error-text border-2 border-surface rounded-full"></span>
          </div>
          <span className="font-label-caps text-label-caps">Inbox</span>
        </a>
        <a className="flex flex-col items-center justify-center text-on-secondary-fixed-variant transition-transform duration-150 active:scale-95 hover:bg-surface-container-low" href="#">
          <span className="material-symbols-outlined">person</span>
          <span className="font-label-caps text-label-caps">Profile</span>
        </a>
      </nav>
    </div>
  );
}
