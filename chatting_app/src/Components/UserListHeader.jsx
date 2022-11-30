import React,{useState} from 'react';
import { Box,
    Flex,
    Wrap,
    WrapItem,
    HStack,
    Text ,
    Avatar, 
    VStack,
} from '@chakra-ui/react';
import { FaSearch } from "react-icons/fa";
import {Link} from 'react-router-dom';

function UserListHeader(){
    const [user, setUser] = useState();
    // const searchUser = ()=>{
    //     let person = prompt("Search");
    //     if () {
    //         setUser("User cancelled the prompt.");
    //     } else {
    //         setUser("User cancelled the prompt.");
    //     } 
    // }
    return(
        <>
         <Box bg={"#00CED1"} >
                {/* <Box p={"5px"} >
                  <FaSearch fontSize='2xl'  marginLeft={"335px"}/>
                </Box> */}
                
                <Flex p={"15px"}  justifyContent={"space-between"}> 
                    <Link to="/userlist"><Text fontSize='lg' as='b'>CHAT</Text></Link>
                    <Link to="/status"><Text fontSize='lg' as='b'>STATUS</Text></Link>
                    <Link to="/call"><Text fontSize='lg' as='b'>CALL</Text></Link>
                </Flex>
            </Box>
        </>
    )
}

export default UserListHeader;