"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Clock, Monitor, ShieldCheck, Headset } from "lucide-react";

// Map of icon names to components
const iconMap: { [key: string]: any } = {
    TrendingUp,
    Clock,
    Monitor,
    ShieldCheck,
    Headset
};

interface ReasonItem {
    icon: string;
    title: string;
    desc: string;
}

interface GenericWhyChooseProps {
    title: string;
    description: string;
    reasons: ReasonItem[];
    ctaTitle: string;
    ctaDesc: string;
}

export default function GenericWhyChoose({ title, description, reasons, ctaTitle, ctaDesc }: GenericWhyChooseProps) {
    return (
        <section className="py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
                    <div className="lg:sticky lg:top-32">
                        <h2 className="text-advik-red font-bold tracking-[0.2em] uppercase mb-4 text-sm">Why Choose Us</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-advik-navy mb-8 leading-tight">
                            {title}
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            {description}
                        </p>
                    </div>

                    <div className="space-y-12">
                        {reasons.map((reason, index) => {
                            const IconComponent = iconMap[reason.icon] || TrendingUp; // Default to TrendingUp if not found

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-advik-navy group-hover:bg-advik-red group-hover:text-white transition-all duration-300">
                                        <IconComponent className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-advik-navy mb-2">{reason.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{reason.desc}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-advik-navy text-white p-12 lg:p-20 text-center"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-advik-navy via-blue-900 to-advik-navy" />
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h3 className="text-3xl md:text-5xl font-display font-bold mb-8">
                            {ctaTitle}
                        </h3>
                        <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
                            {ctaDesc}
                        </p>
                        <button className="group px-10 py-4 bg-advik-red text-white font-bold rounded-full hover:bg-red-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 inline-flex items-center gap-2">
                            Request a Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
