// import React from 'react'
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import iqtidorlibitiruvchilar11 from "../assets/iqtidorlibitiruvchilar.jpg"
import iqtidorlibitiruvchilar22 from "../assets/iqtidorlibitiruvchilar2.jpg"
import iqtidorlibitiruvchilar33 from "../assets/iqtidorlibitiruvchilar3.jpg"
import iqtidorlibitiruvchilar44 from "../assets/iqtidorlibitiruvchilar4.jpg"
import { Grid } from '@mui/material';

const iqtidorlibitiruvchilar = [
    {
        id:1,
        name:"Fattoyev Parviz",
        description:"“Renessans” telekanali bosh prodyuseri",
        image:iqtidorlibitiruvchilar11,
    },
    {
        id:2,
        name:"RAVSHAN GAFAROV",
        description:"MTRK operatori,\"YILNING ENG FAOL TELEOPERATORI\"",
        image:iqtidorlibitiruvchilar33,
    },
    {
        id:3,
        name:"Meron Muxammadaziz",
        description:"Telekanal Zoʻr tv Boshlovchisi Yosh kuch jurnali web muxariri",
        image:iqtidorlibitiruvchilar22,
    },
    {
        id:4,
        name:"Katta leytenant Bobomurodov Ruyiddin Husniddin o‘g‘li",
        description:"Mudofaa vazirligi Axborot va Ommaviy Kommunikatsiyalar Departamenti Multimedia Bo‘lim boshlig‘i o‘rinbosari Videomontaj bo‘linmasi boshlig‘i",
        image:iqtidorlibitiruvchilar44,
    },

]

const Iqtidorlibitiruvchilar = () => {
  return (
    <>
<Box sx={{width:"100%",paddingInline:"100px",marginBlock:"20px"}}>
        <Typography sx={{fontSize:"24px",marginTop:"10px",marginBottom:"15px",marginLeft:'30px'}}>{"Iqtidorli Bitiruvchilar"}</Typography>
        <Grid container spacing={2} sx={{paddingInline:"30px"}}>
          {iqtidorlibitiruvchilar.map((teacher) => (
            <Grid  item xs={12} sm={6} md={4} lg={4} key={teacher.id}>
              <div style={{border:"1px solid black",padding:"20px",width:"100%",height:"500px",borderRadius:"10px",borderColor:"#B5B5B5",textAlign:"center"}}>
                <img style={{marginLeft:"0px",objectFit:"fill"}} width={"100%"} height={"76%"} src={teacher.image} alt={teacher.name} />
                <Typography sx={{marginInline:"10px"}}>{teacher.name}</Typography>
                <Typography sx={{fontSize:"15px",marginInline:"15px"}}>{teacher.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
    </Box>
    </>
  )
}

export default Iqtidorlibitiruvchilar