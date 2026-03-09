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

const highlights: AchievementItem[] = [
    {
        id: "deerhacks",
        title: "DeerHacks V Winner",
        caption:
            "1st Place \u2014 Built LOCATR, an AI-powered lost & found platform",
        emoji: "\uD83C\uDFC6",
        gradient: "from-amber-500/20 to-yellow-500/20",
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
];

const milestones: AchievementItem[] = [
    {
        id: "uoft",
        title: "University of Toronto",
        caption: "Honours B.A. in CCIT & Sociology \u2014 Class of 2027",
        emoji: "\uD83C\uDF93",
        gradient: "from-blue-500/20 to-cyan-500/20",
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
        <div className="min-h-screen py-32 px-8 md:px-12 lg:px-16">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="GALLERY.IMG"
                    description="Hackathon wins, milestones, and the things that keep me going."
                />

                {/* Featured Highlights - full grid */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6"
                >
                    <p className="font-mono text-xs text-accent-green tracking-wider mb-4">
                        {"/// HIGHLIGHTS"}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <TiltCard className="h-full">
                                <div
                                    className={`rounded-2xl border border-border-subtle bg-gradient-to-br ${item.gradient} p-[1px] h-full transition-all duration-300 hover:border-border-accent hover:shadow-[var(--glow-cyan)]`}
                                >
                                    <div className="rounded-[15px] bg-bg-card p-8 h-full flex flex-col">
                                        <div className="text-4xl mb-4">{item.emoji}</div>
                                        <h3 className="font-bold text-text-primary mb-2 text-lg">
                                            {item.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed flex-1">
                                            {item.caption}
                                        </p>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                {/* Milestones - drag scroll */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <p className="font-mono text-xs text-accent-green tracking-wider mb-1">
                        {"/// MILESTONES"}
                    </p>
                    <p className="font-mono text-[10px] text-text-muted flex items-center gap-2">
                        <span className="text-accent-cyan">&larr;</span> Drag to scroll <span className="text-accent-cyan">&rarr;</span>
                    </p>
                </motion.div>

                <div ref={outerRef} className="relative mb-16 overflow-hidden">
                    <motion.div
                        className="flex gap-4 cursor-grab active:cursor-grabbing pb-4"
                        style={{ scrollbarWidth: "none" }}
                        drag="x"
                        dragConstraints={outerRef}
                        dragElastic={0.1}
                    >
                        {milestones.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.08 }}
                                className="shrink-0 w-72 group"
                                whileHover={{ scale: 1.03 }}
                            >
                                <div
                                    className={`rounded-2xl border border-border-subtle bg-gradient-to-br ${item.gradient} p-[1px] transition-all duration-300 group-hover:border-border-accent group-hover:shadow-[var(--glow-cyan)]`}
                                >
                                    <div className="rounded-[15px] bg-bg-card p-6 h-full">
                                        <div className="text-3xl mb-3">{item.emoji}</div>
                                        <h3 className="font-bold text-text-primary mb-1.5 group-hover:text-accent-cyan transition-colors">
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4"
                >
                    <p className="font-mono text-xs text-accent-green tracking-wider mb-4">
                        {"/// BY_THE_NUMBERS"}
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
                            transition={{ delay: i * 0.08 }}
                        >
                            <TiltCard>
                                <div className="glass-card p-6 text-center">
                                    <div className="text-2xl mb-2">{stat.icon}</div>
                                    <div className="font-mono text-2xl md:text-3xl font-bold text-accent-cyan mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                                        {stat.label}
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
