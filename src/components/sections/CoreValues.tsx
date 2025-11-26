"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Users, Lightbulb, Leaf } from "lucide-react";

const values = [
    {
        icon: Shield,
        title: "Integrity",
        description: "Conducting all operations with honesty, transparency, and accountability.",
    },
    {
        icon: Clock,
        title: "Reliability",
        description: "Ensuring every shipment is handled with precision and delivered on time.",
    },
    {
        icon: Users,
        title: "Customer Focus",
        description: "Understanding client needs and providing tailored logistics solutions.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "Leveraging technology and modern practices to improve efficiency and service quality.",
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Committed to eco-friendly practices and reducing carbon footprint across logistics operations.",
    },
];

export default function CoreValues() {
    return (
        <section className="py-20 bg-gradient-to-b from-dark via-accent to-dark relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold text-white mb-4">
                        Our Core <span className="text-primary">Values</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto" />
                </motion.div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{value.description}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Sustainability Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 bg-gradient-to-r from-green-900/20 to-primary/10 border border-green-500/20 rounded-2xl p-8"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <Leaf className="w-10 h-10 text-green-400" />
                        <h3 className="text-3xl font-bold text-white">Sustainability and Responsibility</h3>
                    </div>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        Advik Freight is committed to eco-friendly practices, including optimizing routes to reduce fuel consumption, promoting energy-efficient transport options, and implementing sustainable packaging and warehousing solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
