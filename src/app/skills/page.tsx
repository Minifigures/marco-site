"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skills, skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/SectionHeader";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            delay: i * 0.06,
        },
    }),
};

export default function SkillsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredSkill, setHoveredSkill] = useState<(typeof skills)[0] | null>(null);

    const filtered =
        activeCategory === "all"
            ? skills
            : skills.filter((s) => s.category === activeCategory);

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="SKILLS.SH"
                    description="Hover or tap any skill to see how I use it in the field. Every tool earns its place through real-world application."
                />

                {/* Marquee */}
                <div className="w-full overflow-hidden py-3 mb-8 border-y border-border-subtle">
                    <div className="flex whitespace-nowrap">
                        <div className="animate-marquee-left flex">
                            {[...skills, ...skills].map((s, i) => (
                                <span
                                    key={i}
                                    className="font-mono text-sm text-text-muted/40 mx-4"
                                >
                                    {s.icon} {s.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Filter */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-4 py-2 rounded-lg font-mono text-xs transition-all duration-200 ${
                                activeCategory === cat.id
                                    ? "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30"
                                    : "bg-bg-card border border-border-subtle text-text-muted hover:text-text-secondary"
                            }`}
                        >
                            {cat.icon} {cat.label}
                        </button>
                    ))}
                </div>

                {/* Mobile Telemetry (inline, shown on tap) */}
                <div className="lg:hidden mb-6">
                    {hoveredSkill && (
                        <motion.div
                            key={hoveredSkill.name}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            className="rounded-xl border border-accent-cyan/20 bg-accent-cyan/[0.03] p-5"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <span className="text-2xl">{hoveredSkill.icon}</span>
                                <div>
                                    <div className="font-mono text-sm font-bold text-accent-cyan">
                                        {hoveredSkill.name}
                                    </div>
                                    <div className="font-mono text-[10px] text-text-muted uppercase">
                                        {hoveredSkill.category} &middot; {hoveredSkill.proficiency}%
                                    </div>
                                </div>
                            </div>
                            <div className="h-1.5 rounded-full bg-bg-tertiary overflow-hidden mb-3">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${hoveredSkill.proficiency}%` }}
                                    transition={{ duration: 0.5 }}
                                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                                />
                            </div>
                            <p className="font-mono text-xs text-text-secondary leading-relaxed">
                                <span className="text-accent-green">&gt; </span>
                                {hoveredSkill.telemetry}
                            </p>
                        </motion.div>
                    )}
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
                                    onClick={() => setHoveredSkill(hoveredSkill?.name === skill.name ? null : skill)}
                                    className={`p-4 rounded-xl border cursor-default transition-all duration-300 group ${
                                        hoveredSkill?.name === skill.name
                                            ? "border-accent-cyan/40 bg-accent-cyan/[0.05] shadow-[var(--glow-cyan)]"
                                            : "border-border-subtle bg-bg-card/80 backdrop-blur-sm hover:border-border-accent"
                                    }`}
                                >
                                    <div className="text-2xl mb-2">{skill.icon}</div>
                                    <div className="font-mono text-xs font-semibold text-text-primary group-hover:text-accent-cyan transition-colors mb-1">
                                        {skill.name}
                                    </div>
                                    <div className="flex items-center justify-between mb-1.5">
                                        <span className="font-mono text-[10px] text-text-muted">{skill.category}</span>
                                        <span className="font-mono text-[10px] text-accent-cyan">{skill.proficiency}%</span>
                                    </div>
                                    <div className="h-1 rounded-full bg-bg-tertiary overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{
                                                width: `${skill.proficiency}%`,
                                            }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: i * 0.04,
                                            }}
                                            className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-purple"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Telemetry Panel (desktop only) */}
                    <div className="hidden lg:block lg:col-span-1">
                        <div className="sticky top-24 rounded-2xl border border-border-subtle bg-bg-card/80 backdrop-blur-sm p-6">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-2.5 h-2.5 rounded-full bg-accent-rose/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-accent-amber/80" />
                                <div className="w-2.5 h-2.5 rounded-full bg-accent-green/80" />
                                <span className="font-mono text-xs text-text-muted ml-2">
                                    SKILL_TELEMETRY
                                </span>
                            </div>

                            {hoveredSkill ? (
                                <motion.div
                                    key={hoveredSkill.name}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="text-3xl">
                                            {hoveredSkill.icon}
                                        </span>
                                        <div>
                                            <div className="font-mono text-sm font-bold text-accent-cyan">
                                                {hoveredSkill.name}
                                            </div>
                                            <div className="font-mono text-xs text-text-muted uppercase">
                                                {hoveredSkill.category}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-mono text-xs text-text-muted">
                                                PROFICIENCY
                                            </span>
                                            <span className="font-mono text-xs text-accent-cyan">
                                                {hoveredSkill.proficiency}%
                                            </span>
                                        </div>
                                        <div className="h-2 rounded-full bg-bg-tertiary overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{
                                                    width: `${hoveredSkill.proficiency}%`,
                                                }}
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
                                    <p className="font-mono text-xs text-text-muted">
                                        Hover over a skill to see telemetry
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
