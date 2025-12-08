"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
    "Inbound & outbound distribution for retailers",
    "Warehouse management and inventory optimization",
    "Last-mile delivery and fulfillment solutions",
    "Real-time shipment tracking and reporting",
    "Flexible, scalable, and reliable transport solutions"
];

export default function RetailLogisticsSolutions() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-advik-red font-bold tracking-[0.2em] uppercase mb-4 text-sm">
                            Solutions
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-display font-bold text-advik-navy mb-8 leading-tight">
                            Retail Logistics <br /> Reimagined.
                        </h3>

                        <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                            At <span className="font-bold text-advik-navy">Advik Freight</span>, we provide efficient and flexible logistics solutions for the retail industry. From managing high-volume seasonal shipments to ensuring just-in-time store replenishments, our services optimize supply chain operations.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4 text-left">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white hover:shadow-lg hover:shadow-advik-red/5 border border-transparent hover:border-advik-red/10 transition-all duration-300 group cursor-default"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-advik-red/10 flex items-center justify-center group-hover:bg-advik-red transition-colors duration-300">
                                        <Check className="w-5 h-5 text-advik-red group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-gray-700 font-medium group-hover:text-advik-navy transition-colors">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
