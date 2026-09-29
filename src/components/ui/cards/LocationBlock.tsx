import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '../Button';
import type { LocationInfo } from '../../../types';

export interface LocationBlockProps {
  location: LocationInfo;
  isActive?: boolean;
  onSelect?: () => void;
  onReserve?: () => void;
  className?: string;
}

export const LocationBlock: React.FC<LocationBlockProps> = ({
  location,
  isActive = false,
  onSelect,
  onReserve,
  className = '',
}) => {
  return (
    <article
      onClick={onSelect}
      className={`p-7 sm:p-8 rounded-subtle border transition-all duration-300 flex flex-col justify-between ${
        isActive
          ? 'bg-surface-primary border-brick-500 shadow-elevated ring-1 ring-brick-500/20'
          : 'bg-surface-primary/70 border-clay-300 shadow-subtle hover:border-clay-400'
      } ${className}`}
    >
      <div className="space-y-6">
        {/* Header Tag & Outlet Area */}
        <div className="flex items-center justify-between">
          <span className="editorial-caps text-[11px] text-brick-600 font-semibold">
            {location.area} Outlet
          </span>
          {location.isFlagship && (
            <span className="text-[10px] uppercase font-sans tracking-editorial px-2.5 py-0.5 rounded-pill bg-clay-200 text-charcoal-800 font-medium">
              Flagship Mall
            </span>
          )}
        </div>

        {/* Outlet Title */}
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900">
          {location.name}
        </h3>

        {/* Operational Details */}
        <div className="space-y-3 text-sm text-charcoal-700">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-brick-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-charcoal-900">{location.address}</p>
              <p className="text-xs text-charcoal-500">{location.landmark}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-brick-600 shrink-0" />
            <span className="text-xs sm:text-sm">{location.timings}</span>
          </div>

          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-brick-600 shrink-0" />
            <a
              href={`tel:${location.phone.replace(/\s+/g, '')}`}
              className="text-xs sm:text-sm hover:text-brick-600 transition-colors underline-offset-4 hover:underline"
            >
              {location.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 mt-6 border-t border-clay-200/80 flex flex-wrap items-center gap-3">
        {onReserve && (
          <Button
            variant="primary"
            size="sm"
            onClick={onReserve}
            icon={<Calendar className="w-3.5 h-3.5" />}
          >
            Book Table
          </Button>
        )}

        <Button
          variant="outline"
          size="sm"
          href={location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          icon={<Navigation className="w-3.5 h-3.5 text-brick-600" />}
          iconPosition="left"
        >
          Directions
        </Button>

        <a
          href={location.zomatoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] text-charcoal-500 hover:text-charcoal-900 transition-colors ml-auto font-sans"
        >
          Delivery <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
};
