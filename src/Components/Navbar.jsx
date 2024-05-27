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
            <p
              style={{
                width: "200px",
                whiteSpace: "wrap",
                marginRight: "0px",
                fontSize: "13px",
                marginLeft: "10px",
                lineHeight: "14px",
                fontWeight: "500",
              }}
            >
              Televizion texnologiyalar fakulteti Televizion va media
              texnologiyalar kafedrasi
            </p>
          </Link>
        </Box>
        <Box
          sx={{
            position: point1100 && "absolute",
            zIndex: point1100 && "1",
            top: point1100 && "0",
            right: point1100 && (clicked ? "0" : "-300px"),
            width: point1100 ? "300px" : "770px",
            display: "flex",
            flexDirection: point1100 && "column",
            transition: "linear all 300ms",
            background: point1100 && "white", // Add background for mobile view
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
              
              
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href="/tadbirlar"
          >
            Tadbir
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              
              
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
              
              
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href="/iqtidorlilar"
          >
            Iqtidorli talabalar
          </a>
          <a
            style={{
              borderBottom: point1100 && "1px solid #000",
              
              
              margin: point1100 && "0",
              padding: point1100 && "25px 15px",
            }}
            href="/dissertatsiya"
          >
            Dissertatsiya
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
            <Typography>Menu</Typography>
          </button>
        )}
      </Box>
    </>
  );
};

export default Navbar;
