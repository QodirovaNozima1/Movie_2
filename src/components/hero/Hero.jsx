import React, { useState } from 'react'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './Hero.css'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useGetTopRatedMoviesQuery } from '../../redux/api/movie.api';
const imageUrl = import.meta.env.VITE_IMAGE_URL
import { FaPlay } from "react-icons/fa";

const Hero = () => {

    const {data} = useGetTopRatedMoviesQuery({without_genres: "18, 36, 10749    "})

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height: 640,
          borderRadius: 12
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      > 
      <div className="w-full  dark:bg-black dark:text-white">
      {
            data?.results?.map(movie => (
                <SwiperSlide key={movie.id} className='w-full'>
                    <img src={imageUrl + movie.backdrop_path} alt="" />
                    <div className='absolute bottom-6 left-[50%] translate-x-[-50%] flex flex-col items-center gap-4 text-white '>
                        <h2 className=' text-[32px] leading-[40px] font-medium tracking-[1%] '>{movie.title}</h2>
                        <ul className='flex items-center gap-2'>
                            <li><span className='size-1 rounded-full bg-white block'></span></li>
                            <li className=' text-sm leading-[16px] tracking-[1%] capitalize font-normal '>Release date: {movie.release_date}</li>
                            <li><span className='size-1 rounded-full bg-white block'></span></li>
                            <li className=' text-sm leading-[16px] tracking-[1%] capitalize font-normal '>Popularity: {movie.popularity}</li>
                            <li><span className='size-1 rounded-full bg-white block'></span></li>
                            <li className=' text-sm leading-[16px] tracking-[1%] capitalize font-normal '>Lang: {movie.original_language}</li>
                        </ul>
                        <button className=' flex items-center  px-[137px] py-[14px] rounded-xl cursor-pointer text-primary font-medium tracking-[1%] gap-2 active:bg-white/80 ' ><FaPlay className='text-2xl'/> Play </button>
                    </div>
                </SwiperSlide>
            ))
        }
      </div>
        
      </Swiper>
      <div className='max-w-[500px] mx-auto clips'>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
            data?.results?.map(movie => (
                <SwiperSlide key={movie.id}>
                    <img src={imageUrl + movie.backdrop_path} alt="" />
                </SwiperSlide>
            ))
        }
      </Swiper>
      </div>
    </div>
  )
}

export default Hero