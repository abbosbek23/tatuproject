// import React from 'react'

import { Box } from "@mui/material"
import { Typography } from '@mui/material';
import { tadbirlar_photo } from "./tadbirlardata";
import { useMediaQuery } from '@mui/material';
import "./index.css";
// import LocationWebsite from "../Components/locationwebsite";

const Ilmiy = () => {
    const point770 = useMediaQuery("(max-width:770px)");
    const point500 = useMediaQuery("(max-width:500px)");
    console.log(tadbirlar_photo);
  
    const images = tadbirlar_photo.map((item) => item.image);
    const image = images[0];
    const image2 = images[1];
    const image5 = images[4]


  return (
    <Box>
        {/* <LocationWebsite name={"Tadbirlar/Ilmiy va uslubiy"}/>   */}
        <Typography
         sx={{
          fontSize: point500 ? "18px" : "24px",
          marginLeft: point770 ? "30px" : "145px",
        }}
      >
        Ilmiy va uslubiy tadbirlar
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
          <div className="main-images">
            <img src={image5[0]} width={"99%"} height={"100%"} alt="Main" />
          </div>
          <div className="side-imagess">
            {image5.slice(1, 3).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <Typography sx={{ fontSize: point500 && "13px", marginTop: "10px" }}>
          {tadbirlar_photo[4].description}
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
            <img src={image[0]} width={"99%"} height={"100%"} alt="Main" />
          </div>
          <div className="side-images">
            {image.slice(1, 5).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <Typography sx={{ fontSize: point500 && "13px", marginTop: "10px" }}>
          {tadbirlar_photo[0].description}
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
            <img src={image2[0]} width={"99%"} height={"100%"} alt="Main" />
          </div>
          <div className="side-images">
            {image2.slice(1, 5).map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
        </div>
        <Typography sx={{ fontSize: point500 && "13px", marginTop: "10px" }}>
          {tadbirlar_photo[1].description}
        </Typography>
      </Box>
    </Box>
  )
}

export default Ilmiy