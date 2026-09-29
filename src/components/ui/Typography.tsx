import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export const HeroHeading: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'h1',
}) => {
  return (
    <Component className={`heading-hero text-charcoal-900 ${className}`}>
      {children}
    </Component>
  );
};

export const H1: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'h1',
}) => {
  return (
    <Component className={`heading-1 text-charcoal-900 ${className}`}>
      {children}
    </Component>
  );
};

export const H2: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'h2',
}) => {
  return (
    <Component className={`heading-2 text-charcoal-900 ${className}`}>
      {children}
    </Component>
  );
};

export const H3: React.FC<TypographyProps> = ({
  children,
  className = '',
  as: Component = 'h3',
}) => {
  return (
    <Component className={`heading-3 text-charcoal-900 ${className}`}>
      {children}
    </Component>
  );
};

export const BodyText: React.FC<TypographyProps & { size?: 'sm' | 'md' | 'lg' }> = ({
  children,
  size = 'md',
  className = '',
  as: Component = 'p',
}) => {
  const sizeClasses = {
    sm: 'text-xs text-charcoal-600 leading-normal font-light',
    md: 'body-editorial',
    lg: 'text-base sm:text-lg text-charcoal-700 leading-relaxed font-light',
  };

  return (
    <Component className={`${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
};

export const Caption: React.FC<TypographyProps & { uppercase?: boolean }> = ({
  children,
  uppercase = true,
  className = '',
  as: Component = 'span',
}) => {
  return (
    <Component
      className={`text-caption ${
        uppercase ? 'uppercase tracking-editorial text-[11px]' : ''
      } ${className}`}
    >
      {children}
    </Component>
  );
};

export interface PriceTagProps {
  amount: string | number;
  currency?: string;
  className?: string;
  children?: React.ReactNode;
}

export const PriceTag: React.FC<PriceTagProps> = ({
  currency = '₹',
  amount,
  className = '',
}) => {
  return (
    <span className={`price-tag inline-flex items-baseline gap-0.5 ${className}`}>
      <span className="text-xs font-sans text-charcoal-500 font-normal">{currency}</span>
      <span>{amount}</span>
    </span>
  );
};

export const EditorialQuote: React.FC<TypographyProps & { author?: string; role?: string }> = ({
  children,
  author,
  role,
  className = '',
}) => {
  return (
    <blockquote className={`border-l-2 border-brick-500 pl-4 py-1 space-y-2 ${className}`}>
      <p className="font-serif italic text-lg sm:text-xl text-charcoal-800 leading-relaxed">
        "{children}"
      </p>
      {(author || role) && (
        <footer className="text-xs font-sans text-charcoal-500 tracking-editorial uppercase">
          {author && <strong className="text-charcoal-800 font-semibold">{author}</strong>}
          {role && <span className="ml-1 text-charcoal-400">&bull; {role}</span>}
        </footer>
      )}
    </blockquote>
  );
};
