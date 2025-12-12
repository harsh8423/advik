import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import GenericHero from "@/components/sections/common/GenericHero";
import GenericLogisticsSolutions from "@/components/sections/common/GenericLogisticsSolutions";
import GenericServicesGrid from "@/components/sections/common/GenericServicesGrid";
import GenericCTA from "@/components/sections/common/GenericCTA";
import { industries } from "@/data/industries";

export default function FoodBeverage() {
    const data = industries["food-beverage"];

    return (
        <main className="bg-white min-h-screen text-advik-navy selection:bg-advik-red selection:text-white">
            <Navbar />
            <GenericHero
                title={data.title}
                subtitle="Logistics"
                image={data.heroImage}
                description={data.heroDesc}
            />
            <GenericLogisticsSolutions
                title={data.solutionsTitle}
                description={data.solutionsDesc}
                subDescription={data.solutionsSubDesc}
                features={data.features}
            />
            <GenericServicesGrid
                title={data.servicesTitle}
                services={data.services}
            />
            <GenericCTA
                title={data.ctaTitle}
                description={data.ctaDesc}
            />
            <Footer />
        </main>
    );
}
