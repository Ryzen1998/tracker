import React, { useContext,useRef,useEffect } from "react";
import { Container } from "@mui/system";
import { Box } from "@mui/material";
import chatContext from "../../../Context/ChatContext";
import SenderBubble from '../SenderBubble';
import ReceiverBubble from "../ReceiverBubble";

const ChatScreen = () => {
  const { chat,sendMessage} = useContext(chatContext);
  const userName =sessionStorage.getItem('userName');

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
   
  }

  useEffect(scrollToBottom, [chat,sendMessage]);
  return (
    <>
    {/* //chatscreen */}
    <Container sx={{marginTop:'10vh',height:'68vh'}}>
        <Box sx={{height:'60vh',overflow:'scroll'}}>
        {chat.map((item, index) => {
        if (item.userName===userName) {
          return  <SenderBubble key={index} userName={item.userName} message={item.message}/>;
        }
        else{
        return <ReceiverBubble key={index} userName={item.userName} message={item.message}/>
        }

        
      })}
       <Box ref={messagesEndRef}></Box>

        </Box>

    </Container>
    </>
  );
};

export default ChatScreen;
