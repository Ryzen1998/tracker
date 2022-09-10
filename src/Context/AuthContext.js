/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AuthContext = createContext("");
const address = "https://localhost:7287/api";

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

  const [authHeader, setAuthHeader] = useState('');


  let navigate = useNavigate();




  const onRegisterClick = async () => {
    axios
      .post(`${address}/Auth/regsiter`, {
        ...userData,
      })
      .then((response) => {
        if (response.data.code === 202) {
          setIsSuccess(true);
          setMessage(null);
            
      
            navigate('/');
        
          

           return true


        } else {
          setMessage(response.data.message);
          setIsSuccess(false);

          return false
        }
      })
      .catch((error) => {});
  };

  const onLoginClick = async () => {
    axios
      .post(`${address}/Auth/login`, {
        email: userData.email,
        password: userData.password,
      })
      .then((response) => {
        if (response.data.code === 202) {
          setIsSuccess(true);
          setMessage(null);
          setAuthHeader(response.data.data);
        } else {
          setMessage(response.data.message);
          setIsSuccess(false);
        }
      })
      .catch((error) => {});
  };

  return (
    <AuthContext.Provider
      value={{
        onRegisterClick,
        setUserData,
        userData,
        isSuccess,
        message,
        onLoginClick,
        authHeader
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
