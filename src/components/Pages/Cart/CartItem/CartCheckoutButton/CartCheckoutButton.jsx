import { Button, Box } from "@mui/material";

export default function CartCheckoutButton({ handleCheckout }) {
  return (
    <Box mt={2} display="flex" justifyContent="flex-end">
      <Button variant="contained" color="primary" onClick={handleCheckout}>
        Checkout
      </Button>
    </Box>
  );
}
