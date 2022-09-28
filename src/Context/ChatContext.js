/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useEffect, useRef } from "react";
import { HubConnectionBuilder } from "@microsoft/signalr";

const chatContext = createContext("");

export const chatProvider = ({ children }) => {

  
       

    //
  const [user, setUser] = useState();
  const [message, setMessage] = useState("");
  //
  const sendMessage = async (e) => {
    e.preventDefault();
    const isMessageProvided = message && message !== '';

    const chatMessage = {
        userName: sessionStorage.getItem('userName'),
        message: message
    };

    if (connection._connectionStarted) {
        try {
            await connection.send('SendMessage', chatMessage);
            setMessage('');
        }
        catch(e) {
            //console.log(e,'ss');
        }
    }
    else {
        alert('No connection to server yet.');
    }


  };

  
  //
  const [ connection, setConnection ] = useState(null);
  const [ chat, setChat ] = useState([]);
  const latestChat = useRef(null);
  //
  latestChat.current = chat;

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
        .withUrl('https://fadedapi.azurewebsites.net/chathub')
        .withAutomaticReconnect()
        .build();

    setConnection(newConnection);
  
}, []);

useEffect(() => {
    if (connection) {
        connection.start()
            .then(result => {
                //console.log('Connected!');

                connection.on('ReceiveMessage', message => {
                    const updatedChat = [...latestChat.current];
                    updatedChat.push(message);
                
                    setChat(updatedChat);
                });
            })
            .catch(e => console.log('Connection failed: ', 'e'));
    }
}, [connection]);




  

  return (
    <chatContext.Provider value={{ setMessage, sendMessage,setUser,message,chat,user}}>
      {children}
    </chatContext.Provider>
  );
};

export default chatContext;
