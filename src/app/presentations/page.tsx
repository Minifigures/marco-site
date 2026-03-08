"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";
import { FaDownload, FaTimes, FaCalendar, FaExternalLinkAlt } from "react-icons/fa";

interface Presentation {
    id: string;
    title: string;
    context: string;
    date: string;
    type: "pptx" | "gslides";
    embedUrl?: string;
    downloadUrl?: string;
    thumbnail: string;
    description: string;
}

const presentations: Presentation[] = [
    {
        id: "ccit-semiotics",
        title: "Visual Semiotics in Digital Media",
        context: "CCIT 201 \u2014 Final Presentation",
        date: "2025-12-10",
        type: "gslides",
        embedUrl: "",
        thumbnail: "\uD83D\uDCCA",
        description: "An analysis of how visual signs and symbols shape meaning in contemporary digital media landscapes.",
    },
    {
        id: "sociology-research",
        title: "Digital Communities Post-Pandemic",
        context: "SOC 310 \u2014 Research Presentation",
        date: "2025-04-15",
        type: "pptx",
        embedUrl: "",
        thumbnail: "\uD83D\uDCC8",
        description: "Research on how Discord and Reddit communities evolved post-pandemic and their impact on social capital.",
    },
    {
        id: "deerhacks-pitch",
        title: "LOCATR \u2014 DeerHacks V Pitch Deck",
        context: "DeerHacks V Hackathon",
        date: "2025-02-20",
        type: "gslides",
        embedUrl: "",
        thumbnail: "\uD83C\uDFC6",
        description: "Winning pitch deck for LOCATR, an AI-powered lost & found platform using computer vision.",
    },
];

export default function PresentationsPage() {
    const [selectedPres, setSelectedPres] = useState<Presentation | null>(null);

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="DECKS.PPT"
                    description="Slide decks from academic presentations, hackathon pitches, and research talks."
                />

                {/* Stats row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-4 mb-10"
                >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-card border border-border-subtle">
                        <span className="font-mono text-xs text-text-muted">Total Decks</span>
                        <span className="font-mono text-sm font-bold text-accent-cyan">{presentations.length}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-card border border-border-subtle">
                        <span className="font-mono text-xs text-text-muted">Google Slides</span>
                        <span className="font-mono text-sm font-bold text-accent-amber">{presentations.filter(p => p.type === "gslides").length}</span>
                    </div>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-card border border-border-subtle">
                        <span className="font-mono text-xs text-text-muted">PowerPoint</span>
                        <span className="font-mono text-sm font-bold text-accent-cyan">{presentations.filter(p => p.type === "pptx").length}</span>
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {presentations.map((pres, i) => (
                        <motion.div
                            key={pres.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08 }}
                        >
                            <TiltCard className="h-full">
                                <div
                                    onClick={() => setSelectedPres(pres)}
                                    className="group rounded-2xl border border-border-subtle bg-bg-card/80 backdrop-blur-sm hover:border-border-accent transition-all cursor-pointer overflow-hidden h-full flex flex-col"
                                >
                                    <div className="h-28 bg-bg-tertiary flex items-center justify-center text-5xl border-b border-border-subtle relative">
                                        {pres.thumbnail}
                                        <div className="absolute inset-0 bg-gradient-to-t from-bg-card/60 to-transparent" />
                                        <span
                                            className={`absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-mono border ${
                                                pres.type === "gslides"
                                                    ? "bg-accent-amber/10 text-accent-amber border-accent-amber/20"
                                                    : "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20"
                                            }`}
                                        >
                                            {pres.type === "gslides" ? "Google Slides" : "PowerPoint"}
                                        </span>
                                    </div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-3 text-text-muted">
                                            <FaCalendar className="text-[10px]" />
                                            <span className="font-mono text-[10px]">
                                                {new Date(pres.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    year: "numeric",
                                                })}
                                            </span>
                                        </div>
                                        <h3 className="font-semibold text-text-primary group-hover:text-accent-cyan transition-colors mb-2">
                                            {pres.title}
                                        </h3>
                                        <p className="font-mono text-xs text-text-muted mb-3">
                                            {pres.context}
                                        </p>
                                        <p className="text-text-secondary text-sm leading-relaxed flex-1">
                                            {pres.description}
                                        </p>
                                        <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border-subtle">
                                            <FaExternalLinkAlt className="text-[10px] text-text-muted group-hover:text-accent-cyan transition-colors" />
                                            <span className="font-mono text-[10px] text-text-muted group-hover:text-accent-cyan transition-colors">
                                                Click to preview
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedPres && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedPres(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl rounded-2xl border border-border-subtle bg-bg-primary overflow-hidden"
                        >
                            <div className="px-6 py-4 bg-bg-secondary border-b border-border-subtle flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                                        <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                                        <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                                    </div>
                                    <span className="font-mono text-xs text-text-muted">
                                        {selectedPres.title}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    {selectedPres.downloadUrl && (
                                        <a
                                            href={selectedPres.downloadUrl}
                                            className="p-2 rounded-lg hover:bg-bg-tertiary text-text-muted hover:text-accent-cyan transition-colors"
                                        >
                                            <FaDownload className="text-sm" />
                                        </a>
                                    )}
                                    <button
                                        onClick={() => setSelectedPres(null)}
                                        className="p-2 rounded-lg hover:bg-bg-tertiary text-text-muted hover:text-text-primary transition-colors"
                                    >
                                        <FaTimes />
                                    </button>
                                </div>
                            </div>

                            <div className="p-8">
                                {selectedPres.embedUrl ? (
                                    <div className="aspect-[16/9] w-full">
                                        <iframe
                                            src={selectedPres.embedUrl}
                                            className="w-full h-full rounded-xl border border-border-subtle"
                                            allowFullScreen
                                        />
                                    </div>
                                ) : (
                                    <div className="aspect-[16/9] w-full rounded-xl border border-border-subtle bg-bg-card flex items-center justify-center">
                                        <div className="text-center max-w-sm">
                                            <div className="text-5xl mb-4">
                                                {selectedPres.thumbnail}
                                            </div>
                                            <h3 className="font-semibold text-text-primary mb-2">{selectedPres.title}</h3>
                                            <p className="text-text-secondary text-sm mb-4">{selectedPres.description}</p>
                                            <p className="font-mono text-xs text-text-muted">
                                                Embed URL not configured yet
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
