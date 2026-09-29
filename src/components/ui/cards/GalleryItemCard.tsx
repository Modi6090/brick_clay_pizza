import React from 'react';
import { ImageFrame, type AspectRatio } from '../ImageFrame';

export interface GalleryItemCardProps {
  imageSrc: string;
  title: string;
  category: string;
  aspectRatio?: AspectRatio;
  onClick?: () => void;
}

export const GalleryItemCard: React.FC<GalleryItemCardProps> = ({
  imageSrc,
  title,
  category,
  aspectRatio = '4:3',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer rounded-subtle overflow-hidden relative ${
        onClick ? 'cursor-zoom-in' : ''
      }`}
    >
      <ImageFrame
        src={imageSrc}
        alt={title}
        aspectRatio={aspectRatio}
        caption={title}
        badge={
          <span className="editorial-caps text-[10px] text-ivory-100 bg-charcoal-950/70 backdrop-blur-sm px-2.5 py-1 rounded-subtle border border-white/10">
            {category}
          </span>
        }
      />
    </div>
  );
};
