// import React from 'react'
import logo from "../assets/logo.png";
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import "./index.css";
import { useState } from "react";

const Navbar = () => {
  const [clicded, setClicked] = useState(false);
  const point1100 = useMediaQuery("(max-width:1100px)");
  const point620 = useMediaQuery("(max-width:620px)");
  return (
    <Box>
      <Box sx={{ display: "flex", marginTop: "30px", alignItems: "center" }}>
        <Box
          display={"flex"}
          sx={{
            width: "40%",
            alignItems: "center",
            marginRight: "0px",
            cursor: "pointer",
            marginLeft: point620 && "30px",
          }}
        >
          <img
            src={logo}
            width={70}
            height={70}
            style={{
              backgroundColor: "white",
              marginRight: "0px",
            }}
            alt="logo"
          />
          <Typography
            sx={{
              width: "180px",
              minWidth: "160px",
              marginRight: "0px",
              fontSize: point620 ? "11px" : "13px",
              marginLeft: "10px",
              lineHeight: "16px",
            }}
          >
            Televizion texnologiyalar fakulteti Televizion va media
            texnologiyalar kafedrasi
          </Typography>
        </Box>
        <Box
          sx={{
            position: point1100 && "absolute",
            zIndex: point1100 && "1",
            top: point1100 && "0",
            right: point1100 && (clicded ? "0" : "-300px"),
            width: point1100 ? "300px" : "100%",
            display: "flex",
            flexDirection: point1100 && "column",
            transition: "linear all 300ms",
          }}
        >
          {clicded ? (
            <button
              style={{
                width: "30px",
                height: "30px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
              className="burgerBtn"
              onClick={() => setClicked(false)}
            ></button>
          ) : (
            ""
          )}
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href="/kafedra"
          >
            Kafedra
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href=""
          >
            Tadbir
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href=""
          >
            Guruhlar
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href=""
          >
            Iqtidorli talabalar
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href=""
          >
            Dissertatsiya
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href=""
          >
            {"Yo'nalishlar"}
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              fontFamily: "Poppins, sans-serif",
              fontWeight: "500",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href=""
          >
            Aloqa
          </a>
        <Box sx={{width:"100%",marginLeft:"130px",display:"flex"}}>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="/kafedra">Kafedra</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="/tadbirlar">Tadbir</a> 
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="">Guruhlar</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="">Iqtidorli talabalar</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="">Dissertatsiya</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="">{"Yo'nalishlar"}</a>
            <a style={{fontFamily:"Poppins, sans-serif",fontWeight:"500"}} href="">Aloqa</a>
        </Box>
        {point1100 && (
          <button
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              marginRight: point620 && "30px",
            }}
            onClick={() => setClicked(true)}
          >
            <Typography>Menu</Typography>
          </button>
        )}
      </Box>
    </Box>
  );
};

export default Navbar;
