"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import NetworkMap from '@/components/canvas/NetworkMap';

export default function NetworkCoverage() {
    const router = useRouter();

    return (
        <section className="relative h-[800px] bg-advik-navy overflow-hidden">
            {/* Background Image Added Behind Map */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Global Network"
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-advik-navy/80 mix-blend-multiply"></div>
            </div>

            <div className="absolute inset-0 z-0 pointer-events-auto">
                <NetworkMap />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-advik-navy via-transparent to-advik-navy pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center pointer-events-none">
                <div className="max-w-xl pointer-events-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-advik-navy/80 backdrop-blur-md p-8 border-l-4 border-advik-red"
                    >
                        <h2 className="text-advik-red font-bold tracking-widest uppercase mb-2">Network Coverage</h2>
                        <h3 className="text-5xl font-display font-bold text-white mb-6">NORTH AMERICA&apos;S<br />LEADING NETWORK</h3>
                        <p className="text-gray-300 mb-8 leading-relaxed">
                            Creating the most efficient transportation network in North America.
                            Real-time visibility, 24/7 dispatch, and seamless connectivity across all major hubs.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                <span className="text-white font-bold">Live Tracking</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-advik-red animate-pulse"></div>
                                <span className="text-white font-bold">24/7 Dispatch</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                                <span className="text-white font-bold">Customs Ready</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></div>
                                <span className="text-white font-bold">Secure Cargo</span>
                            </div>
                        </div>

                        <button onClick={() => router.push('/contact')} className="px-8 py-3 bg-white text-advik-navy font-bold uppercase tracking-widest hover:bg-advik-red hover:text-white transition-colors">
                            View Network Map
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
