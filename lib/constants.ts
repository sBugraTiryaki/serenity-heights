import {
  Waves,
  Film,
  Wine,
  Dumbbell,
  ConciergeBell,
  Building2,
  Cpu,
  Car,
  MapPin,
  Plane,
  ShoppingBag,
  TreePine
} from 'lucide-react';
import { Feature, FloorPlan, LocationHighlight, NavigationLink } from '@/types';

export const SITE_NAME = 'Serenity Heights';
export const SITE_TAGLINE = 'Where Luxury Meets Tranquility';

export const NAV_LINKS: NavigationLink[] = [
  { label: 'Residences', href: '#features' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Floor Plans', href: '#floor-plans' },
  { label: 'Contact', href: '#contact' },
];

export const FEATURES: Feature[] = [
  {
    id: 'pool',
    title: 'Infinity Pool & Spa',
    description: 'Panoramic rooftop infinity pool with private cabanas and full-service spa facilities.',
    icon: Waves,
  },
  {
    id: 'cinema',
    title: 'Private Cinema',
    description: 'State-of-the-art screening room with premium seating for exclusive movie nights.',
    icon: Film,
  },
  {
    id: 'wine',
    title: 'Wine Cellar',
    description: 'Temperature-controlled wine cellar with private tasting room for connoisseurs.',
    icon: Wine,
  },
  {
    id: 'fitness',
    title: 'Fitness Center',
    description: 'World-class gym equipment with personal training and wellness programs.',
    icon: Dumbbell,
  },
  {
    id: 'concierge',
    title: '24/7 Concierge',
    description: 'Dedicated concierge team available around the clock to fulfill your every need.',
    icon: ConciergeBell,
  },
  {
    id: 'smart',
    title: 'Smart Home',
    description: 'Cutting-edge home automation systems for seamless control of your residence.',
    icon: Cpu,
  },
  {
    id: 'parking',
    title: 'Private Parking',
    description: 'Secure underground parking with electric vehicle charging stations.',
    icon: Car,
  },
  {
    id: 'terrace',
    title: 'Rooftop Terrace',
    description: 'Expansive rooftop garden with stunning city views and outdoor lounges.',
    icon: Building2,
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
    price: '$1.2M',
  },
  {
    id: 'residence',
    name: 'The Residence',
    image: '/images/floor-plans/residance-floorplan.png',
    sqft: '2,800 sq ft',
    bedrooms: 3,
    bathrooms: 3,
    price: '$2.4M',
  },
  {
    id: 'penthouse',
    name: 'The Penthouse',
    image: '/images/floor-plans/penthouse-floorplan.png',
    sqft: '5,200 sq ft',
    bedrooms: 4,
    bathrooms: 5,
    price: '$4.5M',
  },
];

export const LOCATION_HIGHLIGHTS: LocationHighlight[] = [
  {
    id: 'downtown',
    name: 'Downtown Financial District',
    distance: '5 min drive',
    icon: Building2,
  },
  {
    id: 'airport',
    name: 'International Airport',
    distance: '20 min drive',
    icon: Plane,
  },
  {
    id: 'shopping',
    name: 'Luxury Shopping District',
    distance: '3 min walk',
    icon: ShoppingBag,
  },
  {
    id: 'park',
    name: 'Central Park',
    distance: '2 min walk',
    icon: TreePine,
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
