// app/components/WordsSection.tsx
import { Quote } from "lucide-react";
import { Playfair_Display, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400","600"] });
const script   = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

type Props = {
  title?: string;
  message: string;
  signature?: string;
  bgImage?: string;          // opcional: imagen detrás
};

export default function WordsSection({
  title = "Unas palabras",
  message,
  signature,
  bgImage,
}: Props) {
  return (
    // fondo de la sección: usa tu color global --bg (#0c0f17)
    <section className="relative py-16 sm:py-24 bg-[var(--bg)]">
      {bgImage && (
        <>
          
          {/* overlay teñido del color de fondo para mantener la paleta */}
          <div
            className="absolute inset-0 backdrop-blur-sm"
            style={{ background: "rgba(12,15,23,.65)" }} // #0c0f17 al 65%
          />
        </>
      )}

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className={`${script.className} text-3xl sm:text-4xl text-[var(--fg)]/90 mb-6`}>
          {title}
        </div>

        {/* tarjeta clara sobre fondo oscuro */}
        <div className="rounded-2xl bg-white/90 text-slate-800 border border-black/10 shadow-xl backdrop-blur-md p-8 sm:p-10">
          <Quote className="w-8 h-8 mx-auto text-slate-500" />
          <p className={`${playfair.className} mt-4 text-lg leading-relaxed`}>
            {message}
          </p>
          {signature && <p className="mt-6 text-slate-600">— {signature}</p>}
        </div>
      </div>
    </section>
  );
}
