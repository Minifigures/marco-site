"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaChevronDown, FaChevronUp } from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
    }),
};

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filtered = activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-green tracking-wider mb-2">
                        {"/// PROJECTS.DIR"}
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                        What I&apos;ve <span className="text-gradient">Built</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className="text-text-secondary text-lg max-w-2xl mb-10">
                        From hackathon winners to production applications — each project is a lesson in shipping fast and building right.
                    </motion.p>
                </motion.div>

                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap gap-2 mb-10"
                >
                    {projectCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 ${activeCategory === cat.id
                                ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                                : "bg-bg-card border border-border-subtle text-text-muted hover:text-text-secondary"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Project Cards */}
                <div className="space-y-4">
                    <AnimatePresence mode="wait">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${project.featured
                                    ? "border-accent-cyan/30 bg-accent-cyan/[0.03] shadow-[var(--glow-cyan)]"
                                    : "border-border-subtle bg-bg-card"
                                    }`}
                            >
                                {/* Featured Banner */}
                                {project.award && (
                                    <div className="px-6 py-2 bg-accent-cyan/10 border-b border-accent-cyan/20 flex items-center gap-2">
                                        <FaTrophy className="text-accent-amber text-sm" />
                                        <span className="font-mono text-xs text-accent-cyan">{project.award}</span>
                                    </div>
                                )}

                                {/* Card Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-text-primary mb-2">{project.title}</h3>
                                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                                {project.shortDescription}
                                            </p>

                                            {/* Tech Pills */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tech.map((t) => (
                                                    <span key={t} className="tech-pill">{t}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Expand/Collapse */}
                                        <button
                                            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                                            className="p-2 rounded-lg border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-border-accent transition-all"
                                            aria-label={expandedId === project.id ? "Collapse" : "Expand"}
                                        >
                                            {expandedId === project.id ? <FaChevronUp /> : <FaChevronDown />}
                                        </button>
                                    </div>

                                    {/* Expanded Content */}
                                    <AnimatePresence>
                                        {expandedId === project.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-4 border-t border-border-subtle mt-4">
                                                    <p className="text-text-secondary leading-relaxed mb-6">
                                                        {project.fullDescription}
                                                    </p>

                                                    <div className="flex gap-3">
                                                        {project.github && (
                                                            <a
                                                                href={project.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary font-mono text-xs hover:border-border-accent transition-all"
                                                            >
                                                                <FaGithub /> Source Code
                                                            </a>
                                                        )}
                                                        {project.liveUrl && (
                                                            <a
                                                                href={project.liveUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs hover:bg-accent-cyan/20 transition-all"
                                                            >
                                                                <FaExternalLinkAlt /> Live Demo
                                                            </a>
                                                        )}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
