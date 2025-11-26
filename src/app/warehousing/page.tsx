import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import WarehousingHero from "@/components/sections/WarehousingHero";
import WarehousingCubeSection from "@/components/sections/WarehousingCubeSection";
import WarehousingIndustries from "@/components/sections/WarehousingIndustries";
import WarehousingBenefits from "@/components/sections/WarehousingBenefits";
import WarehousingCommitment from "@/components/sections/WarehousingCommitment";

export default function Warehousing() {
    return (
        <main className="bg-dark min-h-screen text-light selection:bg-primary selection:text-white">
            <Navbar />
            <WarehousingHero />
            <WarehousingCubeSection />
            <WarehousingBenefits />
            <WarehousingIndustries />
            <WarehousingCommitment />
            <Footer />
        </main>
    );
}
