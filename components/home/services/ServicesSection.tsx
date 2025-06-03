"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ServicesSection() {
    const sectionRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) controls.start("visible");
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, [controls]);

    return (
        <section id="services" ref={sectionRef} className="px-6 sm:px-20 py-20">
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={controls}
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 1, ease: "easeOut" },
                    },
                }}
                className="max-w-3xl mx-auto text-center"
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                    Services & Consultations
                </h2>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    I'm always up for a challenge—whether it's building an app from scratch,
                    optimizing your business workflow, or designing a digital brand presence.
                    No problem is too small or too complex.
                </p>

                {/* 👇 New section listing what you offer */}
                <ul className="text-gray-300 text-base sm:text-lg leading-relaxed mt-6 text-left list-disc list-inside mx-auto max-w-md">
                    <li>Website design and development</li>
                    <li>Mobile app creation (iOS & Android)</li>
                    <li>Custom business automation tools</li>
                    <li>Branding and digital identity setup</li>
                    <li>Landing pages and personal portfolios</li>
                    <li>Consultation on tech stacks and architecture</li>
                </ul>

                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mt-6">
                    If you have an idea or issue you'd like help with, email me and we'll
                    schedule a <span className="text-blue-400 font-medium">free consultation</span>.
                    Pricing varies based on the scope and complexity of your project.
                </p>

                <p className="mt-10">
                    <a
                        href="mailto:weavrsoftware@gmail.com"
                        className="inline-block bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition"
                    >
                        Book a Free Consultation
                    </a>
                </p>
            </motion.div>
        </section>
    );
}
