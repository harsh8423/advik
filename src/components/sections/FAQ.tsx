"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Zap } from "lucide-react";

const faqs = [
    {
        question: "What transportation services does Advik Freight offer?",
        answer: "We offer comprehensive multimodal solutions including Intermodal, Full Truckload (FTL), Less-Than-Truckload (LTL), Dedicated Contract Services, Flatbed, Reefer, Drayage, Power-Only, and Warehousing. Our mode-neutral approach means we match your freight with the right solution for cost, speed, and reliability."
    },
    {
        question: "How does your technology platform provide visibility?",
        answer: "Our advanced logistics platform provides real-time tracking and visibility at every step of the transportation process. You can monitor shipment status, receive proactive updates, access performance analytics, and manage all your freight from a single dashboard—eliminating inefficiencies in your supply chain."
    },
    {
        question: "What's the difference between FTL and LTL shipping?",
        answer: "Full Truckload (FTL) gives you exclusive use of a trailer—ideal for large shipments (10+ pallets) or high-value cargo requiring faster, direct delivery. Less-Than-Truckload (LTL) consolidates your freight with other shipments, making it cost-effective for smaller loads (1-6 pallets) with flexible scheduling."
    },
    {
        question: "How do you customize solutions for my business?",
        answer: "We take time to understand your business, your pain points, and your unique requirements. Our team designs tailored transportation strategies—whether you need dedicated fleet services, managed logistics, or multimodal solutions—to optimize your supply chain and reduce overall freight expenses."
    },
    {
        question: "What industries do you serve?",
        answer: "We serve diverse industries including Manufacturing, Retail & E-Commerce, Food & Beverage, Pharmaceuticals, Automotive, Construction, Renewable Energy, and more. Our experienced team understands industry-specific requirements for temperature control, specialized handling, compliance, and time-sensitive deliveries."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative py-32 bg-gradient-to-b from-background via-secondary to-background overflow-hidden">
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
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                            Everything You Should Know About
                        </h2>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-400 to-orange-500 mb-6 leading-tight">
                            Advik Freight Logistics
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                            Find answers to common questions about our services and how we can help your business
                        </p>

                        {/* Bottom CTA - Desktop Only */}
                        <div className="hidden lg:block mt-8">
                            <p className="text-muted-foreground mb-4">
                                Still have questions?
                            </p>
                            <button className="group relative px-8 py-3 bg-transparent border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden">
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
                                <div className="relative bg-gradient-to-br from-card/50 via-card/30 to-transparent backdrop-blur-xl border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/30">
                                    {/* Question Button */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full px-5 py-4 flex items-center justify-between text-left transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-3 flex-1 pr-4">
                                            {/* Question Text */}
                                            <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 ${openIndex === index ? "text-primary" : "text-foreground"
                                                }`}>
                                                {faq.question}
                                            </h3>
                                        </div>

                                        {/* Chevron Icon */}
                                        <ChevronDown
                                            className={`flex-shrink-0 w-5 h-5 text-primary transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                                }`}
                                        />
                                    </button>

                                    {/* Answer Section */}
                                    <div
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="px-5 pb-5 pl-5 md:pl-6">
                                            <div className="relative">
                                                {/* Decorative line */}
                                                <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

                                                {/* Answer Text */}
                                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
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
                            <p className="text-muted-foreground mb-4">
                                Still have questions?
                            </p>
                            <button className="group relative px-8 py-3 bg-transparent border-2 border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden">
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
