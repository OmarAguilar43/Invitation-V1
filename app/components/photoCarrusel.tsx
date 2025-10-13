'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Photo = { src: string; alt?: string };

interface PhotoCarouselProps {
  images: Photo[];
  aspect?: string; // p.ej. '10/16', '3/4', '9/16'
}

export default function PhotoCarousel({ images, aspect = '10/16' }: PhotoCarouselProps) {
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center mt-7 mb-7">
      {/* Contenedor centrado, 1 foto, vertical */}
      <div
        className="relative w-[90%] max-w-sm rounded-3xl overflow-hidden shadow-lg bg-black/60"
        style={{ aspectRatio: aspect }} // evita usar aspect-[...] dinámico
      >
        <Swiper
          slidesPerView={1}
          centeredSlides
          pagination={{ clickable: true }}
          navigation
          loop
          modules={[Pagination]}
          autoplay
          className="h-full"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i} className="flex items-center justify-center">
              <Image
                src={img.src}
                alt={img.alt ?? `foto ${i + 1}`}
                fill
                className="object-contain"
                priority={i === 0}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
