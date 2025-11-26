"use client";

import React from 'react';
import Image from "next/image";

const WarehousingCubeSection: React.FC = () => {
    return (
        <section className="relative w-full bg-black py-20 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="lg:order-1 order-1 relative">
                        <Image
                            src="/heroimg/warehous.png"
                            alt="Modern Warehousing Facility"
                            width={800}
                            height={600}
                            className="w-full h-auto opacity-80"
                            priority
                        />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6 lg:order-2 order-2">
                        <div className="inline-block">
                            <span className="text-[#ff1a1a] font-bold text-sm uppercase tracking-widest border border-[#ff1a1a] px-4 py-2 rounded-full">
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Comprehensive <span className="text-[#ff1a1a]">Warehousing</span> Solutions
                        </h2>

                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                            Experience seamless storage, real-time tracking, and efficient transloading services.
                            Our state-of-the-art facilities and advanced technology ensure your cargo is handled
                            with precision and care.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-[#ff1a1a]">99.8%</div>
                                <div className="text-sm text-gray-400">Accuracy Rate</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-[#ff1a1a]">24/7</div>
                                <div className="text-sm text-gray-400">Operations</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-[#ff1a1a]">500K+</div>
                                <div className="text-sm text-gray-400">Sq Ft Storage</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-[#ff1a1a]">Real-time</div>
                                <div className="text-sm text-gray-400">Tracking</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="h-1 w-12 bg-[#ff1a1a]" />
                            <p className="text-sm text-gray-400 italic">
                                Scroll to explore our services
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </section>
    );
};

export default WarehousingCubeSection;
