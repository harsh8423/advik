"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingCube from '@/components/ui/RotatingCube';
import { Ship, Train, Container, Truck, Clock, ShieldCheck } from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function DrayageHero() {
    const sectionRef = useRef<HTMLElement>(null);

    const cubeFaces = {
        front: {
            title: 'Port-to-Warehouse',
            description: 'Efficient movement of containers between seaports and storage facilities.',
            icon: <Ship size={48} strokeWidth={1.5} />,
        },
        right: {
            title: 'Rail Terminal Services',
            description: 'Handling intermodal containers between rail yards and local distribution centers.',
            icon: <Train size={48} strokeWidth={1.5} />,
        },
        back: {
            title: 'Container Handling',
            description: 'Safe and compliant loading, unloading, and repositioning of cargo containers.',
            icon: <Container size={48} strokeWidth={1.5} />,
        },
        left: {
            title: 'Short-Haul Delivery',
            description: 'Quick, reliable drayage services over short distances to keep supply chains moving.',
            icon: <Truck size={48} strokeWidth={1.5} />,
        },
        top: {
            title: 'Real-Time Tracking',
            description: 'Monitor container locations and status with advanced logistics technology.',
            icon: <Clock size={48} strokeWidth={1.5} />,
        },
        bottom: {
            title: 'Enhanced Security',
            description: 'Containers handled by trained personnel to prevent damage or loss.',
            icon: <ShieldCheck size={48} strokeWidth={1.5} />,
        },
    };

    useEffect(() => {
        if (!sectionRef.current) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
            return; // Don't pin if user prefers reduced motion
        }

        // Pin the section while cube rotates
        const pinTrigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=80%', // Pin for 80% viewport height - faster unpin, all faces visible
            pin: true,
            pinSpacing: true,
            scrub: 1,
        });

        return () => {
            pinTrigger.kill();
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full min-h-screen bg-background flex items-center justify-center py-20 overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#ff1a1a] blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#ff3b3b] blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-semibold text-primary tracking-wider uppercase">
                            Efficient Short-Distance Transport
                        </h2>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            Drayage Services
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            <span className="text-primary font-semibold">Advik Freight</span> provides reliable drayage services for efficient container and cargo movement between ports, rail terminals, and distribution centers. Our solutions streamline your supply chain with precision and timely transfers for all your intermodal needs.
                        </p>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                            <button className="px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:bg-red-700 transition-all flex items-center gap-2 group">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 bg-transparent border border-border text-foreground text-lg font-bold rounded-full hover:bg-muted/10 transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right - 3D Cube */}
                    <div className="flex items-center justify-center">
                        <RotatingCube faces={cubeFaces} />
                    </div>
                </div>
            </div>
        </section>
    );
}
