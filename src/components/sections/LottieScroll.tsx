"use client";

import { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";

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

export default function LottieScroll() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isReady, setIsReady] = useState(false); // Wait for DOM stability

    // Wait for next frame to ensure DOM is fully rendered and measured
    useLayoutEffect(() => {
        requestAnimationFrame(() => setIsReady(true));
    }, []);

    useLayoutEffect(() => {
        if (!isReady) return; // Don't run until DOM stable

        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray<HTMLElement>(".stack-card");
            const cardContents = gsap.utils.toArray<HTMLElement>(".stack-card-content");
            const titles = gsap.utils.toArray<HTMLElement>(".stack-title");
            const descriptions = gsap.utils.toArray<HTMLElement>(".stack-description");

            if (cards.length === 0) return;

            // Calculate actual card height from DOM (fixes responsive issue)
            const getCardHeight = () => cards[0]?.offsetHeight || 300;
            let cardHeight = getCardHeight();
            const stackOffset = 30;

            // Helper: set initial stacked state for a card
            const setStackedState = (index: number) => {
                if (index === 0) return; // First card always expanded
                gsap.set(cards[index], {
                    y: index * stackOffset,
                    scale: 1 - index * 0.06,
                    opacity: 0.7 - index * 0.15,
                    zIndex: cards.length - index, // Lower z-index for stacked cards
                    rotationX: index * 1.5,
                });
                gsap.set(cardContents[index], { x: -80 });
                gsap.set(titles[index], { scale: 0.9, opacity: 0.85 });
                // Use autoAlpha instead of opacity+height to avoid layout properties
                gsap.set(descriptions[index], { autoAlpha: 0, overflow: "hidden" });
            };

            // Helper: set active (expanded) state for a card
            const setActiveState = (index: number) => {
                gsap.set(cards[index], {
                    y: 0,
                    scale: 1,
                    opacity: 1,
                    zIndex: cards.length + 10, // High z-index for active card
                    rotationX: 0,
                });
                gsap.set(cardContents[index], { x: 0 });
                gsap.set(titles[index], { scale: 1, opacity: 1 });
                gsap.set(descriptions[index], { autoAlpha: 1, overflow: "visible" });
            };

            // Initialize all cards to their starting positions
            cards.forEach((card, index) => {
                if (index > 0) {
                    setStackedState(index);
                } else {
                    setActiveState(0);
                }
                // Add will-change only during animation (remove after)
                card.style.willChange = "auto";
            });

            // Single unified timeline for all card animations
            const masterTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: () => `+=${cardHeight * (cards.length - 1) * 2.5}`, // Match actual number of transitions (cards - 1)
                    scrub: 0.2, // More immediate response to scroll
                    pin: true,
                    pinSpacing: true,
                    anticipatePin: 1,
                    snap: {
                        snapTo: 1 / (cards.length - 1), // Snap to each card section
                        duration: { min: 0.4, max: 0.7 }, // Longer snap duration for smoother automatic transitions
                        delay: 0.1, // Small delay before snap kicks in
                        ease: "power2.inOut", // Smoother easing for snap
                    },
                    invalidateOnRefresh: true, // Recalc on resize
                    onRefresh: () => {
                        // Recalculate cardHeight on refresh (window resize)
                        cardHeight = getCardHeight();
                        // Reset all cards to initial state
                        cards.forEach((_, idx) => {
                            if (idx === 0) setActiveState(0);
                            else setStackedState(idx);
                        });
                    },
                    onUpdate: (self) => {
                        // Dynamically update z-index during scroll to fix overlap
                        const progress = self.progress;
                        const activeIndex = Math.min(
                            Math.floor(progress * cards.length),
                            cards.length - 1
                        );
                        cards.forEach((card, idx) => {
                            if (idx === activeIndex) {
                                gsap.set(card, { zIndex: cards.length + 10 }); // Active on top
                            } else if (idx < activeIndex) {
                                gsap.set(card, { zIndex: cards.length - idx - 1 }); // Behind
                            } else {
                                gsap.set(card, { zIndex: cards.length - idx }); // Stacked behind
                            }
                        });
                    },
                },
            });

            // Build timeline: animate each card transition
            cards.forEach((card, index) => {
                if (index === cards.length - 1) return; // Skip last card

                const cardContent = cardContents[index];
                const title = titles[index];
                const description = descriptions[index];
                const nextCard = cards[index + 1];
                const nextCardContent = cardContents[index + 1];
                const nextTitle = titles[index + 1];
                const nextDescription = descriptions[index + 1];

                // Create a sub-timeline for this card's exit and next card's entrance
                const cardTimeline = gsap.timeline();

                // Enable will-change at start, remove at end
                cardTimeline.call(() => {
                    card.style.willChange = "transform";
                    nextCard.style.willChange = "transform";
                }, undefined, 0);

                // Current card: slide up and fade out
                cardTimeline.to(card, {
                    y: -100, // Move up significantly
                    scale: 0.95, // Slight scale down
                    opacity: 0, // Fade out completely
                    rotationX: -8, // Slight tilt back
                    ease: "power2.inOut",
                    duration: 1.2,
                }, 0);

                cardTimeline.to(cardContent, { y: -20, opacity: 0, ease: "power2.in", duration: 0.8 }, 0);
                cardTimeline.to(title, { y: -15, opacity: 0, ease: "power2.in", duration: 0.8 }, 0);
                cardTimeline.to(description, { autoAlpha: 0, ease: "power2.in", duration: 0.6 }, 0);

                // Next card: slide in from below with smooth entrance
                cardTimeline.fromTo(nextCard,
                    {
                        y: 60, // Start from below
                        scale: 0.9,
                        opacity: 0,
                        rotationX: 5
                    },
                    {
                        y: 0,
                        scale: 1,
                        opacity: 1,
                        rotationX: 0,
                        ease: "power2.inOut",
                        duration: 1.2
                    },
                    0.3 // Start as current card is moving up
                );

                cardTimeline.fromTo(nextCardContent,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, x: 0, ease: "power2.out", duration: 1.0 },
                    0.4
                );
                cardTimeline.fromTo(nextTitle,
                    { y: 15, opacity: 0 },
                    { y: 0, opacity: 1, ease: "power2.out", duration: 1.0 },
                    0.4
                );
                cardTimeline.fromTo(nextDescription,
                    { autoAlpha: 0, y: 10 },
                    { autoAlpha: 1, y: 0, ease: "power2.out", duration: 0.9 },
                    0.5
                );

                // Cleanup will-change at end
                cardTimeline.call(() => {
                    card.style.willChange = "auto";
                    nextCard.style.willChange = "auto";
                }, undefined, 1);

                // Add this card's timeline to the master timeline
                masterTimeline.add(cardTimeline, index * 2.0); // Smooth pacing between transitions
            });

            // CRITICAL: Add a hold animation for the last card to keep it visible
            const lastCardIndex = cards.length - 1;
            const holdTimeline = gsap.timeline();

            // Ensure the last card stays at full visibility
            holdTimeline.to(cards[lastCardIndex], {
                y: 0,
                scale: 1,
                opacity: 1,
                rotationX: 0,
                duration: 0.1,
            }, 0);

            holdTimeline.to(cardContents[lastCardIndex], {
                y: 0,
                opacity: 1,
                duration: 0.1,
            }, 0);

            holdTimeline.to(titles[lastCardIndex], {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.1,
            }, 0);

            holdTimeline.to(descriptions[lastCardIndex], {
                autoAlpha: 1,
                y: 0,
                duration: 0.1,
            }, 0);

            // Add hold timeline at the end to lock the last card in place
            masterTimeline.add(holdTimeline, (cards.length - 1) * 2.0);


            // ResizeObserver to handle responsive layout changes
            const resizeObserver = new ResizeObserver(() => {
                ScrollTrigger.refresh(); // Trigger refresh when container size changes
            });
            if (sectionRef.current) {
                resizeObserver.observe(sectionRef.current);
            }

            // Cleanup ResizeObserver
            return () => {
                resizeObserver.disconnect();
            };

        }, sectionRef);

        return () => ctx.revert();
    }, [isReady]);

    return (
        <section ref={sectionRef} className="relative bg-background py-12 md:py-20 overflow-hidden min-h-screen flex items-center">
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
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-12 px-4 md:px-12 max-w-7xl mx-auto w-full">
                {/* Left Side - Centered Lottie (Always Running) */}
                <div className="w-full md:w-1/2 flex items-center justify-center z-10 mt-8 md:mt-0">
                    <div className="w-3/4 md:w-full max-w-md aspect-square">
                        <DotLottieReact
                            src="/gemi.lottie"
                            loop={true}
                            autoplay={true}
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>

                {/* Right Side - Stacked Cards */}
                <div ref={containerRef} className="w-full md:w-1/2 relative flex items-center justify-center">
                    <div className="relative w-full" style={{ minHeight: "500px", perspective: "1000px" }}>
                        {contentItems.map((item, index) => (
                            <div
                                key={index}
                                className="stack-card absolute top-1/2 -translate-y-1/2 left-0 w-full bg-card backdrop-blur-xl border border-border rounded-2xl p-5 md:p-8 shadow-2xl"
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div className="stack-card-content flex flex-col md:flex-row items-start gap-3 md:gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/30 border-2 border-primary flex items-center justify-center flex-shrink-0 mb-2 md:mb-0">
                                        <span className="text-primary font-bold text-sm md:text-base">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="stack-title text-xl md:text-3xl font-bold text-foreground mb-2 md:mb-4">
                                            {item.title}
                                        </h3>
                                        <div className="stack-description overflow-hidden">
                                            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
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
