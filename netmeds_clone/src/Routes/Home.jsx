import { Box } from '@chakra-ui/react'
import React from 'react'
import ProductsSlider from '../Components/HomeComponents/ProductsSlider';
import Slider from './../Components/HomeComponents/Slider';

function Home() {
  return (
    <Box>
        <Slider/>
        <ProductsSlider/>
    </Box>
  )
}

export default Home