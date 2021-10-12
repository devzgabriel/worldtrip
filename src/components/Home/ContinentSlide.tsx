import React, { useState } from 'react'
import { Box, Flex, HStack, Image, Stack, Text, theme } from '@chakra-ui/react'
import { slides } from '../../utils/slides'

export function ContinentSlide() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slidesCount = slides.length

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))
  }

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))
  }

  const setSlide = (slide) => {
    setCurrentSlide(slide)
  }

  const carouselStyle = {
    transition: 'all .5s',
    ml: `-${currentSlide * 100}%`,
  }

  const arrowStyles = {
    cursor: 'pointer',
    top: '50%',
    w: 'auto',
    mt: '-22px',
    p: '16px',
    color: theme.colors.yellow[300],
    bg: theme.colors.blackAlpha[500],
    fontWeight: 'bold',
    fontSize: '18px',
    transition: '0.6s ease',
    _hover: {
      opacity: 0.8,
      bg: 'black',
    },
  }

  return (
    <Flex w='full' px={36} alignItems='center' justifyContent='center'>
      <Flex w='full' pos='relative' overflow='hidden' borderRadius='6px'>
        <Flex h={600} w='full' {...carouselStyle} bg='black'>
          {slides.map((slide, index) => (
            <Box key={index} boxSize='full' shadow='md' flex='none' bg='black'>
              <Image
                src={slide.img}
                alt={slide.label}
                boxSize='full'
                backgroundSize='cover'
                opacity='0.5'
                width='full'
                height='full'
              />
              <Stack
                pos='absolute'
                textAlign='center'
                top='40%'
                w='full'
                color='white'
              >
                <Text fontSize='5xl' fontWeight='bold'>
                  {slide.label}
                </Text>
                <Text fontSize='xl'>{slide.description}</Text>
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text
          {...arrowStyles}
          pos='absolute'
          userSelect='none'
          left='0'
          borderRadius='0 8px 8px 0'
          onClick={prevSlide}
          _hover={{ opacity: 0.8, bg: 'black' }}
        >
          &#10094;
        </Text>
        <Text
          {...arrowStyles}
          userSelect='none'
          pos='absolute'
          right='0'
          borderRadius='8px 0 0 8px'
          onClick={nextSlide}
        >
          &#10095;
        </Text>
        <HStack justify='center' pos='absolute' bottom='8px' w='full'>
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor='pointer'
              boxSize={['7px', , '15px']}
              m='0 2px'
              bg={
                currentSlide === slide
                  ? theme.colors.yellow[500]
                  : theme.colors.blackAlpha[500]
              }
              rounded='50%'
              display='inline-block'
              transition='background-color 0.6s ease'
              _hover={{ bg: theme.colors.yellow[500] }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  )
}
