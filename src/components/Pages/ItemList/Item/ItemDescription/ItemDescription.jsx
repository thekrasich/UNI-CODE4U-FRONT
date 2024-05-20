import { Box, Typography, Divider } from '@mui/material';

export default function ItemDescription({description}) {
  return (
    <Box>
        <Divider sx={{ mt: "12px", mb: "8px" }} />
        <Typography fontWeight="bold" paddingBottom="4px" component="h1" >About this item</Typography>
        <Typography variant="body1" component="p" sx={{ fontSize: { xs: '16px', md: '18px' } }}>{description}</Typography>
    </Box>
  )
}
