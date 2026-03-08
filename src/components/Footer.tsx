"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-border-subtle bg-bg-secondary/50">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
                            <span className="font-mono text-sm font-semibold">MARCO.DEV</span>
                        </div>
                        <p className="text-text-secondary text-sm leading-relaxed">
                            Software Engineer, AI/ML Builder, and Full-Stack Developer based in Mississauga, Ontario.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-mono text-xs text-text-muted mb-4 tracking-wider">
                            {"/// QUICK_LINKS"}
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                { href: "/projects", label: "Projects" },
                                { href: "/experience", label: "Experience" },
                                { href: "/writing", label: "Writing" },
                                { href: "/skills", label: "Skills" },
                                { href: "/contact", label: "Contact" },
                                { href: "/resume", label: "Resume" },
                            ].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-text-secondary text-sm hover:text-accent-cyan transition-colors font-mono"
                                >
                                    <span className="text-text-muted">&gt; </span>{link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-mono text-xs text-text-muted mb-4 tracking-wider">
                            {"/// CONNECT"}
                        </h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Minifigures"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-secondary hover:text-accent-cyan transition-colors text-xl"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://linkedin.com/in/marco-anthony-ayuste"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-text-secondary hover:text-accent-cyan transition-colors text-xl"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:marco.ayuste@mail.utoronto.ca"
                                className="text-text-secondary hover:text-accent-cyan transition-colors text-xl"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-mono text-xs text-text-muted">
                        <span className="text-accent-green">$</span> echo &quot;© {new Date().getFullYear()} Marco Anthony Ayuste. All rights reserved.&quot;
                    </p>
                    <p className="font-mono text-xs text-text-muted">
                        Built with Next.js, React Three Fiber & Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
