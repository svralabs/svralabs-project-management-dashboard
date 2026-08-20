import StatsCard from '../components/StatsCard';

const stats = [
  { title: 'Total Pesanan', value: '1,245', icon: 'shopping_cart', color: 'bg-primary-container' },
  { title: 'Pendapatan', value: 'Rp 12.450.000', icon: 'attach_money', color: 'bg-tertiary-container' },
  { title: 'Pengguna Aktif', value: '872', icon: 'group', color: 'bg-secondary-container' },
  { title: 'Rating Rata-rata', value: '4.8', icon: 'star', color: 'bg-success-container' }
];

const recentActivity = [
  { id: 1, user: 'John Doe', action: 'menambahkan pesanan baru', time: '2 menit lalu', icon: 'add_shopping_cart', color: 'bg-primary-container' },
  { id: 2, user: 'Jane Smith', action: 'mengupdate status pesanan', time: '15 menit lalu', icon: 'update', color: 'bg-tertiary-container' },
  { id: 3, user: 'Admin', action: 'menyetujui pembatalan', time: '1 jam lalu', icon: 'cancel', color: 'bg-error-container' },
  { id: 4, user: 'Support Team', action: 'menjawab tiket', time: '2 jam lalu', icon: 'support_agent', color: 'bg-secondary-container' }
];

export default function AdminDashboardOverview() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex items-center justify-between px-md h-14">
        <h1 className="font-heading-md text-heading-md font-bold text-on-surface">Dashboard Admin</h1>
        <div className="flex items-center gap-4">
          <button className="text-primary transition-colors duration-200 ease-in-out hover:bg-surface-container p-2 rounded-full">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-primary transition-colors duration-200 ease-in-out hover:bg-surface-container p-2 rounded-full">
            <span className="material-symbols-outlined">settings</span>
          </button>
        </div>
      </header>

      <main className="pt-14 pb-20 px-gutter">
        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatsCard
              key={index}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </section>

        <section className="mt-8">
          <h2 className="font-bold text-on-surface-variant mb-4 px-1">Aktivitas Terbaru</h2>
          <div className="space-y-3">
            {recentActivity.map(activity => (
              <div
                key={activity.id}
                className="bg-surface rounded-xl border border-border p-md flex gap-4 transition-colors duration-200 hover:bg-surface-container-low"
              >
                <div className={`w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0 ${activity.color}`}>
                  <span className="material-symbols-outlined text-on-primary">{activity.icon}</span>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-on-surface leading-tight">{activity.user}</h3>
                    <span className="text-[11px] text-outline font-medium">{activity.time}</span>
                  </div>
                  <p className="font-body-base text-body-base text-on-surface-variant">{activity.action}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-bold text-on-surface-variant mb-4 px-1">Grafik Pendapatan</h2>
          <div className="bg-surface rounded-xl border border-border p-4">
            <div className="h-64 flex items-center justify-center">
              <p className="text-on-surface-variant">Grafik pendapatan akan ditampilkan di sini</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
