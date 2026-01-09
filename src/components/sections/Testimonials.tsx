"use client";

import { motion } from "framer-motion";
import { Quote, Star, MessageSquare, User } from "lucide-react";

const testimonials = [
    {
        quote: "Technology in the transportation space means real-time visibility, and Advik's platform does a very nice job of providing that for us.",
        author: "Sarah Johnson",
        role: "Logistics Manager, TechGlobal",
        rating: 5
    },
    {
        quote: "Advik takes the time up front to really get to know our business and our pain points, then customizes a tailored solution to meet those needs.",
        author: "Michael Chen",
        role: "Operations Director, FreshFoods",
        rating: 5
    },
    {
        quote: "Their multimodal approach has significantly reduced our transportation costs while maintaining the reliability our customers expect.",
        author: "David Smith",
        role: "Supply Chain VP, BuildRight",
        rating: 5
    },
    {
        quote: "Best-in-class safety and route optimization. They've transformed our dedicated fleet operations with their expertise.",
        author: "Emily Davis",
        role: "Project Manager, ConstructCo",
        rating: 5
    },
    {
        quote: "From first mile to final mile, they've got us covered. The visibility into our shipments has been a game changer for our business.",
        author: "Robert Wilson",
        role: "Fleet Manager, AutoParts Inc.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="relative py-24 bg-background overflow-hidden">

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
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Industry Leaders</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Hear from our partners about their experience with Advik Freight
                    </p>
                </motion.div>
            </div>

            {/* Scrolling Testimonials Marquee - Full Width */}
            <div className="relative w-full">
                <div
                    className="flex overflow-hidden relative group"
                    style={{
                        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                    }}
                >
                    <div
                        className="flex gap-4 md:gap-8 py-8 px-4 md:px-0 animate-marquee group-hover:[animation-play-state:paused]"
                        style={{ width: "max-content" }}
                    >
                        {/* Duplicate testimonials for seamless loop */}
                        {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-[85vw] md:w-[400px] group/card"
                            >
                                <div className="relative bg-card/90 border border-border rounded-2xl p-6 md:p-8 h-full hover:border-primary/50 transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col">
                                    {/* Glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover/card:from-primary/5 group-hover/card:to-transparent rounded-2xl transition-all duration-500" />

                                    <div className="relative flex-1">
                                        <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/40 mb-4" />
                                        <p className="text-muted-foreground text-base md:text-lg italic mb-6 leading-relaxed">
                                            "{testimonial.quote}"
                                        </p>
                                    </div>

                                    <div className="relative flex items-center gap-4 mt-auto border-t border-border pt-6">
                                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center flex-shrink-0">
                                            <User className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-foreground font-bold group-hover/card:text-primary transition-colors duration-300 truncate">
                                                {testimonial.author}
                                            </h4>
                                            <p className="text-xs md:text-sm text-muted-foreground truncate">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                        <div className="ml-auto flex gap-0.5 md:gap-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-yellow-500" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
