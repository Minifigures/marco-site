"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects, projectCategories } from "@/data/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaTrophy,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa";

export default function ProjectsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const filtered =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="PROJECTS.DIR"
                    description="From hackathon winners to production applications, each project is a lesson in shipping fast and building right."
                />

                {/* Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-8"
                >
                    {projectCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 ${
                                activeCategory === cat.id
                                    ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                                    : "bg-bg-card border border-border-subtle text-text-muted hover:text-text-secondary"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Project Cards */}
                <div className="space-y-5">
                    <AnimatePresence mode="wait">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                            >
                                <TiltCard>
                                    <div
                                        className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                                            project.featured
                                                ? "border-accent-cyan/30 bg-accent-cyan/[0.03] shadow-[var(--glow-cyan)]"
                                                : "border-border-subtle bg-bg-card/80 backdrop-blur-sm"
                                        }`}
                                    >
                                        {project.award && (
                                            <div className="px-8 py-2.5 bg-accent-cyan/10 border-b border-accent-cyan/20 flex items-center gap-2">
                                                <FaTrophy className="text-accent-amber text-sm" />
                                                <span className="font-mono text-xs text-accent-cyan">
                                                    {project.award}
                                                </span>
                                            </div>
                                        )}

                                        <div className="p-8">
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-text-primary mb-3">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-text-secondary text-sm leading-relaxed mb-5">
                                                        {project.shortDescription}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.tech.map((t) => (
                                                            <span
                                                                key={t}
                                                                className="tech-pill"
                                                            >
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <button
                                                    onClick={() =>
                                                        setExpandedId(
                                                            expandedId === project.id
                                                                ? null
                                                                : project.id
                                                        )
                                                    }
                                                    className="p-2 rounded-lg border border-border-subtle text-text-muted hover:text-accent-cyan hover:border-border-accent transition-all"
                                                    aria-label={
                                                        expandedId === project.id
                                                            ? "Collapse"
                                                            : "Expand"
                                                    }
                                                >
                                                    {expandedId === project.id ? (
                                                        <FaChevronUp />
                                                    ) : (
                                                        <FaChevronDown />
                                                    )}
                                                </button>
                                            </div>

                                            <AnimatePresence>
                                                {expandedId === project.id && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pt-5 border-t border-border-subtle mt-5">
                                                            <p className="text-text-secondary leading-relaxed mb-6">
                                                                {project.fullDescription}
                                                            </p>
                                                            <div className="flex gap-3">
                                                                {project.github && (
                                                                    <a
                                                                        href={
                                                                            project.github
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg-tertiary border border-border-subtle text-text-primary font-mono text-xs hover:border-border-accent transition-all"
                                                                    >
                                                                        <FaGithub /> Source
                                                                        Code
                                                                    </a>
                                                                )}
                                                                {project.liveUrl && (
                                                                    <a
                                                                        href={
                                                                            project.liveUrl
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs hover:bg-accent-cyan/20 transition-all"
                                                                    >
                                                                        <FaExternalLinkAlt />{" "}
                                                                        Live Demo
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
