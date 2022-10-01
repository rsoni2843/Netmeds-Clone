
import { getNutrition } from '../../API/api';
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Carousel from "react-multi-carousel";
import styles from "../Styles/navbar.module.css";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
function OriginNutrition() {
    const [nutrition,setNutrition] = useState([]) ;
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    useEffect(()=>{
      getNutrition()
      .then(res=>{
        // console.log(res) ; 
        setNutrition(res.data.data.products)
      })
    },[])
    // console.log(nutrition)
  return (
    <Box pos={"relative"} mt={'300px'}>
      <Box minH={200} bg={"#32aeb1"} color={"white"} border={"1px solid black"}>
        <Flex justifyContent={"space-between"} w={"98%"} m="auto">
          <Text fontSize={"24px"} fontWeight={500}>
          Origin Nutrition - Upto 35% off
          </Text>
          <Text
            display={"flex"}
            justifyContent={"space-between"}
            gap={3}
            alignItems={"center"}
            fontWeight={500}
            fontSize={"14px"}
          >
            View All <MdOutlineArrowForwardIos />
          </Text>
        </Flex>
        <Box
          
          zIndex={1}
          position={"absolute"}
          w={"98%"}
          m={"auto"}
          mt={10}
        >
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            focusOnSelect={true}
            draggable={false}
            containerClass={styles.dealContainer}
            removeArrowOnDeviceType={"mobile"}
            responsive={responsive}
          >
            {nutrition.map((item,i) => {
              return (
                <Flex
                key={i}
                minH={'350px'}
                maxH={'360px'}
                  bg={"white"}
                  m={2}
                  direction={"column"}
                  textAlign={"left"}
                  
                  boxShadow="md"
                  p="6"
                  borderRadius={20}
                >
                  <Image maxH={'160px'} w={"80%"} m={"auto"} src={item.images[0]} />
                  <Text color={'black'} fontWeight={600} fontSize={"13px"} ml={4}>
                    {item.name}
                  </Text>
                  <Text mt={3} fontWeight={500} color={"#5ba41c"} ml={4}>
                    {item.discountPercent}% Off
                  </Text>
                  <Button
                    _hover={{ bg: "teal.300" }}
                    bg={"#32aeb1"}
                    w={"90%"}
                    m="auto"
                    mt={4}
                  >
                    ADD TO CART
                  </Button>
                </Flex>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Box>
  )
}

export default OriginNutrition