import Head from 'next/head'
import { Flex, Image, Text, Icon } from '@chakra-ui/react'
import { Header } from '../components/Header'

export default function Continent() {
  return (
    <div>
      <Head>
        <title>World Trip</title>
        <meta name='description' content='Your platform to travel' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Flex direction='column' h='100vh' w='100vw' align='center'>
        <Header goBackButton />
      </Flex>
    </div>
  )
}
