"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const whenToChoose = [
    "Long-distance transportation with minimal handling.",
    "Reduce fuel costs and carbon footprint.",
    "Flexible solutions for large or bulk shipments.",
    "Non-urgent but reliable transport option."
];

const ourServices = [
    { title: "Truck-to-Rail Transfers", desc: "Efficient loading/unloading." },
    { title: "Door-to-Door Delivery", desc: "Seamless pickup & final delivery." },
    { title: "Containerized Freight", desc: "Standardized, secure containers." },
    { title: "Route Optimization", desc: "Strategic planning for speed." },
    { title: "Real-Time Tracking", desc: "Monitor every segment." }
];

const benefits = [
    { title: "Cost Efficiency", desc: "Rail savings + truck flexibility." },
    { title: "Sustainability", desc: "Lower emissions than truck-only." },
    { title: "Enhanced Security", desc: "Minimal handling reduces risk." },
    { title: "Scalable Solutions", desc: "Great for heavy/bulk cargo." },
    { title: "Reliable Transit", desc: "Optimized multi-mode routes." }
];

export default function IntermodalFeatures() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-16 space-y-20">

                {/* Top Row: Services */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-display font-bold text-advik-navy mb-4">Our Intermodal Services</h3>
                        <div className="h-1 w-20 bg-advik-red rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {ourServices.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group p-4 rounded-xl hover:bg-gray-50 transition-colors"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <ArrowRight className="w-5 h-5 -rotate-45" />
                                </div>
                                <h4 className="font-bold text-advik-navy mb-2 text-sm md:text-base">{service.title}</h4>
                                <p className="text-xs text-gray-500 leading-relaxed">
                                    {service.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Row: Split Layout */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 pt-12 border-t border-gray-100">

                    {/* When to Choose */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-advik-navy mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-advik-red rounded-full"></span>
                            When to Choose
                        </h3>
                        <div className="space-y-6">
                            {whenToChoose.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-advik-red/10 flex items-center justify-center mt-0.5">
                                        <Check className="w-3.5 h-3.5 text-advik-red" />
                                    </div>
                                    <p className="text-gray-700 font-medium">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits */}
                    <div>
                        <h3 className="text-2xl font-display font-bold text-advik-navy mb-8 flex items-center gap-3">
                            <span className="w-8 h-1 bg-advik-red rounded-full"></span>
                            Key Benefits
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <h4 className="font-bold text-advik-navy mb-1 text-sm">{benefit.title}</h4>
                                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
