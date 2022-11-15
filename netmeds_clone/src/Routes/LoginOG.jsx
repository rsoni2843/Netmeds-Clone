import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Hide,
  Image,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import login from "../Redux/Users/Login/login.action";

const LoginOG = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { isLoading, isError, isAuth, noEmail, incorrectEmail } = useSelector(
    (store) => store.login
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      dispatch(login(user));
    }
    console.log(user);
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <Flex
      alignItems={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Hide below={"lg"}>
        <Image
          ml={26}
          src="https://www.netmeds.com/images/cms/wysiwyg/cms/1588773798_sign-in-banner-new.png"
        />
      </Hide>
      <Stack
        spacing={8}
        mx={"auto"}
        maxW={"lg"}
        w={{ md: "40%", base: "98%" }}
        py={12}
        px={6}
      >
        <Stack textAlign={"left"}>
          <Heading fontSize={"2xl"}>Sign In / Sign Up</Heading>
          <Text fontSize={"sm"} color={"gray.400"}>
            Sign up or Sign in to access your orders, special offers, health
            tips and more!
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          {noEmail ? (
            <Alert bg="none" status="error">
              <AlertIcon />
              Email does not exists. Please Register.
            </Alert>
          ) : incorrectEmail ? (
            <Alert bg="none" status="warning">
              <AlertIcon />
              Incorrect email or password.
            </Alert>
          ) : null}
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl isRequired id="email">
                <FormLabel color={"#24AEB1"}>Email address</FormLabel>
                <Input
                  onChange={handleChange}
                  value={user.email}
                  name={"email"}
                  type="email"
                />
              </FormControl>
              <FormControl isRequired id="password">
                <FormLabel color={"#24AEB1"}>Password</FormLabel>
                <Input
                  onChange={handleChange}
                  name={"password"}
                  value={user.password}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox isRequired color={"black"}>
                    Remember me
                  </Checkbox>
                  <Link color={"#24AEB1"}>Forgot password?</Link>
                </Stack>
                <Button
                  type={"submit"}
                  isLoading={isLoading}
                  bg={"#24AEB1"}
                  color={"white"}
                  _hover={{
                    bg: "#29ADB1",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </form>

            <Stack direction={{ sm: "row", base: "column" }}>
              {/* Facebook */}
              <Button
                w={"full"}
                colorScheme={"facebook"}
                leftIcon={<FaFacebook />}
              >
                <Center>
                  <Text>Facebook</Text>
                </Center>
              </Button>

              {/* Google */}
              <Button
                w={"full"}
                color={"black"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
              >
                <Center>
                  <Text>Google</Text>
                </Center>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginOG;
