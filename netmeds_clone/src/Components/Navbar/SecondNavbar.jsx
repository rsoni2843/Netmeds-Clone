import { Box, Flex, Hide, Image, Stack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { GiHealthNormal } from "react-icons/gi";
import styles from "../Styles/navbar.module.css";
const navData = [
  {
    src: "https://www.iconpacks.net/icons/2/free-medicine-icon-3193-thumb.png",
    bg: "red.700",
    category: "Medicine",
  },
  {
    src: "https://cdn.pixabay.com/photo/2020/12/09/16/40/medical-5817909_1280.png",
    bg: "pink.200",
    category: "Wellenss",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/263/263032.png",
    bg: "cyan.300",
    category: "Lab Tests",
  },
  {
    src: "https://cdn-icons-png.flaticon.com/512/2798/2798003.png",
    bg: "orange.300",
    category: "Beauty",
  },
  {
    src: "https://brisdoc.co.uk/wp-content/uploads/2020/12/Health-Icon-1.svg",
    bg: "teal.600",
    category: "Health Corner",
  },
];
function SecondNavbar() {
  return (
    <Box pb={4}>
      <Flex className={styles.secondNavContainer}>
        {navData.map((item, i) => {
          return (
            <Box className={styles.secondNavContainerBox} key={i}>
              <Image src={item.src} bg={item.bg} />
              <Text>{item.category}</Text>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default SecondNavbar;
