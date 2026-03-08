"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";

interface AchievementItem {
    id: string;
    title: string;
    caption: string;
    emoji: string;
    gradient: string;
}

const achievements: AchievementItem[] = [
    {
        id: "deerhacks",
        title: "DeerHacks V Winner",
        caption:
            "1st Place \u2014 Built LOCATR, an AI-powered lost & found platform",
        emoji: "\uD83C\uDFC6",
        gradient: "from-amber-500/20 to-yellow-500/20",
    },
    {
        id: "uoft",
        title: "University of Toronto",
        caption: "Honours B.A. in CCIT & Sociology \u2014 Class of 2027",
        emoji: "\uD83C\uDF93",
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        id: "riipen",
        title: "Riipen Internship",
        caption: "Software Engineering Intern at a leading EdTech platform",
        emoji: "\uD83D\uDCBC",
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        id: "eccc",
        title: "Government Tech",
        caption: "Software QA Analyst at Environment & Climate Change Canada",
        emoji: "\uD83C\uDDE8\uD83C\uDDE6",
        gradient: "from-red-500/20 to-orange-500/20",
    },
    {
        id: "bilingual",
        title: "Trilingual",
        caption: "Fluent in English, French (Bilingual), and Tagalog",
        emoji: "\uD83C\uDF0D",
        gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
        id: "builder",
        title: "10+ Projects",
        caption: "From AI pipelines to full-stack web applications",
        emoji: "\uD83D\uDD27",
        gradient: "from-cyan-500/20 to-blue-500/20",
    },
    {
        id: "ski",
        title: "Ski Enthusiast",
        caption: "Hitting the slopes whenever the season allows",
        emoji: "\u26F7\uFE0F",
        gradient: "from-sky-500/20 to-indigo-500/20",
    },
    {
        id: "anime",
        title: "Anime Connoisseur",
        caption: "Always hunting for the next great series",
        emoji: "\uD83C\uDF8C",
        gradient: "from-pink-500/20 to-rose-500/20",
    },
];

export default function AchievementsPage() {
    const outerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen py-32 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="GALLERY.IMG"
                    description="Hackathon wins, milestones, and the things that keep me going."
                />

                {/* Drag instruction */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="font-mono text-xs text-text-muted mb-6 flex items-center gap-2"
                >
                    <span className="text-accent-cyan">\u2190</span> Drag to scroll{" "}
                    <span className="text-accent-cyan">\u2192</span>
                </motion.p>

                {/* Drag-scroll gallery */}
                <div ref={outerRef} className="relative mb-20 overflow-hidden">
                    <motion.div
                        className="flex gap-5 cursor-grab active:cursor-grabbing pb-4"
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
                                className="shrink-0 w-80 group"
                                whileHover={{ scale: 1.03 }}
                            >
                                <div
                                    className={`rounded-2xl border border-border-subtle bg-gradient-to-br ${item.gradient} p-1 transition-all duration-300 group-hover:border-border-accent group-hover:shadow-[var(--glow-cyan)]`}
                                >
                                    <div className="rounded-[14px] bg-bg-card p-8 h-full">
                                        <div className="text-4xl mb-5">{item.emoji}</div>
                                        <h3 className="font-bold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors text-lg">
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-5"
                >
                    {[
                        { label: "Hackathon Wins", value: "1", icon: "\uD83C\uDFC6" },
                        { label: "Projects Built", value: "10+", icon: "\uD83D\uDCE6" },
                        { label: "Languages Spoken", value: "3", icon: "\uD83C\uDF10" },
                        { label: "Coffees Consumed", value: "\u221E", icon: "\u2615" },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <TiltCard>
                                <div className="glass-card p-8 text-center">
                                    <div className="text-3xl mb-3">{stat.icon}</div>
                                    <div className="font-mono text-3xl font-bold text-accent-cyan mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
