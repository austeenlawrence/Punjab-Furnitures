export type ProductCategory = 
  | 'All'
  | 'Sofas'
  | 'Beds'
  | 'Dining Tables'
  | 'Wardrobes'
  | 'TV Units'
  | 'Coffee Tables'
  | 'Office Furniture'
  | 'Custom Furniture'
  | 'Home Décor';

export interface Product {
  id: string;
  name: string;
  category: Exclude<ProductCategory, 'All'>;
  shortDescription: string;
  fullDescription: string;
  materials: string;
  finish: string;
  dimensions?: string;
  badge?: 'NEW' | 'FEATURED' | 'NEW ARRIVAL';
  image: string;
  secondaryImages?: string[];
  features?: string[];
}

export interface ShowroomOffer {
  id: string;
  title: string;
  tagline: string;
  description: string;
  details: string[];
  applicableCategory?: string;
  bannerImage?: string;
  enquiryText?: string;
  code?: string;
  validity?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  furnitureAcquired: string;
  quote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  roomSetting?: string;
  image: string;
  imageUrl?: string;
  caption?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ShowroomConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubtitle: string;
  phone: string;
  formattedPhone: string;
  whatsappNumber: string;
  address: {
    street: string;
    landmark: string;
    area?: string;
    locality?: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  openingHours: {
    days: string;
    hours: string;
    closedDay: string;
    note: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappFormatted: string;
  };
  mapEmbedUrl: string;
  googleMapsDirectionsUrl: string;
}

export type PageId = 
  | 'home'
  | 'catalogue'
  | 'product-detail'
  | 'gallery'
  | 'offers'
  | 'new-arrivals'
  | 'about'
  | 'showroom'
  | 'faq';

export type PageRoute = PageId;
