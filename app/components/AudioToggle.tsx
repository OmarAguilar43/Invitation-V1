"use client";
import { useRef, useState } from "react";

export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = async () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      try {
        await audioRef.current.play(); // políticas de autoplay piden interacción
        setPlaying(true);
      } catch {}
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/deja-vu.mp3" loop preload="auto" />
      <button
        onClick={toggle}
        className="fixed bottom-4 right-4 z-50 rounded-full px-4 py-2 text-sm bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
        aria-label="Reproducir música"
      >
        {playing ? "Pausar música" : "Reproducir música"}
      </button>
    </>
  );
}
