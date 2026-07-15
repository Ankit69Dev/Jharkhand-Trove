export interface RailJunction {
  name: string;
  code: string;
  city: string;
  note: string;
}

export const AIRPORT = {
  name: 'Birsa Munda Airport',
  code: 'IXR',
  city: 'Ranchi',
  note: "The state's only major airport, about 5\u20137 km from central Ranchi. Direct domestic flights connect to Delhi, Kolkata, Mumbai, Bangalore, and several other metros. A prepaid taxi counter sits in the arrivals hall for fixed-rate rides into the city.",
};

export const RAIL_JUNCTIONS: RailJunction[] = [
  {
    name: 'Ranchi Junction',
    code: 'RNC',
    city: 'Ranchi',
    note: 'Headquarters of the South Eastern Railway\u2019s Ranchi division and the main gateway to the capital. Direct trains to Delhi, Kolkata, Mumbai, Bangalore, Chennai, and Patna.',
  },
  {
    name: 'Dhanbad Junction',
    code: 'DHN',
    city: 'Dhanbad',
    note: "The state's largest and busiest station, handling 100+ trains and 100,000+ passengers daily. Sits directly on the Howrah\u2013Delhi Grand Chord line.",
  },
  {
    name: 'Tatanagar Junction',
    code: 'TATA',
    city: 'Jamshedpur',
    note: 'Second major hub after Ranchi and Dhanbad, serving the industrial belt around Jamshedpur with broad connectivity across eastern and central India.',
  },
  {
    name: 'Jasidih Junction',
    code: 'JSME',
    city: 'Deoghar',
    note: 'The busiest station in Jharkhand by train count, largely because it\u2019s the main rail gateway to Baidyanath Temple \u2014 expect crowds during the Shravani Mela pilgrimage season.',
  },
  {
    name: 'Bokaro Steel City',
    code: 'BKSC',
    city: 'Bokaro',
    note: 'Serves the steel-city belt in the north of the state, with regular connections to Ranchi, Dhanbad, and Kolkata.',
  },
  {
    name: 'Hatia',
    code: 'HTE',
    city: 'Ranchi',
    note: 'Ranchi\u2019s secondary station, useful when Ranchi Junction itself is congested \u2014 several long-distance trains originate here instead.',
  },
];

export interface ConnectivityNote {
  title: string;
  body: string;
}

export const LAST_MILE_NOTES: ConnectivityNote[] = [
  {
    title: 'Waterfalls',
    body: 'Public buses generally stop well short of the falls themselves. From Ranchi, the standard approach for Hundru, Jonha, or Dassam is a hired taxi or shared auto for the final stretch \u2014 factor in a half-day round trip.',
  },
  {
    title: 'Betla National Park',
    body: 'Once inside, guided jeep safaris run by the forest department are the only way to move through the park \u2014 private vehicles aren\u2019t permitted on the core safari routes. Book ahead during peak season (November\u2013March).',
  },
  {
    title: 'Tribal art villages',
    body: 'Villages like Isco, Jarwadih, and Kharati near Hazaribagh have no direct bus service. A private vehicle from Hazaribagh town is the only practical option, and a local guide is genuinely useful here \u2014 households aren\u2019t set up for drop-in visitors.',
  },
  {
    title: 'Mobile coverage',
    body: 'Cellular signal gets patchy once you\u2019re off the highway corridors. Download offline maps before heading into forest or hill routes \u2014 relying on live navigation in these areas is a real risk, not a minor inconvenience.',
  },
];