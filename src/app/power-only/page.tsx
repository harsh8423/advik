import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";
import GenericHero from "@/components/sections/common/GenericHero";
import GenericIntro from "@/components/sections/common/GenericIntro";
import GenericFeatures from "@/components/sections/common/GenericFeatures";
import GenericWhyChoose from "@/components/sections/common/GenericWhyChoose";
import GenericCTA from "@/components/sections/common/GenericCTA";
import { services } from "@/data/services";

export default function PowerOnly() {
    const data = services["power-only"];

    return (
        <main className="bg-white min-h-screen text-advik-navy selection:bg-advik-red selection:text-white">
            <Navbar />
            <GenericHero
                title={data.title}
                subtitle="Trucking"
                image={data.heroImage}
                description={data.heroDesc}
            />
            <GenericIntro
                title={data.introTitle}
                description={data.introDesc}
                image={data.introImage}
            />
            <GenericFeatures
                services={data.features.services}
                whenToChoose={data.features.whenToChoose}
                benefits={data.features.benefits}
            />
            <GenericWhyChoose
                title={data.whyChoose.title}
                description={data.whyChoose.desc}
                reasons={data.whyChoose.reasons}
                ctaTitle={data.whyChoose.ctaTitle}
                ctaDesc={data.whyChoose.ctaDesc}
            />
            <GenericCTA
                title={data.ctaTitle}
                description={data.ctaDesc}
            />
            <Footer />
        </main>
    );
}
