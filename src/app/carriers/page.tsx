"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import GenericHero from "@/components/sections/common/GenericHero";
import GenericCTA from "@/components/sections/common/GenericCTA";
import { motion } from "framer-motion";
import { Check, Truck, DollarSign, Clock, MapPin, Shield } from "lucide-react";

const benefits = [
    {
        title: "Quick & Reliable Pay",
        description: "Get paid faster with our flexible payment options, including Quick Pay and direct deposit.",
        icon: DollarSign
    },
    {
        title: "Dedicated Lanes",
        description: "Secure consistent freight with our dedicated lane opportunities across North America.",
        icon: MapPin
    },
    {
        title: "24/7 Support",
        description: "Our logistics experts are available around the clock to assist you with any issues.",
        icon: Clock
    },
    {
        title: "No Forced Dispatch",
        description: "You have the freedom to choose the loads that fit your schedule and preferences.",
        icon: Truck
    },
    {
        title: "Advanced Technology",
        description: "Access our carrier portal to find loads, upload documents, and track payments easily.",
        icon: Shield
    },
    {
        title: "National Network",
        description: "Tap into our vast network of shippers and gain access to thousands of loads daily.",
        icon: MapPin
    }
];

export default function CarriersPage() {
    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            <GenericHero
                title="Partner with Advik Freight"
                subtitle="For Carriers"
                image="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                description="Join our network of reliable carriers and keep your trucks moving with consistent freight, competitive rates, and superior support."
            />

            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-advik-navy mb-4">Why Drive for Advik?</h2>
                        <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
                        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                            We treat our carriers as true partners. Experience the difference of working with a logistics company that puts you first.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                                    <benefit.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-advik-navy mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-advik-navy text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Requirements to Join</h2>
                        <div className="space-y-4">
                            {[
                                "Active MC/DOT Number",
                                "Minimum $100,000 Cargo Insurance",
                                "Minimum $1,000,000 Auto Liability Insurance",
                                "Satisfactory Safety Rating",
                                "Signed Carrier Agreement"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                        <Check className="w-3.5 h-3.5 text-white" />
                                    </div>
                                    <span className="text-lg text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
                        <p className="text-gray-300 mb-8">
                            Our onboarding process is quick and easy. Sign up today and start browsing available loads immediately.
                        </p>
                        <button className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-primary/25">
                            Register as a Carrier
                        </button>
                    </div>
                </div>
            </section>

            <GenericCTA
                title="Have Questions?"
                description="Our carrier relations team is here to help. Contact us for more information about joining our network."
            />

            <Footer />
        </main>
    );
}
