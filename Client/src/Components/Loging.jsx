import React, { useState } from "react";
import {
  Heading,
  Input,
  InputGroup,
  Button,
  InputRightElement,
  Box,
  VStack,
  Text,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Login() {
  const myPassword = "12345";
  const navigate = useNavigate(); 
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [password, setPassword] = useState(" ");
  const [error, setError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitClick = () => {
    if (password === myPassword) {
      navigate("/userlist")
    }else if(password === " "){
      setError("please enter password");
    }
    else{
      setError("please enter right password");
    }
  };

  return (
    <>
      <Box p={"15px"} marginTop={"50%"}>
        <VStack spacing={9}>
          <Heading color={"#319795"}>Chat With Friends</Heading>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={(e) => handlePasswordChange(e)}
            />
            <InputRightElement width="4.5rem">
              <Box onClick={handleClick}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </Box>
            </InputRightElement>
          </InputGroup>
          <Text>{error}</Text>
            <Button colorScheme="teal" size="md" onClick={submitClick}>
              Submit
            </Button>
        </VStack>
      </Box>
    </>
  );
}

export default Login;
