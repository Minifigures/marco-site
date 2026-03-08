"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import Marquee from "@/components/Marquee";
import { personal } from "@/data/personal";
import { TiltCard } from "@/components/TiltCard";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-bg-primary" />,
});

const sectionLinks = [
    { href: "/projects", label: "PROJECTS.DIR", description: "Hackathon winners & production apps", icon: "\uD83D\uDCC2" },
    { href: "/experience", label: "EXPERIENCE.LOG", description: "From startups to government", icon: "\uD83D\uDCCB" },
    { href: "/writing", label: "WRITING.DOC", description: "Research & analysis papers", icon: "\uD83D\uDCDD" },
    { href: "/skills", label: "SKILLS.SH", description: "Tech stack & proficiency", icon: "\u26A1" },
    { href: "/3d", label: "ROOM.3D", description: "Interactive 3D workspace", icon: "\uD83C\uDFAE" },
    { href: "/achievements", label: "GALLERY.IMG", description: "Events, wins & moments", icon: "\uD83C\uDFC6" },
];

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

/* Parallax floating code symbols */
function ParallaxSymbols() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
    const y2 = useTransform(scrollY, [0, 1000], [0, -80]);
    const y3 = useTransform(scrollY, [0, 1000], [0, -200]);

    const symbols = [
        { char: "{}", x: "10%", top: "30%", motionY: y1, opacity: 0.08 },
        { char: "</>", x: "85%", top: "20%", motionY: y2, opacity: 0.06 },
        { char: "//", x: "75%", top: "60%", motionY: y3, opacity: 0.07 },
        { char: "=>", x: "15%", top: "70%", motionY: y2, opacity: 0.05 },
        { char: "&&", x: "90%", top: "45%", motionY: y1, opacity: 0.06 },
        { char: "fn()", x: "5%", top: "50%", motionY: y3, opacity: 0.07 },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {symbols.map((s, i) => (
                <motion.span
                    key={i}
                    className="absolute font-mono text-accent-cyan select-none"
                    style={{
                        left: s.x,
                        top: s.top,
                        y: s.motionY,
                        opacity: s.opacity,
                        fontSize: `${2 + i * 0.5}rem`,
                    }}
                >
                    {s.char}
                </motion.span>
            ))}
        </div>
    );
}

export default function HomePage() {
    return (
        <div className="relative">
            <ParallaxSymbols />

            {/* ======================== HERO ======================== */}
            <section className="relative h-screen flex items-center overflow-hidden">
                <HeroScene />

                {/* Grid overlay */}
                <div className="absolute inset-0 grid-bg opacity-30" />

                {/* Gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/80 via-bg-primary/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />

                <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="font-mono text-sm text-accent-green mb-4 tracking-wider"
                    >
                        &gt; Hello, world
                    </motion.p>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tight leading-[1.1]"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-gradient">Marco</span>
                        <br />
                        <span className="text-text-secondary text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium">
                            I build Systems That Think
                        </span>
                    </motion.h1>

                    {/* Typing text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="font-mono text-base md:text-lg text-accent-cyan mb-8 h-8"
                    >
                        <span className="text-accent-green mr-2">&gt;</span>
                        <Typewriter
                            words={personal.roles}
                            speed={80}
                            deleteSpeed={40}
                            delayBetween={2500}
                        />
                    </motion.div>

                    {/* Bio */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        className="text-text-secondary text-lg max-w-xl mb-10 leading-relaxed"
                    >
                        {personal.shortBio}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="/projects"
                            className="group px-6 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-sm hover:bg-accent-cyan/20 hover:scale-105 transition-all duration-300 flex items-center gap-2"
                        >
                            View Projects
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/contact"
                            className="px-6 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary font-mono text-sm hover:border-border-accent hover:scale-105 transition-all duration-300"
                        >
                            Get in Touch
                        </Link>
                    </motion.div>

                    {/* Social Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.5 }}
                        className="flex items-center gap-6 mt-10"
                    >
                        <a
                            href={personal.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent-cyan transition-colors text-xl"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href={personal.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-accent-cyan transition-colors text-xl"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href={personal.social.email}
                            className="text-text-muted hover:text-accent-cyan transition-colors text-xl"
                            aria-label="Email"
                        >
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-5 h-8 border-2 border-text-muted rounded-full flex justify-center pt-1"
                    >
                        <div className="w-1 h-2 bg-text-muted rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* ======================== MARQUEE ======================== */}
            <div className="mt-0">
                <Marquee />
            </div>

            {/* ======================== SECTION GRID ======================== */}
            <section className="py-20 px-6">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="mb-10"
                    >
                        <motion.p
                            variants={fadeUp}
                            custom={0}
                            className="font-mono text-xs text-accent-green tracking-wider mb-3"
                        >
                            {"/// EXPLORE"}
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono tracking-tight"
                        >
                            Navigate My{" "}
                            <span className="text-gradient">System</span>
                        </motion.h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                    >
                        {sectionLinks.map((section, i) => (
                            <motion.div key={section.href} variants={fadeUp} custom={i + 2}>
                                <TiltCard>
                                    <Link
                                        href={section.href}
                                        className="group block p-6 rounded-2xl bg-bg-card/80 backdrop-blur-sm border border-border-subtle hover:border-border-accent transition-all duration-300 hover:shadow-[var(--glow-cyan)] h-full relative overflow-hidden"
                                    >
                                        <span className="absolute top-3 right-4 font-mono text-[10px] text-text-muted/30 group-hover:text-accent-cyan/20 transition-colors">
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="text-2xl">{section.icon}</span>
                                            <FaArrowRight className="text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all text-sm" />
                                        </div>
                                        <h3 className="font-mono text-sm font-semibold text-text-primary mb-1.5 group-hover:text-accent-cyan transition-colors">
                                            {section.label}
                                        </h3>
                                        <p className="text-text-secondary text-sm leading-relaxed">
                                            {section.description}
                                        </p>
                                    </Link>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ======================== FOR RECRUITERS ======================== */}
            <section className="py-20 px-6 bg-bg-secondary/30">
                <div className="max-w-[1400px] mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <motion.p
                            variants={fadeUp}
                            custom={0}
                            className="font-mono text-xs text-accent-cyan tracking-wider mb-3"
                        >
                            {"/// FOR_RECRUITERS"}
                        </motion.p>
                        <motion.h2
                            variants={fadeUp}
                            custom={1}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-mono tracking-tight"
                        >
                            Let&apos;s Build Something{" "}
                            <span className="text-gradient">Exceptional</span>
                        </motion.h2>
                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="text-text-secondary text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
                        >
                            I&apos;m a UofT student with hands-on experience in AI/ML,
                            full-stack development, and software quality assurance. From
                            winning hackathons to building production systems for government
                            and startups, I bring technical depth and a builder&apos;s mindset
                            to every project.
                        </motion.p>
                        <motion.div
                            variants={fadeUp}
                            custom={3}
                            className="flex flex-wrap items-center justify-center gap-8"
                        >
                            {Object.entries(personal.stats).map(([key, value]) => (
                                <div key={key} className="text-center">
                                    <div className="text-3xl font-bold text-accent-cyan font-mono">
                                        {String(value)}
                                    </div>
                                    <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">
                                        {key.replace(/([A-Z])/g, " $1").trim()}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        <motion.div variants={fadeUp} custom={4} className="mt-12">
                            <Link
                                href="/resume"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-sm hover:bg-accent-cyan/20 hover:scale-105 transition-all duration-300"
                            >
                                View Resume
                                <FaArrowRight />
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
