export type ExploreCategory =
  | 'waterfall'
  | 'national_park'
  | 'heritage'
  | 'hill_station'
  | 'tribal_village';

export interface ExploreDestination {
  id: string;
  name: string;
  category: ExploreCategory;
  district: string;
  description: string;
  lat: number;
  lng: number;
  /**
   * Optional path/URL to a real equirectangular (2:1) panorama photo for
   * this destination, e.g. '/panoramas/hundru-falls.jpg'. When set, the
   * 360° modal shows this instead of checking Street View. Leave undefined
   * until you have a real photo — do not point this at a stock or unrelated
   * image, since the whole point is showing the actual place.
   */
  panoramaUrl?: string;
}

export const CATEGORY_LABELS: Record<ExploreCategory, string> = {
  waterfall: 'Waterfalls',
  national_park: 'National Parks',
  heritage: 'Heritage Sites',
  hill_station: 'Hill Stations',
  tribal_village: 'Tribal Villages',
};

export const EXPLORE_DESTINATIONS: ExploreDestination[] = [
  // Waterfalls
  {
    id: 'hundru-falls',
    name: 'Hundru Falls',
    category: 'waterfall',
    district: 'Ranchi',
    description:
      "The Subarnarekha river drops about 98 metres here, making it Jharkhand's highest and most visited waterfall, roughly 45 km from Ranchi.",
    lat: 23.43,
    lng: 85.66,
    panoramaUrl: '/panoramas/hundru-falls.jpg',
  },
  {
    id: 'dassam-falls',
    name: 'Dassam Falls',
    category: 'waterfall',
    district: 'Ranchi',
    description:
      "Near Taimara village, the Kanchi river plunges about 44 metres. The name comes from a Mundari word for the sound of falling water.",
    lat: 23.29,
    lng: 85.55,
  },
  {
    id: 'jonha-falls',
    name: 'Jonha Falls',
    category: 'waterfall',
    district: 'Ranchi',
    description:
      "Also called Gautamdhara for its Buddhist associations, this 43-metre fall is reached by climbing over 700 stone steps into the valley.",
    lat: 23.35,
    lng: 85.63,
  },
  {
    id: 'lodh-falls',
    name: 'Lodh Falls',
    category: 'waterfall',
    district: 'Latehar',
    description:
      "At around 143 metres, this is the tallest waterfall in the state, dropping in tiers through dense forest roughly 60 km from Netarhat.",
    lat: 23.75,
    lng: 84.29,
  },
  {
    id: 'panchghagh-falls',
    name: 'Panchghagh Falls',
    category: 'waterfall',
    district: 'Khunti',
    description:
      "Five separate streams cascade down the same rock face near Khunti town, giving the falls their name — panch means five.",
    lat: 23.08,
    lng: 85.28,
  },

  // National parks & wildlife
  {
    id: 'betla-national-park',
    name: 'Betla National Park',
    category: 'national_park',
    district: 'Latehar / Palamu',
    description:
      "The state's only national park, spread over 226 sq km inside the Palamau Tiger Reserve. Its name is an acronym of the animals found here: Bison, Elephant, Tiger, Leopard, Axis deer.",
    lat: 23.88,
    lng: 84.19,
  },
  {
    id: 'palamau-tiger-reserve',
    name: 'Palamau Tiger Reserve',
    category: 'national_park',
    district: 'Palamu / Latehar / Garhwa',
    description:
      "One of India's original nine tiger reserves, declared in 1973. It encompasses Betla National Park along with a much larger buffer of Sal forest.",
    lat: 23.87,
    lng: 84.15,
  },
  {
    id: 'dalma-wildlife-sanctuary',
    name: 'Dalma Wildlife Sanctuary',
    category: 'national_park',
    district: 'East Singhbhum',
    description:
      "A forested hill range close to Jamshedpur, known for its resident elephant population and panoramic views over the Subarnarekha valley.",
    lat: 22.87,
    lng: 86.15,
  },
  {
    id: 'hazaribagh-wildlife-sanctuary',
    name: 'Hazaribagh Wildlife Sanctuary',
    category: 'national_park',
    district: 'Hazaribagh',
    description:
      "Roughly 186 sq km of hilly deciduous forest north of Ranchi, home to leopards, sambar, and nilgai across a mix of grassland and woodland.",
    lat: 23.98,
    lng: 85.36,
  },

  // Heritage & pilgrimage sites
  {
    id: 'baidyanath-temple',
    name: 'Baidyanath Temple',
    category: 'heritage',
    district: 'Deoghar',
    description:
      "One of the twelve Jyotirlingas of Shiva, and the largest of a 22-temple complex in Deoghar. Millions walk here barefoot during the Shravani Mela each monsoon.",
    lat: 24.48,
    lng: 86.7,
  },
  {
    id: 'parasnath-hill',
    name: 'Parasnath Hill (Shikharji)',
    category: 'heritage',
    district: 'Giridih',
    description:
      "The highest point in Jharkhand and the most revered Jain pilgrimage site in India — tradition holds that twenty of the twenty-four Tirthankaras attained liberation on this hill.",
    lat: 23.96,
    lng: 86.17,
  },
  {
    id: 'rajrappa-temple',
    name: 'Rajrappa Temple',
    category: 'heritage',
    district: 'Ramgarh',
    description:
      "The Chhinnamastika temple sits where the Bhairavi and Damodar rivers meet, a significant Shakti Peetha and a working pilgrimage-and-picnic spot at once.",
    lat: 23.63,
    lng: 85.71,
  },
  {
    id: 'palamau-forts',
    name: 'Palamau Forts',
    category: 'heritage',
    district: 'Latehar',
    description:
      "A pair of 16th- and 17th-century fort ruins near Betla, built by the Chero dynasty — a quiet counterpoint to the wildlife-focused itineraries most visitors plan around them.",
    lat: 23.85,
    lng: 84.17,
  },

  // Hill stations
  {
    id: 'netarhat',
    name: 'Netarhat',
    category: 'hill_station',
    district: 'Latehar',
    description:
      "Known as the Queen of Chotanagpur, this pine-forested plateau sits around 1,100 metres up and is best known for its sunrise and sunset viewpoints.",
    lat: 23.47,
    lng: 84.27,
  },
  {
    id: 'patratu-valley',
    name: 'Patratu Valley',
    category: 'hill_station',
    district: 'Ramgarh',
    description:
      "A winding ghat road above a horseshoe-shaped dam reservoir, close enough to Ranchi for a half-day trip, with boating available on the water below.",
    lat: 23.63,
    lng: 85.29,
  },
  {
    id: 'dalma-hills',
    name: 'Dalma Hills',
    category: 'hill_station',
    district: 'East Singhbhum',
    description:
      "Rising to about 3,000 feet near Jamshedpur, these forested hills double as both a hill-station viewpoint and the wildlife sanctuary that shares their name.",
    lat: 22.87,
    lng: 86.15,
  },

  // Tribal art villages
  {
    id: 'isco-village',
    name: 'Isco Village',
    category: 'tribal_village',
    district: 'Hazaribagh',
    description:
      "A Munda settlement in the Barkagaon block, notable for a rock art site dating to the Meso-Chalcolithic era and for keeping Khovar mural painting alive on its home walls.",
    lat: 23.98,
    lng: 85.02,
  },
  {
    id: 'jarwadih-village',
    name: 'Jarwadih Village',
    category: 'tribal_village',
    district: 'Hazaribagh',
    description:
      "A Santhal village where households repaint their mud walls with Sohrai harvest-festival murals of birds and florals each year after the rains.",
    lat: 23.95,
    lng: 85.1,
  },
  {
    id: 'kharati-village',
    name: 'Kharati Village',
    category: 'tribal_village',
    district: 'Hazaribagh',
    description:
      "Home to the Prajapati community's Khovar tradition — bridal-chamber wall art made with bamboo combs and fingertips, passed from mother to daughter.",
    lat: 23.99,
    lng: 85.05,
  },
  {
    id: 'amadubi-village',
    name: 'Amadubi Village',
    category: 'tribal_village',
    district: 'East Singhbhum',
    description:
      "Considered the birthplace of Paitkar scroll painting, a centuries-old storytelling art form once carried village to village by travelling narrators.",
    lat: 22.75,
    lng: 86.55,
  },
];