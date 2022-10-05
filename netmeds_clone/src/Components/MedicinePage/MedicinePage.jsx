import {
  Box,
  Button,
  Flex,
  Image,
  Skeleton,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";

function MedicinePage() {
  const { main } = useContext(AppContext);
  const [med, setMed] = useState([]);
  const [name, setName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  // const initPage = Number(searchParams.get("page")||1) ;
  // const [page,setPage] = useState(initPage)  ;
  useEffect(() => {
    setName(main?.config?.params?.q);
    // console.log(main);
    setMed(main?.data?.products);
    // setMed(main?.data?.data.products)
  }, [main]);
  // console.log(name);
  useEffect(() => {
    setSearchParams({ name });
  }, [name, setSearchParams]);
  // console.log(med[0][11])
  // console.log(main)
  return (
    <Box w={{ base: "96%", md: "75%" }} m={"auto"} bg={"white"}>
      <Text fontSize={14} p={2} mt={3} color={"grey"} textAlign={"left"}>
        Showing results for <b>{name}</b>
      </Text>
      <Stack w={"100%"} m={"auto"} direction={{ base: "column", md: "row" }}>
        <Box p={4} w={{ base: "100%", md: "70%" }}>
          {med?.map((item, i) => {
            return (
              <Box
                p={3}
                bg="gray.50"
                key={item[8]}
                textAlign={"left"}
                rounded={"lg"}
                boxShadow="md"
                w={"95%"}
                m={"auto"}
                mt={4}
              >
                <Flex direction={{ base: "column", md: "row" }} minH={"130px"}>
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
                    <Text fontSize={18} fontWeight={600}>
                      {item[10]}
                    </Text>
                    <Flex mt={3}>
                      <Text fontSize={16} fontWeight={600} color={"#6f7284"}>
                        Best price*
                      </Text>
                      <Text
                        color={"#ef4281"}
                        ml={1}
                        fontWeight={600}
                        fontSize={18}
                      >
                        ₹ {item[63]}
                      </Text>
                    </Flex>
                    <Flex fontSize={14} color={"#6f7284"} fontWeight={400}>
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
                    <Link to={"login"}>
                      {item[66] === "Y" ? (
                        <Tag color={"tomato"} size={"sm"} variant={"subtle"}>
                          <TagLabel>OUT OF STOCK</TagLabel>
                        </Tag>
                      ) : (
                        <Button
                          color={"white"}
                          _hover={{ bg: "teal.400" }}
                          w={"100%"}
                          bg={"#24aeb1"}
                          fontSize={12}
                        >
                          ADD TO CART
                        </Button>
                      )}
                    </Link>
                  </Box>
                </Flex>
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
