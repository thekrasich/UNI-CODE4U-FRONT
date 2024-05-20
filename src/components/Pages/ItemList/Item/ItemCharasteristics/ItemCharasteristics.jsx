import { Box, Typography } from '@mui/material';

export default function ItemCharasteristics({subcategory, category}) {
  return (
    <Box sx={{mt: "12px"}}>
        <Typography variant="body2" component="p"><Typography variant="body2" component="span" sx={{fontWeight: "bold"}}>Category: </Typography>{category}</Typography>
        <Typography variant="body2" component="p"><Typography variant="body2" component="span" sx={{fontWeight: "bold"}}>Subcategory: </Typography>{subcategory}</Typography>
    </Box>
  )
}
