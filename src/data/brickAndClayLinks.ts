/**
 * BRICK & CLAY — CENTRALIZED LINKS & OUTLETS DIRECTORY
 * Source of truth for official URLs, delivery aggregators, phone numbers & outlet addresses.
 */

export const OFFICIAL_WEBSITE_URL = 'https://www.brickandclay.in/';
export const OFFICIAL_MENU_URL = 'https://www.brickandclay.in/menu';
export const INSTAGRAM_URL = 'https://www.instagram.com/brickandclay.in/?hl=en';
export const INSTAGRAM_HANDLE = '@brickandclay.in';
export const FACEBOOK_URL = 'https://facebook.com/brickandclay.bbsr';

export const ORDERING_LINKS = {
  swiggySahidNagar: 'https://www.swiggy.com/city/bhubaneswar/brick-and-clay-sahid-nagar-rest399790',
  zomatoSahidNagar: 'https://www.zomato.com/bhubaneswar/brick-and-clay-sahid-nagar-bhubaneshwar/order',
  zomatoGeneral: 'https://www.zomato.com/bhubaneswar',
  swiggyGeneral: 'https://www.swiggy.com/city/bhubaneswar',
  district: 'https://link.district.in',
  eazyDiner: 'https://www.eazydiner.com',
};

export interface RestaurantLocationItem {
  id: string;
  name: string;
  area: string;
  address: string;
  landmark?: string;
  phone: string;
  timings: string;
  googleMapsUrl: string;
  zomatoUrl: string;
  swiggyUrl: string;
  isFlagship: boolean;
}

export const RESTAURANT_LOCATIONS: RestaurantLocationItem[] = [
  {
    id: 'saheed-nagar',
    name: 'Saheed Nagar Flagship',
    area: 'Saheed Nagar',
    address: 'C-3, Ground Floor, Inox Block BMC Bhawani Mall, Saheed Nagar, Bhubaneswar, Odisha 751007',
    landmark: 'Inside BMC Bhawani Mall (Inox Block)',
    phone: '+91 79784 45822',
    timings: '12:00 PM – 10:30 PM Daily',
    googleMapsUrl: 'https://maps.google.com/?q=Brick+and+Clay+Saheed+Nagar+Bhubaneswar',
    zomatoUrl: ORDERING_LINKS.zomatoSahidNagar,
    swiggyUrl: ORDERING_LINKS.swiggySahidNagar,
    isFlagship: true,
  },
  {
    id: 'patia',
    name: 'KIIT Square Outlet',
    area: 'Patia',
    address: 'Plot No. 516/1755, A/2, Maruti Villa, 1st Floor, KIIT Square, Patia, Bhubaneswar, Odisha 751024',
    landmark: 'Near KIIT Square & Infocity Corridor',
    phone: '+91 78731 90926',
    timings: '12:00 PM – 10:30 PM Daily',
    googleMapsUrl: 'https://maps.google.com/?q=Brick+and+Clay+KIIT+Square+Patia+Bhubaneswar',
    zomatoUrl: ORDERING_LINKS.zomatoSahidNagar,
    swiggyUrl: ORDERING_LINKS.swiggySahidNagar,
    isFlagship: false,
  },
];

export const OUTLETS = RESTAURANT_LOCATIONS;
