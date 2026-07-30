"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Button } from "@av-digital/components";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    desktop: "/images/heroIMG1.png",
    mobile: "/images/mobilewebp.webp",
    title: "Nova coleção Tec",
    subtitle: "Estilo que define atitude",
    cta: "Comprar agora",
  },
  {
    desktop: "/images/heroIMG1.png",
    mobile: "/images/mobilewebp.webp",
    title: "Produtos Exclusivos",
    subtitle: "Peças limitadas",
    cta: "Ver coleção",
  },
  {
    desktop: "/images/heroIMG1.png",
    mobile: "/images/mobilewebp.webp",
    title: "Até 40% OFF",
    subtitle: "Só essa semana",
    cta: "Aproveitar",
  },
];

export default function Hero() {
  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full aspect-[9/16] md:aspect-[16/6]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={slide.desktop}
                alt={slide.title}
                fill
                className="object-cover hidden md:block"
                priority={index === 0}
              />

              <Image
                src={slide.mobile}
                alt={slide.title}
                fill
                className="object-cover md:hidden"
                priority={index === 0}
              />

              <div className="absolute inset-0 bg-black/40" />

              <div className="absolute inset-0 flex items-center justify-center md:justify-start px-6 md:px-16">
                <div className="text-white max-w-lg text-center md:text-left">
                  <h1 className="text-2xl md:text-5xl font-bold mb-3">
                    {slide.title}
                  </h1>

                  <p className="text-sm md:text-lg mb-5 opacity-90">
                    {slide.subtitle}
                  </p>

                  <Button variant="secondary" size="lg">
                    {slide.cta}
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}