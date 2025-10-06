// app/components/EventsSection.tsx
import Image from "next/image";
import { MapPin, Clock, PartyPopper } from "lucide-react";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import type { ReactNode } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500","700","800"] });
const script   = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

type EventItem = {
  title: string;
  subtitle: string;
  time: string;
  address: string;
  mapLabel: string;
  mapUrl: string;
  leftIcon?: ReactNode;
};

type Props = {
  bgImage?: string;   // imagen de fondo difuminada de la sección
  items: EventItem[]; // normalmente 2 ítems
};

function ChapelIcon({ className="w-14 h-14 text-white" }: { className?: string }) {
  // capillita simple en SVG
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v4m-2 0h4" />
      <path d="M4 12l8-6 8 6v8H4z" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

export default function EventsSection({ bgImage="/bg2.jpg", items }: Props) {
  return (
    <div className="relative py-16 sm:py-24">
      <Image src={bgImage} alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto max-w-xl px-6">
        {/* título "Eventos" con líneas */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <span className="h-px w-16 sm:w-32 bg-white/50" />
          <div className={`${script.className} text-3xl sm:text-4xl text-white/90`}>Eventos</div>
          <span className="h-px w-16 sm:w-32 bg-white/50" />
        </div>

        <div className="grid gap-6 mx-5 sm:grid">
          {items.map((ev, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/15 bg-white/[.06] backdrop-blur-md shadow-2xl"
            >
              <div className="p-6 sm:p-8">
                <h3 className={`${playfair.className} text-white text-xl sm:text-2xl tracking-[0.15em] text-center uppercase`}>
                  {ev.title}
                </h3>

                <div className="my-5 h-px bg-white/15" />

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-2">
                    {ev.leftIcon ?? <ChapelIcon />}
                    <p className="text-white/80 text-sm">{ev.subtitle}</p>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full border border-white/70">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-white/80 text-sm">{ev.time}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-px flex-1 bg-white/20" />
                    <span className="text-white tracking-[0.25em] uppercase">Dirección</span>
                    <span className="h-px flex-1 bg-white/20" />
                  </div>

                  <p className="mt-3 text-center text-white/80">{ev.address}</p>

                  <div className="mt-6 flex justify-center">
                    <a
                      href={ev.mapUrl}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-lg bg-blue-600/80 hover:bg-blue-600 text-white px-5 py-2"
                    >
                      <MapPin className="w-4 h-4" />
                      {ev.mapLabel}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// Ejemplo de ícono para "recepción":
export const ReceptionIcon = () => <PartyPopper className="w-14 h-14 text-white" />;
