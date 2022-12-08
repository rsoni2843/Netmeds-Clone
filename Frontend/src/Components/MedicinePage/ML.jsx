import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ML = () => {
  const { medList } = useSelector((store) => store.listData);

  if (!medList.products) {
    return (
      <Box m={"auto"}>
        <Image
          m={"auto"}
          src={
            "https://www.netmeds.com/assets/version1663621997/gloryweb/images/icons/no_search.png"
          }
        />
        <Text color={"grey"} fontSize={12}>
          Sorry! No Products Found
        </Text>
      </Box>
    );
  } else
    return (
      <>
        <Box w={{ base: "96%", md: "75%" }} m={"auto"} bg={"white"}>
          <Text fontSize={14} p={2} mt={3} color={"grey"} textAlign={"left"}>
            {/* Showing results for <b>{medList?.products[0][0]}</b> */}
          </Text>
          <Stack
            w={"100%"}
            m={"auto"}
            direction={{ base: "column", md: "row" }}
          >
            <Box p={4} w={{ base: "100%", md: "70%" }}>
              {medList?.products?.map((item, i) => {
                return (
                  <Link
                    key={item[9]}
                    onClick={() =>
                      localStorage.setItem("seeProduct", JSON.stringify(item))
                    }
                    to={`/medicine/${item[8]}`}
                  >
                    <Box
                      p={3}
                      bg="gray.50"
                      textAlign={"left"}
                      rounded={"lg"}
                      boxShadow="md"
                      w={"95%"}
                      m={"auto"}
                      mt={4}
                    >
                      <Flex
                        direction={{ base: "column", md: "row" }}
                        minH={"130px"}
                      >
                        <Box w={{ base: "98%", md: "25%" }}>
                          {!item[11] ? (
                            <Image
                              w={"100px"}
                              m={"auto"}
                              src={`https://www.netmeds.com/images/product-v1/75x75/formulation_based/tablets.jpg`}
                            />
                          ) : (
                            <Image
                              w={"100px"}
                              m={"auto"}
                              src={`https://res.sastasundar.com/incom/images/product/thumb/${item[11]}`}
                            />
                          )}
                        </Box>
                        <Box lineHeight={8} w={{ base: "98%", md: "50%" }}>
                          <Link
                            to={`/medicine/${item.productId}`}
                            key={item.productId}
                          >
                            <Text fontSize={18} fontWeight={600}>
                              {item[9]}
                            </Text>
                          </Link>
                          <Flex mt={3}>
                            <Text
                              fontSize={16}
                              fontWeight={600}
                              color={"#6f7284"}
                            >
                              Best price*
                            </Text>
                            <Text
                              color={"#ef4281"}
                              ml={1}
                              fontWeight={600}
                              fontSize={18}
                            >
                              ₹ {item[38]}
                            </Text>
                          </Flex>
                          <Flex
                            fontSize={14}
                            color={"#6f7284"}
                            fontWeight={400}
                          >
                            <Text>MRP </Text>
                            <Text ml={2} textDecoration={"line-through"}>
                              {" "}
                              ₹{item[68]}
                            </Text>
                          </Flex>
                          <Text
                            fontStyle={"italic"}
                            fontWeight={400}
                            color={"#6f7284"}
                            fontSize={12}
                          >
                            Mkt: {item[1]}
                          </Text>
                        </Box>

                        <Box
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          w={{ base: "98%", md: "25%" }}
                        >
                          <Button
                            onClick={() =>
                              localStorage.setItem(
                                "cartCount",
                                JSON.stringify(item)
                              )
                            }
                            color={"white"}
                            _hover={{ bg: "teal.400" }}
                            w={"100%"}
                            bg={"#24aeb1"}
                            fontSize={12}
                          >
                            ADD TO CART
                          </Button>
                        </Box>
                      </Flex>
                    </Box>
                  </Link>
                );
              })}
            </Box>
            <Box p={5} w={{ base: "100%", md: "30%" }}></Box>
          </Stack>
        </Box>
      </>
    );
};

export default ML;
