/* eslint-disable react/prop-types */
// import React from 'react';
import { Box, Typography } from '@mui/material';
import imageLocation from '../assets/locationimage.png';

const LocationWebsite = ({ name }) => {
  return (
    <Box sx={{width: '100%',paddingInline:"100px", height: '90px', backgroundColor: '#2e3842', display: 'flex', alignItems: 'center',"@media (max-width:450px)":{paddingInline:"15px"} }}>
      <Typography sx={{color:"white","@media (max-width:450px)":{fontSize:"16px"}}} variant="h5">{name}</Typography>
      <Box sx={{width:"80px",height:"70px",marginRight:"0px", "@media (max-width:450px)":{width:"100px",height:"100px",marginRight:"0px"}}}>
      <img src={imageLocation} style={{marginRight:"0px"}} width={"100%"} height={"100%"} alt="" />
      </Box>
    </Box>
  );
} 

export default LocationWebsite;
