import { Box, Typography, useMediaQuery } from "@mui/material";
// import React from 'react'
import kafedramudiri from "../assets/kafedramudiri.png";
import "./index.css";
import audiovizual from "../assets/Audiovizual.jpg";
import telestudiya from "../assets/Telestudiya.jpg";
import kompyutergrafika from "../assets/komyutergrafika.png";
import multi from "../assets/multi.png";
import video from "../assets/video.png";
import yoritish from "../assets/yoritish.png";
import Teachers from "./oqituvchilar";

const magistraturayonalishlar = [
  {
    id: 1,
    name: "Kompyuter grafikasi va dizayn mutaxassisligi",
    img: kompyutergrafika,
  },
  {
    id: 2,
    name: "Multiplikatsion filmlar texnologiyalar",
    img: multi,
  },
  {
    id: 3,
    name: "Video-texnologiyalar",
    img: video,
  },
  {
    id: 4,
    name: "Maxsus yoritish texnologiyalar",
    img: yoritish,
  },
];
const bakalavr = [
  { id: 1, name: "Maxsus effektlar" },
  { id: 2, name: "Audio-video media mahsulotlar yaratish texnologiyalari" },
  { id: 3, name: "Zamonaviy televizion studiyalar" },
  { id: 4, name: "Audiostudiyalar dizayni" },
  { id: 5, name: "Audio-video montaj" },
  { id: 6, name: "Kompyuter grafikasi" },
  { id: 7, name: "Kreativ dizayn va veb san’ati" },
  { id: 8, name: "Muhandislik va kompyuter grafikasi" },
  { id: 9, name: "Ekspremental televideniya" },
  { id: 10, name: "Virtual reallikni vizuallashtirish" },
  { id: 11, name: "Audio va videoni qayta ishlashda sun’iy intellekt" },
  { id: 12, name: "Raqamli media va TV texnologiyalar" },
  { id: 13, name: "Ovoz va tasvirlarni qayta ishlash" },
  { id: 14, name: "Kompyuter animatsiyasi" },
  { id: 15, name: "Multiplikatsiya maxsulotlarini yaratish texnologiyalari" },
  { id: 16, name: "Fotometriya va rangshunoslik" },
  { id: 17, name: "Tasviriy san’at va sur’at" },
  { id: 18, name: "Fotografiya" },
  { id: 19, name: "Yoritish texnologiyalari" },
  { id: 20, name: "Kreativ kamera seminari" },
  { id: 21, name: "Raqamli kamera seminari" },
  { id: 22, name: "Kreativ yoritish" },
  { id: 23, name: "Mass media va TV jurnalistika" },
];
const magistratura = [
  { id: 1, name: "Tasvirlarga ishlov berishning matematik asoslari" },
  { id: 2, name: "Tasvirlarni qayta ishlash va modellashtirish" },
  { id: 3, name: "Kompyuter grafikasida" },
  { id: 4, name: "Tasvirlarni tanib olish" },
  { id: 5, name: "Nutq signallarini tanib olish" },
  { id: 6, name: "Media, film va television mahsulotlar" },
  { id: 7, name: "Video tasvirlarni uzatishning matematik asoslari" },
  { id: 8, name: "Intelligent video tizimlar" },
  { id: 9, name: "Kompyuter grafikasining matematik asoslari" },
  { id: 10, name: "Fraktallar nazariyasi va fractal grafika" },
];

