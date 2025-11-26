import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import DrayageHero from "@/components/sections/DrayageHero";
import DrayageCubeSection from "@/components/sections/DrayageCubeSection";
import DrayageBenefits from "@/components/sections/DrayageBenefits";
import DrayageIndustries from "@/components/sections/DrayageIndustries";
import DrayageWhyChoose from "@/components/sections/DrayageWhyChoose";
import DrayageCommitment from "@/components/sections/DrayageCommitment";


export default function Drayage() {
    return (
        <main className="bg-dark min-h-screen text-light selection:bg-primary selection:text-white">
            <Navbar />
            <DrayageHero />
            <DrayageCubeSection />
            <DrayageBenefits />
            <DrayageIndustries />
            <DrayageWhyChoose />
            <DrayageCommitment />
            <Footer />
        </main>
    );
}
