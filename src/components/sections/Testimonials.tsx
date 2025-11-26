"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquare, User } from "lucide-react";

const testimonials = [
    {
        quote: "Advik Freight Logistics has completely transformed our supply chain efficiency. Their team is proactive, reliable, and always delivers on time.",
        author: "Sarah Johnson",
        role: "Logistics Manager, TechGlobal",
        rating: 5
    },
    {
        quote: "The best freight partner we've worked with. Their attention to detail and customer service is unmatched in the industry.",
        author: "Michael Chen",
        role: "Operations Director, FreshFoods",
        rating: 5
    },
    {
        quote: "Reliable, transparent, and cost-effective. Advik's technology platform gives us the visibility we need for our shipments.",
        author: "David Smith",
        role: "Supply Chain VP, BuildRight",
        rating: 5
    },
    {
        quote: "Outstanding service! They handled our complex heavy haul requirements with ease. Highly recommended for specialized transport.",
        author: "Emily Davis",
        role: "Project Manager, ConstructCo",
        rating: 5
    },
    {
        quote: "We appreciate their dedication to safety and timely deliveries. A true partner in our logistics success.",
        author: "Robert Wilson",
        role: "Fleet Manager, AutoParts Inc.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="relative py-24 bg-gradient-to-b from-black via-dark to-black overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
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
                        <MessageSquare className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Client Stories</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Industry Leaders</span>
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                        Hear from our partners about their experience with Advik Freight Logistics
                    </p>
                </motion.div>

                {/* Scrolling Testimonials Marquee */}
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
                                duration: 50,
                            }}
                        >
                            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0 w-[400px] group"
                                >
                                    <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-lg border border-white/20 rounded-2xl p-8 h-full hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-primary/20 flex flex-col">
                                        {/* Glow effect on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent rounded-2xl transition-all duration-500" />

                                        <div className="relative flex-1">
                                            <Quote className="w-10 h-10 text-primary/40 mb-4" />
                                            <p className="text-gray-300 text-lg italic mb-6 leading-relaxed">
                                                "{testimonial.quote}"
                                            </p>
                                        </div>

                                        <div className="relative flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center">
                                                <User className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold group-hover:text-primary transition-colors duration-300">
                                                    {testimonial.author}
                                                </h4>
                                                <p className="text-sm text-gray-500">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                            <div className="ml-auto flex gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
