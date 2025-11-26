"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Package, Truck, Ship, Plane, CheckCircle } from "lucide-react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function LogisticsJourney() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            ScrollTrigger.matchMedia({
                // Desktop - Pinned Timeline Animation
                "(min-width: 768px)": function () {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: triggerRef.current,
                            start: "top top",
                            end: "+=3000",
                            scrub: 1,
                            pin: true,
                        },
                    });

                    // Step 1: Order Received
                    tl.fromTo(".step-1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
                        .to([".line-1-h", ".line-1-v"], { width: "100%", height: "100%", duration: 1 })
                        .to(".step-1", { opacity: 0.2, scale: 0.8, duration: 0.5 });

                    // Step 2: Processing & Packing
                    tl.fromTo(".step-2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
                        .to([".line-2-h", ".line-2-v"], { width: "100%", height: "100%", duration: 1 })
                        .to(".step-2", { opacity: 0.2, scale: 0.8, duration: 0.5 });

                    // Step 3: Global Transit
                    tl.fromTo(".step-3", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
                        .to([".line-3-h", ".line-3-v"], { width: "100%", height: "100%", duration: 1 })
                        .to(".step-3", { opacity: 0.2, scale: 0.8, duration: 0.5 });

                    // Step 4: Final Delivery
                    tl.fromTo(".step-4", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
                        .to(".step-4", { scale: 1.2, color: "#E60000", duration: 0.5 });
                },

                // Mobile - Simple Fade In on Scroll (No Pinning)
                "(max-width: 767px)": function () {
                    const steps = [".step-1", ".step-2", ".step-3", ".step-4"];

                    steps.forEach((step, index) => {
                        gsap.fromTo(step,
                            { opacity: 0, y: 30 },
                            {
                                opacity: 1,
                                y: 0,
                                duration: 0.8,
                                scrollTrigger: {
                                    trigger: step,
                                    start: "top 85%", // Trigger when top of element hits 85% of viewport height
                                    toggleActions: "play none none reverse"
                                }
                            }
                        );
                    });

                    // Animate lines on mobile
                    const lines = [".line-1-v", ".line-2-v", ".line-3-v"];
                    lines.forEach((line, index) => {
                        gsap.to(line, {
                            height: "100%",
                            duration: 1,
                            scrollTrigger: {
                                trigger: line,
                                start: "top 80%",
                                toggleActions: "play none none reverse"
                            }
                        });
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="bg-background relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-80">
                <Image
                    src="/background.webp"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority={false}
                />
            </div>
            <div ref={triggerRef} className="min-h-screen py-20 flex items-center justify-center">
                <div className="max-w-7xl w-full px-6 relative">
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-24 text-center">
                        The Journey of <span className="text-primary">Excellence</span>
                    </h2>

                    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="step-1 flex flex-col items-center text-center opacity-0 relative">
                            <div className="order-2 md:order-1 w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 md:mb-4 mt-4 md:mt-0 relative z-20 border border-border">
                                <Package className="w-8 h-8 text-foreground" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-xl font-bold text-foreground mb-2">Order Received</h3>
                                <p className="text-muted-foreground text-sm">Instant confirmation and automated processing.</p>
                            </div>

                            {/* Horizontal Line (Desktop) */}
                            <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-full h-1 bg-muted -z-10">
                                <div className="line-1-h h-full bg-primary w-0" />
                            </div>
                            {/* Vertical Line (Mobile) */}
                            <div className="md:hidden absolute top-[100%] left-1/2 -translate-x-1/2 w-1 h-16 bg-muted -z-10">
                                <div className="line-1-v w-full bg-primary h-0" />
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="step-2 flex flex-col items-center text-center opacity-0 mt-16 md:mt-0 relative">
                            <div className="order-2 md:order-1 w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 md:mb-4 mt-4 md:mt-0 relative z-20 border border-border">
                                <Truck className="w-8 h-8 text-foreground" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-xl font-bold text-foreground mb-2">Processing</h3>
                                <p className="text-muted-foreground text-sm">Secure packing and route optimization.</p>
                            </div>

                            {/* Horizontal Line (Desktop) */}
                            <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-full h-1 bg-muted -z-10">
                                <div className="line-2-h h-full bg-primary w-0" />
                            </div>
                            {/* Vertical Line (Mobile) */}
                            <div className="md:hidden absolute top-[100%] left-1/2 -translate-x-1/2 w-1 h-16 bg-muted -z-10">
                                <div className="line-2-v w-full bg-primary h-0" />
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="step-3 flex flex-col items-center text-center opacity-0 mt-16 md:mt-0 relative">
                            <div className="order-2 md:order-1 w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 md:mb-4 mt-4 md:mt-0 relative z-20 border border-border">
                                <Ship className="w-8 h-8 text-foreground" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-xl font-bold text-foreground mb-2">Global Transit</h3>
                                <p className="text-muted-foreground text-sm">Real-time tracking across land, sea, or air.</p>
                            </div>

                            {/* Horizontal Line (Desktop) */}
                            <div className="hidden md:block absolute top-10 left-[calc(50%+40px)] w-full h-1 bg-muted -z-10">
                                <div className="line-3-h h-full bg-primary w-0" />
                            </div>
                            {/* Vertical Line (Mobile) */}
                            <div className="md:hidden absolute top-[100%] left-1/2 -translate-x-1/2 w-1 h-16 bg-muted -z-10">
                                <div className="line-3-v w-full bg-primary h-0" />
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="step-4 flex flex-col items-center text-center opacity-0 mt-16 md:mt-0 relative">
                            <div className="order-2 md:order-1 w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-4 md:mb-4 mt-4 md:mt-0 relative z-20 border border-border">
                                <CheckCircle className="w-8 h-8 text-foreground" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-xl font-bold text-foreground mb-2">Delivered</h3>
                                <p className="text-muted-foreground text-sm">On time, every time. Customer satisfaction guaranteed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
