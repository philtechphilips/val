"use client";

import { useEffect, useRef } from "react";
import { Music, Music2 } from "lucide-react";

interface MusicPlayerProps {
    isPlaying: boolean;
    onToggle: () => void;
}

export default function MusicPlayer({ isPlaying, onToggle }: MusicPlayerProps) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Initialize audio
        audioRef.current = new Audio("/music.mp3");
        audioRef.current.loop = true;

        return () => {
            audioRef.current?.pause();
        };
    }, []);

    useEffect(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    return (
        <button
            onClick={onToggle}
            className="fixed bottom-4 right-4 z-50 bg-white/50 backdrop-blur-md p-3 rounded-full text-rose-600 shadow-lg hover:bg-white/80 transition-all"
            aria-label="Toggle Music"
        >
            {isPlaying ? (
                <Music2 className="w-6 h-6 animate-pulse" />
            ) : (
                <Music className="w-6 h-6" />
            )}
        </button>
    );
}
