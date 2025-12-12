"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: ReactNode }) {
    // Smooth scroll disabled as per user request for "free form" native scroll
    // useEffect(() => {
    //     const lenis = new Lenis({
    //         duration: 1.2,
    //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //         orientation: "vertical",
    //         gestureOrientation: "vertical",
    //         smoothWheel: true,
    //     });

    //     // Synchronize Lenis scroll with GSAP ScrollTrigger
    //     lenis.on('scroll', ScrollTrigger.update);

    //     // Use GSAP's ticker for animation frames
    //     gsap.ticker.add((time) => {
    //         lenis.raf(time * 1000);
    //     });

    //     // Disable lag smoothing to prevent jumps
    //     gsap.ticker.lagSmoothing(0);

    //     return () => {
    //         lenis.destroy();
    //         gsap.ticker.remove((time) => {
    //             lenis.raf(time * 1000);
    //         });
    //     };
    // }, []);

    return <>{children}</>;
}
