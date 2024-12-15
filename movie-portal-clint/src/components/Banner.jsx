import movie1 from '../assets/movie1.webp';
import movie2 from '../assets/movie2.webp';
import movie3 from '../assets/movie3.webp';
import movie4 from '../assets/movie4.webp';
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><img src={movie1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={movie2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={movie3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={movie4} alt="" /></SwiperSlide>
        </Swiper>
      </>
    );
};

export default Banner;