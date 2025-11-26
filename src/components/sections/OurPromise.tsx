"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const promises = [
    "On-time delivery with utmost care",
    "Transparent communication",
    "Customized solutions",
    "A trusted partnership that goes beyond logistics",
];

export default function OurPromise() {
    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,0,0,0.1),transparent)]" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                {/* Our Promise */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-6">
                        Our <span className="text-primary">Promise</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8" />

                    <p className="text-xl text-gray-300 leading-relaxed mb-12 max-w-3xl mx-auto">
                        At Advik Freight, your cargo is more than just shipments — it's our commitment. We promise:
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {promises.map((promise, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-primary/50 transition-all"
                            >
                                <CheckCircle2 className="w-8 h-8 text-primary shrink-0" />
                                <span className="text-lg text-gray-200">{promise}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Closing Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary rounded-r-2xl p-8 mb-12"
                >
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Whether you are a small business looking for efficient freight solutions or a multinational corporation seeking global supply chain management, Advik Freight is your trusted logistics partner. We deliver excellence, innovation, and reliability, ensuring your cargo moves seamlessly across the world.
                    </p>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    <Link href="/#services">
                        <button className="group px-10 py-5 bg-primary text-white text-lg font-bold rounded-full hover:bg-red-700 transition-all shadow-2xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105">
                            <span className="flex items-center gap-3">
                                Explore Our Services
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
