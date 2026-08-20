const API_BASE_URL = 'https://api.example.com';

export async function submitCancellation(cancellationData) {
  const response = await fetch(`${API_BASE_URL}/orders/${cancellationData.orderId}/cancellation`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cancellationData),
  });

  if (!response.ok) {
    throw new Error('Failed to submit cancellation');
  }

  return response.json();
}
