
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import GenericCTA from "@/components/sections/common/GenericCTA";
import { blogs } from "@/data/blogs";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const blog = blogs.find((b) => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        className="object-cover opacity-20 blur-sm"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blogs
                        </Link>

                        <div className="flex flex-wrap gap-4 mb-6">
                            {blog.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex items-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span>{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" />
                                <span>{blog.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-24">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-2xl">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div
                            className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />
                    </div>
                </div>
            </section>

            <GenericCTA
                title="Ready to Optimize Your Supply Chain?"
                description="Contact our team today to discover how our innovative solutions can drive your business forward."
            />

            <Footer />
        </main>
    );
}
