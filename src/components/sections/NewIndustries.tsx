"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { INDUSTRIES } from '@/lib/constants';

export default function NewIndustries() {
    const router = useRouter();

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div>
                        <h2 className="text-advik-red font-bold tracking-[0.2em] uppercase mb-4 text-sm">Industries</h2>
                        <h3 className="text-5xl font-display font-bold text-advik-navy">SPECIALIZED FREIGHT</h3>
                    </div>
                    <Link href="/industries" className="flex items-center gap-2 text-advik-navy font-bold hover:text-advik-red transition-colors text-lg group">
                        View All Industries <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[600px]">
                    {/* Large Item */}
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl cursor-pointer shadow-2xl"
                        onClick={() => router.push('/industries/automotive')}
                    >
                        <img src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1472&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Automotive" />
                        <div className="absolute inset-0 bg-gradient-to-t from-advik-navy via-advik-navy/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-10 z-10">
                            <h4 className="text-4xl font-display font-bold text-white mb-4">AUTOMOTIVE</h4>
                            <div className="h-1 w-20 bg-advik-red mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <p className="text-white/80 max-w-sm transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                                Just-in-time delivery for complex global supply chains.
                            </p>
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur p-3 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowRight className="w-6 h-6 text-white -rotate-45 group-hover:rotate-0 transition-transform" />
                        </div>
                    </motion.div>

                    {/* Smaller Items */}
                    {INDUSTRIES.slice(1, 5).map((industry) => (
                        <motion.div
                            key={industry.id}
                            whileHover={{ scale: 0.98 }}
                            className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-2xl cursor-pointer bg-advik-navy shadow-xl"
                            onClick={() => router.push(industry.href || `/industries/${industry.id}`)}
                        >
                            <img src={industry.image} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" alt={industry.title} />
                            <div className="absolute inset-0 bg-advik-navy/30"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6 border-2 border-transparent group-hover:border-advik-red transition-colors z-10 rounded-2xl">
                                <industry.icon className="w-8 h-8 text-white mb-4 group-hover:text-advik-red transition-colors" />
                                <h4 className="text-xl font-display font-bold text-white">{industry.title}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
