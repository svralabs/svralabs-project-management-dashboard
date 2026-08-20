const mockProducts = [
  {
    id: '1',
    name: 'Stroller Bayi Premium',
    price: 150000,
    fee: 15000,
    stock: 10,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnXOsKeD0T55WTpgBOfcBZzP59Oa_QCP1sHcw3bfKuS-p1CtRAUtMgAhVXOuY35ZZ-iWp09L7bzI4A98w_HwJ7rQSPLHi7cm-R1lKCH4iPPDZB3y9skdfDUkOim0yExjO_CdIJzhOZ17PoZ4MW1l00YUuWt_qSTZtGko_8mFHiFDH3KO-1ZKuPbYsxQEh2x2-NbS8FbO32BTQESSLvI6eW-ZQcwNeklrN4hQxQQcQN4zaew_RYg4jA',
    event: 'Perlengkapan Bayi',
    eventDaysLeft: 3,
    description: 'Stroller bayi premium ini dirancang untuk memberikan kenyamanan maksimal bagi sang buah hati sekaligus kemudahan bagi orang tua. Menggunakan material berkualitas tinggi dengan rangka aluminium yang ringan namun sangat kokoh.',
    features: [
      'Sistem lipat satu tangan yang sangat praktis.',
      'Sandaran kursi yang dapat diatur hingga posisi tidur.',
      'Kanopi lebar dengan perlindungan UV 50+.',
      'Roda dengan suspensi ganda untuk jalanan tidak rata.'
    ]
  },
  // Add more mock products as needed
];

export async function fetchProduct(id) {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find(p => p.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 500);
  });
}
