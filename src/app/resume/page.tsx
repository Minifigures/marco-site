"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
    }),
};

export default function ResumePage() {
    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-green tracking-wider mb-2">
                        {"/// RESUME.PDF"}
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="text-gradient">Resume</span>
                    </motion.h1>
                    <motion.div variants={fadeUp} custom={2} className="flex flex-wrap items-center gap-4 mb-10">
                        <p className="text-text-secondary text-lg">
                            Download or view my latest resume below.
                        </p>
                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan font-mono text-sm hover:bg-accent-cyan/25 transition-all"
                        >
                            <FaDownload /> Download PDF
                        </a>
                    </motion.div>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="rounded-2xl border border-border-subtle overflow-hidden bg-bg-card"
                >
                    <div className="px-4 py-3 bg-bg-secondary border-b border-border-subtle flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                            <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                            <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                        </div>
                        <span className="font-mono text-xs text-text-muted ml-2">marco_ayuste_resume.pdf</span>
                    </div>
                    <div className="w-full bg-bg-tertiary" style={{ minHeight: "80vh" }}>
                    <iframe
                        src="/resume.pdf"
                        className="w-full"
                        style={{ height: "80vh" }}
                        title="Marco Ayuste Resume"
                    >
                        <div className="text-center p-8">
                            <div className="text-6xl mb-4">📄</div>
                            <p className="font-mono text-sm text-text-muted mb-2">PDF viewer not supported.</p>
                            <a href="/resume.pdf" download className="font-mono text-xs text-accent-cyan hover:underline">
                                Download the PDF instead
                            </a>
                        </div>
                    </iframe>
                </div>
                </motion.div>
            </div>
        </div>
    );
}
