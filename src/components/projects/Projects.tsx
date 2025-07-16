"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader } from "../ui/card"
import Image from "next/image"
import Link from "next/link"


interface Project {
    title: string
    description: string
    path: string;
    url: string
}

const projects: Project[] = [
    {
        title: "Chess Time Controller",
        description: "A web app that allows you to manage chess match timers — simple, intuitive, and responsive.",
        path: "/mockup-preview-1.png",
        url: "https://chesstimecontroller.vercel.app/",
    },
    {
        title: "Praxys",
        description: "An interactive dashboard for managing personal projects with built-in analytics and automations.",
        path: "/mockup-preview-2.png",
        url: "https://praxys.vercel.app/",
    },
    {
        title: "Robot Cloud",
        description: "A web app that allows you to manage your photos and images with a simple and intuitive interface.",
        path: "/mockup-preview-3.png",
        url: "https://robotcloud.vercel.app/",
    },
    {
        title: "Portfolio",
        description: "An online portfolio of my projects and skills.",
        path: "/mockup-preview-4.png",
        url: "https://vinnytherobot.vercel.app/",
    }
]

function ProjectCard({ title, description, url, path }: Project) {
    return (
        <Card className="bg-[#351457] border-none transition-all rounded-2xl shadow-lg overflow-hidden">
            <CardHeader className="text-2xl font-semibold text-white px-6 pt-6">
                {title}
            </CardHeader>
            <CardDescription className="text-base text-zinc-300 px-6">
                {description}
            </CardDescription>
            <CardContent className="p-4">
                <div className="w-full aspect-video rounded-md overflow-hidden shadow-md border border-white/10">
                    <Link href={url} target="_blank">
                        <Image
                            src={path}
                            title={title}
                            className="w-full h-full rounded-md"
                            alt={title}
                            width={1000}
                            height={1000}
                            priority
                        />
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

export function Projects() {
    return (
        <motion.section
            id="projects"
            className="flex mt-10 flex-col items-center justify-center min-h-screen py-16 px-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                Featured Projects
            </h2>

            <div className="grid gap-8 w-full max-w-6xl grid-cols-1 md:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </motion.section>
    )
}
