import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";

import OurServices from "@/components/sections/OurServices";
import Testimonials from "@/components/sections/Testimonials";

import JoinNetwork from "@/components/sections/JoinNetwork";

import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import NetworkCoverage from "@/components/sections/NetworkCoverage";
import NewGallery from "@/components/sections/NewGallery";

import ProcessWorkflow from "@/components/sections/ProcessWorkflow";
import NewIndustries from "@/components/sections/NewIndustries";




export default function Home() {
    return (
        <main className="bg-dark min-h-screen text-light selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <NetworkCoverage />
            <OurServices />
            <ProcessWorkflow />
            <NewIndustries />
            <NewGallery />
            <Testimonials />
            <JoinNetwork />
            <FAQ />
            <Footer />
        </main>
    );
}
