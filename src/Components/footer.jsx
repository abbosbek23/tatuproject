// import React from 'react'
import { Box, Typography } from '@mui/material';
import logo from "../assets/logo.png"

const malumotlar = [
  {
    id:1,
    text:"Manzil: Toshkent 100084, Amir Temur shox ko‘chasi 108 uy"
  },
  {
    id:2,
    text:"Telefon: +998 71 238 64 15"
  },
  {
    id:3,
    text:"E-mail: info@tuit.uz"   
  },
  {
    id:4,
    text:"Ish grafigi: Dushanba - Shanba 8:30 - 18:00"
  },
  {
    id:5,
    text:"Kafedra manzili: B - blok, 3- etaj, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313 - xonalar"   
  }
]

const Footer = () => {
  return (
    <Box sx={{display:"flex",paddingTop:"20px",background:"linear-gradient(103deg, rgb(32, 45, 76) 10.55%, rgb(19, 33, 65) 92.66%)",}}>
       <Box sx={{width:"260px",textAlign:"center",marginLeft:"300px",marginRight:"30px"}}>
       <img src={logo} width={100} height={100} alt="logo" /> 
       <Typography sx={{width:"100%",marginRight:'0px',fontSize:"20px",marginLeft:"10px",lineHeight:'25px',color:"#FFF"}}>Televizion texnologiyalar fakulteti 
            Televizion va media texnologiyalar kafedrasi</Typography>
       </Box> 
       <Box sx={{marginLeft:"200px",width:"270px"}}>
       <Typography sx={{width:"100%",marginRight:'0px',fontSize:"18px",lineHeight:'25px',color:"#FFF"}}>
        {"Qo'shimcha"} {"ma'lumotlar"}
       </Typography>
        <ul>
          {
            malumotlar.map((item)=><li style={{marginBlock:"5px",color:"white"}} key={item.id}>
             {item.text}
            </li>)
          }
        </ul>
       </Box>
    </Box>
  )
}

export default Footer