"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Zap } from "lucide-react";

const faqs = [
    {
        question: "What logistics services does Advik Freight offer?",
        answer: "Advik Freight offers a comprehensive range of logistics services including Drayage (port-to-warehouse transportation), Over-The-Road (OTR) trucking, Intermodal transport, Full Truckload (FTL) and Less-Than-Truckload (LTL) shipping, Temperature-controlled Reefer transport, and Warehousing & Transloading solutions. We tailor our services to meet your specific business needs."
    },
    {
        question: "How can I get started with your services?",
        answer: "Getting started is easy! Simply contact our team through our website, email, or phone. Our logistics experts will discuss your shipping requirements, provide a customized quote, and guide you through the onboarding process. We'll work with you to create a logistics solution that fits your budget and timeline."
    },
    {
        question: "Do you handle international and domestic shipments?",
        answer: "Yes, we handle both international and domestic shipments. Our extensive network and partnerships allow us to provide seamless logistics solutions across borders and within the country. Whether you're shipping locally or globally, we have the expertise and infrastructure to ensure your cargo arrives safely and on time."
    },
    {
        question: "What makes Advik Freight different from other logistics providers?",
        answer: "Advik Freight stands out through our commitment to reliability, advanced technology integration, 24/7 customer support, and personalized service. We combine modern tracking systems with experienced logistics professionals to deliver optimal solutions. Our focus on safety, efficiency, and transparency ensures your cargo is in the best hands every step of the way."
    },
    {
        question: "How long does shipping usually take?",
        answer: "Shipping times vary depending on the service type, origin, and destination. Drayage services typically take 1-2 days, OTR shipments range from 2-5 days for cross-country routes, while local deliveries can be completed within 24 hours. We provide accurate time estimates during booking and offer real-time tracking so you always know where your shipment is."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-32 bg-gradient-to-b from-dark via-black to-dark overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Two Column Layout on Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Header (Sticky on Desktop) */}
                    <div className="lg:sticky lg:top-32 lg:self-start">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <HelpCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                FAQ
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                            Everything You Should Know About
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-500 mb-6 leading-tight">
                            Advik Freight Logistics
                        </h3>
                        <p className="text-lg text-gray-400 leading-relaxed mb-8">
                            Find answers to common questions about our services and how we can help your business
                        </p>

                        {/* Bottom CTA - Desktop Only */}
                        <div className="hidden lg:block mt-8">
                            <p className="text-gray-400 mb-4">
                                Still have questions?
                            </p>
                            <button className="group relative px-8 py-3 bg-transparent border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden">
                                <span className="relative z-10">Contact Our Team</span>
                                <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </button>
                        </div>
                    </div>

                    {/* Right Column - FAQ Accordion */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="group relative"
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 rounded-2xl blur-sm transition-all duration-500" />

                                {/* Accordion Item */}
                                <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30">
                                    {/* Question Button */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between text-left transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4 flex-1 pr-4">
                                            {/* Icon */}
                                            <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center transition-all duration-300 ${openIndex === index ? "scale-110 rotate-3" : ""
                                                }`}>
                                                <Zap className="w-5 h-5 text-primary" />
                                            </div>

                                            {/* Question Text */}
                                            <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? "text-primary" : "text-white"
                                                }`}>
                                                {faq.question}
                                            </h3>
                                        </div>

                                        {/* Chevron Icon */}
                                        <ChevronDown
                                            className={`flex-shrink-0 w-6 h-6 text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Answer Section */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-6 pb-6 md:px-8 md:pb-8 pl-20 md:pl-24">
                                            <div className="relative">
                                                {/* Decorative line */}
                                                <div className="absolute -left-10 md:-left-14 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                                                {/* Answer Text */}
                                                <p className="text-gray-400 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Bottom CTA - Mobile Only */}
                        <div className="lg:hidden mt-8 text-center">
                            <p className="text-gray-400 mb-4">
                                Still have questions?
                            </p>
                            <button className="group relative px-8 py-3 bg-transparent border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300 overflow-hidden">
                                <span className="relative z-10">Contact Our Team</span>
                                <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
