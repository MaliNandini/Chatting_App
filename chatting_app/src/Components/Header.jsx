import React from "react";
import {
  Box,
  Avatar,
  Wrap,
  WrapItem,
  HStack,
  Text,
  Input,
} from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Box bg={"#00CED1"}>
        <HStack ml={"4px"} p={"5px"}>
          <FaArrowLeft onClick={handleClick} />
          <Wrap>
            <WrapItem>
              <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
            </WrapItem>
          </Wrap>
          <Text fontSize="lg" as="b" pb={"10px"}>
            Nandini Mali
          </Text>
        </HStack>
      </Box>
    </>
  );
}

export default Header;
