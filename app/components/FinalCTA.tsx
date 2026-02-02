"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState, useEffect } from "react";

interface FinalCTAProps {
    onAccept: () => void;
}

export default function FinalCTA({ onAccept }: FinalCTAProps) {
    const [accepted, setAccepted] = useState(false);
    const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number } | null>(null);

    // Countdown logic
    useEffect(() => {
        if (!accepted) return;

        const targetDate = new Date("2026-02-14T00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [accepted]);

    const handleAccept = () => {
        setAccepted(true);
        triggerConfetti();
        onAccept();
    };

    const triggerConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            });
        }, 250);
    };

    if (accepted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl mt-8 border-2 border-pink-200 w-full"
            >
                <h2 className="text-3xl md:text-5xl font-bold font-cursive text-rose-600 mb-4 animate-pulse">
                    You just made my heart very happy 💕
                </h2>
                <p className="text-lg text-rose-800 mb-6 font-medium">The countdown to your special surprise has begun...</p>

                {timeLeft && (
                    <div className="grid grid-cols-4 gap-2 md:gap-4 text-rose-900">
                        <CountdownUnit value={timeLeft.days} label="Days" />
                        <CountdownUnit value={timeLeft.hours} label="Hours" />
                        <CountdownUnit value={timeLeft.minutes} label="Mins" />
                        <CountdownUnit value={timeLeft.seconds} label="Secs" />
                    </div>
                )}
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center mt-10 space-y-8"
        >
            <h1 className="text-4xl md:text-6xl font-cursive font-bold text-rose-600 drop-shadow-sm">
                Will you be my Valentine? ❤️
            </h1>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAccept}
                    className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg transition-colors border-2 border-rose-400"
                >
                    Yes 💖
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleAccept}
                    className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-bold text-xl shadow-lg transition-colors border-2 border-pink-300"
                >
                    Absolutely 😍
                </motion.button>
            </div>
        </motion.div>
    );
}

function CountdownUnit({ value, label }: { value: number, label: string }) {
    return (
        <div className="flex flex-col items-center bg-white/50 p-2 rounded-lg">
            <span className="text-2xl md:text-3xl font-bold text-rose-600">{value}</span>
            <span className="text-xs md:text-sm text-rose-400 uppercase tracking-wider">{label}</span>
        </div>
    );
}
