import { Box, Typography } from "@mui/material";
import React from "react";

export default function MessageComponent({ header, message }) {
  return (
    <Box
      padding="24px 72px"
      sx={{
        marginTop: { xs: 2, md: 0 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" color="primary" gutterBottom>
        {header}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}
