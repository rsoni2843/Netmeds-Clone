import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
// import { GiHealthNormal } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styles from "../Styles/navbar.module.css";
const navData = [
  {
    src: "https://www.netmeds.com/assets/version1663621997/gloryweb/images/icons/medicine.svg",
    bg: "yellow.400",
    category: "Medicine",
    path: "/medicine",
  },
  {
    src: "https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg",
    bg: "pink.200",
    category: "Wellenss",
    path: "/fitness",
  },
  {
    src: "https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg",
    bg: "cyan.300",
    category: "Lab Tests",
    path: "/devices",
  },
  {
    src: "https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg",
    bg: "orange.300",
    category: "Beauty",
    path: "/beauty",
  },
  {
    src: "https://www.netmeds.com/assets/version1663621997/gloryweb/images/icons/health-library.svg",
    bg: "teal.600",
    category: "Health Corner",
    path: "/fitness",
  },
];
function SecondNavbar() {
  return (
    <Box pb={4}>
      <Flex className={styles.secondNavContainer}>
        {navData.map((item, i) => {
          return (
            <Box className={styles.secondNavContainerBox} key={i}>
              <NavLink to={item.path}>
                <Image src={item.src} bg={item.bg} />
                <Text mr={4}>{item.category}</Text>
              </NavLink>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default SecondNavbar;
