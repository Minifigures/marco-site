"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            delay: i * 0.1,
        },
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
        <div className="min-h-screen py-32 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="EXPERIENCE.LOG"
                    description="A chronological log of my professional journey, from inventory systems to AI pipelines."
                />

                {/* Terminal header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mb-10 p-5 rounded-xl bg-bg-card border border-border-subtle max-w-4xl"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                        <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                        <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                    </div>
                    <p className="font-mono text-xs text-text-muted">
                        <span className="text-accent-green">marco@portfolio</span>:
                        <span className="text-accent-cyan">~</span>$ cat experience.log
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl">
                    <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-border-subtle" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.6,
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.1,
                            }}
                            className="relative pl-14 pb-14 last:pb-0"
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute left-[12px] top-2 w-4 h-4 rounded-full border-2 z-10 ${
                                    i === 0
                                        ? "bg-accent-cyan border-accent-cyan shadow-[0_0_12px_rgba(0,212,255,0.5)]"
                                        : "bg-bg-primary border-text-muted"
                                }`}
                            />

                            <TiltCard>
                                <div className="rounded-2xl border border-border-subtle bg-bg-card/80 backdrop-blur-sm p-8 hover:border-border-accent transition-all duration-300 group">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="font-mono text-xs text-text-muted">
                                            {exp.startDate} \u2014 {exp.endDate}
                                        </span>
                                        <span
                                            className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${
                                                typeColors[exp.type] || ""
                                            }`}
                                        >
                                            {exp.type.toUpperCase()}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm mb-1">
                                        {exp.company}
                                    </p>
                                    <p className="font-mono text-xs text-text-muted mb-5">
                                        {exp.location}
                                    </p>

                                    <ul className="space-y-2.5 mb-5">
                                        {exp.description.map((desc, j) => (
                                            <li
                                                key={j}
                                                className="flex items-start gap-2 text-text-secondary text-sm"
                                            >
                                                <span className="text-accent-green mt-1 shrink-0">
                                                    &gt;
                                                </span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((t) => (
                                                <span key={t} className="tech-pill">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
