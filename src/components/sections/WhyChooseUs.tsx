"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, Shield, Users } from 'lucide-react';

export default function WhyChooseUs() {
    return (
        <section className="py-24 relative overflow-hidden bg-white">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative perspective-1000">
                        <motion.div
                            initial={{ opacity: 0, rotateY: -20 }}
                            whileInView={{ opacity: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: "spring" }}
                            className="relative z-10 transform-style-3d group"
                        >
                            <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1472&auto=format&fit=crop" alt="Warehouse Operations" className="w-full rounded-2xl shadow-2xl border-8 border-white" />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-10 -left-10 bg-advik-navy text-white p-6 rounded-lg shadow-xl hidden md:block animate-bounce-slow">
                                <div className="text-4xl font-bold font-display text-advik-red">99.8%</div>
                                <div className="text-sm font-bold uppercase tracking-wider">On-Time Delivery</div>
                            </div>
                        </motion.div>

                        {/* Decorative background */}
                        <div className="absolute top-10 -right-10 w-full h-full bg-gray-100 rounded-2xl -z-10 transform rotate-3"></div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-advik-red font-bold tracking-[0.2em] uppercase mb-4 text-sm flex items-center gap-2">
                            <div className="w-8 h-1 bg-advik-red"></div> Why Choose Advik Freight
                        </h2>
                        <h3 className="text-5xl md:text-6xl font-display font-bold text-advik-navy mb-8 leading-tight">
                            GLOBAL REACH,<br />LOCAL EXPERTISE.
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Reliable, cost-effective, and efficient logistics solutions tailored for your business. We leverage cutting-edge technology to give you full visibility.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { title: "Timely Delivery", desc: "Ensuring your shipments arrive safely and on time, every time.", icon: Clock },
                                { title: "Cost-Effective", desc: "Optimized routes and processes to save time and reduce expenses.", icon: CheckCircle2 },
                                { title: "Secure Cargo", desc: "Secure handling of your cargo with full tracking and transparency.", icon: Shield },
                                { title: "Expert Team", desc: "Experienced logistics professionals dedicated to serving your needs.", icon: Users }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                                    className="p-6 rounded-xl border border-gray-100 shadow-sm transition-all cursor-default"
                                >
                                    <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center mb-4">
                                        <item.icon className="w-6 h-6 text-advik-red" />
                                    </div>
                                    <h4 className="font-bold text-advik-navy text-xl mb-2">{item.title}</h4>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
