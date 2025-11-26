'use client';

import { motion } from 'framer-motion';
import { LuTruck, LuDollarSign, LuShield, LuClock, LuNetwork, LuArrowUpRight } from 'react-icons/lu';
import Image from 'next/image';

const benefits = [
    {
        icon: LuTruck,
        title: 'Efficient Cargo Movement',
    },
    {
        icon: LuDollarSign,
        title: 'Cost Savings',
    },
    {
        icon: LuShield,
        title: 'Enhanced Security',
    },
    {
        icon: LuClock,
        title: 'Flexible Scheduling',
    },
    {
        icon: LuNetwork,
        title: 'Improved Supply Chain Reliability',
    }
];

export default function DrayageBenefits() {
    return (
        <section className="relative py-20 bg-gradient-to-b from-dark to-dark-lighter overflow-hidden">
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

            {/* Background decoration */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
                        Benefits of <span className="text-primary">Drayage Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative will-change-transform cursor-pointer"
                        >
                            {/* Card */}
                            <div className="relative h-full bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 overflow-hidden transition-all duration-500 hover:border-primary hover:-translate-y-2 shadow-2xl hover:shadow-primary/20">
                                {/* Browse Icon - Top Right */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <LuArrowUpRight className="w-5 h-5 text-primary" />
                                </div>

                                {/* Animated glow orb */}
                                <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Grid pattern overlay */}
                                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }}
                                />

                                <div className="relative flex flex-col items-center text-center">
                                    {/* Icon with animated background */}
                                    <div className="relative mb-5">
                                        <div className="absolute inset-0 bg-primary/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                            <benefit.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary/90 transition-colors duration-300">
                                        {benefit.title}
                                    </h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
