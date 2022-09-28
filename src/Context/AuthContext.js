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


  let [validation,setValidation]=useState(false)
  let [isLoading,setIsLoading]=useState(false)

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
    setIsLoading(true)
    axios
      .post(`${address}/Auth/regsiter`, {
        ...userData,
      })
      .then((response) => {
        if (response.data.code === 202) {
          setIsSuccess(true);
      

          navigate("/login");
          setIsLoading(false);

          return true;
        } else {
          if(response.data.message!==null){
            setValidation(true)
          setIsLoading(false);
          }
          else{
         

          }
          setIsSuccess(false);
          setIsLoading(false);

          return false;
        }
      })
      .catch((error) => {  setIsLoading(false);});
  };

  const onLoginClick = async () => {
    setIsLoading(true);
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
          setIsLoading(false)
        } else {
         
          setIsSuccess(false);
         
        }
      })
      .catch((error) => { setValidation(true);setIsLoading(false)});
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
        validation,
        setValidation,
        isLoading
      
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
