import { Typography, Box } from '@mui/material';

export default function CartTotalPrice({ total }) {
  return (
    <Box mt={2} display="flex" justifyContent="flex-end">
        <Typography variant="h6">Total: <Typography variant="h5" component="span" sx={{fontSize: { xs: '18px', md: '24px' }}}>${total}</Typography></Typography>
    </Box>
  )
}
