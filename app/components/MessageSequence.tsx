"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface MessageSequenceProps {
    onComplete: () => void;
}

const messages = [
    "Hey Oyinkansiolami...", // Replace this with her actual name!
    "Every moment with you means more than I can explain.",
    "So I wanted to ask you something special...",
];

export default function MessageSequence({ onComplete }: MessageSequenceProps) {
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    // Auto-advance lines logic
    useEffect(() => {
        // We assume each line takes some time to read.
        // Simple logic: Wait for N seconds then next line.
        // Better logic: Callback from the Typewriter component when done?
        // Let's stick to a timed sequence for simplicity + control.
    }, []);

    const handleLineComplete = () => {
        if (currentLineIndex < messages.length - 1) {
            setTimeout(() => setCurrentLineIndex((prev) => prev + 1), 1000); // Wait 1s before next line
        } else {
            setTimeout(() => {
                setIsFinished(true);
                onComplete();
            }, 1000);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-8 text-center h-full p-8 w-full max-w-lg mx-auto">
            {messages.map((msg, i) => (
                // Only render current and previous lines.
                // Actually, simpler to render all but start typing if index matches.
                i <= currentLineIndex && (
                    <div key={i} className="min-h-[3rem] w-full">
                        <TypewriterText
                            text={msg}
                            startDelay={500}
                            onComplete={i === currentLineIndex ? handleLineComplete : undefined}
                            isActive={i === currentLineIndex}
                        />
                    </div>
                )
            ))}
        </div>
    );
}

function TypewriterText({ text, startDelay, onComplete, isActive }: { text: string, startDelay: number, onComplete?: () => void, isActive: boolean }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!isActive) {
            setDisplayedText(text); // If valid historical line, show full.
            return;
        }

        let currentIndex = 0;
        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayedText((prev) => text.slice(0, currentIndex + 1));
                currentIndex++;
                if (currentIndex === text.length) {
                    clearInterval(interval);
                    if (onComplete) onComplete();
                }
            }, 50); // Speed of typing
            return () => clearInterval(interval);
        }, startDelay);

        return () => clearTimeout(startTimeout);
    }, [text, isActive, startDelay, onComplete]);

    return (
        <motion.p
            className="text-xl md:text-2xl font-medium text-rose-800 font-cursive"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {displayedText}
            {isActive && displayedText.length < text.length && (
                <span className="animate-pulse">|</span>
            )}
        </motion.p>
    );
}
