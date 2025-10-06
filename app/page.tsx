import AudioToggle from "./components/AudioToggle";
import EventsSection, { ReceptionIcon } from "./components/EventsSection";
import Hero from "./components/Hero";
import PhotoGrid from "./components/PhotoGrid";
import RsvpSection from "./components/RsvpSection";
import WordsSection from "./components/wordsSection";

const GOOGLE_FORM = "https://forms.gle/xxxxxxxx"; 
const WHATSAPP = "https://wa.me/52XXXXXXXXXX?text=Hola,%20confirmo%20para%20[Nombre].%20Asistentes:%20...";
const GOOGLE_DOC = "https://docs.google.com/document/d/XXXXXX/edit?usp=sharing"; // opcional

export default function Page() {
  return (
    <>
      <Hero
        titleTop="Mis 18"
        nameA="Jade Martinez"
        // nameB="Misael"   // si es un solo nombre, comenta esta línea
        date={{ day: "6", month: "Diciembre", year: "2025" }}
        place="Bar Manotas • 6:00 PM"
        bgImage="/bg1.jpg"
      />
      <PhotoGrid />
      
      <AudioToggle />

      <EventsSection
        bgImage="/bg2.jpg"
        items={[
          {
            title: "Bar",
            subtitle: "Fiesta",
            time: "7:00 PM",
            address: "Adelita 71, Santa Cruz de Las Huertas, 45402 Tonalá, Jal.",
            mapLabel: "Ruta Evento",
            mapUrl: "https://maps.app.goo.gl/5rjPpRkEmCj2KfaA8",
          }
        ]}
      />

      <WordsSection
        bgImage="/bg-hero.jpg" // opcional; si no lo pones, queda solo el color #0c0f17
        message="Gracias por acompañarme en este día tan especial..."
        signature="— Jade"
/>

      <RsvpSection
  googleFormUrl="https://forms.gle/xxxxxxxx"
  whatsappLink="https://wa.me/52XXXXXXXXXX?text=Hola,%20confirmo%20mi%20asistencia%20para%20Jade."
  // docsTemplateUrl="https://docs.google.com/document/d/XXXX/edit?usp=sharing"
  // note="Confirma antes del 30 de noviembre, por favor."
/>

      <footer className="px-6 pb-10 text-center text-xs text-white/50">Con cariño • {new Date().getFullYear()}</footer>
    </>
  );
}
