// File: /components/Resume/SkillsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Python", icon: "/icons/python.png" },
            { name: "JavaScript", icon: "/icons/javascript.png" },
            { name: "TypeScript", icon: "/icons/typescript.png" },
            { name: "Java", icon: "/icons/java.png" },
            { name: "Kotlin", icon: "/icons/kotlin.png" },
        ],
    },
    {
        category: "Frameworks",
        items: [
            { name: "React", icon: "/icons/react.png" },
            { name: "Next.js", icon: "/icons/nextjs.png" },
            { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
            { name: "Spring Boot", icon: "/icons/springboot.png" },
            { name: "Angular", icon: "/icons/angular.png" },
        ],
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: "/icons/git.png" },
            { name: "Firebase", icon: "/icons/firebase.png" },
            { name: "Figma", icon: "/icons/figma.png" },
            { name: "Postman", icon: "/icons/postman.png" },
        ],
    },
];

export default function SkillsSection() {
    const sectionRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [controls]);

    return (
        <section ref={sectionRef} className="px-6 sm:px-20 py-20 ">
            <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-16">
                Skills & Tools
            </h2>
            <div className="flex flex-col gap-12 items-center">
                {skills.map((section, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1.0,
                                    delay: index * 0.3,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        className="w-full max-w-4xl"
                    >
                        <h3 className="text-xl text-blue-400 font-semibold mb-4 text-center">
                            {section.category}
                        </h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {section.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex flex-col items-center gap-2"
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 2,
                                        ease: "easeInOut",
                                        delay: i * 0.1,
                                    }}
                                >
                                    <div className="w-12 h-12 relative">
                                        <Image
                                            src={item.icon}
                                            alt={`${item.name} icon`}
                                            width={64} height={64}

                                        />
                                    </div>
                                    <span className="text-sm text-gray-300">{item.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
