// File: /components/Resume/ClientProjectsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const clientProjects = [
    {
        name: "Weejay",
        url: "https://wee-jay.com",
        logo: "/weejay-landing.png",
        screenshot: "/weejay-landing.png",
        description:
            "Weejay is a dynamic DJ agency brand website showcasing music, events, and booking options in a sleek, responsive layout.",
    },
    {
        name: "Taylor Made Training",
        url: "https://tmtssi.com",
        logo: "/tmtssi-landing.png",
        screenshot: "/tmtssi-landing.png",
        description:
            "Taylor Made Training is a professional fitness and coaching site offering, coach profiles, a photo gallery, and testimonials.",
    },
];

export default function ClientProjectsSection() {
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
        <section id="client-projects" ref={sectionRef} className="px-6 xsm:px-20 py-20 ">
            <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-16">
                Client Projects
            </h2>
            <p className="text-center max-w-xl mx-auto mb-12">
                Here are some of the client projects I have worked on, showcasing my ability to create
                visually appealing and functional websites that meet client needs.
            </p>
            <div className="relative w-full max-w-3xl mx-auto flex flex-col gap-20 items-center">
                {clientProjects.map((client, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 80 }}
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1.2,
                                    delay: index * 0.4,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        className="text-center flex flex-col items-center gap-4"
                    >
                        <Link
                            href={client.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl border border-blue-500 shadow-xl">
                                <Image
                                    src={client.screenshot}
                                    alt={`${client.name} landing page`}
                                    width={500}
                                    height={300}
                                    className="transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="mt-4 text-xl font-semibold text-blue-400 group-hover:underline">
                                {client.name}
                            </h3>
                        </Link>
                        <p className="text-sm text-gray-300 max-w-md">{client.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
