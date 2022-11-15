import { Alert, AlertIcon, Button, CloseButton, Flex, Text } from "@chakra-ui/react";
import styles from "../Styles/navbar.module.css";

import React from "react";

function CorsError({setCors}) {
  return (
    <>
      <Alert
        fontWeight={"500"}
        fontSize={{ base: 10, md: 16 }}
        color={"white"}
        bg={"pink.400"}
        status="info"
      >
        <AlertIcon color={"white"} />
        <Flex w={"100%"} justifyContent={"space-between"} alignItems={"center"}>
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
    </>
  );
}

export default CorsError;
