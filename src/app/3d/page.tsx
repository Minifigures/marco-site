"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const ThreeDRoom = dynamic(() => import("@/components/three/Room3D"), {
    ssr: false,
    loading: () => (
        <div className="h-screen flex items-center justify-center bg-bg-primary">
            <div className="font-mono text-accent-cyan text-sm animate-pulse">
                <span className="text-accent-green">&gt; </span>
                Loading 3D environment...
            </div>
        </div>
    ),
});

export default function ThreeDPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen -mt-16 relative">
            {/* Back button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-20 left-6 z-10"
            >
                <Link
                    href="/"
                    className="font-mono text-sm text-accent-cyan hover:text-text-primary transition-colors flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/5"
                >
                    <span className="text-accent-green">&gt;</span> BACK TO HOME
                </Link>
            </motion.div>

            {/* Instructions */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center"
            >
                <p className="font-mono text-xs text-text-muted bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full border border-white/5">
                    Drag to orbit, scroll to zoom. Click glowing objects to navigate.
                </p>
            </motion.div>

            <ThreeDRoom
                onMonitorClick={() => router.push("/projects")}
                onBookshelfClick={() => router.push("/writing")}
                onCabinetClick={() => router.push("/experience")}
                onResumeClick={() => router.push("/resume")}
            />
        </div>
    );
}
