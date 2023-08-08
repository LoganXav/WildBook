import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Skeleton from "./Skeleton";

export const Carousel = ({ data, loading, error }) => {
  const sliderData = [
    { desc: "Something went wrong while trying to access the wild book servers", img: "https://images.unsplash.com/photo-1683009427041-d810728a7cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { desc: "The servers could be undergoing temporary updates", img: "https://images.unsplash.com/photo-1690987866346-9973ed5f4f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { desc: "It could also be your internet connectivity", img: "https://images.unsplash.com/photo-1690673821592-91154209cd27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  ];
  return (
    <div className="w-[80vw] lg:w-[45vw] mx-auto py-16 border-b mb-14">
      {loading ? (
        <Skeleton type="slider"/>
      ) : error ? (
        <Swiper
          className="swiper w-full mx-auto"
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
        >
          {sliderData.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide h-[25rem] ">
              <div
                className="h-full w-full bg-no-repeat bg-center bg-cover cursor-pointer p-5"
                style={{ backgroundImage: `url(${slide.img})` }}
              >
                <div className="h-full w-full text-center flex flex-col items-center justify-center gap-5 bg-[#0000003e] text-white backdrop-blur-[1px]">
                  <h2 className="text-3xl max-w-[25rem]">Wild Book</h2>
                  <p className="max-w-[20rem] md:max-w-[25rem] italic text-sm">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper
          className="swiper w-full mx-auto border"
          modules={[Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 8000 }}
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id} className="swiper-slide h-[25rem] ">
              <div
                className="h-full w-full bg-no-repeat bg-center bg-cover cursor-pointer p-5"
                style={{ backgroundImage: `url(${slide.coverImageUrl})` }}
              >
                <div className="h-full w-full text-center flex flex-col items-center justify-center gap-5 bg-[#0000003e] text-white backdrop-blur-[1px]">
                  <h2 className="text-3xl max-w-[25rem]">{slide.title}</h2>
                  <p className="max-w-[20rem] md:max-w-[25rem] italic text-sm">
                    {slide.date}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};
