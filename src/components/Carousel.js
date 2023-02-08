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
            img: "https://www.bollywoodhungama.com/wp-content/uploads/2023/01/Pathaan-2-10.jpg"
        },
        {
            img: "https://wonderfulengineering.com/wp-content/uploads/2016/02/iron-man-wallpaper-22.jpg"
        },
        {
            img: "https://images3.alphacoders.com/723/thumb-1920-72397.jpg"
        },
        {
            img: "https://www.pixelstalk.net/wp-content/uploads/images6/Spiderman-Wallpaper-HD-Free-download.jpg"
        },
        {
            img: "https://wallpapercave.com/wp/wp2602668.jpg"
        },
        {
            img: "https://i0.wp.com/www.3dart.it/wp-content/uploads/2013/07/The-Wolverine-Wallpaper-2.jpg?fit=1600%2C1098&ssl=1"
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
          className="mySwiper "
        >
            {
                imageData.map((image,index) =>  <SwiperSlide key={index}>
                   <div className=' w-full  ' >
                   <img className='w-full h-full'  src={image.img} alt='' />
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