"use client"

import { About } from "@/components/about/About";
import { Footer } from "@/components/footer/Footer";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";

export default function Home() {
    return (
        <>
            <main>
                <Hero />
                <About />
                <Projects />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}