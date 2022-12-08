import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../Styles/navbar.module.css";
import { trendingToday } from "./data";
import { Link } from "react-router-dom";

function TrendingToday() {
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
    <Box className={styles.newComponent}>
      <Text fontSize={{ base: "xl", md: "2xl" }} className={styles.leftHeading}>
        Trending Today
      </Text>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        focusOnSelect={true}
        draggable={false}
        containerClass={styles.changeButtons}
        removeArrowOnDeviceType={"mobile"}
        responsive={responsive}
      >
        {/* <Box></Box> */}
        {trendingToday.map((item, i) => {
          return (
            <Flex justifyContent={"center"} alignContent={"center"} key={i}>
              <Link to={item.path}>
                <Image
                  rounded={14}
                  h={{ lg: "220px", md: "180", base: "auto" }}
                  w={{ lg: "98%", md: "90%", base: "96%" }}
                  src={item.src}
                />
              </Link>
            </Flex>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default TrendingToday;
