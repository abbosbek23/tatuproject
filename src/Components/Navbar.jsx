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
    <>
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
        <Box sx={{ width: "100%", marginLeft: "130px", display: "flex" }}>
          <a
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            href="/kafedra"
          >
            Kafedra
          </a>
          <a
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            href=""
          >
            Tadbir
          </a>
          <a
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            href=""
          >
            Guruhlar
          </a>
          <a
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            href=""
          >
            Iqtidorli talabalar
          </a>
          <a
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            href=""
          >
            Dissertatsiya
          </a>
          <a
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            href=""
          >
            {"Yo'nalishlar"}
          </a>
          <a
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "500" }}
            href=""
          >
            Aloqa
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
