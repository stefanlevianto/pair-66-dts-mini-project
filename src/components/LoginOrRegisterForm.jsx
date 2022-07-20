import React, { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  Box,
  Button,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  auth,
  loginDenganEmailDanPassword,
  registerDenganEmailDanPassword,
} from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const LoginOrRegisterForm = ({ loginOrRegister }) => {
  const navigate = useNavigate();

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });
  const [user, isLoading, error] = useAuthState(auth);
  const textFieldEmailOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      email: event.target.value,
    });
  };

  const textFieldPasswordOnChangeHandler = (event) => {
    setCredential({
      ...credential,
      password: event.target.value,
    });
  };

  const loginHandler = () => {
    loginDenganEmailDanPassword(credential.email, credential.password);
  };

  const registerHandler = () => {
    registerDenganEmailDanPassword(credential.email, credential.password);
  };

  const buttonLoginOrRegisterOnClickHandler = () => {
    if (loginOrRegister === "login") {
      loginHandler();
    } else {
      registerHandler();
    }
  };
  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (user) {
      navigate("/home");
    }
  }, [user, isLoading, navigate]);

  return (
    <Card sx={{ display: "flex", bgcolor: "ivory" }}>
      <CardMedia
        component="img"
        sx={{ width: 1 / 2, length: 1 / 2 }}
        image="https://gravatar.com/avatar/0481425ec61e70a909184d2a1e0a21f4?s=800&d=robohash&r=x"
        alt="Live from space album cover"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 1 / 2,
          length: 1 / 2,
        }}
      >
        <Typography variant="body1">
          {loginOrRegister === "login" ? "Login Page" : "Register Page"}
        </Typography>

        <TextField
          sx={{ width: 2.5 / 3, length: 2.5 / 3 }}
          label="EMAIL"
          type="email"
          variant="outlined"
          size="big"
          margin="dense"
          value={credential.email}
          onChange={textFieldEmailOnChangeHandler}
        />

        <TextField
          sx={{ width: 2.5 / 3, length: 2.5 / 3 }}
          label="PASSWORD"
          type="Password"
          variant="outlined"
          size="big"
          margin="dense"
          value={credential.password}
          onChange={textFieldPasswordOnChangeHandler}
        />

        <Button
          sx={{ width: 2.5 / 3, length: 2.5 / 3, m: 1 }}
          variant="contained"
          size="big"
          onClick={buttonLoginOrRegisterOnClickHandler}
        >
          {loginOrRegister === "login" ? "Login" : "Register Account"}
        </Button>
      </Box>
    </Card>
  );
};

export default LoginOrRegisterForm;
