import { Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const officeLocations = [
  { 
    name: 'Head Office', 
    address: '1234 Tech Street, Silicon Valley, CA', 
    color: '#1995AD',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243594.2940524096!2d78.393421!3d17.452014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91006d28aae7%3A0x5a11d0e3f374bc19!2sBusitron%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1739256915719!5m2!1sen!2sin' 
  },
  { 
    name: 'Branch Office', 
    address: '5678 Business Blvd, New York, NY', 
    color: '#1995AD',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243594.2940524096!2d78.393421!3d17.452014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91006d28aae7%3A0x5a11d0e3f374bc19!2sBusitron%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1739256915719!5m2!1sen!2sin' 
  },
  { 
    name: 'Regional Office', 
    address: '91011 Innovation Way, Austin, TX', 
    color: '#1995AD',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243594.2940524096!2d78.393421!3d17.452014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91006d28aae7%3A0x5a11d0e3f374bc19!2sBusitron%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1739256915719!5m2!1sen!2sin' 
  },
  { 
    name: 'Regional Office', 
    address: '91011 Innovation Way, Austin, TX', 
    color: '#1995AD',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243594.2940524096!2d78.393421!3d17.452014!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91006d28aae7%3A0x5a11d0e3f374bc19!2sBusitron%20IT%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1739256915719!5m2!1sen!2sin' 
  }
];

const Locations = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align="center" sx={{ color: '#333', fontWeight: 'bold' }}>
        Our Locations
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {officeLocations.map((location, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card
                sx={{
                  background: location.color,
                  borderRadius: '16px',
                  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)' },
                }}
              >
                <CardContent sx={{ textAlign: 'center', color: '#fff' }}>
                  <Typography variant="h6" gutterBottom>
                    {location.name}
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    {location.address}
                  </Typography>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  >
                    <iframe
                      src={location.mapSrc}
                      width="100%"
                      height="200"
                      style={{ border: 0, borderRadius: '8px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Locations;