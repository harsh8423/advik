"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

const carouselData = [
    {
        subtitle: "Not Only Loads.",
        title: "Excellence In Freight Management",
        description: "Our team ensures your shipments reach safely and on time with advanced technology, efficient tracking, and tailored logistics support across all transport modes.",
    },
    {
        subtitle: "Your Trusted Partner",
        title: "Global Logistics Partner",
        description: "At Advik Freight, we deliver reliable and cost-effective freight solutions across the globe — from Full Truckload (FTL) and Less Than Truckload (LTL) to Intermodal, Air, and Ocean services.",
    },
    {
        subtitle: "Quality & Precision",
        title: "Precision In Every Shipment",
        description: "Our team ensures your shipments reach safely and on time with advanced technology, efficient tracking, and tailored logistics support across all transport modes.",
    },
    {
        subtitle: "Worldwide Excellence",
        title: "Global Reach, Local Expertise",
        description: "Our team ensures your shipments reach safely and on time with advanced technology, efficient tracking, and tailored logistics support across all transport modes.",
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-[100dvh] overflow-hidden bg-black flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(/images/container-3857611.jpg)`
                    }}
                />
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className="text-lg md:text-2xl font-semibold text-primary mb-4 md:mb-6 tracking-wider uppercase">
                                {carouselData[currentSlide].subtitle}
                            </h2>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-7xl lg:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tight"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                {carouselData[currentSlide].title}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4"
                        >
                            {carouselData[currentSlide].description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-4"
                        >
                            <Link href="/contact" className="w-full md:w-auto px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] flex items-center justify-center gap-2 group">
                                Ship with Us
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

