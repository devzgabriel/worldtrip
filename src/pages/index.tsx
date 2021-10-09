import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>World Trip</title>
        <meta name='description' content='Your platform to travel' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Flex direction='column' h='100vh' w='100vw' align='center'>
        <Header />
      </Flex>
    </div>
  )
}
