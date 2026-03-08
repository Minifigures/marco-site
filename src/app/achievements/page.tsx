"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

interface AchievementItem {
    id: string;
    title: string;
    caption: string;
    emoji: string;
    gradient: string;
}

const achievements: AchievementItem[] = [
    { id: "deerhacks", title: "DeerHacks V Winner", caption: "1st Place — Built LOCATR, an AI-powered lost & found platform", emoji: "🏆", gradient: "from-amber-500/20 to-yellow-500/20" },
    { id: "uoft", title: "University of Toronto", caption: "Honours B.A. in CCIT & Sociology — Class of 2027", emoji: "🎓", gradient: "from-blue-500/20 to-cyan-500/20" },
    { id: "riipen", title: "Riipen Internship", caption: "Software Engineering Intern at a leading EdTech platform", emoji: "💼", gradient: "from-purple-500/20 to-pink-500/20" },
    { id: "eccc", title: "Government Tech", caption: "Software QA Analyst at Environment & Climate Change Canada", emoji: "🇨🇦", gradient: "from-red-500/20 to-orange-500/20" },
    { id: "bilingual", title: "Trilingual", caption: "Fluent in English, French (Bilingual), and Tagalog", emoji: "🌍", gradient: "from-green-500/20 to-emerald-500/20" },
    { id: "builder", title: "10+ Projects", caption: "From AI pipelines to full-stack web applications", emoji: "🔧", gradient: "from-cyan-500/20 to-blue-500/20" },
    { id: "ski", title: "Ski Enthusiast", caption: "Hitting the slopes whenever the season allows", emoji: "⛷️", gradient: "from-sky-500/20 to-indigo-500/20" },
    { id: "anime", title: "Anime Connoisseur", caption: "Always hunting for the next great series", emoji: "🎌", gradient: "from-pink-500/20 to-rose-500/20" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
    }),
};

export default function AchievementsPage() {
    const outerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-green tracking-wider mb-2">
                        {"/// GALLERY.IMG"}
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                        Achievements & <span className="text-gradient">Moments</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className="text-text-secondary text-lg max-w-2xl mb-8">
                        Hackathon wins, milestones, and the things that keep me going.
                    </motion.p>
                </motion.div>

                {/* Drag instruction */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="font-mono text-xs text-text-muted mb-4 flex items-center gap-2"
                >
                    <span className="text-accent-cyan">←</span> Drag to scroll <span className="text-accent-cyan">→</span>
                </motion.p>

                {/* Drag-scroll gallery */}
                <div ref={outerRef} className="relative mb-16 overflow-hidden">
                    <motion.div
                        className="flex gap-4 cursor-grab active:cursor-grabbing pb-4"
                        style={{ scrollbarWidth: "none" }}
                        drag="x"
                        dragConstraints={outerRef}
                        dragElastic={0.1}
                    >
                        {achievements.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08 }}
                                className="shrink-0 w-72 group"
                                whileHover={{ scale: 1.03 }}
                            >
                                <div className={`rounded-2xl border border-border-subtle bg-gradient-to-br ${item.gradient} p-1 transition-all duration-300 group-hover:border-border-accent group-hover:shadow-[var(--glow-cyan)]`}>
                                    <div className="rounded-[14px] bg-bg-card p-6 h-full">
                                        <div className="text-4xl mb-4">{item.emoji}</div>
                                        <h3 className="font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {item.caption}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {[
                        { label: "Hackathon Wins", value: "1", icon: "🏆" },
                        { label: "Projects Built", value: "10+", icon: "📦" },
                        { label: "Languages Spoken", value: "3", icon: "🌐" },
                        { label: "Coffees Consumed", value: "∞", icon: "☕" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            variants={fadeUp}
                            custom={i}
                            className="glass-card p-6 text-center"
                        >
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="font-mono text-2xl font-bold text-accent-cyan mb-1">{stat.value}</div>
                            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
