'use client';

import { MessageCircle } from 'lucide-react';
import { Playfair_Display, Dancing_Script } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['500', '700'] });
const script = Dancing_Script({ subsets: ['latin'], weight: ['700'] });

export default function RsvpCard() {
  const WHATSAPP_LINK = 'wa.link/1vcibu';

  const handleClick = () => {
    const href = WHATSAPP_LINK.startsWith('http')
      ? WHATSAPP_LINK
      : `https://${WHATSAPP_LINK}`;
    window.open(href, '_blank');
  };

  return (
    <section
      id="rsvp"
      className="relative bg-[var(--bg)] py-16 sm:py-24 scroll-mt-24 flex flex-col items-center justify-center"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-16 sm:w-32 bg-white/40" />
          <h2 className={`${script.className} text-3xl sm:text-4xl text-white/90`}>
            Confirmación
          </h2>
          <span className="h-px w-16 sm:w-32 bg-white/40" />
        </div>

        <div className="rounded-2xl bg-white/90 text-slate-800 border border-black/10 shadow-xl backdrop-blur-sm p-8 sm:p-10">
          <p className={`${playfair.className} text-lg sm:text-xl`}>
            Por favor, confirma tu asistencia —{' '}
            <span className="font-semibold">es muy importante para mí</span> ✨
          </p>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handleClick}
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium
                         bg-[var(--secundary)] text-black hover:opacity-90 hover:-translate-y-0.5
                         transition shadow-[0_10px_30px_rgba(255,127,64,.25)]"
            >
              <MessageCircle className="w-5 h-5" />
              Confirmar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
