import React from "react";
import {
  Box,
  Wrap,
  WrapItem,
  HStack,
  Text,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import UserListHeader from "./Headers/UserListHeader";

function UserList() {
  return (
    <>
      <UserListHeader />

      <Box p={"15px"}>
        <VStack alignItems={"flex-start"} spacing={4}>
          <HStack spacing={5}>
            <Wrap>
              <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </Wrap>
            <Link to="/Chat">
              <Text fontSize="lg" as="b" pb={"10px"}>
                Honey Soni
              </Text>
            </Link>
          </HStack>

          <HStack spacing={5}>
            <Wrap>
              <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </Wrap>
            <Link to="/Chat">
              <Text fontSize="lg" as="b" pb={"10px"}>
                Nishant Baser
              </Text>
            </Link>
          </HStack>

          <HStack spacing={5}>
            <Wrap>
              <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </Wrap>
            <Link to="/Chat">
              <Text fontSize="lg" as="b" pb={"10px"}>
                Chandrapal Singh Tomer
              </Text>
            </Link>
          </HStack>

          <HStack spacing={5}>
            <Wrap>
              <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </Wrap>
            <Link to="/Chat">
              <Text fontSize="lg" as="b" pb={"10px"}>
                Surbhi Salodiya
              </Text>{" "}
            </Link>
          </HStack>

          <HStack spacing={5}>
            <Wrap>
              <WrapItem>
                <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
              </WrapItem>
            </Wrap>
            <Link to="/Chat">
              <Text fontSize="lg" as="b" pb={"10px"}>
                Nandini Mali
              </Text>
            </Link>
          </HStack>
        </VStack>
      </Box>
    </>
  );
}

export default UserList;
