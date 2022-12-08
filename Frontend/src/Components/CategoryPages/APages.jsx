import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Hide,
  Image,
  Skeleton,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { getCategory } from "./../../Redux/MedicineData/medicine.action";
import { useEffect } from "react";
import styles from "../Styles/navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const APages = ({ ep }) => {
  const dispatch = useDispatch();
  const { categoryData, isLoading } = useSelector((store) => store.listData);
  function handleData() {
    dispatch(getCategory(ep));
  }
  useEffect(() => {
    handleData();
  }, [ep]);

  return (
    <Box className={styles.allMain}>
      <Flex>
        <Hide below="md">
          <Box className={styles.childDiv} w={"23%"}></Box>
        </Hide>

        <Box className={styles.childDiv} w={{ base: "100%", md: "77%" }}>
          <Flex>
            <Hide below="sm">
              <Text
                w={"50%"}
                fontSize={14}
                fontWeight={600}
                color={"rgba(21,27,57,.6)"}
              >
                All Products
              </Text>
            </Hide>
            <Stack
              direction={{ base: "column", md: "row" }}
              w={"50%"}
              m={"auto"}
            >
              {/* color: #24aeb1;
    border: 1px solid #24aeb1; */}
              <Text
                fontSize={14}
                fontWeight={600}
                mr={{ base: 15, md: 20 }}
                textAlign={"center"}
                color={"rgba(21,27,57,.6)"}
              >
                Sort by:{" "}
              </Text>
              <Tag
                className={styles.filterButtons}
                // onClick={() => setFilter({ sort: "popularity", direction: 1 })}
                fontWeight={400}
                size={"sm"}
                variant={"subtle"}
              >
                <TagLabel>Popularity</TagLabel>
              </Tag>
              <Tag
                className={styles.filterButtons}
                // onClick={() => setFilter({ sort: "price", direction: 0 })}
                size={"sm"}
                fontWeight={400}
                variant={"subtle"}
              >
                <TagLabel>Low to High</TagLabel>
              </Tag>
              <Tag
                // onClick={() => setFilter({ sort: "price", direction: 1 })}
                size={"sm"}
                fontWeight={400}
                className={styles.filterButtons}
                variant={"subtle"}
              >
                <TagLabel>High to Low</TagLabel>
              </Tag>
              <Tag
                // onClick={() => setFilter({ sort: "discount", direction: 1 })}
                size={"sm"}
                fontWeight={400}
                className={styles.filterButtons}
                variant={"subtle"}
              >
                <TagLabel>Discount</TagLabel>
              </Tag>
            </Stack>
          </Flex>

          <Grid
            p={2}
            rounded={"lg"}
            boxShadow="2xl"
            className={styles.allGrid}
            templateColumns={{
              base: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(4,1fr)",
            }}
          >
            {categoryData?.map((item) => {
              return isLoading ? (
                <Skeleton h={"200px"} bg={"blue.500"} fadeDuration={10}>
                  {/* <Box>ABBABABAB</Box> */}
                </Skeleton>
              ) : (
                <Link
                  onClick={() =>
                    localStorage.setItem("seeProduct", JSON.stringify(item))
                  }
                  to={`/medicine/${item[8]}`}
                >
                  <GridItem
                    w={"95%"}
                    m={"auto"}
                    mt={3}
                    p={2}
                    key={item[8]}
                    rounded={"lg"}
                    border={"solid 1px rgba(112,112,112,.38)"}
                  >
                    <Badge variant="solid" fontSize={10} bg="#84be52">
                      {item[37] + "%"}
                    </Badge>
                    {!item[11] ? (
                      <Image
                        w={{ base: "50%" }}
                        m={"auto"}
                        rounded={"50%"}
                        // h={{ base: "100px" }}
                        minH={"140px"}
                        src={
                          "https://www.netmeds.com/images/product-v1/75x75/formulation_based/creams.jpg"
                        }
                      />
                    ) : (
                      <Image
                        w={{ base: "65%" }}
                        m={"auto"}
                        h={{ base: "140px" }}
                        src={`https://res.sastasundar.com/incom/images/product/thumb/${item[11]}`}
                      />
                    )}
                    <Box w={"95%"} m={"auto"}>
                      <Text
                        color={"#151b39"}
                        lineHeight={4}
                        minH={14}
                        fontWeight={600}
                        fontSize={12}
                        letterSpacing={0}
                        display={"block"}
                        overflow={"hidden"}
                      >
                        {item[9]}
                      </Text>
                      <Text
                        fontStyle={"italic"}
                        fontWeight={400}
                        color={"#6f7284"}
                        fontSize={12}
                      >
                        Mkt: {item[0]}
                      </Text>
                      <Flex>
                        <Text fontSize={14} fontWeight={600} color={"#6f7284"}>
                          Best price*
                        </Text>
                        <Text
                          color={"#ef4281"}
                          ml={1}
                          fontWeight={600}
                          fontSize={16}
                        >
                          Rs. {item[38]}
                        </Text>
                      </Flex>
                      <Flex fontSize={12} color={"#6f7284"} fontWeight={400}>
                        <Text>MRP </Text>
                        <Text ml={2} textDecoration={"line-through"}>
                          {"Rs. "}
                          {item[68]}
                        </Text>
                      </Flex>
                      {/* <Link to={isAuth ? "/cart" : "/login"}> */}
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
                      {/* </Link> */}
                    </Box>
                  </GridItem>
                </Link>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
};

export default APages;
