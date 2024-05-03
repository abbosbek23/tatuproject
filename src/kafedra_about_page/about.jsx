import { Box, Typography } from '@mui/material'
// import React from 'react'
import kafedramudiri from "../assets/kafedramudiri.png"
import "./index.css"

const About = () => {
  return (
    <Box>
        <Box sx={{display:"flex",padding:"20px 100px",marginBlock:"20px 50px",background:"linear-gradient(103deg, rgb(32, 45, 76) 10.55%, rgb(19, 33, 65) 92.66%);"}}>
         <img src={kafedramudiri} style={{marginLeft:"0px",marginRight:"30px",width:"350px",height:"350px",borderRadius:"38% 62% 100% 0% / 0% 100% 0% 100% "}} alt="kafedramudiri" />
         <Box sx={{marginTop:"50px"}}>
            <Typography sx={{fontSize: "20px",fontWeight:500,letterSpacing:"1px",fontFamily:"Poppins, sans-serif",color:"#FFF"}}>Kafedra mudiri</Typography>
            <Typography sx={{fontSize: "21px",fontWeight:500,letterSpacing:"1px",color:"#ffcc19"}}>Nuraliyev Faxriddin Murodillayevich</Typography>
            <Typography sx={{fontSize:"20px",fontWeight:500,letterSpacing:"1px,",fontFamily:"Poppins, sans-serif",color:"#FFF"}}>Texnika Fanlari Doktori, Professor</Typography> 
            <Typography sx={{marginBlock:"10px",color:"#ffcc19",fontFamily:"Poppins, sans-serif"}}><span style={{color:"#FFF"}}>Qabul vaqti:</span>Dushanba – Shanba (15.00-17.00 gacha)</Typography>
            <Typography sx={{marginBlock:"10px",color:"#ffcc19",fontFamily:"Poppins, sans-serif"}}><span style={{color:"#FFF"}}>Telefon:</span>(+99871) 238-65-61, (+99871) 238-65-47</Typography> 
            <Typography sx={{marginBlock:"10px",color:"#ffcc19",fontFamily:"Poppins, sans-serif"}}><span style={{color:"#FFF"}}>Email:</span><a href="mailto:f.nuraliev@tuit.uz" style={{cursor:"pointer",background:"none",color:"#ffcc19",marginLeft:"10px",paddingLeft:"0px"}}>f.nuraliev@tuit.uz</a></Typography>
         </Box>
        </Box>
         <Box sx={{padding:"0 100px"}}>
            <Typography sx={{fontSize:"18px",marginBlock:"10px",color:"#5d5d5d"}}>{"O‘zbekiston Respublikasi Prezidentining 2009 yil 1 apreldagi O‘zbekiston Milliy teleradiokompaniyasi tizimida yuqori texnologiyali teleradiouskunalardan foydalanish samaradorligini yanada oshirish chora-tadbirlari to‘g‘risida”gi PQ-1088-sonli Qaroriga muvofiq Toshkent axborot texnologiyalari universitetida Televizion texnologiyalari fakultetiga asos solingan."}</Typography>
            <Typography sx={{fontSize:"18px",color:"#5d5d5d"}}>{'2011 yildan boshlab "Televizion texnologiyalari” fakultetida 2011-2012 o‘quv yilida "Kompyuter grafikasi va dizayn” va "Televidenie, radio eshittirish studiyalari va jixozlari” mutaxassislik kafedrasiga asos solindi. 2012 yilda "Televidenie, radio eshittirish studiyalari va jixozlari” kafedrasi nomi "Telestudiya tizimlari va ilovalari” kafedrasi nomiga o‘zgartirildi.'}</Typography>
            <Typography sx={{fontSize:"18px",marginBlock:"10px",color:"#5d5d5d"}}>{'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2013 yil 28 iyundagi "Toshkent axborot texnologiyalari universiteti va uning tuzilmasini takomillashtirish to‘g‘risida”gi VMQ-188-sonli Qaroriga binoan Toshkent axborot texnologiyalari universiteting tuzilmasiga o‘zgarishlar kiritilganligi tufayli, 2013-2014 o‘quv yilidan boshlab "Kompyuter grafikasi va dizayn” kafedrasi nomi "Audiovizual texnologiyalari” deb e’tirof etila boshlandi.'}</Typography>
            <Typography sx={{fontSize:"18px",marginBottom:"10px",color:"#5d5d5d"}}>{'2023-yil 15-sentyabrdagi Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universitetining “Kafedralar faoliyatini tugatish va yangi kafedralar tashkil etish to‘g‘risida”gi buyrugʻiga asosan “Telestudiya tizimlari va ilovalari” va “Audiovizual texnologiyalar” kafedralari birlashtirilib yangi “Televizion va media texnologiyalar” kafedrasi tashkil etildi.'}</Typography>
         </Box>
    </Box>
  )
}

export default About