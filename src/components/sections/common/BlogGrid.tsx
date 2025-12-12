"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { BlogPost } from "@/data/blogs";

interface BlogGridProps {
    blogs: BlogPost[];
}

export default function BlogGrid({ blogs }: BlogGridProps) {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog, index) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                                {/* Tag Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-semibold backdrop-blur-sm shadow-lg">
                                        <Tag className="w-3 h-3" />
                                        {blog.tags[0]}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-6 md:p-8">
                                {/* Metadata */}
                                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-primary" />
                                        <span>{blog.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <User className="w-3.5 h-3.5 text-primary" />
                                        <span>{blog.author}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                                    {blog.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                {/* Read More Link */}
                                <div className="mt-auto pt-6 border-t border-border/50">
                                    <Link
                                        href={`#`}
                                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/link"
                                    >
                                        Read Full Article
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
