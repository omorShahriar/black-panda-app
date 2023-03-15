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
      slidesOffsetBefore={0}
      centeredSlides={true}
      breakpoints={{
        // when window width is >=

        900: {
          slidesPerView: 3,
          spaceBetween: 70,
          slidesOffsetBefore: 150,
        },
        1450: {
          slidesPerView: 4,
          spaceBetween: 50,
          slidesOffsetBefore: 150,
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
