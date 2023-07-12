import React from 'react';
import { Backdrop, Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
     
      <Typography variant="h1" align="center">
        VMSecure
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
        <Button variant="contained" component={Link} to="/new">New Visitor</Button>
        <Button variant="contained"component={Link} to="/existing">Existing Visitor</Button>
      </Box>
    </div>
  );
};



export default App;
