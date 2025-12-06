"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from 'framer-motion';

// Utility function to replace @motionone/utils wrap
const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxImageProps {
    src: string;
    baseVelocity: number;
}

const IMAGES = [
    'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop', // Truck on highway
    'https://www.dhl.com/discover/adobe/dynamicmedia/deliver/dm-aid--fb2074c7-45b1-4634-945b-cbf007e04a1c/desktop-image-1920x918.jpg?quality=82&preferwebp=true', // DHL Image
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop', // Warehouse interior
];

interface ParallaxTextProps {
    children: React.ReactNode;
    baseVelocity?: number;
}

const ParallaxText: React.FC<ParallaxTextProps> = ({ children, baseVelocity = 100 }) => {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // Dynamic direction changing (optional, removed for consistent flow here)
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className="flex whitespace-nowrap flex-nowrap gap-8" style={{ x }}>
                {children}
                {children}
                {children}
                {children}
            </motion.div>
        </div>
    );
};

export default function NewGallery() {
    return (
        <section className="py-24 bg-advik-black overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
            <div className="relative z-10 mb-12 px-6 container mx-auto text-center">
                <h2 className="text-advik-red font-bold tracking-[0.3em] uppercase mb-2">Visuals</h2>
                <h3 className="text-5xl font-display font-bold text-white uppercase">Logistics In Motion</h3>
            </div>

            {/* Strip 1 */}
            <div className="mb-8 rotate-1">
                <ParallaxText baseVelocity={-0.5}>
                    {IMAGES.map((src, i) => (
                        <div key={`strip1-${i}`} className="relative w-[400px] h-[250px] rounded-xl overflow-hidden transition-all duration-500 border-2 border-transparent hover:border-advik-red group">
                            <img src={src} alt="Logistics" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-advik-red/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </ParallaxText>
            </div>

            {/* Strip 2 - Reverse */}
            <div className="-rotate-1">
                <ParallaxText baseVelocity={0.5}>
                    {IMAGES.slice().reverse().map((src, i) => (
                        <div key={`strip2-${i}`} className="relative w-[400px] h-[250px] rounded-xl overflow-hidden transition-all duration-500 border-2 border-transparent hover:border-advik-red group">
                            <img src={src} alt="Logistics" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-advik-red/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                    ))}
                </ParallaxText>
            </div>
        </section>
    );
};
