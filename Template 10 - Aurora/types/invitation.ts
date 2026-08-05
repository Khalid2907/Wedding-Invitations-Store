export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

export interface CoupleMember {
  name: string;
  fullName: string;
  role: string;
  bio: string;
  image: string;
  parents: string;
}

export interface StoryChapter {
  id: string;
  title: string;
  date: string;
  subtitle: string;
  description: string;
  image: string;
  quote?: string;
}

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  iconName: 'ring' | 'crown' | 'music' | 'heart' | 'sparkles' | 'glass';
}

export interface VenueInfo {
  name: string;
  hallName: string;
  address: string;
  city: string;
  country: string;
  date: string;
  time: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  googleMapsUrl: string;
  appleMapsUrl: string;
  dressCode: string;
  valetAvailable: boolean;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
  category: 'portrait' | 'prewedding' | 'moments';
}

export interface GiftRegistryAccount {
  bankName: string;
  accountHolder: string;
  iban: string;
  swiftCode: string;
  branch: string;
}

export interface RsvpSubmission {
  fullName: string;
  phone: string;
  attending: boolean;
  guestCount: number;
  dietaryNotes?: string;
  blessingMessage?: string;
}
