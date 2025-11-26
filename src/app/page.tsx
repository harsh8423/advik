import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import Driven from "@/components/sections/Driven";
import OurServices from "@/components/sections/OurServices";
import Testimonials from "@/components/sections/Testimonials";
import Industries from "@/components/sections/Industries";
import JoinNetwork from "@/components/sections/JoinNetwork";
import NewsInsights from "@/components/sections/NewsInsights";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import LogisticsJourney from "@/components/sections/LogisticsJourney";
import LottieScroll from "@/components/sections/LottieScroll";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
    return (
        <main className="bg-dark min-h-screen text-light selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <Driven />
            <OurServices />
            <LogisticsJourney />
            <LottieScroll />
            <Gallery />
            <Testimonials />
            <Industries />
            <JoinNetwork />
            <NewsInsights />
            <FAQ />
            <Footer />
        </main>
    );
}
