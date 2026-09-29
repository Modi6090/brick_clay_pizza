import type { LocationInfo, MenuItemPreview, CraftPillar } from '../types';

export const RESTAURANT_LOCATIONS: LocationInfo[] = [
  {
    id: 'sahid-nagar',
    name: 'Brick & Clay — Sahid Nagar',
    area: 'Sahid Nagar',
    address: 'Bhabani Mall (Inox Block), Sahid Nagar',
    landmark: 'Opposite Rama Devi Women\'s University Road',
    phone: '+91 674 254 8920',
    timings: '12:00 PM – 10:45 PM Daily',
    googleMapsUrl: 'https://maps.google.com/?q=Brick+and+Clay+Sahid+Nagar+Bhubaneswar',
    swiggyUrl: 'https://www.swiggy.com/city/bhubaneswar',
    zomatoUrl: 'https://www.zomato.com/bhubaneswar',
    isFlagship: true,
  },
  {
    id: 'patia',
    name: 'Brick & Clay — Patia',
    area: 'Patia / KIIT Road',
    address: 'KIIT Road, Patia',
    landmark: 'Near KIIT University Campus',
    phone: '+91 674 272 1430',
    timings: '12:30 PM – 11:00 PM Daily',
    googleMapsUrl: 'https://maps.google.com/?q=Brick+and+Clay+Patia+Bhubaneswar',
    swiggyUrl: 'https://www.swiggy.com/city/bhubaneswar',
    zomatoUrl: 'https://www.zomato.com/bhubaneswar',
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

export const SIGNATURE_PREVIEWS: MenuItemPreview[] = [
  {
    id: 'margherita-2',
    name: 'Margherita 2.0',
    italianName: 'La Vera Margherita',
    category: 'pizza',
    description: 'San Marzano tomato pulp, fresh buffalo mozzarella, hand-torn sweet basil, cold-pressed extra virgin olive oil on blistered sourdough.',
    dietary: 'veg',
    isSignature: true,
    ingredients: ['San Marzano Tomato', 'Fior di Latte Mozzarella', 'Fresh Basil', 'EVOO'],
  },
  {
    id: 'fab-di-fungo',
    name: 'Fab di Fungo',
    italianName: 'Funghi Selvatici & Tartufo',
    category: 'pizza',
    description: 'Caramelized wild mushrooms, roasted garlic crema, mozzarella, thyme sprigs, and an aromatic drizzle of black truffle oil.',
    dietary: 'veg',
    isSignature: true,
    ingredients: ['Wild Mushrooms', 'Truffle Oil', 'Fior di Latte', 'Roasted Garlic Crema'],
  },
  {
    id: 'chilli-spinaci',
    name: 'Chilli Spinaci',
    italianName: 'Spinaci & Peperoncino',
    category: 'pizza',
    description: 'Tuscan sautéed baby spinach, charred bird\'s eye chili flakes, ricotta clouds, confit garlic, and smoked scamorza cheese.',
    dietary: 'veg',
    isSignature: false,
    ingredients: ['Baby Spinach', 'Crushed Chili', 'Smoked Scamorza', 'Garlic Confit'],
  },
  {
    id: 'artisanal-calzone',
    name: 'Wood-Fired Calzone Rustico',
    italianName: 'Calzone Farcito al Forno',
    category: 'calzone',
    description: 'Folded sourdough pocket stuffed with creamy ricotta, melted provolone, herbed roasted fillings, brushed with garlic herb butter.',
    dietary: 'veg',
    isSignature: false,
    ingredients: ['Folded Sourdough', 'Whole Milk Ricotta', 'Provolone', 'Herb Butter'],
  }
];
