import { StoryChapter, TimelineEvent, VenueInfo, GalleryItem, GiftRegistryAccount } from '@/types/invitation';

export const weddingData = {
  eventDate: '2026-10-24T18:00:00+02:00',
  endDate: '2026-10-25T02:00:00+02:00',
  
  venue: {
    name: 'Four Seasons Hotel Cairo at Nile Plaza',
    hallName: 'The Grand Royal Ballroom',
    address: '1089 Corniche El Nile, Garden City, Cairo, Egypt',
    city: 'Cairo',
    country: 'Egypt',
    date: 'Saturday, October 24, 2026',
    time: '06:00 PM',
    coordinates: {
      lat: 30.0381,
      lng: 31.2312,
    },
    googleMapsUrl: 'https://maps.google.com/?q=Four+Seasons+Hotel+Cairo+at+Nile+Plaza',
    appleMapsUrl: 'https://maps.apple.com/?q=Four+Seasons+Hotel+Cairo+at+Nile+Plaza',
    dressCode: 'Black Tie Formal / Formal Eveningwear',
    valetAvailable: true,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1200',
  } as VenueInfo,

  story: [
    {
      id: 'ch-1',
      date: 'SPRING 2023',
      title: 'The Encounter',
      subtitle: 'Where Destiny Whispered',
      description: 'Met at a contemporary art exhibition in Zamalek. What began as a conversation on architecture evolved into a deep soul alignment.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'ch-2',
      date: 'WINTER 2025',
      dateAr: 'شتاء ٢٠٢٥',
      title: 'The Moonlight Vow',
      subtitle: 'By the Ancient Nile',
      description: 'Under a sky filled with stars along the Nile, Tareq presented the commitment ring, asking Layla to walk forever by his side.',
      image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'ch-3',
      date: 'AUTUMN 2026',
      title: 'The Eternal Chapter',
      subtitle: 'Our Celebration of Love',
      description: 'Gathering our closest loved ones in Cairo to step into eternity together.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800',
    },
  ] as StoryChapter[],

  timeline: [
    {
      id: 't-1',
      time: '06:00 PM',
      title: 'Katb El-Ketab',
      description: 'Official marriage contract signing and sacred blessings.',
      location: 'Royal Crystal Foyer',
      iconName: 'crown',
    },
    {
      id: 't-2',
      time: '07:30 PM',
      title: 'Cocktail Welcome',
      description: 'Live harp performance & gourmet mocktail reception.',
      location: 'Nile View Terrace',
      iconName: 'glass',
    },
    {
      id: 't-3',
      time: '08:30 PM',
      title: 'Zaffah & Royal Entry',
      description: 'Aurora light sweep show and classic Egyptian Zaffah entrance.',
      location: 'Grand Ballroom',
      iconName: 'sparkles',
    },
    {
      id: 't-4',
      time: '09:30 PM',
      title: 'Dinner Gala',
      description: 'Multi-course luxury banquet curated by master chefs.',
      location: 'Grand Ballroom',
      iconName: 'heart',
    },
    {
      id: 't-5',
      time: '11:00 PM',
      title: 'Music & Celebration',
      description: 'Live orchestra, DJ performances, and dancing.',
      location: 'Grand Ballroom',
      iconName: 'music',
    },
  ] as TimelineEvent[],

  gallery: [
    {
      id: 'g-1',
      url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000',
      caption: 'Pure Elegance in Light',
      category: 'portrait',
    },
    {
      id: 'g-2',
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1000',
      caption: 'Twilight by the Nile',
      category: 'prewedding',
    },
    {
      id: 'g-3',
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000',
      caption: 'The Promise Ring',
      category: 'moments',
    },
    {
      id: 'g-4',
      url: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000',
      caption: 'Silk & Crystal Atmosphere',
      category: 'portrait',
    },
    {
      id: 'g-5',
      url: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=1000',
      caption: 'Shared Laughter',
      category: 'moments',
    },
    {
      id: 'g-6',
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=1000',
      caption: 'Celestial Evening',
      category: 'prewedding',
    },
  ] as GalleryItem[],

  registry: {
    bankName: 'National Bank of Egypt (NBE)',
    accountHolder: 'Tareq Mahmoud El-Kholy & Layla Sherif Fahmy',
    iban: 'EG380003000123456789012345678',
    swiftCode: 'NBEGEGCX',
    branch: 'Zamalek Branch, Cairo',
  } as GiftRegistryAccount,
};
