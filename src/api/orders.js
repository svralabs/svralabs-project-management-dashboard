export async function getOrders() {
  const mockOrders = [
    {
      id: 'JT-1042',
      title: 'Perlengkapan Bayi',
      date: '15 Juli 2026',
      status: 'Diproses',
      items: [
        {
          name: 'Stroller Modern Premium - Dark Edition',
          image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
          price: 2175000,
          quantity: 1
        }
      ]
    },
    {
      id: 'JT-0988',
      title: 'Koleksi Mainan',
      date: '14 Juli 2026',
      status: 'Menunggu Bayar',
      items: [
        {
          name: 'Puzzle Kayu Montessori (Set of 5)',
          image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
          price: 450000,
          quantity: 2
        }
      ]
    },
    {
      id: 'JT-0855',
      title: 'Kebutuhan Ibu',
      date: '10 Juli 2026',
      status: 'Selesai',
      items: [
        {
          name: 'Tas Diaper Waterproof Oxford',
          image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
          price: 825000,
          quantity: 1
        }
      ]
    },
    {
      id: 'JT-0712',
      title: 'Aksesoris Kamar',
      date: '05 Juli 2026',
      status: 'Dibatalkan',
      items: [
        {
          name: 'Lampu Tidur Bayi',
          image: 'https://lh3.googleusercontent.com/aida/AP1WRLvDWQOVN_xc8YhXwTXK0rYzORicmqe-McjlUfjWFWkXAZ8gLUN1uKNkaFphJz5NmdZTqjB3kolaTh6-F9dJrpGRm8U5jTABj7jUKYnwei--hqGkgdaYX1Sc3znF5ouad_mNgX0r6xNKubNyFc3Dc4_DXVLwXe8jut5TqKhiPRU21-wNq7fATm8RBU82gZNy7vwbD9v93vEDQwJ3WrnW0qb5UtJvTTwM61nCl_wfJqiULuBq-vhyvmRuCm4',
          price: 350000,
          quantity: 1
        }
      ]
    }
  ];

  return mockOrders;
}

export async function getOrderById(id) {
  const orders = await getOrders();
  return orders.find(order => order.id === id);
}
