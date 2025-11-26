"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
    return (
        <section className="py-20 bg-dark relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(230,0,0,0.05),transparent)]" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                                <Target className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To empower businesses worldwide with seamless, innovative, and reliable logistics solutions that simplify supply chain complexities, drive efficiency, and ensure the safe delivery of goods.
                        </p>
                    </motion.div>

                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                                <Eye className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                        </div>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To be recognized as a global leader in logistics and freight solutions, providing unmatched service, cutting-edge technology, and building lasting relationships with clients worldwide.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
