export async function uploadPaymentProof(orderId, formData) {
  const response = await fetch(`/orders/${orderId}/payment-proof`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload payment proof');
  }

  return response.json();
}
