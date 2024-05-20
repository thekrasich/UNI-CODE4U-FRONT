import { Box, Typography, Grid } from '@mui/material';
import HomeService from './HomeService';

const services = [
    {
        header: "Installation",
        body: "We offer professional installation services to ensure that your cash register or POS system is set up correctly and ready for use."
    },
    {
        header: "Training",
        body: "Our team provides comprehensive training to help you and your staff maximize the benefits of your new cash register or POS system."
    },
    {
        header: "Support",
        body: "Need assistance? Our dedicated support team is available to answer your questions and provide technical assistance whenever you need it."
    }
]

export default function HomeServices() {
  return (
    <Box my={6}>
        <Typography variant="h2" align="center" gutterBottom>Our Services</Typography>
        <Grid container spacing={3}>
            {services.map(value => <HomeService key={value.header} header={value.header} body={value.body}/> )}
        </Grid>
    </Box>
  )
}
