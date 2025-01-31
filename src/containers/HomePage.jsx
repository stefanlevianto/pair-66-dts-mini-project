import React from "react";
import ListMoviesPopular from "../components/ListMoviesPopular";
import { Box } from "@mui/system";
import ResponsiveAppBar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box sx={{ bgcolor: "ivory" }}>
        <ListMoviesPopular></ListMoviesPopular>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
