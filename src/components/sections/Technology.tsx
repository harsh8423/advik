"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, Database, Lock } from "lucide-react";

const techFeatures = [
    { icon: Smartphone, title: "Mobile App", desc: "Real-time tracking and document management on the go." },
    { icon: Monitor, title: "Customer Portal", desc: "Full visibility into your shipments and analytics." },
    { icon: Database, title: "Data Integration", desc: "Seamless EDI and API connectivity with your systems." },
    { icon: Lock, title: "Security", desc: "Enterprise-grade security protecting your sensitive data." },
];

export default function Technology() {
    return (
        <section className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    Technology <br />
                    <span className="text-primary">Serving You</span>
                </motion.h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {techFeatures.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/50">
                            <feature.icon className="w-8 h-8 text-white group-hover:text-primary transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
