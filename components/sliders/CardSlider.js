"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "react-multi-carousel/lib/styles.css";

import Card from "../Card";

const CardSlider = ({ lang, slides, cardType }) => {
  return (
    <Swiper
      spaceBetween={15}
      slidesPerView={1.2}
      centeredSlides={true}
      breakpoints={{
        900: {
          slidesPerView: 3.2,
          spaceBetween: 70,
          centeredSlides: false,
        },
        1450: {
          slidesPerView: 4.2,
          spaceBetween: 50,
          slidesOffsetBefore: 150,
          centeredSlides: false,
        },
      }}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            {" "}
            <Card lang={lang} info={slide.attributes} cardType={cardType} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardSlider;
