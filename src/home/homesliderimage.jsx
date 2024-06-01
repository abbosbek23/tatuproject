import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import homeimage from "../assets/homesliderimage1.jpg";
// import homeimage2 from "../assets/homesliderimage2.jpeg";
// import homeimage3 from "../assets/homesliderimage3.jpeg";    
import homeimage4 from "../assets/homesliderimage5.jpg";
import homeimage5 from "../assets/homesliderimage6.jpg";
// import homeimage6 from "../assets/homesliderimage7.jpg";
import tatumainimage from "../assets/tuitmainimage.png";
// import homeimage1 from "../assets/homeimage1.jpg";

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
          height: "90vh",
        }}
        breakpoints={{
          380: {
            slidesPerView: 1,
            height: "60vh",
            pagination: false,
            navigation: false,
          },
          1140:{  
            slidesPerView: 1,
            height: "40vh",
          }
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
          <img style={{
            // objectFit:"cover"
            // ,
            width:"100%",height:"100%","@media (max-width:450px)":{width:"100%"}}} src={homeimage} alt="sponsor" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{
            // width:"100%",maxWidth:"100%",height:"100%","@media (max-width:450px)":{objectFit:"none",width:"100%",maxWidth:"100%",height:"100%"}
            objectFit:"cover",width:"100%",height:"100%","@media (max-width:450px)":{width:"100%"}  
            }} src={tatumainimage} alt="sponsor" />
        </SwiperSlide>
        <SwiperSlide>
          <img style={{objectFit:"cover",width:"100%",height:"100%","@media (max-width:450px)":{objectFit:"none",width:"100%"}}} src={homeimage5} alt="sponsor" />
        </SwiperSlide>  
        <SwiperSlide>
          <img style={{objectFit:"cover",width:"100%",height:"100%","@media (max-width:450px)":{objectFit:"none",width:"100%"}}} src={homeimage4} alt="sponsor" />
        </SwiperSlide>
          
      </Swiper>
    </Box>
  );
};

export default Homesliderimage;
