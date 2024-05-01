// import React from 'react'
import logo from "../assets/logo.png"
import {Box} from "@mui/system"
import { Typography } from "@mui/material";
import "./index.css"

const Navbar = () => {
  return (
    <>
    <Box sx={{display:'flex',marginTop:"30px",alignItems:"center"}}>
        <Box display={"flex"} sx={{width:"40%",alignItems:"center",marginRight:"0px",cursor:"pointer"}}>
        <img src={logo} width={70} height={70} style={{backgroundColor:"white",marginRight:"0px",marginLeft:"100px"}} alt="logo" />
        <Typography sx={{width:"180px",marginRight:'0px',fontSize:"12px",marginLeft:"10px",lineHeight:'14px'}}>
            Televizion texnologiyalar fakulteti 
            Televizion va media texnologiyalar kafedrasi
            </Typography> 
        </Box>
        <Box sx={{width:"100%",marginLeft:"130px",display:"flex"}}>
            <a href="">Kafedra</a>
            <a href="">Tadbir</a> 
            <a href="">Guruhlar</a>
            <a href="">Iqtidorli talabalar</a>
            <a href="">Dissertatsiya</a>
            <a href="">{"Yo'nalishlar"}</a>
            <a href="">Aloqa</a>
        </Box>
    </Box>      
    </>
  )
}

export default Navbar