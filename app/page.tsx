"use client";

import { useState } from "react";
import Card from "./components/Card";
import FloatingHearts from "./components/FloatingHearts";
import MusicPlayer from "./components/MusicPlayer";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-pink-100 via-pink-200 to-rose-100 selection:bg-rose-200">

      {/* Background Elements */}
      <FloatingHearts />

      {/* Main Card Interaction */}
      <div className="z-10 w-full flex justify-center px-4">
        <Card onAccept={() => setIsPlaying(true)} />
      </div>

      {/* Music Toggle */}
      <MusicPlayer isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />

      {/* Footer / Credits */}
      <footer className="absolute bottom-2 text-rose-400/60 text-xs font-mono">
        Made with ❤️
      </footer>
    </main>
  );
}
