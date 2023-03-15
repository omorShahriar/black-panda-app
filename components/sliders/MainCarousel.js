"use client";

import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { getStrapiMedia } from "@/lib/media";
import { Navigation, Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { FadeInTopWrapper } from "../InViewAnimatedWrappers/Wrapper";
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg";
import { useRef } from "react";

const Slider = ({ slides }) => {
  const swiperRef = useRef();
  return (
    <FadeInTopWrapper>
      {" "}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={50}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide) => {
          const { imageUrl, width, height } = getStrapiMedia(slide.image);

          return (
            <>
              <SwiperSlide key={slide.title}>
                {" "}
                <Link href={slide.url ? slide.url : "#"}>
                  {" "}
                  <div className="m-2  md:mt-2 relative  ">
                    <p className="text-3xl hidden md:block font-bold capitalize bg-gray-900/60 p-4  text-white absolute bottom-8 left-8 ">
                      {slide.title}
                    </p>
                    <Image
                      src={imageUrl}
                      width={1350}
                      height={760}
                      alt={slide.title}
                      priority
                      className="rounded-md w-full max-h-[calc(100vh-172.65px-16px)]  object-fit object-center  "
                    />
                  </div>
                </Link>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <div className="mt-4 gap-x-8 flex justify-center  text-3xl text-gray-300 hover:text-gray-100 transition-colors duration-300">
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="transition-colors duration-300 py-1 px-8 rounded-md border-2 border-gray-500 hover:border-gray-100"
        >
          <CgArrowLongLeft />
        </button>
        <button
          onClick={() => swiperRef.current.slideNext()}
          className=" transition-colors duration-300 py-1 px-8 rounded-md border-2 border-gray-500 hover:border-gray-100"
        >
          <CgArrowLongRight />
        </button>
      </div>
    </FadeInTopWrapper>
  );
};

export default Slider;
