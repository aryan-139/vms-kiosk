import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const ExistingVisitorPage = () => {
  const [visitorID, setVisitorID] = useState('');
  const [purpose, setPurpose] = useState('');

  const checkIn = () => {
    Axios.post('http://localhost:3001/existingcheckin', { visitorID: visitorID, purpose: purpose })
      .then(response => {
        alert("Hurrah! Successfully checked in!!!!");
      })
      .catch(error => {
        console.error(error);
      });
  };

  const checkOut = () => {
    Axios.post('http://localhost:3001/existingcheckout', { visitorID: visitorID, purpose: purpose })
      .then(response => {
       alert("Hurrah! Successfully checked out!!!!");
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar />
      <Typography variant="h2" align="center">Existing Visitor Page</Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px', margin: '0 auto' }}>
        <TextField
          id="visitor-id"
          label="Visitor ID"
          type="text"
          onChange={(e) => setVisitorID(e.target.value)}
          variant="outlined"
          margin="normal"
          sx={{ width: "90%" }}
        />
        <TextField
          id="purpose"
          label="Purpose"
          type="text"
          onChange={(e) => setPurpose(e.target.value)}
          variant="outlined"
          margin="normal"
          sx={{ width: "90%" }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
          <Button onClick={checkIn} variant="contained" component={Link} to="/checkedin">
            Check In
          </Button>
          <Button onClick={checkOut} variant="contained" component={Link} to="/checkedout">
            Check Out
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default ExistingVisitorPage;
