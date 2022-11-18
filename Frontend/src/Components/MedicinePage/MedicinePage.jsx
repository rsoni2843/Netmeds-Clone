import { Box, Button, Flex, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

function MedicinePage() {
  const [params, setParams] = useSearchParams();
  const { isAuth } = useSelector((store) => store.login);
  const { medList, query } = useSelector((store) => store.listData);
  const [q, setQ] = useState(query);
  const listArray = medList?.products;

  useEffect(() => {
    setParams({ q });
  }, [q, setParams]);

  if (!medList.products) {
    return (
      <Box m={"auto"}>
        {/* <Text>Nothing Found</Text> */}
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
      <Box w={{ base: "96%", md: "75%" }} m={"auto"} bg={"white"}>
        <Text fontSize={14} p={2} mt={3} color={"grey"} textAlign={"left"}>
          Showing results for <b>{query}</b>
        </Text>
        <Stack w={"100%"} m={"auto"} direction={{ base: "column", md: "row" }}>
          <Box p={4} w={{ base: "100%", md: "70%" }}>
            {listArray?.map((item, i) => {
              return (
                <Box
                  p={3}
                  bg="gray.50"
                  key={item.productId}
                  textAlign={"left"}
                  rounded={"lg"}
                  boxShadow="md"
                  w={"95%"}
                  m={"auto"}
                  mt={4}
                >
                  <Link to={`/medicine/${item.productId}`} key={item.productId}>
                    <Flex
                      direction={{ base: "column", md: "row" }}
                      minH={"130px"}
                    >
                      <Box w={{ base: "98%", md: "25%" }}>
                        {!item.image ? (
                          <Image
                            w={"100px"}
                            m={"auto"}
                            src={`https://www.netmeds.com/images/product-v1/75x75/formulation_based/tablets.jpg`}
                          />
                        ) : (
                          <Image w={"100px"} m={"auto"} src={item.image} />
                        )}
                      </Box>
                      <Box lineHeight={8} w={{ base: "98%", md: "50%" }}>
                        <Text fontSize={18} fontWeight={600}>
                          {item.name}
                        </Text>
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
                            ₹ {item?.salePriceDecimal}
                          </Text>
                        </Flex>
                        <Flex fontSize={14} color={"#6f7284"} fontWeight={400}>
                          <Text>MRP </Text>
                          <Text ml={2} textDecoration={"line-through"}>
                            {" "}
                            ₹{item?.mrpDecimal}
                          </Text>
                        </Flex>
                        <Text
                          fontStyle={"italic"}
                          fontWeight={400}
                          color={"#6f7284"}
                          fontSize={12}
                        >
                          Mkt: {item.manufacturer}
                        </Text>
                      </Box>

                      <Box
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        w={{ base: "98%", md: "25%" }}
                      >
                        <Link to={isAuth ? "/cart" : "/login"}>
                          <Button
                            color={"white"}
                            _hover={{ bg: "teal.400" }}
                            w={"100%"}
                            bg={"#24aeb1"}
                            fontSize={12}
                          >
                            ADD TO CART
                          </Button>
                        </Link>
                      </Box>
                    </Flex>
                  </Link>
                </Box>
              );
            })}
          </Box>
          <Box p={5} w={{ base: "100%", md: "30%" }}></Box>
        </Stack>
      </Box>
    );
}

export default MedicinePage;
