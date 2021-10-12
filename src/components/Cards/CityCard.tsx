import { Box, theme, Image, Flex, Text } from '@chakra-ui/react'

type Props = {
  city: string
  country: string
  cityImg: string
  countryImg: string
}

export function CityCard({ city, country, cityImg, countryImg }: Props) {
  return (
    <Box
      border='1px solid'
      borderColor={theme.colors.yellow[300]}
      borderRadius={8}
      w='100%'
      h='max-content'
    >
      <Image
        width='full'
        height='50%'
        objectFit='cover'
        src={cityImg}
        alt={city}
        borderRadius='8px 8px 0 0'
      />
      <Flex p={6} justify='space-between'>
        <Flex direction='column' justify='space-around'>
          <Text fontWeight='bold' color={theme.colors.gray[600]}>
            {city}
          </Text>
          <Text color={theme.colors.gray[500]}>{country}</Text>
        </Flex>
        <Image
          borderRadius='full'
          src={countryImg}
          alt={country}
          boxSize='64px'
        />
      </Flex>
    </Box>
  )
}
