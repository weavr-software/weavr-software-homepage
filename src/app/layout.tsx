// File: /app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Weavr Software",
    description: "Scalable solutions built on time & with precision.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white font-sans min-h-screen flex flex-col antialiased`}>
        <Header />
        <div className="backgroundWrapper">
            <div className="gradientBackground" />
        </div>
        <main className="flex-1">{children}</main>
        <Footer />
        </body>
        </html>
    );
}
