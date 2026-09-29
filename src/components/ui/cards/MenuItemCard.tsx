import React from 'react';
import { PriceTag } from '../Typography';

export interface MenuItemCardProps {
  name: string;
  italianName?: string;
  description: string;
  price?: string | number;
  dietary?: 'veg' | 'non-veg';
  isSignature?: boolean;
  ingredients?: string[];
  className?: string;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({
  name,
  italianName,
  description,
  price,
  dietary = 'veg',
  isSignature = false,
  ingredients = [],
  className = '',
}) => {
  return (
    <div
      className={`group py-4 border-b border-clay-200/80 hover:border-clay-400 transition-colors ${className}`}
    >
      {/* Title + Dotted Leader + Price */}
      <div className="flex items-baseline justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <h4 className="font-serif text-lg sm:text-xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
            {name}
          </h4>
          {isSignature && (
            <span className="text-[10px] uppercase font-sans tracking-editorial text-brick-600 font-semibold">
              Signature
            </span>
          )}
          {dietary === 'veg' && (
            <span className="w-1.5 h-1.5 rounded-full bg-olive-500 shrink-0" title="Vegetarian" />
          )}
        </div>

        {/* Dotted Leader */}
        <div className="hidden sm:block flex-1 border-b border-dotted border-clay-400 mx-2 mb-1 opacity-40 group-hover:opacity-80 transition-opacity" />

        {price && <PriceTag amount={price} className="shrink-0" />}
      </div>

      {/* Italian subtitle */}
      {italianName && (
        <span className="font-serif italic text-xs text-charcoal-500 block mt-0.5">
          {italianName}
        </span>
      )}

      {/* Description */}
      <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light mt-1 max-w-xl">
        {description}
      </p>

      {/* Ingredients list */}
      {ingredients.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {ingredients.map((ing) => (
            <span
              key={ing}
              className="text-[10px] text-charcoal-500 bg-clay-100/70 px-1.5 py-0.5 rounded font-sans"
            >
              {ing}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
