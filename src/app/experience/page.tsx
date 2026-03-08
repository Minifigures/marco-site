"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
    }),
};

const typeColors: Record<string, string> = {
    internship: "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30",
    fulltime: "bg-accent-green/15 text-accent-green border-accent-green/30",
    parttime: "bg-accent-purple/15 text-accent-purple border-accent-purple/30",
    volunteer: "bg-accent-amber/15 text-accent-amber border-accent-amber/30",
};

export default function ExperiencePage() {
    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-green tracking-wider mb-2">
                        {"/// EXPERIENCE.LOG"}
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                        Career <span className="text-gradient">Timeline</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className="text-text-secondary text-lg max-w-2xl mb-16">
                        A chronological log of my professional journey — from inventory systems to AI pipelines.
                    </motion.p>
                </motion.div>

                {/* Terminal header */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8 p-4 rounded-xl bg-bg-card border border-border-subtle"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                        <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                        <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                    </div>
                    <p className="font-mono text-xs text-text-muted">
                        <span className="text-accent-green">marco@portfolio</span>:<span className="text-accent-cyan">~</span>$ cat experience.log
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border-subtle" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="relative pl-12 pb-12 last:pb-0"
                        >
                            {/* Timeline dot */}
                            <motion.div
                                variants={fadeUp}
                                custom={0}
                                className={`absolute left-[12px] top-1 w-4 h-4 rounded-full border-2 z-10 ${i === 0
                                    ? "bg-accent-cyan border-accent-cyan shadow-[0_0_12px_rgba(0,212,255,0.5)]"
                                    : "bg-bg-primary border-text-muted"
                                    }`}
                            />

                            <motion.div
                                variants={fadeUp}
                                custom={1}
                                className="rounded-2xl border border-border-subtle bg-bg-card p-6 hover:border-border-accent transition-all duration-300 group"
                            >
                                {/* Date + Type badge */}
                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <span className="font-mono text-xs text-text-muted">
                                        {exp.startDate} — {exp.endDate}
                                    </span>
                                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${typeColors[exp.type] || ""}`}>
                                        {exp.type.toUpperCase()}
                                    </span>
                                </div>

                                {/* Company + Title */}
                                <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                                    {exp.title}
                                </h3>
                                <p className="text-text-secondary text-sm mb-1">{exp.company}</p>
                                <p className="font-mono text-xs text-text-muted mb-4">{exp.location}</p>

                                {/* Description bullets */}
                                <ul className="space-y-2 mb-4">
                                    {exp.description.map((desc, j) => (
                                        <li key={j} className="flex items-start gap-2 text-text-secondary text-sm">
                                            <span className="text-accent-green mt-1 shrink-0">&gt;</span>
                                            {desc}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech pills */}
                                {exp.tech.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {exp.tech.map((t) => (
                                            <span key={t} className="tech-pill">{t}</span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
