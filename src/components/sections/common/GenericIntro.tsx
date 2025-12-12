"use client";

import { motion } from "framer-motion";

interface GenericIntroProps {
    title: string;
    description: string[];
    image: string;
}

export default function GenericIntro({ title, description, image }: GenericIntroProps) {
    return (
        <section className="py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    {/* Left Content - Takes more space */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <h2 className="text-advik-red font-bold tracking-[0.2em] uppercase mb-6 text-sm">
                            Overview
                        </h2>
                        <h3 className="text-4xl md:text-6xl font-display font-bold text-advik-navy mb-10 leading-tight">
                            {title}
                        </h3>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            {description.map((paragraph, index) => (
                                <p key={index}>
                                    {index === 0 ? (
                                        <>
                                            <span className="font-bold text-advik-navy">Advik Freight</span> {paragraph.replace("Advik Freight ", "")}
                                        </>
                                    ) : (
                                        paragraph
                                    )}
                                </p>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Image - Smaller and contained */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group max-w-md mx-auto">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-advik-navy/40 via-transparent to-transparent opacity-60" />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-48 h-48 bg-advik-red/5 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
