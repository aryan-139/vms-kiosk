import React, { useState, useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Axios from 'axios';

const NewVisitorPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [purpose, setPurpose] = useState('');
  //values added to the state variables

  
  useEffect(() => {
    console.log(firstName);
  }, [firstName]);

  const checkIn = () => {
    var checkInDetails = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      companyName: companyName,
      purpose: purpose
    };
    Axios.post('http://localhost:3001/newcheckin', checkInDetails);
  };
  

  return (
    <div>
      <Navbar />
      <Typography variant="h2" align="center">
        New Visitor Page
      </Typography>
      {/**Add functionality to check in button */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px', margin: '0 auto' }}>
        <TextField
          id="first-name"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          label="First Name"
          variant="outlined"
          margin="normal"
          sx={{ width: '90%' }}
        />
        <TextField
          id="last-name"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          label="Last Name"
          variant="outlined"
          margin="normal"
          sx={{ width: '90%' }}
        />
        <TextField
          id="email"
          type="email"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          label="Email"
          variant="outlined"
          margin="normal"
          sx={{ width: '90%' }}
        />
        <TextField
          id="phone"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          label="Phone"
          variant="outlined"
          margin="normal"
          sx={{ width: '90%' }}
        />
        <TextField
          id="company"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          label="Company Name"
          variant="outlined"
          margin="normal"
          sx={{ width: '90%' }}
        />
        <TextField
          id="purpose"
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          label="Purpose"
          variant="outlined"
          margin="normal"
          sx={{ width: '90%' }}
        />

        <Button onClick={checkIn} variant="contained" component={Link} to="/checkedin">
          Check In
        </Button>
      </Box>

    </div>
  );
};

export default NewVisitorPage;
