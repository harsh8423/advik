"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function IntermodalCTA() {
    return (
        <section className="py-24 bg-advik-red relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight"
                        >
                            Ready to Optimize Your <br /> Intermodal Logistics?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-white/90 font-light"
                        >
                            Let's discuss how we can streamline your operations and reduce costs.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="/contact"
                            className="group px-8 py-4 bg-white text-advik-red font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2"
                        >
                            Get a Quote
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="tel:+1234567890"
                            className="px-8 py-4 bg-advik-navy text-white font-bold rounded-full hover:bg-advik-navy/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-2 border border-white/10"
                        >
                            <Phone className="w-5 h-5" />
                            Contact Sales
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
