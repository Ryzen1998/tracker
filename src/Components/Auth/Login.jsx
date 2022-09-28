import { React, useContext } from "react";
import Authcontext from "../../Context/AuthContext";
import { Box, TextField, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Stack } from "@mui/system";
import Button from '@mui/material/Button';



const Login = () => {
  const { setUserData, userData, onLoginClick, setValidation,validation,isLoading } =
    useContext(Authcontext);
  return (
    <Container>
      <Box sx={{ marginTop: "10vh" }}>
        <Typography variant="h3" sx={{ textAlign: "center",fontWeight:'normal' }}>Login</Typography>
        <Box sx={{border:'solid 1px rgba(0,0,0,.125)',height:'70vh',paddingTop:'100px',zIndex:'100',boxShadow:'10px 10px 5px 0px rgba(171,171,171,0.75)'}} component="form" autoComplete="off">

          <Stack justifyContent='center' alignItems='center' 
            direction={{ xs: "column", sm: "column" }}
            spacing={{ xs: 4, sm: 6, md:6 }}>
          <TextField helperText={validation===true?'Invalid Credentials':''} error={validation} type='email' value={userData.email}  onChange={(e) =>{
                setUserData((eValue) => ({ ...eValue, email: e.target.value }));setValidation(false)}} sx={{width:'40vh'}}  label='E-mail' variant="outlined"/>

          <TextField helperText={validation===true?'Invalid Credentials':''} error={validation} type='password' value={userData.password}  onChange={(e) =>{
                setUserData((eValue) => ({ ...eValue, password: e.target.value }));setValidation(false)}} sx={{width:'40vh'}}  label='Password' variant="outlined"/>

          {isLoading===false&&(
              <Button disabled={userData.email===''||userData.password===''?true:false}
              className="btn-block" onClick={onLoginClick} sx={{width:'13vh',height:'6vh'}} variant="contained">Login</Button>

          )}
        
              {isLoading===true&&( <span className="loader"></span>)}
             

          </Stack>
          
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
