import React from "react";
import {
  Box,
  Flex,
  HStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { FaSearch, FaEllipsisV,FaUsers } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function UserListHeader() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      <Box bg={"#00CED1"}>
        <Box float={"right"}>
          <HStack>
            <FaSearch mr={"4px"}/>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<FaEllipsisV />}
                variant="none"
              />
              <MenuList bg={"#29dee1"} >
                <MenuItem bg={"#29dee1"}>
                  <Text fontSize="lg" as="b" onClick={handleLogout} >
                    LOGOUT
                  </Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>

        <br></br>
        <Box >
          <Flex p={"8px"} justifyContent={"space-between"} width={"100%"}>
            <Text fontSize="2xl" as="b"><FaUsers/></Text>
            <Link to="/userlist">
              <Text fontSize="lg" as="b">
                CHAT
              </Text>
            </Link>
            <Link to="/status">
              <Text fontSize="lg" as="b">
                STATUS
              </Text>
            </Link>
            <Link to="/call">
              <Text fontSize="lg" as="b">
                CALL
              </Text>
            </Link>
          </Flex>
        </Box>
      </Box>
    </>
  );
}

export default UserListHeader;
