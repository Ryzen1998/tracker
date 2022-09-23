import {React,useContext,useEffect,useRef} from 'react'
import chatContext from "../../Context/ChatContext";
import SenderBubble from './SenderBubble';
import ReceiverBubble from './ReceiverBubble';


const ChatScreen = (props) => {
  const { chat,sendMessage} = useContext(chatContext);
  const userName =sessionStorage.getItem('userName');

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
   
  }

  useEffect(scrollToBottom, [chat,sendMessage]);


  return (
   
   <>
     <div  className="chat-screen-main">
          <div   className="chat-screen-wrapper">
          {chat.map((item, index) => {
        if (item.userName===userName) {
          return  <SenderBubble key={index} userName={item.userName} message={item.message}/>;
        }
        else{
        return <ReceiverBubble key={index} userName={item.userName} message={item.message}/>
        }

        
      })}
      <div ref={messagesEndRef}></div>

          </div>
        </div>
   </>
  )
}

export default ChatScreen