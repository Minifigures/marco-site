"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { personal } from "@/data/personal";

export default function ResumePage() {
    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="RESUME.PDF"
                    description="My latest resume with experience, skills, and education."
                />

                {/* Quick info + download */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto"
                >
                    <TiltCard>
                        <div className="glass-card p-5 text-center h-full flex flex-col items-center justify-center">
                            <p className="font-mono text-xs text-text-muted mb-1">STATUS</p>
                            <p className="text-text-primary font-semibold text-sm">Open to Opportunities</p>
                            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse mt-2" />
                        </div>
                    </TiltCard>
                    <TiltCard>
                        <div className="glass-card p-5 text-center h-full flex flex-col items-center justify-center">
                            <p className="font-mono text-xs text-text-muted mb-1">LOCATION</p>
                            <p className="text-text-primary font-semibold text-sm">{personal.location}</p>
                        </div>
                    </TiltCard>
                    <TiltCard>
                        <div className="glass-card p-5 h-full flex flex-col items-center justify-center gap-3">
                            <a
                                href="/resume.pdf"
                                download
                                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan font-mono text-sm hover:bg-accent-cyan/25 hover:scale-[1.02] transition-all"
                            >
                                <FaDownload /> Download PDF
                            </a>
                            <div className="flex items-center gap-3">
                                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors">
                                    <FaGithub />
                                </a>
                                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors">
                                    <FaLinkedin />
                                </a>
                                <a href={personal.social.email} className="text-text-muted hover:text-accent-cyan transition-colors">
                                    <FaEnvelope />
                                </a>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>

                {/* PDF Viewer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="rounded-2xl border border-border-subtle overflow-hidden bg-bg-card max-w-4xl mx-auto"
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
