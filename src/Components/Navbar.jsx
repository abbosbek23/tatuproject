// import React from 'react'
import logo from "../assets/logo.png";
import { Box } from "@mui/system";
import { Typography, useMediaQuery } from "@mui/material";
import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const point1100 = useMediaQuery("(max-width:1100px)");
  const point620 = useMediaQuery("(max-width:620px)");
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "0px",
          alignItems: "center",
          backgroundColor:"#212529",
          padding:"10px",
          
        }}
      >
        <Box display={"flex"}>
          <Link
            to={"/"}
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginRight: "0px",
              cursor: "pointer",
            }}
          >
            <img
              src={logo}
              width={70}
              height={70}
              style={{
                backgroundColor: "white",
                marginRight: "0px",
                borderRadius: "51px",
              }}
              alt="logo"
            />
            <Typography
              sx={{
                width: "200px",
                whiteSpace: "wrap",
                marginRight: "0px",
                fontSize: "13px",
                marginLeft: "10px",
                lineHeight: "14px",
                fontWeight: "500",
                "@media (max-width:450px)":{fontSize:"11px",marginLeft:"5px",width:"137px"}
              }}
            >
              Televizion texnologiyalar fakulteti Televizion va media
              texnologiyalar kafedrasi
            </Typography>
          </Link>
        </Box>
        <Box
          sx={{
            position: point620 && "absolute",
            zIndex: point620 && "3",
            top: point620 && "0",
            right: point620 && (clicked ? "0" : "-500px"),
            paddingTop: point620 && "100px",
            textAlign: "center",
            width: point620 ? "100%" : "770px",
            height: point620 ? "auto" : "",
            display: point620 ? (clicked ? "flex" : "none") : "flex",
            flexDirection: point620 && "column",
            transition: "linear all 300ms",
            background: point620 && "white", // Add background for mobile view
          }}
        >
          {clicked && (
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
          )}
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              
              color: point620 && "black",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href="/kafedra"
          >
            Kafedra tarkibi va faoliyati
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              
              color: point620 && "black",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
              fontSize:"16px"
            }}
            href="/manaviy"
          >
            {"Ma'naviy"} va {"Ma'rifiy"} tadbirlar
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              
              color: point620 && "black",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
              fontSize:"16px"
            }}
            href="/ilmiy"
          >
            {"O'quv"} va uslubiy tadbirlar
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              color: point620 && "black",
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
              fontSize:"16px"
            }}
            href="/dissertatsiya"
          >
            Ilmiy ishlar
          </a>
            <a
              style={{
                borderBottom: point1100 && "1px solid #000",
                color: point620 && "black",
                margin: point1100 && "0",
                padding: point1100 && "25px 15px",
                fontSize:"16px"
              }}
              href="/iqtidorlilar"
            >
              Iqtidorli talabalar
            </a>
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
            <Typography sx={{color:"white"}}>Menu</Typography>
          </button>
        )}
      </Box>
    </>
  );
};

export default Navbar;
