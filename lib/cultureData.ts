export interface TribalGroup {
  name: string;
  share: string;
  region: string;
  note: string;
}

export const TRIBAL_GROUPS: TribalGroup[] = [
  {
    name: 'Santhal',
    share: 'Largest tribal group, roughly a third of the state\u2019s tribal population',
    region: 'Santhal Pargana (Dumka, Godda, Sahibganj, Pakur, Jamtara, Deoghar), East Singhbhum, Hazaribagh, Giridih',
    note: 'Predominantly agriculturalists who follow Sarnaism, a nature-worship tradition. Known for the Dahar and Lagre dances, and for leading the 1855 Santhal Rebellion against British rule, still marked every year as Hul Diwas.',
  },
  {
    name: 'Oraon (Kurukh)',
    share: 'Second-largest tribal group in the state',
    region: 'Gumla, Ranchi, and across the Chotanagpur plateau',
    note: 'Carry an extensive tradition of folk song, dance, and oral storytelling passed through generations. Central to Sarhul, alongside the Munda and Ho communities.',
  },
  {
    name: 'Munda',
    share: 'One of the four major tribal groups',
    region: 'Ranchi, Khunti, Hazaribagh',
    note: 'Settled agriculturists whose villages in the Hazaribagh belt keep the Sohrai and Khovar mural painting traditions alive on home walls. Birsa Munda, the freedom fighter Ranchi\u2019s airport is named for, came from this community.',
  },
  {
    name: 'Ho',
    share: 'Concentrated in the Kolhan region',
    region: 'East Singhbhum, West Singhbhum',
    note: 'Settled agriculturists, with some communities continuing to practice local Sarna religious traditions rather than adopting Hinduism or Christianity.',
  },
  {
    name: 'Kharia',
    share: 'One of the five principal indigenous groups',
    region: 'Gumla, Simdega, and forested plateau areas',
    note: 'Includes both settled agricultural communities and the Hill Kharia, historically a hunter-gatherer group \u2014 among the more forest-dependent tribal traditions still practiced in the state.',
  },
];

export interface Festival {
  name: string;
  month: string;
  date2026: string;
  tribes: string;
  description: string;
}

export const FESTIVALS: Festival[] = [
  {
    name: 'Sohrai',
    month: 'January',
    date2026: 'Jan 12\u201313, 2026',
    tribes: 'Munda and other agricultural communities',
    description:
      'A cattle and harvest festival held right after Diwali. Bulls and cows are bathed, their horns painted with vermilion and oil, and garlanded \u2014 a day of rest for the animals that work the fields all year. Households also repaint their walls with Sohrai murals during this season.',
  },
  {
    name: 'Tusu Parab',
    month: 'January',
    date2026: 'Jan 14, 2026',
    tribes: 'Kurmi and Bhumij communities',
    description:
      'A female-centric harvest festival coinciding with Makar Sankranti. Unmarried girls build bamboo-and-paper structures called Chaudal and carry them in procession to the river, singing Tusu songs along the way.',
  },
  {
    name: 'Sarhul',
    month: 'March',
    date2026: 'March 21, 2026',
    tribes: 'Munda, Oraon, and Ho',
    description:
      "The tribal new year, and arguably the most significant festival in the state\u2019s calendar \u2014 a public holiday, marked by large public processions in Ranchi as well as village-level rituals. It centers on the sacred Sal tree: the village priest (Pahan) predicts the year's rainfall from water levels in earthen pots, and no farming begins until Sal flowers are formally offered to the village deity.",
  },
  {
    name: 'Karma (Karam)',
    month: 'August\u2013September',
    date2026: 'Sept 22\u201323, 2026',
    tribes: 'Widely celebrated across tribal communities',
    description:
      'Dedicated to Karam Devta, god of youth and prosperity. Unmarried women fast for their brothers\u2019 wellbeing, and villagers cut and plant branches from the Karam tree at the center of the celebration ground, danced around late into the night.',
  },
  {
    name: 'Hul Diwas',
    month: 'June',
    date2026: 'June 30, 2026',
    tribes: 'Santhal',
    description:
      'Commemorates the Santhal Rebellion of 1855, led by brothers Sidho and Kanho Murmu against British colonial rule \u2014 a historical rather than agricultural festival, and a gazetted public holiday.',
  },
  {
    name: 'Sendra (Disum Sendra)',
    month: 'April\u2013May',
    date2026: 'Full moon, Baisakh',
    tribes: 'Communities across the Chotanagpur region',
    description:
      'An annual hunting festival held atop Dalma Hills near Jamshedpur on the full moon of Baisakh \u2014 more a gathering and rite of passage for young men today than a literal hunt.',
  },
];

export interface FoodItem {
  name: string;
  description: string;
}

export const FOOD_ITEMS: FoodItem[] = [
  {
    name: 'Dhuska',
    description: 'A fried pancake made from a rice-and-lentil batter, usually eaten with a chickpea curry \u2014 a common festival and breakfast food.',
  },
  {
    name: 'Pitha',
    description: 'Steamed or fried rice-flour dumplings, made in many forms and especially associated with the Karma festival season.',
  },
  {
    name: 'Rugra',
    description: 'A curry made from a wild mushroom that appears seasonally in the forest, foraged rather than farmed \u2014 a genuinely local dish that doesn\u2019t travel far from where it\u2019s picked.',
  },
  {
    name: 'Handia',
    description: 'Fermented rice beer, central to ritual and hospitality. Being offered Handia by a tribal host is a real gesture of welcome \u2014 if you\u2019d rather not drink it, a light touch of the vessel and a thank-you is the polite way to decline.',
  },
];