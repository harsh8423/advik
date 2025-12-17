
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import GenericCTA from "@/components/sections/common/GenericCTA";
import { blogs } from "@/data/blogs";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const blog = blogs.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-12 md:pt-40 md:pb-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blogs
                        </Link>

                        <div className="flex flex-wrap gap-3 justify-center mb-6">
                            {blog.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-advik-navy mb-8 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex items-center justify-center gap-8 text-gray-500">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-primary" />
                                <span className="font-medium">{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" />
                                <span className="font-medium">{blog.author}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-16 shadow-xl">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        <div
                            className="prose prose-lg md:prose-xl max-w-none 
                            prose-headings:font-bold prose-headings:text-advik-navy prose-headings:font-display
                            prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-6
                            prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                            prose-strong:text-advik-navy prose-strong:font-bold
                            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-gray-700
                            prose-li:text-gray-600 prose-li:marker:text-primary
                            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-12"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        {/* Share / Tags Footer */}
                        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <Tag className="w-5 h-5 text-primary" />
                                <span className="font-bold text-advik-navy">Tags:</span>
                                <div className="flex gap-2">
                                    {blog.tags.map(tag => (
                                        <span key={tag} className="text-gray-600 bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-advik-navy">Related Articles</h2>
                        <div className="h-1 w-20 bg-primary rounded-full mx-auto mt-4" />
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {blogs.filter(b => b.slug !== blog.slug).slice(0, 3).map(related => (
                            <Link key={related.id} href={`/blog/${related.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="relative h-48">
                                    <Image
                                        src={related.image}
                                        alt={related.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-xs text-primary font-bold mb-2">{related.tags[0]}</div>
                                    <h3 className="text-xl font-bold text-advik-navy mb-2 group-hover:text-primary transition-colors">
                                        {related.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm line-clamp-2">{related.excerpt}</p>
                                </div>
                            </Link>
                        ))}
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
