"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Magnetic } from "@/components/Magnetic";

const navItems = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/skills", label: "SKILLS" },
    { href: "/writing", label: "WRITING" },
    { href: "/presentations", label: "DECKS" },
    { href: "/achievements", label: "GALLERY" },
    { href: "/3d", label: "3D ROOM" },
    { href: "/contact", label: "CONTACT" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl ${
                    scrolled
                        ? "bg-black/50 border-b border-white/5 shadow-lg shadow-black/20"
                        : "bg-black/20 border-b border-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    {/* Logo / Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                        <span className="font-mono text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
                            MARCO.DEV
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {navItems.map((item) => (
                            <Magnetic key={item.href} strength={0.15}>
                                <Link
                                    href={item.href}
                                    className={`relative px-2.5 py-2 font-mono text-[11px] tracking-wider transition-all duration-200 rounded-lg hover:scale-105 ${
                                        pathname === item.href
                                            ? "text-accent-cyan"
                                            : "text-text-secondary hover:text-text-primary"
                                    }`}
                                >
                                    <span
                                        className={`mr-1 ${
                                            pathname === item.href
                                                ? "text-accent-green"
                                                : "text-text-muted"
                                        }`}
                                    >
                                        &gt;
                                    </span>
                                    {item.label}
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent-cyan rounded-full"
                                            transition={{
                                                type: "spring",
                                                stiffness: 500,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    {/* Right section: Theme Toggle + Window Controls + Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {/* Window dots */}
                        <div className="hidden md:flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-accent-rose/80" />
                            <div className="w-3 h-3 rounded-full bg-accent-amber/80" />
                            <div className="w-3 h-3 rounded-full bg-accent-green/80" />
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden flex flex-col gap-1.5 p-2"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                className="block w-5 h-[2px] bg-text-primary"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="block w-5 h-[2px] bg-text-primary"
                            />
                            <motion.span
                                animate={
                                    isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                                }
                                className="block w-5 h-[2px] bg-text-primary"
                            />
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl lg:hidden"
                    >
                        <div className="flex flex-col items-start justify-center h-full px-8 gap-2">
                            <div className="font-mono text-xs text-text-muted mb-6">
                                {"/// NAVIGATION.SYS"}
                            </div>
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    <Link
                                        href={item.href}
                                        className={`block py-3 font-mono text-2xl transition-colors ${
                                            pathname === item.href
                                                ? "text-accent-cyan"
                                                : "text-text-secondary hover:text-text-primary"
                                        }`}
                                    >
                                        <span className="text-accent-green mr-3 text-lg">
                                            &gt;
                                        </span>
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                            <div className="mt-8 font-mono text-xs text-text-muted">
                                <span className="text-accent-green">●</span> SYSTEM STATUS: ONLINE
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
