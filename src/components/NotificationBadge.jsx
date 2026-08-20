import { Bell } from 'lucide-react';

export default function NotificationBadge({ count }) {
  return (
    <div className="relative">
      <Bell className="text-on-secondary-fixed-variant" size={24} />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 w-2 h-2 bg-error-text border-2 border-surface rounded-full" />
      )}
    </div>
  );
}
