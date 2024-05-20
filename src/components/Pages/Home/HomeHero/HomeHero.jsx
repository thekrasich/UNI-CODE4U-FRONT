import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function HomeHero() {
  const navigate = useNavigate();

  const navigateToItemList = () =>{
    navigate("/item-list");
  }

  return (
    <Box my={6}>
      <Typography variant="h1" align="center" fontSize={{xs: "2rem", sm: "3rem", md: "6rem"}} gutterBottom>Welcome to Our Cash Register Store</Typography>
      <Typography variant="body1" color="textSecondary" sx={{ maxWidth: 800, margin: 'auto' }}>
        Welcome to Our Cash Register Store. We take pride in offering a diverse selection of high-quality cash registers and POS systems tailored to meet your business needs. Whether you're running a small retail store or managing a bustling restaurant, we have the perfect solution to streamline your operations and enhance efficiency. Our products are designed with reliability and performance in mind, ensuring seamless transactions and optimal functionality. Explore our wide range of options and find the perfect match for your business today.
      </Typography>
      <Box mt={4} display="flex" justifyContent="center" onClick={navigateToItemList}>
        <Button variant="contained" color="primary" size="large" sx={{ width: 300, fontSize: { xs: '1.25rem' }, marginBottom: {md: '20px'} }}>Explore Now</Button>
      </Box>
    </Box>
  )
}
