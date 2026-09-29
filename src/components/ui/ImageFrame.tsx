import React from 'react';

export type AspectRatio = '16:9' | '4:3' | '3:4' | '1:1';

interface ImageFrameProps {
  src: string;
  alt: string;
  aspectRatio?: AspectRatio;
  caption?: string;
  badge?: React.ReactNode;
  className?: string;
  priority?: boolean;
}

export const ImageFrame: React.FC<ImageFrameProps> = ({
  src,
  alt,
  aspectRatio = '4:3',
  caption,
  badge,
  className = '',
  priority = false,
}) => {
  const aspectClasses: Record<AspectRatio, string> = {
    '16:9': 'aspect-[16/9]',
    '4:3': 'aspect-[4/3]',
    '3:4': 'aspect-[3/4]',
    '1:1': 'aspect-square',
  };

  return (
    <figure className={`group relative overflow-hidden rounded-subtle border border-clay-300 bg-charcoal-950 ${className}`}>
      {/* Container with aspect ratio */}
      <div className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden`}>
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] will-change-transform"
        />

        {/* Natural high-contrast subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Optional floating badge */}
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            {badge}
          </div>
        )}

        {/* Optional Bottom Caption Overlay */}
        {caption && (
          <figcaption className="absolute bottom-3 left-3 right-3 text-xs text-ivory-100 font-sans tracking-wide bg-charcoal-950/75 backdrop-blur-sm px-3 py-1.5 rounded-subtle border border-white/10">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
};
