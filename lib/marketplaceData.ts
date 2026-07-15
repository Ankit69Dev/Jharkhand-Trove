export type ProductCategory =
  | 'textiles'
  | 'metal_craft'
  | 'wall_art'
  | 'scroll_painting'
  | 'jewellery'
  | 'bamboo_craft';

export const CATEGORY_LABELS: Record<ProductCategory, string> = {
  textiles: 'Textiles',
  metal_craft: 'Metal Craft',
  wall_art: 'Wall Art',
  scroll_painting: 'Scroll Painting',
  jewellery: 'Jewellery',
  bamboo_craft: 'Bamboo Craft',
};

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  origin: string;
  description: string;
  priceINR: number;
}

// These are sample listings illustrating real, GI-tagged Jharkhand craft
// traditions — not real vendors or live inventory. Prices are placeholders.
// Replace with actual artisan/cooperative listings as they onboard.
export const PRODUCTS: Product[] = [
  {
    id: 'kuchai-tussar-saree',
    name: 'Kuchai Tussar Silk Saree',
    category: 'textiles',
    origin: 'Seraikela-Kharsawan',
    description:
      'Wild tussar silk reared on Asan and Arjun trees, not cultivated mulberry \u2014 Jharkhand is India\u2019s largest tussar producer, and Kuchai silk carries its own GI tag.',
    priceINR: 4200,
  },
  {
    id: 'dumka-chadar',
    name: 'Dumka Handloom Chadar',
    category: 'textiles',
    origin: 'Dumka, Santhal Pargana',
    description: 'A handwoven cotton chadar from the Santhal Pargana belt, GI-tagged for its region-specific weave.',
    priceINR: 1800,
  },
  {
    id: 'dokra-figurine',
    name: 'Dokra Lost-Wax Figurine',
    category: 'metal_craft',
    origin: 'Tribal artisan clusters, Jharkhand',
    description:
      'Cast using the centuries-old cire-perdue (lost-wax) technique \u2014 each piece is genuinely one-of-a-kind, since the mould breaks in the casting process.',
    priceINR: 2600,
  },
  {
    id: 'munda-jewellery-set',
    name: 'Munda Tribal Jewellery Set',
    category: 'jewellery',
    origin: 'Munda communities, Ranchi & Khunti',
    description: 'Traditional ornament set carrying Munda motifs and metalwork, GI-recognized for its distinctive design language.',
    priceINR: 3200,
  },
  {
    id: 'sohrai-wall-print',
    name: 'Sohrai Mural Print, framed',
    category: 'wall_art',
    origin: 'Hazaribagh (Isco, Jarwadih, Kharati villages)',
    description:
      'A framed reproduction of a Sohrai wall mural \u2014 the same tradition you can see painted directly on home walls if you visit these villages in person.',
    priceINR: 1500,
  },
  {
    id: 'khovar-print',
    name: 'Khovar Bridal-Chamber Print, framed',
    category: 'wall_art',
    origin: 'Kharati village, Hazaribagh',
    description: 'Comb-and-fingertip mural art traditionally made for wedding chambers, reproduced here as a framed print.',
    priceINR: 1500,
  },
  {
    id: 'jadopatia-scroll',
    name: 'Jadopatia Scroll Painting',
    category: 'scroll_painting',
    origin: 'Santhal artisans',
    description:
      'A narrative scroll painting depicting mythology and folklore, traditionally carried village to village by wandering Jadupatua painters.',
    priceINR: 2800,
  },
  {
    id: 'paitkar-scroll',
    name: 'Paitkar Scroll Painting',
    category: 'scroll_painting',
    origin: 'Amadubi village, East Singhbhum',
    description: 'Considered the birthplace of this scroll-painting tradition \u2014 a centuries-old storytelling art form on hand-prepared paper.',
    priceINR: 2800,
  },
  {
    id: 'bamboo-basket-set',
    name: 'Bamboo Utility Basket Set',
    category: 'bamboo_craft',
    origin: 'Rural bamboo-craft clusters, Jharkhand',
    description: 'GI-tagged bamboo craft, covering everyday utility items made with low-input, sustainable techniques passed through generations.',
    priceINR: 900,
  },
];

export interface Homestay {
  id: string;
  name: string;
  location: string;
  description: string;
  priceINRPerNight: number;
}

// Same caveat as PRODUCTS — illustrative, not real bookable properties yet.
export const HOMESTAYS: Homestay[] = [
  {
    id: 'netarhat-homestay',
    name: 'Netarhat Hillside Homestay',
    location: 'Netarhat, Latehar',
    description: 'A family-run stay near the sunrise point, with home-cooked meals and easy walking access to the pine forest trails.',
    priceINRPerNight: 1800,
  },
  {
    id: 'patratu-homestay',
    name: 'Patratu Valley Homestay',
    location: 'Patratu, Ramgarh',
    description: 'Overlooking the reservoir road, a short drive from Ranchi \u2014 a good base for a two-day trip rather than a rushed day visit.',
    priceINRPerNight: 1500,
  },
  {
    id: 'hazaribagh-art-village-stay',
    name: 'Hazaribagh Art Village Homestay',
    location: 'Near Isco / Jarwadih, Hazaribagh',
    description: 'Stay with a family in the Sohrai/Khovar mural belt \u2014 the most direct way to see the art tradition as a living practice, not a museum piece.',
    priceINRPerNight: 1200,
  },
  {
    id: 'betla-forest-stay',
    name: 'Betla Forest-Edge Homestay',
    location: 'Near Betla National Park, Latehar',
    description: 'Just outside the park boundary, useful for an early jeep-safari start without a long pre-dawn drive.',
    priceINRPerNight: 2000,
  },
];