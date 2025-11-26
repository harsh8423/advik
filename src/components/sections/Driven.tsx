"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, Package, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        icon: Truck,
        title: "Reliable Transport",
        description: "Our fleet is maintained to the highest standards to ensure your cargo arrives safely and on time, every time.",
    },
    {
        icon: Package,
        title: "Secure Handling",
        description: "Advanced tracking and handling protocols guarantee the integrity of your goods throughout the journey.",
    },
    {
        icon: Clock,
        title: "On-Time Delivery",
        description: "We understand the value of time. Our optimized routes and efficient logistics ensure punctual delivery.",
    },
];

export default function Driven() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsContainerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Defensive check for refs
        if (!sectionRef.current || !cardsContainerRef.current) return;

        const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
        if (cards.length === 0) return;

        // Set initial state for all cards (hidden, positioned to the right)
        cards.forEach((card) => {
            gsap.set(card, {
                opacity: 0,
                x: 100,
                y: 30,
            });
        });

        const ctx = gsap.context(() => {
            // Create a single timeline for all card animations
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 20%",
                    end: "bottom 80%",
                    scrub: 1,
                    // No pinning - works better with Lenis smooth scroll
                },
            });

            // Animate cards sequentially with proper stagger
            cards.forEach((card, index) => {
                // Calculate the start position in the timeline for each card
                const startPosition = index * 0.4; // Stagger by 0.4 seconds in timeline

                tl.to(
                    card,
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                    },
                    startPosition
                );
            });
        }, sectionRef);

        // Handle resize events - refresh ScrollTrigger
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
            className="py-32 bg-dark relative overflow-hidden"
        >
            <div ref={containerRef} className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start lg:items-center">
                    {/* Left Content */}
                    <div className="lg:sticky lg:top-32">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Driven to Provide <br />
                            <span className="text-primary">Optimal Solutions</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            We go beyond simple transportation. We analyze your supply chain needs and engineer custom solutions that drive efficiency and reduce costs.
                            Our commitment to excellence is unwavering.
                        </p>

                        <button className="px-8 py-3 bg-transparent border border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all">
                            Learn More
                        </button>
                    </div>

                    {/* Right Content - Feature Cards */}
                    <div ref={cardsContainerRef} className="grid gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                ref={(el) => {
                                    cardsRef.current[index] = el;
                                }}
                                className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary/50 transition-colors group will-change-transform"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary transition-colors">
                                        <feature.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
