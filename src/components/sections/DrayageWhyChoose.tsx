'use client';

import { motion } from 'framer-motion';
import { LuUserCheck, LuTruck, LuMonitor, LuShieldCheck, LuHeadphones } from 'react-icons/lu';
import Image from 'next/image';

const reasons = [
    {
        icon: LuUserCheck,
        title: 'Experienced Drivers',
        description: 'Skilled professionals trained in container handling and safety protocols.'
    },
    {
        icon: LuTruck,
        title: 'Reliable Equipment',
        description: 'Modern trucks and trailers for efficient short-distance transport.'
    },
    {
        icon: LuMonitor,
        title: 'Advanced Logistics Technology',
        description: 'Real-time tracking and optimized routing for timely delivery.'
    },
    {
        icon: LuShieldCheck,
        title: 'Compliance & Safety',
        description: 'Adherence to port and transportation regulations for secure cargo handling.'
    },
    {
        icon: LuHeadphones,
        title: 'Dedicated Support',
        description: 'End-to-end service and assistance for all drayage operations.'
    }
];

export default function DrayageWhyChoose() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-dark-lighter to-dark overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-50">
                <Image
                    src="/background.webp"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority={false}
                />
            </div>

            {/* Animated background elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
                        Why Choose <span className="text-primary">Advik Freight</span> for Drayage?
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Experience unmatched reliability and professionalism with our comprehensive drayage solutions
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative h-full bg-dark-lighter border border-gray-800 rounded-2xl p-8 hover:border-primary overflow-hidden transition-all duration-300">
                                {/* Animated gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Shimmering effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg shadow-primary/20">
                                        <reason.icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300">
                                        {reason.title}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>

                                {/* Corner accent */}
                                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <a
                        href="/contact"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                    >
                        Get Started with Advik Freight
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
