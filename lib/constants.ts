import {
  PoolIcon,
  CinemaIcon,
  WineIcon,
  WellnessIcon,
  ConciergeIcon,
  SmartHomeIcon,
  GarageIcon,
  GardenIcon,
  DistrictIcon,
  AirportIcon,
  ShoppingIcon,
  ParkIcon,
} from '@/components/icons';
import { Feature, FloorPlan, LocationHighlight, NavigationLink, Residence, FloorPosition } from '@/types';

export const SITE_NAME = 'Serenity Heights';
export const SITE_TAGLINE = 'Where elegance finds its home.';

export const NAV_LINKS: NavigationLink[] = [
  { label: 'Residences', href: '#residences' },
  { label: 'Features', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
];

export const FEATURES: Feature[] = [
  {
    id: 'pool',
    title: 'Infinity Pool',
    description: 'Rooftop sanctuary above the skyline.',
    icon: PoolIcon,
    image: '/images/gallery/pool.png',
  },
  {
    id: 'cinema',
    title: 'Private Cinema',
    description: 'Cinematic excellence, redefined.',
    icon: CinemaIcon,
    image: '/images/gallery/living.png',
  },
  {
    id: 'wine',
    title: 'Wine Cellar',
    description: 'For the discerning palate.',
    icon: WineIcon,
    image: '/images/gallery/kitchen.png',
  },
  {
    id: 'fitness',
    title: 'Wellness Center',
    description: 'Elevate your well-being.',
    icon: WellnessIcon,
    image: '/images/gallery/bathroom.png',
  },
  {
    id: 'concierge',
    title: '24/7 Concierge',
    description: 'Every wish, fulfilled.',
    icon: ConciergeIcon,
    image: '/images/gallery/view.png',
  },
  {
    id: 'smart',
    title: 'Smart Living',
    description: 'Intuitive automation.',
    icon: SmartHomeIcon,
    image: '/images/gallery/bedroom.png',
  },
  {
    id: 'parking',
    title: 'Private Garage',
    description: 'Secure. Electric-ready.',
    icon: GarageIcon,
    image: '/images/gallery/living.png',
  },
  {
    id: 'terrace',
    title: 'Sky Gardens',
    description: 'Nature meets panorama.',
    icon: GardenIcon,
    image: '/images/gallery/view.png',
  },
];

export const FLOOR_PLANS: FloorPlan[] = [
  {
    id: 'suite',
    name: 'The Suite',
    image: '/images/floor-plans/suite-floorplan.png',
    sqft: '1,800 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    price: 'From $1.2M',
  },
  {
    id: 'residence',
    name: 'The Residence',
    image: '/images/floor-plans/residance-floorplan.png',
    sqft: '2,800 sq ft',
    bedrooms: 3,
    bathrooms: 3,
    price: 'From $2.4M',
  },
  {
    id: 'penthouse',
    name: 'The Penthouse',
    image: '/images/floor-plans/penthouse-floorplan.png',
    sqft: '5,200 sq ft',
    bedrooms: 4,
    bathrooms: 5,
    price: 'From $4.5M',
  },
];

// Interactive building residences (3 types only)
export const RESIDENCES: Residence[] = [
  {
    id: 'penthouse',
    name: 'The Penthouse',
    floorPlanImage: '/images/floor-plans/penthouse-floorplan.png',
    sqft: '5,200 sq ft',
    bedrooms: 4,
    bathrooms: 5,
    price: 'From $4.5M',
    floors: '23-25',
    description: 'The crown jewel of Serenity Heights. Spanning three floors with panoramic city views, private terrace, and bespoke finishes throughout.',
  },
  {
    id: 'residence',
    name: 'The Residence',
    floorPlanImage: '/images/floor-plans/residance-floorplan.png',
    sqft: '2,800 sq ft',
    bedrooms: 3,
    bathrooms: 3,
    price: 'From $2.4M',
    floors: '10-22',
    description: 'Sophisticated urban living with thoughtful layouts, floor-to-ceiling windows and premium amenities.',
  },
  {
    id: 'suite',
    name: 'The Suite',
    floorPlanImage: '/images/floor-plans/suite-floorplan.png',
    sqft: '1,800 sq ft',
    bedrooms: 2,
    bathrooms: 2,
    price: 'From $1.2M',
    floors: '5-9',
    description: 'Elegant efficiency in a refined setting. Perfect for professionals seeking luxury in a compact footprint.',
  },
];

// Floor marker positions (% from top of building image) - only 1 visible at a time
export const FLOOR_POSITIONS: FloorPosition[] = [
  { id: 'penthouse', top: 18, label: 'Penthouse' },
  { id: 'residence', top: 45, label: 'Residence' },
  { id: 'suite', top: 72, label: 'Suite' },
];

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  {
    id: 'downtown',
    name: 'Financial District',
    distance: '5 min',
    icon: DistrictIcon,
  },
  {
    id: 'airport',
    name: 'International Airport',
    distance: '20 min',
    icon: AirportIcon,
  },
  {
    id: 'shopping',
    name: 'Luxury Shopping',
    distance: '3 min walk',
    icon: ShoppingIcon,
  },
  {
    id: 'park',
    name: 'Central Park',
    distance: '2 min walk',
    icon: ParkIcon,
  },
];

export const GALLERY_IMAGES = [
  { id: '1', src: '/images/gallery/living.png', alt: 'Luxury Living Room', featured: true },
  { id: '2', src: '/images/gallery/kitchen.png', alt: 'Gourmet Kitchen' },
  { id: '3', src: '/images/gallery/bedroom.png', alt: 'Master Bedroom' },
  { id: '4', src: '/images/gallery/bathroom.png', alt: 'Spa Bathroom' },
  { id: '5', src: '/images/gallery/view.png', alt: 'Panoramic City View' },
  { id: '6', src: '/images/gallery/pool.png', alt: 'Infinity Pool' },
];
