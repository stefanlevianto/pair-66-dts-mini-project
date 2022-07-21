import React from "react";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const CardMovie = (props) => {
  const baseUrlForMovie = "https://image.tmdb.org/t/p/w200";

  return (
    <Card sx={{ bgcolor: "ivory" }}>
      <Box
        className="boxy"
        sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <CardMedia
          component="img"
          sx={{ width: 400, height: 400 }}
          image={`${baseUrlForMovie}${props.movie.poster_path}`}
          alt={props.movie.title}
        ></CardMedia>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: 1,
          }}
        >
          <Typography component="div" variant="body1">
            {props.movie.title}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardMovie;
