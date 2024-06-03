// import React from 'react'
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.png";
import telegram from "../assets/telegram.svg"
import instagram from "../assets/instagram.png"
import youtube from "../assets/youtube.png"
import twitter from "../assets/twitter.png"
import facebook from "../assets/facebook.png"

const malumotlar = [
  {
    id: 1,
    text: "Manzil: Toshkent 100084, Amir Temur shox ko‘chasi 108 uy",
  },
  {
    id: 2,
    text: "Telefon: +998 71 238 65 61",
  },
  {
    id: 3,
    text: "E-mail: info@tuit.uz",
  },
  {
    id: 4,
    text: "Ish grafigi: Dushanba - Shanba 8:30 - 18:00",
  },
  {
    id: 5,
    text: "Kafedra manzili: B - blok, 3- etaj, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 313 - xonalar",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "30px",
        paddingTop: "20px",
        background:
          "linear-gradient(103deg, rgb(32, 45, 76) 10.55%, rgb(19, 33, 65) 92.66%)",
      }}
    >
      <Box sx={{ width: "260px", textAlign: "center" }}>
        <img src={logo} width={100} height={100} alt="logo" />
        <Typography
          sx={{
            width: "100%",
            marginRight: "0px",
            fontSize: "20px",
            marginLeft: "10px",
            lineHeight: "25px",
            color: "#FFF",
          }}
        >
          Televizion texnologiyalar fakulteti Televizion va media texnologiyalar
          kafedrasi
        </Typography>
      </Box>
      <Box sx={{ width: "270px" }}>
        <Typography
          sx={{
            width: "100%",
            marginRight: "0px",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#FFF",
          }}
        >
          {"Qo'shimcha"} {"ma'lumotlar"}
        </Typography>
        <ul>
          {malumotlar.map((item) => (
            <li style={{ marginBlock: "5px", color: "white",fontWeight:"500" }} key={item.id}>
              {item.text}
            </li>
          ))}
        </ul>
      </Box>
      <Box>
        <Typography sx={{color:"#FFF",fontSize:"20px"}}>
          Ijtimoiy Tarmoqlar
        </Typography>
        <Box sx={{display:"flex",alignItems:"center",gap:"5px"}}>
        <a href="https://t.me/TATU_TTF_Rasmiy_kanal" style={{background:"none"}}>     <img style={{width:"40px",height:"40px"}} src={telegram} alt="telegram" /></a>
        <a href="https://www.instagram.com/tmt_kafedrasi_tatu?igsh=MTZpOXM5MmFhZjdm" style={{background:"none"}}><img style={{width:"40px",height:"40px"}} src={instagram} alt="instagram" /></a>
        <a href="http://www.youtube.com/@muhammadal-xorazmiynomidag7499" style={{background:"none"}}>   <img style={{width:"40px",height:"40px"}} src={youtube} alt="youtube" /></a>
        <a href="http://www.youtube.com/@muhammadal-xorazmiynomidag7499" style={{background:"none"}}>   <img style={{width:"40px",height:"35px"}} src={facebook} alt="facebook" /></a>
        <a href="http://www.youtube.com/@muhammadal-xorazmiynomidag7499" style={{background:"none",marginLeft:"3px"}}>   <img style={{width:"40px",height:"35px"}} src={twitter} alt="twitter" /></a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
