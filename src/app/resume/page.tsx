"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { FaDownload } from "react-icons/fa";

export default function ResumePage() {
    return (
        <div className="min-h-screen py-32 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader label="RESUME.PDF" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap items-center gap-4 mb-12"
                >
                    <p className="text-text-secondary text-lg">
                        Download or view my latest resume below.
                    </p>
                    <a
                        href="/resume.pdf"
                        download
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan font-mono text-sm hover:bg-accent-cyan/25 hover:scale-105 transition-all"
                    >
                        <FaDownload /> Download PDF
                    </a>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="rounded-2xl border border-border-subtle overflow-hidden bg-bg-card max-w-4xl"
                >
                    <div className="px-5 py-3 bg-bg-secondary border-b border-border-subtle flex items-center gap-2">
                        <div className="flex gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                            <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                            <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                        </div>
                        <span className="font-mono text-xs text-text-muted ml-2">
                            marco_ayuste_resume.pdf
                        </span>
                    </div>
                    <div
                        className="w-full bg-bg-tertiary"
                        style={{ minHeight: "80vh" }}
                    >
                        <iframe
                            src="/resume.pdf"
                            className="w-full"
                            style={{ height: "80vh" }}
                            title="Marco Ayuste Resume"
                        >
                            <div className="text-center p-10">
                                <div className="text-6xl mb-5">\uD83D\uDCC4</div>
                                <p className="font-mono text-sm text-text-muted mb-2">
                                    PDF viewer not supported.
                                </p>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="font-mono text-xs text-accent-cyan hover:underline"
                                >
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
