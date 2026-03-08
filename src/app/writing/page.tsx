"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { writings, writingTags } from "@/data/writings";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";
import { FaSearch, FaTimes, FaCalendar, FaTag, FaBook } from "react-icons/fa";

export default function WritingPage() {
    const [activeTag, setActiveTag] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedWriting, setSelectedWriting] = useState<
        (typeof writings)[0] | null
    >(null);

    const filtered = writings.filter((w) => {
        const matchesTag = activeTag === "All" || w.tags.includes(activeTag);
        const matchesSearch =
            searchQuery === "" ||
            w.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            w.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTag && matchesSearch;
    });

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="WRITING.DOC"
                    description="Academic writing, research papers, and analytical essays from my CCIT and Sociology studies at UofT."
                />

                {/* Search + Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 space-y-4"
                >
                    <div className="relative">
                        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
                        <input
                            type="text"
                            placeholder="Search writings..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-bg-card border border-border-subtle text-text-primary font-mono text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/40 transition-colors"
                        />
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {writingTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag)}
                                className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                                    activeTag === tag
                                        ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                                        : "bg-bg-card border border-border-subtle text-text-muted hover:text-text-secondary"
                                }`}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Writing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {filtered.map((writing, i) => (
                        <motion.div
                            key={writing.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <TiltCard>
                                <div
                                    onClick={() => setSelectedWriting(writing)}
                                    className="group rounded-2xl border border-border-subtle bg-bg-card/80 backdrop-blur-sm hover:border-border-accent transition-all cursor-pointer overflow-hidden h-full"
                                >
                                    <div className="px-5 py-2.5 bg-bg-tertiary border-b border-border-subtle flex items-center gap-2">
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-accent-rose/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-accent-amber/60" />
                                            <div className="w-2.5 h-2.5 rounded-full bg-accent-green/60" />
                                        </div>
                                        <span className="font-mono text-[10px] text-text-muted ml-2 truncate">
                                            {writing.title
                                                .toLowerCase()
                                                .replace(/\s+/g, "-")}
                                            .doc
                                        </span>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="flex items-center gap-1 text-text-muted">
                                                <FaCalendar className="text-[10px]" />
                                                <span className="font-mono text-[10px]">
                                                    {new Date(
                                                        writing.date
                                                    ).toLocaleDateString("en-US", {
                                                        month: "short",
                                                        year: "numeric",
                                                    })}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 text-text-muted">
                                                <FaBook className="text-[10px]" />
                                                <span className="font-mono text-[10px]">
                                                    {writing.course}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-lg font-bold text-text-primary mb-4 group-hover:text-accent-cyan transition-colors leading-tight">
                                            {writing.title}
                                        </h3>

                                        <p className="text-text-secondary text-sm leading-relaxed mb-5 line-clamp-3">
                                            {writing.excerpt}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5">
                                            {writing.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-accent-purple/10 text-accent-purple text-[10px] font-mono border border-accent-purple/20"
                                                >
                                                    <FaTag className="text-[8px]" />{" "}
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="text-center py-20">
                        <p className="font-mono text-text-muted">
                            No writings found matching your criteria.
                        </p>
                    </div>
                )}
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedWriting && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedWriting(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 30,
                            }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-3xl max-h-[80vh] overflow-y-auto rounded-2xl border border-border-subtle bg-bg-primary"
                        >
                            <div className="sticky top-0 px-6 py-4 bg-bg-secondary border-b border-border-subtle flex items-center justify-between z-10">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                                        <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                                        <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                                    </div>
                                    <span className="font-mono text-xs text-text-muted ml-2">
                                        {selectedWriting.title
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}
                                        .doc
                                    </span>
                                </div>
                                <button
                                    onClick={() => setSelectedWriting(null)}
                                    className="p-1 rounded-lg hover:bg-bg-tertiary text-text-muted hover:text-text-primary transition-colors"
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            <div className="p-10">
                                <div className="mb-5 flex items-center gap-3 text-text-muted">
                                    <span className="font-mono text-xs">
                                        {selectedWriting.course}
                                    </span>
                                    <span className="text-border-subtle">|</span>
                                    <span className="font-mono text-xs">
                                        {new Date(
                                            selectedWriting.date
                                        ).toLocaleDateString("en-US", {
                                            month: "long",
                                            day: "numeric",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>

                                <h2 className="text-2xl font-bold text-text-primary mb-8">
                                    {selectedWriting.title}
                                </h2>

                                <div className="prose prose-invert max-w-none">
                                    <p className="text-text-secondary leading-relaxed">
                                        {selectedWriting.excerpt}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-8">
                                    {selectedWriting.tags.map((tag) => (
                                        <span key={tag} className="tech-pill">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
