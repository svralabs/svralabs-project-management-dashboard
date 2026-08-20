import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getNotifications, markAsRead } from '../api/notifications';

export default function Notifikasi() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const data = await getNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const handleMarkAsRead = async (id) => {
    try {
      await markAsRead(id);
      setNotifications(notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      ));
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  };

  return (
    <div className="min-h-screen bg-surface-container-low">
      <header className="bg-surface border-b border-border px-lg py-md flex items-center justify-between">
        <button
          aria-label="Kembali"
          className="p-xs text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors duration-200 flex items-center justify-center"
          onClick={() => navigate(-1)}
        >
          <span className="material-symbols-outlined text-md">arrow_back</span>
        </button>
        <h1 className="font-heading-md text-heading-md text-on-surface">Notifikasi</h1>
        <div className="w-8 h-8"></div>
      </header>

      <div className="p-margin space-y-md">
        {loading ? (
          <div className="flex justify-center items-center py-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : notifications.length === 0 ? (
          <div className="text-center py-lg text-on-surface-variant">
            Tidak ada notifikasi
          </div>
        ) : (
          <div className="space-y-md">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-md rounded-xl border ${notification.read ? 'border-outline-variant' : 'border-primary bg-primary-tint'}`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-heading-sm text-heading-sm text-on-surface">{notification.title}</h3>
                    <p className="text-body-base text-on-surface-variant mt-xs">{notification.message}</p>
                    <p className="text-label-sm text-outline mt-xs">{new Date(notification.createdAt).toLocaleString()}</p>
                  </div>
                  {!notification.read && (
                    <button
                      aria-label="Tandai sebagai dibaca"
                      className="p-xs text-primary hover:bg-surface-container-low rounded-full transition-colors duration-200 flex items-center justify-center"
                      onClick={() => handleMarkAsRead(notification.id)}
                    >
                      <span className="material-symbols-outlined text-md">done</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
