"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-accent to-background py-20 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: "linear-gradient(#E60000 1px, transparent 1px), linear-gradient(90deg, #E60000 1px, transparent 1px)",
                    backgroundSize: "50px 50px"
                }} />
            </div>

            {/* Red accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6">
                        About <span className="text-primary">Advik Freight</span>
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto mb-8" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6 text-lg text-muted-foreground leading-relaxed"
                >
                    <p>
                        At Advik Freight, we provide comprehensive global logistics solutions designed to simplify the complexity of your supply chain. With years of experience in transportation and freight management, we deliver customized, cost-effective, and reliable services that our clients can always trust.
                    </p>

                    <p>
                        Our team is committed to excellence, ensuring your cargo reaches its destination safely and on time. By combining advanced technology, industry expertise, and personalized service, we optimize travel costs and streamline operations for businesses of all sizes.
                    </p>

                    <p>
                        We specialize in a wide range of services, including full truckload, less-than-truckload, intermodal, air, and ocean freight solutions. Our dedicated professionals work closely with each client to understand their unique needs, providing flexible and scalable logistics strategies. At Advik Freight, safety, efficiency, and transparency are at the heart of everything we do, making us a trusted partner for businesses worldwide.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
