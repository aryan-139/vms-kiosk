import { Box, Button, Icon, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CheckedOutPage = () => {
  return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h2" align='center' >Checked Out</Typography>
        <Typography variant="h4" align='center' >Welcome to Deepsight AI Labs</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', marginTop: '16px' }}>
        <Button variant="contained" component={Link} to="/">Home</Button>
        </Box>
        </Box>
    </div>
  )
}

export default CheckedOutPage