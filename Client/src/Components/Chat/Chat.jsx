import React, { useEffect, useState } from "react";
import { HStack, Input, Button, Box } from "@chakra-ui/react";
import SingleUserHeader from "../Headers/SingleUserHeader";
import WebView from "../View/WebView";
import socketIO from "socket.io-client";
import Messages from "../Message/Messages";
import "./Chat.css";
import ReactScrollToBottom from "react-scroll-to-bottom";
import { useRef } from "react";

const ENDPOINT = "http://localhost:5000";
let socket;

function Chat() {
  const [inputMessage, setInputMessage] = useState(" ");
  const [receiveMessage, setReceiveMessage] = useState([]);
  const [id, setId] = useState();
  const [disabled, setDisabled] = useState(true);
  const InputEl = useRef();

  const sendMessage = () => {
    socket.emit("send_Message", { inputMessage, id });
    setInputMessage("  ");
  };

  useEffect(() => {
    socket = socketIO(ENDPOINT, { transports: ["websocket"] });
    socket.on("connect", () => {
      setId(socket.id);
    });

    // socket.on("welcome", (data) => {
    //   setReceiveMessage([...receiveMessage, data]);
    // });

    return () => {
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceiveMessage([...receiveMessage, data]);
    });
    return () => {
      socket.off();
    };
  }, [receiveMessage]);

  //  useEffect(()=>{
  //     if(InputEl.current.focus()){
  //       setDisabled(false)
  //     }else{
  //       setDisabled(true)
  //     }
  //   },[inputMessage])

  return (
    <>
      <div className="main_container">
        <div className="header">
          {window.innerWidth <= 600 ? <SingleUserHeader /> : <WebView />}
        </div>

        <ReactScrollToBottom className="chat">
          {receiveMessage.map((item) => {
            return (
              <>
                <Messages item={item} id={id} />
              </>
            );
          })}
        </ReactScrollToBottom>

        <div className="input_container">
          <HStack m={"5px"}>
            <Box
              w="100%"
              borderRadius="7px"
              className="input_box"
              boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
            >
              <Input
                // ref={InputEl}
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                bg="white"
              />
            </Box>
            <Button colorScheme="teal" size="md" onClick={sendMessage}>
              send
            </Button>
          </HStack>
        </div>
      </div>
    </>
  );
}

export default Chat;
