import { Flex, Link, Image, Text, Icon, IconButton } from '@chakra-ui/react'
import { FiArrowLeft } from 'react-icons/fi'

export function Header({ goBackButton = false }: { goBackButton?: boolean }) {
  return (
    <Flex
      as='header'
      w='100%'
      h='auto'
      align='center'
      justify='center'
      maxWidth={1480}
      py={5}
      position='relative'
    >
      {goBackButton && (
        <Link href='/' passHref position='absolute' left={4}>
          <IconButton
            aria-label='Back'
            icon={<Icon as={FiArrowLeft} />}
            fontSize='24'
            variant='unstyled'
          />
        </Link>
      )}

      <Image src='/assets/Logo.svg' layout='fill' alt='woldTrip' />
    </Flex>
  )
}
