import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import styles from "../Styles/navbar.module.css";
import "react-multi-carousel/lib/styles.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { limitedTimeDeal } from "./data";
import { Link } from "react-router-dom";
function LimitedTimeDeal() {
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
  return (
    <Box pos={"relative"} mt={8}>
      <Box minH={200} bg={"#32aeb1"} color={"white"}>
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
        <Box
          zIndex={1}
          position={{ md: "absolute" }}
          w={{ base: "70%", md: "98%" }}
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
            {limitedTimeDeal.map((item, i) => {
              return (
                <Link key={i} to={item.path}>
                  <Flex
                    bg={"white"}
                    m={2}
                    direction={"column"}
                    textAlign={"left"}
                    key={i}
                    boxShadow="md"
                    p="6"
                    borderRadius={20}
                  >
                    <Image w={"80%"} m={"auto"} src={item.src} />
                    <Text
                      color={"black"}
                      fontWeight={600}
                      fontSize={"19px"}
                      ml={4}
                    >
                      {item.name}
                    </Text>
                    <Text mt={3} fontWeight={500} color={"#5ba41c"} ml={4}>
                      {item.discount}
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
                </Link>
              );
            })}
          </Carousel>
        </Box>
      </Box>
    </Box>
  );
}

export default LimitedTimeDeal;
