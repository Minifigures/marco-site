"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const stored = localStorage.getItem("marco-theme");
        if (stored === "light") {
            setIsDark(false);
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            localStorage.setItem("marco-theme", "dark");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            localStorage.setItem("marco-theme", "light");
        }
    };

    return (
        <button
            onClick={toggle}
            className="p-2 rounded-lg border border-border-subtle hover:border-border-accent text-text-muted hover:text-accent-cyan transition-all"
            aria-label="Toggle theme"
        >
            {isDark ? <FaSun className="text-sm" /> : <FaMoon className="text-sm" />}
        </button>
    );
}
