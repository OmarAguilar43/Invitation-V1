// app/components/Hero.tsx
import Image from "next/image";
import { Playfair_Display, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","600","700","800"] });
const script = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

type Props = {
  titleTop?: string;        // "Nuestra Boda" | "Mis 18" | etc.
  nameA: string;            // Ej: "Itzayana"
  nameB?: string;           // Opcional si es 1 solo nombre
  date: { day: string; month: string; year: string }; // { day: "13", month: "Diciembre", year: "2025" }
  place?: string;           // "Hacienda Los Arcos • 7:00 PM"
  bgImage?: string;         // "/bg-hero.jpg"
};

export default function Hero({
  titleTop = "Mis 18",
  nameA,
  nameB,
  date,
  place,
  bgImage = "/bg-hero.jpg",
}: Props) {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Fondo */}
      <Image
        src={bgImage}
        alt="Fondo"
        fill
        priority
        className="object-cover"
      />
      {/* Oscurecido + viñeta */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      {/* Partículas/dots suaves (opcional) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,.05),transparent_40%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,.04),transparent_35%)]" />

      {/* Flores decorativas */}
      {/* <div className="absolute left top-0 w-[36vw] max-w-[440px] aspect-[1/1] translate-x-[20%] translate-y-[-12%]">
        <Image src="/flowers-left.png" alt="flores" fill className="object-contain" />
      </div>
      <div className="absolute right-[-6%] bottom-[-8%] w-[28vw] max-w-[360px] aspect-[1/1] opacity-90 hidden sm:block">
        <Image src="/flowers-right.png" alt="flores" fill className="object-contain" />
      </div> */}

      {/* Contenido */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        {/* Título script superior */}
        <p className={`${script.className} text-white/90 text-3xl sm:text-4xl mb-4 tracking-wide`}>
          {titleTop}
        </p>

        {/* Ampersand gigante translúcido */}
        {nameB && (
          <span
            aria-hidden
            className="pointer-events-none absolute text-white/10 text-[38vw] sm:text-[26vw] leading-none font-bold select-none"
            style={{ fontFamily: playfair.style.fontFamily, lineHeight: 0.8 }}
          >
            &
          </span>
        )}

        {/* Nombres */}
        <h1 className={`${playfair.className} text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[0.04em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,.35)]`}>
          {nameA}{nameB ? `  ${nameB ? "" : ""}` : ""}
        </h1>
        {nameB && (
          <h2 className={`${playfair.className} text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[0.04em] text-white mt-2`}>
            {nameB}
          </h2>
        )}

        {/* Fecha estilizada */}
        <div className="mt-8 flex items-center gap-4 text-white/90">
          <span className="uppercase tracking-[0.25em] text-xs sm:text-sm">Sábado</span>
          <div className="h-6 w-px bg-white/30" />
          <div className="flex items-baseline gap-3">
            <span className={`${playfair.className} text-4xl sm:text-5xl font-extrabold`}>{date.day}</span>
            <div className="h-6 w-px bg-white/30" />
            <span className="uppercase tracking-[0.25em] text-xs sm:text-sm">{date.year}</span>
          </div>
        </div>
        <div className={`${playfair.className} mt-2 uppercase tracking-[0.35em] text-sm text-white/90`}>
          {date.month}
        </div>

        {/* Lugar / hora */}
        {place && (
          <p className="mt-6 text-white/80 text-sm sm:text-base">{place}</p>
        )}

        {/* CTA opcional */}
        <a href="#rsvp" className="mt-8 inline-block rounded-full px-6 py-3 bg-white/90 text-black font-medium hover:bg-white">
          Confirmar asistencia
        </a>
      </div>
    </section>
  );
}
