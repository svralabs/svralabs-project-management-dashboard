import { useState } from 'react';

export default function ImageGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="relative h-[420px] w-full shrink-0 overflow-hidden">
      <div className="absolute top-md left-md z-20">
        <button
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-tx-primary active:scale-95 transition-transform"
          onClick={() => window.history.back()}
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </div>
      <div className="flex h-full w-full">
        <img
          alt="Product Image"
          className="w-full h-full object-cover"
          src={images[currentIndex]}
        />
      </div>
      <div className="absolute bottom-md left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-${index === currentIndex ? '6' : '1.5'} h-1 rounded-full ${
              index === currentIndex ? 'bg-brand-primary' : 'bg-white/60'
            }`}
          />
        ))}
      </div>
      <button
        className="absolute left-md top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-tx-primary active:scale-95 transition-transform"
        onClick={goToPrevious}
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button
        className="absolute right-md top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-tx-primary active:scale-95 transition-transform"
        onClick={goToNext}
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </section>
  );
}
