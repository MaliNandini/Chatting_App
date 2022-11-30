import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import UserList from "./UserList";
import Header from "./Header";
import InputFeild from "./InputField";

function WebView(){
    return(
        <>
            <Grid
                templateAreas={`"nav header" "nav main" "nav footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'30% 70%'}
                h='100%'
                gap='1'
                color='blackAlpha.700'
                fontWeight='bold'
            >
                <GridItem   area={'header'}>
                    <Header/>
                </GridItem>
                <GridItem area={'nav'} >
                   <UserList/>
                </GridItem>
                <GridItem   area={'main'}>
                   <InputFeild/>
                </GridItem>
                {/* <GridItem   area={'footer'}>
                   <InputFeild/>
                </GridItem> */}
            </Grid>
        </>
    )
}

export default WebView;