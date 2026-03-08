"use client";

import { useEffect } from "react";

const titles = [
    "Marco Ayuste",
    "Software Engineer",
    "AI/ML Builder",
    "Let's build something",
];

export default function DynamicTitle() {
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = (index + 1) % titles.length;
            document.title = titles[index];
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return null;
}
