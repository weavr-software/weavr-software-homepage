// File: /components/Resume/WorkExperienceSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./educationShimmer.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WorkExperienceSection() {
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

    const jobs = [
        {
            company: "Oracle",
            role: "Incoming Software Engineer",
            dates: "Starting July 2025",
            logo: "/oracle-logo.png",
            shimmer: styles.oracleShimmer,
        },
        {
            company: "ADP",
            role: "Software Engineer Intern",
            dates: "Summer 2024",
            logo: "/adp-logo.png",
            shimmer: styles.adpShimmer,
        },
    ];

    return (
        <section ref={sectionRef} className="px-6 sm:px-20 py-20">
            <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-16">
                Work Experience
            </h2>
            <div className="relative max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center">

            {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: index * 0.4, type: "spring", stiffness: 120 }}
                        className="flex items-center gap-4"
                    >
                        <Image src={job.logo} alt={`${job.company} logo`} width={40} height={40} />
                        <div className="flex flex-col">
                            <h3 className={`text-lg font-bold ${job.shimmer}`}>{job.company}</h3>
                            <p className="text-gray-300 italic text-sm">{job.role}</p>
                            <p className="text-gray-400 text-xs">{job.dates}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
