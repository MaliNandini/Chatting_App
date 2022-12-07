import React from "react";
import './Message.css'

function Messages({ item, id }) {
  // console.log(item)
  if (item.id === id){
    return (
      <div className="message_box right">
        {item.inputMessage}
      </div>
    )
  }
  else{
    return(
      <div className="message_box left">
        {item.inputMessage}
      </div>
     )
  }
 

  // if (item.id === id) {
  //   return (
  //     <>
  //       <Box position={"relative"} display={"block"}>
  //         <Text
  //           fontSize={"2xl"}
  //           bg={"#c1eef57a"}
  //           p={" 0px 3px"}
  //           m={" 5px 10px"}
  //           width={"auto"}
  //           borderRadius={"7px"}
  //           float={"right"}
  //         >
  //           {item.inputMessage}
  //         </Text>
  //       </Box>

  //       <br></br>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <Box position={"relative"} display={"block"}>
  //         <Text
  //           fontSize={"2xl"}
  //           bg={"#cfe1e154"}
  //           p={" 0px 3px"}
  //           m={"5px 10px"}
  //           width={"auto"}
  //           borderRadius={"7px"}
  //           float={"left"}
  //         >
  //           {item.inputMessage}
  //         </Text>
  //       </Box>

  //       <br></br>
  //     </>
  //   );
  // }
}

export default Messages;
