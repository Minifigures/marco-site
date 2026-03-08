"use client";

import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA",
];

function generateColumns() {
    return Array.from({ length: 25 }).map((_, i) => ({
        left: `${(i / 25) * 100}%`,
        duration: 2 + Math.random() * 2,
        delay: Math.random() * 0.5,
        chars: Array.from({ length: 25 }).map(() => ({
            opacity: 0.3 + Math.random() * 0.7,
            char: String.fromCharCode(0x30a0 + Math.floor(Math.random() * 96)),
        })),
    }));
}

export default function KonamiCode() {
    const sequenceRef = useRef<string[]>([]);
    const [activated, setActivated] = useState(false);
    const columns = useMemo(() => generateColumns(), []);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        sequenceRef.current = [...sequenceRef.current, e.code].slice(-10);
        if (
            sequenceRef.current.length === 10 &&
            sequenceRef.current.every((k, i) => k === KONAMI[i])
        ) {
            setActivated(true);
            sequenceRef.current = [];
            setTimeout(() => setActivated(false), 3000);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [handleKeyDown]);

    return (
        <AnimatePresence>
            {activated && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10001] pointer-events-none overflow-hidden"
                >
                    {columns.map((col, i) => (
                        <motion.div
                            key={i}
                            className="absolute top-0 font-mono text-xs leading-none"
                            style={{
                                left: col.left,
                                color: "var(--accent-green)",
                            }}
                            initial={{ y: -200 }}
                            animate={{ y: "110vh" }}
                            transition={{
                                duration: col.duration,
                                repeat: 1,
                                ease: "linear",
                                delay: col.delay,
                            }}
                        >
                            {col.chars.map((c, j) => (
                                <div key={j} style={{ opacity: c.opacity }}>
                                    {c.char}
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
