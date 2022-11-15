import { Flex, Hide, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Users/Login/login.action";
import styles from "../Styles/navbar.module.css";
import { useDispatch, useSelector } from "react-redux";

function LoginCart() {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = JSON.parse(localStorage.getItem("token"));
  const { isAuth } = useSelector((store) => store.login);
  // useEffect(() => {
  //   if (!isAuth) {
  //     // navigate("/");
  //   }
  // }, [isAuth]);
  return (
    <>
      <Flex
        fontSize={{ base: "15px", sm: "12px", md: "16px" }}
        w={{ base: "95%", sm: "38%" }}
        className={styles.b3}
      >
        <Link to={"/cart"}>
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Icon as={FaShoppingCart} />
            <Hide below={"md"}>
              <Text>Cart</Text>
            </Hide>
          </Flex>
        </Link>
        <Link to={isAuth ? "/" : "/login"}>
          <Flex onClick={() => dispatch(logout())} className={styles.b3}>
            <Icon as={FaUserCircle} />
            <Hide below={"md"}>
              <Text>{isAuth ? name.firstName : "Sign In / Sign Up"}</Text>
            </Hide>
          </Flex>
        </Link>
      </Flex>
    </>
  );
}

export default LoginCart;
