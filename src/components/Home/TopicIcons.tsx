import { Flex, Text, Image, Box, Stack } from '@chakra-ui/react'

export function TopicIcons() {
  return (
    <Flex direction='row' w={1000} align='center' justify='space-around'>
      <Stack spacing={6} direction='column' align='center'>
        <Image src='/assets/icons/drink.svg' layout='fill' alt='night' w={70} />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          night
        </Text>
      </Stack>
      <Stack spacing={6} direction='column' align='center'>
        <Image src='/assets/icons/surf.svg' layout='fill' alt='fun' w={70} />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          fun
        </Text>
      </Stack>
      <Stack spacing={6} direction='column' align='center'>
        <Image
          src='/assets/icons/building.svg'
          layout='fill'
          alt='modern'
          w={70}
        />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          modern
        </Text>
      </Stack>
      <Stack spacing={6} direction='column' align='center'>
        <Image
          src='/assets/icons/museum.svg'
          layout='fill'
          alt='classic'
          w={70}
        />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          classic
        </Text>
      </Stack>
      <Stack spacing={6} direction='column' align='center'>
        <Image src='/assets/icons/world.svg' layout='fill' alt='world' w={70} />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          and more places...
        </Text>
      </Stack>
    </Flex>
  )
}
