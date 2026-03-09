"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    label: string;
    description?: string;
}

export function SectionHeader({ label, description }: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 mb-16"
        >
            <div className="flex items-baseline gap-3 mb-4">
                <span className="text-accent-green font-mono text-xl md:text-2xl lg:text-3xl shrink-0">
                    &gt;
                </span>
                <h1 className="font-mono text-3xl md:text-5xl lg:text-6xl font-bold text-text-primary tracking-tighter leading-none">
                    {label}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-[3px] h-[0.65em] bg-accent-cyan ml-1 align-middle"
                    />
                </h1>
            </div>
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "5rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] bg-accent-cyan mb-5"
            />
            {description && (
                <p className="text-text-secondary text-base md:text-lg max-w-2xl leading-relaxed">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
