"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Ripple {
    id: number;
    x: number;
    y: number;
}

let rippleCounter = 0;

export default function ClickRipple() {
    const [ripples, setRipples] = useState<Ripple[]>([]);

    const handleClick = useCallback((e: MouseEvent) => {
        rippleCounter++;
        const newRipple = { id: rippleCounter, x: e.clientX, y: e.clientY };
        setRipples((prev) => [...prev.slice(-5), newRipple]);
        const id = newRipple.id;
        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== id));
        }, 800);
    }, []);

    useEffect(() => {
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [handleClick]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9997]">
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.div
                        key={ripple.id}
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 4, opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute w-12 h-12 rounded-full"
                        style={{
                            left: ripple.x - 24,
                            top: ripple.y - 24,
                            border: "2px solid var(--accent-cyan)",
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
}
