"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";

const typeColors: Record<string, string> = {
    internship: "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30",
    fulltime: "bg-accent-green/15 text-accent-green border-accent-green/30",
    parttime: "bg-accent-purple/15 text-accent-purple border-accent-purple/30",
    volunteer: "bg-accent-amber/15 text-accent-amber border-accent-amber/30",
};

export default function ExperiencePage() {
    return (
        <div className="min-h-screen py-32 px-8 md:px-12 lg:px-16">
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
                    className="mb-8 p-4 rounded-xl bg-bg-card border border-border-subtle inline-flex flex-col"
                >
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-rose/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-amber/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-accent-green/80" />
                    </div>
                    <p className="font-mono text-xs text-text-muted">
                        <span className="text-accent-green">marco@portfolio</span>:
                        <span className="text-accent-cyan">~</span>$ cat experience.log |{" "}
                        <span className="text-accent-cyan">{experiences.length} entries found</span>
                    </p>
                </motion.div>

                {/* Zigzag Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Center line (hidden on mobile, shown on md+) */}
                    <div className="absolute left-[7px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border-subtle" />

                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                ease: [0.16, 1, 0.3, 1],
                                delay: 0.1,
                            }}
                            className={`relative pb-12 last:pb-0 pl-10 md:pl-0 ${
                                i % 2 === 0
                                    ? "md:pr-[calc(50%+24px)]"
                                    : "md:pl-[calc(50%+24px)]"
                            }`}
                        >
                            {/* Timeline dot */}
                            <div
                                className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 top-3 z-10 w-4 h-4 rounded-full border-2 ${
                                    i === 0
                                        ? "bg-accent-cyan border-accent-cyan shadow-[0_0_12px_rgba(0,212,255,0.5)]"
                                        : "bg-bg-primary border-text-muted"
                                }`}
                            />

                            <TiltCard>
                                <div className="rounded-2xl border border-border-subtle bg-bg-card/80 backdrop-blur-sm p-6 hover:border-border-accent transition-all duration-300 group">
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <span className="font-mono text-xs text-text-muted">
                                            {exp.startDate} &mdash; {exp.endDate}
                                        </span>
                                        <span
                                            className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${
                                                typeColors[exp.type] || ""
                                            }`}
                                        >
                                            {exp.type.toUpperCase()}
                                        </span>
                                    </div>

                                    <h3 className="text-lg font-bold text-text-primary group-hover:text-accent-cyan transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-text-secondary text-sm mb-0.5">
                                        {exp.company}
                                    </p>
                                    <p className="font-mono text-xs text-text-muted mb-4">
                                        {exp.location}
                                    </p>

                                    <ul className="space-y-2 mb-4">
                                        {exp.description.map((desc, j) => (
                                            <li
                                                key={j}
                                                className="flex items-start gap-2 text-text-secondary text-sm"
                                            >
                                                <span className="text-accent-green mt-0.5 shrink-0 text-xs">
                                                    &gt;
                                                </span>
                                                {desc}
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.tech.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5">
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
