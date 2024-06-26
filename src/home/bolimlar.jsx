// import React from 'react'
import kafedraicon from "../assets/kafedraicon.png";
import tadbirlaricon from "../assets/tadbirlaricon.png";
import guruhlaricon from "../assets/guruhlaricon.png";
import iqtidorlitalabalaricon from "../assets/iqtidorlitalabalaricon.png";
import dissertatsiyaicon from "../assets/dissertatsiyaicon.png";
// import yonalishicon from "../assets/yonalishlaricon.png";
import { Box, Typography, Grid, useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';

const bolim = [
  {
    id: 1,
    name: "kafedra",
    img: kafedraicon,
    path:"/kafedra"
  },
  {
    id: 2,
    name: "ma'naviy va ma'rifiy tadbirlar ",
    img: tadbirlaricon,
    path:"/manaviy"
  },
  {
    id: 3,
    name: "o'quv va uslubiy tadbirlar",
    img: guruhlaricon,
    path:"/ilmiy"
  },
  {
    id: 4,
    name: "ilmiy ishlar",
    img: dissertatsiyaicon,
    path:"/dissertatsiya"
  },
  {
    id: 5,
    name: "iqtidorli talabalar",
    img: iqtidorlitalabalaricon,
    path:"/iqtidorlilar"
  },
  
];
const Bolimlar = () => {
  const point620 = useMediaQuery("(max-width:620px)");
  return (
    <>
      <Grid container width={"100%"} spacing={2}>
        {bolim.map((item) => (
          <Grid item xs={6} md={2.4} lg={2.4} key={item.id}>
            <Link to={item.path}>
            <Box
              sx={{
                width: point620 ? "100%" : "170px",
                textAlign: "center",
                height: "188px",
                // marginBlock: "40px",
                boxShadow: "0px 0px 2px 1px #dbdbdb",
                padding: "10px",
                borderRadius: "10px",
                transition: "0.5s",
                "&:hover": {
                  transform: "translatey(-5px) scale(1.05)",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                  color: "blue",
                },
              }}
            >
              <img
                style={{
                  width: point620 ? "50%" : "80px",
                }}
                height={80}
                src={item.img}
                alt="bolimlaricon"
              />
              <Typography
                sx={{
                  fontSize: point620 ? "12px" : "20px",
                  whiteSpace: "wrap",
                  textTransform: "capitalize",
                }}
              >
                {item.name}
              </Typography>
            </Box>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Bolimlar;
