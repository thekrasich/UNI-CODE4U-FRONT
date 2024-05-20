import { Box, Button } from '@mui/material';

export default function ItemButton({bought, handleBuy}) {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {!bought ? (
            <Button variant="contained" color="primary" onClick={handleBuy}>Buy Now</Button>
        ) : (
            <Button variant="contained" color="secondary" onClick={handleBuy}>Dismiss</Button>
        )}
    </Box>
  )
}
