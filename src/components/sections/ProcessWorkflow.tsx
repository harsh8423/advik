"use client";

import React, { useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MessageSquareText,
    Cpu,
    Box,
    Truck,
    ScanSearch,
    MapPin
} from 'lucide-react';

const STEPS = [
    { id: '01', title: 'Consultation', desc: 'Requirements analysis.', icon: MessageSquareText },
    { id: '02', title: 'Planning', desc: 'AI route optimization.', icon: Cpu },
    { id: '03', title: 'Handling', desc: 'Secure packaging.', icon: Box },
    { id: '04', title: 'Transport', desc: 'Multi-modal transit.', icon: Truck },
    { id: '05', title: 'Tracking', desc: 'Real-time updates.', icon: ScanSearch },
    { id: '06', title: 'Delivery', desc: 'Final mile success.', icon: MapPin },
];

const Workflow: React.FC = () => {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    // Auto-play animation logic for the "active" packet moving through steps
    const [currentAutoStep, setCurrentAutoStep] = useState(0);

    useLayoutEffect(() => {
        const interval = setInterval(() => {
            setCurrentAutoStep((prev) => (prev + 1) % STEPS.length);
        }, 1500); // Speed of the "packet" moving through the supply chain
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full max-w-[1400px] mx-auto px-4 lg:px-8 z-20">

            {/* Connector Line (Desktop) - The Data Highway */}
            <div className="hidden lg:block absolute top-[5rem] left-0 right-0 px-20 h-2 z-0">
                <div className="w-full h-full bg-white/10 rounded-full relative overflow-hidden backdrop-blur-sm border border-white/5">
                    {/* Base Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-advik-red/20 to-transparent opacity-50"></div>

                    {/* Moving Data Packets (High Speed) */}
                    <motion.div
                        className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80"
                        animate={{ x: ["-100%", "1200%"] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    />

                    {/* Secondary Pulse (Slower) */}
                    <motion.div
                        className="absolute top-0 left-0 w-64 h-full bg-gradient-to-r from-transparent via-advik-red to-transparent opacity-50 blur-md"
                        animate={{ x: ["-100%", "1200%"] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear", delay: 1 }}
                    />
                </div>
            </div>

            {/* Grid of Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
                {STEPS.map((step, index) => {
                    const isActive = activeStep === index;
                    const isAutoActive = currentAutoStep === index;
                    const isPassed = currentAutoStep > index;

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setActiveStep(index)}
                            onMouseLeave={() => setActiveStep(null)}
                            className="relative flex flex-col items-center text-center group"
                        >
                            {/* Connection Dot (Desktop) */}
                            <div className={`
                  hidden lg:block absolute top-[5.2rem] -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white/20 transition-all duration-500 z-0
                  ${isAutoActive || isActive ? 'bg-advik-red shadow-[0_0_20px_#E50914] scale-150 border-white' : 'bg-advik-navy'}
                  ${isPassed ? 'bg-advik-red/50' : ''}
              `}></div>

                            {/* Card Container */}
                            <div className={`
                relative w-full aspect-square rounded-2xl p-6 flex flex-col items-center justify-center gap-4
                transition-all duration-500 border backdrop-blur-md overflow-hidden
                ${isActive ? 'bg-white/10 border-advik-red/50 shadow-[0_0_30px_rgba(229,9,20,0.3)] scale-105' : 'bg-white/5 border-white/10 hover:border-white/30'}
              `}>

                                {/* Holographic Scan Effect on Hover */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ top: "-100%" }}
                                            animate={{ top: "200%" }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-advik-red/20 to-transparent z-0 pointer-events-none"
                                        />
                                    )}
                                </AnimatePresence>

                                {/* Icon */}
                                <div className={`
                    relative z-10 p-4 rounded-xl transition-all duration-300
                    ${isActive || isAutoActive ? 'bg-advik-red text-white shadow-lg' : 'bg-white/10 text-gray-300'}
                  `}>
                                    <step.icon className="w-8 h-8" />
                                </div>

                                {/* Text */}
                                <div className="relative z-10">
                                    <div className="text-xs font-bold text-advik-red mb-1 tracking-widest uppercase">Step {step.id}</div>
                                    <h3 className="text-lg font-display font-bold text-white uppercase leading-none mb-2">{step.title}</h3>
                                    <p className={`text-xs text-gray-400 leading-tight transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Corner Accents (Tech Look) */}
                                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30 rounded-tl-sm"></div>
                                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/30 rounded-tr-sm"></div>
                                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/30 rounded-bl-sm"></div>
                                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30 rounded-br-sm"></div>
                            </div>

                            {/* Connection Line (Mobile) */}
                            <div className={`lg:hidden w-1 h-8 my-2 rounded-full ${isPassed ? 'bg-advik-red' : 'bg-white/10'}`}></div>

                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default function ProcessWorkflow() {
    return (
        <section className="bg-advik-navy relative overflow-hidden py-24">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Moving Grid Floor */}
                <div className="absolute inset-0 z-0 opacity-20"
                    style={{
                        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .1) 25%, rgba(255, 255, 255, .1) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .1) 75%, rgba(255, 255, 255, .1) 76%, transparent 77%, transparent)',
                        backgroundSize: '60px 60px',
                        transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                    }}>
                </div>
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f172a_100%)] z-10"></div>
            </div>

            <div className="text-center mb-24 relative z-20">
                <h2 className="text-advik-red font-bold tracking-[0.2em] uppercase mb-4 text-sm">The Process</h2>
                <h3 className="text-5xl font-display font-bold text-white">HOW WE MOVE</h3>
            </div>
            <Workflow />
        </section>
    );
}
