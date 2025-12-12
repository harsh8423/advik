"use client";

import { motion } from "framer-motion";
import {
    Truck, ShoppingBag, Utensils, Factory, Leaf, Hammer, Zap, Car, Warehouse, Link, Box, Settings, Coffee, Package, Thermometer, Map, HardHat, Clock, Sun, Wind, Battery, Monitor, Smartphone, Cpu
} from "lucide-react";

// Map of icon names to components
const iconMap: { [key: string]: any } = {
    Truck, ShoppingBag, Utensils, Factory, Leaf, Hammer, Zap, Car, Warehouse, Link, Box, Settings, Coffee, Package, Thermometer, Map, HardHat, Clock, Sun, Wind, Battery, Monitor, Smartphone, Cpu
};

interface ServiceItem {
    icon: string;
    title: string;
    desc: string;
}

interface GenericServicesGridProps {
    title: string;
    services: ServiceItem[];
}

export default function GenericServicesGrid({ title, services }: GenericServicesGridProps) {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-advik-red font-bold tracking-[0.2em] uppercase mb-4 text-sm">Our Services</h2>
                    <h3 className="text-4xl font-display font-bold text-advik-navy">{title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Truck; // Default to Truck if not found

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center text-advik-navy mb-6 group-hover:bg-advik-red group-hover:text-white transition-colors duration-300">
                                    <IconComponent className="w-8 h-8" />
                                </div>

                                <h3 className="text-xl font-bold text-advik-navy mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed max-w-xs">
                                    {service.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
