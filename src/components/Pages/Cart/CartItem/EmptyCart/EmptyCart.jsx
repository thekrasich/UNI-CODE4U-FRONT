import { Typography, Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function EmptyCart() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        fontWeight="bold"
        fontSize="3rem"
        textAlign="center"
        marginRight="5px"
      >
        Basket is empty
      </Typography>
      <ShoppingCartIcon fontSize="large" width="5vw" />
    </Box>
  );
}
