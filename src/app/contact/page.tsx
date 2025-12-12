import JoinNetwork from "@/components/sections/JoinNetwork";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/sections/Footer";

export default function ContactPage() {
    return (
        <main className="bg-dark min-h-screen text-light selection:bg-primary selection:text-white">
            <Navbar />
            <div className="pt-24">
                <JoinNetwork />
            </div>
            <Footer />
        </main>
    );
}
