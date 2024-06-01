// import React from 'react'
import { Box, Typography, useMediaQuery } from "@mui/material";
import dissertatsiyaimg1 from "../assets/dissertatsiyaimg1.png";
import dissertatsiyaimg2 from "../assets/dissertatsiyaimg2.png";
import dissertatsiyaimg3 from "../assets/ilmiyish1.png";

const dissertatsiyalar = [
  {
    id: 1,
    name: "Genetik algoritmlar yordamida fraktal tasvirlarni sintez qilish",
    description: "t.f.d., professor Nuraliyev Faxriddin Murodullayevich",
    deadline: "2024 Iyun",
    image: dissertatsiyaimg1,
  },
  {
    id: 2,
    name: "Parvozda zararkunanda hashorotlar haqida ma’lumot beruvchi Smart monitoring majmuasini ishlab chiqish",
    description: "t.f.d., professor Zaynidinov Hakimjon Nasritdinovich",
    deadline: "2024 Sentabr",
    image: dissertatsiyaimg2,
  },
  {
    id:3,
    name:"Zamonaviy o'zbek hujjatli kinosida film-portret janri",
    description:"PHD Ismailov Kamoliddin Saidaxmadovich",
    deadline:"2024 mart",
    image:dissertatsiyaimg3
  }
];

const Dissertatsiya = () => {
  const point500 = useMediaQuery("(max-width:500px)");
  return (
    <Box>
      {/* <LocationWebsite name={"Dissertatsiya"}/> */}
    <Box
      display={"flex"}
      sx={{
        paddingInline: "120px",
        flexWrap: "wrap",
        gap: "25px",
        padding: "80px 0",
      }}
    >
      {dissertatsiyalar.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: point500 ? "310px" : "400px",
            border: "1px solid #B5B5B5",
            height: "420px",
          }}
        >
          <img
            src={item.image}
            style={{ marginLeft: "30%" }}
            width={"40%"}
            alt="dissertatsiya"
          />
          <Typography sx={{ paddingInline: point500 ? "10px" : "20px" }}>
            <span style={{ fontWeight: "600" }}>Dissertatsiya Mavzusi:</span>
            {item.name}
          </Typography>
          <Typography sx={{ paddingInline: point500 ? "10px" : "20px" }}>
            {item.description}
          </Typography>
          <Typography sx={{ fontSize: "16px" }}>
            <span style={{fontWeight:"600",fontSize:point500 ? "15px" : "14px",paddingInline: point500 ?  "10px":"20px"}}>Yakunlash vaqti:</span>{item.deadline}
          </Typography>
        </Box>
      ))}
    </Box>
    </Box>
  );
};

export default Dissertatsiya;
