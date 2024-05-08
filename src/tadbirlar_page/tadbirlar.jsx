// import React from 'react'
import { Box, Typography, 
  // Typography
 } from '@mui/material';
import { tadbirlar_photo } from './tadbirlardata';
import "./index.css"

const Tadbirlar = () => {

   console.log(tadbirlar_photo);

   const images = tadbirlar_photo.map(item=>item.image)
   const image = images[0]
   const image2 = images[1]
   const image3 = images[2]
   console.log(images[0]);
   console.log(images[1]);
   images.slice(1, 5).map((image, index) => console.log(image.map(item=>item),index))

      return (
        <Box>
          <Typography sx={{fontSize:"24px",marginLeft:"145px"}}>Tadbirlardan photo lavhalar va yangiliklar</Typography>
    <Box sx={{paddingInline:"25px",paddingBlock:"20px",border:"1px solid #B5B5B5",borderRadius:"10px",marginInline:"150px",marginBlock:"20px"}}>
<div className="image-grid">
      <div className="main-image">
        <img src={image[0]} width={"99%"}  height={"100%"} alt="Main" />
      </div>
      <div className="side-images">
        {image.slice(1, 5).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
    <Typography sx={{marginTop:'10px'}}>{tadbirlar_photo[0].description}</Typography>
    </Box>
    <Box sx={{paddingInline:"25px",paddingBlock:"20px",border:"1px solid #B5B5B5",borderRadius:"10px",marginInline:"150px",marginBlock:"20px"}}>
<div className="image-grid">
      <div className="main-image">
        <img src={image2[0]} width={"99%"}  height={"100%"} alt="Main" />
      </div>
      <div className="side-images">
        {image2.slice(1, 5).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
    <Typography sx={{marginTop:'10px'}}>{tadbirlar_photo[1].description}</Typography>
    </Box>
    <Box sx={{paddingInline:"25px",paddingBlock:"20px",border:"1px solid #B5B5B5",borderRadius:"10px",marginInline:"150px",marginBlock:"20px"}}>
<div className="image-grid">
      <div className="main-image">
        <img src={image3[0]} width={"99%"}  height={"100%"} alt="Main" />
      </div>
      <div className="side-images">
        {image3.slice(1, 5).map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
    <Typography sx={{marginTop:'10px'}}>{tadbirlar_photo[2].description}</Typography>
    </Box>
    </Box>
  )
}

export default Tadbirlar