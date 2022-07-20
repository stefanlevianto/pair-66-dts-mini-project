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
import { AccessAlarm, ThreeDRotation } from "@mui/icons-material";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import Icon from "@mui/material/Icon";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const navToHome = () => {
    navigate("/home");
  };
  const navToLogin = () => {
    navigate("/login");
  };
  const navToRegis = () => {
    navigate("/register");
  };

  return (
    <Box sx={{ length: 1, width: 1, bgcolor: "ivory" }}>
      <Typography variant="h6" sx={{ mt: 2.5, ml: 2 }} onClick={navToHome}>
        NETFLUX
      </Typography>
      <Icon sx={{ fontSize: 1 }}>add_circle</Icon>
    </Box>
  );
};
export default ProfilePage;
