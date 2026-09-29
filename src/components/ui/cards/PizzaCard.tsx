import React from 'react';
import { ImageFrame } from '../ImageFrame';
import { Badge } from '../../common/Badge';
import { Button } from '../Button';
import { PriceTag } from '../Typography';
import { Sparkles } from 'lucide-react';

export interface PizzaCardProps {
  name: string;
  italianName?: string;
  description: string;
  imageSrc: string;
  price?: string | number;
  dietary?: 'veg' | 'non-veg';
  isSignature?: boolean;
  ingredients: string[];
  onOrder?: () => void;
  onQuickView?: () => void;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({
  name,
  italianName,
  description,
  imageSrc,
  price,
  dietary = 'veg',
  isSignature = false,
  ingredients,
  onOrder,
  onQuickView,
}) => {
  return (
    <article className="group bg-surface-primary border border-clay-300 rounded-subtle overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between">
      {/* 1. Food Image Top */}
      <div className="relative">
        <ImageFrame
          src={imageSrc}
          alt={name}
          aspectRatio="16:9"
          badge={
            isSignature ? (
              <Badge variant="terracotta" size="sm">
                <Sparkles className="w-2.5 h-2.5 fill-current" /> Signature
              </Badge>
            ) : dietary === 'veg' ? (
              <Badge variant="olive" size="sm">
                Herbivore
              </Badge>
            ) : undefined
          }
        />
      </div>

      {/* 2. Content & Typography */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-serif text-xl sm:text-2xl font-medium text-charcoal-900 group-hover:text-brick-600 transition-colors">
              {name}
            </h3>
            {price && <PriceTag amount={price} />}
          </div>

          {italianName && (
            <span className="font-serif italic text-xs text-charcoal-500 block">
              {italianName}
            </span>
          )}

          <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light line-clamp-2">
            {description}
          </p>
        </div>

        {/* 3. Ingredients Tags */}
        <div className="pt-2 border-t border-clay-200/80">
          <div className="flex flex-wrap gap-1 mb-4">
            {ingredients.slice(0, 4).map((ing) => (
              <span
                key={ing}
                className="text-[10px] bg-clay-100/80 text-charcoal-700 px-2 py-0.5 rounded-subtle font-sans"
              >
                {ing}
              </span>
            ))}
          </div>

          {/* 4. Action */}
          <div className="flex items-center justify-between gap-2">
            {onQuickView && (
              <Button variant="text" size="sm" onClick={onQuickView}>
                Flavor Notes
              </Button>
            )}
            {onOrder && (
              <Button variant="primary" size="sm" onClick={onOrder} className="ml-auto">
                Select
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
