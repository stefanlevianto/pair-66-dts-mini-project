import * as React from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#2196f3",
        p: 3,
        display: "flex",
        flexOrientation: "row",
        justifyContent: "center",
      }}
    >
      <Box sx={{ mr: 10 }}>
        <Typography variant="h6" align="left" color="white">
          Audio and Subtitle
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Media Center
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Security
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Contact Us
        </Typography>
        <Button variant="outlined" sx={{ mt: 2, mb: 2 }} color="success">
          Service Code
        </Button>
        <Typography variant="h6" align="left" color="white">
          <CopyrightIcon />
          Stefan Levianto
        </Typography>
      </Box>
      <Box sx={{ mr: 10 }}>
        <Typography variant="h6" align="left" color="white">
          Audio Description
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Inverstor Relations
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Legal Provision
        </Typography>
      </Box>
      <Box sx={{ mr: 10 }}>
        <Typography variant="h6" align="left" color="white">
          Help Center
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Jobs
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Cookies Preferences
        </Typography>
      </Box>
      <Box sx={{ mr: 10 }}>
        <Typography variant="h6" align="left" color="white">
          Gift Card
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Term Of Use
        </Typography>
        <Typography variant="h6" align="left" color="white">
          Corporate Information
        </Typography>
      </Box>
    </Box>
  );
}
