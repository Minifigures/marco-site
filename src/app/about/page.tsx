"use client";

import { motion } from "framer-motion";
import { personal, techStack } from "@/data/personal";
import { FaMapMarkerAlt, FaEnvelope, FaLanguage, FaGraduationCap, FaCopy, FaCheck } from "react-icons/fa";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.08 },
    }),
};

export default function AboutPage() {
    const [copied, setCopied] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-green tracking-wider mb-2">
                        {"/// ABOUT.MD"}
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="text-gradient">Me</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className="text-text-secondary text-lg max-w-2xl mb-16">
                        {personal.bio}
                    </motion.p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {/* Location Card */}
                    <motion.div variants={fadeUp} custom={3} className="glass-card p-6 col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                            <FaMapMarkerAlt className="text-accent-cyan" />
                            <span className="font-mono text-xs text-text-muted">LOCATION</span>
                        </div>
                        <p className="text-text-primary font-semibold text-lg">{personal.location}</p>
                        <div className="mt-4 h-32 rounded-xl bg-bg-tertiary border border-border-subtle flex items-center justify-center overflow-hidden">
                            <div className="text-4xl">🌍</div>
                        </div>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div variants={fadeUp} custom={4} className="glass-card p-6 col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                            <FaEnvelope className="text-accent-cyan" />
                            <span className="font-mono text-xs text-text-muted">CONTACT</span>
                        </div>
                        <p className="text-text-primary font-mono text-sm mb-4 break-all">{personal.email}</p>
                        <button
                            onClick={copyEmail}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs hover:bg-accent-cyan/20 transition-all"
                        >
                            {copied ? <FaCheck /> : <FaCopy />}
                            {copied ? "Copied!" : "Copy Email"}
                        </button>
                    </motion.div>

                    {/* Languages Card */}
                    <motion.div variants={fadeUp} custom={5} className="glass-card p-6 col-span-1">
                        <div className="flex items-center gap-2 mb-3">
                            <FaLanguage className="text-accent-cyan" />
                            <span className="font-mono text-xs text-text-muted">LANGUAGES</span>
                        </div>
                        <div className="space-y-2">
                            {personal.languages.map((lang) => (
                                <div key={lang} className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-accent-green" />
                                    <span className="text-text-primary">{lang}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tech Stack Card */}
                    <motion.div variants={fadeUp} custom={6} className="glass-card p-6 col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-accent-cyan">⚡</span>
                            <span className="font-mono text-xs text-text-muted">TECH_STACK</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech) => (
                                <span key={tech} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div variants={fadeUp} custom={7} className="glass-card p-6 col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-accent-cyan">📊</span>
                            <span className="font-mono text-xs text-text-muted">QUICK_STATS</span>
                        </div>
                        <div className="space-y-4">
                            {Object.entries(personal.stats).map(([key, value]) => (
                                <div key={key} className="flex items-center justify-between">
                                    <span className="text-text-secondary text-sm capitalize">
                                        {key.replace(/([A-Z])/g, " $1").trim()}
                                    </span>
                                    <span className="font-mono text-accent-cyan font-semibold">{String(value)}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Interests Card */}
                    <motion.div variants={fadeUp} custom={8} className="glass-card p-6 col-span-1 md:col-span-2 lg:col-span-3">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-accent-cyan">🎮</span>
                            <span className="font-mono text-xs text-text-muted">OUTSIDE_THE_CODE</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {personal.interests.map((interest) => (
                                <span
                                    key={interest}
                                    className="px-4 py-2 rounded-xl bg-bg-tertiary border border-border-subtle text-text-secondary text-sm hover:text-accent-cyan hover:border-border-accent transition-all cursor-default"
                                >
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-16"
                >
                    <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
                        <FaGraduationCap className="text-accent-cyan" />
                        <span className="font-mono text-xs text-text-muted tracking-wider">{"/// EDUCATION"}</span>
                    </motion.div>
                    <motion.div
                        variants={fadeUp}
                        custom={1}
                        className="glass-card p-8 flex flex-col md:flex-row items-center gap-6"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-center justify-center text-3xl shrink-0">
                            🎓
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-text-primary mb-1">{personal.education.school}</h3>
                            <p className="text-text-secondary">{personal.education.degree}</p>
                            <p className="text-text-secondary text-sm">{personal.education.majors}</p>
                            <p className="font-mono text-xs text-accent-cyan mt-2">Expected: {personal.education.graduation}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
