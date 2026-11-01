import type { LocationInfo, MenuItemPreview, CraftPillar } from '../types';
import {
  OFFICIAL_WEBSITE_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  ORDERING_LINKS,
  OUTLETS,
} from './brickAndClayLinks';
import { SIGNATURE_PICKS } from './brickAndClayMenu';

export { OFFICIAL_WEBSITE_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, ORDERING_LINKS, OUTLETS };

export const RESTAURANT_LOCATIONS: LocationInfo[] = [
  {
    id: 'saheed-nagar',
    name: 'Brick & Clay — Saheed Nagar',
    area: 'Saheed Nagar',
    address: 'C-3, Ground Floor, Inox Block, BMC Bhawani Mall, Saheed Nagar',
    landmark: 'Bhubaneswar, Odisha 751007',
    phone: '+91 79784 45822',
    timings: '12:00 PM – 10:30 PM Daily',
    googleMapsUrl: 'https://maps.google.com/?q=Brick+and+Clay+Saheed+Nagar+Bhubaneswar',
    swiggyUrl: ORDERING_LINKS.swiggySahidNagar,
    zomatoUrl: ORDERING_LINKS.zomatoSahidNagar,
    isFlagship: true,
  },
  {
    id: 'patia',
    name: 'Brick & Clay — KIIT Square, Patia',
    area: 'Patia / KIIT Square',
    address: 'Plot No. 516/1755, A/2, Maruti Villa, 1st Floor, KIIT Square, Patia',
    landmark: 'PS-Infocity, Bhubaneswar, Odisha 751024',
    phone: '+91 78731 90926',
    timings: '12:00 PM – 10:30 PM Daily',
    googleMapsUrl: 'https://maps.google.com/?q=Brick+and+Clay+KIIT+Square+Patia+Bhubaneswar',
    swiggyUrl: ORDERING_LINKS.swiggySahidNagar,
    zomatoUrl: ORDERING_LINKS.zomatoSahidNagar,
    isFlagship: false,
  },
];

export const CRAFT_PILLARS: CraftPillar[] = [
  {
    title: '48-Hour Cold Fermentation',
    subtitle: 'Digestible & Puffy Cornicione',
    description: 'Our dough matures slowly across two days, yielding a light, airy crust with distinct Neapolitan leopard spotting that is gentle on the palate.',
    iconName: 'Clock',
  },
  {
    title: '450°C Wood-Fired Clay Dome',
    subtitle: '90-Second Flash Bake',
    description: 'Blistering heat locks in moisture, blister-chars the sourdough crown, and gently melts fresh mozzarella without drying the crumb.',
    iconName: 'Flame',
  },
  {
    title: 'San Marzano & Fior di Latte',
    subtitle: 'Honest Italian Foundations',
    description: 'Crushed sweet plum tomatoes, cold-pressed olive oils, and fresh artisanal cheeses balanced with garden basil and slow-simmered sauces.',
    iconName: 'Sparkles',
  },
];

export const SIGNATURE_PREVIEWS: MenuItemPreview[] = SIGNATURE_PICKS.map((item) => ({
  id: item.id,
  name: item.name,
  italianName: item.italianName,
  category: item.category,
  description: item.description,
  dietary: item.dietary,
  price: item.price,
  isSignature: item.isSignature,
  ingredients: item.ingredients || [],
  image: item.image,
  imageApproved: item.imageApproved,
  imageSource: item.imageSource,
}));
