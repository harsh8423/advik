'use client';

import { motion } from 'framer-motion';
import { LuCheck } from 'react-icons/lu';
import Image from 'next/image';

export default function WarehousingCommitment() {
    const commitmentPoints = [
        'Advanced facilities with state-of-the-art infrastructure',
        'Skilled personnel dedicated to your success',
        'Tailored logistics strategies for your unique needs',
        'Trusted partner for seamless supply chain operations'
    ];

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
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-light mb-4">
                        Our <span className="text-primary">Commitment</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-black/70 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        {/* Background gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

                        <div className="relative z-10">
                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 text-center">
                                Advik Freight ensures your warehousing and transloading needs are handled with{' '}
                                <span className="text-primary font-semibold">expertise</span>,{' '}
                                <span className="text-primary font-semibold">reliability</span>, and{' '}
                                <span className="text-primary font-semibold">precision</span>.
                            </p>

                            <div className="grid md:grid-cols-2 gap-4">
                                {commitmentPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mt-1 group-hover:scale-110 transition-transform duration-300">
                                            <LuCheck className="w-4 h-4 text-white" />
                                        </div>
                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                            {point}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Call to action */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-center mt-10"
                            >
                                <p className="text-gray-400 mb-6">
                                    Our combination of advanced facilities, skilled personnel, and tailored logistics strategies
                                    makes us a trusted partner for seamless supply chain operations.
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300"
                                >
                                    Partner with Advik Freight
                                </a>
                            </motion.div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
