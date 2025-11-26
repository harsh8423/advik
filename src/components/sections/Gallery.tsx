"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const images = [
    "/images/5f3dd70103bf69f2f89f6329_reefer-1.jpg",
    "/images/8407e3d0da86098b3d9c728a51102097.jpg",
    "/images/MSC-Seva-in-the-Port-of-Long-Beach.jpg",
    "/images/container-3857611.jpg",
    "/images/peterbilt-2650184_1920.jpg",
    "/images/port-7370411_1280.jpg",
    "/images/premium_photo-1664695368767-c42483a0bda1.avif",
    "/images/premium_photo-1733306679049-88a8bf1c2411.avif",
];

export default function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const slidePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const getPosition = (index: number) => {
        if (index === currentIndex) return "center";

        // Calculate relative index accounting for wrap-around
        const length = images.length;
        // We want to know if 'index' is the immediate left or right neighbor
        // (currentIndex - 1 + length) % length === index  => Left neighbor
        // (currentIndex + 1) % length === index          => Right neighbor

        const prevIndex = (currentIndex - 1 + length) % length;
        const nextIndex = (currentIndex + 1) % length;

        if (index === prevIndex) return "left";
        if (index === nextIndex) return "right";

        return "hidden";
    };

    const variants: Variants = {
        center: {
            x: "0%",
            scale: 1,
            zIndex: 20,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeInOut" }
        },
        left: {
            x: "-60%",
            scale: 0.85,
            zIndex: 10,
            opacity: 0.6,
            transition: { duration: 0.6, ease: "easeInOut" }
        },
        right: {
            x: "60%",
            scale: 0.85,
            zIndex: 10,
            opacity: 0.6,
            transition: { duration: 0.6, ease: "easeInOut" }
        },
        hidden: (custom: number) => ({
            x: custom > 0 ? "120%" : "-120%", // Exit to the side it came from or is going to
            scale: 0.5,
            zIndex: 0,
            opacity: 0,
            transition: { duration: 0.6, ease: "easeInOut" }
        })
    };

    return (
        <section className="py-16 md:py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
                        Our <span className="text-primary">Gallery</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                        A glimpse into our world of logistics, fleet, and operations.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative h-[300px] md:h-[500px] w-full mb-8 md:mb-12 flex justify-center items-center perspective-1000">
                    <div className="relative w-full h-full max-w-5xl flex justify-center items-center">
                        {images.map((src, index) => {
                            const position = getPosition(index);

                            let custom = 0;
                            // Simple heuristic: shortest distance
                            const diff = (index - currentIndex + images.length) % images.length;

                            if (diff > images.length / 2) {
                                // It's effectively on the left side
                                custom = -1;
                            } else {
                                custom = 1;
                            }

                            return (
                                <motion.div
                                    key={index}
                                    variants={variants}
                                    initial={false}
                                    animate={position}
                                    custom={custom}
                                    className="absolute w-[85%] md:w-[55%] aspect-[16/10] rounded-2xl overflow-hidden border border-border shadow-2xl will-change-transform"
                                    style={{
                                        transformOrigin: "center center"
                                    }}
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={index === currentIndex}
                                        />
                                        {/* Overlay for non-center items */}
                                        <motion.div
                                            className="absolute inset-0 bg-black"
                                            animate={{ opacity: position === 'center' ? 0 : 0.4 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={slidePrev}
                        className="group flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary hover:to-accent text-foreground hover:text-primary-foreground rounded-xl border border-border hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold hidden md:inline">Previous</span>
                    </button>

                    <button
                        onClick={slideNext}
                        className="group flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary hover:to-accent text-foreground hover:text-primary-foreground rounded-xl border border-border hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-primary/50 hover:scale-105"
                    >
                        <span className="font-semibold hidden md:inline">Next</span>
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
