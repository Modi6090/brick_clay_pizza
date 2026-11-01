export type BrickAndClayCategory =
  | 'Veg Pizza'
  | 'Non-Veg Pizza'
  | 'Calzone'
  | 'Pasta'
  | 'Sides'
  | 'Dips';

export type BrickAndClayCategoryId =
  | 'all'
  | 'veg-pizza'
  | 'non-veg-pizza'
  | 'calzone'
  | 'pasta'
  | 'sides'
  | 'dips';

export type ImageSourceType = 'official' | 'client-approved' | 'reference' | 'none';

export interface BrickAndClayMenuItem {
  id: string;
  name: string;
  category: BrickAndClayCategory;
  categoryId: BrickAndClayCategoryId;
  dietary: 'veg' | 'non-veg';
  price?: number;
  description: string;
  ingredients?: string[];
  isSignature?: boolean;
  spicy?: boolean;
  image?: string;
  source: string;
  imageSource: ImageSourceType;
  imageApproved: boolean;
  italianName?: string;
}

export interface BrickAndClayCategoryInfo {
  id: BrickAndClayCategoryId;
  label: string;
  categoryName: BrickAndClayCategory;
  subtitle: string;
  italianTitle: string;
}

export type MenuCategoryId = 'pizza' | 'pasta' | 'calzone' | 'sides' | 'dessert' | 'drinks' | BrickAndClayCategoryId;

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
  price?: number;
  spicy?: boolean;
  notes?: string;
  image?: string;
  imageApproved?: boolean;
  imageSource?: ImageSourceType;
  isSignature?: boolean;
}

export interface MenuItemPreview {
  id: string;
  name: string;
  italianName?: string;
  category: string;
  description: string;
  dietary: 'veg' | 'non-veg';
  price?: number;
  isSignature?: boolean;
  ingredients: string[];
  image?: string;
  imageApproved?: boolean;
  imageSource?: ImageSourceType;
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

