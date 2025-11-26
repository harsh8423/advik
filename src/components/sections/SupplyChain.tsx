"use client";

import { motion } from "framer-motion";
import { Anchor, Truck, Globe, BarChart3, ShieldCheck, Zap } from "lucide-react";

const solutions = [
    { icon: Anchor, title: "Ocean Freight", desc: "Global reach with reliable schedules." },
    { icon: Truck, title: "Road Transport", desc: "Efficient domestic and cross-border trucking." },
    { icon: Globe, title: "Air Freight", desc: "Fastest delivery for time-critical cargo." },
    { icon: BarChart3, title: "Warehousing", desc: "Secure storage and inventory management." },
    { icon: ShieldCheck, title: "Customs Brokerage", desc: "Navigating complex regulations with ease." },
    { icon: Zap, title: "Express Logistics", desc: "Rapid solutions for urgent needs." },
];

export default function SupplyChain() {
    return (
        <section className="py-24 bg-dark relative">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Supply Chain <br />
                        <span className="text-primary">Headaches End Here</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Comprehensive solutions tailored to your business needs. We handle the complexities so you can focus on growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {solutions.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-dark rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
