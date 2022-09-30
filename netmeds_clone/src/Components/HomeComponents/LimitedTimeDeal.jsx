import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getPrivate } from "../../API/api";
import Carousel from "react-multi-carousel";
import styles from "../Styles/navbar.module.css";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
function LimitedTimeDeal() {
  const [deal, setDeal] = useState([]);
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
  useEffect(() => {
    getPrivate().then((res) => {
      setDeal(res.data.data.categories);
    });
  }, []);
  console.log(deal);
  return (
    <Box mt={8}>
      <Box minH={200} bg={"#32aeb1"} color={"white"} border={"1px solid black"}>
        <Flex justifyContent={"space-between"} w={"98%"} m="auto">
          <Text fontSize={"24px"} fontWeight={500}>
            Limited Time Deals
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
      </Box>
      <Box w={"98%"} m={"auto"}>
        <Carousel
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          focusOnSelect={true}
          draggable={false}
          containerClass={styles.dealContainer}
          // containerClass={styles.changeButtons}
          // customLeftArrow={<MdOutlineArrowForwardIos/>}
          removeArrowOnDeviceType={"mobile"}
          // itemClass="carousel-item-padding-40-px"
          responsive={responsive}
        >
          {deal.map((item) => {
            return (
              <Flex
                m={2}
                direction={"column"}
                textAlign={"left"}
                key={item.id}
                boxShadow="md"
                p="6"
                rounded="md"
              >
                <Image w={"80%"} m={"auto"} src={item.imageUrl} />
                <Text mt={3} fontWeight={600} fontSize={"19px"} ml={4}>
                  {item.name}
                </Text>
                <Text mt={3} fontWeight={500} color={"#5ba41c"} ml={4}>
                  {item.discountText}
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
  );
}

export default LimitedTimeDeal;
