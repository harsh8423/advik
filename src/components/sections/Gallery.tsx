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

    const containerRef = useRef<HTMLDivElement>(null);

    const getPrevIndex = (index: number) => (index - 1 + images.length) % images.length;
    const getNextIndex = (index: number) => (index + 1) % images.length;

    const slideNext = () => {
        if (isAnimating || !containerRef.current) return;
        setIsAnimating(true);

        const slides = containerRef.current.querySelectorAll('.slide-item');
        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentIndex(getNextIndex(currentIndex));
                setIsAnimating(false);
            }
        });

        // Animate all images sliding to the left
        tl.to(slides[0], {
            x: '-150%',
            opacity: 0,
            scale: 0.7,
            duration: 0.7,
            ease: 'power2.inOut'
        }, 0)
            .to(slides[1], {
                x: '-35%',
                scale: 0.85,
                opacity: 0.6,
                zIndex: 5,
                duration: 0.7,
                ease: 'power2.inOut'
            }, 0)
            .to(slides[2], {
                x: 0,
                scale: 1,
                opacity: 1,
                zIndex: 20,
                duration: 0.7,
                ease: 'power2.inOut'
            }, 0);
    };

    const slidePrev = () => {
        if (isAnimating || !containerRef.current) return;
        setIsAnimating(true);

        const slides = containerRef.current.querySelectorAll('.slide-item');
        const tl = gsap.timeline({
            onComplete: () => {
                setCurrentIndex(getPrevIndex(currentIndex));
                setIsAnimating(false);
            }
        });

        // Animate all images sliding to the right
        tl.to(slides[0], {
            x: 0,
            scale: 1,
            opacity: 1,
            zIndex: 20,
            duration: 0.7,
            ease: 'power2.inOut'
        }, 0)
            .to(slides[1], {
                x: '35%',
                scale: 0.85,
                opacity: 0.6,
                zIndex: 5,
                duration: 0.7,
                ease: 'power2.inOut'
            }, 0)
            .to(slides[2], {
                x: '150%',
                opacity: 0,
                scale: 0.7,
                duration: 0.7,
                ease: 'power2.inOut'
            }, 0);
    };

    useEffect(() => {
        // Initial setup
        if (containerRef.current) {
            const slides = containerRef.current.querySelectorAll('.slide-item');

            gsap.set(slides[0], { x: '-35%', scale: 0.85, opacity: 0.6, zIndex: 5 });
            gsap.set(slides[1], { x: 0, scale: 1, opacity: 1, zIndex: 20 });
            gsap.set(slides[2], { x: '35%', scale: 0.85, opacity: 0.6, zIndex: 5 });

            // Entrance animation
            gsap.from(slides, {
                y: 60,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                delay: 0.2
            });
        }
    }, []);

    // Reset positions after state update
    useEffect(() => {
        if (containerRef.current && !isAnimating) {
            const slides = containerRef.current.querySelectorAll('.slide-item');

            gsap.set(slides[0], { x: '-35%', scale: 0.85, opacity: 0.6, zIndex: 5 });
            gsap.set(slides[1], { x: 0, scale: 1, opacity: 1, zIndex: 20 });
            gsap.set(slides[2], { x: '35%', scale: 0.85, opacity: 0.6, zIndex: 5 });
        }
    }, [currentIndex, isAnimating]);

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
                <div className="relative h-[400px] md:h-[500px] w-full mb-12">
                    <div
                        ref={containerRef}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        {/* Left Image */}
                        <div
                            className="slide-item absolute w-[70%] md:w-[50%] h-[80%] left-1/2 -translate-x-1/2 cursor-pointer"
                            onClick={slidePrev}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                                <Image
                                    src={images[getPrevIndex(currentIndex)]}
                                    alt={`Gallery Image`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/50 backdrop-blur-[0.5px]" />
                            </div>
                        </div>

                        {/* Center Image (Active) */}
                        <div className="slide-item absolute w-[75%] md:w-[55%] h-[90%] left-1/2 -translate-x-1/2">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
                                <Image
                                    src={images[currentIndex]}
                                    alt={`Gallery Image`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Right Image */}
                        <div
                            className="slide-item absolute w-[70%] md:w-[50%] h-[80%] left-1/2 -translate-x-1/2 cursor-pointer"
                            onClick={slideNext}
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                                <Image
                                    src={images[getNextIndex(currentIndex)]}
                                    alt={`Gallery Image`}
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
