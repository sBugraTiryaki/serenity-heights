import { LucideIcon } from 'lucide-react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
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

export interface LocationHighlight {
  id: string;
  name: string;
  distance: string;
  icon: LucideIcon;
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
