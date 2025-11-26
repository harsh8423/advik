"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
    Car,
    ShoppingBag,
    UtensilsCrossed,
    Factory,
    Apple,
    HardHat,
    Zap,
    Sparkles,
    ArrowUpRight
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
    {
        icon: Car,
        name: "Automotive",
    },
    {
        icon: ShoppingBag,
        name: "Retail",
    },
    {
        icon: UtensilsCrossed,
        name: "Food & Beverage",
    },
    {
        icon: Factory,
        name: "Manufacturing",
    },
    {
        icon: Apple,
        name: "Produce",
    },
    {
        icon: HardHat,
        name: "Building Materials",
    },
    {
        icon: Zap,
        name: "Renewable Energy",
    },
];

export default function Industries() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        if (!sectionRef.current) return;

        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        if (cards.length === 0) return;

        // Set initial state for all cards
        cards.forEach((card) => {
            gsap.set(card, {
                opacity: 0,
                y: 40,
                scale: 0.95,
            });
        });

        const ctx = gsap.context(() => {
            // Create timeline for card animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    end: "bottom 80%",
                    scrub: 1.2,
                },
            });

            // Animate cards with stagger
            cards.forEach((card, index) => {
                const startPosition = index * 0.15;

                tl.to(
                    card,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        ease: "power3.out",
                    },
                    startPosition
                );
            });
        }, sectionRef);

        const handleResize = () => {
            ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            ctx.revert();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative pt-32 pb-0 bg-gradient-to-b from-black via-dark to-black overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-50">
                <Image
                    src="/background.webp"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority={false}
                />
            </div>

            {/* Animated decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                            Industries We Serve
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
                        Trusted Across{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-500">
                            Multiple Industries
                        </span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Delivering specialized logistics solutions tailored to your industry needs
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <div
                                key={index}
                                ref={(el) => {
                                    cardsRef.current[index] = el;
                                }}
                                className="group relative will-change-transform cursor-pointer"
                            >
                                {/* Card */}
                                <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-primary hover:-translate-y-2 shadow-2xl hover:shadow-primary/20">
                                    {/* Browse Icon - Top Right */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ArrowUpRight className="w-5 h-5 text-primary" />
                                    </div>

                                    {/* Animated glow orb */}
                                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Grid pattern overlay */}
                                    <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500"
                                        style={{
                                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                            backgroundSize: '20px 20px'
                                        }}
                                    />

                                    <div className="relative flex flex-col items-center text-center">
                                        {/* Icon with animated background */}
                                        <div className="relative mb-5">
                                            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                                <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                                            </div>
                                        </div>

                                        {/* Industry Name */}
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary/90 transition-colors duration-300">
                                            {industry.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
