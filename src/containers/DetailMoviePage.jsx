import React from "react";

/* import { Box, Typography } from "@mui/material"; */
import { Box } from "@mui/system";
import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";
import DetailMovie from "../components/DetailMovie";
const DetailMoviePage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ bgcolor: "ivory" }}>
        <DetailMovie></DetailMovie>
      </Box>
      <Footer />
    </>
  );
};

export default DetailMoviePage;
