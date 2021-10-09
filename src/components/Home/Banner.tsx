import { Flex, Text, Image } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      h={500}
      w='100%'
      direction='row'
      backgroundImage="url('/assets/images/bg.png')"
      backgroundPosition='center'
      backgroundRepeat='no-repeat'
      backgroundSize='cover'
      align='center'
      justify='space-evenly'
    >
      <Flex direction='column'>
        <Text fontSize='5xl' fontWeight='bold' color='white'>
          5 Continentes,
          <br /> infinitas possibilidades.
        </Text>
        <Text fontSize='xl' color='white'>
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
        </Text>
      </Flex>

      <Image
        src='/assets/images/airplane.svg'
        layout='fill'
        alt='airplane'
        w={550}
        zIndex={9}
      />
    </Flex>
  )
}
