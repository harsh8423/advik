'use client';

import { motion } from 'framer-motion';
import { LuShip, LuShoppingCart, LuFactory, LuCar, LuCoffee } from 'react-icons/lu';
import Image from 'next/image';

const industries = [
    {
        icon: LuShip,
        name: 'Import/Export Companies',
        gradient: 'from-blue-500 to-cyan-500'
    },
    {
        icon: LuShoppingCart,
        name: 'Retail and E-commerce',
        gradient: 'from-purple-500 to-pink-500'
    },
    {
        icon: LuFactory,
        name: 'Manufacturing and Industrial Equipment',
        gradient: 'from-orange-500 to-red-500'
    },
    {
        icon: LuCar,
        name: 'Automotive and Spare Parts',
        gradient: 'from-green-500 to-emerald-500'
    },
    {
        icon: LuCoffee,
        name: 'Food and Beverage Distribution',
        gradient: 'from-amber-500 to-yellow-500'
    }
];

export default function DrayageIndustries() {
    return (
        <section className="relative py-20 bg-dark-lighter overflow-hidden">
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

            {/* Animated background grid */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
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
                        Industries We <span className="text-primary">Serve</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Providing specialized drayage solutions across diverse sectors
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, rotate: 1 }}
                            className="group relative"
                        >
                            <div className="relative bg-gradient-to-br from-dark to-dark-lighter border border-gray-800 rounded-2xl p-8 hover:border-transparent transition-all duration-300 overflow-hidden">
                                {/* Gradient border effect on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                        <industry.icon className="w-10 h-10 text-white" />
                                    </div>

                                    <h3 className="text-lg font-semibold text-light group-hover:text-primary transition-colors duration-300">
                                        {industry.name}
                                    </h3>
                                </div>

                                {/* Decorative corner accent */}
                                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${industry.gradient} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
