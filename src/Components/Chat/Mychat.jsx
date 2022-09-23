import React, { Children,useContext } from "react";
import chatContext from "../../Context/ChatContext";
import ChatScreen from "./ChatScreen";

const Mychat = ({Children}) => {
  const { setMessage,sendMessage,message} = useContext(chatContext);
  return (
    <>
      <div className="container main-holder ">
        <div className="chat-input-container">
            <ChatScreen/>
          <div className="chat-input-wrapper">
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)}  className="msg-box" />
            <button  onClick={sendMessage} disabled={message===''?true:false} type="button">Send</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mychat;
