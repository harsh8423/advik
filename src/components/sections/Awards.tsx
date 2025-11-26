"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Shield, Sparkles } from "lucide-react";

const awards = [
    { title: "Top Carrier 2024", icon: Trophy, year: "2024" },
    { title: "Safety Excellence Award", icon: Shield, year: "2023" },
    { title: "Green Logistics Partner", icon: Sparkles, year: "2024" },
    { title: "Best Supply Chain Solution", icon: Medal, year: "2023" },
    { title: "Customer Choice Award", icon: Star, year: "2023" },
    { title: "Innovation in Transport", icon: Award, year: "2024" },
];

export default function Awards() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-black via-dark to-black overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
                    >
                        <Trophy className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Excellence</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Recognition</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Honored for our commitment to excellence in logistics and transportation
                    </p>
                </motion.div>

                {/* Scrolling Awards Marquee */}
                <div className="relative">
                    {/* Gradient overlays for fade effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/50 to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-8 py-8"
                            animate={{ x: "-50%" }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 40, // Slower animation (was 20)
                            }}
                        >
                            {[...awards, ...awards].map((award, index) => {
                                const Icon = award.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex-shrink-0 w-80 group"
                                    >
                                        <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg border border-white/20 rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20">
                                            {/* Glow effect on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent rounded-2xl transition-all duration-500" />
                                            
                                            <div className="relative flex items-start gap-4">
                                                {/* Icon */}
                                                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <Icon className="w-7 h-7 text-primary" />
                                                </div>
                                                
                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary">
                                                            {award.year}
                                                        </span>
                                                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                    </div>
                                                    <h3 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-primary transition-colors duration-300">
                                                        {award.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex -space-x-1">
                                                            {[...Array(5)].map((_, i) => (
                                                                <div key={i} className="w-2 h-2 rounded-full bg-primary/40 border border-primary/60" />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-gray-500 uppercase tracking-wider">Certified</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Stats Section */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
                >
                    {[
                        { number: "15+", label: "Awards Won" },
                        { number: "99%", label: "Client Satisfaction" },
                        { number: "50K+", label: "Deliveries" },
                        { number: "24/7", label: "Support" },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-primary mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-400 uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
