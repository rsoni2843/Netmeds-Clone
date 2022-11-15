import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { getPrivate } from "../../API/api";
import { useState } from "react";
import styles from "../Styles/navbar.module.css";
import { Link } from "react-router-dom";

function ShopCategory() {
  const [shopCategory, setShopCategory] = useState([]);

  useEffect(() => {
    getPrivate().then((res) => {
      setShopCategory(res.data.data.categories);
    });
  }, []);
  return (
    <Box>
      <Box w={"98%"} m={"auto"} mt={"280px"}>
        <Text className={styles.leftHeading}>Shop by Category</Text>
        <Grid
          m={"auto"}
          mt={5}
          gap={4}
          w={"98%"}
          templateColumns={"repeat(5,1fr)"}
        >
          {shopCategory.slice(3, 8).map((item, i) => {
            return (
              <Link key={i} to={"/beauty"}>
                <GridItem bg={"white"} boxShadow={"md"} p={3} key={item.id}>
                  <Image w={"70%"} m={"auto"} src={item.imageUrl} />
                  <Text fontWeight={"bold"}>{item.name}</Text>
                </GridItem>
              </Link>
            );
          })}
        </Grid>
      </Box>
      <Box w={"98%"} m={"auto"} mt={"30px"}>
        <Text className={styles.leftHeading}>Personal Care</Text>
        <Grid
          m={"auto"}
          mt={5}
          gap={4}
          w={"98%"}
          templateColumns={"repeat(5,1fr)"}
        >
          {shopCategory.slice(9, 14).map((item, i) => {
            return (
              <Link key={i} to={"/mom&baby"}>
                <GridItem bg={"white"} boxShadow={"md"} p={3} key={item.id}>
                  <Image w={"70%"} m={"auto"} src={item.imageUrl} />
                  <Text fontWeight={"bold"}>{item.name}</Text>
                </GridItem>
              </Link>
            );
          })}
        </Grid>
      </Box>
      <Box w={"98%"} m={"auto"} mt={"30px"}>
        <Text className={styles.leftHeading}>Men's Grooming</Text>
        <Grid
          m={"auto"}
          mt={5}
          gap={4}
          w={"98%"}
          templateColumns={"repeat(5,1fr)"}
        >
          {shopCategory.slice(0, 5).map((item, i) => {
            return (
              <Link key={i} to={"/covid_essentials"}>
                <GridItem bg={"white"} boxShadow={"md"} p={3} key={item.id}>
                  <Image w={"70%"} m={"auto"} src={item.imageUrl} />
                  <Text fontWeight={"bold"}>{item.name}</Text>
                </GridItem>
              </Link>
            );
          })}
        </Grid>
      </Box>
      <Flex
        bg={"white"}
        p={2}
        w={"96%"}
        borderBottom={"1px solid rgba(11,18,25,.1)"}
        justifyContent={"space-between"}
        m={"auto"}
        mt={5}
      >
        <Flex w={"30%"}>
          <Image
            w={20}
            src={
              "https://www.netmeds.com/assets/gloryweb/images/icons/new-icons/subscribe_and_schedule.svg"
            }
          />
          <Box>
            <Text textAlign={"left"} fontSize={19} fontWeight={600}>
              Get Medicine refill every month
            </Text>
            <ul
              color="grey"
              style={{
                fontSize: "12px",
                marginLeft: "19px",
                textAlign: "left",
              }}
            >
              <li>Subscribe and schedule next deliveries</li>
              <li>
                Subscribe for 12 months and get the last month free. *T&C Apply
              </li>
            </ul>
          </Box>
        </Flex>
        <Link to={"/covid_essentials"}>
          <Button
            bg={"#24aeb1"}
            _hover={{ backgroundColor: "teal.500" }}
            p={2}
            mt={3}
            color="white"
          >
            Subscribe
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default ShopCategory;
