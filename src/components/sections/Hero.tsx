"use client";

import { motion, AnimatePresence } from "framer-motion";

import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const carouselData = [
    {
        subtitle: "Not Only Loads.",
        title: "Excellence In Freight Management",
        description: "Our team ensures your shipments reach safely and on time with advanced technology, efficient tracking, and tailored logistics support across all transport modes.",
        image: "/images/container-3857611.jpg"
    },
    {
        subtitle: "Your Trusted Partner",
        title: "Global Logistics Partner",
        description: "At Advik Freight, we deliver reliable and cost-effective freight solutions across the globe — from Full Truckload (FTL) and Less Than Truckload (LTL) to Intermodal, Air, and Ocean services.",
        image: "/images/peterbilt-2650184_1920.jpg"
    },
    {
        subtitle: "Quality & Precision",
        title: "Precision In Every Shipment",
        description: "Our team ensures your shipments reach safely and on time with advanced technology, efficient tracking, and tailored logistics support across all transport modes.",
        image: "/images/port-7370411_1280.jpg"
    },
    {
        subtitle: "Worldwide Excellence",
        title: "Global Reach, Local Expertise",
        description: "Our team ensures your shipments reach safely and on time with advanced technology, efficient tracking, and tailored logistics support across all transport modes.",
        image: "/images/MSC-Seva-in-the-Port-of-Long-Beach.jpg"
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play carousel
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % carouselData.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [isPaused]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Slideshow */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                            backgroundImage: `url(${carouselData[currentSlide].image})`
                        }}
                    />
                </motion.div>
            </AnimatePresence>

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
                            <h2 className="text-xl md:text-2xl font-semibold text-primary mb-6 tracking-wider uppercase">
                                {carouselData[currentSlide].subtitle}
                            </h2>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                                {carouselData[currentSlide].title}
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed"
                        >
                            {carouselData[currentSlide].description}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-col md:flex-row items-center justify-center gap-4"
                        >
                            <button className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(230,0,0,0.4)] hover:shadow-[0_0_30px_rgba(230,0,0,0.6)] flex items-center gap-2 group">
                                Read More
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-white/20 text-white text-lg font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm">
                                Get a Quote
                            </button>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

                {/* Carousel Navigation Dots */}
                <div className="flex items-center justify-center gap-3 mt-12">
                    {carouselData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 ${currentSlide === index
                                ? "w-12 h-2 bg-primary rounded-full"
                                : "w-2 h-2 bg-white/30 hover:bg-white/50 rounded-full"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
            </button>

        </section>
    );
}
