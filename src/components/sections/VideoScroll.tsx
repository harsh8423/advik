"use client";

import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contentItems = [
    {
        title: "Modern Fleet",
        description: "Our fleet is equipped to handle full truckload, LTL, and specialized cargo efficiently.",
    },
    {
        title: "Global Reach",
        description: "Seamless logistics solutions covering air, ocean, and intermodal transport worldwide.",
    },
    {
        title: "Reliable Delivery",
        description: "Ensuring your shipments arrive on time, safely, and with complete transparency.",
    },
    {
        title: "24/7 Support",
        description: "Our dedicated team provides round-the-clock assistance for all your logistics needs.",
    },
];

export default function VideoScroll() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const video = videoRef.current;
            if (!video) return;

            // Ensure metadata is loaded before setting up animation
            const setupAnimation = () => {
                const duration = video.duration;

                // Create a proxy object for smooth scrubbing
                const proxy = { currentTime: 0 };

                gsap.to(proxy, {
                    currentTime: duration,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 0.5, // Reduced from 1 for less "lag" feel
                    },
                    onUpdate: () => {
                        if (video) {
                            video.currentTime = proxy.currentTime;
                        }
                    },
                });
            };

            if (video.readyState >= 1) {
                setupAnimation();
            } else {
                video.addEventListener("loadedmetadata", setupAnimation, { once: true });
            }

            // Animate content items
            const items = gsap.utils.toArray<HTMLElement>(".content-item");
            items.forEach((item, i) => {
                gsap.fromTo(
                    item,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: item,
                            start: "top center", // Trigger when top of item hits center of viewport
                            end: "bottom center",
                            toggleActions: "play reverse play reverse",
                        },
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative bg-black flex">
            {/* Left Side - Sticky Video */}
            <div className="w-1/2 h-screen sticky top-0 overflow-hidden border-r border-white/10">
                <video
                    ref={videoRef}
                    src="/gemi.mp4"
                    className="w-full h-full object-cover"
                    muted
                    playsInline
                    preload="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
            </div>

            {/* Right Side - Scrolling Content */}
            <div ref={contentRef} className="w-1/2 relative z-10">
                <div className="flex flex-col">
                    {contentItems.map((item, index) => (
                        <div key={index} className="content-item h-screen flex flex-col justify-center px-12">
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                {item.title}
                            </h3>
                            <p className="text-xl text-gray-400 leading-relaxed max-w-md">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
