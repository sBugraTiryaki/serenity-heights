import { ComponentType } from 'react';

export interface IconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export type CustomIcon = ComponentType<IconProps>;

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: CustomIcon;
  image?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  featured?: boolean;
}

export interface FloorPlan {
  id: string;
  name: string;
  image: string;
  sqft: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
}

export interface Residence {
  id: string;
  name: string;
  floorPlanImage: string;
  sqft: string;
  bedrooms: number;
  bathrooms: number;
  price: string;
  floors: string;
  description: string;
}

export interface FloorPosition {
  id: string;
  top: number;
  label: string;
}

export interface LocationHighlight {
  id: string;
  name: string;
  distance: string;
  icon: CustomIcon;
}

export interface NavigationLink {
  label: string;
  href: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
}
