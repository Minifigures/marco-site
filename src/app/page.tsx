"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import Marquee from "@/components/Marquee";
import { personal } from "@/data/personal";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";

const HeroScene = dynamic(() => import("@/components/three/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg-primary" />,
});

const sectionLinks = [
  { href: "/projects", label: "PROJECTS.DIR", description: "Hackathon winners & production apps", icon: "📂" },
  { href: "/experience", label: "EXPERIENCE.LOG", description: "From startups to government", icon: "📋" },
  { href: "/writing", label: "WRITING.DOC", description: "Research & analysis papers", icon: "📝" },
  { href: "/skills", label: "SKILLS.SH", description: "Tech stack & proficiency", icon: "⚡" },
  { href: "/presentations", label: "DECKS.PPT", description: "Talks & slide decks", icon: "📊" },
  { href: "/achievements", label: "GALLERY.IMG", description: "Events, wins & moments", icon: "🏆" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: i * 0.1 },
  }),
};

export default function HomePage() {
  return (
    <div className="relative">
      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <HeroScene />

        {/* Grid overlay */}
        <div className="absolute inset-0 grid-bg opacity-40" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border-accent bg-bg-secondary/50 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <span className="font-mono text-xs text-text-secondary tracking-wider">
              SYSTEM STATUS: ONLINE
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            <span className="text-gradient">Marco</span>{" "}
            <span className="text-text-primary">Ayuste</span>
          </motion.h1>

          {/* Typing text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="font-mono text-lg md:text-xl text-accent-cyan mb-8 h-8"
          >
            <span className="text-accent-green mr-2">&gt;</span>
            <Typewriter words={personal.roles} speed={80} deleteSpeed={40} delayBetween={2500} />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-text-secondary text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {personal.shortBio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/projects"
              className="group px-6 py-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-sm hover:bg-accent-cyan/20 transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-bg-tertiary border border-border-subtle text-text-primary font-mono text-sm hover:border-border-accent transition-all duration-300"
            >
              Get in Touch
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors text-xl" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-accent-cyan transition-colors text-xl" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={personal.social.email} className="text-text-muted hover:text-accent-cyan transition-colors text-xl" aria-label="Email">
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
      <Marquee />

      {/* ======================== SECTION GRID ======================== */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12"
          >
            <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-green tracking-wider mb-2">
              {"/// EXPLORE"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold">
              Navigate My{" "}
              <span className="text-gradient">System</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {sectionLinks.map((section, i) => (
              <motion.div key={section.href} variants={fadeUp} custom={i + 2}>
                <Link
                  href={section.href}
                  className="group block p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-accent transition-all duration-300 hover:shadow-[var(--glow-cyan)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-2xl">{section.icon}</span>
                    <FaArrowRight className="text-text-muted group-hover:text-accent-cyan group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-mono text-sm font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                    {section.label}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {section.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ======================== FOR RECRUITERS ======================== */}
      <section className="py-24 px-6 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeUp} custom={0} className="font-mono text-xs text-accent-cyan tracking-wider mb-2">
              {"/// FOR_RECRUITERS"}
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-4xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Exceptional</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-text-secondary text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              I&apos;m a UofT student with hands-on experience in AI/ML, full-stack development, and software quality assurance.
              From winning hackathons to building production systems for government and startups,
              I bring technical depth and a builder&apos;s mindset to every project.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap items-center justify-center gap-6">
              {Object.entries(personal.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-2xl font-bold text-accent-cyan font-mono">{String(value)}</div>
                  <div className="text-xs text-text-muted font-mono uppercase tracking-wider mt-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} custom={4} className="mt-10">
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-sm hover:bg-accent-cyan/20 transition-all duration-300"
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
