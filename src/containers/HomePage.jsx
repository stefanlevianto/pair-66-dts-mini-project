/* import React from "react"; */

/* import { Box, Typography } from "@mui/material"; */

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { keluarAplikasi } from "../authentication/firebase";
import ListMoviesPopular from "../components/ListMoviesPopular";
import { Box } from "@mui/system";
const HomePage = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // Fungsi ini akan menjadi async await
  // Karena keluarDariApps bersifat async, dan kita harus menunggu
  // keluarDariAppsSelesai, baru boleh navigate
  const buttonLogoutOnClickHandler = async () => {
    // Kita akan memanggil fungsi keluarDariApps di sini
    await keluarAplikasi();
    navigate("/");
  };

  return (
    <>
      <Box sx={{ bgcolor: "ivory" }}>
        <console className="log">ini halaman home</console>
        <Button color="inherit" onClick={buttonLogoutOnClickHandler}>
          Logout
        </Button>
        <ListMoviesPopular></ListMoviesPopular>
      </Box>
    </>
  );
};

export default HomePage;
