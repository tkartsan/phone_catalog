import './../swiper-bundle.min.css';
import './PhoneSlider.css';

import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Navigation } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowLeftIcon, ArrowRightIcon } from './assets';
import { PhoneCard } from './PhoneCard';

export const PhoneSlider = ({ phones }) => {
  return (
    <div className="mx-auto max-w-[1136px]">
      <div className="navigation-wrapper">
        <button className="swiper-prev">
          <ArrowLeftIcon />
        </button>
        <button className="swiper-next">
          <ArrowRightIcon />
        </button>
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        }}
      >
        {phones.map((phone) => (
          <SwiperSlide key={phone.itemId}>
            <PhoneCard phone={phone} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
