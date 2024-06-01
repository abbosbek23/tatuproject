import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import homeimage from "../assets/homesliderimage1.jpg";
import homeimage2 from "../assets/homesliderimage2.jpeg";
import homeimage3 from "../assets/homesliderimage3.jpeg";
import tatumainimage from "../assets/tuitmainimage.png";

const Homesliderimage = () => {
  return (
    <Box  marginTop="0px">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar]}
        // spaceBetween={20}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        pagination={{ clickable: true }}
        navigation
        style={{
          width: '100%',
          height: "600px",
        }}
      >
        {
        // images.map((item) => (
        //   <SwiperSlide key={item.id}>
        //     {/* <a href={item.video}><img width={"100%"} height={"100%"} src={item.img} alt="" /></a> */}
        //     <img src={item.image}  alt="sponsor" />
        //   </SwiperSlide>
        // ))
        }
        <SwiperSlide>
          <img style={{objectFit:"cover",width:"100%",height:"100%"}} src={homeimage} alt="sponsor" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{objectFit:"cover",width:"100%",height:"100%"}} src={tatumainimage} alt="sponsor" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{objectFit:"cover",width:"100%",height:"100%"}} src={homeimage2} alt="sponsor" />
        </SwiperSlide>  
         
        <SwiperSlide>
          <img style={{objectFit:"cover",width:"100%",height:"100%"}} src={homeimage3} alt="sponsor" />
        </SwiperSlide>
          
      </Swiper>
    </Box>
  );
};

export default Homesliderimage;
