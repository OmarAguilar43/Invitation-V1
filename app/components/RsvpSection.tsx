// app/components/RsvpSection.tsx
import { CheckCircle2, ExternalLink, MessageCircle } from "lucide-react";
import { Playfair_Display, Dancing_Script } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["500","700"] });
const script   = Dancing_Script({ subsets: ["latin"], weight: ["700"] });

type Props = {
  googleFormUrl: string;
  whatsappLink?: string;
  docsTemplateUrl?: string;
  note?: string;
};

export default function RsvpSection({
  googleFormUrl,
  whatsappLink,
  docsTemplateUrl,
  note = "Por favor confirma tu asistencia y agrega los nombres de quienes te acompañan.",
}: Props) {
  return (
    <section id="rsvp" className="relative bg-[var(--bg)] py-16 sm:py-24">
      {/* separadores de sección */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative mx-auto max-w-3xl px-6">
        {/* título con líneas */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-px w-16 sm:w-32 bg-white/40" />
          <div className={`${script.className} text-3xl sm:text-4xl text-white/90`}>Confirmación</div>
          <span className="h-px w-16 sm:w-32 bg-white/40" />
        </div>

        {/* tarjeta clara */}
        <div className="rounded-2xl bg-white/90 text-slate-800 border border-black/10 shadow-xl backdrop-blur-sm">
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
              <h3 className={`${playfair.className} text-xl font-semibold`}>RSVP</h3>
            </div>

            <p className="mt-2 text-slate-600">{note}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={googleFormUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 bg-black text-white hover:opacity-90"
              >
                Abrir formulario
                <ExternalLink className="w-4 h-4" />
              </a>

              {whatsappLink && (
                <a
                  href={whatsappLink}
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 border border-slate-300 hover:bg-slate-50"
                >
                  Confirmar por WhatsApp
                  <MessageCircle className="w-4 h-4" />
                </a>
              )}
            </div>

            {docsTemplateUrl && (
              <div className="mt-4 text-center">
                <a
                  href={docsTemplateUrl}
                  target="_blank"
                  className="text-sm underline underline-offset-4 text-slate-600 hover:text-slate-800"
                >
                  Abrir Google Docs (extra)
                </a>
              </div>
            )}
          </div>
        </div>

        <p className="mt-4 text-center text-xs text-white/60">
          Las respuestas se guardan automáticamente en Google Sheets.
        </p>
      </div>
    </section>
  );
}
