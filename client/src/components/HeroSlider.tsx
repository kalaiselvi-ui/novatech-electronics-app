import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BannerSlide from "./BannerSlide.tsx";
// Optional: If you want navigation arrows or dots, uncomment these:
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import type { SlideData } from "../types/type.ts";

type HeroSliderProps = {
  slides: SlideData[];
};
const HeroSlider = ({ slides }: HeroSliderProps) => {
  return (
    <section className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination]} // Add modules here if needed
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        // navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <BannerSlide {...slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
