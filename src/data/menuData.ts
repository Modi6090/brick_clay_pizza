import type { FullMenuItem, MenuCategoryInfo } from '../types';

export const MENU_CATEGORIES: MenuCategoryInfo[] = [
  {
    id: 'pizza',
    label: 'Wood-Fired Pizza',
    subtitle: 'Slow-fermented sourdough flash-baked in our 450°C clay dome',
    italianTitle: 'Le Pizze al Forno a Legna',
  },
  {
    id: 'pasta',
    label: 'Artisanal Pasta',
    subtitle: 'Classic Italian ribbons and penne tossed with authentic emulsions',
    italianTitle: 'La Pasta Fatta a Mano',
  },
  {
    id: 'calzone',
    label: 'Folded Calzones',
    subtitle: 'Stuffed sourdough pockets baked golden with melted Italian cheeses',
    italianTitle: 'I Calzoni Ripieni',
  },
  {
    id: 'sides',
    label: 'Sides & Focaccia',
    subtitle: 'Wood-charred sourdough breads, garlic crusts, and house dips',
    italianTitle: 'I Contorni & Le Focacce',
  },
  {
    id: 'dessert',
    label: 'Dolci & Desserts',
    subtitle: 'Sweet house specialties, fluffy mini pancakes, and Italian classics',
    italianTitle: 'I Dolci Tradizionali',
  },
  {
    id: 'drinks',
    label: 'Craft Beverages',
    subtitle: 'House-brewed iced teas, citrus coolers, and authentic espresso',
    italianTitle: 'Le Bevande & Il Caffè',
  },
];

