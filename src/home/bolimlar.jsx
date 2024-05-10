// import React from 'react'
import kafedraicon from "../assets/kafedraicon.png"
import tadbirlaricon from "../assets/tadbirlaricon.png"
import guruhlaricon from "../assets/guruhlaricon.png"
import iqtidorlitalabalaricon from "../assets/iqtidorlitalabalaricon.png"
import dissertatsiyaicon from "../assets/dissertatsiyaicon.png"
// import yonalishicon from "../assets/yonalishlaricon.png"
import { Box, Typography, Grid } from "@mui/material"
import { Link } from 'react-router-dom';

const bolim = [
    {
        id:1,
        name:"kafedra",
        img:kafedraicon,
        path:"/kafedra"
    },
    {
        id:2,
        name:"tadbirlar",
        img:tadbirlaricon,
        path:"/tadbirlar"
    },
    {
        id:3,
        name:"guruhlar",
        img:guruhlaricon,
        path:"/guruhlar"
    },
    {
        id:4,
        name:"iqtidorli talabalar",
        img:iqtidorlitalabalaricon,
        path:"/iqtidorlilar"
    },
    {
        id:5,
        name:"dissertatsiya",
        img:dissertatsiyaicon,
        path:"/dissertatsiya"
    },
    
]
const Bolimlar = () => {
  return (
    <>
    <Grid container spacing={0}>
      {bolim.map((item) => (
        <Grid item xs={2.4} key={item.id}>
            <Link to={item.path}>
          <Box sx={{ width:"170px",textAlign: 'center',marginBlock:"40px",boxShadow:"0px 0px 2px 1px #dbdbdb",padding:"10px",borderRadius:"10px",transition:"0.5s","&:hover":{transform: "translatey(-5px) scale(1.05)",boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",color:"blue"}}}>
            <img width={80} height={80} src={item.img} alt="bolimlaricon" />
            <Typography sx={{ fontSize: "19px",whiteSpace:"nowrap", textTransform: "capitalize" }}>{item.name}</Typography>
          </Box>
            </Link>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

export default Bolimlar