"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

const newsItems = [
    {
        title: "Cold Storage Capacity Expansion Coming to the Port of Savannah",
        date: "February 15, 2023",
        excerpt: "With only being 2 months into the new year, the port of Savannah is continuing to see growth, especially in refrigerated commodities. In recent news they have announced that they p...",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Port/Container image
        category: "Port News"
    },
    {
        title: "Mega Grant Program to Award Funds to 9 Projects",
        date: "February 6, 2023",
        excerpt: "Early last week the Biden Administration made public that they will be distributing $1.2 billion in federal funds to 9 qualifying projects. Created under the Infrastructure Investm...",
        image: "https://images.unsplash.com/photo-1501854140884-074bf86ee911?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Nature/Green image
        category: "Industry Update"
    },
    {
        title: "U.S. Maritime Administration Announces $20 Million for Small Shipyards",
        date: "January 25, 2023",
        excerpt: "MARAD (Maritime Administration) has announced funding for this year's Small Shipyard program. For the fiscal year of 2023 they are allocating $20 million in grants for small shipya...",
        image: "https://thumbs.dreamstime.com/b/landscape-nature-view-background-view-window-landscape-nature-view-background-view-window-wonderful-landscape-121459679.jpg",
        category: "Government"
    }
];

export default function NewsInsights() {
    return (
        <section className="relative py-24 bg-dark overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                {/* Background image using CSS */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.3]"
                    style={{
                        backgroundImage: 'url(/background.webp)'
                    }}
                />
                {/* Additional top and bottom darkening for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Recent News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400">Insights</span>
                    </h2>
                </motion.div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col h-full"
                        >
                            <div className="relative h-full bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent z-10" />
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs font-semibold text-primary backdrop-blur-md">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                                        <Calendar className="w-4 h-4 text-primary" />
                                        <span>{item.date}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {item.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-white/10">
                                        <button className="flex items-center gap-2 text-white font-semibold group-hover:text-primary transition-colors duration-300">
                                            Read
                                            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
