// import CoverSlider
import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Navigation } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import firstimg from './../../assets/1.png';
import secondimg from './../../assets/2-second-part.png';
import thirdimg from './../../assets/3.png';

export const CoverSlider = () => {
  return (
    <div className="mx-auto max-w-[1136px]">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
      >
        <SwiperSlide>
          <img
            src={firstimg}
            alt="Slide 1"
            className="w-[1040px] h-[400px] object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-black">
            <div className="w-[540px] bg-colorBgGrey rounded-[12px] p-[30px]">
              <div>Now available in our store!</div>
              <div>Be the first!</div>
              <button className="flex justify-center p-[20px 40px] rounded-[30px] border-solid border-1 border-colorBgBase text-white">
                ORDER NOW
              </button>
            </div>
            <img
              src={secondimg}
              alt="Slide 2"
              className="w-[500px] h-[400px] object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={thirdimg}
            alt="Slide 3"
            className="w-[1040px] h-[400px] object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
