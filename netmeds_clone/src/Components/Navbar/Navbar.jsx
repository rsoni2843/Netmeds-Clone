import { Box, Icon, Image, Input, Stack } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/navbar.module.css";
import { FaShoppingCart } from "react-icons/fa";
const logo =
  "https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg";
function Navbar() {
  return (
    <Box className={styles.navbar}>
      <Stack
      
       width={{md:'90%',lg:'75%'}}
        m="auto"
        direction={{ base: "column", md: "row" }}
      >
        <Box>
          <Image
            m="auto"
            width={{ lg:'150px',md:'125px',base:'110px' }}
            className={styles.logo}
            alt={"Netmeds"}
            src={logo}
          />
        </Box>
        <Box>
          <Input w={'90%'} className={styles.input} />
        </Box>
        <Box display={{base:'none',lg:'block',md:'block'}}>
          <Icon as={FaShoppingCart} />
        </Box>
      </Stack>
    </Box>
  );
}

export default Navbar;
