export type MenuCategoryId = 'pizza' | 'pasta' | 'calzone' | 'sides' | 'dessert' | 'drinks';

export interface LocationInfo {
  id: string;
  name: string;
  area: string;
  address: string;
  landmark: string;
  phone: string;
  timings: string;
  googleMapsUrl: string;
  swiggyUrl: string;
  zomatoUrl: string;
  isFlagship?: boolean;
}

export interface FullMenuItem {
  id: string;
  name: string;
  italianName?: string;
  category: MenuCategoryId;
  description: string;
  ingredients: string[];
  dietary: 'veg' | 'non-veg';
  spicy?: boolean;
  notes?: string;
}

export interface MenuItemPreview {
  id: string;
  name: string;
  italianName?: string;
  category: 'pizza' | 'pasta' | 'calzone' | 'dessert' | 'sides';
  description: string;
  dietary: 'veg' | 'non-veg';
  isSignature?: boolean;
  ingredients: string[];
}

export interface CraftPillar {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}

export interface MenuCategoryInfo {
  id: MenuCategoryId;
  label: string;
  subtitle: string;
  italianTitle: string;
}
