'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const photos = [
  '/cum1.jpg',
  '/cum2.jpg',
  '/cum3.jpg',
];

export default function App() {
  return (
    <div className="w-full mt-10 mb-10 max-w-sm mx-auto rounded-2xl overflow-hidden shadow-lg">
      {/* Para fotos verticales, usa un contenedor con aspecto 9:16 */}
      <div className="relative w-full aspect-[10/16] bg-black/60">
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          spaceBetween={0}
          grabCursor
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {photos.map((src, i) => (
            <SwiperSlide key={i}>
              {/* Opción A: cubrir (recorta un poco pero llena) */}
              {/* <Image src={src} alt={`foto ${i + 1}`} fill priority className="object-cover" /> */}

              {/* Opción B: contener (no recorta; puede dejar barras) */}
              <Image src={src} alt={`foto ${i + 1}`} fill priority className="object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
