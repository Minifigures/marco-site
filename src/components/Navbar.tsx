"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Magnetic } from "@/components/Magnetic";

const mainNavItems = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/experience", label: "EXPERIENCE" },
    { href: "/skills", label: "SKILLS" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
    { href: "/resume", label: "RESUME" },
];

const moreNavItems = [
    { href: "/writing", label: "WRITING" },
    { href: "/presentations", label: "DECKS" },
    { href: "/achievements", label: "GALLERY" },
    { href: "/3d", label: "3D ROOM" },
];

const allNavItems = [...mainNavItems, ...moreNavItems];

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const moreRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setMoreOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
                setMoreOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isMoreActive = moreNavItems.some((item) => pathname === item.href);

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
                <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center">
                    {/* Logo / Brand - Left */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                        <span className="font-mono text-sm font-semibold text-text-primary group-hover:text-accent-cyan transition-colors">
                            MARCO.DEV
                        </span>
                    </Link>

                    {/* Desktop Nav - Center */}
                    <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
                        {mainNavItems.map((item) => (
                            <Magnetic key={item.href} strength={0.15}>
                                <Link
                                    href={item.href}
                                    className={`relative px-4 py-2 font-mono text-xs tracking-wider transition-all duration-200 rounded-lg hover:scale-105 ${
                                        pathname === item.href
                                            ? "text-accent-cyan font-bold"
                                            : "text-text-secondary hover:text-text-primary"
                                    }`}
                                >
                                    {item.label}
                                    {pathname === item.href && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-cyan rounded-full shadow-[0_0_8px_rgba(0,212,255,0.6)]"
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

                        {/* More dropdown */}
                        <div ref={moreRef} className="relative">
                            <button
                                onClick={() => setMoreOpen(!moreOpen)}
                                className={`relative px-4 py-2 font-mono text-xs tracking-wider transition-all duration-200 rounded-lg hover:scale-105 ${
                                    isMoreActive
                                        ? "text-accent-cyan font-bold"
                                        : "text-text-secondary hover:text-text-primary"
                                }`}
                            >
                                MORE
                                <span className="ml-1 text-[10px]">{moreOpen ? "\u25B2" : "\u25BC"}</span>
                                {isMoreActive && (
                                    <motion.div
                                        className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent-cyan rounded-full shadow-[0_0_8px_rgba(0,212,255,0.6)]"
                                    />
                                )}
                            </button>
                            <AnimatePresence>
                                {moreOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 px-1 rounded-xl bg-bg-secondary/95 backdrop-blur-xl border border-border-subtle shadow-xl shadow-black/30 min-w-[160px]"
                                    >
                                        {moreNavItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={`block px-4 py-2.5 font-mono text-xs tracking-wider rounded-lg transition-all ${
                                                    pathname === item.href
                                                        ? "text-accent-cyan bg-accent-cyan/10"
                                                        : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                                                }`}
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right section: Theme Toggle + Mobile Toggle */}
                    <div className="flex items-center gap-3 shrink-0 ml-auto lg:ml-0">
                        <ThemeToggle />

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
                            {allNavItems.map((item, i) => (
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
