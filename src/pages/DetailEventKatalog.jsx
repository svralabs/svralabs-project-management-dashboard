import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchEvent } from '../api/events';

export default function DetailEventKatalog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      try {
        const data = await fetchEvent(id);
        setEvent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getEvent();
  }, [id]);

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  if (error) return <div className="min-h-screen flex items-center justify-center">Error: {error}</div>;
  if (!event) return <div className="min-h-screen flex items-center justify-center">Event not found</div>;

  return (
    <main className="w-full max-w-md bg-surface min-h-screen flex flex-col relative overflow-x-hidden">
      <section className="relative h-[420px] w-full shrink-0 overflow-hidden">
        <div className="absolute top-md left-md z-20">
          <button
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-tx-primary active:scale-95 transition-transform"
            onClick={() => navigate(-1)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        </div>
        <div className="flex h-full w-full">
          <img
            alt="Event Image"
            className="w-full h-full object-cover"
            src={event.image}
          />
        </div>
      </section>

      <section className="flex-1 px-margin py-xl bg-surface rounded-t-[24px] -mt-6 relative z-10">
        <div className="mb-lg">
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-tx-primary mb-xs">{event.name}</h1>
          <div className="flex items-center gap-sm">
            <span className="text-label-caps font-label-caps text-on-surface-variant">Berakhir dalam</span>
            <span className="text-label-caps font-label-caps text-error-text">{event.daysLeft} hari</span>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="font-heading-md text-heading-md text-tx-primary mb-sm">Deskripsi Event</h2>
          <div className="space-y-md text-body-base font-body-base text-on-surface-variant leading-relaxed">
            <p>{event.description}</p>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="font-heading-md text-heading-md text-tx-primary mb-sm">Produk dalam Event</h2>
          <div className="grid grid-cols-2 gap-md">
            {event.products.map((product) => (
              <div key={product.id} className="bg-surface-container rounded-xl overflow-hidden">
                <img
                  alt={product.name}
                  className="w-full h-40 object-cover"
                  src={product.image}
                />
                <div className="p-md">
                  <h3 className="text-body-base font-medium text-tx-primary truncate">{product.name}</h3>
                  <div className="flex items-baseline gap-sm mt-xs">
                    <span className="text-heading-sm font-heading-sm text-brand-primary">Rp{product.price.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
