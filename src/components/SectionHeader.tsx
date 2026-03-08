"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    label: string;
    description?: string;
}

export function SectionHeader({ label, description }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-20"
        >
            <div className="flex items-baseline gap-3 md:gap-4 mb-6">
                <span className="text-accent-green font-mono text-2xl md:text-4xl lg:text-5xl shrink-0">
                    &gt;
                </span>
                <h1 className="font-mono text-4xl md:text-6xl lg:text-8xl font-bold text-text-primary tracking-tighter leading-none">
                    {label}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-[3px] h-[0.7em] bg-accent-cyan ml-1 align-middle"
                    />
                </h1>
            </div>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "6rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] bg-accent-cyan mb-8 ml-8 md:ml-14"
            />
            {description && (
                <p className="text-text-secondary text-lg max-w-2xl leading-relaxed ml-8 md:ml-14">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
