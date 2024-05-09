// import React from 'react'
import logo from "../assets/logo.png"
import {Box} from "@mui/system"
// import { Typography } from "@mui/material";
import "./index.css"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <Box sx={{display:'flex',alignItems:"center"}}>
        <Box display={"flex"} >
         <Link to={"/"} style={{display:"flex",width:"100%",alignItems:"center",marginRight:"0px",cursor:"pointer"}}>
        <img src={logo} width={70} height={70} style={{backgroundColor:"white",marginRight:"0px",marginLeft:"100px"}} alt="logo" />
        <p style={{whiteSpace:"wrap",marginRight:'0px',fontSize:"14px",marginLeft:"10px",lineHeight:'18px',fontWeight:"500"}}>
            Televizion texnologiyalar fakulteti 
            Televizion va media texnologiyalar kafedrasi
            </p> 
         </Link> 
        </Box>
        <Box sx={{width:"100%",marginLeft:"130px",display:"flex"}}>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="/kafedra">Kafedra</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="/tadbirlar">Tadbir</a> 
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="">Guruhlar</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="/iqtidorlilar">Iqtidorlilar</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="/dissertatsiya">Dissertatsiya</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="">{"Yo'nalishlar"}</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="">Aloqa</a>
        </Box>
    </Box>      
    </>
  )
}

export default Navbar