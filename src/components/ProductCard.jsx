import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden flex flex-col active:scale-[0.97] transition-all">
      <div className="relative aspect-square">
        <img
          className="w-full h-full object-cover"
          src={product.image}
          alt={product.alt}
        />
        <div className="absolute bottom-2 left-2 bg-success-tint px-2 py-0.5 rounded-sm border border-success-text/20">
          <span className="text-success-text font-label-caps text-[10px]">
            {product.fee}
          </span>
        </div>
      </div>
      <div className="p-md">
        <h3 className="font-heading-md-mobile text-sm mb-1">{product.title}</h3>
        <p className="text-tx-secondary text-xs">{product.price}</p>
      </div>
    </div>
  );
}
