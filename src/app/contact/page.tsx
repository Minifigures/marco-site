"use client";

import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { personal } from "@/data/personal";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
    }),
};

export default function ContactPage() {
    const [copied, setCopied] = useState(false);
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const copyEmail = () => {
        navigator.clipboard.writeText(personal.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // EmailJS integration placeholder
        await new Promise((r) => setTimeout(r, 1000));
        setSubmitted(true);
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen py-24 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-green tracking-wider mb-2">
                        {"/// CONTACT.SH"}
                    </motion.p>
                    <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-bold mb-4">
                        Get in <span className="text-gradient">Touch</span>
                    </motion.h1>
                    <motion.p variants={fadeUp} custom={2} className="text-text-secondary text-lg max-w-2xl mb-16">
                        Have a project idea, job opportunity, or just want to connect? Drop me a message.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Contact Info */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="lg:col-span-2 space-y-4"
                    >
                        <motion.div variants={fadeUp} custom={0} className="glass-card p-6">
                            <h3 className="font-mono text-xs text-text-muted tracking-wider mb-4">{"/// DIRECT_LINE"}</h3>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted font-mono">EMAIL</p>
                                        <p className="text-sm text-text-primary">{personal.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center text-accent-cyan">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted font-mono">PHONE</p>
                                        <p className="text-sm text-text-primary">{personal.phone}</p>
                                    </div>
                                </div>

                                <button
                                    onClick={copyEmail}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs hover:bg-accent-cyan/20 transition-all"
                                >
                                    {copied ? <FaCheck /> : <FaCopy />}
                                    {copied ? "Copied to Clipboard!" : "Copy Email Address"}
                                </button>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeUp} custom={1} className="glass-card p-6">
                            <h3 className="font-mono text-xs text-text-muted tracking-wider mb-4">{"/// SOCIALS"}</h3>
                            <div className="space-y-3">
                                {[
                                    { icon: FaGithub, label: "GitHub", href: personal.social.github, username: "@Minifigures" },
                                    { icon: FaLinkedin, label: "LinkedIn", href: personal.social.linkedin, username: "marco-anthony-ayuste" },
                                ].map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-xl border border-border-subtle hover:border-border-accent transition-all group"
                                    >
                                        <social.icon className="text-text-muted group-hover:text-accent-cyan transition-colors" />
                                        <div>
                                            <p className="text-xs text-text-muted font-mono">{social.label}</p>
                                            <p className="text-sm text-text-primary group-hover:text-accent-cyan transition-colors">{social.username}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        <div className="glass-card p-8">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                                    <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                                    <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                                </div>
                                <span className="font-mono text-xs text-text-muted ml-2">new_message.sh</span>
                            </div>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-12"
                                >
                                    <div className="text-5xl mb-4">✅</div>
                                    <h3 className="text-xl font-bold text-text-primary mb-2">Message Sent!</h3>
                                    <p className="text-text-secondary text-sm">I&apos;ll get back to you as soon as possible.</p>
                                    <button
                                        onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }); }}
                                        className="mt-6 px-4 py-2 rounded-lg border border-border-subtle text-text-muted font-mono text-xs hover:border-border-accent transition-all"
                                    >
                                        Send Another
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label className="block font-mono text-xs text-text-muted mb-2">
                                            <span className="text-accent-green">&gt;</span> NAME
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/40 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-mono text-xs text-text-muted mb-2">
                                            <span className="text-accent-green">&gt;</span> EMAIL
                                        </label>
                                        <input
                                            type="email"
                                            required
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/40 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-mono text-xs text-text-muted mb-2">
                                            <span className="text-accent-green">&gt;</span> MESSAGE
                                        </label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary text-sm placeholder:text-text-muted focus:outline-none focus:border-accent-cyan/40 transition-colors resize-none"
                                            placeholder="Tell me about your project or opportunity..."
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-accent-cyan/15 border border-accent-cyan/30 text-accent-cyan font-mono text-sm hover:bg-accent-cyan/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <FaPaperPlane />
                                        {isSubmitting ? "Sending..." : "Send Message"}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
