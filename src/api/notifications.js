const API_BASE_URL = 'https://api.example.com';

export async function getNotifications() {
  const response = await fetch(`${API_BASE_URL}/notifications`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch notifications');
  }

  return response.json();
}

export async function markAsRead(notificationId) {
  const response = await fetch(`${API_BASE_URL}/notifications/${notificationId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ read: true }),
  });

  if (!response.ok) {
    throw new Error('Failed to mark notification as read');
  }

  return response.json();
}
