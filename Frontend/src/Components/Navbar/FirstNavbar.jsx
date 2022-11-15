import {
  Box,
  Stack,
  Image,
  Flex,
  Hide,
  Input,
  Icon,
  Show,
} from "@chakra-ui/react";
import styles from "../Styles/navbar.module.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import LocationMenu from "./LocationMenu/LocationMenu";
import { AiOutlineSearch } from "react-icons/ai";
import LoginCart from "./LoginCart";
import { AppContext } from "../../Context/AppContext";
import { useNavigate } from "react-router-dom";

const logo =
  "https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg";
function FirstNavbar({ data }) {
  const navigate = useNavigate();
  const { handleChange } = useContext(AppContext);
  // const handleFilter = (e)=>{
  //   const word = e.target.value ;
  //   const newFilter = data.filter((value)=>{
  //     return value
  //   })
  //   console.log(newFilter) ;
  // }
  // const onChange = (e)=>{
  //   setText(e.target.value) ;
  // }
  // const onSearch = (term) =>{
  //   setText(term)
  // }
  const onEnter = (e) => {
    // handleChange()
    // console.log(text)
    handleChange(e.target.value);
    if (e.key === "Enter") {
      e.preventDefault();
      navigate("/medicine");
    }
  };
  // const onChange = (e)=>{
  //  handleChange(e.target.value) ;
  // }

  return (
    <>
      <Stack
        pb={4}
        bg={"#32aeb1"}
        className={styles.container}
        direction={{ base: "column", sm: "row" }}
      >
        <Box w={{ base: "100%", sm: "20%" }} className={styles.b1}>
          <Link to={"/"}>
            <Image
              width={{ base: "120px", sm: "155px" }}
              src={logo}
              alt={"NetMeds"}
            />
          </Link>
          <Box>
            <Show below="md">
              <LoginCart />
            </Show>
          </Box>
        </Box>

        <Box
          w={{ base: "100%", sm: "70%" }}
          borderRadius={{ base: "none", sm: "md" }}
          className={styles.b2}
        >
          <Box>
            <Flex>
              <Hide below="md">
                <Box
                  fontSize={{ md: "12px", lg: "15px" }}
                  className={styles.locationBox}
                >
                  Deliver to
                  <LocationMenu />
                </Box>
              </Hide>
              <Box w={{ base: "98%", md: "75%" }}>
                <Box className={styles.inputContainer}>
                  <Input
                    onKeyUp={onEnter}
                    variant={"unstyled"}
                    autoComplete={"off"}
                    _active={{ border: "none", outline: "none" }}
                    border={"none"}
                    outline={"0"}
                    // onBlur={()=>setTimeout()}
                    w={{ base: "100%", md: "100%" }}
                    h={{ base: "35px", md: "30px", lg: "40px" }}
                    ml={{ base: null, md: 3 }}
                    textAlign={{ base: "center", md: "left" }}
                    fontSize={{ base: "13px", md: "16px", lg: "16px" }}
                    placeholder={"Enter for medicines & wellness products..."}
                    // onChange={handleFilter}
                  />
                  {/* <ReactS */}
                  {/* <SearchBar
                  suggestions={data}
                  onSearch={()=>navigate('/medicine')}
                  onChange={handleChange}
                  onClear={()=>console.log("Clear")}
                  /> */}
                  <Show below="sm">
                    <Icon
                      _hover={{ color: "teal" }}
                      ml={2}
                      fontWeight={"bold"}
                      as={AiOutlineSearch}
                    />
                  </Show>
                </Box>
                <Box zIndex={5} w={"32%"} bg={"white"} pos={"absolute"}>
                  <Box overflow={"hidden"}>
                    {/* {nd?.map(((item,i)=>{
                      return <Box
                       
                      key={i}>{item[0]}</Box>
                    }))} */}

                    {/* <Autosuggest
                    suggestions={data}
                    onSuggestionsFetchRequested
                    onSuggestionsClearRequested
                    getSuggestionValue
                    renderSuggestion
                    inputProps={{placeholder:"",onChange:handleChange,value:""}}
                    /> */}
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Hide below="md">
          <LoginCart />
        </Hide>
      </Stack>
    </>
  );
}

export default FirstNavbar;
