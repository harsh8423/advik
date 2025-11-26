"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { gsap } from "gsap";

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
    const [isAnimating, setIsAnimating] = useState(false);

    const leftRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);

    const getPrevIndex = (index: number) => (index - 1 + images.length) % images.length;
    const getNextIndex = (index: number) => (index + 1) % images.length;

    const slideNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        const tl = gsap.timeline();

        // Step 1: Slide all images to the left
        tl.to([leftRef.current, centerRef.current, rightRef.current], {
            x: '-=400',
            duration: 0.6,
            ease: 'power2.inOut'
        })
            // Step 2: Fade out the left image and scale down center
            .to(leftRef.current, {
                opacity: 0,
                scale: 0.7,
                duration: 0.3
            }, 0.2)
            .to(centerRef.current, {
                scale: 0.85,
                opacity: 0.6,
                zIndex: 5,
                duration: 0.4
            }, 0.2)
            // Step 3: Scale up the right image to full size
            .to(rightRef.current, {
                scale: 1,
                opacity: 1,
                zIndex: 20,
                duration: 0.4
            }, 0.2)
            // Step 4: Update index and reset positions
            .call(() => {
                setCurrentIndex(getNextIndex(currentIndex));
                // Reset all positions instantly
                gsap.set(leftRef.current, { x: 0, scale: 0.85, opacity: 0.6, zIndex: 5 });
                gsap.set(centerRef.current, { x: 0, scale: 1, opacity: 1, zIndex: 20 });
                gsap.set(rightRef.current, { x: 0, scale: 0.85, opacity: 0.6, zIndex: 5 });
                setIsAnimating(false);
            });
    };

    const slidePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);

        const tl = gsap.timeline();

        // Step 1: Slide all images to the right
        tl.to([leftRef.current, centerRef.current, rightRef.current], {
            x: '+=400',
            duration: 0.6,
            ease: 'power2.inOut'
        })
            // Step 2: Fade out the right image and scale down center
            .to(rightRef.current, {
                opacity: 0,
                scale: 0.7,
                duration: 0.3
            }, 0.2)
            .to(centerRef.current, {
                scale: 0.85,
                opacity: 0.6,
                zIndex: 5,
                duration: 0.4
            }, 0.2)
            // Step 3: Scale up the left image to full size
            .to(leftRef.current, {
                scale: 1,
                opacity: 1,
                zIndex: 20,
                duration: 0.4
            }, 0.2)
            // Step 4: Update index and reset positions
            .call(() => {
                setCurrentIndex(getPrevIndex(currentIndex));
                // Reset all positions instantly
                gsap.set(leftRef.current, { x: 0, scale: 0.85, opacity: 0.6, zIndex: 5 });
                gsap.set(centerRef.current, { x: 0, scale: 1, opacity: 1, zIndex: 20 });
                gsap.set(rightRef.current, { x: 0, scale: 0.85, opacity: 0.6, zIndex: 5 });
                setIsAnimating(false);
            });
    };

    useEffect(() => {
        // Initial setup
        gsap.set(leftRef.current, { x: 0, scale: 0.85, opacity: 0.6, zIndex: 5 });
        gsap.set(centerRef.current, { x: 0, scale: 1, opacity: 1, zIndex: 20 });
        gsap.set(rightRef.current, { x: 0, scale: 0.85, opacity: 0.6, zIndex: 5 });

        // Entrance animation
        gsap.from([leftRef.current, centerRef.current, rightRef.current], {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2
        });
    }, []);

    return (
        <section className="py-24 bg-dark relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Our <span className="text-primary">Gallery</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A glimpse into our world of logistics, fleet, and operations.
                    </p>
                </div>

                {/* Slider Container */}
                <div className="relative h-[400px] md:h-[500px] w-full mb-12 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center gap-8">
                        {/* Left Image */}
                        <div
                            ref={leftRef}
                            className="w-[70%] md:w-[45%] h-[80%] cursor-pointer flex-shrink-0"
                            onClick={slidePrev}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                                <Image
                                    src={images[getPrevIndex(currentIndex)]}
                                    alt="Gallery"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]" />
                            </div>
                        </div>

                        {/* Center Image (Active) */}
                        <div
                            ref={centerRef}
                            className="w-[75%] md:w-[55%] h-[90%] flex-shrink-0"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
                                <Image
                                    src={images[currentIndex]}
                                    alt="Gallery"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Right Image */}
                        <div
                            ref={rightRef}
                            className="w-[70%] md:w-[45%] h-[80%] cursor-pointer flex-shrink-0"
                            onClick={slideNext}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                                <Image
                                    src={images[getNextIndex(currentIndex)]}
                                    alt="Gallery"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-center gap-4">
                    <button
                        onClick={slidePrev}
                        disabled={isAnimating}
                        className="group flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary hover:to-accent text-white rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold hidden md:inline">Previous</span>
                    </button>

                    <button
                        onClick={slideNext}
                        disabled={isAnimating}
                        className="group flex items-center gap-2 px-6 py-4 bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary hover:to-accent text-white rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 shadow-lg hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
                    >
                        <span className="font-semibold hidden md:inline">Next</span>
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
}
