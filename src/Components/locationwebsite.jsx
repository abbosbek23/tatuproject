/* eslint-disable react/prop-types */
// import React from 'react';
import { Box, Typography } from '@mui/material';
import imageLocation from '../assets/locationimage.png';

const LocationWebsite = ({ name }) => {
  return (
    <Box sx={{width: '100%',paddingInline:"100px", height: '150px', backgroundColor: '#2e3842', display: 'flex', alignItems: 'center',  }}>
      <Typography sx={{color:"white"}} variant="h5">{name}</Typography>
      <img src={imageLocation} style={{marginRight:"0px"}} width={160} height={140} alt="" />
    </Box>
  );
} 

export default LocationWebsite;
