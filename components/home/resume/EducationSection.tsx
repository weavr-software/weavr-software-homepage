// File: /components/Resume/EducationSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./educationShimmer.module.css";

function useTypingEffect(text: string, shouldStart: boolean, speed = 30) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        if (!shouldStart) return;

        let current = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, current + 1));
            current++;
            if (current >= text.length) clearInterval(interval);
        }, speed);

        return () => clearInterval(interval);
    }, [shouldStart, text, speed]);

    return displayedText;
}

export default function EducationSection() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const heading = useTypingEffect("Education", visible, 30);
    const ugaSchool = useTypingEffect("University of Georgia", visible, 30);
    const ugaDegree = useTypingEffect("B.S. in Computer Science, General Business Minor", visible, 30);
    const ugaDates = useTypingEffect("2021 – 2025", visible, 30);
    const ugaDesc = useTypingEffect("Studied computer science, gaining a wide range of technical skills across software engineering, web development, and systems design. Minored in general business, which helped me understand the language of business and how to succeed in areas like marketing, management, and finance.", visible, 10);
    const faSchool = useTypingEffect("Frederica Academy", visible, 30);
    const faDegree = useTypingEffect("High School Diploma", visible, 30);
    const faDates = useTypingEffect("Graduated 2021", visible, 30);
    const faDesc = useTypingEffect("Took early coding classes in Java, JavaScript, and Python. These courses sparked my passion for programming and laid the foundation for my career in software engineering.", visible, 10);

    return (
        <section ref={sectionRef} className="px-6 sm:px-20 py-20">
            <h2 className="text-2xl sm:text-4xl font-bold text-white text-center  mb-12">
                {heading}
            </h2>
            <div className="space-y-10">
                <div className="flex items-start gap-4 border-l-4 border-blue-500 pl-6">
                    <Image src="/uga-logo.png" alt="UGA Logo" width={40} height={40} className="mt-1" />
                    <div>
                        <h3 className={`text-xl font-semibold ${styles.ugaShimmer}`}>{ugaSchool}</h3>
                        <p className="text-gray-300 italic">{ugaDegree}</p>
                        <p className="text-gray-400">{ugaDates}</p>
                        <p className="text-gray-400 text-sm max-w-2xl mt-2">{ugaDesc}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 border-l-4 border-blue-500 pl-6">
                    <Image src="/frederica-logo.png" alt="Frederica Academy Logo" width={40} height={40} className="mt-1" />
                    <div>
                        <h3 className={`text-xl font-semibold ${styles.fredericaShimmer}`}>{faSchool}</h3>
                        <p className="text-gray-300 italic">{faDegree}</p>
                        <p className="text-gray-400">{faDates}</p>
                        <p className="text-gray-400 text-sm max-w-2xl mt-2">{faDesc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
