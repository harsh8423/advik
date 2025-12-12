"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    Package,
    ArrowRight,
    Sparkles
} from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        image: "/images/port-7370411_1280.jpg",
        title: "Drayage",
        description: "Efficient port-to-warehouse drayage services ensuring timely cargo movement every shipment.",
        href: "/drayage"
    },
    {
        image: "/images/peterbilt-2650184_1920.jpg",
        title: "OTR (Over-The-Road)",
        description: "Reliable over-the-road trucking delivering freight safely, efficiently, and always on schedule.",
        href: "/otr"
    },
    {
        image: "/images/MSC-Seva-in-the-Port-of-Long-Beach.jpg",
        title: "Intermodal",
        description: "Seamless truck and rail intermodal transport reducing shipping costs while enhancing reliability.",
        href: "/intermodal"
    },
    {
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "FTL – LTL (Truckload)",
        description: "Flexible truckload and less-than-truckload shipping tailored to specific business needs.",
        href: "/ftl-ltl"
    },
    {
        image: "/images/5f3dd70103bf69f2f89f6329_reefer-1.jpg",
        title: "Reefer",
        description: "Temperature-controlled reefer transport preserving perishable goods during storage.",
        href: "/reefer"
    },
    {
        image: "/images/8407e3d0da86098b3d9c728a51102097.jpg",
        title: "Warehousing & Transloading",
        description: "Secure storage solutions with inventory management and timely dispatch for all your goods.",
        href: "/warehousing"
    },
];

export default function OurServices() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);


    useEffect(() => {
        if (!sectionRef.current) return;

        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        if (cards.length === 0) return;

        // Set initial state for all cards
        cards.forEach((card) => {
            gsap.set(card, {
                opacity: 0,
                y: 60,
                scale: 0.95,
            });
        });

        const ctx = gsap.context(() => {
            // Create timeline for card animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 30%",
                    end: "bottom 80%",
                    scrub: 1.5,
                },
            });

            // Animate cards with stagger
            cards.forEach((card, index) => {
                const startPosition = index * 0.3;

                tl.to(
                    card,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    startPosition
                );
            });
        }, sectionRef);

        return () => {
            ctx.revert();
        };
    }, []);



    return (
        <section
            ref={sectionRef}
            className="relative py-32 bg-gradient-to-b from-background via-secondary to-background overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                {/* Background image using CSS */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
                    style={{
                        backgroundImage: 'url(/background.webp)'
                    }}
                />
                {/* Additional top and bottom darkening for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/60" />
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Package className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            What We Offer
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Our{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-500">
                            Services
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Comprehensive logistics solutions tailored to your business needs
                    </p>
                </div>



                {/* Services Grid */}
                <div
                    ref={cardsContainerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:overflow-visible overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                ref={(el) => {
                                    cardsRef.current[index] = el;
                                }}
                                className="group relative snap-center will-change-transform min-w-[280px] md:min-w-0"
                            >
                                {/* Card */}
                                <div className="relative h-full bg-card/40 backdrop-blur-xl border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary hover:-translate-y-2 shadow-2xl hover:shadow-primary/20 flex flex-col">
                                    {/* Animated glow orb */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                    {/* Subtle grid pattern overlay */}
                                    <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none"
                                        style={{
                                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}
                                    />

                                    {/* Image Container - Full Width */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                        {/* Sparkle effect on hover */}
                                        <Sparkles className="absolute top-4 right-4 w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="relative flex flex-col flex-1 p-6 md:p-8">
                                        {/* Content */}
                                        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary/90 transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed mb-6 flex-1 group-hover:text-foreground transition-colors duration-300">
                                            {service.description}
                                        </p>

                                        {/* Browse button */}
                                        <Link href={service.href} className="group/btn relative flex items-center gap-2 w-full px-4 py-3 rounded-xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 overflow-hidden">
                                            {/* Button glow effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />

                                            <span className="relative text-sm font-semibold text-foreground group-hover/btn:text-primary transition-colors duration-300">
                                                Learn More
                                            </span>
                                            <ArrowRight className="relative w-4 h-4 text-primary group-hover/btn:translate-x-1 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div >


            </div >

            {/* Hide scrollbar */}
            < style jsx > {`
                div::-webkit-scrollbar {
                    display: none;
                }
            `}</style >
        </section >
    );
}
