import { Box, Typography } from '@mui/material';

export default function HomeContact() {
  return (
    <Box my={6}>
        <Typography variant="h2" align="center" gutterBottom>Contact Us</Typography>
        <Typography variant="body1" align="center" color="textSecondary" sx={{ maxWidth: 800, margin: 'auto' }}>
            Have a question or need assistance? Feel free to contact us using the information below:
        </Typography>
        <Box mt={3} display="flex" justifyContent="center">
            <Typography variant="body1" align="center" color="textSecondary">
                Email: info@cashregisterstore.com<br />
                Phone: 123-456-7890<br />
                Address: 123 Main Street, City, State, Zip
            </Typography>
        </Box>
    </Box>
  )
}
