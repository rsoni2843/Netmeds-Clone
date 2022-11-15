import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import signup from "../Redux/Users/Signup/signup.action";

const SignupModal = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isLoading, isSignUp, errorMessage } = useSelector(
    (store) => store.signup
  );
  const [showPassword, setShowPassword] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.firstName && user.lastName && user.email && user.password) {
      dispatch(signup(user));
    }
  };
  useEffect(() => {
    if (isSignUp) {
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    }
  }, [isSignUp]);
  return (
    <Box bg={useColorModeValue("gray.50", "gray.400")}>
      <Box textAlign={"left"}>
        New to Netmeds?{" "}
        <Link color="#24AEB1" onClick={onOpen}>
          Create an account.
        </Link>
      </Box>
      <Modal isOpen={isOpen} size={"xl"} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex align={"center"} justify={"center"}>
              <Stack spacing={8} mx={"auto"} maxW={"lg"}>
                <Stack textAlign={"left"}>
                  <Heading fontSize={"2xl"}>Sign up</Heading>
                  <Text fontSize={"sm"} color={"gray.600"}>
                    Looks like you are new here. ✌️
                  </Text>
                </Stack>
                <Box
                  rounded={"lg"}
                  bg={useColorModeValue("white", "gray.700")}
                  p={2}
                >
                  <Stack spacing={4}>
                    <form onSubmit={handleSubmit}>
                      <HStack>
                        <Box>
                          <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input
                              placeholder={"Enter First Name"}
                              onChange={handleChange}
                              type="text"
                              name="firstName"
                              value={user.firstName}
                            />
                          </FormControl>
                        </Box>
                        <Box>
                          <FormControl isRequired id="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <Input
                              placeholder={"Enter Last Name"}
                              onChange={handleChange}
                              name="lastName"
                              value={user.lastName}
                              type="text"
                            />
                          </FormControl>
                        </Box>
                      </HStack>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          placeholder={"Enter Email"}
                          onChange={handleChange}
                          name="email"
                          value={user.email}
                          type="email"
                        />
                      </FormControl>
                      <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            placeholder="Enter Password"
                            name={"password"}
                            value={user.password}
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                          />
                          <InputRightElement h={"full"}>
                            <Button
                              variant={"ghost"}
                              onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                              }
                            >
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                      <Stack spacing={10} pt={2}>
                        <Button
                          type={"submit"}
                          isLoading={isLoading}
                          loadingText="Submitting"
                          size="lg"
                          _hover={{
                            bg: "#29ADB1",
                          }}
                          bg={"#24AEB1"}
                          color={"white"}
                        >
                          Sign up
                        </Button>
                      </Stack>
                    </form>

                    <Stack fontSize={"md"} pt={4}>
                      <Text align={"left"}>
                        Already a user?{" "}
                        <Link onClick={onClose} color={"blue.400"}>
                          Login
                        </Link>
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            {isSignUp ? (
              <Alert bg="none" status="success">
                <AlertIcon />
                Signup Successful. Please Login
              </Alert>
            ) : errorMessage ? (
              <Alert bg="none" status="warning">
                <AlertIcon />
                Email already exists. Please login with the existing email.
              </Alert>
            ) : null}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default SignupModal;
