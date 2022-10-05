import { Box, Hide } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import SecondNavbar from "./SecondNavbar";
import ThirdNavbar from "./ThirdNavbar";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/AppContext";
import CorsError from "./CorsError";
import FirstNavbar from "./FirstNavbar";

function Navbar() {
  const [cors, setCors] = useState(true);
  const navigate = useNavigate();
  const { handleChange,main } = useContext(AppContext);
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
      {cors ? <CorsError setCors={setCors} /> : null}
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
