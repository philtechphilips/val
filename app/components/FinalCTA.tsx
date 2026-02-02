"use client";

import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { useState } from "react";

export default function FinalCTA() {
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
        triggerConfetti();
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
                className="text-center p-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl mt-8 border-2 border-pink-200"
            >
                <h2 className="text-4xl md:text-5xl font-bold font-cursive text-rose-600 mb-4 animate-pulse">
                    You just made my heart very happy 💕
                </h2>
                <p className="text-lg text-rose-800">I can&apos;t wait to celebrate with you!</p>
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
