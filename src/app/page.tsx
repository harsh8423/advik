import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";

import OurServices from "@/components/sections/OurServices";
import Testimonials from "@/components/sections/Testimonials";

import ShipWithUsCTA from "@/components/sections/ShipWithUsCTA";

import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
import NetworkCoverage from "@/components/sections/NetworkCoverage";
import NewGallery from "@/components/sections/NewGallery";

import ProcessWorkflow from "@/components/sections/ProcessWorkflow";





export default function Home() {
    return (
        <main className="bg-dark min-h-screen text-light selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <NetworkCoverage />
            <OurServices />
            <ProcessWorkflow />

            <NewGallery />
            <Testimonials />
            <ShipWithUsCTA />
            <FAQ />
            <Footer />
        </main>
    );
}
