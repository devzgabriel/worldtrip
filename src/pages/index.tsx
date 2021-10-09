import { Flex, Text, Image, Box, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import { Header } from '../components/Header'
import { Banner } from '../components/Home/Banner'
import { ContinentSlide } from '../components/Home/ContinentSlide'
import { TopicIcons } from '../components/Home/TopicIcons'

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
        <Stack w='100%' align='center' spacing={20}>
          <Banner />
          <TopicIcons />

          <Box bg='grey' w={20} h={1} borderRadius={6} />

          <Text fontSize='5xl' color='grey' align='center'>
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Text>

          <ContinentSlide />
        </Stack>
      </Flex>
    </div>
  )
}
