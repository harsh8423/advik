"use client";

import React from 'react';
import Image from "next/image";

const DrayageCubeSection: React.FC = () => {
    return (
        <section className="relative w-full bg-background py-20 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left - Image */}
                    <div className="lg:order-1 order-1 relative">
                        <Image
                            src="/heroimg/drayage1.png"
                            alt="Drayage Services"
                            width={800}
                            height={600}
                            className="w-full h-auto opacity-100"
                            priority
                        />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-6 lg:order-2 order-2">
                        <div className="inline-block">
                            <span className="text-primary font-bold text-sm uppercase tracking-widest border border-primary px-4 py-2 rounded-full">
                                Seamless Transport
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                            Expert <span className="text-primary">Drayage</span> Services
                        </h2>

                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Streamline your intermodal logistics with our professional drayage solutions.
                            We ensure efficient container movement between ports, rail terminals, and warehouses
                            with precision timing and expert handling.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">2-Hour</div>
                                <div className="text-sm text-muted-foreground">Avg Response</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">24/7</div>
                                <div className="text-sm text-muted-foreground">Availability</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">98%</div>
                                <div className="text-sm text-muted-foreground">On-Time Rate</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-3xl font-bold text-primary">GPS</div>
                                <div className="text-sm text-muted-foreground">Live Tracking</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 pt-4">
                            <div className="h-1 w-12 bg-primary" />
                            <p className="text-sm text-muted-foreground italic">
                                Scroll to explore our services
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
};

export default DrayageCubeSection;
