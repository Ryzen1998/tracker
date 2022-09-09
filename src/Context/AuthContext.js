/* eslint-disable react-hooks/rules-of-hooks */
import {createContext,useState,useEffect} from 'react'
import axios from 'axios';


const AuthContext = createContext('');
const address ='https://localhost:7287/api/Auth/regsiter';

export const authProvider=({children})=>{
  
    
  

    const [userData,setUserData]=useState({ 
        id: 0,
        name:'',
        dateOfBirth: "2022-09-09T17:27:06.917Z",
        email:'',
        profilePicture:0,
        userName:'',
        password: ''
    });

    const [isSuccess,setIsSuccess]=useState(false);
   
    const [message,setMessage]=useState(null);


    const config = {
        method: 'post',
        url: address,
        headers: { 
            'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(userData)
      };


   const  onRegisterClick= async ()=>{
        
   
     

    axios(config)
    .then(function (response) {
      console.log(response.data.message);
      if(response.data.message==='202'){
        setIsSuccess(true)
        setMessage(null)
      
        

      }
      else{
        setMessage(response.data.message)
        setIsSuccess(false)
    
        }
      
    })
    .catch(function (error) {
      console.log(error);
    });


       

             
        
         
    }

   
    return <AuthContext.Provider value={{onRegisterClick,setUserData,userData,isSuccess,message}}>{children}</AuthContext.Provider>


}


export default AuthContext;