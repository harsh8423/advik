import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import RetailHero from "@/components/sections/RetailHero";
import RetailLogisticsSolutions from "@/components/sections/RetailLogisticsSolutions";
import RetailServicesGrid from "@/components/sections/RetailServicesGrid";
import RetailCTA from "@/components/sections/RetailCTA";

export default function Retail() {
    return (
        <main className="bg-white min-h-screen text-advik-navy selection:bg-advik-red selection:text-white">
            <Navbar />
            <RetailHero />
            <RetailLogisticsSolutions />
            <RetailServicesGrid />
            <RetailCTA />
            <Footer />
        </main>
    );
}
