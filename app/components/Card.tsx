"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import MessageSequence from "./MessageSequence";
import FinalCTA from "./FinalCTA";
import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";

interface CardProps {
    onAccept: () => void;
}

export default function Card({ onAccept }: CardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [messagesFinished, setMessagesFinished] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
        // Delay showing messages until card is fully open
        setTimeout(() => setShowMessages(true), 800);
    };

    return (
        <div className="relative flex items-center justify-center p-4 min-h-[600px] w-full preserve-3d z-10">
            <motion.div
                className={cn(
                    "relative w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-[#fff0f5] rounded-3xl shadow-2xl flex flex-col items-center overflow-hidden border-4 border-white/50",
                    isOpen ? "scale-100" : "scale-100" // Maybe scale up slightly?
                )}
                layout
            >
                {/* Inside Content (Always rendered but hidden by cover initially) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-white to-pink-50 w-full h-full z-0 p-4 overflow-y-auto scrollbar-hide">
                    {showMessages && !messagesFinished && (
                        <MessageSequence onComplete={() => setMessagesFinished(true)} />
                    )}
                    {messagesFinished && <FinalCTA onAccept={onAccept} />}
                </div>

                {/* Animate the cover OFF when isOpen */}
                {/* Using AnimatePresence would be cleaner but let's do manual motion div for the cover to hinge it */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-rose-400 to-rose-600 z-20 flex flex-col items-center justify-center text-white origin-top backface-hidden"
                    initial={false}
                    animate={isOpen ? { rotateX: 180, opacity: 0, zIndex: -1 } : { rotateX: 0, opacity: 1, zIndex: 20 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <div className="absolute inset-2 border-[2px] border-white/30 rounded-2xl border-dashed box-border pointer-events-none" />
                    <Heart className="w-24 h-24 text-white drop-shadow-md animate-pulse mb-8" fill="currentColor" />
                    <h1 className="text-5xl font-cursive font-bold mb-8 text-center px-4 drop-shadow-sm">
                        For You 💌
                    </h1>
                    <button
                        onClick={handleOpen}
                        className="bg-white text-rose-500 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all z-30 cursor-pointer"
                    >
                        Open Card
                    </button>
                </motion.div>
            </motion.div>
        </div>
    );
}
