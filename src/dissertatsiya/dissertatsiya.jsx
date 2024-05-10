// import React from 'react'
import { Box, Typography } from '@mui/material';
import dissertatsiyaimg1 from "../assets/dissertatsiyaimg1.png"
import dissertatsiyaimg2 from "../assets/dissertatsiyaimg2.png"

const dissertatsiyalar = [
    {
        id:1,
        name:'Genetik algoritmlar yordamida fraktal tasvirlarni sintez qilish',
        description:"t.f.d., professor Nuraliyev Faxriddin Murodullayevich",
        deadline:"2024 Iyun",
        image:dissertatsiyaimg1
    },
    {
        id:2,
        name:"Parvozda zararkunanda hashorotlar haqida ma’lumot beruvchi Smart monitoring majmuasini ishlab chiqish",
        description:"t.f.d., professor Zaynidinov Hakimjon Nasritdinovich",
        deadline:"2024 Sentabr",
        image:dissertatsiyaimg2
    }
]

const Dissertatsiya = () => {
  return (
    <Box display={"flex"} sx={{height:"80vh",paddingInline:"120px"}}>
        {
            dissertatsiyalar.map((item)=><Box key={item.id} sx={{width:"520px",border:"1px solid #B5B5B5",height:"480px"}}>
               <img src={item.image} style={{marginLeft:"25%",objectFit:"cover"}} width={"45%"} height={"70%"} alt="dissertatsiya" />
               <Typography sx={{paddingInline:"20px"}}><span style={{fontWeight:"600"}}>Dissertatsiya Mavzusi:</span>{item.name}</Typography>
               <Typography sx={{paddingInline:"20px"}}>{item.description}</Typography>
               <Typography sx={{fontSize:"16px",marginLeft:"20px"}}><span style={{fontWeight:"600"}}>Dissertasiya ishini yakunlash vaqti:</span> {item.deadline}</Typography>
            </Box>)
        }
    </Box>
  )
}

export default Dissertatsiya