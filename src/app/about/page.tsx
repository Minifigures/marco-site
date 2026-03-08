"use client";

import { motion } from "framer-motion";
import { personal, techStack } from "@/data/personal";
import { SectionHeader } from "@/components/SectionHeader";
import { TiltCard } from "@/components/TiltCard";
import {
    FaMapMarkerAlt,
    FaEnvelope,
    FaLanguage,
    FaGraduationCap,
    FaCopy,
    FaCheck,
} from "react-icons/fa";
import { useState } from "react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            delay: i * 0.08,
        },
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
        <div className="min-h-screen py-32 px-6">
            <div className="max-w-[1400px] mx-auto">
                <SectionHeader
                    label="ABOUT.MD"
                    description={personal.bio}
                />

                {/* Bento Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {/* Location Card */}
                    <motion.div variants={fadeUp} custom={0}>
                        <TiltCard className="h-full">
                            <div className="glass-card p-8 h-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <FaMapMarkerAlt className="text-accent-cyan" />
                                    <span className="font-mono text-xs text-text-muted">
                                        LOCATION
                                    </span>
                                </div>
                                <p className="text-text-primary font-semibold text-lg">
                                    {personal.location}
                                </p>
                                <div className="mt-5 h-32 rounded-xl bg-bg-tertiary border border-border-subtle flex items-center justify-center overflow-hidden">
                                    <div className="text-4xl">\uD83C\uDF0D</div>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Email Card */}
                    <motion.div variants={fadeUp} custom={1}>
                        <TiltCard className="h-full">
                            <div className="glass-card p-8 h-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <FaEnvelope className="text-accent-cyan" />
                                    <span className="font-mono text-xs text-text-muted">
                                        CONTACT
                                    </span>
                                </div>
                                <p className="text-text-primary font-mono text-sm mb-5 break-all">
                                    {personal.email}
                                </p>
                                <button
                                    onClick={copyEmail}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs hover:bg-accent-cyan/20 transition-all"
                                >
                                    {copied ? <FaCheck /> : <FaCopy />}
                                    {copied ? "Copied!" : "Copy Email"}
                                </button>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Languages Card */}
                    <motion.div variants={fadeUp} custom={2}>
                        <TiltCard className="h-full">
                            <div className="glass-card p-8 h-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <FaLanguage className="text-accent-cyan" />
                                    <span className="font-mono text-xs text-text-muted">
                                        LANGUAGES
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    {personal.languages.map((lang) => (
                                        <div
                                            key={lang}
                                            className="flex items-center gap-2"
                                        >
                                            <div className="w-2 h-2 rounded-full bg-accent-green" />
                                            <span className="text-text-primary">
                                                {lang}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Tech Stack Card */}
                    <motion.div variants={fadeUp} custom={3} className="lg:col-span-2">
                        <TiltCard className="h-full">
                            <div className="glass-card p-8 h-full">
                                <div className="flex items-center gap-2 mb-5">
                                    <span className="text-accent-cyan">\u26A1</span>
                                    <span className="font-mono text-xs text-text-muted">
                                        TECH_STACK
                                    </span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {techStack.map((tech) => (
                                        <span key={tech} className="tech-pill">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Stats Card */}
                    <motion.div variants={fadeUp} custom={4}>
                        <TiltCard className="h-full">
                            <div className="glass-card p-8 h-full">
                                <div className="flex items-center gap-2 mb-5">
                                    <span className="text-accent-cyan">\uD83D\uDCCA</span>
                                    <span className="font-mono text-xs text-text-muted">
                                        QUICK_STATS
                                    </span>
                                </div>
                                <div className="space-y-4">
                                    {Object.entries(personal.stats).map(
                                        ([key, value]) => (
                                            <div
                                                key={key}
                                                className="flex items-center justify-between"
                                            >
                                                <span className="text-text-secondary text-sm capitalize">
                                                    {key
                                                        .replace(
                                                            /([A-Z])/g,
                                                            " $1"
                                                        )
                                                        .trim()}
                                                </span>
                                                <span className="font-mono text-accent-cyan font-semibold">
                                                    {String(value)}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Interests Card */}
                    <motion.div
                        variants={fadeUp}
                        custom={5}
                        className="md:col-span-2 lg:col-span-3"
                    >
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-2 mb-5">
                                <span className="text-accent-cyan">\uD83C\uDFAE</span>
                                <span className="font-mono text-xs text-text-muted">
                                    OUTSIDE_THE_CODE
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {personal.interests.map((interest) => (
                                    <span
                                        key={interest}
                                        className="px-5 py-2.5 rounded-xl bg-bg-tertiary border border-border-subtle text-text-secondary text-sm hover:text-accent-cyan hover:border-border-accent transition-all cursor-default"
                                    >
                                        {interest}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20"
                >
                    <div className="flex items-center gap-2 mb-8">
                        <FaGraduationCap className="text-accent-cyan" />
                        <span className="font-mono text-xs text-text-muted tracking-wider">
                            {"/// EDUCATION"}
                        </span>
                    </div>
                    <TiltCard>
                        <div className="glass-card p-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="w-20 h-20 rounded-2xl bg-bg-tertiary border border-border-subtle flex items-center justify-center text-3xl shrink-0">
                                \uD83C\uDF93
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-text-primary mb-1">
                                    {personal.education.school}
                                </h3>
                                <p className="text-text-secondary">
                                    {personal.education.degree}
                                </p>
                                <p className="text-text-secondary text-sm">
                                    {personal.education.majors}
                                </p>
                                <p className="font-mono text-xs text-accent-cyan mt-2">
                                    Expected: {personal.education.graduation}
                                </p>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>
            </div>
        </div>
    );
}