export const FULL_MENU_ITEMS: FullMenuItem[] = [
  // ==========================================
  // 1. PIZZAS
  // ==========================================
  {
    id: 'pizza-margherita',
    name: 'Margherita 2.0',
    italianName: 'La Vera Margherita Napoletana',
    category: 'pizza',
    dietary: 'veg',
    description:
      'Crushed San Marzano plum tomato pulp, fresh buffalo fior di latte, hand-torn sweet basil, and a finishing swirl of cold-pressed extra virgin olive oil over slow-fermented sourdough.',
    ingredients: ['San Marzano Tomato', 'Buffalo Fior di Latte', 'Fresh Basil', 'Cold-Pressed EVOO'],
  },
  {
    id: 'pizza-fab-di-funghi',
    name: 'Fab di Funghi',
    italianName: 'Funghi Selvatici & Crema al Tartufo',
    category: 'pizza',
    dietary: 'veg',
    description:
      'Caramelized woodland mushrooms, roasted garlic white crema, fresh mozzarella, fragrant thyme, and an aromatic drizzle of white truffle oil on blistered crust.',
    ingredients: ['Wild Forest Mushrooms', 'White Truffle Oil', 'Roasted Garlic Crema', 'Fior di Latte', 'Thyme'],
  },
  {
    id: 'pizza-pesto-pollo',
    name: 'Pesto Pollo',
    italianName: 'Pollo Arrosto & Pesto Genovese',
    category: 'pizza',
    dietary: 'non-veg',
    description:
      'Herb-marinated roast chicken breast slivers, vibrant emerald basil pesto swirl, smoked scamorza, and toasted pine nuts with shavings of aged parmesan.',
    ingredients: ['Herb Roast Chicken', 'Genovese Basil Pesto', 'Smoked Scamorza', 'Toasted Pine Nuts'],
  },
  {
    id: 'pizza-chilli-spinaci',
    name: 'Chilli di Spinaci',
    italianName: 'Spinaci Saltati & Peperoncino',
    category: 'pizza',
    dietary: 'veg',
    spicy: true,
    description:
      'Tuscan sautéed baby spinach, charred bird\'s eye chili flakes, delicate dollops of ricotta, roasted garlic confit, and smoked mozzarella cheese.',
    ingredients: ['Tuscan Spinach', 'Bird\'s Eye Chili', 'Ricotta', 'Smoked Mozzarella', 'Garlic Confit'],
  },
  {
    id: 'pizza-verdure-exotica',
    name: 'Verdure Exotica',
    italianName: 'Ortolana Mista al Forno',
    category: 'pizza',
    dietary: 'veg',
    description:
      'Wood-roasted bell peppers, zucchini ribbons, kalamata olives, marinated artichoke hearts, sweet basil, and fresh mozzarella over plum tomato sauce.',
    ingredients: ['Roasted Peppers', 'Zucchini', 'Kalamata Olives', 'Artichoke', 'Fior di Latte'],
  },
  {
    id: 'pizza-marinara',
    name: 'Marinara Tradizionale',
    italianName: 'La Marinara Antica',
    category: 'pizza',
    dietary: 'veg',
    description:
      'The timeless Neapolitan original. Rich San Marzano tomato pulp, thin slivers of fresh garlic, wild Sicilian mountain oregano, and cold-pressed extra virgin olive oil.',
    ingredients: ['San Marzano Tomato', 'Garlic Slivers', 'Sicilian Oregano', 'Cold-Pressed EVOO'],
  },
  {
    id: 'pizza-quattro-formaggi',
    name: 'Quattro Formaggi',
    italianName: 'Quattro Formaggi al Forno',
    category: 'pizza',
    dietary: 'veg',
    description:
      'A harmonious white base of four artisanal Italian cheeses: creamy fior di latte, aged gorgonzola, smoked scamorza, and shaved parmigiano-reggiano.',
    ingredients: ['Fior di Latte', 'Gorgonzola', 'Smoked Scamorza', 'Parmigiano-Reggiano'],
  },

  // ==========================================
  // 2. PASTAS
  // ==========================================
  {
    id: 'pasta-funghi',
    name: 'Fettuccine ai Funghi',
    italianName: 'Fettuccine ai Funghi di Bosco',
    category: 'pasta',
    dietary: 'veg',
    description:
      'Handcrafted ribbons tossed with sautéed cremini and woodland mushrooms in a light parmesan butter emulsion, finished with cracked black pepper and thyme.',
    ingredients: ['Handcrafted Fettuccine', 'Cremini Mushrooms', 'Parmigiano-Reggiano', 'Butter Emulsion'],
  },
  {
    id: 'pasta-arrabbiata',
    name: 'Penne all\'Arrabbiata',
    italianName: 'Penne all\'Arrabbiata Piccante',
    category: 'pasta',
    dietary: 'veg',
    spicy: true,
    description:
      'Al dente penne simmered in a piquant sauce of crushed sweet plum tomatoes, toasted garlic, fiery red chili flakes, and torn sweet basil.',
    ingredients: ['Penne Rigate', 'Plum Tomato Sugo', 'Red Chili Flakes', 'Toasted Garlic', 'Basil'],
  },
  {
    id: 'pasta-aglio-olio',
    name: 'Spaghetti Aglio Olio e Peperoncino',
    italianName: 'Spaghetti Tradizionali Aglio & Olio',
    category: 'pasta',
    dietary: 'veg',
    spicy: true,
    description:
      'The pure Roman standard: spaghetti gently tossed in golden extra virgin olive oil with slowly browned garlic slivers, chili flakes, and fresh parsley.',
    ingredients: ['Spaghetti', 'Cold-Pressed EVOO', 'Garlic Slivers', 'Red Chili Flakes', 'Parsley'],
  },
  {
    id: 'pasta-pesto',
    name: 'Genovese Pesto Pasta',
    italianName: 'Pasta al Pesto di Basilico',
    category: 'pasta',
    dietary: 'veg',
    description:
      'Fresh pasta folded into a fragrant emulsion of ground Genovese basil leaves, toasted pine nuts, extra virgin olive oil, and aged pecorino cheese.',
    ingredients: ['Fresh Pasta', 'Fresh Basil Pesto', 'Toasted Pine Nuts', 'Aged Pecorino', 'EVOO'],
  },

  // ==========================================
  // 3. CALZONES
  // ==========================================
  {
    id: 'calzone-pollo',
    name: 'Calzone al Pollo',
    italianName: 'Calzone Farcito con Pollo',
    category: 'calzone',
    dietary: 'non-veg',
    description:
      'Folded sourdough pocket stuffed with herb-roasted chicken breast, whipped ricotta, melted mozzarella, and fresh herbs, brushed with garlic butter.',
    ingredients: ['Folded Sourdough', 'Roast Chicken', 'Whipped Ricotta', 'Mozzarella', 'Herb Butter'],
  },
  {
    id: 'calzone-maiale',
    name: 'Calzone al Maiale & Pancetta',
    italianName: 'Calzone con Pancetta Affumicata',
    category: 'calzone',
    dietary: 'non-veg',
    description:
      'Hand-folded sourdough envelope filled with wood-charred bacon, provolone, whole-milk ricotta, and cracked pepper, baked until bubbly.',
    ingredients: ['Folded Sourdough', 'Smoked Bacon', 'Provolone', 'Whole-Milk Ricotta'],
  },
  {
    id: 'calzone-rustico',
    name: 'Calzone Rustico alle Verdure',
    italianName: 'Calzone Tradizionale Vegetariano',
    category: 'calzone',
    dietary: 'veg',
    description:
      'Puffy folded crust loaded with sautéed baby spinach, caramelized mushrooms, ricotta clouds, and scamorza cheese with a side of warm marinara.',
    ingredients: ['Folded Sourdough', 'Baby Spinach', 'Woodland Mushrooms', 'Ricotta', 'Scamorza'],
  },

  // ==========================================
  // 4. SIDES & FOCACCIA
  // ==========================================
  {
    id: 'side-focaccia',
    name: 'Rosemary & Sea Salt Focaccia',
    italianName: 'Focaccia Ligure al Rosmarino',
    category: 'sides',
    dietary: 'veg',
    description:
      'Puffy, dimpled sourdough focaccia fresh from the wood oven, glistening with extra virgin olive oil, fragrant garden rosemary, and coarse sea salt crystals.',
    ingredients: ['Sourdough Focaccia', 'Fresh Rosemary', 'Maldon Sea Salt', 'Cold-Pressed EVOO'],
  },
  {
    id: 'side-cheesy-garlic-bread',
    name: 'Cheesy Garlic Bread Rustico',
    italianName: 'Pane all\'Aglio Gratinato',
    category: 'sides',
    dietary: 'veg',
    description:
      'Artisanal sourdough loaf brushed with slow-confit garlic butter, parsley, and smothered in molten mozzarella, baked in the clay oven.',
    ingredients: ['Artisan Loaf', 'Garlic Confit Butter', 'Melted Mozzarella', 'Parsley'],
  },
  {
    id: 'side-smoked-bacon',
    name: 'Smoked Bacon Rashers',
    italianName: 'Pancetta Croccante al Forno',
    category: 'sides',
    dietary: 'non-veg',
    description:
      'Crisp, wood-charred smoked bacon strips baked with fragrant black pepper and a touch of rosemary glaze.',
    ingredients: ['Smoked Bacon', 'Black Pepper', 'Rosemary Glaze'],
  },
  {
    id: 'side-house-dips',
    name: 'Artisan Dip Duo',
    italianName: 'Duo di Salse della Casa',
    category: 'sides',
    dietary: 'veg',
    description:
      'Warm slow-simmered San Marzano marinara dip paired with fresh emerald basil pesto dip, served with wood-fired crust bites.',
    ingredients: ['San Marzano Marinara', 'Basil Pesto', 'Crust Bites'],
  },

  // ==========================================
  // 5. DESSERTS
  // ==========================================
  {
    id: 'dessert-mini-pancakes',
    name: 'Handcrafted Mini Pancakes',
    italianName: 'Frittelle Dolci della Casa',
    category: 'dessert',
    dietary: 'veg',
    description:
      'Plump, golden bite-sized mini pancakes warm off the griddle, drizzled with rich chocolate hazelnut glaze and dusted with powdered sugar.',
    ingredients: ['Fluffy Pancakes', 'Chocolate Hazelnut Glaze', 'Powdered Sugar'],
  },
  {
    id: 'dessert-tiramisu',
    name: 'Classic Venetian Tiramisù',
    italianName: 'Tiramisù Tradizionale al Mascarpone',
    category: 'dessert',
    dietary: 'veg',
    description:
      'Delicate savoiardi ladyfingers steeped in bold Italian espresso, layered with velvety whipped mascarpone crema and dusted with bitter cocoa powder.',
    ingredients: ['Savoiardi Ladyfingers', 'Italian Espresso', 'Mascarpone Crema', 'Cocoa Powder'],
  },
  {
    id: 'dessert-nutella-calzone',
    name: 'Wood-Fired Nutella Calzone',
    italianName: 'Calzoncino Dolce alla Nutella',
    category: 'dessert',
    dietary: 'veg',
    description:
      'Warm folded sourdough pocket brimming with molten chocolate hazelnut spread and crushed toasted almonds, dusted with confectioners sugar.',
    ingredients: ['Folded Sourdough', 'Nutella', 'Toasted Almonds', 'Icing Sugar'],
  },

  // ==========================================
  // 6. DRINKS & BEVERAGES
  // ==========================================
  {
    id: 'drinks-lemon-iced-tea',
    name: 'House Brewed Lemon Iced Tea',
    italianName: 'Tè Freddo al Limone',
    category: 'drinks',
    dietary: 'veg',
    description:
      'Slow-steeped loose-leaf black tea infused with fresh citrus lemon juice and sweet garden mint, served crisp over ice.',
    ingredients: ['Steeped Black Tea', 'Fresh Lemon Juice', 'Wild Mint', 'Cane Sugar'],
  },
  {
    id: 'drinks-peach-basil-tea',
    name: 'Peach & Sweet Basil Iced Tea',
    italianName: 'Tè Freddo Pesca & Basilico',
    category: 'drinks',
    dietary: 'veg',
    description:
      'Aromatic chilled tea infused with sweet peach nectar and hand-slapped fresh basil leaves, offering an Italian summer refreshment.',
    ingredients: ['Chilled Black Tea', 'Peach Nectar', 'Fresh Basil Leaves'],
  },
  {
    id: 'drinks-mint-cooler',
    name: 'Italian Mint & Citrus Cooler',
    italianName: 'Limonata Artigianale alla Menta',
    category: 'drinks',
    dietary: 'veg',
    description:
      'Muddled garden mint, freshly squeezed key lime, and sparkling soda with a hint of raw brown sugar.',
    ingredients: ['Muddled Mint', 'Key Lime Juice', 'Sparkling Soda', 'Raw Sugar'],
  },
  {
    id: 'drinks-espresso',
    name: 'Italian Roast Espresso & Cold Brew',
    italianName: 'Caffè Espresso Italiano',
    category: 'drinks',
    dietary: 'veg',
    description:
      'Authentic Italian dark-roast espresso extracted with thick crema, also available served as a smooth 16-hour slow cold brew.',
    ingredients: ['Arabica & Robusta Blend', 'Slow-Extracted Crema'],
  },
];
