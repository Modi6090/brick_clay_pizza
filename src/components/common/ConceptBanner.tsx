import React from 'react';
import { X, Layers } from 'lucide-react';

interface ConceptBannerProps {
  onOpenDesignSystem?: () => void;
  onDismiss?: () => void;
}

export const ConceptBanner: React.FC<ConceptBannerProps> = ({ onOpenDesignSystem, onDismiss }) => {
  return (
    <aside aria-label="Concept Disclaimer" className="w-full bg-charcoal-900 border-b border-charcoal-800 text-ivory-200 text-xs px-4 py-2 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="flex h-2 w-2 rounded-full bg-brick-500 animate-pulse shrink-0" />
          <span className="editorial-caps text-ivory-300 hidden sm:inline">Concept Exploration</span>
          <span className="text-charcoal-500 hidden sm:inline">•</span>
          <p className="text-charcoal-200 truncate">
            Editorial Redesign Concept Proposal for <strong className="text-ivory-100 font-medium">Brick &amp; Clay (Bhubaneswar)</strong>
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {onOpenDesignSystem && (
            <button
              onClick={onOpenDesignSystem}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-subtle bg-charcoal-800 hover:bg-brick-600 text-ivory-100 transition-colors text-[11px] font-sans font-medium"
            >
              <Layers className="w-3.5 h-3.5 text-brick-400" />
              <span>Design System Spec</span>
            </button>
          )}

          <button
            onClick={onDismiss}
            aria-label="Dismiss banner"
            className="text-charcoal-400 hover:text-ivory-100 p-0.5 rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
};
