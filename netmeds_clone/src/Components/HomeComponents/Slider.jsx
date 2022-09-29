import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from '../Styles/navbar.module.css' ; 
import "react-responsive-carousel/lib/styles/carousel.min.css";
const sliderImages = [
    {
        image:'https://www.netmeds.com/images/cms/aw_rbslider/slides/1664256054_Web_Homecc.jpg',
        path:'/'
    },
    {
        image:'https://www.netmeds.com/images/cms/aw_rbslider/slides/1661965702_Web_Homekareee.jpg',
        path:'/'
    },
    {
        image:'https://www.netmeds.com/images/cms/aw_rbslider/slides/1661966149_Web_Home.jpg',
        path:'/'
    },
    {
        image:'https://www.netmeds.com/images/cms/aw_rbslider/slides/1654275901_Web_Home_Kareenasdhdh.jpg',
        path:'/'
    },
    {
        image:'https://www.netmeds.com/images/cms/aw_rbslider/slides/1664373768_World-heart-day_Wellness-main-banner.jpg',
        path:'/'
    },

]

function Slider() {
  return (
    <Box className={styles.carouselContainer}>
        <Carousel showArrows={false} showStatus={false} autoFocus showThumbs={false} infiniteLoop interval={5000} autoPlay>
                {sliderImages.map((item,i)=>{
                    return <Image mt={10} h={{base:'100px',md:'200px',lg:'300px'}} key={i} src={item.image}/>
                })}
                
        </Carousel>
    </Box>
  )
}

export default Slider