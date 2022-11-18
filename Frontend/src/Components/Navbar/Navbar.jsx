import { Box, Hide } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import SecondNavbar from "./SecondNavbar";
import ThirdNavbar from "./ThirdNavbar";
// import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import CorsError from "./CorsError";
import FirstNavbar from "./FirstNavbar";

function Navbar() {
  const { handleChange, main } = useContext(AppContext);
  const onChange = (e) => {
    handleChange(e.target.value);
  };
  // const onEnter = (e)=>{
  //   // handleChange()
  //   handleChange(e.target.value) ;
  //   if(e.key === "Enter"){
  //     e.preventDefault() ;
  //     navigate('/medicine')
  //   }
  // }

  // console.log(cors);
  return (
    <Box bg={"#32aeb1"}>
      <FirstNavbar data={main} onChange={onChange} />
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
