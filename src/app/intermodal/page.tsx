import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import IntermodalHero from "@/components/sections/IntermodalHero";
import IntermodalIntro from "@/components/sections/IntermodalIntro";
import IntermodalFeatures from "@/components/sections/IntermodalFeatures";
import IntermodalWhyChoose from "@/components/sections/IntermodalWhyChoose";
import IntermodalCTA from "@/components/sections/IntermodalCTA";

export default function Intermodal() {
    return (
        <main className="bg-white min-h-screen text-advik-navy selection:bg-advik-red selection:text-white">
            <Navbar />
            <IntermodalHero />
            <IntermodalIntro />
            <IntermodalFeatures />
            <IntermodalWhyChoose />
            <IntermodalCTA />
            <Footer />
        </main>
    );
}
