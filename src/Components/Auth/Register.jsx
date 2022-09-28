import React, { useContext } from "react";
import Authcontext from "../../Context/AuthContext";
import Container from "@mui/material/Container";
import { Box, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Button from "@mui/material/Button";

const Register = () => {
  const {
    setUserData,
    userData,
    onRegisterClick,
    setValidation,
    validation,
    isLoading,
  } = useContext(Authcontext);

  return (
    <Container>
      <Box sx={{ marginTop: "10vh" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "normal" }}
        >
          Register
        </Typography>
        <Box
          sx={{
            border: "solid 1px rgba(0,0,0,.125)",
            height: "80vh",
            paddingTop: "100px",
            zIndex: "100",
            boxShadow: "10px 10px 5px 0px rgba(171,171,171,0.75)",
          }}
          component="form"
          autoComplete="off"
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 6, md: 6 }}
          >
            <TextField
              helperText={validation === true ? "Please check your input" : ""}
              error={validation}
              type="text"
              value={userData.name}
              onChange={(e) => {
                setUserData((eValue) => ({ ...eValue, name: e.target.value }));
                setValidation(false);
              }}
              sx={{ width: "40vh" }}
              label="Name"
              variant="outlined"
            />

            <TextField
              helperText={validation === true ? "Invalid/already exists" : ""}
              error={validation}
              type="text"
              value={userData.userName}
              onChange={(e) => {
                setUserData((eValue) => ({
                  ...eValue,
                  userName: e.target.value,
                }));
                setValidation(false);
              }}
              sx={{ width: "40vh" }}
              label="Username"
              variant="outlined"
            />
          </Stack>

          <Stack
            sx={{ paddingTop: "4vh" }}
            justifyContent="center"
            alignItems="center"
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 4, sm: 6, md: 6 }}
          >
            <TextField
              helperText={validation === true ? "Invalid/already exists" : ""}
              error={validation}
              type="email"
              value={userData.email}
              onChange={(e) => {
                setUserData((eValue) => ({ ...eValue, email: e.target.value }));
                setValidation(false);
              }}
              sx={{ width: "40vh" }}
              label="E-mail"
              variant="outlined"
            />

            <TextField
              helperText={validation === true ? "Invalid password" : ""}
              error={validation}
              type="password"
              value={userData.password}
              onChange={(e) => {
                setUserData((eValue) => ({
                  ...eValue,
                  password: e.target.value,
                }));
                setValidation(false);
              }}
              sx={{ width: "40vh" }}
              label="Password"
              variant="outlined"
            />
          </Stack>

          <Stack
            sx={{ paddingTop: "7vh" }}
            justifyContent="center"
            alignItems="center"
            direction={{ xs: "column", sm: "column" }}
            
          >
            {isLoading === false && (
              <Button
                disabled={
                  userData.email === "" || userData.password === ""
                    ? true
                    : false
                }
                className="btn-block"
                onClick={onRegisterClick}
                sx={{ width: "13vh", height: "6vh" }}
                variant="contained"
              >
                Register
              </Button>
            )}

            {isLoading === true && <span className="loader"></span>}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
