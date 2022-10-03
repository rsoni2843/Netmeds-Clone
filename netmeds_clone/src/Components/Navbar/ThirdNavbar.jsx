import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../Styles/navbar.module.css";
function ThirdNavbar() {
  const navData = [
    {
      page: "COVID Essentials",
      path: "/covid_essentials",
    },
    {
      page: "Diabetes",
      path: "/diabetes",
    },
    {
      page: "Eyewear",
      path: "/eyewear",
    },
    {
      page: "Ayush",
      path: "/ayush",
    },
    {
      page: "Ayurvedic",
      path: "/ayurvedic",
    },
    {
      page: "Homeopathy",
      path: "/homeopathy",
    },
    {
      page: "Fitness",
      path: "/fitness",
    },
    {
      page: "Mom & Baby",
      path: "/mom&baby",
    },
    {
      page: "Devices",
      path: "devices",
    },
    {
      page: "Surgicals",
      path: "/surgicals",
    },
    {
      page: "Sexual Wellness",
      path: "/sexual_wellness",
    },
    {
      page: "Treatments",
      path: "/treatment",
    },
  ];

  return (
    <Box pb={3} bg={'white'}>
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
              <NavLink to={item.path}>
                <Text>{item.page}</Text>
              </NavLink>
            </Flex>
          );
        })}
      </Flex>
    </Box>
  );
}

export default ThirdNavbar;
