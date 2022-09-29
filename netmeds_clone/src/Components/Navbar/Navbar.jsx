import {
  Box,
  Flex,
  Hide,
  Icon,
  Image,
  Input,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";
import styles from "../Styles/navbar.module.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { RiFilePaper2Fill, RiMedicineBottleFill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

import LocationMenu from "./LocationMenu/LocationMenu";
import SecondNavbar from "./SecondNavbar";
import ThirdNavbar from "./ThirdNavbar";
const logo =
  "https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg";
function Navbar() {
  return (
    <Box bg={"#32aeb1"}>
      <Stack
        pb={4}
        bg={"#32aeb1"}
        className={styles.container}
        direction={{ base: "column", sm: "row" }}
      >
        <Box w={{ base: "95%", sm: "20%" }} className={styles.b1}>
          <Image
            width={{ base: "100px", sm: "155px" }}
            src={logo}
            alt={"NetMeds"}
          />
        </Box>
        <Box w={{ base: "95%", sm: "70%" }} className={styles.b2}>
          <Flex>
            <Hide below="md">
              <Box className={styles.locationBox}>
                Deliver to
                <LocationMenu />
              </Box>
            </Hide>
            <Box className={styles.inputContainer}  w={{base:'100%',lg:'90%'}}>
              <Input w={{base:'100%',md:'90%'}} h={{base:'25px',md:'30px',lg:'40px'}}
                placeholder={"Search for medicines & wellness products..."}
              />
              <Show below='sm'><Icon fontWeight={'bold'} as={AiOutlineSearch}/></Show>
            </Box>
          </Flex>
        </Box>
        <Hide below="md">
          <Flex w={{ base: "95%", sm: "38%" }} className={styles.b3}>
            <Box>
              <Icon as={RiFilePaper2Fill} />
              Upload
            </Box>
            <Box>
              <Icon as={FaShoppingCart} />
              Cart
            </Box>
            <Box>
              <Icon as={FaUserCircle} />
              Sign in / Sign up
            </Box>
          </Flex>
        </Hide>
      </Stack>
      <Hide below="md">
        <SecondNavbar />
        <ThirdNavbar />
      </Hide>

      {/* <Image w={10} bg={'teal'} src={'https://www.iconpacks.net/icons/2/free-medicine-icon-3193-thumb.png'}/> */}
    </Box>
  );
}

export default Navbar;
