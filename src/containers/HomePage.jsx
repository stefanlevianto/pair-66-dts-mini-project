/* import React from "react"; */

/* import { Box, Typography } from "@mui/material"; */

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../authentication/firebase";

const HomePage = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <console className="log">ini halaman home</console>
      {/*       <Box className={styles.container}>
        <Typography variant="body1">Halo, ini adalah halaman utama</Typography>

        
        {user ? (
          <Typography variant="body1">
            Email - <strong>{user.email}</strong>, uid -{" "}
            <strong>{user.uid}</strong>
          </Typography>
        ) : (
          ""
        )}
      </Box> */}
    </>
  );
};

export default HomePage;
