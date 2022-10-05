import React, { useEffect, useState } from "react";
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
import { getCategory } from "../../API/api";
import styles from "../Styles/navbar.module.css";
import { useSearchParams } from "react-router-dom";

function AllPages({ ep }) {
  const [data, setData] = useState([]);
  // const [pd,setPd] = useState([]) ;
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState({ sort: "", direction: "" });
  const [searchParams, setSearchParams] = useSearchParams();
  const initPage = Number(searchParams.get("page") || 1);
  const [page, setPage] = useState(initPage);

  useEffect(() => {
    // setLoading(true)
    handleData();
  }, [filter]);
  function handleData() {
    setLoading(true);
    getCategory(ep, filter)
      .then((res) => {
        setLoading(false);
        setData(res?.data.products);
      })
      .finally(() => setLoading(false));
  }
  useEffect(() => {
    setSearchParams({ ...filter, page });
  }, [page, filter, setSearchParams]);

  return (
    <Box className={styles.allMain}>
      {/* <Skeleton> */}
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
                onClick={() =>
                  setFilter({ sort: "popularity", direction: "1" })
                }
                fontWeight={400}
                size={"sm"}
                variant={"subtle"}
              >
                <TagLabel>Popularity</TagLabel>
              </Tag>
              <Tag
                className={styles.filterButtons}
                onClick={() => setFilter({ sort: "price", direction: "0" })}
                size={"sm"}
                fontWeight={400}
                variant={"subtle"}
              >
                <TagLabel>Low to High</TagLabel>
              </Tag>
              <Tag
                onClick={() => setFilter({ sort: "price", direction: "1" })}
                size={"sm"}
                fontWeight={400}
                className={styles.filterButtons}
                variant={"subtle"}
              >
                <TagLabel>High to Low</TagLabel>
              </Tag>
              <Tag
                onClick={() => setFilter({ sort: "discount", direction: "1" })}
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
            {data?.map((item) => {
              return loading ? (
                <Skeleton h={"200px"} bg={"blue.500"} fadeDuration={10}>
                  <Box>ABBABABAB</Box>
                </Skeleton>
              ) : (
                <GridItem
                  w={"95%"}
                  m={"auto"}
                  mt={3}
                  p={2}
                  key={item.name}
                  rounded={"lg"}
                  border={"solid 1px rgba(112,112,112,.38)"}
                >
                  <Badge variant="solid" fontSize={10} bg="#84be52">
                    {item.discountPercent + "%"}
                  </Badge>
                  <Image
                    w={{ base: "30%" }}
                    m={"auto"}
                    h={{ base: "140px" }}
                    src={item.images[0]}
                  />
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
                      {item.name}
                    </Text>
                    <Text
                      fontStyle={"italic"}
                      fontWeight={400}
                      color={"#6f7284"}
                      fontSize={12}
                    >
                      Mkt: {item.manufacturer}
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
                        Rs. {item.salePriceDecimal}
                      </Text>
                    </Flex>
                    <Flex fontSize={12} color={"#6f7284"} fontWeight={400}>
                      <Text>MRP </Text>
                      <Text ml={2} textDecoration={"line-through"}>
                        {" "}
                        {item.mrpDecimal}
                      </Text>
                    </Flex>
                    <Button
                      color={"white"}
                      _hover={{ bg: "teal.400" }}
                      w={"100%"}
                      bg={"#24aeb1"}
                      fontSize={12}
                    >
                      ADD TO CART
                    </Button>
                  </Box>
                </GridItem>
              );
            })}
          </Grid>
        </Box>
      </Flex>
    </Box>
  );
}

export default AllPages;
