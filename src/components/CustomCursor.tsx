"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CHARS = ["M", "A", "R", "C", "O", "{", "}", "<", ">", "/", "*", "#", "$", "0", "1"];

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springX = useSpring(cursorX, { stiffness: 500, damping: 28 });
    const springY = useSpring(cursorY, { stiffness: 500, damping: 28 });

    const [charIndex, setCharIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [visible, setVisible] = useState(false);
    const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
    const trailId = useRef(0);
    const isTouchRef = useRef(false);

    useEffect(() => {
        isTouchRef.current = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isTouchRef.current) return;

        document.body.style.cursor = "none";
        setVisible(true);

        return () => {
            document.body.style.cursor = "";
        };
    }, []);

    useEffect(() => {
        if (isTouchRef.current) return;
        const interval = setInterval(() => {
            if (!isHovering) {
                setCharIndex((prev) => (prev + 1) % CHARS.length);
            }
        }, 500);
        return () => clearInterval(interval);
    }, [isHovering]);

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            trailId.current += 1;
            const id = trailId.current;
            setTrail((prev) => [...prev.slice(-3), { x: e.clientX, y: e.clientY, id }]);
        },
        [cursorX, cursorY]
    );

    useEffect(() => {
        if (isTouchRef.current) return;

        window.addEventListener("mousemove", handleMouseMove);

        const handleMouseDown = () => {
            setIsClicking(true);
            setTimeout(() => setIsClicking(false), 150);
        };
        window.addEventListener("mousedown", handleMouseDown);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const interactive = target.closest(
                "a, button, [role='button'], input, textarea, select, .cursor-pointer"
            );
            setIsHovering(!!interactive);
        };
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [handleMouseMove]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTrail((prev) => prev.slice(-4));
        }, 200);
        return () => clearInterval(interval);
    }, []);

    if (!visible) return null;

    const displayChar = isHovering ? ">" : CHARS[charIndex];

    return (
        <>
            {trail.slice(0, -1).map((point, i) => (
                <motion.div
                    key={point.id}
                    className="fixed top-0 left-0 pointer-events-none z-[9998] font-mono text-sm"
                    initial={{ opacity: 0.4 - i * 0.1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                        x: point.x - 6,
                        y: point.y - 10,
                        color: "var(--accent-cyan)",
                    }}
                >
                    {displayChar}
                </motion.div>
            ))}

            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] font-mono font-bold select-none"
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                    color: isClicking ? "#ffffff" : "var(--accent-cyan)",
                    scale: isHovering ? 2 : 1,
                    fontSize: "16px",
                }}
            >
                {displayChar}
            </motion.div>
        </>
    );
}
