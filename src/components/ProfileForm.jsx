import React from "react";
import { CardMedia, Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
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
    <Box sx={{ bgcolor: "ivory", height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
        onClick={navToHome}
      >
        <AdbIcon
          sx={{
            width: 50,
            height: 70,
            display: { xs: "none", md: "flex" },
            mr: 1,
          }}
        />
        <Typography
          variant="h2"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          NETFLUX
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2" sx={{ pt: 2, pl: 2 }}>
          WHO IS WATCHING?
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          mt: 5,
          mb: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ml: 1,
            mr: 1,
          }}
          onClick={navToLogin}
        >
          <CardMedia
            component="img"
            sx={{
              width: 1,
              length: 1,
              border: 1,
              mb: 1,
            }}
            image="https://gravatar.com/avatar/0481425ec61e70a909184d2a1e0a21f4?s=400&d=robohash&r=x"
            alt="Live from space album cover"
          ></CardMedia>

          <Typography variant="h5">Stefan</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            ml: 1,
            mr: 1,
          }}
          onClick={navToRegis}
        >
          <CardMedia
            component="img"
            sx={{
              width: 400,
              length: 400,
              border: 1,
              mb: 1,
            }}
            image="https://img.icons8.com/ios/100/000000/add--v1.png"
            alt="ADD"
          ></CardMedia>

          <Typography variant="h5">Add Profile</Typography>
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        <Button variant="contained" color="primary">
          Manage Profile
        </Button>
      </Box>
    </Box>
  );
};
export default ProfilePage;
