// import React from 'react'
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import iqtidorlibitiruvchilar11 from "../assets/iqtidorlibitiruvchilar.jpg";
import iqtidorlibitiruvchilar22 from "../assets/iqtidorlibitiruvchilar2.jpg";
import iqtidorlibitiruvchilar33 from "../assets/iqtidorlibitiruvchilar3.jpg";
import iqtidorlibitiruvchilar44 from "../assets/iqtidorlibitiruvchilar4.jpg";
import iqtidorlibitiruvchilar5 from "../assets/iqtidorlibitiruvchilar5.jpg";
import Sertifikategasi1 from "../assets/Sertifikategasi1.jpg";
import Sertifikategasi2 from "../assets/Sertifikategasi2.jpg";
import Sertifikategasi3 from "../assets/Sertifikategasi3.png";
import Sertifikat1 from "../assets/Sertifikat1.jpg";
import Sertifikat2 from "../assets/Sertifikat2.jpg";
import Sertifikat3 from "../assets/Sertifikat3.jpg";  
import { Grid } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import { createGlobalStyle } from 'styled-components';
// import LocationWebsite from "../Components/locationwebsite";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
`;

const iqtidorlibitiruvchilar = [
  {
    id: 1,
    name: "Fattoyev Parviz",
    description: "“Renessans” telekanali bosh prodyuseri",
    image: iqtidorlibitiruvchilar11,
  },
  {
    id: 2,
    name: "RAVSHAN GAFAROV",
    description: 'MTRK operatori,"YILNING ENG FAOL TELEOPERATORI"',
    image: iqtidorlibitiruvchilar33,
  },
  {
    id: 3,
    name: "Meron Muxammadaziz",
    description:
      "Telekanal Zoʻr tv Boshlovchisi Yosh kuch jurnali web muxariri",
    image: iqtidorlibitiruvchilar22,
  },
  {
    id: 4,
    name: "Katta leytenant Bobomurodov Ruyiddin Husniddin o‘g‘li",
    description:
      "Mudofaa vazirligi Axborot va Ommaviy Kommunikatsiyalar Departamenti Multimedia Bo‘lim boshlig‘i o‘rinbosari Videomontaj bo‘linmasi boshlig‘i",
    image: iqtidorlibitiruvchilar44,
  },
  {
    id:5,
    name:"Asror Iskandarov",
    description:"Shaxsiy Brend qurish Tajriba +4-yil, Mediatech It School asoschisi va rahbari",
    image:iqtidorlibitiruvchilar5,
  }
];

const iqtidorlioquvchilar = [
  {
    id: 1,
    name: "Sodiqjonov Yaxyobek Sobirjon o'gli",
    image: Sertifikategasi1,
    sertifikat:Sertifikat1
  },
  {
    id: 2,
    name: "Normuratov Abbosbek Tuychiyevich",
    image: Sertifikategasi2,
    sertifikat:Sertifikat2
  },
  {
    id: 3,
    name: "Jamilova Maftunaxon Nodirbek qizi",
    image: Sertifikategasi3,
    sertifikat:Sertifikat3
  }
]


const Iqtidorlibitiruvchilar = () => {


  const handleDownload = (url, name) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = `${name}.jpg`; // the name of the file after download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const point620 = useMediaQuery("(max-width:620px)");
  return (
    <>
        {/* <LocationWebsite name={"Iqtidorlilar"}/> */}
      <Box sx={{ width: "100%", paddingInline: point620 ? "0px" : "50px", marginBlock: "20px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            marginTop: "10px",
            marginBottom: "15px",
            marginLeft: "30px",
          }}
          className="text2"
        >
          {"Iqtidorli Bitiruvchilar"}
        </Typography>
        <Grid container spacing={2} sx={{ paddingInline: "30px" }}>
          {iqtidorlibitiruvchilar.map((teacher) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={teacher.id}>
              <div style={{border:"1px solid black",padding:"20px",width:"100%",height:"600px",borderRadius:"10px",borderColor:"#B5B5B5",textAlign:"center"}}>
                <img style={{marginLeft:"0px",height:"76%",objectFit:"cover"}} width={"100%"}  src={teacher.image} alt={teacher.name} />
                <Typography className="text2" sx={{ marginInline: "10px",fontSize:point620 ? "14px":"18px" }}>
                  {teacher.name}
                </Typography>
                <Typography className="text2" sx={{ fontSize: point620 ? "12px" : "15px", marginInline: "15px" }}>
                  {teacher.description}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ width: "100%", paddingInline: point620 ? "0px" : "50px", marginBlock: "20px" }}>
        <Typography
          sx={{
            fontSize: "24px",
            marginTop: "10px",
            marginBottom: "15px",
            marginLeft: "30px",
          }}
          className="text2"
        >
          {"Iqtidorli O'quvchilar"}
        </Typography>
        <Grid container spacing={2} sx={{ paddingInline: "30px" }}>
          {iqtidorlioquvchilar.map((teacher) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={teacher.id}>
              <div style={{border:"1px solid black",padding:"20px",width:"100%",height:"550px",borderRadius:"10px",borderColor:"#B5B5B5",textAlign:"center"}}>
                <img style={{marginLeft:"0px",height:"92%",objectFit:"cover"}} width={"100%"}  src={teacher.image} alt={teacher.name} />
                <Typography className="text2" sx={{fontFamily:"Monseratt, sans-serif",fontWeight:"500", marginInline: "0px",fontSize:point620 ? "14px":"18px"}}>
                  {teacher.name}
                </Typography>
                <button
            onClick={() => handleDownload(teacher.sertifikat,teacher.name)}
            style={{ fontSize:"18px",color: "blue", fontWeight: "bold", cursor: "pointer", background: "none", border: "none" }}
          >
            Sertifikat
          </button>
              </div>
            </Grid>
          ))}
        </Grid>
        <GlobalStyle />
      </Box>
    </>
  );
};

export default Iqtidorlibitiruvchilar;
