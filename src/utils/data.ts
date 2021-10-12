import africaImg from '../../public/assets/images/africa.jpg'
import asiaImg from '../../public/assets/images/asia.jpg'
import europeImg from '../../public/assets/images/europe.jpg'
import northAmericaImg from '../../public/assets/images/north-america.jpg'
import southAmericaImg from '../../public/assets/images/south-america.jpg'
import oceaniaImg from '../../public/assets/images/oceania.jpg'

export type ContinentType = {
  name: string
  img: string
  subtitle: string
  description: string
  details: {
    cities: number
    countries: number
    population: string
  }
}

export type CityType = {
  city: string
  country: string
  cityImg: string
  countryImg: string
}

export const slides = [
  {
    img: africaImg.src,
    label: 'África',
    subtitle: 'Nature and wealth',
    slug: 'africa',
  },
  {
    img: asiaImg.src,
    label: 'Asia',
    subtitle: 'Breathe technology',
    slug: 'asia',
  },
  {
    img: europeImg.src,
    label: 'Europa',
    subtitle: 'The oldest continent',
    slug: 'europe',
  },
  {
    img: northAmericaImg.src,
    label: 'America do Norte',
    subtitle: 'Where the world watches',
    slug: 'northAmerica',
  },
  {
    img: southAmericaImg.src,
    label: 'America do Sul',
    subtitle: 'Joy and Traditions',
    slug: 'southAmerica',
  },
  {
    img: oceaniaImg.src,
    label: 'Oceania',
    subtitle: 'Surprise in the form of travel',
    slug: 'oceania',
  },
]

export const continents: Record<string, ContinentType> = {
  africa: {
    img: africaImg.src,
    name: 'Africa',
    subtitle: 'Nature and wealth',
    description:
      "Africa is the world's second-largest and second-most populous continent, after Asia in both cases. At about 30.3 million km² including adjacent islands, it covers 6% of Earth's total surface area and 20% of its land area. With 1.3 billion people as of 2018, it accounts for about 16% of the world's human population.",
    details: {
      cities: 1,
      countries: 54,
      population: '1.216 Billion',
    },
  },
  asia: {
    img: asiaImg.src,
    name: 'Asia',
    subtitle: 'Breathe technology',
    description:
      "Asia is Earth's largest and most populous continent, located primarily in the Eastern and Northern Hemispheres. It shares the continental landmass of Eurasia with the continent of Europe and the continental landmass of Afro-Eurasia with both Europe and Africa.",
    details: {
      cities: 1,
      countries: 50,
      population: '4.463 Billion',
    },
  },
  europe: {
    img: europeImg.src,
    name: 'Europa',
    subtitle: 'The oldest continent',
    description:
      'Europe is a continent located entirely in the Northern Hemisphere and mostly in the Eastern Hemisphere. It comprises the westernmost peninsulas of the continental landmass of Eurasia, and is bordered by the Arctic Ocean to the north, the Atlantic Ocean to the west, the Mediterranean Sea to the south, and Asia to the east.',
    details: {
      cities: 1,
      countries: 51,
      population: '741.4 Million',
    },
  },
  northAmerica: {
    img: northAmericaImg.src,
    name: 'America do Norte',
    subtitle: 'Where the world watches',
    description:
      'North America is a continent in the Northern Hemisphere and almost entirely within the Western Hemisphere. It can also be described as the northern subcontinent of a single continent, America. It is bordered to the north by the Arctic Ocean, to the east by the Atlantic Ocean, to the southeast by South America and the Caribbean Sea, and to the west and south by the Pacific Ocean.',
    details: {
      cities: 1,
      countries: 23,
      population: '579 Million',
    },
  },
  southAmerica: {
    img: southAmericaImg.src,
    name: 'America do Sul',
    subtitle: 'Joy and Traditions',
    description:
      'South America is a continent entirely in the Western Hemisphere and mostly in the Southern Hemisphere, with a relatively small portion in the Northern Hemisphere. It can also be described as the southern subcontinent of the Americas.',
    details: {
      cities: 1,
      countries: 12,
      population: '422.5 Million',
    },
  },
  oceania: {
    img: oceaniaImg.src,
    name: 'Oceania',
    subtitle: 'Surprise in the form of travel',
    description:
      'Oceania is a geographic region that includes Australasia, Melanesia, Micronesia and Polynesia. Spanning the Eastern and Western Hemispheres, Oceania has a land area of 8,525,989 square kilometres and a population of over 41 million.',
    details: {
      cities: 1,
      countries: 14,
      population: '31.26 Million',
    },
  },
}

export const citiesFromContinent: Record<string, CityType[]> = {
  africa: [
    {
      city: 'Nairobi',
      country: 'Kenya',
      cityImg: africaImg.src,
      countryImg: africaImg.src,
    },
    {
      city: 'Kampala',
      country: 'Uganda',
      cityImg: africaImg.src,
      countryImg: africaImg.src,
    },
    {
      city: 'Dar es Salaam',
      country: 'Tanzania',
      cityImg: africaImg.src,
      countryImg: africaImg.src,
    },
  ],
  asia: [
    {
      city: 'Bangkok',
      country: 'Thailand',
      cityImg: asiaImg.src,
      countryImg: asiaImg.src,
    },
    {
      city: 'Tokyo',
      country: 'Japan',
      cityImg: asiaImg.src,
      countryImg: asiaImg.src,
    },
    {
      city: 'Seoul',
      country: 'South Korea',
      cityImg: asiaImg.src,
      countryImg: asiaImg.src,
    },
  ],
  europe: [
    {
      city: 'Paris',
      country: 'France',
      cityImg: europeImg.src,
      countryImg: europeImg.src,
    },
    {
      city: 'London',
      country: 'United Kingdom',
      cityImg: europeImg.src,
      countryImg: europeImg.src,
    },
    {
      city: 'Rome',
      country: 'Italy',
      cityImg: europeImg.src,
      countryImg: europeImg.src,
    },
  ],
  northAmerica: [
    {
      city: 'New York',
      country: 'United States',
      cityImg: northAmericaImg.src,
      countryImg: northAmericaImg.src,
    },
    {
      city: 'Washington',
      country: 'United States',
      cityImg: northAmericaImg.src,
      countryImg: northAmericaImg.src,
    },
    {
      city: 'Chicago',
      country: 'United States',
      cityImg: northAmericaImg.src,
      countryImg: northAmericaImg.src,
    },
  ],
  southAmerica: [
    {
      city: 'Buenos Aires',
      country: 'Argentina',
      cityImg: southAmericaImg.src,
      countryImg: southAmericaImg.src,
    },
    {
      city: 'Santiago',
      country: 'Chile',
      cityImg: southAmericaImg.src,
      countryImg: southAmericaImg.src,
    },
    {
      city: 'Rio de Janeiro',
      country: 'Brasil',
      cityImg: southAmericaImg.src,
      countryImg: southAmericaImg.src,
    },
  ],
  oceania: [
    {
      city: 'Sydney',
      country: 'Australia',
      cityImg: oceaniaImg.src,
      countryImg: oceaniaImg.src,
    },
    {
      city: 'Melbourne',
      country: 'Australia',
      cityImg: oceaniaImg.src,
      countryImg: oceaniaImg.src,
    },
    {
      city: 'Perth',
      country: 'Australia',
      cityImg: oceaniaImg.src,
      countryImg: oceaniaImg.src,
    },
  ],
}
