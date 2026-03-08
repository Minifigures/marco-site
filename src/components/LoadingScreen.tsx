"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
    const [loading, setLoading] = useState(true);
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const fullText = "INITIALIZING MARCO.exe...";

    useEffect(() => {
        const seen = sessionStorage.getItem("marco-loaded");
        if (seen) {
            setLoading(false);
            return;
        }

        let charIdx = 0;
        const typeInterval = setInterval(() => {
            if (charIdx < fullText.length) {
                setText(fullText.slice(0, charIdx + 1));
                charIdx++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        setLoading(false);
                        sessionStorage.setItem("marco-loaded", "1");
                    }, 300);
                    return 100;
                }
                return prev + 3;
            });
        }, 30);

        const timeout = setTimeout(() => {
            setLoading(false);
            sessionStorage.setItem("marco-loaded", "1");
        }, 2500);

        return () => {
            clearInterval(typeInterval);
            clearInterval(progressInterval);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center"
                    style={{ background: "var(--bg-primary)" }}
                >
                    <div className="font-mono text-lg mb-6" style={{ color: "var(--accent-cyan)" }}>
                        <span style={{ color: "var(--accent-green)" }}>&gt; </span>
                        {text}
                        <span className="animate-pulse">_</span>
                    </div>

                    <div className="w-64 h-1 rounded-full overflow-hidden" style={{ background: "var(--bg-secondary)" }}>
                        <motion.div
                            className="h-full rounded-full"
                            style={{
                                width: `${progress}%`,
                                background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-purple))",
                            }}
                        />
                    </div>

                    <div className="font-mono text-xs mt-3" style={{ color: "var(--text-muted)" }}>
                        {progress}%
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
