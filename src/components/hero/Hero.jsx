import React, {useRef, useState} from 'react'
import "./Hero.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Hero = () => {
  return (
    <div className='swiper'>
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
        <SwiperSlide>
            <img src="https://image.tmdb.org/t/p/original/zo8CIjJ2nfNOevqNajwMRO6Hwka.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://image.tmdb.org/t/p/original/xOOovm9qMmuus7bAZMfIYmbjtLS.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://image.tmdb.org/t/p/original/vZG7PrX9HmdgL5qfZRjhJsFYEIA.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://image.tmdb.org/t/p/original/hfTyu2VPBqLRPo2DauW8q7bh9bm.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://image.tmdb.org/t/p/original/au3o84ub27qTZiMiEc9UYzN74V3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Hero