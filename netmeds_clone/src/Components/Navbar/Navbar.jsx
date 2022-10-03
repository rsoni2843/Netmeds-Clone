import {
  Alert,
  AlertIcon,
  Box,
  Button,
  CloseButton,
  Flex,
  Hide,
  Icon,
  Image,
  Input,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import styles from "../Styles/navbar.module.css";
import React, { useContext, useEffect, useState } from "react";
// import styles from "../Styles/navbar.module.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
// import { RiFilePaper2Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

import LocationMenu from "./LocationMenu/LocationMenu";
import SecondNavbar from "./SecondNavbar";
import ThirdNavbar from "./ThirdNavbar";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
const logo =
  "https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg";
function Navbar() {
  const [cors, setCors] = useState(true);
  const navigate = useNavigate();
  const { handleChange } = useContext(AppContext);
  const onChange = (e) => {
    handleChange(e.target.value);
    navigate("/medicine");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setCors(false);
    }, 20000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // console.log(cors);
  return (
    <Box bg={"#32aeb1"}>
      {cors ? (
        <Alert
          fontWeight={"500"}
          fontSize={{base:10,md:16,}}
          color={"white"}
          bg={"pink.400"}
          status="info"
        >
          <AlertIcon color={"white"} />
          <Flex
            w={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text className={styles.AlertComponent} textAlign={"left"}>
              Download and enable this CORS extension if data is not showing.{" "}
              <a
                href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en"
                target="blank"
              >
                <Button
                  bg={"white"}
                  p={1}
                  _hover={{ bg: "black", color: "white" }}
                  color={"black"}
                  size={"sm"}
                >
                  Click Here
                </Button>
              </a>
            </Text>
            <Text>
              <CloseButton
                onClick={() => setCors(false)}
                _hover={{ bg: "black", color: "white" }}
                rounded={"50%"}
              />
            </Text>
          </Flex>
        </Alert>
      ) : null}
      <Stack
        pb={4}
        bg={"#32aeb1"}
        className={styles.container}
        direction={{ base: "column", sm: "row" }}
      >
        <Box w={{ base: "95%", sm: "20%" }} className={styles.b1}>
          <Link to={"/"}>
            <Image
              width={{ base: "100px", sm: "155px" }}
              src={logo}
              alt={"NetMeds"}
            />
          </Link>
        </Box>

        <Box w={{ base: "95%", sm: "70%" }} className={styles.b2}>
          <Box>
            <Flex>
              <Hide below="md">
                <Box className={styles.locationBox}>
                  Deliver to
                  <LocationMenu />
                </Box>
              </Hide>
              <Box
                className={styles.inputContainer}
                w={{ base: "100%", lg: "90%" }}
              >
                <Input
                  variant={"unstyled"}
                  _active={{ border: "none", outline: "none" }}
                  border={"none"}
                  outline={"0"}
                  w={{ base: "100%", md: "90%" }}
                  h={{ base: "25px", md: "30px", lg: "40px" }}
                  ml={{ base: null, md: 5 }}
                  placeholder={"Search for medicines & wellness products..."}
                  onChange={onChange}
                />
                <Show below="sm">
                  <Icon fontWeight={"bold"} as={AiOutlineSearch} />
                </Show>
              </Box>
            </Flex>
          </Box>
          {/* {data?.length>0 &&
        <Box style={data?{display:"inline"}:{display:'none'}} bg='white' className={styles.autocomplete} >
        {data && data.map((item,i)=>{
          return <Text className={styles.autoItems} key={i}>{item.name}</Text>
        })}
        </Box>} */}
          {/* <Box border={'1px solid black'} w={'40%'} display={'block'} boxSizing={'border-box'} bg={'white'} position={'absolute'}>
            <Text>AJAJJAJAJA</Text>
            <Text>AJAJJAJAJA</Text>
            <Text>AJAJJAJAJA</Text>
            <Text>AJAJJAJAJA</Text>
            <Text>AJAJJAJAJA</Text>
          </Box> */}
        </Box>
        <Hide below="md">
          <Flex w={{ base: "95%", sm: "38%" }} className={styles.b3}>
            {/* <Box>
              <Icon as={RiFilePaper2Fill} />
              Upload
            </Box> */}
            <Link to={"/cart"}>
              <Box>
                <Icon as={FaShoppingCart} />
                Cart
              </Box>
            </Link>
            <Link to={"/login"}>
              <Box>
                <Icon as={FaUserCircle} />
                Sign in / Sign up
              </Box>
            </Link>
          </Flex>
        </Hide>
      </Stack>
      <Hide below="md">
        <SecondNavbar />
        <ThirdNavbar />
      </Hide>
      {/* <MedicinePage data={main}/> */}
      {/* <Image w={10} bg={'teal'} src={'https://www.iconpacks.net/icons/2/free-medicine-icon-3193-thumb.png'}/> */}
    </Box>
  );
}

export default Navbar;
