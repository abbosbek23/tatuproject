// import React from 'react'
// import Swiper from 'swiper';
import "swiper/css";
import { Box, useMediaQuery } from "@mui/material";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
// import ReactPlayer  from 'react-player';
import firstvideo from "../assets/firstvideo.jpg";
import secondvideo from "../assets/secondvideo.jpg";
import thirdvideo from "../assets/thirdvideo.jpg";
import fourvideo from "../assets/fourvideo.jpg";
import fivevideo from "../assets/fivevideo.jpg";
import playicon from "../assets/playicon.png";
import "./index.css";

const youtubevideos = [
  {
    id: 1,
    video: "https://youtu.be/beqP4DuQWUI?si=NezGdaSArmUOHuxF",
    img: firstvideo,
  },
  {
    id: 2,
    video: "https://youtu.be/beqP4DuQWUI?si=uz5gk0txMYxYWxyI",
    img: secondvideo,
  },
  {
    id: 3,
    video: "https://youtu.be/XQi8mAucmK0?si=nmU4_6sfuDTCG_R4",
    img: thirdvideo,
  },
  {
    id: 4,
    video: "https://youtu.be/vGTBhzfXEOA?si=ieRUZIo-uaewN9bd",
    img: fourvideo,
  },
  {
    id: 5,
    video: "https://youtu.be/sbCeC9jcsRo?si=n8f1WxbaOt4IEtp2",
    img: fivevideo,
  },
];

const Slider = () => {
  const point620 = useMediaQuery("(max-width:620px)");
  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        spaceBetween={20}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        // pagination={true}
        slidesPerView={1}
        navigation
        style={{
          width: "1080px",
          height: point620 ? "auto" : "450px",
          borderRadius: "4px",
        }}
        className="navigation-btn"
      >
        {youtubevideos.map((item) => (
          <SwiperSlide key={item.id} style={{ position: "relative" }}>
            <a href={item.video}>
              <img width={"100%"} height={"100%"} src={item.img} alt="" />
            </a>
            <img
              style={{ position: "absolute", top: point620 ?  "25%" : "43%", left: point620 ? "38%":"46%" }}
              src={playicon}
              width={90}
              height={90}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
