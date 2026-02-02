"use client";

import { useState, useRef, useEffect } from "react";
import { Music, Music2 } from "lucide-react";

export default function MusicPlayer() {
    const [playing, setPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("/music.mp3");
        audioRef.current.loop = true;

        // Optional: Try auto-play (ignoring promise rejection for now as browsers block it)
        // audioRef.current.play().catch(() => {});

        return () => {
            audioRef.current?.pause();
        };
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
        }
        setPlaying(!playing);
    };

    return (
        <button
            onClick={togglePlay}
            className="fixed bottom-4 right-4 z-50 bg-white/50 backdrop-blur-md p-3 rounded-full text-rose-600 shadow-lg hover:bg-white/80 transition-all"
            aria-label="Toggle Music"
        >
            {playing ? (
                <Music2 className="w-6 h-6 animate-pulse" />
            ) : (
                <Music className="w-6 h-6" />
            )}
        </button>
    );
}
