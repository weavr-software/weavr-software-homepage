"use client";

import { useEffect, useState } from "react";

const phrases = ["web platforms", "mobile apps", "cloud solutions", "AI systems"];

export default function AnimatedText() {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopIndex, setLoopIndex] = useState(0);

    useEffect(() => {
        const currentPhrase = phrases[loopIndex % phrases.length];
        const delay = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            setText((prev) =>
                isDeleting
                    ? currentPhrase.substring(0, prev.length - 1)
                    : currentPhrase.substring(0, prev.length + 1)
            );

            if (!isDeleting && text === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 1000);
            }

            if (isDeleting && text === "") {
                setIsDeleting(false);
                setLoopIndex((prev) => prev + 1);
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopIndex]);

    return (
        <span className="text-blue-500">
      {text}
            <span className="animate-pulse">|</span>
    </span>
    );
}