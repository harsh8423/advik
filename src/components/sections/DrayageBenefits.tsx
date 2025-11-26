'use client';

import { motion } from 'framer-motion';
import { LuTruck, LuDollarSign, LuShield, LuClock, LuNetwork } from 'react-icons/lu';
import Image from 'next/image';

const benefits = [
    {
        icon: LuTruck,
        title: 'Efficient Cargo Movement',
        description: 'Minimizes delays at ports, rail terminals, and warehouses.'
    },
    {
        icon: LuDollarSign,
        title: 'Cost Savings',
        description: 'Optimized short-distance transportation reduces overall supply chain costs.'
    },
    {
        icon: LuShield,
        title: 'Enhanced Security',
        description: 'Containers are handled by trained personnel to prevent damage or loss.'
    },
    {
        icon: LuClock,
        title: 'Flexible Scheduling',
        description: 'Coordinated pickup and delivery times to meet your business needs.'
    },
    {
        icon: LuNetwork,
        title: 'Improved Supply Chain Reliability',
        description: 'Smooth coordination between multiple transport modes ensures timely deliveries.'
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

            <div className="container mx-auto px-6 relative z-10">
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
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="group relative bg-gradient-to-br from-dark-lighter to-dark border border-gray-800 rounded-2xl p-8 hover:border-primary transition-all duration-300"
                        >
                            {/* Glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <benefit.icon className="w-8 h-8 text-white" />
                                </div>

                                <h3 className="text-xl font-bold text-light mb-3 group-hover:text-primary transition-colors duration-300">
                                    {benefit.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
