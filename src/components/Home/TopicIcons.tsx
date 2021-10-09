import { Flex, Text, Image, Box, Stack } from '@chakra-ui/react'

export function TopicIcons() {
  return (
    <Flex direction='row' w={1000} align='center' justify='space-around'>
      <Stack spacing={6} direction='column' align='center'>
        <Image
          src='/assets/icons/drink.svg'
          layout='fill'
          alt='vida noturna'
          w={70}
        />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          vida noturna
        </Text>
      </Stack>
      <Stack spacing={6} direction='column' align='center'>
        <Image src='/assets/icons/surf.svg' layout='fill' alt='praia' w={70} />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          praia
        </Text>
      </Stack>
      <Stack spacing={6} direction='column' align='center'>
        <Image
          src='/assets/icons/building.svg'
          layout='fill'
          alt='moderno'
          w={70}
        />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          moderno
        </Text>
      </Stack>
      <Stack spacing={6} direction='column' align='center'>
        <Image
          src='/assets/icons/museum.svg'
          layout='fill'
          alt='clássico'
          w={70}
        />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          clássico
        </Text>
      </Stack>
      <Stack spacing={6} direction='column' align='center'>
        <Image src='/assets/icons/world.svg' layout='fill' alt='world' w={70} />
        <Text fontSize='xl' color='grey' fontWeight='bold'>
          e mais...
        </Text>
      </Stack>
    </Flex>
  )
}
