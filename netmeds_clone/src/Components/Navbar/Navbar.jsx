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

import React, { useCallback, useEffect, useState } from "react";
import styles from "../Styles/navbar.module.css";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";

import LocationMenu from "./LocationMenu/LocationMenu";
import SecondNavbar from "./SecondNavbar";
import ThirdNavbar from "./ThirdNavbar";
import { getMedicine } from "../../API/api";
import { useNavigate } from "react-router-dom";
const logo =
  "https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg";
function Navbar() {
  const navigate = useNavigate() ; 
  const [data,setData] = useState('') ; 
  // const [medicine,setMedicine] = useState([]) ; 
  const handleKeyDown = (e)=>{
    if(e.key === "Enter"){
      e.preventDefault() ; 
      setData(data)
      navigate('/medicine')
    }
  }
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 2000);
    };
  };
  // useEffect(()=>{
    
  //     getMedicine(data)
  //     .then(res=>{
  //       // console.log(res) ;
  //       setMedicine(res) 
  //     })
  //     .catch(err=>{console.log(err)})
    
    
    
  // },[data])
  const handleChange = (val) =>{
    getMedicine(val)
    .then(res=>setData(res.data.data.products))
  }
  const optFn = useCallback(debounce(handleChange),[]);
  console.log(data)

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
        <Box >
          <Flex>
            <Hide below="md">
              <Box className={styles.locationBox}>
                Deliver to
                <LocationMenu />
              </Box>
            </Hide>
            <Box className={styles.inputContainer}  w={{base:'100%',lg:'90%'}}>
              <Input variant={'unstyled'} _active={{border:'none',outline:'none'}} border={'none'} outline={'0'} w={{base:'100%',md:'90%'}} h={{base:'25px',md:'30px',lg:'40px'}}
                ml={{base:null,md:5}} placeholder={"Search for medicines & wellness products..."}
                onChange={e=>optFn(e.target.value)}
                name='data'
                id='data'
                onKeyDown={handleKeyDown}
              />
              <Show below='sm'><Icon fontWeight={'bold'} as={AiOutlineSearch}/></Show>
              
            </Box>
          </Flex>
          
        </Box>
        {/* <Box border={'1px solid black'} w={'40%'} display={'block'} boxSizing={'border-box'} bg={'white'} position={'absolute'}>
        {data && data.map((item,i)=>{
          return <Text key={i}>{item.name}</Text>
        })}
        </Box> */}
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
