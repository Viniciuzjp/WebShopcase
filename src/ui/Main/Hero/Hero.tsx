"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    desktop: "/images/Hero5.webp",
    mobile: "/images/HeroMB.webp",
    title: "Seleção especial",
  },
  {
    desktop: "/images/Hero5.webp",
    mobile: "/images/HeroMB.webp",
    title: "Ver coleção",
  },
  {
    desktop: "/images/Hero5.webp",
    mobile: "/images/HeroMB.webp",
    title: "Aproveitar",
  },
];

export default function Hero() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2">
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
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={slide.mobile}
              />

              <img
                src={slide.desktop}
                alt={slide.title}
                className="block h-auto w-full"
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "auto"}
                decoding="async"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}