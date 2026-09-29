import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'terracotta' | 'charcoal' | 'olive' | 'ivory';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'terracotta',
  size = 'md',
  className = '',
}) => {
  const variantStyles = {
    terracotta: 'bg-brick-50 text-brick-700 border-brick-200/80',
    charcoal: 'bg-charcoal-900 text-ivory-100 border-charcoal-800',
    olive: 'bg-olive-50 text-olive-700 border-olive-200/80',
    ivory: 'bg-ivory-100 text-charcoal-700 border-clay-200',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2.5 py-0.5 tracking-loose-caps',
    md: 'text-xs px-3 py-1 tracking-editorial',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-sans font-medium uppercase border rounded-full transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </span>
  );
};
