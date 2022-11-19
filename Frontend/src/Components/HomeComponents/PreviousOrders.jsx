import React from "react";
import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import styles from "../Styles/navbar.module.css";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";
function PreviousOrders() {
  return (
    <Box className={styles.newComponent}>
      <Flex p={4}>
        <Box borderRight={"0.1px solid grey"} display={"flex"} w={"50%"}>
          {/* <Icon as={ChevronRightIcon}/> */}
          <Box w={"70%"}>
            <Text className={styles.leftHeading}>Previous Orders</Text>
            <Text
              mt={2}
              fontWeight={"400"}
              lineHeight={"24px"}
              color={"rgba(11,18,25,.7)"}
              fontSize={"16px"}
            >
              Your previously ordered products
            </Text>
            <Link to={"/login"}>
              <Text
                color={"#24aeb1"}
                fontWeight={"bold"}
                fontSize={"15px"}
                display={"flex"}
                m={"auto"}
                mt={8}
                alignContent={"center"}
                alignItems={"center"}
              >
                View Orders
                <Icon
                  p={"2px"}
                  rounded={"50%"}
                  color={"white"}
                  fontWeight={"bold"}
                  bg={"#24aeb1"}
                  ml={12}
                  as={MdOutlineArrowForwardIos}
                />
              </Text>
            </Link>
          </Box>
          <Box w={"30%"}>
            <Image
              ml={10}
              h={"100%"}
              src={
                "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/previous_orders.svg"
              }
            />
          </Box>
        </Box>
        <Box ml={3} display={"flex"} w={"50%"}>
          <Box ml={3} w={"70%"}>
            <Text className={styles.leftHeading}>Beauty Products</Text>
            <Text fontWeight={"400"} color={"#5ba41c"}>
              Save Upto 40% off
            </Text>
            <Link to={"/beauty"}>
              <Button
                bg={"#24aeb1"}
                _hover={{ backgroundColor: "teal.500" }}
                p={2}
                color="white"
                ml={3}
                mb={3}
                mt={8}
              >
                Explore Beauty
              </Button>
            </Link>
          </Box>
          <Box w={"30%"}>
            <Image
              ml={10}
              h={"100%"}
              src={
                "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/beauty_products.svg"
              }
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default PreviousOrders;
