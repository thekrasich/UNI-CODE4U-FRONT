import { Box, Typography } from "@mui/material";
import _ from "lodash";

export default function ItemStock({ available_count }) {
  return (
    <Box marginTop="8px">
      {_.toInteger(available_count) > 0 ? (
        <Typography
          component="span"
          sx={{ color: "#007600", fontWeight: "bold" }}
        >
          In Stock
        </Typography>
      ) : (
        <Typography component="span" sx={{ color: "#d00", fontWeight: "bold" }}>
          Out of Stock
        </Typography>
      )}
    </Box>
  );
}
