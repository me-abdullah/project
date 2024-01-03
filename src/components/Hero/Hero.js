import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "./Hero.css"


function Hero() {
  return (
    <div className=" mt-auto mx-auto" >
      <h1 className="flex item-center justify-center heading">Product Gallery</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
         
        <SwiperSlide>
          <img src='/assets/tin.jpeg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/white.jpeg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/ssachet.jpeg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/ltin.jpeg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/bag.jpeg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/sachet.jpeg' alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/assets/msachet.jpeg' alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow ">
          <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="swiper-button-next slider-arrow bg-black-600">
          <FontAwesomeIcon icon={faArrowRight} className="bg-black-600" />

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Hero;