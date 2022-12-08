import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const store = useSelector((store) => store.login);
  console.log(store.isAuth);
  if (!store.isAuth) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default PrivateRoute;
