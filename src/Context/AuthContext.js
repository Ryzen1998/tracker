/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext("");
const address = "https://fadedapi.azurewebsites.net/api";

export const authProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    id: 0,
    name: "",
    dateOfBirth: "2022-09-09T17:27:06.917Z",
    email: "",
    profilePicture: 0,
    userName: "",
    password: "",
  });




  const [isSuccess, setIsSuccess] = useState(false);

  const [message, setMessage] = useState(null);

  const [authHeader, setAuthHeader] = useState("");
  

  let navigate = useNavigate();
  // useEffect(()=>{
  //   if(authHeader===''){
  //     navigate('/register')

  //   }
  // },[])
  const onRegisterClick = async () => {
    axios
      .post(`${address}/Auth/regsiter`, {
        ...userData,
      })
      .then((response) => {
        if (response.data.code === 202) {
          setIsSuccess(true);
          setMessage(null);

          navigate("/login");

          return true;
        } else {
          if(response.data.message!==null){
          setMessage(response.data.message);
          }
          else{
            setMessage('Oops something went wrong 😓');

          }
          setIsSuccess(false);

          return false;
        }
      })
      .catch((error) => {setMessage('Validation failed,Check all the fields 😓')});
  };

  const onLoginClick = async () => {
    axios
      .post(`${address}/Auth/login`, {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        if (response.data.code === 202) {
          
          setMessage(null);
          setAuthHeader(response.data.data);
          sessionStorage.setItem('authHeader',response.data.data);
          sessionStorage.setItem('userName',userData.email)
         
          navigate('/message')
        } else {
          setMessage(response.data.message);
          setIsSuccess(false);
        }
      })
      .catch((error) => { setMessage('Server says no no😡, Please check all the fields');});
  };

  const logout=async()=>{
    setAuthHeader('');
    navigate('/login')
  }


  return (
    <AuthContext.Provider
      value={{
        onRegisterClick,
        setUserData,
        userData,
        isSuccess,
        message,
        onLoginClick,
        authHeader,
        logout,
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
