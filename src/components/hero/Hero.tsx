"use client"

import Link from "next/link"
import { Button } from "../ui/button"

export function Hero() {
    return (
        <section className="flex flex-col items-center justify-center h-screen px-4">
            <div className="flex flex-col items-center justify-center w-full max-w-3xl">
                <h1 
                    className="animate-typing text-3xl sm:text-4xl md:text-5xl text-white font-bold text-center"
                >
                    Hi, I&apos;m <span className="text-[#7127ba]">João Vinny</span>!
                </h1>
                <p className="text-sm sm:text-base text-gray-400 mt-4 text-center">
                    I&apos;m a full stack developer with a passion for building web applications.
                </p>

                <Button 
                    variant="outline" 
                    className="bg-[#7127ba] text-white border-none hover:bg-[#7127ba]/80 hover:text-white mt-8 px-6 py-2 text-base sm:text-lg"
                >
                    <Link href="/#about">See more about me!</Link>
                </Button>
            </div>
        </section>
    )
}