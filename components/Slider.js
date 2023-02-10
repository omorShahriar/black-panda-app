"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getStrapiMedia } from "@/lib/media";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
const Slider = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation
      autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={50}
    >
      {slides.map((slide) => {
        const { imageUrl, width, height } = getStrapiMedia(slide.image);
        return (
          <SwiperSlide key={slide.title}>
            {" "}
            <div className="mt-4 relative  ">
              <p className="text-3xl font-bold capitalize bg-gray-900/60 p-4 text-white absolute bottom-8 left-8 ">
                {slide.title}
              </p>
              <Image
                src={imageUrl}
                width={width}
                height={height}
                alt={slide.title}
                priority
                className="rounded-md w-full max-h-80 object-cover object-center  "
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
