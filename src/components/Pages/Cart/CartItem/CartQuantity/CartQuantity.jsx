import { Box, IconButton, Input } from '@mui/material';

export default function CartQuantity({index, quantity, handleQuantityChange}) {
  return (
    <Box 
        sx={{ 
            display: 'flex', 
            alignItems: 'center' 
        }}
    >
        <IconButton onClick={() => handleQuantityChange(index, quantity - 1)}>-</IconButton>
        <Input 
            type="numeric" 
            value={quantity} 
            onChange={(e) => handleQuantityChange(index, e.target.value)} 
            variant="outlined" 
            style={{ 
                width: '60px', 
                padding: 4, 
                textAlign: 'center', 
                border: '1px solid rgba(0, 0, 0, 0.23)'
            }} 
            disableUnderline 
        />
        <IconButton onClick={() => handleQuantityChange(index, quantity + 1)}>+</IconButton>
    </Box>
  )
}
