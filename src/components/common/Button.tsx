import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'clay';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  target?: string;
  rel?: string;
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
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-brick-500/30 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-2 tracking-editorial uppercase gap-1.5 rounded-soft',
    md: 'text-xs md:text-sm px-5 py-3 tracking-editorial uppercase gap-2 rounded-soft',
    lg: 'text-sm px-7 py-3.5 tracking-editorial uppercase gap-2.5 rounded-soft',
  };

  const variantStyles = {
    primary:
      'bg-brick-500 text-ivory-50 hover:bg-brick-600 shadow-sm hover:shadow-md border border-brick-500',
    secondary:
      'bg-charcoal-900 text-ivory-100 hover:bg-charcoal-800 shadow-sm hover:shadow-md border border-charcoal-900',
    outline:
      'bg-transparent text-charcoal-900 border border-charcoal-700/30 hover:border-charcoal-900 hover:bg-ivory-100',
    clay:
      'bg-clay-100 text-charcoal-900 border border-clay-300 hover:bg-clay-200/80',
    ghost:
      'bg-transparent text-charcoal-800 hover:text-brick-600 hover:bg-ivory-200/50',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
