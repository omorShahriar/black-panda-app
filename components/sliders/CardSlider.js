"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper";
import "swiper/css";

import "react-multi-carousel/lib/styles.css";

import Card from "../Card";

const CardSlider = ({ slides, cardType }) => {
  return (
    <Swiper
      modules={[Mousewheel]}
      mousewheel={true}
      MouseWheel
      direction={"horizontal"}
      spaceBetween={150}
      slidesPerView={3}
      slidesOffsetBefore={150}
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide key={slide.id}>
            {" "}
            <Card info={slide.attributes} cardType={cardType} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CardSlider;
