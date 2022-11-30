import React from "react";

import { Box,Avatar,Wrap,WrapItem,HStack,Text ,Input,Button  } from '@chakra-ui/react'
import Header from "./Header";

function InputFeild(){

    return(
       <>
        {window.innerWidth <= 600?<Header/>:null}
       <Box>   
            <HStack p={"5px"} position={"fixed"} bottom={"0px!important"} width={"100%"} left={"0"}>
                <Input placeholder='Message' />
                <Button colorScheme='teal' size='md'>
                    send
                </Button>
            </HStack>
       </Box>
        </>
    )
}

export default InputFeild;