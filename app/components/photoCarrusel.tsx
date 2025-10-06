"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["600"] });

type Slide = { src: string; alt?: string };
type Props = {
  images: Slide[];
  autoPlay?: boolean;
  intervalMs?: number;
  title?: string;
  // si algún día quieres volver a recortar: fit: "cover" | "contain"
  fit?: "cover" | "contain";
};

export default function PhotoCarousel({
  images,
  autoPlay = true,
  intervalMs = 4500,
  title = "Momentos",
  fit = "contain",
}: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);

  const len = images.length;
  const prev = () => setIndex((i) => (i - 1 + len) % len);
  const next = () => setIndex((i) => (i + 1) % len);
  const go = (i: number) => setIndex(((i % len) + len) % len);

  useEffect(() => {
    if (!autoPlay || paused || len <= 1) return;
    const t = setInterval(next, intervalMs);
    return () => clearInterval(t);
  }, [autoPlay, paused, intervalMs, len]);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const delta = e.changedTouches[0].clientX - startX.current;
    startX.current = null;
    const TH = 50;
    if (delta > TH) prev();
    else if (delta < -TH) next();
  };

  const imgFitClass = fit === "cover" ? "object-cover" : "object-contain";

  return (
    <section id="galeria" className="relative bg-[var(--bg)] py-16 sm:py-24 scroll-mt-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-6">
        {/* título con nueva tipografía */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-16 sm:w-32 bg-white/35" />
          <h2 className={`${cormorant.className} text-white/90 text-3xl sm:text-4xl`}>{title}</h2>
          <span className="h-px w-16 sm:w-32 bg-white/35" />
        </div>

        {/* carrusel (más alto) */}
        <div
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm h-[78vh] md:h-[88vh]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {/* track */}
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
            aria-live="polite"
          >
            {images.map((img, i) => (
              <div key={i} className="relative w-full shrink-0 h-full">
                {/* fondo difuminado para rellenar márgenes en vertical */}
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover blur-2xl scale-110 opacity-40"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-black/30" />

                {/* imagen principal sin recortes */}
                <Image
                  src={img.src}
                  alt={img.alt ?? `Foto ${i + 1}`}
                  fill
                  sizes="100vw"
                  priority={i === 0}
                  className={`${imgFitClass} relative z-10`}
                />
              </div>
            ))}
          </div>

          {len > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-2 bg-white/80 hover:bg-white shadow-md opacity-0 group-hover:opacity-100 transition"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Ir a la foto ${i + 1}`}
                    onClick={() => go(i)}
                    className={`h-2.5 w-2.5 rounded-full border transition ${
                      i === index
                        ? "bg-[var(--secundary)] border-[var(--secundary)]"
                        : "bg-white/40 border-white/60 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
