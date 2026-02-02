"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; delay: number }[]>([]);

    useEffect(() => {
        // Corrected type for previousHearts to match the state type
        setHearts(
            Array.from({ length: 20 }).map((_, i) => ({
                id: i,
                left: Math.random() * 100,
                duration: Math.random() * 5 + 5, // 5-10s
                delay: Math.random() * 5,
            }))
        );
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute bottom-0 text-pink-300/40 text-4xl"
                    initial={{ y: "100%", opacity: 0, x: 0 }}
                    animate={{
                        y: "-110vh",
                        opacity: [0, 1, 0],
                        x: [0, Math.sin(heart.id) * 50, 0], // Swaying motion
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear",
                    }}
                    style={{ left: `${heart.left}%` }}
                >
                    ❤
                </motion.div>
            ))}
        </div>
    );
}
