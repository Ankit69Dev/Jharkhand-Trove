export const FOREST_STAT = {
  value: '~30%',
  label: 'of Jharkhand is forest-covered',
  note: "Official figures vary by year and source (recent citations range from 29% to 33%) \u2014 either way, forest is not a backdrop here, it's close to a third of the entire state, and it's the reason eco-tourism is a named priority in state policy rather than an afterthought.",
};

export const POLICY_NOTE = {
  title: 'Jharkhand Tourism Policy, 2021',
  body: "Launched in 2022 and still active, the policy names eco-tourism as a top priority alongside religious and tribal tourism, with incentives aimed at getting private and MSME investment into rural and tribal areas rather than just city hotels. Five official tourism circuits anchor this: Netarhat, Deoghar, Parasnath, Betla, and Rajrappa/Kanke.",
};

export interface GuidelineItem {
  title: string;
  body: string;
}

export const VISITOR_LOAD_NOTES: GuidelineItem[] = [
  {
    title: 'Betla National Park',
    body: 'Jeep safaris are run and capacity-limited by the forest department \u2014 there is no unrestricted private-vehicle access to core safari routes. Book ahead in peak season (November\u2013March) rather than showing up and expecting a slot.',
  },
  {
    title: 'Waterfalls in monsoon',
    body: 'July\u2013September brings the strongest flows and the biggest crowds at Hundru, Jonha, and Dassam \u2014 also the highest accident risk from slippery rock. Shoulder-season visits (Feb\u2013April, Oct\u2013Nov) are lower-impact and safer.',
  },
  {
    title: 'Tribal art villages',
    body: 'Isco, Jarwadih, and Kharati are lived-in villages, not open-air museums \u2014 there\u2019s no formal visitor cap, which makes it the traveler\u2019s responsibility to keep group sizes small and visits brief.',
  },
];

export const RESPONSIBLE_TRAVEL_GUIDELINES: GuidelineItem[] = [
  {
    title: 'Carry your plastic back out',
    body: 'Most of these sites have no waste infrastructure at all \u2014 what you bring in in plastic, you carry back out. This matters more at remote waterfalls and forest sites than almost anywhere else on a typical itinerary.',
  },
  {
    title: 'Ask before photographing people',
    body: 'In tribal villages especially, ask before photographing someone, their home, or a ritual in progress. A painted wall on a house is not a backdrop for a stranger\u2019s portrait.',
  },
  {
    title: 'Respect sacred groves',
    body: 'Many villages maintain a Jahira, a sacred grove tied to Santhal and other tribal belief systems. These aren\u2019t scenic detours \u2014 treat them the way you would an active place of worship, because that\u2019s what they are.',
  },
  {
    title: 'Buy directly from artisans',
    body: 'Sohrai and Khovar art, Paitkar scrolls, and local handicrafts hold more value for the community when bought directly from the maker or a village cooperative than through a city middleman.',
  },
  {
    title: 'Hire local guides',
    body: 'Someone from Betla or Hazaribagh knows the terrain, the season, and the etiquette better than any app. It also means your trip spends money in the place you\u2019re actually visiting, not just the city you flew into.',
  },
  {
    title: 'Stick to marked trails and safari routes',
    body: "Going off-route in forest reserves stresses wildlife and damages undergrowth that doesn't recover quickly. The marked path exists for a reason beyond your convenience.",
  },
];

export const CARBON_NOTE = {
  title: 'On getting there',
  body: "Train and bus travel within Jharkhand and to/from neighboring states carries a meaningfully smaller footprint than flying or a private car for the same distance \u2014 and given how well-connected Ranchi, Dhanbad, and Tatanagar are by rail, it's rarely the slower option either. We don't have verified per-route emissions data to put a specific number on this, so we won't invent one \u2014 but the general principle holds: for anything under roughly 300\u2013400 km, rail is usually both greener and comparably fast once you account for airport transfers.",
};