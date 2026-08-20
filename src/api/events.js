const mockEvents = [
  {
    id: '1',
    name: 'Perlengkapan Bayi',
    daysLeft: 3,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnXOsKeD0T55WTpgBOfcBZzP59Oa_QCP1sHcw3bfKuS-p1CtRAUtMgAhVXOuY35ZZ-iWp09L7bzI4A98w_HwJ7rQSPLHi7cm-R1lKCH4iPPDZB3y9skdfDUkOim0yExjO_CdIJzhOZ17PoZ4MW1l00YUuWt_qSTZtGko_8mFHiFDH3KO-1ZKuPbYsxQEh2x2-NbS8FbO32BTQESSLvI6eW-ZQcwNeklrN4hQxQQcQN4zaew_RYg4jA',
    description: 'Event khusus untuk perlengkapan bayi dengan harga spesial dan penawaran menarik.',
    products: [
      {
        id: '1',
        name: 'Stroller Bayi Premium',
        price: 150000,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnXOsKeD0T55WTpgBOfcBZzP59Oa_QCP1sHcw3bfKuS-p1CtRAUtMgAhVXOuY35ZZ-iWp09L7bzI4A98w_HwJ7rQSPLHi7cm-R1lKCH4iPPDZB3y9skdfDUkOim0yExjO_CdIJzhOZ17PoZ4MW1l00YUuWt_qSTZtGko_8mFHiFDH3KO-1ZKuPbYsxQEh2x2-NbS8FbO32BTQESSLvI6eW-ZQcwNeklrN4hQxQQcQN4zaew_RYg4jA'
      },
      // Add more products for this event
    ]
  },
  // Add more mock events as needed
];

export async function fetchEvent(id) {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const event = mockEvents.find(e => e.id === id);
      if (event) {
        resolve(event);
      } else {
        reject(new Error('Event not found'));
      }
    }, 500);
  });
}
