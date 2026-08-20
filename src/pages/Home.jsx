import { useEffect, useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [products, setProducts] = useState([]);
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/masuk');
      return;
    }

    fetch('/api/home', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setUser(data.user);
        setEvents(data.events);
        setProducts(data.products);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        navigate('/masuk');
      });
  }, [navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && carouselRef.current) {
        const nextSlide = (currentSlide + 1) % events.length;
        setCurrentSlide(nextSlide);
        carouselRef.current.scrollTo({
          left: nextSlide * carouselRef.current.offsetWidth,
          behavior: 'smooth'
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlide, isHovering, events.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    carouselRef.current.scrollTo({
      left: index * carouselRef.current.offsetWidth,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface border-b border-border flex justify-between items-center px-gutter py-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container font-bold overflow-hidden">
            <img className="w-full h-full object-cover" alt="User profile" src={user?.avatar || "https://lh3.googleusercontent.com/aida-public/AB6AXuCl6UIpKBQfEF9dZKZExYwWmvQtho7OaHCybsQO8TKFG2j39X-4C5npFQg3VMi2ZRpEDztkXwReqmdDTCYbWpCz6jFptrC89H1FKFW_KSmqVinbG7-g77DCuTz9Zooc3fsjyLiAFMjA8OlL1RHONwQCfbx2YzYmBWdzlJ-wTYrYYGpeLmukycHK-M_6QdGx-5kpxZXS-LHsTONv0UQG2WbzvC17-HvTg-FAJpbIqOktjM8SSAcLUXHz"} />
          </div>
          <span className="font-heading-md-mobile text-heading-md-mobile text-on-surface">Halo, {user?.name || 'Rio'}</span>
        </div>
        <button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors active:scale-95 duration-150">
          <span className="material-symbols-outlined text-primary">notifications</span>
        </button>
      </header>

      <main className="mt-20 px-gutter space-y-lg">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all font-body-base" placeholder="Cari produk atau event" type="text" />
        </div>

        <section>
          <div className="flex justify-between items-center mb-md">
            <h2 className="font-heading-md-mobile text-heading-md-mobile">Event Berlangsung</h2>
            <button className="text-primary font-label-caps text-label-caps">Lihat Semua</button>
          </div>
          <div
            ref={carouselRef}
            className="flex gap-md overflow-x-auto no-scrollbar pb-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {events.map((event, index) => (
              <div key={event.id} className="min-w-[280px] bg-surface rounded-xl border border-border overflow-hidden flex-shrink-0 transition-transform active:scale-[0.98]">
                <div className="relative h-40">
                  <img className="w-full h-full object-cover" src={event.image} alt={event.title} />
                  <div className="absolute top-3 left-3 bg-error-tint px-3 py-1 rounded-sm border border-error-container">
                    <span className="text-error-text font-label-caps text-[10px] uppercase tracking-wider">{event.timeLeft}</span>
                  </div>
                </div>
                <div className="p-md flex justify-between items-center">
                  <div>
                    <h3 className="font-heading-md-mobile text-sm mb-1">{event.title}</h3>
                    <p className="text-tx-secondary text-xs">Oleh: {event.host}</p>
                  </div>
                  <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-label-caps active:scale-90 transition-all">Lihat</button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-outline'}`}
                onClick={() => handleSlideChange(index)}
              />
            ))}
          </div>
        </section>

        <section>
          <div className="flex gap-sm overflow-x-auto no-scrollbar">
            <button className="px-5 py-2 rounded-full bg-secondary-container text-primary font-label-caps text-label-caps border border-primary-container whitespace-nowrap active:scale-95 transition-all">Semua</button>
            <button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Bayi</button>
            <button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Skincare</button>
            <button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Fashion</button>
            <button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Elektronik</button>
            <button className="px-5 py-2 rounded-full bg-surface text-on-surface-variant font-label-caps text-label-caps border border-border whitespace-nowrap hover:bg-surface-container active:scale-95 transition-all">Makanan</button>
          </div>
        </section>

        <section>
          <h2 className="font-heading-md-mobile text-heading-md-mobile mb-md">Katalog Populer</h2>
          <div className="grid grid-cols-2 gap-md">
            {products.map(product => (
              <Link key={product.id} to={`/detail-produk/${product.id}`} className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col active:scale-[0.97] transition-all">
                <div className="relative aspect-square">
                  <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
                  {product.fee && (
                    <div className="absolute bottom-2 left-2 bg-success-tint px-2 py-0.5 rounded-sm border border-success-text/20">
                      <span className="text-success-text font-label-caps text-[10px]">+Fee {product.fee}%</span>
                    </div>
                  )}
                </div>
                <div className="p-md">
                  <h3 className="font-heading-md-mobile text-sm mb-1">{product.name}</h3>
                  <p className="text-tx-secondary text-xs mb-2">Oleh: {product.seller}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-heading-md-mobile text-heading-md-mobile text-primary">{product.price}</span>
                    <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-label-caps active:scale-90 transition-all">Beli</button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
