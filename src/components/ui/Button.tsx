import React from 'react';
import { ArrowRight } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'text' | 'icon' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  href,
  target,
  rel,
  disabled = false,
  isLoading = false,
  className = '',
  ...props
}) => {
  // Base states: focus-visible, active scale, disabled opacity
  const baseClasses =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brick-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]';

  // Variant styles adhering strictly to the design system
  const variantClasses: Record<ButtonVariant, string> = {
    // Primary CTA: Signature Terracotta
    primary:
      'bg-brick-500 text-ivory-50 hover:bg-brick-600 active:bg-brick-700 shadow-subtle hover:shadow-elevated border border-brick-500',
    
    // Secondary CTA: Obsidian Charcoal
    secondary:
      'bg-charcoal-900 text-ivory-100 hover:bg-charcoal-800 active:bg-charcoal-950 shadow-subtle hover:shadow-elevated border border-charcoal-900',
    
    // Outline CTA: Architectural border
    outline:
      'bg-transparent text-charcoal-900 border border-clay-300 hover:border-charcoal-900 hover:bg-ivory-100 active:bg-clay-200',

    // Text CTA: Understated editorial with animated underline
    text:
      'bg-transparent text-charcoal-900 hover:text-brick-600 p-0 border-none rounded-none shadow-none group active:scale-100 font-semibold',

    // Icon CTA: Framed square/circle
    icon:
      'bg-ivory-50 text-charcoal-800 border border-clay-300 hover:border-brick-500 hover:text-brick-600 active:bg-clay-100 shadow-subtle',
  };

  // Size styles
  const sizeClasses: Record<ButtonSize, string> = {
    sm: variant === 'text' ? 'text-xs gap-1.5' : variant === 'icon' ? 'p-2 rounded-subtle' : 'text-xs px-3.5 py-2 tracking-editorial uppercase gap-1.5 rounded-subtle',
    md: variant === 'text' ? 'text-xs sm:text-sm gap-2' : variant === 'icon' ? 'p-2.5 rounded-subtle' : 'text-xs md:text-sm px-5 py-3 tracking-editorial uppercase gap-2 rounded-subtle',
    lg: variant === 'text' ? 'text-sm gap-2.5' : variant === 'icon' ? 'p-3 rounded-subtle' : 'text-sm px-7 py-3.5 tracking-editorial uppercase gap-2.5 rounded-subtle',
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      ) : (
        <>
          {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
          {children && (
            <span className={variant === 'text' ? 'border-b border-transparent group-hover:border-brick-600 transition-colors pb-0.5' : ''}>
              {children}
            </span>
          )}
          {variant === 'text' && !icon && (
            <ArrowRight className="w-3.5 h-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
          )}
          {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
        </>
      )}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} target={target} rel={rel} className={finalClasses}>
        {content}
      </a>
    );
  }

  return (
    <button disabled={disabled || isLoading} className={finalClasses} {...props}>
      {content}
    </button>
  );
};
