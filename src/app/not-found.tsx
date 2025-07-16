"use client"

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
    return (
        <motion.div 
            className="flex flex-col items-center justify-center h-screen"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <h1 className="text-4xl font-bold text-white">404 - Page Not Found</h1>
            <p className="text-lg text-white">The page you are looking for does not exist.</p>
            <Link href="/" className="bg-[#7127ba] text-white px-4 py-2 rounded-md mt-4">Go back to the home page</Link>
        </motion.div>
    )
}