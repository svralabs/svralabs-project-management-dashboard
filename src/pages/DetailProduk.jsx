import ImageGallery from '../components/ImageGallery';
import DetailLayout from '../components/DetailLayout';

export default function DetailProduk() {
  const product = {
    name: "Stroller Bayi Premium",
    price: 150000,
    fee: 15000,
    description: "Stroller bayi premium ini dirancang untuk memberikan kenyamanan maksimal bagi sang buah hati sekaligus kemudahan bagi orang tua. Menggunakan material berkualitas tinggi dengan rangka aluminium yang ringan namun sangat kokoh.",
    features: [
      "Sistem lipat satu tangan yang sangat praktis.",
      "Sandaran kursi yang dapat diatur hingga posisi tidur.",
      "Kanopi lebar dengan perlindungan UV 50+.",
      "Roda dengan suspensi ganda untuk jalanan tidak rata."
    ],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnXOsKeD0T55WTpgBOfcBZzP59Oa_QCP1sHcw3bfKuS-p1CtRAUtMgAhVXOuY35ZZ-iWp09L7bzI4A98w_HwJ7rQSPLHi7cm-R1lKCH4iPPDZB3y9skdfDUkOim0yExjO_CdIJzhOZ17PoZ4MW1l00YUuWt_qSTZtGko_8mFHiFDH3KO-1ZKuPbYsxQEh2x2-NbS8FbO32BTQESSLvI6eW-ZQcwNeklrN4hQxQQcQN4zaew_RYg4jA",
      "https://example.com/image2.jpg",
      "https://example.com/image3.jpg"
    ]
  };

  const handleQuantityChange = (newQuantity) => {
    console.log('Quantity changed to:', newQuantity);
  };

  return (
    <DetailLayout product={product} onQuantityChange={handleQuantityChange}>
      <ImageGallery images={product.images} />
    </DetailLayout>
  );
}
