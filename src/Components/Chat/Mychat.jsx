import React, {useContext } from "react";
import chatContext from "../../Context/ChatContext";
import ChatScreen from "./ChatScreen";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";


const Mychat = ({Children}) => {
  const { setMessage,sendMessage,message} = useContext(chatContext);
  return (
    <>
      <div className="container main-holder ">
        <div className="chat-input-container">
            <ChatScreen/>
          <div className="chat-input-wrapper">
          <TextField
          
          label="Message"
          multiline
          minRows={3}
          maxRows={3}
          value={message} onChange={(e)=>setMessage(e.target.value)}
          className="msg-box"
          />
             <Button onClick={sendMessage} disabled={message===''?true:false} variant="contained">Send</Button>

       
          </div>
        </div>
      </div>
    </>
  );
};

export default Mychat;
