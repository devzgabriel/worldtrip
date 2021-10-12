import Head from 'next/head'
import { Flex, Image, Text, Box, Stack, theme, Grid } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import { GetStaticPaths, GetStaticProps } from 'next'
import {
  ContinentType,
  CityType,
  continents,
  citiesFromContinent,
} from '../../utils/data'
import { CityCard } from '../../components/Cards/CityCard'

export default function Continent({
  continent,
  cities,
}: {
  continent: ContinentType
  cities: CityType[]
}) {
  return (
    <div>
      <Head>
        <title>World Trip | {continent.name}</title>
        <meta name='description' content='Your platform to travel' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Flex direction='column' h='100vh' w='100vw' align='center'>
        <Header goBackButton />
        <Box bg='black' height={600}>
          <Image
            width='100vw'
            height='100%'
            objectFit='cover'
            opacity='0.5'
            src={continent.img}
            alt={continent.name}
          />

          <Text
            top={400}
            color='white'
            w='full'
            mt='-100'
            mx='auto'
            maxWidth={1480}
            fontSize='5xl'
            fontWeight='bold'
            pos='sticky'
            zIndex={2}
          >
            {continent.name}
          </Text>
        </Box>
        <Stack
          maxWidth={1480}
          py={12}
          spacing={12}
          justify='center'
          align='center'
        >
          <Flex direction='row' justify='space-between' align='center' w='full'>
            <Text
              w='full'
              maxWidth='55%'
              fontSize='xl'
              color={theme.colors.gray[600]}
            >
              {continent.description}
            </Text>

            <Flex
              direction='row'
              align='center'
              justify='space-around'
              w='full'
              maxWidth='45%'
            >
              <Box fontWeight='bold' align='center'>
                <Text fontSize='5xl' color={theme.colors.yellow[400]}>
                  {continent.details.countries}
                </Text>
                <Text color={theme.colors.gray[600]}>countries</Text>
              </Box>
              <Box fontWeight='bold' align='center'>
                <Text fontSize='5xl' color={theme.colors.yellow[400]}>
                  {continent.details.cities}
                </Text>
                <Text color={theme.colors.gray[600]}>cities</Text>
              </Box>
              <Box fontWeight='bold' align='center'>
                <Text fontSize='5xl' color={theme.colors.yellow[400]}>
                  {continent.details.population}
                </Text>
                <Text color={theme.colors.gray[600]}>people</Text>
              </Box>
            </Flex>
          </Flex>

          <Grid w='full' templateColumns='repeat(4, 1fr)' gap={6}>
            {cities.map((city) => (
              <CityCard
                key={city.city}
                city={city.city}
                cityImg={city.cityImg}
                country={city.country}
                countryImg={city.countryImg}
              />
            ))}
            {cities.map((city) => (
              <CityCard
                key={city.city}
                city={city.city}
                cityImg={city.cityImg}
                country={city.country}
                countryImg={city.countryImg}
              />
            ))}
            {cities.map((city) => (
              <CityCard
                key={city.city}
                city={city.city}
                cityImg={city.cityImg}
                country={city.country}
                countryImg={city.countryImg}
              />
            ))}
          </Grid>
        </Stack>
      </Flex>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const continentSlug = String(slug)

  if (!continents[continentSlug] || !citiesFromContinent[continentSlug])
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  const continent = {
    name: continents[continentSlug].name,
    description: continents[continentSlug].description,
    subtitle: continents[continentSlug].subtitle,
    img: continents[continentSlug].img,
    details: continents[continentSlug].details,
  }

  const cities = citiesFromContinent[continentSlug]

  return {
    props: {
      continent,
      cities,
    },
    revalidate: 60 * 60 * 8, // 8hours,
  }
}
