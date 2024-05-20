import { Box, Typography } from '@mui/material';

export default function HomeAbout() {
  return (
    <Box my={6}>
        <Typography variant="h2" align="center" gutterBottom>About Us</Typography>
        <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 800, margin: 'auto' }}>
            Our company has been a trusted provider of cash registers and POS solutions for over a decade. With a focus on quality, reliability, and customer satisfaction, we strive to exceed your expectations.
        </Typography>
    </Box>
  )
}
