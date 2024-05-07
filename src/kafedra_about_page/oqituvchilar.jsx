// import React from 'react'
import { Typography } from '@mui/material';
import teacher1 from "../assets/teacher1.png";
import teacher2 from "../assets/teacher2.png";
import teacher3 from "../assets/teacher3.png";
import teacher4 from "../assets/teacher4.png";
import teacher5 from "../assets/teacher5.png";
import teacher6 from "../assets/teacher6.png";
import teacher7 from "../assets/teacher7.png";
import teacher8 from "../assets/teacher8.png";
import teacher9 from "../assets/teacher9.png";
import teacher10 from "../assets/teacher10.png";
import teacher11 from "../assets/teacher11.png";
import teacher12 from "../assets/teacher12.png";
import teacher13 from "../assets/teacher13.png";
import { Grid } from '@mui/material';
import { Box } from '@mui/material';

const teacherData = [
    { id: 1, name: "Nuraliyev Faxriddin Murodillayevich", profession: "texnika fanlari doktori, professor", image: teacher1 },
    { id: 2, name: "Muhamadiyev Abduvali Shukurovich", profession: "fizika – matematika fanlari doktori, dotsent", image: teacher2 },
    { id: 3, name: "Beknazarova Saida Safibullayevna", profession: "texnika fanlari doktori, professor", image: teacher3 },
    { id: 4, name: "Bazar Bazarbaev Batir Joldasovich", profession: "dotsent", image: teacher4 },
    { id: 5, name: "Qayumova Gulshan Asrorovna", profession: "Phd, katta o‘qituvchi", image: teacher5 },
    { id: 6, name: "Umarova Dildora Baxtiyorovna", profession: "PHD, dotsent", image: teacher6 },
    { id: 7, name: "Yusupova Natalya Yuryevna", profession: "PHD, dotsent", image: teacher7 },
    { id: 8, name: "Ismailov Komolitdin Saidaxmadovich", profession: "katta o‘qituvchi", image: teacher8 },
    { id: 9, name: "Tashmuxammedova Gulnora Xudayberdiyevna", profession: "katta o‘qituvchi", image: teacher9 },
    { id: 10, name: "Saidov Farrux Faxriddinovich", profession: "katta o‘qituvchi", image: teacher10 },
    { id: 11, name: "Saliyev Marat Maxmudovich", profession: "katta o‘qituvchi", image: teacher11 },
    { id: 12, name: "Modullayev Jahongir Sobir o‘g‘li", profession: "assistent", image: teacher12 },
    { id: 13, name: "Tastanova Saida Aldiyarovna", profession: "assistent", image: teacher13 },
  ];

const Teachers = () => {
  return (
    <Box sx={{width:"100%"}}>
        <Typography sx={{fontSize:"20px",marginTop:"10px",marginBottom:"15px"}}>{"KAFEDRA PROFESSOR O‘QITUVCHILARI"}</Typography>
        <Grid container spacing={2}>
          {teacherData.map((teacher) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={teacher.id}>
              <div style={{border:"1px solid black",padding:"10px",width:"250px",height:"280px",borderRadius:"10px",borderColor:"#B5B5B5",textAlign:"center"}}>
                <img style={{marginLeft:"0px"}} src={teacher.image} alt={teacher.name} />
                <Typography>{teacher.name}</Typography>
                <Typography>{teacher.profession}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
    </Box>
  )
}

export default Teachers