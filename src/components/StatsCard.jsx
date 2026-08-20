export default function StatsCard({ title, value, icon, color }) {
  return (
    <div className="bg-surface rounded-xl border border-border p-4 flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
          <span className="material-symbols-outlined text-on-primary">{icon}</span>
        </div>
        <h3 className="font-bold text-on-surface-variant">{title}</h3>
      </div>
      <p className="font-heading-lg text-heading-lg font-bold text-on-surface">{value}</p>
    </div>
  );
}
