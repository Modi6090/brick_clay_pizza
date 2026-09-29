import React from 'react';
import { Quote } from 'lucide-react';

export interface TestimonialCardProps {
  quote: string;
  dinerType?: string;
  sourceOutlet?: string;
  highlightedDish?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  dinerType = 'Neapolitan Pizza Enthusiast',
  sourceOutlet = 'Sahid Nagar Outlet',
  highlightedDish,
  className = '',
}) => {
  return (
    <article
      className={`p-6 sm:p-7 rounded-subtle border border-clay-300 bg-surface-primary shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between space-y-4 ${className}`}
    >
      <div className="space-y-3">
        {/* Editorial Quote Mark */}
        <Quote className="w-6 h-6 text-brick-500/70" />

        {/* Quote Content */}
        <p className="font-serif italic text-base sm:text-lg text-charcoal-800 leading-relaxed font-normal">
          "{quote}"
        </p>
      </div>

      {/* Attribution & Outlet */}
      <div className="pt-4 border-t border-clay-200/80 flex items-center justify-between text-xs">
        <div>
          <span className="font-sans font-semibold text-charcoal-900 block">
            {dinerType}
          </span>
          <span className="text-[11px] text-charcoal-500 font-sans tracking-wide">
            {sourceOutlet}
          </span>
        </div>

        {highlightedDish && (
          <span className="editorial-caps text-[9px] text-brick-600 bg-brick-50 px-2 py-0.5 rounded border border-brick-200">
            {highlightedDish}
          </span>
        )}
      </div>
    </article>
  );
};
