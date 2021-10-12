import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import Head from 'next/head'
import Router from 'next/router'
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
        <Stack w='100%' align='center' spacing={20} pb={10}>
          <Banner />
          <TopicIcons />

          <Box bg='grey' w={20} h={1} borderRadius={6} />

          <Text fontSize='5xl' color='grey' align='center'>
            Here we go?
            <br />
            So choose your continent
          </Text>

          <ContinentSlide
            handleClickSlide={(slug) => Router.push(`/continent/${slug}`)}
          />
        </Stack>
      </Flex>
    </div>
  )
}
