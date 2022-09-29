import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/navbar.module.css";
function ThirdNavbar() {
  const navData = [
    {
      page: "COVID Essentials",
    },
    {
      page: "Diabetes",
    },
    {
      page: "Eyewear",
    },
    {
      page: "Ayush",
    },
    {
      page: "Ayurvedic",
    },
    {
      page: "Homeopathy",
    },
    {
      page: "Fitness",
    },
    {
      page: "Mom & Baby",
    },
    {
      page: "Devices",
    },
    {
      page: "Surgicals",
    },
    {
      page: "Sexual Wellness",
    },
    {
      page: "Treatments",
    },
  ];

  return (
    <Box bg={"white"}>
      <Flex w={"78%"} m="auto" className={styles.secondNavContainer}>
        {navData.map((item, i) => {
          return (
            <Flex
              mt={3}
              justifyContent={"space-evenly"}
              color={"grey"}
              fontSize={"14px"}
              fontWeight="bold"
              fontFamily={"Lato"}
              key={i}
            >
              <Text>{item.page}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}

export default ThirdNavbar;
