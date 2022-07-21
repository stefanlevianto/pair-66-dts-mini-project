import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import CardMovie from "./CardMovie.jsx";

const ListMoviesPopular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchDataMovies = async () => {
      try {
        const responseDariTMDB = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=95b4faf1768139e47646108750da9420"
        );

        setMovies(responseDariTMDB.data.results);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDataMovies();
  }, []);

  return (
    <Box>
      <Typography variant="h5">Container ListMovies (Data Real)</Typography>
      {movies.slice(-5).map((movie) => {
        return <CardMovie movie={movie} />;
      })}
    </Box>
  );
};

export default ListMoviesPopular;
