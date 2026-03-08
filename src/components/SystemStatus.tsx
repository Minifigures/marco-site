"use client";

import { motion } from "framer-motion";

export default function SystemStatus() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed top-20 right-4 z-40 hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md"
            style={{
                background: "rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.05)",
            }}
        >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent-green)" }} />
            <span
                className="font-mono tracking-wider"
                style={{ fontSize: "10px", color: "var(--text-secondary)" }}
            >
                SYSTEM STATUS: ONLINE
            </span>
        </motion.div>
    );
}
