/* oxlint-disable react/only-export-components */
import React, { useState, useEffect } from 'react';
import { RouterContext, useRouter, type RoutePath } from './context';

export { useRouter, type RoutePath };

const normalizePath = (path: string): RoutePath => {
  const clean = path.split('?')[0].split('#')[0].toLowerCase();
  if (clean === '/menu') return '/menu';
  if (clean === '/about' || clean === '/story') return '/about';
  if (clean === '/gallery') return '/gallery';
  if (clean === '/contact' || clean === '/locations') return '/contact';
  return '/';
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<RoutePath>(() => {
    return normalizePath(window.location.pathname);
  });

  useEffect(() => {
    const handlePopState = () => {
      const normalized = normalizePath(window.location.pathname);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: RoutePath | string) => {
    const normalized = normalizePath(path);
    if (normalized !== currentPath || window.location.pathname !== normalized) {
      window.history.pushState({}, '', normalized);
      setCurrentPath(normalized);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  activeClassName?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  activeClassName = '',
  onClick,
  ...props
}) => {
  const { currentPath, navigate } = useRouter();
  const isInternal = href.startsWith('/') || href.startsWith('#');
  const normalizedHref = normalizePath(href);
  const isActive = isInternal && currentPath === normalizedHref;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && isInternal && !href.startsWith('#')) {
      e.preventDefault();
      navigate(href);
    }
  };

  const combinedClasses = `${className} ${isActive ? activeClassName : ''}`.trim();

  return (
    <a
      href={href}
      onClick={handleClick}
      className={combinedClasses}
      aria-current={isActive ? 'page' : undefined}
      {...props}
    >
      {children}
    </a>
  );
};
