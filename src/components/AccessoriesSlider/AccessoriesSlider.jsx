import './AccessoriesSlider.css';

import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { Navigation } from 'swiper/modules';
// eslint-disable-next-line import/no-unresolved
import { Swiper, SwiperSlide } from 'swiper/react';

import { ArrowLeftIcon, ArrowRightIcon } from '../../assets';
import { AccessoryCard } from '../AccessoryCard';

export const AccessoriesSlider = ({
  accessories,
  title,
  isShowDiscount,
  sliderId = '',
}) => {
  const prevButtonClass = `swiper-prev-${sliderId}`;
  const nextButtonClass = `swiper-next-${sliderId}`;

  return (
    <div className="mx-auto max-w-[1136px]">
      <div className="flex justify-between">
        <div className="font-extrabold text-2xl leading-10">{title}</div>
        <div className="navigation-wrapper">
          <button className={prevButtonClass}>
            <ArrowLeftIcon />
          </button>
          <button className={nextButtonClass}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
      <Swiper
        spaceBetween={15}
        slidesPerView={4}
        modules={[Navigation]}
        navigation={{
          nextEl: `.${nextButtonClass}`,
          prevEl: `.${prevButtonClass}`,
        }}
      >
        {accessories.map((accessory) => (
          <SwiperSlide key={accessory.id}>
            <AccessoryCard
              accessory={accessory}
              isShowDiscount={isShowDiscount}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
