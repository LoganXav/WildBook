import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export const Carousel = () => {
  const sliderData = [1, 2, 3];
  return (
    <div className="w-[80vw] lg:w-[45vw] mx-auto py-16 border-b mb-14">
      <Swiper
        className="swiper w-full mx-auto border"
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
      >
        {sliderData.map((slide, i) => (
          <SwiperSlide key={i} className="swiper-slide h-[25rem] ">
            <div className="h-full w-full bg-homePanel bg-no-repeat bg-center bg-cover cursor-pointer p-8">
              <div className="h-full w-full text-center flex flex-col items-center justify-center gap-5 bg-[#0000003e] text-white backdrop-blur-[1px]">
                <h2 className="text-2xl max-w-[25rem]">
                  Lorem ipsum dolor sit amet.
                </h2>
                <p className="text-[13px] md:text-[14px] max-w-[20rem] md:max-w-[25rem] italic">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
                  impedit odio repudiandae quas pariatur soluta!
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
