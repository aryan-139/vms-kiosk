import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const ExistingVisitorPage = () => {
  return (
    <div>
        <Navbar />
        <Typography variant="h2" align='center' >Existing Visitor Page</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '400px', margin: '0 auto' }}>
        <TextField id="outlined-basic" label="Visitor ID" variant="outlined" margin="normal" sx={{width:"90%"}}/>
        <TextField id="outlined-basic" label="Purpose" variant="outlined" margin="normal" sx={{width:"90%"}} />
       
        <Button variant="contained" component={Link} to="/checkedin">
          Check In
        </Button>
      </Box>
    </div>
  )
}

export default ExistingVisitorPage