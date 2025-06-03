"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./animatedText";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden">
            <main className="relative z-10 px-6 py-20 sm:px-20 text-center sm:text-left flex flex-col items-center sm:items-start gap-8">
                <Image
                    src="/LOGO.png"
                    alt="Weavr Software logo"
                    width={180}
                    height={40}
                    priority
                />

                <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
                    We build <AnimatedText />
                </h1>

                <p className="max-w-xl text-gray-300 text-sm sm:text-base">
                    Weavr Software is a boutique consulting firm helping startups and enterprises
                    launch scalable products—on time, on budget, and with pixel-perfect precision.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                        href="#services"
                        className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition"
                    >
                        Contact Us
                    </Link>
                    <Link
                        href="#client-projects"
                        className="border border-white px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition"
                    >
                        View Our Work
                    </Link>
                </div>
            </main>
        </section>
    );
}
