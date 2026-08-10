export const fleetCars = [
  {
    name: "Sedan",
    seats: "4 passengers",
    ideal: "Airport drops, couples, and city rides",
    image: "/fleet/sedan.png",
    alt: "White sedan taxi for hire in Ujjain with Divine Taxi",
  },
  {
    name: "Innova",
    seats: "6–7 passengers",
    ideal: "Families, temple tours, and luggage space",
    image: "/fleet/innova.png",
    alt: "Innova cab for family darshan and airport transfers in Ujjain",
  },
  {
    name: "Ertiga",
    seats: "6 passengers",
    ideal: "City darshan and mid-size group rides",
    image: "/fleet/ertiga.png",
    alt: "Ertiga MUV taxi for Ujjain city and temple tours",
  },
  {
    name: "Tavera",
    seats: "7–8 passengers",
    ideal: "Outstation trips with extra seating",
    image: "/fleet/tavera.png",
    alt: "Tavera outstation taxi available from Ujjain",
  },
  {
    name: "Tempo traveller",
    seats: "12 passengers",
    ideal: "Group pilgrimages and large families",
    image: "/fleet/traveller.jpg",
    alt: "Tempo traveller for group pilgrimage travel from Ujjain",
  },
] as const;

export const heritageSites = [
  {
    name: "Mahakaleshwar Temple",
    place: "Ujjain",
    detail: "One of the twelve Jyotirlingas and the heart of Ujjain pilgrimage.",
    image: "/places/mahakaleshwar.jpg",
    alt: "Mahakaleshwar Temple in Ujjain",
  },
  {
    name: "Boreshwar Mahadev",
    place: "Ujjain",
    detail: "A peaceful Mahadev shrine visit on popular local temple routes.",
    image: "/places/boreshwar.jpg",
    alt: "Boreshwar Mahadev temple visit",
  },
  {
    name: "Omkareshwar",
    place: "Narmada",
    detail: "Jyotirlinga island temple — a classic day trip from Ujjain.",
    image: "/places/omkareshwar.jpg",
    alt: "Omkareshwar Temple",
  },
  {
    name: "Omkareshwar Jyotirlinga",
    place: "Omkareshwar",
    detail: "Sacred Narmada journey with time for darshan and riverside views.",
    image: "/places/omkareshwar-jyotirlinga.jpg",
    alt: "Omkareshwar Jyotirlinga",
  },
  {
    name: "Maheshwar ghats",
    place: "Maheshwar",
    detail: "Ahilya fort views and Narmada steps for a heritage day out.",
    image: "/places/maheshwar.jpg",
    alt: "Maheshwar ghats and fort",
  },
  {
    name: "Mandu fort",
    place: "Mandu",
    detail: "Medieval palaces, arches, and monsoon-green hills.",
    image: "/places/mandu.jpg",
    alt: "Mandu heritage fort",
  },
  {
    name: "Dewas",
    place: "Dewas",
    detail: "Quick outstation rides for temple visits and family travel.",
    image: "/places/dewas.jpg",
    alt: "Dewas travel destination",
  },
  {
    name: "Pachmarhi",
    place: "Pachmarhi",
    detail: "Hill-station getaways with comfortable long-distance cabs.",
    image: "/places/pachmarhi.jpg",
    alt: "Pachmarhi hill station",
  },
] as const;

export const placeImages = {
  mahakaleshwar: "/places/mahakaleshwar.jpg",
  omkareshwar: "/places/omkareshwar.jpg",
  omkareshwarJyotirlinga: "/places/omkareshwar-jyotirlinga.jpg",
  maheshwar: "/places/maheshwar.jpg",
  mandu: "/places/mandu.jpg",
  boreshwar: "/places/boreshwar.jpg",
  dewas: "/places/dewas.jpg",
  pachmarhi: "/places/pachmarhi.jpg",
  indore: "/places/indore.jpg",
  bhopal: "/places/bhopal-upper-lake.jpg",
  madhyaPradeshTour: "/packages/madhya-pradesh.png",
} as const;

export const heroImage = placeImages.mahakaleshwar;
