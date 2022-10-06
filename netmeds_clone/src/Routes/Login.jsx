import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from "firebase/auth";
import firebase from '../Firebase Authentication/firebase' ; 

function Login() {
  const [mobile,setMobile] = useState()
  function handleChange(e){
    const {name,value} = e.target ; 
    setMobile({
      [name]:value
    })
  }
  // console.log(firebase)
  function configureCaptcha() {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          console.log("Captcha resolved")
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          
        },
        defaultCountry: "IN",
      },
      auth
    );
  }
  function onSignInSubmit(e) {
    e.preventDefault() ; 
    configureCaptcha()
    const phoneNumber = "+91"+((mobile.mobile));
    const appVerifier = window.recaptchaVerifier;
    
    // console.log(phoneNumber)
  
    const auth = getAuth();
    
    console.log(appVerifier)
    
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    
    .then((confirmationResult) => {
      alert("OTP Sent Successful")
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      console.log(error)
      alert ("Some Error Occured")
      // Error; SMS not sent
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
            <Button type={'submit'} mt={3}>Use OTP</Button>

       </form>
       <form>
        <FormLabel>Enter the OTP</FormLabel>
        <Input type={'number'} name={'otp'} onChange={handleChange} placeholder="Enter OTP"/>
        <Button type={'submit'}>Submit OTP</Button>
       </form>
      </FormControl>
    </Box>
  );
}

export default Login;
