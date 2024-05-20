import { Box, Typography, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import HomeHero from './HomeHero';
import HomeAbout from './HomeAbout';
import HomeContact from './HomeContact';
import HomeServices from './HomeServices';

export default function Home() {
  return (
    <Box p={3}>
      {/* Hero Section */}
      <HomeHero />

      {/* Our Services Section */}
      <HomeServices />

      {/* About Us Section */}
      <HomeAbout />

      {/* Contact Us Section */}
      <HomeContact />
    </Box>
  );
}
