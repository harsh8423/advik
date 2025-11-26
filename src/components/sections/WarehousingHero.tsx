"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RotatingCube from '@/components/ui/RotatingCube';
import { Package, RefreshCw, BarChart3, Truck, Shield, Zap } from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export default function WarehousingHero() {
    const sectionRef = useRef<HTMLElement>(null);

    const cubeFaces = {
        front: {
            title: 'Storage Management',
            description: 'Flexible storage options for palletized goods, bulk items, and specialized cargo.',
            icon: <Package size={48} strokeWidth={1.5} />,
        },
        right: {
            title: 'Transloading Services',
            description: 'Efficient transfer of goods between trucks, containers, railcars, and other modes.',
            icon: <RefreshCw size={48} strokeWidth={1.5} />,
        },
        back: {
            title: 'Inventory Tracking',
            description: 'Real-time monitoring and reporting for accurate inventory visibility and management.',
            icon: <BarChart3 size={48} strokeWidth={1.5} />,
        },
        left: {
            title: 'Order Fulfillment',
            description: 'Picking, packing, and distribution services customized to your delivery schedules.',
            icon: <Truck size={48} strokeWidth={1.5} />,
        },
        top: {
            title: 'Advanced Technology',
            description: 'Integrated WMS for real-time tracking and operational efficiency.',
            icon: <Zap size={48} strokeWidth={1.5} />,
        },
        bottom: {
            title: 'Safety & Compliance',
            description: 'Industry standards for cargo security and worker safety.',
            icon: <Shield size={48} strokeWidth={1.5} />,
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
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff1a1a] blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#ff3b3b] blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-xl md:text-2xl font-semibold text-primary tracking-wider uppercase">
                            Secure & Efficient Storage
                        </h2>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            Warehousing & Transloading Services
                        </h1>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            At <span className="text-primary font-semibold">Advik Freight</span>, we provide secure warehousing and transloading solutions to optimize your supply chain with flexible storage and timely distribution services.
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
