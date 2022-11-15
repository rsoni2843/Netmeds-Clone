import React, { useEffect, useState } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../Styles/navbar.module.css";
import { getPrivate } from "../../API/api";
// import { MdOutlineArrowForwardIos } from 'react-icons/md';

function TrendingToday() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getPrivate().then((res) => {
      // console.log(res)
      setTrending(res.data.data.banner);
    });
  }, []);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box m={"auto"}>
      <Text>Trending Today</Text>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        focusOnSelect={true}
        draggable={false}
        containerClass={styles.changeButtons}
        // customLeftArrow={<MdOutlineArrowForwardIos/>}
        removeArrowOnDeviceType={"mobile"}
        // itemClass="carousel-item-padding-40-px"
        responsive={responsive}
      >
        {/* <Box></Box> */}
        {trending.map((item, i) => {
          return (
            <Flex justifyContent={"center"} alignContent={"center"} key={i}>
              <Image
                rounded={14}
                h={{ lg: "220px", md: "180", base: "auto" }}
                w={{ lg: "83%", md: "90%", base: "96%" }}
                src={item.image}
              />
            </Flex>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default TrendingToday;
