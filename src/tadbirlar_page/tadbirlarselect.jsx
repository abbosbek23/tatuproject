// import React from 'react'
import { Box,Button } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationWebsite from '../Components/locationwebsite';

const Tadbirlarselect = () => {
  return (
    <Box>
        <LocationWebsite name={"Tadbirlar"}/>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="65vh"
    >
        <Link to="/manaviy" style={{marginRight:"10px"}}>
        <Button
        variant="contained"
        sx={{ padding: '20px', marginRight: '10px' }}
      >
        Manaviy va Marifiy tadbirlar
      </Button>
        </Link>
      <Link to="/ilmiy" style={{marginLeft:"10px"}}>
      <Button
        variant="contained"
        sx={{ padding: '20px', marginLeft: '10px' }}
      >
        Ilmiy va uslubiy tadbirlar
      </Button>
      </Link>
      
    </Box>
    </Box>
  )
}

export default Tadbirlarselect