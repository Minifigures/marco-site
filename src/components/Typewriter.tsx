"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    words: string[];
    speed?: number;
    deleteSpeed?: number;
    delayBetween?: number;
}

export default function Typewriter({
    words,
    speed = 100,
    deleteSpeed = 50,
    delayBetween = 2000,
}: TypewriterProps) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];

        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    setText(currentWord.substring(0, text.length + 1));
                    if (text.length + 1 === currentWord.length) {
                        setTimeout(() => setIsDeleting(true), delayBetween);
                    }
                } else {
                    setText(currentWord.substring(0, text.length - 1));
                    if (text.length === 0) {
                        setIsDeleting(false);
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timeout);
    }, [text, wordIndex, isDeleting, words, speed, deleteSpeed, delayBetween]);

    return (
        <span>
            {text}
            <span className="typewriter-cursor" />
        </span>
    );
}
