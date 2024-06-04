// import React from 'react'

import { Box } from "@mui/material"
import { Typography } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { tadbirlar_photo } from "./tadbirlardata";
import "./index.css";
// import LocationWebsite from "../Components/locationwebsite";

const Manaviy = () => {

    const point770 = useMediaQuery("(max-width:770px)");
    const point500 = useMediaQuery("(max-width:500px)");
    console.log(tadbirlar_photo);
  
    const images = tadbirlar_photo.map((item) => item.image);
    const image3 = images[2];
    const image4 = images[3];

  return (
    <Box sx={{marginTop:"90px"}}>
        {/* <LocationWebsite name={"Tadbirlar/Manaviy va Madaniy"}/> */}
        <Typography 
       sx={{
        fontSize: point500 ? "18px" : "24px",
        marginLeft: point770 ? "30px" : "145px",
      }}>
      {"Ma'naviy va Ma'rifiy tadbirlar"}
      </Typography>
      <Box
        sx={{
          paddingInline: "25px",
          paddingBlock: "20px",
          border: "1px solid #B5B5B5",
          borderRadius: "10px",
          marginInline: point500 ? "25px" : point770 ? "75px" : "150px",
          marginBlock: "20px",
        }}
      >
        <div className="image-grid">
          <div className="main-image">
            <img src={image3[0]} width={"99%"} height={"100%"} alt="Main" />
          </div>
          <div className="side-images">
            {image3.slice(1, 5).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <Typography sx={{ fontSize: point500 && "13px", marginTop: "10px" }}>
          {tadbirlar_photo[2].description}
        </Typography>
        
      </Box>
      <Box
        sx={{
          paddingInline: "25px",
          paddingBlock: "20px",
          border: "1px solid #B5B5B5",
          borderRadius: "10px",
          marginInline: point500 ? "25px" : point770 ? "75px" : "150px",
          marginBlock: "20px",
        }}
      >
        <div className="image-grid">
          <div className="main-image">
            <img src={image4[0]} width={"99%"} height={"100%"} alt="Main" />
          </div>
          <div className="side-images">
            {image4.slice(1, 5).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <Typography sx={{ fontSize: point500 && "13px", marginTop: "10px" }}>
          {tadbirlar_photo[3].description}
        </Typography>
      </Box>
    </Box> 
 )
}

export default Manaviy