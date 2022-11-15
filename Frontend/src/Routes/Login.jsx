import {
  Box,
  Button,
  Collapse,
  FormControl,
  FormLabel,
  HStack,
  Input,
  PinInput,
  PinInputField,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { signInWithGoogle } from "../Firebase Authentication/firebase";

function Login() {
  const [mobile, setMobile] = useState();
  const [otp, setOtp] = useState();
  const { isOpen, onToggle } = useDisclosure();
  const [val, setVal] = useState("");
  function handleChange(e) {
    const { name, value } = e.target;
    setMobile({
      [name]: value,
    });
  }
  console.log(val);
  function handeleOTP(e) {
    const { name, value } = e.target;
    setOtp({
      [name]: value,
    });
  }

  function configureCaptcha() {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("Captcha resolved");
          onSignInSubmit();
        },
        defaultCountry: "IN",
      },
      auth
    );
  }
  function onSignInSubmit(e) {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = "+91" + mobile.mobile;
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        alert("OTP Sent Successful");
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
        alert("Can't Send SMS");
      });
  }
  function onSubmitOTP(e) {
    e.preventDefault();
    const code = otp.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        alert("User is Verified");
        console.log(user);
        // ...
      })
      .catch((error) => {
        alert("Could not verify User");
        console.log(error);
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }

  return (
    <Box>
      <div id="recaptcha-container"></div>
      <FormControl isRequired m={"auto"} w={"30%"}>
        <form onSubmit={onSignInSubmit}>
          <FormLabel>Login through OTP</FormLabel>
          <Input
            onChange={handleChange}
            type={"number"}
            name={"mobile"}
            placeholder={"Enter your Mobile No."}
          />
          {/* <Button type={"submit"} mt={3}>
            Use OTP
          </Button> */}
          <Box>
            <Button type={"submit"} mt="3" onClick={onToggle}>
              Use OTP
            </Button>
            <Collapse in={isOpen}>
              <Box p="40px" mt="4" rounded="md" shadow="md">
                <HStack>
                  <PinInput onChange={(e) => setVal(e)}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </Box>
            </Collapse>
          </Box>
        </form>
        <form onSubmit={onSubmitOTP}>
          <FormLabel>Enter the OTP</FormLabel>
          <Input
            type={"number"}
            name={"otp"}
            onChange={handeleOTP}
            placeholder="Enter OTP"
          />
          <Button type={"submit"}>Submit OTP</Button>
        </form>
      </FormControl>
      <Box>
        <Button onClick={signInWithGoogle}>Sign In with Google</Button>
      </Box>
    </Box>
  );
}

export default Login;
