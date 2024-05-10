// import React from 'react'
import { Box, Typography } from '@mui/material';
// import homeimg from '../assets/homeimage.jpg'
import homeimage from "../assets/tuitmainimage.png"
import Bolimlar from './bolimlar';
import Slider from './slider';
import Slidersponsor from './slidersponsor';
// import ReactPlayer from 'react-player';

const Home = () => {
  return (
    <>
        
        <Box sx={{display:"flex",width:"100%",marginLeft:"0px",marginTop:"10px"}}>
          <img style={{width:"100%",height:"550px",objectFit:"fill"}} src={homeimage} alt="" />  
        </Box>
        <Box sx={{marginTop:"20px",padding:"0px 130px"}}>
          <Typography sx={{fontSize:"27px",marginLeft:"0px"}}>{"Bo'limlar"}</Typography>
          <Box sx={{display:"flex",flexWrap:"wrap",width:"100%",marginLeft:"0px"}}>
            <Bolimlar/>
          </Box>  
        </Box>
        <Box sx={{marginBottom:'20px',width:"100%"}}>
          <Typography sx={{fontSize:"27px",marginLeft:"140px",marginBottom:"20px"}}>Iqtidorli {"o'quvchilarimiz"} ishlari</Typography>
         
          {/* <video ><source src='https://www.youtube.com/embed/vGTBhzfXEOA?si=KJWwmBeWE1vtLq2G' type='video/mp4'/></video> */}
          <Slider/>
        </Box>
        <Box sx={{marginBottom:"20px"}}>
          <Typography sx={{fontSize:"27px",marginLeft:"140px",marginBottom:"20px"}}>Bizning Hamkorlar</Typography>
          <Slidersponsor/>
        </Box>
        
    </>
  )
}

export default Home