const About = () => {
  const point820 = useMediaQuery("(max-width: 820px)");
  const point750 = useMediaQuery("(max-width: 750px)");
  const point560 = useMediaQuery("(max-width: 560px)");
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: point560 ? "10px 50px" : "20px 100px",
          marginBlock: "20px 50px",
          background:
            "linear-gradient(103deg, rgb(32, 45, 76) 10.55%, rgb(19, 33, 65) 92.66%);",
          flexDirection: point750 && "column",
        }}
      >
        <img
          src={kafedramudiri}
          style={{
            marginLeft: "0px",
            marginRight: "30px",
            width: point750 ? "300px" : "350px",
            height: point750 ? "300px" : "350px",
            borderRadius: "38% 62% 100% 0% / 0% 100% 0% 100% ",
          }}
          alt="kafedramudiri"
        />
        <Box sx={{ marginTop: "50px" }}>
          <Typography
            sx={{
              fontSize: point560 ? "17px" : "20px",
              fontWeight: 500,
              letterSpacing: "1px",
              fontFamily: "Poppins, sans-serif",
              color: "#FFF",
            }}
          >
            Kafedra mudiri
          </Typography>
          <Typography
            sx={{
              fontSize: point560 ? "18px" : "21px",
              fontWeight: 500,
              letterSpacing: "1px",
              color: "#ffcc19",
            }}
          >
            Nuraliyev Faxriddin Murodillayevich
          </Typography>
          <Typography
            sx={{
              fontSize: point560 ? "17px" : "20px",
              fontWeight: 500,
              letterSpacing: "1px,",
              fontFamily: "Poppins, sans-serif",
              color: "#FFF",
            }}
          >
            Texnika Fanlari Doktori, Professor
          </Typography>
          <Typography
            sx={{
              fontSize: point560 ? "13px" : "16px",
              marginBlock: "10px",
              color: "#ffcc19",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span style={{ color: "#FFF" }}>Qabul vaqti:</span>Dushanba – Shanba
            (15.00-17.00 gacha)
          </Typography>
          <Typography
            sx={{
              fontSize: point560 ? "13px" : "16px",
              marginBlock: "10px",
              color: "#ffcc19",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span style={{ color: "#FFF" }}>Telefon:</span>(+99871) 238-65-61,
            (+99871) 238-65-47
          </Typography>
          <Typography
            sx={{
              fontSize: point560 ? "13px" : "16px",
              marginBlock: "10px",
              color: "#ffcc19",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            <span style={{ color: "#FFF" }}>Email:</span>
            <a
              href="mailto:f.nuraliev@tuit.uz"
              style={{
                cursor: "pointer",
                background: "none",
                color: "#ffcc19",
                marginLeft: "10px",
                paddingLeft: "0px",
              }}
            >
              f.nuraliev@tuit.uz
            </a>
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{ padding: point560 ? "0 40px" : point750 ? "0 50px" : "0 100px" }}
      >
        <Typography
          sx={{
            fontSize: point560 ? "14px" : "18px",
            marginBlock: "10px",
            color: "#5d5d5d",
          }}
        >
          {
            "O‘zbekiston Respublikasi Prezidentining 2009 yil 1 apreldagi O‘zbekiston Milliy teleradiokompaniyasi tizimida yuqori texnologiyali teleradiouskunalardan foydalanish samaradorligini yanada oshirish chora-tadbirlari to‘g‘risida”gi PQ-1088-sonli Qaroriga muvofiq Toshkent axborot texnologiyalari universitetida Televizion texnologiyalari fakultetiga asos solingan."
          }
        </Typography>
        <Typography
          sx={{ fontSize: point560 ? "14px" : "18px", color: "#5d5d5d" }}
        >
          {
            '2011 yildan boshlab "Televizion texnologiyalari” fakultetida 2011-2012 o‘quv yilida "Kompyuter grafikasi va dizayn” va "Televidenie, radio eshittirish studiyalari va jixozlari” mutaxassislik kafedrasiga asos solindi. 2012 yilda "Televidenie, radio eshittirish studiyalari va jixozlari” kafedrasi nomi "Telestudiya tizimlari va ilovalari” kafedrasi nomiga o‘zgartirildi.'
          }
        </Typography>
        <Typography
          sx={{
            fontSize: point560 ? "14px" : "18px",
            marginBlock: "10px",
            color: "#5d5d5d",
          }}
        >
          {
            'O‘zbekiston Respublikasi Vazirlar Mahkamasining 2013 yil 28 iyundagi "Toshkent axborot texnologiyalari universiteti va uning tuzilmasini takomillashtirish to‘g‘risida”gi VMQ-188-sonli Qaroriga binoan Toshkent axborot texnologiyalari universiteting tuzilmasiga o‘zgarishlar kiritilganligi tufayli, 2013-2014 o‘quv yilidan boshlab "Kompyuter grafikasi va dizayn” kafedrasi nomi "Audiovizual texnologiyalari” deb e’tirof etila boshlandi.'
          }
        </Typography>
        <Typography
          sx={{
            fontSize: point560 ? "14px" : "18px",
            marginBottom: "10px",
            color: "#5d5d5d",
          }}
        >
          {
            "2023-yil 15-sentyabrdagi Muhammad al-Xorazmiy nomidagi Toshkent axborot texnologiyalari universitetining “Kafedralar faoliyatini tugatish va yangi kafedralar tashkil etish to‘g‘risida”gi buyrugʻiga asosan “Telestudiya tizimlari va ilovalari” va “Audiovizual texnologiyalar” kafedralari birlashtirilib yangi “Televizion va media texnologiyalar” kafedrasi tashkil etildi."
          }
        </Typography>
      </Box>
      <Typography
        sx={{
          marginLeft: point560 ? "40px" : point750 ? "50px" : "100px",
          fontSize: point560 ? "20px" : "25px",
        }}
      >
        {"KAFEDRA BAKALAVRIAT TA’LIM YO‘NALISHI"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          padding: point560 ? "0 40px" : "0px 100px",
          gap: "30px",
        }}
      >
        <Box
          sx={{
            width: point750 ? "300px" : "40%",
            height: "400px",
            marginBottom: "20px",
            padding: "15px 15px",
            border: "1px solid #B5B5B5",
            borderRadius: "12px",
          }}
        >
          <img
            height={"80%"}
            style={{ borderRadius: "8px" }}
            width={"100%"}
            src={audiovizual}
            alt="audiovizual"
          />
          <Typography sx={{ textAlign: "center", marginTop: "10px" }}>
            Televizion texnologiyalar(Audiovizual texnologiyalar)
          </Typography>
        </Box>
        <Box
          sx={{
            width: point750 ? "300px" : "40%",
            height: "400px",
            marginBottom: "20px",
            padding: "15px 15px",
            border: "1px solid #B5B5B5",
            borderRadius: "12px",
          }}
        >
          <img
            height={"80%"}
            style={{ borderRadius: "8px" }}
            width={"100%"}
            src={telestudiya}
            alt="telestudiya"
          />
          <Typography sx={{ textAlign: "center", marginTop: "10px" }}>
            Televizion texnologiyalar(Telestudiya tizimlari va ilovalari)
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          marginLeft: point560 ? "40px" : point750 ? "50px" : "100px",
          fontSize: point560 ? "20px" : "25px",
        }}
      >
        KAFEDRA MAGISTRATURA MUTAXASSISLIKLARI
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          width: "100%",
          padding: point560 ? "0 40px" : "0px 100px",
          gap: "12px",
        }}
      >
        {magistraturayonalishlar.map((item) => (
          <Box
            key={item.id}
            sx={{
              width: point560 ? "300px" : point820 ? "70%" : "49%",
              height: "400px",
              marginBottom: "20px",
              padding: "15px 15px",
              border: "1px solid #B5B5B5",
              borderRadius: "12px",
              marginRight: "0px",
              marginLeft: "0px",
              marginTop: "20px",
            }}
          >
            <img
              height={"75%"}
              style={{ borderRadius: "8px" }}
              width={"100%"}
              src={item.img}
              alt="telestudiya"
            />
            <Typography sx={{ textAlign: "center", marginTop: "10px" }}>
              {item.name}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        <Box>
          <Typography
            sx={{
              marginLeft: point560 ? "40px" : point750 ? "50px" : "100px",
              fontSize: point560 ? "20px" : "25px",
            }}
          >
            {"KAFEDRADA O‘QITILADIGAN FANLAR"}
          </Typography>
          <Typography
            sx={{
              fontSize: "20px",
              marginLeft: "40px",
              fontWeight: "500",
              color: "blue",
            }}
          >
            Bakalavriat
          </Typography>
          <Box sx={{ marginLeft: "70px" }}>
            {bakalavr.map((item) => (
              <ul key={item.id}>
                <li
                  style={{
                    fontSize: point560 ? "14px" : "18px",
                    fontFamily: "Poppins,sans-serif",
                    color: "green",
                  }}
                >
                  {/* <span style={{display:"block",backgroundColor:"green",width:"10px",height:"10px",}}></span> */}
                  <span style={{ color: "#000" }}>{item.name}</span>
                </li>
              </ul>
            ))}
            {/* <span style={{width:"15px",height:"15px",borderRadius:"50px",backgroundColor:"green",display:"block"}}></span> */}
          </Box>
        </Box>
        <Box paddingTop={3} paddingRight={5}>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "500",
              color: "blue",
              marginLeft: point560 && "40px",
            }}
          >
            Magistratura
          </Typography>
          <Box sx={{ marginLeft: "70px" }}>
            {magistratura.map((item) => (
              <ul key={item.id}>
                <li
                  style={{
                    fontSize: point560 ? "14px" : "18px",
                    fontFamily: "Poppins,sans-serif",
                    color: "green",
                  }}
                >
                  {/* <span style={{display:"block",backgroundColor:"green",width:"10px",height:"10px",}}></span> */}
                  <span style={{ color: "#000" }}>{item.name}</span>
                </li>
              </ul>
            ))}
            {/* <span style={{width:"15px",height:"15px",borderRadius:"50px",backgroundColor:"green",display:"block"}}></span> */}
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
          marginBottom: "20px",
        }}
      >
        <Teachers />
      </Box>
      <Box></Box>
    </Box>
  );
};

export default About;
