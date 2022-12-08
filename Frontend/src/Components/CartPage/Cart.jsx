import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import styles from "../Styles/navbar.module.css";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  // const { cartCount } = useSelector((store) => store.listData);
  const cartCount = JSON.parse(localStorage.getItem("cartCount")) || [];

  

  return (
    <>
      <Box
        textAlign={"left"}
        w={{ base: "96%", md: "70%" }}
        m={"auto"}
        mt={4}
        p={4}
        bg={"white"}
      >
        <Text textAlign={"center"} color={"red"}>
          Work In Progress!!!
        </Text>
        <Text className={styles.leftHeading}>Order Summary</Text>

        <Stack m={"auto"} mt={4} direction={{ base: "column", md: "row" }}>
          <Box w={{ base: "98%", md: "70%" }}>
            <Box key={cartCount[8]} mb={2} mt={2}>
              <Flex gap={4}>
                <Box w={"20%"}>
                  <Image
                    maxH={"100px"}
                    w={80}
                    src={`https://res.sastasundar.com/incom/images/product/thumb/${cartCount[11]}`}
                  />
                </Box>
                <Box
                  fontStyle={"italic"}
                  fontWeight={400}
                  color={"#6f7284"}
                  fontSize={12}
                  w={"80%"}
                >
                  <Text fontStyle={"normal"} color={"black"} fontSize={"md"}>
                    {cartCount[9]}
                  </Text>
                  <Text mt={2}>{cartCount[32]}</Text>
                  <Text>{cartCount[1]}</Text>
                  <Text
                    mt={3}
                    fontStyle={"normal"}
                    fontSize={16}
                    fontWeight={600}
                    color={"#ef4281"}
                  >
                    Rs.{cartCount[38]}
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>
          <Box p={3} w={{ base: "98%", md: "30%" }}>
            <Text fontWeight={"bold"}>Payment Details</Text>
            <Flex mt={6} justifyContent={"space-between"}>
              <Text>MRP Total: </Text>
              {/* <Text>{Math.floor(sum)}</Text> */}
            </Flex>
            <Flex fontWeight={600} justifyContent={"space-between"}>
              <Text>Total Amount: </Text>
              {/* <Text>{Math.floor(sum)}</Text> */}
            </Flex>
            <Box mt={4} align={"center"}>
              <Button
                color={"white"}
                _hover={{ bg: "teal.400" }}
                w={"100%"}
                bg={"#24aeb1"}
                fontSize={12}
              >
                Proceed
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Cart;
/*

      */
