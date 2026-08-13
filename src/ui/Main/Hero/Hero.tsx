"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    desktop: "/images/Hero5.png",
    mobile: "/images/HeroMB.png",
    title: "",
  },
  {
    desktop: "/images/Hero3.png",
    mobile: "/images/HeroMB2.png",
    title: "",
  },
  {
    desktop: "/images/Hero4.png",
    mobile: "/images/HeroMB2.png",
    title: "",
  },
];

export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Desktop */}
            <img
              src={slide.desktop}
              alt={slide.title}
              className="hidden md:block w-full h-auto"
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />

            {/* Mobile */}
            <img
              src={slide.mobile}
              alt={slide.title}
              className="block md:hidden w-full h-auto"
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </SwiperSlide >
        ))}
      </Swiper>
    </section>
  );
}