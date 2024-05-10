// import React from 'react'
import "swiper/css";
import { Box, useMediaQuery } from "@mui/material";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import firstSponsor from "../assets/firstsponsor.jpg";
import secondSponsor from "../assets/secondsponsor.png";
import thirdSponsor from "../assets/thirdsponsor.png";
import fourSponsor from "../assets/foursponsor.png";
import fiveSponsor from "../assets/fivesponsor.png";

const youtubevideos = [
  {
    id: 1,
    //   video: "https://youtu.be/beqP4DuQWUI?si=NezGdaSArmUOHuxF",
    img: firstSponsor,
  },
  {
    id: 2,
    //   video: "https://youtu.be/beqP4DuQWUI?si=uz5gk0txMYxYWxyI",
    img: secondSponsor,
  },
  {
    id: 3,
    //   video: "https://youtu.be/XQi8mAucmK0?si=nmU4_6sfuDTCG_R4",
    img: thirdSponsor,
  },
  {
    id: 4,
    //   video: "https://youtu.be/vGTBhzfXEOA?si=ieRUZIo-uaewN9bd",
    img: fourSponsor,
  },
  {
    id: 5,
    //   video: "https://youtu.be/sbCeC9jcsRo?si=n8f1WxbaOt4IEtp2",
    img: fiveSponsor,
  },
  {
    id: 6,
    //   video: "https://youtu.be/beqP4DuQWUI?si=NezGdaSArmUOHuxF",
    img: firstSponsor,
  },
  {
    id: 7,
    //   video: "https://youtu.be/beqP4DuQWUI?si=uz5gk0txMYxYWxyI",
    img: secondSponsor,
  },
  {
    id: 8,
    //   video: "https://youtu.be/XQi8mAucmK0?si=nmU4_6sfuDTCG_R4",
    img: thirdSponsor,
  },
  {
    id: 9,
    //   video: "https://youtu.be/vGTBhzfXEOA?si=ieRUZIo-uaewN9bd",
    img: fourSponsor,
  },
  {
    id: 10,
    //   video: "https://youtu.be/sbCeC9jcsRo?si=n8f1WxbaOt4IEtp2",
    img: fiveSponsor,
  },
];

const Slidersponsor = () => {
  const point620 = useMediaQuery("(max-width:620px)");
  return (
    <Box>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        spaceBetween={point620 ? 10 : 100}
        speed={800}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={true}
        slidesPerView={point620 ? 2 : 5}
        navigation={point620 ? false : true}
        style={{
          width: point620 ? "100%":"1080px",
          height: "80px",
          borderRadius: "4px",
          paddingLeft: "70px",
          paddingRight: "0px",
        }}
        className="navigation-btn2"
      >
        {youtubevideos.map((item) => (
          <SwiperSlide key={item.id}>
            {/* <a href={item.video}><img width={"100%"} height={"100%"} src={item.img} alt="" /></a> */}
            <img src={item.img} width={60} height={60} alt="sponsor" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slidersponsor;
