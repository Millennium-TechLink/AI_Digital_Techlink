// Type definitions for the application

export interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  color: string;
  isComingSoon?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface Product {
  id: number
  name: string
  category: string
  image: string
  slug: string
  shortDescription: string
  longDescription?: string
  features?: string[]
  applications?: string[]
  gallery?: GalleryItem[]
  galleryTitle?: string
  subProducts?: SubProduct[]
  sections?: ProductSection[]
  partNumbers?: string
  specifications?: Specification[]
}

export interface GalleryItem {
  src: string
  alt: string
}

export interface SubProduct {
  name: string
  description: string
  image: string
  link?: string
  features?: string[]
}

export interface ProductSection {
  title: string
  subProducts?: SubProduct[]
  description?: string
  gallery?: GalleryItem[]
}

export interface Specification {
  param: string
  value: string
}


