"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Code, Database, Server, Github } from "lucide-react"
import { AboutText } from "@/data/about"

const skills = [
    { icon: <Code className="w-9 h-9 text-cyan-400" />, label: "Front-end" },
    { icon: <Server className="w-9 h-9 text-green-500" />, label: "Back-end" },
    { icon: <Database className="w-9 h-9 text-yellow-400" />, label: "Database" },
    { icon: <Github className="w-9 h-9 text-white" />, label: "GitHub" },
]

export function About() {
    return (
        <motion.section
            id="about"
            className="flex flex-col md:flex-row items-center justify-center h-screen gap-10 md:gap-20 max-w-7xl mx-auto px-4 py-10
            transition-colors duration-200"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Imagem de perfil */}
            <div className="flex-shrink-0">
                <Image
                    src="/me.png"
                    alt="Foto de perfil"
                    width={320}
                    height={420}
                    className="w-60 h-60 md:w-80 md:h-80 rounded-lg border-4 border-[#7127ba] shadow-lg object-cover"
                />
            </div>

            {/* Conteúdo textual */}
            <div className="flex flex-col max-w-2xl w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About me</h2>
                <h3 className="text-lg md:text-xl text-[#7127ba] font-semibold mb-4">Full Stack Developer</h3>

                <div className="text-justify text-gray-400 text-md leading-relaxed space-y-4 mb-6">
                    {AboutText}
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-6 mb-8">
                    {skills.map(({ icon, label }, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center hover:animate-pulse cursor-pointer"
                        >
                            {icon}
                            <span className="text-gray-200 mt-2 text-xs md:text-sm">{label}</span>
                        </div>
                    ))}
                </div>
                <Link
                    href="https://github.com/vinnytherobot"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#7127ba] hover:bg-[#5a2096] text-white font-semibold px-6 py-3 rounded-md shadow-lg transition-colors duration-200 w-fit"
                >
                    <Github className="w-5 h-5" />
                    Visit my GitHub
                </Link>
            </div>
        </motion.section>
    )
}
