"use client";

import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import AboutHero from "@/components/sections/AboutHero";
import MissionVision from "@/components/sections/MissionVision";
import CoreValues from "@/components/sections/CoreValues";
import OurPromise from "@/components/sections/OurPromise";

export default function AboutPage() {
    return (
        <main className="bg-dark min-h-screen text-light selection:bg-primary selection:text-white">
            <Navbar />
            <AboutHero />
            <MissionVision />
            <CoreValues />
            <OurPromise />
            <Footer />
        </main>
    );
}
