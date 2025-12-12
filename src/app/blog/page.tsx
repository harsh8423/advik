
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import GenericHero from "@/components/sections/common/GenericHero";
import GenericCTA from "@/components/sections/common/GenericCTA";
import BlogGrid from "@/components/sections/common/BlogGrid";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
    return (
        <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
            <Navbar />

            <GenericHero
                title="Insights & News"
                subtitle="Our Blog"
                image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                description="Stay updated with the latest trends, expert insights, and news from the world of logistics and supply chain management."
            />

            <BlogGrid blogs={blogs} />

            <GenericCTA
                title="Ready to Optimize Your Supply Chain?"
                description="Contact our team today to discover how our innovative solutions can drive your business forward."
            />

            <Footer />
        </main>
    );
}
