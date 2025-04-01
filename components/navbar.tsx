"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: true,
        });
    }, []);

    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // ✅ pastikan sudah client
    }, []);

    useEffect(() => {
        if (mounted) {
            document.documentElement.classList.toggle("dark", darkMode);
        }
    }, [darkMode, mounted]);

    if (!mounted) return null; // ✅ hindari render sebelum mount

    return (
        <>
            <title>Fortofolio</title>
            <nav className={`h-14 flex justify-between items-center px-5 fixed w-full z-10 transition-all ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-950"}`}>
                <div className="flex items-center space-x-4">
                    {/* Toggle Dark Mode Button */}
                    <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                    <h1 className="font-bold italic" data-aos="fade-right">
                        Fortofolio
                    </h1>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex md:items-center md:space-x-5">
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#project">Project</Link></li>
                    <li><Link href="#skills">Skills</Link></li>
                    <li><Link href="#experience">Experience</Link></li>
                    <li><Link href="#feedback">Feedback</Link></li>
                </ul>

                {/* Toggle Button for Mobile */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <ul className="absolute top-14 right-0 w-full bg-gray-950 text-white flex flex-col items-center space-y-3 py-3 md:hidden">
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#project">Project</Link></li>
                        <li><Link href="#skills">Skills</Link></li>
                        <li><Link href="#experience">Experience</Link></li>
                        <li><Link href="#feedback">Feedback</Link></li>
                    </ul>
                )}
            </nav>
        </>
    );
}
