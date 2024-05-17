// import React from 'react'
import { Box, Typography, useMediaQuery } from "@mui/material";
// import homeimg from '../assets/homeimage.jpg'
import homeimage from "../assets/tuitmainimage.png";
import Bolimlar from "./bolimlar";
import Slider from "./slider";
import Slidersponsor from "./slidersponsor";
// import ReactPlayer from 'react-player';

const Home = () => {
  const point620 = useMediaQuery("(max-width:620px)");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          marginLeft: "0px",
          marginTop: "10px",
          marginBottom: "30px",
        }}
      >
        <img
          style={{
            width: "90%",
            height: point620 ? "auto" : "600px",
            objectFit: "fill",
          }}
          src={homeimage}
          alt=""
        />
      </Box>
      <Box sx={{ marginTop: "20px", padding: "0px 130px",paddingInline:point620 ? "30px":"130px" }}>
        <Typography sx={{ fontSize: point620 ? "20px" : "27px", marginLeft: "0px", marginBlock:"10px" }}>
          {"Bo'limlar"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            marginLeft: "0px",
            marginBottom: "30px",
          }}
        >
          <Bolimlar />
        </Box>
        <Box sx={{ marginBottom: "20px", width: "100%" }}>
          <Typography
            sx={{
              fontSize: point620 ? "20px":"27px",
              marginLeft: point620 ? "20px" : "25px",
              marginBottom: "20px",

            }}
          >
            Iqtidorli {"o'quvchilarimiz"} ishlari
          </Typography>

          {/* <video ><source src='https://www.youtube.com/embed/vGTBhzfXEOA?si=KJWwmBeWE1vtLq2G' type='video/mp4'/></video> */}
          <Slider />
        </Box>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Typography
          sx={{
            fontSize: point620 ? "20px" : "27px",
            marginLeft: point620 ? "50px" : "160px",
            marginBottom: "20px",
          }}
        >
          Bizning Hamkorlar
        </Typography>
        <Slidersponsor />
      </Box>
    </Box>
  );
};

export default Home;
