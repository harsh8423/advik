"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export default function IntermodalHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <section ref={ref} className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
            {/* Background Image with Parallax & Zoom */}
            <motion.div
                style={{ y, scale }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1470&auto=format&fit=crop"
                    alt="Intermodal Shipping"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-advik-navy/90 via-advik-navy/60 to-transparent" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl"
                >
                    <div className="flex items-center gap-2 text-white/80 mb-6 text-sm font-medium tracking-wide uppercase">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-advik-red font-bold">Intermodal</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-8 leading-tight">
                        Intermodal <span className="text-transparent bg-clip-text bg-gradient-to-r from-advik-red to-orange-500">Shipping</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light border-l-4 border-advik-red pl-6">
                        Seamless truck and rail transport solutions. Reduce costs and carbon footprint while enhancing reliability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
