"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skills, skillCategories } from "@/data/skills";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.08 },
    }),
};

export default function SkillsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredSkill, setHoveredSkill] = useState<typeof skills[0] | null>(null);

    const filtered = activeCategory === "all"
        ? skills
        : skills.filter((s) => s.category === activeCategory);

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-green tracking-wider mb-2">
                        {"/// SKILLS.SH"}
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                        Tech <span className="text-gradient">Arsenal</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className="text-text-secondary text-lg max-w-2xl mb-10">
                        Hover over any skill to see how I use it in the field. Every tool earns its place through real-world application.
                    </motion.p>
                </motion.div>

                {/* Marquee */}
                <div className="w-full overflow-hidden py-3 mb-10 border-y border-border-subtle">
                    <div className="flex whitespace-nowrap">
                        <div className="animate-marquee-left flex">
                            {[...skills, ...skills].map((s, i) => (
                                <span key={i} className="font-mono text-sm text-text-muted/40 mx-4">
                                    {s.icon} {s.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 ${activeCategory === cat.id
                                ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                                : "bg-bg-card border border-border-subtle text-text-muted hover:text-text-secondary"
                                }`}
                        >
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Skills Grid */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                        >
                            {filtered.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    variants={fadeUp}
                                    custom={i}
                                    onMouseEnter={() => setHoveredSkill(skill)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    className={`p-4 rounded-xl border cursor-default transition-all duration-300 group ${hoveredSkill?.name === skill.name
                                        ? "border-accent-cyan/40 bg-accent-cyan/[0.05] shadow-[var(--glow-cyan)]"
                                        : "border-border-subtle bg-bg-card hover:border-border-accent"
                                        }`}
                                >
                                    <div className="text-2xl mb-2">{skill.icon}</div>
                                    <div className="font-mono text-xs font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
                                        {skill.name}
                                    </div>
                                    {/* Proficiency bar */}
                                    <div className="mt-2 h-1 rounded-full bg-bg-tertiary overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.proficiency}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, delay: i * 0.05 }}
                                            className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Telemetry Panel */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 rounded-2xl border border-border-subtle bg-bg-card p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                                <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                                <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                                <span className="font-mono text-xs text-text-muted ml-2">SKILL_TELEMETRY</span>
                            </div>

                            {hoveredSkill ? (
                                <motion.div
                                    key={hoveredSkill.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl">{hoveredSkill.icon}</span>
                                        <div>
                                            <div className="font-mono text-sm font-bold text-accent-cyan">{hoveredSkill.name}</div>
                                            <div className="font-mono text-xs text-text-muted uppercase">{hoveredSkill.category}</div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-mono text-xs text-text-muted">PROFICIENCY</span>
                                            <span className="font-mono text-xs text-accent-cyan">{hoveredSkill.proficiency}%</span>
                                        </div>
                                        <div className="h-2 rounded-full bg-bg-tertiary overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: `${hoveredSkill.proficiency}%` }}
                                                transition={{ duration: 0.5 }}
                                                className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                                            />
                                        </div>
                                    </div>
                                    <p className="font-mono text-xs text-text-secondary leading-relaxed">
                                        <span className="text-accent-green">&gt; </span>
                                        {hoveredSkill.telemetry}
                                    </p>
                                </motion.div>
                            ) : (
                                <div className="text-center py-8">
                                    <div className="text-4xl mb-3 opacity-30">🖱️</div>
                                    <p className="font-mono text-xs text-text-muted">
                                        Hover over a skill to see detailed telemetry data
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
