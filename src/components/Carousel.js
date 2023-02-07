import React from 'react';
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Styles/Carousel.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';


const Carousel = () => {
    const imageData = [
        {
            img: "https://images.mid-day.com/images/images/2023/jan/Pathan-Movies12_d.jpg"
        },
        {
            img: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/07/dhanush-1-1658979649.jpg"
        },
        {
            img: "https://images.mid-day.com/images/images/2023/jan/Pathan-Movies12_d.jpg"
        },
        {
            img: "https://wallpaperaccess.com/full/3968476.jpg"
        },
        {
            img: "https://c4.wallpaperflare.com/wallpaper/194/620/840/movies-bollywood-movies-wallpaper-preview.jpg"
        },
        {
            img: "https://wallpaperaccess.com/full/3968121.jpg"
        },
    ]
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper  "
        >
            {
                imageData.map((image,index) =>  <SwiperSlide key={image.index}>
                   <div className='h-[45rem] w-[92%] ' >
                   <img className='w-full'  src={image.img} alt='' />
                   </div>
                </SwiperSlide>  )
            }
         
          
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </>
    );
};

export default Carousel;