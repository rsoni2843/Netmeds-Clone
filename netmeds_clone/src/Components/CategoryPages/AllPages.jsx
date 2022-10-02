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
  Text,
} from "@chakra-ui/react";
import { getCategory } from "../../API/api";
import styles from "../Styles/navbar.module.css";

function AllPages({ ep }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleData();
  }, []);
  function handleData() {
    getCategory(ep).then((res) => {
      setData(res?.data?.data.products);
    });
  }
  console.log(data);

  return (
    <Box className={styles.allMain}>

      <Flex>
        <Hide below="md"><Box className={styles.childDiv} w={"23%"}></Box></Hide>
        <Box className={styles.childDiv} w={{base:"100%",md:"77%"}}>
          <Text fontSize={14} fontWeight={600} color={'rgba(21,27,57,.6)'}>All Products</Text>
          <Grid
            className={styles.allGrid}
            templateColumns={{ base: "repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(4,1fr)" }}
          >
            {data?.map((item) => {
              return (
                <GridItem
                  w={"95%"}
                  m={"auto"}
                  mt={3} 
                  p={2}
                  rounded={'lg'}
                  border={'solid 1px rgba(112,112,112,.38)'}
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
                    color={'#151b39'}
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
                    <Text fontStyle={'italic'} fontWeight={400} color={'#6f7284'} fontSize={12}>Mkt: {item.manufacturer}</Text>
                    <Flex>
                      <Text fontSize={14} fontWeight={600} color={'#6f7284'}>Best price*</Text>
                      <Text color={'#ef4281'} ml={1} fontWeight={600} fontSize={16}>Rs. {item.salePriceDecimal}</Text>
                    </Flex>
                    <Flex fontSize={12} color={'#6f7284'} fontWeight={400}>
                      <Text>MRP </Text>
                      <Text ml={2} textDecoration={'line-through'}> {item.mrpDecimal}</Text>
                    </Flex>
                    <Button color={'white'} _hover={{bg:"teal.400"}} w={'100%'} bg={'#24aeb1'} fontSize={12}>ADD TO CART</Button>
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
