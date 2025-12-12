"use client";

import { motion } from "framer-motion";
import { PackageCheck } from "lucide-react";
import Link from "next/link";

export default function ShipWithUsCTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 opacity-80">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(/background.webp)`
                    }}
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center"
                >
                    {/* Icon */}
                    <div className="mb-6 relative">
                        <PackageCheck className="w-16 h-16 text-primary" />
                    </div>

                    {/* Title */}
                    <h2 className="text-5xl md:text-6xl font-black text-advik-navy mb-6 tracking-tight">
                        Ship with Us
                    </h2>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl">
                        Start shipping with reliability, visibility, and industry expertise.
                    </p>

                    {/* Button */}
                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-primary text-white text-lg font-bold rounded-md hover:bg-red-700 transition-colors shadow-lg shadow-primary/20"
                    >
                        Get Started
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
