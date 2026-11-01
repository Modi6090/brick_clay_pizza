import { createContext, useContext } from 'react';

export type RoutePath = '/' | '/menu' | '/about' | '/gallery' | '/contact';

export interface RouterContextType {
  currentPath: RoutePath;
  navigate: (path: RoutePath | string) => void;
}

export const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

export const useRouter = () => useContext(RouterContext);
