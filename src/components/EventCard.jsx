import React from 'react';

export default function EventCard({ event }) {
  return (
    <div className="min-w-[280px] bg-surface rounded-xl border border-border overflow-hidden flex-shrink-0 transition-transform active:scale-[0.98]">
      <div className="relative h-40">
        <img
          className="w-full h-full object-cover"
          src={event.image}
          alt={event.alt}
        />
        <div className="absolute top-3 left-3 bg-error-tint px-3 py-1 rounded-sm border border-error-container">
          <span className="text-error-text font-label-caps text-[10px] uppercase tracking-wider">
            {event.timeLeft}
          </span>
        </div>
      </div>
      <div className="p-md flex justify-between items-center">
        <div>
          <h3 className="font-heading-md-mobile text-sm mb-1">{event.title}</h3>
          <p className="text-tx-secondary text-xs">Oleh: {event.host}</p>
        </div>
        <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-label-caps text-label-caps active:scale-90 transition-all">
          Lihat
        </button>
      </div>
    </div>
  );
}
