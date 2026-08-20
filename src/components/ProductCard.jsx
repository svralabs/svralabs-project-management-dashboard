import React from 'react';

export default function ProductCard({ imageUrl, title, fee }) {
  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col active:scale-[0.97] transition-all">
      <div className="relative aspect-square">
        <img className="w-full h-full object-cover" src={imageUrl} alt={title} />
        {fee && (
          <div className="absolute bottom-2 left-2 bg-success-tint px-2 py-0.5 rounded-sm border border-success-text/20">
            <span className="text-success-text font-label-caps text-[10px]">+Fee {fee}%</span>
          </div>
        )}
      </div>
      <div className="p-md">
        <h3 className="font-heading-md-mobile text-sm mb-1">{title}</h3>
      </div>
    </div>
  );
}
